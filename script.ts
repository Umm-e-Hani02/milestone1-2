/* ---------------------- Education ---------------------- */ 

const toggleButtonEducation = document.getElementById("toggleEducation") as HTMLButtonElement
const education = document.getElementById("education") as HTMLButtonElement

toggleButtonEducation.addEventListener("click", () => {
    if (education.style.display === "none") {
        education.style.display = "block"
        toggleButtonEducation.textContent = "Hide Education";
    } else {
        education.style.display = "none"
        toggleButtonEducation.textContent = "Show Education";
    }
});

/* ---------------------- Skills ---------------------- */ 

const toggleButtonSkills = document.getElementById("toggleSkills") as HTMLButtonElement
const skills = document.getElementById("skillsList") as HTMLButtonElement

toggleButtonSkills.addEventListener("click", () => {
    if(skills.style.display === "none"){
        skills.style.display = "block"
        toggleButtonSkills.textContent = "Hide Skills";
    } else {
        skills.style.display = "none"
        toggleButtonSkills.textContent = "Show Skills";
    }

})

/* ---------------------- Work Experience ---------------------- */ 

const toggleButtonWork = document.getElementById("toggleWorkExperience") as HTMLButtonElement
const workExperience = document.getElementById("workExperience") as HTMLElement

toggleButtonWork.addEventListener("click", ()=> {
    if (workExperience.style.display === "none") {
        workExperience.style.display = "block"
        toggleButtonWork.textContent = "Hide Work Experience";
    } else {
        workExperience.style.display = "none"
        toggleButtonWork.textContent = "Show Work Experience";
    }
});

