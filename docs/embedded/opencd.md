# openOCD

```c
// 先将时钟源选择为内部时钟
RCC_ClkInitStruct.ClockType = RCC_CLOCKTYPE_SYSCLK;
RCC_ClkInitStruct.SYSCLKSource = RCC_SYSCLKSOURCE_HSI;
if (HAL_RCC_ClockConfig(&RCC_ClkInitStruct, FLASH_LATENCY_5) != HAL_OK)
{
    Error_Handler();
}
```
