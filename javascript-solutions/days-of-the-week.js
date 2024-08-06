/**
 * Created by haithhawk. 8 kyu.
 * 
 */

const whatDay = (num) => { 
  
  const daysOfTheWeek = {
    1: 'Monday',
    2: 'Tuesday',
    3: 'Wednesday',
    4: 'Thursday',
    5: 'Friday',
    6: 'Saturday',
    7: 'Sunday'
  }
  
  if (num >= 1 && num <= 7 ) {
    return daysOfTheWeek[num]
  } else {
    return 'Wrong, please enter a number between 1 and 7'
  }

}

module.exports = whatDay