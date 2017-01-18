/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { VkServiceService } from './vk-service.service';

describe('VkServiceService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [VkServiceService]
    });
  });

  it('should ...', inject([VkServiceService], (service: VkServiceService) => {
    expect(service).toBeTruthy();
  }));
});
