const view = document.querySelector(".Products")
const viewValue = document.querySelector(".TotalValue")
const viewNotes = document.querySelector(".MoneyNotes")
const modal1 = document.querySelector(".modal1")
const modal2 = document.querySelector(".modal2")
const div = document.querySelector(".itens")
const p = document.querySelector(".p")
const inputs = document.querySelector(".inputs")
let input1 = document.querySelector(".product")
let input2 = document.querySelector(".valueProduct")
const products = []
const valueProducts = []
const notas = [100, 50, 20, 10, 5, 2, 1]

const add = () => {
    if (input1.value == "" && input2.value == ""){
        alert("Está faltando o produto ou o Valor")
        return
    }
    products.push(input1.value)
    valueProducts.push(input2.value)
    console.log(products)
    console.log(valueProducts)
    input1.value = ""
    input2.value = ""
    if(products.length <=9 ){
        openModal()
    }
    else{
        openModal2()
    }
}
function viewProducts(){
    let valor = 0
    let msgP = ""
    let result = ""
    const numberArray = valueProducts.map(Number);
    closeModal()
    p.innerHTML = null
    inputs.innerHTML = null
    for(let i = 0; i < products.length; i++){
        msgP += `<p>Produto:${products[i]}, Valor: R$${valueProducts[i]}</p>`
    }

    for (let i = 0; i < numberArray.length; i++) {
        valor += numberArray[i];
    }
    viewValue.innerHTML = `<p>o valor total foi de: ${valor}</p>`

    for (let i = 0; i < notas.length; i++) {
        const nota = notas[i];
        const qtdNotas = Math.floor(valor / nota);
        if (qtdNotas > 0) {
            result += `<p>É necessario ${qtdNotas} Nota(s) de R$${nota}.<br></p> `;
            valor -= nota * qtdNotas;
        }
    }
    view.innerHTML = msgP 
    viewNotes.innerHTML = result
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