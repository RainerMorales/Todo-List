setInterval(oras, 0);
function oras() {
  const date1 = new Date();
  const date2 = date1.getFullYear();
  const hours = date1.getHours()

  if (hours >= 5 && hours < 12) {
    document.getElementById("good").innerHTML = "Good Morning! &#128513";
  } else if (hours >= 12 && hours < 17) {
   document.getElementById("good").innerHTML = "Good Afternoon! &#128526";
  } else {
    document.getElementById("good").innerHTML = "Good Evening! &#128564;";
  }
  const localtime = date1.toLocaleTimeString("en-GB", {
    weekday: "long",
    hour: "2-digit",
    minute: "2-digit",
    hour12: true,
  });
  document.getElementById("times").innerHTML = localtime;
  document.getElementById(
    "foots"
  ).innerHTML = `Developed by Rainer Morales &copy ${date2}`;
}

text1.addEventListener("keydown", function (v) {
  const date1 = new Date();
  const localtime = date1.toLocaleTimeString("en-GB", {
    hour: "2-digit",
    minute: "2-digit",
    hour12: true,
  });
  const text1 = document.getElementById("text1");
  if (v.key === "Enter") {
    if (text1 && text1.value.trim() === "") {
      window.alert("TYPE SOMETHING!");
    } else {
      const text1 =document.getElementById("text1");
      localStorage.setItem("value",text1.value)
      const text2 = localStorage.getItem("value")
      const li =document.createElement("li")
      const ul =document.getElementById("ul")
      li.innerHTML = `<div class="bg-gray-900 p-4 flex justify-between mt-2">
      <div class=" text-left w-60">${text2}</div>
      <div class="flex items-center text-sm opacity-50 w-40 justify-center">${
        "sent " + localtime
      }</div>
      </div>`;
      ul.appendChild(li)
      text1.value=""
    }
  }
});

