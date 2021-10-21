const display=document.querySelector('h3')
const billTotal=document.querySelector('h2')
const form= document.querySelector('#f1')
const formt= document.querySelector('#f2')
const other= document.querySelector('#other')
const sform= document.querySelector('#second')
const tenP= document.querySelector('#tenPercent')
const twentyP= document.querySelector('#twentyPercent')

const button= document.querySelector('button')




const calcTen=()=>{
    let a=form.elements.tip.value
  let b=.1
  let d=parseInt(a)
  let c= a*b;
return c
}

tenP.addEventListener('click',(e)=>{
  e.preventDefault()
let a=form.elements.tip.value
let d=parseInt(a)

 display.innerText=`$${calcTen()}`

  billTotal.innerText=`Your total bill (with tip) is $${calcTen()+d}`
  formt.elements.other.value=''
  form.elements.tip.value=''
})


const calcTwenty= ()=>{
  
    let a=form.elements.tip.value
  let b=.2
  let d=parseInt(a)
  let c= a*b;
return c
}

twentyP.addEventListener('click',(e)=>{
  e.preventDefault()
   let a=form.elements.tip.value
     let d=parseInt(a)

  display.innerText=`$${calcTwenty()}`
  billTotal.innerText=`Your total bill (with tip) is $${calcTwenty()+d}`
  formt.elements.other.value=''
  form.elements.tip.value=''
})


const calcOther=()=>{
  let g=form.elements.tip.value
  let a= formt.elements.other.value
  let b=parseInt(a)
  let d= parseInt(g)
  let c=a*g*.01
  return c
}

otherb.addEventListener('click',(e)=>{
  e.preventDefault()
  let a= form.elements.tip.value
  let b=parseInt(a)
  display.innerText=`$${calcOther()}`
  billTotal.innerText=`Your total bill (with tip) is $${calcOther()+b}`
  formt.elements.other.value=''
  form.elements.tip.value=''
})
