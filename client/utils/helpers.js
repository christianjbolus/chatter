export const formatErrors = errObj => {
  let errors = {};
  for (let key in errObj) {
    errors[key] = `${key[0].toUpperCase() + key.slice(1).replace('_', ' ')} ${errObj[key][0]}`;
  }
  return errors;
};

export const formatClasses = (classList, styles) => {
  return classList
    .split(' ')
    .map(className => styles[className])
    .join(' ');
};

export const formatUrl = (url, id) => {
  if (!url) return '#';
  return url.replace('id', id);
};
