import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { getLocaleDateFormat } from '@angular/common';

@Injectable({
  providedIn: 'root'
})
export class DataImportService {

  constructor(private httpService: HttpClient) {  }

  getData() {
    return this.httpService.get('./assets/testData.json');
  }

  login() {
    return this.httpService.get('./assets/userData.json');
  }
}
