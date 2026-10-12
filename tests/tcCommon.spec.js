import { POManager } from '../Page objects/POManager'
import { customtest as test, expect } from '../fixtures/testfixture'
test.describe.parallel('tc common test',()=>
{
test('@smoketcregister', async ({ page,testdataForregistration}) => {

    const pomanager = new POManager(page)
    const homepage = pomanager.getHomePage()

    await homepage.goTo()
    await homepage.ClickRegisterLink()

    const registerpage = pomanager.getRegistrationPage()

    await registerpage.registeruser(
        testdataForregistration.firstname,
        testdataForregistration.lastname,
        testdataForregistration.address,
        testdataForregistration.city,
        testdataForregistration.state,
        testdataForregistration.zipcode,
        testdataForregistration.phonenumber,
        testdataForregistration.ssn,
        testdataForregistration.username,
        testdataForregistration.password,
        testdataForregistration.confirmpassword
    )

    await registerpage.ClickonRegisterbutton()
    await expect(page).toHaveURL('https://parabank.parasoft.com/parabank/register.htm')
    await page.waitForTimeout(2000)
})
test('login@sanity',async({page,testdataForregistration})=>
{
    const pomanager=new POManager(page)
    const homepage=pomanager.getHomePage()
    const loginpage=pomanager.getLoginPage()

    await homepage.goTo()

    await loginpage.clickToApplication(
        testdataForregistration.username,
        testdataForregistration.password
    )
    await loginpage.clickOnloginButton()

})
})