setInterval(oras, 0);
function oras() {
  const date1 = new Date();
  const date2 = date1.getFullYear();
  const localtime = date1.toLocaleTimeString();
  document.getElementById("times").innerHTML = localtime;
  document.getElementById(
    "foots"
  ).innerHTML = `Developed by Rainer Morales &copy ${date2}`;
}

text1.addEventListener("keydown", function (v) {
    const date1 = new Date();
    const localtime = date1.toLocaleTimeString();
  const text1 = document.getElementById("text1");
  if (v.key === "Enter") {
    if (text1 && text1.value.trim() === "") {
      window.alert("TYPE SOMETHING!");
    } else {
      const text1 = document.getElementById("text1");
      const ul = document.getElementById("ul");
      const li = document.createElement("li");
      li.innerHTML = `
      <div class="bg-gray-900 p-4 flex justify-between">
      <div>${text1.value}</div>
      <div class="flex items-center text-sm">${localtime + " ago"}</div>
      </div>`;
      text1.value = "";
      ul.appendChild(li);
    }
  }
});
