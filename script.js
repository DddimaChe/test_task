let circles = document.getElementsByClassName('circle');

let colors = ['#FF5733', '#FFC300', '#FF5733', '#C70039', '#900C3F', '#900C3F', '#0000FF' , '#999999','#FF5CB8','#4E6EFF','#F517FF','#F112FD'];

for(let j = 0; j<colors.length;j++) {
    circles[j]['style']['background-color'] = colors[j];
}


let i = 0;
setInterval(() => {

    for(let j = 0; j<colors.length;j++) {
        circles[j]['style']['background-color'] = colors[(j + i) % colors.length];
    }

    i++;
}, 1000);


function myFunction() {

    document.getElementsByClassName("circle")[0].style.transform = "rotate(0deg)";
    document.getElementsByClassName("circle")[1].style.transform = "rotate(-30deg)";
    document.getElementsByClassName("circle")[2].style.transform = "rotate(-60deg)";
    document.getElementsByClassName("circle")[3].style.transform = "rotate(-90deg)";
    document.getElementsByClassName("circle")[4].style.transform = "rotate(-120deg)";
    document.getElementsByClassName("circle")[5].style.transform = "rotate(-150deg)";
    document.getElementsByClassName("circle")[6].style.transform = "rotate(-180deg)";
    document.getElementsByClassName("circle")[7].style.transform = "rotate(-210deg)";
    document.getElementsByClassName("circle")[8].style.transform = "rotate(-240deg)";
    document.getElementsByClassName("circle")[9].style.transform = "rotate(-270deg)";
    document.getElementsByClassName("circle")[10].style.transform = "rotate(-300deg)";
    document.getElementsByClassName("circle")[11].style.transform = "rotate(-330deg)";
}