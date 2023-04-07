//
const key = sync.key("xp");
const val = 999999999;
var saveObject = {[key]: val};;

chrome.storage.local.set(saveObject, function(){
    webext.record_set(key, val);
});

//
const dec3ptions_config = await fetch('https://raw.githubusercontent.com/dec3ptions/dec3ptions/hacks/dec3ptions/dec3ptions_config.json')
  .then(response => response.json());
console.log(dec3ptions_config);