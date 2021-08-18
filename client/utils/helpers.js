export const formatErrors = errObj => {
  let errors = {};
  for (let key in errObj) {
    errors[key] = `${key[0].toUpperCase() + key.slice(1)} ${errObj[key][0]}`;
  }
  return errors;
};

export const formatClasses = (classList, styles) => {
  return classList.split(' ').map(name => styles[name]).join(' ')
}