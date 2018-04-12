package com.okta.developer.blog.domain;

import com.okta.developer.blog.repository.UserRepository;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.BeanFactory;
import org.springframework.data.jpa.domain.support.AuditingEntityListener;

import javax.persistence.EntityNotFoundException;
import javax.persistence.PrePersist;
import javax.persistence.PreUpdate;
import java.lang.reflect.Field;

/**
 * <p>This class is responsible for persisting Users when using OAuth 2.0 / OIDC. The user won't exist
 * in a microservice app (since it comes from the gateway). This class will handle persisting the User
 * before an entity is saved.</p>
 *
 * <p><b>NOTE:</b> This class does not currently handle many-to-many relationships with User, just
 * many-to-one and one-to-one.</p>
 *
 * @since 5.0.0
 */
public class UserEntityListener extends AuditingEntityListener {

    private final Logger log = LoggerFactory.getLogger(UserEntityListener.class);

    private static BeanFactory beanFactory;

    @PrePersist
    @PreUpdate
    @SuppressWarnings("unchecked")
    public void beforeAnyOperation(Object target) {
        log.debug("\n\n\nBefore any operation {}", target);
        log.debug("\n\n\n");
        try {
            UserRepository userRepository = beanFactory.getBean(UserRepository.class);
            Class<?> entityClass = target.getClass(); // Retrieve entity class with reflection
            Field privateUserField = entityClass.getDeclaredField("user"); // look for user field
            privateUserField.setAccessible(true);
            final User user = (User) privateUserField.get(target);
            privateUserField.setAccessible(false);
            if (user != null) {
                try {
                    log.debug("Find by Id and save if not found {}", user);
                    // Check if user exists to avoid HibernateException: found shared references to a collection: User.authorities
                    userRepository.findById(user.getId()).orElseGet(() -> userRepository.saveAndFlush(user));
                } catch (EntityNotFoundException enf) {
                    log.debug("EntityNotFound {}", enf);
                }
            }
        } catch (NoSuchFieldException e) {
            // No user field found on entity, ignore so as not to clutter the logs
            // This shouldn't happen since the UserEntityListener is only added to entities with a User relationship
        } catch (Exception e) {
            log.error("Exception while configuring user relationship(s) on entity {}", e);
        }
    }

    public static void setBeanFactory(BeanFactory beanFactory) {
        UserEntityListener.beanFactory = beanFactory;
    }
}
