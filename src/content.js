const AVG_READ_TIME = 400;

$(function(){
  let readText = $('section').text();
  $('textarea').on('keydown' , 
  function (e){
    if(e.keyCode === 9) {
      e.preventDefault();
      let elm = e.target;
      let val = elm.value;
      let pos = elm.selectionStart;
      elm.value = val.substr(0, pos) + '\t' + val.substr(pos, val.length);
      elm.setSelectionRange(pos + 1, pos + 1);
    }
  });
  $('.it-Tags').append(addText(readText));
});
 
function addText(text) {
  if(text !== void 0) {
    let textLen = text.length === 0 ? 1 : text.length;
    let calcReadTime = Math.round(textLen / 400);
    return '<p>' + calcReadTime + '分で読めます' + '</p>';
  }
}
