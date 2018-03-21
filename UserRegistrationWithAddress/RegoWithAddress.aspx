<%@ Page Language="C#" AutoEventWireup="true" CodeBehind="RegoWithAddress.aspx.cs" Inherits="uStoreAPI.RegoWithAddress.RegoWithAddress" %>

<!DOCTYPE html>

<html xmlns="http://www.w3.org/1999/xhtml">
<head runat="server">
    <title>New Customer Registration</title>
    <style type="text/css">
        body {background-color:gray;font-family:arial, verdana;font-size:12px;padding:0;margin:0} 
        #mainContainer {background-color:white;width:800px;margin:10px auto;padding:10px;}
        fieldset {padding:10px; margin:10px 0;}
        label {display:inline-block; width:130px;}
        label[for="useShippingAdd"], label[for="useBillingAdd"] {display:inline-block; width:230px;}
        legend {font-weight:bold;color:darkblue;}
        input, select {width:200px;margin-right: 2px;}
        input[type="radio"] {width:15px;margin-right:10px;}
        .buttons input {width:auto;}
        .buttons {text-align:center;}
        .header {background:transparent url(Rego_page_header_background.jpg) no-repeat;height:100px;}
        .logicError {display:inline-block;padding:3px;width:100%;background-color:pink;margin-left:5px;padding:5px;width:97%;}
    </style>
