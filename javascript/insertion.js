async function insertion()
{
  let arr = document.querySelectorAll('.bar')
  arr[0].style.backgroundColor = 'rgba(0, 175, 145, 0.38)'
  arr[0].style.border = '2px solid #00AF91'
  for(let i = 1; i < arr.length; i++)
  {
    let key = arr[i].style.height
    let j = i - 1
    arr[i].style.background = 'rgba(145, 9, 30, 0.38)'
    arr[i].style.border = '2px solid #91091E'
    await waitforme(delay)
    while(j >= 0 && parseInt(arr[j].style.height) > parseInt(key))
    {
      arr[j].style.background = '#203239'
      arr[j].style.border = '2px solid #141E27'

      arr[j+1].style.height = arr[j].style.height 
      j--

      await waitforme(delay)
      for(let k = i; k >= 0; k--)
      {
        arr[k].style.backgroundColor = 'rgba(0, 175, 145, 0.38)'
        arr[k].style.border = '2px solid #00AF91'
      }
    }
    console.log(" ")
    arr[j+1].style.height = key
  }

}