package cts.orangehrm.pages;

import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.CacheLookup;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.How;

public class SearchAdminWithPageFactory {
	WebDriver driver;
	@FindBy(how=How.ID,using="searchSystemUser_userName")
	@CacheLookup
	WebElement username;


	@FindBy(how=How.ID,using="searchBtn")
	@CacheLookup
	WebElement Search_button;

	public SearchAdminWithPageFactory(WebDriver driver)  {
	this.driver=driver;
	}

	public void typeUserName(String userid) {
	username.sendKeys(userid);

	}

	public void clickOnSearchButton() {
	Search_button.click();
	}
}
