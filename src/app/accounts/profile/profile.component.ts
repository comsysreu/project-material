import { Component, OnInit } from '@angular/core';
import { SnackService } from 'src/app/services/snack.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  entity: string = 'profiles';
  columns = [
    { prop: 'name', name: 'Nombre' },
    { prop: 'externalId', name: 'Código' },
    { prop: 'modifiedDate', name: 'Modificado el' },
    { prop: 'hourModifiedDate', name: 'Hora' },
    { prop: 'id', name: 'Acciones' }
  ];
  items = [];

  constructor(private snack: SnackService) {
  }

  ngOnInit(): void {
  }

  openSnackBar() {
    this.snack.openSnackBar('Hola desde profiles');
  }

}
