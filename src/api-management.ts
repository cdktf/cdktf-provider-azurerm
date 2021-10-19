// https://www.terraform.io/docs/providers/azurerm/r/api_management.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface ApiManagementConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/api_management.html#client_certificate_enabled ApiManagement#client_certificate_enabled}
  */
  readonly clientCertificateEnabled?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/api_management.html#gateway_disabled ApiManagement#gateway_disabled}
  */
  readonly gatewayDisabled?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/api_management.html#location ApiManagement#location}
  */
  readonly location: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/api_management.html#min_api_version ApiManagement#min_api_version}
  */
  readonly minApiVersion?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/api_management.html#name ApiManagement#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/api_management.html#notification_sender_email ApiManagement#notification_sender_email}
  */
  readonly notificationSenderEmail?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/api_management.html#policy ApiManagement#policy}
  */
  readonly policy?: ApiManagementPolicy[];
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/api_management.html#publisher_email ApiManagement#publisher_email}
  */
  readonly publisherEmail: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/api_management.html#publisher_name ApiManagement#publisher_name}
  */
  readonly publisherName: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/api_management.html#resource_group_name ApiManagement#resource_group_name}
  */
  readonly resourceGroupName: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/api_management.html#sku_name ApiManagement#sku_name}
  */
  readonly skuName: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/api_management.html#tags ApiManagement#tags}
  */
  readonly tags?: { [key: string]: string } | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/api_management.html#virtual_network_type ApiManagement#virtual_network_type}
  */
  readonly virtualNetworkType?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/api_management.html#zones ApiManagement#zones}
  */
  readonly zones?: string[];
  /**
  * additional_location block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/api_management.html#additional_location ApiManagement#additional_location}
  */
  readonly additionalLocation?: ApiManagementAdditionalLocation[];
  /**
  * certificate block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/api_management.html#certificate ApiManagement#certificate}
  */
  readonly certificate?: ApiManagementCertificate[];
  /**
  * hostname_configuration block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/api_management.html#hostname_configuration ApiManagement#hostname_configuration}
  */
  readonly hostnameConfiguration?: ApiManagementHostnameConfiguration;
  /**
  * identity block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/api_management.html#identity ApiManagement#identity}
  */
  readonly identity?: ApiManagementIdentity;
  /**
  * protocols block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/api_management.html#protocols ApiManagement#protocols}
  */
  readonly protocols?: ApiManagementProtocols;
  /**
  * security block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/api_management.html#security ApiManagement#security}
  */
  readonly security?: ApiManagementSecurity;
  /**
  * sign_in block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/api_management.html#sign_in ApiManagement#sign_in}
  */
  readonly signIn?: ApiManagementSignIn;
  /**
  * sign_up block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/api_management.html#sign_up ApiManagement#sign_up}
  */
  readonly signUp?: ApiManagementSignUp;
  /**
  * tenant_access block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/api_management.html#tenant_access ApiManagement#tenant_access}
  */
  readonly tenantAccess?: ApiManagementTenantAccess;
  /**
  * timeouts block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/api_management.html#timeouts ApiManagement#timeouts}
  */
  readonly timeouts?: ApiManagementTimeouts;
  /**
  * virtual_network_configuration block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/api_management.html#virtual_network_configuration ApiManagement#virtual_network_configuration}
  */
  readonly virtualNetworkConfiguration?: ApiManagementVirtualNetworkConfiguration;
}
export interface ApiManagementPolicy {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/api_management.html#xml_content ApiManagement#xml_content}
  */
  readonly xmlContent?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/api_management.html#xml_link ApiManagement#xml_link}
  */
  readonly xmlLink?: string;
}

function apiManagementPolicyToTerraform(struct?: ApiManagementPolicy): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    xml_content: struct!.xmlContent === undefined ? null : cdktf.stringToTerraform(struct!.xmlContent),
    xml_link: struct!.xmlLink === undefined ? null : cdktf.stringToTerraform(struct!.xmlLink),
  }
}

export interface ApiManagementAdditionalLocationVirtualNetworkConfiguration {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/api_management.html#subnet_id ApiManagement#subnet_id}
  */
  readonly subnetId: string;
}

function apiManagementAdditionalLocationVirtualNetworkConfigurationToTerraform(struct?: ApiManagementAdditionalLocationVirtualNetworkConfigurationOutputReference | ApiManagementAdditionalLocationVirtualNetworkConfiguration): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    subnet_id: cdktf.stringToTerraform(struct!.subnetId),
  }
}

export class ApiManagementAdditionalLocationVirtualNetworkConfigurationOutputReference extends cdktf.ComplexObject {
  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param isSingleItem True if this is a block, false if it's a list
  */
  public constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean) {
    super(terraformResource, terraformAttribute, isSingleItem);
  }

  // subnet_id - computed: false, optional: false, required: true
  private _subnetId?: string; 
  public get subnetId() {
    return this.getStringAttribute('subnet_id');
  }
  public set subnetId(value: string) {
    this._subnetId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get subnetIdInput() {
    return this._subnetId
  }
}
export interface ApiManagementAdditionalLocation {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/api_management.html#location ApiManagement#location}
  */
  readonly location: string;
  /**
  * virtual_network_configuration block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/api_management.html#virtual_network_configuration ApiManagement#virtual_network_configuration}
  */
  readonly virtualNetworkConfiguration?: ApiManagementAdditionalLocationVirtualNetworkConfiguration;
}

function apiManagementAdditionalLocationToTerraform(struct?: ApiManagementAdditionalLocation): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    location: cdktf.stringToTerraform(struct!.location),
    virtual_network_configuration: apiManagementAdditionalLocationVirtualNetworkConfigurationToTerraform(struct!.virtualNetworkConfiguration),
  }
}

export interface ApiManagementCertificate {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/api_management.html#certificate_password ApiManagement#certificate_password}
  */
  readonly certificatePassword?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/api_management.html#encoded_certificate ApiManagement#encoded_certificate}
  */
  readonly encodedCertificate: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/api_management.html#store_name ApiManagement#store_name}
  */
  readonly storeName: string;
}

function apiManagementCertificateToTerraform(struct?: ApiManagementCertificate): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    certificate_password: cdktf.stringToTerraform(struct!.certificatePassword),
    encoded_certificate: cdktf.stringToTerraform(struct!.encodedCertificate),
    store_name: cdktf.stringToTerraform(struct!.storeName),
  }
}

export interface ApiManagementHostnameConfigurationDeveloperPortal {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/api_management.html#certificate ApiManagement#certificate}
  */
  readonly certificate?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/api_management.html#certificate_password ApiManagement#certificate_password}
  */
  readonly certificatePassword?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/api_management.html#host_name ApiManagement#host_name}
  */
  readonly hostName: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/api_management.html#key_vault_id ApiManagement#key_vault_id}
  */
  readonly keyVaultId?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/api_management.html#negotiate_client_certificate ApiManagement#negotiate_client_certificate}
  */
  readonly negotiateClientCertificate?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/api_management.html#ssl_keyvault_identity_client_id ApiManagement#ssl_keyvault_identity_client_id}
  */
  readonly sslKeyvaultIdentityClientId?: string;
}

function apiManagementHostnameConfigurationDeveloperPortalToTerraform(struct?: ApiManagementHostnameConfigurationDeveloperPortal): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    certificate: cdktf.stringToTerraform(struct!.certificate),
    certificate_password: cdktf.stringToTerraform(struct!.certificatePassword),
    host_name: cdktf.stringToTerraform(struct!.hostName),
    key_vault_id: cdktf.stringToTerraform(struct!.keyVaultId),
    negotiate_client_certificate: cdktf.booleanToTerraform(struct!.negotiateClientCertificate),
    ssl_keyvault_identity_client_id: cdktf.stringToTerraform(struct!.sslKeyvaultIdentityClientId),
  }
}

export interface ApiManagementHostnameConfigurationManagement {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/api_management.html#certificate ApiManagement#certificate}
  */
  readonly certificate?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/api_management.html#certificate_password ApiManagement#certificate_password}
  */
  readonly certificatePassword?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/api_management.html#host_name ApiManagement#host_name}
  */
  readonly hostName: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/api_management.html#key_vault_id ApiManagement#key_vault_id}
  */
  readonly keyVaultId?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/api_management.html#negotiate_client_certificate ApiManagement#negotiate_client_certificate}
  */
  readonly negotiateClientCertificate?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/api_management.html#ssl_keyvault_identity_client_id ApiManagement#ssl_keyvault_identity_client_id}
  */
  readonly sslKeyvaultIdentityClientId?: string;
}

