const container = document.querySelector("#container");

function generateGrid(numberOfItems){
    for (let i = 0; i < numberOfItems; i++) {
        const divForItem = document.createElement("div");
        divForItem.classList.add("row");
        for (let j = 0; j < numberOfItems; j++) {
            const item = document.createElement("div");
            item.classList.add("item");
            item.addEventListener("mouseover",() => {
                item.style.backgroundColor =  `rgb(${Math.random()*256}, ${Math.random()*256}, ${Math.random()*256})`;
                console.log('hovered over');
            });
            // item.style.padding = `${800 / numberOfItems}px`;
            divForItem.appendChild(item);
        }
        container.appendChild(divForItem);
    }
}
const button = document.querySelector("#insert");
function newGrid(){
    let option = prompt("Insert number of squares / side (100 max)");
    option = parseInt(option);
    while(isNaN(option) || option < 0 || option > 100){
        option = prompt("Number is not ok. Insert number of squares/side (100 max)");
        option = parseInt(option);
    }
    while(container.firstChild){
        container.removeChild(container.firstChild);
    }
    generateGrid(option);
}
generateGrid(4);
