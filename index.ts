var tdElements = document.getElementsByTagName ('TD' , 5);
for (var tdElement of tdElements) {
tdElement.addEventListener('click',handleClick)
}
function handleClick(event) {
var target = event.target;
target.innerHTML = 'X';
} 