import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { TaskStatusValidationPipe } from './validators/src/lib/task-status-validation.pipe';

@NgModule({
  declarations: [AppComponent, TaskStatusValidationPipe],
  imports: [BrowserModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
