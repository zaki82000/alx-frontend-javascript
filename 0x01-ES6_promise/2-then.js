export default function handleResponseFromAPI(promise) {
  const data = {
    status: 200,
    body: 'success',
  };
  return promise
    .then(() => data)
    .catch(() => new Error())
    .finally(() => console.log('Got a response from the API'));
}
