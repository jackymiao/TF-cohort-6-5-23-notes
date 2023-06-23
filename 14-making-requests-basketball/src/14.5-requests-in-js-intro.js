//import the tool that lets us make web/api requests
const axios = require("axios");
//REquest types: get, post, put, delete

// MAKE AN API CALL TO THE CRYPTOCURRENCY SERVER AND LOG ALL THE COINS
function getCryptoCoins(){
  const url = 'https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&sparkline=false'
  
  axios.get(url)
    .then((response)=>{
      const mostMula = response.data.sort((coinObjA, coinObjB)=>{
        return coinObjB.price_change_percentage_24h - coinObjA.price_change_percentage_24h
      }).slice(0,3)
      // console.log(response.data) //contains the information from the response body
      // console.log(response.status) //status code
      console.log(mostMula)
    })
  
  console.log("other thing that load up faster")
}

// getCryptoCoins()

// MAKE AN API CALL TO THE POKEMON API AND LOG ALL THE POKEMON
function getPokemon(){
  const url = "https://pokeapi.co/api/v2/pokemon?limit=100000&offset=0"

  axios.get(url) //axios calls return a promise
    .then((response)=>{
      console.log(response.data)
    })
    .catch((err)=>{
      console.log(err.message)
    })
}

// getPokemon()

// MAKE AN API CALL TO OUR PLAYERS SERVER (LOCALLY RUN SERVER) AND LOG ALL THE PLAYERS
function getAllPlayers(){
  const url = "http://localhost:5000/players"
  axios.get(url)
    .then((response)=>{
      console.log(response.data)
    })
}

// getAllPlayers()

// MAKE AN API CALL TO OUR PLAYERS SERVER AND SHOW ONLY THE NAMES OF THE PLAYERS IN AN ARRAY
function getPlayerNamesOnly(){
  const url = "http://localhost:5000/players"
  axios.get(url)
    .then((response)=>{
      const onlyNames = response.data.map((playerObj)=>{
        return playerObj.name
      })
      console.log(onlyNames)
    })
}

// getPlayerNamesOnly()

// MAKE AN API CALL TO OUR PLAYERS SERVER AND SHOW ONLY PLAYERS FROM A GIVEN STATE
function getPLayersByState(stateName){
  const url = "http://localhost:5000/players"
  axios.get(url)
    .then((response)=>{
      const onlyCaliPlayers = response.data.filter((playerObj)=>{
        return playerObj.state === stateName
      })
      console.log(onlyCaliPlayers)
    })
}

// getPLayersByState("California")

