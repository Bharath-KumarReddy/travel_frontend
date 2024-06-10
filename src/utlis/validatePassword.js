export const validatePassword = (password) => {
    const regex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[@#$*!&%])(?=.*\d).{5,}$/;
    return regex.test(password);
  };