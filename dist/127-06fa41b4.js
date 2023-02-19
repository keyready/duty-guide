"use strict";(self.webpackChunkduty_guide=self.webpackChunkduty_guide||[]).push([[127],{2127:(e,n,t)=>{t.r(n),t.d(n,{default:()=>X});var r=t(5893),o=t(4807),a=t(7294),l=t(7648),i=t(7335),s=t(6197),c=t(9704),u=t(6260),d=t(3008),p=t(2446),f=t(3696),h=t(2278),m=function(e){return e.Test.data},v=function(e){return e.Test.error},g=function(e){return e.Test.isLoading},b=t(4184),x=t.n(b),y=t(3164),j=t(2131),w=t(3825);const E=function(...e){return e.filter((e=>null!=e)).reduce(((e,n)=>{if("function"!=typeof n)throw new Error("Invalid Argument Type, must only provide functions, undefined, or null.");return null===e?n:function(...t){e.apply(this,t),n.apply(this,t)}}),null)};var Z=t(4509),k=t(360);const T={height:["marginTop","marginBottom"],width:["marginLeft","marginRight"]};function C(e,n){const t=n[`offset${e[0].toUpperCase()}${e.slice(1)}`],r=T[e];return t+parseInt((0,y.Z)(n,r[0]),10)+parseInt((0,y.Z)(n,r[1]),10)}const N={[j.Wj]:"collapse",[j.Ix]:"collapsing",[j.d0]:"collapsing",[j.cn]:"collapse show"},O={in:!1,timeout:300,mountOnEnter:!1,unmountOnExit:!1,appear:!1,getDimensionValue:C},S=a.forwardRef((({onEnter:e,onEntering:n,onEntered:t,onExit:o,onExiting:l,className:i,children:s,dimension:c="height",getDimensionValue:u=C,...d},p)=>{const f="function"==typeof c?c():c,h=(0,a.useMemo)((()=>E((e=>{e.style[f]="0"}),e)),[f,e]),m=(0,a.useMemo)((()=>E((e=>{const n=`scroll${f[0].toUpperCase()}${f.slice(1)}`;e.style[f]=`${e[n]}px`}),n)),[f,n]),v=(0,a.useMemo)((()=>E((e=>{e.style[f]=null}),t)),[f,t]),g=(0,a.useMemo)((()=>E((e=>{e.style[f]=`${u(f,e)}px`,(0,Z.Z)(e)}),o)),[o,u,f]),b=(0,a.useMemo)((()=>E((e=>{e.style[f]=null}),l)),[f,l]);return(0,r.jsx)(k.Z,{ref:p,addEndListener:w.Z,...d,"aria-expanded":d.role?d.in:null,onEnter:h,onEntering:m,onEntered:v,onExit:g,onExiting:b,childRef:s.ref,children:(e,n)=>a.cloneElement(s,{...n,className:x()(i,s.props.className,N[e],"width"===f&&"collapse-horizontal")})})}));S.defaultProps=O;const A=S;var I=t(3379),R=t.n(I),L=t(7795),P=t.n(L),z=t(569),$=t.n(z),M=t(3565),B=t.n(M),U=t(9216),_=t.n(U),H=t(4589),D=t.n(H),V=t(8478),W={};W.styleTagTransform=D(),W.setAttributes=B(),W.insert=$().bind(null,"head"),W.domAPI=P(),W.insertStyleElement=_(),R()(V.Z,W);const G=V.Z&&V.Z.locals?V.Z.locals:void 0;var Q=function(){return Q=Object.assign||function(e){for(var n,t=1,r=arguments.length;t<r;t++)for(var o in n=arguments[t])Object.prototype.hasOwnProperty.call(n,o)&&(e[o]=n[o]);return e},Q.apply(this,arguments)};const X=(0,a.memo)((function(e){var n=e.className,t=(0,c.I0)(),b=(0,c.v9)(p.vb),x=(0,c.v9)(p.Te),y=(0,c.v9)(s.rX),j=(0,c.v9)(u.e8),w=(0,c.v9)(m),E=((0,c.v9)(g),(0,c.v9)(v),(0,a.useState)(0)),Z=E[0],k=E[1],T=(0,a.useState)(!1),C=T[0],N=T[1],O=(0,a.useState)(5),S=O[0],I=O[1],R=(0,a.useState)(!1),L=R[0],P=R[1],z=(0,a.useState)([]),$=z[0],M=z[1],B=(0,a.useState)([]),U=B[0],_=B[1],H=(0,a.useState)(!1),D=H[0],V=H[1];(0,a.useEffect)((function(){t((0,s.M8)()),t((0,p.pE)()),document.title="Тестирование"}),[t]);var W=(0,a.useCallback)((function(e){I(Number(e.target.value))}),[]),X=(0,a.useCallback)((function(){P(!1),N(!1),document.location.reload()}),[]),Y=b.map((function(e){return(0,r.jsx)("div",{children:e.title})})),q=(0,a.useCallback)((function(){var e=[];return b.forEach((function(n,t){e.push({value:n.title,content:Y[t]})})),e}),[Y,b]),F=(0,a.useCallback)((function(){return e=void 0,n=void 0,o=function(){var e;return function(e,n){var t,r,o,a,l={label:0,sent:function(){if(1&o[0])throw o[1];return o[1]},trys:[],ops:[]};return a={next:i(0),throw:i(1),return:i(2)},"function"==typeof Symbol&&(a[Symbol.iterator]=function(){return this}),a;function i(i){return function(s){return function(i){if(t)throw new TypeError("Generator is already executing.");for(;a&&(a=0,i[0]&&(l=0)),l;)try{if(t=1,r&&(o=2&i[0]?r.return:i[0]?r.throw||((o=r.return)&&o.call(r),0):r.next)&&!(o=o.call(r,i[1])).done)return o;switch(r=0,o&&(i=[2&i[0],o.value]),i[0]){case 0:case 1:o=i;break;case 4:return l.label++,{value:i[1],done:!1};case 5:l.label++,r=i[1],i=[0];continue;case 7:i=l.ops.pop(),l.trys.pop();continue;default:if(!((o=(o=l.trys).length>0&&o[o.length-1])||6!==i[0]&&2!==i[0])){l=0;continue}if(3===i[0]&&(!o||i[1]>o[0]&&i[1]<o[3])){l.label=i[1];break}if(6===i[0]&&l.label<o[1]){l.label=o[1],o=i;break}if(o&&l.label<o[2]){l.label=o[2],l.ops.push(i);break}o[2]&&l.ops.pop(),l.trys.pop();continue}i=n.call(e,l)}catch(e){i=[6,e],r=0}finally{t=o=0}if(5&i[0])throw i[1];return{value:i[0]?i[1]:void 0,done:!0}}([i,s])}}}(this,(function(n){switch(n.label){case 0:return[4,t((0,h.$)({tasksAmount:S,categories:U}))];case 1:return e=n.sent(),console.log("тут",null==w?void 0:w.test),"error"===e.payload?(V(!0),setTimeout((function(){V(!1)}),2500)):P(!0),[2]}}))},new((r=void 0)||(r=Promise))((function(t,a){function l(e){try{s(o.next(e))}catch(e){a(e)}}function i(e){try{s(o.throw(e))}catch(e){a(e)}}function s(e){var n;e.done?t(e.value):(n=e.value,n instanceof r?n:new r((function(e){e(n)}))).then(l,i)}s((o=o.apply(e,n||[])).next())}));var e,n,r,o}),[t,U,S,w]);return(0,r.jsx)("div",Q({className:(0,o.A)("",{},[n])},{children:(0,r.jsxs)(i.v,Q({title:"Тестирование"},{children:[!j&&!L&&(0,r.jsxs)(l.Z,Q({className:G.testSetup},{children:[(0,r.jsx)(l.Z.Label,{children:"Выберите количество вопросов в тесте: ".concat(S)}),(0,r.jsx)(l.Z.Range,{min:5,max:y,value:S,onChange:W}),(0,r.jsx)(l.Z.Label,{children:"Выберите категории тестирования:"}),b.length&&(0,r.jsx)(f.z,{isLoading:x,items:q(),onChange:function(e){M(e);var n=b.filter((function(n){return e.includes(n.title)})),t=[];n.map((function(e){return e.id?t.push(e.id):0})),_(t)},selectedItems:$,optionsClassname:G.optionsClassname,placeholder:"Выберите категорию(-ии)"}),(0,r.jsx)(d.z,Q({theme:d.b.BLUE,onClick:F},{children:"Сгенерировать тест!"}))]})),(0,r.jsx)(A,Q({timeout:1e3,in:D},{children:(0,r.jsx)("h4",Q({style:{color:"crimson",marginTop:10}},{children:"В базе данных недостаточно вопросов по выбранной теме."}))})),L&&w?(0,r.jsx)(s.$H,{totalQuestions:S,answers:Z,setAnswers:k,endOfTest:C,setEndOfTest:N,test:w.test}):"",C&&(0,r.jsx)(d.z,Q({className:G.reloadButton,theme:d.b.BLUE,onClick:X},{children:"Начать заново?"}))]}))}))}))},3696:(e,n,t)=>{t.d(n,{z:()=>Z});var r=t(5893),o=t(746),a=t(3008),l=t(4807),i=t(2630),s=t(3379),c=t.n(s),u=t(7795),d=t.n(u),p=t(569),f=t.n(p),h=t(3565),m=t.n(h),v=t(9216),g=t.n(v),b=t(4589),x=t.n(b),y=t(2670),j={};j.styleTagTransform=x(),j.setAttributes=m(),j.insert=f().bind(null,"head"),j.domAPI=d(),j.insertStyleElement=g(),c()(y.Z,j);const w=y.Z&&y.Z.locals?y.Z.locals:void 0;var E=function(){return E=Object.assign||function(e){for(var n,t=1,r=arguments.length;t<r;t++)for(var o in n=arguments[t])Object.prototype.hasOwnProperty.call(n,o)&&(e[o]=n[o]);return e},E.apply(this,arguments)},Z=function(e){var n=e.items,t=e.onChange,s=e.optionsClassname,c=e.selectedItems,u=e.placeholder,d=e.isLoading,p=e.multiply,f=void 0===p||p;return(0,r.jsxs)(o.R,E({as:"div",className:w.HSelect,value:c,onChange:function(e){return t(e)},multiple:f},{children:[(0,r.jsx)(o.R.Button,E({className:w.trigger},{children:(0,r.jsx)(a.z,E({theme:a.b.PRIMARY},{children:(null==c?void 0:c.length)?null==c?void 0:c.map((function(e){return e})).join(", "):u}))})),(0,r.jsxs)(o.R.Options,E({className:(0,l.A)(w.options,{},[s])},{children:[d&&new Array(1).fill(0).map((function(e){return(0,r.jsx)(o.R.Option,E({value:""},{children:(0,r.jsx)(i.a,{})}),e)})),null==n?void 0:n.map((function(e){return(0,r.jsx)(o.R.Option,E({className:w.option,value:e.value},{children:function(n){var t,o=n.selected;return(0,r.jsx)("div",E({className:(0,l.A)("",(t={},t[w.selected]=o,t))},{children:e.content}))}}),e.value)}))]}))]}))}},7335:(e,n,t)=>{t.d(n,{v:()=>w});var r=t(5893),o=t(4807),a=t(7294),l=t(3379),i=t.n(l),s=t(7795),c=t.n(s),u=t(569),d=t.n(u),p=t(3565),f=t.n(p),h=t(9216),m=t.n(h),v=t(4589),g=t.n(v),b=t(4334),x={};x.styleTagTransform=g(),x.setAttributes=f(),x.insert=d().bind(null,"head"),x.domAPI=c(),x.insertStyleElement=m(),i()(b.Z,x);const y=b.Z&&b.Z.locals?b.Z.locals:void 0;var j=function(){return j=Object.assign||function(e){for(var n,t=1,r=arguments.length;t<r;t++)for(var o in n=arguments[t])Object.prototype.hasOwnProperty.call(n,o)&&(e[o]=n[o]);return e},j.apply(this,arguments)},w=(0,a.memo)((function(e){var n=e.className,t=e.children,a=e.title;return(0,r.jsx)("div",j({className:(0,o.A)(y.ContentWrapper,{},[n])},{children:(0,r.jsxs)("div",j({className:y.about_wrapper},{children:[(0,r.jsx)("h1",j({className:y.aboutTitle},{children:a})),(0,r.jsx)("div",j({className:y.content},{children:t}))]}))}))}))},8478:(e,n,t)=>{t.d(n,{Z:()=>i});var r=t(8081),o=t.n(r),a=t(3645),l=t.n(a)()(o());l.push([e.id,".a3708{display:flex;flex-direction:column;align-items:stretch;justify-content:flex-start;gap:10px}.c32b7{margin-top:10px}",""]),l.locals={testSetup:"a3708",reloadButton:"c32b7"};const i=l},2670:(e,n,t)=>{t.d(n,{Z:()=>i});var r=t(8081),o=t.n(r),a=t(3645),l=t.n(a)()(o());l.push([e.id,".dfad5{position:relative}li{list-style-type:none}.ecf69{margin:0;padding:0;border:none;background:none;outline:none}.f78ba{padding:10px;border:2px solid var(--inverted-primary-color);border-radius:12px;background:var(--inverted-bg-color);position:absolute;z-index:10000}.a7e96{margin-bottom:5px}.a7e96:hover{cursor:pointer}.a7e96:last-child{margin:0}.ba924{padding:5px;border-radius:5px;background:var(--bg-color)}",""]),l.locals={HSelect:"dfad5",trigger:"ecf69",options:"f78ba",option:"a7e96",selected:"ba924"};const i=l},4334:(e,n,t)=>{t.d(n,{Z:()=>i});var r=t(8081),o=t.n(r),a=t(3645),l=t.n(a)()(o());l.push([e.id,".e7ee5{padding:20px;background:var(--secondary-bg-color);display:flex;flex-direction:column;gap:10px;align-self:flex-start;justify-self:center}.e65d1{color:#fff;font-size:40px;font-weight:700;text-align:center;line-height:47px}.c62a1{padding:20px;color:#000;background:#fff;display:flex;flex-direction:column}",""]),l.locals={about_wrapper:"e7ee5",aboutTitle:"e65d1",content:"c62a1"};const i=l}}]);