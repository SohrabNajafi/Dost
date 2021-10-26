import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { AccountService } from '../_services/account.service';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  model: any = {}
  registerMode = false;
  constructor(
    public accountService: AccountService,
    private router: Router,
    private toastr: ToastrService,
  ) { }

  ngOnInit(): void {
  }

  login() {
    debugger;
    if (this.model.username != null && this.model.username != undefined &&
      this.model.password != null && this.model.password != undefined) {
      this.accountService.login(this.model).subscribe(response => {
        this.router.navigateByUrl('/members');
        // }, error => {
        //   console.log(error);
        //   this.toastr.error(error.error);
      })
    } else {
      this.toastr.error(" . نام کابری یا رمز عبور خود را وارد کنید ");
    }
  }

  registerToggle() {
    this.registerMode = !this.registerMode;
  }

  cancelRegisterMode(event: boolean) {
    this.registerMode = event;
  }

}