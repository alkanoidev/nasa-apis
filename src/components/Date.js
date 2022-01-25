import React from "react";
import { useState } from "react";

const formatDate = (date) => {
  let d = new Date(date),
    month = "" + (d.getMonth() + 1),
    day = "" + d.getDate(),
    year = d.getFullYear();

  if (month.length < 2) month = "0" + month;
  if (day.length < 2) day = "0" + day;

  return [year, month, day].join("-");
};

export default function DatePicker({queryDate, setQueryDate}) {
  return (
    <input
      value={queryDate}
      type="date"
      onChange={(event) => {
        setQueryDate(event.target.value);
      }}
    />
  );
}

export const useDate = (date) => {
  const [queryDate, setQueryDate] = useState(date);
  return [queryDate, setQueryDate];
};
