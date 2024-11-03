let counter = 0;
const count = document.querySelector(".count")
const btns = document.querySelectorAll(".btn")

btns.forEach(btn => {
    btn.addEventListener("click", e=>{
        let elementId = e.currentTarget.id;
        if (elementId == 'decrease'){
            counter --;
        }
        else if(elementId =='reset'){
            counter = 0
        }
        else {
            counter ++;
        }
        if (counter>0){
            count.style.color = "green"
        }
        if (counter < 0){
            count.style.color = "red"
        }
        if (counter == 0){
            count.style.color = "#222"
        }


          count.textContent = counter;
    })
}

)