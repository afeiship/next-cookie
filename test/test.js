(function() {
  var nx = require('next-js-core2');
  var NxCookie = require('../src/next-cookie');

  describe('Baisic test', function() {
    beforeAll(() => {
      NxCookie.clear();
    });

    test('nx.cookie --- set', function() {
      NxCookie.set('name', 'afei');
      NxCookie.set('age', 100);
      const cookies = document.cookie;
      expect(cookies.includes('name=afei')).toBe(true);
      expect(cookies.includes('age=100')).toBe(true);
    });
    test('nx.cookie --- sets', function() {
      NxCookie.sets({ name1: 'afei1', age1: 101 });
      const cookies = document.cookie;
      expect(cookies.includes('name1=afei1')).toBe(true);
      expect(cookies.includes('age1=101')).toBe(true);
    });
    test('nx.cookie --- get', function() {
      NxCookie.clear();
      document.cookie = 'test=1234;';
      document.cookie = 'body=20;';
      expect(NxCookie.get('test')).toBe('1234');
      expect(NxCookie.get('body')).toBe('20');
    });
    test('nx.cookie --- gets', function() {
      NxCookie.clear();
      document.cookie = 'key1=value1;';
      document.cookie = 'key2=value2';
      document.cookie = 'key3=value3; ';
      var res = NxCookie.gets();
      expect(res.key1).toBe('value1');
      expect(res.key2).toBe('value2');
      expect(res.key3).toBe('value3');
    });
    test('nx.cookie --- del', function() {
      NxCookie.clear();
      document.cookie = 'key1=value1;';
      document.cookie = 'key2=value2;';
      var res1 = NxCookie.gets();
      NxCookie.del('key1');
      var res2 = NxCookie.gets();
      expect(res1).toEqual({ key1: 'value1', key2: 'value2' });
      expect(res2).toEqual({ key2: 'value2' });
    });

    test('nx.cookie --- dels', function() {
      NxCookie.clear();
      document.cookie = 'key1=value1;';
      document.cookie = 'key2=value2;';
      document.cookie = 'key3=value3;';
      document.cookie = 'key4=value4;';
      NxCookie.dels(['key1', 'key3']);
      var res = NxCookie.gets();
      expect(res).toEqual({ key2: 'value2', key4: 'value4' });
    });

    test('nx.cookie --- clear', function() {
      NxCookie.clear();
      document.cookie = 'key1=value1;';
      document.cookie = 'key2=value2;';
      document.cookie = 'key3=value3;';
      document.cookie = 'key4=value4;';
      NxCookie.clear();
      var res = NxCookie.gets();
      expect(res).toEqual({});
    });
  });
})();
