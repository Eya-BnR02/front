import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { SingupComponent } from './singup/singup.component';
import { OulaTr1Component } from './oula_tr1/oula-tr1.component';
import { AlfadhaeOulaP1Component } from './alfadhae-oula-p1/alfadhae-oula-p1.component';
import { AlzamanOulaComponent } from './alzaman-oula/alzaman-oula.component';
import { AlmaddaOulaComponent } from './almadda-oula/almadda-oula.component';
import { AltaqaOulaComponent } from './altaqa-oula/altaqa-oula.component';
import { DetailComponent } from './detail/detail.component';
import { Detail2Component } from './detail2/detail2.component';
import { AlmohitOulaComponent } from './almohit-oula/almohit-oula.component';
import { AljsmOulaComponent } from './aljsm-oula/aljsm-oula.component';
import { AltaghdhiaOulaComponent } from './altaghdhia-oula/altaghdhia-oula.component';
import { OulaTr2Component } from './oula-tr2/oula-tr2.component';
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
import { Altanafs2Component } from './altanafs-2/altanafs-2.component';
import { Alqowa2Component } from './alqowa-2/alqowa-2.component';
import { Almadda2Component } from './almadda-2/almadda-2.component';
import { ThelthaTr1Component } from './theltha-tr1/theltha-tr1.component';
import { ThelthaTr2Component } from './theltha-tr2/theltha-tr2.component';
import { ThelthaTr3Component } from './theltha-tr3/theltha-tr3.component';
import { Altanaql3Component } from './altanaql-3/altanaql-3.component';
import { Alzaman3Component } from './alzaman-3/alzaman-3.component';
import { Altaghdhia3Component } from './altaghdhia-3/altaghdhia-3.component';
import { Altakather3Component } from './altakather-3/altakather-3.component';
import { Altanafs3Component } from './altanafs-3/altanafs-3.component';
import { Altaqa3Component } from './altaqa-3/altaqa-3.component';
import { Almadda3Component } from './almadda-3/almadda-3.component';
import { AlwiqayaAmradh3Component } from './alwiqaya-amradh-3/alwiqaya-amradh-3.component';
import { Rab3aTr1Component } from './rab3a-tr1/rab3a-tr1.component';
import { Rab3aTr2Component } from './rab3a-tr2/rab3a-tr2.component';
import { Rab3aTr3Component } from './rab3a-tr3/rab3a-tr3.component';
import { AlhawasAlwiqaya4Component } from './alhawas-alwiqaya-4/alhawas-alwiqaya-4.component';
import { Altaghdhia4Component } from './altaghdhia-4/altaghdhia-4.component';
import { Altanafs4Component } from './altanafs-4/altanafs-4.component';
import { Altaqa4Component } from './altaqa-4/altaqa-4.component';
import { Almadda4Component } from './almadda-4/almadda-4.component';
import { Altanaql4Component } from './altanaql-4/altanaql-4.component';
import { KhamsaTr1Component } from './khamsa-tr1/khamsa-tr1.component';
import { KhamsaTr2Component } from './khamsa-tr2/khamsa-tr2.component';
import { KhamsaTr3Component } from './khamsa-tr3/khamsa-tr3.component';
import { JsmAl2ensen5Component } from './jsm-al2ensen-5/jsm-al2ensen-5.component';
import { Alwasat5Component } from './alwasat-5/alwasat-5.component';
import { Aldhawe5Component } from './aldhawe-5/aldhawe-5.component';
import { Alkahrabae5Component } from './alkahrabae-5/alkahrabae-5.component';
import { SedsaTr1Component } from './sedsa-tr1/sedsa-tr1.component';
import { SedsaTr2Component } from './sedsa-tr2/sedsa-tr2.component';
import { SedsaTr3Component } from './sedsa-tr3/sedsa-tr3.component';
import { JihezDawaranAmradhTaghdhia6Component } from './jihez-dawaran-amradh-taghdhia-6/jihez-dawaran-amradh-taghdhia-6.component';
import { Altaqa6Component } from './altaqa-6/altaqa-6.component';
import { AltakatherZahriAlwassatLbi2i6Component } from './altakather-zahri-alwassat-lbi2i-6/altakather-zahri-alwassat-lbi2i-6.component';
import { Alhawe2Altanafs6Component } from './alhawe2-altanafs-6/alhawe2-altanafs-6.component';
import { Al3aynAldhawe6Component } from './al3ayn-aldhawe-6/al3ayn-aldhawe-6.component';
import { NavadComponent } from './navad/navad.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { AllTComponent } from './all-t/all-t.component';
import { AddTComponent } from './add-t/add-t.component';
import { AllpComponent } from './allp/allp.component';
import { AddpComponent } from './addp/addp.component';
import { ChatroomComponent } from './chatroom/chatroom.component';
import { NavComponent } from './nav/nav.component';
import { Nav2Component } from './nav2/nav2.component';
import { ChatbotComponent } from './chatbot/chatbot.component';

import { ParentComponent } from './parent/parent.component';

import { Alzaman4Component } from './alzaman-4/alzaman-4.component';
import { AltakatherAlnmwComponent } from './altakather-alnmw/altakather-alnmw.component';
import { ProgressionComponent } from './progression/progression.component';
import { ReclamationComponent } from './reclamation/reclamation.component';





