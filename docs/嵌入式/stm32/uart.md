# 异步通讯接口

## 各种平台`printf`重定向

- arm-gcc

  ```c
  int _write(int fd, char *pBuffer, int size) {
      for (int i = 0; i < size; i++) {
          while ((USART1->ISR & 0X40) == 0);        //等待上一次串口数据发送完成
          USART1->TDR = (uint8_t) pBuffer[i];       //写DR,串口1将发送数据
      }
      return size;
  }
  ```

- keil5

  ```c
  
  ```

- keil6-arm