import { Response } from '@angular/http';
import { Injectable } from '@angular/core';

@Injectable()
export class UtilitiesService {

    public extractData(res: Response) {
        let body = res.json().result;
        return body || [];
    }

    public extractDataFromStringContent(res: Response) {
        let body = res['_body'];
        return body || '';
    }

    public extractDataFromJSON(res: Response) {
        let body = JSON.parse(res['_body']);
        return body || null;
    }
}
