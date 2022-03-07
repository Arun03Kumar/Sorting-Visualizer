async function partition(arr, l, h)
{
  let pivot = parseInt(arr[h].style.height)
  arr[h].style.background = 'rgba(145, 9, 30, 0.38)'
  arr[h].style.border = '2px solid #91091E'
  let i = l - 1

  for(let j = l; j <= h - 1; j++)
  {
    arr[j].style.background = '#203239'
    arr[j].style.border = '2px solid #141E27'

    await waitforme(delay)
    if(parseInt(arr[j].style.height) < pivot)
    {
      i++;  
      swap(arr[i], arr[j])
      arr[i].style.background = 'rgba(245, 134, 52, 0.38)'
      arr[i].style.border = '2px solid #F58634'
      if(i != j)
      {
        arr[j].style.background = 'rgba(245, 134, 52, 0.38)'
        arr[j].style.border = '2px solid #F58634'
      }
    }
    else{
      arr[j].style.background = 'rgba(105, 48, 195, 0.38)'
      arr[j].style.border = '2px solid #6930C3'
    }
  }
  await waitforme(delay)
  swap(arr[i+1], arr[h])
  arr[h].style.background = 'rgba(105, 48, 195, 0.38)'
  arr[h].style.border = '2px solid #6930C3'
  arr[i+1].style.background = 'rgba(0, 175, 145, 0.38)'
  arr[i+1].style.border = '2px solid #00AF91'

  await waitforme(delay)

  for(let k = 0; k < arr.length; k++)
  {
    if(arr[k].style.background != 'rgba(0, 175, 145, 0.38)')
    {
      arr[k].style.background = 'rgba(105, 48, 195, 0.38)'
      arr[k].style.border = '2px solid #6930C3'
    }
  }

  return (i+1)
}

async function quick(arr, l, h)
{
  if(l < h)
  {
    let pi = await partition(arr, l, h)
    await quick(arr, l, pi - 1)
    await quick(arr, pi + 1, h)
  }
  else{
    if(l >= 0 && h >= 0 && l <arr.length && h <arr.length){
        arr[h].style.background = 'rgba(0, 175, 145, 0.38)'
        arr[h].style.border = '2px solid #00AF91'
        arr[l].style.background = 'rgba(0, 175, 145, 0.38)'
        arr[l].style.border = '2px solid #00AF91'
    }
}
}