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
const urlToLocal='https://joke-entertainment.web.app/'
const openWhatsapp = () => {
    const whatsappData = jokes.textContent;
    window.open(`whatsapp://send?text=${whatsappData}${urlToLocal}`);
}
btn.addEventListener('click', fetchData);
fetchData();
sharebtn.addEventListener("click", openWhatsapp);
