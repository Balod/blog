import { NgModule } from "@angular/core";
import { RouterModule } from "@angular/router";
import { AboutComponent } from "./about.component";
import { AuthGuard } from "../guard/auth.guard";
import { AboutExtraComponent } from "../about-extra/about-extra.component";
import { CommonModule } from "@angular/common";

@NgModule({
    declarations: [
        AboutComponent,
        AboutExtraComponent
    ],
    imports: [
        CommonModule,
        RouterModule.forChild(
            [{path: '', component: AboutComponent, canActivate: [AuthGuard] ,children: [
                {path: 'extra', component: AboutExtraComponent}
            ]}],
        ),
    ],
    exports: [
        RouterModule
    ]
})

export class AboutModule {}
