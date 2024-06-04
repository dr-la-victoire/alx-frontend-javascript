export default function cleanSet(set, startString) {
  let str = '';
  let remainingPart;
  let firstElement = true;

  if (startString === '') {
    return '';
  }

  for (const element of set) {
    if (element.startsWith(startString)) {
      if (firstElement) {
        remainingPart = element.slice(startString.length);
        str += remainingPart;
        firstElement = false;
      } else {
        remainingPart = element.slice(startString.length);
        str += `-${remainingPart}`;
      }
    }
  }

  return str;
}
