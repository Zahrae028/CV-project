const nextBtn = document.getElementById("next-button")
const previousBtn = document.getElementById("previous-button")
const form = document.querySelectorAll(".stepper")
const icons = document.querySelectorAll(".icon")

let page = 0;
console.log(icons);

for (let icon of icons) {
        icon.addEventListener("click",(e)=>{
            page = Number(icon.textContent)-1
            console.log(page) 
            display()
        }
        )
   
}

for (let item of form) {
    console.log(item)
}
nextBtn.addEventListener("click", (e) => {
    if (page < 3) {
        page += 1;
    }
console.log(page);
    display()

})
previousBtn.addEventListener("click", (e) => {
    if (page > 0) {
        page -= 1;
    }
    console.log(page);
    display()

})
display()
function display() {
    for (let i = 0; i < form.length; i++) {
        if (i!=page) {
            form[i].style.display='none'
            icons[i].style.fontSize = "2rem";
            icons[i].style.color = '#ffc107'; 
        }
        form[page].style.display='flex'
        icons[page].style.fontSize = "3rem";
        icons[page].style.color = '#ffff00';
        
    }
    if (page == 1) {
     
    }
}