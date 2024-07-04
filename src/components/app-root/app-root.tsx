import { modalController } from '@ionic/core';
import { Component, h, State } from '@stencil/core';

@Component({
  tag: 'app-root',
  styleUrl: 'app-root.css'
})
export class AppRoot {

  @State() state: any = {};

  modal:HTMLIonModalElement;

  async openModal(withList: boolean = false) {
    this.modal = await modalController.create({
      component: 'app-home',
      handle: false,
      backdropDismiss: true,
      initialBreakpoint: 0.5,
      breakpoints: [0.5],
      showBackdrop: false,
      componentProps: {
        withList
      }
    });

    await this.modal.present();
  }

  async closeModal() {
    this.modal.dismiss();
  }

  render() {
    return (
      <div>
        <header>
          <h1>Modal Memory Leak Investigation</h1>
        </header>

        <main class="ion-padding">
          {/* This empty list is required to make the leak */}
          <ion-list></ion-list>
          <ion-button expand="block" onClick={() => this.openModal()}>Run Working</ion-button>
          <ion-button expand="block" onClick={() => this.openModal(true)}>Run Broken</ion-button>
          <ion-button expand="block" onClick={() => this.closeModal()}>Close Modal</ion-button>
        </main>
      </div>
    );
  }
}
