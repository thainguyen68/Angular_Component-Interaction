import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {HeroChildComponent} from './hero-child.component';
import {HeroParentComponent} from './hero-parent.component';
import {NameChildComponent} from './name-child.component';
import {NameParentComponent} from './name-parent.component';
import {VersionChildComponent} from "./version-child.component";
import {VersionParentComponent} from "./version-parent.component";
import {VoterComponent} from "./voter.component";
import {VoteTakerComponent} from "./votetaker.component";
import {CountdownTimerComponent} from "./countdown-timer.component";
import {CountdownLocalVarParentComponent} from "./countdown-parent.component";
import {CountdownViewChildParentComponent} from "./countdown-parent-vc.component";
import {MissionControlComponent} from "./missioncontrol.component";
import {AstronautComponent} from "./astronaut.component";

@NgModule({
  declarations: [
    AppComponent,
    //input Binding
    HeroChildComponent,
    HeroParentComponent,
    // setter & getter
    NameChildComponent,
    NameParentComponent,
    // ngOnChanges()
    VersionChildComponent,
    VersionParentComponent,
    // EventEmitter
    VoterComponent,
    VoteTakerComponent,
    //local variable
    CountdownTimerComponent,
    CountdownLocalVarParentComponent,
    //@ViewChild()
    CountdownViewChildParentComponent,
    //service
    AstronautComponent,
    MissionControlComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
