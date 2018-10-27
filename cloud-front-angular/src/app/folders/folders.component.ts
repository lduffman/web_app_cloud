import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { Folder } from '../folder';
import { FolderService } from '../folder.service';

@Component({
  selector: 'app-folders',
  templateUrl: './folders.component.html',
  styleUrls: ['./folders.component.css']
})
export class FoldersComponent implements OnInit {

  folders: Folder[];
  folder: Folder;
  folderDBName: String;

  constructor(
    private folderService: FolderService,
    private route: ActivatedRoute)
    { }

  ngOnInit() {
      this.getFolders();
  }
  

  addFolder(name: string): void {
    this.folderService.addFolder({ name })
      .subscribe(name => {
        this.folders.push(name);
      });
  }

  // delete(folder: Folder): void {
  //   this.folders = this.folders.filter(h => h !==folder);
  //   this.folderService.deleteFolder(folder).subscribe();
  // }

  getFolders(): void {
    this.folderService.getFolders()
      .subscribe(folders => this.folders = folders);
  }

  // getFolderIdParent(): void {
  //   const id_parent = +this.route.snapshot.paramMap.get('id_parent');
  //   this.folderService.getFolderIdParent(id_parent)
  //       .subscribe(folders => this.folder = folders);
  // }

}
