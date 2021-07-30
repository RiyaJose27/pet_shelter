function disappear(element){
    element.remove()
}

var petCount = document.querySelector('#pet')
var items =3;



function addTo(){
    items++;
    petCount.innerText = items +  ' ' + "Petting(s)";
}


var peCount = document.querySelector('#pets')
var add = 5;
function tryTo(){
    add++;
    peCount.innerText = add + ' ' + "Petting(s)";
}


var aniCount = document.querySelector('#pett')
var incre = 8;
// aniCount.innerText = incre;
function countTo(){
    incre++;
    aniCount.innerText = incre +  ' ' + "Pettings(s)";
}


function choice1(select) 
{
    alert(select.options[select.selectedIndex].value);
}