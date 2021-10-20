import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FirstPageComponent } from './first-page/first-page.component';
import { SecondPageComponent } from './second-page/second-page.component';
import { ThirdPageComponent } from './third-page/third-page.component';
import { FourthPageComponent } from './fourth-page/fourth-page.component';
import { LoginPageComponent } from './login-page/login-page.component';
const routes: Routes = [
  {path: '',component:FirstPageComponent},
  {path:'menu',component:SecondPageComponent},
  {path: 'expandedCart',component:ThirdPageComponent},
  {path:'payment',component:FourthPageComponent},
  {path:'login',component:LoginPageComponent}
    
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

