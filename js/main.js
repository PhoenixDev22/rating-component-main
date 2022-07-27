


const radios = [...document.querySelectorAll(".radio")]
const form = document.getElementById("form")
const selectedRate = document.querySelector(".selected-rate")
const face1 = document.querySelector(".face-1")
const face2 = document.querySelector(".face-2")

const submitBtn = document.getElementById("submitBtn");
console.log(submitBtn)


form.addEventListener("submit", (e) =>{
    e.preventDefault()

    let checkValid = false
 
    radios.forEach(radio => {
        if(radio.hasAttribute("checked")){
            checkValid = true
           return checkValid 
        }
    })

    if(checkValid){
        setTimeout(() => {
            face1.classList.remove("active")
            face2.classList.add("active")
        }, 1000);
       
        setTimeout(() => {
            form.submit()
        }, 4000);
    }else{
        swal({
            title: 'Please select a rating',
            icon: "warning",

            button: {
                text: "Got it!",
            },
            showClass: {
                popup: 'animate__animated animate__fadeInDown'
            },
            hideClass: {
                popup: 'animate__animated animate__fadeOutUp'
            }
        })
    }
  
})


radios.forEach(radio => {
    radio.addEventListener("click", (e) => {

        // remove the active state from all the radio inputs
        radios.forEach(radio => {
            radio.classList.remove("active")
            radio.removeAttribute("checked")
        })
        // add the active state to the checked radio inputs
        e.target.classList.add("active")
        e.target.setAttribute("checked", "")

        selectedRate.textContent = `${e.target.value}`
    })
})




submitBtn.addEventListener("click", createRipple)

// Create ripple on the submit button
function createRipple(e){
 // Get the position of the btn related to the viewport
    let boundingBox = e.target.getBoundingClientRect();

    let x = e.clientX - boundingBox.left;
    let y = e.clientY - boundingBox.top;
    console.log(x, y)
    const span = document.createElement("span")
    span.className = "ripple"
    span.style.left = `${x}px`;
    span.style.top = `${y}px`;
    
    submitBtn.appendChild(span)
}