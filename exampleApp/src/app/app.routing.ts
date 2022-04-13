import { Routes, RouterModule } from "@angular/router";
import { CategoryCountComponent } from "./core/categoryCount.component";
import { FormComponent } from "./core/form.component";
import { NotFoundComponent } from "./core/notFound.component";
import { ProductCountComponent } from "./core/productCount.component";
import { TableComponent } from "./core/table.component";
import { UnsavedGuard } from "./core/unsaved.guard";
import { LoadGuard } from "./load.guard";
import { ModelResolver } from "./model/model.resolver";
import { TermsGuard } from "./terms.guard";



// const childRoutes: Routes = [
//     {
//         canActivateChild: [TermsGuard],
//         path: "",
//         children: [{ path: "products", component: ProductCountComponent },
//         { path: "categories", component: CategoryCountComponent },
//         { path: "", component: ProductCountComponent }],
//         resolve: { model: ModelResolver }
//     }
// ];

const routes: Routes = [
    {path: "ondemand",
    loadChildren:() => import("./ondemand/ondemand.module").then(m => m.OndemandModule),
    // canLoad: [LoadGuard]
    },

    { path: "form/:mode", component: FormComponent, canActivate: [TermsGuard] 
    },
    { path: "form/:mode/:id", component: FormComponent, canDeactivate: [UnsavedGuard] 
    },
    // { path: "nie", redirectTo: "form/create", pathMatch: "prefix" },
    { path: "table", component: TableComponent},
    { path: "table/:category", component: TableComponent},
    // { path: "table", component: TableComponent },
    { path: "", redirectTo: "/table", pathMatch: "full" },
    { path: "**", component: NotFoundComponent }
]

export const routing = RouterModule.forRoot(routes);