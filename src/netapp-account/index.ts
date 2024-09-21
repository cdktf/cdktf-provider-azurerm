// https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/netapp_account
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface NetappAccountConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/netapp_account#id NetappAccount#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/netapp_account#location NetappAccount#location}
  */
  readonly location: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/netapp_account#name NetappAccount#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/netapp_account#resource_group_name NetappAccount#resource_group_name}
  */
  readonly resourceGroupName: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/netapp_account#tags NetappAccount#tags}
  */
  readonly tags?: { [key: string]: string };
  /**
  * active_directory block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/netapp_account#active_directory NetappAccount#active_directory}
  */
  readonly activeDirectory?: NetappAccountActiveDirectory;
  /**
  * identity block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/netapp_account#identity NetappAccount#identity}
  */
  readonly identity?: NetappAccountIdentity;
  /**
  * timeouts block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/netapp_account#timeouts NetappAccount#timeouts}
  */
  readonly timeouts?: NetappAccountTimeouts;
}
export interface NetappAccountActiveDirectory {
  /**
  * If enabled, AES encryption will be enabled for SMB communication.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/netapp_account#aes_encryption_enabled NetappAccount#aes_encryption_enabled}
  */
  readonly aesEncryptionEnabled?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/netapp_account#dns_servers NetappAccount#dns_servers}
  */
  readonly dnsServers: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/netapp_account#domain NetappAccount#domain}
  */
  readonly domain: string;
  /**
  * Name of the active directory machine. This optional parameter is used only while creating kerberos volume.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/netapp_account#kerberos_ad_name NetappAccount#kerberos_ad_name}
  */
  readonly kerberosAdName?: string;
  /**
  * IP address of the KDC server (usually same the DC). This optional parameter is used only while creating kerberos volume.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/netapp_account#kerberos_kdc_ip NetappAccount#kerberos_kdc_ip}
  */
  readonly kerberosKdcIp?: string;
  /**
  * Specifies whether or not the LDAP traffic needs to be secured via TLS.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/netapp_account#ldap_over_tls_enabled NetappAccount#ldap_over_tls_enabled}
  */
  readonly ldapOverTlsEnabled?: boolean | cdktf.IResolvable;
  /**
  * Specifies whether or not the LDAP traffic needs to be signed.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/netapp_account#ldap_signing_enabled NetappAccount#ldap_signing_enabled}
  */
  readonly ldapSigningEnabled?: boolean | cdktf.IResolvable;
  /**
  * If enabled, NFS client local users can also (in addition to LDAP users) access the NFS volumes.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/netapp_account#local_nfs_users_with_ldap_allowed NetappAccount#local_nfs_users_with_ldap_allowed}
  */
  readonly localNfsUsersWithLdapAllowed?: boolean | cdktf.IResolvable;
  /**
  * The Organizational Unit (OU) within the Windows Active Directory where machines will be created. If blank, defaults to 'CN=Computers'
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/netapp_account#organizational_unit NetappAccount#organizational_unit}
  */
  readonly organizationalUnit?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/netapp_account#password NetappAccount#password}
  */
  readonly password: string;
  /**
  * When LDAP over SSL/TLS is enabled, the LDAP client is required to have base64 encoded Active Directory Certificate Service's self-signed root CA certificate, this optional parameter is used only for dual protocol with LDAP user-mapping volumes.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/netapp_account#server_root_ca_certificate NetappAccount#server_root_ca_certificate}
  */
  readonly serverRootCaCertificate?: string;
  /**
  * The Active Directory site the service will limit Domain Controller discovery to. If blank, defaults to 'Default-First-Site-Name'
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/netapp_account#site_name NetappAccount#site_name}
  */
  readonly siteName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/netapp_account#smb_server_name NetappAccount#smb_server_name}
  */
  readonly smbServerName: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/netapp_account#username NetappAccount#username}
  */
  readonly username: string;
}

