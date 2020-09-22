import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { SharedModule } from '../shared/shared.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FlexLayoutModule} from '@angular/flex-layout';
import { AppRoutingModule, routingComponents } from '../app/app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { ContentComponent } from '../app/components/content/content.component';
import { AboutUsComponent } from '../app/components/about-us/about-us.component'
import { BoardComponent } from '../app/components/board/board.component';
import { FacultyComponent } from '../app/components/faculty/faculty.component';
import { GuestFacultyComponent } from '../app/components/guest-faculty/guest-faculty.component'
import { GuestPerformersComponent } from '../app/components/guest-performers/guest-performers.component';
import { StudentsComponent } from '../app/components/students/students.component';
import { MembershipComponent } from '../app/components/membership/membership.component';
import { EducationComponent } from '../app/components/education/education.component';
import { InPersonClassesComponent } from '../app/components/in-person-classes/in-person-classes.component';
import { OnlineClassesComponent } from '../app/components/online-classes/online-classes.component';
import { WorkshopComponent } from '../app/components/workshop/workshop.component';
import { PastPerformancesComponent } from '../app/components/past-performances/past-performances.component';
import { UpcomingPerformancesComponent } from '../app/components/upcoming-performances/upcoming-performances.component';
import { FundraisersComponent } from '../app/components/fundraisers/fundraisers.component';
import { PhotosComponent } from '../app/components/photos/photos.component';
import { VideosComponent } from '../app/components/videos/videos.component';
import { SupportUsComponent } from '../app/components/support-us/support-us.component';
import { StoreComponent } from '../app/components/store/store.component';
import { ProposalsComponent } from '../app/components/proposals/proposals.component';
import { OnlinePaymentComponent } from '../app/components/online-payment/online-payment.component';
import { ContactUsComponent } from '../app/components/contact-us/contact-us.component';

@NgModule({
  declarations: [AppComponent, HeaderComponent, FooterComponent, routingComponents, ContentComponent, EducationComponent, AboutUsComponent, BoardComponent, FacultyComponent, GuestFacultyComponent, GuestPerformersComponent, StudentsComponent, MembershipComponent, InPersonClassesComponent, OnlineClassesComponent, WorkshopComponent, PastPerformancesComponent, UpcomingPerformancesComponent, FundraisersComponent, PhotosComponent, VideosComponent, SupportUsComponent, ProposalsComponent, StoreComponent, OnlinePaymentComponent, ContactUsComponent],
  imports: [
    AppRoutingModule,
    BrowserModule,
    BrowserAnimationsModule,
    SharedModule,
    FlexLayoutModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
