package com.laioffer.mdoline;

import com.google.auth.oauth2.GoogleCredentials;
import com.google.cloud.dialogflow.v2.SessionsClient;
import com.google.cloud.dialogflow.v2.SessionsSettings;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.core.io.ClassPathResource;
import org.springframework.security.crypto.factory.PasswordEncoderFactories;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.security.provisioning.JdbcUserDetailsManager;
import org.springframework.security.provisioning.UserDetailsManager;

import javax.sql.DataSource;
import java.io.FileInputStream;
import java.io.IOException;
@Configuration
public class AppConfig {
    @Bean
    public SessionsClient sessionsClient() throws IOException {
        ClassPathResource resource = new ClassPathResource("md-test-1-qweq-ff214b215c88.json");
        GoogleCredentials credentials = GoogleCredentials.fromStream(resource.getInputStream());
        SessionsSettings sessionsSettings = SessionsSettings.newBuilder()
                .setCredentialsProvider(() -> credentials)
                .build();
        return SessionsClient.create(sessionsSettings);
    }

    @Bean
    UserDetailsManager users(DataSource datasource) {
        return new JdbcUserDetailsManager(datasource);
    }

    @Bean
    PasswordEncoder passwordEncoder() {
        return PasswordEncoderFactories.createDelegatingPasswordEncoder();
    }
}



