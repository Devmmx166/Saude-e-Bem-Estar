let alturaInput = document.querySelector('input#altura')
let pesoInput = document.getElementById('peso')
let resultDiv = document.getElementById('result');
let campoObrigadorio = document.querySelector(".required-popup")


let labelAltura = document.querySelector("#label-altura")
let labelPeso = document.querySelector("#label-peso")
let alturaHelper = document.getElementById("#altura-helper")
let pesoHelper = document.getElementById("#peso-helper")



//O "blur" serve para ao clicar ele seja chamado diferente do change que tem que digitar
alturaInput.addEventListener("blur", (e) => {
    let valor = e.target.value;

    if (valor === "") {
        console.log('valor vazio')
    } else {
        console.log("Valor de altura permitido: " + valor);
    }
});

//mostra campo obrigatorio
function togglePopup(input, label) {

    input.addEventListener("focus", () =>{
        label.classList.add("required-popup")      
        
        
    });
  

    input.addEventListener("blur", () =>{
        label.classList.remove("required-popup")
        console.log("blur")
    });

}
togglePopup(alturaInput, labelAltura)







// function estilizarInputCorreto(input, helper){
//     helper.classList.remove("visible")
//     input.classList.remove("error")
//     input.classList.add("correct")
// }










function calcularImc() {

    let alturaInput = document.getElementById('altura')
    let pesoInput = document.getElementById('peso')
    let resultDiv = document.getElementById('result');

    let altura = parseFloat(alturaInput.value);
    let peso = parseFloat(pesoInput.value);

    let imc = peso / (altura ** 2);
    let category;



    if (imc < 18.5) {
        category = 'Abaixo do peso';
    } else if (imc >= 18.5 && imc < 25) {
        category = 'Peso normal';
    } else if (imc >= 25 && imc < 30) {
        category = 'Sobrepeso';
    } else {
        category = 'Obesidade';
    }

    resultDiv.innerHTML = `Seu IMC é: ${imc.toFixed(2)} Categoria: ${category}`;



}


