export const debounce = (func, wait, immediate) => {
  let timeout;
  /* eslint-disable func-names */
  return function() {
    /* eslint-enable func-names */
    const context = this;
    const args = arguments; // eslint-disable-line prefer-rest-params
    const later = () => {
      timeout = null;
      if (!immediate) func.apply(context, args);
    };
    const callNow = immediate && !timeout;
    clearTimeout(timeout);
    timeout = setTimeout(later, wait);
    if (callNow) func.apply(context, args);
  };
};
