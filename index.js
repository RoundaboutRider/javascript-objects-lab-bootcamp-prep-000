var recipes = { object : 'key' }

function updateObjectWithKeyAndValue(object, key, value) {
  return Object.assign({},object,{[key]:value});
}

function destructivelyUpdateObjectWithKeyAndValue(recipes, key, value){
   recipes[key]=value;
   return recipes;
}
function deleteFromObjectByKey(recipes, key){
   const simo= Object.assign({}, recipes);
   delete simo[key];
   return simo;
 }

 function destructivelyDeleteFromObjectByKey(recipes, key){
   delete recipes[key];
   return recipes;
 }