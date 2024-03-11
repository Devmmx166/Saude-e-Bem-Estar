let alturaInput = document.querySelector('input#altura')
let pesoInput = document.getElementById('peso')
let resultDiv = document.getElementById('result');
let campoObrigadorio = document.querySelector(".required-popup .required")


let labelAltura = document.querySelector("#label-altura")
let labelPeso = document.querySelector("#label-peso")
let alturaHelper = document.getElementById("#altura-helper")
let pesoHelper = document.getElementById("#peso-helper")
let helperText = document.querySelector(".helper-text")

function estilizarInputCorreto(input, helper){
    helper.classList.remove("visible")
    input.classList.remove("error")
    input.classList.add("correct")
}
function estilizarInputIncorreto(input, helper){
    helper.classList.add("visible")
    input.classList.add("error")
    input.classList.remove("correct")
}


//O "blur" serve para ao clicar ele seja chamado diferente do change que tem que digitar
alturaInput.addEventListener("blur", (e) => {
    let valor = e.target.value;
    

    if (valor === "") {
        valor.style.backgroundColor = "red"
    } else {
        helperText.style.display="none" 
    }
});

//mostra campo obrigatorio
function validarAlturaLabel(input, label) {

    input.addEventListener("focus", () =>{        
        label.innerText = "* Campo obrigatorio" 
        label.style.color="red"
         
        
    });
  

    input.addEventListener("blur", () =>{
        label.innerText="Altura (ex. 1.60) Altura (m)"
        label.style.color="black" 
        
   
    });

}

function validarPesoLabel(input, label) {

    input.addEventListener("focus", () =>{        
        label.innerText = "* Campo obrigatorio" 
        label.style.color="red"
         
        
    });
  

    input.addEventListener("blur", () =>{
        label.innerText="Peso (ex. 69.2) Peso (kg):"
        label.style.color="black" 
   
    });

}
validarAlturaLabel(alturaInput, labelAltura)
validarPesoLabel(pesoInput, labelPeso,)















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


