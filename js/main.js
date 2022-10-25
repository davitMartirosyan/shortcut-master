(function () {
    
let data = [
    [
        {"key":{"symbol":"Tab", "width":"mid", "highlight":false}},
        {"key":{"symbol":"Q", "width":"low", "highlight":false}},
        {"key":{"symbol":"W", "width":"low", "highlight":false}},
        {"key":{"symbol":"E", "width":"low", "highlight":false}},
        {"key":{"symbol":"R", "width":"low", "highlight":false}},
        {"key":{"symbol":"T", "width":"low", "highlight":false}},
        {"key":{"symbol":"Y", "width":"low", "highlight":false}},
        {"key":{"symbol":"U", "width":"low", "highlight":false}},
        {"key":{"symbol":"I", "width":"low", "highlight":false}},
        {"key":{"symbol":"O", "width":"low", "highlight":false}},
        {"key":{"symbol":"P", "width":"low", "highlight":false}},
        {"key":{"symbol":"{ [", "width":"low", "highlight":false}},
        {"key":{"symbol":"] }", "width":"low", "highlight":false}},
        {"key":{"symbol":"| \/ ", "width":"mid", "highlight":false}}
    ],
    [
        {"key":{"symbol":"Caps Lock", "width":"midd", "highlight":false}},
        {"key":{"symbol":"A", "width":"low", "highlight":false}},
        {"key":{"symbol":"S", "width":"low", "highlight":false}},
        {"key":{"symbol":"D", "width":"low", "highlight":false}},
        {"key":{"symbol":"F", "width":"low", "highlight":false}},
        {"key":{"symbol":"G", "width":"low", "highlight":false}},
        {"key":{"symbol":"H", "width":"low", "highlight":true}},
        {"key":{"symbol":"J", "width":"low", "highlight":false}},
        {"key":{"symbol":"K", "width":"low", "highlight":false}},
        {"key":{"symbol":"L", "width":"low", "highlight":false}},
        {"key":{"symbol":":  ;", "width":"low", "highlight":false}},
        {"key":{"symbol":" \"  ' ", "width":"low", "highlight":false}},
        {"key":{"symbol":"⏎ Enter", "width":"large fl", "highlight":false}}
    ],
    [
        {"key":{"symbol":"Shift", "width":"large", "highlight":false}},
        {"key":{"symbol":"Z", "width":"low", "highlight":false}},
        {"key":{"symbol":"X", "width":"low", "highlight":false}},
        {"key":{"symbol":"C", "width":"low", "highlight":false}},
        {"key":{"symbol":"V", "width":"low", "highlight":false}},
        {"key":{"symbol":"B", "width":"low", "highlight":false}},
        {"key":{"symbol":"N", "width":"low", "highlight":false}},
        {"key":{"symbol":"M", "width":"low", "highlight":false}},
        {"key":{"symbol":"<  ,", "width":"low", "highlight":false}},
        {"key":{"symbol":".  >", "width":"low", "highlight":false}},
        {"key":{"symbol":"?  / ", "width":"low", "highlight":false}},
        {"key":{"symbol":"Shift", "width":"large", "highlight":false}}
    ],
    [
        {"key":{"symbol":"Ctrl", "width":"low", "highlight":false}},
        {"key":{"symbol":"Fn", "width":"low", "highlight":false}},
        {"key":{"symbol":"⊞", "width":"low", "highlight":false}},
        {"key":{"symbol":"alt", "width":"low", "highlight":false}},
        {"key":{"symbol":" ", "width":"largelarge", "highlight":false}},
        {"key":{"symbol":"alt", "width":"low", "highlight":false}},
        {"key":{"symbol":"Ctrl", "width":"low", "highlight":false}}
        
    ]
];
    
    const keyboard = document.querySelector(".keypad");
    const down = document.querySelectorAll(".down");
    const up = document.querySelectorAll(".up");
    const trySection = document.querySelector(".try");
    const year = document.querySelector(".year");
    const btnBurg = document.querySelector(".singular");
    const toolsMenu = document.querySelector(".tool-bar");
    const ylw = document.querySelector(".btn-yellow");
    let tools = document.querySelectorAll(".tool");
    // console.log(tool);
    // tools = Array.from(tools);
    tools.forEach((tool) => {
        tool.addEventListener("click", (e)=>{
            ylw.children[0].classList = "tool-shortcut";
            ylw.children[0].textContent = e.target.dataset.shortcut;
            ylw.children[1].textContent = e.target.dataset.role;
            ylw.style.marginTop = "25px";
            ylw.style.boxShadow = "0 0 0";
            setTimeout(()=>{
                ylw.style.marginTop = "0";
                if(ylw.classList.contains("btn-yellow"))
                    ylw.style.boxShadow = "0 25px 0 var(--prm-btn-shdw-clr)";
                else
                    ylw.style.boxShadow = "0 25px 0 var(--btn-shdw-clr)";

            }, 200);
        })
    });
    let options = {
        root: trySection,
        rootMargin: '0px',
        treshold: 1.0
    }
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
        btnBurg.parentElement.classList.toggle("active-header");
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


