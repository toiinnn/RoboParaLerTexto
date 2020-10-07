const utterance = new SpeechSynthesisUtterance();
utterance.text = 'Oi Daniel';
utterance.lang = 'pt-BR';

function speak(){
  speechSynthesis(utterance);
}

function stop(){
  speechSynthesis.cancel();
}

function setText(event){
  utterance.text = event.target.innerText;
}