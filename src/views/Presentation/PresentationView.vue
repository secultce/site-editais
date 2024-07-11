<script setup>
import { onMounted, onUnmounted, reactive, ref } from "vue";
import helpers from "../../helpers/helpers";
//example components
import NavbarDefault from "../..//examples/navbars/NavbarDefault.vue";
import DefaultFooter from "../../examples/footers/FooterDefault.vue";
import Header from "../../examples/Header.vue";
import FilledInfoCard from "../../examples/cards/infoCards/FilledInfoCard.vue";

// sections
import PresentationCounter from "./Sections/PresentationCounter.vue";
import PresentationInformation from "./Sections/PresentationInformation.vue";
import CenteredBlogCard from "@/examples/cards/blogCards/CenteredBlogCard.vue";
//SECULT
import HeaderBanner from "./Sections/Secult/HeaderBanner.vue";

const showNoticePublicConsultation = ref(false);
const showNoticePublic = ref(false);
const showNoticeOpen = ref(true);
const showNoticeProcess = ref(false);
const showNoticeClosed = ref(false);
const showDetails = ref(false);

const noticePublicConsultationFunc = () => {
  showNoticePublicConsultation.value = true
  showNoticePublic.value = false
  showNoticeOpen.value = false
  showNoticeProcess.value = false
  showNoticeClosed.value = false
  showDetails.value = false
}

const noticePublicFunc = () => {
  showNoticePublicConsultation.value = false
  showNoticePublic.value = true
  showNoticeOpen.value = false
  showNoticeProcess.value = false
  showNoticeClosed.value = false
  showDetails.value = false
}

const noticeOpenFunc = () => {
  showNoticePublicConsultation.value = false
  showNoticePublic.value = false
  showNoticeOpen.value = true
  showNoticeProcess.value = false
  showNoticeClosed.value = false
  showDetails.value = false
}

const noticeProcessFunc = () => {
  showNoticePublicConsultation.value = false
  showNoticePublic.value = false
  showNoticeOpen.value = false
  showNoticeProcess.value = true
  showNoticeClosed.value = false
  showDetails.value = false
}

const noticeClosedFunc = () => {
  showNoticePublicConsultation.value = false
  showNoticePublic.value = false
  showNoticeOpen.value = false
  showNoticeProcess.value = false
  showNoticeClosed.value = true
  showDetails.value = false
}

const renderGeneral = (notice) => {
  switch (notice.value) {
    case 'publicConsultation':
      noticePublicConsultationFunc()
      state.titleNoticeSelect = 'Editais em processo de construção'
      break;
    case 'public':
      noticePublicFunc()
      state.titleNoticeSelect = 'Editais com Conhecimento Público'
      break;
    case 'open':
      noticeOpenFunc()
      state.titleNoticeSelect = 'Editais com inscrições abertas'
      break;
    case 'progress':
      noticeProcessFunc()
      state.titleNoticeSelect = 'Editais em Processo de Seleção'
      break;
    case 'closed':
      noticeClosedFunc()
      state.titleNoticeSelect = 'Editais com inscrições encerrada'
      break;
    default:
      break;
  }
}

const closeAll = () => {
  showNoticePublicConsultation.value = false
  showNoticePublic.value = false
  showNoticeOpen.value = false
  showNoticeProcess.value = false
  showNoticeClosed.value = false
}

const detailsEdit = (id) => {
  showDetails.value = true
  state.titleNoticeSelect = '';
  state.idNotice = id

  closeAll()

}

const detailsEditImage = (notice) => {
  showDetails.value = true
  state.titleNoticeSelect = '';
  state.idNotice = notice.value
  closeAll()
}
const state = reactive({
  noticeOpen: [],
  noticeClosed: [],
  noticePublic: [],
  noticePublicConsultation: [],
  noticeProgress: [],
  countOpen: 0,
  countClosed: 0,
  countPublic: 0,
  totalActivePublicConsultations: 0,
  countProgress: 0,
  idNotice: 0,
  titleNoticeSelect: 'Editais com inscrições abertas'
})

