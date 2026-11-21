// Synthetic fixture, unrelated to product code.
// Counts only complete groups. Inputs are nonnegative safe integers, and size must be positive.
export function wholeGroups(total, size) {
  if (!Number.isSafeInteger(total) || !Number.isSafeInteger(size) || total < 0 || size <= 0) {
    throw new RangeError("Expected a nonnegative total and a positive group size");
  }
  return Math.floor(total / size);
}
