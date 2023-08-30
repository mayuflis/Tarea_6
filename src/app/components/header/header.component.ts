import { Component } from '@angular/core';
import { image } from 'src/assets/imagenes';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {

  private logo:string=image.logo
  constructor(){}

  getLogo(){
    return this.logo
  }
}
