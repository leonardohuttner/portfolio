<template>
  <q-layout view="lHh Lpr lFf">
    <!-- Navbar fixa -->
    <q-header elevated class="bg-white text-grey-9">
      <q-toolbar class="q-px-xl">
        <q-toolbar-title class="text-weight-medium">
          <span class="text-green">i'm</span> Leonardo
        </q-toolbar-title>
        <q-btn flat label="Início" @click="scrollTo('hero')" />
        <q-btn flat label="Sobre" @click="scrollTo('about')" />
        <q-btn flat label="IA" @click="scrollTo('ai')" />
        <q-btn flat label="Projetos" @click="scrollTo('projects')" />
        <q-btn flat label="Linha do tempo" @click="scrollTo('timeline')" />
        <q-btn flat label="Contato" @click="scrollTo('contact')" />
        <q-btn flat label="Newsletter" @click="showNewsletter = true" />
      </q-toolbar>
    </q-header>

    <q-page-container>
      <!-- Hero -->
      <section
        id="hero"
        class="section-slide flex flex-center contact-gradient"
      >
        <div class="row items-center q-col-gutter-xl max-w-screen-lg">
          <div class="col-12 col-md-6 text-center text-md-left">
            <h1 class="text-h2 text-weight-bold text-grey-9 q-mb-md">
              Desenvolvedor Fullstack <br />
            </h1>
            <p class="text-body1 text-grey-9 q-mb-lg">
              👋 Sou Leonardo — desenvolvedor fullstack com experiência em
              integrações, APIs e aplicações web. Gosto de música, programar,
              criptomoedas, economia e me aventuro com alguns instrumentos.
            </p>
            <div
              class="row q-col-gutter-md justify-center justify-md-start q-gutter-x-sm"
            >
              <q-card class="col-5 q-pa-sm">
                <p class="text-subtitle1 text-weight-medium">Atual</p>
                <p class="text-body2">Desenvolvedor SR / Grupo Lins Ferrão</p>
              </q-card>
              <q-card class="col-5">
                <p class="text-subtitle1 text-weight-medium text-center">
                  Atual
                </p>
                <p class="text-body2">Professor TI/ Senac</p>
              </q-card>
              <div class="col-12">
                <p class="text-subtitle1 text-grey-9 text-weight-medium">
                  <q-icon name="place" />Localização
                </p>
                <p class="text-body1 text-grey-9">Rio Grande do Sul · Brasil</p>
              </div>
            </div>
          </div>
          <div class="col-12 col-md-6 flex flex-center q-mt-md">
            <q-img
              src="./../assets/perfil.png"
              alt="Foto Leonardo"
              class="rounded-borders"
              style="max-width: 300px; border-radius: 24px"
            />
          </div>
        </div>
      </section>

      <!-- Sobre mim -->
      <section
        id="about"
        class="section-slide contact-gradient-inverse flex flex-center"
      >
        <div class="max-w-screen-md q-mx-auto text-center">
          <q-img
            src="./../assets/perfil.png"
            alt="Foto Leonardo"
            class="rounded-borders"
            style="max-width: 300px; border-radius: 24px"
          />
          <h2 class="text-h4 text-grey-9 q-mb-md">Sobre mim</h2>
          <p class="text-body1 text-grey-9 q-mb-xl">
            Formado em Análise e Desenvolvimento de Sistemas, pós-graduado em
            Docência para Ensino Técnico e atualmente pós-graduando em Ciência
            de Dados e Inteligência Artificial (previsão jan/26). <br />
            Trabalho principalmente com Python, Docker e frontend em VueJS.
            Atualmente atuo no setor de integração de NFs e de estoques
            integrados com filas.
          </p>

          <div class="row q-col-gutter-lg justify-center q-gutter-x-sm">
            <q-card class="col-12 col-md-3 card-slide">
              <q-card-section>
                <q-icon name="person" size="36px" color="primary" />
                <p class="q-mt-sm text-body2">
                  Analise e Desenvolvimento de sistemas
                </p>
              </q-card-section>
            </q-card>
            <q-card class="col-12 col-md-3 card-slide">
              <q-card-section>
                <q-icon name="analytics" size="36px" color="teal" />
                <p class="q-mt-sm text-body2">
                  Pós em docencia ensino tecnico, DataScience e IA
                </p>
              </q-card-section>
            </q-card>
            <q-card class="col-12 col-md-3 card-slide">
              <q-card-section>
                <q-icon name="autorenew" size="36px" color="deep-orange" />
                <p class="q-mt-sm text-body2">Aprendizado continuo</p>
              </q-card-section>
            </q-card>
          </div>
        </div>
      </section>

      <section id="ai" class="section-slide contact-gradient flex flex-center">
        <div class="max-w-screen-lg q-mx-auto text-center">
          <h2 class="text-h4 text-grey-9 q-mb-lg">
            Inteligência Artificial & Dados
          </h2>
          <p class="text-body1 text-grey-9 q-mb-xl">
            Inteligência Artificial é uma das áreas mais promissoras para
            transformar dados em valor, tanto para voce quanto sua empresa.
            Acredito no impacto que ela pode trazer:
          </p>
          <div class="row q-col-gutter-lg justify-center q-gutter-x-sm">
            <q-card class="col-12 col-md-3 card-slide">
              <q-card-section>
                <q-icon name="storage" size="36px" color="primary" />
                <p class="q-mt-sm text-body2">Aprender com dados</p>
              </q-card-section>
            </q-card>
            <q-card class="col-12 col-md-3 card-slide">
              <q-card-section>
                <q-icon name="analytics" size="36px" color="teal" />
                <p class="q-mt-sm text-body2">Apoiar decisões</p>
              </q-card-section>
            </q-card>
            <q-card class="col-12 col-md-3 card-slide">
              <q-card-section>
                <q-icon name="autorenew" size="36px" color="deep-orange" />
                <p class="q-mt-sm text-body2">Automatizar tarefas</p>
              </q-card-section>
            </q-card>
          </div>
        </div>
      </section>

      <!-- Projetos -->
      <section
        id="projects"
        class="section-slide contact-gradient-inverse flex flex-center"
      >
        <div class="max-w-screen-lg q-mx-auto text-center">
          <h2 class="text-h4 text-grey-9 q-mb-xl">Projetos & Ferramentas</h2>
          <div
            class="row q-col-gutter-lg justify-center q-gutter-x-sm q-gutter-y-sm"
          >
            <q-card class="col-12 col-md-5 card-slide">
              <q-card-section>
                <q-icon name="local_shipping" size="36px" color="primary" />
                <h3 class="text-subtitle1 q-mt-md">CapivaraTracker</h3>
                <p class="text-body2 text-grey-9">
                  Rastreamento de encomendas via API dos Correios/Melhor envio.
                  Como os correios ainda não tinha app e eu gostava de monitorar
                  e validar minhas encomendas surgiu esse projeto, porem hoje ja
                  obsoleto por que a api foi desligada desde o lançamento
                  proprio dos correios).
                </p>
              </q-card-section>
              <q-card-actions align="center">
                <q-btn
                  outline
                  label="Conhecer"
                  color="primary"
                  @click="openURL('https://capivara-tracker.vercel.app/')"
                />
              </q-card-actions>
            </q-card>

            <q-card class="col-12 col-md-5 card-slide">
              <q-card-section>
                <q-icon
                  name="account_balance_wallet"
                  size="36px"
                  color="green"
                />
                <h3 class="text-subtitle1 q-mt-md">App de Finanças</h3>
                <p class="text-body2 text-grey-9">
                  Controle completo de investimentos, contas, metas, faturas e
                  criptos. (Andamento - Ja é possivel ser usuario tester)
                </p>
              </q-card-section>
              <q-card-actions align="center">
                <q-btn
                  outline
                  label="Conhecer"
                  color="green"
                  @click="openURL('https://bills.leonardohuttner.com.br/')"
                />
              </q-card-actions>
            </q-card>

            <q-card class="col-12 col-md-5 card-slide">
              <q-card-section>
                <q-icon name="currency_bitcoin" size="36px" color="orange" />
                <h3 class="text-subtitle1 q-mt-md">App de Criptomoedas</h3>
                <p class="text-body2 text-grey-9">
                  Site para monitorar carteiras, transações e preços em tempo
                  real. (Andamento)
                </p>
              </q-card-section>
              <q-card-actions align="center">
                <q-btn
                  outline
                  label="Conhecer"
                  color="orange"
                  @click="openURL('https://block-info.vercel.app/')"
                />
              </q-card-actions>
            </q-card>

            <q-card class="col-12 col-md-5 card-slide">
              <q-card-section>
                <q-icon name="phone" size="36px" color="deep-orange-7" />
                <h3 class="text-subtitle1 q-mt-md">Contatos</h3>
                <p class="text-body2 text-grey-9">
                  Site de links uteis para uma loja
                </p>
              </q-card-section>
              <q-card-actions align="center">
                <q-btn
                  outline
                  label="Conhecer"
                  color="blue"
                  @click="openURL('https://contato.territoriocamaqua.com.br/')"
                />
              </q-card-actions>
            </q-card>

            <q-card class="col-12 col-md-5 card-slide">
              <q-card-section>
                <q-icon name="bolt" size="36px" color="green" />
                <h3 class="text-subtitle1 q-mt-md">
                  Desenvolvimento de automações no-code
                </h3>
                <p class="text-body2 text-grey-9">
                  Desenvolvimento com fluxos e agentes de IA rapido.
                </p>
              </q-card-section>
              <!-- <q-card-actions align="center">
                <q-btn outline label="Conhecer" color="blue" />
              </q-card-actions> -->
            </q-card>

            <q-card class="col-12 col-md-5 card-slide">
              <q-card-section>
                <q-icon name="cloud" size="36px" color="blue" />
                <h3 class="text-subtitle1 q-mt-md">
                  Over-engineering for study
                </h3>
                <p class="text-body2 text-grey-8">
                  VPS Oracle com Docker usando N8N, agentes de IA e nuvem
                  própria para estudos.
                </p>
              </q-card-section>
              <!-- <q-card-actions align="center">
                <q-btn outline label="Conhecer" color="blue" />
              </q-card-actions> -->
            </q-card>
          </div>
        </div>
      </section>

      <!-- Linha do Tempo -->
      <section
        id="timeline"
        class="section-slide contact-gradient flex flex-center"
      >
        <div class="max-w-screen-md q-mx-auto text-center">
          <h2 class="text-h4 text-grey-9 q-mb-xl">
            Linha do Tempo Profissional
          </h2>
          <q-timeline layout="comfortable" color="primary">
            <q-timeline-entry
              :color="tempo.color"
              :title="tempo.title"
              :subtitle="tempo.subtitle"
              v-for="tempo in linhaTempo"
              :key="tempo.color"
            >
              <q-card flat bordered class="text-grey-8">
                <q-card-section class="text-body2">
                  {{ tempo.subtitle2 }}
                </q-card-section>
              </q-card>
            </q-timeline-entry>
          </q-timeline>
        </div>
      </section>

      <!-- Contato -->
      <section
        id="contact"
        class="section-slide contact-gradient-inverse flex flex-center"
      >
        <iframe
          src="https://n8n-oracle.leonardohuttner.com.br/form/contato"
          frameborder="0"
          width="100%"
          height="600px"
        ></iframe>
      </section>

      <!-- Newsletter -->
      <!-- <section
        id="newsletter"
        class="section-slide contact-gradient flex flex-center"
      >
        <iframe
          src="https://n8n-oracle.leonardohuttner.com.br/form/newsletter"
          frameborder="0"
          width="100%"
          height="600px"
        ></iframe>
      </section> -->

      <!-- Footer -->
      <footer class="bg-grey-9 text-white q-pa-md text-center">
        <p class="q-mb-sm">© 2025 Desenvolvido por Leonardo</p>
        <div class="row justify-center q-gutter-md">
          <q-btn
            flat
            round
            color="white"
            icon="mdi-github"
            href="https://github.com/leonardohuttner"
            target="_blank"
          />
          <q-btn
            flat
            round
            color="white"
            icon="mdi-linkedin"
            href="https://linkedin.com/in/leonardo-huttner"
            target="_blank"
          />
          <q-btn
            flat
            round
            color="white"
            icon="mdi-email"
            href="mailto:contato@leonardohuttner.com.br"
          />
        </div>
      </footer>

      <!-- Modal Newsletter -->
      <q-dialog v-model="showNewsletter" persistent>
        <q-card>
          <q-card-section class="row items-center justify-between">
            <div class="text-h6">Newsletter</div>
            <q-btn flat round dense icon="close" @click="closeNewsletter" />
          </q-card-section>

          <q-card-section>
            <iframe
              src="https://n8n-oracle.leonardohuttner.com.br/form/newsletter"
              frameborder="0"
              width="500px"
              height="600px"
            ></iframe>
          </q-card-section>
        </q-card>
      </q-dialog>
    </q-page-container>
  </q-layout>
