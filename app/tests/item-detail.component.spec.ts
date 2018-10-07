import { AppComponent } from "~/app.component";
import { nsTestBedBeforeEach, nsTestBedAfterEach, nsTestBedRender } from 'nativescript-angular/testing';
import { ComponentFixture, TestModuleMetadata } from '@angular/core/testing';
import { ItemDetailComponent } from "~/item/item-detail.component";
import { ItemService } from "~/item/item.service";
import { ActivatedRoute } from "@angular/router";
import { NativeScriptModule } from "nativescript-angular/nativescript.module";
import { NO_ERRORS_SCHEMA } from "@angular/core";
import { setUpTestBed } from "~/shared/testing/testBed-setup";
import { FormsModule } from '@angular/forms';
describe('Test ItemDetailComponent:', () => {
    let itemDetailComponent: ItemDetailComponent;
    let moduleDef: TestModuleMetadata = {
        imports: [
            NativeScriptModule,
            FormsModule
        ],
        declarations: [
            ItemDetailComponent
        ],
        providers: [ItemService,
            {
                provide: ActivatedRoute,
                useValue: {
                    snapshot: { params: { id: 1 } }
                }
            },
        ],
        schemas: [NO_ERRORS_SCHEMA]
    };

    setUpTestBed(moduleDef);

    beforeEach((done) => {
        nsTestBedRender(ItemDetailComponent)
            .then((fixture: ComponentFixture<ItemDetailComponent>) => {
                itemDetailComponent = fixture.componentRef.instance;
                done();
            });
    });

    it('should initialise itemDetailComponent', () => {
        expect(itemDetailComponent).toBeDefined();
    });

    it('should call ngonit', () => {
        itemDetailComponent.ngOnInit();
        expect(itemDetailComponent.item).toBeDefined();
    });
});