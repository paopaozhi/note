# CMSIS-RTOS-2 接口

- 内核信息与控制
    - [osKernelGetInfo](https://arm-software.github.io/CMSIS_5/RTOS2/html/group__CMSIS__RTOS__KernelCtrl.html#ga6f7764e7250c5c5364c00c45a5d1d199) ：获取 RTOS 内核信息。
    - [osKernelGetState](https://arm-software.github.io/CMSIS_5/RTOS2/html/group__CMSIS__RTOS__KernelCtrl.html#ga48b69b81012fce051f639be288b243ba) ：获取当前 RTOS 内核状态。
    - [osKernelGetSysTimerCount](https://arm-software.github.io/CMSIS_5/RTOS2/html/group__CMSIS__RTOS__KernelCtrl.html#gae0fcaff6cecfb4013bb556c87afcd7d2) ：获取 RTOS 内核系统计时器计数。
    - [osKernelGetSysTimerFreq](https://arm-software.github.io/CMSIS_5/RTOS2/html/group__CMSIS__RTOS__KernelCtrl.html#ga4d69215a93220f72be3684cad582f16a) ：获取 RTOS 内核系统定时器频率。
    - [osKernelInitialize](https://arm-software.github.io/CMSIS_5/RTOS2/html/group__CMSIS__RTOS__KernelCtrl.html#gae818f6611d25ba3140bede410a52d659) ：初始化 RTOS 内核。
    - [osKernelLock](https://arm-software.github.io/CMSIS_5/RTOS2/html/group__CMSIS__RTOS__KernelCtrl.html#ga948609ee930d9b38336b9e1c2a4dfe12) ：锁定 RTOS 内核调度器。
    - [osKernelUnlock](https://arm-software.github.io/CMSIS_5/RTOS2/html/group__CMSIS__RTOS__KernelCtrl.html#gaf401728b4657456198c33fe75f8d6720)：解锁 RTOS 内核调度器。
    - [osKernelRestoreLock](https://arm-software.github.io/CMSIS_5/RTOS2/html/group__CMSIS__RTOS__KernelCtrl.html#gae7d0a71b9586cbbb49fcbdf6a04f0289) ：恢复 RTOS 内核调度程序锁定状态。
    - [osKernelResume](https://arm-software.github.io/CMSIS_5/RTOS2/html/group__CMSIS__RTOS__KernelCtrl.html#ga8c4b4d7ed34cab73c001665d9176aced) ：恢复 RTOS 内核调度器。
    - [osKernelStart](https://arm-software.github.io/CMSIS_5/RTOS2/html/group__CMSIS__RTOS__KernelCtrl.html#ga9ae2cc00f0d89d7b6a307bba942b5221) ：启动 RTOS 内核调度器。
    - [osKernelSuspend](https://arm-software.github.io/CMSIS_5/RTOS2/html/group__CMSIS__RTOS__KernelCtrl.html#gae26683e1606ec633354a2876c68f0c1f) ：暂停 RTOS 内核调度器。
    - [osKernelGetTickCount](https://arm-software.github.io/CMSIS_5/RTOS2/html/group__CMSIS__RTOS__KernelCtrl.html#ga84bcdbf2fb76b10c8df4e439f0c7e11b) ：获取 RTOS 内核滴答计数。
    - [osKernelGetTickFreq](https://arm-software.github.io/CMSIS_5/RTOS2/html/group__CMSIS__RTOS__KernelCtrl.html#ga7a8d7bd927eaaa58999f91d7d6310cee) ：获取 RTOS 内核滴答频率。
- 线程管理
    - [osThreadDetach](https://arm-software.github.io/CMSIS_5/RTOS2/html/group__CMSIS__RTOS__ThreadMgmt.html#gaaad14cd9547341ea8109dc4e8540f1dc) ：分离线程（线程终止时可以回收线程存储）。
    - [osThreadEnumerate](https://arm-software.github.io/CMSIS_5/RTOS2/html/group__CMSIS__RTOS__ThreadMgmt.html#ga5606604d56e21ece1a654664be877439) ：枚举活动线程。
    - [osThreadExit](https://arm-software.github.io/CMSIS_5/RTOS2/html/group__CMSIS__RTOS__ThreadMgmt.html#gaddaa452dd7610e4096647a566d3556fc) ：终止当前正在运行的线程的执行。
    - [osThreadGetCount](https://arm-software.github.io/CMSIS_5/RTOS2/html/group__CMSIS__RTOS__ThreadMgmt.html#ga495b3f812224e7301f23a691793765db) ：获取活动线程数。
    - [osThreadGetId](https://arm-software.github.io/CMSIS_5/RTOS2/html/group__CMSIS__RTOS__ThreadMgmt.html#ga8df03548e89fbc56402a5cd584a505da) ：返回当前正在运行的线程的线程 ID。
    - [osThreadGetName](https://arm-software.github.io/CMSIS_5/RTOS2/html/group__CMSIS__RTOS__ThreadMgmt.html#gac3230f3a55a297514b013ebf38f27e0a) ：获取线程的名称。
    - [osThreadGetPriority](https://arm-software.github.io/CMSIS_5/RTOS2/html/group__CMSIS__RTOS__ThreadMgmt.html#ga0aeaf349604f456e68e78f9d3b42e44b) ：获取线程的当前优先级。
    - [osThreadGetStackSize](https://arm-software.github.io/CMSIS_5/RTOS2/html/group__CMSIS__RTOS__ThreadMgmt.html#gab9f8bd715d671c6ee27644867bc1bf65) ：获取线程的堆栈大小。
    - [osThreadGetStackSpace](https://arm-software.github.io/CMSIS_5/RTOS2/html/group__CMSIS__RTOS__ThreadMgmt.html#ga9c83bd5dd8de329701775d6ef7012720) ：根据执行过程中的堆栈水印记录获取线程的可用堆栈空间。
    - [osThreadGetState](https://arm-software.github.io/CMSIS_5/RTOS2/html/group__CMSIS__RTOS__ThreadMgmt.html#gacc0a98b42f0a5928e12dc91dc76866b9) ：获取线程的当前线程状态。
    - [osThreadJoin](https://arm-software.github.io/CMSIS_5/RTOS2/html/group__CMSIS__RTOS__ThreadMgmt.html#ga3fca90fb0679afeb968aa8c3d5874487) ：等待指定的线程终止。
    - [osThreadNew](https://arm-software.github.io/CMSIS_5/RTOS2/html/group__CMSIS__RTOS__ThreadMgmt.html#ga48d68b8666d99d28fa646ee1d2182b8f) ：创建一个线程并将其添加到活动线程。
    - [osThreadResume](https://arm-software.github.io/CMSIS_5/RTOS2/html/group__CMSIS__RTOS__ThreadMgmt.html#ga3dbad90eff394b02de76a452c84c5d80) ：恢复线程的执行。
    - [osThreadSetPriority](https://arm-software.github.io/CMSIS_5/RTOS2/html/group__CMSIS__RTOS__ThreadMgmt.html#ga861a420fb2d643115b06622903fb3bfb) ：更改线程的优先级。
    - [osThreadSuspend](https://arm-software.github.io/CMSIS_5/RTOS2/html/group__CMSIS__RTOS__ThreadMgmt.html#gaa9de419d0152bf77e9bbcd1f369fb990) ：暂停线程的执行。
    - [osThreadTerminate](https://arm-software.github.io/CMSIS_5/RTOS2/html/group__CMSIS__RTOS__ThreadMgmt.html#ga2f8ba6dba6e9c065a6e236ffd410d74a) ：终止线程的执行。
    - [osThreadYield](https://arm-software.github.io/CMSIS_5/RTOS2/html/group__CMSIS__RTOS__ThreadMgmt.html#gad01c7ec26535b1de6b018bb9466720e2) ：将控制权传递给处于 **READY** 状态的下一个线程。
- 线程标志
    - [osThreadFlagsSet](https://arm-software.github.io/CMSIS_5/RTOS2/html/group__CMSIS__RTOS__ThreadFlagsMgmt.html#ga6f89ef9caded1d9963c7b12b0f6412c9) ：设置线程的指定线程标志。
    - [osThreadFlagsClear](https://arm-software.github.io/CMSIS_5/RTOS2/html/group__CMSIS__RTOS__ThreadFlagsMgmt.html#ga656abc1c862c5b9a2b13584c42cc0bfa) ：清除当前正在运行的线程的指定线程标志。
    - [osThreadFlagsGet](https://arm-software.github.io/CMSIS_5/RTOS2/html/group__CMSIS__RTOS__ThreadFlagsMgmt.html#ga85c8d2c89466e25abbcb545d9ddd71ba) ：获取当前正在运行的线程的当前线程标志。
    - [osThreadFlagsWait](https://arm-software.github.io/CMSIS_5/RTOS2/html/group__CMSIS__RTOS__ThreadFlagsMgmt.html#gac11542ad6300b600f872fc96e340ec2b) ：等待当前正在运行的线程的一个或多个线程标志发出信号。
- 事件标志
    - [osEventFlagsGetName](https://arm-software.github.io/CMSIS_5/RTOS2/html/group__CMSIS__RTOS__EventFlags.html#ga59f4ddf0ee8c395b1672bb978d1cfc88) ：获取事件标志对象的名称。
    - [osEventFlagsNew](https://arm-software.github.io/CMSIS_5/RTOS2/html/group__CMSIS__RTOS__EventFlags.html#gab14b1caeb12ffa42cce1bfe889cd07df) ：创建并初始化事件标志对象。
    - [osEventFlagsDelete](https://arm-software.github.io/CMSIS_5/RTOS2/html/group__CMSIS__RTOS__EventFlags.html#ga7c4acf2fb0d506ec82905dee53fb5435) ：删除事件标志对象。
    - [osEventFlagsSet](https://arm-software.github.io/CMSIS_5/RTOS2/html/group__CMSIS__RTOS__EventFlags.html#ga33b71d14cecf90b4e72639dd19f23a5e) ：设置指定的事件标志。
    - [osEventFlagsClear](https://arm-software.github.io/CMSIS_5/RTOS2/html/group__CMSIS__RTOS__EventFlags.html#ga93bf258ca0007c6641fbe8e4f2b8a1e5) ：清除指定的事件标志。
    - [osEventFlagsGet](https://arm-software.github.io/CMSIS_5/RTOS2/html/group__CMSIS__RTOS__EventFlags.html#ga8bda3185f46bfd278cea8a6cf357677d) ：获取当前事件标志。
    - [osEventFlagsWait](https://arm-software.github.io/CMSIS_5/RTOS2/html/group__CMSIS__RTOS__EventFlags.html#ga52acb34a8322e58020227344fe662b4e) ：等待一个或多个事件标志发出信号。
    - 通用等待函数
    - [osDelay](https://arm-software.github.io/CMSIS_5/RTOS2/html/group__CMSIS__RTOS__Wait.html#gaf6055a51390ef65b6b6edc28bf47322e) ：等待超时（时间延迟）。
    - [osDelayUntil](https://arm-software.github.io/CMSIS_5/RTOS2/html/group__CMSIS__RTOS__Wait.html#ga3c807924c2d6d43bc2ffb49da3f7f3a1) ：等待到指定时间。
- 定时器管理
    - [osTimerDelete](https://arm-software.github.io/CMSIS_5/RTOS2/html/group__CMSIS__RTOS__TimerMgmt.html#gad0001dd74721ab461789324806db2453) ：删除计时器。
    - [osTimerGetName](https://arm-software.github.io/CMSIS_5/RTOS2/html/group__CMSIS__RTOS__TimerMgmt.html#ga4f82a98eee4d9ea79507e44340d3d319) ：获取计时器的名称。
    - [osTimerIsRunning](https://arm-software.github.io/CMSIS_5/RTOS2/html/group__CMSIS__RTOS__TimerMgmt.html#ga69d3589f54194022c30dd01e45ec6741) ：检查计时器是否正在运行。
    - [osTimerNew](https://arm-software.github.io/CMSIS_5/RTOS2/html/group__CMSIS__RTOS__TimerMgmt.html#gad4e7f785c5f700a509f55a3bf6a62bec) ：创建并初始化计时器。
    - [osTimerStart](https://arm-software.github.io/CMSIS_5/RTOS2/html/group__CMSIS__RTOS__TimerMgmt.html#gab6ee2859ea657641b7adfac599b8121d) ：启动或重新启动计时器。
    - [osTimerStop](https://arm-software.github.io/CMSIS_5/RTOS2/html/group__CMSIS__RTOS__TimerMgmt.html#gabd7a89356da7717293eb0bc5d87b8ac9) ：停止计时器。
- 互斥管理
    - [osMutexAcquire](https://arm-software.github.io/CMSIS_5/RTOS2/html/group__CMSIS__RTOS__MutexMgmt.html#gabc54686ea0fc281823b1763422d2a924) ：获取互斥锁或超时（如果它被锁定）。
    - [osMutexDelete](https://arm-software.github.io/CMSIS_5/RTOS2/html/group__CMSIS__RTOS__MutexMgmt.html#gabee73ad227ba4587d3db12ef9bd582bc) ：删除互斥对象。
    - [osMutexGetName](https://arm-software.github.io/CMSIS_5/RTOS2/html/group__CMSIS__RTOS__MutexMgmt.html#ga00b5e58cd247a412d1afd18732d8b752) ：获取互斥对象的名称。
    - [osMutexGetOwner](https://arm-software.github.io/CMSIS_5/RTOS2/html/group__CMSIS__RTOS__MutexMgmt.html#ga7f9a7666df0978738cd570cb700b83fb) ：获取拥有 Mutex 对象的线程。
    - [osMutexNew](https://arm-software.github.io/CMSIS_5/RTOS2/html/group__CMSIS__RTOS__MutexMgmt.html#gab90920022ab944296821368ef6bb52f8) ：创建并初始化互斥对象。
    - [osMutexRelease](https://arm-software.github.io/CMSIS_5/RTOS2/html/group__CMSIS__RTOS__MutexMgmt.html#gaea629705703580ff58776bf73c8db915) ：释放被 [osMutexAcquire](https://arm-software.github.io/CMSIS_5/RTOS2/html/group__CMSIS__RTOS__MutexMgmt.html#gabc54686ea0fc281823b1763422d2a924) 获取的互斥锁。
- 信号灯
    - [osSemaphoreAcquire](https://arm-software.github.io/CMSIS_5/RTOS2/html/group__CMSIS__RTOS__SemaphoreMgmt.html#ga7e94c8b242a0c81f2cc79ec22895c87b) ：获取信号量令牌，如果没有可用的令牌，则超时。
    - [osSemaphoreDelete](https://arm-software.github.io/CMSIS_5/RTOS2/html/group__CMSIS__RTOS__SemaphoreMgmt.html#ga81258ce9c67fa89f07cc49d2e136cd88) ：删除信号量对象。
    - [osSemaphoreGetCount](https://arm-software.github.io/CMSIS_5/RTOS2/html/group__CMSIS__RTOS__SemaphoreMgmt.html#ga7559d4dff3cda9992fc5ab5de3e74c70) ：获取当前信号量令牌计数。
    - [osSemaphoreGetName](https://arm-software.github.io/CMSIS_5/RTOS2/html/group__CMSIS__RTOS__SemaphoreMgmt.html#ga9586952051f00285f1482dbe6695bbc4) ：获取信号量对象的名称。
    - [osSemaphoreNew](https://arm-software.github.io/CMSIS_5/RTOS2/html/group__CMSIS__RTOS__SemaphoreMgmt.html#ga2a39806ace781a0008a4374ca701b14a) ：创建并初始化一个信号量对象。
    - [osSemaphoreRelease](https://arm-software.github.io/CMSIS_5/RTOS2/html/group__CMSIS__RTOS__SemaphoreMgmt.html#ga0abcee1b5449d7a6928fb9248c690bb6) ：释放信号量令牌，直至达到初始最大计数。
- 内存池
    - [osMemoryPoolAlloc](https://arm-software.github.io/CMSIS_5/RTOS2/html/group__CMSIS__RTOS__PoolMgmt.html#ga8ead54e99ccb8f112356c88f99d38fbe) ：从内存池中分配内存块。
    - [osMemoryPoolDelete](https://arm-software.github.io/CMSIS_5/RTOS2/html/group__CMSIS__RTOS__PoolMgmt.html#ga8c39e7e5cd2b9eda907466808e59d62e) ：删除内存池对象。
    - [osMemoryPoolFree](https://arm-software.github.io/CMSIS_5/RTOS2/html/group__CMSIS__RTOS__PoolMgmt.html#gabb4f4560daa6d1f8c8789082ee186d16) ：将分配的内存块返回到内存池。
    - [osMemoryPoolGetBlockSize](https://arm-software.github.io/CMSIS_5/RTOS2/html/group__CMSIS__RTOS__PoolMgmt.html#gab2bf059b7fa7679c3cccdaeec60b6c0e) ：获取内存池中的内存块大小。
    - [osMemoryPoolGetCapacity](https://arm-software.github.io/CMSIS_5/RTOS2/html/group__CMSIS__RTOS__PoolMgmt.html#gad696e94bfbe28f0b6613f9303fdf6a37) ：获取内存池中的最大内存块数。
    - [osMemoryPoolGetCount](https://arm-software.github.io/CMSIS_5/RTOS2/html/group__CMSIS__RTOS__PoolMgmt.html#ga958a9449bff8c95ce213de98eef5739d) ：获取内存池中使用的内存块数。
    - [osMemoryPoolGetName](https://arm-software.github.io/CMSIS_5/RTOS2/html/group__CMSIS__RTOS__PoolMgmt.html#gab414a1e138205a55820acfa277c8f386) ：获取内存池对象的名称。
    - [osMemoryPoolGetSpace](https://arm-software.github.io/CMSIS_5/RTOS2/html/group__CMSIS__RTOS__PoolMgmt.html#ga0394cffa9479a7994e3b03c79c1cb909) ：获取内存池中可用的内存块数。
    - [osMemoryPoolNew](https://arm-software.github.io/CMSIS_5/RTOS2/html/group__CMSIS__RTOS__PoolMgmt.html#ga497ced5d72dc5cd405c4c418516220dc) ：创建并初始化内存池对象。
- 消息队列
    - [osMessageQueueDelete](https://arm-software.github.io/CMSIS_5/RTOS2/html/group__CMSIS__RTOS__Message.html#gaba987f665444e0d83fa6a3a68bc72abe) ：删除消息队列对象。
    - [osMessageQueueGet](https://arm-software.github.io/CMSIS_5/RTOS2/html/group__CMSIS__RTOS__Message.html#gad90d4959466a7a65105061da8256ab9e) ：从队列中获取消息，如果队列为空，则超时。
    - [osMessageQueueGetCapacity](https://arm-software.github.io/CMSIS_5/RTOS2/html/group__CMSIS__RTOS__Message.html#gac24f87d4f395e9e9c900c320e45ade8a) ：获取消息队列中的最大消息数。
    - [osMessageQueueGetCount](https://arm-software.github.io/CMSIS_5/RTOS2/html/group__CMSIS__RTOS__Message.html#ga6a32ac394fcff568b251c160cc3014b2) ：获取消息队列中排队的消息数。
    - [osMessageQueueGetMsgSize](https://arm-software.github.io/CMSIS_5/RTOS2/html/group__CMSIS__RTOS__Message.html#ga96d3d84069b20359de48109e28a1a89e) ：获取消息队列中的最大消息大小。
    - [osMessageQueueGetName](https://arm-software.github.io/CMSIS_5/RTOS2/html/group__CMSIS__RTOS__Message.html#gae7cf7bf2b97a5ae481fb60fcce99247a) ：获取消息队列对象的名称。
    - [osMessageQueueGetSpace](https://arm-software.github.io/CMSIS_5/RTOS2/html/group__CMSIS__RTOS__Message.html#gaddf0904427436dd3880d46263c2dc9fa) ：获取消息队列中消息的可用插槽数。
    - [osMessageQueueNew](https://arm-software.github.io/CMSIS_5/RTOS2/html/group__CMSIS__RTOS__Message.html#ga24e895a00f9d484db33aaf784c57bfed) ：创建并初始化 Message Queue 对象。
    - [osMessageQueuePut](https://arm-software.github.io/CMSIS_5/RTOS2/html/group__CMSIS__RTOS__Message.html#gaa515fc8b956f721a8f72b2c505813bfc) ：将消息放入队列中，如果队列已满，则超时。
    - [osMessageQueueReset](https://arm-software.github.io/CMSIS_5/RTOS2/html/group__CMSIS__RTOS__Message.html#gac6dce7f9ad132d266292c2e979d861b4) ：将消息队列重置为初始空状态。
