package com.okta.developer.blog.config;

import com.okta.developer.blog.domain.UserEntityListener;
import org.springframework.beans.factory.BeanFactory;
import org.springframework.beans.factory.BeanFactoryAware;
import org.springframework.context.annotation.Configuration;

@Configuration
public class UserEntityConfiguration implements BeanFactoryAware {

    @Override
    public void setBeanFactory(BeanFactory beanFactory) {
        UserEntityListener.setBeanFactory(beanFactory);
    }
}
