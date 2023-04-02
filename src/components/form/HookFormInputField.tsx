import React, { ChangeEvent } from 'react';
import { Controller } from 'react-hook-form';
import GenericInput from './GenericInput';

interface IHookFormInputFieldProps {
  control: any;
  name: string;
  type?: 'text' | 'number';
  label: string;
  className?: string;
  disabled?: boolean;
  onInputChange?: (e: ChangeEvent<HTMLInputElement>, name: string) => void;
}
function HookFormInputField({
  control,
  name,
  type = 'text',
  label,
  className,
  disabled,
  onInputChange,
}: IHookFormInputFieldProps): React.ReactElement {
  const handleChange = (
    e: ChangeEvent<HTMLInputElement>,
    onChange: any,
    name: string
  ) => {
    onChange(e);
    onInputChange && onInputChange(e, name);
  };

  return (
    <Controller
      control={control}
      name={name}
      render={({ field: { value, onChange } }) => (
        <GenericInput
          className={className}
          value={value}
          onChange={(e) => handleChange(e, onChange, name)}
          type={type}
          label={label}
          disabled={disabled}
        />
      )}
    />
  );
}

export default HookFormInputField;
