import { AUTO_STYLE } from '@angular/animations';
import { Component, Input, OnInit } from '@angular/core';
import {MatDialog} from '@angular/material/dialog';
import { UpdateNoteComponent } from '../update-note/update-note.component';

@Component({
  selector: 'app-display-note',
  templateUrl: './display-note.component.html',
  styleUrls: ['./display-note.component.scss']
})
export class DisplayNoteComponent implements OnInit {

  @Input() recieveNoteList: any;
  title:any;
  description:any;
  constructor(public dialog:MatDialog) { }

  ngOnInit(): void {

    console.log(this.recieveNoteList);
  }
  openDialog(note:any){
    const dialogRef=this.dialog.open(UpdateNoteComponent,{
      width:'40%',
      height:'auto',
      data:note,

    });
    dialogRef.afterClosed().subscribe(reponse=>{
      this.title;
      this.description;
      console.log('The dialog was closed',reponse);
    })
  }
}
