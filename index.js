function theBeatlesPlay(musicians, instruments){
  let plays = [];
  for (var i = 0; i < musicians.length; i++) {
    plays.push(`${musicians[i]} play ${instruments[i]}`)
  }
  return plays;
}
