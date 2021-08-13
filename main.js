//grab here elements

let addBtn = document.getElementById("btn")
let textInput = document.getElementById("text-input")
let createTodo=document.getElementById("create-todo")




//action is here

addBtn.addEventListener("click",function(){
   let getValue= textInput.value
   
   let div = document.createElement("div")
  
   div.innerHTML = `
   <div class="w-9/12 mx-auto bg-blue-400 flex justify-around items-center rounded-lg my-5 border-0 ">
   <div class="w-9/12">
       <p>${getValue}</p>
   </div>
   <div class="icons flex justify-center items-center py-5">
       <div class=" ">
           <svg id="change" xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 block" fill="none"
               viewBox="0 0 24 24" stroke="currentColor">
               <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                   d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4" />
           </svg>
       </div>
       <div>
           <svg id="cross" xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 block" fill="none"
               viewBox="0 0 24 24" stroke="currentColor">
               <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                   d="M6 18L18 6M6 6l12 12" />
           </svg>
       </div>
   </div>
</div>
   
   `
   createTodo.appendChild(div)
   textInput.value = ""
//    document.getElementById("cross").addEventListener("click", function(event){
//    let parent = event.target.parentNode.parentNode.parentNode.parentNode
//    console.log(parent)
//    createTodo.removeChild(parent)

//})
   
})


createTodo.addEventListener("click",function(event){
    if(event.target.id=="cross"){
        let rem = (event.target.parentNode.parentNode.parentNode.parentNode)
        rem.style.display="none"
        
    }
    // if(event.target.id=="change"){
    //     let newValue = prompt()
    //     let getP = event.target.parentNode.parentNode.parentNode.children[0]
    //     console.log(getP)
    // }
  
})

