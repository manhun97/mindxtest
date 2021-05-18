function swap(a, b) {
	return [b, a];
}

function ranking(data) {
	let a = [];
	for (let i = 0; i < data.length; i++) {
		a.push(data[i]);
	}
	for (let i = 0; i < a.length - 1; i++) {
		for (let j = i + 1; j < a.length; j++) {
			if (a[i].points < a[j].points) {
				[a[i], a[j]] = swap(a[i], a[j]);
			} else {
				if (a[i].points == a[j].points && a[i].GD > a[j].GD) {
					[a[i], a[j]] = swap(a[i], a[j]);
				} else {
					if (a[i].GD == a[j].GD && a[i].name < a[j].name) {
						[a[i], a[j]] = swap(a[i], a[j]);
					}
				}
			}
			console.log(a);
		}
	}
	for (let i = 0; i < a.length; i++) {
		data[i].position = a.indexOf(data[i]) + 1;
	}
	console.log(data);
}

ranking([
	{
		name: "Arsenal",
		points: 99,
		GD: 45,
	},
	{
		name: "Chelsea",
		points: 75,
		GD: 39,
	},
	{
		name: "Manchester United",
		points: 60,
		GD: 29,
	},
	{
		name: "Liverpool",
		points: 88,
		GD: 39,
	},
]);
