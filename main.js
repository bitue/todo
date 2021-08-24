function firstCheck() {

    let dailyToDo = document.getElementById("text-input").value
    if (dailyToDo == "") {

        return false

    }
    else {
        return true
    }

}


// document.getElementById("text-input").addEventListener("keyup",function(){
//     firstCheck()
// })

document.getElementById("btn").addEventListener("click", function () {

    let res = firstCheck()
    if (res == false) {
        alert("your todo form is empty ")
        return

    }
    else {

        let div = document.createElement("div")

        let ToDo = document.getElementById("text-input").value
        div.innerHTML = `
    
        <div class="w-9/12 mx-auto bg-blue-400 flex justify-around items-center rounded-lg my-5 border-0 " >
        <div class="w-9/12">
            <p>${ToDo}</p>
        </div>
        <div class="icons flex justify-center items-center py-5">
            <div class=" ">
                <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 block" fill="none"
                    viewBox="0 0 24 24" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                        d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4" />
                </svg>
            </div>
            <div >
                <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 block cross" fill="none"
                    viewBox="0 0 24 24" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                        d="M6 18L18 6M6 6l12 12" />
                </svg>
            </div>
        </div>
        </div>
        
        
        `

        let mainElement = document.getElementById("create-todo")
        mainElement.appendChild(div)

         document.getElementById("text-input").value =""




    }

    let cross = document.querySelectorAll(".cross")

    for(i of cross){
        i.addEventListener("click",function(event){
            event.target.parentNode.parentNode.parentNode.parentNode.style.display="none"

        })
       
    }

  


})










