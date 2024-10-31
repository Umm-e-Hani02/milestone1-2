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
