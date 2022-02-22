import { Component, DebugElement } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';

import { HighligthDirective } from './highligth.directive';

@Component({
  template: `
    <h5 class="title" highligth>default</h5>
    <h5 highligth="yellow">yellow</h5>
    <p highligth="blue">parrafo</p>
    <p>otro parrafo</p>
  `
})
class HostComponent {}

fdescribe('HighligthDirective', () => {

  let component: HostComponent;
  let fixture: ComponentFixture<HostComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HostComponent, HighligthDirective ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HostComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should have three highligth elements', () => {
    const elements = fixture.debugElement.queryAll(By.directive(HighligthDirective));
    const elementsWithout = fixture.debugElement.queryAll(By.css('*:not([highligth])'));
    expect(elements.length).toEqual(3);
    expect(elementsWithout.length).toEqual(1);
  });

  it('should the elements be match with bgColor', () => {
    const elements = fixture.debugElement.queryAll(By.directive(HighligthDirective));
    expect(elements[0].nativeElement.style.backgroundColor).toEqual('pink');
    expect(elements[1].nativeElement.style.backgroundColor).toEqual('yellow');
    expect(elements[2].nativeElement.style.backgroundColor).toEqual('blue');
  });

  it('should the h5.title be defaultColor', () => {
    const titleDe = fixture.debugElement.query(By.css('.title'));
    const dir = titleDe.injector.get(HighligthDirective);
    expect(titleDe.nativeElement.style.backgroundColor).toEqual(dir.defaultColor);
  });
});
