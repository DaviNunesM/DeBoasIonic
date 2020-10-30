import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-objetivos',
  templateUrl: './objetivos.page.html',
  styleUrls: ['./objetivos.page.scss'],
})
export class ObjetivosPage implements OnInit {

  constructor(private router: Router) { }
  
  _home(){
    this.router.navigate(['/home'])
  }

  _objetivo1(){
    this.router.navigate(['/objetivo1'])
  }

  ngOnInit() {
  }

}
