!function(){try{var e="undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:{},a=(new Error).stack;a&&(e._sentryDebugIds=e._sentryDebugIds||{},e._sentryDebugIds[a]="b8410d7d-c150-48a4-8516-71293fa09127",e._sentryDebugIdIdentifier="sentry-dbid-b8410d7d-c150-48a4-8516-71293fa09127")}catch(e){}}();var _global="undefined"!==typeof window?window:"undefined"!==typeof global?global:"undefined"!==typeof self?self:{};_global.SENTRY_RELEASE={id:"08864407160b3973b9b88c5ae92687282b21e2f4"},(self.webpackChunkcloud_frontend=self.webpackChunkcloud_frontend||[]).push([[9818],{92155:(e,a,t)=>{t.d(a,{A:()=>c});var n=t(58168),l=t(96540),o=t(50876);const d=e=>(0,l.forwardRef)(((a,t)=>{let{callback:d,feature:r,isStart:c,isSuccess:i,isFailure:s,eventReason:f,payload:u={},...b}=a;const{sendLog:p,isReady:g}=(0,o.A)(),y=(0,l.useCallback)((()=>{const e=b[d],a={feature:r,isStart:c,isSuccess:i,isFailure:s,eventReason:f,...u,...b["data-ga"]?{dataGa:b["data-ga"]}:{},...b.dataGa?{dataGa:b.dataGa}:{},...b["data-track"]?{dataTrack:b["data-track"]}:{},...b.label?{label:b.label}:{}};"function"==typeof e&&e(),p(a,!0)}),[d,p,g,u,b]),k=(0,l.useMemo)((()=>({...b,[d]:y})),[b,d,y]);return l.createElement(e,(0,n.A)({ref:t},k))}));var r=t(67276);const c=e=>(0,l.forwardRef)(((a,t)=>{let{payload:o={},...c}=a;const i=d(e);return l.createElement(i,(0,n.A)({},c,{ref:t,callback:"onClick",payload:{...o,action:r.o1.buttonClicked}}))}))},89818:(e,a,t)=>{t.r(a),t.d(a,{MobileApp:()=>i,default:()=>s});t(25440);var n=t(96540),l=t(10058),o=t(28738),d=t(92155),r=t(63314);const c=(0,d.A)(l.Button),i=()=>n.createElement(r.Ay,{feature:"MobileApp"},n.createElement(l.Layer,{full:!0},n.createElement(l.Flex,{alignItems:"center",justifyContent:"center",column:!0,width:"100%",height:"100%",background:"mainBackground",gap:4},n.createElement(o.m,null),n.createElement(l.TextBigger,{textAlign:"center"},"Please open this link using your mobile device."),n.createElement(l.Flex,{alignItems:"center"},n.createElement(c,{onClick:()=>window.location.replace("/"),feature:"MobileApp",payload:{label:"Go to app"}},"Go to app"))))),s=i}}]);