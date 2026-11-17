import {test, chromium} from '@playwright/test';

test("Login Test Cases", async ()=>{

  const browser = await chromium.launch({headless : false});

  const page = await browser.newPage();

  await page.goto("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login");

  await page.getByRole('textbox', {name : 'Username'}).fill("Admin");

  await page.getByRole('textbox', {name : 'Password'}).fill("admin123");

  await page.getByRole('button', {name : "Login"}).click();


});