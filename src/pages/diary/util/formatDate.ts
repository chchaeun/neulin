const formatDate = (dateObj: Date | undefined) => {
  if (!dateObj) {
    return "";
  }
  return `${dateObj.getFullYear()}-${dateObj.getMonth() + 1}-${String(
    dateObj.getDate()
  ).padStart(2, "0")}`;
};

export { formatDate };
