"use strict";

export default class Time {
  // Expects to receive a timestamp in the format of '2000-01-01T12:12:12.999Z'
  static getTimeAgo(timestamp, strings = { prefix: "", suffix: "ago" }) {
    const targetDate = new Date(timestamp);

    if (!this.isValidDate(targetDate))
      return `${strings.prefix} unknown time ${strings.suffix}`.trim();

    const currentDate = new Date();
    const timeDifference = currentDate - targetDate;

    const seconds = Math.floor(timeDifference / 1000);
    if (seconds < 60)
      return `${strings.prefix} ${seconds} seconds ${strings.suffix}`.trim();

    const minutes = Math.floor(seconds / 60);
    if (minutes < 60)
      return `${strings.prefix} ${minutes} minutes ${strings.suffix}`.trim();

    const hours = Math.floor(minutes / 60);
    if (hours < 24)
      return `${strings.prefix} ${hours} hours ${strings.suffix}`.trim();

    const days = Math.floor(hours / 24);
    if (days < 7)
      return `${strings.prefix} ${days} days ${strings.suffix}`.trim();

    const weeks = Math.floor(days / 7);
    if (weeks < 4)
      return `${strings.prefix} ${weeks} weeks ${strings.suffix}`.trim();

    const months = Math.floor(days / 30);
    if (months < 12)
      return `${strings.prefix} ${months} months ${strings.suffix}`.trim();

    const years = Math.floor(months / 12);
    return `${strings.prefix} ${years} years ${strings.suffix}`.trim();
  }

  // Expects to receive a timestamp in the format of '2000-01-01T12:12:12.999Z'
  static getReadable(
    timestamp = new Date(),
    format = {
      weekday: true,
      month: true,
      day: true,
      year: true,
      hour: false,
      minute: false,
      twelveHour: false,
    }
  ) {
    const date = new Date(timestamp);

    if (!this.isValidDate(date)) return "Time unknown";

    const options = {};
    if (format?.weekday) options.weekday = "long";
    if (format?.month) options.month = "long";
    if (format?.day) options.day = "numeric";
    if (format?.year) options.year = "numeric";
    if (format?.hour) options.hour = "numeric";
    if (format?.minute) options.minute = "numeric";
    if (format?.hour12) options.twelveHour = true;

    return date.toLocaleString(undefined, options);
  }

  // Expects a date object
  static isValidDate(date) {
    return date instanceof Date && !isNaN(date);
  }
}
