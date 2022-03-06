async function bubble(){
  let element = document.querySelectorAll('.bar');
  for(let i = 0; i < element.length-1; i++){
    for(let j = 0; j < element.length-i-1; j++){
      element[j].style.background = 'red';
      element[j+1].style.background = 'red';

      if(parseInt(element[j].style.height) > parseInt(element[j+1].style.height)){
        await waitforme(delay);
        swap(element[j], element[j+1]);
      }
      element[j].style.background = 'rgba(245, 134, 52, 0.38)';
      element[j].style.border = '2px solid #F58634'
      element[j+1].style.background = 'rgba(245, 134, 52, 0.38)';
      element[j+1].style.border = '2px solid #F58634'
    }
    element[element.length-1-i].style.backgroundColor = 'rgba(0, 175, 145, 0.38)';
    element[element.length-1-i].style.border = '2px solid #00AF91';
  }
    element[0].style.backgroundColor = 'rgba(0, 175, 145, 0.38)';
    element[0].style.border = '2px solid #00AF91';
}

// bubble().then();