Ext.define('SHOGun.login.view.registration.RegistrationModel', {
    extend: 'Ext.app.ViewModel',
    alias: 'viewmodel.registrationmodel',

    data: {
        registrationTitle: 'SHOGun - Create Account',
        registrationDescriptionText: 'Enter e-mail and password to register.',
        registrationEmailEmptyText: 'Email',
        registrationPasswordEmptyText: 'Password',
        registrationConfirmPasswordEmptyText: 'Confirm Password',
        passwordsAreNotEqualText: 'Passwords are not equal',
        registrationBtnText: 'Create Account',
        backToLoginText: 'Back to Login',
        accountCreationSuccessTitle: 'Information',
        accountCreationSuccessMsg: 'Your account has been successfully ' +
            'created. An Email with further instructions ' +
            'has been sent to your given account',
        accountCreationFailureTitle: 'Error',
        accountCreationFailureMsg: 'Error creating the new account'
    }
});
