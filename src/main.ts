import { bootstrapApplication } from '@angular/platform-browser';
import { AppComponent } from './app/app.component';

// old way of bootstraping the app ot the app module

// platformBrowserDynamic()
//   .bootstrapModule(AppModule)
//   .catch((err) => console.error(err));

// bootstraping the app to AppComponent to enable standalone components
bootstrapApplication(AppComponent);
