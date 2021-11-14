// Individual form field validation methods
const validations = {
  email: function (email) {
    const regex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    if (email.length && !regex.test(email)) {
      return 'Please enter a valid email';
    }
  },

  password: function (password) {
    const regex = /^(?=.*[A-Za-z])(?=.*\d)[a-zA-Z\d\w\W]{8,}$/;
    if (password.length && !regex.test(password)) {
      return 'Password must contain at least 8 characters and at least one letter and one number';
    }
  },

  validateAll: function (obj) {
    for (let key in obj) {
      if (this[key]) {
        if (this[key](obj[key])) {
          return false;
        }
      }
    }
    return true;
  },

  hasEmptyField: function (obj) {
    for (let key in obj) {
      if (!obj[key]) {
        return true;
      }
    }
    return false;
  }
};

export default validations