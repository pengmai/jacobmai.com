export function formatDate(date) {
  const DAY_IN_MILLISECONDS = 86400000;
  const WEEK_IN_MILLISECONDS = DAY_IN_MILLISECONDS * 7;
  const HOUR_IN_MILLISECONDS = DAY_IN_MILLISECONDS / 24;
  const MINUTE_IN_MILLISECONDS = HOUR_IN_MILLISECONDS / 60;

  let current = new Date();
  let deltatime = current.getTime() - date.getTime();

  if (deltatime > WEEK_IN_MILLISECONDS) {
    // More than a week ago
    const MONTHS = [
      'January', 'February', 'March', 'April', 'May', 'June', 'July', 'August',
      'September', 'October', 'November', 'December'
    ];

    return 'on ' + MONTHS[date.getMonth()] + ' ' + date.getDate() + ', '
      + date.getFullYear() + ', '+ formatTime(date);
  } else if (deltatime > (DAY_IN_MILLISECONDS * 2)) {
    // Within the last week
    let deltaDays = Math.floor(deltatime / DAY_IN_MILLISECONDS);
    return deltaDays + ' days ago, ' + formatTime(date);
  } else if (deltatime > DAY_IN_MILLISECONDS) {
    // Yesterday
    return 'yesterday, ' + formatTime(date);
  } else if (deltatime > HOUR_IN_MILLISECONDS) {
    // More than an hour ago
    let deltaHours = deltatime / HOUR_IN_MILLISECONDS;
    if (deltaHours === 1) {
      return deltaHours + ' hour ago';
    } else {
      return deltaHours + ' hours ago';
    }
  } else {
    // Less than an hour ago
    let deltaMinutes = deltatime / MINUTE_IN_MILLISECONDS;
    if (deltaMinutes < 1) {
      return 'less than a minute ago';
    } else if (deltaMinutes === 1) {
      return deltaMinutes + ' minute ago';
    } else {
      return deltaMinutes + ' minutes ago';
    }
  }
}

function formatTime(date) {
  const dStr = date.toLocaleTimeString();
  return dStr.substring(0, dStr.indexOf(':', dStr.indexOf(':') + 1))
    + dStr.substring(dStr.lastIndexOf(' '));
}
