function dateToDurationString(dateString) {
  const date = new Date(dateString);
  const year = date.getFullYear();
  const month = date.getMonth() + 1; // Months are zero-indexed
  const day = date.getDate();

  const formattedDate = `${year}/${month}/${day}`;
  return formattedDate;
}

export function formattedDuration(startDate, endDate) {
  const startDateString = dateToDurationString(startDate);
  const endDateString = dateToDurationString(endDate);

  return startDateString === endDateString
    ? startDateString
    : `${startDateString} ~ ${endDateString}`;
}
