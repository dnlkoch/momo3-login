Ext.define('SHOGun.login.view.main.PasswordResetModel', {
    extend: 'Ext.app.ViewModel',
    alias: 'viewmodel.passwordresetmodel',

    data: {
        passwordResetTitle: 'SHOGun - Reset Password',
        passwordResetDescription: 'Enter your email address for further ' +
            'reset instructions',
        emailAddressEmptyText: 'Email',
        resetPasswordBtnText: 'Reset Password',
        backToLoginText: 'Back to Log In'
    }
});
