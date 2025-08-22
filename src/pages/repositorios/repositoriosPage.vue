<template>
  <q-card>
    <div class="q-pa-xs full-width">
      <section>
        <div class="row self-center">
          <div class="col-2 q-pa-md">
            <q-avatar size="10rem">
              <q-img :src="usuario.avatar_url" />
            </q-avatar>
          </div>
          <div class="col q-pa-md">
            <p class="text-weight-bold text-h6 q-mb-xs">{{ usuario.name }}</p>
            <p class="text-subtitle1">{{ usuario.bio }}</p>
            <div class="q-gutter-x-sm">
              <span class="text-subtitle2 text-weight-bold">{{
                usuario.public_repos
              }}</span>
              <span>Repositorios</span>
              <span class="text-subtitle2 text-weight-bold">{{
                usuario.followers
              }}</span>
              <span>Seguidores</span>
              <span class="text-subtitle2 text-weight-bold">{{
                usuario.following
              }}</span>
              <span>Seguindo</span>
            </div>
          </div>
        </div>
        <div class="row justify-center">
          <img
            height="200"
            width="500"
            align="center"
            src="https://github-readme-stats.vercel.app/api?username=leonardohuttner&custom_title=Statistics&rank_icon=github"
          />
          <img
            height="200"
            align="center"
            src="https://github-readme-stats.vercel.app/api/top-langs?username=leonardohuttner&layout=donut&langs_count=5&card_width=300&hide=TypeScript,CSS,HTML"
          />
        </div>
      </section>
      <section class="q-pa-xs">
        <q-toolbar class="bg-primary text-white shadow-2">
          <q-toolbar-title>Repositorios</q-toolbar-title>
        </q-toolbar>
        <q-list
          class="rounded-borders q-gutter-y-sm"
          v-for="repositorio in repositorios"
          :key="repositorio.id"
        >
          <q-item clickable tag="a" target="_blank">
            <q-item-section avatar>
              <q-icon name="account_tree" color="black" size="34px" />
            </q-item-section>
            <q-item-section top>
              <q-item-label lines="1" v-if="repositorio.name">
                <span class="text-weight-medium text-capitalize">{{
                  repositorio.name
                }}</span>
                <q-chip icon="code" color="black" outline dense>{{
                  repositorio.language
                }}</q-chip>
                <q-chip icon="public" dense>Publico</q-chip>
              </q-item-label>
              <q-item-label caption lines="1">
                {{ repositorio.description }}
              </q-item-label>
            </q-item-section>

            <q-item-section top side>
              <div class="text-grey-8 q-gutter-xs">
                <q-btn-dropdown
                  split
                  color="primary"
                  dense
                  no-caps
                  icon="star_outline"
                  @click="onMainClick"
                >
                  <q-list style="width: 23rem">
                    <q-item
                      clickable
                      v-close-popup
                      @click="open(repositorio.homepage)"
                      v-if="repositorio.homepage"
                    >
                      <q-item-section avatar>
                        <q-icon
                          name="visibility"
                          color="primary"
                          text-color="white"
                        />
                      </q-item-section>
                      <q-item-section>
                        <q-item-label>Ver demonstracao</q-item-label>
                      </q-item-section>
                    </q-item>
                    <q-item clickable v-close-popup>
                      <q-item-section>
                        <q-input
                          square
                          label="Link Clone"
                          v-model="repositorio.clone_url"
                        >
                        </q-input>
                      </q-item-section>
                    </q-item>
                  </q-list>
                </q-btn-dropdown>
              </div>
            </q-item-section>
          </q-item>
        </q-list>
      </section>
    </div>
  </q-card>
</template>

<script>
import { defineComponent, ref } from "vue";
import { getRepos, getUsuario } from "../../services/api_github";
import moment from "moment";

export default defineComponent({
  name: "RepositoriosPage",

  setup() {
    const open = (url) => {
      window.open(url, "_blank");
    };
    return {
      repositorios: ref([]),
      usuario: ref({}),
      open,
    };
  },
  mounted() {
    getRepos().then((res) => {
      this.repositorios = res;
    });
    getUsuario().then((res) => {
      this.usuario = res;
    });
  },
});
</script>
