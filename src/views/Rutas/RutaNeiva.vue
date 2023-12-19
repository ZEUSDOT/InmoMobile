<template>
   <ion-page>
      <ion-content>
         <div class="px-8 pt-5">
            <GeneralMenu />
         </div>
         <div class="h-full border">
            <iframe class="full-screen-iframe"
               src="https://agenciaapp.maps.arcgis.com/apps/webappviewer/index.html?id=ac125cc4c09345d2b88e6e6b5c6102a0"
               frameborder="0"></iframe>
         </div>
      </ion-content>
   </ion-page>
</template>
 
<script setup lang="ts">
import { IonPage, IonHeader, IonToolbar, IonTitle, IonContent, IonButton, IonButtons, IonInput, IonItem, IonModal } from '@ionic/vue';
import GeneralMenu from '@/components/GeneralMenu.vue';
</script>

<style lang="css" scoped>
.full-screen-iframe {
   width: 100%;
   height: 90vh;
}
</style>