
let searchData = async (q, API) => {
    
    try{
        let res = await fetch(`https://api.unsplash.com/search/photos/?query=${q}&per_page=20&client_id=${API}`);

        let data = await res.json();
        // console.log("data",data);
        return data;
    } catch(err){
        console.log('err',err);
    }
};

let append = (data, container) =>{
    // let container = document.getElementById('container');
    container.innerHTML = null;
    if(data === undefined){
        return false
    }
    data.forEach(({alt_description, urls:{small}}) =>{
        let div = document.createElement("div");
        div.setAttribute("class", "image")

        let img = document.createElement("img");
        img.src = small;

        let h3 = document.createElement("h3");
        h3.innerText = alt_description;

        div.append(img, h3);
        container.append(div);
    });
}

// let main = async (q) => {

//     let query = document.getElementById('query').value;
//     let response = searchData(query);
//     let data = await response
//     append(data);
//     console.log('data',data); 
// }

// function debounce(func, delay){
//     if(id){
//         clearTimeout(id)
//     }

//     id = setTimeout(function(){
//         func();
//     }, delay);
// }

export {searchData, append};