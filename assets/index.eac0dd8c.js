import{_ as n}from"./Demo.e6b86088.js";import{b as o,_ as e}from"./index.cf201172.js";import{D as l,B as t,f as c,i,o as s,c as a,a as r,k as u,j as m,F as g}from"./vendor.e71e71aa.js";const v=n=>{const{title:e,content:c,overlayClosable:i,confirm:s,cancel:a}=n,r=document.createElement("div");document.body.appendChild(r);const u=l({render:()=>t(o,{visible:!0,title:e,overlayClosable:i,confirm:s,cancel:a,"onUpdate:visible":n=>{!1===n&&(u.unmount(r),r.remove())}},c)});u.mount(r)};var f={components:{CoDialog:o,CoButton:e},setup(){const n=c(!1);return{toggle:()=>{n.value=!n.value},visible:n,confirm:()=>(console.log("confirm click"),!0),cancel:()=>{console.log("cancel click")}}}},d=n=>{n.__sourceCodeTitle="常规使用",n.__sourceCode='<template>\n  <div>\n    <co-button @click="toggle">打开对话框</co-button>\n    <co-dialog v-model:visible="visible" :cancel="cancel" :confirm="confirm">\n      <strong>文本框第一行</strong>\n      <div>文本框第二行</div>\n    </co-dialog>\n  </div>\n</template>\n\n<script lang="ts">\nimport { CoButton, CoDialog } from \'coast-ui-vue3\';\nimport { ref } from \'vue\';\n\nexport default {\n  components: {\n    CoDialog,\n    CoButton,\n  },\n  setup() {\n    const visible = ref(false);\n    const toggle = () => {\n      visible.value = !visible.value;\n    };\n    const confirm = () => {\n      console.log(\'confirm click\');\n      return true;\n    };\n    const cancel = () => {\n      console.log(\'cancel click\');\n    };\n    return {\n      toggle,\n      visible,\n      confirm,\n      cancel,\n    };\n  },\n};\n<\/script>'};const p=m("打开对话框"),b=r("strong",null,"文本框第一行",-1),D=r("div",null,"文本框第二行",-1);d(f),f.render=function(n,o,e,l,t,c){const m=i("co-button"),g=i("co-dialog");return s(),a("div",null,[r(m,{onClick:l.toggle},{default:u((()=>[p])),_:1},8,["onClick"]),r(g,{visible:l.visible,"onUpdate:visible":o[1]||(o[1]=n=>l.visible=n),cancel:l.cancel,confirm:l.confirm},{default:u((()=>[b,D])),_:1},8,["visible","cancel","confirm"])])};var C={components:{CoButton:e},setup:()=>({showDialog:()=>{v({content:"文档内容",title:"标题",overlayClosable:!1,confirm:()=>(console.log("confirm"),!1),cancel(){console.log("cancel")}})}})},_=n=>{n.__sourceCodeTitle="一键打开 Dialog",n.__sourceCode="<template>\n  <div>\n    <co-button @click=\"showDialog\">打开对话框</co-button>\n  </div>\n</template>\n\n<script lang=\"ts\">\nimport { CoButton, openDialog } from 'coast-ui-vue3';\n\nexport default {\n  components: {\n    CoButton,\n  },\n  setup() {\n    const showDialog = () => {\n      openDialog({\n        content: '文档内容',\n        title: '标题',\n        overlayClosable: false,\n        confirm() {\n          console.log('confirm');\n          return false;\n        },\n        cancel() {\n          console.log('cancel');\n        },\n      });\n    };\n    return {\n      showDialog,\n    };\n  },\n};\n<\/script>"};const k=m("打开对话框");_(C),C.render=function(n,o,e,l,t,c){const m=i("co-button");return s(),a("div",null,[r(m,{onClick:l.showDialog},{default:u((()=>[k])),_:1},8,["onClick"])])};var h={components:{Demo:n},setup:()=>({DialogDemo1:f,DialogDemo2:C})};const B=r("h1",null,"Dialog 文档",-1);h.render=function(n,o,e,l,t,c){const u=i("Demo");return s(),a(g,null,[B,r(u,{component:l.DialogDemo1},null,8,["component"]),r(u,{component:l.DialogDemo2},null,8,["component"])],64)};export default h;