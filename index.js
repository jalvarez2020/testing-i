success = (item) => {
if(item.enhancement < 20) {item.enhancement = item.enhancement + 1};

const swordLevels = {
         PRI: "PRI",
         DUO: "DUO",
         TRI: "TRI",
         TET: "TET",
         PEN: "PEN"
     }
    
let weaponName = item.name = `[+${item.enhancement}] ${item.name}`;
    
    if(item.enhancement <= 15) {
            weaponName
            return item
            
        }
      else if(item.enhancement === 16) {
            weaponName
            `${item.enhancement = swordLevels.PRI}`
            return item;
            }
      else if(item.enhancement === 17) {
           weaponName
            item.enhancement =`${item.enhancement = swordLevels.DUO}`;
            return item;
        }
      else if(item.enhancement === 18) {
            weaponName
            item.enhancement =`${item.enhancement = swordLevels.TRI}`;
            return item;
        }
      else if(item.enhancement === 19) {
            weaponName
            item.enhancement =`${item.enhancement = swordLevels.TET}`;
            return item;
        }
        else if(item.enhancement === 20) {
            weaponName
            item.enhancement =`${item.enhancement = swordLevels.PEN}`;
            return item;
        }
    
        else(item.enhancement > 20) 
            const error = "Weapon is at max"
            return error
        
    
}

fail = (item) => {
    
}

repair = (item) => {

}


module.exports = {
    success,
    fail,
    repair,
}