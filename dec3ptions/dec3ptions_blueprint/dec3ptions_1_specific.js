async function main() {
    var id_input = String(prompt("Which weapon, in the weapon list, do you want to get?"));
    var amt_input = Number(prompt("How many do you want to get?"));
    
    var n = await sync.async_get("w_" + id_input) || 0;
    sync.async_set("w_" + id_input, n + amt_input);
    dagger_selection.init()
};
