package StepDefinition;

import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.testng.Assert;

import com.relevantcodes.extentreports.ExtentReports;
import com.relevantcodes.extentreports.ExtentTest;
import com.relevantcodes.extentreports.LogStatus;

import cts.orangehrm.utility.BrowserFactory;
import cts.orangehrm.utility.ConfigReader;
import cts.orangehrm.utility.ExcelDataConfig;
import cts.orangehrm.utility.screenshot;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;

public class ValidUsernameAndPassword {
	WebDriver driver;
	ConfigReader config=new ConfigReader();
ExcelDataConfig configExcel=new ExcelDataConfig(config.getexcelpath());
	public static ExtentReports report = new ExtentReports("ExtentReport.html");
	ExtentTest test = report.startTest("logInTest");
	@Given("^Open chrome and start application$")
	public void open_chrome_and_start_application() throws Throwable {

		BrowserFactory b = new BrowserFactory();
		  ConfigReader config = new ConfigReader();
		 
		  driver = b.startBrowser("chrome", config.getApplicationURL());
	}
	

	@When("^I enter valid \"([^\"]*)\"$")
	public void i_enter_valid_and_valid(String usernameNumber) throws Throwable {
		Object[][] data=configExcel.passData();
		String username="";
		String password="";

		if(null!= usernameNumber ) {
			int userCount = Integer.parseInt(usernameNumber.trim());

			username = (String )data[userCount-1][0];
			password = (String )data[userCount-1][1];	
			test.log(LogStatus.PASS, "Authentication sucessfully");
		}
		/*if(null!= usernameNumber && usernameNumber.trim().equalsIgnoreCase("1")) {
			username = (String )data[0][0];
			password = (String )data[0][1];	

		}
		if(null!= usernameNumber && usernameNumber.trim().equalsIgnoreCase("2")) {
			username = (String )data[1][0];
			password = (String )data[1][1];	
			test.log(LogStatus.PASS, "Authentication Failed");
		}
		if(null!= usernameNumber && usernameNumber.trim().equalsIgnoreCase("3")) {
			username = (String )data[2][0];
			password = (String )data[2][1];	
			test.log(LogStatus.PASS, "Authentication Failed");
		}*/
		driver.findElement(By.id("txtUsername")).sendKeys(username);
		driver.findElement(By.id("txtPassword")).sendKeys(password); 
	}

	@When("^user should be able to login$")
	public void user_should_be_able_to_login() throws Throwable {
		driver.findElement(By.xpath("//input[@id='btnLogin']")).click();
		Assert.assertEquals("https://opensource-demo.orangehrmlive.com/index.php/dashboard", driver.getCurrentUrl());
		System.out.println(driver.getCurrentUrl());
		test.log(LogStatus.PASS, "Authentication sucessfully");
		System.out.println("User is able to login sucessfully"); 
		screenshot ob=new screenshot();
		ob.getScreenshot(driver);
	}

	@When("^admin button is clicked$")
	public void admin_button_is_clicked() throws Throwable {
	    driver.findElement(By.xpath("//b[contains(text(),'Admin')]")).click();
	}

	@When("^I enter valid username$")
	public void i_enter_valid_username() throws Throwable {
		driver.findElement(By.id("searchSystemUser_userName")).sendKeys("Admin");
	}
	@When("^clicking the Search button$")
	public void clicking_the_Search_button() throws Throwable {
		driver.findElement(By.id("searchBtn")).click();
	}
	@Then("^user details displayed$")
	public void user_details_displayed() throws Throwable {
		System.out.println("User details are displayed");
	}
	@When("^directory button is clicked$")
	public void directory_button_is_clicked() throws Throwable {
		driver.findElement(By.xpath("//b[contains(text(),'Directory')]")).click();
	}

	@When("^I enter valid name$")
	public void i_enter_valid_name() throws Throwable {
		driver.findElement(By.id("searchDirectory_emp_name_empName")).sendKeys("Steven Edwards");
	}
	@When("^In dashboard assign leave is clicked$")
	public void in_dashboard_assign_leave_is_clicked() throws Throwable {
		driver.findElement(By.xpath("//td[1]//div[1]//a[1]//img[1]")).click();
	}

	@When("^I enter valid Employee Name$")
	public void i_enter_valid_Employee_Name() throws Throwable {
		driver.findElement(By.id("assignleave_txtEmployee_empName")).sendKeys("Steven Edwards");
	}

	@When("^select leave type$")
	public void select_leave_type() throws Throwable {
		driver.findElement(By.id("assignleave_txtLeaveType")).sendKeys("Vacation US");
	}

	@When("^I enter from date$")
	public void i_enter_from_date() throws Throwable {
		driver.findElement(By.xpath("//li[4]//img[1]")).click();
		driver.findElement(By.xpath("//a[contains(text(),'23')]")).click();
	}

	@When("^I enter to date$")
	public void i_enter_to_date() throws Throwable {
		driver.findElement(By.xpath("//li[5]//img[1]")).click();
		driver.findElement(By.xpath("//a[contains(text(),'30')]")).click();
	}

	@When("^I select Partial days$")
	public void i_select_Partial_days() throws Throwable {
		driver.findElement(By.id("assignleave_partialDays")).sendKeys("All Days");;
	}

	@When("^clicking the Assign button$")
	public void clicking_the_Assign_button() throws Throwable {
		driver.findElement(By.id("assignBtn")).click();
	}
	@Then("^application should be closed$")
	public void application_should_be_closed() throws Throwable {
		driver.quit();
	}
	
}