
const crypto = require("crypto");


class Crypt {
    static encodePassword(plain) {
        const salt = this.randHex(64);
        const hmac = this.hmac("sha512", salt, plain);

        return `sha512:${salt}:${hmac}`;
    }

    static verifyPassword(plain, encodedPassword) {
        const splits = encodedPassword.split(":");

        if (splits.length !== 3) {
            return false;
        }

        return splits[2] === this.hmac(splits[0], splits[1], plain);
    }

    static randHex(len) {
        return crypto.randomBytes(len / 2).toString("hex");
    }

    static hmac(alg, salt, plain) {
        return crypto.createHmac(alg, salt).update(plain).digest("hex");
    }

    static hash(alg, plain) {
        return crypto.createHash(alg).update(plain).digest("hex");
    }
}

module.exports = Crypt;