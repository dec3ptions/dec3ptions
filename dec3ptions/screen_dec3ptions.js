var btnStyle = "flex: 1 1 0%; display: block; color: #7600FF; background-color: #000000; border: 2px solid #7600FF;"; 
var hdrStyle = "color:#ffffff; font-size: 19px; font-weight: bold;"; 
var btnStyle0 = "flex: 1 1 0%; display: block; color: #ff0000; background-color: #000000; border: 2px solid red;"; 
var btnStyle1 = "flex: 1 1 0%; display: block; color: #00ff00; background-color: #000000; border: 2px solid green;";

document.getElementById('screen_dec3ptions').insertAdjacentHTML(`beforeEnd`,
  `<h1 style="color:#7600ff; font-size: 34.5px; font-weight: bold;">DEC3PTIONS\n<h1>` +

  `<h1 style="${hdrStyle}">\n\nGET DAGGERS<h1>` +
  `<div class="button" id="dec3ptions_1_specific" style="${btnStyle}">Specific</div>` +
  `<div class="button" id="dec3ptions_1_rapidSpecific" style="${btnStyle}">{RAPID} Specific<div class="button" id="toggle dec3ptions_1_rapidSpecific" style="${btnStyle0}"></div></div>` +
  `<div class="button" id="dec3ptions_1_level" style="${btnStyle}">Level</div>` +
  `<div class="button" id="dec3ptions_1_rapidLevel" style="${btnStyle}">{RAPID} Level<div class="button" id="toggle dec3ptions_1_rapidLevelbased" style="${btnStyle0}"></div></div>` +
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