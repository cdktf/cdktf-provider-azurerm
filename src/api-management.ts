// https://www.terraform.io/docs/providers/azurerm/r/api_management.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface ApiManagementConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/api_management.html#client_certificate_enabled ApiManagement#client_certificate_enabled}
  */
  readonly clientCertificateEnabled?: boolean;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/api_management.html#gateway_disabled ApiManagement#gateway_disabled}
  */
  readonly gatewayDisabled?: boolean;
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
  readonly tags?: { [key: string]: string };
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
  readonly hostnameConfiguration?: ApiManagementHostnameConfiguration[];
  /**
  * identity block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/api_management.html#identity ApiManagement#identity}
  */
  readonly identity?: ApiManagementIdentity[];
  /**
  * protocols block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/api_management.html#protocols ApiManagement#protocols}
  */
  readonly protocols?: ApiManagementProtocols[];
  /**
  * security block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/api_management.html#security ApiManagement#security}
  */
  readonly security?: ApiManagementSecurity[];
  /**
  * sign_in block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/api_management.html#sign_in ApiManagement#sign_in}
  */
  readonly signIn?: ApiManagementSignIn[];
  /**
  * sign_up block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/api_management.html#sign_up ApiManagement#sign_up}
  */
  readonly signUp?: ApiManagementSignUp[];
  /**
  * tenant_access block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/api_management.html#tenant_access ApiManagement#tenant_access}
  */
  readonly tenantAccess?: ApiManagementTenantAccess[];
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
  readonly virtualNetworkConfiguration?: ApiManagementVirtualNetworkConfiguration[];
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

function apiManagementAdditionalLocationVirtualNetworkConfigurationToTerraform(struct?: ApiManagementAdditionalLocationVirtualNetworkConfiguration): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    subnet_id: cdktf.stringToTerraform(struct!.subnetId),
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
  readonly virtualNetworkConfiguration?: ApiManagementAdditionalLocationVirtualNetworkConfiguration[];
}

function apiManagementAdditionalLocationToTerraform(struct?: ApiManagementAdditionalLocation): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    location: cdktf.stringToTerraform(struct!.location),
    virtual_network_configuration: cdktf.listMapper(apiManagementAdditionalLocationVirtualNetworkConfigurationToTerraform)(struct!.virtualNetworkConfiguration),
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
  readonly negotiateClientCertificate?: boolean;
}

function apiManagementHostnameConfigurationDeveloperPortalToTerraform(struct?: ApiManagementHostnameConfigurationDeveloperPortal): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    certificate: cdktf.stringToTerraform(struct!.certificate),
    certificate_password: cdktf.stringToTerraform(struct!.certificatePassword),
    host_name: cdktf.stringToTerraform(struct!.hostName),
    key_vault_id: cdktf.stringToTerraform(struct!.keyVaultId),
    negotiate_client_certificate: cdktf.booleanToTerraform(struct!.negotiateClientCertificate),
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
  readonly negotiateClientCertificate?: boolean;
}

function apiManagementHostnameConfigurationManagementToTerraform(struct?: ApiManagementHostnameConfigurationManagement): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    certificate: cdktf.stringToTerraform(struct!.certificate),
    certificate_password: cdktf.stringToTerraform(struct!.certificatePassword),
    host_name: cdktf.stringToTerraform(struct!.hostName),
    key_vault_id: cdktf.stringToTerraform(struct!.keyVaultId),
    negotiate_client_certificate: cdktf.booleanToTerraform(struct!.negotiateClientCertificate),
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
  readonly negotiateClientCertificate?: boolean;
}

function apiManagementHostnameConfigurationPortalToTerraform(struct?: ApiManagementHostnameConfigurationPortal): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    certificate: cdktf.stringToTerraform(struct!.certificate),
    certificate_password: cdktf.stringToTerraform(struct!.certificatePassword),
    host_name: cdktf.stringToTerraform(struct!.hostName),
    key_vault_id: cdktf.stringToTerraform(struct!.keyVaultId),
    negotiate_client_certificate: cdktf.booleanToTerraform(struct!.negotiateClientCertificate),
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
  readonly defaultSslBinding?: boolean;
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
  readonly negotiateClientCertificate?: boolean;
}

function apiManagementHostnameConfigurationProxyToTerraform(struct?: ApiManagementHostnameConfigurationProxy): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    certificate: cdktf.stringToTerraform(struct!.certificate),
    certificate_password: cdktf.stringToTerraform(struct!.certificatePassword),
    default_ssl_binding: cdktf.booleanToTerraform(struct!.defaultSslBinding),
    host_name: cdktf.stringToTerraform(struct!.hostName),
    key_vault_id: cdktf.stringToTerraform(struct!.keyVaultId),
    negotiate_client_certificate: cdktf.booleanToTerraform(struct!.negotiateClientCertificate),
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
  readonly negotiateClientCertificate?: boolean;
}

