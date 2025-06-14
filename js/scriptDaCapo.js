let openShopping = false;
let openToDo = false;

const createListEl = (e) => {
  e.preventDefault();

  const form = document.querySelector(
    `#${e.target.parentElement.parentElement.id} form`
  );
  const list = document.querySelector(
    `#${e.target.parentElement.parentElement.id} ul`
  );
  const input = document.querySelector(
    `#${e.target.parentElement.parentElement.id} input`
  ).value;

  const elList = document.createElement("li");
  elList.classList.add("elLista");
  list.appendChild(elList);

  const p = document.createElement("p");
  p.innerText = input;
  p.addEventListener("click", () => {
    p.classList.toggle("line-through");
  });

  const divLi = document.createElement("div");
  divLi.addEventListener("mouseover", () => {
    const icon1 = divLi.childNodes[1];
    const icon2 = divLi.childNodes[2];
    icon1.style.visibility = "visible";
    icon2.style.visibility = "visible";
  });
  divLi.addEventListener("mouseleave", () => {
    const icon1 = divLi.childNodes[1];
    const icon2 = divLi.childNodes[2];
    icon1.style.visibility = "hidden";
    icon2.style.visibility = "hidden";
  });

  const cancel = document.createElement("i");
  cancel.classList.add("fas");
  cancel.classList.add("fa-times");
  cancel.addEventListener("click", () => {
    divLi.parentElement.remove();
  });

  const modify = document.createElement("i");
  modify.classList.add("fas");
  modify.classList.add("fa-pencil-alt");
  modify.addEventListener("click", () => {
    const modifiedContent = prompt(
      "Modifica a piacimento il contenuto",
      p.innerText
    );
    p.innerText = modifiedContent;
  });

  divLi.appendChild(p);
  divLi.appendChild(modify);
  divLi.appendChild(cancel);

  elList.appendChild(divLi);

  form.reset();

  // const form = document.getElementsByTagName("form")[0];
  // const list = document.querySelector("#lista ul");
  // const input = document.getElementsByTagName("input")[0].value;

  // const elList = document.createElement("li");
  // elList.classList.add("elLista");
  // list.appendChild(elList);

  // const p = document.createElement("p");
  // p.innerText = input;
  // p.addEventListener("click", () => {
  //   p.classList.toggle("line-through");
  // });

  // const divLi = document.createElement("div");
  // divLi.addEventListener("mouseover", () => {
  //   const icon1 = divLi.childNodes[1];
  //   const icon2 = divLi.childNodes[2];
  //   icon1.style.visibility = "visible";
  //   icon2.style.visibility = "visible";
  // });
  // divLi.addEventListener("mouseleave", () => {
  //   const icon1 = divLi.childNodes[1];
  //   const icon2 = divLi.childNodes[2];
  //   icon1.style.visibility = "hidden";
  //   icon2.style.visibility = "hidden";
  // });

  // const cancel = document.createElement("i");
  // cancel.classList.add("fas");
  // cancel.classList.add("fa-times");
  // cancel.addEventListener("click", () => {
  //   divLi.parentElement.remove();
  // });

  // const modify = document.createElement("i");
  // modify.classList.add("fas");
  // modify.classList.add("fa-pencil-alt");
  // modify.addEventListener("click", () => {
  //   const modifiedContent = prompt(
  //     "Modifica a piacimento il contenuto",
  //     p.innerText
  //   );
  //   p.innerText = modifiedContent;
  // });

  // divLi.appendChild(p);
  // divLi.appendChild(modify);
  // divLi.appendChild(cancel);

  // elList.appendChild(divLi);

  // form.reset();
};

const appearList = (e) => {
  let lista;
  let titleI;

  if ("FORM" === e.target.tagName) {
    lista = document.querySelector(`#${e.target.parentElement.id} .lista`);
    titleI = document.querySelector(`#${e.target.parentElement.id} .fas`);
  } else {
    lista = document.querySelector(
      `#${e.target.parentElement.parentElement.id} .lista`
    );
    titleI = document.getElementById(`${e.target.id}`);
  }

  let open = lista.parentElement.id === "to-do-list" ? openToDo : openShopping;

  if (!open || "FORM" === e.target.tagName) {
    lista.style.display = "block";
    titleI.classList.replace("fa-chevron-right", "fa-chevron-down");

    if (lista.parentElement.id === "shopping-list") {
      openShopping = true;
    } else {
      openToDo = true;
    }
  } else {
    lista.style.display = "none";
    titleI.classList.replace("fa-chevron-down", "fa-chevron-right");

    if (lista.parentElement.id === "shopping-list") {
      openShopping = false;
    } else {
      openToDo = false;
    }
  }
};
