let showHide = document.getElementById("showHide");
let colors = document.querySelector("pass-word-one");

new Vue({
  el: "#show-hide",
  data: {
    fieldType: "password",
    passWord: "",
    confirmPassWord: "",
    class: "fa-regular fa-eye-slash",
    cla: "fa-regular fa-eye",
  },
  methods: {
    swithchField() {
      this.fieldType = this.fieldType === "password" ? "text" : "password";
    },
  },
  computed: {
    validatePassWord: function () {
      if (!this.passWord) {
        return "Enter Your Pass Word";
      } else if (this.passWord.length < 8) {
        return "Password Is Short";
      } else if (!isNaN(this.passWord) && isNaN(this.passWord)) {
        return "Can Not Number Only Or Text";
      } else {
        return "OK";
      }
    },
    // vlaidateConfirmPassWords: function () {
    //   if (!this.confirmPassWord) {
    //     return "Enter Your Pass Word";
    //   } else if (this.confirmPassWord.length < 8) {
    //     return "User Name Is Short";
    //   } else if (!isNaN(this.confirmPassWord) || isNaN(this.confirmPassWord)) {
    //     return "Can Not Number Only";
    //   } else {
    //     return "OK";
    //   }
    // },
    classes: function () {
      if (this.fieldType === "password") {
        return this.cla;
      } else {
        return this.class;
      }
    },
    validate: function () {
      if (this.passWord === this.passWords && this.passWord) {
        return this.trues;
      }
    },
  },
});
