// Create a WeakMap instance
export const weakMap = new WeakMap();

// Function to track the number of times queryAPI is called for each endpoint
export function queryAPI(endpoint) {
  // Check if the endpoint exists in the weakMap, if not initialize it with a count of 1
  if (!weakMap.has(endpoint)) {
    weakMap.set(endpoint, 1);
  } else {
    // If the endpoint exists, increment its count
    const count = weakMap.get(endpoint) + 1;
    weakMap.set(endpoint, count);

    // If the count is >= 5, throw an error
    if (count >= 5) {
      throw new Error('Endpoint load is high');
    }
  }
}