export function netappAccountActiveDirectoryToTerraform(struct?: NetappAccountActiveDirectoryOutputReference | NetappAccountActiveDirectory): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    aes_encryption_enabled: cdktf.booleanToTerraform(struct!.aesEncryptionEnabled),
    dns_servers: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.dnsServers),
    domain: cdktf.stringToTerraform(struct!.domain),
    kerberos_ad_name: cdktf.stringToTerraform(struct!.kerberosAdName),
    kerberos_kdc_ip: cdktf.stringToTerraform(struct!.kerberosKdcIp),
    ldap_over_tls_enabled: cdktf.booleanToTerraform(struct!.ldapOverTlsEnabled),
    ldap_signing_enabled: cdktf.booleanToTerraform(struct!.ldapSigningEnabled),
    local_nfs_users_with_ldap_allowed: cdktf.booleanToTerraform(struct!.localNfsUsersWithLdapAllowed),
    organizational_unit: cdktf.stringToTerraform(struct!.organizationalUnit),
    password: cdktf.stringToTerraform(struct!.password),
    server_root_ca_certificate: cdktf.stringToTerraform(struct!.serverRootCaCertificate),
    site_name: cdktf.stringToTerraform(struct!.siteName),
    smb_server_name: cdktf.stringToTerraform(struct!.smbServerName),
    username: cdktf.stringToTerraform(struct!.username),
  }
}


