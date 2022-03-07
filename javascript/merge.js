async function merge(arr, l, m, h)
{
  let n1 = m - l + 1
  let n2 = h - m

  let arr1 = new Array(n1)
  let arr2 = new Array(n2)

  for(let i = 0; i < n1; i++)
  {
    await waitforme(delay)
    arr[l+i].style.background = 'rgba(245, 134, 52, 0.38)'
    arr[l+i].style.border = '2px solid #F58634'
    arr1[i] = arr[l + i].style.height
  }
  for(let i = 0; i < n2; i++)
  {
    await waitforme(delay)
    arr[m+1+i].style.background = 'rgba(145, 9, 30, 0.38)'
    arr[m+1+i].style.border = '2px solid #91091E'
    arr2[i] = arr[m + 1 + i].style.height
  }

  await waitforme(delay)

  let i = 0, j = 0, k = l

  while(i < n1 && j < n2)
  {
    await waitforme(delay)
    if(parseInt(arr1[i]) <= parseInt(arr2[j]))
    {
      if((n1 + n2) === arr.length)
      {
        arr[k].style.background = 'rgba(0, 175, 145, 0.38)'
        arr[k].style.border = '2px solid #00AF91'
      }
      else
      {
        arr[k].style.background = '#203239'
        arr[k].style.border = '2px solid #141E27'
      }
      await waitforme(delay)
      arr[k++].style.height = arr1[i++]
      await waitforme(delay)
    }
    else
    {
      if((n1+n2) === arr.length)
      {
        arr[k].style.background = 'rgba(0, 175, 145, 0.38)'
        arr[k].style.border = '2px solid #00AF91'
      }
      else{
        arr[k].style.background = '#203239'
        arr[k].style.border = '2px solid #141E27'
      }
      await waitforme(delay)
      arr[k++].style.height = arr2[j++]
      await waitforme(delay)
    }
  }

  while(i < n1)
  {
    await waitforme(delay)
    if((n1+n2) === arr.length)
    {
      arr[k].style.background = 'rgba(0, 175, 145, 0.38)'
      arr[k].style.border = '2px solid #00AF91'
    }
    else{
      arr[k].style.background = '#203239'
      arr[k].style.border = '2px solid #141E27'
    }
    await waitforme(delay)
    arr[k++].style.height = arr1[i++]
    await waitforme(delay)
  }
  while(j < n2)
  {
    await waitforme(delay)
    if((n1+n2) === arr.length)
    {
      arr[k].style.background = 'rgba(0, 175, 145, 0.38)'
      arr[k].style.border = '2px solid #00AF91'
    }
    else{
      arr[k].style.background = '#203239'
      arr[k].style.border = '2px solid #141E27'
    }
    await waitforme(delay)
    arr[k++] = arr1[j++]
    await waitforme(delay)
  }
}

async function mergesort(arr, low, high)
{
  if(low < high)
  {
    let mid = Math.floor((low + high) / 2)
    await mergesort(arr, low, mid)
    await mergesort(arr, mid+1, high)
    await merge(arr, low, mid, high)
  }
}