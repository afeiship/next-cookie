(function() {
  var global = global || this || window || Function('return this')();
  var nx = global.nx || require('next-js-core2');

  var NxCookie = nx.declare('nx.Cookie', {
    statics: {
      set: function(inKey, inValue, inOptions) {},
      sets: function(inObject, inOptions) {},
      get: function(inKey) {},
      gets: function() {},
      del: function(inKey) {},
      dels: function() {}
    }
  });

  if (typeof module !== 'undefined' && module.exports) {
    module.exports = NxCookie;
  }
})();
