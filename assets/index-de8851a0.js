import{r as d,_ as _e,m as De,n as K,p as he,q as Re,t as Fe,v as z,w as de,x as Y,y as Ee,z as Oe,A as Pe,D as Le,K as Me,E as Ue,F as Ne,G as We,H as ze,J as Be,L as Xe,M as Ge,N as He,S as qe,O as Ke,P as Ye,a as ke,j as a,Q as ee,U as ye,V as ve,W as te,X as Qe,o as Je}from"./index-35e3ae89.js";import{e as Ze,C as re}from"./index-7a6af506.js";import{R as fe,C as R}from"./row-bfe36f66.js";import{u as et}from"./useForceUpdate-7cc3568d.js";import"./responsiveObserver-65e85854.js";var tt={percent:0,prefixCls:"rc-progress",strokeColor:"#2db7f5",strokeLinecap:"round",strokeWidth:1,trailColor:"#D9D9D9",trailWidth:1,gapPosition:"bottom"},rt=function(){var t=d.useRef([]),r=d.useRef(null);return d.useEffect(function(){var n=Date.now(),s=!1;t.current.forEach(function(o){if(o){s=!0;var c=o.style;c.transitionDuration=".3s, .3s, .3s, .06s",r.current&&n-r.current<100&&(c.transitionDuration="0s, 0s")}}),s&&(r.current=Date.now())}),t.current},xe=0,nt=De();function st(){var e;return nt?(e=xe,xe+=1):e="TEST_OR_SSR",e}const it=function(e){var t=d.useState(),r=_e(t,2),n=r[0],s=r[1];return d.useEffect(function(){s("rc_progress_".concat(st()))},[]),e||n};var be=function(t){var r=t.bg,n=t.children;return d.createElement("div",{style:{width:"100%",height:"100%",background:r}},n)};function Se(e,t){return Object.keys(e).map(function(r){var n=parseFloat(r),s="".concat(Math.floor(n*t),"%");return"".concat(e[r]," ").concat(s)})}var at=d.forwardRef(function(e,t){var r=e.prefixCls,n=e.color,s=e.gradientId,o=e.radius,c=e.style,i=e.ptg,l=e.strokeLinecap,u=e.strokeWidth,f=e.size,m=e.gapDegree,p=n&&K(n)==="object",v=p?"#FFF":void 0,g=f/2,x=d.createElement("circle",{className:"".concat(r,"-circle-path"),r:o,cx:g,cy:g,stroke:v,strokeLinecap:l,strokeWidth:u,opacity:i===0?0:1,style:c,ref:t});if(!p)return x;var h="".concat(s,"-conic"),j=m?"".concat(180+m/2,"deg"):"0deg",b=Se(n,(360-m)/360),O=Se(n,1),$="conic-gradient(from ".concat(j,", ").concat(b.join(", "),")"),S="linear-gradient(to ".concat(m?"bottom":"top",", ").concat(O.join(", "),")");return d.createElement(d.Fragment,null,d.createElement("mask",{id:h},x),d.createElement("foreignObject",{x:0,y:0,width:f,height:f,mask:"url(#".concat(h,")")},d.createElement(be,{bg:S},d.createElement(be,{bg:$}))))}),Q=100,ue=function(t,r,n,s,o,c,i,l,u,f){var m=arguments.length>10&&arguments[10]!==void 0?arguments[10]:0,p=n/100*360*((360-c)/360),v=c===0?0:{bottom:0,top:180,left:90,right:-90}[i],g=(100-s)/100*r;u==="round"&&s!==100&&(g+=f/2,g>=r&&(g=r-.01));var x=Q/2;return{stroke:typeof l=="string"?l:void 0,strokeDasharray:"".concat(r,"px ").concat(t),strokeDashoffset:g+m,transform:"rotate(".concat(o+p+v,"deg)"),transformOrigin:"".concat(x,"px ").concat(x,"px"),transition:"stroke-dashoffset .3s ease 0s, stroke-dasharray .3s ease 0s, stroke .3s, stroke-width .06s ease .3s, opacity .3s ease 0s",fillOpacity:0}},ot=["id","prefixCls","steps","strokeWidth","trailWidth","gapDegree","gapPosition","trailColor","strokeLinecap","style","className","strokeColor","percent"];function Ce(e){var t=e??[];return Array.isArray(t)?t:[t]}var lt=function(t){var r=he(he({},tt),t),n=r.id,s=r.prefixCls,o=r.steps,c=r.strokeWidth,i=r.trailWidth,l=r.gapDegree,u=l===void 0?0:l,f=r.gapPosition,m=r.trailColor,p=r.strokeLinecap,v=r.style,g=r.className,x=r.strokeColor,h=r.percent,j=Re(r,ot),b=Q/2,O=it(n),$="".concat(O,"-gradient"),S=b-c/2,C=Math.PI*2*S,P=u>0?90+u/2:-90,E=C*((360-u)/360),w=K(o)==="object"?o:{count:o,gap:2},y=w.count,A=w.gap,B=Ce(h),L=Ce(x),M=L.find(function(V){return V&&K(V)==="object"}),U=M&&K(M)==="object",D=U?"butt":p,H=ue(C,E,0,100,P,u,f,m,D,c),J=rt(),_=function(){var X=0;return B.map(function(W,G){var le=L[G]||L[L.length-1],q=ue(C,E,X,W,P,u,f,le,D,c);return X+=W,d.createElement(at,{key:G,color:le,ptg:W,radius:S,prefixCls:s,gradientId:$,style:q,strokeLinecap:D,strokeWidth:c,gapDegree:u,ref:function(ce){J[G]=ce},size:Q})}).reverse()},k=function(){var X=Math.round(y*(B[0]/100)),W=100/y,G=0;return new Array(y).fill(null).map(function(le,q){var Z=q<=X-1?L[0]:m,ce=Z&&K(Z)==="object"?"url(#".concat($,")"):void 0,ge=ue(C,E,G,W,P,u,f,Z,"butt",c,A);return G+=(E-ge.strokeDashoffset+A)*100/E,d.createElement("circle",{key:q,className:"".concat(s,"-circle-path"),r:S,cx:b,cy:b,stroke:ce,strokeWidth:c,opacity:1,style:ge,ref:function(Te){J[q]=Te}})})};return d.createElement("svg",Fe({className:z("".concat(s,"-circle"),g),viewBox:"0 0 ".concat(Q," ").concat(Q),style:v,id:n,role:"presentation"},j),!y&&d.createElement("circle",{className:"".concat(s,"-circle-trail"),r:S,cx:b,cy:b,stroke:m,strokeLinecap:D,strokeWidth:i||c,style:H}),y?k():_())};function F(e){return!e||e<0?0:e>100?100:e}function ne(e){let{success:t,successPercent:r}=e,n=r;return t&&"progress"in t&&(n=t.progress),t&&"percent"in t&&(n=t.percent),n}const ct=e=>{let{percent:t,success:r,successPercent:n}=e;const s=F(ne({success:r,successPercent:n}));return[s,F(F(t)-s)]},ut=e=>{let{success:t={},strokeColor:r}=e;const{strokeColor:n}=t;return[n||de.green,r||null]},oe=(e,t,r)=>{var n,s,o,c;let i=-1,l=-1;if(t==="step"){const u=r.steps,f=r.strokeWidth;typeof e=="string"||typeof e>"u"?(i=e==="small"?2:14,l=f??8):typeof e=="number"?[i,l]=[e,e]:[i=14,l=8]=Array.isArray(e)?e:[e.width,e.height],i*=u}else if(t==="line"){const u=r==null?void 0:r.strokeWidth;typeof e=="string"||typeof e>"u"?l=u||(e==="small"?6:8):typeof e=="number"?[i,l]=[e,e]:[i=-1,l=8]=Array.isArray(e)?e:[e.width,e.height]}else(t==="circle"||t==="dashboard")&&(typeof e=="string"||typeof e>"u"?[i,l]=e==="small"?[60,60]:[120,120]:typeof e=="number"?[i,l]=[e,e]:Array.isArray(e)&&(i=(s=(n=e[0])!==null&&n!==void 0?n:e[1])!==null&&s!==void 0?s:120,l=(c=(o=e[0])!==null&&o!==void 0?o:e[1])!==null&&c!==void 0?c:120));return[i,l]},dt=3,ft=e=>dt/e*100,pt=e=>{const{prefixCls:t,trailColor:r=null,strokeLinecap:n="round",gapPosition:s,gapDegree:o,width:c=120,type:i,children:l,success:u,size:f=c,steps:m}=e,[p,v]=oe(f,"circle");let{strokeWidth:g}=e;g===void 0&&(g=Math.max(ft(p),6));const x={width:p,height:v,fontSize:p*.15+6},h=d.useMemo(()=>{if(o||o===0)return o;if(i==="dashboard")return 75},[o,i]),j=ct(e),b=s||i==="dashboard"&&"bottom"||void 0,O=Object.prototype.toString.call(e.strokeColor)==="[object Object]",$=ut({success:u,strokeColor:e.strokeColor}),S=z(`${t}-inner`,{[`${t}-circle-gradient`]:O}),C=d.createElement(lt,{steps:m,percent:m?j[1]:j,strokeWidth:g,trailWidth:g,strokeColor:m?$[1]:$,strokeLinecap:n,trailColor:r,prefixCls:t,gapDegree:h,gapPosition:b}),P=p<=20,E=d.createElement("div",{className:S,style:x},C,!P&&l);return P?d.createElement(Y,{title:l},E):E},mt=pt,se="--progress-line-stroke-color",Ae="--progress-percent",je=e=>{const t=e?"100%":"-100%";return new Me(`antProgress${e?"RTL":"LTR"}Active`,{"0%":{transform:`translateX(${t}) scaleX(0)`,opacity:.1},"20%":{transform:`translateX(${t}) scaleX(0)`,opacity:.5},to:{transform:"translateX(0) scaleX(1)",opacity:0}})},gt=e=>{const{componentCls:t,iconCls:r}=e;return{[t]:Object.assign(Object.assign({},Pe(e)),{display:"inline-block","&-rtl":{direction:"rtl"},"&-line":{position:"relative",width:"100%",fontSize:e.fontSize},[`${t}-outer`]:{display:"inline-flex",alignItems:"center",width:"100%"},[`${t}-inner`]:{position:"relative",display:"inline-block",width:"100%",flex:1,overflow:"hidden",verticalAlign:"middle",backgroundColor:e.remainingColor,borderRadius:e.lineBorderRadius},[`${t}-inner:not(${t}-circle-gradient)`]:{[`${t}-circle-path`]:{stroke:e.defaultColor}},[`${t}-success-bg, ${t}-bg`]:{position:"relative",background:e.defaultColor,borderRadius:e.lineBorderRadius,transition:`all ${e.motionDurationSlow} ${e.motionEaseInOutCirc}`},[`${t}-layout-bottom`]:{display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center",[`${t}-text`]:{width:"max-content",marginInlineStart:0,marginTop:e.marginXXS}},[`${t}-bg`]:{overflow:"hidden","&::after":{content:'""',background:{_multi_value_:!0,value:["inherit",`var(${se})`]},height:"100%",width:`calc(1 / var(${Ae}) * 100%)`,display:"block"},[`&${t}-bg-inner`]:{minWidth:"max-content","&::after":{content:"none"},[`${t}-text-inner`]:{color:e.colorWhite,[`&${t}-text-bright`]:{color:"rgba(0, 0, 0, 0.45)"}}}},[`${t}-success-bg`]:{position:"absolute",insetBlockStart:0,insetInlineStart:0,backgroundColor:e.colorSuccess},[`${t}-text`]:{display:"inline-block",marginInlineStart:e.marginXS,color:e.colorText,lineHeight:1,width:"2em",whiteSpace:"nowrap",textAlign:"start",verticalAlign:"middle",wordBreak:"normal",[r]:{fontSize:e.fontSize},[`&${t}-text-outer`]:{width:"max-content"},[`&${t}-text-outer${t}-text-start`]:{width:"max-content",marginInlineStart:0,marginInlineEnd:e.marginXS}},[`${t}-text-inner`]:{display:"flex",justifyContent:"center",alignItems:"center",width:"100%",height:"100%",marginInlineStart:0,padding:`0 ${Le(e.paddingXXS)}`,[`&${t}-text-start`]:{justifyContent:"start"},[`&${t}-text-end`]:{justifyContent:"end"}},[`&${t}-status-active`]:{[`${t}-bg::before`]:{position:"absolute",inset:0,backgroundColor:e.colorBgContainer,borderRadius:e.lineBorderRadius,opacity:0,animationName:je(),animationDuration:e.progressActiveMotionDuration,animationTimingFunction:e.motionEaseOutQuint,animationIterationCount:"infinite",content:'""'}},[`&${t}-rtl${t}-status-active`]:{[`${t}-bg::before`]:{animationName:je(!0)}},[`&${t}-status-exception`]:{[`${t}-bg`]:{backgroundColor:e.colorError},[`${t}-text`]:{color:e.colorError}},[`&${t}-status-exception ${t}-inner:not(${t}-circle-gradient)`]:{[`${t}-circle-path`]:{stroke:e.colorError}},[`&${t}-status-success`]:{[`${t}-bg`]:{backgroundColor:e.colorSuccess},[`${t}-text`]:{color:e.colorSuccess}},[`&${t}-status-success ${t}-inner:not(${t}-circle-gradient)`]:{[`${t}-circle-path`]:{stroke:e.colorSuccess}}})}},ht=e=>{const{componentCls:t,iconCls:r}=e;return{[t]:{[`${t}-circle-trail`]:{stroke:e.remainingColor},[`&${t}-circle ${t}-inner`]:{position:"relative",lineHeight:1,backgroundColor:"transparent"},[`&${t}-circle ${t}-text`]:{position:"absolute",insetBlockStart:"50%",insetInlineStart:0,width:"100%",margin:0,padding:0,color:e.circleTextColor,fontSize:e.circleTextFontSize,lineHeight:1,whiteSpace:"normal",textAlign:"center",transform:"translateY(-50%)",[r]:{fontSize:e.circleIconFontSize}},[`${t}-circle&-status-exception`]:{[`${t}-text`]:{color:e.colorError}},[`${t}-circle&-status-success`]:{[`${t}-text`]:{color:e.colorSuccess}}},[`${t}-inline-circle`]:{lineHeight:1,[`${t}-inner`]:{verticalAlign:"bottom"}}}},yt=e=>{const{componentCls:t}=e;return{[t]:{[`${t}-steps`]:{display:"inline-block","&-outer":{display:"flex",flexDirection:"row",alignItems:"center"},"&-item":{flexShrink:0,minWidth:e.progressStepMinWidth,marginInlineEnd:e.progressStepMarginInlineEnd,backgroundColor:e.remainingColor,transition:`all ${e.motionDurationSlow}`,"&-active":{backgroundColor:e.defaultColor}}}}}},vt=e=>{const{componentCls:t,iconCls:r}=e;return{[t]:{[`${t}-small&-line, ${t}-small&-line ${t}-text ${r}`]:{fontSize:e.fontSizeSM}}}},xt=e=>({circleTextColor:e.colorText,defaultColor:e.colorInfo,remainingColor:e.colorFillSecondary,lineBorderRadius:100,circleTextFontSize:"1em",circleIconFontSize:`${e.fontSize/e.fontSizeSM}em`}),bt=Ee("Progress",e=>{const t=e.calc(e.marginXXS).div(2).equal(),r=Oe(e,{progressStepMarginInlineEnd:t,progressStepMinWidth:t,progressActiveMotionDuration:"2.4s"});return[gt(r),ht(r),yt(r),vt(r)]},xt);var St=globalThis&&globalThis.__rest||function(e,t){var r={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&t.indexOf(n)<0&&(r[n]=e[n]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var s=0,n=Object.getOwnPropertySymbols(e);s<n.length;s++)t.indexOf(n[s])<0&&Object.prototype.propertyIsEnumerable.call(e,n[s])&&(r[n[s]]=e[n[s]]);return r};const Ct=e=>{let t=[];return Object.keys(e).forEach(r=>{const n=parseFloat(r.replace(/%/g,""));isNaN(n)||t.push({key:n,value:e[r]})}),t=t.sort((r,n)=>r.key-n.key),t.map(r=>{let{key:n,value:s}=r;return`${s} ${n}%`}).join(", ")},jt=(e,t)=>{const{from:r=de.blue,to:n=de.blue,direction:s=t==="rtl"?"to left":"to right"}=e,o=St(e,["from","to","direction"]);if(Object.keys(o).length!==0){const i=Ct(o),l=`linear-gradient(${s}, ${i})`;return{background:l,[se]:l}}const c=`linear-gradient(${s}, ${r}, ${n})`;return{background:c,[se]:c}},wt=e=>{const{prefixCls:t,direction:r,percent:n,size:s,strokeWidth:o,strokeColor:c,strokeLinecap:i="round",children:l,trailColor:u=null,percentPosition:f,success:m}=e,{align:p,type:v}=f,g=c&&typeof c!="string"?jt(c,r):{[se]:c,background:c},x=i==="square"||i==="butt"?0:void 0,h=s??[-1,o||(s==="small"?6:8)],[j,b]=oe(h,"line",{strokeWidth:o}),O={backgroundColor:u||void 0,borderRadius:x},$=Object.assign(Object.assign({width:`${F(n)}%`,height:b,borderRadius:x},g),{[Ae]:F(n)/100}),S=ne(e),C={width:`${F(S)}%`,height:b,borderRadius:x,backgroundColor:m==null?void 0:m.strokeColor},P={width:j<0?"100%":j},E=d.createElement("div",{className:`${t}-inner`,style:O},d.createElement("div",{className:z(`${t}-bg`,`${t}-bg-${v}`),style:$},v==="inner"&&l),S!==void 0&&d.createElement("div",{className:`${t}-success-bg`,style:C})),w=v==="outer"&&p==="start",y=v==="outer"&&p==="end";return v==="outer"&&p==="center"?d.createElement("div",{className:`${t}-layout-bottom`},E,l):d.createElement("div",{className:`${t}-outer`,style:P},w&&l,E,y&&l)},$t=wt,Et=e=>{const{size:t,steps:r,percent:n=0,strokeWidth:s=8,strokeColor:o,trailColor:c=null,prefixCls:i,children:l}=e,u=Math.round(r*(n/100)),m=t??[t==="small"?2:14,s],[p,v]=oe(m,"step",{steps:r,strokeWidth:s}),g=p/r,x=new Array(r);for(let h=0;h<r;h++){const j=Array.isArray(o)?o[h]:o;x[h]=d.createElement("div",{key:h,className:z(`${i}-steps-item`,{[`${i}-steps-item-active`]:h<=u-1}),style:{backgroundColor:h<=u-1?j:c,width:g,height:v}})}return d.createElement("div",{className:`${i}-steps-outer`},x,l)},Ot=Et;var Pt=globalThis&&globalThis.__rest||function(e,t){var r={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&t.indexOf(n)<0&&(r[n]=e[n]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var s=0,n=Object.getOwnPropertySymbols(e);s<n.length;s++)t.indexOf(n[s])<0&&Object.prototype.propertyIsEnumerable.call(e,n[s])&&(r[n[s]]=e[n[s]]);return r};const Nt=["normal","exception","active","success"],kt=d.forwardRef((e,t)=>{const{prefixCls:r,className:n,rootClassName:s,steps:o,strokeColor:c,percent:i=0,size:l="default",showInfo:u=!0,type:f="line",status:m,format:p,style:v,percentPosition:g={}}=e,x=Pt(e,["prefixCls","className","rootClassName","steps","strokeColor","percent","size","showInfo","type","status","format","style","percentPosition"]),{align:h="end",type:j="outer"}=g,b=Array.isArray(c)?c[0]:c,O=typeof c=="string"||Array.isArray(c)?c:void 0,$=d.useMemo(()=>{if(b){const _=typeof b=="string"?b:Object.values(b)[0];return new Ue(_).isLight()}return!1},[c]),S=d.useMemo(()=>{var _,k;const V=ne(e);return parseInt(V!==void 0?(_=V??0)===null||_===void 0?void 0:_.toString():(k=i??0)===null||k===void 0?void 0:k.toString(),10)},[i,e.success,e.successPercent]),C=d.useMemo(()=>!Nt.includes(m)&&S>=100?"success":m||"normal",[m,S]),{getPrefixCls:P,direction:E,progress:w}=d.useContext(Ne),y=P("progress",r),[A,B,L]=bt(y),M=f==="line",U=M&&!o,D=d.useMemo(()=>{if(!u)return null;const _=ne(e);let k;const V=p||(W=>`${W}%`),X=M&&$&&j==="inner";return j==="inner"||p||C!=="exception"&&C!=="success"?k=V(F(i),F(_)):C==="exception"?k=M?d.createElement(ze,null):d.createElement(Be,null):C==="success"&&(k=M?d.createElement(Xe,null):d.createElement(Ge,null)),d.createElement("span",{className:z(`${y}-text`,{[`${y}-text-bright`]:X,[`${y}-text-${h}`]:U,[`${y}-text-${j}`]:U}),title:typeof k=="string"?k:void 0},k)},[u,i,S,C,f,y,p]);let H;f==="line"?H=o?d.createElement(Ot,Object.assign({},e,{strokeColor:O,prefixCls:y,steps:typeof o=="object"?o.count:o}),D):d.createElement($t,Object.assign({},e,{strokeColor:b,prefixCls:y,direction:E,percentPosition:{align:h,type:j}}),D):(f==="circle"||f==="dashboard")&&(H=d.createElement(mt,Object.assign({},e,{strokeColor:b,prefixCls:y,progressStatus:C}),D));const J=z(y,`${y}-status-${C}`,{[`${y}-${f==="dashboard"&&"circle"||f}`]:f!=="line",[`${y}-inline-circle`]:f==="circle"&&oe(l,"circle")[0]<=20,[`${y}-line`]:U,[`${y}-line-align-${h}`]:U,[`${y}-line-position-${j}`]:U,[`${y}-steps`]:o,[`${y}-show-info`]:u,[`${y}-${l}`]:typeof l=="string",[`${y}-rtl`]:E==="rtl"},w==null?void 0:w.className,n,s,B,L);return A(d.createElement("div",Object.assign({ref:t,style:Object.assign(Object.assign({},w==null?void 0:w.style),v),className:J,role:"progressbar","aria-valuenow":S,"aria-valuemin":0,"aria-valuemax":100},We(x,["trailColor","strokeWidth","width","gapDegree","gapPosition","strokeLinecap","success","successPercent"])),H))}),At=kt,Vt=e=>{const{value:t,formatter:r,precision:n,decimalSeparator:s,groupSeparator:o="",prefixCls:c}=e;let i;if(typeof r=="function")i=r(t);else{const l=String(t),u=l.match(/^(-?)(\d*)(\.(\d+))?$/);if(!u||l==="-")i=l;else{const f=u[1];let m=u[2]||"0",p=u[4]||"";m=m.replace(/\B(?=(\d{3})+(?!\d))/g,o),typeof n=="number"&&(p=p.padEnd(n,"0").slice(0,n>0?n:0)),p&&(p=`${s}${p}`),i=[d.createElement("span",{key:"int",className:`${c}-content-value-int`},f,m),p&&d.createElement("span",{key:"decimal",className:`${c}-content-value-decimal`},p)]}}return d.createElement("span",{className:`${c}-content-value`},i)},It=Vt,Tt=e=>{const{componentCls:t,marginXXS:r,padding:n,colorTextDescription:s,titleFontSize:o,colorTextHeading:c,contentFontSize:i,fontFamily:l}=e;return{[t]:Object.assign(Object.assign({},Pe(e)),{[`${t}-title`]:{marginBottom:r,color:s,fontSize:o},[`${t}-skeleton`]:{paddingTop:n},[`${t}-content`]:{color:c,fontSize:i,fontFamily:l,[`${t}-content-value`]:{display:"inline-block",direction:"ltr"},[`${t}-content-prefix, ${t}-content-suffix`]:{display:"inline-block"},[`${t}-content-prefix`]:{marginInlineEnd:r},[`${t}-content-suffix`]:{marginInlineStart:r}}})}},_t=e=>{const{fontSizeHeading3:t,fontSize:r}=e;return{titleFontSize:r,contentFontSize:t}},Dt=Ee("Statistic",e=>{const t=Oe(e,{});return[Tt(t)]},_t);var Rt=globalThis&&globalThis.__rest||function(e,t){var r={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&t.indexOf(n)<0&&(r[n]=e[n]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var s=0,n=Object.getOwnPropertySymbols(e);s<n.length;s++)t.indexOf(n[s])<0&&Object.prototype.propertyIsEnumerable.call(e,n[s])&&(r[n[s]]=e[n[s]]);return r};const Ft=e=>{const{prefixCls:t,className:r,rootClassName:n,style:s,valueStyle:o,value:c=0,title:i,valueRender:l,prefix:u,suffix:f,loading:m=!1,formatter:p,precision:v,decimalSeparator:g=".",groupSeparator:x=",",onMouseEnter:h,onMouseLeave:j}=e,b=Rt(e,["prefixCls","className","rootClassName","style","valueStyle","value","title","valueRender","prefix","suffix","loading","formatter","precision","decimalSeparator","groupSeparator","onMouseEnter","onMouseLeave"]),{getPrefixCls:O,direction:$,statistic:S}=d.useContext(Ne),C=O("statistic",t),[P,E,w]=Dt(C),y=d.createElement(It,{decimalSeparator:g,groupSeparator:x,prefixCls:C,formatter:p,precision:v,value:c}),A=z(C,{[`${C}-rtl`]:$==="rtl"},S==null?void 0:S.className,r,n,E,w),B=He(b,{aria:!0,data:!0});return P(d.createElement("div",Object.assign({},B,{className:A,style:Object.assign(Object.assign({},S==null?void 0:S.style),s),onMouseEnter:h,onMouseLeave:j}),i&&d.createElement("div",{className:`${C}-title`},i),d.createElement(qe,{paragraph:!1,loading:m,className:`${C}-skeleton`},d.createElement("div",{style:o,className:`${C}-content`},u&&d.createElement("span",{className:`${C}-content-prefix`},u),l?l(y):y,f&&d.createElement("span",{className:`${C}-content-suffix`},f)))))},T=Ft,Lt=[["Y",1e3*60*60*24*365],["M",1e3*60*60*24*30],["D",1e3*60*60*24],["H",1e3*60*60],["m",1e3*60],["s",1e3],["S",1]];function Mt(e,t){let r=e;const n=/\[[^\]]*]/g,s=(t.match(n)||[]).map(l=>l.slice(1,-1)),o=t.replace(n,"[]"),c=Lt.reduce((l,u)=>{let[f,m]=u;if(l.includes(f)){const p=Math.floor(r/m);return r-=p*m,l.replace(new RegExp(`${f}+`,"g"),v=>{const g=v.length;return p.toString().padStart(g,"0")})}return l},o);let i=0;return c.replace(n,()=>{const l=s[i];return i+=1,l})}function Ut(e,t){const{format:r=""}=t,n=new Date(e).getTime(),s=Date.now(),o=Math.max(n-s,0);return Mt(o,r)}var Wt=globalThis&&globalThis.__rest||function(e,t){var r={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&t.indexOf(n)<0&&(r[n]=e[n]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var s=0,n=Object.getOwnPropertySymbols(e);s<n.length;s++)t.indexOf(n[s])<0&&Object.prototype.propertyIsEnumerable.call(e,n[s])&&(r[n[s]]=e[n[s]]);return r};const zt=1e3/30;function Bt(e){return new Date(e).getTime()}const Xt=e=>{const{value:t,format:r="HH:mm:ss",onChange:n,onFinish:s}=e,o=Wt(e,["value","format","onChange","onFinish"]),c=et(),i=d.useRef(null),l=()=>{s==null||s(),i.current&&(clearInterval(i.current),i.current=null)},u=()=>{const p=Bt(t);p>=Date.now()&&(i.current=setInterval(()=>{c(),n==null||n(p-Date.now()),p<Date.now()&&l()},zt))};d.useEffect(()=>(u(),()=>{i.current&&(clearInterval(i.current),i.current=null)}),[t]);const f=(p,v)=>Ut(p,Object.assign(Object.assign({},v),{format:r})),m=p=>Ke(p,{title:void 0});return d.createElement(T,Object.assign({},o,{value:t,valueRender:m,formatter:f}))},Gt=d.memo(Xt);T.Countdown=Gt;var me={},ie=function(){return ie=Object.assign||function(e){for(var t,r=1,n=arguments.length;r<n;r++)for(var s in t=arguments[r])Object.prototype.hasOwnProperty.call(t,s)&&(e[s]=t[s]);return e},ie.apply(this,arguments)},Ht=function(){function e(t,r,n){var s=this;this.endVal=r,this.options=n,this.version="2.8.0",this.defaults={startVal:0,decimalPlaces:0,duration:2,useEasing:!0,useGrouping:!0,useIndianSeparators:!1,smartEasingThreshold:999,smartEasingAmount:333,separator:",",decimal:".",prefix:"",suffix:"",enableScrollSpy:!1,scrollSpyDelay:200,scrollSpyOnce:!1},this.finalEndVal=null,this.useEasing=!0,this.countDown=!1,this.error="",this.startVal=0,this.paused=!0,this.once=!1,this.count=function(o){s.startTime||(s.startTime=o);var c=o-s.startTime;s.remaining=s.duration-c,s.useEasing?s.countDown?s.frameVal=s.startVal-s.easingFn(c,0,s.startVal-s.endVal,s.duration):s.frameVal=s.easingFn(c,s.startVal,s.endVal-s.startVal,s.duration):s.frameVal=s.startVal+(s.endVal-s.startVal)*(c/s.duration);var i=s.countDown?s.frameVal<s.endVal:s.frameVal>s.endVal;s.frameVal=i?s.endVal:s.frameVal,s.frameVal=Number(s.frameVal.toFixed(s.options.decimalPlaces)),s.printValue(s.frameVal),c<s.duration?s.rAF=requestAnimationFrame(s.count):s.finalEndVal!==null?s.update(s.finalEndVal):s.options.onCompleteCallback&&s.options.onCompleteCallback()},this.formatNumber=function(o){var c,i,l,u,f=o<0?"-":"";c=Math.abs(o).toFixed(s.options.decimalPlaces);var m=(c+="").split(".");if(i=m[0],l=m.length>1?s.options.decimal+m[1]:"",s.options.useGrouping){u="";for(var p=3,v=0,g=0,x=i.length;g<x;++g)s.options.useIndianSeparators&&g===4&&(p=2,v=1),g!==0&&v%p==0&&(u=s.options.separator+u),v++,u=i[x-g-1]+u;i=u}return s.options.numerals&&s.options.numerals.length&&(i=i.replace(/[0-9]/g,function(h){return s.options.numerals[+h]}),l=l.replace(/[0-9]/g,function(h){return s.options.numerals[+h]})),f+s.options.prefix+i+l+s.options.suffix},this.easeOutExpo=function(o,c,i,l){return i*(1-Math.pow(2,-10*o/l))*1024/1023+c},this.options=ie(ie({},this.defaults),n),this.formattingFn=this.options.formattingFn?this.options.formattingFn:this.formatNumber,this.easingFn=this.options.easingFn?this.options.easingFn:this.easeOutExpo,this.startVal=this.validateValue(this.options.startVal),this.frameVal=this.startVal,this.endVal=this.validateValue(r),this.options.decimalPlaces=Math.max(this.options.decimalPlaces),this.resetDuration(),this.options.separator=String(this.options.separator),this.useEasing=this.options.useEasing,this.options.separator===""&&(this.options.useGrouping=!1),this.el=typeof t=="string"?document.getElementById(t):t,this.el?this.printValue(this.startVal):this.error="[CountUp] target is null or undefined",typeof window<"u"&&this.options.enableScrollSpy&&(this.error?console.error(this.error,t):(window.onScrollFns=window.onScrollFns||[],window.onScrollFns.push(function(){return s.handleScroll(s)}),window.onscroll=function(){window.onScrollFns.forEach(function(o){return o()})},this.handleScroll(this)))}return e.prototype.handleScroll=function(t){if(t&&window&&!t.once){var r=window.innerHeight+window.scrollY,n=t.el.getBoundingClientRect(),s=n.top+window.pageYOffset,o=n.top+n.height+window.pageYOffset;o<r&&o>window.scrollY&&t.paused?(t.paused=!1,setTimeout(function(){return t.start()},t.options.scrollSpyDelay),t.options.scrollSpyOnce&&(t.once=!0)):(window.scrollY>o||s>r)&&!t.paused&&t.reset()}},e.prototype.determineDirectionAndSmartEasing=function(){var t=this.finalEndVal?this.finalEndVal:this.endVal;this.countDown=this.startVal>t;var r=t-this.startVal;if(Math.abs(r)>this.options.smartEasingThreshold&&this.options.useEasing){this.finalEndVal=t;var n=this.countDown?1:-1;this.endVal=t+n*this.options.smartEasingAmount,this.duration=this.duration/2}else this.endVal=t,this.finalEndVal=null;this.finalEndVal!==null?this.useEasing=!1:this.useEasing=this.options.useEasing},e.prototype.start=function(t){this.error||(this.options.onStartCallback&&this.options.onStartCallback(),t&&(this.options.onCompleteCallback=t),this.duration>0?(this.determineDirectionAndSmartEasing(),this.paused=!1,this.rAF=requestAnimationFrame(this.count)):this.printValue(this.endVal))},e.prototype.pauseResume=function(){this.paused?(this.startTime=null,this.duration=this.remaining,this.startVal=this.frameVal,this.determineDirectionAndSmartEasing(),this.rAF=requestAnimationFrame(this.count)):cancelAnimationFrame(this.rAF),this.paused=!this.paused},e.prototype.reset=function(){cancelAnimationFrame(this.rAF),this.paused=!0,this.resetDuration(),this.startVal=this.validateValue(this.options.startVal),this.frameVal=this.startVal,this.printValue(this.startVal)},e.prototype.update=function(t){cancelAnimationFrame(this.rAF),this.startTime=null,this.endVal=this.validateValue(t),this.endVal!==this.frameVal&&(this.startVal=this.frameVal,this.finalEndVal==null&&this.resetDuration(),this.finalEndVal=null,this.determineDirectionAndSmartEasing(),this.rAF=requestAnimationFrame(this.count))},e.prototype.printValue=function(t){var r;if(this.el){var n=this.formattingFn(t);!((r=this.options.plugin)===null||r===void 0)&&r.render?this.options.plugin.render(this.el,n):this.el.tagName==="INPUT"?this.el.value=n:this.el.tagName==="text"||this.el.tagName==="tspan"?this.el.textContent=n:this.el.innerHTML=n}},e.prototype.ensureNumber=function(t){return typeof t=="number"&&!isNaN(t)},e.prototype.validateValue=function(t){var r=Number(t);return this.ensureNumber(r)?r:(this.error="[CountUp] invalid start or end value: ".concat(t),null)},e.prototype.resetDuration=function(){this.startTime=null,this.duration=1e3*Number(this.options.duration),this.remaining=this.duration},e}();const qt=Object.freeze(Object.defineProperty({__proto__:null,CountUp:Ht},Symbol.toStringTag,{value:"Module"})),Kt=Ye(qt);Object.defineProperty(me,"__esModule",{value:!0});var N=d,Yt=Kt;function Qt(e,t){var r=e==null?null:typeof Symbol<"u"&&e[Symbol.iterator]||e["@@iterator"];if(r!=null){var n,s,o,c,i=[],l=!0,u=!1;try{if(o=(r=r.call(e)).next,t===0){if(Object(r)!==r)return;l=!1}else for(;!(l=(n=o.call(r)).done)&&(i.push(n.value),i.length!==t);l=!0);}catch(f){u=!0,s=f}finally{try{if(!l&&r.return!=null&&(c=r.return(),Object(c)!==c))return}finally{if(u)throw s}}return i}}function we(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter(function(s){return Object.getOwnPropertyDescriptor(e,s).enumerable})),r.push.apply(r,n)}return r}function ae(e){for(var t=1;t<arguments.length;t++){var r=arguments[t]!=null?arguments[t]:{};t%2?we(Object(r),!0).forEach(function(n){er(e,n,r[n])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):we(Object(r)).forEach(function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(r,n))})}return e}function Jt(e,t){if(typeof e!="object"||!e)return e;var r=e[Symbol.toPrimitive];if(r!==void 0){var n=r.call(e,t||"default");if(typeof n!="object")return n;throw new TypeError("@@toPrimitive must return a primitive value.")}return(t==="string"?String:Number)(e)}function Zt(e){var t=Jt(e,"string");return typeof t=="symbol"?t:String(t)}function er(e,t,r){return t=Zt(t),t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function pe(){return pe=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e},pe.apply(this,arguments)}function tr(e,t){if(e==null)return{};var r={},n=Object.keys(e),s,o;for(o=0;o<n.length;o++)s=n[o],!(t.indexOf(s)>=0)&&(r[s]=e[s]);return r}function Ve(e,t){if(e==null)return{};var r=tr(e,t),n,s;if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(s=0;s<o.length;s++)n=o[s],!(t.indexOf(n)>=0)&&Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}function rr(e,t){return nr(e)||Qt(e,t)||sr(e,t)||ir()}function nr(e){if(Array.isArray(e))return e}function sr(e,t){if(e){if(typeof e=="string")return $e(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);if(r==="Object"&&e.constructor&&(r=e.constructor.name),r==="Map"||r==="Set")return Array.from(e);if(r==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))return $e(e,t)}}function $e(e,t){(t==null||t>e.length)&&(t=e.length);for(var r=0,n=new Array(t);r<t;r++)n[r]=e[r];return n}function ir(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}var ar=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u"?N.useLayoutEffect:N.useEffect;function I(e){var t=N.useRef(e);return ar(function(){t.current=e}),N.useCallback(function(){for(var r=arguments.length,n=new Array(r),s=0;s<r;s++)n[s]=arguments[s];return t.current.apply(void 0,n)},[])}var or=function(t,r){var n=r.decimal,s=r.decimals,o=r.duration,c=r.easingFn,i=r.end,l=r.formattingFn,u=r.numerals,f=r.prefix,m=r.separator,p=r.start,v=r.suffix,g=r.useEasing,x=r.useGrouping,h=r.useIndianSeparators,j=r.enableScrollSpy,b=r.scrollSpyDelay,O=r.scrollSpyOnce,$=r.plugin;return new Yt.CountUp(t,i,{startVal:p,duration:o,decimal:n,decimalPlaces:s,easingFn:c,formattingFn:l,numerals:u,separator:m,prefix:f,suffix:v,plugin:$,useEasing:g,useIndianSeparators:h,useGrouping:x,enableScrollSpy:j,scrollSpyDelay:b,scrollSpyOnce:O})},lr=["ref","startOnMount","enableReinitialize","delay","onEnd","onStart","onPauseResume","onReset","onUpdate"],cr={decimal:".",separator:",",delay:null,prefix:"",suffix:"",duration:2,start:0,decimals:0,startOnMount:!0,enableReinitialize:!0,useEasing:!0,useGrouping:!0,useIndianSeparators:!1},Ie=function(t){var r=Object.fromEntries(Object.entries(t).filter(function(w){var y=rr(w,2),A=y[1];return A!==void 0})),n=N.useMemo(function(){return ae(ae({},cr),r)},[t]),s=n.ref,o=n.startOnMount,c=n.enableReinitialize,i=n.delay,l=n.onEnd,u=n.onStart,f=n.onPauseResume,m=n.onReset,p=n.onUpdate,v=Ve(n,lr),g=N.useRef(),x=N.useRef(),h=N.useRef(!1),j=I(function(){return or(typeof s=="string"?s:s.current,v)}),b=I(function(w){var y=g.current;if(y&&!w)return y;var A=j();return g.current=A,A}),O=I(function(){var w=function(){return b(!0).start(function(){l==null||l({pauseResume:$,reset:S,start:P,update:C})})};i&&i>0?x.current=setTimeout(w,i*1e3):w(),u==null||u({pauseResume:$,reset:S,update:C})}),$=I(function(){b().pauseResume(),f==null||f({reset:S,start:P,update:C})}),S=I(function(){b().el&&(x.current&&clearTimeout(x.current),b().reset(),m==null||m({pauseResume:$,start:P,update:C}))}),C=I(function(w){b().update(w),p==null||p({pauseResume:$,reset:S,start:P})}),P=I(function(){S(),O()}),E=I(function(w){o&&(w&&S(),O())});return N.useEffect(function(){h.current?c&&E(!0):(h.current=!0,E())},[c,h,E,i,t.start,t.suffix,t.prefix,t.duration,t.separator,t.decimals,t.decimal,t.formattingFn]),N.useEffect(function(){return function(){S()}},[S]),{start:P,pauseResume:$,reset:S,update:C,getCountUp:b}},ur=["className","redraw","containerProps","children","style"],dr=function(t){var r=t.className,n=t.redraw,s=t.containerProps,o=t.children,c=t.style,i=Ve(t,ur),l=N.useRef(null),u=N.useRef(!1),f=Ie(ae(ae({},i),{},{ref:l,startOnMount:typeof o!="function"||t.delay===0,enableReinitialize:!1})),m=f.start,p=f.reset,v=f.update,g=f.pauseResume,x=f.getCountUp,h=I(function(){m()}),j=I(function($){t.preserveValue||p(),v($)}),b=I(function(){if(typeof t.children=="function"&&!(l.current instanceof Element)){console.error(`Couldn't find attached element to hook the CountUp instance into! Try to attach "containerRef" from the render prop to a an Element, eg. <span ref={containerRef} />.`);return}x()});N.useEffect(function(){b()},[b]),N.useEffect(function(){u.current&&j(t.end)},[t.end,j]);var O=n&&t;return N.useEffect(function(){n&&u.current&&h()},[h,n,O]),N.useEffect(function(){!n&&u.current&&h()},[h,n,t.start,t.suffix,t.prefix,t.duration,t.separator,t.decimals,t.decimal,t.className,t.formattingFn]),N.useEffect(function(){u.current=!0},[]),typeof o=="function"?o({countUpRef:l,start:m,reset:p,update:v,pauseResume:g,getCountUp:x}):N.createElement("span",pe({className:r,ref:l,style:c},s),typeof t.start<"u"?x().formattingFn(t.start):"")},fr=me.default=dr;me.useCountUp=Ie;function pr(){const{t:e}=ke(),t="bg-white h-[185px] p-4 flex flex-col justify-between",r=(i,l=0)=>a.jsx(fr,{end:i,decimals:l,separator:","}),n=()=>a.jsxs("div",{className:t,children:[a.jsxs("div",{children:[a.jsxs("div",{className:"text-gray-500 flex items-center justify-between",children:[a.jsx("span",{children:e("总销售额")}),a.jsx(Y,{title:e("指标说明"),children:a.jsx(ee,{})})]}),a.jsx("div",{className:"text-32 pt-4",children:a.jsx(T,{value:112893,prefix:"￥",formatter:i=>r(i,2)})}),a.jsxs("div",{className:"h-[46px] flex items-end pb-2",children:[a.jsxs("span",{children:[a.jsxs("span",{className:"pr-1",children:[e("周")," 12%"]}),a.jsx(ye,{className:"text-red-500"})]}),a.jsxs("span",{className:"pl-3",children:[a.jsxs("span",{className:"pr-1",children:[e("日")," 11%"]}),a.jsx(ve,{className:"text-green-500"})]})]})]}),a.jsxs("div",{children:[a.jsx(te,{className:"my-2"}),a.jsx(T,{value:1260,precision:2,prefix:e("日销售额")+" ￥",valueStyle:{fontSize:"14px"}})]})]}),s=()=>{const i={tooltip:{trigger:"axis",axisPointer:{type:"none",label:{backgroundColor:"#6a7985"}},formatter:"{c0}"},grid:{left:0,right:0,bottom:0,top:0},xAxis:[{type:"category",boundaryGap:!1,show:!1}],yAxis:[{show:!1}],series:[{type:"line",smooth:!0,lineStyle:{width:2,color:"rgba(151, 60, 217, 1)"},showSymbol:!1,areaStyle:{opacity:.8,color:new Ze.graphic.LinearGradient(0,0,0,1,[{offset:0,color:"rgba(151, 60, 217, 0.8)"},{offset:1,color:"rgba(151, 60, 217, 0.1)"}])},emphasis:{focus:"series"},data:[220,402,231,400,190,230,300]}]};return a.jsxs("div",{className:t,children:[a.jsxs("div",{children:[a.jsxs("div",{className:"text-gray-500 flex items-center justify-between",children:[a.jsx("span",{children:e("访问量")}),a.jsx(Y,{title:e("指标说明"),children:a.jsx(ee,{})})]}),a.jsx("div",{className:"text-32 pt-4",children:a.jsx(T,{value:8650,formatter:l=>r(l)})}),a.jsx(re,{width:"100%",height:46,options:i})]}),a.jsxs("div",{children:[a.jsx(te,{className:"my-2"}),a.jsx(T,{value:1234,prefix:e("日访问量"),valueStyle:{fontSize:"14px"}})]})]})},o=()=>{const i={grid:{left:0,right:0,bottom:0,top:0},tooltip:{trigger:"axis",axisPointer:{type:"none",label:{backgroundColor:"#6a7985"}},formatter:"{c0}"},xAxis:{type:"category",show:!1},yAxis:{type:"value",show:!1},series:[{data:[120,200,150,80,70,200,150,80,70,110,130],type:"bar",showBackground:!1}]};return a.jsxs("div",{className:t,children:[a.jsxs("div",{children:[a.jsxs("div",{className:"text-gray-500 flex items-center justify-between",children:[a.jsx("span",{children:e("支付笔数")}),a.jsx(Y,{title:e("指标说明"),children:a.jsx(ee,{})})]}),a.jsx("div",{className:"text-32 pt-4",children:a.jsx(T,{value:6560,formatter:l=>r(l)})}),a.jsx(re,{width:"100%",height:46,options:i})]}),a.jsxs("div",{children:[a.jsx(te,{className:"my-2"}),a.jsx(T,{value:30,prefix:e("转化率"),suffix:"%",valueStyle:{fontSize:"14px"}})]})]})},c=()=>a.jsxs("div",{className:t,children:[a.jsxs("div",{children:[a.jsxs("div",{className:"text-gray-500 flex items-center justify-between",children:[a.jsx("span",{children:e("运营活动效果")}),a.jsx(Y,{title:e("指标说明"),children:a.jsx(ee,{})})]}),a.jsxs("div",{className:"text-32 pt-4",children:[a.jsx(T,{value:78,suffix:"%",formatter:i=>r(i)}),a.jsx(At,{percent:78,showInfo:!1})]})]}),a.jsxs("div",{children:[a.jsx(te,{className:"my-2"}),a.jsxs("div",{children:[a.jsxs("span",{children:[a.jsxs("span",{className:"pr-1",children:[e("周")," 62%"]}),a.jsx(ye,{className:"text-red-500"})]}),a.jsxs("span",{className:"pl-3",children:[a.jsxs("span",{className:"pr-1",children:[e("日")," 71%"]}),a.jsx(ve,{className:"text-green-500"})]})]})]})]});return a.jsxs(fe,{gutter:[16,16],className:"mb-5",children:[a.jsx(R,{xl:6,span:12,children:a.jsx(n,{})}),a.jsx(R,{xl:6,span:12,children:a.jsx(s,{})}),a.jsx(R,{xl:6,span:12,children:a.jsx(o,{})}),a.jsx(R,{xl:6,span:12,children:a.jsx(c,{})})]})}function mr(){const{t:e}=ke();function t(o){const{len:c,address:i,data:l}=o;return a.jsx("ul",{children:new Array(c).fill(null).map((u,f)=>a.jsxs("li",{className:"flex items-center justify-between my-5",children:[a.jsxs("div",{className:"flex items-center",children:[a.jsx("div",{className:"w-5 h-5 leading-5 text-center sp rounded-full bg-slate-200 mr-2",children:f}),a.jsxs("div",{children:[e(i)," ",f+1,e("号店")]})]}),a.jsx(T,{value:l,valueStyle:{fontSize:"14px"}})]},f))})}const r=()=>{const o={grid:{left:0,right:0,bottom:0,top:10,containLabel:!0},tooltip:{trigger:"axis",axisPointer:{type:"shadow",label:{backgroundColor:"#6a7985"}},formatter:`{b0}: <br />${e("销售额")}：{c0}`},xAxis:{type:"category",data:function(){return new Array(12).fill(null).map((c,i)=>i+1+e("月"))}()},yAxis:{type:"value"},series:[{data:[120,200,150,80,70,110,130,120,200,150,80,70,110,130],type:"bar",barWidth:35,showBackground:!1}]};return a.jsxs(fe,{gutter:[16,16],className:"p-0 m-0 h-[320px]",children:[a.jsx(R,{span:15,className:"h-full",children:a.jsx(re,{width:"100%",height:"100%",options:o})}),a.jsxs(R,{span:8,offset:1,children:[a.jsx("p",{children:e("门店销售额")}),a.jsx(t,{len:6,address:"双流区",data:34678})]})]})},n=()=>{const o={grid:{left:0,right:0,bottom:0,top:10,containLabel:!0},tooltip:{trigger:"axis",axisPointer:{type:"line",label:{backgroundColor:"#6a7985"}},formatter:`{b0}: <br />${e("访问量")}：{c0}`},xAxis:{type:"category",data:function(){return new Array(12).fill(null).map((c,i)=>i+1+e("月"))}()},yAxis:{type:"value"},series:[{data:[820,932,901,934,1290,1330,1320,820,932,901,934,1290,1330,1320],type:"line",smooth:!0}]};return a.jsxs(fe,{gutter:[16,16],className:"p-0 m-0 h-[320px]",children:[a.jsx(R,{span:15,className:"h-full",children:a.jsx(re,{width:"100%",height:"100%",options:o})}),a.jsxs(R,{span:8,offset:1,children:[a.jsx("p",{children:e("门店访问量")}),a.jsx(t,{len:5,address:"成华区",data:25678})]})]})},s=[{key:"1",label:e("销售额"),children:a.jsx(r,{})},{key:"2",label:e("访问量"),children:a.jsx(n,{})}];return a.jsx("div",{className:"!mx-0 bg-white p-4",children:a.jsx(Qe,{items:s})})}function gr(){return a.jsxs(a.Fragment,{children:[a.jsx(pr,{}),a.jsx(mr,{})]})}const Cr=Je(gr);export{Cr as default};