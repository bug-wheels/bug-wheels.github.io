# RateLimiter

做一个基于 Redis 的限流组件

## 已有方案

晚上关于限流的方案其实是很多的，比如 Guava RateLimiter, Sentinel 都是非常优秀的方案，在集群限流的方案中，也有很多基于 Redis 的做法和文档。

## Why ?

为什么要自己做一个？Guava RateLimter 不支持集群限流，Sentinel 的集群限流很不稳定，用 Redis 做集群限流网上的文档很多，但需要自己根据文档开发。

基于上面的原因，需要开发一个开箱即用的 Ratelimiter 项目，即支持单机限流，又支持集群限流，同时提供一个简易的可视化页面来展示和动态配置。

## 初始想法

采用 Guava RateLimiter + Redis 的混合方式，当限流算法为单机限流时，使用 Guava RateLimiter，当为集群限流时，使用 Redis。提供和 Sentinel 类似的 API, 如下：

```java
public static void main(String[] args) {
    initFlowRules();
    while (true) {
        Entry entry = null;
        try {
	    		entry = RateLimiter.entry("HelloWorld");
            /*您的业务逻辑 - 开始*/
            System.out.println("hello world");
            /*您的业务逻辑 - 结束*/
				} catch (BlockException e1) {
            /*流控逻辑处理 - 开始*/
	    			System.out.println("block!");
            /*流控逻辑处理 - 结束*/
				} finally {
           if (entry != null) {
               entry.exit();
           }
				}
    }
}
```

规则定义

```java
private static void initFlowRules(){
    List<FlowRule> rules = new ArrayList<>();
    
    FlowRule rule = new FlowRule();
    rule.setResource("HelloWorld");
    rule.setGrade(RuleConstant.FLOW_GRADE_QPS);
    rule.setCount(20);
    
    rules.add(rule);
    FlowRuleManager.loadRules(rules);
}
```

使用注解

支持通过 @RateLimterResource 注解定义资源并配置 blockHandler 和 fallback 函数来进行限流之后的处理。示例：

```java
@RateLimterResource(name="HelloWorld", blockHandler = "blockHandlerForGetUser")
public User getUserById(String id) {
    throw new RuntimeException("getUserById command failed");
}

// blockHandler 函数，原方法调用被限流/降级/系统保护的时候调用
public User blockHandlerForGetUser(String id, BlockException ex) {
    return new User("admin");
}
```

同事注解上可以配规则

## 计划

**第一阶段**

1. 定义接口接口
1. 定义 FlowRule 的格式
1. 完成 Guava RateLimter 本地限流
1. 完成 Redis 集群限流方式

**第二阶段**

1. 增加启动时动态获取 FlowRule 的功能
   1. HTTP
   2. Nacos
   3. MySQL
   4. Consul

**第三阶段**

1. 增加运行时动态变更 FlowRule 的功能
   1. HTTP
   2. Nacos
   3. MySQL
   4. Consul

**第四阶段**

监控和统计的一些功能
