export default (value) => {
  return value ? value.slice(0, 100) + "..." : value;
};
