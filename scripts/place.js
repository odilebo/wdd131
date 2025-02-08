const full = document.querySelector("#currentyear");
const day = document.querySelector("#lastModified");

// use the date object
const today = new Date();
let lastMod = new Date(document.lastModified);

full.innerHTML = `Today is <span class="highlight">${new Intl.DateTimeFormat(
	"en-US",
	{
		dateStyle: "full"
	}
).format(today)}</span>`;

day.innerHTML = `Last Modified:  <span class="highlight">${new Intl.DateTimeFormat(
	"en-US",
	{
		dateStyle: "full"
	}
).format(lastMod)}</span>`;

full.innerHTML = ` <span class="highlight">${today.getFullYear()}</span>`;

const temp = 9
const wind = 10

function windFactor( temp, wind) {
    if (temp <= 10 && wind > 4.8) {
       return ` Wind Factor: ${wind} km/h  `;
    } else {
        return ` Wind Factor:  n/a `;
    }

  }

document.querySelector('#temp').innerHTML = windFactor(temp, wind);