const item = require('./index.js');

describe('success function', () => {

 test('should test', () => {
        expect(item.success(items)).toBeDefined();
        expect(item.success(items)).toBeTruthy();
        expect(item.success(items)).toReturn(items.enhancement)
       
    })
}) 




const items = {
        name: "bastard sword",
        type: "weapon",
        durability: 100,
        enhancement: `${[item.name]} 20`
    }
