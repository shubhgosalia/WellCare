const crypto = require("crypto");

const TokenGenerator = () => {
    let token = crypto.randomBytes(64).toString("hex");
    return { token };
}

module.exports = TokenGenerator;