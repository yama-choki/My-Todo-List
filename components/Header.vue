<template>
  <v-app-bar
    app
    color="#fcb69f"
    dark
    max-width="1000px"
  >
    <template #img="{ props }">
      <v-img
        v-bind="props"
        gradient="to top right, rgba(19,84,122,.5), rgba(128,208,199,.8)"
      />
    </template>

    <v-app-bar-nav-icon />

    <v-toolbar-title>やることリスト</v-toolbar-title>

    <v-spacer />
    <v-dialog
      transition="dialog-top-transition"
      max-width="600"
    >
      <template #activator="{ on, attrs }">
        <v-btn
          icon
          v-bind="attrs"
          v-on="on"
        >
          <v-icon>mdi-plus-circle-outline</v-icon>
        </v-btn>
      </template>
      <template #default="dialog">
        <v-card>
          <v-toolbar
            color="primary"
            dark
          >
            やることを追加する
          </v-toolbar>
          <div class="mx-5">
            <v-text-field label="やること" class="mt-5" counter="10" />
            <v-text-field label="やることの説明" class="mt-5" counter="50" />
          </div>
          <v-card-actions class="justify-end">
            <v-btn text color="primary" @click="dialog.value = false">
              追加する
            </v-btn>
            <v-btn text color="primary" @click="dialog.value = false">
              キャンセル
            </v-btn>
          </v-card-actions>
        </v-card>
      </template>
    </v-dialog>
    <v-dialog
      transition="dialog-top-transition"
      max-width="600"
    >
      <template #activator="{ on, attrs }">
        <v-btn
          icon
          v-bind="attrs"
          v-on="on"
        >
          <v-icon>mdi-trash-can-outline</v-icon>
        </v-btn>
      </template>
      <template #default="dialog">
        <v-card>
          <v-toolbar
            color="primary"
            dark
          >
            完了済みの項目を全て削除しますか？
          </v-toolbar>
          <v-card-actions>
            <v-spacer />
            <v-btn text color="primary" @click="dialog.value = false">
              削除する
            </v-btn>
            <v-spacer />
            <v-btn text color="primary" @click="dialog.value = false">
              キャンセル
            </v-btn>
            <v-spacer />
          </v-card-actions>
        </v-card>
      </template>
    </v-dialog>
  </v-app-bar>
</template>

<script>
export default {
  data () {
    return {
    }
  }
}
</script>

<style>

</style>
