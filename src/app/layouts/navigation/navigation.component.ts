import { Component, OnDestroy } from '@angular/core';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Observable } from 'rxjs';
import { map, shareReplay } from 'rxjs/operators';
import { NavItem } from './nav-item';

// import { MediaMatcher } from '@angular/cdk/layout';
// import { ChangeDetectorRef, Component, OnDestroy } from '@angular/core';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.css']
})
export class NavigationComponent implements OnDestroy {

  menu: NavItem [] = [
    {
      displayName: 'Dashboard',
      iconName: 'desktop_windows',
      route: 'dashboard/reports',
    },        
    {
      displayName: 'Aprobaciones',
      iconName: 'rule',
      route: 'entradasGADE',
    },
    {
      displayName: 'Reportes',
      iconName: 'bar_chart',
      route: 'dashboard/reports',
    },
    {
      displayName: 'Cuentas',
      iconName: 'supervisor_account',          
      children: [
        {
          displayName: 'Usuarios',
          iconName: 'how_to_reg',
          route: '/accounts/user'
        },
        { 
          displayName: 'Perfiles',
          iconName: 'group_add',
          route: '/accounts/profile'
        },
        { 
          displayName: 'Vistas',
          iconName: 'preview',
          route: '/accounts/view'
        }
      ]
    },
    {
      displayName: 'Programas',
      iconName: 'groups',
      children: [
          {
            displayName: 'Techo Mínimo',
            iconName: 'house',
            route: '/accounts/profile'
          }, 
          {
            displayName: 'Viveres',
            iconName: 'storefront',
            route: '/accounts/profile'
          }, 
          {
            displayName: 'Medicina',
            iconName: 'medical_services',
            route: '/accounts/profile'
          }
        ]
      }
  ];

  isHandset$: Observable<boolean> = this.breakpointObserver.observe(Breakpoints.Handset)
    .pipe(
      map(result => result.matches),
      shareReplay()
    );

  constructor(private breakpointObserver: BreakpointObserver) { }

  ngOnDestroy(): void {

  }



  // mobileQuery: MediaQueryList;

  // fillerNav = Array.from({ length: 50 }, (_, i) => `Nav Item ${i + 1}`);

  // fillerContent = Array.from(
  //   { length: 50 },
  //   () =>
  //     `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
  //      labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco
  //      laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in
  //      voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
  //      cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.`,
  // );

  // private _mobileQueryListener: () => void;

  // constructor(changeDetectorRef: ChangeDetectorRef, media: MediaMatcher) {
  //   this.mobileQuery = media.matchMedia('(max-width: 600px)');
  //   this._mobileQueryListener = () => changeDetectorRef.detectChanges();
  //   this.mobileQuery.addListener(this._mobileQueryListener);

  //   console.log(window.location.host);
  // }

  // ngOnDestroy(): void {
  //   this.mobileQuery.removeListener(this._mobileQueryListener);
  // }

  // // shouldRun = /(^|.)(stackblitz|webcontainer|localhost).(io|com)$/.test(window.location.host);

  // shouldRun = true;


}
