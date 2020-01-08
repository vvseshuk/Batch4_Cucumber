
Feature: Feature to explain the objects as data tables
  I want to use this template for my feature with objects

Scenario: Negative login scenario
  	Given User is at login page
  	When User enters already registered login details
  	|	id							|	password	|
    | abc@gmail.com 	|	1234a 		|    
  	And clicks on login button
  	Then user should not be allowed to login
  	And user should not see home page  	
    

  