import {Directive, ElementRef, inject, OnDestroy, OnInit} from '@angular/core';
import {DOCUMENT} from "@angular/common";

@Directive({
  selector: '[appMyDirective]',
  standalone: true
})
export class MyDirectiveDirective implements OnInit, OnDestroy {

  readonly #doc = inject(DOCUMENT);
  readonly #nativeElement = inject(ElementRef<HTMLElement>).nativeElement;
  readonly #id = `${this.constructor.name}_${(`${Math.random()}`).substring(2, 15)}`

  ngOnInit(): void {
    console.debug(this.constructor.name, 'ngOnInit called', this.#id);

    const el = this.#doc.createElement('STRONG')
    el.textContent = 'Special: ';
    el.className = 'super-special-directive';
    el.style.color = 'orange';
    el.id = this.#id;

    this.#nativeElement.prepend(el);
  }

  ngOnDestroy(): void {
    console.debug(this.constructor.name, 'ngOnDestroy called');

    this.#nativeElement.querySelector(`#${this.#id}`).remove();
  }

}
