/* eslint-disable */

function handleResponseFromAPI(promise) {
  return new Promise((resolve, reject) => {
    if (promise) {
      resolve({
        status: 200,
        body: "success",
      });
    } else {
      const error = new Error();
      reject(error);
    }
  });
}

// the catch and then methods
handleResponseFromAPI(true)
  .then((response) => {
    console.log("Got a response from the API" + response);
  })
  .then((response) => {
    console.log("Got a response from the API" + response);
  })
  .catch((err) => {
    console.log("Error" + err);
  });

const promise = Promise.resolve();
handleResponseFromAPI(promise);
