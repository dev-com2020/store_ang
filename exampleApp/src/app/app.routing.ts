import { Routes, RouterModule } from "@angular/router";
import { CategoryCountComponent } from "./core/categoryCount.component";
import { FormComponent } from "./core/form.component";
import { NotFoundComponent } from "./core/notFound.component";
import { ProductCountComponent } from "./core/productCount.component";
import { TableComponent } from "./core/table.component";



const childRoutes: Routes = [
    { path: "products", component: ProductCountComponent },
    { path: "categories", component: CategoryCountComponent },
    { path: "", component: ProductCountComponent } 
]

const routes: Routes = [

    { path: "form/:mode", component: FormComponent },
    { path: "form/:mode/:id", component: FormComponent },
    { path: "nie", redirectTo: "form/create", pathMatch: "prefix" },
    { path: "table", component: TableComponent, children: childRoutes },
    { path: "table/:category", component: TableComponent, children: childRoutes },
    { path: "table", component: TableComponent },
    { path: "", redirectTo: "/table", pathMatch: "full" },
    { path: "**", component: NotFoundComponent }
]

export const routing = RouterModule.forRoot(routes);