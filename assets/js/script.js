const nextBtn = document.getElementById("next-button")
const previousBtn = document.getElementById("previous-button")
const form = document.querySelectorAll(".stepper")
const icons = document.querySelectorAll(".icon")
const bar = document.getElementById('bar')
const submit = document.getElementById('submit')
const save = document.getElementById('save-button')

const email = document.getElementById('email')
const fullName = document.getElementById('fullName')
const phone = document.getElementById('phone')
const address = document.getElementById('address')
const pfp = document.getElementById('pic')

// const position = document.getElementById('position')
// const level = document.getElementById('level')

const progLang = document.getElementById('prog-lang')
const tools = document.getElementById('tools')
const data = document.getElementById('data')
const frames = document.getElementById('frames')
const skills = document.getElementById('skills')
const linked = document.getElementById('linkedin')



const nameError = document.getElementById('nameError')
const add = document.getElementById('add-button')
const addInfo = document.getElementById('add-info')
const remove = document.getElementById('remove-button')

const cvName = document.getElementById('cv-name');
const cvEmail = document.getElementById('cv-email');
const cvPhone = document.getElementById('cv-phone');
const cvSkills = document.getElementById('cv-skils');
const cvProgLangs = document.getElementById('cv-prog-lang');
const cvFrames = document.getElementById('cv-frames');
const cvTools = document.getElementById('cv-tools');
const cvData = document.getElementById('cv-database')
const cvLinkedin = document.getElementById('cv-linkedin');



let userData = {};

// let array = ['eve', 'adam', 'lilith']

// for (let i = 0; i < array.length; i++) {

//     const p = document.createElement('p')
//     p.textContent = array[i]
//     bar.appendChild(p)
// }





let page = 3;
console.log(icons);

for (let icon of icons) {
    icon.addEventListener("click", (e) => {
        page = Number(icon.getAttribute("id")) - 1
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
        if (i != page) {
            form[i].style.display = 'none'
            icons[i].style.color = '#ffc107';
        }
        form[page].style.display = 'flex'
        icons[page].style.color = '#ffff00';

    }

    if (page == 3) {
        submit.style.display = 'none'
        nextBtn.style.display = 'none'
    } else {
        submit.style.display = 'block'
        nextBtn.style.display = 'block'
    }
    progress()
}

const emailRegex = /^[\w\.-]+@[\w\.-]+\.\w{2,}$/;
const nameRegex = /^[A-Za-z]+(?:[ -][A-Za-z]+)*$/;
const phoneRegex = /^(?:\+212)(5|6|7)\d{8}$/;



submit.addEventListener("click", (e) => {
    e.preventDefault()
    userData = {
        personalData: {

            name: fullName.value,
            email: email.value,
            phone: phone.value,
            address: address.value,
        },

        progLang: progLang.value,
        tools: tools.value.split(","),
        data: data.value.split(","),
        frames: frames.value.split(","),
        skills: skills.value.split(",")
    }


    if (email.value === "" || fullName.value === "" || phone.value === "" || progLang.value === "" || tools.value === "" || data.value === "" || frames.value === "" || skills.value === "") {
        nameError.textContent = "make sure to fill all the required infos"
    } else if (!emailRegex.test(email.value)) {
        nameError.textContent = "email is invalid"
    }

    else if (!nameRegex.test(fullName.value)) {
        nameError.textContent = "full name is invalid"
    }

    else if (!phoneRegex.test(phone.value)) {
        nameError.textContent = "phone number is invalid"
    }
    else {
        nameError.textContent = "fe"
    }
    console.log(userData.skills)

    localStorage.setItem('cvData', JSON.stringify(userData))
    cvName.textContent = userData.personalData.name
    cvEmail.textContent = userData.personalData.email
    cvPhone.textContent = userData.personalData.phone

    // cvSkills.textContent = userData.skills[0]
    cvProgLangs.textContent = userData.progLang
    cvFrames.textContent = userData.frames
    cvTools.textContent = userData.tools
    cvLinkedin.setAttribute('href', `${linked.value}`)


})




function progress() {
    bar.style.transition = "background 1s ease";
    if (page == 0) {
        bar.style.background = 'linear-gradient(to right,#b45309,#612B0C,#612B0C , #612B0C';

    } else if (page == 1) {
        bar.style.background = 'linear-gradient(to right,#b45309,#b45309,#612B0C , #612B0C';
    } else if (page == 2) {
        bar.style.background = 'linear-gradient(to right,#b45309,#b45309,#b45309 , #612B0C';
    } else {
        bar.style.background = 'linear-gradient(to right,#b45309,#b45309,#b45309 , #b45309';
    }

}

add.addEventListener('click', (e) => {
    addInfo.style.display = 'flex'
    add.style.display = 'none'
    remove.style.display = 'block'
})
remove.addEventListener('click', (e) => {
    addInfo.style.display = 'none'
    add.style.display = 'block'
    remove.style.display = 'none'
})

