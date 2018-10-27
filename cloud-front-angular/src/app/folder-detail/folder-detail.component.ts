import { Component, OnInit, Input } from '@angular/core';
import { Folder } from '../folder';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { FolderService } from '../folder.service';

@Component({
  selector: 'app-folder-detail',
  templateUrl: './folder-detail.component.html',
  styleUrls: ['./folder-detail.component.css']
})
export class FolderDetailComponent implements OnInit {

  @Input() folder: Folder;
  folders: Folder[];

  constructor(
    private route: ActivatedRoute,
    private folderService: FolderService,
    private location: Location
  ) { }

  ngOnInit(): void {
    // const id = +this.route.snapshot.paramMap.get('id');
    // this.folderService.getFolderIdParent(id)
    //     .subscribe(folder => this.folder = folder);
    // this.getFolders();

  }

  // goBack(): void{
  //   this.location.back();
  // }

  // save(): void {
  //   this.folderService.updateFolder(this.folder)
  //       .subscribe(() => this.goBack());
  // }

  // getFolders(): void {
  //   this.folderService.getFolders()
  //       .subscribe(folders => this.folders = folders);
  // }

  // getFolderIdParent(): void {
  //   const id_parent = +this.route.snapshot.paramMap.get('id_parent');
  //   this.folderService.getFolderIdParent(id_parent)
  //       .subscribe(folders => this.folder = folders);
  // }



}
