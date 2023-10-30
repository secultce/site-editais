<script setup>
import { onMounted, reactive } from "vue";
import DefaultCounterCard from "../../../examples/cards/counterCards/DefaultCounterCard.vue";

import helpers from "../../../helpers/helpers";

const state = reactive({
  countOpen : 0,
  countClosed: 0,
  countPublic: 0,
  countProgress: 0
})


const getData = () => {
  //Editais Aberto
  var noticeOpen = helpers.getNoticeOpen();
  noticeOpen.then(res => {
    state.countOpen = res.length
  })
  .catch(err => {
    console.log(err)
  })
  //Editais Encerrado
  var countClosed = helpers.getNoticeClosed();
  countClosed.then(res => {
    state.countClosed = res.length
  })
  .catch(err => {
    console.log(err)
  })
  //Editais conhecimento Publico
  var countPublic = helpers.getNoticePublic();
  countPublic.then(res => {
    state.countPublic = res.length
  })
  .catch(err => {
    console.log(err)
  })

  //Editais em processo
  var countProgress = helpers.getNoticeProcess();
  countProgress.then(res => {
    console.log(res.length)
    state.countProgress = res.length
  })
  .catch(err => {
    console.log(err)
  })


}

onMounted(() => {
  getData();
})



</script>

<template>
  <section class="pt-3 pb-4" id="count-stats">
    <div class="container">
      <div class="row">
        <div class="col-lg-9 z-index-2 border-radius-xl mx-auto py-3">
          <div class="row">
            <div class="col-md-3 position-relative">
              <DefaultCounterCard
                color="success"
                title="Inscrições aberta"
                description="Todos editais que estão no período de inscrição."
                :count="state.countOpen"
                :duration="3000"
                divider="vertical"
              />
            </div>
            <div class="col-md-3 position-relative">
              <DefaultCounterCard
                color="success"
                title="Conhecimento Público"
                description="Todos editais que ainda não iniciaram seu período de inscrição."
                :count="state.countPublic"
                :duration="3000"
                divider="vertical"
              />
            </div>
            <div class="col-md-3  position-relative">
              <DefaultCounterCard
                color="success"
                title="Processo de seleção"
                description="Todos editais que o período de inscrição foi encerrado mais ainda está em processo de publicação."
                :count="state.countProgress"
                :duration="3000"
                divider="vertical"
              />
            </div>
            <div class="col-md-3  position-relative">
              <DefaultCounterCard
                color="success"
                title="Inscrições encerradas"
                description="Todos editais que já foram finalizado e publicado resultado."
                :count="state.countClosed"
                :duration="3000"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
