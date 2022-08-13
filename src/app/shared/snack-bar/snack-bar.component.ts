import { Component, OnInit } from '@angular/core';
import { SnackService } from 'src/app/services/snack.service';

@Component({
  selector: 'app-snack-bar',
  templateUrl: './snack-bar.component.html',
  styleUrls: ['./snack-bar.component.css']
})
export class SnackBarComponent implements OnInit {

  constructor(private snack: SnackService) { }

  ngOnInit(): void {
  }

  getMsg(): string {
    return this.snack.message;
  }

  getType(): string {
    return this.snack.type;
  }

}
