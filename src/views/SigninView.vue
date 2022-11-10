<script lang="ts" setup >

  //ライブラリのインポート
  import {
    CognitoUserPool,
    CognitoUser,
    AuthenticationDetails

  } from 'amazon-cognito-identity-js'

  import { ref , reactive } from 'vue'


  
     const useremail =ref('')
     const password =ref('')
     

    
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
          onSuccess: function() {
            const result="/about";
            location.assign(result);
          },
          onFailure: function(err) {
            alert(err.message || JSON.stringify(err));
          }
        });
      }
    
  
</script>

<template>
  <div class="login">
    <h3>ログイン</h3>
    <form class="form" @submit.prevent="login">
      <div>
        <div  class="user">
        ユーザーEmail:
        </div>
        <input type="text" placeholder="useremail" v-model="useremail" required>
      </div>
      <div>
        <div class="pass">
        パスワード:
        </div>
        <input type="password" placeholder="password" v-model="password" required>
      </div>
      <button class="login-button ">ログイン</button>
    </form>
  </div>
</template>


