export const validateEmail = (email) => {
    const regex = /^[a-zA-Z0-9._]+@[a-z]+\.[a-z]{2,3}$/;
    return regex.test(email);
  };