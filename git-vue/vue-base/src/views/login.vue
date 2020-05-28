<template>
  <div class="login_container">
    <div class="login_box">
      <el-form
        :rules="fromRule"
        ref="loginRef"
        :model="loginFrom"
        label-width="0px"
        class="login_from"
      >
        <el-form-item prop="username">
          <el-input
            v-model="loginFrom.username"
            prefix-icon="el-icon-my-password"
          ></el-input>
        </el-form-item>

        <el-form-item prop="password">
          <el-input
            v-model="loginFrom.password"
            prefix-icon="el-icon-my-password"
          >
          </el-input>
        </el-form-item>

        <el-form-item class="btns">
          <el-button type="primary" @click="submitForm()">登录</el-button>
          <el-button type="info" @click="resetForm()">重置</el-button>
        </el-form-item>
      </el-form>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      loginFrom: {
        username: "",
        password: ""
      },
      fromRule: {
        username: [
          { required: true, message: "请输入用户名称", trigger: "blur" },
          { min: 3, message: "长度在 3 个字符以上", trigger: "blur" }
        ],
        password: [
          { required: true, message: "请输入密码", trigger: "blur" },
          { min: 5, max: 10, message: "长度在 5到10 个字符", trigger: "blur" }
        ]
      }
    };
  },
  methods: {
    submitForm() {
      this.$refs.loginRef.validate(async valid => {
        if (valid) {
          // console.log(data)
          // async
          // this.$axios.post('login', { username: this.loginFrom.username, password: this.loginFrom.password }).then(function(res) {
          //     console.info(res)
          // })
          // window.sessionStorage.setItem('token', data.header.token)
          // console.log(data)
          this.$message.success("登录成功");
          this.$router.push("/index");
        } else {
          this.$message.error("登录失败");
        }
      });
    },
    resetForm() {
      this.$refs.loginRef.resetFields();
    }
  }
};
</script>

<style scoped>
.login_container {
  background-color: #2b4b6b;
  height: 100%;
}
.login_box {
  width: 450px;
  height: 300px;
  background-color: #fff;
  border-radius: 5px;
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
}

.login_from {
  position: absolute;
  bottom: 8%;
  width: 100%;
  padding: 0 20px;
  box-sizing: border-box;
}

.btns {
  display: flex;
  justify-content: flex-end;
}
</style>
