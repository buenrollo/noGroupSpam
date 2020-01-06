import { NgModule, InjectionToken } from "@angular/core";
import { RouterModule, Routes, ActivatedRouteSnapshot } from "@angular/router";
import { CreateGenericEventComponent } from "./create-event/create-generic-event/create-generic-event.component";
import { GenericEventsComponent } from "./show-events/generic-events/generic-events.component";
import { GenericEventComponent } from "./show-events/generic-events/generic-event/generic-event.component";

/*
const externalUrlProvider = new InjectionToken('externalUrlRedirectResolver');
*/

const routes: Routes = [
  { path: "", redirectTo: "crearevento/generico", pathMatch: "full" },
  { path: "index", redirectTo: "crearevento/generico", pathMatch: "full" },
  { path: "eventos", component: GenericEventsComponent },
  { path: "eventos/:idDay/:id", component: GenericEventComponent },
  { path: "crearevento/generico", component: CreateGenericEventComponent },
  { path: "editarevento/generico/:event", component: CreateGenericEventComponent }
  /*
  { path: 'externalRedirect',
    resolve: {
      url: externalUrlProvider,
    },
    // We need a component here because we cannot define the route otherwise
    component: notFound,
  }
  */
];

@NgModule({
  /*
  providers: [
    {
        provide: externalUrlProvider,
        useValue: (route: ActivatedRouteSnapshot) => {
            const externalUrl = route.paramMap.get('externalUrl');
            window.open(externalUrl, '_self');
        },
    },
  ],
  */
  imports: [RouterModule.forRoot(routes, { useHash: true })],
  exports: [RouterModule]
})
export class AppRoutingModule {}
