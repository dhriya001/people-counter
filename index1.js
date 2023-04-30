let countIt = document.getElementById("count-el")
let saveEl = document.getElementById("save-el")
let count = 0
function increment() {
	count = count + 1
	countIt.textContent = count
}
 
function save() {
        let countStr = count + " + "
        saveEl.textContent += countStr
        countIt.textContent = 0;
        count = 0

}
console.log("lets count people")
