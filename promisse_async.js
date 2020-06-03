function makeRequest(location) {
  //usa return para usar oq ele retornar em chamadas encadeadas
  return new Promise((resolve, reject) => {
    console.log(`Making Request to ${location}`);
    if (location === "Google") {
      resolve(`o Google respondeu`);
    } else {
      reject(`We can only talk to google`);
    }
  });
}

function processResquest(response) {
  return new Promise((resolve, reject) => {
    console.log("processsando a resposta");
    resolve(`a informacao logada foi ${response}`);
  });
}

//usando promisses

// makeRequest("Google").then((response) => {
//   console.log(response);
//   return processResquest(response)
// }).then(processamento_da_resposta => {
//     console.log(`resposta: ${processamento_da_resposta}`)
// }).catch(err =>{
//     console.log(err)
// });

//usando async await

async function makeAsyncPromisses(api) {
  const esperaGoogle = await makeRequest(api);

  const processando = await processResquest(esperaGoogle);

  console.log(`Resposta: ${processando}`);
}

makeAsyncPromisses("Google");
