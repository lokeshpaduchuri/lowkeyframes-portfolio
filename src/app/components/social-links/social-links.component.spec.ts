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
    const anchor: HTMLElement = fixture.nativeElement.querySelector('a');
    expect(anchor.textContent?.trim()).toContain('Follow on Instagram');
  });

  it('renders sr-only spans when labels are hidden', () => {
    component.showLabels = false;
    fixture.detectChanges();
    const sr: HTMLElement | null = fixture.nativeElement.querySelector('span.sr-only');
    expect(sr?.textContent?.trim()).toBe('Follow on Instagram');
  });
});
