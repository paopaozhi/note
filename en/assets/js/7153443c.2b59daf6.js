"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[149],{1013:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>l,contentTitle:()=>o,default:()=>_,frontMatter:()=>c,metadata:()=>r,toc:()=>a});var i=t(4848),s=t(8453);const c={title:"AC6\u4e32\u53e3\u91cd\u5b9a\u5411",tags:["em"]},o=void 0,r={permalink:"/en/blog/2022/08/01/keil_\u4e32\u53e3\u91cd\u5b9a\u5411",source:"@site/blog/2022/08-01-keil_\u4e32\u53e3\u91cd\u5b9a\u5411.md",title:"AC6\u4e32\u53e3\u91cd\u5b9a\u5411",description:"1.\u4e32\u53e3\u91cd\u5b9a\u4e49\uff0cAC6\u548cAC5\u6709\u6240\u4e0d\u540c\u3002\u76f4\u63a5\u8d34\u51fa\u5199\u597d\u7684\u4ee3\u7801\uff0c\u4e0d\u4f7f\u7528miscoLib",date:"2022-08-01T00:00:00.000Z",tags:[{inline:!1,label:"\u5d4c\u5165\u5f0f",permalink:"/en/blog/tags/embedded",description:"\u5d4c\u5165\u5f0f\u6807\u7b7e\u63cf\u8ff0"}],readingTime:1.395,hasTruncateMarker:!1,authors:[],frontMatter:{title:"AC6\u4e32\u53e3\u91cd\u5b9a\u5411",tags:["em"]},unlisted:!1,prevItem:{title:"Welcome",permalink:"/en/blog/welcome"},nextItem:{title:"\u4f7f\u7528Clion\u4f18\u96c5\u7684\u5f00\u53d1\u5d4c\u5165\u5f0f",permalink:"/en/blog/2022/04/16/\u4f7f\u7528Clion\u4f18\u96c5\u7684\u5f00\u53d1\u5d4c\u5165\u5f0f"}},l={authorsImageUrls:[]},a=[];function d(e){const n={code:"code",p:"p",pre:"pre",...(0,s.R)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(n.p,{children:"1.\u4e32\u53e3\u91cd\u5b9a\u4e49\uff0cAC6\u548cAC5\u6709\u6240\u4e0d\u540c\u3002\u76f4\u63a5\u8d34\u51fa\u5199\u597d\u7684\u4ee3\u7801\uff0c\u4e0d\u4f7f\u7528miscoLib"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-C",children:'#define AC6_ENABLE\n#ifdef AC6_ENABLE\n//\u52a0\u5165\u4ee5\u4e0b\u4ee3\u7801,\u652f\u6301printf\u51fd\u6570,\u800c\u4e0d\u9700\u8981\u9009\u62e9use MicroLIB\t\n__ASM (".global __use_no_semihosting");      \n#else                                                       //AC5_ENABLE\n//#define PUTCHAR_PROTOTYPE int fputc(int ch, FILE *f)\t\n#pragma import(__use_no_semihosting)             \n//\u6807\u51c6\u5e93\u9700\u8981\u7684\u652f\u6301\u51fd\u6570                 \nstruct __FILE \n{ \n\tint handle; \n}; \n#endif\n\nFILE __stdout;       \n//\u5b9a\u4e49_sys_exit()\u4ee5\u907f\u514d\u4f7f\u7528\u534a\u4e3b\u673a\u6a21\u5f0f    \nvoid _sys_exit(int x) \n{ \n\tx = x; \n} \n//\u91cd\u5b9a\u4e49fputc\u51fd\u6570 \nint fputc(int ch, FILE *f)\n{ \t\n\twhile((USART1->SR&0X40)==0);//\u5faa\u73af\u53d1\u9001,\u76f4\u5230\u53d1\u9001\u5b8c\u6bd5   \n\tUSART1->DR = (u8) ch;      \n\treturn ch;\n}\n'})}),"\n",(0,i.jsx)(n.p,{children:"2.\u79fb\u690dLWIP\u7684\u65f6\u5019\uff0c\u76f4\u63a5\u62a5\u9519\uff0c\u627e\u4e0d\u5230sys_timeout()\u51fd\u6570\u3002\u8fd9\u91cc\u9700\u8981\u4fee\u6539\u4e24\u4e2a\u5730\u65b9\uff0c\u9996\u5148\u5728LwIP\\system\\arch\\CC.h\u6587\u4ef6\u4e2d\uff0c\u6ce8\u91ca\u6389\u4ee5\u4e0b\u4e24\u6761\uff0c\u5982\u679c\u4f7f\u7528cubemx\u751f\u6210\uff0c\u5219\u6bcf\u6b21\u751f\u6210\u65f6\uff0c\u90fd\u9700\u8981\u628a\u8fd9\u91cc\u6ce8\u91ca\u3002"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-c",children:"#define LWIP_PROVIDE_ERRNO\n\n#if defined (__GNUC__) & !defined (__CC_ARM)\n\n//#define LWIP_TIMEVAL_PRIVATE 0\n//#include <sys/time.h>\n\n#endif\n"})}),"\n",(0,i.jsx)(n.p,{children:"\u5176\u6b21\uff0c\u5728lwip.h\u4e2d\uff0c\u9700\u8981\u6dfb\u52a0\u4e00\u4e2a\u5b8f\u5b9a\u4e49 #define __CC_ARM"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-c",children:'/* Includes for RTOS ---------------------------------------------------------*/\n#if WITH_RTOS\n#include "lwip/tcpip.h"\n#endif /* WITH_RTOS */\n\n/* USER CODE BEGIN 0 */\n#define __CC_ARM          //AC6\u7f16\u8bd1\u5668\u624d\u6dfb\u52a0\u7684\u5b8f\u5b9a\u4e49\n/* USER CODE END 0 */\n\n/* Global Variables ----------------------------------------------------------*/\nextern ETH_HandleTypeDef heth;\n'})})]})}function _(e={}){const{wrapper:n}={...(0,s.R)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(d,{...e})}):d(e)}},8453:(e,n,t)=>{t.d(n,{R:()=>o,x:()=>r});var i=t(6540);const s={},c=i.createContext(s);function o(e){const n=i.useContext(c);return i.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function r(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:o(e.components),i.createElement(c.Provider,{value:n},e.children)}}}]);