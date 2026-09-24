import { fireEvent, render, screen } from '@testing-library/react';
import { KeyField } from './KeyField';

describe('KeyField', () => {
  it('shows the given value', () => {
    render(<KeyField label="Order key" value="ORD-1" onChange={vi.fn()} />);

    expect(screen.getByRole('textbox')).toHaveValue('ORD-1');
  });

  it('reports typed text to the parent', () => {
    const onChange = vi.fn();
    render(<KeyField label="Order key" value="" onChange={onChange} />);

    fireEvent.change(screen.getByRole('textbox'), { target: { value: 'ORD-2' } });

    expect(onChange).toHaveBeenCalledWith('ORD-2');
  });
});
