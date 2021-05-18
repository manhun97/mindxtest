function mangKhongTrungNhau(A1, A2) {
	var A3 = [];
	for (let i = 0; i < A1.length; i++) {
		if (A2.indexOf(A1[i]) < 0) {
			A3.push(A1[i]);
		}
	}
	for (let i = A2.length - 1; i > 0; i--) {
		if (A1.indexOf(A2[i]) < 0) {
			A3.push(A2[i]);
		}
	}
	console.log(A3);
}

mangKhongTrungNhau([1, 2, "a"], [1, 3, "b"]);
