import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SocialLinksComponent } from './social-links.component';

describe('SocialLinksComponent', () => {
  let component: SocialLinksComponent;
  let fixture: ComponentFixture<SocialLinksComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SocialLinksComponent]
    }).compileComponents();

    fixture = TestBed.createComponent(SocialLinksComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('renders visible labels when showLabels is true', () => {
    component.showLabels = true;
    fixture.detectChanges();
    const span: HTMLElement = fixture.nativeElement.querySelector('a span:last-child');
    expect(span.textContent?.trim()).toBe('Follow on Instagram');
    expect(span.classList).toContain('ml-2');
    expect(span.classList).not.toContain('sr-only');
  });

  it('applies label as title attribute', () => {
    const anchor: HTMLElement = fixture.nativeElement.querySelector('a');
    expect(anchor.getAttribute('title')).toBe('Follow on Instagram');
  });

  it('hides labels visually when showLabels is false', () => {
    component.showLabels = false;
    fixture.detectChanges();
    const span: HTMLElement = fixture.nativeElement.querySelector('a span:last-child');
    expect(span.classList).toContain('sr-only');
    expect(span.classList).not.toContain('ml-2');
  });
});
