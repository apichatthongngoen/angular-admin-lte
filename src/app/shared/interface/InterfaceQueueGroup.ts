export interface InterfaceQueueGroup {
  idQueueGroup: number;
  nameQueueGroup: string;
  colorQueueGroup: string;
  idServicePoint: number;
  queueItem?: InterfaceQueueItemLast;
}

interface InterfaceQueueItemLast {
  idQueueGroup: number;
  nameQueue: string;
  timeQueue: number;
  timeQueueWait: number;
  queueGroupPurport: string;
}
