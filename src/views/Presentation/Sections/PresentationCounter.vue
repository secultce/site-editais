<script setup>
import DefaultCounterCard from "../../../examples/cards/counterCards/DefaultCounterCard.vue";
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
                :count="70"              
                :duration="3000"
                divider="vertical"
              />
            </div>
            <div class="col-md-3 position-relative">
              <DefaultCounterCard
                color="success"
                title="Conhecimento Público"
                description="Todos editais que ainda não iniciaram seu período de inscrição."
                :count="15"
                :duration="3000"
                divider="vertical"
              />
            </div>
            <div class="col-md-3  position-relative">
              <DefaultCounterCard
                color="success"
                title="Processo de seleção"
                description="Todos editais que o período de inscrição foi encerrado mais ainda está em processo de publicação."
                :count="4"
                :duration="3000"
                divider="vertical"
              />
            </div>
            <div class="col-md-3  position-relative">
              <DefaultCounterCard
                color="success"
                title="Inscrições encerradas"
                description="Todos editais que já foram finalizado e publicado resultado."
                :count="34"
                :duration="3000"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
