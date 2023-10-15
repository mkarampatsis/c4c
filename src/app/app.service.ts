import { Injectable } from '@angular/core';
import { HelpersService } from './services/helpers.service';

@Injectable({
  providedIn: 'root'
})
export class AppService {

  constructor(
    private helpersService: HelpersService
  ) { }

  setURI(uri: string){
    this.helpersService.setURI(uri);
  }
}
