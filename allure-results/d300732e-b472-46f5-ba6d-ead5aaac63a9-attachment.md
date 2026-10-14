# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: tcfixture.spec.js >> tcregister
- Location: tests\tcfixture.spec.js:4:5

# Error details

```
Error: expect(page).toHaveURL(expected) failed

Expected: "https://parabank.parasoft.com/parabank/register.htm"
Received: "https://parabank.parasoft.com/parabank/register.htm?__cf_chl_rt_tk=waYRzE.jMMVnt4xlEzxfssmLPjCXDgibjZJ4EQE3xAg-1791909939-1.0.1.1-P0mPQUI_otOYzCCuz59d13jV8yOC8FMEeKFiLIIuQXE"
Timeout:  5000ms

Call log:
  - Expect "toHaveURL" with timeout 5000ms
    - waiting for navigation to finish...
    - navigated to "https://parabank.parasoft.com/parabank/register.htm"
    10 × locator resolved to <html lang="en-US">…</html>
       - unexpected value "https://parabank.parasoft.com/parabank/register.htm?__cf_chl_rt_tk=waYRzE.jMMVnt4xlEzxfssmLPjCXDgibjZJ4EQE3xAg-1791909939-1.0.1.1-P0mPQUI_otOYzCCuz59d13jV8yOC8FMEeKFiLIIuQXE"

```

```yaml
- main
```

# Test source

```ts
  1  | import { POManager } from '../Page objects/POManager'
  2  | import { customtest as test, expect } from '../fixtures/testfixture'
  3  | 
  4  | test('tcregister', async ({ page, testdataForregistration }) => {
  5  | 
  6  |     const pomanager = new POManager(page)
  7  |     const homepage = pomanager.getHomePage()
  8  | 
  9  |     await homepage.goTo()
  10 |     await homepage.ClickRegisterLink()
  11 | 
  12 |     const registerpage = pomanager.getRegistrationPage()
  13 | 
  14 |     await registerpage.registeruser(
  15 |         testdataForregistration.firstname,
  16 |         testdataForregistration.lastname,
  17 |         testdataForregistration.address,
  18 |         testdataForregistration.city,
  19 |         testdataForregistration.state,
  20 |         testdataForregistration.zipcode,
  21 |         testdataForregistration.phonenumber,
  22 |         testdataForregistration.ssn,
  23 |         testdataForregistration.username,
  24 |         testdataForregistration.password,
  25 |         testdataForregistration.confirmpassword
  26 |     )
  27 | 
  28 |     await registerpage.ClickonRegisterbutton()
> 29 |     await expect(page).toHaveURL('https://parabank.parasoft.com/parabank/register.htm')
     |                        ^ Error: expect(page).toHaveURL(expected) failed
  30 |     await page.waitForTimeout(2000)
  31 | })
```