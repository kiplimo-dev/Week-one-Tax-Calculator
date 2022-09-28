let NetPayInput = document.getElementById('netpay-input');
let nssf = document.getElementById('nssf');
let taxable = document.getElementById('taxable');
let relief = document.getElementById('relief');
let personal = document.getElementById('personal');
let insurance = document.getElementById('insurance');
let paye = document.getElementById('PAYE')
let nhif = document.getElementById('NHIF')
let content = document.getElementById('content')
let addButton = document.getElementById('add-button')



var newLine = document.createElement('h2')

var BillNetpay = document.getElementById('bill-netpay')

addButton.addEventListener('click', function () {
    content.appendChild(newLine)
    newLine.innerHTML = NetPayInput.value
    BillNetpay.innerText = newLine.innerText
  newLine.addEventListener('click', function () { 
    newLine.innerHTML = ''
   })

})

nssf.addEventListener('keypress',function(e){
    if(e.key === 'Enter'){
        newLine.innerText = newLine.innerText - nssf.value
        BillNetpay.innerText = newLine.innerText
    }
    
} ) 

taxable.addEventListener('keypress',function(e){
    if(e.key === 'Enter'){
        newLine.innerText = newLine.innerText - taxable.value
        BillNetpay.innerText = newLine.innerText
    }
    
} )

relief.addEventListener('keypress',function(e){
    if(e.key === 'Enter'){
        newLine.innerText = newLine.innerText - relief.value
        BillNetpay.innerText = newLine.innerText
    }
    
} )

personal.addEventListener('keypress',function(e){
    if(e.key === 'Enter'){
        newLine.innerText = newLine.innerText - personal.value
        BillNetpay.innerText = newLine.innerText
    }
    
} )

insurance.addEventListener('keypress',function(e){
    if(e.key === 'Enter'){
        newLine.innerText = newLine.innerText - insurance.value
    }
    
} )

paye.addEventListener('keypress',function(e){
    if(e.key === 'Enter'){
        newLine.innerText = newLine.innerText - paye.value
        BillNetpay.innerText = newLine.innerText
    }
    
} )

nhif.addEventListener('keypress',function(e){
    if(e.key === 'Enter'){
        newLine.innerText = newLine.innerText - nhif.value
        BillNetpay.innerText = newLine.innerText
    }
    
} )


