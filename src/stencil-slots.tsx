import { Component, Element } from '@stencil/core';

@Component({
    tag: 'stencil-slots',
    shadow: true
})
export class StencilSlots {

    private children: HTMLCollection;

    @Element() el: HTMLElement;

    protected componentDidLoad(): void {
        this.children = this.el.children;
        for (var i = 0; i < this.children.length; i++) {
            const child = this.children.item(i);
            if (child.hasAttribute('slot') && child.getAttribute('slot') !== 'alpha') {
                child.classList.add('is-hidden');
            } else {
                child.classList.remove('is-hidden');
            }
        }
    }

    protected render(): any {
        return <div class="web-component"><slot name="alpha" /></div>;
    }
}
