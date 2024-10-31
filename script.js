"use strict";
/* ---------------------- Education ---------------------- */
const toggleButtonEducation = document.getElementById("toggleEducation");
const education = document.getElementById("education");
toggleButtonEducation.addEventListener("click", () => {
    if (education.style.display === "none") {
        education.style.display = "block";
        toggleButtonEducation.textContent = "Hide Education";
    }
    else {
        education.style.display = "none";
        toggleButtonEducation.textContent = "Show Education";
    }
});
