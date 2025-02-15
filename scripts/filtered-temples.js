const mainnav = document.querySelector('.navigation')
const hambutton = document.querySelector('#menu');


hambutton.addEventListener('click', () => {
	mainnav.classList.toggle('show');
	hambutton.classList.toggle('show');
});

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

const temples = [
    {
      templeName: "Aba Nigeria",
      location: "Aba, Nigeria",
      dedicated: "2005, August, 7",
      area: 11500,
      imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/aba-nigeria/400x250/aba-nigeria-temple-lds-273999-wallpaper.jpg"
    },
    {
      templeName: "Manti Utah",
      location: "Manti, Utah, United States",
      dedicated: "1888, May, 21",
      area: 74792,
      imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/manti-utah/400x250/manti-temple-768192-wallpaper.jpg"
    },
    {
      templeName: "Payson Utah",
      location: "Payson, Utah, United States",
      dedicated: "2015, June, 7",
      area: 96630,
      imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/payson-utah/400x225/payson-utah-temple-exterior-1416671-wallpaper.jpg"
    },
    {
      templeName: "Yigo Guam",
      location: "Yigo, Guam",
      dedicated: "2020, May, 2",
      area: 6861,
      imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/yigo-guam/400x250/yigo_guam_temple_2.jpg"
    },
    {
      templeName: "Washington D.C.",
      location: "Kensington, Maryland, United States",
      dedicated: "1974, November, 19",
      area: 156558,
      imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/washington-dc/400x250/washington_dc_temple-exterior-2.jpeg"
    },
    {
      templeName: "Lima Perú",
      location: "Lima, Perú",
      dedicated: "1986, January, 10",
      area: 9600,
      imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/lima-peru/400x250/lima-peru-temple-evening-1075606-wallpaper.jpg"
    },
    {
      templeName: "Mexico City Mexico",
      location: "Mexico City, Mexico",
      dedicated: "1983, December, 2",
      area: 116642,
      imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/mexico-city-mexico/400x250/mexico-city-temple-exterior-1518361-wallpaper.jpg"
    },
    {
        templeName: "Johannesburg South Africa",
        location: "Johannesburg, South Africa",
        dedicated: "1985, August, 25",
        area: 19184,
        imageUrl:
        "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/johannesburg-south-africa/800x500/johannesburg-south-africa-temple-1021295-wallpaper.jpg"
      },
      {
        templeName: "Durban South Africa",
        location: "Durban, South Africa",
        dedicated: "2020, February, 16",
        area: 19860,
        imageUrl:
        "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/durban-south-africa/800x500/1-8b3f1b895a7c92ee66c2d0c7e78606f75f0d0cc8.jpg"
      },
      {
        templeName: "Rome Italy",
        location: "Rome, Italy",
        dedicated: "2019, March, 12",
        area: 41010,
        imageUrl:
        "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/rome-italy/2019/800x500/1-Rome-Temple-2160936.jpg"
      },
    
  ];

createTempleCard(temples);

const nonUtahLink = document.querySelector("#nonUtahLink");
const oldLink = document.querySelector("#old");
const newLink = document.querySelector("#new");
const largeLink = document.querySelector("#large");
const smallLink = document.querySelector("#small");
const homeLink = document.querySelector("#home");


//nonUtahLink.addEventListener("click", () => {
    //createTempleCard(temples.filter(temple => temple.location.includes("Utah")));
//});

oldLink.addEventListener("click", () => {
    createTempleCard(temples.filter(temple => {
        const year = parseInt(temple.dedicated.split(",")[0]); 
        return year < 1900;
    }));
});

newLink.addEventListener("click", () => {
    createTempleCard(temples.filter(temple => {
        const year = parseInt(temple.dedicated.split(",")[0]); 
        return year > 2000;
    }));
});

largeLink.addEventListener("click", () => {
    createTempleCard(temples.filter(temple => temple.area > 90000));
});

smallLink.addEventListener("click", () => {
    createTempleCard(temples.filter(temple => temple.area < 10000));
});

homeLink.addEventListener("click", () => {
    createTempleCard(temples);
});

function createTempleCard(filteredTemples) {
    document.querySelector(".res-grid").innerHTML = "";
    filteredTemples.forEach(temple => {
        let img = document.createElement("img");
        let card = document.createElement("section");
        let name = document.createElement("h3");
        let location = document.createElement("p");
        let dedication = document.createElement("p");
        let area = document.createElement("p");

        img.setAttribute("loading", "lazy");
        name.textContent = temple.templeName;
        location.innerHTML = `<span class="label">Location:</span> ${temple.location}`;
        dedication.innerHTML = `<span class="label">Dedication:</span> ${temple.dedicated}`;
        area.innerHTML = `<span class="label">Size:</span> ${temple.area} sq ft`;
        img.setAttribute("src", temple.imageUrl);
        img.setAttribute("alt", `${temple.templeName} Temple`);
        

        card.appendChild(img);
        card.appendChild(name);
        card.appendChild(location);
        card.appendChild(dedication);
        card.appendChild(area);
        

        document.querySelector(".res-grid").appendChild(card);
    })
}