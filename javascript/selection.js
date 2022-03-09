async function selection()
{
  let arr = document.querySelectorAll('.bar')

  for(let i = 0; i < arr.length; i++)
  {
    let pos = i
    arr[pos].style.background = 'rgba(145, 9, 30, 0.38)'
    arr[pos].style.border = '2px solid #91091E'  
    await waitforme(delay)
    for(let j = i + 1; j < arr.length; j++)
    {
      await waitforme(delay)
      arr[j].style.background = '#203239'
      arr[j].style.border = '2px solid #141E27'
      await waitforme(delay)
      let x = parseInt(arr[j].style.height)
      if(x < parseInt(arr[pos].style.height))
      {
        pos = j
        
      }
      await waitforme(delay)
      arr[j].style.background = 'rgba(105, 48, 195, 0.38)'
      arr[j].style.border = '2px solid #6930C3'
    }
    await waitforme(delay)
    arr[pos].style.background = 'rgba(245, 134, 52, 0.38)'
    arr[pos].style.border = '2px solid #F58634'
    await waitforme(25*delay)
    swap(arr[i], arr[pos])
    arr[i].style.backgroundColor = 'rgba(0, 175, 145, 0.38)';
    arr[i].style.border = '2px solid #00AF91';
    arr[pos].style.background = 'rgba(105, 48, 195, 0.38)'
    arr[pos].style.border = '2px solid #6930C3'
  }


  for(let k = 0; k < arr.length; k++)
  {
    arr[k].style.backgroundColor = 'rgba(0, 175, 145, 0.38)';
    arr[k].style.border = '2px solid #00AF91';
  }
}