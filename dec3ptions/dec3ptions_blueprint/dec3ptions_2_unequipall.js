async function main() {
    await sync.async_set("dagsel_equipped", JSON.stringify([]));
    await dagger_selection.init();
};