const dns = require('dns');

dns.lookup('www.verybeaut.com', (err, address, family) => {
  console.log('地址: %j 地址族: IPv%s', address, family);
});
// 地址: "192.0.43.8" 地址族: IPv4