import { fireEvent, render, screen } from '@testing-library/react';
import { KeyField } from './KeyField';

describe('KeyField', () => {
  beforeEach(() => {
    vi.useFakeTimers();
  });

  afterEach(() => {
    vi.useRealTimers();
  });

  it('shows the initial value', () => {
    render(<KeyField value="ORD-1" onChange={vi.fn()} />);

    expect(screen.getByLabelText('Order key')).toHaveValue('ORD-1');
  });

  it('reports typed text once the user pauses', () => {
    const onChange = vi.fn();
    render(<KeyField value="" onChange={onChange} />);

    fireEvent.change(screen.getByLabelText('Order key'), { target: { value: 'ORD-2' } });
    expect(onChange).not.toHaveBeenCalled();

    vi.advanceTimersByTime(300);
    expect(onChange).toHaveBeenCalledWith('ORD-2');
  });
});
