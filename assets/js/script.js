const nextBtn = document.getElementById("next-button")
const previousBtn = document.getElementById("previous-button")
const form = document.querySelectorAll(".stepper")
const icons = document.querySelectorAll(".icon")
const bar = document.getElementById('bar')
const submit = document.getElementById('submit')
const email = document.getElementById('email')
const fullName = document.getElementById('fullName')
const phone = document.getElementById('phone')
const address = document.getElementById('address')

const position = document.getElementById('position')
const level = document.getElementById('level')
const languages = document.getElementById('languages')
const tools = document.getElementById('tools')
const data = document.getElementById('data')
const frames = document.getElementById('frames')
const skills = document.getElementById('skills')

const nameError = document.getElementById('nameError')
// let array = ['eve', 'adam', 'lilith']

// for (let i = 0; i < array.length; i++) {

//     const p = document.createElement('p')
//     p.textContent = array[i]
//     bar.appendChild(p)
// }





let page = 0;
console.log(icons);

for (let icon of icons) {
        icon.addEventListener("click",(e)=>{
            page = Number(icon.getAttribute("id"))-1
            console.log(page) 
            display()
             window.scrollTo({
                top: 0,
                behavior: "smooth"
            });
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
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        })
}
            
)
previousBtn.addEventListener("click", (e) => {
    if (page > 0) {
        page -= 1;
    }
    console.log(page);
    display()
    window.scrollTo({
            top: 0,
            behavior: "smooth"
        })
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

  const emailRegex = /^[\w\.-]+@[\w\.-]+\.\w{2,}$/;
  const nameRegex =  /^[A-Za-z]+(?:[ -][A-Za-z]+)*$/;
  const phoneRegex = /^(?:\+212|0)(5|6|7)\d{8}$/;
  // position level languages tools data frames skills
submit.addEventListener("click",(e)=>{
            e.preventDefault()
            
            if (email.value ==="" || fullName.value ==="" || phone.value ==="" || position.value ==="" || level.value ==="" || tools.value ==="" || data.value ==="" || frames.value ==="" || skills.value ==="") {
                nameError.textContent = "make sure to fill all the required infos"
            }else if(!emailRegex.test(email.value)){
                nameError.textContent = "email is invalid"
            }
            
            else if(!nameRegex.test(fullName.value)){
                nameError.textContent = "full name is invalid"
            }
            
            else if(!phoneRegex.test(phone.value)){
                nameError.textContent = "phone number is invalid"
            }
})


