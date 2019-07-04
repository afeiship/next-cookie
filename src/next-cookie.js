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
      get: function(inKey) {},
      del: function(inKey) {}
    }
  });

  if (typeof module !== 'undefined' && module.exports) {
    module.exports = NxCookie;
  }
})();
