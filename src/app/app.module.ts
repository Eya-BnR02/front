import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule, HttpClient , provideHttpClient} from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavComponent } from './nav/nav.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { SingupComponent } from './singup/singup.component';
import { OulaTr1Component } from './oula_tr1/oula-tr1.component';
import { AlfadhaeOulaP1Component } from './alfadhae-oula-p1/alfadhae-oula-p1.component';
import { AlzamanOulaComponent } from './alzaman-oula/alzaman-oula.component';
import { AlmaddaOulaComponent } from './almadda-oula/almadda-oula.component';
import { AltaqaOulaComponent } from './altaqa-oula/altaqa-oula.component';
import { Nav2Component } from './nav2/nav2.component';
import { DetailComponent } from './detail/detail.component';
import { Detail2Component } from './detail2/detail2.component';
import { OulaTr2Component } from './oula-tr2/oula-tr2.component';
import { AlmohitOulaComponent } from './almohit-oula/almohit-oula.component';
import { AljsmOulaComponent } from './aljsm-oula/aljsm-oula.component';
import { AltaghdhiaOulaComponent } from './altaghdhia-oula/altaghdhia-oula.component';
import { OulaTr3Component } from './oula-tr3/oula-tr3.component';
import { AlnmwOulaComponent } from './alnmw-oula/alnmw-oula.component';
import { AltanafsOulaComponent } from './altanafs-oula/altanafs-oula.component';
import { AltanaqlOulaComponent } from './altanaql-oula/altanaql-oula.component';
import { ThenyaTr1Component } from './thenya-tr1/thenya-tr1.component';
import { ThenyaTr2Component } from './thenya-tr2/thenya-tr2.component';
import { ThenyaTr3Component } from './thenya-tr3/thenya-tr3.component';
import { Alwasat2Component } from './alwasat-2/alwasat-2.component';
import { Alfadhae2Component } from './alfadhae-2/alfadhae-2.component';
import { Aljsm2Component } from './aljsm-2/aljsm-2.component';
import { Altaghdhia2Component } from './altaghdhia-2/altaghdhia-2.component';
import { Altanaql2Component } from './altanaql-2/altanaql-2.component';
import { Alzaman2Component } from './alzaman-2/alzaman-2.component';
import { Almadda2Component } from './almadda-2/almadda-2.component';
import { Alqowa2Component } from './alqowa-2/alqowa-2.component';
import { Altanafs2Component } from './altanafs-2/altanafs-2.component';
import { ThelthaTr1Component } from './theltha-tr1/theltha-tr1.component';
import { ThelthaTr2Component } from './theltha-tr2/theltha-tr2.component';
import { ThelthaTr3Component } from './theltha-tr3/theltha-tr3.component';
import { Alzaman3Component } from './alzaman-3/alzaman-3.component';
import { Altanaql3Component } from './altanaql-3/altanaql-3.component';
import { Altaghdhia3Component } from './altaghdhia-3/altaghdhia-3.component';
import { Altakather3Component } from './altakather-3/altakather-3.component';
import { Altanafs3Component } from './altanafs-3/altanafs-3.component';
import { Altaqa3Component } from './altaqa-3/altaqa-3.component';
import { Almadda3Component } from './almadda-3/almadda-3.component';
import { AlwiqayaAmradh3Component } from './alwiqaya-amradh-3/alwiqaya-amradh-3.component';
import { Rab3aTr1Component } from './rab3a-tr1/rab3a-tr1.component';
import { Rab3aTr2Component } from './rab3a-tr2/rab3a-tr2.component';
import { Rab3aTr3Component } from './rab3a-tr3/rab3a-tr3.component';
import { Alzaman4Component } from './alzaman-4/alzaman-4.component';
import { AlhawasAlwiqaya4Component } from './alhawas-alwiqaya-4/alhawas-alwiqaya-4.component';
import { Altanaql4Component } from './altanaql-4/altanaql-4.component';
import { Almadda4Component } from './almadda-4/almadda-4.component';
import { Altaghdhia4Component } from './altaghdhia-4/altaghdhia-4.component';
import { AltakatherAlnmwComponent } from './altakather-alnmw/altakather-alnmw.component';
import { Altanafs4Component } from './altanafs-4/altanafs-4.component';
import { Altaqa4Component } from './altaqa-4/altaqa-4.component';
import { KhamsaTr1Component } from './khamsa-tr1/khamsa-tr1.component';
import { KhamsaTr2Component } from './khamsa-tr2/khamsa-tr2.component';
import { KhamsaTr3Component } from './khamsa-tr3/khamsa-tr3.component';
import { Alkahrabae5Component } from './alkahrabae-5/alkahrabae-5.component';
import { Aldhawe5Component } from './aldhawe-5/aldhawe-5.component';
import { Alwasat5Component } from './alwasat-5/alwasat-5.component';
import { JsmAl2ensen5Component } from './jsm-al2ensen-5/jsm-al2ensen-5.component';
import { SedsaTr1Component } from './sedsa-tr1/sedsa-tr1.component';
import { SedsaTr2Component } from './sedsa-tr2/sedsa-tr2.component';
import { SedsaTr3Component } from './sedsa-tr3/sedsa-tr3.component';
import { Al3aynAldhawe6Component } from './al3ayn-aldhawe-6/al3ayn-aldhawe-6.component';
import { Alhawe2Altanafs6Component } from './alhawe2-altanafs-6/alhawe2-altanafs-6.component';
import { AltakatherZahriAlwassatLbi2i6Component } from './altakather-zahri-alwassat-lbi2i-6/altakather-zahri-alwassat-lbi2i-6.component';
import { Altaqa6Component } from './altaqa-6/altaqa-6.component';
import { JihezDawaranAmradhTaghdhia6Component } from './jihez-dawaran-amradh-taghdhia-6/jihez-dawaran-amradh-taghdhia-6.component';
import { NavadComponent } from './navad/navad.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { AllTComponent } from './all-t/all-t.component';
import { AddTComponent } from './add-t/add-t.component';
import { AllpComponent } from './allp/allp.component';
import { AddpComponent } from './addp/addp.component';
import { EditTComponent } from './edit-t/edit-t.component';
import { SignupService } from './Services/singup.service';
import { ChatroomComponent } from './chatroom/chatroom.component';
import { ChatbotComponent } from './chatbot/chatbot.component';
import { ParentComponent } from './parent/parent.component';
import { AuthService } from './Services/auth.service';
import { LogoutService } from './Services/logout.service';
import { EleveService } from './Services/eleve.service';
import { ChatService } from './Services/chat-service.service';
import { AuthGuardService } from './Services/auth-guard.service';
import { NavbarComponent } from './navbar/navbar.component';
import { ChildProgressComponent } from './child-progress/child-progress.component';
import { OulaComponent } from './oula/oula.component';
import { ProgressionComponent } from './progression/progression.component';
import { ReclamationComponent } from './reclamation/reclamation.component';

