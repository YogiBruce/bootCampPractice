const apiCallDurations = [3000, 4000, 5000, 6000];
const maxDuration = 9999;

const callAPI = (duration) =>
  new Promise((resolve, reject) => {
    if (duration > maxDuration) {
      reject(new Error('Timed out'));
    } else {
      setTimeout(() => {
        resolve(`Resolved after ${duration} ms!`);
      }, duration);
    }
  });

const promises = apiCallDurations.map((duration) => callAPI(duration));

console.log('Promises array before the timeouts have finished: ', promises);

// TODO: Use Promise.all() to capture when the array of promises has been resolved or if any of them were rejected

Promise.all(promises)
  .then((results) => {
    console.log("Results: \n");
    console.log(results)
  })
  .catch((error) => console.log(error))
