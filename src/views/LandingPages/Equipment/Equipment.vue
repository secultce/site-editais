<script setup>
import Header from "../../../examples/Header.vue";
import NavbarDefault from "../../../examples/navbars/NavbarDefault.vue";

import DefaultFooter from "../../../examples/footers/FooterDefault.vue";
//images
import vueMkHeader from "@/assets/img/header-ceara.png";
import { reactive } from "vue";

const linkEquipments = [
  {
    title: 'Arquivo Público Estadual do Ceará',
    link: 'https://mapacultural.secult.ce.gov.br/espaco/499/'
  },
  {
    title: 'Casa de Juvenal Galeno',
    link: 'https://mapacultural.secult.ce.gov.br/espaco/490/'
  },
  {
    title: 'Centro Cultural Bom Jardim',
    link: 'https://ccbj.org.br/'
  },
  {
    title: 'Centro Dragão do Mar de Arte e Cultura',
    link: 'http://www.dragaodomar.org.br/'
  },
  {
    title: 'Escola de Artes e Ofícios Thomaz Pompeu Sobrinho',
    link: 'http://eao.org.br/'
  },
  {
    title: 'Museu de Arte Contemporânea do Ceará',
    link: 'http://www.dragaodomar.org.br/espacos/museu-de-arte-contemporanea'
  },
  {
    title: 'Museu da Cultura Cearense',
    link: 'http://www.dragaodomar.org.br/espacos/museu-da-cultura-cearense'
  },
  {
    title: 'Museu da Imagem e do Som',
    link: 'https://mapacultural.secult.ce.gov.br/espaco/265/'
  },
  {
    title: 'Teatro Carlos Câmara',
    link: 'https://mapacultural.secult.ce.gov.br/espaco/485/'
  },
  {
    title: 'Porto Iracema das Artes',
    link: 'https://portoiracemadasartes.org.br/'
  },
  {
    title: 'Biblioteca Pública do Estado do Ceará',
    link: 'http://www.bece.cultura.ce.gov.br/'
  },
  {
    title: 'Casa de Saberes Cego Aderaldo – Quixadá',
    link: 'https://mapacultural.secult.ce.gov.br/espaco/891/'
  },
  {
    title: 'Centro Cultural Porto Dragão',
    link: 'https://mapacultural.secult.ce.gov.br/espaco/1632/'
  },
  {
    title: 'Cineteatro São Luiz',
    link: 'https://www.cineteatrosaoluiz.com.br/'
  },
  {
    title: 'Escola de Gastronomia Social Ivens Dias Branco',
    link: 'https://gastronomiasocial.org.br/'
  },
  {
    title: 'Museu do Ceará',
    link: 'https://mapacultural.secult.ce.gov.br/espaco/87/'
  },
  {
    title: 'Museu Sacro São José de Ribamar',
    link: 'https://mapacultural.secult.ce.gov.br/espaco/539/'
  },
  {
    title: 'Sobrado Dr. José Lourenço',
    link: 'https://mapacultural.secult.ce.gov.br/espaco/305/'
  },
  {
    title: 'Theatro José de Alencar',
    link: 'https://mapacultural.secult.ce.gov.br/espaco/317/'
  },
  {
    title: 'Vila da Música – Crato',
    link: 'https://mapacultural.secult.ce.gov.br/espaco/1499/'
  },

]


</script>


<template>
  <div class="position-sticky  z-index-sticky top-0">
    <NavbarDefault dark transparent />
  </div>
  <Header>
    <div class="page-header min-vh-75" :style="`background-image: url(${vueMkHeader})`" loading="lazy" style="">
      <div class="container">
        <div class="row">
          <div class="col-lg-7 text-center mx-auto position-relative">
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
            <h3 class="border-bottom border-success">Rede de Equipamentos Culturais</h3>
            <p class="pe-5 py-3">
              Para democratizar, fomentar e fazer circular as artes no Ceará, além de proporcionar a
              formação e a profissionalização para diversas áreas, a Secult mantém uma rede de equipamentos culturais na
              capital e
              no interior do Estado. O Instituto Dragão do Mar contribui com a gestão de equipamentos como o Centro Dragão
              do Mar
              de Arte e Cultura, o Centro Cultural Grande Bom Jardim,
              a Escola Porto Iracema das Artes, entre outros, fortalecendo esta rede estadual.
            </p>

          </div>
          <div class="col-lg-6 mt-lg-0 mt-5 ps-lg-0 ps-0">
            <h3 class="border-bottom border-success">Links de acesso</h3>
            <ul class="list-group" v-for="(item, index) in linkEquipments">
              <a :href="item.link" :key="index" class="list-group-item list-group-item-action">
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


<style lang="scss" scoped></style>