import { TestModuleMetadata } from '@angular/core/testing';
import { } from 'jasmine';
import { nsTestBedAfterEach, nsTestBedBeforeEach } from "nativescript-angular/testing";

export const setUpTestBed = (moduleDef: TestModuleMetadata) => {
  beforeEach(nsTestBedBeforeEach(moduleDef.declarations, moduleDef.providers, moduleDef.imports, []));
  afterEach(nsTestBedAfterEach());
}