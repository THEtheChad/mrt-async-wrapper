Package.describe({
  summary: "Server side nodejs async wrapper."
});

Npm.depends({
	async: "0.2.9"
});

Package.on_use(function(api){
  if(api.export){
    api.export('async');
  }
  api.add_files("main.js", "server");
});
