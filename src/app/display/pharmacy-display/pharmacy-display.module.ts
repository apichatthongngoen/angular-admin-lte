import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import { PharmacyDisplayRoutingModule } from "./pharmacy-display-routing.module";
import { DisplayMainComponent } from "./display-main/display-main.component";
import { ScreenCalledQueuAudioComponent } from "../display-module/screen-called-queu-audio/screen-called-queu-audio.component";
import { DisplayHeadComponent } from "../display-module/display-head/display-head.component";
import { QueueAllComponent } from "./queue-all/queue-all.component";
import { QueueAllModuleGrupTablesComponent } from "./queueAllModule/queue-all-module-grup-tables/queue-all-module-grup-tables.component";
import { QueueDisplayServiceComponent } from "./queue-display-service/queue-display-service.component";
import { ChannelDisplayModuleComponent } from "./queueDisplayServiceModule/channel-display-module/channel-display-module.component";

@NgModule({
  declarations: [
    DisplayMainComponent,
    ScreenCalledQueuAudioComponent,
    DisplayHeadComponent,
    QueueAllComponent,
    QueueAllModuleGrupTablesComponent,
    QueueDisplayServiceComponent,
    ChannelDisplayModuleComponent,
  ],
  imports: [CommonModule, PharmacyDisplayRoutingModule],
})
export class PharmacyDisplayModule {}
