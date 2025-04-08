const add = document.getElementById("add");
// const ul = document.getElementById("ul");
text1.addEventListener("keydown", function (value) {
  if (value.key === "Enter") {
    const text1 = document.getElementById("text1");
    if (text1 && text1.value.trim() === "") {
      window.alert("TYPE SOMETHING");
    } else {
      const li = document.createElement("li");
      li.innerHTML = ` <li>${text1.value}</li>`;
      ul.appendChild(li);
      text1.value = "";
    }
  }
});
