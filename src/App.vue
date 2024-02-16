<script setup>
  import FooterSite from './components/FooterSite.vue';
  import Header from './components/Header.vue';
</script>

<template>
  <div class="container mx-auto">
    <Header />
  </div>
  <FooterSite />
</template>

<style lang="scss">

      $colors: (
        airport: hsl(180, 62%, 55%),
        time: hsl(212, 86%, 64%),
        rent:hsl(34, 97%, 64%),
        ticket: #7ae582,
        road: hsl(0, 78%, 62%),
      );

      @each $phrase in airport, time, rent, ticket, road {
        .nav-item--#{$phrase}{
          position: relative;
          a::after{
            content: "";
            position: absolute;
            left:0;
            top: 100%;
            width: 0;
            height: 2px;
            background-color: map-get($colors, #{$phrase});
            transition: width .6s ease-in-out;
          }
          a:focus:after{
            width: 90%;
          }
        }
      }

      @each $phrase in airport, time, rent, ticket, road {
        .#{$phrase} {
          border-top: 4px solid map-get($colors, #{$phrase});
        }

        .btn--#{$phrase} {
          border: 1px solid map-get($colors, #{$phrase});
          box-shadow: inset 0 0 0 0 map-get($colors, #{$phrase});
        }

        .btn--#{$phrase}:hover {
          box-shadow: inset 10rem 0 0 0 map-get($colors, #{$phrase});
          transition: box-shadow 0.5s ease-in-out;
        }
      }
</style>