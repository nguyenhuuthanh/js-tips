// How to efficiently remove elements from an array 

function pull(arr, removeList) {
  var removeSet = new Set(removeList.map((obj) => obj.id));
  return arr.filter(function (el) {
    return !removeSet.has(el.id);
  });
}

const shoppingCard = [
  { id: 1, name: "Nike Air Max 1 OG" },
  { id: 2, name: "Air Jordan 1 Mid" },
];

const removeList = [{ id: 2, name: "Air Jordan 1 Mid" }];
pull(shoppingCard, removeList) 
// [
//  { id: 1, name: "Nike Air Max 1 OG" }, 
//  { id: 2, name: "Air Jordan 1 Mid" }
// ]
