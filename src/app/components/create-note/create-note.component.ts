import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-create-note',
  templateUrl: './create-note.component.html',
  styleUrls: ['./create-note.component.scss']
})
export class CreateNoteComponent implements OnInit {

  description:any;
  isShow=false;
  title:any;
  constructor() { }

  ngOnInit(): void {
  }

  Show() {
    this.isShow = true;
  }
  Close(){
    this.isShow=false;
  }
}
