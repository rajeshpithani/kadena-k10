﻿<%@ Control Language="C#" AutoEventWireup="true" CodeBehind="MailingListUploader.ascx.cs" Inherits="Kadena.CMSWebParts.Kadena.MailingList.MailingListUploader" %>

<div class="upload-mail__drop-zone">
    <div class="drop-zone js-drop-zone">
        <button runat="server" id="btnHelp" type="button" class="drop-zone__btn question js-tooltip" data-tooltip-placement="left" title="">
            <svg class="icon icon-question">
                <use xlink:href="/gfx/svg/sprites/icons.svg#question-mark" />
            </svg>
        </button>
        <input runat="server" id="inpFile" type="file" name="file" class="js-drop-zone-file">
        <div class="drop-zone__dropping">
            <svg class="icon icon-drop">
                <use xlink:href="/gfx/svg/sprites/icons.svg#draganddrop" />
            </svg>
            <p class="font-text">
                <cms:LocalizedLiteral runat="server" EnableViewState="false" ResourceString="Kadena.MailingList.FileToUpload" />
            </p>
            <p class="font-text font-text--reserved">
                <cms:LocalizedLiteral runat="server" EnableViewState="false" ResourceString="Kadena.MailingList.ClickToUpload" />
            </p>
        </div>
        <div class="drop-zone__dropped">
            <div>
                <button type="button" class="drop-zone__btn close js-drop-zone-btn">
                    <svg class="icon icon-cross">
                        <use xlink:href="/gfx/svg/sprites/icons.svg#cross" />
                    </svg>
                </button>
                <img src="/gfx/images/csv.png" class="icon-csv">
            </div>
            <p class="js-drop-zone-name">File name</p>
        </div>

        <div class="drop-zone__dropped drop-zone__dropped--not">
            <div>
                <button type="button" class="drop-zone__btn close js-drop-zone-btn">
                    <svg class="icon icon-cross">
                        <use xlink:href="/gfx/svg/sprites/icons.svg#cross" />
                    </svg>
                </button>
                <img src="/gfx/images/csv-error.png" class="icon-csv">
            </div>
            <p>
                <cms:LocalizedLiteral runat="server" EnableViewState="false" ResourceString="Kadena.MailingList.WrongFileUploaded" />
            </p>
        </div>
    </div>
    <div class="input__wrapper j-submit-mailing-list-error" style="display: none;">
        <span class="input__error">
            <cms:LocalizedLiteral runat="server" EnableViewState="false" ResourceString="Kadena.MailingList.FileNotUploaded" />
        </span>
    </div>
</div>
<div class="upload-mail__row upload-mail__offer" style="display: none;">
    <span>
        <cms:LocalizedLiteral runat="server" EnableViewState="false" ResourceString="Kadena.MailingList.Or" />
    </span>
    <p>
        <cms:LocalizedLiteral runat="server" EnableViewState="false" ResourceString="Kadena.MailingList.SkipField" />
    </p>
</div>
<asp:PlaceHolder runat="server" ID="phMailType" />
<asp:PlaceHolder runat="server" ID="phProduct" />
<asp:PlaceHolder runat="server" ID="phValidity" />
<div class="upload-mail__row">
    <h2>
        <cms:LocalizedLabel runat="server" EnableViewState="false" ResourceString="Kadena.MailingList.FileName" />
    </h2>
    <p>
        <cms:LocalizedLabel runat="server" EnableViewState="false" ResourceString="Kadena.MailingList.FileNameDescription" />
    </p>
    <div class="row">
        <div class="col-lg-5 col-xl-3">
            <asp:Panel runat="server" ID="divFileName" CssClass="input__wrapper">
                <span class="input__label">
                    <cms:LocalizedLabel runat="server" EnableViewState="false" ResourceString="Kadena.MailingList.FileName" />
                </span>
                <input runat="server" id="inpFileName" type="text" name="name" class="input__text js-drop-zone-name-input" placeholder="">
                <span class="input__error input__error--noborder" style="display: none;">
                    <cms:LocalizedLabel runat="server" EnableViewState="false" ResourceString="Kadena.MailingList.EnterValidValue" />
                </span>
            </asp:Panel>
        </div>
    </div>
</div>
<button type="submit" class="btn-action j-submit-mailing-list-button" runat="server" id="btnSubmit" onserverclick="btnSubmit_Click"
    onclick="javascript: 
        if($('.js-drop-zone').hasClass('isNotDropped')) 
        { 
            $('.j-submit-mailing-list-error').hide();
            return false; 
        }; 
        if(!$('.js-drop-zone').hasClass('isDropped')) 
        { 
            $('.j-submit-mailing-list-error').show();
            return false; 
        }; 
        if (!$.trim($('input.js-drop-zone-name-input').val()).length)
        {
            $('input.js-drop-zone-name-input').addClass('input--error');
            $('span.input__error').show();
            return false;
        };">
    <cms:LocalizedLabel runat="server" EnableViewState="false" ResourceString="Kadena.MailingList.Create" />
</button>