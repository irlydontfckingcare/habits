function alerta() {
    let inputTxt = document.getElementById('habit-input').value
    console.log("a: " + inputTxt)
    if (inputTxt.length == 0) 
        alert("Kannste ned schreiben?!")
     else 
        alert("du magst " + inputTxt.toUpperCase());
}
