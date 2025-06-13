import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContactComponent } from './contact.component';

describe('ContactComponent', () => {
  let component: ContactComponent;
  let fixture: ComponentFixture<ContactComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ContactComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ContactComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should clear form fields after submit', () => {
    spyOn(window, 'alert');
    component.name = 'John Doe';
    component.email = 'john@example.com';
    component.message = 'Hello';

    component.onSubmit();

    expect(component.name).toBe('');
    expect(component.email).toBe('');
    expect(component.message).toBe('');
  });
});
