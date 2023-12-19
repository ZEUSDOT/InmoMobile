<template>
   <ion-page>
      <ion-content :fullscreen="true">
         <div class="px-8 pt-5">
            <GeneralMenu />
         </div>

         <div class="overflow-auto py-10 px-5">
            <div class="grid grid-rows-3 grid-flow-col gap-4">
               <div v-for="(category, index) in categories" :key="index"
                  class="max-w-sm mb-5 bg-white border border-gray-200 p-4 rounded-lg">
                  <div class="text-center ">
                     <router-link class="text-black" :to="{ name: 'map-explore' }">
                        <img class="rounded-lg mx-auto" width="100" :src="getIcon(category.image)" alt="" />
                        <p class="font-semibold text-lg mt-5">{{ category.title }}</p>
                     </router-link>
                  </div>
               </div>
            </div>
         </div>

         <!-- <div v-for="(project, index) in projects" :key="index"
               class="max-w-sm mb-5 bg-white border border-gray-200">
               <a href="#">
                  <img class="rounded-lg h-full" :src="getIMGPath(project.image)" alt="" />
               </a>
            </div> -->
      </ion-content>
   </ion-page>
</template>
 
<script setup lang="ts">
import { IonPage, IonHeader, IonToolbar, IonTitle, IonContent } from '@ionic/vue';
import GeneralMenu from '@/components/GeneralMenu.vue';

const getIMGPath = (img: string) => {
   return new URL("../assets/img/cultural/" + img, import.meta.url).href;
}

const getIcon = (img: string) => {
   return new URL("../assets/icons/" + img, import.meta.url).href;
}

const categories = [
   {
      'title': 'Hotel',
      'image': 'hotel.png'
   },
   {
      'title': 'Restaurantes',
      'image': 'restaurant.png'
   },
   {
      'title': 'Cafeterías',
      'image': 'coffee.png'
   },
   {
      'title': 'Teatros',
      'image': 'theater.png'
   },
   {
      'title': 'Galerías',
      'image': 'art.png'
   },
];

const projects = [
   {
      'image': '01-ruta-miranda.webp'
   },
   {
      'image': '02-ruta-darien.webp'
   },
   {
      'image': '03-ruta-moore.webp'
   },
   {
      'image': '04-ruta-neiva.webp'
   },
   {
      'image': '05-ruta-sucre.webp'
   },
   {
      'image': '06-ruta-uraba.webp'
   }
];
</script>