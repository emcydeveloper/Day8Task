let a = document.getElementById("main-Container");
let str = "am from string";
let b = document.createElement("h1");
b.innerHTML=`<h6>${str}</h6>`;

a.append(b);