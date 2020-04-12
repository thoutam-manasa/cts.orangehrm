package cts.orangehrm.pages;

import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.CacheLookup;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.How;


public class LoginPageWithPageFactory {
public	WebDriver driver;

	@FindBy(how=How.ID,using="txtUsername")
	@CacheLookup
	WebElement username;

	@FindBy(how=How.ID,using="txtPassword")
	@CacheLookup
	WebElement password;

	@FindBy(how=How.ID,using="btnLogin")
	@CacheLookup
	WebElement Login_button;

	public LoginPageWithPageFactory(WebDriver driver)  {
	this.driver=driver;
	}

	public void typeUserNameAndPassword(String userid,String pass) {
	username.sendKeys(userid);
	password.sendKeys(pass);
	}

	public void clickOnLoginButton() {
	Login_button.click();
	
	}
}
