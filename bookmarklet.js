javascript:(function(){
  var iframe = document.createElement('iframe');
  iframe.src = 'https://pi.demogram.cz/';
  iframe.style.position = 'fixed';
  iframe.style.top = '0px';
  iframe.style.left = '0px';
  iframe.style.width = '100%';
  iframe.style.height = '100%';
  iframe.style.background = 'White';
  iframe.style.zIndex = 100;
  iframe.id = 'payload-inspector';

  iframe.addEventListener('load', function() {
    iframe.contentWindow.postMessage(
      document.querySelector('.PayloadModal_payload__jZjnP').innerText,
      '*'
    );
  });

  window.addEventListener('keydown', function(event) {
    if (event.isComposing || event.key === 'Escape') {
      document.body.removeChild(iframe);
    }
  }, { once: true });

  document.body.appendChild(iframe);
})();