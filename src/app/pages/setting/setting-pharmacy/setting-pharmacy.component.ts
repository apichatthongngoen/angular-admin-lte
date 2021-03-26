import { Component, Inject, OnInit } from "@angular/core";
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA, MatDialogConfig } from "@angular/material/dialog";
import { GetDataServiceService } from "../../../shared/get-data-service.service";

export interface DialogData {
  val: boolean;
  name: string;
  name2: string;
  name3: string;
}

@Component({
  selector: "app-setting-pharmacy",
  templateUrl: "./setting-pharmacy.component.html",
  styleUrls: ["./setting-pharmacy.component.scss"],
})
export class SettingPharmacyComponent implements OnInit {
  isChecked: boolean;
  animal: string;
  name: string;
  constructor(public dialog: MatDialog, public getDataServiceService: GetDataServiceService) {}

  ngOnInit(): void {
    this.loadData();
  }
  openDialog(): void {
    this.loadData();
    let name2 = "ปิด";
    if (this.isChecked == false) {
      name2 = "เปิด";
    }
    const dialogRef = this.dialog.open(dialogConfirm, {
      width: "340px",
      data: { name: "ตั้งค่าการเปิดคิวรวม", name3: name2, name2: " คิวรวมกด ยืนยัน ", val: this.isChecked },
    });
    dialogRef.afterClosed().subscribe((result) => {
      if (result !== undefined && result !== null) {
        this.update(result);
        this.loadData();
      } else {
        this.loadData();
      }
    });
  }

  loadData(): void {
    let data = {
      code: 11,
      parameter: "get",
      idServicePoint: 1,
    };
    this.getDataServiceService.postAPISetting(`setting`, data).subscribe((data: any) => {
      if (data[0].statusSetup && data[0].statusSetup == 1) {
        this.isChecked = true;
      } else if (data[0].statusSetup == 0) {
        this.isChecked = false;
      }
    });
    // this.results = data1;
    // return this.GetDataServiceService.getDisPay(`servicepoinsub?idServicePoint=1&idServicePointSub=3&statusQueue=${this.statusQueue}&tabsgroupqueuepharmacy=${this.tabsGroupQueuePharmacy}`)
  }
  private update(valSetring: boolean): void {
    let data = {
      code: 11,
      valSetring: valSetring,
      parameter: "update",
      idServicePoint: 1,
    };
    this.getDataServiceService.postAPISetting(`setting`, data).subscribe((data: any) => {});
    // this.results = data1;
    // return this.GetDataServiceService.getDisPay(`servicepoinsub?idServicePoint=1&idServicePointSub=3&statusQueue=${this.statusQueue}&tabsgroupqueuepharmacy=${this.tabsGroupQueuePharmacy}`)
  }
}

@Component({
  selector: "dialog-confirm",
  templateUrl: "dialog-confirm.html",
  styleUrls: ["./setting-pharmacy.component.scss"],
})
export class dialogConfirm {
  constructor(public dialogRef: MatDialogRef<dialogConfirm>, @Inject(MAT_DIALOG_DATA) public data: DialogData) {}
  onNoClick(): void {
    this.dialogRef.close();
  }
}
