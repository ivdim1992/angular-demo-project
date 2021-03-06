import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { FurnitureService } from '../furniture.service';
import { IFurniture } from '../../models/furniture';

@Component({
    selector: 'app-furniture-details',
    templateUrl: './furniture-details.component.html',
    styleUrls: ['./furniture-details.component.css']
})
export class FurnitureDetailsComponent implements OnInit {

    constructor(private route: ActivatedRoute, private furnitureService: FurnitureService) { }
    furniture:IFurniture
    ngOnInit() {
        this.route.params.subscribe(data => {
            let id  = data['id'];
            this.furnitureService.getFurniture(id).subscribe((data) =>{
                this.furniture = data;
            })
        })
    }
}