export function netappAccountActiveDirectoryToHclTerraform(struct?: NetappAccountActiveDirectoryOutputReference | NetappAccountActiveDirectory): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    aes_encryption_enabled: {
      value: cdktf.booleanToHclTerraform(struct!.aesEncryptionEnabled),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    dns_servers: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.dnsServers),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    domain: {
      value: cdktf.stringToHclTerraform(struct!.domain),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    kerberos_ad_name: {
      value: cdktf.stringToHclTerraform(struct!.kerberosAdName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    kerberos_kdc_ip: {
      value: cdktf.stringToHclTerraform(struct!.kerberosKdcIp),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    ldap_over_tls_enabled: {
      value: cdktf.booleanToHclTerraform(struct!.ldapOverTlsEnabled),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    ldap_signing_enabled: {
      value: cdktf.booleanToHclTerraform(struct!.ldapSigningEnabled),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    local_nfs_users_with_ldap_allowed: {
      value: cdktf.booleanToHclTerraform(struct!.localNfsUsersWithLdapAllowed),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    organizational_unit: {
      value: cdktf.stringToHclTerraform(struct!.organizationalUnit),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    password: {
      value: cdktf.stringToHclTerraform(struct!.password),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    server_root_ca_certificate: {
      value: cdktf.stringToHclTerraform(struct!.serverRootCaCertificate),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    site_name: {
      value: cdktf.stringToHclTerraform(struct!.siteName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    smb_server_name: {
      value: cdktf.stringToHclTerraform(struct!.smbServerName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    username: {
      value: cdktf.stringToHclTerraform(struct!.username),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class NetappAccountActiveDirectoryOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): NetappAccountActiveDirectory | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._aesEncryptionEnabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.aesEncryptionEnabled = this._aesEncryptionEnabled;
    }
    if (this._dnsServers !== undefined) {
      hasAnyValues = true;
      internalValueResult.dnsServers = this._dnsServers;
    }
    if (this._domain !== undefined) {
      hasAnyValues = true;
      internalValueResult.domain = this._domain;
    }
    if (this._kerberosAdName !== undefined) {
      hasAnyValues = true;
      internalValueResult.kerberosAdName = this._kerberosAdName;
    }
    if (this._kerberosKdcIp !== undefined) {
      hasAnyValues = true;
      internalValueResult.kerberosKdcIp = this._kerberosKdcIp;
    }
    if (this._ldapOverTlsEnabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.ldapOverTlsEnabled = this._ldapOverTlsEnabled;
    }
    if (this._ldapSigningEnabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.ldapSigningEnabled = this._ldapSigningEnabled;
    }
    if (this._localNfsUsersWithLdapAllowed !== undefined) {
      hasAnyValues = true;
      internalValueResult.localNfsUsersWithLdapAllowed = this._localNfsUsersWithLdapAllowed;
    }
    if (this._organizationalUnit !== undefined) {
      hasAnyValues = true;
      internalValueResult.organizationalUnit = this._organizationalUnit;
    }
    if (this._password !== undefined) {
      hasAnyValues = true;
      internalValueResult.password = this._password;
    }
    if (this._serverRootCaCertificate !== undefined) {
      hasAnyValues = true;
      internalValueResult.serverRootCaCertificate = this._serverRootCaCertificate;
    }
    if (this._siteName !== undefined) {
      hasAnyValues = true;
      internalValueResult.siteName = this._siteName;
    }
    if (this._smbServerName !== undefined) {
      hasAnyValues = true;
      internalValueResult.smbServerName = this._smbServerName;
    }
    if (this._username !== undefined) {
      hasAnyValues = true;
      internalValueResult.username = this._username;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: NetappAccountActiveDirectory | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._aesEncryptionEnabled = undefined;
      this._dnsServers = undefined;
      this._domain = undefined;
      this._kerberosAdName = undefined;
      this._kerberosKdcIp = undefined;
      this._ldapOverTlsEnabled = undefined;
      this._ldapSigningEnabled = undefined;
      this._localNfsUsersWithLdapAllowed = undefined;
      this._organizationalUnit = undefined;
      this._password = undefined;
      this._serverRootCaCertificate = undefined;
      this._siteName = undefined;
      this._smbServerName = undefined;
      this._username = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._aesEncryptionEnabled = value.aesEncryptionEnabled;
      this._dnsServers = value.dnsServers;
      this._domain = value.domain;
      this._kerberosAdName = value.kerberosAdName;
      this._kerberosKdcIp = value.kerberosKdcIp;
      this._ldapOverTlsEnabled = value.ldapOverTlsEnabled;
      this._ldapSigningEnabled = value.ldapSigningEnabled;
      this._localNfsUsersWithLdapAllowed = value.localNfsUsersWithLdapAllowed;
      this._organizationalUnit = value.organizationalUnit;
      this._password = value.password;
      this._serverRootCaCertificate = value.serverRootCaCertificate;
      this._siteName = value.siteName;
      this._smbServerName = value.smbServerName;
      this._username = value.username;
    }
  }

  // aes_encryption_enabled - computed: false, optional: true, required: false
  private _aesEncryptionEnabled?: boolean | cdktf.IResolvable; 
  public get aesEncryptionEnabled() {
    return this.getBooleanAttribute('aes_encryption_enabled');
  }
  public set aesEncryptionEnabled(value: boolean | cdktf.IResolvable) {
    this._aesEncryptionEnabled = value;
  }
  public resetAesEncryptionEnabled() {
    this._aesEncryptionEnabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get aesEncryptionEnabledInput() {
    return this._aesEncryptionEnabled;
  }

  // dns_servers - computed: false, optional: false, required: true
  private _dnsServers?: string[]; 
  public get dnsServers() {
    return this.getListAttribute('dns_servers');
  }
  public set dnsServers(value: string[]) {
    this._dnsServers = value;
  }
  // Temporarily expose input value. Use with caution.
  public get dnsServersInput() {
    return this._dnsServers;
  }

  // domain - computed: false, optional: false, required: true
  private _domain?: string; 
  public get domain() {
    return this.getStringAttribute('domain');
  }
  public set domain(value: string) {
    this._domain = value;
  }
  // Temporarily expose input value. Use with caution.
  public get domainInput() {
    return this._domain;
  }

  // kerberos_ad_name - computed: false, optional: true, required: false
  private _kerberosAdName?: string; 
  public get kerberosAdName() {
    return this.getStringAttribute('kerberos_ad_name');
  }
  public set kerberosAdName(value: string) {
    this._kerberosAdName = value;
  }
  public resetKerberosAdName() {
    this._kerberosAdName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get kerberosAdNameInput() {
    return this._kerberosAdName;
  }

  // kerberos_kdc_ip - computed: false, optional: true, required: false
  private _kerberosKdcIp?: string; 
  public get kerberosKdcIp() {
    return this.getStringAttribute('kerberos_kdc_ip');
  }
  public set kerberosKdcIp(value: string) {
    this._kerberosKdcIp = value;
  }
  public resetKerberosKdcIp() {
    this._kerberosKdcIp = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get kerberosKdcIpInput() {
    return this._kerberosKdcIp;
  }

  // ldap_over_tls_enabled - computed: false, optional: true, required: false
  private _ldapOverTlsEnabled?: boolean | cdktf.IResolvable; 
  public get ldapOverTlsEnabled() {
    return this.getBooleanAttribute('ldap_over_tls_enabled');
  }
  public set ldapOverTlsEnabled(value: boolean | cdktf.IResolvable) {
    this._ldapOverTlsEnabled = value;
  }
  public resetLdapOverTlsEnabled() {
    this._ldapOverTlsEnabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ldapOverTlsEnabledInput() {
    return this._ldapOverTlsEnabled;
  }

  // ldap_signing_enabled - computed: false, optional: true, required: false
  private _ldapSigningEnabled?: boolean | cdktf.IResolvable; 
  public get ldapSigningEnabled() {
    return this.getBooleanAttribute('ldap_signing_enabled');
  }
  public set ldapSigningEnabled(value: boolean | cdktf.IResolvable) {
    this._ldapSigningEnabled = value;
  }
  public resetLdapSigningEnabled() {
    this._ldapSigningEnabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ldapSigningEnabledInput() {
    return this._ldapSigningEnabled;
  }

  // local_nfs_users_with_ldap_allowed - computed: false, optional: true, required: false
  private _localNfsUsersWithLdapAllowed?: boolean | cdktf.IResolvable; 
  public get localNfsUsersWithLdapAllowed() {
    return this.getBooleanAttribute('local_nfs_users_with_ldap_allowed');
  }
  public set localNfsUsersWithLdapAllowed(value: boolean | cdktf.IResolvable) {
    this._localNfsUsersWithLdapAllowed = value;
  }
  public resetLocalNfsUsersWithLdapAllowed() {
    this._localNfsUsersWithLdapAllowed = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get localNfsUsersWithLdapAllowedInput() {
    return this._localNfsUsersWithLdapAllowed;
  }

  // organizational_unit - computed: false, optional: true, required: false
  private _organizationalUnit?: string; 
  public get organizationalUnit() {
    return this.getStringAttribute('organizational_unit');
  }
  public set organizationalUnit(value: string) {
    this._organizationalUnit = value;
  }
  public resetOrganizationalUnit() {
    this._organizationalUnit = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get organizationalUnitInput() {
    return this._organizationalUnit;
  }

  // password - computed: false, optional: false, required: true
  private _password?: string; 
  public get password() {
    return this.getStringAttribute('password');
  }
  public set password(value: string) {
    this._password = value;
  }
  // Temporarily expose input value. Use with caution.
  public get passwordInput() {
    return this._password;
  }

  // server_root_ca_certificate - computed: false, optional: true, required: false
  private _serverRootCaCertificate?: string; 
  public get serverRootCaCertificate() {
    return this.getStringAttribute('server_root_ca_certificate');
  }
  public set serverRootCaCertificate(value: string) {
    this._serverRootCaCertificate = value;
  }
  public resetServerRootCaCertificate() {
    this._serverRootCaCertificate = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get serverRootCaCertificateInput() {
    return this._serverRootCaCertificate;
  }

  // site_name - computed: false, optional: true, required: false
  private _siteName?: string; 
  public get siteName() {
    return this.getStringAttribute('site_name');
  }
  public set siteName(value: string) {
    this._siteName = value;
  }
  public resetSiteName() {
    this._siteName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get siteNameInput() {
    return this._siteName;
  }

  // smb_server_name - computed: false, optional: false, required: true
  private _smbServerName?: string; 
  public get smbServerName() {
    return this.getStringAttribute('smb_server_name');
  }
  public set smbServerName(value: string) {
    this._smbServerName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get smbServerNameInput() {
    return this._smbServerName;
  }

  // username - computed: false, optional: false, required: true
  private _username?: string; 
  public get username() {
    return this.getStringAttribute('username');
  }
  public set username(value: string) {
    this._username = value;
  }
  // Temporarily expose input value. Use with caution.
  public get usernameInput() {
    return this._username;
  }
}
export interface NetappAccountIdentity {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/netapp_account#identity_ids NetappAccount#identity_ids}
  */
  readonly identityIds?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/netapp_account#type NetappAccount#type}
  */
  readonly type: string;
}

export function netappAccountIdentityToTerraform(struct?: NetappAccountIdentityOutputReference | NetappAccountIdentity): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    identity_ids: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.identityIds),
    type: cdktf.stringToTerraform(struct!.type),
  }
}


export function netappAccountIdentityToHclTerraform(struct?: NetappAccountIdentityOutputReference | NetappAccountIdentity): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    identity_ids: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.identityIds),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
    type: {
      value: cdktf.stringToHclTerraform(struct!.type),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class NetappAccountIdentityOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): NetappAccountIdentity | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._identityIds !== undefined) {
      hasAnyValues = true;
      internalValueResult.identityIds = this._identityIds;
    }
    if (this._type !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: NetappAccountIdentity | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._identityIds = undefined;
      this._type = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._identityIds = value.identityIds;
      this._type = value.type;
    }
  }

  // identity_ids - computed: false, optional: true, required: false
  private _identityIds?: string[]; 
  public get identityIds() {
    return cdktf.Fn.tolist(this.getListAttribute('identity_ids'));
  }
  public set identityIds(value: string[]) {
    this._identityIds = value;
  }
  public resetIdentityIds() {
    this._identityIds = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get identityIdsInput() {
    return this._identityIds;
  }

  // principal_id - computed: true, optional: false, required: false
  public get principalId() {
    return this.getStringAttribute('principal_id');
  }

  // tenant_id - computed: true, optional: false, required: false
  public get tenantId() {
    return this.getStringAttribute('tenant_id');
  }

  // type - computed: false, optional: false, required: true
  private _type?: string; 
  public get type() {
    return this.getStringAttribute('type');
  }
  public set type(value: string) {
    this._type = value;
  }
  // Temporarily expose input value. Use with caution.
  public get typeInput() {
    return this._type;
  }
}
export interface NetappAccountTimeouts {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/netapp_account#create NetappAccount#create}
  */
  readonly create?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/netapp_account#delete NetappAccount#delete}
  */
  readonly delete?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/netapp_account#read NetappAccount#read}
  */
  readonly read?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/netapp_account#update NetappAccount#update}
  */
  readonly update?: string;
}

export function netappAccountTimeoutsToTerraform(struct?: NetappAccountTimeouts | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
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


export function netappAccountTimeoutsToHclTerraform(struct?: NetappAccountTimeouts | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    create: {
      value: cdktf.stringToHclTerraform(struct!.create),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    delete: {
      value: cdktf.stringToHclTerraform(struct!.delete),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    read: {
      value: cdktf.stringToHclTerraform(struct!.read),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    update: {
      value: cdktf.stringToHclTerraform(struct!.update),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class NetappAccountTimeoutsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): NetappAccountTimeouts | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._create !== undefined) {
      hasAnyValues = true;
      internalValueResult.create = this._create;
    }
    if (this._delete !== undefined) {
      hasAnyValues = true;
      internalValueResult.delete = this._delete;
    }
    if (this._read !== undefined) {
      hasAnyValues = true;
      internalValueResult.read = this._read;
    }
    if (this._update !== undefined) {
      hasAnyValues = true;
      internalValueResult.update = this._update;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: NetappAccountTimeouts | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._create = undefined;
      this._delete = undefined;
      this._read = undefined;
      this._update = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._create = value.create;
      this._delete = value.delete;
      this._read = value.read;
      this._update = value.update;
    }
  }

  // create - computed: false, optional: true, required: false
  private _create?: string; 
  public get create() {
    return this.getStringAttribute('create');
  }
  public set create(value: string) {
    this._create = value;
  }
  public resetCreate() {
    this._create = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get createInput() {
    return this._create;
  }

  // delete - computed: false, optional: true, required: false
  private _delete?: string; 
  public get delete() {
    return this.getStringAttribute('delete');
  }
  public set delete(value: string) {
    this._delete = value;
  }
  public resetDelete() {
    this._delete = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get deleteInput() {
    return this._delete;
  }

  // read - computed: false, optional: true, required: false
  private _read?: string; 
  public get read() {
    return this.getStringAttribute('read');
  }
  public set read(value: string) {
    this._read = value;
  }
  public resetRead() {
    this._read = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get readInput() {
    return this._read;
  }

  // update - computed: false, optional: true, required: false
  private _update?: string; 
  public get update() {
    return this.getStringAttribute('update');
  }
  public set update(value: string) {
    this._update = value;
  }
  public resetUpdate() {
    this._update = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get updateInput() {
    return this._update;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/netapp_account azurerm_netapp_account}
*/
export class NetappAccount extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "azurerm_netapp_account";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a NetappAccount resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the NetappAccount to import
  * @param importFromId The id of the existing NetappAccount that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/netapp_account#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the NetappAccount to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "azurerm_netapp_account", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/netapp_account azurerm_netapp_account} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options NetappAccountConfig
  */
  public constructor(scope: Construct, id: string, config: NetappAccountConfig) {
    super(scope, id, {
      terraformResourceType: 'azurerm_netapp_account',
      terraformGeneratorMetadata: {
        providerName: 'azurerm',
        providerVersion: '4.3.0',
        providerVersionConstraint: '~> 4.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._id = config.id;
    this._location = config.location;
    this._name = config.name;
    this._resourceGroupName = config.resourceGroupName;
    this._tags = config.tags;
    this._activeDirectory.internalValue = config.activeDirectory;
    this._identity.internalValue = config.identity;
    this._timeouts.internalValue = config.timeouts;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // id - computed: true, optional: true, required: false
  private _id?: string; 
  public get id() {
    return this.getStringAttribute('id');
  }
  public set id(value: string) {
    this._id = value;
  }
  public resetId() {
    this._id = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get idInput() {
    return this._id;
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
    return this._location;
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
    return this._name;
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
    return this._resourceGroupName;
  }

  // tags - computed: false, optional: true, required: false
  private _tags?: { [key: string]: string }; 
  public get tags() {
    return this.getStringMapAttribute('tags');
  }
  public set tags(value: { [key: string]: string }) {
    this._tags = value;
  }
  public resetTags() {
    this._tags = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tagsInput() {
    return this._tags;
  }

  // active_directory - computed: false, optional: true, required: false
  private _activeDirectory = new NetappAccountActiveDirectoryOutputReference(this, "active_directory");
  public get activeDirectory() {
    return this._activeDirectory;
  }
  public putActiveDirectory(value: NetappAccountActiveDirectory) {
    this._activeDirectory.internalValue = value;
  }
  public resetActiveDirectory() {
    this._activeDirectory.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get activeDirectoryInput() {
    return this._activeDirectory.internalValue;
  }

  // identity - computed: false, optional: true, required: false
  private _identity = new NetappAccountIdentityOutputReference(this, "identity");
  public get identity() {
    return this._identity;
  }
  public putIdentity(value: NetappAccountIdentity) {
    this._identity.internalValue = value;
  }
  public resetIdentity() {
    this._identity.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get identityInput() {
    return this._identity.internalValue;
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts = new NetappAccountTimeoutsOutputReference(this, "timeouts");
  public get timeouts() {
    return this._timeouts;
  }
  public putTimeouts(value: NetappAccountTimeouts) {
    this._timeouts.internalValue = value;
  }
  public resetTimeouts() {
    this._timeouts.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get timeoutsInput() {
    return this._timeouts.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      id: cdktf.stringToTerraform(this._id),
      location: cdktf.stringToTerraform(this._location),
      name: cdktf.stringToTerraform(this._name),
      resource_group_name: cdktf.stringToTerraform(this._resourceGroupName),
      tags: cdktf.hashMapper(cdktf.stringToTerraform)(this._tags),
      active_directory: netappAccountActiveDirectoryToTerraform(this._activeDirectory.internalValue),
      identity: netappAccountIdentityToTerraform(this._identity.internalValue),
      timeouts: netappAccountTimeoutsToTerraform(this._timeouts.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      id: {
        value: cdktf.stringToHclTerraform(this._id),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      location: {
        value: cdktf.stringToHclTerraform(this._location),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      name: {
        value: cdktf.stringToHclTerraform(this._name),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      resource_group_name: {
        value: cdktf.stringToHclTerraform(this._resourceGroupName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      tags: {
        value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(this._tags),
        isBlock: false,
        type: "map",
        storageClassType: "stringMap",
      },
      active_directory: {
        value: netappAccountActiveDirectoryToHclTerraform(this._activeDirectory.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "NetappAccountActiveDirectoryList",
      },
      identity: {
        value: netappAccountIdentityToHclTerraform(this._identity.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "NetappAccountIdentityList",
      },
      timeouts: {
        value: netappAccountTimeoutsToHclTerraform(this._timeouts.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "NetappAccountTimeouts",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
