<template>
   <footer>
      <img
         :src="svgLogo"
         alt="logo"
         loading="lazy"
         class="ml-3"
      />
      <div>
         <p class="copyright">&copy lukaszgorzelak91@gmail.com</p>
      </div>
      <div class="mr-5 flex wrapper-icon">
         <a class="mr-3 flex" href="https://github.com/lukaszgorzelak?tab=repositories" target="_blank">
            <Icon icon="devicon:github" width="25"/>
         </a>
         <a href="https://linkedin.com/in/łukasz-gorzelak-545074149" target="_blank">
            <Icon icon="devicon:linkedin" width="25"/>
         </a>
      </div>
   </footer>
</template>

<script setup>
   import { Icon } from '@iconify/vue';
   import svgLogo from '../assets/aloha-summer.png';

</script>

<style lang="scss" scoped>
   img {
      width: 80px;
      max-width: 100%;
   }

   footer {
      display: flex;
      flex-wrap: wrap;
      align-items: center;
      justify-content: space-between;
      min-height: 70px;
      box-shadow: 0 -5px 20px -5px rgba(115, 115, 115, 0.25);

      @media only screen and (max-width: 500px) {
         & {
            justify-content: center;
            flex-direction: column;
            grid-gap:1rem;
         }

         img {
            width: 25%;
            margin-top: 1rem;
         }

         .wrapper-icon {
            margin-bottom: 1rem;
         }
      }

      .copyright {
         color: rgba(0, 0, 0, 0.55);
      }
   }
</style>