/*
const getSleepHours = day => {
  if (day === 'monday') {
    return 8;
  } else if (day === 'tuesday') {
    return 8;
  } else if (day === 'wednesday') {
    return 8;
  } else if (day === 'thursday') {
    return 8;
  } else if (day === 'friday') {
    return 8;
  } else if (day === 'saturday') {
    return 8;
  } else if (day === 'sunday') {
    return 7;
  }
}
*/

const getActualSleepHours = () => 8 + 8 + 8 + 8 + 8 + 8 + 7

const getIdealSleepHours = idealHours => idealHours * 7;

const calculateSleepDebt = () => {
  const actualSleepHours = getActualSleepHours();
  const idealSleepHours = getIdealSleepHours(8);
  
  if (actualSleepHours === idealSleepHours) {
    console.log('you sleep ' + (actualSleepHours) + ' hour(s). you got the perfect amount of sleep.');
  } else if (actualSleepHours > idealSleepHours) {
    console.log('you got ' + (actualSleepHours - idealSleepHours) + ' hour(s) more sleep than you needed this week. you should get some rest');
  } else {
    console.log('you got ' + (idealSleepHours - actualSleepHours) + ' hour(s) less sleep than you needed this week. you got more sleep than needed');
  }
}

calculateSleepDebt();