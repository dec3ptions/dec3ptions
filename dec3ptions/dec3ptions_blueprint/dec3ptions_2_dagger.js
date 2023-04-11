async function main() {
    if (dagger_selection.equipped.length >= 4) { 
        alert("You currently have too many weapons equipped.");
    } else {
        var id_input = String(prompt("What weapon do you want to equip?"));
        
        await dagger_selection.equipped.push(id_input);
        await sync.async_set("dagsel_equipped", JSON.stringify(dagger_selection.equipped));
        await dagger_selection.init();
        await state.set("dagsel");
        
        alert(`You equipped a ${id_input}`);
    };
};