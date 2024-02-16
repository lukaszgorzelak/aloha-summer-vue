<template>
    <header>
        <!-- Navbar -->
            <MDBNavbar expand="lg" light bg="white" container position="top">
                <MDBNavbarToggler
                target="#navbarExample04"
                @click="collapse4 = !collapse4"
                />
                <MDBCollapse id="#navbarExample04" v-model="collapse4">
                <MDBNavbarBrand href="#">
                    <MDBNavbarItem to="/">
                        <img
                            :src="svgLogo"
                            alt="logo"
                            loading="lazy"
                        />
                    </MDBNavbarItem>
                </MDBNavbarBrand>
                <MDBNavbarNav right class="mb-2 mb-lg-0">
                    <button class="switchMode" @click="next()">
                            <Icon v-if="state === 'dark'" icon="ph:moon" />
                            <Icon v-if="state === 'light'" icon="ph:sun" />
                            <Icon v-if="state === 'cafe'" icon="carbon:cafe" />
                            <Icon v-if="state === 'contrast'" icon="material-symbols:contrast" />
                            <Icon v-if="state === 'auto'" icon="ph:laptop" />
                            <span class="ml-2 capitalize">{{ state }}</span>
                    </button>
                    <MDBNavbarItem to="/"> Home </MDBNavbarItem>
                    <MDBNavbarItem to="/airport" class="nav-item--airport"> Airport </MDBNavbarItem>
                    <MDBNavbarItem to="/time" class="nav-item--time"> Time </MDBNavbarItem>
                    <MDBNavbarItem to="/rent" class="nav-item--rent"> Rent </MDBNavbarItem>
                    <MDBNavbarItem to="/ticket" class="nav-item--ticket"> Ticket </MDBNavbarItem>
                    <MDBNavbarItem to="/road" class="nav-item--road"> Road </MDBNavbarItem>
                </MDBNavbarNav>
                </MDBCollapse>
            </MDBNavbar>
        <!-- Navbar -->
    </header>
    <RouterView />
</template>
  
<script setup>
    import { MDBNavbar, MDBNavbarToggler,MDBNavbarBrand, MDBNavbarNav, MDBNavbarItem, MDBCollapse } from 'mdb-vue-ui-kit';
    import { ref } from 'vue';
    import svgLogo from '../assets/aloha-summer.png';
    import { Icon } from '@iconify/vue';
    import { useColorMode, useCycleList } from '@vueuse/core';
    import { watchEffect } from 'vue-demi';
        
    const collapse4 = ref(false);

    const mode = useColorMode({
        emitAuto: true,
        modes: {
            contrast: 'contrast',
            cafe: 'cafe',
            dark: 'dark',
            auto:'auto',
        },
    });

    const { state, next } = useCycleList(['dark', 'light', 'cafe', 'contrast', 'auto'], { initialValue: mode });

    watchEffect(() => mode.value = state.value);

</script>

<style lang="scss" scope>
    img {
        width: 12rem;
        max-width: 40%;
    }

    header {
        margin-bottom: 6rem;
    }

    li {
        list-style: none;
    }

    .switchMode {
        display: flex;
        align-items: center;
        padding: 3px 15px;
        background-color:#44bd87;
        border: none;
        outline: none;
        color: #fff;
        margin: .5rem 0;
        border-bottom: 2px solid #249252;
        text-shadow: 1px 1px 1px #249252;
        border-radius: 4px;
        font-size: 1rem;
        box-sizing: border-box;
        
        &:hover {
            background-color: #249252;
        }
    }

    html.cafe {
        filter: sepia(0.9) hue-rotate(315deg) brightness(0.9);
    }

    html.dark {
        filter: contrast(90%) invert(90%) hue-rotate(180deg);
    }

    html.contrast {
        filter: contrast(2);
    }

</style>