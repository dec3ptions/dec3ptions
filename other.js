/* Ignore: */ var btnStyle = "flex: 1 1 0%; display: block; color: #7600FF; background-color: #000000; border: 2px solid #7600FF;"; var hdrStyle = "color:#ffffff; font-size: 19px; font-weight: bold;"; var btnStyle0 = "flex: 1 1 0%; display: block; color: #ff0000; background-color: #000000; border: 2px solid red;"; var btnStyle1 = "flex: 1 1 0%; display: block; color: #00ff00; background-color: #000000; border: 2px solid green;";
/* Main_menu_btn: */ document.getElementById('screen_main_menu').insertAdjacentHTML('beforeend', `<div class="main_menu_row2"><div id="dec3ptions_btn" class="button" style="${btnStyle}">DEC3PTIONS</div></div>`); document.body.insertAdjacentHTML('beforeend', '<div class="screen" id="screen_dec3ptions" style="visibility: visible; display: none; background: #000000;"></div>')
/* State: */ state_blueprint.push({ id: 'dec3ptions', on_focus: function() { $("#screen_dec3ptions").show(); $("#dec3ptions_btn").hide() }, on_blur: function() { $("#screen_dec3ptions").hide(); $("#dec3ptions_btn").show() } }); $("#dec3ptions_btn").click(function() { state.set("dec3ptions") });
/* Keybind: */ document.addEventListener('keydown', function(event) { if (event.key === 'q' || event.key === 'Q') { const mainMenuRow2 = document.querySelector('.main_menu_row2'); if (mainMenuRow2) { mainMenuRow2.style.display = mainMenuRow2.style.display === 'none' ? 'block' : 'none'; } } });
/* Screen: */ document.getElementById("screen_credits").insertAdjacentHTML(`beforeEnd`, `<h1> DEC3PTIONS MOD </h1>` + `<p> Dec3ptions#0000 </p>`);
/* Config */ const dec3ptions_config = await fetch('https://raw.githubusercontent.com/dec3ptions/dec3ptions/hacks/dec3ptions/dec3ptions_config.json') .then(response => response.json()); console.log(dec3ptions_config);

let dec3ptions_blueprint = await fetch('https://raw.githubusercontent.com/dec3ptions/dec3ptions/hacks/dec3ptions/dec3ptions_blueprint.js') .then(response => response.text()); console.log(dec3ptions_blueprint);


document.getElementById('screen_dec3ptions').insertAdjacentHTML(`beforeEnd`,
  `<h1 style="color:#7600ff; font-size: 34.5px; font-weight: bold;">DEC3PTIONS\n<h1>` +

  `<h1 style="${hdrStyle}">\n\nGET DAGGERS<h1>` +
  `<div class="button" id="dec3ptions_1_specific" style="${btnStyle}">Specific</div>` +
  `<div class="button" id="dec3ptions_1_rapidSpecific" style="${btnStyle}">{RAPID} Specific<div class="button" id="toggle dec3ptions_1_rapidSpecific" style="${btnStyle0}"></div></div>` +
  `<div class="button" id="dec3ptions_1_levelbased" style="${btnStyle}">Level</div>` +
  `<div class="button" id="dec3ptions_1_rapidLevelbased" style="${btnStyle}">{RAPID} Level<div class="button" id="toggle dec3ptions_1_rapidLevelbased" style="${btnStyle0}"></div></div>` +
  `<div class="button" id="dec3ptions_1_999x" style="${btnStyle}">999X</div>` +

  `<h1 style="${hdrStyle}">\n\nEQUIP DAGGERS<h1>` +
  `<div class="button" id="dec3ptions_2_dagger" style="${btnStyle}">Dagger</div>` +
  `<div class="button" id="dec3ptions_2_loadout" style="${btnStyle}">Loudout</div>` +
  `<div class="button" id="dec3ptions_2_random" style="${btnStyle}">Random</div>` +
  `<div class="button" id="dec3ptions_2_unequipall" style="${btnStyle}">Unequip All</div>` +

  `<h1 style="${hdrStyle}">\n\nUPGRADES<h1>` +
  `<div class="button" id="dec3ptions_3_infinite" style="${btnStyle}">Infinite<div class="button" id="toggle dec3ptions_3_infinite" style="${btnStyle0}"></div></div>` +
  `<div class="button" id="dec3ptions_3_free" style="${btnStyle}">Free</div>` +

  `<h1 style="${hdrStyle}">\n\nXP<h1>` +
  `<div class="button" id="dec3ptions_4_set" style="${btnStyle}">Set</div>` +
  `<div class="button" id="dec3ptions_4_get" style="${btnStyle}">Get</div>` +

  `<h1 style="${hdrStyle}">\n\nDAILY GIFTS<h1>` +
  `<div class="button" id="dec3ptions_5_instant" style="${btnStyle}">Instant</div>` +
  `<div class="button" id="dec3ptions_5_infinite" style="${btnStyle}">Infinite<div class="button" id="toggle dec3ptions_5_infinite" style="${btnStyle0}"></div></div>` +
  `<div class="button" id="dec3ptions_5_custom" style="${btnStyle}">Custom</div>` +

  `<h1 style="${hdrStyle}">\n\nLEVELS<h1>` +
  `<div class="button" id="dec3ptions_6_play" style="${btnStyle}">Play</div>` +

  `<h1 style="${hdrStyle}">\n\nOTHER / INFO<h1>` +
  `<div class="button" id="dec3ptions_7_weaponlist" style="${btnStyle}">Weapon List</div>` +
  `<div class="button" id="dec3ptions_7_infiniteThrow" style="${btnStyle}">Infinite Throw</div>` +

`</div>`);

/* Buttons */ var intervalIds = [];for (let i = 0; i < dec3ptions_blueprint.length; i++) {$('#' + dec3ptions_blueprint[i].id).click(function() {if (!dec3ptions_blueprint[i].repeat) {dec3ptions_blueprint[i].function();return};if(intervalIds.find(obj => obj.id === dec3ptions_blueprint[i].id)) {var object = intervalIds.find(obj => obj.id === dec3ptions_blueprint[i].id);clearInterval(object.intervalId);console.log(intervalIds);intervalIds.splice(object, 1);dec3ptions_blueprint[i].end();} else {if (document.getElementById(`toggle ${dec3ptions_blueprint[i].id}`).style.borderColor === "green") { return toggle.style.borderColor = "red" };const btn_function = dec3ptions_blueprint[i].function();var intervalId;intervalId = setInterval(() => { dec3ptions_blueprint[i].repeat(btn_function); }, Number(dec3ptions_blueprint[i].timeout));intervalIds.push({"id": dec3ptions_blueprint[i].id, "intervalId": intervalId});console.log(intervalId);};if(document.getElementById(`toggle ${dec3ptions_blueprint[i].id}`)) {var toggle = document.getElementById(`toggle ${dec3ptions_blueprint[i].id}`);if (toggle.style.borderColor === "red") {toggle.style.borderColor = "green";} else {toggle.style.borderColor = "red";};};});};
