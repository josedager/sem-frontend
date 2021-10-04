import { Component, OnInit } from '@angular/core';
import { FileUploadService } from './file-upload.service'

interface timeInWord{
  hora : string,
  minutos : string,
  timeInWord : string
}

@Component({
  selector: 'app-file-upload',
  templateUrl: './file-upload.component.html',
  styleUrls: ['./file-upload.component.css']
})
export class FileUploadComponent implements OnInit {
  shortLink: string = "";
  loading: boolean = false;
  file: any = undefined;
  timeInWords : timeInWord[] = [];

  constructor(
    private fileUploadService: FileUploadService
  ) { }

  ngOnInit(): void {
  }

  onChange(event:any) {
    this.file = event.target.files[0];
  }

  onUpload() {
    this.loading = !this.loading;
    this.fileUploadService.upload(this.file).subscribe(
        (event: any) => {
          if (typeof (event) === 'object') {
              this.timeInWords = event;
              this.loading = false;
          }
        }
    );
  }
}
