


function passarMouse(){
    let foto1 = window.document.getElementsByName("arcoiris")
    window.alert("Que tal uma arte na sua orelha?")
}

function outroGender(){
    let outroGender = window.document.getElementById("outroGender")
    let escolhaGenero = window.confirm("Confirma não ser atendido pelas opções acima?")
    if (escolhaGenero == true) {
        let autoDef = window.prompt("Digite sua autodefinição")
        if (autoDef == false) {
            autoDef = "FULANO"
        }
        window.alert(`Computados sua contribuição. Consultaremos a viabilidade de criar um botão de seleção para ${autoDef}s, gratidão` )
    } else {
        window.alert("Obrigada!")
    }
}



