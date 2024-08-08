submit.addEventListener("click", async() =>{
    await new Promise(resolve => setTimeout(resolve, 1000));
    for(let tope = arr.length-1; tope > 0; tope--){
        for(let element = 0; element < tope; element++){
            console.log(`I = ${element} ${arr[element]} J = ${element+1} ${arr[element+1]}`);
            if(arr[element] > arr[element+1]){
                    arr[element] = arr[element] ^ arr[element+1];
                    arr[element+1] = arr[element] ^ arr[element+1];
                    arr[element] = arr[element] ^ arr[element+1];

                    let swapA = document.getElementById(`member-${element}`);
                    let swapB = document.getElementById(`member-${element+1}`);
                    console.log("Arreglo = " + arr[element] + " " + arr[element+1]);
                    swapA.innerText = arr[element];
                    swapA.style.height = `${arr[element] * 4 +10}px`
                    swapB.innerText = arr[element+1];
                    swapB.style.height = `${arr[element+1] * 4 +10}px`
                    await new Promise(resolve => setTimeout(resolve, 600));
            }
        }
    }
});