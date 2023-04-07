let dec3ptions_blueprint = await fetch('https://raw.githubusercontent.com/dec3ptions/dec3ptions/hacks/dec3ptions/dec3ptions_blueprint.js') 
  .then(response => response.text()); 
  console.log(dec3ptions_blueprint);


const url = 'https://raw.githubusercontent.com/dec3ptions/dec3ptions/hacks/dec3ptions/dec3ptions_blueprint.js';

fetch(url)
  .then(response => {
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    return response.text();
  })
  .then(text => {
    const script = new Function(`module.exports = ${text}`);
    const data = script();
    const dec3ptions_blueprint = data;
    console.log(dec3ptions_blueprint);
  })
  .catch(error => {
    console.error('Error fetching file:', error);
  });
