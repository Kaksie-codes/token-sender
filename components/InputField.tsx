import React from 'react';

type InputFieldProps = {
  label: string;
  name: string;
  type?: 'text' | 'password' | 'email' | 'textarea';
  placeholder?: string;
  value?: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void;
  disabled?: boolean;
  required?: boolean;
  error?: string;
  rows?: number;
  className?: string;
};

const InputField: React.FC<InputFieldProps> = ({
  label,
  name,
  type = 'text',
  placeholder = '',
  value,
  onChange,
  disabled = false,
  required = false,
  error,
  rows = 4,
  className = '',
}) => {
  const baseStyles =
    'w-full px-4 py-2.5 rounded-lg border bg-white text-gray-900 placeholder-gray-400 transition-all duration-200 outline-none';
  const focusStyles =
    'focus:ring-2 focus:ring-blue-500 focus:border-blue-500';
  const disabledStyles =
    'disabled:bg-gray-100 disabled:text-gray-400 disabled:cursor-not-allowed';
  const errorStyles = error
    ? 'border-red-500 focus:ring-red-500 focus:border-red-500'
    : 'border-gray-300';

  const inputClasses = `${baseStyles} ${focusStyles} ${disabledStyles} ${errorStyles} ${className}`;

  return (
    <div className="w-full flex flex-col gap-1.5">
      <label
        htmlFor={name}
        className="text-sm font-medium text-gray-700"
      >
        {label}
        {required && <span className="text-red-500 ml-0.5">*</span>}
      </label>
      {type === 'textarea' ? (
        <textarea
          id={name}
          name={name}
          placeholder={placeholder}
          value={value}
          onChange={onChange}
          disabled={disabled}
          required={required}
          rows={rows}
          className={`${inputClasses} resize-none`}
        />
      ) : (
        <input
          id={name}
          name={name}
          type={type}
          placeholder={placeholder}
          value={value}
          onChange={onChange}
          disabled={disabled}
          required={required}
          className={inputClasses}
        />
      )}
      {error && (
        <span className="text-xs text-red-500 mt-0.5">{error}</span>
      )}
    </div>
  );
};

export default InputField;
