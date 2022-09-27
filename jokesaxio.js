const jokes = document.getElementById('jokes');
const sharebtn = document.getElementById('share-btn');
const btn = document.getElementById('btn');
const save = document.getElementById('btn1');
const fetchData = async () => {
    const url = "https://hindi-jokes-api.onrender.com/jokes"
    const response = await fetch(url);
    const data = await response.json();
    jokes.innerText = data.jokeContent;
    console.log(data.jokeContent);
}
// use axios
const sendGetRequest = async () => {
    const url = "https://hindi-jokes-api.onrender.com/jokes"
    try {
        const resp = await axios.get(url);
        console.log(resp.data);
    } catch (err) {
        // Handle Error Here
        console.error(err);
    }
};
const urlToLocal=window.localStorage.getItem('url');
const openWhatsapp = () => {
    const whatsappData = jokes.textContent;
    window.open(`whatsapp://send?text=${whatsappData}${urlToLocal}`);
}
var url = location.href;
localStorage.setItem("url", url);
function loadUrl() {
    location.href = localStorage.getItem("url");
}
btn.addEventListener('click', fetchData);
fetchData();
sharebtn.addEventListener("click", openWhatsapp);
