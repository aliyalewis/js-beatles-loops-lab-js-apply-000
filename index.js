function theBeatlesPlay(musician, instrument) {
  var array = [];
  for(let i = 0; i<musician.length; i++) {
  array.push(`${musician} plays ${instrument}`)
}
return array
}
