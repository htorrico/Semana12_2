import { Component } from '@angular/core';
import { UploadService } from './services/upload.service';




@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  uploadedFiles: Array < File > ;
  title = 'UploadsFiles';
  constructor(private serviceUpload: UploadService) { }
  fileChange(element) {
    console.log('fileChangexx');
    this.uploadedFiles = element.target.files;
  }
  upload() {
    console.log('uploadxxx');
    let formData = new FormData();
    console.log('uploadedFiles:');
    console.log(this.uploadedFiles);
    for (var i = 0; i < this.uploadedFiles.length; i++) {
      console.log('Inicio FOR');
      // formData.append("file[]",this.uploadedFiles[0]);
      formData.append("file",
	    this.uploadedFiles[i],
      this.uploadedFiles[i].name);

    }
    console.log('formData:');
    console.log(formData);
    this.serviceUpload.uploadFile(formData).subscribe((res)=> {
      console.log('response received is ', res);
    });
  }
}
