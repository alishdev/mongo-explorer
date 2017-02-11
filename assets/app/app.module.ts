import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from "./app.component";
import { MainWindowComponent } from './main-window/main-window.component';
import { WorkspaceComponent } from './workspace/workspace.component';
import { SourceTreeComponent } from './source-tree/source-tree.component';

@NgModule({
    declarations: [
        AppComponent,
        WorkspaceComponent,
        MainWindowComponent,
        SourceTreeComponent
    ],
    imports: [BrowserModule, RouterModule],
    bootstrap: [AppComponent] 
})
export class AppModule {

}