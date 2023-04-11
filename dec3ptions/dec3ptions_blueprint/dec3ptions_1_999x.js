async function main() {
    var daggers = [
        {"id": "starter_sword"}, 
        {"id": "spear1"}, 
        {"id": "kitchen_knife"}, 
        {"id": "spear2"}, 
        {"id": "bullet"}, 
        {"id": "banana"}, 
        {"id": "short_dagger"}, 
        {"id": "katana"}, 
        {"id": "cool1"}, 
        {"id": "pixel1"}, 
        {"id": "diaknife"}, 
        {"id": "carrotknife"}, 
        {"id": "axe"}, 
        {"id": "battle_axe"}, 
        {"id": "claw"}, 
        {"id": "eye_piercer"}, 
        {"id": "long_axe"}, 
        {"id": "mace"}, 
        {"id": "rocket"}, 
        {"id": "staff"}, 
        {"id": "wolverine"}, 
        {"id": "longsword"}, 
        {"id": "broom"}, 
        {"id": "speedsword"}, 
        {"id": "shield"}, 
        {"id": "pendulum"}, 
        {"id": "slow_pendulum"}, 
        {"id": "long_pendulum"}, 
        {"id": "butterfly"}, 
        {"id": "lol_fist"}, 
        {"id": "superfast"}, 
        {"id": "tiny_fast_dagger"}, 
        {"id": "wearable"}
    ];

    for (let i = 0; i < daggers.length; i++) {
        sync.async_set("w_"+daggers[i].id, 999);
    };
    
    dagger_selection.init(); 
};