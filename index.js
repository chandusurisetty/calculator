const btns = document.querySelectorAll("button")
const screen = document.querySelector("input")
const nostart = ["%", "/", "*"]
const mathprob = ["%", "/", "*", "+", "-"];
const symbals = ["%", "/", "*", "+", "-", "."];
let symblecount = 0
for (let btn of btns) {
    btn.addEventListener("click", async (el) => {
        if (btn.classList.contains("show")) {
            if ((screen.value === "" && nostart.some(symble => { return btn.innerText === symble }))) {
                console.log(btn.innerText + "can not be passed at first")
            }
            else if (symbals.some(symbal => { return screen.value[screen.value.length - 1] === symbal }) && symbals.some(symbal => { return btn.innerText === symbal })) {
                console.log(btn.innerText + "can not make two simples side to side")
            }
            else {
                if (mathprob.includes(btn.innerText)) {
                    symblecount++
                    console.log(symblecount)
                }
                if (symblecount > 1) {
                    calc()
                    symblecount--
                }


                screen.value += btn.innerText


            }
        }
        if (btn.classList.contains("clear")) {
            screen.value = ""
        }
        if (btn.classList.contains("del")) {
            let a = screen.value
            screen.value = a.slice(0, a.length - 1)
        }
        if (btn.classList.contains("equal")) {
            calc()

        }
    })
}
function calc() {

    for (let i of screen.value) {
        if (mathprob.some(symble => { return symble === i })) {
            const f1 = parseInt(screen.value.split(i)[0])
            const f2 = parseInt(screen.value.split(i)[1])
            if (i == "+") {
                screen.value = f1 + f2;
            }
            else if (i == "-") {
                screen.value = f1 - f2;
            }
            else if (i == "/") {
                screen.value = f1 / f2;
            }
            if (i == "%") {
                screen.value = f1 % f2;
            }
            if (i == "*") {
                screen.value = f1 * f2;
            }

        }
    }
}
