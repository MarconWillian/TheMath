import {
  numberCorrectional,
  numberCorrectionalBigger
} from '../../src/utils/numberCorrectional';

describe('Create correctional number of error dot float', () => {
  it('if send 0.001 need return 1000', () => {
    const correctional = numberCorrectional(0.001);

    expect(correctional).toBe(1000);
  });

  it('if send 0.07 need return 100', () => {
    const correctional = numberCorrectional(0.07);

    expect(correctional).toBe(100);
  });

  it('if send 0.000000001 need return 1000000000', () => {
    const correctional = numberCorrectional(0.000000001);

    expect(correctional).toBe(1000000000);
  });

  it('if send 0.07 and 0.3 need return bigger 100', () => {
    const correctional = numberCorrectionalBigger(0.07, 0.3);

    expect(correctional).toBe(100);
  });

  it('if send 0.7 and 0.003 need return bigger 1000', () => {
    const correctional = numberCorrectionalBigger(0.7, 0.003);

    expect(correctional).toBe(1000);
  });
});
