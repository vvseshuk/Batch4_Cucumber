package com.unimoni.cucumber.glues;

import cucumber.api.java.After;
import cucumber.api.java.Before;

public class HooksTagged {
	
	@Before("@Positive, @Negative")
	public void beforeScenario() {
		System.out.println("Before @Positive Scenario");
	}

	@After("@Positive, @Negative")
	public void afterScenario() {
		System.out.println("After @Positive Scenario");
	}

}
