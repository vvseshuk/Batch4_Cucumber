package com.unimoni.cucumber.glues;

import cucumber.api.java.After;
import cucumber.api.java.Before;

public class Hooks {

	@Before(order = 0)
	public void beforeScenario() {
		System.out.println("Before the Scenario");
	}
	
	@Before(order = 1,value = "@Positive")
	public void beforeScenarioWithTag() {
		System.out.println("Before the Scenario @Positive");
	}

	@After
	public void afterScenario() {
		System.out.println("After the Scenario");
	}

}
