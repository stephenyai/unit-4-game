var min;
var max;
var randomNum;
var crystalNum;
var userNum;
var totalNum = 0;
var startGame = false;
// line 14 - Math.floor(Math.random() * (max-min)) + min;
// line 18 - crystalNum = Math.floor(Math.random() * 12) + 1;

function defaultPage() {
	min = Math.ceil(19);
	max = Math.floor(121);
	randomNum = 20
	$('#random').text(randomNum);

	$('button').each(function() {
		crystalNum = Math.floor(Math.random() * 3) + 1;
		// console.log('crystl', crystalNum)
		$(this).attr('value', crystalNum);
	})	
}



$('button').on('click', function(event) {
	userNum = $(this).attr('value');
	userNum = parseInt(userNum);
	console.log('b4', userNum)

	if (totalNum === randomNum) {
		alert('you win');
	} else {
		totalNum = userNum + totalNum;
		console.log('totalNum', totalNum)
		console.log('userNum', userNum)
	}
})



defaultPage();