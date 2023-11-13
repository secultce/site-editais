<script setup>
import logoDark from "@/assets/img/secult-escura.png";
defineProps({
  brand: {
    type: Object,
    name: String,
    logo: String,
    route: "",
    default: () => ({
      name: "Secretaria da Cultura do Ceará",
      logo: logoDark,
      route: "https://www.secult.ce.gov.br/"
    })
  },
  socials: {
    type: Array,
    icon: String,
    link: String,
    default: () => [
      {
        icon: '<i class="fab fa-facebook text-lg opacity-8"></i>',
        link: "https://www.facebook.com/secultceara/"
      },
      {
        icon: '<i class="fab fa-instagram text-lg opacity-8"></i>',
        link: "https://www.instagram.com/secultceara/"
      },
      {
        icon: '<i class="fab fa-youtube text-lg opacity-8"></i>',
        link: "https://www.youtube.com/channel/UCVckZREupHqHkoS7MmxwH9w"
      }
    ]
  },
  menus: {
    type: Array,
    name: String,
    items: {
      type: Array,
      name: String,
      href: String
    },
    default: () => [
      {
        name: "company",
        items: [
          {
            name: "about us",
            href: "https://www.creative-tim.com/presentation"
          },
          {
            name: "freebies",
            href: "https://www.creative-tim.com/templates/free"
          },
          {
            name: "premium tools",
            href: "https://www.creative-tim.com/templates/premium"
          },
          { name: "blog", href: "https://www.creative-tim.com/blog" }
        ]
      },
      {
        name: "resources",
        items: [
          { name: "illustrations", href: "https://iradesign.io/" },
          {
            name: "bits & snippets",
            href: "https://www.creative-tim.com/bits"
          },
          {
            name: "affiliate program",
            href: "https://www.creative-tim.com/affiliates/new"
          }
        ]
      },
      {
        name: "help & support",
        items: [
          {
            name: "contact us",
            href: "https://www.creative-tim.com/contact-us"
          },
          {
            name: "knowledge center",
            href: "https://www.creative-tim.com/knowledge-center"
          },
          {
            name: "custom development",
            href: "https://services.creative-tim.com/"
          },
          {
            name: "sponsorships",
            href: "https://www.creative-tim.com/sponsorships"
          }
        ]
      },
      {
        name: "legal",
        items: [
          {
            name: "terms & conditions",
            href: "https://www.creative-tim.com/terms"
          },
          {
            name: "privacy policy",
            href: "https://www.creative-tim.com/privacy"
          },
          {
            name: "licenses (EULA)",
            href: "https://www.creative-tim.com/license"
          }
        ]
      }
    ]
  }
});
</script>
<template>
  <footer class="footer pt-5 mt-5">
    <div class="container">
      <div class="row">
        <div class="col-md-3 mb-4">
          <div>
            <a :href="brand.route">
              <img :src="brand.logo" class="mb-3 footer-logo" alt="main_logo" />
            </a>
            <h6 class="font-weight-bolder mb-4">{{ brand.name }}</h6>
          </div>
          <div>
            <ul class="d-flex flex-row ms-n3 nav">
              <li
                class="nav-item"
                v-for="{ icon, link } of socials"
                :key="link"
              >
                <a
                  class="nav-link pe-1"
                  :href="link"
                  target="_blank"
                  v-html="icon"
                >
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div
          class="col-md-3 col-sm-6 col-6 mb-4"
        >
          <h6 class="text-sm">SEDE DA SECULT</h6>
          <ul class="flex-column ms-n3 nav">
            <li class="nav-item" >
              <a class="nav-link" >
                RUA MAJOR FACUNDO, 500
              </a>
            </li>
            <li class="nav-item" >
              <a class="nav-link" >
                CENTRO, FORTALEZA, CE
              </a>
            </li>
            <li class="nav-item" >
              <a class="nav-link" >
                CEP: 60.025-100
              </a>
            </li>
            
          </ul>
        </div>

        <div
          class="col-md-3 col-sm-6 col-6 mb-4"
        >
          <h6 class="text-sm">HORÁRIO DE ATENDIMENTO</h6>
          <ul class="flex-column ms-n3 nav">
            <li class="nav-item" >
              <a class="nav-link" >
                DE SEGUNDA A SEXTA 08 ÀS 17 HORAS
              </a>
            </li>            
          </ul>
        </div>


        <div class="col-md-3 col-sm-6 col-6 mb-4">
          <h6 class="text-sm">CONTATO</h6>
          <ul class="flex-column ms-n3 nav">
            <li class="nav-item" >
              <a class="nav-link" >
                (85) 3101- 6767
              </a>
            </li>
            <li class="nav-item" >
              <a class="nav-link" >
                (85) 98115-2400
              </a>
            </li>
            <li class="nav-item" >
              <a class="nav-link" >
               <strong>E-MAIL:</strong> AGENDAGAB@SECULT.CE.GOV.BR
              </a>
            </li>
          </ul>
        </div>

        
        <div class="col-12">
          <div class="text-center">
            <p class="text-dark my-4 text-sm font-weight-normal">
              Todos os direitos reservados. Copyright ©
              {{ new Date().getFullYear() }}
              Secretaria da Cultura do Ceará
            </p>
          </div>
        </div>
      </div>
    </div>
  </footer>
</template>

<style>
.footer .footer-logo {
  max-width: 15rem !important;
}

</style>
