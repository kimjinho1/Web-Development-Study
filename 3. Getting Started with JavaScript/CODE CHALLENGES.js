// CODE CHALLENGES

// greetWorld
const greetWorld = () => 'Hello, World!'

// canIVote
const canIVote = age => {
  if (age >= 18) {
    return true;
  } else {
    return false;
  }
}

// agreeOrDisagree
const agreeOrDisagree = (s1, s2) => {
  if (s1 === s2) {
    return 'You agree!';
  } else {
    return 'You disagree!';
  }
}

// lifePhase
const lifePhase = age => {
  if (age >= 0 && age <= 3) {
    return 'baby';
  } else if (age >= 4 && age <= 12) {
    return 'child';
  } else if (age >= 13 && age <= 19) {
    return 'teen';
  } else if (age >= 20 && age <= 64) {
    return 'adult';
  } else if (age >= 65 && age <= 140) {
    return 'senior citizen';
  } else {
    return 'This is not a valid age';
  }
}

// finalGrade
const finalGrade = (n1, n2, n3) => {
  if (n1 < 0 || n1 > 100 || n2 < 0 || n2 > 100 || n3 < 0 || n3 > 100) {
    return 'You have entered an invalid grade.';
  }
 
  const average = (n1 + n2 + n3) / 3;
  if (average >= 0 && average <= 59) {
    return 'F';
  } else if (average >= 60 && average <= 69) {
    return 'D';
  } else if (average >= 70 && average <= 79) {
    return 'C';
  } else if (average >= 80 && average <= 89) {
    return 'B';
  } else if (average >= 90 && average <= 100) {
    return 'A';
  } 
}

// reportingForDuty
const reportingForDuty = (rank, lastName) => `${rank} ${lastName} reporting for duty!`

// Fix The Broken Code
const rollTheDice = () => {
  // Math.random() gives us a random number from 0 up to, but not including, 1
  // We multiplied that by 6 to get a number between 0 and up to, but not including, 6
  // But since we actually wanted numbers from 1 to 6, inclusive, we added 1
    let die1 = Math.floor(Math.random()) * 6 + 1;
    let die2 = Math.floor(Math.random()) * 6 + 1;
    return die1 + die2;
}

// calculateWeight
// earthWeight: number , planet: string
const calculateWeight = (earthWeight, planet) => {
  if (planet === 'Mercury') {
    return earthWeight * 0.378;
  } else if (planet === 'Venus') {
    return earthWeight * 0.907;
  } else if (planet === 'Mars') {
    return earthWeight * 0.377;
  } else if (planet === 'Jupiter') {
    return earthWeight * 2.36;
  } else if (planet === 'Saturn') {
    return earthWeight * 0.916;
  } else {
    return 'Invalid Planet Entry. Try: Mercury, Venus, Mars, Jupiter, or Saturn.';
  }
}

// truthyOrFalsy
const truthyOrFalsy = input => input ? true : false

// numImaginaryFriends
const numImaginaryFriends = totalFriends => {
  return Math.round(totalFriends * 0.33);
}

// sillySentence
const sillySentence = (s1, s2, s3) => `I am so ${s1} because I ${s2} coding! Time to write some more awesome ${s3}!`

// howOld
const howOld = (age, year) => {
    let dateToday = new Date();
    let thisYear = dateToday.getFullYear();  
    const yearDifference = year - thisYear;
    const newAge = age + yearDifference;

    if (newAge < 0) {
        return `The year ${year} was ${-newAge} years before you were born`;
    } else if (newAge > age) {
        return `You will be ${newAge} in the year ${year}`;
    } else {
        return `You were ${newAge} in the year ${year}`;
    }
}

// Fix the broken code (round 2)!
const whatRelation = percentSharedDNA => {
    if (percentSharedDNA === 100) {
        return 'You are likely identical twins.'
    }
    if (percentSharedDNA > 34 && percentSharedDNA < 100) {
        return 'You are likely parent and child or full siblings.'
    }
    if (percentSharedDNA < 35 && percentSharedDNA > 13) {
        return 'You are likely grandparent and grandchild, aunt/uncle and niece/nephew, or half siblings.'
    }
    if (percentSharedDNA > 5 && percentSharedDNA < 14) {
        return 'You are likely 1st cousins.'
    }
    if (percentSharedDNA > 2 && percentSharedDNA < 6) {
        return 'You are likely 2nd cousins.'
    }
    if (percentSharedDNA > 0 &&percentSharedDNA < 3) {
        return 'You are likely 3rd cousins'
    }
    return 'You are likely not related.'
}

// tipCalculator
const tipCalculator = (quality, total) => {
  if (quality === 'bad') {
    return total * 0.05;
  } else if (quality === 'ok') {
    return total * 0.15;
  } else if (quality === 'good') {
    return total * 0.2;
  } else if (quality === 'excellent') {
    return total * 0.3;
  } else {
    return total * 0.18;
  }
}

// toEmoticon
const toEmoticon = s => {
  if (s === 'shrug') {
    return '|_{"}_|';
  } else if (s === 'smiley face') {
    return ':)';
  } else if (s === 'frowny face') {
    return ':(';
  } else if (s === 'winky face') {
    return ';)';
  } else if (s === 'heart') {
    return '<3';
  } else {
    return '|_(* ~ *)_|';
  }
}
