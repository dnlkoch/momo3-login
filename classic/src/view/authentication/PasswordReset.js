Ext.define('SHOGun.login.view.authentication.PasswordReset', {
    extend: 'SHOGun.login.view.authentication.LockingWindow',
    xtype: 'passwordreset',

    routeId: 'passwordreset',

    requires: [
        'SHOGun.login.view.authentication.Dialog',
        'SHOGun.login.view.main.PasswordResetModel',
        'Ext.container.Container',
        'Ext.form.Label',
        'Ext.form.field.Text',
        'Ext.button.Button'
    ],

    controller: 'authentication',
    viewModel: 'passwordresetmodel',

    bind: {
        title: '{passwordResetTitle}'
    },

    defaultFocus: 'authdialog', // Focus the Auth Form to force field focus

    items: [{
        xtype: 'toolbar',
        cls: 'language-toolbar',
        height: 64,
        itemId: 'headerBar',
        items: [
            {
                xtype: 'shogun-translation-de-button'
            }, {
                xtype: 'shogun-translation-en-button'
            }
        ]
    }, {
        xtype: 'authdialog',
        autoComplete: true,
        bodyPadding: '20 20',
        cls: 'auth-dialog-login',
        width: 415,
        layout: {
            type: 'vbox',
            align: 'stretch'
        },
        defaults: {
            margin: '5 0'
        },
        defaultButton: 'resetPassword',
        items: [{
            xtype: 'label',
            cls: 'lock-screen-top-label',
            bind: {
                text: '{passwordResetDescription}'
            }
        }, {
            xtype: 'textfield',
            cls: 'auth-textbox',
            name: 'email',
            hideLabel: true,
            margin: '5 0 15 0',
            allowBlank: false,
            msgTarget: 'under',
            bind: {
                emptyText: '{emailAddressEmptyText}'
            },
            vtype: 'email',
            triggers: {
                glyphed: {
                    cls: 'trigger-glyph-noop auth-email-trigger'
                }
            }
        }, {
            xtype: 'button',
            reference: 'resetPassword',
            scale: 'large',
            ui: 'soft-blue',
            formBind: true,
            iconAlign: 'right',
            iconCls: 'x-fa fa-angle-right',
            bind: {
                text: '{resetPasswordBtnText}'
            },
            listeners: {
                click: 'onResetClick'
            }
        }, {
            xtype: 'component',
            name: 'backToLoginBox',
            bind: {
                html: '<div style="text-align:right">' +
                    '<a href="#login" class="link-forgot-password">' +
                        '{backToLoginText}</a>' +
                    '</div>'
            }
        }]
    }]
});
