window.onscroll = function () {
	myFunction();
};

var navbar = document.getElementById("nav");

var sticky = navbar.offsetTop;

function myFunction() {
	if (window.pageYOffset >= sticky) {
		navbar.classList.add("sticky");
	} else {
		navbar.classList.remove("sticky");
	}
}

fetch(
	"https://opentdb.com/api.php?amount=40&category=21&difficulty=easy&type=multiple"
)
	.then((res) => res.json())
	.then((out) => {
		let result = out.results;
		let i = 0;
		let score = 0;
		result.forEach((item) => {
			i++;
			let question = document.createElement("div");
			let answer = item.incorrect_answers;
			answer.push(item.correct_answer);
			answer = answer.sort(() => Math.random() - 0.5);
			question.innerHTML = `
      <div class="question"><strong>Question ${i}:</strong> ${item.question}</div>
      <br>
      <div>Answers:</div>
      <br>
		<div id="ans${i}"></div>
		<br>
      `;
			let app = document.getElementById("app");
			app.appendChild(question);
			answer.forEach((ans) => {
				const a = ["A", "B", "C", "D"];
				const e = document.getElementById("ans" + i);
				const echild = document.createElement("div");
				echild.innerHTML = `
				<div style="padding-top:5px">${a[answer.indexOf(ans)]}. ${ans}</div>
				`;
				echild.addEventListener(
					"click",
					function () {
						if (ans == item.correct_answer) {
							e.innerHTML = `${item.correct_answer} is correct! Score +10`;
							e.classList.add("right");
							score += 10;
							document.getElementById("score").innerHTML = `
						<div>Total score: ${score}</div>
						<br>
						`;
						} else {
							e.innerHTML = `${ans} is incorrect! Correct is: ${item.correct_answer}`;
							e.classList.add("wrong");
						}
					},
					{
						once: true,
					}
				);
				e.appendChild(echild);
			});
		});
	})
	.catch((err) => console.error(err));
