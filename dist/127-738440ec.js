"use strict";(self.webpackChunkduty_guide=self.webpackChunkduty_guide||[]).push([[127],{2127:(e,n,t)=>{t.r(n),t.d(n,{default:()=>Y});var r=t(5893),o=t(4807),a=t(7294),l=t(7648),i=t(7335),s=t(6197),c=t(9704),u=t(6260),d=t(3008),p=t(2446),f=t(3696),h=t(2278),m=t(4184),v=t.n(m),g=t(3164),b=t(2131),x=t(3825);const y=function(...e){return e.filter((e=>null!=e)).reduce(((e,n)=>{if("function"!=typeof n)throw new Error("Invalid Argument Type, must only provide functions, undefined, or null.");return null===e?n:function(...t){e.apply(this,t),n.apply(this,t)}}),null)};var j=t(4509),w=t(360);const E={height:["marginTop","marginBottom"],width:["marginLeft","marginRight"]};function Z(e,n){const t=n[`offset${e[0].toUpperCase()}${e.slice(1)}`],r=E[e];return t+parseInt((0,g.Z)(n,r[0]),10)+parseInt((0,g.Z)(n,r[1]),10)}const k={[b.Wj]:"collapse",[b.Ix]:"collapsing",[b.d0]:"collapsing",[b.cn]:"collapse show"},T={in:!1,timeout:300,mountOnEnter:!1,unmountOnExit:!1,appear:!1,getDimensionValue:Z},C=a.forwardRef((({onEnter:e,onEntering:n,onEntered:t,onExit:o,onExiting:l,className:i,children:s,dimension:c="height",getDimensionValue:u=Z,...d},p)=>{const f="function"==typeof c?c():c,h=(0,a.useMemo)((()=>y((e=>{e.style[f]="0"}),e)),[f,e]),m=(0,a.useMemo)((()=>y((e=>{const n=`scroll${f[0].toUpperCase()}${f.slice(1)}`;e.style[f]=`${e[n]}px`}),n)),[f,n]),g=(0,a.useMemo)((()=>y((e=>{e.style[f]=null}),t)),[f,t]),b=(0,a.useMemo)((()=>y((e=>{e.style[f]=`${u(f,e)}px`,(0,j.Z)(e)}),o)),[o,u,f]),E=(0,a.useMemo)((()=>y((e=>{e.style[f]=null}),l)),[f,l]);return(0,r.jsx)(w.Z,{ref:p,addEndListener:x.Z,...d,"aria-expanded":d.role?d.in:null,onEnter:h,onEntering:m,onEntered:g,onExit:b,onExiting:E,childRef:s.ref,children:(e,n)=>a.cloneElement(s,{...n,className:v()(i,s.props.className,k[e],"width"===f&&"collapse-horizontal")})})}));C.defaultProps=T;const N=C;var O=t(9938),S=function(e){return e.Test.data},A=function(e){return e.Test.error},I=function(e){return e.Test.isLoading},R=t(3379),L=t.n(R),P=t(7795),z=t.n(P),$=t(569),M=t.n($),B=t(3565),U=t.n(B),_=t(9216),H=t.n(_),D=t(4589),V=t.n(D),W=t(8478),X={};X.styleTagTransform=V(),X.setAttributes=U(),X.insert=M().bind(null,"head"),X.domAPI=z(),X.insertStyleElement=H(),L()(W.Z,X);const G=W.Z&&W.Z.locals?W.Z.locals:void 0;var Q=function(){return Q=Object.assign||function(e){for(var n,t=1,r=arguments.length;t<r;t++)for(var o in n=arguments[t])Object.prototype.hasOwnProperty.call(n,o)&&(e[o]=n[o]);return e},Q.apply(this,arguments)};const Y=(0,a.memo)((function(e){var n=e.className,t=(0,c.I0)(),m=(0,c.v9)(p.vb),v=(0,c.v9)(p.Te),g=(0,c.v9)(s.rX),b=(0,c.v9)(u.e8),x=(0,c.v9)(S),y=((0,c.v9)(O.nX),(0,c.v9)(I),(0,c.v9)(A),(0,a.useState)(0)),j=y[0],w=y[1],E=(0,a.useState)(!1),Z=E[0],k=E[1],T=(0,a.useState)(5),C=T[0],R=T[1],L=(0,a.useState)(!1),P=L[0],z=L[1],$=(0,a.useState)([]),M=$[0],B=$[1],U=(0,a.useState)([]),_=U[0],H=U[1],D=(0,a.useState)(!1),V=D[0],W=D[1];(0,a.useEffect)((function(){t((0,s.M8)()),t((0,p.pE)()),document.title="Тестирование"}),[t]);var X=(0,a.useCallback)((function(e){R(Number(e.target.value))}),[]),Y=(0,a.useCallback)((function(){z(!1),k(!1),document.location.reload()}),[]),q=m.map((function(e){return(0,r.jsx)("div",{children:e.title})})),F=(0,a.useCallback)((function(){var e=[];return m.forEach((function(n,t){e.push({value:n.title,content:q[t]})})),e}),[q,m]),J=(0,a.useCallback)((function(){return e=void 0,n=void 0,o=function(){return function(e,n){var t,r,o,a,l={label:0,sent:function(){if(1&o[0])throw o[1];return o[1]},trys:[],ops:[]};return a={next:i(0),throw:i(1),return:i(2)},"function"==typeof Symbol&&(a[Symbol.iterator]=function(){return this}),a;function i(i){return function(s){return function(i){if(t)throw new TypeError("Generator is already executing.");for(;a&&(a=0,i[0]&&(l=0)),l;)try{if(t=1,r&&(o=2&i[0]?r.return:i[0]?r.throw||((o=r.return)&&o.call(r),0):r.next)&&!(o=o.call(r,i[1])).done)return o;switch(r=0,o&&(i=[2&i[0],o.value]),i[0]){case 0:case 1:o=i;break;case 4:return l.label++,{value:i[1],done:!1};case 5:l.label++,r=i[1],i=[0];continue;case 7:i=l.ops.pop(),l.trys.pop();continue;default:if(!((o=(o=l.trys).length>0&&o[o.length-1])||6!==i[0]&&2!==i[0])){l=0;continue}if(3===i[0]&&(!o||i[1]>o[0]&&i[1]<o[3])){l.label=i[1];break}if(6===i[0]&&l.label<o[1]){l.label=o[1],o=i;break}if(o&&l.label<o[2]){l.label=o[2],l.ops.push(i);break}o[2]&&l.ops.pop(),l.trys.pop();continue}i=n.call(e,l)}catch(e){i=[6,e],r=0}finally{t=o=0}if(5&i[0])throw i[1];return{value:i[0]?i[1]:void 0,done:!0}}([i,s])}}}(this,(function(e){switch(e.label){case 0:return[4,t((0,h.$)({tasksAmount:C,categories:_}))];case 1:return"error"===e.sent().payload?(W(!0),setTimeout((function(){W(!1)}),2500)):z(!0),[2]}}))},new((r=void 0)||(r=Promise))((function(t,a){function l(e){try{s(o.next(e))}catch(e){a(e)}}function i(e){try{s(o.throw(e))}catch(e){a(e)}}function s(e){var n;e.done?t(e.value):(n=e.value,n instanceof r?n:new r((function(e){e(n)}))).then(l,i)}s((o=o.apply(e,n||[])).next())}));var e,n,r,o}),[t,_,C]);return(0,r.jsx)("div",Q({className:(0,o.A)("",{},[n])},{children:(0,r.jsxs)(i.v,Q({title:"Тестирование"},{children:[!b&&!P&&(0,r.jsxs)(l.Z,Q({className:G.testSetup},{children:[(0,r.jsx)(l.Z.Label,{children:"Выберите количество вопросов в тесте: ".concat(C)}),(0,r.jsx)(l.Z.Range,{min:5,max:g,value:C,onChange:X}),(0,r.jsx)(l.Z.Label,{children:"Выберите категории тестирования:"}),m.length&&(0,r.jsx)(f.z,{isLoading:v,items:F(),onChange:function(e){B(e);var n=m.filter((function(n){return e.includes(n.title)})),t=[];n.map((function(e){return e.id?t.push(e.id):0})),H(t)},selectedItems:M,optionsClassname:G.optionsClassname,placeholder:"Выберите категорию(-ии)"}),(0,r.jsx)(d.z,Q({theme:d.b.BLUE,onClick:J},{children:"Сгенерировать тест!"}))]})),(0,r.jsx)(N,Q({timeout:1e3,in:V},{children:(0,r.jsx)("h4",Q({style:{color:"crimson",marginTop:10}},{children:"В базе данных недостаточно вопросов по выбранной теме."}))})),P&&x?(0,r.jsx)(s.$H,{totalQuestions:C,answers:j,setAnswers:w,endOfTest:Z,setEndOfTest:k,test:x.test}):"",Z&&(0,r.jsx)(d.z,Q({className:G.reloadButton,theme:d.b.BLUE,onClick:Y},{children:"Начать заново?"}))]}))}))}))},3696:(e,n,t)=>{t.d(n,{z:()=>Z});var r=t(5893),o=t(746),a=t(3008),l=t(4807),i=t(2630),s=t(3379),c=t.n(s),u=t(7795),d=t.n(u),p=t(569),f=t.n(p),h=t(3565),m=t.n(h),v=t(9216),g=t.n(v),b=t(4589),x=t.n(b),y=t(2670),j={};j.styleTagTransform=x(),j.setAttributes=m(),j.insert=f().bind(null,"head"),j.domAPI=d(),j.insertStyleElement=g(),c()(y.Z,j);const w=y.Z&&y.Z.locals?y.Z.locals:void 0;var E=function(){return E=Object.assign||function(e){for(var n,t=1,r=arguments.length;t<r;t++)for(var o in n=arguments[t])Object.prototype.hasOwnProperty.call(n,o)&&(e[o]=n[o]);return e},E.apply(this,arguments)},Z=function(e){var n=e.items,t=e.onChange,s=e.optionsClassname,c=e.selectedItems,u=e.placeholder,d=e.isLoading,p=e.multiply,f=void 0===p||p;return(0,r.jsxs)(o.R,E({as:"div",className:w.HSelect,value:c,onChange:function(e){return t(e)},multiple:f},{children:[(0,r.jsx)(o.R.Button,E({className:w.trigger},{children:(0,r.jsx)(a.z,E({theme:a.b.PRIMARY},{children:(null==c?void 0:c.length)?null==c?void 0:c.map((function(e){return e})).join(", "):u}))})),(0,r.jsxs)(o.R.Options,E({className:(0,l.A)(w.options,{},[s])},{children:[d&&new Array(1).fill(0).map((function(e){return(0,r.jsx)(o.R.Option,E({value:""},{children:(0,r.jsx)(i.a,{})}),e)})),null==n?void 0:n.map((function(e){return(0,r.jsx)(o.R.Option,E({className:w.option,value:e.value},{children:function(n){var t,o=n.selected;return(0,r.jsx)("div",E({className:(0,l.A)("",(t={},t[w.selected]=o,t))},{children:e.content}))}}),e.value)}))]}))]}))}},7335:(e,n,t)=>{t.d(n,{v:()=>w});var r=t(5893),o=t(4807),a=t(7294),l=t(3379),i=t.n(l),s=t(7795),c=t.n(s),u=t(569),d=t.n(u),p=t(3565),f=t.n(p),h=t(9216),m=t.n(h),v=t(4589),g=t.n(v),b=t(4334),x={};x.styleTagTransform=g(),x.setAttributes=f(),x.insert=d().bind(null,"head"),x.domAPI=c(),x.insertStyleElement=m(),i()(b.Z,x);const y=b.Z&&b.Z.locals?b.Z.locals:void 0;var j=function(){return j=Object.assign||function(e){for(var n,t=1,r=arguments.length;t<r;t++)for(var o in n=arguments[t])Object.prototype.hasOwnProperty.call(n,o)&&(e[o]=n[o]);return e},j.apply(this,arguments)},w=(0,a.memo)((function(e){var n=e.className,t=e.children,a=e.title;return(0,r.jsx)("div",j({className:(0,o.A)(y.ContentWrapper,{},[n])},{children:(0,r.jsxs)("div",j({className:y.about_wrapper},{children:[(0,r.jsx)("h1",j({className:y.aboutTitle},{children:a})),(0,r.jsx)("div",j({className:y.content},{children:t}))]}))}))}))},8478:(e,n,t)=>{t.d(n,{Z:()=>i});var r=t(8081),o=t.n(r),a=t(3645),l=t.n(a)()(o());l.push([e.id,".a3708{display:flex;flex-direction:column;align-items:stretch;justify-content:flex-start;gap:10px}.c32b7{margin-top:10px}",""]),l.locals={testSetup:"a3708",reloadButton:"c32b7"};const i=l},2670:(e,n,t)=>{t.d(n,{Z:()=>i});var r=t(8081),o=t.n(r),a=t(3645),l=t.n(a)()(o());l.push([e.id,".dfad5{position:relative}li{list-style-type:none}.ecf69{margin:0;padding:0;border:none;background:none;outline:none}.f78ba{padding:10px;border:2px solid var(--inverted-primary-color);border-radius:12px;background:var(--inverted-bg-color);position:absolute;z-index:10000}.a7e96{margin-bottom:5px}.a7e96:hover{cursor:pointer}.a7e96:last-child{margin:0}.ba924{padding:5px;border-radius:5px;background:var(--bg-color)}",""]),l.locals={HSelect:"dfad5",trigger:"ecf69",options:"f78ba",option:"a7e96",selected:"ba924"};const i=l},4334:(e,n,t)=>{t.d(n,{Z:()=>i});var r=t(8081),o=t.n(r),a=t(3645),l=t.n(a)()(o());l.push([e.id,".e7ee5{padding:20px;background:var(--secondary-bg-color);display:flex;flex-direction:column;gap:10px;align-self:flex-start;justify-self:center}.e65d1{color:#fff;font-size:40px;font-weight:700;text-align:center;line-height:47px}.c62a1{padding:20px;color:#000;background:#fff;display:flex;flex-direction:column}",""]),l.locals={about_wrapper:"e7ee5",aboutTitle:"e65d1",content:"c62a1"};const i=l}}]);