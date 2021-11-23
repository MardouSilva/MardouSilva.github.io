function editarHeader(){
    document.getElementById("titulo").innerHTML="Um cão!";
    document.getElementById("imagem").setAttribute="src";
    document.getElementById("imagem").src="imagens/cachorro.jpg";
}
function editarMain(){
    document.getElementById("topico1").innerHTML="Descrição";
    document.getElementById("descricao1").innerHTML="Fiel, companheiro e inteligente são caracteristicas nas quais me indentifico muito com este animal.";
    document.getElementById("topico2").innerHTML="Habitat";
    document.getElementById("selvagem").innerHTML="Temos os cães selvagens, que vivem na natureza, sem dependências de humanos diretamente.";
    document.getElementById("domestico").innerHTML="Temos os cães domesticos, que são criados por humanos e são bem dependentes deles.";
    document.getElementById("final").innerHTML="Site de referência:";
    document.getElementById("link").setAttribute="href";
    document.getElementById("link").setAttribute="target";
    document.getElementById("link").href="https://www.mundoecologia.com.br/animais/habitat-do-cachorro-onde-eles-vivem/#:~:text=C%C3%A3o%3A%20Geografia%20e%20Habitat%20C%C3%A3es%20podem%20ser%20encontrados,%C3%A1gua%20e%20cobertura%20abundantes%2C%20como%20florestas%20e%20matas.";
    document.getElementById("link").target="_blanck";
    document.getElementById("link").innerHTML="Mundo Ecologia";
}
function editarFooter(){
    document.getElementById("obrigado").innerHTML="Obrigado pela visita!";
}

//Ativando funções
editarHeader();
editarMain();
editarFooter();