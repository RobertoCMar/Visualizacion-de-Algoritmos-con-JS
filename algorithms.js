const submit = document.getElementById("submit-button");
const listaHTML = document.getElementById("lista-bbs");
const input = document.getElementById("input-size");
let size; 
let submitted = false;
let arr = [];

submit.addEventListener("click", () => {
    size = input.value;
    if(size < 1 || size > 50){
        alert("!ok");
    } else{
        listaHTML.innerHTML = "";
        listaHTML.style.gridTemplateColumns = `repeat(${size}, 1fr)`;
        arr = [];
        for(let i = 0; i < size; ++i){
            arr.push(Math.round(Math.random() * 100));
            listaHTML.innerHTML += `<div class="arr-member" id="member-${i}">${arr[i]}</div>`;
            let member = document.getElementById(`member-${i}`);
            member.style.height = `${arr[i]*4 + 10}px`;
        }
    }
})

