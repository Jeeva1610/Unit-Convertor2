let feet = document.getElementById('feet')
let Inch = document.getElementById('inch')

feet.addEventListener('input',function(){
  let f = this.value
  let i = f*12

   Inch.value = i  
})


inch.addEventListener('input',function(){
  let i = this.value
  let f = f/12

   if(!Number.isInteger(f)){
    f = f.toFixed(2)
   } 
   feet.value = f
})