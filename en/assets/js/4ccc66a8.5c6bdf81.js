"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[5201],{9151:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>c,contentTitle:()=>d,default:()=>a,frontMatter:()=>s,metadata:()=>_,toc:()=>l});var r=t(4848),i=t(8453);const s={},d="\u95ee\u9898\u96c6\u5408",_={id:"embedded/issue",title:"\u95ee\u9898\u96c6\u5408",description:"1. \u4e32\u53e3\u53ea\u80fd\u63a5\u65362\u4e2a\u5b57\u7b26",source:"@site/docs/embedded/issue.md",sourceDirName:"embedded",slug:"/embedded/issue",permalink:"/en/docs/embedded/issue",draft:!1,unlisted:!1,tags:[],version:"current",lastUpdatedAt:1720432761e3,frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"\u5f02\u6b65\u901a\u8baf\u63a5\u53e3",permalink:"/en/docs/embedded/stm32/uart"},next:{title:"FOC\u7535\u673a\u63a7\u5236",permalink:"/en/docs/embedded/lite-foc"}},c={},l=[{value:"1. \u4e32\u53e3\u53ea\u80fd\u63a5\u65362\u4e2a\u5b57\u7b26",id:"1-\u4e32\u53e3\u53ea\u80fd\u63a5\u65362\u4e2a\u5b57\u7b26",level:2},{value:"\u95ee\u9898\u63cf\u8ff0",id:"\u95ee\u9898\u63cf\u8ff0",level:3},{value:"\u95ee\u9898\u5206\u6790",id:"\u95ee\u9898\u5206\u6790",level:3},{value:"\u89e3\u51b3\u65b9\u6848",id:"\u89e3\u51b3\u65b9\u6848",level:3},{value:"2. openOCD\u8c03\u8bd5STMF4\u7cfb\u5217\u65e0\u6cd5\u8fdb\u5165\u8c03\u8bd5",id:"2-openocd\u8c03\u8bd5stmf4\u7cfb\u5217\u65e0\u6cd5\u8fdb\u5165\u8c03\u8bd5",level:2},{value:"\u95ee\u9898\u63cf\u8ff0",id:"\u95ee\u9898\u63cf\u8ff0-1",level:3},{value:"\u95ee\u9898\u5206\u6790",id:"\u95ee\u9898\u5206\u6790-1",level:3},{value:"\u89e3\u51b3\u65b9\u6848",id:"\u89e3\u51b3\u65b9\u6848-1",level:3}];function o(e){const n={code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",ol:"ol",p:"p",pre:"pre",...(0,i.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(n.h1,{id:"\u95ee\u9898\u96c6\u5408",children:"\u95ee\u9898\u96c6\u5408"}),"\n",(0,r.jsx)(n.h2,{id:"1-\u4e32\u53e3\u53ea\u80fd\u63a5\u65362\u4e2a\u5b57\u7b26",children:"1. \u4e32\u53e3\u53ea\u80fd\u63a5\u65362\u4e2a\u5b57\u7b26"}),"\n",(0,r.jsx)(n.h3,{id:"\u95ee\u9898\u63cf\u8ff0",children:"\u95ee\u9898\u63cf\u8ff0"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-c",children:'static uint8_t rx_buf[20];\nstatic uint32_t count = 0;\n\nextern char s_psd[3];\n\nvoid UsartTask(void *arg) {\n    HAL_UART_Receive_IT(&huart1, rx_buf, 1);\n    __HAL_TIM_SET_COUNTER(&htim7, 0);\n    __HAL_TIM_CLEAR_IT(&htim7, TIM_IT_UPDATE);\n    memset(rx_buf, 0, sizeof(rx_buf));\n    while (1) {\n        osSemaphoreAcquire(uartBinarySemHandle, osWaitForever);\n        HAL_UART_Abort_IT(&huart1);\n        debug("rx_buf:%s %lu\\n", rx_buf, count);\n        if (rx_buf[0] == s_psd[0] && rx_buf[1] == s_psd[1] && rx_buf[2] == s_psd[2]) {\n            s_psd[0] = rx_buf[4];\n            s_psd[1] = rx_buf[5];\n            s_psd[2] = rx_buf[6];\n            debug("passwd ok!\\n");\n        } else {\n            debug("passwd error!\\n");\n        }\n        HAL_UART_Receive_IT(&huart1, rx_buf, 1);\n        memset(rx_buf, 0, sizeof(rx_buf));\n        count = 0;\n    }\n}\n\nvoid HAL_UART_RxCpltCallback(UART_HandleTypeDef *huart) {\n    if (huart->Instance == USART1) {\n        __HAL_TIM_SET_COUNTER(&htim7, 0);\n        HAL_TIM_Base_Start_IT(&htim7);\n\t\t\n        printf("123\\n");\n        count++;\n        HAL_UART_Receive_IT(huart, rx_buf + count, 1);\n    }\n}\n\nuint8_t tim7count = 0;\n\nvoid UartCallback(void) {\n    tim7count++;\n    if (tim7count >= 1) {\n        tim7count = 0;\n        HAL_TIM_Base_Stop_IT(&htim7);\n        __HAL_TIM_CLEAR_IT(&htim7, TIM_IT_UPDATE);\n        __HAL_TIM_SET_COUNTER(&htim7, 0);\n        osSemaphoreRelease(uartBinarySemHandle);\n    }\n}\n'})}),"\n",(0,r.jsx)(n.h3,{id:"\u95ee\u9898\u5206\u6790",children:"\u95ee\u9898\u5206\u6790"}),"\n",(0,r.jsxs)(n.ol,{children:["\n",(0,r.jsxs)(n.li,{children:["\u53ef\u80fd\u5728\u4e2d\u65ad\u4e2d\u4f7f\u7528\u4e86",(0,r.jsx)(n.code,{children:"printf"})]}),"\n"]}),"\n",(0,r.jsx)(n.h3,{id:"\u89e3\u51b3\u65b9\u6848",children:"\u89e3\u51b3\u65b9\u6848"}),"\n",(0,r.jsxs)(n.p,{children:["\u53bb\u6389\u63a5\u6536\u4e2d\u65ad\u4e2d\u7684",(0,r.jsx)(n.code,{children:"printf"})]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-c",children:'void HAL_UART_RxCpltCallback(UART_HandleTypeDef *huart) {\n    if (huart->Instance == USART1) {\n        __HAL_TIM_SET_COUNTER(&htim7, 0);\n        HAL_TIM_Base_Start_IT(&htim7);\n\t\t\n        // \u53bb\u6389\n        // printf("123\\n");\n        count++;\n        HAL_UART_Receive_IT(huart, rx_buf + count, 1);\n    }\n}\n'})}),"\n",(0,r.jsx)(n.h2,{id:"2-openocd\u8c03\u8bd5stmf4\u7cfb\u5217\u65e0\u6cd5\u8fdb\u5165\u8c03\u8bd5",children:"2. openOCD\u8c03\u8bd5STMF4\u7cfb\u5217\u65e0\u6cd5\u8fdb\u5165\u8c03\u8bd5"}),"\n",(0,r.jsx)(n.h3,{id:"\u95ee\u9898\u63cf\u8ff0-1",children:"\u95ee\u9898\u63cf\u8ff0"}),"\n",(0,r.jsx)(n.h3,{id:"\u95ee\u9898\u5206\u6790-1",children:"\u95ee\u9898\u5206\u6790"}),"\n",(0,r.jsx)(n.h3,{id:"\u89e3\u51b3\u65b9\u6848-1",children:"\u89e3\u51b3\u65b9\u6848"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-c",children:"// \u5148\u5c06\u65f6\u949f\u6e90\u9009\u62e9\u4e3a\u5185\u90e8\u65f6\u949f\nRCC_ClkInitStruct.ClockType = RCC_CLOCKTYPE_SYSCLK;\nRCC_ClkInitStruct.SYSCLKSource = RCC_SYSCLKSOURCE_HSI;\nif (HAL_RCC_ClockConfig(&RCC_ClkInitStruct, FLASH_LATENCY_5) != HAL_OK)\n{\n    Error_Handler();\n}\n"})})]})}function a(e={}){const{wrapper:n}={...(0,i.R)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(o,{...e})}):o(e)}},8453:(e,n,t)=>{t.d(n,{R:()=>d,x:()=>_});var r=t(6540);const i={},s=r.createContext(i);function d(e){const n=r.useContext(s);return r.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function _(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:d(e.components),r.createElement(s.Provider,{value:n},e.children)}}}]);