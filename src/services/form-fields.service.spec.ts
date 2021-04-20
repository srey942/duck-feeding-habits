import { TestBed } from '@angular/core/testing';

import { FormFieldsService } from './form-fields.service';

describe('FormFieldsService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: FormFieldsService = TestBed.get(FormFieldsService);
    expect(service).toBeTruthy();
  });
});
