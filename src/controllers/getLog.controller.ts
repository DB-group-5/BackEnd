import { Request, Response } from 'express';
import pool from '$/config/db';

export const getUser = (req: Request, res: Response) => {
    pool.query('SELECT * FROM fabric_store', (err, data) => {
        if(err) {
            console.log(err)
        } else {
            res.json({
                data
            })
        }
    })
}