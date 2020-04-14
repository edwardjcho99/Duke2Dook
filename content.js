/*jshint esversion: 6 */

var elementsInsideBody = [...document.body.getElementsByTagName('*')];
// This makes an array of everything inside the body tag

//a function that loops through every single item
function findAndReplace(){
  elementsInsideBody.forEach(element =>{
    element.childNodes.forEach(child =>{
      if(child.nodeType === 3){
        replaceText(child);
      }
    });
  });
}

var replacementWords = [
  ["duke university","Dook Community College"],
  ["Duke Blue Devils men's","Dook Blue Devils boy's"],
  ["Duke Blue Devils women's","Dook Blue Devils Girl's"],
  ["Duke Men's", "Dook boy's"],
  ["Duke Women's", "Dook Girl's"],
  ["Duke MBB", "Dook BBB"],
  ["DukeMBB", "DookBBB"],
  ["Duke WBB", "Dook GBB"],
  ["DukeWBB", "DookGBB"],
]

function replaceText(node){
  let value = node.nodeValue;
  console.log(value);

  for (var pair in replacementWords){
    value = value.replace(new RegExp(replacementWords[pair][0], "gi"), replacementWords[pair][1]);
    console.log(value);
  }

  value = value.replace(new RegExp("Duke","gi"), "Dook");
  console.log(value);

  node.nodeValue = value;
}

window.onload = findAndReplace();