function apiManagementHostnameConfigurationScmToTerraform(struct?: ApiManagementHostnameConfigurationScm): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    certificate: cdktf.stringToTerraform(struct!.certificate),
    certificate_password: cdktf.stringToTerraform(struct!.certificatePassword),
    host_name: cdktf.stringToTerraform(struct!.hostName),
    key_vault_id: cdktf.stringToTerraform(struct!.keyVaultId),
    negotiate_client_certificate: cdktf.booleanToTerraform(struct!.negotiateClientCertificate),
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

function apiManagementHostnameConfigurationToTerraform(struct?: ApiManagementHostnameConfiguration): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    developer_portal: cdktf.listMapper(apiManagementHostnameConfigurationDeveloperPortalToTerraform)(struct!.developerPortal),
    management: cdktf.listMapper(apiManagementHostnameConfigurationManagementToTerraform)(struct!.management),
    portal: cdktf.listMapper(apiManagementHostnameConfigurationPortalToTerraform)(struct!.portal),
    proxy: cdktf.listMapper(apiManagementHostnameConfigurationProxyToTerraform)(struct!.proxy),
    scm: cdktf.listMapper(apiManagementHostnameConfigurationScmToTerraform)(struct!.scm),
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

function apiManagementIdentityToTerraform(struct?: ApiManagementIdentity): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    identity_ids: cdktf.listMapper(cdktf.stringToTerraform)(struct!.identityIds),
    type: cdktf.stringToTerraform(struct!.type),
  }
}

export interface ApiManagementProtocols {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/api_management.html#enable_http2 ApiManagement#enable_http2}
  */
  readonly enableHttp2?: boolean;
}

function apiManagementProtocolsToTerraform(struct?: ApiManagementProtocols): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    enable_http2: cdktf.booleanToTerraform(struct!.enableHttp2),
  }
}

export interface ApiManagementSecurity {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/api_management.html#enable_backend_ssl30 ApiManagement#enable_backend_ssl30}
  */
  readonly enableBackendSsl30?: boolean;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/api_management.html#enable_backend_tls10 ApiManagement#enable_backend_tls10}
  */
  readonly enableBackendTls10?: boolean;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/api_management.html#enable_backend_tls11 ApiManagement#enable_backend_tls11}
  */
  readonly enableBackendTls11?: boolean;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/api_management.html#enable_frontend_ssl30 ApiManagement#enable_frontend_ssl30}
  */
  readonly enableFrontendSsl30?: boolean;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/api_management.html#enable_frontend_tls10 ApiManagement#enable_frontend_tls10}
  */
  readonly enableFrontendTls10?: boolean;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/api_management.html#enable_frontend_tls11 ApiManagement#enable_frontend_tls11}
  */
  readonly enableFrontendTls11?: boolean;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/api_management.html#enable_triple_des_ciphers ApiManagement#enable_triple_des_ciphers}
  */
  readonly enableTripleDesCiphers?: boolean;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/api_management.html#tls_ecdhe_ecdsa_with_aes128_cbc_sha_ciphers_enabled ApiManagement#tls_ecdhe_ecdsa_with_aes128_cbc_sha_ciphers_enabled}
  */
  readonly tlsEcdheEcdsaWithAes128CbcShaCiphersEnabled?: boolean;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/api_management.html#tls_ecdhe_ecdsa_with_aes256_cbc_sha_ciphers_enabled ApiManagement#tls_ecdhe_ecdsa_with_aes256_cbc_sha_ciphers_enabled}
  */
  readonly tlsEcdheEcdsaWithAes256CbcShaCiphersEnabled?: boolean;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/api_management.html#tls_ecdhe_rsa_with_aes128_cbc_sha_ciphers_enabled ApiManagement#tls_ecdhe_rsa_with_aes128_cbc_sha_ciphers_enabled}
  */
  readonly tlsEcdheRsaWithAes128CbcShaCiphersEnabled?: boolean;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/api_management.html#tls_ecdhe_rsa_with_aes256_cbc_sha_ciphers_enabled ApiManagement#tls_ecdhe_rsa_with_aes256_cbc_sha_ciphers_enabled}
  */
  readonly tlsEcdheRsaWithAes256CbcShaCiphersEnabled?: boolean;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/api_management.html#tls_rsa_with_aes128_cbc_sha256_ciphers_enabled ApiManagement#tls_rsa_with_aes128_cbc_sha256_ciphers_enabled}
  */
  readonly tlsRsaWithAes128CbcSha256CiphersEnabled?: boolean;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/api_management.html#tls_rsa_with_aes128_cbc_sha_ciphers_enabled ApiManagement#tls_rsa_with_aes128_cbc_sha_ciphers_enabled}
  */
  readonly tlsRsaWithAes128CbcShaCiphersEnabled?: boolean;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/api_management.html#tls_rsa_with_aes128_gcm_sha256_ciphers_enabled ApiManagement#tls_rsa_with_aes128_gcm_sha256_ciphers_enabled}
  */
  readonly tlsRsaWithAes128GcmSha256CiphersEnabled?: boolean;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/api_management.html#tls_rsa_with_aes256_cbc_sha256_ciphers_enabled ApiManagement#tls_rsa_with_aes256_cbc_sha256_ciphers_enabled}
  */
  readonly tlsRsaWithAes256CbcSha256CiphersEnabled?: boolean;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/api_management.html#tls_rsa_with_aes256_cbc_sha_ciphers_enabled ApiManagement#tls_rsa_with_aes256_cbc_sha_ciphers_enabled}
  */
  readonly tlsRsaWithAes256CbcShaCiphersEnabled?: boolean;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/api_management.html#triple_des_ciphers_enabled ApiManagement#triple_des_ciphers_enabled}
  */
  readonly tripleDesCiphersEnabled?: boolean;
}

