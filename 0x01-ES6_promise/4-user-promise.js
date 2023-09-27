/* eslint-disable */

function signUpUser(firstName, lastName) {
  return new Promise((resolve, reject) => {
    if (firstName && lastName) {
      resolve({
        firstName: firstName,
        lastName: lastName,
      });
    } else {
      const error = new Error();
      reject(error);
    }
  });
}

signUpUser("Bob", "Dylan")
  .then((user) => {
    console.log(user);
  })
  .catch((error) => {
    console.log(error);
  });
