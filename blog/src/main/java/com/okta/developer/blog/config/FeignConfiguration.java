package com.okta.developer.blog.config;

import org.springframework.cloud.openfeign.EnableFeignClients;
import org.springframework.context.annotation.Configuration;

@Configuration
@EnableFeignClients(basePackages = "com.okta.developer.blog")
public class FeignConfiguration {

}
