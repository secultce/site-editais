<script setup>
 defineProps({
    urlImage: String
 })
    //images
import vueMkHeader from "@/assets/img/site-editais.png";
</script>


<template>
    <div class="page-header min-vh-55" :style="`background-image: url(${vueMkHeader})`" loading="lazy" style="">
      <div class="container">
        <div class="row">
          <div class="col-lg-7 text-center mx-auto position-relative">
            <!-- <h1
              class="text-white pt-3 mt-n5 me-2"
              :style="{ display: 'inline-block ' }"
            >
             Secult
            </h1>
            <p class="lead text-white px-5" :style="{ fontWeight: '300' }">
              A Secretaria da Cultura do Ceará tem como missão executar, superintender e coordenar as atividades de proteção do patrimônio cultural do Ceará.
            </p> -->
          </div>
        </div>
      </div>
    </div>
</template>



<style lang="scss" scoped>

</style>