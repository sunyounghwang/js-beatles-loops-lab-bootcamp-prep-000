function theBeatlesPlay(musicians, instruments) {
  var array = [];
  
  for (let i = 0; i <= musicians.length - 1; i++) {
    array.push(`${musicians[i]} plays ${instruments[i]}`);
  }
  
  return array;
}

function johnLennonFacts(facts) {
  let i = 0;
  while (i < facts.length) {
    facts[i] = facts[i] + '!!!';
    i++;
  }
  
  return facts;
}

function iLoveTheBeatles(n) {
  let array = [];
  do {
    array.push('I love the Beatles!');
    n++;
  } while (n < 15);
  
  return array;
}