/**
 * This is the base class for all Authentication related Form dialogs. It
 * optionally enables autoComplete support to any child textfield so that
 * browsers or their plugins may restore/persist username, password and other
 * attributes to/from such forms.
 */
Ext.define('SHOGun.login.view.authentication.Dialog', {
    extend: 'Ext.form.Panel',
    xtype: 'authdialog',

    requires: [
        'SHOGun.login.view.authentication.AuthenticationController',
        'SHOGun.login.view.authentication.AuthenticationModel',
        'Ext.form.Panel'
    ],

    controller: 'authentication',
    viewModel: 'authentication',

    listeners: {
        afterrender: {
            fn: 'onAfterRenderForm',
            single: true
        }
    },

    /*
     * Seek out the first enabled, focusable, empty textfield when the
     * form is focused
     */
    defaultFocus: 'textfield:focusable:' +
        'not([hidden]):not([disabled]):not([value])',

    /**
     * @cfg {Boolean} [autoComplete=false]
     * Enables browser (or Password Managers) support for autoCompletion of
     * User Id and password.
     */
    autoComplete: false,

    initComponent: function () {
        var me = this,
            listen;

        if (me.autoComplete) {
            // Use standard FORM tag for detection by browser or password tools
            me.autoEl = Ext.applyIf(
                me.autoEl || {},
                {
                    tag: 'form',
                    name: 'authdialog',
                    method: 'post'
                });
        }

        me.addCls('auth-dialog');
        me.callParent();

        if (me.autoComplete) {
            listen = {
                afterrender: 'doAutoComplete',
                scope: me,
                single: true
            };

            Ext.each(me.query('textfield'), function (field) {
                field.on(listen);
            });
        }
    },

    doAutoComplete: function(target) {
        if (target.inputEl && target.autoComplete !== false) {
            target.inputEl.set({ autocomplete: 'on' });
        }
    }
});
