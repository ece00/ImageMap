
import { HttpClient } from "@angular/common/http";
import { Subject } from "rxjs";
import { Coord } from '../coord.model';

export class CoordsService {
  Coords: Coord[] = [];
  CoordsUpdated = new Subject<Coord[]>();

  constructor(private http: HttpClient) {}
  addCoord(x:number, y:number) {
    const Coord: Coord = { x: null, y:null };
    this.http
      .post<{ message: string }>("http://localhost:3000/api/coords", Coord)
      .subscribe(responseData => {
        console.log(responseData.message);
        this.Coords.push(Coord);
      });
  }
}

