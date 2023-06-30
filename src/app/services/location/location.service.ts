import { Injectable } from '@angular/core';
import { Location } from '../../Core/interfaces/location';
import { BACKEND_URL } from 'src/app/Core/constants/backend';

@Injectable({
  providedIn: 'root',
})
export class LocationService {
  constructor() {}

  async addLocation(location: Location): Promise<Location> {
    const res = await fetch(BACKEND_URL + '/api/location/', {
      method: 'POST',
      headers: {
        'Content-type': 'application/json',
      },
      body: JSON.stringify(location),
    });
    return res.json();
  }
}
