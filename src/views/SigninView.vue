<script lang="ts" setup >

  //ライブラリのインポート
  import {
    CognitoUserPool,
    CognitoUser,
    AuthenticationDetails

  } from 'amazon-cognito-identity-js'

  import Header from '../components/Header.vue'
  import Footer from '../components/Footer.vue'
  import { ref , reactive } from 'vue'


  
     const useremail =ref('')
     const password =ref('')
     const is_signedin =ref(false)
     

    
      const login = () => {

        //cognito設定
        const poolData = {
          UserPoolId: import.meta.env.VITE_APP_POOL_ID,
          ClientId: import.meta.env.VITE_APP_CLIENT_ID,
        };
        const userPool = new CognitoUserPool(poolData);

        //cognitoパラメータ設定
        // const useremail = useremail.value;
        // const password = password.value;

        const authenticationData = {
          Username: useremail.value,
          Password: password.value,
        };

        const authenticationDetails = new AuthenticationDetails(
          authenticationData
        );

        const userData = {
          Username: useremail.value,
          Pool: userPool,
        };

        const cognitoUser = new CognitoUser(userData);

        //ログイン処理
        cognitoUser.authenticateUser(authenticationDetails, {

          newPasswordRequired: function (userAttributes, requiredAttributes) {
              cognitoUser.completeNewPasswordChallenge("Admin@Admin00", {}, this)
          },


          onSuccess: function() {
            is_signedin.value = !is_signedin
            const result="/mypage_admin";
            location.assign(result);
          },
          onFailure: function(err) {
            alert(err.message || JSON.stringify(err));
          }
        });
      }
    
  
</script>

<template>
<Header></Header>
  <div class="login">
    <h3>管理者ログイン</h3>
    <el-form>
        <el-input type="email" class="email-form" required v-model="useremail" placeholder="メールアドレス" />
        <el-input type="password" class="password-form" required v-model="password" placeholder="パスワード" />
      <el-button @click.prevent="login" color=#B9A273 class="login-button">ログイン</el-button>
      </el-form>
  </div>

  
  <Footer></Footer>
</template>

<style scoped>
.login {
  text-align: center;
  position: absolute;
  width: 280px;
  height: 40px;
  left: 500px;
  top: 104px;
}
.login-button {
color: white;
margin: 20px auto;

}
.email-form {
  margin: 20px auto;
}
</style>


