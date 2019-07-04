# next-cookie
> A simple, lightweight JavaScript API for handling browser cookies for next

## installation
```bash
npm install -S afeiship/next-cookie --registry=https://registry.npm.taobao.org
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
import NxCookie from 'next-cookie';

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
- https://stackoverflow.com/questions/179355/clearing-all-cookies-with-javascript
