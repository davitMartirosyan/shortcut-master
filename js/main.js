import data from './key.json' assert { type: "json" };
(function () {
    const keyboard = document.querySelector(".keypad");
    const down = document.querySelectorAll(".down");
    const up = document.querySelectorAll(".up");
    const trySection = document.querySelector(".try");
    const year = document.querySelector(".year");
    const btnBurg = document.querySelector(".singular");
    let options = {
        root: trySection,
        rootMargin: '0px',
        treshold: 1.0
    }

    data.forEach(elem => {
        let keyRow = document.createElement("div");
        keyRow.classList = "key-row f";
        for (let i = 0; i < elem.length; i++) {
            let clas = elem[i].key.width;
            let symbol = elem[i].key.symbol;
            let rand = Math.ceil(Math.random() * elem.length);
            let key = document.createElement("button");
            key.classList = `key ${clas}`;
            key.textContent = symbol;
            key.style.boxShadow = i == rand ? `0px 0px 15px 8px #FF11${rand * 8}` : 0;
            keyRow.appendChild(key)
        }
        keyboard.appendChild(keyRow);
    });
    const downtoup = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = "1";
                entry.target.style.animation = "fadeInDownToUp 1s  backwards ease-in-out";
            }
        })
    });
    const uptodown = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = "1";
                entry.target.style.animation = "fadeInUpToDown 1s backwards ease-in-out";
            }
        })
    });

    down.forEach(dwn => {
        downtoup.observe(dwn);
    })
    up.forEach(up => {
        uptodown.observe(up);
    })
    window.addEventListener("load", (e) => {
        const videos = e.target.querySelectorAll("video");
        videos.forEach((video) => {
            video.muted = true;
            video.play();
        })
    })
    const newtime = new Date();
    year.textContent = newtime.getFullYear();
    btnBurg.addEventListener("click", () => {
        document.querySelector(".top-bar").classList.toggle("active");
    })
})();


let emailForm1 = document.getElementById("emailForm1");
let waitlistLabel = document.getElementById("waitlistLabel");
emailForm1.addEventListener("submit", (event) => {
    let value = event.target[0].value;
    if (value) {
        waitlistLabel.innerHTML = "Thank you for joining our waitlist!"
        console.log(event);
        console.log(event.target[0].value);
        console.log(JSON.stringify({
            fields: [
                {
                    objectTypeId: "0-1",
                    name: "email",
                    value: event.target[0].value
                }
            ]
        }));
        fetch("https://api.hsforms.com/submissions/v3/integration/submit/22745499/ca76fd6c-12ed-4096-87d6-43d79d54b35a", {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                fields: [
                    {
                        objectTypeId: "0-1",
                        name: "email",
                        value: value
                    }
                ]
            })
        })
        event.target[0].value = "";
    }
});

let emailForm2 = document.getElementById("emailForm2");
emailForm2.addEventListener("submit", (event) => {
    let value = event.target[0].value;
    if (value) {
        console.log(event);
        console.log(event.target[0].value);
        console.log(JSON.stringify({
            fields: [
                {
                    objectTypeId: "0-1",
                    name: "email",
                    value: event.target[0].value
                }
            ]
        }));
        fetch("https://api.hsforms.com/submissions/v3/integration/submit/22745499/ca76fd6c-12ed-4096-87d6-43d79d54b35a", {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                fields: [
                    {
                        objectTypeId: "0-1",
                        name: "email",
                        value: value
                    }
                ]
            })
        })
        event.target[0].value = "";
    }
});


