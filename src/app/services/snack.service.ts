import { Injectable } from '@angular/core';

import { SnackBarComponent } from 'src/app/shared/snack-bar/snack-bar.component';
import { MatSnackBar } from '@angular/material/snack-bar';

@Injectable({
  providedIn: 'root'
})
export class SnackService {

  durationInSeconds = 5;
  message: string = '';
  type: string = 'info';

  constructor(private _snackBar: MatSnackBar) { }

  openSnackBar(msg: string, type?: string, time?: number) {
    this.message = '';
    this.message = msg;

    console.log(type, time);

    this.durationInSeconds = time ? time : 5;
    this.type = type ? type : 'info';

    this._snackBar.openFromComponent(SnackBarComponent, {
      duration: this.durationInSeconds * 1000,
      horizontalPosition: 'end',
      verticalPosition: 'top',
    });
  }

}
