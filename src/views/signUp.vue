<template>
  <main class="container pt-5">
    <loading :active="isLoading">
      <!--     樣式包進 loading 元件內     -->
      <div class="loadingio-spinner-bean-eater-iylmkqp50l"><div class="ldio-t0eby9sr4hr">
        <div><div></div><div></div><div></div></div><div><div></div><div></div><div></div></div>
        </div>
      </div>
      <!--     樣式包進 loading 元件內     -->
    </loading>
    <div class="row p-md-5">
      <div class="col-6 me-5 d-none d-md-block align-self-center">
        <h1 class="f-Baloo fw-bold h2 ps-3">
          <img src="../assets/check.png" alt="checkbox" style="height:55px">
          ONLINE TODO LIST
        </h1>
        <img src="../assets/img.png" class="img-fluid" alt="todoMan">
      </div>
      <div class="col">
          <h2 class="mt-5 h3 d-none d-md-block ps-2">註冊帳號</h2>
          <div class="text-center d-inline d-md-none">
            <h1 class="f-Baloo fw-bold">
              <img src="../assets/check.png" alt="checkbox">
              ONLINE TODO LIST
            </h1>
            <h2 class="h5">註冊帳號</h2>
          </div>
        <v-form v-slot="{ errors }" class="container">
          <!-- @submit="createOrder" -->
          <div class="form-group pt-4">
              <label for="Email">Email</label>
              <v-field id="Email" name="Email欄位" type="text" class="form-control"
              :class="{ 'is-invalid': errors['Email欄位'] }"
              placeholder="請輸入Email" rules="email|required"
              v-model="user.email"
              style="height:70px"></v-field>
              <ErrorMessage name="Email欄位" class="invalid-feedback"></ErrorMessage>
          </div>
          <div class="form-group mt-3">
              <label for="name">您的暱稱</label>
              <v-field id="name" name="暱稱" type="name" class="form-control"
              :class="{ 'is-invalid': errors['暱稱'] }"
              placeholder="請輸入您的暱稱" rules="required"
              v-model="user.nickname"
              style="height:70px"></v-field>
              <ErrorMessage name="暱稱" class="invalid-feedback"></ErrorMessage>
          </div>
          <div class="form-group mt-3">
              <label for="pwd">密碼</label>
              <v-field id="pwd" name="密碼" type="password" class="form-control"
              :class="{ 'is-invalid': errors['密碼'] }"
              placeholder="請輸入密碼" rules="required|min:6"
              v-model="user.password"
              style="height:70px"></v-field>
              <ErrorMessage name="密碼" class="invalid-feedback"></ErrorMessage>
          </div>
          <div class="form-group my-3">
              <label for="confirmPwd">再次輸入密碼</label>
              <v-field id="confirmPwd" name="此密碼欄位" type="password" class="form-control"
              :class="{ 'is-invalid': errors['此密碼欄位'] }"
              placeholder="請再次輸入密碼" rules="required|min:6|confirmed:@密碼"
              v-model="user.confirmPwd"
              style="height:70px"></v-field>
              <ErrorMessage name="此密碼欄位" class="invalid-feedback"></ErrorMessage>
          </div>
          <div class="d-grid gap-4 col-4 mx-auto pt-4">
            <button class="btn btn-dark py-md-3" type="button" @click="signUp">註冊帳號</button>
            <button class="btn btn-h" type="button" @click="goLogin">登入</button>
          </div>
        </v-form>
      </div>
    </div>
  </main >
</template>

<script>
import Swal from 'sweetalert2';

export default {
  data() {
    return {
      user: {
        email: '',
        nickname: '',
        password: '',
        confirmPwd: '',
      },
      isLoading: false,
    };
  },
  methods: {
    signUp() {
      const url = `${process.env.VUE_APP_API}/users`;
      const data = {
        user: {
          email: this.user.email,
          nickname: this.user.nickname,
          password: this.user.password,
        },
      };
      this.isLoading = true;
      if (this.user.password === this.user.confirmPwd) {
        this.$http.post(url, data)
          .then((response) => {
            console.log(response);
            this.isLoading = false;
            Swal.fire({
              title: response.data.message,
              text: '歡迎您 ! 請輸入帳號密碼開始使用待辦清單功能 !',
              icon: 'success',
              confirmButtonText: '了解',
            }).then(this.$router.push('/'));
          })
          .catch((err) => {
            this.isLoading = false;
            Swal.fire({
              title: err.response.data.message,
              text: '請確認是否已重複註冊帳號，已有帳號密碼請按登入鈕',
              icon: 'error',
              confirmButtonText: '了解',
            });
          });
      } else {
        this.isLoading = false;
        Swal.fire({
          title: '失敗',
          text: '請再次輸入密碼',
          icon: 'error',
          confirmButtonText: '了解',
        });
      }
    },
    goLogin() {
      this.$router.push('/');
    },
    checkPwd(value) {
      const phoneNumber = /^(09)[0-9]{8}$/;
      return phoneNumber.test(value) ? true : '需要正確的電話號碼';
    },
  },
};
</script>
