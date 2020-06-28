const AVG_READ_TIME = 400;

$(function(){
  console.log('★★★★★★★★★★★★★');
  
  let readText = $('section').text();

  $('.it-Tags').append(addText(readText));
});
 
function addText(text) {
  if(text !== void 0) {
    let textLen = text.length === 0 ? 1 : text.length;
    let calcReadTime = Math.round(textLen / 400);
    return '<p>' + calcReadTime + '分で読めます' + '</p>';
  }
}
