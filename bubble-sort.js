submit.addEventListener("click", async() =>{
    await new Promise(resolve => setTimeout(resolve, 1000));
    for(let tope = arr.length-1; tope > 0; tope--){
        for(let element = 0; element < tope; element++){
            const swapA = document.getElementById(`member-${element}`);
            const swapB = document.getElementById(`member-${element+1}`);
            swapA.classList.add("selected-element");
            await new Promise(resolve => setTimeout(resolve, 400))
            if(arr[element] > arr[element+1]){
                    arr[element] = arr[element] ^ arr[element+1];
                    arr[element+1] = arr[element] ^ arr[element+1];
                    arr[element] = arr[element] ^ arr[element+1];
                    swapA.innerText = arr[element];
                    swapA.style.height = `${arr[element] * 4 +10}px`
                    swapB.innerText = arr[element+1];
                    swapB.style.height = `${arr[element+1] * 4 +10}px`
            }
            await new Promise(resolve => setTimeout(resolve, 600));
            swapA.classList.remove("selected-element");
        }
        const sortedElement = document.getElementById(`member-${tope}`);
        sortedElement.classList.add("sorted-element");
    }
    document.getElementById("member-0").classList.add("sorted-element");
});