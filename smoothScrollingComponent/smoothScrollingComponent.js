import { LightningElement } from 'lwc';
import { loadScript } from 'lightning/platformResourceLoader';
import LENIS from '@salesforce/resourceUrl/LenisJs';

export default class SmoothScrollingComponent extends LightningElement {

    lenisInitialized = false;

    renderedCallback() {
        if (this.lenisInitialized) {
            return;
        }
        loadScript(this, LENIS)
            .then(() => {
                console.log('Loadeddd!!!');
                this.lenisInstance = new window.Lenis({
                    lerp: 0.05,
                    wheelMultiplier: 1
                });
                function raf(time) {
                    this.lenisInstance.raf(time);
                    requestAnimationFrame(raf.bind(this));
                }
                requestAnimationFrame(raf.bind(this));
                this.lenisInitialized = true;
            })
            .catch(error => {
                // Handle loading errors
                console.error('Failed to load Lenis', error);
            });
    }
}