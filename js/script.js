let typeList = "";
const firstForm = document.getElementById("request-form-type");

const appearElement = (e) => {
  const appear = document.getElementById("request-form-type");
  appear.style.display = "block";
};

const compileFormShopping = (e) => {
  const form = document.getElementById("form-shopping");
  form.addEventListener("submit", (e) => {
    e.preventDefault();

    let list = document.querySelector("#shopping-list ul");

    const thing = document.getElementById("el-shopping").value;

    list.innerHTML += `<li>
    <div>
    <button onclick="remove(event)">Remove</button>
    <p style="display: inline" onclick="cancel(event)">${thing}</p>
    </div></li>`;
    form.style.display = "none";
  });
};

const compileFormToDo = (e) => {
  const form = document.getElementById("form-to-do");

  form.addEventListener("submit", (e) => {
    e.preventDefault();

    const urgent = document.querySelectorAll("#urgent-or-not input");
    let isUrgent = "";
    urgent.forEach((choice) => {
      if (choice.checked) {
        isUrgent = choice.value;
      }
    });
    const thing = document.getElementById("what-to-do").value;

    let list = "";

    if (isUrgent === "Urgente") {
      list = document.querySelector("#urgent ul");
    } else if (isUrgent === "Non urgente") {
      list = document.querySelector("#not-urgent ul");
    }

    list.innerHTML += `<li>
    <div>
    <button onclick="remove(event)">Remove</button>
    <p style="display: inline" onclick="cancel(event)">${thing}</p>
    </div></li>`;
    form.style.display = "none";
  });
};

const saveChoice = (e) => {
  e.preventDefault();

  const choices = document.querySelectorAll("#request-form-type input");
  choices.forEach((choice) => {
    if (choice.checked) {
      typeList = choice.value;
    }
  });

  let formId;
  if (typeList === "Lista della spesa") {
    formId = document.getElementById("form-shopping");
    formId.style.display = "inline-block";
    compileFormShopping(e);
  } else if (typeList === "Lista di cose da fare") {
    formId = document.getElementById("form-to-do");
    formId.style.display = "inline-block";
    compileFormToDo(e);
  }
};

const remove = (e) => {
  console.log("e.target.parentElement", e.target.parentElement);
  e.target.parentElement.parentElement.remove();
};

const cancel = (e) => {
  e.preventDefault();
  //   if (!e.target.innerHTML.contain("cancel")) {
  e.target.classList.add("cancel");
  //   } else {
  //     e.target.classList.remove("cancel");
  //   }
};

firstForm.addEventListener("submit", saveChoice);

// Quando crei un elemento, ricordati di mettere vicino
// l'immagine di un cestino
