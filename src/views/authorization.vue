<template>
  <section class="authorization">
    <Title title="LeadHit" />
    <form class="form" @submit.prevent="onSubmit">
      <span class="form__text">ID сайты</span>
      <input
        type="text"
        class="form__input"
        :class="{ error: !getValid }"
        :value="getId"
        @input="updateId"
      />
      <span>{{ getErrorMsg }}</span>
      <button class="btn">Войти</button>
    </form>
  </section>
</template>

<script>
import { mapGetters, mapMutations, mapActions } from "vuex";

import Title from "../components/TitleComponet.vue";

export default {
  components: {
    Title,
  },
  computed: {
    ...mapGetters(["getId", "getValid", "getErrorMsg"]),
  },
  methods: {
    ...mapMutations(["updateId"]),
    ...mapActions(["getResult"]),

    onSubmit() {
      this.getResult()
        .then((res) => {
          if (res.message === "ok") {
            this.$router.push("/analytics");
          }
        })
        .catch((error) => {
          console.log(error)
        });
    },
  },
};
</script>

<style lang="scss" scoped>
.authorization {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.form {
  display: flex;
  flex-direction: column;
  background: #fffefb;
  box-shadow: 0px 20px 30px rgba(0, 0, 0, 0.04),
    0px 6px 10px rgba(0, 0, 0, 0.02);
  border-radius: 4px;
  width: 500px;
  padding: 24px;
  margin-top: 20px;

  &__text {
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    line-height: 13px;
    letter-spacing: -0.02em;
    color: #49485e;
  }
  &__input {
    background: #fffefb;
    box-shadow: 0px 2px 5px rgba(0, 0, 0, 0.1);
    border-radius: 4px;
    border: 1px solid black;
    margin-top: 15px;
    padding: 5px 10px;
    outline: none;

    & + span {
      display: none;
    }
  }
}

.btn {
  background: #7bae73;
  border-radius: 10px;
  padding: 10px 24px;
  font-style: normal;
  font-weight: 600;
  font-size: 12px;
  line-height: 15px;
  color: #ffffff;
  border: none;
  margin-top: 25px;
  cursor: pointer;
}

.error {
  border: 1px solid #ff8484;

  & + span {
    display: block;
    font-style: normal;
    font-weight: 400;
    font-size: 14px;
    line-height: 14px;
    letter-spacing: -0.02em;
    margin-top: 10px;
    color: #ff8484;
  }
}
</style>
