var o=Object.defineProperty;var a=(e,s,t)=>s in e?o(e,s,{enumerable:!0,configurable:!0,writable:!0,value:t}):e[s]=t;var i=(e,s,t)=>(a(e,typeof s!="symbol"?s+"":s,t),t);import{z as n,q as c,m as h}from"./entry.6f82f3e9.js";class p{constructor(){i(this,"client",n());i(this,"toast",c());i(this,"router",h())}async signInWithOAuth(s){const t=await this.client.auth.signInWithOAuth({provider:s});this.processSignIn(t)}async signInWithPass(s,t){const r=await this.client.auth.signInWithPassword({email:s,password:t});this.processSignIn(r)}async signInWithOtp(s){const t=window.location.toString().replace("/login","/confirm"),r=await this.client.auth.signInWithOtp({email:s,options:{emailRedirectTo:t}});this.processSignIn(r)}async setPassword(s){const{error:t}=await this.client.auth.updateUser({password:s});t?this.toast.add({severity:"error",summary:"Ошибка изменения пароля!",life:1e4}):this.toast.add({severity:"success",summary:"Пароль изменен",life:3e3})}processSignIn(s){console.log(s);const{error:t}=s;t?this.processError(t):this.processSuccess()}processError(s){this.toast.add({severity:"error",summary:"Ошибка входа!",life:1e4})}processSuccess(){this.toast.add({severity:"success",summary:"Вы вошли",life:3e3}),this.router.push("/account/my-profile/")}}export{p as A};
