<template>
   <ion-page>
      <ion-content>
         <div class="px-8 pt-5">
            <GeneralMenu />
         </div>

         <swiper :pagination="true" :modules="modules" class="mySwiper">
            <swiper-slide>
               <div class="relative">
                  <div class="backdrop-opacity-10 backdrop-invert bg-black/40">
                     <img class="w-full brightness-50" src="@/assets/img/integral/parque-prado/4.webp" />
                     <h3 class="absolute text-2xl text-white top-5 left-5">Recorridos</h3>
                     <p class="absolute text-justify px-5 leading-4 text-sm text-white top-1/2 -translate-y-1/2">Provenza,
                        Manila y la Calle del Buena Mesa de Envigado se originaron como barrios residenciales. Todos están
                        rodeados de avenidas
                        principales y centrales, y están ubicados en una zona de habitantes de estrato medio-alto.
                     </p>
                  </div>
               </div>
            </swiper-slide>
            <swiper-slide>
               <div class="relative">
                  <div class="backdrop-opacity-10 backdrop-invert bg-black/40">
                     <img class="w-full brightness-50" src="@/assets/img/integral/parque-prado/2.webp" />
                     <h3 class="absolute text-2xl text-white top-5 left-5">Recorridos</h3>
                     <p class="absolute text-justify px-5 leading-4 text-sm text-white top-1/2 -translate-y-1/2">Provenza,
                        Manila y la Calle del Buena
                        Mesa de Envigado se originaron como barrios residenciales. Todos están rodeados de avenidas
                        principales y centrales, y están ubicados en una zona de habitantes de estrato medio-alto.
                     </p>
                  </div>
               </div>
            </swiper-slide>
         </swiper>

         <div class="p-5">
            <div class="grid grid-cols-2 md:grid-cols-4 gap-4">
               <div class="grid gap-4">
                  <div>
                     <router-link :to="{ name: 'miranda' }">
                        <img class="h-auto max-w-full rounded-lg" src="@/assets/img/cultural/01-ruta-miranda.webp" alt="">
                     </router-link>
                  </div>
                  <div>
                     <router-link :to="{ name: 'darien' }">
                        <img class="h-auto max-w-full rounded-lg" src="@/assets/img/cultural/02-ruta-darien.webp" alt="">
                     </router-link>
                  </div>
                  <div>
                     <router-link :to="{ name: 'moore' }">
                        <img class="h-auto max-w-full rounded-lg" src="@/assets/img/cultural/03-ruta-moore.webp" alt="">
                     </router-link>
                  </div>
               </div>
               <div class="grid gap-4">
                  <div>
                     <router-link :to="{ name: 'neiva' }">
                        <img class="h-auto max-w-full rounded-lg" src="@/assets/img/cultural/04-ruta-neiva.webp" alt="">
                     </router-link>
                  </div>
                  <div>
                     <router-link :to="{ name: 'sucre' }">
                        <img class="h-auto max-w-full rounded-lg" src="@/assets/img/cultural/05-ruta-sucre.webp" alt="">
                     </router-link>
                  </div>
                  <div>
                     <router-link :to="{ name: 'uraba' }">
                        <img class="h-auto max-w-full rounded-lg" src="@/assets/img/cultural/06-ruta-uraba.webp" alt="">
                     </router-link>
                  </div>
               </div>
            </div>

         </div>
      </ion-content>
   </ion-page>
</template>
 
<script setup lang="ts">
import { IonPage, IonHeader, IonToolbar, IonTitle, IonContent } from '@ionic/vue';
import { ref } from 'vue';
import GeneralMenu from '@/components/GeneralMenu.vue';

// Import Swiper Vue.js components
import { Swiper, SwiperSlide } from 'swiper/vue';
import 'swiper/css';
import 'swiper/css/pagination';
import { Pagination } from 'swiper/modules';

// const onSwiper = (swiper: any) => {
//   swiperInstance.value = swiper;
// };

// function goToSlide(position: number) {
//   swiperInstance.value?.slideTo(position);
// }

// const slideToIndex = (index: number) => {
//   swiperInstance.value.slideTo(index);
// };
const modules = [Pagination];

// const swiper = new Swiper('.swiper', {
//    // configure Swiper to use modules
//    modules: [Navigation, Pagination],
// });

const getIMGPath = (img: string) => {
   return new URL("../assets/img/urban/" + img, import.meta.url).href;
}

const projects = [
   {
      'title': 'Salón Prado',
      'image': 'salon-prado.webp',
      'description': 'Este proyecto se desprende de la gestión inmobiliaria que se ha realizado sobre bienes inmuebles fiscales priorizados para la vinculación de nuevos usos, acordes con lo planteado y establecido...'
   },
   {
      'title': 'Casa ASMEDAS',
      'image': 'salon-asmedas.webp',
      'description': 'La casa ASMEDAS aún conserva la elegancia de otras épocas, a pesar de los años, se erige firme, solemne y permanece imbatible ante el paso del tiempo y la transformación del barrio Prado...'
   },
   {
      'title': 'La Casa de la Calle Miranda',
      'image': 'casa-calle-miranda.webp',
      'description': 'Los muros de la Casa de la Calle Miranda susurran historias. En la década de 1920 Paulino Londoño Londoño, inspirado por la visión de un hogar excepcional, confió la tarea de diseñar la...'
   },
   {
      'title': 'Casa de la torre del juguete',
      'image': 'casa-la-torre-del-juguete.webp',
      'description': 'La Casa de la Torre del Juguete es una edificación que ha resistido el paso del tiempo y se ha convertido en testigo de los cambios urbanos y habitacionales del barrio Prado...'
   },
   {
      'title': 'La Casa de las Presencias',
      'image': 'casa-de-las-presencias.webp',
      'description': 'La Casa de las Presencias está vinculada a una historia familiar, a un apellido asociado al auge industrial y el negocio editorial: la marca Bedout...'
   },
   {
      'title': 'El Palacio Egipcio de Medellín',
      'image': 'palacio-egipcio.webp',
      'description': 'El Palacio Egipcio de Medellín evoca la cultura, tradiciones y simbología del antiguo Egipto, en una ciudad en constante crecimiento y transformación urbana que busca preservar su memoria y patrimonio cultural. La edificación cuenta con más de 90 años de historia y se ha convertido en...'
   }
];
</script>

<style lang="css" scoped>
.swiper {
   width: 100%;
}

.swiper-slide {
   text-align: center;
   font-size: 18px;
   background: #fff;
}

.swiper-pagination-bullet {
   background-color: #ffffff;
   opacity: 0.5;
}
</style>