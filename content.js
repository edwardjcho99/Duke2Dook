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
  ["Duke University","Dook Community College"],
  ["Duke university","Dook community college"],
  ["duke university","Dook community college"],
  ["Duke Blue Devils Men's","Dook Blue Devils Boy's"],
  ["Duke blue devils men's","Dook blue bevils boy's"],
  ["Duke Blue Devils women's","Dook Blue Devils girl's"],
  ["Duke Blue Devils Women's","Dook Blue Devils Girl's"],
  ["Duke Men's", "Dook Boy's"],
  ["Duke men's", "Dook boy's"],
  ["Duke Mens", "Dook Boys"],
  ["Duke mens", "Dook boys"],
  ["Duke Women's", "Dook Girl's"],
  ["Duke women's", "Dook girl's"],
  ["Duke Womens", "Dook Girls"],
  ["Duke womens", "Dook girls"],
  ["Duke MBB", "Dook BBB"],
  ["DukeMBB", "DookBBB"],
  ["Duke WBB", "Dook GBB"],
  ["DukeWBB", "DookGBB"],
  ["Mike Krzyzewski",'Mike "Duke is an elitist institution" Krzyzewski'],
  ["mike krzyzewski",'mike "Duke is an elitist institution" krzyzewski'],
  ["Coach K ",'Coach "Duke is an elitist institution" K '],
  ["Coach K,",'Coach "Duke is an elitist institution" K,'],
  ["Coach K.",'Coach "Duke is an elitist institution" K.'],
  ['Coach K",','Coach "Duke is an elitist institution" K"'],
  ["coach k ",'coach "Duke is an elitist institution" k '],
  ["Duke","Dook"],
  ["duke","dook"]
]

function replaceText(node){
  let value = node.nodeValue;
  for (var pair in replacementWords){
    value = value.replace(replacementWords[pair][0], replacementWords[pair][1]);
  }

  node.nodeValue = value;
}

window.onload = findAndReplace();
