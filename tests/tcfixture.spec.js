import { POManager } from '../Page objects/POManager'
import { customtest as test, expect } from '../fixtures/testfixture'

test('tcregister', async ({ page, testdataforregistration }) => {

    const pomanager = new POManager(page)
    const homepage = pomanager.getHomePage()

    await homepage.goTo()
    await homepage.ClickRegisterLink()

    const registerpage = pomanager.getRegistrationPage()

    await registerpage.registeruser(
        testdataforregistration.firstname,
        testdataforregistration.lastname,
        testdataforregistration.address,
        testdataforregistration.city,
        testdataforregistration.state,
        testdataforregistration.zipcode,
        testdataforregistration.phonenumber,
        testdataforregistration.ssn,
        testdataforregistration.username,
        testdataforregistration.password,
        testdataforregistration.confirmpassword
    )

    await registerpage.ClickonRegisterbutton()
    await expect(page).toHaveURL('https://parabank.parasoft.com/parabank/register.htm')
    await page.waitForTimeout(2000)
})