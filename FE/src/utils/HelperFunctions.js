export const getTitleAsArray = title => {
  if (title && typeof title === 'string' && title.length > 2) {
    return title.split('\\s');
  }
  return ['', ''];
};

export const cutFirstWord = title => {
  const word = [];
  if (
    title &&
    typeof title === 'string' &&
    title.length > 2 &&
    title.indexOf(' ') !== -1
  ) {
    word.push(title.substring(0, title.indexOf(' ')));
    word.push(title.substring(title.indexOf(' '), title.length));
    return word;
  }
  return [title, ''];
};

export const getTrailingZero = number => {
  if ((number && typeof number === 'string') || typeof number === 'number') {
    const stringNumber = number.toString();
    if (stringNumber.length === 1) {
      return `0${stringNumber}`;
    }
    return stringNumber;
  }
  return '';
};

export const isValidArray = array => Array.isArray(array) && array.length > 0;

export const isGoodString = (string, length) =>
  string && typeof string === 'string' && string.length > (length || 0);

export const isValidObject = obj =>
  obj && typeof obj === 'object' && obj === Object(obj) && obj !== null;

export const isDOMElement = element => element && element instanceof Element;

export function isGoodFunction(functionToCheck) {
  return (
    functionToCheck && {}.toString.call(functionToCheck) === '[object Function]'
  );
}

export const getTimeString = times => {
  let timeString = '';
  if (isValidObject(times)) {
    Object.keys(times).map(key => {
      timeString = `${timeString} ${times[key]} ${key}`;
      return key;
    });
  }
  return timeString;
};

export const getHoursAndMinutes = date => {
  if (isValidObject(date) && date.isValid && date.isValid()) {
    return date.format('HH:mm');
  }
  return '';
};

export const getDateOnly = date => {
  if (isValidObject(date) && date.isValid && date.isValid()) {
    return date.format('DD.MM.YYYY ');
  }
  return '';
};

export const isValidGetResponse = response => isValidObject(response) && response.rows && response.count !== undefined;
