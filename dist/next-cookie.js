/*!
 * name: next-cookie
 * url: https://github.com/afeiship/next-cookie
 * version: 1.0.0
 * date: 2019-07-04T04:53:55.743Z
 * license: MIT
 */

(function() {
  var global = global || this || window || Function('return this')();
  var nx = global.nx || require('next-js-core2');
  var nxDefaults = nx.defaults || require('next-defaults');
  var document = global.document;
  var DEFAULT_OPTIONS = { path: '/' };

  var NxCookie = nx.declare('nx.Cookie', {
    statics: {
      set: function(inKey, inValue, inOptions) {
        var options = nx.mix(null, DEFAULT_OPTIONS, inOptions);
        var suffix = 'path=' + options.path + ';';
        options.expires && (suffix += 'expires=' + options.expires.toUTCString());
        document.cookie = inKey + '=' + inValue + ';' + suffix;
      },
      sets: function(inObject, inOptions) {
        nx.forIn(
          inObject,
          function(key, value) {
            this.set(key, value, inOptions);
          },
          this
        );
      },
      get: function(inKey) {
        var cookies = document.cookie ? document.cookie.split('; ') : [];
        var i = 0;
        for (; i < cookies.length; i++) {
          var parts = cookies[i].split('=');
          var cookie = parts.slice(1).join('=');

          if (cookie.charAt(0) === '"') {
            cookie = cookie.slice(1, -1);
          }

          if (inKey === parts[0]) {
            return cookie;
          }
        }
      },
      gets: function() {
        var jar = {};
        var cookies = document.cookie ? document.cookie.split('; ') : [];
        var i = 0;
        for (; i < cookies.length; i++) {
          var parts = cookies[i].split('=');
          var cookie = parts.slice(1).join('=');

          if (cookie.charAt(0) === '"') {
            cookie = cookie.slice(1, -1);
          }
          jar[parts[0]] = cookie;
        }
        return jar;
      },
      del: function(inKey) {
        this.set(inKey, '', { expires: -1 });
      }
    }
  });

  if (typeof module !== 'undefined' && module.exports) {
    module.exports = NxCookie;
  }
})();

//# sourceMappingURL=next-cookie.js.map
