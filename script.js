const view = document.querySelector(".Products")
const viewProduct = document.querySelector(".TotalValue")
const modal1 = document.querySelector(".modal1")
const modal2 = document.querySelector(".modal2")
const div = document.querySelector(".itens")
const p = document.querySelector(".p")
let input1 = document.querySelector(".product")
const input2 = document.querySelector(".valueProduct")

const products = []
const valueProducts = []

const add = () => {
    products.push(input1.value)
    valueProducts.push(input2.value)
    input1.value = ""
    input2.value = ""
    if(products.length <=10 ){
        openModal()
    }
    else{
        openModal2()
    }
    
}
function viewProducts(){
    let valor = 0
    let msgP = ""
    closeModal()
    p.innerHTML = null
    for(let i = 0; i < products.length; i++){
        msgP += `<p>Produto:${products[i]}, Valor: R$${valueProducts[i]}</p>`
    }
    for (let i = 0; i < valueProducts.length; i++) {
        valor += valueProducts[i]; valor = parseFloat(valor);
       } 
       console.log(valor)
       let centenas = Math.floor(valor / 100);
       let dezenas = Math.floor((valor % 100) / 10);
       let unidades = valor % 10;
       console.log(`voce ira precisar de ${centenas} notas de 100`);
       console.log(`voce ira precisar de ${dezenas} notas de 10`);
       console.log(`voce ira precisar de ${unidades} moedas de 1`);
       
    view.innerHTML = msgP


}
function openModal(){
    modal1.show()
}
function openModal2(){
    closeModal()
    modal2.show()
}
function closeModal(){
    modal1.close()
    modal2.close()
}
