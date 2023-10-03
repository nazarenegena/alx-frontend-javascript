export default function cleanSet(set, startString) {
  let word = "";
  const arrayText = [];

  if (startString && typeof startString === "string") {
    for (const element of set) {
      if (element && element.startsWith(startString)) {
        arrayText.push(element.slice(startString.length));
      }
    }
    word = arrayText.join("-");
  }
  return word;
}
