const getSleepHours = (day) => {
  switch (day) {
    case "Monday":
      return 8;
      break;
    case "Tuesday":
      return 8;
      break;
    case "Wednesday":
      return 8;
      break;
    case "Thursday":
      return 8;
      break;
    case "Friday":
      return 8;
      break;
    case "Saturday":
      return 8;
      break;
    case "Sunday":
      return 8;
      break;
  }
};

const getActualSleepHours = () =>
  getSleepHours("Monday") +
  getSleepHours("Tuesday") +
  getSleepHours("Wednesday") +
  getSleepHours("Thursday") +
  getSleepHours("Friday") +
  getSleepHours("Saturday") +
  getSleepHours("Sunday");

const getIdealSleepHours = () => {
  const idealHours = 7.5;
  return idealHours * 7;
};

const calculateSleepDebt = () => {
  let actualSleepHours = getActualSleepHours();
  let idealSleepHours = getIdealSleepHours();

  if (actualSleepHours === idealSleepHours) {
    console.log("You got the perfect amount of sleep");
  } else if (actualSleepHours > idealSleepHours) {
    console.log("You slept more than you need, Sleeping Beauty!");
  } else {
    console.log("You got " + (idealSleephours - actualSleepHours) + " hour(s) less sleep than you need this week. You need more rest .... Coffee?");
  }
};

calculateSleepDebt();
console.log(getActualSleepHours());
console.log(getIdealSleepHours());
