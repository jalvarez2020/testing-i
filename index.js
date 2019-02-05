success = (item) => {

 if(item.enhancement < 20) {item.enhancement = item.enhancement + 1};
    const swordLevels = {
         PRI: "PRI",
         DUO: "DUO",
         TRI: "TRI",
         TET: "TET",
         PEN: "PEN"
     }

    item.enhancement = item.enhancement + 1;

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
    
    let durabilityDamage = item.durability - 5;
    let enhancedDamage = item.durability - 10;
    let negEnhanceLevel = item.enhancement - 1;
  

    if(item.enhancement <= 14) {
            item.durability = durabilityDamage;
            item.name = `[+${item.enhancement}] ${item.name}`;
        }
      else if(item.enhancement === 16) {
            item.durability = durabilityDamage;
            item.name = `[+${item.enhancement}] ${item.name}`
        }
      else if(item.enhancement > 16) {
           item.enhancement = negEnhanceLevel
           item.durability = enhancedDamage
           item.name = `[+${item.enhancement}] ${item.name}`
        }
 eLevel = (item) => {
         const swordLevels = [
             "PRI",
             "DUO",
             "TRI",
             "TET",
             "PEN"
         ]
        const swordLevel = item.enhancement;
 
         if(swordLevel === 16) {
              item.enhancement = swordLevels[0];
         }
         else if(swordLevel === 17) {
             item.enhancement = swordLevels[1];
         }
         else if(swordLevel === 18) {
             item.enhancement = swordLevels[2];
         }
         else if(swordLevel === 19) {
             item.enhancement = swordLevels[3];
         }
         else if(swordLevel === 20) {
            item.enhancement = swordLevels[4];
         }
}
 eLevel(item);
 
       return item //end of eLevel
}


repair = (item) => {

    if(item.durability !== 100) {
       return item.durability = 100;
    }

    else return "Item durability at MaX!"

}


module.exports = {
    success,
    fail,
    repair,
}