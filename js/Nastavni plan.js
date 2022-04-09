var specificClass = "http://www.fulek.com/VUA/supit/GetKolegij/";

var allClasses;
$.getJSON("http://www.fulek.com/VUA/SUPIT/GetNastavniPlan", function(json){
    allClasses = json;
});

var a = false;
var ectsTotal = 0;
var satiTotal = 0;


const searchWrapper = document.querySelector(".search-input");
const inputBox = searchWrapper.querySelector("input");
const suggBox = searchWrapper.querySelector(".autocom-box");
const form = document.querySelector("form")

var head = '<tr><th>Kolegij</th><th>ECTS</th><th>Sati</th><th>P</th><th>V</th><th>Tip</th></tr>';
var foot = '<tr><td>Ukupno:</td><td style="color: red" id="ectsTotal1">' + ectsTotal + '</td><td style="color: red" id="satiTotal1">' + satiTotal + '</td></tr>'


inputBox.onkeyup = (e) => {
    let userInput = e.target.value;
    var emptyArray = [];
    if (userInput) {
        for (let i = 0; i < allClasses.length; i++) {
            if (allClasses[i].label.toLocaleLowerCase().match(userInput.toLocaleLowerCase())) {
                emptyArray.push(allClasses[i].label);
            }
            
        }
        emptyArray = emptyArray.map((data)=>{
            return data = '<li>'+ data +'</li>';
        });
        searchWrapper.classList.add("active");
        showClasses(emptyArray);
        let allList = suggBox.querySelectorAll("li");
        for (let i = 0; i < allList.length; i++) {
            allList[i].setAttribute("onclick", "select(this)");
        };
    }
    else{
        searchWrapper.classList.remove("active");
    }

    console.log(emptyArray);
}

function select(element) {
    let selectClassData = element.textContent;
    inputBox.value = "";
    searchWrapper.classList.remove("active");
    if (!a) {
        $('thead').append(head);
        a = true;
    }

    $("tfoot").empty();
    $('tfoot').append(foot);

    for (let i = 0; i < allClasses.length; i++) {
        if (selectClassData == allClasses[i].label) {
            $.getJSON(specificClass + allClasses[i].value, function(classInfo){
                $('tbody').append(`<tr id="red" class="item"><td>${classInfo.kolegij}</td><td class="ECTS">${classInfo.ects}</td>
                <td class="Sati">${classInfo.sati}</td><td>${classInfo.predavanja}</td><td>${classInfo.vjezbe}</td><td>${classInfo.tip}</td>
                <td><button class="delete" style="background-color: red; border-radius: .25rem; color: white">X</button></td></tr>`)
                ectsTotal += classInfo.ects;
                satiTotal += classInfo.sati;
                console.log(ectsTotal);
                $("#ectsTotal1").empty();
                $("#ectsTotal1").append(ectsTotal)
                $("#satiTotal1").empty();
                $("#satiTotal1").append(satiTotal)
    
            });
        }
        
    }
}

$("tbody").on("click", ".delete", function () {
    $(this).closest("tr").remove();
    let curr = $(this).closest('tr');
    let currEcts = curr.find('.ECTS').text();
    let currSati = curr.find('.Sati').text();
    ectsTotal -= currEcts;
    satiTotal -= currSati;
    $("#ectsTotal1").empty();
    $("#ectsTotal1").append(ectsTotal)
    $("#satiTotal1").empty();
    $("#satiTotal1").append(satiTotal)
});


function showClasses(list) {
    let listData;
    if (!list.length) {
        userValue = inputBox.value;
        listData = '<li>' + userValue +'</li>';
    }
    else{
        listData = list.join('');
    }
    suggBox.innerHTML = listData;
    
}

