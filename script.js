let row = document.querySelector(".row");
let search = document.querySelector("form .fa");
let input = document.getElementById("search");
async function fetchData() {
  try {
    if (input.value == "")
      input.value = "content";

    let response = await fetch(`https://api.adviceslip.com/advice/search/${input.value}`);
    let json = await response.json();

    try{
      console.log(json["slips"].length);
      for (let i = 0; i < json["slips"].length; i++) {
        let col = document.createElement("div");
        col.className = "col-12 p-4 column mb-3";
        col.innerHTML = `<p class="mb-0 text-center">${json["slips"][i].advice}</p>`
        row.append(col);
      }
    }
    catch{
      alert("Sorry!!! No advice found");
    }

  } catch (err) {
    alert(err);
  }
}
search.addEventListener("click", fetchData);