import { AppComponent } from "~/app.component";
import { nsTestBedBeforeEach, nsTestBedAfterEach, nsTestBedRender } from 'nativescript-angular/testing';
import { ComponentFixture, TestModuleMetadata } from '@angular/core/testing';
import { NativeScriptModule } from "nativescript-angular/nativescript.module";
import { NO_ERRORS_SCHEMA } from "@angular/core";
import { setUpTestBed } from "~/shared/testing/testBed-setup";
import { FormsModule } from '@angular/forms';
describe('Test AppComponent:', () => {
    let appComponent: AppComponent;
    let moduleDef: TestModuleMetadata = {
        imports: [
            NativeScriptModule,
            FormsModule
        ],
        declarations: [
            AppComponent
        ],
        providers: [],
        schemas: [NO_ERRORS_SCHEMA]
    };

    setUpTestBed(moduleDef);

    beforeEach((done) => {
        nsTestBedRender(AppComponent)
            .then((fixture: ComponentFixture<AppComponent>) => {
                appComponent = fixture.componentRef.instance;
                done();
            });
    });

    it('should initialise AppComponent', () => {
        expect(appComponent).toBeDefined();
    });
});