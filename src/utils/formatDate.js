const formatDate = (isoDateString) => {
  if (!isoDateString) return "";
  try {
    const date = new Date(isoDateString);
    return date.toLocaleDateString("en-GB"); // format: DD/MM/YYYY
  } catch {
    return "";
  }
};

export default formatDate;
