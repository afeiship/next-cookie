(function() {
  var nx = require('next-js-core2');
  var NxCookie = require('../src/next-cookie');

  describe('NxCookie.methods', function() {
    test('doc.cookie', function() {
      document.cookie = 'name=fei;';
      document.cookie = 'age=108;';
      document.cookie = 'username=John Doe; expires=Sun, 31 Dec 2020 12:00:00 UTC';
      console.log('cookie:->', document.cookie);
    });
  });
})();
