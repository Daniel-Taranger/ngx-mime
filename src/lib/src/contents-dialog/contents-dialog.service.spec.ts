import { TestBed, inject } from '@angular/core/testing';

import { SharedModule } from './../shared/shared.module';
import { ContentsDialogService } from './contents-dialog.service';
import { ResizeService } from './../core/resize-service/resize.service';
import { ContentsDialogConfigStrategyFactory } from './contents-dialog-config-strategy-factory';

describe('ContentsDialogService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        SharedModule
      ],
      providers: [
        ContentsDialogService,
        ResizeService,
        ContentsDialogConfigStrategyFactory
      ]
    });
  });

  it('should be created', inject([ContentsDialogService], (service: ContentsDialogService) => {
    expect(service).toBeTruthy();
  }));
});