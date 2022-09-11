fetch('https://pokeapi.co/api/v2/pokemon?limit=100000&offset=0')
        .then(response => response.json())
        .then(allpokemon => {

            let pokemon = []
            const telinha = document.querySelector('#telinha');

            allpokemon.results.map((val) =>{
                
                fetch(val.url)
                .then(response => response.json())
                .then(pokemonSingle=> {
                    
                pokemon.push({nome:val.name ,imagem:pokemonSingle.sprites.front_default})
                    
                setInterval(() => {
                    
                telinha.innerHTML =`
                <h1 class="titulo">${pokemon[i].nome}</h1>
                <div class="fotinha">
                    <img src="${pokemon[i].imagem}" alt="poke">
                </div> 
                `
                i++
            }, 5000);
                
                })
                
            })
        })