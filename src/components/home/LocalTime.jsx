import React, { useState, useEffect } from "react";
import { DateTime } from "luxon";

const LocalTime = ({ localTimeZone }) => {
  const [localTime, setLocalTime] = useState("");

  useEffect(() => {
    // Function to convert UTC time to local time
    const convertUtcToLocal = (utcTimeString, timeZone) => {
      const utcDateTime = DateTime.fromISO(utcTimeString, { zone: "utc" });
      const localDateTime = utcDateTime.setZone(timeZone);
      return localDateTime.toLocaleString({
        day: "numeric",
        month: "long",
        year: "numeric",
        hour: "numeric",
        minute: "numeric",
        second: "numeric",
        hour12: true,
      });
    };

    // Update time every second
    const intervalId = setInterval(() => {
      const utcTime = DateTime.utc().toISO();
      const localTimeString = convertUtcToLocal(utcTime, localTimeZone);
      setLocalTime(localTimeString);
    }, 1000);

    // Cleanup interval on component unmount
    return () => clearInterval(intervalId);
  }, [localTimeZone]);

  return <div>{localTime}</div>;
};

export default LocalTime;
