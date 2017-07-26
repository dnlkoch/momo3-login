/**
 * This class is the main view for the application. It is specified in app.js
 * as the "mainView" property. That setting automatically applies the "viewport"
 * plugin causing this view to become the body element (i.e., the viewport).
 */
Ext.define('SHOGun.login.view.main.Main', {
    extend: 'Ext.container.Viewport',
    xtype: 'app-main',
    controller: 'maincontroller',
    viewModel: 'mainmodel',

    requires: [
        'Ext.window.MessageBox',

        'SHOGun.login.view.main.MainController',
        'SHOGun.login.view.main.MainModel',
        'SHOGun.login.view.authentication.Login',
        'BasiGX.util.CSRF'
    ],

    layout: 'auto',

    initComponent: function() {

        this.callParent(arguments);
        Ext.create('SHOGun.login.view.authentication.Login');

    }
});
