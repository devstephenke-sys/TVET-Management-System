
import React, { useState, useCallback } from 'react';
import { DATA_GROUPS } from './constants';
import { FormState } from './types';
import { FormFieldRenderer } from './components/FormFieldRenderer';

const App: React.FC = () => {
  const [activeTab, setActiveTab] = useState(DATA_GROUPS[0].id);
  const [formData, setFormData] = useState<FormState>({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleFieldChange = useCallback((id: string, value: any) => {
    setFormData(prev => ({ ...prev, [id]: value }));
  }, []);

  const activeGroup = DATA_GROUPS.find(g => g.id === activeTab) || DATA_GROUPS[0];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    // Simulate API call
    setTimeout(() => {
      console.log('Final Form Data:', formData);
      alert('Data saved successfully! (Check console for output)');
      setIsSubmitting(false);
    }, 1500);
  };

  const calculateProgress = () => {
    const totalFields = DATA_GROUPS.reduce((acc, g) => acc + g.fields.length, 0);
    const filledFields = Object.values(formData).filter(v => v !== undefined && v !== '').length;
    return Math.round((filledFields / totalFields) * 100);
  };

  return (
    <div className="min-h-screen flex flex-col md:flex-row">
      {/* Sidebar Navigation */}
      <nav className="w-full md:w-64 bg-slate-900 text-white flex-shrink-0 sticky top-0 md:h-screen overflow-y-auto">
        <div className="p-6">
          <h1 className="text-xl font-bold text-indigo-400">TVET Manager</h1>
          <p className="text-xs text-slate-400 mt-1 uppercase tracking-wider">Data Entry Portal</p>
        </div>

        <div className="mt-2">
          {DATA_GROUPS.map((group) => (
            <button
              key={group.id}
              onClick={() => setActiveTab(group.id)}
              className={`w-full text-left px-6 py-3 text-sm font-medium transition-colors border-l-4 ${
                activeTab === group.id
                  ? 'bg-indigo-600/20 text-indigo-400 border-indigo-500'
                  : 'text-slate-400 border-transparent hover:bg-slate-800 hover:text-white'
              }`}
            >
              {group.title}
            </button>
          ))}
        </div>

        <div className="p-6 mt-auto border-t border-slate-800">
          <div className="flex justify-between items-center mb-2">
            <span className="text-xs text-slate-400">Total Completion</span>
            <span className="text-xs font-bold text-indigo-400">{calculateProgress()}%</span>
          </div>
          <div className="w-full bg-slate-800 rounded-full h-1.5">
            <div 
              className="bg-indigo-500 h-1.5 rounded-full transition-all duration-500" 
              style={{ width: `${calculateProgress()}%` }}
            ></div>
          </div>
        </div>
      </nav>

      {/* Main Content Area */}
      <main className="flex-1 p-6 md:p-10 max-w-5xl mx-auto w-full">
        <header className="mb-8">
          <h2 className="text-3xl font-bold text-gray-900">{activeGroup.title}</h2>
          <p className="mt-2 text-gray-600">{activeGroup.description}</p>
        </header>

        <form onSubmit={handleSubmit} className="space-y-8 bg-white p-8 rounded-xl shadow-sm border border-gray-100">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-6">
            {activeGroup.fields.map((field) => (
              <div key={field.id} className={field.type === 'textarea' ? 'md:col-span-2' : ''}>
                <label htmlFor={field.id} className="block text-sm font-semibold text-gray-700">
                  {field.label}
                </label>
                <FormFieldRenderer 
                  field={field} 
                  value={formData[field.id]} 
                  onChange={handleFieldChange} 
                />
              </div>
            ))}
          </div>

          <div className="pt-6 border-t flex flex-col sm:flex-row justify-between items-center gap-4">
            <div className="text-sm text-gray-500 italic">
              * Your changes are stored locally until you submit.
            </div>
            <div className="flex space-x-3 w-full sm:w-auto">
              {DATA_GROUPS.indexOf(activeGroup) > 0 && (
                <button
                  type="button"
                  onClick={() => setActiveTab(DATA_GROUPS[DATA_GROUPS.indexOf(activeGroup) - 1].id)}
                  className="px-4 py-2 border border-gray-300 rounded-md text-sm font-medium text-gray-700 bg-white hover:bg-gray-50"
                >
                  Previous
                </button>
              )}
              {DATA_GROUPS.indexOf(activeGroup) < DATA_GROUPS.length - 1 ? (
                <button
                  type="button"
                  onClick={() => setActiveTab(DATA_GROUPS[DATA_GROUPS.indexOf(activeGroup) + 1].id)}
                  className="px-6 py-2 bg-indigo-600 text-white rounded-md text-sm font-medium hover:bg-indigo-700 shadow-sm"
                >
                  Next Section
                </button>
              ) : (
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="px-6 py-2 bg-green-600 text-white rounded-md text-sm font-medium hover:bg-green-700 shadow-sm disabled:opacity-50 disabled:cursor-not-wait"
                >
                  {isSubmitting ? 'Saving Data...' : 'Submit Complete Form'}
                </button>
              )}
            </div>
          </div>
        </form>

        <footer className="mt-12 py-6 border-t border-gray-200 flex justify-between items-center">
          <p className="text-sm text-gray-500">&copy; 2024 TVET Management Systems. All rights reserved.</p>
          <div className="flex space-x-4">
            <span className="text-xs bg-indigo-100 text-indigo-700 px-2 py-1 rounded">Draft Mode</span>
            <span className="text-xs bg-gray-100 text-gray-700 px-2 py-1 rounded">V1.2.0</span>
          </div>
        </footer>
      </main>
    </div>
  );
};

export default App;
