import LoginPage from '../pageobjects/login.page';
import ProfilePage from '../pageobjects/profile.page';

describe('Authorization', () => {
    it('user logs in with valid data', () => {
        LoginPage.open();
        LoginPage.setLogin('bilota8274@990ys.com');
        LoginPage.setPassword('1234567890Alice');
        LoginPage.clickSubmitButton();
        ProfilePage.isOpen();
    });
});


