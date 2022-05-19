let nameInputEl = document.getElementById("siteNameInput");
let siteInputEl = document.getElementById("siteUrlInput");
let buttonEl = document.getElementById("submitBtn");
let bookmarkFormEl = document.getElementById("bookmarkForm");
let nameErrorEl = document.getElementById("siteNameErrMsg");
let siteErrorEl = document.getElementById("siteUrlErrMsg");
let bookmarkListEl = document.getElementById("bookmarksList");

let formData = {
    name: "",
    email: "",
};

nameInputEl.addEventListener("change", function(event) {
    if (event.target.value === "") {
        nameErrorEl.textContent = "Required*";
    } else {
        nameErrorEl.textContent = "";
    }

    formData.name = event.target.value;
});

siteInputEl.addEventListener("change", function(event) {
    if (event.target.value === "") {
        siteErrorEl.textContent = "Required*";
    } else {
        siteErrorEl.textContent = "";
    }

    formData.email = event.target.value;
});

function validateFormData(formData) {
    let {
        name,
        email
    } = formData;
    if (name === "") {
        nameErrorEl.textContent = "Required*";
    }
    if (email === "") {
        siteErrorEl.textContent = "Required*";
    }
}

function createAndAppend(formData) {
    let listElement = document.createElement("li");
    listElement.classList.add("form-list", "d-flex", "flex-row");
    bookmarkListEl.appendChild(listElement);
    let listContainerEl = document.createElement("div");
    listElement.appendChild(listContainerEl);

    let headingEl = document.createElement("p");
    headingEl.textContent = formData.name;
    headingEl.style.color = "#323f4b";
    listContainerEl.appendChild(headingEl);

    let breakEl = document.createElement("br");
    listContainerEl.appendChild(breakEl);

    let linkEl = document.createElement("a");
    let link = document.createTextNode(formData.email);
    linkEl.appendChild(link);
    linkEl.title = formData.email;
    linkEl.href = formData.email;
    listContainerEl.appendChild(linkEl);
}


bookmarkFormEl.addEventListener("submit", function(event) {
    event.preventDefault();
    validateFormData(formData);
    createAndAppend(formData);
});