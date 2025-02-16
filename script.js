function add() {
    document.getElementById('inputs').style.display = "block";
}

function post() {

    let title = document.getElementById('input').value;
    let description = document.getElementById('secondInput').value;

    let createDiv = document.createElement('div');
    createDiv.classList.add('posted');

    let createh2 = document.createElement('h2');
    createh2.textContent = title;
    createDiv.appendChild(createh2);

    let createpara = document.createElement('p');
    createpara.textContent = description;
    createDiv.appendChild(createpara);

    document.body.appendChild(createDiv);
    

   document.getElementById('input').value = "";
   document.getElementById('secondInput').value = "";

    document.getElementById('inputs').style.display = "none";

}