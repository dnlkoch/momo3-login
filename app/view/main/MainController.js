Ext.define('SHOGun.login.view.main.MainController', {
    extend: 'Ext.app.ViewController',
    alias: 'controller.maincontroller',
    routes: {
        'resendtoken': 'showResendToken',
        'passwordreset': 'showPasswordReset',
        'passwordchange:params': {
            action: 'showPasswordChange',
            conditions: {
                ':params': '([0-9a-zA-Z\?\&=\-]+)'
            }
        },
        'registration': 'showRegistration',
        'login': 'showLogin'
    },

    // Array holding the xtypes of components used in the views
    componentsXtypes: [
        'login',
        'registration',
        'passwordreset',
        'passwordchange',
        'resendtoken'
    ],

    requires: [
        'SHOGun.login.view.authentication.Login',
        'SHOGun.login.view.registration.Registration',
        'SHOGun.login.view.authentication.PasswordReset',
        'SHOGun.login.view.authentication.PasswordChange',
        'SHOGun.login.view.authentication.ResendToken'
    ],

    showPasswordReset: function() {
        this.switchView('SHOGun.login.view.authentication.PasswordReset');
    },

    showPasswordChange: function(params) {
        this.switchView('SHOGun.login.view.authentication.PasswordChange',
                params);
    },

    showRegistration: function() {
        this.switchView('SHOGun.login.view.registration.Registration');
    },

    showLogin: function() {
        this.switchView('SHOGun.login.view.authentication.Login');
    },

    showResendToken: function() {
        this.switchView('SHOGun.login.view.authentication.ResendToken');
    },

    switchView: function(typeToCreate, params) {
        Ext.each(this.componentsXtypes, function(xtype) {
            var cmps = Ext.ComponentQuery.query(xtype);
            Ext.each(cmps, function(cmp) {
                cmp.destroy();
            });
        });
        Ext.create(typeToCreate, {
            reqParams: params
        });
    }
});
