# 问题集合

## 1. 串口只能接收2个字符

### 问题描述

```c
static uint8_t rx_buf[20];
static uint32_t count = 0;

extern char s_psd[3];

void UsartTask(void *arg) {
    HAL_UART_Receive_IT(&huart1, rx_buf, 1);
    __HAL_TIM_SET_COUNTER(&htim7, 0);
    __HAL_TIM_CLEAR_IT(&htim7, TIM_IT_UPDATE);
    memset(rx_buf, 0, sizeof(rx_buf));
    while (1) {
        osSemaphoreAcquire(uartBinarySemHandle, osWaitForever);
        HAL_UART_Abort_IT(&huart1);
        debug("rx_buf:%s %lu\n", rx_buf, count);
        if (rx_buf[0] == s_psd[0] && rx_buf[1] == s_psd[1] && rx_buf[2] == s_psd[2]) {
            s_psd[0] = rx_buf[4];
            s_psd[1] = rx_buf[5];
            s_psd[2] = rx_buf[6];
            debug("passwd ok!\n");
        } else {
            debug("passwd error!\n");
        }
        HAL_UART_Receive_IT(&huart1, rx_buf, 1);
        memset(rx_buf, 0, sizeof(rx_buf));
        count = 0;
    }
}

void HAL_UART_RxCpltCallback(UART_HandleTypeDef *huart) {
    if (huart->Instance == USART1) {
        __HAL_TIM_SET_COUNTER(&htim7, 0);
        HAL_TIM_Base_Start_IT(&htim7);
		
        printf("123\n");
        count++;
        HAL_UART_Receive_IT(huart, rx_buf + count, 1);
    }
}

uint8_t tim7count = 0;

void UartCallback(void) {
    tim7count++;
    if (tim7count >= 1) {
        tim7count = 0;
        HAL_TIM_Base_Stop_IT(&htim7);
        __HAL_TIM_CLEAR_IT(&htim7, TIM_IT_UPDATE);
        __HAL_TIM_SET_COUNTER(&htim7, 0);
        osSemaphoreRelease(uartBinarySemHandle);
    }
}
```

### 问题分析

1. 可能在中断中使用了`printf`

### 解决方案

去掉接收中断中的`printf`

```c
void HAL_UART_RxCpltCallback(UART_HandleTypeDef *huart) {
    if (huart->Instance == USART1) {
        __HAL_TIM_SET_COUNTER(&htim7, 0);
        HAL_TIM_Base_Start_IT(&htim7);
		
        // 去掉
        // printf("123\n");
        count++;
        HAL_UART_Receive_IT(huart, rx_buf + count, 1);
    }
}
```

## 2. openOCD调试STMF4系列无法进入调试

### 问题描述

### 问题分析

### 解决方案

```c
// 先将时钟源选择为内部时钟
RCC_ClkInitStruct.ClockType = RCC_CLOCKTYPE_SYSCLK;
RCC_ClkInitStruct.SYSCLKSource = RCC_SYSCLKSOURCE_HSI;
if (HAL_RCC_ClockConfig(&RCC_ClkInitStruct, FLASH_LATENCY_5) != HAL_OK)
{
    Error_Handler();
}
```
