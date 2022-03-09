async function heapify(arr, n, i)
{
  let lar = i, l = 2*i+1, r = 2*i+2
  await waitforme(delay)
  if(l < n && parseInt(arr[l].style.height) > parseInt(arr[lar].style.height))
  {
    // arr[l].style.background = 'rgba(245, 134, 52, 0.38)'
    // arr[l].style.border = '2px solid #F58634'
    lar = l
  }

  if(r < n && parseInt(arr[r].style.height) > parseInt(arr[lar].style.height))
  {
    // arr[l].style.background = 'rgba(245, 134, 52, 0.38)'
    // arr[l].style.border = '2px solid #F58634'
    lar = r
  }

  if(lar != i)
  {
    swap(arr[i], arr[lar])
    arr[i].style.background = '#203239'
    arr[i].style.border = '2px solid #141E27'
    arr[lar].style.background = '#203239'
    arr[lar].style.border = '2px solid #141E27'
    
    // await waitforme(delay)
    // for(let k = 0; k < arr.length; k++)
    // {
    //   arr[k].style.background = 'red'
    //   arr[k].style.border = '2px solid #6930C3'
    // }
    
    await waitforme(delay)
    await heapify(arr, n, lar)
  }
}


async function heap()
{
  let arr = document.querySelectorAll('.bar')

  for(let i = Math.floor(arr.length / 2); i >= 0; i--)
  {
    await waitforme(delay)
    arr[i].style.background = 'rgba(145, 9, 30, 0.38)'
    arr[i].style.border = '2px solid #91091E'
    await heapify(arr, arr.length, i) 
  }
  for(let i = arr.length - 1; i > 0; i--)
  {
    swap(arr[0], arr[i])
    await heapify(arr, i, 0)
    arr[i].style.backgroundColor = 'rgba(0, 175, 145, 0.38)'
    arr[i].style.border = '2px solid #00AF91'
  }
  arr[0].style.backgroundColor = 'rgba(0, 175, 145, 0.38)'
  arr[0].style.border = '2px solid #00AF91'
}