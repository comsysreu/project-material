import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { SnackService } from 'src/app/services/snack.service';
import { AuthService } from 'src/app/services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  recoverform = false;
  loginform = true;
  submitted = false;
  centers: any = [{ location: 'Reu' }];
  oldPwd = '';
  entity = 'auth/login';
  fieldTextType: boolean = false;
  invalidPassword: boolean = false;
  loginForm: FormGroup = new FormGroup({
    internal: new FormControl(false)
  });

  imageSize = 250;

  constructor(
    private formBuilder: FormBuilder,
    private snack: SnackService,
    private auth: AuthService,
    private router: Router
  ) {
    this.buildForm('');
  }


  ngOnInit(): void {
    console.log('BUILD FORM: =>', this.loginForm);
  }

  frm(val: string) {
    const value = this.loginForm.get(val);
    return value;
  }

  buildForm(username: string): FormGroup {
    if (!this.recoverform) {
      this.loginForm = this.formBuilder.group({
        username: ['', [Validators.required, Validators.minLength(2), Validators.maxLength(20)]],
        password: ['', [Validators.required, Validators.minLength(5), Validators.maxLength(20)]]
      });
    } else {
      this.loginForm = this.formBuilder.group({
        username: [username, [Validators.required, Validators.minLength(2), Validators.maxLength(20)]],
        password: ['', [Validators.required, Validators.minLength(5), Validators.maxLength(20)]],
        confirmPassword: ['', [Validators.required, Validators.minLength(5), Validators.maxLength(20)]]
      });
    }
    return this.loginForm;
  }

  login() {
    this.submitted = true;
    // stop here if form is invalid
    if (this.loginForm.invalid) {
      return;
    }

    const values = this.loginForm.value;

    // this.authService.saveParam('internal', values.internal);

    const obj = {
      username: `${values.username}`,
      password: values.password
    };

    console.log(obj);

    this.auth.post(this.entity, obj, '').subscribe((resp: any) => {

      this.auth.saveParam('username', values.username);
      this.auth.saveParam('secacc', resp.secacc);

      //   if (Number(resp.changePass) === 1) {
      //     this.toastr.info('Su usuario requiere cambiar la contraseña');
      //     this.recoverform = true;
      //     this.submitted = false;
      //     this.oldPwd = values.password;
      //     this.buildForm(values.username);

      //   } else {

      //     const entityPerm = 'profile/permissions/usr';
      //     const username = localStorage.getItem('username');


      //     if (!username) {
      //       this.toastr.warning('No se encontró el usuario para los permisos');
      //       return;
      //     }

      //     this.gService.get(entityPerm, `?username=${username}&center=${center}`).subscribe((profileAndPermissions: any) => {
      //       // Valor por defecto, luego en otros procesos de cambia
      //       localStorage.setItem('business', 'Liverpool')

      //       if (profileAndPermissions.length > 0) {
      //         this.authService.saveParam('perm', JSON.stringify(profileAndPermissions[0].permissions));

      //         if (center === 'null') {
      //           this.router.navigate(['account/select-business']);
      //         } else {
      this.router.navigate(['/dashboard/reports']);
      //         }

      //       } else {
      //         this.toastr.warning('No encontró resultados de permisos para el perfil');
      //       }
      //     });
      //   }
    }, err => {
      console.log(err);
      if (err.status === 401 || err.status === 400) {
        this.snack.openSnackBar(`${err.error.message}`);
      } else {
        this.snack.openSnackBar(`Error al iniciar sesión, contacte al administrador. \n Error: ${JSON.stringify(err)}`);
      }
    });
  }

  get fl() {
    return this.loginForm.controls;
  }

  sendRecovery() {
    this.submitted = true;
    // stop here if form is invalid
    if (this.loginForm.invalid) {
      return;
    }

    if (this.validPassword()) {
      return;
    }

    const values = this.loginForm.value;
    // const center = this.authService.getParam('center');

    const obj = {
      username: values.username,
      oldPassword: this.oldPwd,
      newPassword: values.confirmPassword,
      // center
    };

  }

  validPassword(): boolean {
    // const pwd = this.loginForm.get('password').value;
    // const confirmPwd = this.loginForm.get('confirmPassword').value;
    const pwd = '';
    const confirmPwd = '';

    if (pwd !== confirmPwd) {
      // this.toastr.warning('Las contraseñas no coinciden.');
      return true;
    }

    if (pwd.match(/\s/)) {
      // this.toastr.warning('La contraseña no puede tener espacios en blanco.');
      return true;
    }

    if (!pwd.match('^.*\\d.*$')) {
      // this.toastr.warning('La contraseña debe incluir al menos un carácter numérico.');
      return true;
    }

    if (!pwd.match('^(?=.*?[A-Z])')) {
      // this.toastr.warning('La contraseña debe incluir al menos una mayúscula.');
      return true;
    }

    if (!pwd.match('^(?=.*?[a-z])')) {
      // this.toastr.warning('La contraseña debe incluir al menos una minúscula.');
      return true;
    }

    return false;
  }

  pressName(event: any, type: string) {
    if (event.keyCode !== 9 || event.keyCode !== 8 || event.keyCode !== 13) {
      const field = this.loginForm.get(type);
      field?.setValue(field.value.toUpperCase());
    }
  }

  toggleFieldTextType() {
    this.fieldTextType = !this.fieldTextType;
  }

  showMessage() {
    this.snack.openSnackBar('Contacta a tu administrador.');
  }

}
