import {ElementRef, inject, Pipe, PipeTransform} from '@angular/core';

@Pipe({
  name: 'myPipe',
  standalone: true
})
export class MyPipePipe implements PipeTransform {
  readonly #nativeElement = inject(ElementRef<Text>).nativeElement;

  transform(value: unknown, ...args: unknown[]): unknown {
    console.info('Pipes also can inject ElementRefs', this.#nativeElement);
    return `${value} piped`;
  }

}
