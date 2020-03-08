import { BaseDeDatos } from 'src/app/interfaceServicios/baseDeDatos';

import { Component } from '@angular/core';
import {
  FormGroup,
  FormControl,
  FormBuilder,
  Validators
} from '@angular/forms';
import { Router } from '@angular/router';
@Component({
  selector: 'app-registro',
  templateUrl: './registro.page.html',
  styleUrls: ['./registro.page.scss']
})
export class RegistroPage {
  registerForm: FormGroup;

  // tslint:disable-next-line: variable-name
  error_messages = {
    email: [
      {
        type: 'required',
        message: 'Introduce tu correo electrónico.'
      }
    ],
    password: [
      {
        type: 'required',
        message: 'Introduce tu contraseña.'
      },
      {
        type: 'minlength',
        message: 'Longitud de contraseña incorrecto.'
      },
      {
        type: 'maxlength',
        message: 'Longitud de contraseña incorrecto.'
      }
    ],
    confirmpassword: [
      {
        type: 'required',
        message: 'Introduce tu contraseña.'
      },
      {
        type: 'minlength',
        message: 'Longitud de contraseña incorrecto.'
      },
      {
        type: 'maxlength',
        message: 'Longitud de contraseña incorrecto.'
      }
    ]
  };
  constructor(
    public formBuilder: FormBuilder,
    public base: BaseDeDatos,
    public router: Router
  ) {
    this.registerForm = this.formBuilder.group(
      {
        email: new FormControl('', Validators.compose([Validators.required])),
        password: new FormControl(
          '',
          Validators.compose([
            Validators.required,
            Validators.minLength(6),
            Validators.maxLength(30)
          ])
        ),
        confirmpassword: new FormControl(
          '',
          Validators.compose([
            Validators.required,
            Validators.minLength(6),
            Validators.maxLength(30)
          ])
        )
      },
      {
        validators: this.password.bind(this)
      }
    );
  }
  password(formGroup: FormGroup) {
    const { value: password } = formGroup.get('password');
    const { value: confirmPassword } = formGroup.get('confirmpassword');
    return password === confirmPassword ? null : { passwordNotMatch: true };
  }
  onSubmit() {
    this.base
      .registrar(
        this.registerForm.value.email,
        this.registerForm.value.password
      )
      .then(r => {
        if (r) {
          this.router.navigate(['inicio-sesion']);
        } else {
          console.log('Fallo al registrar usuario');
        }
      });
  }
}
