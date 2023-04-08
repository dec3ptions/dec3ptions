let dec3ptions_config;

fetch("https://raw.githubusercontent.com/dec3ptions/dec3ptions/hacks/dec3ptions/dec3ptions_config.json")
  .then(response => response.json())
  .then(data => { dec3ptions_config = eval(data) });
