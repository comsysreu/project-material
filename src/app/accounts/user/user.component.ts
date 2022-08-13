import { Component, OnInit } from '@angular/core';
import { SnackService } from 'src/app/services/snack.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {

  entity: string = 'users';
  items: any;
  columns = [
    { prop: 'profile.name', name: 'Tipo de usuario', subkey: true },
    { prop: 'username', name: 'Usuario' },
    { prop: 'name', name: 'Nombres' },
    { prop: 'lastname', name: 'Apellidos' },
    { prop: 'id', name: 'Acciones' }
  ];

  constructor(private snack: SnackService) {
  }

  ngOnInit(): void {
  }

  openSnackBar() {
    this.snack.openSnackBar('Hola desde usuarios... Hola desde usuarios... Hola desde usuarios... Hola desde usuarios... Hola desde usuarios...', 'warning');
  }

}
