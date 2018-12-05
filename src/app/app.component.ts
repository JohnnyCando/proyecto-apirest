import { Component } from '@angular/core';
import { Http} from '@angular/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})

export class AppComponent  {
  clickMessage = '';
  value = '';
  constructor(private http:Http){


  };

  enviarDatosServidor() {
    this.http.post('http://www.yavirac.edu.ec/museo/server/persona/crear', JSON.stringify(this.value))
    .toPromise()

  }

  update(value: string) {
    this.value = value;
    console.log(value);
  }
  
}