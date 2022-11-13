import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Flight } from './flight';
import { FlightService } from './flight.service';
@Component({
  selector: 'app-flight',
  templateUrl: './flight.component.html',
  styleUrls: ['./flight.component.css'],
})
export class FlightComponent implements OnInit {
  myImage:string="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQPFMiNHQGyEgSdk-pkkXKrPq1GWHtm65fH10xB8Oq-mVh2bL3B8unjEXHjlUBEJm4fPeo&usqp=CAU"
  flights = [];
  model = new Flight();
  constructor(private flightService: FlightService) {}  
  ngOnInit() {
    this.getAllFlights();
  }
  getAllFlights() {
    this.flightService.getAllFlightService().subscribe((x: any[]) => {
      this.flights = x;
    });
  }
  editFlight(id: string) {
    alert(id);
    this.flightService
      .getFlightService(id)
      .subscribe((data: any) => (this.model = data));
  }
  deleteFlight(id: any) {
    alert(id);
    this.flightService.deleteFlightService(id).subscribe((data) => {
      this.getAllFlights();
    });
  }
  addFlight() {
    alert(JSON.stringify(this.model));
    if (!this.model.id) {
      // alert(JSON.stringify(this.model));
      this.flightService
        .createFlightService(this.model)
        .subscribe((data) => { 
          this.getAllFlights();
          this.model = new Flight();
        });
    } else {
      // alert(JSON.stringify(this.model));
      this.flightService
        .updateFlightService(this.model.id, this.model)
        .subscribe((data) => {
          this.getAllFlights();
         this.model = new Flight();
        });
    }
  }
}