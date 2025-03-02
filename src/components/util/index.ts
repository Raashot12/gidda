import moment from "moment-timezone"
export const momentBrowserTimezone = (
  time?: string | Date | null,
  format?: string | null
) => {
  if (!time) {
    return moment().local()
  }

  const timeString = time instanceof Date ? time.toISOString() : time

  return format
    ? moment.tz(timeString, format, "UTC").local()
    : moment.tz(timeString, "UTC").local()
} // Server time is a local time stored in UTC
