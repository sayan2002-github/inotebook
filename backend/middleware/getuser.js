import jwt from 'jsonwebtoken';

export const getUser = (req, res, next)=>{
    const authToken = req.header('auth-token');
    if(!authToken){
        return res.status(401).send({error: "Please authenticate using a valid token!"})
    }

    try {
        const decoded = jwt.verify(authToken, process.env.JWT_SECRET);
        req.user = decoded.user;
        next();
    } catch (error) {
        return res.status(401).send({error: "Please authenticate using a valid token!"})
    }
}