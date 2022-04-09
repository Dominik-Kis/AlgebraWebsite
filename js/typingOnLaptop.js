var node = document.createElement("BR");
var txt = 'Budi izvrstan u onom što vidiš!';
var txtCopy = 'Budi izvrstan u onom što vidiš!';
var txt1 = ' voliš.'
var txt2 = 'ZAISKRI.';
var i = 0;
var j = 0;
var k = 0;
var l = 0;
var a = false;
var speed = 200;
var speed2 = 500;

function typeWriter() {

if (i < txt.length) {
    document.getElementById("demo").innerHTML += txt.charAt(i);
    i++
    setTimeout(typeWriter, speed);
}

if (i == txt.length && j < txtCopy.split(" ")[txtCopy.split(" ").length - 1].length + 1) {
    
    document.getElementById("demo").innerHTML = txtCopy.substr(0, txtCopy.length - j);
    j++
    setTimeout(typeWriter, speed2);
}

if (i == txt.length && j == txtCopy.split(" ")[txtCopy.split(" ").length - 1].length + 1 && k < txt1.length){
    document.getElementById("demo").innerHTML += txt1.charAt(k);
    k++
    setTimeout(typeWriter, speed2);
    if (k == txt1.length) {
        document.getElementById("demo").appendChild(node);
        a = true;
    }
}

if (a && l < txt2.length) {
    document.getElementById("demo2").innerHTML += txt2.charAt(l);
    l++
    setTimeout(typeWriter, speed2);
}

  
}
