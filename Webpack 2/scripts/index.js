import navbar from "../components/navbar.js";

let navbar_div = document.getElementById('navbar');

navbar_div.innerHTML = navbar();

const API = "Qfy_D_u8U6pnYOLt2WsSQB1q8ntJF65OdaNBkAfkGPk";

import {searchData, append} from "./fetch.js"

window.addEventListener("load", function () {
    displayData(searchData);
  });

  function handleNameSort() {
    var selected = document.querySelector("#sortNames").value;
    console.log(selected);

    if (selected == "ascending") {
        searchData.sort(function (a, b) {
        if (a.name > b.name) return 1;
        if (a.name < b.name) return -1;
        return 0;
      });

      console.log(searchData);
      displayData(searchData);
    }

    if (selected == "descending") {
        searchData.sort(function (a, b) {
        if (a.name > b.name) return -1;
        if (a.name < b.name) return 1;
        return 0;
      });
      console.log(searchData);
      displayData(searchData);
    }
  }

let search = (e) => {
    if(e.key === "Enter"){
    let value = document.getElementById('query').value;
    searchData(value, API).then((data) => {
        console.log('data',data);

    let container = document.getElementById("container");
        container.innerHTML = null;
        append(data.results, container)
    });
}
}
document.getElementById('query').addEventListener("keydown", search);


let categories = document.getElementById("categories").children;

function cSearch (e){
    console.log(this.id);
    searchData(this.id, API).then((data) =>{
        console.log("data:", data);

        let container = document.getElementById("container");
        container.innerHTML = null;
        append(data.results, container)
    });

}

for(let el of categories){
    el.addEventListener("click", cSearch)
}





