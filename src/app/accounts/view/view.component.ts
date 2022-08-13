import { Component, OnInit } from '@angular/core';
import { SnackService } from 'src/app/services/snack.service';

@Component({
  selector: 'app-view',
  templateUrl: './view.component.html',
  styleUrls: ['./view.component.css']
})
export class ViewComponent implements OnInit {

  entity: string = 'views';
  items: any;
  columns = [
    { prop: 'name', name: 'Nombre' },
    { prop: 'description', name: 'Descripción' },
    { prop: 'route', name: 'Ruta' },
    { prop: 'id', name: 'Acciones' }
  ];

  constructor(private snack: SnackService) {
  }

  ngOnInit(): void {
  }

  openSnackBar() {
    this.snack.openSnackBar('Hola desde vistas');
  }

}
