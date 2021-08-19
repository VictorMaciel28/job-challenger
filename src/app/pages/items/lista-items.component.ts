import { HttpClient } from "@angular/common/http";
import { Component, OnInit } from "@angular/core";
import { ActivatedRoute, ParamMap } from "@angular/router";
import { Observable, Subscription } from "rxjs";
import { ItemsService } from "../items.service";

@Component({
    selector: 'lista-items',
    templateUrl: 'lista-items.component.html',
    styleUrls: ['lista-items.component.scss']
})
export class ListaItems implements OnInit {
    routeSubscription: Subscription | undefined;
    public itemsList!: Item[];
    public param: any;
    public totalPrice: number = 0;

    constructor(
        private route: ActivatedRoute,
        private itemService: ItemsService,
    ) { }

    ngOnInit(): void {
        this.routeSubscription = this.route.paramMap.subscribe((params:ParamMap) => {
            this.param = params.get('productURL');
            console.log(this.param)
        })
        this.itemService.getData(this.param).subscribe(data=>{
            
            this.itemsList = data.items;
            
            this.calculatePrice(data.items)
            console.log(data.items);
            
        })
    }

    calculatePrice(dados: Item[]){
        this.totalPrice = dados.map(item => item.sellingPrice).reduce((prev,next) => prev + next) /100;
    }
}

export interface Item {
    sellingPrice: number;
    imageUrl: string;
    name: string;
}
