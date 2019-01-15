import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, RouterModule, Routes, Router } from '@angular/router';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.scss']
})
export class SigninComponent implements OnInit {
  returnUrl: string;

  constructor(private route: Router) { }

  ngOnInit() {
  }
  onSubmit() {
    // this.returnUrl = this.route.snapshot.queryParams['returnUrl'] || '/register';
    this.route.navigate(['/register']);
  }
}
