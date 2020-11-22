/*!
 * name: @jswork/next-cookie
 * description: A simple, lightweight JavaScript API for handling browser cookies for next.
 * homepage: https://github.com/afeiship/next-cookie
 * version: 1.0.0
 * date: 2020-11-22 20:36:22
 * license: MIT
 */

(function () {
  var global = global || this || window || Function('return this')();
  var nx = global.nx || require('@jswork/next');
  var DEFAULT_OPTIONS = { path: '/' };
  var EXPIRES_TIME = 'Thu, 01 Jan 1970 00:00:00 GMT';

  var NxCookie = nx.declare('nx.Cookie', {
    statics: {
      set: function (inKey, inValue, inOptions) {
        var options = nx.mix(null, DEFAULT_OPTIONS, inOptions);
        var suffix = 'path=' + options.path + ';';
        var exp = options.expires;
        var domain = options.domain;
        //@skill: data > -1; but: string<=1
        exp && (suffix += 'expires=' + (exp > -1 ? exp.toUTCString() : exp));
        domain && (suffix += 'domain=' + domain);
        document.cookie = inKey + '=' + inValue + ';' + suffix;
      },
      sets: function (inObject, inOptions) {
        nx.forIn(
          inObject,
          function (key, value) {
            this.set(key, value, inOptions);
          },
          this
        );
      },
      get: function (inKey) {
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
        return '';
      },
      gets: function () {
        var jar = {};
        var cookies = document.cookie ? document.cookie.split('; ') : [];

        nx.forEach(cookies, function (item) {
          var parts = item.split('=');
          var cookie = parts.slice(1).join('=');
          if (cookie.charAt(0) === '"') {
            cookie = cookie.slice(1, -1);
          }
          jar[parts[0]] = cookie;
        });
        return jar;
      },
      del: function (inKey) {
        this.set(inKey, '', { expires: EXPIRES_TIME });
      },
      dels: function (inArray) {
        nx.forEach(
          inArray,
          function (key) {
            this.del(key);
          },
          this
        );
      },
      clear: function () {
        var cookies = document.cookie.split(';');
        for (var i = 0; i < cookies.length; i++) {
          var cookie = cookies[i];
          var eqPos = cookie.indexOf('=');
          var name = eqPos > -1 ? cookie.substr(0, eqPos) : cookie;
          document.cookie = name + '=;expires=' + EXPIRES_TIME;
        }
      }
    }
  });

  if (typeof module !== 'undefined' && module.exports) {
    module.exports = NxCookie;
  }
})();
