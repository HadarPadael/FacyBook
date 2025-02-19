import React from "react";
import { formatDistanceToNow } from "date-fns";

function TimeAgo({ timestamp }) {
  // Convert string or number to a Date object
  const date = new Date(timestamp);

  // Calculate how long ago this date was
  const timePassed = formatDistanceToNow(date, { addSuffix: true });

  return <span>{timePassed}</span>;
}

export default TimeAgo;
