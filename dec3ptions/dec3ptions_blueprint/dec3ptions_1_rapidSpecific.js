function main() {
    var id_input = String(prompt("Which weapon, in the weapon list, do you want to get?"));
    return String(id_input);
};

function repeat(id_input) {

    var n = sync.async_get("w_" + id_input) || 0;
    sync.async_set("w_" + id_input, n + 1);
    dagger_selection.init();
    
};

function end() {
    setTimeout(() => { dagger_selection.init() }, 500);
};
