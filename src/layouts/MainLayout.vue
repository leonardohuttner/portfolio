<template>
  <q-layout view="hHh Lpr lFf" style="height: 200px">
    <!-- <q-header>
      <q-bar>
        <q-icon name="img:svg/favicon.ico" />

        <div class="q-pa-sm q-pl-md row items-center">
          <div class="cursor-pointer non-selectable">
            File
            <q-menu>
              <q-list dense style="min-width: 120px">
                <q-item clickable v-close-popup>
                  <q-item-section>Open...</q-item-section>
                </q-item>
                <q-item clickable v-close-popup>
                  <q-item-section>New</q-item-section>
                </q-item>

                <q-separator />

                <q-item clickable>
                  <q-item-section>Preferences</q-item-section>
                  <q-item-section side>
                    <q-icon name="keyboard_arrow_right" />
                  </q-item-section>

                  <q-menu anchor="top end" self="top start">
                    <q-list>
                      <q-item v-for="n in 3" :key="n" dense clickable>
                        <q-item-section>Submenu Label</q-item-section>
                        <q-item-section side>
                          <q-icon name="keyboard_arrow_right" />
                        </q-item-section>
                        <q-menu auto-close anchor="top end" self="top start">
                          <q-list>
                            <q-item v-for="n in 3" :key="n" dense clickable>
                              <q-item-section>3rd level Label</q-item-section>
                            </q-item>
                          </q-list>
                        </q-menu>
                      </q-item>
                    </q-list>
                  </q-menu>
                </q-item>

                <q-separator />

                <q-item clickable v-close-popup>
                  <q-item-section>Quit</q-item-section>
                </q-item>
              </q-list>
            </q-menu>
          </div>
        </div>
        <q-space />

        <q-btn dense flat icon="minimize" />
        <q-btn dense flat icon="crop_square" />
        <q-btn dense flat icon="close" />
      </q-bar>
    </q-header> -->

    <q-drawer
      v-model="leftDrawerOpen"
      show-if-above
      bordered
      :mini="true"
      class="column"
      style="
        display: flex;
        flex-direction: column;
        justify-content: space-between;
      "
    >
      <section>
        <q-list class="q-mt-sm">
          <EssentialLink
            v-for="link in essentialLinks"
            :key="link.title"
            v-bind="link"
          />
        </q-list>
      </section>

      <section class="items-end content-end">
        <q-item
          clickable
          tag="a"
          target="_blank"
          class=""
          @click="$q.dark.set(true)"
        >
          <q-item-section avatar>
            <q-avatar>
              <q-icon name="lightbulb" />
            </q-avatar>
          </q-item-section>
        </q-item>
        <q-item clickable tag="a" target="_blank" class="">
          <q-item-section avatar>
            <q-avatar>
              <q-icon name="person" />
            </q-avatar>
          </q-item-section>
        </q-item>
        <q-item clickable tag="a" target="_blank" class="">
          <q-item-section avatar>
            <q-icon name="settings" />
          </q-item-section>
        </q-item>
      </section>
    </q-drawer>

    <q-page-container>
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<script>
import { defineComponent, ref } from "vue";
import EssentialLink from "components/EssentialLink.vue";

const linksList = [
  {
    title: "Sobre",
    caption: "Sobre",
    icon: "img:svg/folder-dark.svg",
    link: "/home",
  },
  {
    title: "Repositorios Github",
    caption: "Repositorios",
    icon: "img:svg/git-branch.svg",
    link: "/repositorios",
  },
  {
    title: "Projetos",
    caption: "github.com/quasarframework",
    icon: "img:svg/code-ligth.svg",
    link: "/projetos",
  },
];

export default defineComponent({
  name: "MainLayout",

  components: {
    EssentialLink,
  },

  setup() {
    const leftDrawerOpen = ref(true);

    return {
      essentialLinks: linksList,
      leftDrawerOpen,
    };
  },
});
</script>
