let countIt = document.getElementById("count-el")
let count = 0
function increment() {
	count = count + 1
	countIt.innerText = count
}
function save() {
        let countStr = count + " + "
        saveEl.textContent += countStr
        countIt.textContent = 0;
        count = 0

}
