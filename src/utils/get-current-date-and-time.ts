export const getCurrentDateAndTime = () => {
  return (
    new Date().getDate() +
    '.' +
    (new Date().getMonth() + 1) +
    '.' +
    new Date().getFullYear() +
    ' - ' +
    new Date().getHours() +
    ':' +
    new Date().getMinutes() +
    ':' +
    new Date().getSeconds()
  );
};
