
export interface FormField {
  id: string;
  label: string;
  type: 'text' | 'number' | 'email' | 'tel' | 'url' | 'select' | 'textarea' | 'boolean' | 'percentage' | 'rating' | 'rich-text';
  options?: string[];
  placeholder?: string;
}

export interface FormGroup {
  id: string;
  title: string;
  description: string;
  fields: FormField[];
}

export type FormState = Record<string, any>;
