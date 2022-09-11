fetch('https://pokeapi.co/api/v2/pokemon?limit=100000&offset=0')//puxando a api
        .then(response => response.json())
        .then(allpokemon => {

            let pokemon = []                                    //onde armazeno o nome a foto da pokemon
            const telinha = document.querySelector('#telinha'); //local da tela
            const bt = document.querySelectorAll('#bt .bt');//local dos botoes
            let numero = document.querySelector('#input input');
            
            

            allpokemon.results.map((val) =>{                    //puxando a api que esta dentro da api principal
                
                fetch(val.url)
                .then(response => response.json())
                .then(pokemonSingle=> {
                    
                pokemon.push({nome:val.name ,imagem:pokemonSingle.sprites.front_default})//colocando o nome e a imagem do pokemon dentro da minha array pokemon
                var i = 0 


                    telinha.innerHTML =`
                        <h1 class="titulo">${pokemon[i].nome}</h1>
                        <div class="fotinha">
                        <img src="${pokemon[i].imagem}" alt="poke">
                        </div>  
                        `


                    bt[0].addEventListener('click',()=>{
                        i--
                        telinha.innerHTML =`
                            <h1 class="titulo">${pokemon[i].nome}</h1>
                            <div class="fotinha">
                            <img src="${pokemon[i].imagem}" alt="poke">
                            </div>  `
                        console.log(i)
                    })

                    bt[1].addEventListener('click',()=>{
                        i++
                        telinha.innerHTML =`
                            <h1 class="titulo">${pokemon[i].nome}</h1>
                            <div class="fotinha">
                            <img src="${pokemon[i].imagem}" alt="poke">
                            </div>  `
                        console.log(i)
                    })
                    
                    
                    numero.addEventListener('keyup',()=>{
                        i = numero.value
                        telinha.innerHTML =`
                            <h1 class="titulo">${pokemon[i].nome}</h1>
                            <div class="fotinha">
                            <img src="${pokemon[i].imagem}" alt="poke">
                            </div>  `
                    })
                
                      
            
                
                })
                
            })
        })
        