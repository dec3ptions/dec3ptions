[
  
    { "id": String(atob("ZGVjM3B0aW9uc18xX3NwZWNpZmlj")) /*dec3ptions_1_specific*/, "function": async function() { var weapon_id_choice = String(prompt("Which weapon, in the weapon list, do you want to get?")); var weapon_amt_coice = Number(prompt("How many do you want to get?")); var n = await sync.async_get("w_"+weapon_id_choice) || 0; sync.async_set("w_"+weapon_id_choice, n+weapon_amt_coice); dagger_selection.init() } },
    { "id": String(atob("ZGVjM3B0aW9uc18xX3JhcGlkU3BlY2lmaWM=")) /*dec3ptions_1_rapidSpecific*/, "function": async function() { var rapid_weapon_id_choice = String(prompt("Which weapon, in the weapon list, do you want to get?")); setInterval(async () => { var n = await sync.async_get("w_"+rapid_weapon_id_choice) || 0; await sync.async_set("w_"+rapid_weapon_id_choice, n+1); await dagger_selection.init(); }, 10) } },
    { "id": String(atob("ZGVjM3B0aW9uc18xX2xldmVsYmFzZWQ=")) /*dec3ptions_1_levelbased*/, "function": function() { dagger_selection.reward_level_clear();console.clear();console.log('Opened!'); } },
    { "id": String(atob("ZGVjM3B0aW9uc18xX3JhcGlkTGV2ZWxiYXNlZA==")) /*dec3ptions_1_rapidLevelbased*/, "function": function() { setInterval(() => {dagger_selection.reward_level_clear();console.clear();console.log('Opened!');}, 20); } },
    { "id": String(atob("ZGVjM3B0aW9uc18xXzk5OXg=")) /*dec3ptions_1_999x*/, "function": function() { var daggers = [{"id": "starter_sword"}, {"id": "spear1"}, {"id": "kitchen_knife"}, {"id": "spear2"}, {"id": "bullet"}, {"id": "banana"}, {"id": "short_dagger"}, {"id": "katana"}, {"id": "cool1"}, {"id": "pixel1"}, {"id": "diaknife"}, {"id": "carrotknife"}, {"id": "axe"}, {"id": "battle_axe"}, {"id": "claw"}, {"id": "eye_piercer"}, {"id": "long_axe"}, {"id": "mace"}, {"id": "rocket"}, {"id": "staff"}, {"id": "wolverine"}, {"id": "longsword"}, {"id": "broom"}, {"id": "speedsword"}, {"id": "shield"}, {"id": "pendulum"}, {"id": "slow_pendulum"}, {"id": "long_pendulum"}, {"id": "butterfly"}, {"id": "lol_fist"}, {"id": "superfast"}, {"id": "tiny_fast_dagger"}, {"id": "wearable"}];for (let i = 0; i < daggers.length; i++) {sync.async_set("w_"+daggers[i].id, 999);};dagger_selection.init(); } },
  
    { "id": String(atob("ZGVjM3B0aW9uc18yX2RhZ2dlcg==")) /*dec3ptions_2_dagger*/, "function": function() { var option_equipDaggers_equipDagger = "";let choice_EQUIP_DAGGERS_DAGGER_weapon_id = prompt("Which weapon (in weaponList) to equip.", option_equipDaggers_equipDagger);if (choice_EQUIP_DAGGERS_DAGGER_weapon_id == null || choice_EQUIP_DAGGERS_DAGGER_weapon_id == "") {return} else {option_equipDaggers_equipDagger = choice_EQUIP_DAGGERS_DAGGER_weapon_id};dagger_selection.equip_dagger(option_equipDaggers_equipDagger); } },
    { "id": String(atob("ZGVjM3B0aW9uc18yX2xvYWRvdXQ=")) /*dec3ptions_2_loadout*/, "function": function() { var option_equipDaggers_equipLoadout = "";let choice_EQUIP_DAGGERS_LOADOUT_weapon_id = prompt("Which weapon (in weaponList) to equip 4 times.", option_equipDaggers_equipLoadout);if (choice_EQUIP_DAGGERS_LOADOUT_weapon_id == null || choice_EQUIP_DAGGERS_LOADOUT_weapon_id == "") {return} else {option_equipDaggers_equipLoadout = choice_EQUIP_DAGGERS_LOADOUT_weapon_id};dagger_selection.equip_dagger(option_equipDaggers_equipLoadout);dagger_selection.equip_dagger(option_equipDaggers_equipLoadout);dagger_selection.equip_dagger(option_equipDaggers_equipLoadout);dagger_selection.equip_dagger(option_equipDaggers_equipLoadout); } },
    { "id": String(atob("ZGVjM3B0aW9uc18yX3JhbmRvbQ==")) /*dec3ptions_2_random*/, "function": function() { var int = Math.floor(Math.random() * 33) + 1; var daggers = [{"id":"starter_sword"},{"id":"spear1"},{"id":"kitchen_knife"},{"id":"spear2"},{"id":"bullet"},{"id":"banana"},{"id":"short_dagger"},{"id":"katana"},{"id":"cool1"},{"id":"pixel1"},{"id":"diaknife"},{"id":"carrotknife"},{"id":"axe"},{"id":"battle_axe"},{"id":"claw"},{"id":"eye_piercer"},{"id":"long_axe"},{"id":"mace"},{"id":"rocket"},{"id":"staff"},{"id":"wolverine"},{"id":"longsword"},{"id":"broom"},{"id":"speedsword"},{"id":"shield"},{"id":"pendulum"},{"id":"slow_pendulum"},{"id":"long_pendulum"},{"id":"butterfly"},{"id":"lol_fist"},{"id":"superfast"},{"id":"tiny_fast_dagger"},{"id":"wearable"}]; dagger_selection.equip_dagger(daggers[int].id); dagger_selection.init() } },
    { "id": String(atob("ZGVjM3B0aW9uc18yX3VuZXF1aXBhbGw=")) /*dec3ptions_2_unequipall*/, "function": function() { for (let i = 0; i < 4; i++) {dagger_selection.unequip_dagger(dagger_selection.equipped[dagger_selection.equipped.length - 1]);};dagger_selection.init(); } },
  
    { "id": String(atob("ZGVjM3B0aW9uc18zX2luZmluaXRl")) /*dec3ptions_3_infinite*/, "function": function() { setInterval(() => {upgrades.damage = 999;upgrades.health = 999;upgrades.speed = 99;upgrades.spin = 999}, 250); } },
    { "id": String(atob("ZGVjM3B0aW9uc18zX2ZyZWU=")) /*dec3ptions_3_free*/, "function": function() { upgrade_blueprint['damage'].costs = [0, 0, 0, 0, 0, 0, 0, 0];upgrade_blueprint['health'].costs = [0, 0, 0, 0, 0, 0, 0, 0];upgrade_blueprint['speed'].costs = [0, 0, 0, 0, 0, 0, 0, 0];upgrade_blueprint['spin'].costs = [0, 0, 0, 0, 0, 0, 0, 0]; upgrades.init(); } },
  
    { "id": String(atob("ZGVjM3B0aW9uc180X3NldA==")) /*dec3ptions_4_set*/, "function": function() { var option_xp_set = "";let choice_XP_SET_xp = prompt("What should your XP be set to?", option_xp_set);if (choice_XP_SET_xp == null || choice_XP_SET_xp == "") {return} else {option_xp_set = choice_XP_SET_xp};sync.async_set("xp", choice_XP_SET_xp);upgrades.init(); } },
    { "id": String(atob("ZGVjM3B0aW9uc180X2dldA==")) /*dec3ptions_4_get*/, "function": function() { var option_xp_get = "";let choice_XP_GET_xp = prompt("What should your XP be set to?", option_xp_get);if (choice_XP_GET_xp == null || choice_XP_GET_xp == "") {return} else {option_xp_get = choice_XP_GET_xp};sync.async_set("xp", Number(upgrades.xp) + Number(choice_XP_GET_xp));upgrades.init(); } },
  
    { "id": String(atob("ZGVjM3B0aW9uc181X2luc3RhbnQ=")) /*dec3ptions_5_instant*/, "function": function() { daily_gift.open(); } },
    { "id": String(atob("ZGVjM3B0aW9uc181X2luZmluaXRl")) /*dec3ptions_5_infinite*/, "function": function() { setInterval(() => {daily_gift.open();console.clear();console.log('Opened!')}, 10); } },
    { "id": String(atob("ZGVjM3B0aW9uc181X2N1c3RvbQ==")) /*dec3ptions_5_custom*/, "function": function() { String(atob("YWxlcnQoIlRoaXMgaGFzIG5vdCBiZWVuIHByb2dyYW1tZWQgaW4geWV0LiIpOw==")) } },
  
    { "id": String(atob("ZGVjM3B0aW9uc182X3BsYXk=")) /*dec3ptions_6_play*/, "function": function() { var option_levels_play = "";let choice_LEVELS_play = prompt("Which level do you want to play?", option_levels_play);if (choice_LEVELS_play == null || choice_LEVELS_play == "") {return} else {option_levels_play = [choice_LEVELS_play]};state.set("playing", {map_id: map_info[option_levels_play - 1].id}); } },
  
    { "id": String(atob("ZGVjM3B0aW9uc183X3dlYXBvbmxpc3Q=")) /*dec3ptions_7_weaponlist*/, "function": function() { alert('starter_sword\nspear1\nkitchen_knife\nspear2\nbullet\nbanana\nshort_dagger\nkatana\ncool1\npixel1\ndiaknife\ncarrotknife\naxe\nbattle_axe\nclaw\neye_piercer\nlong_axe\nmace\nrocket\nstaff\nwolverine\nlongsword\nbroom\nspeedsword\nshield\npendulum\nslow_pendulum\nlong_pendulum\nbutterfly\nlol_fist\nsuperfast\ntiny_fast_dagger\nwearable\n'); } },
    { "id": String(atob("ZGVjM3B0aW9uc183X2luZmluaXRlVGhyb3c=")) /*dec3ptions_7_infiniteThrow*/, "function": function() { setInterval(() => {for (const blade of action_manager.daggers) { action_manager.activate_dagger(blade); }}, 1); } },
  
]