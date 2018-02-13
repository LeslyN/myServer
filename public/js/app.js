// alert('levantando server desde archivo server.js');
//Instrucciones al objeto XMLHttpRequest
const XHR = new XMLHttpRequest();
console.log(XHR);

XHR.onreadystatechange = function() {
  if (XHR.readyState == 4 && XHR.status == 200) {
    //visualizas todos los estados, pero solo querio que 
    console.log(JSON.parse(XHR.responseText));
    console.log(XHR.res)
  } else {
    console.log('Hay un problema con el servidor');
  }
}

XHR.open('GET', 'https://api.github.com/zen');
XHR.send();