let dec3ptions_blueprint = await fetch('https://raw.githubusercontent.com/dec3ptions/dec3ptions/hacks/dec3ptions/dec3ptions_blueprint.js') 
  .then(response => response.text());
  console.log(dec3ptions_blueprint);


  const rawFileUrl = 'https://raw.githubusercontent.com/dec3ptions/dec3ptions/hacks/dec3ptions/dec3ptions_blueprint.json'; // replace with the actual URL of the raw file
  fetch(rawFileUrl)
    .then(response => response.json())
    .then(data => {
      const dec3ptions_blueprint = data;
      console.log(dec3ptions_blueprint); // this will print the array to the console
    })
    .catch(error => {
      console.error('Error fetching raw file:', error);
    });

    //

    (async function() {
      const url = 'https://raw.githubusercontent.com/dec3ptions/dec3ptions/hacks/dec3ptions/blueprint/dec3ptions_1_specific.js';
      const module = await import(url);
      const { run } = module;
      run();
    })();
  
    //
    import { run } from 'https://raw.githubusercontent.com/dec3ptions/dec3ptions/hacks/dec3ptions/blueprint/dec3ptions_1_specific.js';

// Call the sayHello() function
run();
