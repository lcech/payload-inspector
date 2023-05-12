javascript:(function(){
  var iframe = document.createElement('iframe');
  iframe.src = 'https://pi.demogram.cz/';
  iframe.style.position = 'fixed';
  iframe.style.top = '0px';
  iframe.style.left = '0px';
  iframe.style.width = '100%';
  iframe.style.height = '100%';

  iframe.addEventListener("load", function() {
    frame.contentWindow.postMessage(
      document.querySelector('.PayloadModal_payload__jZjnP').innerText,
      '*'
    );
  });

  document.body.appendChild(iframe);

  

  return void(0);
})();