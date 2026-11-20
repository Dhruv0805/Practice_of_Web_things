URL = "https://dog.ceo/api/breeds/image/random";
let imgteg = document.getElementById("img");

const getuser = async ()=>{
    let response = await fetch(URL);
    console.log(response);
    let data = await response.json()
    console.log("===============================");
    console.log(data);
    return data;
}




imgteg.addEventListener("click", () => {
    getuser().then((imgurl) => {
        imgteg.setAttribute("src", imgurl.message);
    });
 });

