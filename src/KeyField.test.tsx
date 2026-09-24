import { fireEvent, render, screen } from '@testing-library/react';
import { KeyField } from './KeyField';

describe('KeyField', () => {
  it('shows the given value', () => {
    render(<KeyField value="ORD-1" onChange={vi.fn()} />);

    expect(screen.getByLabelText('Order key')).toHaveValue('ORD-1');
  });

  it('reports typed text to the parent', () => {
    const onChange = vi.fn();
    render(<KeyField value="" onChange={onChange} />);

    fireEvent.change(screen.getByLabelText('Order key'), { target: { value: 'ORD-2' } });

    expect(onChange).toHaveBeenCalledWith('ORD-2');
  });
});
