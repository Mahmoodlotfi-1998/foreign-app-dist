import{y as ee,j as Y,L as k,r as D,X as te,q as M,Y as j,Z as ne,$ as le,a0 as re,a1 as ue,d as I,a2 as de,a as c,c as p,e as o,u as i,a3 as P,l,p as g,a4 as $,a5 as ce,f as _,F as B,a6 as O,a7 as fe,t as S,i as H,S as se,n as U,a8 as me,o as he,a9 as pe,s as R,x as ve,w as ge,h as _e,aa as ye,ab as we,ac as be,V as xe}from"./index-CKWE6AZ0.js";import{h as Me}from"./moment-C5S46NFB.js";import{_ as q,a as N,B as Ce,b as $e,c as qe}from"./BasicActionSheet.vue_vue_type_script_setup_true_lang--8g4osPF.js";import{_ as Se,b as ke}from"./BasicInput.vue_vue_type_style_index_0_lang-CXEeEC2M.js";import{u as Ee}from"./responsiveStore-Nl0LWOMx.js";const De="/assets/logo_vertical-lACTJVlK.svg",Ie=async t=>await ee.fetch("chat","select",{column:"id",field:"request_id",value:t}),Re=async t=>await ee.fetch("pricing_requests","update",{field:"id",value:t,data:{new_message:!0}}),v=Y(),Te=k(()=>{var t;return new Date((t=r.value)==null?void 0:t.expiration_at).getTime()}),Ne=Date.now(),z=k(()=>Te.value-Ne),Be=k(()=>{var s;let t=(s=v.userRequestsInfo)==null?void 0:s.some(e=>["open","suggested","accepted"].includes(e.status));return console.log(t),!F.value||E.value===""||E.value===0||t}),Ae=k(()=>{var s,e;console.log((s=v.userBorrowerInfo)==null?void 0:s.complete_profile);let t=(e=v.userRequestsInfo)==null?void 0:e.some(n=>["open","suggested","accepted"].includes(n.status));return!F.value||t}),E=D(0);let ie;const r=k(()=>{var n,u,f;const t=(n=v.userRequestsInfo)==null?void 0:n.find(a=>a.status==="open"),s=(u=v.userRequestsInfo)==null?void 0:u.find(a=>a.status==="suggested"),e=(f=v.userRequestsInfo)==null?void 0:f.find(a=>a.status==="accepted");return s&&new Date(s==null?void 0:s.expiration_at).getTime()-Date.now()<=0&&(te(s.id).finally(),v.getRequests().finally()),t||s||(e?(Ie(e==null?void 0:e.id).then(a=>{ie=a[0].id}),e):void 0)}),F=k(()=>{var t;return(t=v.userBorrowerInfo)==null?void 0:t.complete_profile});async function Le(t){try{M.value=!0,await j("Are you sure to cancel this request?",t??"",te,v.getRequests)}catch{}finally{M.value=!1}}async function Ve(t){try{await j("Are you sure to accept this request?",t??"",ne,v.getRequests)}catch(s){console.log(s)}finally{}}async function He(t){try{await j("Are you sure to reject this request?",t??"",le,v.getRequests)}catch(s){console.log(s)}finally{}}async function je(t){try{await j("Are you sure to make call with admin?",t??"",re,v.getRequests)}catch(s){console.log(s)}finally{}}async function Ue(){var t;try{M.value=!0,await ue({income:E.value,status:"open",borrower_id:(t=v.userBorrowerInfo)==null?void 0:t.id}),await v.getRequests()}catch(s){console.log(s)}finally{M.value=!1}}const y=D(!1);function Ye(t){y.value=!0}function G(t,s="YYYY/MM/DD HH:mm:ss"){return Me.utc(t).format(s)}/*! vue-countdown v2.1.2 | (c) 2018-present Chen Fengyuan | MIT */const A=1e3,L=60*A,V=60*L,J=24*V,K="abort",W="end",X="progress",Z="start",Q="visibilitychange";var Oe=I({name:"VueCountdown",props:{autoStart:{type:Boolean,default:!0},emitEvents:{type:Boolean,default:!0},interval:{type:Number,default:1e3,validator:t=>t>=0},now:{type:Function,default:()=>Date.now()},tag:{type:String,default:"span"},time:{type:Number,default:0,validator:t=>t>=0},transform:{type:Function,default:t=>t}},emits:[K,W,X,Z],data(){return{counting:!1,endTime:0,totalMilliseconds:0,requestId:0}},computed:{days(){return Math.floor(this.totalMilliseconds/J)},hours(){return Math.floor(this.totalMilliseconds%J/V)},minutes(){return Math.floor(this.totalMilliseconds%V/L)},seconds(){return Math.floor(this.totalMilliseconds%L/A)},milliseconds(){return Math.floor(this.totalMilliseconds%A)},totalDays(){return this.days},totalHours(){return Math.floor(this.totalMilliseconds/V)},totalMinutes(){return Math.floor(this.totalMilliseconds/L)},totalSeconds(){return Math.floor(this.totalMilliseconds/A)}},watch:{$props:{deep:!0,immediate:!0,handler(){this.totalMilliseconds=this.time,this.endTime=this.now()+this.time,this.autoStart&&this.start()}}},mounted(){document.addEventListener(Q,this.handleVisibilityChange)},beforeUnmount(){document.removeEventListener(Q,this.handleVisibilityChange),this.pause()},methods:{start(){this.counting||(this.counting=!0,this.autoStart||(this.totalMilliseconds=this.time,this.endTime=this.now()+this.time),this.emitEvents&&this.$emit(Z),document.visibilityState==="visible"&&this.continue())},continue(){if(!this.counting)return;const t=Math.min(this.totalMilliseconds,this.interval);if(t>0){let s,e;const n=u=>{s||(s=u),e||(e=u);const f=u-s;f>=t||f+(u-e)/2>=t?this.progress():this.requestId=requestAnimationFrame(n),e=u};this.requestId=requestAnimationFrame(n)}else this.end()},pause(){cancelAnimationFrame(this.requestId)},progress(){this.counting&&(this.update(),this.emitEvents&&this.totalMilliseconds>0&&this.$emit(X,{days:this.days,hours:this.hours,minutes:this.minutes,seconds:this.seconds,milliseconds:this.milliseconds,totalDays:this.totalDays,totalHours:this.totalHours,totalMinutes:this.totalMinutes,totalSeconds:this.totalSeconds,totalMilliseconds:this.totalMilliseconds}),this.continue())},abort(){this.counting&&(this.pause(),this.counting=!1,this.emitEvents&&this.$emit(K))},end(){this.counting&&(this.pause(),this.totalMilliseconds=0,this.counting=!1,this.emitEvents&&this.$emit(W))},update(){this.counting&&(this.totalMilliseconds=Math.max(0,this.endTime-this.now()))},restart(){this.pause(),this.totalMilliseconds=this.time,this.endTime=this.now()+this.time,this.counting=!1,this.start()},handleVisibilityChange(){switch(document.visibilityState){case"visible":this.update(),this.continue();break;case"hidden":this.pause();break}}},render(){return de(this.tag,this.$slots.default?[this.$slots.default(this.transform({days:this.days,hours:this.hours,minutes:this.minutes,seconds:this.seconds,milliseconds:this.milliseconds,totalDays:this.totalDays,totalHours:this.totalHours,totalMinutes:this.totalMinutes,totalSeconds:this.totalSeconds,totalMilliseconds:this.totalMilliseconds}))]:void 0)}});const Fe={key:0,class:"rounded-lg p-2 border-solid border-1 mt-10"},Pe={class:"rounded-lg p-2 border-solid border-1 mt-10 w-full"},ze={key:0},Ge={key:0,class:"border-1 rounded-lg my-2 p-2"},Je={class:"flex gap-2 justify-evenly my-2"},Ke={class:"justify-items-center"},We={class:"countDown"},Xe={class:"justify-items-center"},Ze={class:"countDown"},Qe={class:"justify-items-center"},et={class:"countDown"},tt={class:"justify-items-center"},st={class:"countDown"},it={key:2,class:"flex gap-2 mt-2 w-full"},ot={key:3,class:"text-gray-500 mt-2 text-xs"},at={key:4,class:"w-full flex gap-2 mt-2"},nt={key:1,class:"flex justify-center"},oe=I({__name:"Core",setup(t){return(s,e)=>{var u,f,a;const n=se;return c(),p(B,null,[e[23]||(e[23]=o("img",{src:De,alt:"",class:"w-1/2 mt-20"},null,-1)),!i(F)&&!i(P)?(c(),p("div",Fe,[e[9]||(e[9]=o("div",null,"Please verify yourself by completing your information.",-1)),l(ce,{type:"primary",class:"w-full mt-5",onClick:e[0]||(e[0]=d=>s.$router.push({name:"user"}))},{default:g(()=>e[8]||(e[8]=[$("Complete information ")])),_:1})])):_("",!0),o("div",Pe,[i(P)?(c(),p("div",nt,[l(n,{size:"large",tip:"Fetching data"})])):(c(),p("div",ze,[i(r)?(c(),p(B,{key:1},[e[22]||(e[22]=o("div",{class:"font-bold text-lg mb-2"},"In progress request:",-1)),o("div",null,[i(r).status==="suggested"?(c(),p("div",Ge,[e[16]||(e[16]=o("div",null,"Expire Time:",-1)),l(i(Oe),{time:i(z)},{default:g(({days:d,hours:w,minutes:C,seconds:m})=>[o("div",Je,[o("div",Ke,[o("div",We,S(d),1),e[12]||(e[12]=o("div",{class:"text-xs"},"Days",-1))]),o("div",Xe,[o("div",Ze,S(w),1),e[13]||(e[13]=o("div",{class:"text-xs"},"Hours",-1))]),o("div",Qe,[o("div",et,S(C),1),e[14]||(e[14]=o("div",{class:"text-xs"},"Minutes",-1))]),o("div",tt,[o("div",st,S(m),1),e[15]||(e[15]=o("div",{class:"text-xs"},"Seconds",-1))])])]),_:1},8,["time"])])):_("",!0),l(N,{title:"Status",value:(u=i(r))==null?void 0:u.status},null,8,["value"]),l(N,{title:"Date",value:i(G)((f=i(r))==null?void 0:f.created_at,"YYYY-MM-DD")},null,8,["value"]),l(N,{title:"Time",value:i(G)((a=i(r))==null?void 0:a.created_at,"HH:mm:ss")},null,8,["value"]),i(r).status==="suggested"||i(r).status==="accepted"?(c(),H(N,{key:1,title:"Pricing",value:i(r).pricing_details+"%"},null,8,["value"])):_("",!0),i(r).status==="accepted"?(c(),p("div",it,[l(q,{icon:"vuesax-linear:call",class:"w-full border-green-600 text-green-600",disabled:i(r).call_request,onClick:e[3]||(e[3]=d=>i(je)(i(r).id))},{default:g(()=>e[17]||(e[17]=[$("Call")])),_:1},8,["disabled"]),l(q,{icon:"vuesax-linear:message",class:"w-full border-orange-600 text-orange-600",onClick:e[4]||(e[4]=d=>i(Ye)(i(r).id))},{default:g(()=>e[18]||(e[18]=[$("Message")])),_:1})])):_("",!0),i(r).call_request&&i(r).status==="accepted"?(c(),p("div",ot,"Call request sent. please be patient to calling admin with you.")):_("",!0),o("div",null,[i(r).status==="open"?(c(),H(q,{key:0,class:"w-full mt-2",danger:"",onClick:e[5]||(e[5]=d=>i(Le)(i(r).id))},{default:g(()=>e[19]||(e[19]=[$("Cancel ")])),_:1})):_("",!0)]),i(z)>0&&i(r).status==="suggested"?(c(),p("div",at,[l(q,{class:"flex-1 bg-green-6 text-white border-green-6",loading:i(M),onClick:e[6]||(e[6]=d=>i(Ve)(i(r).id))},{default:g(()=>e[20]||(e[20]=[$("Accept ")])),_:1},8,["loading"]),l(q,{class:"flex-1 bg-red-6 text-white border-red-6",loading:i(M),onClick:e[7]||(e[7]=d=>i(He)(i(r).id))},{default:g(()=>e[21]||(e[21]=[$("Reject ")])),_:1},8,["loading"])])):_("",!0)])],64)):(c(),p(B,{key:0},[e[11]||(e[11]=o("div",null,"Please tell us your income:",-1)),l(Se,{class:"mt-2",value:i(E),"onUpdate:value":e[1]||(e[1]=d=>O(E)?E.value=d:null),disabled:i(Ae),type:"number","addon-after":"$",onClick:i(fe)},null,8,["value","disabled","onClick"]),l(q,{type:"primary",loading:i(M),class:"w-full mt-5",disabled:i(Be),onClick:e[2]||(e[2]=d=>i(Ue)())},{default:g(()=>e[10]||(e[10]=[$("Request pricing! ")])),_:1},8,["loading","disabled"])],64))]))])],64)}}}),lt=I({__name:"BasicTextArea",props:{title:{},value:{},showCount:{type:Boolean},maxlength:{},placeHolder:{},rows:{}},emits:["update:value"],setup(t,{emit:s}){const e=t,n=s,u=k({get(){return e.value},set(a){n("update:value",a)}}),{prefixCls:f}=me("input-area");return(a,d)=>{const w=ke;return c(),p("div",{class:U([i(f)])},[o("div",null,S(e.title),1),l(w,{value:u.value,"onUpdate:value":d[0]||(d[0]=C=>u.value=C),class:"",type:e.type,maxlength:a.maxlength,"show-count":e.showCount,rows:a.rows,placeHolder:e.placeHolder},null,8,["value","type","maxlength","show-count","rows","placeHolder"])],2)}}});function rt(t){const s=D([]),e=D(!0),n=Y(),u=async()=>{const{data:m,error:h}=await R.from("chat").select("chat_log").eq("id",t).single();if(h){console.error("Error fetching chat log:",h);return}s.value=(m==null?void 0:m.chat_log)||[],console.log(s.value),e.value=!1},f=async m=>{var x,T;s.value.push(m);const{error:h}=await R.from("chat").update({chat_log:s.value}).eq("id",t),{addNotification:b}=ve((x=n.userInfo)==null?void 0:x.id);b("New message",{},`You have new message from ${(T=n.userBorrowerInfo)==null?void 0:T.owner_name_formatted} please check Calls & messages!`),h&&console.error("Error updating chat log:",h)},a=async(m,h)=>{if(!s.value[m])return;s.value[m].status=h;const{error:b}=await R.from("chat").update({chat_log:s.value}).eq("id",t);b&&console.error("Error updating message status:",b)},d=()=>{s.value.forEach((m,h)=>{m.status==="delivered"&&m.sender!=="borrower"&&a(h,"read")})},w=()=>{R.channel(`realtime:chat:${t}`).on("postgres_changes",{event:"UPDATE",schema:"public",table:"chat",filter:`id=eq.${t}`},m=>{s.value=m.new.chat_log||[],s.value.forEach((h,b)=>{h.status==="sent"&&h.sender!=="borrower"&&a(b,"delivered")})}).subscribe()},C=()=>{R.removeChannel(`realtime:chat:${t}`)};return he(()=>{u(),w()}),pe(()=>{C()}),{chatLog:s,appendMessage:f,markMessagesAsRead:d,loading:e}}const ut={class:"h65vh"},dt={class:"chat-display"},ct={class:"absolute bottom-0 right-0 left-0 bg-white z-20"},ft={class:"flex items-center p-3 w-full gap-3"},mt=I({__name:"Chat",setup(t){const{chatLog:s,loading:e,markMessagesAsRead:n,appendMessage:u}=rt(ie);let f=!0;n();const a=D(""),d=D(null),w=async()=>{await ye(),d.value&&(d.value.scrollTop=d.value.scrollHeight)};ge(s,()=>{w()});const C=()=>{var h;if(!a.value.trim())return;const m={sender:"me",message:a.value,status:"sent",timestamp:new Date().toISOString()};f&&(Re((h=r.value)==null?void 0:h.id),f=!1),u(m),a.value="",w()};return(m,h)=>{const b=se;return c(),p("div",ut,[o("div",null,[o("div",dt,[l(b,{spinning:i(e)},{default:g(()=>[o("div",{class:"h-65vh pb-20 overflow-y-auto",ref_key:"chatContainer",ref:d},[(c(!0),p(B,null,_e(i(s),(x,T)=>(c(),p("div",{key:T,class:"flex relative flex-col mt-1"},[o("div",{class:U(x.sender!=="me"?"bg-gray-300 w-fit px-2 py-1 rounded-xl z-10":"bg-green self-end w-fit px-2 py-1 rounded-xl text-white z-10")},S(x.message),3),o("div",{class:U(x.sender!=="me"?"bg-gray-300 absolute bottom-0 left-0 h-2 w-2":"bg-green absolute bottom-0 right-0 h-2 w-2")},null,2)]))),128))],512)]),_:1},8,["spinning"])])]),o("div",ct,[o("div",ft,[l(lt,{class:"!h-full w-full","place-holder":"",value:a.value,"onUpdate:value":h[0]||(h[0]=x=>a.value=x),rows:2},null,8,["value"]),l(q,{shape:"circle",type:"primary",class:"aspect-square",size:"large",icon:"vuesax-linear:send-1",onClick:C,disabled:a.value===""},null,8,["disabled"])])])])}}}),ae=we(mt,[["__scopeId","data-v-991ed3d0"]]),ht={class:"mt-10 flex flex-col justify-center items-center"},pt={class:"w-28rem flex flex-col justify-center items-center"},vt=I({__name:"full",setup(t){return(s,e)=>(c(),p("div",ht,[o("div",pt,[l(oe)]),l(be,{visible:i(y),"onUpdate:visible":e[0]||(e[0]=n=>O(y)?y.value=n:null),width:"30rem",title:"Support","custom-footer":"",loading:i(M)},{default:g(()=>[i(y)?(c(),H(ae,{key:0})):_("",!0)]),_:1},8,["visible","loading"])]))}}),gt={class:"flex flex-col items-center"},_t={class:"fixed w-full px5"},yt={class:"rounded-lg p-2 border-solid border-1 w-full flex justify-between items-center"},wt=I({__name:"mobile",setup(t){const s=Y();return(e,n)=>{var f;const u=qe;return c(),p("div",gt,[o("div",_t,[o("div",yt,[o("div",{onClick:n[0]||(n[0]=a=>e.$router.push({name:"user"}))},"+"+S((f=i(s).userInfo)==null?void 0:f.phone),1),l(Ce,{icon:"vuesax-linear:logout",color:"red",onClick:n[1]||(n[1]=a=>i(xe)())})])]),l(oe),l($e,{show:i(y),"onUpdate:show":n[2]||(n[2]=a=>O(y)?y.value=a:null)},{default:g(()=>[o("div",null,[n[3]||(n[3]=o("div",{class:"font-bold text-lg"},"Support",-1)),l(u,{class:"my-2"}),i(y)?(c(),H(ae,{key:0})):_("",!0)])]),_:1},8,["show"])])}}}),bt=Ee(),St=bt.isMobile?wt:vt;export{St as default};