</template>

<script setup>
import { openURL } from "quasar";
import { ref, onMounted } from "vue";

const showNewsletter = ref(false);

onMounted(() => {
  const dismissed = localStorage.getItem("newsletterDismissed");
  if (!dismissed) {
    showNewsletter.value = true; // só abre se nunca foi fechado antes
  }
});

const closeNewsletter = () => {
  showNewsletter.value = false;
  localStorage.setItem("newsletterDismissed", "true");
};

const linhaTempo = ref([
  {
    color: "blue",
    title: "Desenvolvedor SR - Grupo Lins Ferrão",
    subtitle: "jan 2024 - atual",
    subtitle2:
      "Desenvolvimento de integrações OMNI e CRM, APIs e aplicações web.",
  },
  {
    color: "teal",
    title: "Professor - Senac RS",
    subtitle: "abr 2025 - atual",
    subtitle2: "Técnico em informática | Redes | Desenvolvimento Web",
  },
  {
    color: "indigo",
    title: "Desenvolvedor Pl - Grupo Lins Ferrão",
    subtitle: "fev 2023 - dez 2023",
    subtitle2: "Projetos em VueJS, APIs Python e banco de dados MySQL.",
  },
  {
    color: "purple",
    title: "Desenvolvedor Jr - Grupo Lins Ferrão",
    subtitle: "jan 2021 - jan 2023",
    subtitle2:
      "Desenvolvimento frontend em VueJS e apoio em APIs Flask/Django.",
  },
  {
    color: "deep-orange",
    title: "Técnico de TI - 3º Batalhão Logístico",
    subtitle: "fev 2018 - jan 2019",
    subtitle2: "Suporte tecnico e manutenção de equipamentos",
  },
  {
    color: "red",
    title: "Suporte - RBN Tecnologia",
    subtitle: "nov 2016 - fev 2018",
    subtitle2:
      "Suporte em TI e manutenção de sistemas para empresas. Servidores linux,computadores, rede e AD",
  },
]);

