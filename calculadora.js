function calcularIMC(){

    // Entrada de dados
    let altura = parseFloat(document.getElementById("altura").value);
    let peso = parseFloat(document.getElementById("peso").value);
    let resultadoElemento = document.getElementById("resultado");

    // Limpa classes antigas antes de aplicar a nova
    resultadoElemento.className = "";

    // Validação
    if(isNaN(altura) || isNaN(peso) || altura <= 0 || peso <= 0){
        resultadoElemento.textContent = "Por favor, insira valores válidos.";
        resultadoElemento.classList.add("resultado-ruim");
        return;
    }

    // Cálculo do IMC
    let imc = peso / (altura * altura);
    let classificacao = "";
    let classeCss = "";

    // Classificação e cor
    if(imc < 18.5){
        classificacao = "Abaixo do peso";
    } else if(imc < 24.9){
        classificacao = "Peso normal";
    } else if(imc < 29.9){
        classificacao = "Sobrepeso";
    } else if(imc < 34.9){
        classificacao = "Obesidade grau I";
        classeCss = "resultado-ruim";
    } else if(imc < 39.9){
        classificacao = "Obesidade grau II";
    } else {
        classificacao = "Obesidade grau III";
    }

    // Saída
    resultadoElemento.textContent = "IMC: " + imc.toFixed(2) + " - " + classificacao;
    resultadoElemento.classList.add(classeCss);
}