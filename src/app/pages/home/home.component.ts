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

  async ngOnInit() {
    this.objet = await this.servicesUser.getAll(this.page);
    console.log(this.objet.page);
    this.listusers = this.objet.results;
    console.log(this.listusers);
  }

  async setPagina(pag: number) {
    
      this.objet = await this.servicesUser.getAll(pag);
      console.log(this.objet);
      this.listusers = this.objet.results;
      console.log(this.listusers);
    
 
  }
  getListUser() {
    return this.listusers;
  }
}
