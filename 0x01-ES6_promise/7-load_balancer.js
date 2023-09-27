/* eslint-disable */
export default function loadBalancer(chinaDownload, USDownload) {
  // Create a new promise to race between the two promises
  return Promise.race([chinaDownload, USDownload]);
}
