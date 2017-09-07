var colors = getColorArray(6);
var colorMessage = document.getElementById('successMessage');
var squares = document.querySelectorAll('.square');
var pickedColor = colors[randomColorPicker()];
var h = document.querySelector("h1");
var resetButton=document.querySelector('#reset');
var easyButton = document.querySelector('#easy');
var hardButton = document.querySelector("#hard");

easyButton.addEventListener("click",function(){
    hardButton.classList.remove("selected");
    easyButton.classList.add("selected");
    colorMessage.textContent = '';    
    buttonColors(3);
    squares[3].style.display = 'none';
    squares[4].style.display = 'none';
    squares[5].style.display = 'none';
    resetButton.addEventListener('click',function(){
        buttonColors(3);
        colorMessage.textContent = '';
    });
});

hardButton.addEventListener("click",function(){
    hardButton.classList.add("selected");
    easyButton.classList.remove("selected");
    squares[3].style.display = 'block';
    squares[4].style.display = 'block';
    squares[5].style.display = 'block';
    resetButton.addEventListener('click',function(){
        buttonColors(6);
        colorMessage.textContent = '';
    });

});



document.getElementById('colorCode').textContent = pickedColor;

function buttonColors(n){
    colors = getColorArray(n);
    for (var i=0;i<squares.length;i++){
        squares[i].style.background=colors[i];        
    }
    pickedColor = colors[randomColorPicker()];
    document.getElementById('colorCode').textContent = pickedColor;
    h.style.background = 'rgb(49, 41, 41)';
}




for (var i=0;i<squares.length;i++){
    squares[i].style.background=colors[i];
    squares[i].addEventListener("click", function(){
        var clickColor = this.style.background;
   
        if (pickedColor.trim()==clickColor.trim()){
            colorMessage.textContent = "Correct";
            change_all_square_color(clickColor);
            h.style.background = clickColor;
            resetButton.textContent = "Play again";
        }
        else{
            this.style.background = 'rgb(49, 41, 41)';
            colorMessage.textContent = "Wrong";
            
        }
    });
    
}

function change_all_square_color(clickColor){
    for (i=0;i<squares.length;i++){
        squares[i].style.background=clickColor;
    }
}

function randomColorPicker(){
    var number =  Math.floor(Math.random()*colors.length);
    return number;
}

function getColorArray(numberOfArray){
    var colors = [];
    for (var i=0;i<numberOfArray;i++){
        colors.push(makeColor());
    }
    return colors;
}

function makeColor(){
    red=    Math.floor(Math.random()*256);
    green=  Math.floor(Math.random()*256);
    blue=   Math.floor(Math.random()*256);
    return "rgb("+red+", "+green+", "+blue+")";
}

