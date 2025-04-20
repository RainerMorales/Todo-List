const add = document.getElementById("add");
const inputs = document.getElementById("inputs");
const ul = document.getElementById("ul");
add.addEventListener("click", function (e) {
  if (!inputs.value.trim()) {
    alert("type something");
  } else {
    const li = document.createElement("li");
    li.innerHTML =`<li class="p-4 text-black border-1 border-zinc-200">${inputs.value}</li>`;
    ul.appendChild(li);
    inputs.value = "";
  }
  savedata();
});
function savedata() {
  localStorage.setItem("value", ul.innerHTML);
}
function showdata() {
  ul.innerHTML = localStorage.getItem("value");
}
function clears() {
  if (confirm("Delete all?")) {
    localStorage.removeItem("value");
    setInterval(showdata);
    alert("Delete Success!");
  } else {
    alert("Delete Canceled!");
  }
}
showdata()
