//1. feladat

function n() {
    let numb = prompt("Kérem adjon meg egy számot!");
    let j = 1;
    let k = 1;

    for (let i = 1; i < numb; i++) {
        k += 2;
        j += k;
    }

    console.log(j);;
}

n();


//2. feladat

function arrayMin(array) {
    var sortArray = array.sort((a, b) => {
        if (a < b)
            return -1
        if (a > b)
            return 1

        return 0

    })
    return sortArray[0];
}


//3. feladat

var szoveg = "Botond talált 5 cukorkát. Ebből 2 darabot odaadott Sárának, így maradt neki 3 cukorkája, amiből 1-et Zsuzsának adott. Végül Botondnak 2 cukorkája maradt.";

//3.a és b. feladat
function filterNumbers(text) {
    let regex = /[0-9]{1,}/g
    return text.match(regex);
}
console.log(filterNumbers(szoveg));

//3.c. feladat
console.log(arrayMin(filterNumbers(szoveg)));

//3. d. feladat
function sentences(text) {
    let regex = /[[A-zűáéőúóüöíÍÉÁŰÚŐÓÜÖ\s\d\,\-]{1,}[\.\!\?]{1}/gi;
    let sentencesText = text.match(regex);
    let paragraph = document.querySelector(".sentences");

    for (let i of sentencesText) {
        let p = document.createElement("p");
        p.innerHTML = i;
        paragraph.appendChild(p);
    }
}

//4. feladat
function pastDays(dateString) {
    let now = new Date();
    let pastDate = new Date(dateString);
    let diffDays = now.getTime() - pastDate.getTime()
    let days = Math.ceil(diffDays / (1000 * 60 * 60 * 24));

    let sel = document.querySelector(".days");
    let span = document.createElement("span");
    span.innerHTML = days;
    sel.appendChild(span);
    span.style.backgroundColor = "rgb(239, 128, 128)";
    span.style.color = "red";
}

var date = "2021.11.20.";

pastDays(date);

//5. feladat
class negyzethalo {
    constructor(sor, oszlop, selector) {
        this.sor = sor;
        this.oszlop = oszlop;
        this.selector = selector;
        this.log1()
    }

    log1() {
        let k = 1;
        for (let i = 0; i < this.sor; i++) {
            let divI = document.createElement("div");
            divI.setAttribute("class", "sorok")
            this.selector.appendChild(divI);
            for (let j = 0; j < this.oszlop; j++) {
                let divJ = document.createElement("div");
                divJ.setAttribute("class", "oszlopok");
                divI.appendChild(divJ)
                divJ.innerHTML = k
                k++;
            }
        }
    }
}

var halo = new negyzethalo(6, 10, document.querySelector(".negyzethalo"))



//6. feladat
function request(url, success) {
    let xhttp = new XMLHttpRequest();

    xhttp.onreadystatechange = function () {
        if (this.readyState == 4 && this.status == 200)
            success(this.responseText);

    }

    xhttp.open("GET", url);
    xhttp.send();
}

var titleTemplate = t => `
<li>Title: ${t.title}</li>
`;

request("https://jsonplaceholder.typicode.com/todos", function (res) {
    let titles = JSON.parse(res);
    var ul = document.querySelector(".list-title")

    for (let title of titles) {
        if (!title.completed) {
            ul.innerHTML += titleTemplate(title);
        }
    }

})