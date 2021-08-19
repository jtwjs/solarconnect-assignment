export default {
  getCurrentTime: (): string => {
    const today = new Date();
    const hour = today.getHours();
    const minute = today.getMinutes();

    return `${hour >= 10 ? hour : '0' + hour}:${minute >= 10 ? minute : '0' + minute}`;
  },
  getToday: (): string => {
    const today = new Date();
    const day = today.getDay();

    return `${Days[day]}`;
  },
  getDate: (): string => {
    const today = new Date();
    const year = today.getFullYear();
    const month = today.getMonth();
    const date = today.getDate();

    return `${Month[month]} ${date}, ${year}`;
  }
}

enum Days {
  Sunday,
  Monday,
  Tuesday,
  Wednseday,
  Thursday,
  Friday,
  Saturday
}

enum Month {
  January,
  February,
  March,
  April,
  May,
  June,
  July,
  August,
  September,
  October,
  November,
  December
}