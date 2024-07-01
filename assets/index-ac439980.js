import{r as o,n as qe,p as ze,Y as Ae,Z as Ne,G as Pe,$ as de,a0 as xe,_ as Y,a1 as De,m as K,a2 as Be,a3 as Xe,a4 as Ge,q as fe,a5 as Ye,a6 as Ke,a7 as Ue,a8 as Qe,a9 as je,aa as J,ab as Ze,ac as ge,ad as $e,ae as Je,af as ke,F as et,ag as tt,ah as nt,ai as rt,aj as ot,t as lt,ak as Me,L as it,al as at,H as st,am as ct,an as mt,ao as ut,ap as dt,aq as ft,ar as gt,as as pt,at as ht,N as bt,au as yt,av as Ct}from"./index-e8da2915.js";import{C as Re,R as xt}from"./row-06aca23d.js";const ve=e=>typeof e=="object"&&e!=null&&e.nodeType===1,we=(e,t)=>(!t||e!=="hidden")&&e!=="visible"&&e!=="clip",me=(e,t)=>{if(e.clientHeight<e.scrollHeight||e.clientWidth<e.scrollWidth){const r=getComputedStyle(e,null);return we(r.overflowY,t)||we(r.overflowX,t)||(n=>{const l=(i=>{if(!i.ownerDocument||!i.ownerDocument.defaultView)return null;try{return i.ownerDocument.defaultView.frameElement}catch{return null}})(n);return!!l&&(l.clientHeight<n.scrollHeight||l.clientWidth<n.scrollWidth)})(e)}return!1},le=(e,t,r,n,l,i,c,s)=>i<e&&c>t||i>e&&c<t?0:i<=e&&s<=r||c>=t&&s>=r?i-e-n:c>t&&s<r||i<e&&s>r?c-t+l:0,$t=e=>{const t=e.parentElement;return t??(e.getRootNode().host||null)},Se=(e,t)=>{var r,n,l,i;if(typeof document>"u")return[];const{scrollMode:c,block:s,inline:m,boundary:u,skipOverflowHiddenElements:f}=t,R=typeof u=="function"?u:M=>M!==u;if(!ve(e))throw new TypeError("Invalid target");const _=document.scrollingElement||document.documentElement,$=[];let d=e;for(;ve(d)&&R(d);){if(d=$t(d),d===_){$.push(d);break}d!=null&&d===document.body&&me(d)&&!me(document.documentElement)||d!=null&&me(d,f)&&$.push(d)}const S=(n=(r=window.visualViewport)==null?void 0:r.width)!=null?n:innerWidth,E=(i=(l=window.visualViewport)==null?void 0:l.height)!=null?i:innerHeight,{scrollX:p,scrollY:a}=window,{height:v,width:h,top:g,right:b,bottom:j,left:F}=e.getBoundingClientRect();let N=s==="start"||s==="nearest"?g:s==="end"?j:g+v/2,w=m==="center"?F+h/2:m==="end"?b:F;const W=[];for(let M=0;M<$.length;M++){const y=$[M],{height:P,width:H,top:V,right:T,bottom:L,left:q}=y.getBoundingClientRect();if(c==="if-needed"&&g>=0&&F>=0&&j<=E&&b<=S&&g>=V&&j<=L&&F>=q&&b<=T)return W;const G=getComputedStyle(y),z=parseInt(G.borderLeftWidth,10),B=parseInt(G.borderTopWidth,10),A=parseInt(G.borderRightWidth,10),C=parseInt(G.borderBottomWidth,10);let I=0,x=0;const D="offsetWidth"in y?y.offsetWidth-y.clientWidth-z-A:0,X="offsetHeight"in y?y.offsetHeight-y.clientHeight-B-C:0,Q="offsetWidth"in y?y.offsetWidth===0?0:H/y.offsetWidth:0,k="offsetHeight"in y?y.offsetHeight===0?0:P/y.offsetHeight:0;if(_===y)I=s==="start"?N:s==="end"?N-E:s==="nearest"?le(a,a+E,E,B,C,a+N,a+N+v,v):N-E/2,x=m==="start"?w:m==="center"?w-S/2:m==="end"?w-S:le(p,p+S,S,z,A,p+w,p+w+h,h),I=Math.max(0,I+a),x=Math.max(0,x+p);else{I=s==="start"?N-V-B:s==="end"?N-L+C+X:s==="nearest"?le(V,L,P,B,C+X,N,N+v,v):N-(V+P/2)+X/2,x=m==="start"?w-q-z:m==="center"?w-(q+H/2)+D/2:m==="end"?w-T+A+D:le(q,T,H,z,A+D,w,w+h,h);const{scrollLeft:Z,scrollTop:O}=y;I=Math.max(0,Math.min(O+I/k,y.scrollHeight-P/k+X)),x=Math.max(0,Math.min(Z+x/Q,y.scrollWidth-H/Q+D)),N+=O-I,w+=Z-x}W.push({el:y,top:I,left:x})}return W},vt=e=>e===!1?{block:"end",inline:"nearest"}:(t=>t===Object(t)&&Object.keys(t).length!==0)(e)?e:{block:"start",inline:"nearest"};function wt(e,t){if(!e.isConnected||!(n=>{let l=n;for(;l&&l.parentNode;){if(l.parentNode===document)return!0;l=l.parentNode instanceof ShadowRoot?l.parentNode.host:l.parentNode}return!1})(e))return;if((n=>typeof n=="object"&&typeof n.behavior=="function")(t))return t.behavior(Se(e,t));const r=typeof t=="boolean"||t==null?void 0:t.behavior;for(const{el:n,top:l,left:i}of Se(e,vt(t)))n.scroll({top:l,left:i,behavior:r})}function ie(e){const[t,r]=o.useState(e);return o.useEffect(()=>{const n=setTimeout(()=>{r(e)},e.length?0:10);return()=>{clearTimeout(n)}},[e]),t}const St=e=>{const{componentCls:t}=e,r=`${t}-show-help`,n=`${t}-show-help-item`;return{[r]:{transition:`opacity ${e.motionDurationSlow} ${e.motionEaseInOut}`,"&-appear, &-enter":{opacity:0,"&-active":{opacity:1}},"&-leave":{opacity:1,"&-active":{opacity:0}},[n]:{overflow:"hidden",transition:`height ${e.motionDurationSlow} ${e.motionEaseInOut},
                     opacity ${e.motionDurationSlow} ${e.motionEaseInOut},
                     transform ${e.motionDurationSlow} ${e.motionEaseInOut} !important`,[`&${n}-appear, &${n}-enter`]:{transform:"translateY(-5px)",opacity:0,["&-active"]:{transform:"translateY(0)",opacity:1}},[`&${n}-leave-active`]:{transform:"translateY(-5px)"}}}}},Et=St,It=e=>({legend:{display:"block",width:"100%",marginBottom:e.marginLG,padding:0,color:e.colorTextDescription,fontSize:e.fontSizeLG,lineHeight:"inherit",border:0,borderBottom:`${e.lineWidth}px ${e.lineType} ${e.colorBorder}`},label:{fontSize:e.fontSize},'input[type="search"]':{boxSizing:"border-box"},'input[type="radio"], input[type="checkbox"]':{lineHeight:"normal"},'input[type="file"]':{display:"block"},'input[type="range"]':{display:"block",width:"100%"},"select[multiple], select[size]":{height:"auto"},[`input[type='file']:focus,
  input[type='radio']:focus,
  input[type='checkbox']:focus`]:{outline:0,boxShadow:`0 0 0 ${e.controlOutlineWidth}px ${e.controlOutline}`},output:{display:"block",paddingTop:15,color:e.colorText,fontSize:e.fontSize,lineHeight:e.lineHeight}}),Ee=(e,t)=>{const{formItemCls:r}=e;return{[r]:{[`${r}-label > label`]:{height:t},[`${r}-control-input`]:{minHeight:t}}}},Ot=e=>{const{componentCls:t}=e;return{[e.componentCls]:Object.assign(Object.assign(Object.assign({},Pe(e)),It(e)),{[`${t}-text`]:{display:"inline-block",paddingInlineEnd:e.paddingSM},"&-small":Object.assign({},Ee(e,e.controlHeightSM)),"&-large":Object.assign({},Ee(e,e.controlHeightLG))})}},Ft=e=>{const{formItemCls:t,iconCls:r,componentCls:n,rootPrefixCls:l}=e;return{[t]:Object.assign(Object.assign({},Pe(e)),{marginBottom:e.marginLG,verticalAlign:"top","&-with-help":{transition:"none"},[`&-hidden,
        &-hidden.${l}-row`]:{display:"none"},"&-has-warning":{[`${t}-split`]:{color:e.colorError}},"&-has-error":{[`${t}-split`]:{color:e.colorWarning}},[`${t}-label`]:{display:"inline-block",flexGrow:0,overflow:"hidden",whiteSpace:"nowrap",textAlign:"end",verticalAlign:"middle","&-left":{textAlign:"start"},"&-wrap":{overflow:"unset",lineHeight:`${e.lineHeight} - 0.25em`,whiteSpace:"unset"},"> label":{position:"relative",display:"inline-flex",alignItems:"center",maxWidth:"100%",height:e.controlHeight,color:e.colorTextHeading,fontSize:e.fontSize,[`> ${r}`]:{fontSize:e.fontSize,verticalAlign:"top"},[`&${t}-required:not(${t}-required-mark-optional)::before`]:{display:"inline-block",marginInlineEnd:e.marginXXS,color:e.colorError,fontSize:e.fontSize,fontFamily:"SimSun, sans-serif",lineHeight:1,content:'"*"',[`${n}-hide-required-mark &`]:{display:"none"}},[`${t}-optional`]:{display:"inline-block",marginInlineStart:e.marginXXS,color:e.colorTextDescription,[`${n}-hide-required-mark &`]:{display:"none"}},[`${t}-tooltip`]:{color:e.colorTextDescription,cursor:"help",writingMode:"horizontal-tb",marginInlineStart:e.marginXXS},"&::after":{content:'":"',position:"relative",marginBlock:0,marginInlineStart:e.marginXXS/2,marginInlineEnd:e.marginXS},[`&${t}-no-colon::after`]:{content:'" "'}}},[`${t}-control`]:{display:"flex",flexDirection:"column",flexGrow:1,[`&:first-child:not([class^="'${l}-col-'"]):not([class*="' ${l}-col-'"])`]:{width:"100%"},"&-input":{position:"relative",display:"flex",alignItems:"center",minHeight:e.controlHeight,"&-content":{flex:"auto",maxWidth:"100%"}}},[t]:{"&-explain, &-extra":{clear:"both",color:e.colorTextDescription,fontSize:e.fontSize,lineHeight:e.lineHeight},"&-explain-connected":{width:"100%"},"&-extra":{minHeight:e.controlHeightSM,transition:`color ${e.motionDurationMid} ${e.motionEaseOut}`},"&-explain":{"&-error":{color:e.colorError},"&-warning":{color:e.colorWarning}}},[`&-with-help ${t}-explain`]:{height:"auto",opacity:1},[`${t}-feedback-icon`]:{fontSize:e.fontSize,textAlign:"center",visibility:"visible",animationName:Ne,animationDuration:e.motionDurationMid,animationTimingFunction:e.motionEaseOutBack,pointerEvents:"none","&-success":{color:e.colorSuccess},"&-error":{color:e.colorError},"&-warning":{color:e.colorWarning},"&-validating":{color:e.colorPrimary}}})}},Nt=e=>{const{componentCls:t,formItemCls:r,rootPrefixCls:n}=e;return{[`${t}-horizontal`]:{[`${r}-label`]:{flexGrow:0},[`${r}-control`]:{flex:"1 1 0",minWidth:0},[`${r}-label.${n}-col-24 + ${r}-control`]:{minWidth:"unset"}}}},Pt=e=>{const{componentCls:t,formItemCls:r}=e;return{[`${t}-inline`]:{display:"flex",flexWrap:"wrap",[r]:{flex:"none",marginInlineEnd:e.margin,marginBottom:0,"&-row":{flexWrap:"nowrap"},"&-with-help":{marginBottom:e.marginLG},[`> ${r}-label,
        > ${r}-control`]:{display:"inline-block",verticalAlign:"top"},[`> ${r}-label`]:{flex:"none"},[`${t}-text`]:{display:"inline-block"},[`${r}-has-feedback`]:{display:"inline-block"}}}}},te=e=>({margin:0,padding:`0 0 ${e.paddingXS}px`,whiteSpace:"initial",textAlign:"start","> label":{margin:0,"&::after":{display:"none"}}}),jt=e=>{const{componentCls:t,formItemCls:r}=e;return{[`${r} ${r}-label`]:te(e),[t]:{[r]:{flexWrap:"wrap",[`${r}-label,
          ${r}-control`]:{flex:"0 0 100%",maxWidth:"100%"}}}}},Mt=e=>{const{componentCls:t,formItemCls:r,rootPrefixCls:n}=e;return{[`${t}-vertical`]:{[r]:{"&-row":{flexDirection:"column"},"&-label > label":{height:"auto"},[`${t}-item-control`]:{width:"100%"}}},[`${t}-vertical ${r}-label,
      .${n}-col-24${r}-label,
      .${n}-col-xl-24${r}-label`]:te(e),[`@media (max-width: ${e.screenXSMax}px)`]:[jt(e),{[t]:{[`.${n}-col-xs-24${r}-label`]:te(e)}}],[`@media (max-width: ${e.screenSMMax}px)`]:{[t]:{[`.${n}-col-sm-24${r}-label`]:te(e)}},[`@media (max-width: ${e.screenMDMax}px)`]:{[t]:{[`.${n}-col-md-24${r}-label`]:te(e)}},[`@media (max-width: ${e.screenLGMax}px)`]:{[t]:{[`.${n}-col-lg-24${r}-label`]:te(e)}}}},pe=qe("Form",(e,t)=>{let{rootPrefixCls:r}=t;const n=ze(e,{formItemCls:`${e.componentCls}-item`,rootPrefixCls:r});return[Ot(n),Ft(n),Et(n),Nt(n),Pt(n),Mt(n),Ae(n),Ne]}),Ie=[];function ue(e,t,r){let n=arguments.length>3&&arguments[3]!==void 0?arguments[3]:0;return{key:typeof e=="string"?e:`${t}-${n}`,error:e,errorStatus:r}}function _e(e){let{help:t,helpStatus:r,errors:n=Ie,warnings:l=Ie,className:i,fieldId:c,onVisibleChanged:s}=e;const{prefixCls:m}=o.useContext(de),u=`${m}-item-explain`,[,f]=pe(m),R=o.useMemo(()=>xe(m),[m]),_=ie(n),$=ie(l),d=o.useMemo(()=>t!=null?[ue(t,"help",r)]:[].concat(Y(_.map((E,p)=>ue(E,"error","error",p))),Y($.map((E,p)=>ue(E,"warning","warning",p)))),[t,r,_,$]),S={};return c&&(S.id=`${c}_help`),o.createElement(De,{motionDeadline:R.motionDeadline,motionName:`${m}-show-help`,visible:!!d.length,onVisibleChanged:s},E=>{const{className:p,style:a}=E;return o.createElement("div",Object.assign({},S,{className:K(u,p,i,f),style:a,role:"alert"}),o.createElement(Be,Object.assign({keys:d},xe(m),{motionName:`${m}-show-help-item`,component:!1}),v=>{const{key:h,error:g,errorStatus:b,className:j,style:F}=v;return o.createElement("div",{key:h,className:K(j,{[`${u}-${b}`]:b}),style:F},g)}))})}const Rt=["parentNode"],_t="form_item";function ne(e){return e===void 0||e===!1?[]:Array.isArray(e)?e:[e]}function Te(e,t){if(!e.length)return;const r=e.join("_");return t?`${t}_${r}`:Rt.includes(r)?`${_t}_${r}`:r}function Oe(e){return ne(e).join("_")}function Le(e){const[t]=Xe(),r=o.useRef({}),n=o.useMemo(()=>e??Object.assign(Object.assign({},t),{__INTERNAL__:{itemRef:l=>i=>{const c=Oe(l);i?r.current[c]=i:delete r.current[c]}},scrollToField:function(l){let i=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};const c=ne(l),s=Te(c,n.__INTERNAL__.name),m=s?document.getElementById(s):null;m&&wt(m,Object.assign({scrollMode:"if-needed",block:"nearest"},i))},getFieldInstance:l=>{const i=Oe(l);return r.current[i]}}),[e,t]);return[n]}var Tt=globalThis&&globalThis.__rest||function(e,t){var r={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&t.indexOf(n)<0&&(r[n]=e[n]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var l=0,n=Object.getOwnPropertySymbols(e);l<n.length;l++)t.indexOf(n[l])<0&&Object.prototype.propertyIsEnumerable.call(e,n[l])&&(r[n[l]]=e[n[l]]);return r};const Lt=(e,t)=>{const r=o.useContext(Ge),{getPrefixCls:n,direction:l,form:i}=o.useContext(fe),{prefixCls:c,className:s,rootClassName:m,size:u,disabled:f=r,form:R,colon:_,labelAlign:$,labelWrap:d,labelCol:S,wrapperCol:E,hideRequiredMark:p,layout:a="horizontal",scrollToFirstError:v,requiredMark:h,onFinishFailed:g,name:b}=e,j=Tt(e,["prefixCls","className","rootClassName","size","disabled","form","colon","labelAlign","labelWrap","labelCol","wrapperCol","hideRequiredMark","layout","scrollToFirstError","requiredMark","onFinishFailed","name"]),F=Ye(u),N=o.useContext(Ke),w=o.useMemo(()=>h!==void 0?h:i&&i.requiredMark!==void 0?i.requiredMark:!p,[p,h,i]),W=_??(i==null?void 0:i.colon),M=n("form",c),[y,P]=pe(M),H=K(M,{[`${M}-${a}`]:!0,[`${M}-hide-required-mark`]:w===!1,[`${M}-rtl`]:l==="rtl",[`${M}-${F}`]:F},P,s,m),[V]=Le(R),{__INTERNAL__:T}=V;T.name=b;const L=o.useMemo(()=>({name:b,labelAlign:$,labelCol:S,labelWrap:d,wrapperCol:E,vertical:a==="vertical",colon:W,requiredMark:w,itemRef:T.itemRef,form:V}),[b,$,S,E,a,W,w,V]);o.useImperativeHandle(t,()=>V);const q=(z,B)=>{if(z){let A={block:"nearest"};typeof z=="object"&&(A=z),V.scrollToField(B,A)}},G=z=>{if(g==null||g(z),z.errorFields.length){const B=z.errorFields[0].name;if(v!==void 0){q(v,B);return}i&&i.scrollToFirstError!==void 0&&q(i.scrollToFirstError,B)}};return y(o.createElement(Ue,{disabled:f},o.createElement(Qe,{size:F},o.createElement(je,{validateMessages:N},o.createElement(J.Provider,{value:L},o.createElement(Ze,Object.assign({id:b},j,{name:b,onFinishFailed:G,form:V,className:H})))))))},Wt=o.forwardRef(Lt),Vt=Wt,We=()=>{const{status:e,errors:t=[],warnings:r=[]}=o.useContext(ge);return{status:e,errors:t,warnings:r}};We.Context=ge;const Ht=We;function qt(e){const[t,r]=o.useState(e),n=o.useRef(null),l=o.useRef([]),i=o.useRef(!1);o.useEffect(()=>(i.current=!1,()=>{i.current=!0,$e.cancel(n.current),n.current=null}),[]);function c(s){i.current||(n.current===null&&(l.current=[],n.current=$e(()=>{n.current=null,r(m=>{let u=m;return l.current.forEach(f=>{u=f(u)}),u})})),l.current.push(s))}return[t,c]}function zt(){const{itemRef:e}=o.useContext(J),t=o.useRef({});function r(n,l){const i=l&&typeof l=="object"&&l.ref,c=n.join("_");return(t.current.name!==c||t.current.originRef!==i)&&(t.current.name=c,t.current.originRef=i,t.current.ref=Je(e(n),i)),t.current.ref}return r}const At=e=>{const{prefixCls:t,status:r,wrapperCol:n,children:l,errors:i,warnings:c,_internalItemRender:s,extra:m,help:u,fieldId:f,marginBottom:R,onErrorVisibleChanged:_}=e,$=`${t}-item`,d=o.useContext(J),S=n||d.wrapperCol||{},E=K(`${$}-control`,S.className),p=o.useMemo(()=>Object.assign({},d),[d]);delete p.labelCol,delete p.wrapperCol;const a=o.createElement("div",{className:`${$}-control-input`},o.createElement("div",{className:`${$}-control-input-content`},l)),v=o.useMemo(()=>({prefixCls:t,status:r}),[t,r]),h=R!==null||i.length||c.length?o.createElement("div",{style:{display:"flex",flexWrap:"nowrap"}},o.createElement(de.Provider,{value:v},o.createElement(_e,{fieldId:f,errors:i,warnings:c,help:u,helpStatus:r,className:`${$}-explain-connected`,onVisibleChanged:_})),!!R&&o.createElement("div",{style:{width:0,height:R}})):null,g={};f&&(g.id=`${f}_extra`);const b=m?o.createElement("div",Object.assign({},g,{className:`${$}-extra`}),m):null,j=s&&s.mark==="pro_table_render"&&s.render?s.render(e,{input:a,errorList:h,extra:b}):o.createElement(o.Fragment,null,a,h,b);return o.createElement(J.Provider,{value:p},o.createElement(Re,Object.assign({},S,{className:E}),j))},Dt=At;var Bt=globalThis&&globalThis.__rest||function(e,t){var r={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&t.indexOf(n)<0&&(r[n]=e[n]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var l=0,n=Object.getOwnPropertySymbols(e);l<n.length;l++)t.indexOf(n[l])<0&&Object.prototype.propertyIsEnumerable.call(e,n[l])&&(r[n[l]]=e[n[l]]);return r};function Xt(e){return e?typeof e=="object"&&!o.isValidElement(e)?e:{title:e}:null}const Gt=e=>{let{prefixCls:t,label:r,htmlFor:n,labelCol:l,labelAlign:i,colon:c,required:s,requiredMark:m,tooltip:u}=e;var f;const[R]=ke("Form"),{vertical:_,labelAlign:$,labelCol:d,labelWrap:S,colon:E}=o.useContext(J);if(!r)return null;const p=l||d||{},a=i||$,v=`${t}-item-label`,h=K(v,a==="left"&&`${v}-left`,p.className,{[`${v}-wrap`]:!!S});let g=r;const b=c===!0||E!==!1&&c!==!1;b&&!_&&typeof r=="string"&&r.trim()!==""&&(g=r.replace(/[:|：]\s*$/,""));const F=Xt(u);if(F){const{icon:w=o.createElement(nt,null)}=F,W=Bt(F,["icon"]),M=o.createElement(et,Object.assign({},W),o.cloneElement(w,{className:`${t}-item-tooltip`,title:""}));g=o.createElement(o.Fragment,null,g,M)}m==="optional"&&!s&&(g=o.createElement(o.Fragment,null,g,o.createElement("span",{className:`${t}-item-optional`,title:""},(R==null?void 0:R.optional)||((f=tt.Form)===null||f===void 0?void 0:f.optional))));const N=K({[`${t}-item-required`]:s,[`${t}-item-required-mark-optional`]:m==="optional",[`${t}-item-no-colon`]:!b});return o.createElement(Re,Object.assign({},p,{className:h}),o.createElement("label",{htmlFor:n,className:N,title:typeof r=="string"?r:""},g))},Yt=Gt;var Kt=globalThis&&globalThis.__rest||function(e,t){var r={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&t.indexOf(n)<0&&(r[n]=e[n]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var l=0,n=Object.getOwnPropertySymbols(e);l<n.length;l++)t.indexOf(n[l])<0&&Object.prototype.propertyIsEnumerable.call(e,n[l])&&(r[n[l]]=e[n[l]]);return r};const Ut={success:it,warning:at,error:st,validating:ct};function Qt(e){const{prefixCls:t,className:r,rootClassName:n,style:l,help:i,errors:c,warnings:s,validateStatus:m,meta:u,hasFeedback:f,hidden:R,children:_,fieldId:$,required:d,isRequired:S,onSubItemMetaChange:E}=e,p=Kt(e,["prefixCls","className","rootClassName","style","help","errors","warnings","validateStatus","meta","hasFeedback","hidden","children","fieldId","required","isRequired","onSubItemMetaChange"]),a=`${t}-item`,{requiredMark:v}=o.useContext(J),h=o.useRef(null),g=ie(c),b=ie(s),j=i!=null,F=!!(j||c.length||s.length),N=!!h.current&&rt(h.current),[w,W]=o.useState(null);ot(()=>{if(F&&h.current){const T=getComputedStyle(h.current);W(parseInt(T.marginBottom,10))}},[F,N]);const M=T=>{T||W(null)},P=function(){let T=arguments.length>0&&arguments[0]!==void 0?arguments[0]:!1,L="";const q=T?g:u.errors,G=T?b:u.warnings;return m!==void 0?L=m:u.validating?L="validating":q.length?L="error":G.length?L="warning":(u.touched||f&&u.validated)&&(L="success"),L}(),H=o.useMemo(()=>{let T;if(f){const L=P&&Ut[P];T=L?o.createElement("span",{className:K(`${a}-feedback-icon`,`${a}-feedback-icon-${P}`)},o.createElement(L,null)):null}return{status:P,errors:c,warnings:s,hasFeedback:f,feedbackIcon:T,isFormItemInput:!0}},[P,f]),V=K(a,r,n,{[`${a}-with-help`]:j||g.length||b.length,[`${a}-has-feedback`]:P&&f,[`${a}-has-success`]:P==="success",[`${a}-has-warning`]:P==="warning",[`${a}-has-error`]:P==="error",[`${a}-is-validating`]:P==="validating",[`${a}-hidden`]:R});return o.createElement("div",{className:V,style:l,ref:h},o.createElement(xt,Object.assign({className:`${a}-row`},lt(p,["_internalItemRender","colon","dependencies","extra","fieldKey","getValueFromEvent","getValueProps","htmlFor","id","initialValue","isListField","label","labelAlign","labelCol","labelWrap","messageVariables","name","normalize","noStyle","preserve","requiredMark","rules","shouldUpdate","trigger","tooltip","validateFirst","validateTrigger","valuePropName","wrapperCol"])),o.createElement(Yt,Object.assign({htmlFor:$},e,{requiredMark:v,required:d??S,prefixCls:t})),o.createElement(Dt,Object.assign({},e,u,{errors:g,warnings:b,prefixCls:t,status:P,help:i,marginBottom:w,onErrorVisibleChanged:M}),o.createElement(Me.Provider,{value:E},o.createElement(ge.Provider,{value:H},_)))),!!w&&o.createElement("div",{className:`${a}-margin-offset`,style:{marginBottom:-w}}))}function Zt(e){if(typeof e=="function")return e;const t=mt(e);return t.length<=1?t[0]:t}const Jt="__SPLIT__",kt=o.memo(e=>{let{children:t}=e;return t},(e,t)=>e.value===t.value&&e.update===t.update&&e.childProps.length===t.childProps.length&&e.childProps.every((r,n)=>r===t.childProps[n]));function en(e){return e!=null}function Fe(){return{errors:[],warnings:[],touched:!1,validating:!1,name:[],validated:!1}}function tn(e){const{name:t,noStyle:r,className:n,dependencies:l,prefixCls:i,shouldUpdate:c,rules:s,children:m,required:u,label:f,messageVariables:R,trigger:_="onChange",validateTrigger:$,hidden:d,help:S}=e,{getPrefixCls:E}=o.useContext(fe),{name:p}=o.useContext(J),a=Zt(m),v=typeof a=="function",h=o.useContext(Me),{validateTrigger:g}=o.useContext(ut),b=$!==void 0?$:g,j=en(t),F=E("form",i),[N,w]=pe(F),W=o.useContext(dt),M=o.useRef(),[y,P]=qt({}),[H,V]=ft(()=>Fe()),T=C=>{const I=W==null?void 0:W.getKey(C.name);if(V(C.destroy?Fe():C,!0),r&&S!==!1&&h){let x=C.name;if(C.destroy)x=M.current||x;else if(I!==void 0){const[D,X]=I;x=[D].concat(Y(X)),M.current=x}h(C,x)}},L=(C,I)=>{P(x=>{const D=Object.assign({},x),Q=[].concat(Y(C.name.slice(0,-1)),Y(I)).join(Jt);return C.destroy?delete D[Q]:D[Q]=C,D})},[q,G]=o.useMemo(()=>{const C=Y(H.errors),I=Y(H.warnings);return Object.values(y).forEach(x=>{C.push.apply(C,Y(x.errors||[])),I.push.apply(I,Y(x.warnings||[]))}),[C,I]},[y,H.errors,H.warnings]),z=zt();function B(C,I,x){return r&&!d?C:o.createElement(Qt,Object.assign({key:"row"},e,{className:K(n,w),prefixCls:F,fieldId:I,isRequired:x,errors:q,warnings:G,meta:H,onSubItemMetaChange:L}),C)}if(!j&&!v&&!l)return N(B(a));let A={};return typeof f=="string"?A.label=f:t&&(A.label=String(t)),R&&(A=Object.assign(Object.assign({},A),R)),N(o.createElement(gt,Object.assign({},e,{messageVariables:A,trigger:_,validateTrigger:b,onMetaChange:T}),(C,I,x)=>{const D=ne(t).length&&I?I.name:[],X=Te(D,p),Q=u!==void 0?u:!!(s&&s.some(O=>{if(O&&typeof O=="object"&&O.required&&!O.warningOnly)return!0;if(typeof O=="function"){const re=O(x);return re&&re.required&&!re.warningOnly}return!1})),k=Object.assign({},C);let Z=null;if(Array.isArray(a)&&j)Z=a;else if(!(v&&(!(c||l)||j))){if(!(l&&!v&&!j))if(pt(a)){const O=Object.assign(Object.assign({},a.props),k);if(O.id||(O.id=X),S||q.length>0||G.length>0||e.extra){const ee=[];(S||q.length>0)&&ee.push(`${X}_help`),e.extra&&ee.push(`${X}_extra`),O["aria-describedby"]=ee.join(" ")}q.length>0&&(O["aria-invalid"]="true"),Q&&(O["aria-required"]="true"),ht(a)&&(O.ref=z(D,a)),new Set([].concat(Y(ne(_)),Y(ne(b)))).forEach(ee=>{O[ee]=function(){for(var he,be,ae,ye,se,Ce=arguments.length,ce=new Array(Ce),oe=0;oe<Ce;oe++)ce[oe]=arguments[oe];(ae=k[ee])===null||ae===void 0||(he=ae).call.apply(he,[k].concat(ce)),(se=(ye=a.props)[ee])===null||se===void 0||(be=se).call.apply(be,[ye].concat(ce))}});const He=[O["aria-required"],O["aria-invalid"],O["aria-describedby"]];Z=o.createElement(kt,{value:k[e.valuePropName||"value"],update:a,childProps:He},bt(a,O))}else v&&(c||l)&&!j?Z=a(x):Z=a}return B(Z,X,Q)}))}const Ve=tn;Ve.useStatus=Ht;const nn=Ve;var rn=globalThis&&globalThis.__rest||function(e,t){var r={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&t.indexOf(n)<0&&(r[n]=e[n]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var l=0,n=Object.getOwnPropertySymbols(e);l<n.length;l++)t.indexOf(n[l])<0&&Object.prototype.propertyIsEnumerable.call(e,n[l])&&(r[n[l]]=e[n[l]]);return r};const on=e=>{var{prefixCls:t,children:r}=e,n=rn(e,["prefixCls","children"]);const{getPrefixCls:l}=o.useContext(fe),i=l("form",t),c=o.useMemo(()=>({prefixCls:i,status:"error"}),[i]);return o.createElement(yt,Object.assign({},n),(s,m,u)=>o.createElement(de.Provider,{value:c},r(s.map(f=>Object.assign(Object.assign({},f),{fieldKey:f.key})),m,{errors:u.errors,warnings:u.warnings})))},ln=on;function an(){const{form:e}=o.useContext(J);return e}const U=Vt;U.Item=nn;U.List=ln;U.ErrorList=_e;U.useForm=Le;U.useFormInstance=an;U.useWatch=Ct;U.Provider=je;U.create=()=>{};const mn=U;export{mn as F};
