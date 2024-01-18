package com.educlaas.sociallogin;
import static org.junit.jupiter.api.Assertions.assertEquals;
import static org.junit.jupiter.api.Assertions.assertTrue;

import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.autoconfigure.orm.jpa.DataJpaTest;
import org.springframework.boot.test.autoconfigure.orm.jpa.TestEntityManager;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.context.SecurityContextHolder;

import com.educlaas.sociallogin.controller.LoginController;
import com.educlaas.sociallogin.dao.Users;
import com.educlaas.sociallogin.jwtsecurity.TokenProvider;
import com.educlaas.sociallogin.payload.AfterLogin;
import com.educlaas.sociallogin.payload.Login;
import com.educlaas.sociallogin.repository.UsersRepository;

@SpringBootTest
public class Bdse03LocalGoogleFacebookLoginApplicationTests {

    @Autowired
    private LoginController loginController;

    @Autowired
    private AuthenticationManager authenticationManager;

    @Autowired
    private TokenProvider tokenProvider;

    @Autowired
    private UsersRepository usersRepository;

    @Autowired
    private TestEntityManager testEntityManager;

    @Test
    public void testLoginWithCorrectCredentials() {
        // Arrange
        Users user = new Users();
        user.setEmail("test@example.com");
        user.setPassword("password123");
        testEntityManager.persistAndFlush(user);

        Login loginRequest = new Login();
        loginRequest.setEmail("test@example.com");
        loginRequest.setPassword("password123");

        // Act
        ResponseEntity<?> responseEntity = loginController.loginUser(loginRequest);

        // Assert
        assertEquals(HttpStatus.OK, responseEntity.getStatusCode());
        assertTrue(responseEntity.getBody() instanceof AfterLogin);
    }

    @Test
    public void testLoginWithIncorrectCredentials() {
        // Arrange
        Users user = new Users();
        user.setEmail("test@example.com");
        user.setPassword("password123");
        testEntityManager.persistAndFlush(user);

        Login loginRequest = new Login();
        loginRequest.setEmail("test@example.com");
        loginRequest.setPassword("wrongpassword");

        // Act
        ResponseEntity<?> responseEntity = loginController.loginUser(loginRequest);

        // Assert
        assertEquals(HttpStatus.BAD_REQUEST, responseEntity.getStatusCode());
        assertEquals("Email or Username is wrong!", responseEntity.getBody());
    }
}
