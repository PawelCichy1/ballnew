const ballImg = document.querySelector('img');
const input = document.querySelector('input');
const answer = document.querySelector('.answer');
const error = document.querySelector('.error');

const answers = [
	'tak',
	'nie',
	'może',
	'chuja cie to obchodzi',
	'tak jesteś gejem',
];

const generateAnswer = () => {
	const number = Math.floor(Math.random() * 5);
	answer.textContent = `Odpowiedź: ${answers[number]}`;
};

ballImg.addEventListener('click', () => {
	if (input.value == '') {
		error.textContent = 'Wpisz pytanie';
	} else if (input.value.slice(-1) != '?') {
		error.textContent = 'Pytanie musisz zakończyć pytajnikiem';
	} else {
		generateAnswer();
		error.textContent = '';
	}
});

console.log(ballImg);
