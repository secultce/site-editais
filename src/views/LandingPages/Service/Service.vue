<script setup>
import Header from "../../../examples/Header.vue";
import NavbarDefault from "../../../examples/navbars/NavbarDefault.vue";

import DefaultFooter from "../../../examples/footers/FooterDefault.vue";
//images
import vueMkHeader from "@/assets/img/secult.png";


const linkEquipments = [
  {
    title: 'Documentos',
    link: 'https://www.secult.ce.gov.br/ultimas-noticias/menu-servicos/documentos/'
  },
  {
    title: 'Registro de Preços',
    link: 'http://www.portalcompras.ce.gov.br/compras/menu-registro-de-precos/?repeat=w3tc'
  },
  {
    title: 'Sistemas e sites',
    link: 'https://www.secult.ce.gov.br/ultimas-noticias/menu-servicos/sistemas-e-sites/'
  },
  {
    title: 'CEFIC',
    link: 'http://editais.cultura.ce.gov.br/edital-mecenas-do-ceara/#cefic'
  },
  {
    title: 'Logomarcas da Secult – Horizontal e Vertical',
    link: 'https://www.secult.ce.gov.br/wp-content/uploads/sites/43/2021/04/nova-logo-secult_Horizontal-e-Vertical.pdf'
  },
  {
    title: 'Manual de Identidade Visual 2021',
    link: 'https://www.secult.ce.gov.br/wp-content/uploads/sites/43/2021/04/Manual-de-Identidade-Visual-2021_GovernoCeara.pdf'
  },
  {
    title: 'OUVIDORIA SECULT CE',
    link: 'https://www.secult.ce.gov.br/wp-content/uploads/sites/43/2022/03/DOE-DA-NOMEAC%CC%A7A%CC%83O_RENATA.pdf'
  },
  {
    title: 'Relatório Setorial de Gestão de Ouvidoria – Secult 2019',
    link: 'https://www.secult.ce.gov.br/wp-content/uploads/sites/43/2020/09/Relat%C3%B3rio-Setorial-de-Gest%C3%A3o-de-Ouvidoria-Secult-2019.pdf'
  }
]


</script>


<template>
  <div class="position-sticky  z-index-sticky top-0">
    <NavbarDefault :sticky="true"  />
  </div>
  <Header>
    <div class="page-header min-vh-75" :style="`background-image: url(${vueMkHeader})`" loading="lazy" style="">
      <div class="container">
        <div class="row">
          <div class="col-lg-7 text-center mx-auto position-relative">
            <h1
              class="text-white pt-3 mt-n5 me-2"
              :style="{ display: 'inline-block ' }"
            >
             Secretaria da Cultura do Ceará
            </h1>
            <p class="lead text-white px-5 mt-3" :style="{ fontWeight: '500' }">
              A Secretaria da Cultura (Secult) tem como missão executar, superintender e coordenar as atividades de proteção 
              do patrimônio cultural do Ceará, difusão da cultura e aprimoramento cultural do povo cearense.
            </p>
          </div>
        </div>
      </div>
    </div>
  </Header>
  <div class="card card-body blur shadow-blur mx-3 mx-md-4 mt-n6">
    <section class="py-4">
      <div class="container">
        <div class="row">
          <div class="col-lg-6">
            <h3 class="border-bottom border-success">Serviços</h3>
            <ul class="list-group" v-for="(item, index) in linkEquipments">
              <a :href="item.link" :key="index" class="list-group-item list-group-item-action" target="_blank">
                <i class="fa fa-check"></i> {{ item.title }}
              </a>
            </ul>

          </div>
         
        </div>
      </div>
    </section>
  </div>
  <DefaultFooter />
</template>


<style>
/* .list-group-item:hover {} */

</style>