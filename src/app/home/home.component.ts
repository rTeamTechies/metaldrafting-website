import { Component, OnInit, HostListener, Inject ,ElementRef  } from '@angular/core';  
import { trigger, state, transition, style, animate } from '@angular/animations'; 
import { DOCUMENT, ViewportScroller } from '@angular/common';
import { Router, ActivatedRoute } from '@angular/router';
import { HttpClient , HttpParams } from '@angular/common/http';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import "animate.css";
import { MatDialog, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  animations:[ 
    trigger('fade',
    [ 
      state('void', style(  { opacity : 0})),
      transition(':enter',[ animate(300)]),
      transition(':leave',[ animate(500)]),
    ]
)]
})
export class HomeComponent implements OnInit {

  constructor(@Inject(DOCUMENT) document: any,  
  public router: Router,
  private http: HttpClient,
  private formBuilder: FormBuilder,
  private route: ActivatedRoute,
  public dialog: MatDialog,
  private vps: ViewportScroller,
  private el: ElementRef) { }
  public currentYear = new Date().getFullYear();
  public currentPage: String;

  
  public imageObject: Array<object> = [
    {
      image: 'assets/images/mdImages/home1.jpg',
      thumbImage: 'assets/images/mdImages/home1.jpg'
    },
    {
      image: 'assets/images/mdImages/home2.jpeg',
      thumbImage: 'assets/images/mdImages/home2.jpeg'
    }];

    public counter = 1;

  ngOnInit() {
    let self = this;
    setInterval(this.opensnack, 3000, self); 
    this.route.params.subscribe(params => {
      this.currentPage = params.page;
    });
  }

  opensnack(self: any) {
    if(self.counter==5){
      self.counter=1;
    }else{
      self.counter = self.counter+1;
    }
  }

  @HostListener('window:scroll', ['$event'])
  onWindowScroll(e: any) {
    if(/iPhone|iPad|iPod|Android/i.test(navigator.userAgent)){ //For Mobile Devices
      if (window.pageYOffset < 400 ){
        this.currentPage = "home";
      }else if (window.pageYOffset > 401 && window.pageYOffset < 2400){
        this.currentPage = "ourjourney";
      }else if(window.pageYOffset > 2401 && window.pageYOffset < 4700){
        this.currentPage = "menu";
      }else if(window.pageYOffset > 4701 && window.pageYOffset < 5600){
        this.currentPage = "gallery";
      }else if(window.pageYOffset > 5601 && window.pageYOffset < 6000){
        this.currentPage = "homedelivery";
      }else if(window.pageYOffset > 6001 && window.pageYOffset < 8100){
        this.currentPage = "eventCatering";
      }else if(window.pageYOffset > 8101 && window.pageYOffset < 8800){
        this.currentPage = "findus";
      }else if(window.pageYOffset > 8801){
        this.currentPage = "reservation";
      }
    }else{ //For Desktops
      if (window.pageYOffset < 400 ){ 
        this.currentPage = "home";
      }else if (window.pageYOffset > 401 && window.pageYOffset < 1600){
        this.currentPage = "ourjourney";
      }else if(window.pageYOffset > 1601 && window.pageYOffset < 3100){
        this.currentPage = "menu";
      }else if(window.pageYOffset > 3101 && window.pageYOffset < 3600){
        this.currentPage = "gallery";
      }else if(window.pageYOffset > 3601 && window.pageYOffset < 4200){
        this.currentPage = "homedelivery";
      }else if(window.pageYOffset > 4201 && window.pageYOffset < 5400){
        this.currentPage = "eventCatering";
      }else if(window.pageYOffset > 5401 && window.pageYOffset < 6100){
        this.currentPage = "findus";
      }else if(window.pageYOffset > 6101){
        this.currentPage = "reservation";
      }
    } 
    console.log("window.pageYOffset-->"+window.pageYOffset) 
    if (window.pageYOffset > 200) {
      let element = document.getElementById('menu-bar');
      element.classList.add('sticky');
    } else {
    let element = document.getElementById('menu-bar');
      element.classList.remove('sticky'); 
    }
  }

  scroll(el: any) {
    if (window.location.pathname.indexOf(el) < 0) {
      this.router.navigate([el]);
    }
    var top = document.getElementById(el).offsetTop + document.getElementById("navbar").offsetHeight - 175;
    window.scrollTo(0, top);
  }
  

}
