const item = require('./index.js');

describe('Success function Testing', () => {
 test('Enhancement test', () => {
        expect(item.success(sword)).toBeTruthy();
    })
}) 


describe('Fail test'), () => {
  test('Enhancement Fail Test', () => {
      expect(item.fail(sword)).
  })
}


// describe('Repair Function Test'), () => {
//     test('Enhancement Fail Test', () => {
//         expect(item.fail(sword))
//     })
//   }



//Test Object
const sword = {
        name: "bastard sword",
        type: "weapon",
        durability: 100,
        enhancement: 0,
    }
