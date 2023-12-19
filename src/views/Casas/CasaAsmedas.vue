<template>
   <ion-page>
      <ion-content>
         <div class="h-[50vh] bg-cover bg-center bg-no-repeat bg-[url('@/assets/img/urban/portada-casa-asmedas.jpg')]">
            <div class="h-full backdrop-opacity-10 backdrop-invert bg-black/40">
               <div class="px-8 py-5">
                  <div class="flex my-auto">
                     <img src="@/assets/icons/arrow-left-white.svg" class="w-5 h-5 opacity-50">
                     <p class="text-white ms-2" @click="goBack();">Volver</p>
                  </div>

                  <GeneralMenu :style="'text-white'" :fill="'white'" />

                  <div class="relative">
                     <div class="backdrop-opacity-10 backdrop-invert bg-black/40">
                        <div class="absolute leading-4 text-sm text-white top-20 -translate-y-1/2">
                           <p class="text-xl font-bold mb-3">
                              Casa Asmedas
                           </p>

                           <p class="text-justify mt-5">
                              La casa ASMEDAS aún conserva la elegancia de otras épocas, a pesar de los años, se erige
                              firme, solemne y permanece imbatible ante el paso del tiempo y la transformación del barrio
                              Prado.
                           </p>
                        </div>
                     </div>
                  </div>
               </div>
            </div>
         </div>

         <div class="p-5">
            <div class="flex items-center">
               <img src="@/assets/icons/calendar.png" class="w-5 h-5 opacity-50">
               <p class="text-gray-600 ms-1">Fundada en 1948</p>
            </div>

            <p class="mt-4 text-justify">
               Lejos quedaron los años en los que Prado era el lugar escogido por las élites de Medellín para construir sus
               viviendas, experiencia que vivió el inmigrante judio Jacobo Cohen, cuando decidió adquirir un lote en 1948
               al empresario Jesús M. Mora, con el fin de levantar el que sería su hogar.
            </p>

            <div class="flex justify-between mt-8">
               <div class="text-center">
                  <img src="@/assets/icons/location.png" class="mx-auto w-12 h-12">
                  <p class="text-sm">Cómo llegar</p>
               </div>

               <div class="text-center" v-if="!display360Content" @click="show360Image()">
                  <img src="@/assets/icons/360.png" class="mx-auto w-12 h-12">
                  <p class="text-sm">Vista 360</p>
               </div>

               <div class="text-center" v-if="display360Content" @click="hide360Image()">
                  <img src="@/assets/icons/close.svg" class="mx-auto w-12 h-12">
                  <p class="text-sm">Cerrar vista 360</p>
               </div>

               <div class="text-center">
                  <img src="@/assets/icons/interactive-play.png" class="mx-auto w-12 h-12">
                  <p class="text-sm">Reproducir</p>
               </div>
            </div>

            <div v-if="display360Content" class="mt-8 h-[30vh]" ref="imageContainer" id="imageContainer"></div>
         </div>
      </ion-content>
   </ion-page>
</template>
 
<script setup lang="ts">
import { IonPage, IonHeader, IonToolbar, IonTitle, IonContent, IonButton, IonButtons, IonInput, IonItem, IonModal, useIonRouter } from '@ionic/vue';
import GeneralMenu from '@/components/GeneralMenu.vue';
import { onBeforeMount, onMounted, ref } from "vue";
// import PANOLENS from '../../panolens'; 


const imageContainer = ref(null);

const getIMGPath = (img: string) => {
   return new URL("../assets/360/" + img, import.meta.url).href;
}

const imgURL = getIMGPath('1.jpg');
const router = useIonRouter();

const goBack = () => {
   router.back();
};

const display360Content = ref(false);

const show360Image = () => {
   setTimeout(() => {
      const container = imageContainer.value;
   const panorama = new PANOLENS.ImagePanorama('../../../src/assets/360/1.jpg');
      const viewer = new PANOLENS.Viewer( {container: container,  output: 'console' } );
      viewer.add( panorama );
   }), 200;


   display360Content.value = true;
}

const hide360Image = () => {
   display360Content.value = false;
}
</script>