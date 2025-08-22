<template>
  <q-layout view="hHh Lpr lFf" style="height: 200px">
    <q-header elevated class="bg-primary text-white">
      <q-toolbar>
        <q-toolbar-title>
          <q-avatar>
            <img src="https://cdn.quasar.dev/logo-v2/svg/logo-mono-white.svg" />
          </q-avatar>
          Title
        </q-toolbar-title>
      </q-toolbar>
    </q-header>
    <q-page-container>
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<script>
import { defineComponent, ref } from "vue";

const linksList = [
  {
    title: "Sobre",
    caption: "Sobre",
    icon: "img:svg/folder-light.svg",
    link: "/home",
  },
  {
    title: "Repositorios Github",
    caption: "Repositorios",
    icon: "img:svg/gitbranch.png",
    link: "/repositorios",
  },
  {
    title: "Projetos",
    caption: "github.com/quasarframework",
    icon: "img:svg/code.svg",
    link: "/projetos",
  },
];

export default defineComponent({
  name: "MainLayout",

  setup() {
    const leftDrawerOpen = ref(true);

    return {
      essentialLinks: linksList,
      leftDrawerOpen,
    };
  },
});
</script>
