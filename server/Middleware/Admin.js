const { ClientError } = require("../Utils/Errors");
// Middleware to check the user is Admin 
const isAdmin = async (req, _res, next) => {
    if(req.user.type !== "Admin"){
        throw new ClientError("Only Admin Allowed");
    }
    next();
}
module.exports = isAdmin;