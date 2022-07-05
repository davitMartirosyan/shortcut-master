(function(){
    let terminal = document.querySelector(".command-line");
    let time;
    terminal.addEventListener("keyup", (e)=>{
        // console.log(e.keyCode);
        let command = "photoshop";
        keyboard(e, command);
    });
    
    function keyboard(e, command){
        let termux;
        if(time !== undefined)
        clearInterval(time);
        time = setTimeout(()=>{
            termux = e.target.value;
            if(termux == command)
                console.log("ok")
        }, 1000);
    }
})();