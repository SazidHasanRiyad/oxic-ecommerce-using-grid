// Droppdown toggle js
let option = document.querySelectorAll(".announcement__option__with-dropdown");
let dropdown = document.querySelectorAll(".announcement__option__dropdown");

let optionArray = Array.from(option);
let dropdownArray = Array.from(dropdown);

optionArray.map((e) => {
  e.addEventListener("click", () => {
    let child = e.lastElementChild;
    // let child = e.children;  children didn't work because it gives back HTMLcollection.
    // On the other hand lastElementChild gives back the original html tag.
    dropdownArray.map((d) => {
      if (child == d) {
        child.classList.toggle("showDropdown");
      } else {
        d.classList.remove("showDropdown");
      }
    });
  });
});
