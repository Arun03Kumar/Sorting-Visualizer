

let array = []


function createArray(barcount = 30)
{
  deleteArray()
  array = []
  for(let i = 0; i < barcount; i++)
  {
    array.push(Math.floor(Math.random() *200) + 1)
  }

  const bar_div = document.querySelector('#bar-div')

  for(let i = 0; i < barcount; i++)
  {
    const newBar = document.createElement("div")
    newBar.classList.add('bar')
    newBar.style.height = `${array[i]}px`
    bar_div.appendChild(newBar)
  }
}

function deleteArray()
{
  const bar_div = document.querySelector('#bar-div')
  bar_div.innerHTML = ""
}
createArray()


