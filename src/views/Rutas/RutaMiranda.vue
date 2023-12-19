<template>
   <ion-page>
      <ion-content>
         <div class="px-8 pt-5">
            <GeneralMenu />
         </div>
         <div class="h-full border">
            <iframe class="full-screen-iframe"
               src="https://agenciaapp.maps.arcgis.com/apps/webappviewer/index.html?id=6621f159bf3148f193a1c1ef47b921b1"
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