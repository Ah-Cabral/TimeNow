//Utilizando função sleep
function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms))
}

//Criando função changeColor, que irá trocar a cor do background e a cor da fonte de cada um
function changeColor(cor, fontcolor){
  document.getElementById("body").style.background = cor;
  document.getElementById("clock-time").style.background = cor;
  document.getElementById("footer-font").style.color = fontcolor;
}

// O async é utilizado para permitir que uma chamada seja finalizada, pra DEPOIS continuar outra.
async function carregar(){
    //Cria-se um while True
    while (1) {

        //Declarando variáveis referentes a cada tempo no HTML
        let timeh = window.document.getElementById('hour')
        let timem = window.document.getElementById('minute')
        let times = window.document.getElementById('sec')

        //E a variável referente a logo, que mudará, dependendo do horário
        let logo = window.document.getElementById('logo-header')

        //Criação da variável data
        data = new Date()

        //e as variáveis em JavaScript
        let hora = data.getHours()
        let minuto = data.getMinutes()
        let segundo = data.getSeconds()

        //Criando condições para formatação das horas, ex: 01 -> 09
        if(hora < 10){
            timeh.innerHTML = `0${hora}`
        }else{
            timeh.innerHTML = hora
        }

        //Criando condições para formatação dos minutos, ex: 01 -> 09
        if(minuto < 10){
            timem.innerHTML = `0${minuto}`
        }else{
            timem.innerHTML = minuto
        }

        //Criando condições para formatação dos segundos, ex: 01 -> 09
        if(segundo < 10){
            times.innerHTML = `0${segundo}`
        }else{
            times.innerHTML = segundo
        }

        //Verificação da hora para mudança do layout    
        if(hora >= 12){
            changeColor("linear-gradient(to right, #f16b11, #f5af19)", "#f16b11");
            logo.src = 'images/logo-tarde.svg'
        }
        if(hora >= 17){
            changeColor("linear-gradient(to right, #0f0c29, #302b63, #24243e)","#302b63")
            logo.src = 'images/logo-noite.svg'
        }

        //Função sleep no final, para sempre atualizar a informação
        await sleep(1000)
        
    }
};

