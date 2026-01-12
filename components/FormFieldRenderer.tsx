
import React from 'react';
import { FormField } from '../types';

interface FormFieldRendererProps {
  field: FormField;
  value: any;
  onChange: (id: string, value: any) => void;
}

export const FormFieldRenderer: React.FC<FormFieldRendererProps> = ({ field, value, onChange }) => {
  const commonClasses = "mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm p-2 border bg-white";

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
