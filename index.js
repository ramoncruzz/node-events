// Padrao de projeto Observer 
const EventEmitter = require('events');

class MeuEmissor extends EventEmitter{}

const meuEmissor = new MeuEmissor();
const nomeEvento = 'usuario:click';

meuEmissor.on(nomeEvento, function(click){
    console.log('um usuario clicou', click);
});

meuEmissor.emit(nomeEvento,'barra de rolagem');
meuEmissor.emit(nomeEvento,'OK');


const stdin = process.openStdin();
stdin.addListener('data', value =>{
    console.log('Voce digitou ',value.toString().trim());
});