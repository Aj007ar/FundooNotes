import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { NoteService } from 'src/app/services/noteService/note.service';
import { CollaboratorComponent } from '../collaborator/collaborator.component';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-icons',
  templateUrl: './icons.component.html',
  styleUrls: ['./icons.component.scss']
})
export class IconsComponent implements OnInit {

  @Input() noteCard:any;
  @Output() IconEvent = new EventEmitter<string>();
  @Output() collabEvent=new EventEmitter<any>();
  isArchive=false;
  isDelete=false;
  isArchived:any;
  isDeleted:any;
  constructor(private note:NoteService,public dialog:MatDialog,private snackbar:MatSnackBar) { }

  ngOnInit(): void {
    this.isArchive=this.noteCard.isArchived;
    this.isDelete=this.noteCard.isDeleted;
  }

  colors: Array<any> = [
    { code: '#fff', name: 'white' },
    { code: '#f28b82', name: 'red' },
    { code: '#fbbc04', name: 'orange' },
    { code: '#FFFF00', name: 'yellow' },
    { code: '#ccff90', name: 'green' },
    { code: '#a7ffeb', name: 'teal' },
    { code: '#cbf0f8', name: 'Blue' },
    { code: '#aecbfa', name: 'darkblue' },
    { code: '#d7aefb', name: 'purple' },
    { code: '#fdcfe8', name: 'pink' },
    { code: '#e6c9a8', name: 'brown' },
    { code: '#e8eaed', name: 'grey' },
  ];
  trash(){
    let payload={
      noteIdList:[this.noteCard.id],
      isDeleted:true,
    }
    console.log(payload);
    this.note.trashNote(payload).subscribe((res:any)=>{
      this.IconEvent.emit(res)

      this.snackbar.open('Note deleted successfully', '', {
        duration: 3000,
        verticalPosition: 'bottom'
      })
    })
  }

  archive(){
    let payload={
      noteIdList:[this.noteCard.id],
      isArchived:true,
    }
    console.log(payload);
    this.note.archiveNote(payload).subscribe((res:any)=>{
      this.IconEvent.emit(res)

      this.snackbar.open('Note Archived successfully', '', {
        duration: 3000,
        verticalPosition: 'bottom'
      })
    })
  }

  colorChange(color:any){
    this.noteCard.color=color
    let payload={
      color:color,
      noteIdList:[this.noteCard.id],
      
    }
    console.log(payload);
    this.note.colorService(payload).subscribe((res:any)=>{
      this.IconEvent.emit(res)

      this.snackbar.open('Note background updated successfully', '', {
        duration: 3000,
        verticalPosition: 'bottom'
      })
    })
  }
  unarchive(){
    let payload={
      noteIdList:[this.noteCard.id],
      isArchived: false,
    }
    console.log(payload);
    this.note.archiveNote(payload).subscribe((res:any)=>{
      this.IconEvent.emit(res)

      this.snackbar.open('Note Unarchived successfully', '', {
        duration: 3000,
        verticalPosition: 'bottom'
      })
    })
  }

  restore(){
    let payload={
      noteIdList:[this.noteCard.id],
      isDeleted:false,
    }
    console.log(payload);
    this.note.trashNote(payload).subscribe((res:any)=>{
      this.IconEvent.emit(res)

      this.snackbar.open('Note Restored successfully', '', {
        duration: 3000,
        verticalPosition: 'bottom'
      })
    })
  }
  delete(noteIdList:any){
    let payload={
      noteIdList:[this.noteCard.id],
    }
    this.note.deleteForever(payload).subscribe((res:any)=>{
      this.IconEvent.emit(res)

      this.snackbar.open('Note deleted permenently', '', {
        duration: 3000,
        verticalPosition: 'bottom'
      })
    })
  }

  openDialog(){
    const dialogRef=this.dialog.open(CollaboratorComponent,{
      width:'40%',
      height:'auto',
      data:this.noteCard,

    });
    dialogRef.afterClosed().subscribe(reponse=>{
      console.log('The dialog was closed',reponse);
      this.collabEvent.emit(reponse)
    })
  }
}
