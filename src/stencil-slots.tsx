import { Component } from '@stencil/core';

@Component({
    tag: 'stencil-slots',
    shadow: true
})
export class StencilSlots {

  protected render(): any {
    return <div><slot name="alpha" /></div>;
  }
}
