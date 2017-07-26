/* Copyright (c) 2016 terrestris GmbH & Co. KG
 *
 * This program is free software: you can redistribute it and/or modify
 * it under the terms of the GNU General Public License as published by
 * the Free Software Foundation, either version 3 of the License, or
 * (at your option) any later version.
 *
 * This program is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
 * GNU General Public License for more details.
 *
 * You should have received a copy of the GNU General Public License
 * along with this program.  If not, see <http://www.gnu.org/licenses/>.
 */
/**
 * TranslationModel
 *
 * The view model for the translation tools
 *
 * @class SHOGun.client.view.button.TranslationModel
 */
Ext.define('SHOGun.login.view.button.TranslationModel', {
    extend: 'Ext.app.ViewModel',

    alias: 'viewmodel.button.translation',

    data: {
        /*i18n*/
        tooltipDe: 'DE',
        tooltipEn: 'EN',
        tooltipMn: 'MN',
        setLanguageCallbackToastText: '',
        /*i18n*/
        translateTo: '',
        languageCodeDe: 'de',
        languageCodeEn: 'en',
        languageCodeMn: 'mn'
    }

});
