import { Component, Input, inject } from '@angular/core';
import { Users } from 'src/app/interfaces/user.interfaces';
import { UsersService } from 'src/app/services/users.service';
import { image } from 'src/assets/imagenes';
import { Router } from '@angular/router';

@Component({
  selector: 'app-card-user',
  templateUrl: './card-user.component.html',
  styleUrls: ['./card-user.component.css'],
})
export class CardUserComponent {
  @Input() listUsers: Users | any;
  private iconoBuscar: string = image.lupa;
  private iconoActualizar: string = image.actualizar;
  private iconoEliminar: string = image.borrar;
  private servicesUser = inject(UsersService);
  private response!: Users;
  private router = inject(Router);

  constructor() {}

  getListUsers(): Users | any {
    return this.listUsers;
  }
  getIconoBuscar(): string {
    return this.iconoBuscar;
  }
  getIconoActualizar(): string {
    return this.iconoActualizar;
  }
  getIconoBorrar(): string {
    return this.iconoEliminar;
  }

  async delete(id: string, nombre: string): Promise<void> {
    let estado: boolean = false;
    estado = confirm(`Estás seguro de borrar al usuario ${nombre}`);
    this.response = await this.servicesUser.getDeleteUser(id);
    if (this.response._id && estado) {
      console.log(this.response);
      alert('El usuario ha sido borrado');
      this.router.navigate(['/home']);
    } else if (!this.response._id && estado) {
      alert(this.response);
      console.log(this.response);
    }
  }
}
