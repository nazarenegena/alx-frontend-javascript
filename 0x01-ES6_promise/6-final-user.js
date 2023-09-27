/* eslint-disable */
import { signUpUser } from "./4-user-promise.js";
import { uploadPhoto } from "./5-photo-reject.js";

// Define the handleProfileSignup function
export async function handleProfileSignup(firstName, lastName, fileName) {
  try {
    // Call the signUpUser and uploadPhoto functions concurrently
    const [userPromise, photoPromise] = await Promise.allSettled([
      signUpUser(firstName, lastName),
      uploadPhoto(fileName),
    ]);

    // Create an array to store the results
    const results = [];

    // Add the result of the signUpUser function to the results array
    results.push({
      status: userPromise.status,
      value:
        userPromise.status === "fulfilled"
          ? userPromise.value
          : userPromise.reason,
    });

    // Add the result of the uploadPhoto function to the results array
    results.push({
      status: photoPromise.status,
      value:
        photoPromise.status === "fulfilled"
          ? photoPromise.value
          : photoPromise.reason,
    });

    return results;
  } catch (error) {
    // Handle any unexpected errors here
    console.error(error);
    throw error;
  }
}
