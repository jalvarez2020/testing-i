const item = require('./index.js');

describe('Success function Testing', () => {
 test('Enhancement test', () => {
        expect(item.success(sword)).toBeTruthy();
    })
});


describe('Fail Function Testing', () => {
    test('Enhancement Fail test', () => {
        expect(item.fail(sword)).toMatchObject(sword);

    })
})


describe('Repair Function Testing', () => {
    test('Repair test', () => {
        expect(item.repair(sword.durability)).toEqual(100);

    })
})



//Test Object
const sword = {
        name: "bastard sword",
        type: "weapon",
        durability: 90,
        enhancement: 10,
    }
