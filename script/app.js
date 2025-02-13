// Modal 1
const openModal1 = document.getElementById("openModal1");
const modal1 = document.getElementById("modal1");
const overlay1 = document.getElementById("overlay1");
const closeModal1 = document.getElementById("closeModal1");

openModal1.addEventListener("click", () => {
    modal1.classList.add("active");
    overlay1.classList.add("active");
});

closeModal1.addEventListener("click", () => {
    modal1.classList.remove("active");
    overlay1.classList.remove("active");
});

overlay1.addEventListener("click", () => {
    modal1.classList.remove("active");
    overlay1.classList.remove("active");
});


// Modal 2
const openModal2 = document.getElementById("openModal2");
const modal2 = document.getElementById("modal2");
const overlay2 = document.getElementById("overlay2");
const closeModal2 = document.getElementById("closeModal2");

openModal2.addEventListener("click", () => {
    modal2.classList.add("active");
    overlay2.classList.add("active");
});

closeModal2.addEventListener("click", () => {
    modal2.classList.remove("active");
    overlay2.classList.remove("active");
});

overlay2.addEventListener("click", () => {
    modal2.classList.remove("active");
    overlay2.classList.remove("active");
});


// Modal 3
const openModal3 = document.getElementById("openModal3");
const modal3 = document.getElementById("modal3");
const overlay3 = document.getElementById("overlay3");
const closeModal3 = document.getElementById("closeModal3");

openModal3.addEventListener("click", () => {
    modal3.classList.add("active");
    overlay3.classList.add("active");
});

closeModal3.addEventListener("click", () => {
    modal3.classList.remove("active");
    overlay3.classList.remove("active");
});

overlay3.addEventListener("click", () => {
    modal3.classList.remove("active");
    overlay3.classList.remove("active");
});


// Modal 4 (ya tienes un código similar para este)
const openModal4 = document.getElementById("openModal4"); // Asegúrate de que tienes un ID único en tu HTML para este.
const modal4 = document.getElementById("modal4"); // Lo mismo con el ID del modal.
const overlay4 = document.getElementById("overlay4");
const closeModal4 = document.getElementById("closeModal4");

openModal4.addEventListener("click", () => {
    modal4.classList.add("active");
    overlay4.classList.add("active");
});

closeModal4.addEventListener("click", () => {
    modal4.classList.remove("active");
    overlay4.classList.remove("active");
});

overlay4.addEventListener("click", () => {
    modal4.classList.remove("active");
    overlay4.classList.remove("active");
});




