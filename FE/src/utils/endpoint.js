export const URLS = {
  AUTHENTICATE: { url: 'auth', subUrl: '' },
  USER_DATA: { url: 'users', subUrl: 'me' },
  GET_VACATIONS: { url: 'vacations' },
  GET_PROFILE: { url: 'profile' },
};

export const getEndpointURL = key => {
  let finalUrl = '';
  if (key && URLS[key]) {
    const urlKey = URLS[key];
    if (urlKey.url) {
      finalUrl = urlKey.url;
    }
    if (urlKey.subUrl && urlKey.subUrl.length > 0) {
      finalUrl += `/${urlKey.subUrl}`;
    }
  }
  return finalUrl;
};
