export default function getResponseFromAPI() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (true) {
        const data = { message: 'Success!' };
        resolve(data);
      } else {
        const error = new Error('Error');
        reject(error);
      }
    }, 1000);
  });
}
