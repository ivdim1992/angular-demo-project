import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { IFurniture } from '../models/furniture';
import { Observable } from 'rxjs';

const createF = 'http://localhost:5000/furniture/create';
const getAllF = 'http://localhost:5000/furniture/all';
const getSingleF = 'http://localhost:5000/furniture/details/';
const getUserF = 'http://localhost:5000/furniture/user';
const deleteF = 'http://localhost:5000/furniture/delete/'

@Injectable({
    providedIn: 'root'
})
export class FurnitureService { 

    constructor(private http: HttpClient) { }

    createFurniture(data) {
       return this.http.post(createF, data)
    }

    getAllFurniture():Observable<Array<IFurniture>> {
        return this.http.get<Array<IFurniture>>(getAllF);
    }

    getFurniture(id): Observable<IFurniture> {
        return this.http.get<IFurniture>(getSingleF + id);
    }

    getUserFurniture():Observable<Array<IFurniture>> {
        return this.http.get<Array<IFurniture>>(getUserF)
    }

    removeFurniture(id) {
        return this.http.delete(deleteF + id);
    }
}
