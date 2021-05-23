    let dataBase = [
                    {id: 0, canal: "Fabio Holder", imagem: "fabio-holder.jpeg", descricao: "Olá, meu nome é Fabio, sou Analista de Valores Mobiliários (CNPI nº 1711), graduado em Engenharia Civil, MBA em Finanças e com outras especializações e certificações na área de investimentos.", video: '<iframe width="800" height="600" src="https://www.youtube.com/embed/Rtl5PrP7MfQ" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>'},

                    {id: 1, canal: "Breno Perrucho", imagem: "breno-perrucho.png", descricao: "Hoje o portal se tornou o 4º maior canal de educação financeira e empreendedorismo do país, com mais de 1 milhão de inscritos. O que começou como um simples canal no Youtube se tornou uma empresa com um propósito muito maior.", video: '<iframe width="800" height="600" src="https://www.youtube.com/embed/BLg5PEEkr0s" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>'},

                    {id: 2, canal: "Contadora da Bolsa", imagem: "contadora-da-bolsa.jpg", descricao: "Imposto de renda na bolsa não precisa ser complicado...Vem comigo que te explico!", video: '<iframe width="800" height="600" src="https://www.youtube.com/embed/YDNHeLPX808" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>'},

                    {id: 3, canal: "Daniel Nigri", imagem: "Daniel-nigri.png", descricao: "Somos um Canal dedicado a ajudar as pessoas a analisarem as empresas pela ótica fundamentalista.", video: '<iframe width="800" height="600" src="https://www.youtube.com/embed/4yLjKhWiChE" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>'},

                    {id: 4, canal: "Economirna", imagem: "economirna.png", descricao: "Olá! Aqui é a Mirna Borges e aqui você vai aprender a investir! O que você vai encontrar no canal: Os primeiros passos para começar a investir, Investimentos em renda fixa, Investimentos em renda variável, Empreendedorismo", video: '<iframe width="800" height="600" src="https://www.youtube.com/embed/6TaTyV7qqJo" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>'},
                    
                    {id: 5, canal: "Eduardo Fundamentei", imagem: "eduardo-fundamentei.jpg", descricao: "Análise fundamentalista de ações, stock e fundos imobiliários.", video: '<iframe width="800" height="600" src="https://www.youtube.com/embed/rw4_C_iQfac" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>'},

                    {id: 6, canal: "Luiz Fernando Roxo", imagem: "luiz-fernando-roxo.jfif", descricao: "Operando Opções. Mercado Financeiro. Mercado de Opções. Estratégia do Pozinho. Derivativos.", video:'<iframe width="800" height="600" src="https://www.youtube.com/embed/7EOlFyfdFKg" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>'},

                    {id: 7, canal: "Nathalia Arcuri", imagem: "NathaliaArcuri.png", descricao: "Sobra mês no fim do salário? Você quer saber como fazer renda extra? Quer começar a investir, mas não sabe por onde começar? Tem dívidas e quer sair dessa situação? Inscreva-se no Me Poupe! e descubra tudo o que ninguém nunca teve tesão de te falar sobre dinheiro - e de um jeito que você nunca imaginou!", video: '<iframe width="800" height="600" src="https://www.youtube.com/embed/CONnISuOYLc" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>'},

                    {id: 8, canal: "Pit Money", imagem: "pit-money.jpg", descricao: "Ensinando você a investir NA PRÁTICA, baseado no que eu faço com o MEU DINHEIRO!", video: '<iframe width="800" height="600" src="https://www.youtube.com/embed/Fo2UkIYmLxk" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>'},

                    {id: 9, canal: "Thiago Nigro", imagem: "thiago-nigro-o-primo-rico.png", descricao: "Quando comecei a ter contato com o mercado financeiro, há quase 7 anos atrás, eu percebi o como nós, brasileiros, poderíamos investir muito melhor. Com a vontade de investir com maior rentabilidade, eu estudei tudo que era possível e tirei mais de 6 certificações profissionais! Com isso em mãos, eu ingressei no mercado financeiro e tive contato com quase 1.000 investidores de sucesso. Depois de tudo isso, eu senti que deveria vir para a Internet, e com isso, eu criei meu blog: O Primo Rico.", video: '<iframe width="800" height="600" src="https://www.youtube.com/embed/BCnDLkohfvs" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>'},

                    {id: 10, canal: "Tiago Reis", imagem: "Tiago-Reis.jpg", descricao: "Sejam bem-vindos ao meu canal no Youtube. Enough said.", video: '<iframe width="800" height="600" src="https://www.youtube.com/embed/8xSJM9-_ldc" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>'},

                    {id: 11, canal: "Beatriz Aguillar", imagem: "beatriz-aguillar.jpg", descricao: "Olá! Seja muito bem vindo ao canal Papo de Bolsa... quer saber um pouquinho mais sobre mercado financeiro e investimentos?", video: '<iframe width="800" height="600" src="https://www.youtube.com/embed/H9q9QEjoB3Y" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>'},

                    {id: 12, canal: "Tio Huli", imagem: "tio-huli.jpg", descricao: "Me chamo Hulisses Dias, atuo no mercado de ações há mais de 15 anos,  sou analista certificado CNPI e investidor profissional (título esse para quem tem +10 MILHÕES em ativos financeiros) já ajudei mais de 15.000 alunos com um método claro de investimentos.", video: '<iframe width="800" height="600" src="https://www.youtube.com/embed/MrOAZs-NoXQ" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>'},
                ]


    const carregarPrincipal = (video) => {
        //console.log(video)
        let $titulo = document.querySelector(".titulo")
        let $descricao = document.querySelector(".descricao")
        let $videoPrincipal = document.querySelector('.video-principal')

        $titulo.innerHTML = video.canal
        $descricao.innerHTML = video.descricao
        $videoPrincipal.style.backgroundImage = `url('../resources/img/${video.imagem}')`
        $id = video.id
        $link = video.video

        $button = document.querySelector("#button")
        $button.addEventListener('click', function (){
            console.log($link)
            document.querySelector(".frame .titulo").innerHTML = video.canal
            document.querySelector(".frame .video").innerHTML = $link
            document.querySelector(".frame").style.display = "flex"
        })



    }

    const carregarCaroulsel = (database) => {

        let $carousel = document.querySelector(".owl-carousel")

        let listCarousel = ""
        let contador = 0
        for(video of database) {
            //console.log(video)
            if(video.id === 0){
                carregarPrincipal(video)
            } else {
                listCarousel += `<div class="item"><img id="${video.id}" class="imagem-min" src="./resources/img/${video.imagem}" alt="${video.canal}"></div>`
                contador++
            }
        
        }
        console.log(contador)

        $carousel.innerHTML = listCarousel
    }

    //carregarPrincipal(dataBase[0])
    carregarCaroulsel(dataBase)

    $('.owl-carousel').owlCarousel({
        stagePadding: 1,
        loop:true,
        margin:10,
        nav:true,
        responsive:{
            0:{
                items:1
            },
            600:{
                items:3
            },
            1000:{
                items:5
            }
        }
    })

    let imagemMin = document.querySelectorAll(".imagem-min")
            
    imagemMin.forEach((video) => {
        video.addEventListener("click", function(){
            console.log(video.id)
            carregarPrincipal(dataBase[video.id])
        })
    })
    
    $botaoVoltar = document.querySelector(".frame .botao").addEventListener('click', function(){
        $frame = document.querySelector(".frame").style.display = "none"
    })