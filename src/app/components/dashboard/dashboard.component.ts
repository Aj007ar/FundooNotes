import { Component, OnInit } from '@angular/core';
import {MediaMatcher} from '@angular/cdk/layout';
import {ChangeDetectorRef, OnDestroy} from '@angular/core';
import { Router } from '@angular/router';
import { DataService } from 'src/app/services/DataServices/data.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  errormessage:any
  mobileQuery: MediaQueryList;
  grid = false;
  formatGridList = false;
  fillerNav = Array.from({length: 50}, (_, i) => `Nav Item ${i + 1}`);

  fillerContent = Array.from(
    {length: 50},
    () =>
      `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
       labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco
       laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in
       voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
       cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.`,
  );

  private _mobileQueryListener: () => void;

  constructor(changeDetectorRef: ChangeDetectorRef, media: MediaMatcher, private router:Router, private dataService:DataService ) {
    this.mobileQuery = media.matchMedia('(max-width: 600px)');
    this._mobileQueryListener = () => changeDetectorRef.detectChanges();
    this.mobileQuery.addListener(this._mobileQueryListener);
  }

  ngOnInit(): void {
    this.mobileQuery.removeListener(this._mobileQueryListener);
  }
  Logout()
  {
    localStorage.removeItem('token');
    this.router.navigateByUrl("/signin")
    console.log("Logout Successfully..!!!");
  }
  trash(){
    this.router.navigateByUrl("/home/trash")
  }
  archive(){
    this.router.navigateByUrl("/home/archive")
  }

  searchNote(event:any){
    this.dataService.sendMessage(event.target.value)
  }
  formatListView() {
    this.grid = true
    this.dataService.nextDataUpdate(this.grid)
    console.log("value ", this.grid)
  }

  formatGridView() {
    this.grid = false
    this.dataService.nextDataUpdate(this.grid)
    console.log("value ", this.grid)
  }
}
