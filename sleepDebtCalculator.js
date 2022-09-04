//This script fulfills the project reqs for "Sleep Debt Calculator" in Codecademy

//return values change based on hours slept each day
const getSleepHours = (day) => {
  switch (day) {
    case "Monday":
      return 6;
    case "Tuesday":
      return 7.75;
    case "Wednesday":
      return 6;
    case "Thursday":
      return 4.5;
    case "Friday":
      return 7.25;
    case "Saturday":
      return 12;
    case "Sunday":
      return 6;
    default:
      return "Error!";
  }
};

//adds up total of hours slept
const getActualSleepHours = () =>
  getSleepHours("Monday") +
  getSleepHours("Tuesday") +
  getSleepHours("Wednesday") +
  getSleepHours("Thursday") +
  getSleepHours("Friday") +
  getSleepHours("Saturday") +
  getSleepHours("Sunday");

//ideally everyone should get 8 hours of rest 
const getIdealSleepHours = () => {
  const idealHours = 8;
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
    console.log(
      "You got " +
        (idealSleepHours - actualSleepHours) +
        " hour(s) less sleep than you need this week. You need more rest ... or maybe more coffee?"
    );
  }
};

console.log("You slept for " + getActualSleepHours() + " hours this week.");
console.log(
  `Ideally, you should be getting ${getIdealSleepHours()} hours of sleep a week`
);
calculateSleepDebt();
