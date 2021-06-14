export declare interface InterfaceDisplayService {
  nameThDisplay: string;
  classHeading: string;
  idDisplay: string;
  idServiceChannel: number;
  nameServiceChannel: string;
  displayServiceItemShow: boolean;
}
export declare interface InterfaceQueueDisplayService {
  serviceNow: displayQueueForDisplayService[];
  serviceNowProblem?: displayQueueForDisplayService[];
}

export declare interface displayQueueForDisplayService {
  nameQueue: string;
  orderQueue: number;
  colorQueueGroup?: string;
  nameQueueGroup?: string;
}
