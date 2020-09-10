import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ImguploadService {

  constructor(private http:HttpClient) { }

  private uploadUrl = 'http://localhost:3000/api/upload'; 

  imgupload(fd){
    return this.http.post<any>(this.uploadUrl, fd);
  }
}
