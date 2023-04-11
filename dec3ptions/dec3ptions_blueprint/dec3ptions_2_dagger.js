async function main() {
    var id_input = "";
    let id_input = prompt("Which weapon (in weaponList) to equip.", option_equipDaggers_equipDagger);
    if (id_input == null || id_input == "") { return };
    
    dagger_selection.equip_dagger(id_input);
};