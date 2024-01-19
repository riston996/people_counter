document.getElementById("count-el").innerText = 5;

let count = 5;
count= count +  1;

function increment() {
    count++;
    document.getElementById("count-el").innerText = count;
}

function save() {
    document.getElementById("save-el").innerText = document.getElementById("save-el").innerText  + "-" + count;
    count=0;
    document.getElementById("count-el").innerText = 0;
}