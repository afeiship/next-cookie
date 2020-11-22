# next-cookie
> A simple, lightweight JavaScript API for handling browser cookies for next.

[![version][version-image]][version-url]
[![license][license-image]][license-url]
[![size][size-image]][size-url]
[![download][download-image]][download-url]

## installation
```bash
npm install -S @jswork/next-cookie
```

## apis
| api   | params                  | description                                       |
| ----- | ----------------------- | ------------------------------------------------- |
| get   | inKey                   | get single key cookey                             |
| gets  | -                       | get all key cookey                                |
| set   | inKey,inValue,inOptions | set cookie with options({ path:'/', expires: ''}) |
| sets  | inObject,inOptions      | set cookie with object;                           |
| del   | inKey                   | del the key                                       |
| dels  | inArray                 | del keys                                          |
| clear | -                       | del all cookies                                   |

## usage
```js
import NxCookie from '@feizheng/next-cookie';

// code goes here:
NxCookie.get
NxCookie.gets
NxCookie.set
NxCookie.sets
NxCookie.del
NxCookie.dels
NxCookie.clear
```

## resources
- https://github.com/js-cookie/js-cookie
- http://www.w3school.com.cn/js/js_cookies.asp
- https://stackoverflow.com/que

## license
Code released under [the MIT license](https://github.com/afeiship/next-cookie/blob/master/LICENSE.txt).

[version-image]: https://img.shields.io/npm/v/@jswork/next-cookie
[version-url]: https://npmjs.org/package/@jswork/next-cookie

[license-image]: https://img.shields.io/npm/l/@jswork/next-cookie
[license-url]: https://github.com/afeiship/next-cookie/blob/master/LICENSE.txt

[size-image]: https://img.shields.io/bundlephobia/minzip/@jswork/next-cookie
[size-url]: https://github.com/afeiship/next-cookie/blob/master/dist/next-cookie.min.js

[download-image]: https://img.shields.io/npm/dm/@jswork/next-cookie
[download-url]: https://www.npmjs.com/package/@jswork/next-cookie
