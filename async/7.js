/*
  https://itnext.io/a-quick-practical-use-case-for-es6-generators-building-an-infinitely-repeating-array-49d74f555666
*/

const lifts = ['squat', 'bench', 'deadlift', 'press'];
const numWeeks = 3;
const daysPerWeek = 6;

const totalNumSessions = numWeeks * daysPerWeek;

let currentLiftIndex = 0;

// This creates an empty array of totalNumSessions length
// for me to map over
const cycle = [...Array(totalNumSessions)]
  .map(() => ({
    lift: lifts[currentLiftIndex++ % lifts.length]
  }));

console.log(cycle);



