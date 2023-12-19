<template>
  <ion-page>
    <ion-tabs>
      <ion-router-outlet></ion-router-outlet>
      <ion-tab-bar slot="bottom" mode="ios">
        <ion-tab-button tab="home" href="/tabs/home">
          <ion-icon aria-hidden="true" :icon="readerOutline" />
        </ion-tab-button>

        <ion-tab-button tab="tab1" href="/tabs/cultural">
          <ion-icon aria-hidden="true" :icon="colorPaletteOutline" />
        </ion-tab-button>

        <ion-tab-button tab="integral" href="/tabs/integral">
          <ion-icon aria-hidden="true" :icon="appsOutline" />
        </ion-tab-button>

        <ion-tab-button tab="urban" href="/tabs/operation">
          <ion-icon aria-hidden="true" :icon="walkOutline" />
        </ion-tab-button>

        <ion-tab-button tab="tab1" href="/tabs/cultural">
          <ion-icon aria-hidden="true" :icon="qrCodeOutline" />
        </ion-tab-button>
      </ion-tab-bar>
    </ion-tabs>
  </ion-page>
</template>

<script setup lang="ts">
import { IonTabBar, IonTabButton, IonTabs, IonLabel, IonIcon, IonPage, IonRouterOutlet } from '@ionic/vue';
import { appsOutline, colorPaletteOutline, ellipse, grid, home, homeOutline, images, leaf, person, qrCodeOutline, readerOutline, square, triangle, walkOutline } from 'ionicons/icons';
</script>

<style lang="scss" scoped>

ion-tab-bar, ion-tab-button{
 background-color: #171717;
 padding: 2px 0px; 
}

ion-icon{
  color: rgb(183, 183, 183);
}

ion-tab-bar {
  bottom: 10px;
  position: relative;
  border-radius: 25px;
  width: 98%;
  margin: 0 auto;
}

ion-tab-button {
  --color: var(--ion-color-medium);
  --color-selected: white;

  &::before {
    background-color: transparent;
    display: block;
    content: "";
    margin: 0 auto;
    width: 20px;
    height: 2px;
  }

  &.tab-selected::before {
    background-color: white;
  }
}
</style>