const getData = () => {
  //Editais Aberto
  var noticeOpen = helpers.getNoticeOpen();
  noticeOpen.then(res => {
    state.noticeOpen = res
    state.countOpen = res.length
  })
    .catch(err => {
      console.log(err)
    })
  //Editais Encerrado
  var countClosed = helpers.getNoticeClosed();
  countClosed.then(res => {
    state.noticeClosed = res
    state.countClosed = res.length

  })
    .catch(err => {
      console.log(err)
    })
  //Editais conhecimento Publico
  var countPublic = helpers.getNoticePublic();
  countPublic.then(res => {
    state.noticePublic = res
    state.countPublic = res.length
  })
    .catch(err => {
      console.log(err)
    })

  //Editais em processo
  var countProgress = helpers.getNoticeProcess();
  countProgress.then(res => {
    state.noticeProgress = res
    state.countProgress = res.length
  })
    .catch(err => {
      console.log(err)
    })

  // Editais de consulta pública
  const totalActivePublicConsultations = helpers.getActivePublicConsultations()

  totalActivePublicConsultations.then(res => {
    state.noticePublicConsultation = res
    state.totalActivePublicConsultations = res.length
  })
    .catch(err => {
      console.log(err)
    })
}

//hooks
const body = document.getElementsByTagName("body")[0];
onMounted(() => {
  body.classList.add("presentation-page");
  body.classList.add("bg-gray-200");
  getData();
});
onUnmounted(() => {
  body.classList.remove("presentation-page");
  body.classList.remove("bg-gray-200");
});
</script>
<style>
.page-header>img {
  opacity: 0.5 !important;
  background: rgba(9, 30, 62, .7);
}
</style>
<template>
  <div class="container position-sticky z-index-sticky top-0">
    <div class="row">
      <div class="col-12">
        <NavbarDefault :sticky="true" />
      </div>
    </div>
  </div>

  <Header>
    <HeaderBanner />
  </Header>

  <div class="card card-body blur shadow-blur mx-3 mx-md-4 mt-n6">
    <!-- Passando a contagem dos editais -->
    <PresentationCounter :countOpen="state.countOpen" :countClosed="state.countClosed" :countPublic="state.countPublic"
      :countProgess="state.countProgress" :totalActivePublicConsultations="state.totalActivePublicConsultations"
      @notice="renderGeneral" />
    <!-- Sessão para mostrar os editais -->
    <section class="p-4">
      <div class="container">
        <div class="row">
          <div v-if="state.titleNoticeSelect !== ''"
            class="section-title text-center position-relative pb-3 mb-5 mx-auto">
            <h1>{{ state.titleNoticeSelect }}</h1>
          </div>
          <div v-for="(item, index) in state.noticeOpen" v-if="(showNoticeOpen)"
            class="col-md-4 z-index-2 border-radius-xl mx-auto py-3 mt-2">
            <div class="row-card">
              <div class="card animate__animated animate__backInUp" :key="index">
                <CenteredBlogCard style="max-height: 700px;" :image="item['@files:avatar.avatarBig'].url"
                  :title="item.name" :description="item.shortDescription" :href="item.singleUrl"
                  @noticeClick="detailsEditImage" :id="item.id" />
                <div class="card-body text-center">
                  <a type="button" class="btn btn-sm mb-0 mt-3 bg-gradient-success" @click="detailsEdit(item.id)">
                    Mais informação
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div v-for="(item, index) in state.noticePublic" v-if="(showNoticePublic)"
            class="col-md-4 z-index-2 border-radius-xl mx-auto py-3 mt-2">
            <div class="row-card">
              <div class="card" :key="index">
                <CenteredBlogCard style="max-height: 700px;" :image="item['@files:avatar.avatarBig'].url"
                  :title="item.name" :description="item.shortDescription" :href="item.singleUrl"
                  @noticeClick="detailsEditImage" :id="item.id" />
                <div class="card-body text-center">
                  <a type="button" class="btn btn-sm mb-0 mt-3 bg-gradient-success" @click="detailsEdit(item.id)">
                    Mais informação
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div v-for="(item, index) in state.noticePublicConsultation" v-if="(showNoticePublicConsultation)"
            class="col-xl-10 col-xxl-8 z-index-2 border-radius-xl mx-auto mb-5 mt-n3">
            <div class="info-horizontal border-radius-xl d-block d-md-flex bg-white px-lg-3 p-4 shadow-lg"
              height="h-100" :key="index" style="overflow-wrap: break-word;">
              <i class="material-icons text-3xl text-success">public</i>
              <div class="ps-0 ps-md-3 mt-3 mt-md-0">
                <h5>{{ item.title }}</h5>
                <p>{{ item.subtitle }}</p>
                <a :href="item.googleDocsLink" class="icon-move-right text-success" target="_blank">
                  Acessar Documento <i class="fas fa-arrow-right text-sm ms-1" aria-hidden="true"></i>
                </a>
              </div>
            </div>
          </div>
          <div v-for="(item, index) in state.noticeProgress" v-if="(showNoticeProcess)"
            class="col-md-4 z-index-2 border-radius-xl mx-auto py-3 mt-2">
            <div class="row-card">
              <div class="card animate__animated animate__backInUp" :key="index">
                <CenteredBlogCard style="max-height: 700px;" :image="item['@files:avatar.avatarBig'].url"
                  :title="item.name" :description="item.shortDescription" :href="item.singleUrl"
                  @noticeClick="detailsEditImage" :id="item.id" />
                <div class="card-body text-center">
                  <a type="button" class="btn btn-sm mb-0 mt-3 bg-gradient-success" @click="detailsEdit(item.id)">
                    Mais informação
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div v-for="(item, index) in state.noticeClosed" v-if="(showNoticeClosed)"
            class="col-md-4 z-index-2 border-radius-xl mx-auto py-3 mt-2">
            <div class="row-card">
              <div class="card animate__animated animate__backInUp" :key="index">
                <CenteredBlogCard style="max-height: 700px;" :image="item['@files:avatar.avatarBig'].url"
                  :title="item.name" :description="item.shortDescription" :href="item.singleUrl"
                  @noticeClick="detailsEditImage" :id="item.id" />
                <div class="card-body text-center">
                  <a type="button" class="btn btn-sm mb-0 mt-3 bg-gradient-success" @click="detailsEdit(item.id)">
                    Mais informação
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    <div v-if="(showDetails)">
      <PresentationInformation :id="state.idNotice" />
    </div>
    <!-- <PresentationExample :data="data" />
    <PresentationPages />
    <BuiltByDevelopers /> -->

    <div class="container">
      <div class="row">
        <div class="col-lg-4">
          <FilledInfoCard class="p-4" :color="{ text: 'white', background: 'bg-gradient-success' }"
            :icon="{ component: 'flag', color: 'white' }" title="Ceará Transparente"
            description="Consulte informações, Dados Abertos e Páginas de Transparência." :action="{
              route:
                'https://cearatransparente.ce.gov.br/',
              label: { text: 'Acessar', color: 'white' }
            }" />
        </div>
        <div class="col-lg-4">
          <FilledInfoCard class="px-lg-1 mt-lg-0 mt-4 p-4" height="h-100"
            :icon="{ component: 'precision_manufacturing', color: 'success' }" title="Ceará Digital" description="Ele será seu ajudante e facilitador na busca de serviços executados pelos 
            órgãos e setores do estado do Ceará" :action="{
              route:
                'https://cearadigital.ce.gov.br/',
              label: { text: 'Acessar' }
            }" />
        </div>
        <div class="col-lg-4">
          <FilledInfoCard class="px-lg-1 mt-lg-0 mt-4 p-4" :icon="{ component: 'receipt_long', color: 'success' }"
            title="Ações do Governo"
            description="A Casa Civil tem por finalidade assistir diretamente o Governador no desempenho de suas atribuições."
            :action="{
              route:
                'https://www.ceara.gov.br/governo/',
              label: { text: 'Acessar' }
            }" />
        </div>
      </div>
    </div>

    <div class="py-5">
      <div class="container">
        <div class="row">
          <div class="col-lg-5 ms-auto">
            <h4 class="mb-1">Obrigado por nos visitar</h4>
            <p class="lead mb-0">
              A Secretaria da Cultura (Secult) tem como missão executar, superintender e coordenar as atividades de
              proteção do patrimônio cultural do Ceará,
              difusão da cultura e aprimoramento cultural do povo cearense
            </p>
          </div>
          <div class="col-lg-5 me-lg-auto my-lg-auto text-lg-end mt-5">
            <a href="https://www.secult.ce.gov.br/a-secretaria/" target="_blank" class="btn btn-success m-2">
              Sobre a Secult
            </a>
            <a href="https://www.secult.ce.gov.br/a-secretaria/#destaque1" target="_blank" class="btn btn-success m-2">
              Quem é quem
            </a>
            <a href="https://www.secult.ce.gov.br/eixos/" target="_blank" class="btn btn-success m-2">
              Políticas
            </a>
          </div>
        </div>
      </div>
    </div>
  </div>
  <DefaultFooter />
</template>
