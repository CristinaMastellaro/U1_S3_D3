const createListEl = (e) => {
  e.preventDefault();

  const form = document.getElementsByTagName("form")[0];
  const list = document.querySelector("#lista ul");
  const input = document.getElementsByTagName("input")[0].value;

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
    const icon = divLi.childNodes[1];
    icon.style.visibility = "visible";
  });
  divLi.addEventListener("mouseleave", () => {
    const icon = divLi.childNodes[1];
    icon.style.visibility = "hidden";
  });

  const cancel = document.createElement("i");
  cancel.classList.add("fas");
  cancel.classList.add("fa-times");
  cancel.addEventListener("click", () => {
    divLi.parentElement.remove();
  });
  divLi.appendChild(p);
  divLi.appendChild(cancel);

  elList.appendChild(divLi);

  form.reset();
};
