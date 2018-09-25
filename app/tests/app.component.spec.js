"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var app_component_1 = require("~/app.component");
var testing_1 = require("nativescript-angular/testing");
var nativescript_module_1 = require("nativescript-angular/nativescript.module");
var core_1 = require("@angular/core");
var testBed_setup_1 = require("~/shared/testing/testBed-setup");
var forms_1 = require("@angular/forms");
describe('Test AppComponent:', function () {
    var appComponent;
    var moduleDef = {
        imports: [
            nativescript_module_1.NativeScriptModule,
            forms_1.FormsModule
        ],
        declarations: [
            app_component_1.AppComponent
        ],
        providers: [],
        schemas: [core_1.NO_ERRORS_SCHEMA]
    };
    testBed_setup_1.setUpTestBed(moduleDef);
    beforeEach(function (done) {
        testing_1.nsTestBedRender(app_component_1.AppComponent)
            .then(function (fixture) {
            appComponent = fixture.componentRef.instance;
            done();
        });
    });
    it('should initialise AppComponent', function () {
        expect(appComponent).toBeDefined();
    });
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXBwLmNvbXBvbmVudC5zcGVjLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiYXBwLmNvbXBvbmVudC5zcGVjLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsaURBQStDO0FBQy9DLHdEQUF3RztBQUV4RyxnRkFBOEU7QUFDOUUsc0NBQWlEO0FBQ2pELGdFQUE4RDtBQUM5RCx3Q0FBNkM7QUFDN0MsUUFBUSxDQUFDLG9CQUFvQixFQUFFO0lBQzNCLElBQUksWUFBMEIsQ0FBQztJQUMvQixJQUFJLFNBQVMsR0FBdUI7UUFDaEMsT0FBTyxFQUFFO1lBQ0wsd0NBQWtCO1lBQ2xCLG1CQUFXO1NBQ2Q7UUFDRCxZQUFZLEVBQUU7WUFDViw0QkFBWTtTQUNmO1FBQ0QsU0FBUyxFQUFFLEVBQUU7UUFDYixPQUFPLEVBQUUsQ0FBQyx1QkFBZ0IsQ0FBQztLQUM5QixDQUFDO0lBRUYsNEJBQVksQ0FBQyxTQUFTLENBQUMsQ0FBQztJQUV4QixVQUFVLENBQUMsVUFBQyxJQUFJO1FBQ1oseUJBQWUsQ0FBQyw0QkFBWSxDQUFDO2FBQ3hCLElBQUksQ0FBQyxVQUFDLE9BQXVDO1lBQzFDLFlBQVksR0FBRyxPQUFPLENBQUMsWUFBWSxDQUFDLFFBQVEsQ0FBQztZQUM3QyxJQUFJLEVBQUUsQ0FBQztRQUNYLENBQUMsQ0FBQyxDQUFDO0lBQ1gsQ0FBQyxDQUFDLENBQUM7SUFFSCxFQUFFLENBQUMsZ0NBQWdDLEVBQUU7UUFDakMsTUFBTSxDQUFDLFlBQVksQ0FBQyxDQUFDLFdBQVcsRUFBRSxDQUFDO0lBQ3ZDLENBQUMsQ0FBQyxDQUFDO0FBQ1AsQ0FBQyxDQUFDLENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBBcHBDb21wb25lbnQgfSBmcm9tIFwifi9hcHAuY29tcG9uZW50XCI7XHJcbmltcG9ydCB7IG5zVGVzdEJlZEJlZm9yZUVhY2gsIG5zVGVzdEJlZEFmdGVyRWFjaCwgbnNUZXN0QmVkUmVuZGVyIH0gZnJvbSAnbmF0aXZlc2NyaXB0LWFuZ3VsYXIvdGVzdGluZyc7XHJcbmltcG9ydCB7IENvbXBvbmVudEZpeHR1cmUsIFRlc3RNb2R1bGVNZXRhZGF0YSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUvdGVzdGluZyc7XHJcbmltcG9ydCB7IE5hdGl2ZVNjcmlwdE1vZHVsZSB9IGZyb20gXCJuYXRpdmVzY3JpcHQtYW5ndWxhci9uYXRpdmVzY3JpcHQubW9kdWxlXCI7XHJcbmltcG9ydCB7IE5PX0VSUk9SU19TQ0hFTUEgfSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xyXG5pbXBvcnQgeyBzZXRVcFRlc3RCZWQgfSBmcm9tIFwifi9zaGFyZWQvdGVzdGluZy90ZXN0QmVkLXNldHVwXCI7XHJcbmltcG9ydCB7IEZvcm1zTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvZm9ybXMnO1xyXG5kZXNjcmliZSgnVGVzdCBBcHBDb21wb25lbnQ6JywgKCkgPT4ge1xyXG4gICAgbGV0IGFwcENvbXBvbmVudDogQXBwQ29tcG9uZW50O1xyXG4gICAgbGV0IG1vZHVsZURlZjogVGVzdE1vZHVsZU1ldGFkYXRhID0ge1xyXG4gICAgICAgIGltcG9ydHM6IFtcclxuICAgICAgICAgICAgTmF0aXZlU2NyaXB0TW9kdWxlLFxyXG4gICAgICAgICAgICBGb3Jtc01vZHVsZVxyXG4gICAgICAgIF0sXHJcbiAgICAgICAgZGVjbGFyYXRpb25zOiBbXHJcbiAgICAgICAgICAgIEFwcENvbXBvbmVudFxyXG4gICAgICAgIF0sXHJcbiAgICAgICAgcHJvdmlkZXJzOiBbXSxcclxuICAgICAgICBzY2hlbWFzOiBbTk9fRVJST1JTX1NDSEVNQV1cclxuICAgIH07XHJcblxyXG4gICAgc2V0VXBUZXN0QmVkKG1vZHVsZURlZik7XHJcblxyXG4gICAgYmVmb3JlRWFjaCgoZG9uZSkgPT4ge1xyXG4gICAgICAgIG5zVGVzdEJlZFJlbmRlcihBcHBDb21wb25lbnQpXHJcbiAgICAgICAgICAgIC50aGVuKChmaXh0dXJlOiBDb21wb25lbnRGaXh0dXJlPEFwcENvbXBvbmVudD4pID0+IHtcclxuICAgICAgICAgICAgICAgIGFwcENvbXBvbmVudCA9IGZpeHR1cmUuY29tcG9uZW50UmVmLmluc3RhbmNlO1xyXG4gICAgICAgICAgICAgICAgZG9uZSgpO1xyXG4gICAgICAgICAgICB9KTtcclxuICAgIH0pO1xyXG5cclxuICAgIGl0KCdzaG91bGQgaW5pdGlhbGlzZSBBcHBDb21wb25lbnQnLCAoKSA9PiB7XHJcbiAgICAgICAgZXhwZWN0KGFwcENvbXBvbmVudCkudG9CZURlZmluZWQoKTtcclxuICAgIH0pO1xyXG59KTsiXX0=