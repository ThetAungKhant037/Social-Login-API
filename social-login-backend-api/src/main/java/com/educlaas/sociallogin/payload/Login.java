package com.educlaas.sociallogin.payload;

import javax.validation.constraints.Email;
import javax.validation.constraints.NotBlank;

public class Login {
	@Email
	@NotBlank
	private String email;
	
	@NotBlank
	private String password;
	
	private String username;
	public String getEmail() {
		return email;
	}
	public void setEmail(String email) {
		this.email = email;
	}
	public String getPassword() {
		return password;
	}
	public void setPassword(String password) {
		this.password = password;
	}
	public String getUsername() {
		return username;
	}
	public void setUsername(String username) {
		this.username = username;
	}
	
	
}
