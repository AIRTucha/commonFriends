/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { VKService} from './vk.service';

describe('VkServiceService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [VKService]
    });
  });

  it('should ...', inject([VKService], (service: VKService) => {
    expect(service).toBeTruthy();
  }));
});
