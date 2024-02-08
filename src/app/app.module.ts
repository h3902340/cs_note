import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MatrixGeneratorComponent } from './matrix-generator/matrix-generator.component';
import { MathModule } from './math/math.module';

@NgModule({
  declarations: [
    AppComponent,
    MatrixGeneratorComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MathModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
