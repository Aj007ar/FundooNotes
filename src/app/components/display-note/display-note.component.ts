import { AUTO_STYLE } from '@angular/animations';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import {MatDialog} from '@angular/material/dialog';
import { DataService } from 'src/app/services/DataServices/data.service';
import { UpdateNoteComponent } from '../update-note/update-note.component';

@Component({
  selector: 'app-display-note',
  templateUrl: './display-note.component.html',
  styleUrls: ['./display-note.component.scss']
})
export class DisplayNoteComponent implements OnInit {

  @Input() recieveNoteList: any;
  @Output() eventForDisplay = new EventEmitter<string>();
  title:any;
  description:any;
  message:any;
  Search='';
  gridlist: any;
  constructor(public dialog:MatDialog, private dataServices:DataService) { }

  ngOnInit(): void {
    this.dataServices.currentMessage.subscribe((res:any)=>{
      console.log(res)
      this.Search=res;
    })
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

  recievedEventFromIcon($event:any){
    console.log("event from icon to disply",$event);
    this.message=$event;
    console.log("message",this.message);
    this.eventForDisplay.emit(this.message)
  }


}
