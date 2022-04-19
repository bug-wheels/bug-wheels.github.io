# SentinelX

Sentinel 是由阿里巴巴开源的一个流量防护组件，其支持动态的配置流控规则和集群限流。

## Why ?

为什么要进行扩展，Sentinel 的可视化配置依赖于 dashboard 项目，但其并未提供开箱即用的使用体验，需要由开发者自己去修改原来来达到生产环境的使用。其官方给出了部分改造文档，可见[在生产环境中使用 Sentinel](https://github.com/alibaba/Sentinel/wiki/%E5%9C%A8%E7%94%9F%E4%BA%A7%E7%8E%AF%E5%A2%83%E4%B8%AD%E4%BD%BF%E7%94%A8-Sentinel)，官网给的教程并不完善且每个人的二次开发存在不同的理解，可能导致千奇百怪的怪，那能不能直接使用呢？答案是可以的，直接花钱使用阿里云的服务就可以了。

基于上面的原因，需要开发一个开箱即用的 dashboard 项目。



## 初始想法

去年我要去生产环境中搭建 Sentinel，发现只能修改源码，既然我都用 Spring Boot 了，我为什么还要改别人代码呢？于是我抱着试试看的态度，找了一些官方的钉钉群，发现大家都是通过改源码实现了，热心的群友还给我提供了一个修改的示例，当时就想到这么坑吗？

于是我在 Github issues 上提了一个[修改建议](https://github.com/alibaba/Sentinel/issues/2512)，想看看是否有相同想法的人来一起开发，或者让官方去完善。

---

**因为 Github 可能访问不了，这里将 issue 内容整理复制下：**

sentinel dashboard 是否考虑做成类似 `@EnableEurekaServer` 的形式，提供 `@EnableSentinelDashboard` #2512

如果改成类似 Spring Cloud Eureka Server 的部署方式，既能统一一下改造的版本，又能提供一些标准化的改造方案，同时作为开源项目，大家也可以一起找改造后的 bug, 这样更容易将项目落地。预期改造效果如下

### 一、提供一个 starter 并能通过注解开启功能

1. 提供 spring-boot-alibaba-sentinel-dashboard-starter
2. 提供 @EnableSentinelDashboard

启动方式如下：

```
@SpringBootApplication
@EnableSentinelDashboard
public class DashboardApplication {
    public static void main(String[] args) {
        SpringApplication.run(DashboardApplication.class, args);
    }
}
```

### 二、通过配置可以选择不同的存储方式

```
sentinel:
  dashboard:
    cluster: false
    storage:
  		selector: nacos
      nacos:
        namespace: 3c6f4b6a-511a-42cd-b1dd-35e2523216ac
        server-addr: nacos.cn:80
        group: DEFAULT_GROUP
        username: nacos
        password: nacos
```

---

## 计划

**第一阶段**

1. 找到所有的需要修改的点
2. 将原有的 dashboard 项目，改造成可以通过 @EnableSentinelDashboard 启动

**第二阶段**

1. 分离出原有 Memory 的代码，单独做一个 memory-starter, 并测试效果
2. 做一个以 nacos 作为数据源的 starter
3. 测试

**第三阶段**

1. 补全其他数据源的配置，包括 zk、consul、etcd、eureka、redis、spring-cloud-config
1. 这部分可能重复的工作比较多

**第四阶段**

1. 完善集群功能



