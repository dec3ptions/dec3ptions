async function main() {
    var b_input = String(prompt("Are you sure you want to permanently upgrade your character? This cannot be undone, unless you reset your character data in the settings menu. (Y/N)").toLowerCase());
    if (b_input === undefined) {return};
    
    if (b_input === "y") {
        
        alert("Your upgrades have been permanently changed. To see your upgrades, go to the upgrades menu. If you want to reverse this action, you can reset your player data in the settings menu.");
        MAX_LEVEL = 999;
        await sync.async_set("damage",999);
        await sync.async_set("speed",99);
        await sync.async_set("spin",999);
        await sync.async_set("health",999);

        upgrades.init();
        
    } else if (b_input === "n") {
        alert("Your upgrades have not been permanently changed.");
    } else {
        alert("It looks like you did not enter Y or N. Please try this again and enter the neccessary information.");
    };
};
