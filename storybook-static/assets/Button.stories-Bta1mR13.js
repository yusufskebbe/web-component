const l={title:"Components/Button",tags:["autodocs"],parameters:{actions:{argTypesRegex:"^on.*",handles:["click"]}},argTypes:{buttonType:{control:{type:"radio"},options:["submit","button"]},buttonStyle:{control:{type:"select"},options:["primary","outlined","danger","success"]},buttonDisabled:{control:{type:"boolean"}}}},r=({buttonText:s,buttonType:u,buttonStyle:b,buttonDisabled:a})=>`
  <my-button 
    button-text="${s}" 
    button-type="${u}" 
    button-style="${b}"
    button-disabled="${a}"

    >
  </my-button>
`,t=r.bind({});t.args={buttonText:"Default",buttonType:"submit",buttonStyle:"primary",buttonDisabled:"false"};var n,o,e;t.parameters={...t.parameters,docs:{...(n=t.parameters)==null?void 0:n.docs,source:{originalSource:`({
  buttonText,
  buttonType,
  buttonStyle,
  buttonDisabled
}) => \`
  <my-button 
    button-text="\${buttonText}" 
    button-type="\${buttonType}" 
    button-style="\${buttonStyle}"
    button-disabled="\${buttonDisabled}"

    >
  </my-button>
\``,...(e=(o=t.parameters)==null?void 0:o.docs)==null?void 0:e.source}}};const p=["Default"];export{t as Default,p as __namedExportsOrder,l as default};
