import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ContactComponent } from './contact.component';

describe('ContactComponent', () => {
  let component: ContactComponent;
  let fixture: ComponentFixture<ContactComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ContactComponent]
    }).compileComponents();

    fixture = TestBed.createComponent(ContactComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should move to step 2 when category selected', () => {
    component.selectCategory(component.categories[0]);
    expect(component.step).toBe(2);
  });

  it('should clear form fields when resetForm called', () => {
    component.name = 'John';
    component.email = 'john@example.com';
    component.message = 'Hi';
    component.creativeTitle = 'Test';
    component.resetForm();
    expect(component.name).toBe('');
    expect(component.email).toBe('');
    expect(component.message).toBe('');
    expect(component.creativeTitle).toBe('');
    expect(component.step).toBe(1);
  });
});
