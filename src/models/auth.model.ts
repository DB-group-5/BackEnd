import { Request, Response, NextFunction } from 'express';
import jwt from 'jsonwebtoken';

const validateToken = (req: Request, res: Response, next: NextFunction) => {
    const headerToken = req.headers['authorization'];

    if (headerToken != undefined && headerToken.startsWith('Bearer')) {
        const bearerToken = headerToken.slice(7);

        try {
            const tokenValid = jwt.verify(bearerToken, process.env.SECRET_KEY || '123');
            console.log(tokenValid)
            next();
        } catch (error) {
            res.status(400).json({
                error: 'invalid token'
            })
        }



    } else {
        res.status(400).json({
            error: 'Access denied'
        })
    }
}

export default validateToken