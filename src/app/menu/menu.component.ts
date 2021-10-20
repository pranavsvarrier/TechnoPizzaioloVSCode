import { Component, OnInit } from '@angular/core';
import { Submitted } from '../submitted';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';
import { MessengerService } from '../messenger.service';


@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {




  
  //cart?:CartComponent
  
  
  sizes:string[]=["small","medium","large"]
  crusts:string[]=[" hand tossed"," cheese Burst","fresh pan pizza","100% wheat thin crust"]
  pizzaname1:string="Maragita";
  pizzaname2:string="Maragita";
  pizzaname3:string="Maragita";
  pizzaname4:string="Maragita";
  pizzaname5:string="Maragita";
  pizzaname6:string="Maragita";

  price1:number=199.00;
  price2:number=199.00;
  price3:number=199.00;
  price4:number=199.00;
  price5:number=199.00;
  price6:number=199.00;

  pizzadescription1:string="Classic delight with 100% real mozerella cheese";
  pizzadescription2:string="Classic delight with 100% real mozerella cheese";
  pizzadescription3:string="Classic delight with 100% real mozerella cheese";
  pizzadescription4:string="Classic delight with 100% real mozerella cheese";
  pizzadescription5:string="Classic delight with 100% real mozerella cheese";
  pizzadescription6:string="Classic delight with 100% real mozerella cheese";
  
  pizzaName?:string;
  pizzaDescription?:string;
  pizzaPrice?:number;

  i=0;
  submitted=[
    {name:"Margarita",price:200 ,qty:1}
  ];
  carTotal=0;
  constructor(private message:MessengerService,private router:Router) { }
  addToCart(pizzaname:string,pizzaprice:number)
  { this.i=1;
    
    // this.message.getmesg().subscribe(data=>
    //   {
    //     this.submitted=data;
    //   })
    
   
  }
  NavigateToExpandedCart()
  {
    console.log("hello")
    this.router.navigateByUrl('expandedCart')
  }
  
  ngOnInit(): void 
  {
    // this.message.getmesg().subscribe((submit:any)=>
    //   {this.submitted=submit
    //       console.log(this.submitted)

      
    //     {
    //       this.carTotal+= submit.price;
    //     }
        
        
    
      }
    
    }

