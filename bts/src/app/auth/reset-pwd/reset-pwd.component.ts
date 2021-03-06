import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-reset-pwd',
  templateUrl: './reset-pwd.component.html',
  styleUrls: ['./reset-pwd.component.css']
})
export class ResetPwdComponent implements OnInit {

  email ="";
  pwdStatus=true;
  msg=false;
  constructor(private authService:AuthService, private router:Router) { }

  ngOnInit() {
  }

  resetPwd(){
    console.log("reset pwd")
    this.authService.resetPwd(this.email)
    .subscribe(data => {
      if (data == true) {
        console.log("success")
        this.pwdStatus=false;
        this.msg=true;
        this.router.navigateByUrl("/login");
      } else {
        this.router.navigateByUrl("/resetPwd");
      }
    });
  }

}
