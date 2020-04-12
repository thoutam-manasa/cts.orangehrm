package cts.orangehrm.pages;

import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.CacheLookup;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.How;

public class AssignLeavePageWithPageFactory {
	WebDriver driver;
	@FindBy(how=How.ID,using="assignleave_txtEmployee_empName")
	@CacheLookup
	WebElement username;

	@FindBy(how=How.ID,using="assignleave_txtLeaveType")
	@CacheLookup
	WebElement LeaveType;
	
	@FindBy(how=How.XPATH,using="//li[4]//img[1]")
	@CacheLookup
	WebElement FromDate;

	@FindBy(how=How.XPATH,using="//a[contains(text(),'30')]")
	@CacheLookup
	WebElement ToDate;
	
	@FindBy(how=How.ID,using="assignleave_partialDays")
	@CacheLookup
	WebElement PartialDays;


	@FindBy(how=How.ID,using="assignBtn")
	@CacheLookup
	WebElement Assign_button;
	
	
	

	public AssignLeavePageWithPageFactory(WebDriver driver)  {
	this.driver=driver;
	}

	public void typeUserName(String userid) {
	username.sendKeys(userid);

	}

	public void clickOnSearchButton() {
	Assign_button.click();
}
}