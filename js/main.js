import data from './key.json' assert { type: "json" };
(function(){
    const keyboard = document.querySelector(".keypad");
    const down = document.querySelectorAll(".down");
    const up = document.querySelectorAll(".up");
    const trySection = document.querySelector(".try");
    let options = {
        root: trySection,
        rootMargin: '0px',
        treshold: 1.0
    }

    data.forEach(elem => {
        let keyRow = document.createElement("div");
        keyRow.classList = "key-row f";
        for(let i = 0; i < elem.length; i++)
        {
                let clas = elem[i].key.width;
                let symbol = elem[i].key.symbol;
                let rand = Math.ceil(Math.random() * elem.length);
                let key = document.createElement("button");
                key.classList = `key ${clas}`;
                key.textContent = symbol;
                key.style.boxShadow = i == rand ? `0px 0px 15px 8px #FF11${rand*8}` : 0;
                keyRow.appendChild(key)
            }
            keyboard.appendChild(keyRow);
        });
    const downtoup = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if(entry.isIntersecting)
            {
                entry.target.style.opacity = "1";
                entry.target.style.animation = "fadeInDownToUp 1s  backwards ease-in-out";
            }
            })
        });
        const uptodown = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
            if(entry.isIntersecting)
            {
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

})();