import { useState, useEffect } from "react";

const useFormatDate = (isoDateString) => {
  const [formattedDate, setFormattedDate] = useState("");

  useEffect(() => {
    if (!isoDateString) {
      setFormattedDate("");
      return;
    }
    try {
      const date = new Date(isoDateString);

      const formatted = date.toLocaleDateString("en-GB");

      setFormattedDate(formatted);
    } catch (error) {
      setFormattedDate("");
    }
  }, [isoDateString]);

  return formattedDate;
};

export default useFormatDate;