function apiManagementSecurityToTerraform(struct?: ApiManagementSecurity): any {
  if (!cdktf.canInspect(struct)) { return struct; }
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

export interface ApiManagementSignIn {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/api_management.html#enabled ApiManagement#enabled}
  */
  readonly enabled: boolean;
}

function apiManagementSignInToTerraform(struct?: ApiManagementSignIn): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    enabled: cdktf.booleanToTerraform(struct!.enabled),
  }
}

export interface ApiManagementSignUpTermsOfService {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/api_management.html#consent_required ApiManagement#consent_required}
  */
  readonly consentRequired: boolean;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/api_management.html#enabled ApiManagement#enabled}
  */
  readonly enabled: boolean;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/api_management.html#text ApiManagement#text}
  */
  readonly text?: string;
}

function apiManagementSignUpTermsOfServiceToTerraform(struct?: ApiManagementSignUpTermsOfService): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    consent_required: cdktf.booleanToTerraform(struct!.consentRequired),
    enabled: cdktf.booleanToTerraform(struct!.enabled),
    text: cdktf.stringToTerraform(struct!.text),
  }
}

export interface ApiManagementSignUp {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/api_management.html#enabled ApiManagement#enabled}
  */
  readonly enabled: boolean;
  /**
  * terms_of_service block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/api_management.html#terms_of_service ApiManagement#terms_of_service}
  */
  readonly termsOfService: ApiManagementSignUpTermsOfService[];
}

function apiManagementSignUpToTerraform(struct?: ApiManagementSignUp): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    enabled: cdktf.booleanToTerraform(struct!.enabled),
    terms_of_service: cdktf.listMapper(apiManagementSignUpTermsOfServiceToTerraform)(struct!.termsOfService),
  }
}

export interface ApiManagementTenantAccess {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/api_management.html#enabled ApiManagement#enabled}
  */
  readonly enabled: boolean;
}

function apiManagementTenantAccessToTerraform(struct?: ApiManagementTenantAccess): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    enabled: cdktf.booleanToTerraform(struct!.enabled),
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

function apiManagementTimeoutsToTerraform(struct?: ApiManagementTimeouts): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    create: cdktf.stringToTerraform(struct!.create),
    delete: cdktf.stringToTerraform(struct!.delete),
    read: cdktf.stringToTerraform(struct!.read),
    update: cdktf.stringToTerraform(struct!.update),
  }
}

export interface ApiManagementVirtualNetworkConfiguration {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/api_management.html#subnet_id ApiManagement#subnet_id}
  */
  readonly subnetId: string;
}

function apiManagementVirtualNetworkConfigurationToTerraform(struct?: ApiManagementVirtualNetworkConfiguration): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    subnet_id: cdktf.stringToTerraform(struct!.subnetId),
  }
}


