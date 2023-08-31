import { Component, inject } from '@angular/core';
import { UsersService } from 'src/app/services/users.service';
import { ActivatedRoute, Router } from '@angular/router';
import { User, Users } from 'src/app/interfaces/user.interfaces';

@Component({
  selector: 'app-view-user',
  templateUrl: './view-user.component.html',
  styleUrls: ['./view-user.component.css'],
})
export class ViewUserComponent {
  private servicesUser = inject(UsersService);
  private activatedRoute = inject(ActivatedRoute);
  private user: Users | any;
  private response: Users | any;
  private router = inject(Router);

  constructor() {}

  getUser(): Users | any {
    return this.user;
  }
  //Carga la vista  detalles del usuario designado
  ngOnInit() {
    this.activatedRoute.params.subscribe(async (params: any) => {
      const _id: string = params._id;
      try {
        this.user = await this.servicesUser.getById(_id);
      } catch (error) {
        alert('Error al cargar el usuario');
      }
    });
  }
  //Método que realiza el borrado del usuario
  async delete(id: string): Promise<void> {
    let estado: boolean = false;
    estado = confirm(
      `Estás seguro de borrar al usuario ${this.user.first_name}`
    );
    this.response = await this.servicesUser.getDeleteUser(id);
    if (this.response._id && estado) {
      console.log(this.response);
      alert('El usuario ha sido borrado');
      this.router.navigate(['/home']);
    } else if (!this.response && estado) {
      alert('Error al borrar al usuario');
    }
  }
}
