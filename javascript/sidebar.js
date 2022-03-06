let btn = document.querySelector('.sidebar-btn')

btn.addEventListener("click", () => {
  let sidebar = document.querySelector('#mySidebar')
  sidebar.style.width = "250px" 

  document.querySelector('#main').style.marginLeft = "250px"
})

document.querySelector('.closebtn').addEventListener("click", () => {
  document.querySelector('#mySidebar').style.width = "0"
  document.querySelector('#main').style.marginLeft = "0"
})