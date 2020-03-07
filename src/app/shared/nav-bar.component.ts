import { Component } from "@angular/core";

@Component({
  selector: 'nav-bar',
  templateUrl: './nav-bar.component.html',
  styles:[`
  .nav.navbar-nav {font-size: 15 px;}
  .navbar-nav {background-color: #485563;}
  #searchForm {margin-right: 100px}
  @media (max-width: 120px) {#searchForm{display:none}}
   a{color:#bbb}
  li > a.active {color: #F97924}
  `]
})
export class NavBarComponent { }
