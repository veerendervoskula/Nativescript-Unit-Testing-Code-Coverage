"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var testing_1 = require("nativescript-angular/testing");
var item_detail_component_1 = require("~/item/item-detail.component");
var item_service_1 = require("~/item/item.service");
var router_1 = require("@angular/router");
var nativescript_module_1 = require("nativescript-angular/nativescript.module");
var core_1 = require("@angular/core");
var testBed_setup_1 = require("~/shared/testing/testBed-setup");
var forms_1 = require("@angular/forms");
describe('Test ItemDetailComponent:', function () {
    var itemDetailComponent;
    var moduleDef = {
        imports: [
            nativescript_module_1.NativeScriptModule,
            forms_1.FormsModule
        ],
        declarations: [
            item_detail_component_1.ItemDetailComponent
        ],
        providers: [
            {
                provide: item_service_1.ItemService,
                useValue: {
                    getItem: function () { return { id: 1, name: "Thibaut Courtois", role: "Goalkeeper", club: "Real Madrid" }; }
                }
            },
            {
                provide: router_1.ActivatedRoute,
                useValue: {
                    snapshot: { params: { id: 1 } }
                }
            },
        ],
        schemas: [core_1.NO_ERRORS_SCHEMA]
    };
    testBed_setup_1.setUpTestBed(moduleDef);
    beforeEach(function (done) {
        testing_1.nsTestBedRender(item_detail_component_1.ItemDetailComponent)
            .then(function (fixture) {
            itemDetailComponent = fixture.componentRef.instance;
            done();
        });
    });
    it('should initialise itemDetailComponent', function () {
        expect(itemDetailComponent).toBeDefined();
    });
    it('should call ngonit', function () {
        itemDetailComponent.ngOnInit();
        expect(itemDetailComponent.item).toBeDefined();
    });
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaXRlbS1kZXRhaWwuY29tcG9uZW50LnNwZWMuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJpdGVtLWRldGFpbC5jb21wb25lbnQuc3BlYy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUNBLHdEQUF3RztBQUV4RyxzRUFBbUU7QUFDbkUsb0RBQWtEO0FBQ2xELDBDQUFpRDtBQUNqRCxnRkFBOEU7QUFDOUUsc0NBQWlEO0FBQ2pELGdFQUE4RDtBQUM5RCx3Q0FBNkM7QUFDN0MsUUFBUSxDQUFDLDJCQUEyQixFQUFFO0lBQ2xDLElBQUksbUJBQXdDLENBQUM7SUFDN0MsSUFBSSxTQUFTLEdBQXVCO1FBQ2hDLE9BQU8sRUFBRTtZQUNMLHdDQUFrQjtZQUNsQixtQkFBVztTQUNkO1FBQ0QsWUFBWSxFQUFFO1lBQ1YsMkNBQW1CO1NBQ3RCO1FBQ0QsU0FBUyxFQUFFO1lBQ1A7Z0JBQ0ksT0FBTyxFQUFFLDBCQUFXO2dCQUNwQixRQUFRLEVBQUU7b0JBQ04sT0FBTyxnQkFBSyxNQUFNLENBQUMsRUFBRSxFQUFFLEVBQUUsQ0FBQyxFQUFFLElBQUksRUFBRSxrQkFBa0IsRUFBRSxJQUFJLEVBQUUsWUFBWSxFQUFFLElBQUksRUFBRSxhQUFhLEVBQUUsQ0FBQSxDQUFDLENBQUM7aUJBQ3BHO2FBQ0o7WUFDRDtnQkFDSSxPQUFPLEVBQUUsdUJBQWM7Z0JBQ3ZCLFFBQVEsRUFBRTtvQkFDTixRQUFRLEVBQUUsRUFBRSxNQUFNLEVBQUUsRUFBRSxFQUFFLEVBQUUsQ0FBQyxFQUFFLEVBQUU7aUJBQ2xDO2FBQ0o7U0FDSjtRQUNELE9BQU8sRUFBRSxDQUFDLHVCQUFnQixDQUFDO0tBQzlCLENBQUM7SUFFRiw0QkFBWSxDQUFDLFNBQVMsQ0FBQyxDQUFDO0lBRXhCLFVBQVUsQ0FBQyxVQUFDLElBQUk7UUFDWix5QkFBZSxDQUFDLDJDQUFtQixDQUFDO2FBQy9CLElBQUksQ0FBQyxVQUFDLE9BQThDO1lBQ2pELG1CQUFtQixHQUFHLE9BQU8sQ0FBQyxZQUFZLENBQUMsUUFBUSxDQUFDO1lBQ3BELElBQUksRUFBRSxDQUFDO1FBQ1gsQ0FBQyxDQUFDLENBQUM7SUFDWCxDQUFDLENBQUMsQ0FBQztJQUVILEVBQUUsQ0FBQyx1Q0FBdUMsRUFBRTtRQUN4QyxNQUFNLENBQUMsbUJBQW1CLENBQUMsQ0FBQyxXQUFXLEVBQUUsQ0FBQztJQUM5QyxDQUFDLENBQUMsQ0FBQztJQUVILEVBQUUsQ0FBQyxvQkFBb0IsRUFBRTtRQUNyQixtQkFBbUIsQ0FBQyxRQUFRLEVBQUUsQ0FBQztRQUMvQixNQUFNLENBQUMsbUJBQW1CLENBQUMsSUFBSSxDQUFDLENBQUMsV0FBVyxFQUFFLENBQUM7SUFDbkQsQ0FBQyxDQUFDLENBQUM7QUFDUCxDQUFDLENBQUMsQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEFwcENvbXBvbmVudCB9IGZyb20gXCJ+L2FwcC5jb21wb25lbnRcIjtcbmltcG9ydCB7IG5zVGVzdEJlZEJlZm9yZUVhY2gsIG5zVGVzdEJlZEFmdGVyRWFjaCwgbnNUZXN0QmVkUmVuZGVyIH0gZnJvbSAnbmF0aXZlc2NyaXB0LWFuZ3VsYXIvdGVzdGluZyc7XG5pbXBvcnQgeyBDb21wb25lbnRGaXh0dXJlLCBUZXN0TW9kdWxlTWV0YWRhdGEgfSBmcm9tICdAYW5ndWxhci9jb3JlL3Rlc3RpbmcnO1xuaW1wb3J0IHsgSXRlbURldGFpbENvbXBvbmVudCB9IGZyb20gXCJ+L2l0ZW0vaXRlbS1kZXRhaWwuY29tcG9uZW50XCI7XG5pbXBvcnQgeyBJdGVtU2VydmljZSB9IGZyb20gXCJ+L2l0ZW0vaXRlbS5zZXJ2aWNlXCI7XG5pbXBvcnQgeyBBY3RpdmF0ZWRSb3V0ZSB9IGZyb20gXCJAYW5ndWxhci9yb3V0ZXJcIjtcbmltcG9ydCB7IE5hdGl2ZVNjcmlwdE1vZHVsZSB9IGZyb20gXCJuYXRpdmVzY3JpcHQtYW5ndWxhci9uYXRpdmVzY3JpcHQubW9kdWxlXCI7XG5pbXBvcnQgeyBOT19FUlJPUlNfU0NIRU1BIH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcbmltcG9ydCB7IHNldFVwVGVzdEJlZCB9IGZyb20gXCJ+L3NoYXJlZC90ZXN0aW5nL3Rlc3RCZWQtc2V0dXBcIjtcbmltcG9ydCB7IEZvcm1zTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvZm9ybXMnO1xuZGVzY3JpYmUoJ1Rlc3QgSXRlbURldGFpbENvbXBvbmVudDonLCAoKSA9PiB7XG4gICAgbGV0IGl0ZW1EZXRhaWxDb21wb25lbnQ6IEl0ZW1EZXRhaWxDb21wb25lbnQ7XG4gICAgbGV0IG1vZHVsZURlZjogVGVzdE1vZHVsZU1ldGFkYXRhID0ge1xuICAgICAgICBpbXBvcnRzOiBbXG4gICAgICAgICAgICBOYXRpdmVTY3JpcHRNb2R1bGUsXG4gICAgICAgICAgICBGb3Jtc01vZHVsZVxuICAgICAgICBdLFxuICAgICAgICBkZWNsYXJhdGlvbnM6IFtcbiAgICAgICAgICAgIEl0ZW1EZXRhaWxDb21wb25lbnRcbiAgICAgICAgXSxcbiAgICAgICAgcHJvdmlkZXJzOiBbXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgcHJvdmlkZTogSXRlbVNlcnZpY2UsXG4gICAgICAgICAgICAgICAgdXNlVmFsdWU6IHtcbiAgICAgICAgICAgICAgICAgICAgZ2V0SXRlbSgpIHsgcmV0dXJuIHsgaWQ6IDEsIG5hbWU6IFwiVGhpYmF1dCBDb3VydG9pc1wiLCByb2xlOiBcIkdvYWxrZWVwZXJcIiwgY2x1YjogXCJSZWFsIE1hZHJpZFwiIH0gfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgcHJvdmlkZTogQWN0aXZhdGVkUm91dGUsXG4gICAgICAgICAgICAgICAgdXNlVmFsdWU6IHtcbiAgICAgICAgICAgICAgICAgICAgc25hcHNob3Q6IHsgcGFyYW1zOiB7IGlkOiAxIH0gfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0sXG4gICAgICAgIF0sXG4gICAgICAgIHNjaGVtYXM6IFtOT19FUlJPUlNfU0NIRU1BXVxuICAgIH07XG5cbiAgICBzZXRVcFRlc3RCZWQobW9kdWxlRGVmKTtcblxuICAgIGJlZm9yZUVhY2goKGRvbmUpID0+IHtcbiAgICAgICAgbnNUZXN0QmVkUmVuZGVyKEl0ZW1EZXRhaWxDb21wb25lbnQpXG4gICAgICAgICAgICAudGhlbigoZml4dHVyZTogQ29tcG9uZW50Rml4dHVyZTxJdGVtRGV0YWlsQ29tcG9uZW50PikgPT4ge1xuICAgICAgICAgICAgICAgIGl0ZW1EZXRhaWxDb21wb25lbnQgPSBmaXh0dXJlLmNvbXBvbmVudFJlZi5pbnN0YW5jZTtcbiAgICAgICAgICAgICAgICBkb25lKCk7XG4gICAgICAgICAgICB9KTtcbiAgICB9KTtcblxuICAgIGl0KCdzaG91bGQgaW5pdGlhbGlzZSBpdGVtRGV0YWlsQ29tcG9uZW50JywgKCkgPT4ge1xuICAgICAgICBleHBlY3QoaXRlbURldGFpbENvbXBvbmVudCkudG9CZURlZmluZWQoKTtcbiAgICB9KTtcblxuICAgIGl0KCdzaG91bGQgY2FsbCBuZ29uaXQnLCAoKSA9PiB7XG4gICAgICAgIGl0ZW1EZXRhaWxDb21wb25lbnQubmdPbkluaXQoKTtcbiAgICAgICAgZXhwZWN0KGl0ZW1EZXRhaWxDb21wb25lbnQuaXRlbSkudG9CZURlZmluZWQoKTtcbiAgICB9KTtcbn0pOyJdfQ==