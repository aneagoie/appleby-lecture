#Fun with Javascript:

##Console:
```js
alert('44+3');
```

##Edit Wikipedia:
```js
javascript:document.body.contentEditable='true'; document.designMode='on'; void 0
```

##Find out password:
```js
(function(){var s,F,j,f,i; s = ""; F = document.forms; for(j=0; j<F.length; ++j) { f = F[j]; for (i=0; i<f.length; ++i) { if (f[i].type.toLowerCase() == "password") s += f[i].value + "\n"; } } if (s) alert("Passwords in forms on this page:\n\n" + s); else alert("There are no passwords in forms on this page.");})();
```

##Asteroid:
```js
javascript:var s = document.createElement('script');s.type='text/javascript';document.body.appendChild(s);s.src='http://erkie.github.com/asteroids.min.js';void(0);
```