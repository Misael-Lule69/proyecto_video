import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ContactComponent } from './contact'; // Cambiar 'Contact' por 'ContactComponent'

describe('ContactComponent', () => {
  let component: ContactComponent; // Cambiar 'Contact' por 'ContactComponent'
  let fixture: ComponentFixture<ContactComponent>; // Cambiar 'Contact' por 'ContactComponent'

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ContactComponent ] // Cambiar 'Contact' por 'ContactComponent'
    })
    .compileComponents();

    fixture = TestBed.createComponent(ContactComponent); // Cambiar 'Contact' por 'ContactComponent'
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});