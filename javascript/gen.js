function waitforme(milisec) { 
  return new Promise(resolve => { 
      setTimeout(() => { resolve('') }, milisec); 
  }) 
}

function swap(el1, el2) {
  let temp = el1.style.height;
  el1.style.height = el2.style.height;
  el2.style.height = temp; 
}

let delay = 300

let speed = document.querySelector('#myRange')

speed.addEventListener('input', () => {
  delay = 320 - parseInt(speed.value)
})

document.querySelector('#new').addEventListener('click', () => {
  createArray(30)
  console.log("sd")
})

let selectedbtn = "bubble"
document.querySelector('#title').innerHTML = `${selectedbtn} sort` 

document.querySelector('.bubble').addEventListener('click', () => {
  selectedbtn = "bubble"
  document.querySelector('#title').innerHTML = `${selectedbtn} sort`
  console.log(selectedbtn)
})

document.querySelector('.merge').addEventListener('click', () => {
  selectedbtn = "merge"
  document.querySelector('#title').innerHTML = `${selectedbtn} sort`
  console.log(selectedbtn)
})

document.querySelector('.quick').addEventListener('click', () => {
  selectedbtn = "quick"
  document.querySelector('#title').innerHTML = `${selectedbtn} sort`
  console.log(selectedbtn)
})
document.querySelector('.selection').addEventListener('click', () => {
  selectedbtn = "selection"
  document.querySelector('#title').innerHTML = `${selectedbtn} sort`
  console.log(selectedbtn)
})
document.querySelector('.insertion').addEventListener('click', () => {
  selectedbtn = "insertion"
  document.querySelector('#title').innerHTML = `${selectedbtn} sort`
  console.log(selectedbtn)
})

document.querySelector('#sort').addEventListener('click', () => {
  if(selectedbtn == "bubble")
  {
    bubble().then();
  }
  else if(selectedbtn == "merge")
  {
    merge().then();
  }
  else if(selectedbtn == "quick")
  {
    quick().then();
  }
  else if(selectedbtn == "insertion")
  {
    insertion().then();
  }
  else if(selectedbtn == "selection")
  {
    selection().then();
  }
})