const scrollTo = (id) => {
  const el = document.getElementById(id);
  if (el) {
    el.scrollIntoView({ behavior: "smooth" });
  }
};
</script>

<style scoped>
:root {
  --bg: #fff6f4; /* tom rosado/pálido */
  --text: #2b2726; /* tom carvão */
  --muted: #7a7676;
  --card: #fff;
}

.portfolio-page {
  background: var(--bg);
  color: var(--text);
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto,
    "Helvetica Neue", Arial;
}
.container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 18px;
}
.header {
  position: sticky;
  top: 0;
  z-index: 50;
  background: transparent;
  padding: 12px 0;
}
.logo {
  font-weight: 700;
  font-size: 1.05rem;
}
.nav a {
  margin-left: 18px;
  text-decoration: none;
  color: var(--text);
  font-weight: 500;
  opacity: 0.9;
}
.nav a:hover {
  opacity: 1;
}

/* HERO */
.hero {
  padding-top: 56px;
}
.hero-title {
  font-weight: 800;
  font-size: clamp(2.6rem, 6vw, 4.8rem);
  line-height: 0.95;
  margin: 0;
}
.hero-accent {
  display: block;
  color: var(--text);
  opacity: 0.98;
}
.hero-sub {
  margin-top: 18px;
  color: var(--muted);
  font-size: 1.05rem;
}
.hero-meta .meta-title {
  font-weight: 600;
  margin-bottom: 6px;
}
.meta-desc {
  color: var(--muted);
}

