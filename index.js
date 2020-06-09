
process.chdir(__dirname);
require("dotenv").config();
const  octikit  = require("@octokit/rest");

const clientWithAuth = new octikit({
    auth: "28f2372aa57d6ab6dc3a7eff9ab8363229ab27e9"
});
let cmd = process.argv[2];
let folderName = process.argv[3];
//create repository

if (cmd === "create") {
    
    clientWithAuth.repos.createForAuthenticatedUser({
        name: folderName
    });
}
//delete repo
if (cmd === "delete") {
    clientWithAuth.repos.delete({
        owner: "BagyaShivani",
        repo: folderName

    }).then(data => {
        console.log("success fully delete " + folderName + "repo");
    }).catch(e => {
        console.log(e);
    });
}