@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    HomeComponent,
    LoginComponent,
    SingupComponent,
    OulaTr1Component,
   AlfadhaeOulaP1Component,
   AlzamanOulaComponent,
 AlmaddaOulaComponent,
 AltaqaOulaComponent,
 Nav2Component,
 DetailComponent,
 Detail2Component,
 OulaTr2Component,
 AlmohitOulaComponent,
 AljsmOulaComponent,
 AltaghdhiaOulaComponent,
 OulaTr3Component,
 AlnmwOulaComponent,
 AltanafsOulaComponent,
 AltanaqlOulaComponent,
 ThenyaTr1Component,
 ThenyaTr2Component,
 ThenyaTr3Component,
 Alwasat2Component,
 Alfadhae2Component,
 Aljsm2Component,
 Altaghdhia2Component,
 Altanaql2Component,
 Alzaman2Component,
 Almadda2Component,
 Alqowa2Component,
 Altanafs2Component,
 ThelthaTr1Component,
 ThelthaTr2Component,
 ThelthaTr3Component,
 Alzaman3Component,
 Altanaql3Component,
 Altaghdhia3Component,
 Altakather3Component,
 Altanafs3Component,
 Altaqa3Component,
 Almadda3Component,
 AlwiqayaAmradh3Component,
 Rab3aTr1Component,
 Rab3aTr2Component,
 Rab3aTr3Component,
 Alzaman4Component,
 AlhawasAlwiqaya4Component,
 Altanaql4Component,
 Almadda4Component,
 Altaghdhia4Component,
 AltakatherAlnmwComponent,
 Altanafs4Component,
 Altaqa4Component,
 KhamsaTr1Component,
 KhamsaTr2Component,
 KhamsaTr3Component,
 Alkahrabae5Component,
 Aldhawe5Component,
 Alwasat5Component,
 JsmAl2ensen5Component,
 SedsaTr1Component,
 SedsaTr2Component,
 SedsaTr3Component,
 Al3aynAldhawe6Component,
 Alhawe2Altanafs6Component,
 AltakatherZahriAlwassatLbi2i6Component,
 Altaqa6Component,
 JihezDawaranAmradhTaghdhia6Component,
 NavadComponent,
 SidebarComponent,
    DashboardComponent,
    AllTComponent,
    AddTComponent,
    AllpComponent,
    AddpComponent,
    EditTComponent,
    ChatroomComponent,
    NavComponent,
    NavadComponent,
    ChatbotComponent,
    ParentComponent,
    NavbarComponent,
    ChildProgressComponent,
    OulaComponent,
    ProgressionComponent,
    ReclamationComponent,
  
  ],


  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [
    provideHttpClient(),
    SignupService,
    AuthService,
    LogoutService,
    ChatService,
    AuthGuardService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
