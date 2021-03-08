// export interface QueueItem {
//     id_queue?: number;
//     order_queue?: number;
//     name_queue?: string;
//     id_service_point_sub?: number;
//     id_queue_group?: number;
//     id_service_channel?: number;
//     vn?: string;
//     status_queue?: string;
//     create_user?: string;
//     create_datetime?: string;
//     update_user?: string;
//     update_datetime?: string;
//     version?: string;
//     order_queue_service_point_sub?: number;
//     name_service_point_sub?: string;
//     status_service_point_sub?: null;
//     id_service_point?: number;
// }
export interface QueueItem {
  idQueue: number;
  nameQueue: string;
  orderQueue: number;
  idServicePointSub: number;
  idQueueGroup: number;
  idServiceChannel?: any;
  statusQueue: string;
  version: number;
  vn?: string;
  queueDate?: Date;
  queueTime: string;
  queueDatetime?: Date;
  createDatetime?: Date;
  updateDatetime?: any;
  idServicePoint: number;
  patName: string;
  ptTypeName: string;
  qnHos: number;
  hn: string;
  idQueueAnnounce?: number;
  idFinancialStatusName?: number;
  uiDisplay?: string;
  cid?: string;
  CID?: string;
}

export interface ServiceChannel {
  idServiceChannel: number;
  nameServiceChannel: string;
  statusServiceChannel: string;
  idServicePoint: number;
  idServicePointSub: number;
  version: number;
}
export interface InterfaceScreenCalledQueue {
  idQueue: number;
  nameQueue: string;
  orderQueue: number;
  idServicePoint: number;
  idServicePointSub: string;
  idQueueGroup: number;
  version: number;
  vn: string;
  idServiceChannel: number;
  nameServiceChannel: string;
  nameSpeakServiceChannel: string;
  ColorQueueGroup: string;
}

export declare interface QueueGroupPrint {
  nameQueue: string;
  orderQueue: number;
  idQueueGroup: number;
  idServicePoint: string;
  idServicePointSub: number;
  hn: string | null;
  fname: string;
  lname: string;
  age: number;
  Date: string;
}
