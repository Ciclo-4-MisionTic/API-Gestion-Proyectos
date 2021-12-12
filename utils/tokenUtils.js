import jwt  from "jsonwebtoken";

const generateToken = (payload) => {
    return jwt.sing(payload, 'secret',{
        expiresIn: '24h'
    });
};

export { generateToken };