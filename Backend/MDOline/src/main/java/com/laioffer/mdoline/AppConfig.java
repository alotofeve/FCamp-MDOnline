package com.laioffer.mdoline;

import org.springframework.boot.autoconfigure.security.servlet.PathRequest;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.http.HttpMethod;
import org.springframework.http.HttpStatus;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.crypto.factory.PasswordEncoderFactories;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.security.provisioning.JdbcUserDetailsManager;
import org.springframework.security.provisioning.UserDetailsManager;
import org.springframework.security.web.SecurityFilterChain;
import org.springframework.security.web.authentication.HttpStatusEntryPoint;
import org.springframework.security.web.authentication.SimpleUrlAuthenticationFailureHandler;
import org.springframework.security.web.authentication.logout.HttpStatusReturningLogoutSuccessHandler;
import javax.sql.DataSource;


@Configuration
public class AppConfig {

//    @Bean
//    public SessionsClient sessionsClient() throws IOException {
//        ClassPathResource resource = new ClassPathResource("md-test-1-qweq-ff214b215c88.json");
//        GoogleCredentials credentials = GoogleCredentials.fromStream(resource.getInputStream());
//        SessionsSettings sessionsSettings = SessionsSettings.newBuilder()
//                .setCredentialsProvider(() -> credentials)
//                .build();
//        return SessionsClient.create(sessionsSettings);
//    }

    @Bean
    public SecurityFilterChain filterChain(HttpSecurity http) throws Exception{
        http
                .csrf().disable()
                .authorizeHttpRequests(auth ->
                        auth
                                /*
                                前端数据通行　
                                 */
                                .requestMatchers(PathRequest.toStaticResources().atCommonLocations()).permitAll()
                                .requestMatchers(HttpMethod.GET, "/", "/index.html", "/*.json", "/*.png", "/static/**").permitAll()
                                .requestMatchers("/hello/**").permitAll()
                                .requestMatchers(HttpMethod.POST,
                                        "/login",
                                        "/register-doctor",
                                        "/register-patient",
                                        "/logout").permitAll()
                                .requestMatchers(HttpMethod.GET,
                                        "/search-doctor-by-name",
                                        "/search-doctor-by-spec",
                                        "/search-doctor-by-all",
                                        "/get-all-specs").permitAll()
                                .anyRequest().authenticated()
                )
                .exceptionHandling()
                .authenticationEntryPoint(new HttpStatusEntryPoint(HttpStatus.UNAUTHORIZED))
                .and()
                /*
                session based login in
                 */
                .formLogin()
                .successHandler((req, res, auth) -> res.setStatus(HttpStatus.NO_CONTENT.value()))
                .failureHandler(new SimpleUrlAuthenticationFailureHandler())
                .and()
                .logout()
                .logoutSuccessHandler(new HttpStatusReturningLogoutSuccessHandler(HttpStatus.NO_CONTENT));
        return http.build();
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



