fetch(
	"https://opentdb.com/api.php?amount=5&category=21&difficulty=easy&type=multiple"
)
	.then((res) => res.json())
	.then((out) => {
		let app = document.getElementById("app");
		let res = out.results;
		let i = 0;
		res.forEach((item) => {
			i++;
			let question = document.createElement("div");
			answer = item.incorrect_answers.push(item.correct_answer);
			answer = answer.sort(() => Math.random() - 0.5);
			question.innerHTML = `
         <div>Question ${i}: ${item.question}</div>
         <div>Answers: ${answer}</div>
         `;
			app.appendChild(question);
		});
	})
	.catch((err) => console.error(err));
