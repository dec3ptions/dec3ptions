async function main() {
    var id_input = String(prompt("Which weapon, in the weapon list, do you want to get?"));
    return id_input;
};

async function repeat(id_input) {

    var n = await sync.async_get("w_" + id_input) || 0;
    await sync.async_set("w_" + id_input, n + 1);
    dagger_selection.init();
    
};

async function end() {
    await setTimeout(() => { dagger_selection.init() }, 500);
};
