import { TextField } from '@mui/material';
import { ChangeEvent, useCallback } from 'react';

export type KeyFieldProps = {
  value: string;
  onChange: (value: string) => void;
};

/**
 * Text field for business keys such as order numbers.
 */
export function KeyField({ value, onChange }: KeyFieldProps) {
  const handleChange = useCallback(
    (event: ChangeEvent<HTMLInputElement>) => {
      onChange(event.target.value);
    },
    [onChange],
  );

  return <TextField label="Order key" defaultValue={value} onChange={handleChange} />;
}
