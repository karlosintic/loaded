function update() {
	var now = new Date(),
		start = new Date(now.getFullYear(), 0, 0),
		diff = now - start,
		day = Math.floor(diff / 86400000) - 1,
		then = new Date(
			now.getFullYear(),
			now.getMonth(),
			now.getDate(),
			0, 0, 0),
		mil = new Date().getTime() - then.getTime(),
		sectoday = Math.round(mil / 1000),
		sec = (day * 86400) + sectoday,
		year = now.getFullYear()+1,
		secsum = year % 4 === 0 && year % 100 !== 0 || year % 400 === 0 ? 31622400 : 31536000;

	per = Math.floor((sec / secsum) * 100);

	document.getElementById('year').innerHTML = 'Loading ' + year + '...';
	document.getElementById('per').innerHTML = per + '%';
	document.getElementById('per').style.width = per + '%';
	console.log('Updated');
}
update();

setInterval(update(), 10);
