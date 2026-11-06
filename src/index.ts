export function hasEmailShape(value: string): boolean {
  if (typeof value !== 'string') throw new TypeError('Expected text');
  if (value.length > 254) return false;
  return /^[A-Za-z0-9.!#$%&'*+/=?^_`{|}~-]+@[A-Za-z0-9](?:[A-Za-z0-9-]*[A-Za-z0-9])?(?:\.[A-Za-z0-9](?:[A-Za-z0-9-]*[A-Za-z0-9])?)+$/u.test(
    value,
  );
}
