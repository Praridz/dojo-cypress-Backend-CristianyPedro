function codebreaker (a,secret){
    let numerosecreto  = generateNumber(secret);

    const vectorA = [...a];
    const vectorB = [...numerosecreto];
    let respuesta = '';

    for(var i = 0;i<vectorA.length;i++){
        for(var j = 0;j<vectorB.length;j++){
           if(!vectorA[i].localeCompare(vectorB[j])){
               if(i===j){
                    respuesta = respuesta.concat('x');
               }else{
                    respuesta = respuesta.concat('-');
               }
           }
         }
    }
    return respuesta;
}

function generateRandom(){
    const random = Math.floor(Math.random()*10000);
    const randomS = random.toString();
    return randomS; 
}

function generateNumber(secret){
    return secret;
}

module.exports.codebreaker = codebreaker;
module.exports.generateRandom = generateRandom;