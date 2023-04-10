/* credits: */ document.getElementById("screen_credits").insertAdjacentHTML(`beforeEnd`, `<h1> DEC3PTIONS MOD </h1>` + `<p> Dec3ptions#0000 </p>`);
/* messages: */ console.warn("Dec3ptions Hub - Loading..."); setTimeout(() => {console.warn("Dec3ptions Hub - Loaded!"); state.set("error", { h1: "Dec3ptions Hub", p: "Loaded! Please scroll down in the main menu to find the button that takes you to the mod. To toggle the visibility of the button, press Q.", target: "main_menu" });}, 500); 

/* var: */ var btnStyle = "flex: 1 1 0%; display: block; color: #7600FF; background-color: #000000; border: 2px solid #7600FF;"; var hdrStyle = "color:#ffffff; font-size: 19px; font-weight: bold;"; var btnStyle0 = "flex: 1 1 0%; display: block; color: #ff0000; background-color: #000000; border: 2px solid red;"; var btnStyle1 = "flex: 1 1 0%; display: block; color: #00ff00; background-color: #000000; border: 2px solid green;";
/* dec3ptions_btn: */ document.getElementById('screen_main_menu').insertAdjacentHTML('beforeend', `<div class="main_menu_row2"><div id="dec3ptions_btn" class="button" style="${btnStyle}">DEC3PTIONS</div></div>`); document.body.insertAdjacentHTML('beforeend', '<div class="screen" id="screen_dec3ptions" style="visibility: visible; display: none; background: #000000;"></div>');
/* state_blueprint: */ state_blueprint.push({ id: 'dec3ptions', on_focus: function() { $("#screen_dec3ptions").show(); $("#dec3ptions_btn").hide() }, on_blur: function() { $("#screen_dec3ptions").hide(); $("#dec3ptions_btn").show() } }); $("#dec3ptions_btn").click(function() { state.set("dec3ptions") });
/* keybinds: */ document.addEventListener('keydown', function(event) { if (event.key === dec3ptions_config.keybind || event.key === dec3ptions_config.keybind.toLowerCase()) { const mainMenuRow2 = document.querySelector('.main_menu_row2'); if (mainMenuRow2) { mainMenuRow2.style.display = mainMenuRow2.style.display === 'none' ? 'block' : 'none'; } } });
/* screen_dec3ptions: */ fetch('https://raw.githubusercontent.com/dec3ptions/dec3ptions/hacks/dec3ptions/screen_dec3ptions.js') .then(response => response.text()) .then(text => eval(text));

/* dec3ptions_config: */ let dec3ptions_config; fetch("https://raw.githubusercontent.com/dec3ptions/dec3ptions/hacks/dec3ptions/dec3ptions_config.json").then(response => response.json()).then(data => { dec3ptions_config = eval(data) });
/* dec3ptions_blueprint: */ let dec3ptions_blueprint; fetch("https://raw.githubusercontent.com/dec3ptions/dec3ptions/hacks/dec3ptions/dec3ptions_blueprint.json").then(response => response.json()).then(data => { dec3ptions_blueprint = eval(data) });

/* screen_dec3ptions btns: */
var intervalIds = [];

var main;
var main_response;

var input;

setTimeout(() => {
  for (const btn in dec3ptions_blueprint) {
    $("#" + dec3ptions_blueprint[btn].id).click(function () { 

      fetch(`https://raw.githubusercontent.com/dec3ptions/dec3ptions/hacks/dec3ptions/dec3ptions_blueprint/${dec3ptions_blueprint[btn].id}.js`)
          .then(response => response.text())
          .then(script => { main = new Function(script + '\nreturn main;')(); main_response = main();});
      

      if (dec3ptions_blueprint[btn].type === 0) { return };

      //var main_response;
      //var repeat_response;

      fetch(`https://raw.githubusercontent.com/dec3ptions/dec3ptions/hacks/dec3ptions/dec3ptions_blueprint/${dec3ptions_blueprint[btn].id}.js`)
        .then(response => response.text())
        .then(script => { 
          console.log(main_response);
          main_response = input;
          const repeat = new Function(script + '\nreturn repeat;')(); 
          repeat_response = repeat(main_response);
        });
      
      
      
      // assuming 'inputPromise' is the Promise object returned from your input function
      
      input.then(function(result) {
        console.log(result); // prints 'claw'
      }).catch(function(error) {
        console.error(error); // handle any errors
      });

      

     });
  };
}, 500)

