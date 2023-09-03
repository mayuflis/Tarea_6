import { Component, inject } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Users } from 'src/app/interfaces/user.interfaces';
import { UsersService } from 'src/app/services/users.service';
import { Router, ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css'],
})
export class FormComponent {
  private formUser: FormGroup;
  private servicesUser = inject(UsersService);
  private response!: Users;
  private router = inject(Router);
  private activatedRoute = inject(ActivatedRoute);
  private estado: boolean = false;
  private btnTexto: string = '';
  constructor() {
    this.formUser = new FormGroup(
      {
        _id: new FormControl('', []),
        id: new FormControl('', []),
        name: new FormControl('', [
          Validators.required,
          Validators.minLength(3),
        ]),
        last_name: new FormControl('', [
          Validators.required,
          Validators.minLength(2),
        ]),
        email: new FormControl('', [
          Validators.required,
          Validators.pattern(
            /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/
          ),
        ]),
        username: new FormControl('', [
          Validators.required,
          Validators.pattern(/^[a-z]+\.[a-z]+$/),
        ]),
        password: new FormControl('', [
          Validators.required,
          Validators.pattern(/^(?=\w*\d)(?=\w*[a-z])\S{5,16}$/),
        ]),
        image: new FormControl('', []),
      },
      []
    );
  }

  getForm(): FormGroup {
    return this.formUser;
  }
  getEstado(): boolean {
    return this.estado;
  }
  getBtnTeexto(): string {
    return this.estado
      ? (this.btnTexto = 'Guardar')
      : (this.btnTexto = 'Actualizar');
  }

  //Método que realiza la actualización del usuario siempre y cuando la ruta  contenga el parámetro _id.
  //Según los requerimientos de la API ,sólo serán requeridos los campos nombre y username.
  ngOnInit() {
    this.activatedRoute.params.subscribe(async (params: any) => {
      const _id: string = params._id;
      this.response = await this.servicesUser.getUpdateUser(
        _id,
        this.formUser.value
      );

      if (this.response._id && !this.estado) {
        this.formUser = new FormGroup(
          {
            _id: new FormControl(this.response._id, []),
            id: new FormControl(this.response.id, []),
            name: new FormControl(this.response.first_name, [
              Validators.required,
              Validators.minLength(3),
            ]),
            last_name: new FormControl(this.response.last_name, []),
            username: new FormControl(this.response.username, [
              Validators.required,
              Validators.pattern(/^[a-z]+\.[a-z]+$/),
            ]),
            password: new FormControl(this.response.password, [
              Validators.pattern(/^(?=\w*\d)(?=\w*[a-zA-Z])\S{5,16}$/),
            ]),
            email: new FormControl(this.response.email, [
              Validators.pattern(
                /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/
              ),
            ]),
            image: new FormControl(this.response.image, []),
          },
          []
        );
      } else {
        this.estado = true;
      }
    });
  }

  //Método que realiza la creación de usuario en función del estado y  los avisos para comprobar que tanto la actualización como la inserción se han realizado correctamente o no se han realizado
  async getDataForm() {
    if (this.estado) {
      this.response = await this.servicesUser.getCreateUser(
        this.formUser.value
      );
      if (this.response.id) {
        console.log(this.response);
        alert('El Usuario se ha insertado correctamente');
        this.router.navigate(['/home']);
      } else {
        alert(this.response);
      }
    } else {
      console.log(this.response);
      alert('el usuario ha sido actualizado');
      this.router.navigate(['/home']);
    }

    this.formUser.reset();
  }

  checkControlForm(controlName: string, validators: string): boolean {
    return this.formUser.get(controlName)?.hasError(validators) &&
      this.formUser.get(controlName)?.touched
      ? true
      : false;
  }
}
