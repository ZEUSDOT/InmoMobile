<template>
   <section
      class="bg-gray-50 dark:bg-gray-900 h-full bg-[url('@/assets/img/bg.png')] bg-no-repeat bg-cover bg-center backdrop-blur">
      <div class="h-full backdrop-blur-sm">
         <div class="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
            <a href="#" class="flex items-center mb-6 text-2xl font-semibold text-gray-900 dark:text-white">
               <img class="mr-2" width="200" src="@/assets/img/logo-color.png" alt="logo">
            </a>
            <div
               class="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700">
               <div class="p-6 space-y-4 md:space-y-6 sm:p-8">
                  <h1
                     class="text-xl text-center font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
                     Registrarse
                  </h1>
                  <form class="space-y-4 md:space-y-6" action="#">
                     <div>
                        <label for="input-group-1" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                           Nombre completo</label>
                        <div class="relative mb-6">
                           <div class="absolute inset-y-0 start-0 flex items-center ps-3.5 pointer-events-none">
                              <svg class="w-4 h-4 text-gray-500 dark:text-gray-400" xmlns="http://www.w3.org/2000/svg"
                                 height="16" width="14" viewBox="0 0 448 512">
                                 <path
                                    d="M304 128a80 80 0 1 0 -160 0 80 80 0 1 0 160 0zM96 128a128 128 0 1 1 256 0A128 128 0 1 1 96 128zM49.3 464H398.7c-8.9-63.3-63.3-112-129-112H178.3c-65.7 0-120.1 48.7-129 112zM0 482.3C0 383.8 79.8 304 178.3 304h91.4C368.2 304 448 383.8 448 482.3c0 16.4-13.3 29.7-29.7 29.7H29.7C13.3 512 0 498.7 0 482.3z" />
                              </svg>
                           </div>
                           <input type="text" id="input-group-1"
                              class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full ps-10 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                              placeholder="Joe Doe">
                        </div>
                     </div>
                     <div>
                        <label for="input-group-1" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                           Correo electrónico</label>
                        <div class="relative mb-6">
                           <div class="absolute inset-y-0 start-0 flex items-center ps-3.5 pointer-events-none">
                              <svg class="w-4 h-4 text-gray-500 dark:text-gray-400" aria-hidden="true"
                                 xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 16">
                                 <path
                                    d="m10.036 8.278 9.258-7.79A1.979 1.979 0 0 0 18 0H2A1.987 1.987 0 0 0 .641.541l9.395 7.737Z" />
                                 <path
                                    d="M11.241 9.817c-.36.275-.801.425-1.255.427-.428 0-.845-.138-1.187-.395L0 2.6V14a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V2.5l-8.759 7.317Z" />
                              </svg>
                           </div>
                           <input type="text" id="input-group-1"
                              class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full ps-10 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                              placeholder="correo@app.gov.co">
                        </div>
                     </div>

                     <div>
                        <label for="password" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                           Contraseña</label>
                        <div class="relative mb-6">
                           <div class="absolute inset-y-0 start-0 flex items-center ps-3.5 pointer-events-none">
                              <svg class="w-4 h-4" xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="100"
                                 height="100" viewBox="0 0 50 50">
                                 <path
                                    d="M 22.78125 0 C 21.605469 -0.00390625 20.40625 0.164063 19.21875 0.53125 C 12.902344 2.492188 9.289063 9.269531 11.25 15.59375 L 11.25 15.65625 C 11.507813 16.367188 12.199219 18.617188 12.625 20 L 9 20 C 7.355469 20 6 21.355469 6 23 L 6 47 C 6 48.644531 7.355469 50 9 50 L 41 50 C 42.644531 50 44 48.644531 44 47 L 44 23 C 44 21.355469 42.644531 20 41 20 L 14.75 20 C 14.441406 19.007813 13.511719 16.074219 13.125 15 L 13.15625 15 C 11.519531 9.722656 14.5 4.109375 19.78125 2.46875 C 25.050781 0.832031 30.695313 3.796875 32.34375 9.0625 C 32.34375 9.066406 32.34375 9.089844 32.34375 9.09375 C 32.570313 9.886719 33.65625 13.40625 33.65625 13.40625 C 33.746094 13.765625 34.027344 14.050781 34.386719 14.136719 C 34.75 14.226563 35.128906 14.109375 35.375 13.832031 C 35.621094 13.550781 35.695313 13.160156 35.5625 12.8125 C 35.5625 12.8125 34.433594 9.171875 34.25 8.53125 L 34.25 8.5 C 32.78125 3.761719 28.601563 0.542969 23.9375 0.0625 C 23.550781 0.0234375 23.171875 0 22.78125 0 Z M 9 22 L 41 22 C 41.554688 22 42 22.445313 42 23 L 42 47 C 42 47.554688 41.554688 48 41 48 L 9 48 C 8.445313 48 8 47.554688 8 47 L 8 23 C 8 22.445313 8.445313 22 9 22 Z M 25 30 C 23.300781 30 22 31.300781 22 33 C 22 33.898438 22.398438 34.6875 23 35.1875 L 23 38 C 23 39.101563 23.898438 40 25 40 C 26.101563 40 27 39.101563 27 38 L 27 35.1875 C 27.601563 34.6875 28 33.898438 28 33 C 28 31.300781 26.699219 30 25 30 Z">
                                 </path>
                              </svg>
                           </div>
                           <input type="password" id="password"
                              class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full ps-10 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                              placeholder="••••••••">
                        </div>
                     </div>

                     <div class="flex items-center justify-between">
                        <div class="flex items-start">
                           <div class="flex items-center h-5">
                              <input id="remember" aria-describedby="remember" type="checkbox"
                                 class="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-primary-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-primary-600 dark:ring-offset-gray-800">
                           </div>
                           <div class="ml-3 text-sm">
                              <label for="remember" class="text-gray-500 dark:text-gray-300">Recordar mis datos</label>
                           </div>
                        </div>
                     </div>

                     <button type="button" @click="signUp()"
                        class="w-full text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800">Crear
                        cuenta</button>
                     <p class="text-sm font-light text-gray-500 dark:text-gray-400">
                        ¿Ya tienes una cuenta? <router-link :to="{ name: 'login' }"
                           class="font-medium text-primary-600 hover:underline dark:text-primary-500">Ingresar</router-link>
                     </p>
                  </form>
               </div>
            </div>
         </div>
      </div>
   </section>
</template>
 
<script lang="ts" setup>
import router from '@/router';
import { useIonRouter } from '@ionic/vue';

const signUp = () => {
   router.push({ name: 'home' })
}
</script>