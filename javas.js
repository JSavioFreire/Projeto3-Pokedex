fetch('https://pokeapi.co/api/v2/pokemon?limit=100000&offset=0')
        .then(response => response.json())
        .then(allpokemon => {

            pokemon = []

            

            allpokemon.results.map((val) =>{
                
                fetch(val.url)
                .then(response => response.json())
                .then(pokemonSingle=> {
        
                pokemon.push({nome:val.name ,imagem:pokemonSingle.sprites.front_default})

                
                })
                
            })
        })