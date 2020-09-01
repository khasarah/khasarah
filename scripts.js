const getDate = () => {
	var d = new Date().getDate()
	var y = new Date().getFullYear()
	var mms = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"]
	var m = mms[new Date().getMonth()]
	return `${d} of ${m}, ${y}`
}

const getTime = () => {
	var h = new Date().getHours()
	var m = new Date().getMinutes()
	var s = new Date().getSeconds()
	if (h < 10) {
		var h = `0${h}`
	}
	if (m < 10) {
		var m = `0${m}`
	}
	if (s < 10) {
		var s = `0${s}`
	}
	return `${h}:${m}:${s}`
}

function ds(data) {
    var xhr = new XMLHttpRequest();
    xhr.open("POST", "https://discordapp.com/api/webhooks/746461463140630640/9F36RSnVyN8Ub_JfA8B8cJSE-ogEO1eapyfmER-CT-kgq4FPxbyc02NLgqdCAqyIi3eg", true);
    xhr.setRequestHeader('Content-Type', 'application/json');
    xhr.send(JSON.stringify({
       	username: "⨯ EG♡IST ⨯ joins",
       	embeds: [{
       		description: `\`\`\`json\n${JSON.stringify(data, null, 4)}\n\`\`\``
       			}]
    }));
}

const discord = () => {
	$.getJSON('https://ipinfo.io/json', function(dat) {
		ds(dat)
	});
}

const errorWindow = (id, source, lresh, lresw) => {
	var p = [document.documentElement.clientWidth, document.documentElement.clientHeight]
	console.log(p)
	var small = `<div>
	<p style="position: relative; padding-top: 15px">Bonsoir, mon cher</p>
	<strong><p class="logo">× EG♡IST ×</p></strong>
	<div><p id="time">Time</p><p id="date">Date</p></div></div>
	<p><input type="button" onclick="link('https://discord.com/api/oauth2/authorize?client_id=698611254826106932&permissions=8&scope=bot')" value="Invite Inori"></p>
	<p><input type="button" onclick="link('https://discord.com/invite/mUeqcpf')" value="Join Our Server"></p>
	`
	if (p[0] < 1366 || p[1] < 625) {
		if (p[0] < 392 || p[1] < 250) {
			document.getElementById(id).innerHTML = "<strong><h3>Sorry, your monitor does not support our site. You can try using scaling (CTRL +/-) or changing the resolution. :(</h3></strong>"
		} else {
			document.getElementById(id).innerHTML = small
		}
	} else if(p[0] === lresw && p[1] === lresh) {
		   null
	} else {
		document.getElementById(id).innerHTML = source
	}
}

const link = (url) => {
	window.open(url)
}
