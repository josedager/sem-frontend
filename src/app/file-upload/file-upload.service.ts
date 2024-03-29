import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FileUploadService {
  url = "http://localhost:8080/fechas/timeInWord";

  constructor(
    private http: HttpClient
  ) { }

  upload(file:File): Observable<any> {
    const formData = new FormData();
    formData.append("file", file, file.name);
    return this.http.post(this.url, formData);
  }
}
