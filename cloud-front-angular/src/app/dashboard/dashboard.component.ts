import { Component, OnInit } from '@angular/core';
import { Folder } from '../folder';
import { FolderService } from '../folder.service';
 
@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: [ './dashboard.component.css' ]
})
export class DashboardComponent implements OnInit {
  folders: Folder[];
 
  constructor(private folderService: FolderService) { }
 
  ngOnInit() {
    this.getFolders();
  }
 
  getFolders(): void {
    this.folderService.getFolders()
      .subscribe(folders => this.folders = folders.slice(0, 5));
  }
}