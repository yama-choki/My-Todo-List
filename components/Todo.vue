<template>
  <v-card elevation="2" class="mb-1" color="green accent-2">
    <div class="todo">
      <input type="checkbox" class="mx-5 mt-5">
      <h4>あいうえおあいうえお</h4>
      <p class="time mx-5">
        追加日時aaaaaaa
      </p>
      <p class="text mx-5">
        説明あああああああああああああああああああああああああああああああああああああああ
      </p>
      <v-spacer />
      <v-btn icon class="mt-2">
        <v-icon>mdi-pencil-plus</v-icon>
      </v-btn>
      <v-btn icon class="mt-2">
        <v-icon>mdi-trash-can-outline</v-icon>
      </v-btn>
    </div>
  </v-card>
</template>

<script>
export default {

}
</script>

<style>
.todo{
  display: flex;
  height: 50px;
  align-content: center;
}

.todo h4{
  width: 250px;
  line-height: 50px;
}

.time{
  width: 200px;
  line-height: 50px;
}
</style>
