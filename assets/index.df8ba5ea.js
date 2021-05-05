import{c as n,_ as o,a as e}from"./Demo.b267d665.js";import{m as l,j as t,k as c,o as i,c as s,d as a,n as r,r as m,e as u,F as g}from"./vendor.556392f1.js";const v=o=>{const{title:e,content:c,overlayClosable:i,confirm:s,cancel:a}=o,r=document.createElement("div");document.body.appendChild(r);const m=l({render:()=>t(n,{visible:!0,title:e,overlayClosable:i,confirm:s,cancel:a,"onUpdate:visible":n=>{!1===n&&(m.unmount(r),r.remove())}},{content:c})});m.mount(r)};var p={components:{Dialog:n,Button:o},setup(){const n=c(!1);return{toggle:()=>{n.value=!n.value},visible:n,confirm:()=>(console.log("confirm click"),!0),cancel:()=>{console.log("cancel click")}}}},f=n=>{n.__sourceCodeTitle="常规使用",n.__sourceCode='<template>\n  <div>\n    <Button @click="toggle">打开对话框</Button>\n    <Dialog v-model:visible="visible" :cancel="cancel" :confirm="confirm" :overlayClosable="false">\n      <template v-slot:content>\n        <strong>文本框第一行</strong>\n        <div>文本框第二行</div>\n      </template>\n    </Dialog>\n  </div>\n</template>\n\n<script lang="ts">\nimport Dialog from \'../../lib/Dialog.vue\';\nimport { Button } from \'../../lib/index\';\nimport { ref } from \'vue\';\n\nexport default {\n  components: {\n    Dialog,\n    Button,\n  },\n  setup() {\n    const visible = ref(false);\n    const toggle = () => {\n      visible.value = !visible.value;\n    };\n    const confirm = () => {\n      console.log(\'confirm click\');\n      return true;\n    };\n    const cancel = () => {\n      console.log(\'cancel click\');\n    };\n    return {\n      toggle,\n      visible,\n      confirm,\n      cancel,\n    };\n  },\n};\n<\/script>'};const d=u("打开对话框"),D=a("strong",null,"文本框第一行",-1),b=a("div",null,"文本框第二行",-1);f(p),p.render=function(n,o,e,l,t,c){const u=m("Button"),g=m("Dialog");return i(),s("div",null,[a(u,{onClick:l.toggle},{default:r((()=>[d])),_:1},8,["onClick"]),a(g,{visible:l.visible,"onUpdate:visible":o[1]||(o[1]=n=>l.visible=n),cancel:l.cancel,confirm:l.confirm,overlayClosable:!1},{content:r((()=>[D,b])),_:1},8,["visible","cancel","confirm"])])};var C={components:{Button:o},setup:()=>({showDialog:()=>{v({content:"文档内容",title:"标题",overlayClosable:!1,confirm:()=>(console.log("confirm"),!1),cancel(){console.log("cancel")}})}})},B=n=>{n.__sourceCodeTitle="一键打开 Dialog",n.__sourceCode="<template>\n  <div>\n    <Button @click=\"showDialog\">打开对话框</Button>\n  </div>\n</template>\n\n<script lang=\"ts\">\nimport { Button, openDialog } from '../../lib/index';\n\nexport default {\n  components: {\n    Button,\n  },\n  setup() {\n    const showDialog = () => {\n      openDialog({\n        content: '文档内容',\n        title: '标题',\n        overlayClosable: false,\n        confirm() {\n          console.log('confirm');\n          return false;\n        },\n        cancel() {\n          console.log('cancel');\n        },\n      });\n    };\n    return {\n      showDialog,\n    };\n  },\n};\n<\/script>"};const _=u("打开对话框");B(C),C.render=function(n,o,e,l,t,c){const u=m("Button");return i(),s("div",null,[a(u,{onClick:l.showDialog},{default:r((()=>[_])),_:1},8,["onClick"])])};var k={components:{Demo:e},setup:()=>({DialogDemo1:p,DialogDemo2:C})};const h=a("h1",null,"Dialog 文档",-1);k.render=function(n,o,e,l,t,c){const r=m("Demo");return i(),s(g,null,[h,a(r,{component:l.DialogDemo1},null,8,["component"]),a(r,{component:l.DialogDemo2},null,8,["component"])],64)};export default k;
