1.串口重定义，AC6和AC5有所不同。直接贴出写好的代码，不使用miscoLib

```C
#define AC6_ENABLE
#ifdef AC6_ENABLE
//加入以下代码,支持printf函数,而不需要选择use MicroLIB	
__ASM (".global __use_no_semihosting");      
#else                                                       //AC5_ENABLE
//#define PUTCHAR_PROTOTYPE int fputc(int ch, FILE *f)	
#pragma import(__use_no_semihosting)             
//标准库需要的支持函数                 
struct __FILE 
{ 
	int handle; 
}; 
#endif

FILE __stdout;       
//定义_sys_exit()以避免使用半主机模式    
void _sys_exit(int x) 
{ 
	x = x; 
} 
//重定义fputc函数 
int fputc(int ch, FILE *f)
{ 	
	while((USART1->SR&0X40)==0);//循环发送,直到发送完毕   
	USART1->DR = (u8) ch;      
	return ch;
}
```

2.移植LWIP的时候，直接报错，找不到sys_timeout()函数。这里需要修改两个地方，首先在LwIP\system\arch\CC.h文件中，注释掉以下两条，如果使用cubemx生成，则每次生成时，都需要把这里注释。

```c
#define LWIP_PROVIDE_ERRNO

#if defined (__GNUC__) & !defined (__CC_ARM)

//#define LWIP_TIMEVAL_PRIVATE 0
//#include <sys/time.h>

#endif
```

其次，在lwip.h中，需要添加一个宏定义 #define __CC_ARM

```c
/* Includes for RTOS ---------------------------------------------------------*/
#if WITH_RTOS
#include "lwip/tcpip.h"
#endif /* WITH_RTOS */

/* USER CODE BEGIN 0 */
#define __CC_ARM          //AC6编译器才添加的宏定义
/* USER CODE END 0 */

/* Global Variables ----------------------------------------------------------*/
extern ETH_HandleTypeDef heth;
```