.hero-image .image-mask {
  display: flex;
  justify-content: flex-end;
}
.hero-image img {
  width: 420px;
  max-width: 96%;
  height: auto;
  object-fit: cover;
  border-radius: 120px 24px 120px 24px;
  box-shadow: 0 30px 60px rgba(0, 0, 0, 0.08);
}

.section {
  margin-top: 36px;
}
.section h2 {
  font-size: 1.6rem;
  margin-bottom: 12px;
  font-weight: 700;
}
.lead {
  color: var(--muted);
  font-size: 1rem;
}
.profile-card {
  border-radius: 12px;
  background: var(--card);
  border: 1px solid rgba(0, 0, 0, 0.05);
}

/* IA */
.section-ia .ia-visual {
  display: flex;
  align-items: center;
  justify-content: center;
}
.ia-box {
  border-radius: 18px;
  padding: 28px;
  background: rgba(255, 255, 255, 0.6);
  border: 1px solid rgba(0, 0, 0, 0.04);
  color: var(--text);
  font-weight: 600;
}
.ia-list {
  margin-top: 12px;
  color: var(--muted);
}

/* Projects */
.projects-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(240px, 1fr));
  gap: 18px;
}
.project-card {
  background: transparent;
  border-radius: 18px;
  padding: 20px;
  border: 1px solid rgba(0, 0, 0, 0.06);
}
.project-title {
  font-weight: 700;
  font-size: 1.05rem;
}
.project-desc {
  color: var(--muted);
  margin-top: 8px;
}