</head>
<body>
    <form id="form1" runat="server">
        <div id="mainContainer">
            <div class="header"></div>
            <div id="content">
                <h2>New Customer Registration</h2>
            <asp:Label ID="lblLogicError" CssClass="logicError" runat="server" Visible="false"></asp:Label>
        
            <asp:Panel ID="panel_login" runat="server">
            <fieldset>
                <legend>Login Information</legend>
                <p>
                    <label>Email<span class="required">*</span></label>
                    <asp:TextBox ID="txtEmail" runat="server" MaxLength="100"></asp:TextBox>
                    <asp:RequiredFieldValidator ID="rfv1" runat="server" ControlToValidate="txtEmail"  Display="Dynamic" ErrorMessage="Email is required"/>
                    <asp:RegularExpressionValidator ID="rev1" runat="server" ControlToValidate="txtEmail" ValidationExpression="^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,4}$" Display="Dynamic" ErrorMessage="Invalid email value"/>
                </p>
                <p>
                    <label>Password<span class="required">*</span></label>
                    <asp:TextBox ID="txtPassword" TextMode="password" runat="server" MaxLength="50"></asp:TextBox>
                    <asp:RequiredFieldValidator ID="rfv2" runat="server" ControlToValidate="txtPassword" Display="Dynamic" ErrorMessage="Password is required"/>
                </p>
                <p>
                    <label>Confirm Password<span class="required">*</span></label>
                    <asp:TextBox ID="txtConfirmPassword" TextMode="password" runat="server" MaxLength="50"/> 
                    <asp:CompareValidator ID="CompareValidator1" runat="server" ControlToCompare="txtPassword"  ControlToValidate="txtConfirmPassword"  Display="Dynamic" ErrorMessage="Confirm Password and Password are not the same."></asp:CompareValidator>
                    <asp:RegularExpressionValidator ID="rev2" runat="server" ControlToValidate="txtPassword" ValidationExpression="^(?=.*[A-Za-z])(?=.*\d)(?=.*[$@$!%*#?&])[A-Za-z\d$@$!%*#?&]{8,}$" Display="Dynamic" ErrorMessage="Password must be at least 8 characters; and include at least 1 letter, 1 number and 1 special character."></asp:RegularExpressionValidator>
                </p>
            </fieldset>
            </asp:Panel>
            
            <asp:Panel ID="panel_billing" runat="server">        
            <fieldset>
                <legend>Billing Address Information</legend>
                <p>
                    <label>Firstname <span class="required">*</span></label>
                    <asp:TextBox ID="txtFirstname" runat="server" MaxLength="100"></asp:TextBox>
                    <asp:RequiredFieldValidator ID="rfv10" runat="server" ControlToValidate="txtFirstname" Display="Dynamic" ErrorMessage="Firstname is required"/>
                </p>
                <p>
                    <label>Lastname <span class="required">*</span></label>
                    <asp:TextBox ID="txtLastname" runat="server" MaxLength="100"></asp:TextBox>
                    <asp:RequiredFieldValidator ID="rfv11" runat="server" ControlToValidate="txtLastname" Display="Dynamic" ErrorMessage="Lastname is required"/>
                </p>
                <p>
                    <label>Billing Address 1 <span class="required">*</span></label>
                    <asp:TextBox ID="txtAddress1" runat="server" MaxLength="100"/>
                    <asp:RequiredFieldValidator ID="rfv3" runat="server" ControlToValidate="txtAddress1" Display="Dynamic" ErrorMessage="Address 1 is required"/>
                </p>
                <p>
                    <label>Billing Address 2</label>
                    <asp:TextBox ID="txtAddress2" runat="server" MaxLength="100"/>
                </p>
                <p>
                    <label>Billing City <span class="required">*</span></label>
                    <asp:TextBox ID="txtCity" runat="server" MaxLength="50"/>
                    <asp:RequiredFieldValidator ID="rfv4" runat="server" ControlToValidate="txtCity" Display="Dynamic" ErrorMessage="City is required"/>
                </p>
                <p>
                    <label>Billing State <span class="required">*</span></label>
                    <asp:DropDownList ID="ddlState" runat="server" DataSourceID="ds_state" DataTextField="Name" DataValueField="ProvinceId"></asp:DropDownList>
                    <asp:SqlDataSource ID="ds_state" runat="server" ConnectionString="<%$ ConnectionStrings:uStore %>" 
                        SelectCommand="SELECT PC.ProvinceId, PC.Name FROM Province P INNER JOIN Province_Culture PC ON P.ProvinceID = PC.ProvinceId WHERE P.StatusID = 1 AND PC.CultureId = @cultureid AND P.CountryID = @countryid ORDER BY P.DisplayOrder">
                    <SelectParameters>
                        <asp:Parameter Name="cultureid" Type="Int32" DefaultValue="1" />
                        <asp:ControlParameter Name="countryid" ControlID="ddlCountry" PropertyName="SelectedValue" />
                    </SelectParameters>
                    </asp:SqlDataSource>
                </p>
                <p>
                    <label>Billing Postcode <span class="required">*</span></label>
                    <asp:TextBox ID="txtZip" runat="server" MaxLength="50"/>
                    <asp:RequiredFieldValidator ID="rfv5" runat="server" ControlToValidate="txtZip" Display="Dynamic" ErrorMessage="Postcode is required"/>
                </p>
                <p>
                    <label>Billing Country <span class="required">*</span></label>
                    <asp:DropDownList ID="ddlCountry" runat="server" DataSourceID="ds_country" DataTextField="Name" DataValueField="CountryID" AutoPostBack="true" OnDataBound="ddlCountry_databound"></asp:DropDownList>
                    <asp:SqlDataSource ID="ds_country" runat="server" ConnectionString="<%$ ConnectionStrings:uStore %>" 
                        SelectCommand="SELECT SC.CountryID, CC.Name FROM Country_Culture CC INNER JOIN StoreCountry SC ON CC.CountryId = SC.CountryID where storeid = @storeid and cultureid = @cultureid">
                    <SelectParameters>
                        <asp:Parameter Name="storeid" Type="Int32" DefaultValue="1" />
                        <asp:Parameter Name="cultureid" Type="Int32" DefaultValue="1" />
                    </SelectParameters>
                    </asp:SqlDataSource>
                </p>
                <p>
                    <label>Phone <span class="required">*</span></label>
                    <asp:TextBox ID="txtPhone" runat="server" MaxLength="20"/>
                    <asp:RequiredFieldValidator ID="rfv6" runat="server" ControlToValidate="txtPhone" Display="Dynamic" ErrorMessage="Phone is required"/>
                </p>
                <p>
                    <label>Fax</label>
                    <asp:TextBox ID="txtFax" runat="server" MaxLength="20"/>
                </p>
            </fieldset>
            </asp:Panel>

            <asp:Panel ID="panel_shipping" runat="server" Visible="false">
                <fieldset>
                <legend>Shipping Address Information</legend>
                <p>
                    <asp:RadioButton ID="useBillingAdd" GroupName="useBilling" runat="server" Text="Use Billing Address (above)" OnCheckedChanged="useBilling_CheckedChanged" AutoPostBack="true" /><br />
                    <asp:RadioButton ID="useShippingAdd" GroupName="useBilling" runat="server" Text="Use a different Shipping Address (below)" OnCheckedChanged="useBilling_CheckedChanged" AutoPostBack="true" Checked="true"  />
                </p>
                <asp:Panel ID="panel_shippingAddress" runat="server">
                    <p>
                        <label>Shipping Address 1 <span class="required">*</span></label>
                        <asp:TextBox ID="txtAddress1S" runat="server" MaxLength="100" />
                        <asp:RequiredFieldValidator ID="rfv7" runat="server" ControlToValidate="txtAddress1S" Display="Dynamic" ErrorMessage="Shipping Address 1 is required"/>
                    </p>
                    <p>
                        <label>Shipping Address 2</label>
                        <asp:TextBox ID="txtAddress2S" runat="server" MaxLength="100"/>
                    </p>
                    <p>
                        <label>Shipping City <span class="required">*</span></label>
                        <asp:TextBox ID="txtCityS" runat="server" MaxLength="50"/>
                        <asp:RequiredFieldValidator ID="rfv8" runat="server" ControlToValidate="txtCityS" Display="Dynamic" ErrorMessage="Shipping City is required"/>
                    </p>
                    <p>
                        <label>Shipping State <span class="required">*</span></label>
                        <asp:DropDownList ID="ddlStateS" runat="server" DataSourceID="ds_stateS" DataTextField="Name" DataValueField="ProvinceId"></asp:DropDownList>
                        <asp:SqlDataSource ID="ds_stateS" runat="server" ConnectionString="<%$ ConnectionStrings:uStore %>" 
                            SelectCommand="SELECT PC.ProvinceId, PC.Name FROM Province P INNER JOIN Province_Culture PC ON P.ProvinceID = PC.ProvinceId WHERE P.StatusID = 1 AND PC.CultureId = @cultureid AND P.CountryID = @countryidS ORDER BY P.DisplayOrder">
                        <SelectParameters>
                            <asp:Parameter Name="cultureid" Type="Int32" DefaultValue="1" />
                            <asp:ControlParameter Name="countryidS" ControlID="ddlCountryS" PropertyName="SelectedValue" />
                        </SelectParameters>
                        </asp:SqlDataSource>
                    </p>
                    <p>
                        <label>Shipping Postcode <span class="required">*</span></label>
                        <asp:TextBox ID="txtZipS" runat="server" MaxLength="50"/>
                        <asp:RequiredFieldValidator ID="rfv9" runat="server" ControlToValidate="txtZipS" Display="Dynamic" ErrorMessage="Shipping Postcode is required"/>
                    </p>
                    <p>
                        <label>Shipping Country <span class="required">*</span></label>
                        <asp:DropDownList ID="ddlCountryS" runat="server" DataSourceID="ds_countryS" DataTextField="Name" DataValueField="CountryID" AutoPostBack="true" OnDataBound="ddlCountryS_databound"></asp:DropDownList>
                        <asp:SqlDataSource ID="ds_countryS" runat="server" ConnectionString="<%$ ConnectionStrings:uStore %>" 
                            SelectCommand="SELECT SC.CountryID, CC.Name FROM Country_Culture CC INNER JOIN StoreCountry SC ON CC.CountryId = SC.CountryID where storeid = @storeid and cultureid = @cultureid">
                        <SelectParameters>
                            <asp:Parameter Name="storeid" Type="Int32" DefaultValue="1" />
                            <asp:Parameter Name="cultureid" Type="Int32" DefaultValue="1" />
                        </SelectParameters>
                        </asp:SqlDataSource>
                    </p>
                    <p>
                        <label>Phone <span class="required">*</span></label>
                        <asp:TextBox ID="txtPhoneS" runat="server" MaxLength="20"/>
                        <asp:RequiredFieldValidator ID="RequiredFieldValidator4" runat="server" ControlToValidate="txtPhone" Display="Dynamic" ErrorMessage="Shipping Phone is required"/>
                    </p>
                    <p>
                        <label>Fax</label>
                        <asp:TextBox ID="txtFaxS" runat="server" MaxLength="20"/>
                    </p>
                </asp:Panel>
            </fieldset>
            </asp:Panel>

            <asp:Panel ID="panel_buttons" runat="server">
            <p class="buttons">
                <asp:Button ID="btnRegister" runat="server" Text="Register" OnClick="btnRegister_Click" />  
            </p>
            </asp:Panel>
            </div>
        </div>
    </form>
</body>
</html>
