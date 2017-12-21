function theBeatlesPlay(musicians, instruments){
  let plays = [];
  for (var i = 0; i < musicians.length; i++) {
    plays.push(`${musicians[i]} plays ${instruments[i]}`)
  }
  return plays;
}
function johnLennonFacts(facts) {
  let i = 0
  let factEx = []
  while (facts.length > 0) {
    factEx.push(facts[i]+'!');
    i++
  }
  return factEx;
}
