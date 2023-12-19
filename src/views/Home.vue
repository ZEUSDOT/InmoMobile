<template>
   <ion-page>
      <ion-content>

         <div class="h-full bg-center bg-no-repeat background-cover bg-[url('@/assets/img/bg-cultural.png')]">
            <div class="h-full backdrop-opacity-10 backdrop-invert bg-black/40">
               <div class="px-8 py-5">

                  <GeneralMenu :style="'text-white'" :fill="'white'"/>

                  <div class="relative h-72 w-full">
                     <div class="absolute inset-x-0 bottom-0 h-16 text-lg">
                        <p class="text-white text-center tracking-tight leading-5">
                           Provenza, Manila y la Calle del Buena Mesa de Envigado se originaron como barrios residenciales.
                        </p>

                        <p class="text-white text-center tracking-tight leading-5 mt-3">
                           Todos están rodeados de avenidas principales y  centrales, y están ubicados en una zona de habitantes de estrato medio-alto.
                        </p>
                     </div>
                  </div>

                  <div class="relative h-64 text-center">
                     <div class="absolute inset-x-0 bottom-0 h-16 w-full">
                        <router-link :to="{ name: 'explore' }" class="border-white border rounded-lg px-10 py-2.5 w-full font-bold text-white hover:bg-white hover:text-black dark:text-primary-500">
                           Explorar
                        </router-link>
                     </div>
                  </div>

               </div>
            </div>
         </div>
      </ion-content>
   </ion-page>
</template>
 
<script setup lang="ts">
import { IonPage, IonHeader, IonToolbar, IonTitle, IonContent, IonButton, IonButtons, IonInput, IonItem, IonModal } from '@ionic/vue';
import GeneralMenu from '@/components/GeneralMenu.vue';
</script>