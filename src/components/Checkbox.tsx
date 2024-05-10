import React from 'react';

interface CheckboxProps {
  label: string;
  checked: boolean;
  onChange: (checked: boolean) => void;
}

const Checkbox: React.FC<CheckboxProps> = ({ label, checked, onChange }) => {
  const handleLabelClick = () => {
    onChange(!checked);
  };

  return (
    <div className="flex items-center">
      <input
        type="checkbox"
        checked={checked}
        onChange={(e) => onChange(e.target.checked)}
        className="mr-2 form-checkbox peer relative appearance-none w-5 h-5 border rounded-full border-green-400 cursor-pointer checked:bg-green-600"
      />
      <label
        className="font-semibold text-lg cursor-pointer"
        onClick={handleLabelClick}
      >
        <span
          className={`peer-checked:text-green-600 ${
            checked ? 'line-through decoration-green-600' : ''
          }`}
        >
          {label}
        </span>
      </label>
    </div>
  );
};

export default Checkbox;