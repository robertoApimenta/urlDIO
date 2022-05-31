import { Request, Response } from "express";
import shortId from 'shortId';

import {config} from '../config/Constants';

export class URLController {
    public async shorten(req: Request, res: Response): Promise<void> {
        const { originURL } = req.body;
        const hash = shortId.generate();
        const shortURL = `${config.API_URL}/${hash}`;
        res.json({ originURL, hash, shortURL });
    };

    public async redirect(req: Request, res: Response): Promise<void> { 
        const { hash } = req.params;
        const url = {
          originURL: 'https://cloud.mongodb.com/v2/5f4d7796381588562de9152f#clusters/detail/Cluster0/connect?clusterId=Cluster0',
          hash: 'TSZ1Z-Peb',
          shortURL: 'http://localhost:5000/TSZ1Z-Peb',
        };
        res.redirect(url.originURL);
    }
};
