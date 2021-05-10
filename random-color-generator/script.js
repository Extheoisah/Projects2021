const generateBtn = document.querySelector("#generate-btn");
const codeText = document.querySelector("#code-text")
const cloneBtn = document.querySelector("#clone-btn")


function generateRandomNum(){
    return Math.floor(Math.random() * 255);
}

function rgbToHex(r,g,b){
    r = r.toString(16);
    g = g.toString(16);
    b = b.toString(16);
      
    if(r.length == 1)
        r = `0${r}`;
    if(g.length == 1)
        g = `0${g}`;
    if(b.length == 1)
        b = `0${b}`;
        
    return `#${r}${g}${b}`.toUpperCase();
}


function generateRandomColor() {
    red = generateRandomNum();
    blue = generateRandomNum();
    green = generateRandomNum();

    return rgbToHex(red, green, blue);
}

function copyToClipboard(){
    codeText.select();
    document.execCommand("copy");

    alert("copied to clipboard");
}

generateBtn.addEventListener('click', () => {
    const code = generateRandomColor()
    codeText.value = code;

    codeText.style.color = code;

    document.body.style.backgroundColor = code;
})

cloneBtn.addEventListener('click', copyToClipboard)