.tool-list {
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
}
.tool {
  padding: 6px 10px;
  border-radius: 999px;
  border: 1px solid rgba(0, 0, 0, 0.05);
  background: rgba(255, 255, 255, 0.6);
  color: var(--text);
  font-size: 0.9rem;
}

/* Timeline */
.timeline {
  position: relative;
  padding: 24px 0;
}
.timeline-line {
  position: absolute;
  left: 50%;
  transform: translateX(-50%);
  width: 4px;
  top: 0;
  bottom: 0;
  background: linear-gradient(180deg, rgba(0, 0, 0, 0.06), rgba(0, 0, 0, 0.02));
}
.timeline-items {
  display: flex;
  flex-direction: column;
  gap: 28px;
}
.timeline-item {
  position: relative;
  width: 100%;
  display: flex;
  justify-content: flex-end;
}
.timeline-item.left {
  justify-content: flex-start;
}
.timeline-card {
  max-width: 520px;
  background: var(--card);
  border-radius: 12px;
  padding: 16px 18px;
  border: 1px solid rgba(0, 0, 0, 0.06);
  box-shadow: 0 12px 30px rgba(0, 0, 0, 0.04);
}
.timeline-date {
  font-weight: 600;
  color: var(--muted);
  margin-bottom: 6px;
}
.timeline-title {
  font-weight: 700;
}
.timeline-sub {
  color: var(--muted);
  font-size: 0.95rem;
  margin-top: 6px;
}
.timeline-desc {
  margin-top: 8px;
  color: var(--muted);
}

.section-slide {
  min-height: 100vh;
  padding: 60px 20px;
}
.card-slide {
  border-radius: 18px;
  text-align: center;
  padding: 20px;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.08);
}
.max-w-screen-md {
  max-width: 800px;
}
.max-w-screen-lg {
  max-width: 1100px;
}

/* Footer */
.footer {
  background: transparent;
}

/* Smooth scroll global */
html {
  scroll-behavior: smooth;
}

/* Responsiveness tweaks */
@media (max-width: 900px) {
  .timeline-line {
    left: 8%;
    transform: none;
  }
  .timeline-item {
    justify-content: flex-start;
  }
  .hero-title {
    font-size: clamp(2rem, 8vw, 3rem);
  }
  .hero-image img {
    width: 280px;
  }
}
.contact-gradient {
  background: linear-gradient(135deg, #d6dae2, #efe5e5);
}

.contact-gradient-inverse {
  background: linear-gradient(135deg, #d3ded3, #f0f4ff);
}
.card-contact,
.card-newsletter {
  border-radius: 20px;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.08);
}
</style>
