import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-objetivo1',
  templateUrl: './objetivo1.page.html',
  styleUrls: ['./objetivo1.page.scss'],
})
export class Objetivo1Page implements OnInit {

  constructor(private router: Router) { }

  _objetivos(){
    this.router.navigate(['/objetivos'])
  }

  ngOnInit() {
  }

}
