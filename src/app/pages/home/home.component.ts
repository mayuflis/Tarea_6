import { Component, inject } from '@angular/core';
import { User, Users } from 'src/app/interfaces/user.interfaces';
import { UsersService } from 'src/app/services/users.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent {
  private servicesUser = inject(UsersService);
  private objet!: User;
  private listusers: Users | any;
  private page: number;
  constructor() {
    this.page = 1;
  }

  //Se establece por defecto la carga de la página una
  async ngOnInit() {
    this.objet = await this.servicesUser.getAll(this.page);
    this.listusers = this.objet.results;
  }

  //Método que carga el númro de la página
  async setPagina(pag: number) {
    this.objet = await this.servicesUser.getAll(pag);
    if(this.objet.page){
      this.listusers = this.objet.results;
    }else{
      alert("Error al cargar la página")
    }
    
  }
  getListUser() {
    return this.listusers;
  }
}
