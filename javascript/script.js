function fontSizeModifier(base){
  let size=0;
  function aumentar(){
    size++;
    return base * size;
  };
  function diminuir(){
    size--;
    return base * size;
  };
  return {
    mais: aumentar,
    menos: diminuir,
  };
};
let font = fontSizeModifier(10);
document.querySelector('main').style.fontSize=font.mais()+'px';

function modificar(type){
  if(type==1){
    document.querySelector('main').style.fontSize=font.mais()+'px';
  }
  else if(type=2){
    document.querySelector('main').style.fontSize=font.menos()+'px';
  }
}