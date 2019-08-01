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
    for(let i =0; i< circles.length; i++)
        circles[i].style.transform = "rotate(" + (i * -30) + "deg)";
}