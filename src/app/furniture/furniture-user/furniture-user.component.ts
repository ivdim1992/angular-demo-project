import { Component, OnInit } from '@angular/core';
import { FurnitureService } from '../furniture.service';
import { IFurniture } from '../../models/furniture';
import { Observable } from 'rxjs';


@Component({
    selector: 'app-furniture-user',
    templateUrl: './furniture-user.component.html',
    styleUrls: ['./furniture-user.component.css']
})
export class FurnitureUserComponent implements OnInit {

    userFurniture$: Observable<Array<IFurniture>>
    constructor(private furnitureService:FurnitureService) { }

    ngOnInit() {
       this.userFurniture$ =  this.furnitureService.getUserFurniture()
    }

    deleteFurniture(id) {
        console.log(id)
        this.furnitureService.removeFurniture(id).subscribe((data) => {
            this.userFurniture$ = this.furnitureService.getUserFurniture();
        })
    }
}
