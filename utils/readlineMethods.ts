import readline from 'node:readline';

export const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});


export const askInfo = (question: string): Promise<string> =>{
  return new Promise ((resolve)=>{
  rl.question(`${question}`, (answ: string)=>{
    console.log("Resposta salva como: " + answ)
    console.log("-------------------------------")
    resolve(answ)
  })
  })
}


