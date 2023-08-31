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
        image: new FormControl('', [
          Validators.required,
          Validators.pattern(/^https?:\/\/[\w\-]+(\.[\w\-]+)+[/#?]?.*$/),
        ]),
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

  //Método que realiza la actualización del usuario siempre y cuando la ruta  contenfa el parámetro _id
  ngOnInit() {
    this.activatedRoute.params.subscribe(async (params: any) => {
      const _id: string = params._id;
      this.response = await this.servicesUser.getUpdateUser(_id,this.formUser.value);
        
      if (this.response._id && !this.estado) {
        this.formUser = new FormGroup(
          {
            _id: new FormControl(this.response._id, []),
            id: new FormControl(this.response.id, []),
            name: new FormControl(this.response.first_name, [
              Validators.required,
              Validators.minLength(3),
            ]),
            last_name: new FormControl(this.response.last_name, [
              Validators.required,
              Validators.minLength(2),
            ]),
            email: new FormControl(this.response.email, [
              Validators.required,
              Validators.pattern(/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/),
                
            ]),
            image: new FormControl(this.response.image, [
              Validators.required,
              Validators.pattern(/^https?:\/\/[\w\-]+(\.[\w\-]+)+[/#?]?.*$/),
            ]),
          },
          []
        );
      } else {
        this.estado = true;
      }
    });
  }

  //Método que realiza la actualización o la creación de usuario en función del estado.
  async getDataForm() {
    console.log(this.estado)
    if (this.estado) {
      this.response = await this.servicesUser.getCreateUser( this.formUser.value );
      if (this.response.id) {
        console.log(this.response);
        alert('El Usuario se ha insertado correctamente');
        this.router.navigate(['/home']);
      } else {
        alert('Ha habido un problema al insertar al usuario');
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
