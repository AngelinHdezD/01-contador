import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ButtonAddComponent } from './button-add.component';

describe('ButtonAddComponent', () => {
  let component: ButtonAddComponent;
  let fixture: ComponentFixture<ButtonAddComponent>;

  beforeEach(async () => {
      fixture = TestBed.createComponent(ButtonAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

it("Debe emitir el valor de 1", () => {
//console.log(component.contador)
let nuevoContador = 0
component.onAdd.subscribe(contador =>{

nuevoContador = contador
})
component.add()

expect(nuevoContador).toBe(1)


});
});
