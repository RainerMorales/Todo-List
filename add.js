text1.addEventListener("keydown", function(v){
    const text1=document.getElementById("text1")
    if(v.key === "Enter"){
        if(text1 && text1.value.trim()===""){
            window.alert("TYPE SOMETHING!")
        }else {
            const text1 = document.getElementById("text1");
            const ul = document.getElementById("ul");
            const li = document.createElement("li");
            li.innerHTML = `<li>${text1.value}</li>`;
            text1.value = "";
            ul.appendChild(li);
        }
    }
})

add.addEventListener("click",function Add(){})
