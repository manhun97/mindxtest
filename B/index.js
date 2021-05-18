fetch(
	"https://opentdb.com/api.php?amount=5&category=21&difficulty=easy&type=multiple"
)
	.then((res) => res.json())
	.then((out) => {
		let result = out.results;
		let i = 0;
		result.forEach((item) => {
			i++;
			let question = document.createElement("div");
			let answer = item.incorrect_answers;
			answer.push(item.correct_answer);
			answer = answer.sort(() => Math.random() - 0.5);
			question.innerHTML = `
      <div class="question">Question ${i}: ${item.question}</div>
      <br>
      <div>Answers:</div>
      <br>
      <div class="answer">A. ${answer[0]}</div>
      <div class="answer">B. ${answer[1]}</div>
      <div class="answer">C. ${answer[2]}</div>
      <div class="answer">D. ${answer[3]}</div>
      <br>
      `;
			app.appendChild(question);
		});
		console.log(answer);
		console.log(result);
	})
	.catch((err) => console.error(err));
