let url = "http://universities.hipolabs.com/search?country=";

let btn = document.querySelector("button");
btn.addEventListener("click", async ()=>{
    let country = document.querySelector("input").value;
    console.log(country);

    let colArr = await getColleges(country);
    show(colArr);
});

function show(colArr) {
    let list = document.querySelector("#list");
    list.innerText = "";
    for(col of colArr){
        console.log(col.name);
        let li = document.createElement("li");
        li.innerText = col.name;
        list.appendChild(li);
    }
}

async function getColleges(country){
    try{
        let res = await axios.get(url + country);
        return res.data;
    }
    catch(e) {
        console.log("error : " , e);
        return [];
    }
}

















//code for states of india

// let url = "http://universities.hipolabs.com/search?country=India&state="; // Modified URL for India

// let btn = document.querySelector("button");
// btn.addEventListener("click", async () => {
   
//     let state = document.querySelector("input").value; // Get the state name from input field
//     console.log(state);

//     let colArr = await getColleges(state); 
//     show(colArr);
// });

// function show(colArr) {
//     let list = document.querySelector("#list");
//     list.innerText = "";
//     for (col of colArr) {
//         console.log(col.name);
//         let li = document.createElement("li");
//         li.innerText = col.name;
//         list.appendChild(li);
//     }
// }

// async function getColleges(state) {
//     try {
//         let res = await axios.get(url + state); // Append state to the URL
//         return res.data;
//     } catch (e) {
//         console.log("error : ", e);
//         return [];
//     }
// }