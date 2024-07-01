<script setup>
import DefaultCounterCard from "../../../examples/cards/counterCards/DefaultCounterCard.vue";

defineProps({
  countOpen   : Number,
  countClosed : Number,
  countPublic : Number,
  countProgess: Number,
  totalActivePublicConsultations: Number,
})

const emit = defineEmits(['notice'])

const showCategory = (value) => {
  let emitClosed = {
      value: value   
  }
  emit("notice", emitClosed)
}
</script>

<template>
  <section class="pt-3 pb-4" id="count-stats">
    <div class="container">
      <div class="row">
        <div class="col-xxl-11 z-index-2 border-radius-xl mx-auto py-3">
          <div class="row">
            <div class="col-sm-4 col-lg position-relative mb-4">
              <DefaultCounterCard
                color="success"
                title="Consulta Pública"
                description="Editais que estão em processo de construção."
                :count="totalActivePublicConsultations"
                :duration="3000"
                divider="vertical"
              />
              <div class="d-flex justify-content-center  align-items-end ">
                <a type="button" class="btn btn-sm mb-0 mt-3 bg-gradient-success" @click="showCategory('publicConsultation')">
                  Ver editais
                </a>
             </div>              
            </div>
            <div class="col-sm-4 col-lg position-relative mb-4">
              <DefaultCounterCard
                color="success"
                title="Conhecimento público"
                description="Editais que ainda não iniciaram seu período de inscrição."
                :count="countPublic"
                :duration="3000"
                divider="vertical"
              />
              <div class="d-flex justify-content-center  align-items-end ">
                <a type="button" class="btn btn-sm mb-0 mt-3 bg-gradient-success"  @click="showCategory('public')">
                  Ver editais
                </a>
             </div>              
            </div>
            <div class="col-sm-4 col-lg position-relative mb-4">
              <DefaultCounterCard
                color="success"
                title="Inscrições abertas"
                description="Editais que estão no período de inscrição."
                :count="countOpen"
                :duration="3000"
                divider="vertical"
              />
             <div class="d-flex justify-content-center align-items-end">
                <a type="button" class="btn btn-sm mb-0 mt-3 bg-gradient-success" @click="showCategory('open')">
                  Ver editais
                </a>
             </div>
            </div>
            <div class="col-sm-4 col-lg position-relative mb-4">
              <DefaultCounterCard
                color="success"
                title="Processo de seleção"
                description="Editais com inscrições encerradas e em processo de habilitação."
                :count="countProgess"
                :duration="3000"
                divider="vertical"
              />
              <div class="d-flex justify-content-center  align-items-end">
                <a type="button" class="btn btn-sm mb-0 mt-3 bg-gradient-success"  @click="showCategory('progress')">
                  Ver editais
                </a>
             </div>
            </div>
            <div class="col-sm-4 col-lg position-relative mb-4">
              <DefaultCounterCard
                color="success"
                title="Em Formalização"
                description="Editais com resultado publicado."
                :count="countClosed"
                :duration="3000"
              />
              <div class="d-flex justify-content-center  align-items-end">
                <a type="button" class="btn btn-sm mb-0 mt-3 bg-gradient-success" @click="showCategory('closed')">
                  Ver editais
                </a>
             </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
  <!-- <section class="p-4">
    <div class="container">
      <div class="row">
        <div v-for="(item, index) in state.noticeOpen" v-if="(showNoticeOpen)" class="col-md-4 z-index-2 border-radius-xl mx-auto py-3 mt-2">
          <div class="row-card">            
            <div class="card">
            <CenteredBlogCard
              style="max-height: 700px;"
              :image="item['@files:avatar.avatarBig'].url"
              :title="item.name"
              :description="item.shortDescription"
              :href="item.singleUrl"
            />
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
  </section> -->
</template>

<style>
.row-card {
    --bs-gutter-x: 1.5rem;
    --bs-gutter-y: 0;
    display: flex;
    flex-wrap: wrap;
    margin-top: calc(-1 * var(--bs-gutter-y));
    margin-right: calc(-0.0 * var(--bs-gutter-x));
    margin-left: calc(-0.5 * var(--bs-gutter-x));
}
.card .card-body {
    font-family: "Roboto", Helvetica, Arial, sans-serif;
    padding: 1rem !important;
}

</style>
