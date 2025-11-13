const nextBtn = document.getElementById("next-button")
const previousBtn = document.getElementById("previous-button")
const form = document.querySelectorAll(".stepper")
const icons = document.querySelectorAll(".icon")
const bar = document.getElementById('bar')
const submit = document.getElementById('submit')
const save1 = document.getElementById('save-button1')
const save2 = document.getElementById('save-button2')

const email = document.getElementById('email')
const fullName = document.getElementById('fullName')
const phone = document.getElementById('phone')
const address = document.getElementById('address')
const pfp = document.getElementById('cv-pic')
const picInput = document.getElementById('pic-input')
const showPic = document.getElementById('show-pic')

// const position = document.getElementById('position')
// const level = document.getElementById('level')

const progLang = document.getElementById('prog-lang')
const tools = document.getElementById('tools')
const data = document.getElementById('data')
const frames = document.getElementById('frames')
const skills = document.getElementById('skills')
const linked = document.getElementById('linkedin')
const github = document.getElementById('github')
const language = document.getElementById('language')
const proficiency = document.getElementById('proficiency')
const school = document.getElementById('school')
const field = document.getElementById('field')
const years = document.getElementById('years')
const degree = document.getElementById('degree')
const hobby = document.getElementById('hobby')


const nameError = document.getElementById('nameError')
const add = document.getElementById('add-button')
const addInfo = document.getElementById('add-info')
const remove = document.getElementById('remove-button')

const cvName = document.getElementById('cv-name');
const cvEmail = document.getElementById('cv-email');
const cvPhone = document.getElementById('cv-phone');
const cvAddress = document.getElementById('cv-address')
const cvSkills = document.getElementById('cv-skills');
const cvProgLangs = document.getElementById('cv-prog-lang');
const cvFrames = document.getElementById('cv-frames');
const cvTools = document.getElementById('cv-tools');
const cvData = document.getElementById('cv-database')
const cvLinkedin = document.getElementById('cv-linkedin');
const cvGithub = document.getElementById('cv-github')
const cvLangs = document.getElementById('cv-language')
const cvProfic = document.getElementById('cv-proficiency-level')
const cvSchool = document.getElementById('cv-school-name')
const cvField = document.getElementById('cv-field-of-study')
const cvYears = document.getElementById('cv-years-attended')
const cvDegree = document.getElementById('cv-degree-name')
const cvHobby = document.getElementById('cv-hobby-name')
const pfp2 = document.getElementById('cv-pic2')

const cvName2 = document.getElementById('cv-name2');
const cvEmail2 = document.getElementById('cv-email2');
const cvPhone2 = document.getElementById('cv-phone2');
const cvAddress2 = document.getElementById('cv-address2');
const cvSkills2 = document.getElementById('cv-skills2');
const cvProgLangs2 = document.getElementById('cv-prog-lang2');
const cvFrames2 = document.getElementById('cv-frames2');
const cvTools2 = document.getElementById('cv-tools2');
const cvData2 = document.getElementById('cv-database2');
const cvLinkedin2 = document.getElementById('cv-linkedin2');
const cvGithub2 = document.getElementById('cv-github2');
const cvLangs2 = document.getElementById('cv-language2');
const cvProfic2 = document.getElementById('cv-proficiency-level2');
const cvSchool2 = document.getElementById('cv-school-name2');
const cvField2 = document.getElementById('cv-field-of-study2');
const cvYears2 = document.getElementById('cv-years-attended2');
const cvDegree2 = document.getElementById('cv-degree-name2');
const cvHobby2 = document.getElementById('cv-hobby-name2');




let userData = {};





picInput.addEventListener('change', () => {
    console.log("FILE CHANGED");
});

let page = 0;
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
        skills: skills.value,
        language: language.value,
        proficiency: proficiency.value,
        school: school.value,
        field: field.value,
        years: years.value,
        degree: degree.value,
        hobby: hobby.value,
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
    cvAddress.textContent = userData.personalData.address
    cvName2.textContent = userData.personalData.name;
    cvEmail2.textContent = userData.personalData.email;
    cvPhone2.textContent = userData.personalData.phone;
    cvAddress2.textContent = userData.personalData.address;


    cvSkills.textContent = userData.skills
    cvProgLangs.textContent = userData.progLang
    cvFrames.textContent = userData.frames
    cvTools.textContent = userData.tools
    cvData.textContent = userData.data
    cvLangs.textContent = userData.language
    cvProfic.textContent = userData.proficiency
    cvSchool.textContent = userData.school
    cvField.textContent = userData.field
    cvYears.textContent = userData.years
    cvDegree.textContent = userData.degree
    cvHobby.textContent = userData.hobby

    cvSkills2.textContent = userData.skills;
    cvProgLangs2.textContent = userData.progLang;
    cvFrames2.textContent = userData.frames;
    cvTools2.textContent = userData.tools;
    cvData2.textContent = userData.data;
    cvLangs2.textContent = userData.language;
    cvProfic2.textContent = userData.proficiency;
    cvSchool2.textContent = userData.school;
    cvField2.textContent = userData.field;
    cvYears2.textContent = userData.years;
    cvDegree2.textContent = userData.degree;
    cvHobby2.textContent = userData.hobby;


    cvLinkedin.setAttribute('href', `${linked.value}`)
    cvGithub.setAttribute('href', `${github.value}`)

    cvLinkedin2.setAttribute('href', `${linked.value}`);
cvGithub2.setAttribute('href', `${github.value}`);




})
picInput.addEventListener('change', () => {

    if (picInput.files[0]) {
        pfp.src = URL.createObjectURL(picInput.files[0]);
        pfp2.src = URL.createObjectURL(picInput.files[0]);
        showPic.src = URL.createObjectURL(picInput.files[0]);
    }

})





function progress() {
    bar.style.transition = "background 1s ease";
    if (page == 0) {
        bar.style.background = 'linear-gradient(to right,#c66507,#612B0C,#612B0C , #612B0C';

    } else if (page == 1) {
        bar.style.background = 'linear-gradient(to right,#c66507,#c66507,#612B0C , #612B0C';
    } else if (page == 2) {
        bar.style.background = 'linear-gradient(to right,#c66507,#c66507,#c66507 , #612B0C';
    } else {
        bar.style.background = 'linear-gradient(to right,#c66507,#c66507,#c66507 , #c66507';
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


save1.addEventListener('click', (e) => {
    const cv = document.getElementById('CV')
    var opt = {
        margin: 0,
        filename: 'myCV.pdf',
        image: { type: 'jpeg' },

        jsPDF: { unit: 'mm', format: 'letter', orientation: 'portrait' }
    };

 
    html2pdf().set(opt).from(cv1).save();
})
save2.addEventListener('click', (e) => {
    const cv1 = document.getElementById('CV1')
    const cv2 = document.getElementById('CV2')
    var opt = {
        margin: 0,
        filename: 'myCV.pdf',
        image: { type: 'jpeg' },
        jsPDF: { unit: 'mm', format: 'letter', orientation: 'portrait' }
    };

    html2pdf().set(opt).from(cv2).save();
})


