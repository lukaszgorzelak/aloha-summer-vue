<template>
   <Heading>
        <slot>Welcome in Aloha Summer!</slot>
    </Heading>
    <div class="travel__wrapper">
        <div class="content">                      
            <h4 class="content__title">The best app to travel around the world</h4>
            <h1 class="content__text">Travel, enjoy and discover new places on earth</h1>
            <p class="content__describe">With our application traveling will become much easier. With Aloha summer you will overcome the language barrier and gain confidence in getting to know new places, cultures and people.</p>                        
        </div>
        <div class="content__img">
        </div>
    </div>
</template>

<script setup>
  import Heading from '../components/Heading.vue'
</script>

<style lang="scss" scoped>

.travel__wrapper {
  display: grid;
  grid-template-columns: 1fr 1fr;
  padding-bottom: 1rem;

  .content {
    display: flex;
    flex-direction: column;
    justify-content: center;

    .content__title {
      color: #DF6951;
      font-weight: 600;
      margin-bottom: 1rem;
      font-size: 1.3rem;

      @media all and (min-width: 320px) and (max-width: 580px){
          & {
            font-size: 1rem;
          }
      }
    }

    .content__text {
      font-weight: 700;
      font-size: 4rem;
      color: #181E4B;
      margin-bottom: 0.5rem;
      line-height: 1.2;
      position: relative;
      font-family: "Volkhov";

      @media all and (min-width: 320px) and (max-width: 580px){
          & {
            font-size: 3rem;
          }
      }

      &:after {
        content: "";
        right: 10.9375rem;
        top: 4.5rem;
        width: 21rem;
        height: 0.8125rem;
        background-image: url("/images/shape.svg");
        background-size: cover;
        z-index: -1;
        position: absolute;
        display: block;
          
      }
    }

    .content__describe {
      font-weight: 500;
      font-size: 1.2rem;
      line-height: 1.5;
      width: 35rem;
      margin-bottom: 3rem;
      color: #5E6282;

        @media all and (min-width: 320px) and (max-width: 580px){
          & {
            width: 15rem;
          }
      }
    }

    @media all and (max-width: 1000px) {
      & {
        order: 1;
        margin: 0 auto;
        align-items: center;
        text-align: center;
      }
    }

    @media all and (min-width: 320px) and (max-width: 580px){
        & {
          width: 18rem;
        }
    }
  }

  @media all and (max-width: 1000px) {
    & {
      grid-template-columns: 1fr;
      justify-content: center;
    }
  }
}

.content__img{
    background-image: url("../assets/women.png");
    background-position: center;
    background-size: contain;
    background-repeat: no-repeat;
    height: calc(100vh - 15rem);

    @media all and (min-width: 320px) and (max-width: 580px){
        & {
            margin-top: 3rem;
            margin-bottom: 3rem;
            height: calc(50vh - 10rem);
        }
    }

    @media all and (min-width: 320px) and (max-width: 1000px){
        & {
            height: calc(72vh - 20rem);
            margin-top: 3rem;
        }
    }
}
  footer {
    position: absolute !important;
    bottom: 0;
  }
</style>