const routes: Routes = [
{path: "nav" , component : NavComponent},
{path : "home" , component : HomeComponent },
{path : "", component : HomeComponent},
{path : "login", component : LoginComponent},
{path : "singup", component : SingupComponent},
{path : "oula_tr1", component : OulaTr1Component},
{path : "alzaman-oula", component : AlzamanOulaComponent },
{path : "alfadhae-oula-p1", component : AlfadhaeOulaP1Component},
{path : "almadda-oula", component : AlmaddaOulaComponent},
{path : "altaqa-oula", component : AltaqaOulaComponent},
{path : "nav2", component : Nav2Component},
{path : "detail", component : DetailComponent},
{path : "detail2", component : Detail2Component},
{path : "almohit-oula", component : AlmohitOulaComponent},
{path : "aljsm-oula", component : AljsmOulaComponent},
{path : "altaghdhia-oula", component : AltaghdhiaOulaComponent},
{path : "oula-tr2", component : OulaTr2Component},
{path : "oula-tr3", component : OulaTr3Component},
{path : "alnmw-oula", component : AlnmwOulaComponent},
{path : "altanafs-oula", component : AltanafsOulaComponent},
{path : "altanaql-oula", component : AltanaqlOulaComponent},
{path : "thenya-tr1", component : ThenyaTr1Component},
{path : "thenya-tr2", component : ThenyaTr2Component},
{path : "thenya-tr3", component : ThenyaTr3Component},
{path : "alwasat-2", component : Alwasat2Component},
{path : "alfadhae-2", component : Alfadhae2Component},
{path : "aljsm-2", component : Aljsm2Component},
{path : "altaghdhia-2", component : Altaghdhia2Component},
{path : "altanaql-2", component : Altanaql2Component},
{path : "alzaman-2", component : Alzaman2Component},
{path : "altanafs-2", component : Altanafs2Component},
{path : "alqowa-2", component : Alqowa2Component},
{path : "almadda-2", component : Almadda2Component},
{path : "theltha-tr1", component : ThelthaTr1Component},
{path : "theltha-tr2", component : ThelthaTr2Component},
{path : "theltha-tr3", component : ThelthaTr3Component},
{path : "altanaql-3", component : Altanaql3Component},
{path : "alzaman-3", component : Alzaman3Component},
{path : "altaghdhia-3", component : Altaghdhia3Component},
{path : "altakather-3", component : Altakather3Component},
{path : "altanafs-3", component : Altanafs3Component},
{path : "altaqa-3", component : Altaqa3Component},
{path : "almadda-3", component : Almadda3Component},
{path : "alwiqaya-amradh-3", component : AlwiqayaAmradh3Component},
{path : "rab3a-tr1", component : Rab3aTr1Component},
{path : "rab3a-tr2", component : Rab3aTr2Component},
{path : "rab3a-tr3", component : Rab3aTr3Component},
{path : "alzaman-4", component : Alzaman4Component},
{path : "altakather-alnmw", component : AltakatherAlnmwComponent},
{path : "alhawas-alwiqaya-4", component : AlhawasAlwiqaya4Component},
{path : "altaghdhia-4", component : Altaghdhia4Component},
{path : "altanaql-4", component : Altanaql4Component},
{path : "altanafs-4", component : Altanafs4Component},
{path : "altaqa-4", component : Altaqa4Component},
{path : "almadda-4", component : Almadda4Component},
{path : "khamsa-tr1", component : KhamsaTr1Component},
{path : "khamsa-tr2", component : KhamsaTr2Component},
{path : "khamsa-tr3", component : KhamsaTr3Component},
{path : "jsm-al2ensen-5", component : JsmAl2ensen5Component},
{path : "alwasat-5", component : Alwasat5Component},
{path : "aldhawe-5", component : Aldhawe5Component},
{path : "alkahrabae-5", component : Alkahrabae5Component},
{path : "sedsa-tr1", component : SedsaTr1Component},
{path : "sedsa-tr2", component : SedsaTr2Component},
{path : "sedsa-tr3", component : SedsaTr3Component},
{path : "jihez-dawaran-amradh-taghdhia-6", component : JihezDawaranAmradhTaghdhia6Component},
{path : "altaqa-6", component : Altaqa6Component},
{path : "altakather-zahri-alwasat-lbi2i-6", component : AltakatherZahriAlwassatLbi2i6Component},
{path : "alhawe2-altanafs-6", component : Alhawe2Altanafs6Component},
{path : "al3ayn-aldhawe-6", component : Al3aynAldhawe6Component},
{path : "navad", component : NavadComponent},
{path : "dash", component : DashboardComponent},
{path : "allt", component : AllTComponent},
{path : "addt", component : AddTComponent},
{path : "allp", component : AllpComponent},
{path : "addp", component : AddpComponent},
{path : "chat", component :ChatroomComponent},
{path : "chatbot", component : ChatbotComponent},
{path : "parent", component : ParentComponent},
{path : "progression",component : ProgressionComponent},
{path : "req", component : ReclamationComponent}
];


 
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
