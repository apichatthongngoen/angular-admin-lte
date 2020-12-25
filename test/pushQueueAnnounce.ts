import { QueueItem } from 'src/app/shared/interface/dataapi';

function pushQueueAnnounce(val?: QueueItem | number | string) {
  // val = Object.assign(val, { "uiDisplay": "money" })
  // return this.GetDataServiceService.postDisPay(`servicepoinsub/pushqueueannounce`, val)
  //   .subscribe((data) => {
  //     // this.results = data;
  //     console.log(data)
  //     this.loadData("")
  //     // console.log(val)
  //   })
  try {
    let n: any;
    let valArr: string[];
    if (typeof val === 'string') {
      valArr = val.split(',');
      // console.log(valArr)
      if (valArr.length == 1 && valArr[0]) {
        let value: string = valArr[0];
        if (!search(value)) {
          isNaN(+value) && alertErrorinput();
          console.log('คำสั่ง : ล่าสุดตามลำดับที่กำหนด : ' + value);
          value;
        } else {
          valArr = value.split('-');
          if (valArr.length != 2) {
            alertErrorinput();
          }
          postPushQueueAnnounce(valArr);
          // console.log("คำสั่ง: เรียกคิวช่วงที่กำหนด 1 ลำดับ : " + value)
        }
      } else {
        valArr.forEach(function (value) {
          if (search(value)) {
            console.log('คำสั่ง: เรียกคิวช่วงที่กำหนด' + value);
          } else {
            isNaN(+value) && alertErrorinput();
            console.log('คำสั่ง : เรียกคิว ตาม คิวที่ระบุ ' + value);
          }
        });
      }
    }
  } catch (error) {
    throw error;
  }

  function postPushQueueAnnounce(valArr: string[]) {
    if (valArr.length == 2) {
    }
  }
  // console.log(val)
  // console.log(n)
}
function alertErrorinput() {
  // alert("Invalid");
  throw new Error('Error');
}

function search(value: string): boolean {
  let searchVal: boolean = false;
  if (value.search('-') > 0) {
    searchVal = true;
  }
  return searchVal;
}

// pushQueueAnnounce("1-1")
let data1: any = [
  {
    idQueue: 230,
    nameQueue: '3-001',
    orderQueue: 1,
    idServicePointSub: 3,
    idQueueGroup: 3,
    idServiceChannel: null,
    statusQueue: '1',
    version: 1,
    vn: '631221070037',
    queueTime: '14:54:54',
    updateDatetime: null,
    idServicePoint: 1,
    patName: 'อุเทน',
    ptTypeName: 'บัตรทองมี ท. ข้ามอำเภอมีใบ Refer',
    qnHos: 250,
    hn: '0262652',
    idQueueAnnounce: 58,
    idFinancialStatusName: 2,
  },
  {
    idQueue: 240,
    nameQueue: '3-007',
    orderQueue: 7,
    idServicePointSub: 3,
    idQueueGroup: 3,
    idServiceChannel: null,
    statusQueue: '1',
    version: 1,
    vn: '631221070037',
    queueTime: '14:58:27',
    updateDatetime: null,
    idServicePoint: 1,
    patName: 'อุเทน',
    ptTypeName: 'บัตรทองมี ท. ข้ามอำเภอมีใบ Refer',
    qnHos: 250,
    hn: '0262652',
    idQueueAnnounce: 64,
    idFinancialStatusName: 2,
  },
  {
    idQueue: 241,
    nameQueue: '3-008',
    orderQueue: 8,
    idServicePointSub: 3,
    idQueueGroup: 3,
    idServiceChannel: null,
    statusQueue: '1',
    version: 1,
    vn: '631221070037',
    queueTime: '14:58:28',
    updateDatetime: null,
    idServicePoint: 1,
    patName: 'อุเทน',
    ptTypeName: 'บัตรทองมี ท. ข้ามอำเภอมีใบ Refer',
    qnHos: 250,
    hn: '0262652',
    idQueueAnnounce: 62,
    idFinancialStatusName: 2,
  },
  {
    idQueue: 242,
    nameQueue: '3-009',
    orderQueue: 9,
    idServicePointSub: 3,
    idQueueGroup: 3,
    idServiceChannel: null,
    statusQueue: '1',
    version: 1,
    vn: '631221070037',
    queueTime: '14:58:28',
    updateDatetime: null,
    idServicePoint: 1,
    patName: 'อุเทน',
    ptTypeName: 'บัตรทองมี ท. ข้ามอำเภอมีใบ Refer',
    qnHos: 250,
    hn: '0262652',
    idQueueAnnounce: 63,
    idFinancialStatusName: 2,
  },
  {
    idQueue: 243,
    nameQueue: '3-010',
    orderQueue: 10,
    idServicePointSub: 3,
    idQueueGroup: 3,
    idServiceChannel: null,
    statusQueue: '1',
    version: 1,
    vn: '631221070037',
    queueTime: '14:58:29',
    updateDatetime: null,
    idServicePoint: 1,
    patName: 'อุเทน',
    ptTypeName: 'บัตรทองมี ท. ข้ามอำเภอมีใบ Refer',
    qnHos: 250,
    hn: '0262652',
    idQueueAnnounce: 61,
    idFinancialStatusName: 2,
  },
  {
    idQueue: 244,
    nameQueue: '3-011',
    orderQueue: 11,
    idServicePointSub: 3,
    idQueueGroup: 3,
    idServiceChannel: null,
    statusQueue: '1',
    version: 1,
    vn: '631221070037',
    queueTime: '14:58:29',
    updateDatetime: null,
    idServicePoint: 1,
    patName: 'อุเทน',
    ptTypeName: 'บัตรทองมี ท. ข้ามอำเภอมีใบ Refer',
    qnHos: 250,
    hn: '0262652',
    idQueueAnnounce: 60,
    idFinancialStatusName: 2,
  },
];

function test2(results, val?: QueueItem | number | string) {
  try {
    let n: any;
    let valArr: string[];
    // let  results:any = data1
    let resultsObj: QueueItem[] = [];
    let x: QueueItem;
    let minMaxValArrOfsplit = [];
    if (typeof val === 'string') {
      valArr = val.split(','); //?
      // console.log(valArr)
      valArr.forEach(function (value) {
        let valArrOfsplit = value.split('-');
        valArrOfsplit.forEach(function (value) {
          if (valArrOfsplit.length <= 2) {
            minMaxValArrOfsplit.push(parseInt(value));
          } else {
            alertErrorinput();
          }
        });

        if ((minMaxValArrOfsplit.length = 2)) {
          for (
            let i = Math.min.apply(null, minMaxValArrOfsplit);
            i <= Math.max.apply(null, minMaxValArrOfsplit);
            i++
          ) {
            x = results.filter(
              (x: { orderQueue: string }) => x.orderQueue == i
            );
            resultsObj.push(x[0]);
          }
        }
      });

      resultsObj.length; //?
      console.log(resultsObj);
    }
  } catch (error) {
    throw error;
  }
}

test2(data1, '8-8');
