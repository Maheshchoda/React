export function choice(items){
return console.log(items[Math.floor(Math.random() * items.length)]);
}

export function remove(items, item){
  const value = items.indexOf(item);
  if(value > -1){
    console.log("Before removal");
    console.log(items);
    items.splice(value, 1);
    console.log(`Removed first apperead fruit ${item} from index ${value}`);
    console.log("After removal");
    console.log(items);
  }
}
