var min;
var max;
var randomNum;
var crystalNum;
var userNum;
var totalNum = 0;
var wins = 0;
var losses = 0;

function defaultPage() {

	totalNum = 0;

	min = Math.ceil(19);
	max = Math.floor(121);
	randomNum = Math.floor(Math.random() * (max-min)) + min;
	$('#random').text(randomNum);
	$('#guess').text(totalNum);

	$('button').each(function() {
		crystalNum = Math.floor(Math.random() * 12) + 1;
		// console.log('crystl', crystalNum)
		$(this).attr('value', crystalNum);
	})	
}

$('button').on('click', function(event) {
	userNum = $(this).attr('value');
	userNum = parseInt(userNum);
	totalNum = userNum + totalNum;

	$('#guess').text(totalNum);

	if (totalNum > randomNum) {
		losses++;
		$('#losses').text(losses);
		$('#alert').text("You lose!")
		defaultPage()

	} else if (totalNum === randomNum) {
		wins++;
		$('#wins').text(wins);
		$('#guess').text(totalNum);
		$('#alert').text("You win!")

		defaultPage()
	}
})

defaultPage();