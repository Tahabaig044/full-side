(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[626],{2798:function(e,a,s){Promise.resolve().then(s.bind(s,8991))},9376:function(e,a,s){"use strict";var t=s(5475);s.o(t,"usePathname")&&s.d(a,{usePathname:function(){return t.usePathname}}),s.o(t,"useRouter")&&s.d(a,{useRouter:function(){return t.useRouter}}),s.o(t,"useSearchParams")&&s.d(a,{useSearchParams:function(){return t.useSearchParams}})},8991:function(e,a,s){"use strict";s.r(a);var t,r,n=s(7437),i=s(3e3),l=s(781),o=s(9376),c=s(4131),d=s(2265);(t=r||(r={})).LOGIN="LOGIN",t.REGISTER="REGISTER",t.RESET_PASSWORD="RESET_PASSWORD",t.EMAIL_VERIFICATION="EMAIL_VERIFICATION",a.default=()=>{let e=(0,i.V)(),a=(0,o.useRouter)();e.auth.loggedIn()&&a.push("/");let[s,t]=(0,d.useState)("LOGIN"),[r,u]=(0,d.useState)(""),[m,x]=(0,d.useState)(""),[h,E]=(0,d.useState)(""),[g,R]=(0,d.useState)(""),[p,S]=(0,d.useState)(!1),[I,f]=(0,d.useState)(""),[N,v]=(0,d.useState)(""),C=async n=>{n.preventDefault(),S(!0),f("");try{let n;switch(s){case"LOGIN":n=await e.auth.login({email:m,password:h});break;case"REGISTER":n=await e.auth.register({email:m,password:h,profile:{nickname:r}});break;case"RESET_PASSWORD":n=await e.auth.sendPasswordResetEmail(m,window.location.href),v("Password reset email sent. Please check your e-mail.");break;case"EMAIL_VERIFICATION":n=await e.auth.processVerification({verificationCode:g})}switch(null==n?void 0:n.loginState){case l.z.SUCCESS:v("Successful! You are being redirected.");let i=await e.auth.getMemberTokensForDirectLogin(n.data.sessionToken);c.Z.set("refreshToken",JSON.stringify(i.refreshToken),{expires:2}),e.auth.setTokens(i),a.push("/");break;case l.z.FAILURE:"invalidEmail"===n.errorCode||"invalidPassword"===n.errorCode?f("Invalid email or password!"):"emailAlreadyExists"===n.errorCode?f("Email already exists!"):"resetPassword"===n.errorCode?f("You need to reset your password!"):f("Something went wrong!");case l.z.EMAIL_VERIFICATION_REQUIRED:t("EMAIL_VERIFICATION");case l.z.OWNER_APPROVAL_REQUIRED:v("Your account is pending approval")}}catch(e){console.log(e),f("Something went wrong!")}finally{S(!1)}};return(0,n.jsx)("div",{className:"h-[calc(100vh-80px)] px-4 md:px-8 lg:px-16 xl:px-32 2xl:px-64 flex items-center justify-center",children:(0,n.jsxs)("form",{className:"flex flex-col gap-8",onSubmit:C,children:[(0,n.jsx)("h1",{className:"text-2xl font-semibold",children:"LOGIN"===s?"Log in":"REGISTER"===s?"Register":"RESET_PASSWORD"===s?"Reset Your Password":"Verify Your Email"}),"REGISTER"===s?(0,n.jsxs)("div",{className:"flex flex-col gap-2",children:[(0,n.jsx)("label",{className:"text-sm text-gray-700",children:"Username"}),(0,n.jsx)("input",{type:"text",name:"username",placeholder:"john",className:"ring-2 ring-gray-300 rounded-md p-4",onChange:e=>u(e.target.value)})]}):null,"EMAIL_VERIFICATION"!==s?(0,n.jsxs)("div",{className:"flex flex-col gap-2",children:[(0,n.jsx)("label",{className:"text-sm text-gray-700",children:"E-mail"}),(0,n.jsx)("input",{type:"email",name:"email",placeholder:"john@gmail.com",className:"ring-2 ring-gray-300 rounded-md p-4",onChange:e=>x(e.target.value)})]}):(0,n.jsxs)("div",{className:"flex flex-col gap-2",children:[(0,n.jsx)("label",{className:"text-sm text-gray-700",children:"Verification Code"}),(0,n.jsx)("input",{type:"text",name:"emailCode",placeholder:"Code",className:"ring-2 ring-gray-300 rounded-md p-4",onChange:e=>R(e.target.value)})]}),"LOGIN"===s||"REGISTER"===s?(0,n.jsxs)("div",{className:"flex flex-col gap-2",children:[(0,n.jsx)("label",{className:"text-sm text-gray-700",children:"Password"}),(0,n.jsx)("input",{type:"password",name:"password",placeholder:"Enter your password",className:"ring-2 ring-gray-300 rounded-md p-4",onChange:e=>E(e.target.value)})]}):null,"LOGIN"===s&&(0,n.jsx)("div",{className:"text-sm underline cursor-pointer",onClick:()=>t("RESET_PASSWORD"),children:"Forgot Password?"}),(0,n.jsx)("button",{className:"bg-lama text-white p-2 rounded-md disabled:bg-pink-200 disabled:cursor-not-allowed",disabled:p,children:p?"Loading...":"LOGIN"===s?"Login":"REGISTER"===s?"Register":"RESET_PASSWORD"===s?"Reset":"Verify"}),I&&(0,n.jsx)("div",{className:"text-red-600",children:I}),"LOGIN"===s&&(0,n.jsxs)("div",{className:"text-sm underline cursor-pointer",onClick:()=>t("REGISTER"),children:["Don't"," have an account?"]}),"REGISTER"===s&&(0,n.jsx)("div",{className:"text-sm underline cursor-pointer",onClick:()=>t("LOGIN"),children:"Have and account?"}),"RESET_PASSWORD"===s&&(0,n.jsx)("div",{className:"text-sm underline cursor-pointer",onClick:()=>t("LOGIN"),children:"Go back to Login"}),N&&(0,n.jsx)("div",{className:"text-green-600 text-sm",children:N})]})})}},5341:function(e,a,s){"use strict";s.d(a,{WixClientContextProvider:function(){return E},n:function(){return h}});var t=s(7437),r=s(542),n=s(3669),i=s(961),l=s(7551),o=s(3999),c=s(4131),d=s(2265),u=s(5152);let m=JSON.parse(c.Z.get("refreshToken")||"{}"),x=(0,r.e)({modules:{products:i,collections:l,currentCart:o,redirects:u},auth:(0,n.n)({clientId:"5e2b4490-bbf9-47b8-b2a0-2e43273c7ad2",tokens:{refreshToken:m,accessToken:{value:"",expiresAt:0}}})}),h=(0,d.createContext)(x),E=e=>{let{children:a}=e;return(0,t.jsx)(h.Provider,{value:x,children:a})}},3e3:function(e,a,s){"use strict";s.d(a,{V:function(){return n}});var t=s(5341),r=s(2265);let n=()=>(0,r.useContext)(t.n)}},function(e){e.O(0,[387,971,117,744],function(){return e(e.s=2798)}),_N_E=e.O()}]);