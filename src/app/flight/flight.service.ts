import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Flight } from './flight';

@Injectable({
  providedIn: 'root',
})
export class FlightService {
  constructor(private httpClient: HttpClient) {}
  public getAllFlightService() {
    return this.httpClient.get('http://localhost:8080/flight/');
  }
  public getFlightService(id) {
    return this.httpClient.get('http://localhost:8080/flight/' + id);
  }
  public deleteFlightService(id) {
    return this.httpClient.delete('http://localhost:8080/flight/' + id);
  }
  public createFlightService(flight: Flight) {
    const headers = { 'content-type': 'application/json' };
    return this.httpClient.post(
      'http://localhost:8080/flight/',
      JSON.stringify(flight),
      {
        headers: headers,
      }
    );
  }
  public updateFlightService(id, flight: Flight) {
    const headers = { 'content-type': 'application/json' };
    return this.httpClient.put(
      'http://localhost:8080/flight/' + id,
      JSON.stringify(flight),
      {
        headers: headers,
      }
    );
  }
}