function apiManagementHostnameConfigurationManagementToTerraform(struct?: ApiManagementHostnameConfigurationManagement): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    certificate: cdktf.stringToTerraform(struct!.certificate),
    certificate_password: cdktf.stringToTerraform(struct!.certificatePassword),
    host_name: cdktf.stringToTerraform(struct!.hostName),
    key_vault_id: cdktf.stringToTerraform(struct!.keyVaultId),
    negotiate_client_certificate: cdktf.booleanToTerraform(struct!.negotiateClientCertificate),
    ssl_keyvault_identity_client_id: cdktf.stringToTerraform(struct!.sslKeyvaultIdentityClientId),
  }
}

export interface ApiManagementHostnameConfigurationPortal {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/api_management.html#certificate ApiManagement#certificate}
  */
  readonly certificate?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/api_management.html#certificate_password ApiManagement#certificate_password}
  */
  readonly certificatePassword?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/api_management.html#host_name ApiManagement#host_name}
  */
  readonly hostName: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/api_management.html#key_vault_id ApiManagement#key_vault_id}
  */
  readonly keyVaultId?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/api_management.html#negotiate_client_certificate ApiManagement#negotiate_client_certificate}
  */
  readonly negotiateClientCertificate?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/api_management.html#ssl_keyvault_identity_client_id ApiManagement#ssl_keyvault_identity_client_id}
  */
  readonly sslKeyvaultIdentityClientId?: string;
}

function apiManagementHostnameConfigurationPortalToTerraform(struct?: ApiManagementHostnameConfigurationPortal): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    certificate: cdktf.stringToTerraform(struct!.certificate),
    certificate_password: cdktf.stringToTerraform(struct!.certificatePassword),
    host_name: cdktf.stringToTerraform(struct!.hostName),
    key_vault_id: cdktf.stringToTerraform(struct!.keyVaultId),
    negotiate_client_certificate: cdktf.booleanToTerraform(struct!.negotiateClientCertificate),
    ssl_keyvault_identity_client_id: cdktf.stringToTerraform(struct!.sslKeyvaultIdentityClientId),
  }
}

export interface ApiManagementHostnameConfigurationProxy {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/api_management.html#certificate ApiManagement#certificate}
  */
  readonly certificate?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/api_management.html#certificate_password ApiManagement#certificate_password}
  */
  readonly certificatePassword?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/api_management.html#default_ssl_binding ApiManagement#default_ssl_binding}
  */
  readonly defaultSslBinding?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/api_management.html#host_name ApiManagement#host_name}
  */
  readonly hostName: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/api_management.html#key_vault_id ApiManagement#key_vault_id}
  */
  readonly keyVaultId?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/api_management.html#negotiate_client_certificate ApiManagement#negotiate_client_certificate}
  */
  readonly negotiateClientCertificate?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/api_management.html#ssl_keyvault_identity_client_id ApiManagement#ssl_keyvault_identity_client_id}
  */
  readonly sslKeyvaultIdentityClientId?: string;
}

function apiManagementHostnameConfigurationProxyToTerraform(struct?: ApiManagementHostnameConfigurationProxy): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    certificate: cdktf.stringToTerraform(struct!.certificate),
    certificate_password: cdktf.stringToTerraform(struct!.certificatePassword),
    default_ssl_binding: cdktf.booleanToTerraform(struct!.defaultSslBinding),
    host_name: cdktf.stringToTerraform(struct!.hostName),
    key_vault_id: cdktf.stringToTerraform(struct!.keyVaultId),
    negotiate_client_certificate: cdktf.booleanToTerraform(struct!.negotiateClientCertificate),
    ssl_keyvault_identity_client_id: cdktf.stringToTerraform(struct!.sslKeyvaultIdentityClientId),
  }
}

export interface ApiManagementHostnameConfigurationScm {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/api_management.html#certificate ApiManagement#certificate}
  */
  readonly certificate?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/api_management.html#certificate_password ApiManagement#certificate_password}
  */
  readonly certificatePassword?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/api_management.html#host_name ApiManagement#host_name}
  */
  readonly hostName: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/api_management.html#key_vault_id ApiManagement#key_vault_id}
  */
  readonly keyVaultId?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/api_management.html#negotiate_client_certificate ApiManagement#negotiate_client_certificate}
  */
  readonly negotiateClientCertificate?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/api_management.html#ssl_keyvault_identity_client_id ApiManagement#ssl_keyvault_identity_client_id}
  */
  readonly sslKeyvaultIdentityClientId?: string;
}

function apiManagementHostnameConfigurationScmToTerraform(struct?: ApiManagementHostnameConfigurationScm): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    certificate: cdktf.stringToTerraform(struct!.certificate),
    certificate_password: cdktf.stringToTerraform(struct!.certificatePassword),
    host_name: cdktf.stringToTerraform(struct!.hostName),
    key_vault_id: cdktf.stringToTerraform(struct!.keyVaultId),
    negotiate_client_certificate: cdktf.booleanToTerraform(struct!.negotiateClientCertificate),
    ssl_keyvault_identity_client_id: cdktf.stringToTerraform(struct!.sslKeyvaultIdentityClientId),
  }
}

export interface ApiManagementHostnameConfiguration {
  /**
  * developer_portal block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/api_management.html#developer_portal ApiManagement#developer_portal}
  */
  readonly developerPortal?: ApiManagementHostnameConfigurationDeveloperPortal[];
  /**
  * management block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/api_management.html#management ApiManagement#management}
  */
  readonly management?: ApiManagementHostnameConfigurationManagement[];
  /**
  * portal block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/api_management.html#portal ApiManagement#portal}
  */
  readonly portal?: ApiManagementHostnameConfigurationPortal[];
  /**
  * proxy block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/api_management.html#proxy ApiManagement#proxy}
  */
  readonly proxy?: ApiManagementHostnameConfigurationProxy[];
  /**
  * scm block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/api_management.html#scm ApiManagement#scm}
  */
  readonly scm?: ApiManagementHostnameConfigurationScm[];
}

function apiManagementHostnameConfigurationToTerraform(struct?: ApiManagementHostnameConfigurationOutputReference | ApiManagementHostnameConfiguration): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    developer_portal: cdktf.listMapper(apiManagementHostnameConfigurationDeveloperPortalToTerraform)(struct!.developerPortal),
    management: cdktf.listMapper(apiManagementHostnameConfigurationManagementToTerraform)(struct!.management),
    portal: cdktf.listMapper(apiManagementHostnameConfigurationPortalToTerraform)(struct!.portal),
    proxy: cdktf.listMapper(apiManagementHostnameConfigurationProxyToTerraform)(struct!.proxy),
    scm: cdktf.listMapper(apiManagementHostnameConfigurationScmToTerraform)(struct!.scm),
  }
}

