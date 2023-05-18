let elSelect = document.querySelector(".select");
let elText = document.querySelector(".text");
elSelect.addEventListener("change", (evt) => {
  let selectValue = elSelect.value;
  if (selectValue == "do'stimga") {
    elText.textContent =
      "Nma gap ee";
  } else if (selectValue == "onamga") {
    elText.textContent =
      "Assalomu alaykum onam";
  } else if (selectValue == "sevganqizimga") {
    elText.textContent = "Yow turip sevip nma bor";
  } else if (selectValue == "official") {
    elText.textContent =
      "Vazifalar bajarildi";
  }
});