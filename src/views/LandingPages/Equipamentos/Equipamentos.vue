<script setup>
import Header from "../../../examples/Header.vue";
import NavbarDefault from "../../../examples/navbars/NavbarDefault.vue";

//images
import vueMkHeader from "@/assets/img/header-ceara.png";

</script>


<template>
    <div class="position-sticky  z-index-sticky top-0">
        <NavbarDefault dark transparent />
    </div>
    <Header>
    <div
      class="page-header min-vh-75"
      :style="`background-image: url(${vueMkHeader})`"
      loading="lazy"
      style=""
    >
      <div class="container">
        <div class="row">
          <div class="col-lg-7 text-center mx-auto position-relative">
            <h1>Rafael</h1>
            <!-- <h1
              class="text-white pt-3 mt-n5 me-2"
              :style="{ display: 'inline-block ' }"
            >
              Material Kit 2
            </h1>
            <p class="lead text-white px-5 mt-3" :style="{ fontWeight: '500' }">
              Start the Development With Bootstrap 5 Design System inspired by
              Material Design.
            </p> -->
          </div>
        </div>
      </div>
    </div>
  </Header>

</template>


<style lang="scss" scoped>

</style>