"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[8130],{7735:n=>{n.exports=JSON.parse('{"archive":{"blogPosts":[{"id":"welcome","metadata":{"permalink":"/blog/welcome","source":"@site/blog/2024/07-08-wecome.md","title":"Welcome","description":"\u6b22\u8fce\u6765\u5230\uff0c\u6211\u7684\u535a\u5ba2","date":"2024-07-08T00:00:00.000Z","tags":[{"inline":false,"label":"Hello","permalink":"/blog/tags/hello","description":"Hello tag description"}],"readingTime":0.265,"hasTruncateMarker":false,"authors":[],"frontMatter":{"slug":"welcome","title":"Welcome","tags":["hello"]},"unlisted":false,"nextItem":{"title":"AC6\u4e32\u53e3\u91cd\u5b9a\u5411","permalink":"/blog/2022/08/01/keil_\u4e32\u53e3\u91cd\u5b9a\u5411"}},"content":"\u6b22\u8fce\u6765\u5230\uff0c\u6211\u7684\u535a\u5ba2\\n\\n\u6211\u4f1a\u5206\u4eab\u6211\u7684\u5f00\u53d1\u548c\u5b66\u4e60\u5fc3\u5f97\uff0c\u5e0c\u671b\u53ef\u4ee5\u5e2e\u52a9\u5230\u4f60\u3002\\n\\n---\\n\\n\u6784\u5efa\u5386\u7a0b\\n\\n- 2022\u5e74\u4f7f\u7528[mkdocs](https://www.mkdocs.org/)\u6784\u5efa\\n- 2024\u5e747\u67088\u65e5\uff0c\u8fc1\u79fb\u5230 [**Docusaurus 3**](https://docusaurus.io/) \u642d\u5efa\u3002"},{"id":"/2022/08/01/keil_\u4e32\u53e3\u91cd\u5b9a\u5411","metadata":{"permalink":"/blog/2022/08/01/keil_\u4e32\u53e3\u91cd\u5b9a\u5411","source":"@site/blog/2022/08-01-keil_\u4e32\u53e3\u91cd\u5b9a\u5411.md","title":"AC6\u4e32\u53e3\u91cd\u5b9a\u5411","description":"1.\u4e32\u53e3\u91cd\u5b9a\u4e49\uff0cAC6\u548cAC5\u6709\u6240\u4e0d\u540c\u3002\u76f4\u63a5\u8d34\u51fa\u5199\u597d\u7684\u4ee3\u7801\uff0c\u4e0d\u4f7f\u7528miscoLib","date":"2022-08-01T00:00:00.000Z","tags":[{"inline":false,"label":"\u5d4c\u5165\u5f0f","permalink":"/blog/tags/embedded","description":"\u5d4c\u5165\u5f0f\u6807\u7b7e\u63cf\u8ff0"}],"readingTime":1.395,"hasTruncateMarker":false,"authors":[],"frontMatter":{"title":"AC6\u4e32\u53e3\u91cd\u5b9a\u5411","tags":["em"]},"unlisted":false,"prevItem":{"title":"Welcome","permalink":"/blog/welcome"},"nextItem":{"title":"\u4f7f\u7528Clion\u4f18\u96c5\u7684\u5f00\u53d1\u5d4c\u5165\u5f0f","permalink":"/blog/2022/04/16/\u4f7f\u7528Clion\u4f18\u96c5\u7684\u5f00\u53d1\u5d4c\u5165\u5f0f"}},"content":"1.\u4e32\u53e3\u91cd\u5b9a\u4e49\uff0cAC6\u548cAC5\u6709\u6240\u4e0d\u540c\u3002\u76f4\u63a5\u8d34\u51fa\u5199\u597d\u7684\u4ee3\u7801\uff0c\u4e0d\u4f7f\u7528miscoLib\\n\\n```C\\n#define AC6_ENABLE\\n#ifdef AC6_ENABLE\\n//\u52a0\u5165\u4ee5\u4e0b\u4ee3\u7801,\u652f\u6301printf\u51fd\u6570,\u800c\u4e0d\u9700\u8981\u9009\u62e9use MicroLIB\\t\\n__ASM (\\".global __use_no_semihosting\\");      \\n#else                                                       //AC5_ENABLE\\n//#define PUTCHAR_PROTOTYPE int fputc(int ch, FILE *f)\\t\\n#pragma import(__use_no_semihosting)             \\n//\u6807\u51c6\u5e93\u9700\u8981\u7684\u652f\u6301\u51fd\u6570                 \\nstruct __FILE \\n{ \\n\\tint handle; \\n}; \\n#endif\\n\\nFILE __stdout;       \\n//\u5b9a\u4e49_sys_exit()\u4ee5\u907f\u514d\u4f7f\u7528\u534a\u4e3b\u673a\u6a21\u5f0f    \\nvoid _sys_exit(int x) \\n{ \\n\\tx = x; \\n} \\n//\u91cd\u5b9a\u4e49fputc\u51fd\u6570 \\nint fputc(int ch, FILE *f)\\n{ \\t\\n\\twhile((USART1->SR&0X40)==0);//\u5faa\u73af\u53d1\u9001,\u76f4\u5230\u53d1\u9001\u5b8c\u6bd5   \\n\\tUSART1->DR = (u8) ch;      \\n\\treturn ch;\\n}\\n```\\n\\n2.\u79fb\u690dLWIP\u7684\u65f6\u5019\uff0c\u76f4\u63a5\u62a5\u9519\uff0c\u627e\u4e0d\u5230sys_timeout()\u51fd\u6570\u3002\u8fd9\u91cc\u9700\u8981\u4fee\u6539\u4e24\u4e2a\u5730\u65b9\uff0c\u9996\u5148\u5728LwIP\\\\system\\\\arch\\\\CC.h\u6587\u4ef6\u4e2d\uff0c\u6ce8\u91ca\u6389\u4ee5\u4e0b\u4e24\u6761\uff0c\u5982\u679c\u4f7f\u7528cubemx\u751f\u6210\uff0c\u5219\u6bcf\u6b21\u751f\u6210\u65f6\uff0c\u90fd\u9700\u8981\u628a\u8fd9\u91cc\u6ce8\u91ca\u3002\\n\\n```c\\n#define LWIP_PROVIDE_ERRNO\\n\\n#if defined (__GNUC__) & !defined (__CC_ARM)\\n\\n//#define LWIP_TIMEVAL_PRIVATE 0\\n//#include <sys/time.h>\\n\\n#endif\\n```\\n\\n\u5176\u6b21\uff0c\u5728lwip.h\u4e2d\uff0c\u9700\u8981\u6dfb\u52a0\u4e00\u4e2a\u5b8f\u5b9a\u4e49 #define __CC_ARM\\n\\n```c\\n/* Includes for RTOS ---------------------------------------------------------*/\\n#if WITH_RTOS\\n#include \\"lwip/tcpip.h\\"\\n#endif /* WITH_RTOS */\\n\\n/* USER CODE BEGIN 0 */\\n#define __CC_ARM          //AC6\u7f16\u8bd1\u5668\u624d\u6dfb\u52a0\u7684\u5b8f\u5b9a\u4e49\\n/* USER CODE END 0 */\\n\\n/* Global Variables ----------------------------------------------------------*/\\nextern ETH_HandleTypeDef heth;\\n```"},{"id":"/2022/04/16/\u4f7f\u7528Clion\u4f18\u96c5\u7684\u5f00\u53d1\u5d4c\u5165\u5f0f","metadata":{"permalink":"/blog/2022/04/16/\u4f7f\u7528Clion\u4f18\u96c5\u7684\u5f00\u53d1\u5d4c\u5165\u5f0f","source":"@site/blog/2022/04-16-\u4f7f\u7528Clion\u4f18\u96c5\u7684\u5f00\u53d1\u5d4c\u5165\u5f0f.md","title":"\u4f7f\u7528Clion\u4f18\u96c5\u7684\u5f00\u53d1\u5d4c\u5165\u5f0f","description":"\u9700\u8981\u7684\u73af\u5883","date":"2022-04-16T00:00:00.000Z","tags":[{"inline":false,"label":"\u5d4c\u5165\u5f0f","permalink":"/blog/tags/embedded","description":"\u5d4c\u5165\u5f0f\u6807\u7b7e\u63cf\u8ff0"}],"readingTime":1.98,"hasTruncateMarker":false,"authors":[],"frontMatter":{"tags":["em"]},"unlisted":false,"prevItem":{"title":"AC6\u4e32\u53e3\u91cd\u5b9a\u5411","permalink":"/blog/2022/08/01/keil_\u4e32\u53e3\u91cd\u5b9a\u5411"},"nextItem":{"title":"python\u5b9e\u73b0\u535a\u5ba2\u7684\u81ea\u52a8\u66f4\u65b0","permalink":"/blog/2022/04/12/git\u81ea\u52a8\u5316\u90e8\u7f72"}},"content":"\u9700\u8981\u7684\u73af\u5883\\n\\n- gcc-arm-none-eabi\uff08\u7f16\u8bd1\u4ee3\u7801\u751f\u6210\u4e0b\u8f7d\u56fa\u4ef6\uff09\\n- OpenOCD\uff08\u4e0b\u8f7d\u56fa\u4ef6\uff09\\n- STM32CubeMX\uff08\u751f\u6210\u521d\u59cb\u4ee3\u7801\uff09\\n\\n# \u914d\u7f6e\u73af\u5883\\n\\nhttps://pic2.zhimg.com/80/v2-1f20aa45b28606d1ac2d49e752465b75_1440w.webp\\n\\n1.\u4e0b\u8f7dgcc-arm-none-eabi\\n\\n\u5b98\u7f51\u5730\u5740\uff1ahttps://developer.arm.com/tools-and-software/open-source-software/developer-tools/gnu-toolchain/gnu-rm/downloads\\n\\n\u5b98\u65b9\u4e0b\u8f7d\u94fe\u63a5\uff1ahttps://developer.arm.com/-/media/Files/downloads/gnu-rm/10.3-2021.10/gcc-arm-none-eabi-10.3-2021.10-win32.zip\\n\\n\u7f51\u76d8\u5730\u5740\uff1a\\n\\n2.\u4e0b\u8f7dOpenOCD\\n\\n\u4e0b\u8f7d\u7ad9\u5730\u5740\uff1a[Download OpenOCD for Windows (gnutoolchains.com)](https://gnutoolchains.com/arm-eabi/openocd/)\\n\\n\u4e0b\u8f7d\u8fde\u63a5\uff1ahttps://sysprogs.com/getfile/1748/openocd-20211118.7z\\n\\n\u7f51\u76d8\u5730\u5740\uff1a\\n\\n3.\u4e0b\u8f7dSTM32CubeMX\\n\\n\u5b98\u7f51\u5730\u5740\uff1a[STM32CubeMX - STM32Cube\u521d\u59cb\u5316\u4ee3\u7801\u751f\u6210\u5668 - STMicroelectronics](https://www.st.com/zh/development-tools/stm32cubemx.html)\\n\\n\u7f51\u76d8\u5730\u5740\uff1a\\n\\n4.\u5c06gcc-arm-none-eabi\u3001OpenOCD\u52a0\u5165\u73af\u5883\u53d8\u91cf\\n\\n# \u4e0b\u8f7dClion\\n\\n1.\u5b98\u7f51\u4e0b\u8f7dclion[\u4e0b\u8f7d\u5730\u5740](https://www.jetbrains.com/zh-cn/clion/download/download-thanks.html?platform=windows)\\n\\n![image-20220416161329445](http://picture.luckstare.ltd/202204161613607.png)\\n\\n2.\u5b89\u88c5clion\\n\\n3.\u542f\u52a8clion\u5b89\u88c5\u4e2d\u6587\u63d2\u4ef6\\n\\n![image-20220416161557930](http://picture.luckstare.ltd/202204161615000.png)\\n\\n\u9009\u62e9**\u7ea2\u8272**\u6846\u6846\u7684\u90a3\u4e2a\\n\\n\u5b89\u88c5\u597d\u540e\uff0c\u9700\u8981\u91cd\u542fIDE\\n\\n# \u4f7f\u7528clion\u70b9\u4eae\u4e00\u4e2a\u706f\\n\\n1.\u4f7f\u7528stm32cubx\u521d\u59cb\u5316\u4ee3\u7801\uff08\u8fd9\u91cc\u4f7f\u7528stm32f103c8\u4f5c\u4e3a\u793a\u4f8b\uff09\\n\\n\u5982\u4f55\u4f7f\u7528stm32cubx\u5c31\u4e0d\u5728\u8fd9\u91cc\u6f14\u793a\u4e86\\n\\n\u53ea\u8d34\u51fa\u6ce8\u610f\u4e8b\u4ef6\\n\\n![image-20220416162251433](http://picture.luckstare.ltd/202204161622566.png)\\n\\n2.\u4f7f\u7528clion\u6253\u5f00\\n\\n![image-20220416162739822](http://picture.luckstare.ltd/202204161627880.png)\\n\\n\u6253\u5f00\u5de5\u7a0b\\n\\n![image-20220416162837724](http://picture.luckstare.ltd/202204161628785.png)\\n\\n\u70b9\u51fb\u786e\u5b9a\\n\\n![image-20220416162902543](http://picture.luckstare.ltd/202204161629664.png)\\n\\n\u7136\u540e\u5c31\u548c\u666e\u901a\u7684\u5d4c\u5165\u5f0f\u5f00\u53d1\u5dee\u4e0d\u591a\u4e86\\n\\n\u6211\u4eec\u5728\u8fd9\u91cc\u7b80\u5355\u7684\u5199\u4e2a\u95ea\u70c1\u706f\u7684\u7a0b\u5e8f\\n\\n![image-20220416165808011](http://picture.luckstare.ltd/202204161658148.png)\\n\\n\u70b9\u51fb\u90a3\u4e2a\u5c0f\u9524\u5b50\u7684\u6309\u94ae\u5c31\u53ef\u4ee5\u7f16\u8bd1\u4e86\\n\\n![image-20220416165821499](http://picture.luckstare.ltd/202204161658629.png)\\n\\n\u7f16\u8bd1\u6210\u529f\uff0c\u663e\u793a\u76ee\u6807\u6587\u4ef6\u5927\u5c0f\\n\\n![image-20220416165914704](http://picture.luckstare.ltd/202204161659831.png)\\n\\n3.\u4e0b\u8f7d\u5230\u5f00\u53d1\u677f\u4e0a\\n\\n\u7f16\u8f91\u9762\u677f\u914d\u7f6e\u6587\u4ef6\\n\\n\u5728\u9879\u76ee\u76ee\u5f55\u4e0b\u521b\u5efa\u4e00\u4e2a\u4ee5.cfg\u4e3a\u540e\u7f00\u7684\u6587\u4ef6\\n\\n\u6253\u5f00\u540e\uff0c\u5199OpenOCD\u914d\u7f6e\u6587\u4ef6\uff0c\u5728\u8fd9\u91cc\u7ed9\u51fa\u4f7f\u7528stlink\u7684\u914d\u7f6e\u6587\u4ef6\\n\\n```\\nsource [find interface/stlink-v2.cfg]\\ntransport select hla_swd\\nsource [find target/stm32f1.cfg]\\nreset_config none\\n```\\n\\n\u7f16\u8f91\u8fd0\u884c\u914d\u7f6e\\n\\n![image-20220416170052565](http://picture.luckstare.ltd/202204161700693.png)\\n\\n![image-20220416171544870](http://picture.luckstare.ltd/202204161715940.png)\\n\\n![image-20220416171514450](http://picture.luckstare.ltd/202204161715541.png)\\n\\n\u9009\u62e9\u4e0b\u8f7d\u7684\u56fa\u4ef6\\n\\n![image-20220416172304345](http://picture.luckstare.ltd/202204161723424.png)\\n\\n\u70b9\u51fb\u53f3\u4e0a\u89d2\u7684\u5c0f\u4e09\u89d2\u5373\u53ef\u4e0b\u8f7d\u56fa\u4ef6\\n\\n\u4e0b\u8f7d\u6210\u529f\u4f1a\u63d0\u793a\u4e0b\u8f7d\u6210\u529f"},{"id":"/2022/04/12/git\u81ea\u52a8\u5316\u90e8\u7f72","metadata":{"permalink":"/blog/2022/04/12/git\u81ea\u52a8\u5316\u90e8\u7f72","source":"@site/blog/2022/04-12-git\u81ea\u52a8\u5316\u90e8\u7f72.md","title":"python\u5b9e\u73b0\u535a\u5ba2\u7684\u81ea\u52a8\u66f4\u65b0","description":"1.\u51c6\u5907python\u6587\u4ef6","date":"2022-04-12T00:00:00.000Z","tags":[{"inline":false,"label":"Python","permalink":"/blog/tags/python","description":"python tag description"}],"readingTime":0.91,"hasTruncateMarker":false,"authors":[],"frontMatter":{"title":"python\u5b9e\u73b0\u535a\u5ba2\u7684\u81ea\u52a8\u66f4\u65b0","tags":["python"]},"unlisted":false,"prevItem":{"title":"\u4f7f\u7528Clion\u4f18\u96c5\u7684\u5f00\u53d1\u5d4c\u5165\u5f0f","permalink":"/blog/2022/04/16/\u4f7f\u7528Clion\u4f18\u96c5\u7684\u5f00\u53d1\u5d4c\u5165\u5f0f"}},"content":"## 1.\u51c6\u5907python\u6587\u4ef6\\n\\n```python\\nfrom calendar import c\\nimport http\\nfrom subprocess import getoutput\\nimport requests\\nimport time\\n\\nprint(time.strftime(\'%Y-%m-%d %H:%M:%S\',time.localtime(time.time())))\\n\\ndebug = getoutput(\\"cd /www/wwwroot/wiki.paopaozhiiot.cn\\")\\ndebug = getoutput(\\"ls -l\\")\\n\\ncommit_local = getoutput(\\"git log\\")\\ncommit_local = commit_local.split()\\ncommit_local = commit_local[1]\\nprint(commit_local)\\n\\n\\nurl = \\"https://gitee.com/api/v5/repos/paopaozhi/paopaozhi/branches/main?\\"\\n\\ndata = {\\n    \\"access_token\\":\\"c0082ee42eb4ef916bd44a1d0179ef81\\"\\n}\\n\\nr = requests.get(url=url,params=data)\\nr = r.json()\\ncommit_far = r[\\"commit\\"][\\"sha\\"]\\nprint(commit_far)\\n\\nif commit_far == commit_local:\\n    print(\\"\u65e0\u66f4\u65b0\uff01\\")\\nelse:\\n    ii = getoutput(\\"git pull gitee\\")\\n    print(ii)\\n```\\n\\n## 2.\u542f\u52a8cron\u670d\u52a1\\n\\n## 3.\u4f7f\u7528crontab -e \u7f16\u8f91\u5b9a\u65f6\u4efb\u52a1\\n\\n\u5728\u6587\u4ef6\u5c3e\u90e8\u6dfb\u52a0\\n\\n```sh\\n* * * * * <\u89e3\u91ca\u5668\u8def\u5f84> <\u811a\u672c\u6587\u4ef6\u8def\u5f84> >>  <\u91cd\u5b9a\u5411\u65e5\u5fd7\u8def\u5f84>\\n```\\n\\n- \u7b2c\u4e00\u6b21\u4f7f\u7528\u4f1a\u8ba9\u4f60\u9009\u62e9\u4f7f\u7528\u7684\u7f16\u8f91\u5668\\n\\n## 4.\u91cd\u542fcron service\\n\\n```sh\\nsudo service cron restart  \\n```\\n\\n## 5.\u901a\u8fc7\u67e5\u770b\u65e5\u5fd7\u4e86\u89e3\u7a0b\u5e8f\u8fd0\u884c\u60c5\u51b5\\n\\n```sh\\nvim <\u91cd\u5b9a\u5411\u65e5\u5fd7\u8def\u5f84>\\n```\\n\\n![Alt text](figures/202204122104385.png)"}]}}')}}]);