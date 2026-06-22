const { test, expect } = require('@playwright/test');
const LoginPage = require('../pages/LoginPage');

test.describe('Login Page Tests', () => {
  let loginPage;

  test.beforeEach(async ({ page }) => {
    loginPage = new LoginPage(page);
    await loginPage.navigate('https://car-advisor-app.onrender.com/login');
  });

  test('should successfully login with valid credentials', async () => {
    await loginPage.login('user@example.com', 'password123');
    // Add assertion based on expected URL or element after login
  });

  test('should display error message for invalid credentials', async () => {
    await loginPage.login('invalid@example.com', 'wrongpassword');
    const isErrorVisible = await loginPage.isErrorMessageVisible();
    expect(isErrorVisible).toBeTruthy();
  });

  test('should navigate to forgot password page', async () => {
    await loginPage.clickForgotPassword();
    // Add assertion for forgot password page
  });

  test('should navigate to sign up page', async () => {
    await loginPage.clickSignUp();
    // Add assertion for sign up page
  });

  test('should enable/disable remember me checkbox', async () => {
    await loginPage.toggleRememberMe();
    // Add assertion for checkbox state
  });

  test('should show required field errors when submitting empty form', async () => {
    await loginPage.clickLogin();
    const isErrorVisible = await loginPage.isErrorMessageVisible();
    expect(isErrorVisible).toBeTruthy();
  });
});
