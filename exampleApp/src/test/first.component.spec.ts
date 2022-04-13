import { DebugElement } from "@angular/core";
import { ComponentFixture, TestBed, async } from "@angular/core/testing"
import { Product } from "src/app/model/product.model";
import { Model } from "src/app/model/repository.model";
import { FirstComponent } from "src/app/ondemand/first.component"
import { By } from "@angular/platform-browser";

describe("FirstComponent",()=> {
    let fixture: ComponentFixture<FirstComponent>;
    let component: FirstComponent;
    let debugElement: DebugElement;
    let spanElement: HTMLSpanElement;
    let divElement: HTMLDivElement;

    let mockRepository = {
        getProducts: function () {
            return [
                new Product(1, "test1", "Piłka nożna", 100),
                new Product(2, "test2", "Szachy", 100),
                new Product(3, "test3", "Piłka nożna", 100),
            ]
        }
    }

    beforeEach(async() =>{
        TestBed.configureTestingModule({
            declarations: [FirstComponent],
            providers:[
                {provide: Model, useValue: mockRepository}
            ]
        });
        TestBed.compileComponents().then(() => {
        fixture = TestBed.createComponent(FirstComponent);
        component = fixture.componentInstance;
        debugElement = fixture.debugElement;
        spanElement = debugElement.query(By.css("span")).nativeElement;
        divElement = debugElement.children[0].nativeElement;
        });
    });

    it("Obsluga zdarzeń myszy",()=>{
        expect(component.highlighted).toBeFalsy();
        expect(divElement.classList.contains("bg-success")).toBeFalsy();
        debugElement.triggerEventHandler("mouseenter",new Event("mouseenter"));
        fixture.detectChanges();
    });
    });

    // it("Sprawdzanie, czy komponent jest zdefiniowany", () => {
    //     expect(component).toBeDefined()
    // it("Filtrowanie kategorii",()=>{

    //     component.category = "Szachy"
    //     fixture.detectChanges();
    //     expect(component.getProducts().length).toBe(1);
    //     expect(spanElement.textContent).toContain("1");

    //     component.category = "Piłka nożna"
    //     fixture.detectChanges();
    //     expect(component.getProducts().length).toBe(2);
    //     expect(spanElement.textContent).toContain("2");
        
    //     component.category = "Kursy"
    //     fixture.detectChanges();
    //     expect(component.getProducts().length).toBe(0);
    //     expect(spanElement.textContent).toContain("0");

    //     });
    });
