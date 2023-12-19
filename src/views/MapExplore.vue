<template>
   <ion-page>
      <ion-content>
         <div class="px-8 pt-5">
            <GeneralMenu />
         </div>
         <div class="h-full border">
            <iframe class="full-screen-iframe"
               src="https://agenciaapp.maps.arcgis.com/apps/instant/basic/index.html?appid=c8c1eb7678df42e7b65e9589b9dcfb6b"
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