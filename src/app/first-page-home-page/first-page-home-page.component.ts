import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-first-page-home-page',
  templateUrl: './first-page-home-page.component.html',
  styleUrls: ['./first-page-home-page.component.css']
})
export class FirstPageHomePageComponent implements OnInit {

  constructor(private router:Router) { }
  NavigateToMenu()
  {
    console.log("hello")
    this.router.navigateByUrl('menu')
  }
  ngOnInit(): void {
  }

}
