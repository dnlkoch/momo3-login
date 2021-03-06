Ext.define('MoMo.login.view.registration.Registration', {
    extend: 'MoMo.login.view.authentication.LockingWindow',
    xtype: 'registration',

    routeId: 'registration',

    requires: [
        'Ext.container.Container',
        'Ext.form.Label',
        'Ext.form.field.Text',
        'Ext.form.field.Checkbox',
        'Ext.button.Button',

        'MoMo.login.view.registration.RegistrationController',
        'MoMo.login.view.registration.RegistrationModel',
        'MoMo.login.view.authentication.Dialog'
    ],

    bind: {
        title: '{registrationTitle}'
    },

    controller: 'registration',
    viewModel: 'registrationmodel',

    defaultFocus: 'authdialog', // Focus the Auth Form to force field focus

    items: [{
        xtype: 'toolbar',
        cls: 'language-toolbar',
        height: 64,
        itemId: 'headerBar',
        items: [
            {
                xtype: 'momo-translation-de-button'
            }, {
                xtype: 'momo-translation-en-button'
            }, {
                xtype: 'momo-translation-mn-button'
            }
        ]
    }, {
        xtype: 'authdialog', //form
        autoComplete: true,
        bodyPadding: '20 20',
        cls: 'auth-dialog-login',
        controller: 'registration',
        width: 415,
        layout: {
            type: 'vbox',
            align: 'stretch'
        },
        defaults: {
            margin: '5 0'
        },
        defaultButton: 'createAccount',
        items: [{
            xtype: 'label',
            cls: 'lock-screen-top-label',
            bind: {
                text: '{registrationDescriptionText}'
            }
        }, {
            xtype: 'textfield',
            cls: 'auth-textbox',
            bind: {
                emptyText: '{registrationEmailEmptyText}'
            },
            vtype: 'email',
            name: 'email',
            msgTarget: 'side',
            hideLabel: true,
            margin: '5 0 15 0',
            allowBlank: false,
            triggers: {
                glyphed: {
                    cls: 'trigger-glyph-noop auth-email-trigger'
                }
            }
        }, {
            xtype: 'textfield',
            cls: 'auth-textbox',
            bind: {
                emptyText: '{registrationPasswordEmptyText}'
            },
            inputType: 'password',
            name: 'password',
            allowBlank: false,
            msgTarget: 'side',
            hideLabel: true,
            margin: '5 0 15 0',
            triggers: {
                glyphed: {
                    cls: 'trigger-glyph-noop auth-password-trigger'
                }
            }
        }, {
            xtype: 'textfield',
            cls: 'auth-textbox',
            bind: {
                emptyText: '{registrationConfirmPasswordEmptyText}'
            },
            inputType: 'password',
            allowBlank: false,
            submitValue: false,
            validateBlank: true,
            msgTarget: 'side',
            hideLabel: true,
            margin: '5 0 5 0',
            triggers: {
                glyphed: {
                    cls: 'trigger-glyph-noop auth-password-trigger'
                }
            },
            validator: function(val) {
                var pw = this.up('form').
                    down('textfield[name=password]').getValue();
                var notEqualText = this.up('registration').getViewModel()
                    .get('passwordsAreNotEqualText');
                return pw === val ? true : notEqualText;
            }
        },
//        {
//            xtype: 'checkbox',
//            name: 'termagree',
//            labelAlign: 'top',
//            inputValue: true,
//            submitValue: false,
//            fieldLabel: 'Review End User Agreement',
//            boxLabel: 'I agree with the Terms and Conditions *',
//            listeners: {
//                change: 'onTermCheckChange'
//            }
//        },
        {
            xtype: 'button',
            name: 'createAccountButton',
            reference: 'createAccount',
            scale: 'large',
            formBind: true,
            iconAlign: 'right',
            iconCls: 'x-fa fa-angle-right',
            bind: {
                text: '{registrationBtnText}'
            },
            listeners: {
                click: 'onCreateClick'
            }
        }, {
            xtype: 'component',
            bind: {
                html: '<div style="text-align:right">' +
                    '<a href="#login" class="link-forgot-password">' +
                        '{backToLoginText}</a>' +
                    '</div>'
            }
        }]
    }]
});
