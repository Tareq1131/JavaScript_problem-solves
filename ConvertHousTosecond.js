function howManySeconds(hours) {
	var seconds = hours * 3600;
  return seconds;
}
var hours = 2; 
var seconds = howManySeconds(hours);
console.log(hours + ' hours is equal to ' + seconds + ' seconds.');