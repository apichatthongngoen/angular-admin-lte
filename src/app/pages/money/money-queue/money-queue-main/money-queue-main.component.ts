import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';

// interface ItemsResponse {
//   results: any
// }

@Component({
  selector: 'app-money-queue-main',
  templateUrl: './money-queue-main.component.html',
  styleUrls: ['./money-queue-main.component.scss']
})
export class MoneyQueueMainComponent implements OnInit {
  public urlSource: string = "http://localhost:3008/api/dispay/servicepoinsub";
  name_container_header = 'คิวการเงิน';
  public results: any;// กำหนดตัวแปร เพื่อรับค่า
  public headerDatas: any;
  public jsonData: any;
  public mykey: any;
  constructor(private http: HttpClient) { }

  ngOnInit(): void {

    // this.http.get(this.urlSource, { observe: 'response' }).subscribe(resp => {
    //   // อ่านค่า result จาก JSON response ที่ส่งออกมา
    //   console.log(resp);// ดูโครงสร้างของ json ทั้งหมดผ่าน console
    //   console.log(resp.status);
    //   this.jsonData = resp;
    //   // this.headerDatas = resp.headers.get('ชื่อ property ส่วน header ที่ต้องการ');
    //   // ใช้ข้อมูลในส่วนของ response body  ที่ส่งออกมา
    //   this.results = resp.body
    //   this.mykey = Object.keys(this.results);
    //   console.log(this.mykey);
    // },
    //   (err: HttpErrorResponse) => {
    //     // กรณี error
    //     if (err.error instanceof Error) {
    //       // กรณี error ฝั่งผู้ใช้งาน หรือ การเชื่อมต่อเกิด error ขึ้น
    //       console.log('An error occurred:', err.error.message);
    //     } else { // กรณี error ฝั่ง server ไม่พบไฟล์ ,server error 
    //       console.log(`Backend returned code ${err.status}, body was: ${err.error}`);
    //     }
    //   }
    // );
  }
}