export class ApiManagementHostnameConfigurationOutputReference extends cdktf.ComplexObject {
  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param isSingleItem True if this is a block, false if it's a list
  */
  public constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean) {
    super(terraformResource, terraformAttribute, isSingleItem);
  }

  // developer_portal - computed: false, optional: true, required: false
  private _developerPortal?: ApiManagementHostnameConfigurationDeveloperPortal[] | undefined; 
  public get developerPortal() {
    // Getting the computed value is not yet implemented
    return this.interpolationForAttribute('developer_portal') as any;
  }
  public set developerPortal(value: ApiManagementHostnameConfigurationDeveloperPortal[] | undefined) {
    this._developerPortal = value;
  }
  public resetDeveloperPortal() {
    this._developerPortal = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get developerPortalInput() {
    return this._developerPortal
  }

  // management - computed: false, optional: true, required: false
  private _management?: ApiManagementHostnameConfigurationManagement[] | undefined; 
  public get management() {
    // Getting the computed value is not yet implemented
    return this.interpolationForAttribute('management') as any;
  }
  public set management(value: ApiManagementHostnameConfigurationManagement[] | undefined) {
    this._management = value;
  }
  public resetManagement() {
    this._management = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get managementInput() {
    return this._management
  }

  // portal - computed: false, optional: true, required: false
  private _portal?: ApiManagementHostnameConfigurationPortal[] | undefined; 
  public get portal() {
    // Getting the computed value is not yet implemented
    return this.interpolationForAttribute('portal') as any;
  }
  public set portal(value: ApiManagementHostnameConfigurationPortal[] | undefined) {
    this._portal = value;
  }
  public resetPortal() {
    this._portal = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get portalInput() {
    return this._portal
  }

  // proxy - computed: false, optional: true, required: false
  private _proxy?: ApiManagementHostnameConfigurationProxy[] | undefined; 
  public get proxy() {
    // Getting the computed value is not yet implemented
    return this.interpolationForAttribute('proxy') as any;
  }
  public set proxy(value: ApiManagementHostnameConfigurationProxy[] | undefined) {
    this._proxy = value;
  }
  public resetProxy() {
    this._proxy = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get proxyInput() {
    return this._proxy
  }

  // scm - computed: false, optional: true, required: false
  private _scm?: ApiManagementHostnameConfigurationScm[] | undefined; 
  public get scm() {
    // Getting the computed value is not yet implemented
    return this.interpolationForAttribute('scm') as any;
  }
  public set scm(value: ApiManagementHostnameConfigurationScm[] | undefined) {
    this._scm = value;
  }
  public resetScm() {
    this._scm = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get scmInput() {
    return this._scm
  }
}
export interface ApiManagementIdentity {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/api_management.html#identity_ids ApiManagement#identity_ids}
  */
  readonly identityIds?: string[];
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/api_management.html#type ApiManagement#type}
  */
  readonly type?: string;
}

function apiManagementIdentityToTerraform(struct?: ApiManagementIdentityOutputReference | ApiManagementIdentity): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    identity_ids: cdktf.listMapper(cdktf.stringToTerraform)(struct!.identityIds),
    type: cdktf.stringToTerraform(struct!.type),
  }
}

export class ApiManagementIdentityOutputReference extends cdktf.ComplexObject {
  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param isSingleItem True if this is a block, false if it's a list
  */
  public constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean) {
    super(terraformResource, terraformAttribute, isSingleItem);
  }

  // identity_ids - computed: false, optional: true, required: false
  private _identityIds?: string[] | undefined; 
  public get identityIds() {
    return this.getListAttribute('identity_ids');
  }
  public set identityIds(value: string[] | undefined) {
    this._identityIds = value;
  }
  public resetIdentityIds() {
    this._identityIds = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get identityIdsInput() {
    return this._identityIds
  }

  // type - computed: false, optional: true, required: false
  private _type?: string | undefined; 
  public get type() {
    return this.getStringAttribute('type');
  }
  public set type(value: string | undefined) {
    this._type = value;
  }
  public resetType() {
    this._type = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get typeInput() {
    return this._type
  }
}
export interface ApiManagementProtocols {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/api_management.html#enable_http2 ApiManagement#enable_http2}
  */
  readonly enableHttp2?: boolean | cdktf.IResolvable;
}

function apiManagementProtocolsToTerraform(struct?: ApiManagementProtocolsOutputReference | ApiManagementProtocols): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    enable_http2: cdktf.booleanToTerraform(struct!.enableHttp2),
  }
}

export class ApiManagementProtocolsOutputReference extends cdktf.ComplexObject {
  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param isSingleItem True if this is a block, false if it's a list
  */
  public constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean) {
    super(terraformResource, terraformAttribute, isSingleItem);
  }

  // enable_http2 - computed: false, optional: true, required: false
  private _enableHttp2?: boolean | cdktf.IResolvable | undefined; 
  public get enableHttp2() {
    return this.getBooleanAttribute('enable_http2') as any;
  }
  public set enableHttp2(value: boolean | cdktf.IResolvable | undefined) {
    this._enableHttp2 = value;
  }
  public resetEnableHttp2() {
    this._enableHttp2 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enableHttp2Input() {
    return this._enableHttp2
  }
}
export interface ApiManagementSecurity {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/api_management.html#enable_backend_ssl30 ApiManagement#enable_backend_ssl30}
  */
  readonly enableBackendSsl30?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/api_management.html#enable_backend_tls10 ApiManagement#enable_backend_tls10}
  */
  readonly enableBackendTls10?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/api_management.html#enable_backend_tls11 ApiManagement#enable_backend_tls11}
  */
  readonly enableBackendTls11?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/api_management.html#enable_frontend_ssl30 ApiManagement#enable_frontend_ssl30}
  */
  readonly enableFrontendSsl30?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/api_management.html#enable_frontend_tls10 ApiManagement#enable_frontend_tls10}
  */
  readonly enableFrontendTls10?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/api_management.html#enable_frontend_tls11 ApiManagement#enable_frontend_tls11}
  */
  readonly enableFrontendTls11?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/api_management.html#enable_triple_des_ciphers ApiManagement#enable_triple_des_ciphers}
  */
  readonly enableTripleDesCiphers?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/api_management.html#tls_ecdhe_ecdsa_with_aes128_cbc_sha_ciphers_enabled ApiManagement#tls_ecdhe_ecdsa_with_aes128_cbc_sha_ciphers_enabled}
  */
  readonly tlsEcdheEcdsaWithAes128CbcShaCiphersEnabled?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/api_management.html#tls_ecdhe_ecdsa_with_aes256_cbc_sha_ciphers_enabled ApiManagement#tls_ecdhe_ecdsa_with_aes256_cbc_sha_ciphers_enabled}
  */
  readonly tlsEcdheEcdsaWithAes256CbcShaCiphersEnabled?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/api_management.html#tls_ecdhe_rsa_with_aes128_cbc_sha_ciphers_enabled ApiManagement#tls_ecdhe_rsa_with_aes128_cbc_sha_ciphers_enabled}
  */
  readonly tlsEcdheRsaWithAes128CbcShaCiphersEnabled?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/api_management.html#tls_ecdhe_rsa_with_aes256_cbc_sha_ciphers_enabled ApiManagement#tls_ecdhe_rsa_with_aes256_cbc_sha_ciphers_enabled}
  */
  readonly tlsEcdheRsaWithAes256CbcShaCiphersEnabled?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/api_management.html#tls_rsa_with_aes128_cbc_sha256_ciphers_enabled ApiManagement#tls_rsa_with_aes128_cbc_sha256_ciphers_enabled}
  */
  readonly tlsRsaWithAes128CbcSha256CiphersEnabled?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/api_management.html#tls_rsa_with_aes128_cbc_sha_ciphers_enabled ApiManagement#tls_rsa_with_aes128_cbc_sha_ciphers_enabled}
  */
  readonly tlsRsaWithAes128CbcShaCiphersEnabled?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/api_management.html#tls_rsa_with_aes128_gcm_sha256_ciphers_enabled ApiManagement#tls_rsa_with_aes128_gcm_sha256_ciphers_enabled}
  */
  readonly tlsRsaWithAes128GcmSha256CiphersEnabled?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/api_management.html#tls_rsa_with_aes256_cbc_sha256_ciphers_enabled ApiManagement#tls_rsa_with_aes256_cbc_sha256_ciphers_enabled}
  */
  readonly tlsRsaWithAes256CbcSha256CiphersEnabled?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/api_management.html#tls_rsa_with_aes256_cbc_sha_ciphers_enabled ApiManagement#tls_rsa_with_aes256_cbc_sha_ciphers_enabled}
  */
  readonly tlsRsaWithAes256CbcShaCiphersEnabled?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/api_management.html#triple_des_ciphers_enabled ApiManagement#triple_des_ciphers_enabled}
  */
  readonly tripleDesCiphersEnabled?: boolean | cdktf.IResolvable;
}

function apiManagementSecurityToTerraform(struct?: ApiManagementSecurityOutputReference | ApiManagementSecurity): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    enable_backend_ssl30: cdktf.booleanToTerraform(struct!.enableBackendSsl30),
    enable_backend_tls10: cdktf.booleanToTerraform(struct!.enableBackendTls10),
    enable_backend_tls11: cdktf.booleanToTerraform(struct!.enableBackendTls11),
    enable_frontend_ssl30: cdktf.booleanToTerraform(struct!.enableFrontendSsl30),
    enable_frontend_tls10: cdktf.booleanToTerraform(struct!.enableFrontendTls10),
    enable_frontend_tls11: cdktf.booleanToTerraform(struct!.enableFrontendTls11),
    enable_triple_des_ciphers: cdktf.booleanToTerraform(struct!.enableTripleDesCiphers),
    tls_ecdhe_ecdsa_with_aes128_cbc_sha_ciphers_enabled: cdktf.booleanToTerraform(struct!.tlsEcdheEcdsaWithAes128CbcShaCiphersEnabled),
    tls_ecdhe_ecdsa_with_aes256_cbc_sha_ciphers_enabled: cdktf.booleanToTerraform(struct!.tlsEcdheEcdsaWithAes256CbcShaCiphersEnabled),
    tls_ecdhe_rsa_with_aes128_cbc_sha_ciphers_enabled: cdktf.booleanToTerraform(struct!.tlsEcdheRsaWithAes128CbcShaCiphersEnabled),
    tls_ecdhe_rsa_with_aes256_cbc_sha_ciphers_enabled: cdktf.booleanToTerraform(struct!.tlsEcdheRsaWithAes256CbcShaCiphersEnabled),
    tls_rsa_with_aes128_cbc_sha256_ciphers_enabled: cdktf.booleanToTerraform(struct!.tlsRsaWithAes128CbcSha256CiphersEnabled),
    tls_rsa_with_aes128_cbc_sha_ciphers_enabled: cdktf.booleanToTerraform(struct!.tlsRsaWithAes128CbcShaCiphersEnabled),
    tls_rsa_with_aes128_gcm_sha256_ciphers_enabled: cdktf.booleanToTerraform(struct!.tlsRsaWithAes128GcmSha256CiphersEnabled),
    tls_rsa_with_aes256_cbc_sha256_ciphers_enabled: cdktf.booleanToTerraform(struct!.tlsRsaWithAes256CbcSha256CiphersEnabled),
    tls_rsa_with_aes256_cbc_sha_ciphers_enabled: cdktf.booleanToTerraform(struct!.tlsRsaWithAes256CbcShaCiphersEnabled),
    triple_des_ciphers_enabled: cdktf.booleanToTerraform(struct!.tripleDesCiphersEnabled),
  }
}

