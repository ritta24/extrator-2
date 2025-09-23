const botaoMostraPalavras = document.querySelector("#botao-palavrachave");

botaoMostraPalavras.addEventListener("click", mostraPalavrasChave );

function mostraPalavrasChave() {
    const texto = document.querySelector("#entrada-de-texto").value;
    const campoResultado = document.querySelector("#resultado-palavrachave");
    const palavrasChave = processaTexto(texto);
}

    campoResultado.textContent = palavras;

    function processaTexto(texto) {
    let palavras = texto.split(/\P[L]+/u);

let frequencias = ();
for (let i of palavras) {
     frequencia{i} =0;
        for(let j of palavras) {
            if (i==j) {
                 frequencia(i)++;
                }
             }

}
    return palavras;
}