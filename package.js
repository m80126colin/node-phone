Package.describe({
  summary: 'Forked node-phone package',
  version: "1.0.4",
  name: 'phone'
});

Npm.depends({"phone": "https://github.com/whalepath/node-phone/tarball/c7ddc59e5aa66cae32d53ca233fc51e7aa7a1d16"});
Package.onUse(function(api){
    api.addFiles('main.js');
    api.export('NodePhone');
});
