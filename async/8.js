function* repeatedArray(arr) {
  let index = 0;
  while (true) {
    yield arr[index++ % arr.length];
  }
}

const lifts = ['squat', 'bench', 'deadlift', 'press'];
const nextLiftGenerator = repeatedArray(lifts);

const numWeeks = 3;
const daysPerWeek = 6;

const totalNumSessions = numWeeks * daysPerWeek;

// This creates an empty array of totalNumSessions length
// for me to map over
const cycle = [...Array(totalNumSessions)]
  .map(() => ({
    lift: nextLiftGenerator.next().value,
  }));
  
console.log(cycle);
