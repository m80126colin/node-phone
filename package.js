Package.describe({
  summary: 'Forked node-phone package',
  version: "1.0.4",
  name: 'phone'
});

Npm.depends({"phone": "git+https://git@github.com/whalepath/node-phone.git"});
Package.onUse(function(api){
    api.addFiles('main.js');
    api.export('NodePhone');
});
