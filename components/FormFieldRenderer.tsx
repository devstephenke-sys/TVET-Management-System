
import React, { useRef } from 'react';
import { FormField } from '../types';

interface FormFieldRendererProps {
  field: FormField;
  value: any;
  onChange: (id: string, value: any) => void;
}

const RichTextEditor: React.FC<{ value: string; onChange: (v: string) => void; placeholder?: string }> = ({ value, onChange, placeholder }) => {
  const editorRef = useRef<HTMLDivElement>(null);

  const handleCommand = (command: string) => {
    document.execCommand(command, false);
    editorRef.current?.focus();
  };

  const handleInput = () => {
    if (editorRef.current) {
      onChange(editorRef.current.innerHTML);
    }
  };

  return (
    <div className="mt-1 border border-gray-300 rounded-md overflow-hidden bg-white shadow-sm">
      <div className="flex border-b border-gray-200 bg-gray-50 p-1.5 space-x-2">
        <button
          type="button"
          onClick={() => handleCommand('bold')}
          className="p-1 px-3 hover:bg-gray-200 rounded text-gray-700 font-bold border border-gray-300 bg-white transition-colors"
          title="Bold"
        >
          B
        </button>
        <button
          type="button"
          onClick={() => handleCommand('insertUnorderedList')}
          className="p-1 px-2 hover:bg-gray-200 rounded text-gray-700 border border-gray-300 bg-white transition-colors flex items-center"
          title="Bullet Points"
        >
          <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
            <path fillRule="evenodd" d="M3 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clipRule="evenodd" />
          </svg>
        </button>
      </div>
      <div
        ref={editorRef}
        contentEditable
        onInput={handleInput}
        onBlur={handleInput}
        dangerouslySetInnerHTML={{ __html: value || '' }}
        className="p-3 min-h-[140px] focus:outline-none text-sm prose prose-sm max-w-none prose-slate"
        data-placeholder={placeholder}
      />
    </div>
  );
};

export const FormFieldRenderer: React.FC<FormFieldRendererProps> = ({ field, value, onChange }) => {
  const commonClasses = "mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm p-2 border bg-white";

  switch (field.type) {
    case 'rich-text':
      return (
        <RichTextEditor 
          value={value} 
          onChange={(v) => onChange(field.id, v)} 
          placeholder={field.placeholder} 
        />
      );
    case 'textarea':
      return (
        <textarea
          id={field.id}
          value={value || ''}
          onChange={(e) => onChange(field.id, e.target.value)}
          placeholder={field.placeholder}
          rows={3}
          className={commonClasses}
        />
      );
    case 'select':
      return (
        <select
          id={field.id}
          value={value || ''}
          onChange={(e) => onChange(field.id, e.target.value)}
          className={commonClasses}
        >
          <option value="">Select an option</option>
          {field.options?.map((opt) => (
            <option key={opt} value={opt}>{opt}</option>
          ))}
        </select>
      );
    case 'boolean':
      return (
        <select
          id={field.id}
          value={value === true ? 'true' : value === false ? 'false' : ''}
          onChange={(e) => {
            const val = e.target.value;
            onChange(field.id, val === 'true' ? true : val === 'false' ? false : undefined);
          }}
          className={commonClasses}
        >
          <option value="">Select...</option>
          <option value="true">Yes</option>
          <option value="false">No</option>
        </select>
      );
    case 'rating':
      return (
        <div className="flex items-center space-x-2 mt-2">
          {[1, 2, 3, 4, 5].map((star) => (
            <button
              key={star}
              type="button"
              onClick={() => onChange(field.id, star)}
              className={`focus:outline-none transition-transform hover:scale-110 ${
                (value || 0) >= star ? 'text-yellow-400' : 'text-gray-300'
              }`}
            >
              <svg 
                className="w-8 h-8 fill-current" 
                viewBox="0 0 20 20" 
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
              </svg>
            </button>
          ))}
          <span className="text-sm font-medium text-gray-500 ml-2">
            {value ? `${value} / 5` : 'No rating'}
          </span>
        </div>
      );
    case 'percentage':
      return (
        <div className="relative mt-1 rounded-md shadow-sm">
          <input
            type="number"
            id={field.id}
            value={value || ''}
            onChange={(e) => onChange(field.id, e.target.value)}
            className={commonClasses}
            min="0"
            max="100"
          />
          <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-3">
            <span className="text-gray-500 sm:text-sm">%</span>
          </div>
        </div>
      );
    default:
      return (
        <input
          type={field.type}
          id={field.id}
          value={value || ''}
          onChange={(e) => onChange(field.id, e.target.value)}
          placeholder={field.placeholder}
          className={commonClasses}
        />
      );
  }
};
