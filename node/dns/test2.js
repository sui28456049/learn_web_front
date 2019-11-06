const { Resolver } = require('dns');
const resolver = new Resolver();


resolver.setServers(['8.8.8.8']);
// 此请求将使用 8.8.8.8 中的服务器，与全局设置无关。
resolver.resolve4('www.google.com', (err, addresses) => {
  console.log(addresses)
});

// const dns = require('dns');

// dns.resolve4('www.google.com', (err, addresses) => {
//   if (err) throw err;

//   console.log(`地址: ${JSON.stringify(addresses)}`);

//   addresses.forEach((a) => {
//     dns.reverse(a, (err, hostnames) => {
//       if (err) {
//         throw err;
//       }
//       console.log(`地址 ${a} 逆向解析到域名: ${JSON.stringify(hostnames)}`);
//     });
//   });
// });
