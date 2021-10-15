const { Workspace } = require('./models.js');

// create and save a new workspace //
const createAndSaveWorkspace = (workspaceDetails) => {
  let workspace = new Workspace({name: workspaceDetails.name});
  workspace.save(function(err, data) {
    if (err) return err;
    return 'ok'
  })
};

module.exports = function(app){

  app.post( '/api/', function(req, res) {
    console.log(req.body);
  });

}