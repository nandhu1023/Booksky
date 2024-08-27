var over = document.querySelector(".over")
var pop = document.querySelector(".pop")

function change(event)
{
    over.style.display="block"
    pop.style.display="block"
}

var cancel=document.getElementById("cancel")

function cancelthis(event)
{
    over.style.display="none"
    pop.style.display="none" 
}
var container=document.querySelector(".container")
var add=document.getElementById("add")
var title=document.getElementById("title")
var author=document.getElementById("author")

add.addEventListener("click",function(event){
    event.preventDefault()
    var div=document.createElement("div")
    div.setAttribute("class","book-container")
    div.innerHTML=`<h2>${title.value}</h2>
    <h5>${author.value}</h5>
    <p>${book.value}</p>
    <button onclick="deletebook(event)">Delete</button>`
    container.append(div)
    over.style.display="none"
    pop.style.display="none" 

})
function deletebook(event){
    event.target.parentElement.remove()
}