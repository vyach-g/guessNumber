var randomNumber
var guessNumber
var value

newRandom = function() {
    randomNumber = Math.floor(Math.random()*100)
    console.log(randomNumber)
}



document.querySelector("#inp").addEventListener("keyup", event => {
    if(event.key !== "Enter") return;
    document.querySelector("#butt").click();
    event.preventDefault();
});



attempt = function() {
    value = document.getElementById('inp').value;
    if (value==randomNumber) {
        document.getElementById('res').innerHTML="<b>Вы угадали!</b><br>Загадано новое число";
        newRandom();
    } 
    else if (value<0) document.getElementById('res').innerHTML="Только положительные <br> числа";
    else if (value-randomNumber>0 && value-randomNumber<10) document.getElementById('res').innerHTML="Загаданное число <br> немного меньше";
    else if (value-randomNumber>=10 && value-randomNumber<100) document.getElementById('res').innerHTML="Загаданное число <br> много меньше";
    else if (randomNumber-value>0 && randomNumber-value<10) document.getElementById('res').innerHTML="Загаданное число <br> немного больше";
    else if (randomNumber-value>=10 && randomNumber-value<100) document.getElementById('res').innerHTML="Загаданное число <br> много больше";
    else document.getElementById('res').innerHTML="Вводите числа";
};

newRandom()
