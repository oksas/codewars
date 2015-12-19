/*
  Kata written by: chunjef
  =====
  An isogram is a word that has no repeating letters, consecutive or non-consecutive. Implement a function that determines whether a string that contains only letters is an isogram. Assume the empty string is an isogram. Ignore letter case.

  isIsogram( "Dermatoglyphics" ) == true
  isIsogram( "aba" ) == false
  isIsogram( "moOse" ) == false // -- ignore letter case
*/

function isIsogram(str){
  // a little confused from description if the string could be more than just a word (it sounds like it could be)
  // but the test cases suggest it's only going be a word
  return !/(\w)\w*\1/i.test(str);
}
