import { AfterViewInit, Component, Input, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTable } from '@angular/material/table';
import { GenericService } from 'src/app/services/generic.service';
import { TableDataSource, TableItem } from './table-datasource';
import { PageEvent } from '@angular/material/paginator';
import { FormControl } from '@angular/forms';
import { debounceTime, distinctUntilChanged, switchMap } from 'rxjs/operators';
import { Router } from '@angular/router';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent implements OnInit, AfterViewInit {
  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;
  @ViewChild(MatTable) table!: MatTable<TableItem>;
  dataSource: TableDataSource;
  @Input('entity') entity: string = '';
  @Input('columns') columns: Array<any> = [];
  searchField: FormControl = new FormControl();
  searchValue: string = '';
  currentPage: string = '';
  // MatPaginator Output
  pageEvent: PageEvent = new PageEvent();

  /** Columns displayed in the table. Columns IDs can be added, removed, or reordered. */
  displayedColumns = ['name'];
  columnsSchema: any = [];

  length = 0;
  pageSize = 10;
  page = 1;
  pageSizeOptions: number[] = [1, 5, 10, 25, 50, 100];
  isLoadingResults: boolean = true;
  isRateLimitReached: boolean = false;

  constructor(
    private generic: GenericService,
    private router: Router
  ) {
    this.dataSource = new TableDataSource();
    this.currentPage = this.router.url;
  }

  ngOnInit(): void {
    console.log(this.entity, this.columns);
    const col: Array<any> = [];
    this.columns.forEach(el => col.push(el.prop));
    console.log('COLS....', col);
    this.displayedColumns = col;
    this.columnsSchema = this.columns;
    this.getData();

    this.searchField.valueChanges.pipe(
      debounceTime(200),
      distinctUntilChanged(),
      switchMap(value => {
        this.page = 1;
        this.paginator.firstPage();
        this.searchValue = value;
        if (value.length > 0) {
          return this.generic.get(this.entity, this.buildQuery());
        } else {
          this.isLoadingResults = true;
          return this.generic.get(this.entity, this.buildQuery());
        }
      })
    ).subscribe((resp: any) => {
      this.table.dataSource = resp.entityList;
      this.length = resp.totalRegister;
      this.isLoadingResults = false;
    });
  }

  getData() {
    this.isLoadingResults = true;

    const query = this.buildQuery();

    this.generic.get(this.entity, query).subscribe((resp: any) => {
      console.log(resp);
      this.table.dataSource = resp['entityList'];
      this.length = resp.totalRegister;
      this.isLoadingResults = false;
    });
  }

  buildQuery(): string {
    let query = `?page=${this.page}&limit=${this.pageSize}`;

    if (this.searchValue.length > 0) {
      query += `&filter=${this.searchValue}`
    }

    const sort = this.sort?.active;
    if (sort) {
      const dir = this.sort?.direction;
      query += `&sort=${sort}&sortDirection=${dir === 'asc' ? 1 : -1}`;
    }

    return query;
  }

  ngAfterViewInit(): void {
    this.paginator._intl.itemsPerPageLabel = 'Registros por página';
    console.log(this.table);
    // this.dataSource.sort = this.sort;

    this.dataSource.paginator = this.paginator;
    // this.table.dataSource = this.dataSource;
    this.sort.sortChange.subscribe(() => (this.getData()));
  }

  fetchFromObject(obj: any, prop: string): any {
    //property not found
    if (typeof obj === 'undefined') return false;

    //index of next property split
    const _index = prop.indexOf('.');

    //property split found; recursive call
    if (_index > -1) {
      //get object at property (before split), pass on remainder
      return this.fetchFromObject(obj[prop.substring(0, _index)], prop.substring(_index + 1));
    }

    //no split; get property
    return obj[prop];
  }

  changePage(event: any) {
    console.log(event);
    this.pageSize = event.pageSize;
    this.page = event.pageIndex + 1;

    this.getData();
  }

  add() {
    this.router.navigate([`${this.currentPage}/new`]);
  }

  show(el: any) {
    console.log(el);
  }

  edit(el: any) {
    console.log(el);
  }

  remove(el: any) {
    console.log(el);
  }

}
