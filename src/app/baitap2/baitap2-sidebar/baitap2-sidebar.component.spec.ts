import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Baitap2SidebarComponent } from './baitap2-sidebar.component';

describe('Baitap2SidebarComponent', () => {
  let component: Baitap2SidebarComponent;
  let fixture: ComponentFixture<Baitap2SidebarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Baitap2SidebarComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Baitap2SidebarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
