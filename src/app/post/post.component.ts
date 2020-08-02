import { Component, OnInit } from '@angular/core';
import { DataImportService } from '../_services/data-import.service';
import { HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})
export class PostComponent implements OnInit {

  liking: string;
  displayData: any[];


  constructor(private dataService: DataImportService) {
  }

  ngOnInit() {
    this.dataService.getData()
      .subscribe(
        data => {
          this.displayData = data as object []; // FILL ARRAY WITH DATA
          console.log(this.displayData[1]);
        },
        (err: HttpErrorResponse) => {
          console.log(err.message);
        }
    );
  }

}
