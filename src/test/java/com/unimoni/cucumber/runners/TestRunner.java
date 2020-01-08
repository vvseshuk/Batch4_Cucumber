package com.unimoni.cucumber.runners;

import org.junit.runner.RunWith;

import cucumber.api.CucumberOptions;
import cucumber.api.junit.Cucumber;

@RunWith(Cucumber.class)
@CucumberOptions(					
					plugin = {"usage", "html:target/htmlUsagereports"},
					monochrome = true,//better console output
					features = "src\\test\\java\\com\\unimoni\\cucumber\\features",
					glue = "com.unimoni.cucumber.glues"
					//,tags = {"@HomePage, @Positive", "~@Negative", "~@Deposit"}					
				)//Should run @HomePage or @Positive And should not run @Negative and @Deposit
//if we are writing the two annotations with in the same quotation marks then it is OR condition
//And if we are writing in different quotation marks then it is AND condition 
//If we write two tags in two different quotation marks means - if both tags exist on a particular scenario then only it will pick
//So better to put all our required tags in one quotation marks with comma and all our ignoring tags in a different quotations
public class TestRunner {

}
