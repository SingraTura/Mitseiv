import { ManagerUserService } from './../services/managerUser/manager-user.service';
import { Component } from '@angular/core';
import {
  FormGroup,
  FormControl,
  FormBuilder,
  Validators
} from '@angular/forms';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss']
})
export class HomePage {
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
  constructor(public formBuilder: FormBuilder, public mu: ManagerUserService) {
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
    this.mu.registrar(this.registerForm.value.email, this.registerForm.value.password).then(() => {
      console.log('creado');
    }).catch(() => {
      console.log('fallo');
    });

  }
}
