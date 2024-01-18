package com.educlaas.sociallogin.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.educlaas.sociallogin.jwtsecurity.TokenProvider;
import com.educlaas.sociallogin.payload.AfterLogin;
import com.educlaas.sociallogin.payload.Login;

import javax.validation.Valid;

@RestController
@RequestMapping(value = "/kyn")
public class LoginController {

    @Autowired
    private AuthenticationManager authenticationManager;

    @Autowired
    private TokenProvider tokenProvider;

    @PostMapping(value = "/login")
    public ResponseEntity<?> loginUser(@Valid @RequestBody Login login) {

        // Check Authentication
        Authentication authentication;
        try {
            authentication = authenticationManager.authenticate(
                    new UsernamePasswordAuthenticationToken(login.getEmail(), login.getPassword()));

            SecurityContextHolder.getContext().setAuthentication(authentication);

            // If authentication is correct, print the custom messages
            System.out.println("Email is correct!");
            System.out.println("Username is correct!");

            // Optionally, you can still generate and print the access token if needed
            String token = tokenProvider.createToken(authentication);
            System.out.println("Token For current user: " + token);

            return ResponseEntity.ok(new AfterLogin(token));
        } catch (Exception e) {
            // If authentication fails, print the custom message for incorrect email or username
            System.out.println("Email or Username is wrong!");
            return ResponseEntity.badRequest().body("Email or Username is wrong!");
        }
    }
}
