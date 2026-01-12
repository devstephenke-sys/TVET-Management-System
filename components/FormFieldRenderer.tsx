
import React from 'react';
import { FormField } from '../types';

interface FormFieldRendererProps {
  field: FormField;
  value: any;
  onChange: (id: string, value: any) => void;
}

export const FormFieldRenderer: React.FC<FormFieldRendererProps> = ({ field, value, onChange }) => {
  const commonClasses = "mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm p-2 border";

  switch (field.type) {
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
        <div className="flex items-center space-x-4 mt-2">
          <label className="inline-flex items-center">
            <input
              type="radio"
              name={field.id}
              checked={value === true}
              onChange={() => onChange(field.id, true)}
              className="h-4 w-4 text-indigo-600 border-gray-300 focus:ring-indigo-500"
            />
            <span className="ml-2 text-sm text-gray-700">Yes</span>
          </label>
          <label className="inline-flex items-center">
            <input
              type="radio"
              name={field.id}
              checked={value === false}
              onChange={() => onChange(field.id, false)}
              className="h-4 w-4 text-indigo-600 border-gray-300 focus:ring-indigo-500"
            />
            <span className="ml-2 text-sm text-gray-700">No</span>
          </label>
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
          <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-3 mt-1">
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
