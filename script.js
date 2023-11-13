const dia = document.querySelector("#dia");
const btnClose = document.querySelector("#closeModal");
const sign = document.querySelector("#sign");
const clos = document.querySelector("#close");
const off = document.querySelector("#closeMenu");
const check = document.querySelector("#check");
const rll = document.querySelector("#load");
const inp = document.querySelector("input");
const when = document.querySelector("#when");
const tbNum = document.querySelector("#tbNum");
const menu = document.querySelector("#menu");
const modalTwo = document.querySelector("#modalTwo");
const arr = ["1A", "2A", "3A", "1B", "2B", "3B", "1C", "2C", "3C"];
const guess = ["am", "pm"];
const tm = Math.floor(Math.random() * 12 + 1);
sign.addEventListener("click", () => {
  setTimeout(() => {
    dia.showModal();
  }, 250);
});

clos.addEventListener("click", () => {
  dia.close();
});

check.addEventListener("click", (event) => {
  event.preventDefault();
  check.style.display = "none";
  if (inp.value == 0) {
    check.style.display = "block";
  } else {
    rll.style.display = "block";
    check.style.display = "none";
    setTimeout(() => {
      modal.style.display = "block";
      dia.close();
      modal.showModal();
    }, 3000);
  }
});
menu.addEventListener("click", () => {
  modalTwo.showModal();
});
off.addEventListener("click", () => {
  modalTwo.close();
});

function ty() {
  modal.close();
  modal.style.display = "none";
  check.style.display = "block";
  rll.style.display = "none";
}
document.getElementById("refresh").onclick = function () {
  setTimeout(() => {
    when.innerHTML =
      Math.floor(Math.random() * 12 + 1) +
      " " +
      guess[Math.floor(guess.length * Math.random())];
    tbNum.innerHTML = arr[Math.floor(arr.length * Math.random())];
  }, 1500);
};
when.innerHTML = tm + " " + guess[Math.floor(guess.length * Math.random())];
tbNum.innerHTML = arr[Math.floor(arr.length * Math.random())];
