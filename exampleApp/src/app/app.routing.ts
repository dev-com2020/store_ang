import { Routes, RouterModule } from "@angular/router";
import { CategoryCountComponent } from "./core/categoryCount.component";
import { FormComponent } from "./core/form.component";
import { NotFoundComponent } from "./core/notFound.component";
import { ProductCountComponent } from "./core/productCount.component";
import { TableComponent } from "./core/table.component";
import { ModelResolver } from "./model/model.resolver";
import { TermsGuard } from "./terms.guard";



const childRoutes: Routes = [
    {
        canActivateChild: [TermsGuard],
        path: "",
        children: [{ path: "products", component: ProductCountComponent },
        { path: "categories", component: CategoryCountComponent },
        { path: "", component: ProductCountComponent }],
        resolve: { model: ModelResolver }
    }
];

const routes: Routes = [

    { path: "form/:mode", component: FormComponent, resolve: { model: ModelResolver },
      canActivate: [TermsGuard] 
    },
    { path: "form/:mode/:id", component: FormComponent, resolve: { model: ModelResolver } },
    // { path: "nie", redirectTo: "form/create", pathMatch: "prefix" },
    { path: "table", component: TableComponent, children: childRoutes },
    { path: "table/:category", component: TableComponent, children: childRoutes },
    // { path: "table", component: TableComponent },
    { path: "", redirectTo: "/table", pathMatch: "full" },
    { path: "**", component: NotFoundComponent }
]

export const routing = RouterModule.forRoot(routes);