// World News Heatmap — client bootstrap
// This file contains NO secrets. It fetches everything from the server.
(function(){
  'use strict';

  fetch('/bundle', { cache: 'no-store' })
    .then(function(r){ return r.json(); })
    .then(function(b){
      // Inject CSS
      var s = document.createElement('style');
      s.textContent = b.css;
      document.head.appendChild(s);

      // Inject ts keyframe holder
      var ts = document.createElement('style');
      ts.id = 'ts';
      document.head.appendChild(ts);

      // Inject HTML
      var root = document.getElementById('root');
      root.outerHTML = b.html;

      // Token already injected server-side into b.logic — just run it
      var script = document.createElement('script');
      script.textContent = '(function(){\n' + b.logic + '\n})();';
      document.body.appendChild(script);
    })
    .catch(function(e){
      document.body.innerHTML =
        '<div style="color:#ff4444;padding:40px;font-family:monospace;background:#04091a;height:100vh">' +
        'Failed to load app: ' + e.message + '</div>';
    });
})();
