"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[2398],{6103:(s,e,l)=>{l.r(e),l.d(e,{assets:()=>m,contentTitle:()=>t,default:()=>d,frontMatter:()=>i,metadata:()=>c,toc:()=>r});var a=l(4848),n=l(8453);const i={},t="FOC\u7535\u673a\u63a7\u5236",c={id:"embedded/lite-foc",title:"FOC\u7535\u673a\u63a7\u5236",description:"FOC\uff08Field-Oriented Control\uff09\uff0c\u76f4\u8bd1\u662f\u78c1\u573a\u5b9a\u5411\u63a7\u5236\uff0c\u4e5f\u88ab\u79f0\u4f5c\u77e2\u91cf\u63a7\u5236\uff08VC\uff0cVector Control\uff09\uff0c\u662f\u76ee\u524d\u65e0\u5237\u76f4\u6d41\u7535\u673a\uff08BLDC\uff09\u548c\u6c38\u78c1\u540c\u6b65\u7535\u673a\uff08PMSM\uff09\u9ad8\u6548\u63a7\u5236\u7684\u6700\u4f18\u65b9\u6cd5\u4e4b\u4e00\u3002FOC\u65e8\u5728\u901a\u8fc7\u7cbe\u786e\u5730\u63a7\u5236\u78c1\u573a\u5927\u5c0f\u4e0e\u65b9\u5411\uff0c\u4f7f\u5f97\u7535\u673a\u7684\u8fd0\u52a8\u8f6c\u77e9\u5e73\u7a33\u3001\u566a\u58f0\u5c0f\u3001\u6548\u7387\u9ad8\uff0c\u5e76\u4e14\u5177\u6709\u9ad8\u901f\u7684\u52a8\u6001\u54cd\u5e94\u3002",source:"@site/docs/embedded/lite-foc.md",sourceDirName:"embedded",slug:"/embedded/lite-foc",permalink:"/docs/embedded/lite-foc",draft:!1,unlisted:!1,tags:[],version:"current",lastUpdatedAt:1720432761e3,frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"\u95ee\u9898\u96c6\u5408",permalink:"/docs/embedded/issue"},next:{title:"openOCD",permalink:"/docs/embedded/opencd"}},m={},r=[{value:"\u9a71\u52a8\u7535\u8def\u7684\u5b9e\u73b0",id:"\u9a71\u52a8\u7535\u8def\u7684\u5b9e\u73b0",level:2},{value:"\u7406\u8bba\u57fa\u7840",id:"\u7406\u8bba\u57fa\u7840",level:2},{value:"FOC\u63a7\u5236\u7684\u6d41\u7a0b",id:"foc\u63a7\u5236\u7684\u6d41\u7a0b",level:3},{value:"\u514b\u62c9\u514b\u53d8\u6362(Clark\u53d8\u6362)",id:"\u514b\u62c9\u514b\u53d8\u6362clark\u53d8\u6362",level:3},{value:"\u540d\u8bcd\u89e3\u6790",id:"\u540d\u8bcd\u89e3\u6790",level:2},{value:"\u529b\u77e9",id:"\u529b\u77e9",level:3},{value:"\u4f4e\u901a\u6ee4\u6ce2\u5668",id:"\u4f4e\u901a\u6ee4\u6ce2\u5668",level:3},{value:"\u65cb\u8f6c\u77e9\u9635",id:"\u65cb\u8f6c\u77e9\u9635",level:3},{value:"\u53c2\u8003\u94fe\u63a5",id:"\u53c2\u8003\u94fe\u63a5",level:2}];function h(s){const e={a:"a",annotation:"annotation",code:"code",h1:"h1",h2:"h2",h3:"h3",img:"img",li:"li",math:"math",mfrac:"mfrac",mi:"mi",mn:"mn",mo:"mo",mrow:"mrow",msqrt:"msqrt",mstyle:"mstyle",msub:"msub",mtable:"mtable",mtd:"mtd",mtr:"mtr",ol:"ol",p:"p",path:"path",semantics:"semantics",span:"span",strong:"strong",svg:"svg",...(0,n.R)(),...s.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(e.h1,{id:"foc\u7535\u673a\u63a7\u5236",children:"FOC\u7535\u673a\u63a7\u5236"}),"\n",(0,a.jsxs)(e.p,{children:[(0,a.jsx)(e.strong,{children:"FOC\uff08Field-Oriented Control\uff09"}),"\uff0c\u76f4\u8bd1\u662f\u78c1\u573a\u5b9a\u5411\u63a7\u5236\uff0c\u4e5f\u88ab\u79f0\u4f5c\u77e2\u91cf\u63a7\u5236**\uff08VC\uff0cVector Control\uff09**\uff0c\u662f\u76ee\u524d\u65e0\u5237\u76f4\u6d41\u7535\u673a\uff08BLDC\uff09\u548c\u6c38\u78c1\u540c\u6b65\u7535\u673a\uff08PMSM\uff09\u9ad8\u6548\u63a7\u5236\u7684\u6700\u4f18\u65b9\u6cd5\u4e4b\u4e00\u3002FOC\u65e8\u5728\u901a\u8fc7\u7cbe\u786e\u5730\u63a7\u5236\u78c1\u573a\u5927\u5c0f\u4e0e\u65b9\u5411\uff0c\u4f7f\u5f97\u7535\u673a\u7684\u8fd0\u52a8\u8f6c\u77e9\u5e73\u7a33\u3001\u566a\u58f0\u5c0f\u3001\u6548\u7387\u9ad8\uff0c\u5e76\u4e14\u5177\u6709\u9ad8\u901f\u7684\u52a8\u6001\u54cd\u5e94\u3002"]}),"\n",(0,a.jsx)(e.h2,{id:"\u9a71\u52a8\u7535\u8def\u7684\u5b9e\u73b0",children:"\u9a71\u52a8\u7535\u8def\u7684\u5b9e\u73b0"}),"\n",(0,a.jsx)(e.p,{children:"\u6682\u4ee3"}),"\n",(0,a.jsx)(e.h2,{id:"\u7406\u8bba\u57fa\u7840",children:"\u7406\u8bba\u57fa\u7840"}),"\n",(0,a.jsx)(e.h3,{id:"foc\u63a7\u5236\u7684\u6d41\u7a0b",children:"FOC\u63a7\u5236\u7684\u6d41\u7a0b"}),"\n",(0,a.jsxs)(e.ol,{children:["\n",(0,a.jsxs)(e.li,{children:["\u5bf9\u7535\u673a\u4e09\u76f8\u7535\u6d41\u8fdb\u884c\u91c7\u6837\u5f97\u5230 ",(0,a.jsxs)(e.span,{className:"katex",children:[(0,a.jsx)(e.span,{className:"katex-mathml",children:(0,a.jsx)(e.math,{xmlns:"http://www.w3.org/1998/Math/MathML",children:(0,a.jsxs)(e.semantics,{children:[(0,a.jsxs)(e.mrow,{children:[(0,a.jsxs)(e.msub,{children:[(0,a.jsx)(e.mi,{children:"I"}),(0,a.jsx)(e.mi,{children:"a"})]}),(0,a.jsx)(e.mo,{separator:"true",children:","}),(0,a.jsxs)(e.msub,{children:[(0,a.jsx)(e.mi,{children:"I"}),(0,a.jsx)(e.mi,{children:"b"})]}),(0,a.jsx)(e.mo,{separator:"true",children:","}),(0,a.jsxs)(e.msub,{children:[(0,a.jsx)(e.mi,{children:"I"}),(0,a.jsx)(e.mi,{children:"c"})]})]}),(0,a.jsx)(e.annotation,{encoding:"application/x-tex",children:"I_{a},I_{b},I_{c}"})]})})}),(0,a.jsx)(e.span,{className:"katex-html","aria-hidden":"true",children:(0,a.jsxs)(e.span,{className:"base",children:[(0,a.jsx)(e.span,{className:"strut",style:{height:"0.8778em",verticalAlign:"-0.1944em"}}),(0,a.jsxs)(e.span,{className:"mord",children:[(0,a.jsx)(e.span,{className:"mord mathnormal",style:{marginRight:"0.07847em"},children:"I"}),(0,a.jsx)(e.span,{className:"msupsub",children:(0,a.jsxs)(e.span,{className:"vlist-t vlist-t2",children:[(0,a.jsxs)(e.span,{className:"vlist-r",children:[(0,a.jsx)(e.span,{className:"vlist",style:{height:"0.1514em"},children:(0,a.jsxs)(e.span,{style:{top:"-2.55em",marginLeft:"-0.0785em",marginRight:"0.05em"},children:[(0,a.jsx)(e.span,{className:"pstrut",style:{height:"2.7em"}}),(0,a.jsx)(e.span,{className:"sizing reset-size6 size3 mtight",children:(0,a.jsx)(e.span,{className:"mord mtight",children:(0,a.jsx)(e.span,{className:"mord mathnormal mtight",children:"a"})})})]})}),(0,a.jsx)(e.span,{className:"vlist-s",children:"\u200b"})]}),(0,a.jsx)(e.span,{className:"vlist-r",children:(0,a.jsx)(e.span,{className:"vlist",style:{height:"0.15em"},children:(0,a.jsx)(e.span,{})})})]})})]}),(0,a.jsx)(e.span,{className:"mpunct",children:","}),(0,a.jsx)(e.span,{className:"mspace",style:{marginRight:"0.1667em"}}),(0,a.jsxs)(e.span,{className:"mord",children:[(0,a.jsx)(e.span,{className:"mord mathnormal",style:{marginRight:"0.07847em"},children:"I"}),(0,a.jsx)(e.span,{className:"msupsub",children:(0,a.jsxs)(e.span,{className:"vlist-t vlist-t2",children:[(0,a.jsxs)(e.span,{className:"vlist-r",children:[(0,a.jsx)(e.span,{className:"vlist",style:{height:"0.3361em"},children:(0,a.jsxs)(e.span,{style:{top:"-2.55em",marginLeft:"-0.0785em",marginRight:"0.05em"},children:[(0,a.jsx)(e.span,{className:"pstrut",style:{height:"2.7em"}}),(0,a.jsx)(e.span,{className:"sizing reset-size6 size3 mtight",children:(0,a.jsx)(e.span,{className:"mord mtight",children:(0,a.jsx)(e.span,{className:"mord mathnormal mtight",children:"b"})})})]})}),(0,a.jsx)(e.span,{className:"vlist-s",children:"\u200b"})]}),(0,a.jsx)(e.span,{className:"vlist-r",children:(0,a.jsx)(e.span,{className:"vlist",style:{height:"0.15em"},children:(0,a.jsx)(e.span,{})})})]})})]}),(0,a.jsx)(e.span,{className:"mpunct",children:","}),(0,a.jsx)(e.span,{className:"mspace",style:{marginRight:"0.1667em"}}),(0,a.jsxs)(e.span,{className:"mord",children:[(0,a.jsx)(e.span,{className:"mord mathnormal",style:{marginRight:"0.07847em"},children:"I"}),(0,a.jsx)(e.span,{className:"msupsub",children:(0,a.jsxs)(e.span,{className:"vlist-t vlist-t2",children:[(0,a.jsxs)(e.span,{className:"vlist-r",children:[(0,a.jsx)(e.span,{className:"vlist",style:{height:"0.1514em"},children:(0,a.jsxs)(e.span,{style:{top:"-2.55em",marginLeft:"-0.0785em",marginRight:"0.05em"},children:[(0,a.jsx)(e.span,{className:"pstrut",style:{height:"2.7em"}}),(0,a.jsx)(e.span,{className:"sizing reset-size6 size3 mtight",children:(0,a.jsx)(e.span,{className:"mord mtight",children:(0,a.jsx)(e.span,{className:"mord mathnormal mtight",children:"c"})})})]})}),(0,a.jsx)(e.span,{className:"vlist-s",children:"\u200b"})]}),(0,a.jsx)(e.span,{className:"vlist-r",children:(0,a.jsx)(e.span,{className:"vlist",style:{height:"0.15em"},children:(0,a.jsx)(e.span,{})})})]})})]})]})})]})]}),"\n",(0,a.jsxs)(e.li,{children:["\u5c06 \ud835\udc3c\ud835\udc4e,\ud835\udc3c\ud835\udc4f,\ud835\udc3c\ud835\udc50 \u7ecf\u8fc7",(0,a.jsx)(e.code,{children:"Clark\u53d8\u6362"}),"\u5f97\u5230 \ud835\udc3c\ud835\udefc,\ud835\udc3c\ud835\udefd"]}),"\n",(0,a.jsxs)(e.li,{children:["\u5c06 \ud835\udc3c\ud835\udefc,\ud835\udc3c\ud835\udefd \u7ecf\u8fc7",(0,a.jsx)(e.code,{children:"Park\u53d8\u6362"}),"\u5f97\u5230 \ud835\udc3c\ud835\udc5e,\ud835\udc3c\ud835\udc51"]}),"\n",(0,a.jsx)(e.li,{children:"\u8ba1\u7b97 \ud835\udc3c\ud835\udc5e,\ud835\udc3c\ud835\udc51 \u548c\u5176\u8bbe\u5b9a\u503c \ud835\udc3c\ud835\udc5e_\ud835\udc5f\ud835\udc52\ud835\udc53,\ud835\udc3c\ud835\udc51_\ud835\udc5f\ud835\udc52\ud835\udc53 \u7684\u8bef\u5dee"}),"\n",(0,a.jsx)(e.li,{children:"\u5c06\u4e0a\u8ff0\u8bef\u5dee\u8f93\u5165\u4e24\u4e2aPID\uff08\u53ea\u7528\u5230PI\uff09\u63a7\u5236\u5668\uff0c\u5f97\u5230\u8f93\u51fa\u7684\u63a7\u5236\u7535\u538b \ud835\udc48\ud835\udc5e,\ud835\udc48\ud835\udc51"}),"\n",(0,a.jsxs)(e.li,{children:["\u5c06 \ud835\udc48\ud835\udc5e,\ud835\udc48\ud835\udc51 \u8fdb\u884c",(0,a.jsx)(e.code,{children:"\u53cdPark\u53d8\u6362"}),"\u5f97\u5230 \ud835\udc48\ud835\udefc,\ud835\udc48\ud835\udefd"]}),"\n",(0,a.jsxs)(e.li,{children:["\u7528 \ud835\udc48\ud835\udefc,\ud835\udc48\ud835\udefd \u5408\u6210\u7535\u538b\u7a7a\u95f4\u77e2\u91cf\uff0c\u8f93\u5165",(0,a.jsx)(e.code,{children:"SVPWM\u6a21\u5757"}),"\u8fdb\u884c\u8c03\u5236\uff0c\u8f93\u51fa\u8be5\u65f6\u523b\u4e09\u4e2a\u534a\u6865\u7684\u72b6\u6001\u7f16\u7801\u503c\uff08\u524d\u6587\u6709\u63d0\u5230\uff09"]}),"\n",(0,a.jsx)(e.li,{children:"\u6309\u7167\u524d\u9762\u8f93\u51fa\u7684\u7f16\u7801\u503c\u63a7\u5236\u4e09\u76f8\u9006\u53d8\u5668\u7684MOS\u7ba1\u5f00\u5173\uff0c\u9a71\u52a8\u7535\u673a"}),"\n",(0,a.jsx)(e.li,{children:"\u5faa\u73af\u4e0a\u8ff0\u6b65\u9aa4"}),"\n"]}),"\n",(0,a.jsx)(e.h3,{id:"\u514b\u62c9\u514b\u53d8\u6362clark\u53d8\u6362",children:"\u514b\u62c9\u514b\u53d8\u6362(Clark\u53d8\u6362)"}),"\n",(0,a.jsx)(e.span,{className:"katex-display",children:(0,a.jsxs)(e.span,{className:"katex",children:[(0,a.jsx)(e.span,{className:"katex-mathml",children:(0,a.jsx)(e.math,{xmlns:"http://www.w3.org/1998/Math/MathML",display:"block",children:(0,a.jsxs)(e.semantics,{children:[(0,a.jsxs)(e.mrow,{children:[(0,a.jsxs)(e.mrow,{children:[(0,a.jsx)(e.mo,{fence:"true",children:"["}),(0,a.jsxs)(e.mtable,{rowspacing:"0.16em",columnalign:"center",columnspacing:"1em",children:[(0,a.jsx)(e.mtr,{children:(0,a.jsx)(e.mtd,{children:(0,a.jsx)(e.mstyle,{scriptlevel:"0",displaystyle:"false",children:(0,a.jsxs)(e.msub,{children:[(0,a.jsx)(e.mi,{children:"I"}),(0,a.jsx)(e.mi,{children:"\u03b1"})]})})})}),(0,a.jsx)(e.mtr,{children:(0,a.jsx)(e.mtd,{children:(0,a.jsx)(e.mstyle,{scriptlevel:"0",displaystyle:"false",children:(0,a.jsxs)(e.msub,{children:[(0,a.jsx)(e.mn,{children:"1"}),(0,a.jsx)(e.mi,{children:"\u03b2"})]})})})})]}),(0,a.jsx)(e.mo,{fence:"true",children:"]"})]}),(0,a.jsx)(e.mo,{children:"="}),(0,a.jsxs)(e.mrow,{children:[(0,a.jsx)(e.mo,{fence:"true",children:"["}),(0,a.jsxs)(e.mtable,{rowspacing:"0.16em",columnalign:"center center center",columnspacing:"1em",children:[(0,a.jsxs)(e.mtr,{children:[(0,a.jsx)(e.mtd,{children:(0,a.jsx)(e.mstyle,{scriptlevel:"0",displaystyle:"false",children:(0,a.jsx)(e.mn,{children:"1"})})}),(0,a.jsx)(e.mtd,{children:(0,a.jsx)(e.mstyle,{scriptlevel:"0",displaystyle:"false",children:(0,a.jsxs)(e.mrow,{children:[(0,a.jsx)(e.mo,{children:"\u2212"}),(0,a.jsxs)(e.mfrac,{children:[(0,a.jsx)(e.mn,{children:"1"}),(0,a.jsx)(e.mn,{children:"2"})]})]})})}),(0,a.jsx)(e.mtd,{children:(0,a.jsx)(e.mstyle,{scriptlevel:"0",displaystyle:"false",children:(0,a.jsxs)(e.mrow,{children:[(0,a.jsx)(e.mo,{children:"\u2212"}),(0,a.jsxs)(e.mfrac,{children:[(0,a.jsx)(e.mn,{children:"1"}),(0,a.jsx)(e.mn,{children:"2"})]})]})})})]}),(0,a.jsxs)(e.mtr,{children:[(0,a.jsx)(e.mtd,{children:(0,a.jsx)(e.mstyle,{scriptlevel:"0",displaystyle:"false",children:(0,a.jsx)(e.mn,{children:"0"})})}),(0,a.jsx)(e.mtd,{children:(0,a.jsx)(e.mstyle,{scriptlevel:"0",displaystyle:"false",children:(0,a.jsxs)(e.mfrac,{children:[(0,a.jsx)(e.msqrt,{children:(0,a.jsx)(e.mn,{children:"3"})}),(0,a.jsx)(e.mn,{children:"2"})]})})}),(0,a.jsx)(e.mtd,{children:(0,a.jsx)(e.mstyle,{scriptlevel:"0",displaystyle:"false",children:(0,a.jsxs)(e.mrow,{children:[(0,a.jsx)(e.mo,{children:"\u2212"}),(0,a.jsxs)(e.mfrac,{children:[(0,a.jsx)(e.msqrt,{children:(0,a.jsx)(e.mn,{children:"3"})}),(0,a.jsx)(e.mn,{children:"2"})]})]})})})]})]}),(0,a.jsx)(e.mo,{fence:"true",children:"]"})]}),(0,a.jsxs)(e.mrow,{children:[(0,a.jsx)(e.mo,{fence:"true",children:"["}),(0,a.jsxs)(e.mtable,{rowspacing:"0.16em",columnalign:"center",columnspacing:"1em",children:[(0,a.jsx)(e.mtr,{children:(0,a.jsx)(e.mtd,{children:(0,a.jsx)(e.mstyle,{scriptlevel:"0",displaystyle:"false",children:(0,a.jsxs)(e.msub,{children:[(0,a.jsx)(e.mi,{children:"I"}),(0,a.jsx)(e.mi,{children:"a"})]})})})}),(0,a.jsx)(e.mtr,{children:(0,a.jsx)(e.mtd,{children:(0,a.jsx)(e.mstyle,{scriptlevel:"0",displaystyle:"false",children:(0,a.jsxs)(e.msub,{children:[(0,a.jsx)(e.mi,{children:"I"}),(0,a.jsx)(e.mi,{children:"b"})]})})})}),(0,a.jsx)(e.mtr,{children:(0,a.jsx)(e.mtd,{children:(0,a.jsx)(e.mstyle,{scriptlevel:"0",displaystyle:"false",children:(0,a.jsxs)(e.msub,{children:[(0,a.jsx)(e.mi,{children:"I"}),(0,a.jsx)(e.mi,{children:"c"})]})})})})]}),(0,a.jsx)(e.mo,{fence:"true",children:"]"})]})]}),(0,a.jsx)(e.annotation,{encoding:"application/x-tex",children:"\\begin{bmatrix}    I_{\\alpha }  \\\\    1_{\\beta }\\end{bmatrix} = \\begin{bmatrix} 1 & -\\frac{1}{2} & -\\frac{1}{2} \\\\ 0 & \\frac{\\sqrt{3}}{2}  & -\\frac{\\sqrt{3}}{2}\\end{bmatrix}\\begin{bmatrix} I_{a}\\\\ I_{b} \\\\ I_{c}\\end{bmatrix}"})]})})}),(0,a.jsxs)(e.span,{className:"katex-html","aria-hidden":"true",children:[(0,a.jsxs)(e.span,{className:"base",children:[(0,a.jsx)(e.span,{className:"strut",style:{height:"2.4em",verticalAlign:"-0.95em"}}),(0,a.jsxs)(e.span,{className:"minner",children:[(0,a.jsx)(e.span,{className:"mopen delimcenter",style:{top:"0em"},children:(0,a.jsx)(e.span,{className:"delimsizing size3",children:"["})}),(0,a.jsx)(e.span,{className:"mord",children:(0,a.jsx)(e.span,{className:"mtable",children:(0,a.jsx)(e.span,{className:"col-align-c",children:(0,a.jsxs)(e.span,{className:"vlist-t vlist-t2",children:[(0,a.jsxs)(e.span,{className:"vlist-r",children:[(0,a.jsxs)(e.span,{className:"vlist",style:{height:"1.45em"},children:[(0,a.jsxs)(e.span,{style:{top:"-3.61em"},children:[(0,a.jsx)(e.span,{className:"pstrut",style:{height:"3em"}}),(0,a.jsx)(e.span,{className:"mord",children:(0,a.jsxs)(e.span,{className:"mord",children:[(0,a.jsx)(e.span,{className:"mord mathnormal",style:{marginRight:"0.07847em"},children:"I"}),(0,a.jsx)(e.span,{className:"msupsub",children:(0,a.jsxs)(e.span,{className:"vlist-t vlist-t2",children:[(0,a.jsxs)(e.span,{className:"vlist-r",children:[(0,a.jsx)(e.span,{className:"vlist",style:{height:"0.1514em"},children:(0,a.jsxs)(e.span,{style:{top:"-2.55em",marginLeft:"-0.0785em",marginRight:"0.05em"},children:[(0,a.jsx)(e.span,{className:"pstrut",style:{height:"2.7em"}}),(0,a.jsx)(e.span,{className:"sizing reset-size6 size3 mtight",children:(0,a.jsx)(e.span,{className:"mord mtight",children:(0,a.jsx)(e.span,{className:"mord mathnormal mtight",style:{marginRight:"0.0037em"},children:"\u03b1"})})})]})}),(0,a.jsx)(e.span,{className:"vlist-s",children:"\u200b"})]}),(0,a.jsx)(e.span,{className:"vlist-r",children:(0,a.jsx)(e.span,{className:"vlist",style:{height:"0.15em"},children:(0,a.jsx)(e.span,{})})})]})})]})})]}),(0,a.jsxs)(e.span,{style:{top:"-2.41em"},children:[(0,a.jsx)(e.span,{className:"pstrut",style:{height:"3em"}}),(0,a.jsx)(e.span,{className:"mord",children:(0,a.jsxs)(e.span,{className:"mord",children:[(0,a.jsx)(e.span,{className:"mord",children:"1"}),(0,a.jsx)(e.span,{className:"msupsub",children:(0,a.jsxs)(e.span,{className:"vlist-t vlist-t2",children:[(0,a.jsxs)(e.span,{className:"vlist-r",children:[(0,a.jsx)(e.span,{className:"vlist",style:{height:"0.3361em"},children:(0,a.jsxs)(e.span,{style:{top:"-2.55em",marginLeft:"0em",marginRight:"0.05em"},children:[(0,a.jsx)(e.span,{className:"pstrut",style:{height:"2.7em"}}),(0,a.jsx)(e.span,{className:"sizing reset-size6 size3 mtight",children:(0,a.jsx)(e.span,{className:"mord mtight",children:(0,a.jsx)(e.span,{className:"mord mathnormal mtight",style:{marginRight:"0.05278em"},children:"\u03b2"})})})]})}),(0,a.jsx)(e.span,{className:"vlist-s",children:"\u200b"})]}),(0,a.jsx)(e.span,{className:"vlist-r",children:(0,a.jsx)(e.span,{className:"vlist",style:{height:"0.2861em"},children:(0,a.jsx)(e.span,{})})})]})})]})})]})]}),(0,a.jsx)(e.span,{className:"vlist-s",children:"\u200b"})]}),(0,a.jsx)(e.span,{className:"vlist-r",children:(0,a.jsx)(e.span,{className:"vlist",style:{height:"0.95em"},children:(0,a.jsx)(e.span,{})})})]})})})}),(0,a.jsx)(e.span,{className:"mclose delimcenter",style:{top:"0em"},children:(0,a.jsx)(e.span,{className:"delimsizing size3",children:"]"})})]}),(0,a.jsx)(e.span,{className:"mspace",style:{marginRight:"0.2778em"}}),(0,a.jsx)(e.span,{className:"mrel",children:"="}),(0,a.jsx)(e.span,{className:"mspace",style:{marginRight:"0.2778em"}})]}),(0,a.jsxs)(e.span,{className:"base",children:[(0,a.jsx)(e.span,{className:"strut",style:{height:"3.6em",verticalAlign:"-1.55em"}}),(0,a.jsxs)(e.span,{className:"minner",children:[(0,a.jsx)(e.span,{className:"mopen delimcenter",style:{top:"0em"},children:(0,a.jsx)(e.span,{className:"delimsizing size3",children:"["})}),(0,a.jsx)(e.span,{className:"mord",children:(0,a.jsxs)(e.span,{className:"mtable",children:[(0,a.jsx)(e.span,{className:"col-align-c",children:(0,a.jsxs)(e.span,{className:"vlist-t vlist-t2",children:[(0,a.jsxs)(e.span,{className:"vlist-r",children:[(0,a.jsxs)(e.span,{className:"vlist",style:{height:"1.5516em"},children:[(0,a.jsxs)(e.span,{style:{top:"-3.7444em"},children:[(0,a.jsx)(e.span,{className:"pstrut",style:{height:"3.038em"}}),(0,a.jsx)(e.span,{className:"mord",children:(0,a.jsx)(e.span,{className:"mord",children:"1"})})]}),(0,a.jsxs)(e.span,{style:{top:"-2.3464em"},children:[(0,a.jsx)(e.span,{className:"pstrut",style:{height:"3.038em"}}),(0,a.jsx)(e.span,{className:"mord",children:(0,a.jsx)(e.span,{className:"mord",children:"0"})})]})]}),(0,a.jsx)(e.span,{className:"vlist-s",children:"\u200b"})]}),(0,a.jsx)(e.span,{className:"vlist-r",children:(0,a.jsx)(e.span,{className:"vlist",style:{height:"1.0516em"},children:(0,a.jsx)(e.span,{})})})]})}),(0,a.jsx)(e.span,{className:"arraycolsep",style:{width:"0.5em"}}),(0,a.jsx)(e.span,{className:"arraycolsep",style:{width:"0.5em"}}),(0,a.jsx)(e.span,{className:"col-align-c",children:(0,a.jsxs)(e.span,{className:"vlist-t vlist-t2",children:[(0,a.jsxs)(e.span,{className:"vlist-r",children:[(0,a.jsxs)(e.span,{className:"vlist",style:{height:"1.5516em"},children:[(0,a.jsxs)(e.span,{style:{top:"-3.7444em"},children:[(0,a.jsx)(e.span,{className:"pstrut",style:{height:"3.038em"}}),(0,a.jsxs)(e.span,{className:"mord",children:[(0,a.jsx)(e.span,{className:"mord",children:"\u2212"}),(0,a.jsxs)(e.span,{className:"mord",children:[(0,a.jsx)(e.span,{className:"mopen nulldelimiter"}),(0,a.jsx)(e.span,{className:"mfrac",children:(0,a.jsxs)(e.span,{className:"vlist-t vlist-t2",children:[(0,a.jsxs)(e.span,{className:"vlist-r",children:[(0,a.jsxs)(e.span,{className:"vlist",style:{height:"0.8451em"},children:[(0,a.jsxs)(e.span,{style:{top:"-2.655em"},children:[(0,a.jsx)(e.span,{className:"pstrut",style:{height:"3em"}}),(0,a.jsx)(e.span,{className:"sizing reset-size6 size3 mtight",children:(0,a.jsx)(e.span,{className:"mord mtight",children:(0,a.jsx)(e.span,{className:"mord mtight",children:"2"})})})]}),(0,a.jsxs)(e.span,{style:{top:"-3.23em"},children:[(0,a.jsx)(e.span,{className:"pstrut",style:{height:"3em"}}),(0,a.jsx)(e.span,{className:"frac-line",style:{borderBottomWidth:"0.04em"}})]}),(0,a.jsxs)(e.span,{style:{top:"-3.394em"},children:[(0,a.jsx)(e.span,{className:"pstrut",style:{height:"3em"}}),(0,a.jsx)(e.span,{className:"sizing reset-size6 size3 mtight",children:(0,a.jsx)(e.span,{className:"mord mtight",children:(0,a.jsx)(e.span,{className:"mord mtight",children:"1"})})})]})]}),(0,a.jsx)(e.span,{className:"vlist-s",children:"\u200b"})]}),(0,a.jsx)(e.span,{className:"vlist-r",children:(0,a.jsx)(e.span,{className:"vlist",style:{height:"0.345em"},children:(0,a.jsx)(e.span,{})})})]})}),(0,a.jsx)(e.span,{className:"mclose nulldelimiter"})]})]})]}),(0,a.jsxs)(e.span,{style:{top:"-2.3464em"},children:[(0,a.jsx)(e.span,{className:"pstrut",style:{height:"3.038em"}}),(0,a.jsx)(e.span,{className:"mord",children:(0,a.jsxs)(e.span,{className:"mord",children:[(0,a.jsx)(e.span,{className:"mopen nulldelimiter"}),(0,a.jsx)(e.span,{className:"mfrac",children:(0,a.jsxs)(e.span,{className:"vlist-t vlist-t2",children:[(0,a.jsxs)(e.span,{className:"vlist-r",children:[(0,a.jsxs)(e.span,{className:"vlist",style:{height:"1.038em"},children:[(0,a.jsxs)(e.span,{style:{top:"-2.655em"},children:[(0,a.jsx)(e.span,{className:"pstrut",style:{height:"3em"}}),(0,a.jsx)(e.span,{className:"sizing reset-size6 size3 mtight",children:(0,a.jsx)(e.span,{className:"mord mtight",children:(0,a.jsx)(e.span,{className:"mord mtight",children:"2"})})})]}),(0,a.jsxs)(e.span,{style:{top:"-3.23em"},children:[(0,a.jsx)(e.span,{className:"pstrut",style:{height:"3em"}}),(0,a.jsx)(e.span,{className:"frac-line",style:{borderBottomWidth:"0.04em"}})]}),(0,a.jsxs)(e.span,{style:{top:"-3.399em"},children:[(0,a.jsx)(e.span,{className:"pstrut",style:{height:"3em"}}),(0,a.jsx)(e.span,{className:"sizing reset-size6 size3 mtight",children:(0,a.jsx)(e.span,{className:"mord mtight",children:(0,a.jsx)(e.span,{className:"mord sqrt mtight",children:(0,a.jsxs)(e.span,{className:"vlist-t vlist-t2",children:[(0,a.jsxs)(e.span,{className:"vlist-r",children:[(0,a.jsxs)(e.span,{className:"vlist",style:{height:"0.9128em"},children:[(0,a.jsxs)(e.span,{className:"svg-align",style:{top:"-3em"},children:[(0,a.jsx)(e.span,{className:"pstrut",style:{height:"3em"}}),(0,a.jsx)(e.span,{className:"mord mtight",style:{paddingLeft:"0.833em"},children:(0,a.jsx)(e.span,{className:"mord mtight",children:"3"})})]}),(0,a.jsxs)(e.span,{style:{top:"-2.8728em"},children:[(0,a.jsx)(e.span,{className:"pstrut",style:{height:"3em"}}),(0,a.jsx)(e.span,{className:"hide-tail mtight",style:{minWidth:"0.853em",height:"1.08em"},children:(0,a.jsx)(e.svg,{xmlns:"http://www.w3.org/2000/svg",width:"400em",height:"1.08em",viewBox:"0 0 400000 1080",preserveAspectRatio:"xMinYMin slice",children:(0,a.jsx)(e.path,{d:"M95,702\nc-2.7,0,-7.17,-2.7,-13.5,-8c-5.8,-5.3,-9.5,-10,-9.5,-14\nc0,-2,0.3,-3.3,1,-4c1.3,-2.7,23.83,-20.7,67.5,-54\nc44.2,-33.3,65.8,-50.3,66.5,-51c1.3,-1.3,3,-2,5,-2c4.7,0,8.7,3.3,12,10\ns173,378,173,378c0.7,0,35.3,-71,104,-213c68.7,-142,137.5,-285,206.5,-429\nc69,-144,104.5,-217.7,106.5,-221\nl0 -0\nc5.3,-9.3,12,-14,20,-14\nH400000v40H845.2724\ns-225.272,467,-225.272,467s-235,486,-235,486c-2.7,4.7,-9,7,-19,7\nc-6,0,-10,-1,-12,-3s-194,-422,-194,-422s-65,47,-65,47z\nM834 80h400000v40h-400000z"})})})]})]}),(0,a.jsx)(e.span,{className:"vlist-s",children:"\u200b"})]}),(0,a.jsx)(e.span,{className:"vlist-r",children:(0,a.jsx)(e.span,{className:"vlist",style:{height:"0.1272em"},children:(0,a.jsx)(e.span,{})})})]})})})})]})]}),(0,a.jsx)(e.span,{className:"vlist-s",children:"\u200b"})]}),(0,a.jsx)(e.span,{className:"vlist-r",children:(0,a.jsx)(e.span,{className:"vlist",style:{height:"0.345em"},children:(0,a.jsx)(e.span,{})})})]})}),(0,a.jsx)(e.span,{className:"mclose nulldelimiter"})]})})]})]}),(0,a.jsx)(e.span,{className:"vlist-s",children:"\u200b"})]}),(0,a.jsx)(e.span,{className:"vlist-r",children:(0,a.jsx)(e.span,{className:"vlist",style:{height:"1.0516em"},children:(0,a.jsx)(e.span,{})})})]})}),(0,a.jsx)(e.span,{className:"arraycolsep",style:{width:"0.5em"}}),(0,a.jsx)(e.span,{className:"arraycolsep",style:{width:"0.5em"}}),(0,a.jsx)(e.span,{className:"col-align-c",children:(0,a.jsxs)(e.span,{className:"vlist-t vlist-t2",children:[(0,a.jsxs)(e.span,{className:"vlist-r",children:[(0,a.jsxs)(e.span,{className:"vlist",style:{height:"1.5516em"},children:[(0,a.jsxs)(e.span,{style:{top:"-3.7444em"},children:[(0,a.jsx)(e.span,{className:"pstrut",style:{height:"3.038em"}}),(0,a.jsxs)(e.span,{className:"mord",children:[(0,a.jsx)(e.span,{className:"mord",children:"\u2212"}),(0,a.jsxs)(e.span,{className:"mord",children:[(0,a.jsx)(e.span,{className:"mopen nulldelimiter"}),(0,a.jsx)(e.span,{className:"mfrac",children:(0,a.jsxs)(e.span,{className:"vlist-t vlist-t2",children:[(0,a.jsxs)(e.span,{className:"vlist-r",children:[(0,a.jsxs)(e.span,{className:"vlist",style:{height:"0.8451em"},children:[(0,a.jsxs)(e.span,{style:{top:"-2.655em"},children:[(0,a.jsx)(e.span,{className:"pstrut",style:{height:"3em"}}),(0,a.jsx)(e.span,{className:"sizing reset-size6 size3 mtight",children:(0,a.jsx)(e.span,{className:"mord mtight",children:(0,a.jsx)(e.span,{className:"mord mtight",children:"2"})})})]}),(0,a.jsxs)(e.span,{style:{top:"-3.23em"},children:[(0,a.jsx)(e.span,{className:"pstrut",style:{height:"3em"}}),(0,a.jsx)(e.span,{className:"frac-line",style:{borderBottomWidth:"0.04em"}})]}),(0,a.jsxs)(e.span,{style:{top:"-3.394em"},children:[(0,a.jsx)(e.span,{className:"pstrut",style:{height:"3em"}}),(0,a.jsx)(e.span,{className:"sizing reset-size6 size3 mtight",children:(0,a.jsx)(e.span,{className:"mord mtight",children:(0,a.jsx)(e.span,{className:"mord mtight",children:"1"})})})]})]}),(0,a.jsx)(e.span,{className:"vlist-s",children:"\u200b"})]}),(0,a.jsx)(e.span,{className:"vlist-r",children:(0,a.jsx)(e.span,{className:"vlist",style:{height:"0.345em"},children:(0,a.jsx)(e.span,{})})})]})}),(0,a.jsx)(e.span,{className:"mclose nulldelimiter"})]})]})]}),(0,a.jsxs)(e.span,{style:{top:"-2.3464em"},children:[(0,a.jsx)(e.span,{className:"pstrut",style:{height:"3.038em"}}),(0,a.jsxs)(e.span,{className:"mord",children:[(0,a.jsx)(e.span,{className:"mord",children:"\u2212"}),(0,a.jsxs)(e.span,{className:"mord",children:[(0,a.jsx)(e.span,{className:"mopen nulldelimiter"}),(0,a.jsx)(e.span,{className:"mfrac",children:(0,a.jsxs)(e.span,{className:"vlist-t vlist-t2",children:[(0,a.jsxs)(e.span,{className:"vlist-r",children:[(0,a.jsxs)(e.span,{className:"vlist",style:{height:"1.038em"},children:[(0,a.jsxs)(e.span,{style:{top:"-2.655em"},children:[(0,a.jsx)(e.span,{className:"pstrut",style:{height:"3em"}}),(0,a.jsx)(e.span,{className:"sizing reset-size6 size3 mtight",children:(0,a.jsx)(e.span,{className:"mord mtight",children:(0,a.jsx)(e.span,{className:"mord mtight",children:"2"})})})]}),(0,a.jsxs)(e.span,{style:{top:"-3.23em"},children:[(0,a.jsx)(e.span,{className:"pstrut",style:{height:"3em"}}),(0,a.jsx)(e.span,{className:"frac-line",style:{borderBottomWidth:"0.04em"}})]}),(0,a.jsxs)(e.span,{style:{top:"-3.399em"},children:[(0,a.jsx)(e.span,{className:"pstrut",style:{height:"3em"}}),(0,a.jsx)(e.span,{className:"sizing reset-size6 size3 mtight",children:(0,a.jsx)(e.span,{className:"mord mtight",children:(0,a.jsx)(e.span,{className:"mord sqrt mtight",children:(0,a.jsxs)(e.span,{className:"vlist-t vlist-t2",children:[(0,a.jsxs)(e.span,{className:"vlist-r",children:[(0,a.jsxs)(e.span,{className:"vlist",style:{height:"0.9128em"},children:[(0,a.jsxs)(e.span,{className:"svg-align",style:{top:"-3em"},children:[(0,a.jsx)(e.span,{className:"pstrut",style:{height:"3em"}}),(0,a.jsx)(e.span,{className:"mord mtight",style:{paddingLeft:"0.833em"},children:(0,a.jsx)(e.span,{className:"mord mtight",children:"3"})})]}),(0,a.jsxs)(e.span,{style:{top:"-2.8728em"},children:[(0,a.jsx)(e.span,{className:"pstrut",style:{height:"3em"}}),(0,a.jsx)(e.span,{className:"hide-tail mtight",style:{minWidth:"0.853em",height:"1.08em"},children:(0,a.jsx)(e.svg,{xmlns:"http://www.w3.org/2000/svg",width:"400em",height:"1.08em",viewBox:"0 0 400000 1080",preserveAspectRatio:"xMinYMin slice",children:(0,a.jsx)(e.path,{d:"M95,702\nc-2.7,0,-7.17,-2.7,-13.5,-8c-5.8,-5.3,-9.5,-10,-9.5,-14\nc0,-2,0.3,-3.3,1,-4c1.3,-2.7,23.83,-20.7,67.5,-54\nc44.2,-33.3,65.8,-50.3,66.5,-51c1.3,-1.3,3,-2,5,-2c4.7,0,8.7,3.3,12,10\ns173,378,173,378c0.7,0,35.3,-71,104,-213c68.7,-142,137.5,-285,206.5,-429\nc69,-144,104.5,-217.7,106.5,-221\nl0 -0\nc5.3,-9.3,12,-14,20,-14\nH400000v40H845.2724\ns-225.272,467,-225.272,467s-235,486,-235,486c-2.7,4.7,-9,7,-19,7\nc-6,0,-10,-1,-12,-3s-194,-422,-194,-422s-65,47,-65,47z\nM834 80h400000v40h-400000z"})})})]})]}),(0,a.jsx)(e.span,{className:"vlist-s",children:"\u200b"})]}),(0,a.jsx)(e.span,{className:"vlist-r",children:(0,a.jsx)(e.span,{className:"vlist",style:{height:"0.1272em"},children:(0,a.jsx)(e.span,{})})})]})})})})]})]}),(0,a.jsx)(e.span,{className:"vlist-s",children:"\u200b"})]}),(0,a.jsx)(e.span,{className:"vlist-r",children:(0,a.jsx)(e.span,{className:"vlist",style:{height:"0.345em"},children:(0,a.jsx)(e.span,{})})})]})}),(0,a.jsx)(e.span,{className:"mclose nulldelimiter"})]})]})]})]}),(0,a.jsx)(e.span,{className:"vlist-s",children:"\u200b"})]}),(0,a.jsx)(e.span,{className:"vlist-r",children:(0,a.jsx)(e.span,{className:"vlist",style:{height:"1.0516em"},children:(0,a.jsx)(e.span,{})})})]})})]})}),(0,a.jsx)(e.span,{className:"mclose delimcenter",style:{top:"0em"},children:(0,a.jsx)(e.span,{className:"delimsizing size3",children:"]"})})]}),(0,a.jsx)(e.span,{className:"mspace",style:{marginRight:"0.1667em"}}),(0,a.jsxs)(e.span,{className:"minner",children:[(0,a.jsx)(e.span,{className:"mopen",children:(0,a.jsx)(e.span,{className:"delimsizing mult",children:(0,a.jsxs)(e.span,{className:"vlist-t vlist-t2",children:[(0,a.jsxs)(e.span,{className:"vlist-r",children:[(0,a.jsx)(e.span,{className:"vlist",style:{height:"2.05em"},children:(0,a.jsxs)(e.span,{style:{top:"-4.05em"},children:[(0,a.jsx)(e.span,{className:"pstrut",style:{height:"5.6em"}}),(0,a.jsx)(e.span,{style:{width:"0.667em",height:"3.600em"},children:(0,a.jsx)(e.svg,{xmlns:"http://www.w3.org/2000/svg",width:"0.667em",height:"3.600em",viewBox:"0 0 667 3600",children:(0,a.jsx)(e.path,{d:"M403 1759 V84 H666 V0 H319 V1759 v0 v1759 h347 v-84\nH403z M403 1759 V0 H319 V1759 v0 v1759 h84z"})})})]})}),(0,a.jsx)(e.span,{className:"vlist-s",children:"\u200b"})]}),(0,a.jsx)(e.span,{className:"vlist-r",children:(0,a.jsx)(e.span,{className:"vlist",style:{height:"1.55em"},children:(0,a.jsx)(e.span,{})})})]})})}),(0,a.jsx)(e.span,{className:"mord",children:(0,a.jsx)(e.span,{className:"mtable",children:(0,a.jsx)(e.span,{className:"col-align-c",children:(0,a.jsxs)(e.span,{className:"vlist-t vlist-t2",children:[(0,a.jsxs)(e.span,{className:"vlist-r",children:[(0,a.jsxs)(e.span,{className:"vlist",style:{height:"2.05em"},children:[(0,a.jsxs)(e.span,{style:{top:"-4.21em"},children:[(0,a.jsx)(e.span,{className:"pstrut",style:{height:"3em"}}),(0,a.jsx)(e.span,{className:"mord",children:(0,a.jsxs)(e.span,{className:"mord",children:[(0,a.jsx)(e.span,{className:"mord mathnormal",style:{marginRight:"0.07847em"},children:"I"}),(0,a.jsx)(e.span,{className:"msupsub",children:(0,a.jsxs)(e.span,{className:"vlist-t vlist-t2",children:[(0,a.jsxs)(e.span,{className:"vlist-r",children:[(0,a.jsx)(e.span,{className:"vlist",style:{height:"0.1514em"},children:(0,a.jsxs)(e.span,{style:{top:"-2.55em",marginLeft:"-0.0785em",marginRight:"0.05em"},children:[(0,a.jsx)(e.span,{className:"pstrut",style:{height:"2.7em"}}),(0,a.jsx)(e.span,{className:"sizing reset-size6 size3 mtight",children:(0,a.jsx)(e.span,{className:"mord mtight",children:(0,a.jsx)(e.span,{className:"mord mathnormal mtight",children:"a"})})})]})}),(0,a.jsx)(e.span,{className:"vlist-s",children:"\u200b"})]}),(0,a.jsx)(e.span,{className:"vlist-r",children:(0,a.jsx)(e.span,{className:"vlist",style:{height:"0.15em"},children:(0,a.jsx)(e.span,{})})})]})})]})})]}),(0,a.jsxs)(e.span,{style:{top:"-3.01em"},children:[(0,a.jsx)(e.span,{className:"pstrut",style:{height:"3em"}}),(0,a.jsx)(e.span,{className:"mord",children:(0,a.jsxs)(e.span,{className:"mord",children:[(0,a.jsx)(e.span,{className:"mord mathnormal",style:{marginRight:"0.07847em"},children:"I"}),(0,a.jsx)(e.span,{className:"msupsub",children:(0,a.jsxs)(e.span,{className:"vlist-t vlist-t2",children:[(0,a.jsxs)(e.span,{className:"vlist-r",children:[(0,a.jsx)(e.span,{className:"vlist",style:{height:"0.3361em"},children:(0,a.jsxs)(e.span,{style:{top:"-2.55em",marginLeft:"-0.0785em",marginRight:"0.05em"},children:[(0,a.jsx)(e.span,{className:"pstrut",style:{height:"2.7em"}}),(0,a.jsx)(e.span,{className:"sizing reset-size6 size3 mtight",children:(0,a.jsx)(e.span,{className:"mord mtight",children:(0,a.jsx)(e.span,{className:"mord mathnormal mtight",children:"b"})})})]})}),(0,a.jsx)(e.span,{className:"vlist-s",children:"\u200b"})]}),(0,a.jsx)(e.span,{className:"vlist-r",children:(0,a.jsx)(e.span,{className:"vlist",style:{height:"0.15em"},children:(0,a.jsx)(e.span,{})})})]})})]})})]}),(0,a.jsxs)(e.span,{style:{top:"-1.81em"},children:[(0,a.jsx)(e.span,{className:"pstrut",style:{height:"3em"}}),(0,a.jsx)(e.span,{className:"mord",children:(0,a.jsxs)(e.span,{className:"mord",children:[(0,a.jsx)(e.span,{className:"mord mathnormal",style:{marginRight:"0.07847em"},children:"I"}),(0,a.jsx)(e.span,{className:"msupsub",children:(0,a.jsxs)(e.span,{className:"vlist-t vlist-t2",children:[(0,a.jsxs)(e.span,{className:"vlist-r",children:[(0,a.jsx)(e.span,{className:"vlist",style:{height:"0.1514em"},children:(0,a.jsxs)(e.span,{style:{top:"-2.55em",marginLeft:"-0.0785em",marginRight:"0.05em"},children:[(0,a.jsx)(e.span,{className:"pstrut",style:{height:"2.7em"}}),(0,a.jsx)(e.span,{className:"sizing reset-size6 size3 mtight",children:(0,a.jsx)(e.span,{className:"mord mtight",children:(0,a.jsx)(e.span,{className:"mord mathnormal mtight",children:"c"})})})]})}),(0,a.jsx)(e.span,{className:"vlist-s",children:"\u200b"})]}),(0,a.jsx)(e.span,{className:"vlist-r",children:(0,a.jsx)(e.span,{className:"vlist",style:{height:"0.15em"},children:(0,a.jsx)(e.span,{})})})]})})]})})]})]}),(0,a.jsx)(e.span,{className:"vlist-s",children:"\u200b"})]}),(0,a.jsx)(e.span,{className:"vlist-r",children:(0,a.jsx)(e.span,{className:"vlist",style:{height:"1.55em"},children:(0,a.jsx)(e.span,{})})})]})})})}),(0,a.jsx)(e.span,{className:"mclose",children:(0,a.jsx)(e.span,{className:"delimsizing mult",children:(0,a.jsxs)(e.span,{className:"vlist-t vlist-t2",children:[(0,a.jsxs)(e.span,{className:"vlist-r",children:[(0,a.jsx)(e.span,{className:"vlist",style:{height:"2.05em"},children:(0,a.jsxs)(e.span,{style:{top:"-4.05em"},children:[(0,a.jsx)(e.span,{className:"pstrut",style:{height:"5.6em"}}),(0,a.jsx)(e.span,{style:{width:"0.667em",height:"3.600em"},children:(0,a.jsx)(e.svg,{xmlns:"http://www.w3.org/2000/svg",width:"0.667em",height:"3.600em",viewBox:"0 0 667 3600",children:(0,a.jsx)(e.path,{d:"M347 1759 V0 H0 V84 H263 V1759 v0 v1759 H0 v84 H347z\nM347 1759 V0 H263 V1759 v0 v1759 h84z"})})})]})}),(0,a.jsx)(e.span,{className:"vlist-s",children:"\u200b"})]}),(0,a.jsx)(e.span,{className:"vlist-r",children:(0,a.jsx)(e.span,{className:"vlist",style:{height:"1.55em"},children:(0,a.jsx)(e.span,{})})})]})})})]})]})]})]})}),"\n",(0,a.jsx)(e.h2,{id:"\u540d\u8bcd\u89e3\u6790",children:"\u540d\u8bcd\u89e3\u6790"}),"\n",(0,a.jsx)(e.h3,{id:"\u529b\u77e9",children:"\u529b\u77e9"}),"\n",(0,a.jsxs)(e.p,{children:["\u529b\u77e9\uff08\u626d\u529b\uff09\u662f\u4e2a",(0,a.jsx)(e.strong,{children:"\u65cb\u8f6c\u529b"}),"\u3002"]}),"\n",(0,a.jsx)(e.h3,{id:"\u4f4e\u901a\u6ee4\u6ce2\u5668",children:"\u4f4e\u901a\u6ee4\u6ce2\u5668"}),"\n",(0,a.jsxs)(e.p,{children:["\u987e\u540d\u601d\u4e49\uff0c\u4f4e\u901a\u6ee4\u6ce2\u5668\u5177\u5907",(0,a.jsx)(e.strong,{children:"\u901a\u4f4e\u9891\u963b\u9ad8\u9891"}),"\u7684\u529f\u80fd\uff0c\u5e76\u4e14\u4f4e\u901a\u6ee4\u6ce2\u5668\u7684\u7279\u6027\u4f7f\u5f97",(0,a.jsx)(e.strong,{children:"\u4f4e\u4e8e\u8bbe\u5b9a\u4e34\u754c\u503c\u9891\u7387\u7684\u4fe1\u53f7\u80fd\u6b63\u5e38\u901a\u8fc7"}),"\uff0c\u800c",(0,a.jsx)(e.strong,{children:"\u9ad8\u4e8e\u8bbe\u5b9a\u4e34\u754c\u503c\u9891\u7387\uff08fc\uff09\u7684\u4fe1\u53f7\u5219\u88ab\u963b\u9694\u548c\u8870\u51cf"}),"\u3002\u4f4e\u901a\u6ee4\u6ce2\u53ef\u4ee5\u7b80\u5355\u7684\u8ba4\u4e3a\uff1a\u8bbe\u5b9a\u4e00\u4e2a\u9891\u7387\u70b9\uff0c\u5f53\u4fe1\u53f7\u9891\u7387\u9ad8\u4e8e\u8fd9\u4e2a\u9891\u7387\u65f6\u4e0d\u80fd\u901a\u8fc7\u3002"]}),"\n",(0,a.jsx)(e.h3,{id:"\u65cb\u8f6c\u77e9\u9635",children:"\u65cb\u8f6c\u77e9\u9635"}),"\n",(0,a.jsx)(e.p,{children:(0,a.jsx)(e.img,{alt:"image-20240526234222196",src:l(9365).A+"",width:"1636",height:"915"})}),"\n",(0,a.jsx)(e.h2,{id:"\u53c2\u8003\u94fe\u63a5",children:"\u53c2\u8003\u94fe\u63a5"}),"\n",(0,a.jsx)(e.p,{children:(0,a.jsx)(e.a,{href:"https://zhuanlan.zhihu.com/p/147659820",children:"\u3010\u81ea\u5236FOC\u9a71\u52a8\u5668\u3011\u6df1\u5165\u6d45\u51fa\u8bb2\u89e3FOC\u7b97\u6cd5\u4e0eSVPWM\u6280\u672f - \u77e5\u4e4e (zhihu.com)"})}),"\n",(0,a.jsx)(e.p,{children:(0,a.jsx)(e.a,{href:"https://zhuanlan.zhihu.com/p/653313547",children:"\u4ece\u7406\u8bba\u5230\u786c\u4ef6\uff1aSVPWM\u548cFOC\u4e0a\u624b\u6559\u7a0b - \u77e5\u4e4e (zhihu.com)"})}),"\n",(0,a.jsx)(e.p,{children:(0,a.jsx)(e.a,{href:"https://blog.csdn.net/weixin_45590473/article/details/122884112",children:"\u5f7b\u5e95\u641e\u61c2\u201c\u65cb\u8f6c\u77e9\u9635/\u6b27\u62c9\u89d2/\u56db\u5143\u6570\u201d\uff0c\u8ba9\u4f60\u4f53\u4f1a\u4e09\u7ef4\u65cb\u8f6c\u4e4b\u7f8e_\u6b27\u62c9\u89d2\u5224\u65ad\u52a8\u4f5c-CSDN\u535a\u5ba2"})}),"\n",(0,a.jsx)(e.p,{children:(0,a.jsx)(e.a,{href:"https://blog.csdn.net/sy243772901/article/details/119608204",children:"\u4f4e\u901a\u6ee4\u6ce2\u5668\u7684\u63a2\u7a76-CSDN\u535a\u5ba2"})})]})}function d(s={}){const{wrapper:e}={...(0,n.R)(),...s.components};return e?(0,a.jsx)(e,{...s,children:(0,a.jsx)(h,{...s})}):h(s)}},9365:(s,e,l)=>{l.d(e,{A:()=>a});const a=l.p+"assets/images/image-20240526234222196-71b195cae8029e912483b51e98918694.png"},8453:(s,e,l)=>{l.d(e,{R:()=>t,x:()=>c});var a=l(6540);const n={},i=a.createContext(n);function t(s){const e=a.useContext(i);return a.useMemo((function(){return"function"==typeof s?s(e):{...e,...s}}),[e,s])}function c(s){let e;return e=s.disableParentContext?"function"==typeof s.components?s.components(n):s.components||n:t(s.components),a.createElement(i.Provider,{value:e},s.children)}}}]);