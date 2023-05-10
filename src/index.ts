export function once<T>(fn: (...args: any[]) => T): (...args: any[]) => T {
  let called = false;
  let result: T;
  return (...args: any[]) => {
    if (!called) {
      called = true;
      result = fn(...args);
    }

    return result;
  };
}
