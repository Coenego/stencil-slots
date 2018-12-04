import { E2EElement, E2EPage, newE2EPage} from '@stencil/core/testing';

describe('the component should', () => {
    let page: E2EPage;
    let elm: E2EElement;

    beforeEach(async () => {
        page = await newE2EPage({
            html: `
                <stencil-slots>
                    <div slot="alpha">alpha</div>
                    <div slot="beta">beta</div>
                </stencil-slots>
            `
        });
    });

    it('render correctly', async () => {
        elm = await page.find('stencil-slots');
        expect(elm).toHaveClass('hydrated');
    });
});
