---
icon: java
title: spring boot3
---


### Spring

- [Spring Guide](https://spring.io/guides)
- [Spring Initializr](https://start.spring.io/)

## Restful API

- [Getting Started | Building REST services with Spring](https://spring.io/guides/tutorials/rest)

## 第三方集成工具

### hutool

- [Hutool参考文档](https://hutool.cn/docs/#/)

### mongodb

:::code-tabs
@tab pom.xml引入依赖

```xml
<dependency>
  <groupId>org.springframework.boot</groupId>
  <artifactId>spring-boot-starter-data-mongodb</artifactId>
  <version>3.2.4</version>
</dependency>
```

@tab app.yml 配置数据库

```yml
spring:
  data:
    mongodb:
      uri: mongodb://localhost:27017/
```

@tab 实体类

```java
@Document("users")
@Data
public class UserBO {
  /**
   * 主键。。@Id / id == 等同于_id。原=ObjectId()
   */
  @Id
  private String id;
  private String name;
}
```

@tab 操作数据库

```java
@Service
public class UserService {
    @Resource
    MongoTemplate mongoTemplate;

    public List<UserBO> getAll() {
        return mongoTemplate.findAll(UserBO.class);
    }

    //按照id获取
    public UserBO getById(int uid) {
        Query query = new Query();
        query.addCriteria(Criteria.where("uid").is(uid));
        return mongoTemplate.findOne(query, UserBO.class);
    }
}
```

:::

- [介绍_MonogDB 中文网](https://mongodb.net.cn/manual/introduction/)
- [MongoDB 创建数据库 | 菜鸟教程](https://www.runoob.com/mongodb/mongodb-create-database.html)
- [SpringBoot整合MongoDB实现增删改查及聚合操作 - 掘金](https://juejin.cn/post/7222676391464828986)