export class ApiManagementSecurityOutputReference extends cdktf.ComplexObject {
  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param isSingleItem True if this is a block, false if it's a list
  */
  public constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean) {
    super(terraformResource, terraformAttribute, isSingleItem);
  }

  // enable_backend_ssl30 - computed: false, optional: true, required: false
  private _enableBackendSsl30?: boolean | cdktf.IResolvable | undefined; 
  public get enableBackendSsl30() {
    return this.getBooleanAttribute('enable_backend_ssl30') as any;
  }
  public set enableBackendSsl30(value: boolean | cdktf.IResolvable | undefined) {
    this._enableBackendSsl30 = value;
  }
  public resetEnableBackendSsl30() {
    this._enableBackendSsl30 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enableBackendSsl30Input() {
    return this._enableBackendSsl30
  }

  // enable_backend_tls10 - computed: false, optional: true, required: false
  private _enableBackendTls10?: boolean | cdktf.IResolvable | undefined; 
  public get enableBackendTls10() {
    return this.getBooleanAttribute('enable_backend_tls10') as any;
  }
  public set enableBackendTls10(value: boolean | cdktf.IResolvable | undefined) {
    this._enableBackendTls10 = value;
  }
  public resetEnableBackendTls10() {
    this._enableBackendTls10 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enableBackendTls10Input() {
    return this._enableBackendTls10
  }

  // enable_backend_tls11 - computed: false, optional: true, required: false
  private _enableBackendTls11?: boolean | cdktf.IResolvable | undefined; 
  public get enableBackendTls11() {
    return this.getBooleanAttribute('enable_backend_tls11') as any;
  }
  public set enableBackendTls11(value: boolean | cdktf.IResolvable | undefined) {
    this._enableBackendTls11 = value;
  }
  public resetEnableBackendTls11() {
    this._enableBackendTls11 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enableBackendTls11Input() {
    return this._enableBackendTls11
  }

  // enable_frontend_ssl30 - computed: false, optional: true, required: false
  private _enableFrontendSsl30?: boolean | cdktf.IResolvable | undefined; 
  public get enableFrontendSsl30() {
    return this.getBooleanAttribute('enable_frontend_ssl30') as any;
  }
  public set enableFrontendSsl30(value: boolean | cdktf.IResolvable | undefined) {
    this._enableFrontendSsl30 = value;
  }
  public resetEnableFrontendSsl30() {
    this._enableFrontendSsl30 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enableFrontendSsl30Input() {
    return this._enableFrontendSsl30
  }

  // enable_frontend_tls10 - computed: false, optional: true, required: false
  private _enableFrontendTls10?: boolean | cdktf.IResolvable | undefined; 
  public get enableFrontendTls10() {
    return this.getBooleanAttribute('enable_frontend_tls10') as any;
  }
  public set enableFrontendTls10(value: boolean | cdktf.IResolvable | undefined) {
    this._enableFrontendTls10 = value;
  }
  public resetEnableFrontendTls10() {
    this._enableFrontendTls10 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enableFrontendTls10Input() {
    return this._enableFrontendTls10
  }

  // enable_frontend_tls11 - computed: false, optional: true, required: false
  private _enableFrontendTls11?: boolean | cdktf.IResolvable | undefined; 
  public get enableFrontendTls11() {
    return this.getBooleanAttribute('enable_frontend_tls11') as any;
  }
  public set enableFrontendTls11(value: boolean | cdktf.IResolvable | undefined) {
    this._enableFrontendTls11 = value;
  }
  public resetEnableFrontendTls11() {
    this._enableFrontendTls11 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enableFrontendTls11Input() {
    return this._enableFrontendTls11
  }

  // enable_triple_des_ciphers - computed: true, optional: true, required: false
  private _enableTripleDesCiphers?: boolean | cdktf.IResolvable | undefined; 
  public get enableTripleDesCiphers() {
    return this.getBooleanAttribute('enable_triple_des_ciphers') as any;
  }
  public set enableTripleDesCiphers(value: boolean | cdktf.IResolvable | undefined) {
    this._enableTripleDesCiphers = value;
  }
  public resetEnableTripleDesCiphers() {
    this._enableTripleDesCiphers = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enableTripleDesCiphersInput() {
    return this._enableTripleDesCiphers
  }

  // tls_ecdhe_ecdsa_with_aes128_cbc_sha_ciphers_enabled - computed: false, optional: true, required: false
  private _tlsEcdheEcdsaWithAes128CbcShaCiphersEnabled?: boolean | cdktf.IResolvable | undefined; 
  public get tlsEcdheEcdsaWithAes128CbcShaCiphersEnabled() {
    return this.getBooleanAttribute('tls_ecdhe_ecdsa_with_aes128_cbc_sha_ciphers_enabled') as any;
  }
  public set tlsEcdheEcdsaWithAes128CbcShaCiphersEnabled(value: boolean | cdktf.IResolvable | undefined) {
    this._tlsEcdheEcdsaWithAes128CbcShaCiphersEnabled = value;
  }
  public resetTlsEcdheEcdsaWithAes128CbcShaCiphersEnabled() {
    this._tlsEcdheEcdsaWithAes128CbcShaCiphersEnabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tlsEcdheEcdsaWithAes128CbcShaCiphersEnabledInput() {
    return this._tlsEcdheEcdsaWithAes128CbcShaCiphersEnabled
  }

  // tls_ecdhe_ecdsa_with_aes256_cbc_sha_ciphers_enabled - computed: false, optional: true, required: false
  private _tlsEcdheEcdsaWithAes256CbcShaCiphersEnabled?: boolean | cdktf.IResolvable | undefined; 
  public get tlsEcdheEcdsaWithAes256CbcShaCiphersEnabled() {
    return this.getBooleanAttribute('tls_ecdhe_ecdsa_with_aes256_cbc_sha_ciphers_enabled') as any;
  }
  public set tlsEcdheEcdsaWithAes256CbcShaCiphersEnabled(value: boolean | cdktf.IResolvable | undefined) {
    this._tlsEcdheEcdsaWithAes256CbcShaCiphersEnabled = value;
  }
  public resetTlsEcdheEcdsaWithAes256CbcShaCiphersEnabled() {
    this._tlsEcdheEcdsaWithAes256CbcShaCiphersEnabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tlsEcdheEcdsaWithAes256CbcShaCiphersEnabledInput() {
    return this._tlsEcdheEcdsaWithAes256CbcShaCiphersEnabled
  }

  // tls_ecdhe_rsa_with_aes128_cbc_sha_ciphers_enabled - computed: false, optional: true, required: false
  private _tlsEcdheRsaWithAes128CbcShaCiphersEnabled?: boolean | cdktf.IResolvable | undefined; 
  public get tlsEcdheRsaWithAes128CbcShaCiphersEnabled() {
    return this.getBooleanAttribute('tls_ecdhe_rsa_with_aes128_cbc_sha_ciphers_enabled') as any;
  }
  public set tlsEcdheRsaWithAes128CbcShaCiphersEnabled(value: boolean | cdktf.IResolvable | undefined) {
    this._tlsEcdheRsaWithAes128CbcShaCiphersEnabled = value;
  }
  public resetTlsEcdheRsaWithAes128CbcShaCiphersEnabled() {
    this._tlsEcdheRsaWithAes128CbcShaCiphersEnabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tlsEcdheRsaWithAes128CbcShaCiphersEnabledInput() {
    return this._tlsEcdheRsaWithAes128CbcShaCiphersEnabled
  }

  // tls_ecdhe_rsa_with_aes256_cbc_sha_ciphers_enabled - computed: false, optional: true, required: false
  private _tlsEcdheRsaWithAes256CbcShaCiphersEnabled?: boolean | cdktf.IResolvable | undefined; 
  public get tlsEcdheRsaWithAes256CbcShaCiphersEnabled() {
    return this.getBooleanAttribute('tls_ecdhe_rsa_with_aes256_cbc_sha_ciphers_enabled') as any;
  }
  public set tlsEcdheRsaWithAes256CbcShaCiphersEnabled(value: boolean | cdktf.IResolvable | undefined) {
    this._tlsEcdheRsaWithAes256CbcShaCiphersEnabled = value;
  }
  public resetTlsEcdheRsaWithAes256CbcShaCiphersEnabled() {
    this._tlsEcdheRsaWithAes256CbcShaCiphersEnabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tlsEcdheRsaWithAes256CbcShaCiphersEnabledInput() {
    return this._tlsEcdheRsaWithAes256CbcShaCiphersEnabled
  }

  // tls_rsa_with_aes128_cbc_sha256_ciphers_enabled - computed: false, optional: true, required: false
  private _tlsRsaWithAes128CbcSha256CiphersEnabled?: boolean | cdktf.IResolvable | undefined; 
  public get tlsRsaWithAes128CbcSha256CiphersEnabled() {
    return this.getBooleanAttribute('tls_rsa_with_aes128_cbc_sha256_ciphers_enabled') as any;
  }
  public set tlsRsaWithAes128CbcSha256CiphersEnabled(value: boolean | cdktf.IResolvable | undefined) {
    this._tlsRsaWithAes128CbcSha256CiphersEnabled = value;
  }
  public resetTlsRsaWithAes128CbcSha256CiphersEnabled() {
    this._tlsRsaWithAes128CbcSha256CiphersEnabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tlsRsaWithAes128CbcSha256CiphersEnabledInput() {
    return this._tlsRsaWithAes128CbcSha256CiphersEnabled
  }

  // tls_rsa_with_aes128_cbc_sha_ciphers_enabled - computed: false, optional: true, required: false
  private _tlsRsaWithAes128CbcShaCiphersEnabled?: boolean | cdktf.IResolvable | undefined; 
  public get tlsRsaWithAes128CbcShaCiphersEnabled() {
    return this.getBooleanAttribute('tls_rsa_with_aes128_cbc_sha_ciphers_enabled') as any;
  }
  public set tlsRsaWithAes128CbcShaCiphersEnabled(value: boolean | cdktf.IResolvable | undefined) {
    this._tlsRsaWithAes128CbcShaCiphersEnabled = value;
  }
  public resetTlsRsaWithAes128CbcShaCiphersEnabled() {
    this._tlsRsaWithAes128CbcShaCiphersEnabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tlsRsaWithAes128CbcShaCiphersEnabledInput() {
    return this._tlsRsaWithAes128CbcShaCiphersEnabled
  }

  // tls_rsa_with_aes128_gcm_sha256_ciphers_enabled - computed: false, optional: true, required: false
  private _tlsRsaWithAes128GcmSha256CiphersEnabled?: boolean | cdktf.IResolvable | undefined; 
  public get tlsRsaWithAes128GcmSha256CiphersEnabled() {
    return this.getBooleanAttribute('tls_rsa_with_aes128_gcm_sha256_ciphers_enabled') as any;
  }
  public set tlsRsaWithAes128GcmSha256CiphersEnabled(value: boolean | cdktf.IResolvable | undefined) {
    this._tlsRsaWithAes128GcmSha256CiphersEnabled = value;
  }
  public resetTlsRsaWithAes128GcmSha256CiphersEnabled() {
    this._tlsRsaWithAes128GcmSha256CiphersEnabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tlsRsaWithAes128GcmSha256CiphersEnabledInput() {
    return this._tlsRsaWithAes128GcmSha256CiphersEnabled
  }

  // tls_rsa_with_aes256_cbc_sha256_ciphers_enabled - computed: false, optional: true, required: false
  private _tlsRsaWithAes256CbcSha256CiphersEnabled?: boolean | cdktf.IResolvable | undefined; 
  public get tlsRsaWithAes256CbcSha256CiphersEnabled() {
    return this.getBooleanAttribute('tls_rsa_with_aes256_cbc_sha256_ciphers_enabled') as any;
  }
  public set tlsRsaWithAes256CbcSha256CiphersEnabled(value: boolean | cdktf.IResolvable | undefined) {
    this._tlsRsaWithAes256CbcSha256CiphersEnabled = value;
  }
  public resetTlsRsaWithAes256CbcSha256CiphersEnabled() {
    this._tlsRsaWithAes256CbcSha256CiphersEnabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tlsRsaWithAes256CbcSha256CiphersEnabledInput() {
    return this._tlsRsaWithAes256CbcSha256CiphersEnabled
  }

  // tls_rsa_with_aes256_cbc_sha_ciphers_enabled - computed: false, optional: true, required: false
  private _tlsRsaWithAes256CbcShaCiphersEnabled?: boolean | cdktf.IResolvable | undefined; 
  public get tlsRsaWithAes256CbcShaCiphersEnabled() {
    return this.getBooleanAttribute('tls_rsa_with_aes256_cbc_sha_ciphers_enabled') as any;
  }
  public set tlsRsaWithAes256CbcShaCiphersEnabled(value: boolean | cdktf.IResolvable | undefined) {
    this._tlsRsaWithAes256CbcShaCiphersEnabled = value;
  }
  public resetTlsRsaWithAes256CbcShaCiphersEnabled() {
    this._tlsRsaWithAes256CbcShaCiphersEnabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tlsRsaWithAes256CbcShaCiphersEnabledInput() {
    return this._tlsRsaWithAes256CbcShaCiphersEnabled
  }

  // triple_des_ciphers_enabled - computed: true, optional: true, required: false
  private _tripleDesCiphersEnabled?: boolean | cdktf.IResolvable | undefined; 
  public get tripleDesCiphersEnabled() {
    return this.getBooleanAttribute('triple_des_ciphers_enabled') as any;
  }
  public set tripleDesCiphersEnabled(value: boolean | cdktf.IResolvable | undefined) {
    this._tripleDesCiphersEnabled = value;
  }
  public resetTripleDesCiphersEnabled() {
    this._tripleDesCiphersEnabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tripleDesCiphersEnabledInput() {
    return this._tripleDesCiphersEnabled
  }
}
export interface ApiManagementSignIn {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/api_management.html#enabled ApiManagement#enabled}
  */
  readonly enabled: boolean | cdktf.IResolvable;
}

function apiManagementSignInToTerraform(struct?: ApiManagementSignInOutputReference | ApiManagementSignIn): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    enabled: cdktf.booleanToTerraform(struct!.enabled),
  }
}

export class ApiManagementSignInOutputReference extends cdktf.ComplexObject {
  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param isSingleItem True if this is a block, false if it's a list
  */
  public constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean) {
    super(terraformResource, terraformAttribute, isSingleItem);
  }

  // enabled - computed: false, optional: false, required: true
  private _enabled?: boolean | cdktf.IResolvable; 
  public get enabled() {
    return this.getBooleanAttribute('enabled') as any;
  }
  public set enabled(value: boolean | cdktf.IResolvable) {
    this._enabled = value;
  }
  // Temporarily expose input value. Use with caution.
  public get enabledInput() {
    return this._enabled
  }
}
export interface ApiManagementSignUpTermsOfService {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/api_management.html#consent_required ApiManagement#consent_required}
  */
  readonly consentRequired: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/api_management.html#enabled ApiManagement#enabled}
  */
  readonly enabled: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/api_management.html#text ApiManagement#text}
  */
  readonly text?: string;
}

function apiManagementSignUpTermsOfServiceToTerraform(struct?: ApiManagementSignUpTermsOfServiceOutputReference | ApiManagementSignUpTermsOfService): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    consent_required: cdktf.booleanToTerraform(struct!.consentRequired),
    enabled: cdktf.booleanToTerraform(struct!.enabled),
    text: cdktf.stringToTerraform(struct!.text),
  }
}

export class ApiManagementSignUpTermsOfServiceOutputReference extends cdktf.ComplexObject {
  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param isSingleItem True if this is a block, false if it's a list
  */
  public constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean) {
    super(terraformResource, terraformAttribute, isSingleItem);
  }

  // consent_required - computed: false, optional: false, required: true
  private _consentRequired?: boolean | cdktf.IResolvable; 
  public get consentRequired() {
    return this.getBooleanAttribute('consent_required') as any;
  }
  public set consentRequired(value: boolean | cdktf.IResolvable) {
    this._consentRequired = value;
  }
  // Temporarily expose input value. Use with caution.
  public get consentRequiredInput() {
    return this._consentRequired
  }

  // enabled - computed: false, optional: false, required: true
  private _enabled?: boolean | cdktf.IResolvable; 
  public get enabled() {
    return this.getBooleanAttribute('enabled') as any;
  }
  public set enabled(value: boolean | cdktf.IResolvable) {
    this._enabled = value;
  }
  // Temporarily expose input value. Use with caution.
  public get enabledInput() {
    return this._enabled
  }

  // text - computed: false, optional: true, required: false
  private _text?: string | undefined; 
  public get text() {
    return this.getStringAttribute('text');
  }
  public set text(value: string | undefined) {
    this._text = value;
  }
  public resetText() {
    this._text = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get textInput() {
    return this._text
  }
}
export interface ApiManagementSignUp {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/api_management.html#enabled ApiManagement#enabled}
  */
  readonly enabled: boolean | cdktf.IResolvable;
  /**
  * terms_of_service block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/api_management.html#terms_of_service ApiManagement#terms_of_service}
  */
  readonly termsOfService: ApiManagementSignUpTermsOfService;
}

function apiManagementSignUpToTerraform(struct?: ApiManagementSignUpOutputReference | ApiManagementSignUp): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    enabled: cdktf.booleanToTerraform(struct!.enabled),
    terms_of_service: apiManagementSignUpTermsOfServiceToTerraform(struct!.termsOfService),
  }
}

export class ApiManagementSignUpOutputReference extends cdktf.ComplexObject {
  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param isSingleItem True if this is a block, false if it's a list
  */
  public constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean) {
    super(terraformResource, terraformAttribute, isSingleItem);
  }

  // enabled - computed: false, optional: false, required: true
  private _enabled?: boolean | cdktf.IResolvable; 
  public get enabled() {
    return this.getBooleanAttribute('enabled') as any;
  }
  public set enabled(value: boolean | cdktf.IResolvable) {
    this._enabled = value;
  }
  // Temporarily expose input value. Use with caution.
  public get enabledInput() {
    return this._enabled
  }

  // terms_of_service - computed: false, optional: false, required: true
  private _termsOfService?: ApiManagementSignUpTermsOfService; 
  private __termsOfServiceOutput = new ApiManagementSignUpTermsOfServiceOutputReference(this as any, "terms_of_service", true);
  public get termsOfService() {
    return this.__termsOfServiceOutput;
  }
  public putTermsOfService(value: ApiManagementSignUpTermsOfService) {
    this._termsOfService = value;
  }
  // Temporarily expose input value. Use with caution.
  public get termsOfServiceInput() {
    return this._termsOfService
  }
}
export interface ApiManagementTenantAccess {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/api_management.html#enabled ApiManagement#enabled}
  */
  readonly enabled: boolean | cdktf.IResolvable;
}

function apiManagementTenantAccessToTerraform(struct?: ApiManagementTenantAccessOutputReference | ApiManagementTenantAccess): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    enabled: cdktf.booleanToTerraform(struct!.enabled),
  }
}

export class ApiManagementTenantAccessOutputReference extends cdktf.ComplexObject {
  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param isSingleItem True if this is a block, false if it's a list
  */
  public constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean) {
    super(terraformResource, terraformAttribute, isSingleItem);
  }

  // enabled - computed: false, optional: false, required: true
  private _enabled?: boolean | cdktf.IResolvable; 
  public get enabled() {
    return this.getBooleanAttribute('enabled') as any;
  }
  public set enabled(value: boolean | cdktf.IResolvable) {
    this._enabled = value;
  }
  // Temporarily expose input value. Use with caution.
  public get enabledInput() {
    return this._enabled
  }
}
export interface ApiManagementTimeouts {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/api_management.html#create ApiManagement#create}
  */
  readonly create?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/api_management.html#delete ApiManagement#delete}
  */
  readonly delete?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/api_management.html#read ApiManagement#read}
  */
  readonly read?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/api_management.html#update ApiManagement#update}
  */
  readonly update?: string;
}

function apiManagementTimeoutsToTerraform(struct?: ApiManagementTimeoutsOutputReference | ApiManagementTimeouts): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    create: cdktf.stringToTerraform(struct!.create),
    delete: cdktf.stringToTerraform(struct!.delete),
    read: cdktf.stringToTerraform(struct!.read),
    update: cdktf.stringToTerraform(struct!.update),
  }
}

export class ApiManagementTimeoutsOutputReference extends cdktf.ComplexObject {
  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param isSingleItem True if this is a block, false if it's a list
  */
  public constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean) {
    super(terraformResource, terraformAttribute, isSingleItem);
  }

  // create - computed: false, optional: true, required: false
  private _create?: string | undefined; 
  public get create() {
    return this.getStringAttribute('create');
  }
  public set create(value: string | undefined) {
    this._create = value;
  }
  public resetCreate() {
    this._create = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get createInput() {
    return this._create
  }

  // delete - computed: false, optional: true, required: false
  private _delete?: string | undefined; 
  public get delete() {
    return this.getStringAttribute('delete');
  }
  public set delete(value: string | undefined) {
    this._delete = value;
  }
  public resetDelete() {
    this._delete = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get deleteInput() {
    return this._delete
  }

  // read - computed: false, optional: true, required: false
  private _read?: string | undefined; 
  public get read() {
    return this.getStringAttribute('read');
  }
  public set read(value: string | undefined) {
    this._read = value;
  }
  public resetRead() {
    this._read = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get readInput() {
    return this._read
  }

  // update - computed: false, optional: true, required: false
  private _update?: string | undefined; 
  public get update() {
    return this.getStringAttribute('update');
  }
  public set update(value: string | undefined) {
    this._update = value;
  }
  public resetUpdate() {
    this._update = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get updateInput() {
    return this._update
  }
}
export interface ApiManagementVirtualNetworkConfiguration {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/api_management.html#subnet_id ApiManagement#subnet_id}
  */
  readonly subnetId: string;
}

function apiManagementVirtualNetworkConfigurationToTerraform(struct?: ApiManagementVirtualNetworkConfigurationOutputReference | ApiManagementVirtualNetworkConfiguration): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    subnet_id: cdktf.stringToTerraform(struct!.subnetId),
  }
}

export class ApiManagementVirtualNetworkConfigurationOutputReference extends cdktf.ComplexObject {
  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param isSingleItem True if this is a block, false if it's a list
  */
  public constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean) {
    super(terraformResource, terraformAttribute, isSingleItem);
  }

  // subnet_id - computed: false, optional: false, required: true
  private _subnetId?: string; 
  public get subnetId() {
    return this.getStringAttribute('subnet_id');
  }
  public set subnetId(value: string) {
    this._subnetId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get subnetIdInput() {
    return this._subnetId
  }
}

/**
* Represents a {@link https://www.terraform.io/docs/providers/azurerm/r/api_management.html azurerm_api_management}
*/
export class ApiManagement extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType: string = "azurerm_api_management";

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://www.terraform.io/docs/providers/azurerm/r/api_management.html azurerm_api_management} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options ApiManagementConfig
  */
  public constructor(scope: Construct, id: string, config: ApiManagementConfig) {
    super(scope, id, {
      terraformResourceType: 'azurerm_api_management',
      terraformGeneratorMetadata: {
        providerName: 'azurerm'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle
    });
    this._clientCertificateEnabled = config.clientCertificateEnabled;
    this._gatewayDisabled = config.gatewayDisabled;
    this._location = config.location;
    this._minApiVersion = config.minApiVersion;
    this._name = config.name;
    this._notificationSenderEmail = config.notificationSenderEmail;
    this._policy = config.policy;
    this._publisherEmail = config.publisherEmail;
    this._publisherName = config.publisherName;
    this._resourceGroupName = config.resourceGroupName;
    this._skuName = config.skuName;
    this._tags = config.tags;
    this._virtualNetworkType = config.virtualNetworkType;
    this._zones = config.zones;
    this._additionalLocation = config.additionalLocation;
    this._certificate = config.certificate;
    this._hostnameConfiguration = config.hostnameConfiguration;
    this._identity = config.identity;
    this._protocols = config.protocols;
    this._security = config.security;
    this._signIn = config.signIn;
    this._signUp = config.signUp;
    this._tenantAccess = config.tenantAccess;
    this._timeouts = config.timeouts;
    this._virtualNetworkConfiguration = config.virtualNetworkConfiguration;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // client_certificate_enabled - computed: false, optional: true, required: false
  private _clientCertificateEnabled?: boolean | cdktf.IResolvable | undefined; 
  public get clientCertificateEnabled() {
    return this.getBooleanAttribute('client_certificate_enabled') as any;
  }
  public set clientCertificateEnabled(value: boolean | cdktf.IResolvable | undefined) {
    this._clientCertificateEnabled = value;
  }
  public resetClientCertificateEnabled() {
    this._clientCertificateEnabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get clientCertificateEnabledInput() {
    return this._clientCertificateEnabled
  }

  // developer_portal_url - computed: true, optional: false, required: false
  public get developerPortalUrl() {
    return this.getStringAttribute('developer_portal_url');
  }

  // gateway_disabled - computed: false, optional: true, required: false
  private _gatewayDisabled?: boolean | cdktf.IResolvable | undefined; 
  public get gatewayDisabled() {
    return this.getBooleanAttribute('gateway_disabled') as any;
  }
  public set gatewayDisabled(value: boolean | cdktf.IResolvable | undefined) {
    this._gatewayDisabled = value;
  }
  public resetGatewayDisabled() {
    this._gatewayDisabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get gatewayDisabledInput() {
    return this._gatewayDisabled
  }

  // gateway_regional_url - computed: true, optional: false, required: false
  public get gatewayRegionalUrl() {
    return this.getStringAttribute('gateway_regional_url');
  }

  // gateway_url - computed: true, optional: false, required: false
  public get gatewayUrl() {
    return this.getStringAttribute('gateway_url');
  }

  // id - computed: true, optional: true, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // location - computed: false, optional: false, required: true
  private _location?: string; 
  public get location() {
    return this.getStringAttribute('location');
  }
  public set location(value: string) {
    this._location = value;
  }
  // Temporarily expose input value. Use with caution.
  public get locationInput() {
    return this._location
  }

  // management_api_url - computed: true, optional: false, required: false
  public get managementApiUrl() {
    return this.getStringAttribute('management_api_url');
  }

  // min_api_version - computed: false, optional: true, required: false
  private _minApiVersion?: string | undefined; 
  public get minApiVersion() {
    return this.getStringAttribute('min_api_version');
  }
  public set minApiVersion(value: string | undefined) {
    this._minApiVersion = value;
  }
  public resetMinApiVersion() {
    this._minApiVersion = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get minApiVersionInput() {
    return this._minApiVersion
  }

  // name - computed: false, optional: false, required: true
  private _name?: string; 
  public get name() {
    return this.getStringAttribute('name');
  }
  public set name(value: string) {
    this._name = value;
  }
  // Temporarily expose input value. Use with caution.
  public get nameInput() {
    return this._name
  }

  // notification_sender_email - computed: true, optional: true, required: false
  private _notificationSenderEmail?: string | undefined; 
  public get notificationSenderEmail() {
    return this.getStringAttribute('notification_sender_email');
  }
  public set notificationSenderEmail(value: string | undefined) {
    this._notificationSenderEmail = value;
  }
  public resetNotificationSenderEmail() {
    this._notificationSenderEmail = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get notificationSenderEmailInput() {
    return this._notificationSenderEmail
  }

  // policy - computed: true, optional: true, required: false
  private _policy?: ApiManagementPolicy[] | undefined; 
  public get policy() {
    // Getting the computed value is not yet implemented
    return this.interpolationForAttribute('policy') as any;
  }
  public set policy(value: ApiManagementPolicy[] | undefined) {
    this._policy = value;
  }
  public resetPolicy() {
    this._policy = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get policyInput() {
    return this._policy
  }

  // portal_url - computed: true, optional: false, required: false
  public get portalUrl() {
    return this.getStringAttribute('portal_url');
  }

  // private_ip_addresses - computed: true, optional: false, required: false
  public get privateIpAddresses() {
    return this.getListAttribute('private_ip_addresses');
  }

  // public_ip_addresses - computed: true, optional: false, required: false
  public get publicIpAddresses() {
    return this.getListAttribute('public_ip_addresses');
  }

  // publisher_email - computed: false, optional: false, required: true
  private _publisherEmail?: string; 
  public get publisherEmail() {
    return this.getStringAttribute('publisher_email');
  }
  public set publisherEmail(value: string) {
    this._publisherEmail = value;
  }
  // Temporarily expose input value. Use with caution.
  public get publisherEmailInput() {
    return this._publisherEmail
  }

  // publisher_name - computed: false, optional: false, required: true
  private _publisherName?: string; 
  public get publisherName() {
    return this.getStringAttribute('publisher_name');
  }
  public set publisherName(value: string) {
    this._publisherName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get publisherNameInput() {
    return this._publisherName
  }

  // resource_group_name - computed: false, optional: false, required: true
  private _resourceGroupName?: string; 
  public get resourceGroupName() {
    return this.getStringAttribute('resource_group_name');
  }
  public set resourceGroupName(value: string) {
    this._resourceGroupName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get resourceGroupNameInput() {
    return this._resourceGroupName
  }

  // scm_url - computed: true, optional: false, required: false
  public get scmUrl() {
    return this.getStringAttribute('scm_url');
  }

  // sku_name - computed: false, optional: false, required: true
  private _skuName?: string; 
  public get skuName() {
    return this.getStringAttribute('sku_name');
  }
  public set skuName(value: string) {
    this._skuName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get skuNameInput() {
    return this._skuName
  }

  // tags - computed: false, optional: true, required: false
  private _tags?: { [key: string]: string } | cdktf.IResolvable | undefined; 
  public get tags() {
    // Getting the computed value is not yet implemented
    return this.interpolationForAttribute('tags') as any;
  }
  public set tags(value: { [key: string]: string } | cdktf.IResolvable | undefined) {
    this._tags = value;
  }
  public resetTags() {
    this._tags = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tagsInput() {
    return this._tags
  }

  // virtual_network_type - computed: false, optional: true, required: false
  private _virtualNetworkType?: string | undefined; 
  public get virtualNetworkType() {
    return this.getStringAttribute('virtual_network_type');
  }
  public set virtualNetworkType(value: string | undefined) {
    this._virtualNetworkType = value;
  }
  public resetVirtualNetworkType() {
    this._virtualNetworkType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get virtualNetworkTypeInput() {
    return this._virtualNetworkType
  }

  // zones - computed: false, optional: true, required: false
  private _zones?: string[] | undefined; 
  public get zones() {
    return this.getListAttribute('zones');
  }
  public set zones(value: string[] | undefined) {
    this._zones = value;
  }
  public resetZones() {
    this._zones = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get zonesInput() {
    return this._zones
  }

  // additional_location - computed: false, optional: true, required: false
  private _additionalLocation?: ApiManagementAdditionalLocation[] | undefined; 
  public get additionalLocation() {
    // Getting the computed value is not yet implemented
    return this.interpolationForAttribute('additional_location') as any;
  }
  public set additionalLocation(value: ApiManagementAdditionalLocation[] | undefined) {
    this._additionalLocation = value;
  }
  public resetAdditionalLocation() {
    this._additionalLocation = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get additionalLocationInput() {
    return this._additionalLocation
  }

  // certificate - computed: false, optional: true, required: false
  private _certificate?: ApiManagementCertificate[] | undefined; 
  public get certificate() {
    // Getting the computed value is not yet implemented
    return this.interpolationForAttribute('certificate') as any;
  }
  public set certificate(value: ApiManagementCertificate[] | undefined) {
    this._certificate = value;
  }
  public resetCertificate() {
    this._certificate = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get certificateInput() {
    return this._certificate
  }

  // hostname_configuration - computed: false, optional: true, required: false
  private _hostnameConfiguration?: ApiManagementHostnameConfiguration | undefined; 
  private __hostnameConfigurationOutput = new ApiManagementHostnameConfigurationOutputReference(this as any, "hostname_configuration", true);
  public get hostnameConfiguration() {
    return this.__hostnameConfigurationOutput;
  }
  public putHostnameConfiguration(value: ApiManagementHostnameConfiguration | undefined) {
    this._hostnameConfiguration = value;
  }
  public resetHostnameConfiguration() {
    this._hostnameConfiguration = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get hostnameConfigurationInput() {
    return this._hostnameConfiguration
  }

  // identity - computed: false, optional: true, required: false
  private _identity?: ApiManagementIdentity | undefined; 
  private __identityOutput = new ApiManagementIdentityOutputReference(this as any, "identity", true);
  public get identity() {
    return this.__identityOutput;
  }
  public putIdentity(value: ApiManagementIdentity | undefined) {
    this._identity = value;
  }
  public resetIdentity() {
    this._identity = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get identityInput() {
    return this._identity
  }

  // protocols - computed: false, optional: true, required: false
  private _protocols?: ApiManagementProtocols | undefined; 
  private __protocolsOutput = new ApiManagementProtocolsOutputReference(this as any, "protocols", true);
  public get protocols() {
    return this.__protocolsOutput;
  }
  public putProtocols(value: ApiManagementProtocols | undefined) {
    this._protocols = value;
  }
  public resetProtocols() {
    this._protocols = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get protocolsInput() {
    return this._protocols
  }

  // security - computed: false, optional: true, required: false
  private _security?: ApiManagementSecurity | undefined; 
  private __securityOutput = new ApiManagementSecurityOutputReference(this as any, "security", true);
  public get security() {
    return this.__securityOutput;
  }
  public putSecurity(value: ApiManagementSecurity | undefined) {
    this._security = value;
  }
  public resetSecurity() {
    this._security = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get securityInput() {
    return this._security
  }

  // sign_in - computed: false, optional: true, required: false
  private _signIn?: ApiManagementSignIn | undefined; 
  private __signInOutput = new ApiManagementSignInOutputReference(this as any, "sign_in", true);
  public get signIn() {
    return this.__signInOutput;
  }
  public putSignIn(value: ApiManagementSignIn | undefined) {
    this._signIn = value;
  }
  public resetSignIn() {
    this._signIn = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get signInInput() {
    return this._signIn
  }

  // sign_up - computed: false, optional: true, required: false
  private _signUp?: ApiManagementSignUp | undefined; 
  private __signUpOutput = new ApiManagementSignUpOutputReference(this as any, "sign_up", true);
  public get signUp() {
    return this.__signUpOutput;
  }
  public putSignUp(value: ApiManagementSignUp | undefined) {
    this._signUp = value;
  }
  public resetSignUp() {
    this._signUp = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get signUpInput() {
    return this._signUp
  }

  // tenant_access - computed: false, optional: true, required: false
  private _tenantAccess?: ApiManagementTenantAccess | undefined; 
  private __tenantAccessOutput = new ApiManagementTenantAccessOutputReference(this as any, "tenant_access", true);
  public get tenantAccess() {
    return this.__tenantAccessOutput;
  }
  public putTenantAccess(value: ApiManagementTenantAccess | undefined) {
    this._tenantAccess = value;
  }
  public resetTenantAccess() {
    this._tenantAccess = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tenantAccessInput() {
    return this._tenantAccess
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts?: ApiManagementTimeouts | undefined; 
  private __timeoutsOutput = new ApiManagementTimeoutsOutputReference(this as any, "timeouts", true);
  public get timeouts() {
    return this.__timeoutsOutput;
  }
  public putTimeouts(value: ApiManagementTimeouts | undefined) {
    this._timeouts = value;
  }
  public resetTimeouts() {
    this._timeouts = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get timeoutsInput() {
    return this._timeouts
  }

  // virtual_network_configuration - computed: false, optional: true, required: false
  private _virtualNetworkConfiguration?: ApiManagementVirtualNetworkConfiguration | undefined; 
  private __virtualNetworkConfigurationOutput = new ApiManagementVirtualNetworkConfigurationOutputReference(this as any, "virtual_network_configuration", true);
  public get virtualNetworkConfiguration() {
    return this.__virtualNetworkConfigurationOutput;
  }
  public putVirtualNetworkConfiguration(value: ApiManagementVirtualNetworkConfiguration | undefined) {
    this._virtualNetworkConfiguration = value;
  }
  public resetVirtualNetworkConfiguration() {
    this._virtualNetworkConfiguration = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get virtualNetworkConfigurationInput() {
    return this._virtualNetworkConfiguration
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      client_certificate_enabled: cdktf.booleanToTerraform(this._clientCertificateEnabled),
      gateway_disabled: cdktf.booleanToTerraform(this._gatewayDisabled),
      location: cdktf.stringToTerraform(this._location),
      min_api_version: cdktf.stringToTerraform(this._minApiVersion),
      name: cdktf.stringToTerraform(this._name),
      notification_sender_email: cdktf.stringToTerraform(this._notificationSenderEmail),
      policy: cdktf.listMapper(apiManagementPolicyToTerraform)(this._policy),
      publisher_email: cdktf.stringToTerraform(this._publisherEmail),
      publisher_name: cdktf.stringToTerraform(this._publisherName),
      resource_group_name: cdktf.stringToTerraform(this._resourceGroupName),
      sku_name: cdktf.stringToTerraform(this._skuName),
      tags: cdktf.hashMapper(cdktf.anyToTerraform)(this._tags),
      virtual_network_type: cdktf.stringToTerraform(this._virtualNetworkType),
      zones: cdktf.listMapper(cdktf.stringToTerraform)(this._zones),
      additional_location: cdktf.listMapper(apiManagementAdditionalLocationToTerraform)(this._additionalLocation),
      certificate: cdktf.listMapper(apiManagementCertificateToTerraform)(this._certificate),
      hostname_configuration: apiManagementHostnameConfigurationToTerraform(this._hostnameConfiguration),
      identity: apiManagementIdentityToTerraform(this._identity),
      protocols: apiManagementProtocolsToTerraform(this._protocols),
      security: apiManagementSecurityToTerraform(this._security),
      sign_in: apiManagementSignInToTerraform(this._signIn),
      sign_up: apiManagementSignUpToTerraform(this._signUp),
      tenant_access: apiManagementTenantAccessToTerraform(this._tenantAccess),
      timeouts: apiManagementTimeoutsToTerraform(this._timeouts),
      virtual_network_configuration: apiManagementVirtualNetworkConfigurationToTerraform(this._virtualNetworkConfiguration),
    };
  }
}
