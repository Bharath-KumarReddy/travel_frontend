export const validateNumber = (number) => {
    const regex = /^\d{10}$/;
    return regex.test(number);
  };