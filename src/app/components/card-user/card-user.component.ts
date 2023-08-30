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
  iconoBuscar = image.lupa;
  iconoActualizar = image.actualizar;
  iconoEliminar = image.borrar;
  private servicesUser = inject(UsersService);
  response!: Users;
  private router = inject(Router);
 
  constructor() {}

  async delete(id: string,nombre:string): Promise<void> {
    let estado: boolean = false;
    estado = confirm(
      `Estás seguro de borrar al usuario ${nombre}`
    );
    this.response = await this.servicesUser.getDeleteUser(id);
    if (this.response && estado) {
      console.log(this.response);
      alert('El usuario ha sido borrado');
      this.router.navigate(['/home']);
    } else if (!this.response && estado) {
      alert(this.response);
      console.log(this.response);
    }
  }
}
