/* eslint-disable */
export default function getFullResponseFromAPI(success) {
  return new Promise((resolve, reject) => {
    if (success) {
      resolve({
        status: 200,
        body: "Success",
      });
    } else {
      // the new Error object
      const error = new Error("The fake API is not working currently");
      reject(error);
    }
  });
}

// then and catch methods
getFullResponseFromAPI(true)
  .then((message) => {
    console.log("Succeed" + message);
  })
  .catch((err) => {
    console.log("Error" + err);
  });
