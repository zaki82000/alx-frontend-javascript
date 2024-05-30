export default function iterateThroughObject(reportWithIterator) {
  let result = '';
  for (const name of reportWithIterator) {
    if (result) {
      result += ` | ${name}`;
    } else {
      result = name;
    }
  }
  return result;
}