/**
* Represents a {@link https://www.terraform.io/docs/providers/azurerm/r/api_management.html azurerm_api_management}
*/
export class ApiManagement extends cdktf.TerraformResource {

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
  private _clientCertificateEnabled?: boolean;
  public get clientCertificateEnabled() {
    return this.getBooleanAttribute('client_certificate_enabled');
  }
  public set clientCertificateEnabled(value: boolean ) {
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
  private _gatewayDisabled?: boolean;
  public get gatewayDisabled() {
    return this.getBooleanAttribute('gateway_disabled');
  }
  public set gatewayDisabled(value: boolean ) {
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
  private _location: string;
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
  private _minApiVersion?: string;
  public get minApiVersion() {
    return this.getStringAttribute('min_api_version');
  }
  public set minApiVersion(value: string ) {
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
  private _name: string;
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
  private _notificationSenderEmail?: string;
  public get notificationSenderEmail() {
    return this.getStringAttribute('notification_sender_email');
  }
  public set notificationSenderEmail(value: string) {
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
  private _policy?: ApiManagementPolicy[]
  public get policy(): ApiManagementPolicy[] {
    return this.interpolationForAttribute('policy') as any; // Getting the computed value is not yet implemented
  }
  public set policy(value: ApiManagementPolicy[]) {
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
  private _publisherEmail: string;
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
  private _publisherName: string;
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
  private _resourceGroupName: string;
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
  private _skuName: string;
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
  private _tags?: { [key: string]: string };
  public get tags() {
    return this.interpolationForAttribute('tags') as any;
  }
  public set tags(value: { [key: string]: string } ) {
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
  private _virtualNetworkType?: string;
  public get virtualNetworkType() {
    return this.getStringAttribute('virtual_network_type');
  }
  public set virtualNetworkType(value: string ) {
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
  private _zones?: string[];
  public get zones() {
    return this.getListAttribute('zones');
  }
  public set zones(value: string[] ) {
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
  private _additionalLocation?: ApiManagementAdditionalLocation[];
  public get additionalLocation() {
    return this.interpolationForAttribute('additional_location') as any;
  }
  public set additionalLocation(value: ApiManagementAdditionalLocation[] ) {
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
  private _certificate?: ApiManagementCertificate[];
  public get certificate() {
    return this.interpolationForAttribute('certificate') as any;
  }
  public set certificate(value: ApiManagementCertificate[] ) {
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
  private _hostnameConfiguration?: ApiManagementHostnameConfiguration[];
  public get hostnameConfiguration() {
    return this.interpolationForAttribute('hostname_configuration') as any;
  }
  public set hostnameConfiguration(value: ApiManagementHostnameConfiguration[] ) {
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
  private _identity?: ApiManagementIdentity[];
  public get identity() {
    return this.interpolationForAttribute('identity') as any;
  }
  public set identity(value: ApiManagementIdentity[] ) {
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
  private _protocols?: ApiManagementProtocols[];
  public get protocols() {
    return this.interpolationForAttribute('protocols') as any;
  }
  public set protocols(value: ApiManagementProtocols[] ) {
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
  private _security?: ApiManagementSecurity[];
  public get security() {
    return this.interpolationForAttribute('security') as any;
  }
  public set security(value: ApiManagementSecurity[] ) {
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
  private _signIn?: ApiManagementSignIn[];
  public get signIn() {
    return this.interpolationForAttribute('sign_in') as any;
  }
  public set signIn(value: ApiManagementSignIn[] ) {
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
  private _signUp?: ApiManagementSignUp[];
  public get signUp() {
    return this.interpolationForAttribute('sign_up') as any;
  }
  public set signUp(value: ApiManagementSignUp[] ) {
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
  private _tenantAccess?: ApiManagementTenantAccess[];
  public get tenantAccess() {
    return this.interpolationForAttribute('tenant_access') as any;
  }
  public set tenantAccess(value: ApiManagementTenantAccess[] ) {
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
  private _timeouts?: ApiManagementTimeouts;
  public get timeouts() {
    return this.interpolationForAttribute('timeouts') as any;
  }
  public set timeouts(value: ApiManagementTimeouts ) {
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
  private _virtualNetworkConfiguration?: ApiManagementVirtualNetworkConfiguration[];
  public get virtualNetworkConfiguration() {
    return this.interpolationForAttribute('virtual_network_configuration') as any;
  }
  public set virtualNetworkConfiguration(value: ApiManagementVirtualNetworkConfiguration[] ) {
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
      hostname_configuration: cdktf.listMapper(apiManagementHostnameConfigurationToTerraform)(this._hostnameConfiguration),
      identity: cdktf.listMapper(apiManagementIdentityToTerraform)(this._identity),
      protocols: cdktf.listMapper(apiManagementProtocolsToTerraform)(this._protocols),
      security: cdktf.listMapper(apiManagementSecurityToTerraform)(this._security),
      sign_in: cdktf.listMapper(apiManagementSignInToTerraform)(this._signIn),
      sign_up: cdktf.listMapper(apiManagementSignUpToTerraform)(this._signUp),
      tenant_access: cdktf.listMapper(apiManagementTenantAccessToTerraform)(this._tenantAccess),
      timeouts: apiManagementTimeoutsToTerraform(this._timeouts),
      virtual_network_configuration: cdktf.listMapper(apiManagementVirtualNetworkConfigurationToTerraform)(this._virtualNetworkConfiguration),
    };
  }
}
