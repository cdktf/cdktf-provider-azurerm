// https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/active_directory_domain_service
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface ActiveDirectoryDomainServiceConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/active_directory_domain_service#domain_configuration_type ActiveDirectoryDomainService#domain_configuration_type}
  */
  readonly domainConfigurationType?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/active_directory_domain_service#domain_name ActiveDirectoryDomainService#domain_name}
  */
  readonly domainName: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/active_directory_domain_service#filtered_sync_enabled ActiveDirectoryDomainService#filtered_sync_enabled}
  */
  readonly filteredSyncEnabled?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/active_directory_domain_service#id ActiveDirectoryDomainService#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/active_directory_domain_service#location ActiveDirectoryDomainService#location}
  */
  readonly location: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/active_directory_domain_service#name ActiveDirectoryDomainService#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/active_directory_domain_service#resource_group_name ActiveDirectoryDomainService#resource_group_name}
  */
  readonly resourceGroupName: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/active_directory_domain_service#sku ActiveDirectoryDomainService#sku}
  */
  readonly sku: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/active_directory_domain_service#tags ActiveDirectoryDomainService#tags}
  */
  readonly tags?: { [key: string]: string };
  /**
  * initial_replica_set block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/active_directory_domain_service#initial_replica_set ActiveDirectoryDomainService#initial_replica_set}
  */
  readonly initialReplicaSet: ActiveDirectoryDomainServiceInitialReplicaSet;
  /**
  * notifications block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/active_directory_domain_service#notifications ActiveDirectoryDomainService#notifications}
  */
  readonly notifications?: ActiveDirectoryDomainServiceNotifications;
  /**
  * secure_ldap block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/active_directory_domain_service#secure_ldap ActiveDirectoryDomainService#secure_ldap}
  */
  readonly secureLdap?: ActiveDirectoryDomainServiceSecureLdap;
  /**
  * security block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/active_directory_domain_service#security ActiveDirectoryDomainService#security}
  */
  readonly security?: ActiveDirectoryDomainServiceSecurity;
  /**
  * timeouts block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/active_directory_domain_service#timeouts ActiveDirectoryDomainService#timeouts}
  */
  readonly timeouts?: ActiveDirectoryDomainServiceTimeouts;
}
export interface ActiveDirectoryDomainServiceInitialReplicaSet {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/active_directory_domain_service#subnet_id ActiveDirectoryDomainService#subnet_id}
  */
  readonly subnetId: string;
}

export function activeDirectoryDomainServiceInitialReplicaSetToTerraform(struct?: ActiveDirectoryDomainServiceInitialReplicaSetOutputReference | ActiveDirectoryDomainServiceInitialReplicaSet): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    subnet_id: cdktf.stringToTerraform(struct!.subnetId),
  }
}


export function activeDirectoryDomainServiceInitialReplicaSetToHclTerraform(struct?: ActiveDirectoryDomainServiceInitialReplicaSetOutputReference | ActiveDirectoryDomainServiceInitialReplicaSet): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    subnet_id: {
      value: cdktf.stringToHclTerraform(struct!.subnetId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ActiveDirectoryDomainServiceInitialReplicaSetOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ActiveDirectoryDomainServiceInitialReplicaSet | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._subnetId !== undefined) {
      hasAnyValues = true;
      internalValueResult.subnetId = this._subnetId;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ActiveDirectoryDomainServiceInitialReplicaSet | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._subnetId = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._subnetId = value.subnetId;
    }
  }

  // domain_controller_ip_addresses - computed: true, optional: false, required: false
  public get domainControllerIpAddresses() {
    return this.getListAttribute('domain_controller_ip_addresses');
  }

  // external_access_ip_address - computed: true, optional: false, required: false
  public get externalAccessIpAddress() {
    return this.getStringAttribute('external_access_ip_address');
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // location - computed: true, optional: false, required: false
  public get location() {
    return this.getStringAttribute('location');
  }

  // service_status - computed: true, optional: false, required: false
  public get serviceStatus() {
    return this.getStringAttribute('service_status');
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
    return this._subnetId;
  }
}
export interface ActiveDirectoryDomainServiceNotifications {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/active_directory_domain_service#additional_recipients ActiveDirectoryDomainService#additional_recipients}
  */
  readonly additionalRecipients?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/active_directory_domain_service#notify_dc_admins ActiveDirectoryDomainService#notify_dc_admins}
  */
  readonly notifyDcAdmins?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/active_directory_domain_service#notify_global_admins ActiveDirectoryDomainService#notify_global_admins}
  */
  readonly notifyGlobalAdmins?: boolean | cdktf.IResolvable;
}

export function activeDirectoryDomainServiceNotificationsToTerraform(struct?: ActiveDirectoryDomainServiceNotificationsOutputReference | ActiveDirectoryDomainServiceNotifications): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    additional_recipients: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.additionalRecipients),
    notify_dc_admins: cdktf.booleanToTerraform(struct!.notifyDcAdmins),
    notify_global_admins: cdktf.booleanToTerraform(struct!.notifyGlobalAdmins),
  }
}


export function activeDirectoryDomainServiceNotificationsToHclTerraform(struct?: ActiveDirectoryDomainServiceNotificationsOutputReference | ActiveDirectoryDomainServiceNotifications): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    additional_recipients: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.additionalRecipients),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
    notify_dc_admins: {
      value: cdktf.booleanToHclTerraform(struct!.notifyDcAdmins),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    notify_global_admins: {
      value: cdktf.booleanToHclTerraform(struct!.notifyGlobalAdmins),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ActiveDirectoryDomainServiceNotificationsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ActiveDirectoryDomainServiceNotifications | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._additionalRecipients !== undefined) {
      hasAnyValues = true;
      internalValueResult.additionalRecipients = this._additionalRecipients;
    }
    if (this._notifyDcAdmins !== undefined) {
      hasAnyValues = true;
      internalValueResult.notifyDcAdmins = this._notifyDcAdmins;
    }
    if (this._notifyGlobalAdmins !== undefined) {
      hasAnyValues = true;
      internalValueResult.notifyGlobalAdmins = this._notifyGlobalAdmins;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ActiveDirectoryDomainServiceNotifications | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._additionalRecipients = undefined;
      this._notifyDcAdmins = undefined;
      this._notifyGlobalAdmins = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._additionalRecipients = value.additionalRecipients;
      this._notifyDcAdmins = value.notifyDcAdmins;
      this._notifyGlobalAdmins = value.notifyGlobalAdmins;
    }
  }

  // additional_recipients - computed: false, optional: true, required: false
  private _additionalRecipients?: string[]; 
  public get additionalRecipients() {
    return cdktf.Fn.tolist(this.getListAttribute('additional_recipients'));
  }
  public set additionalRecipients(value: string[]) {
    this._additionalRecipients = value;
  }
  public resetAdditionalRecipients() {
    this._additionalRecipients = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get additionalRecipientsInput() {
    return this._additionalRecipients;
  }

  // notify_dc_admins - computed: false, optional: true, required: false
  private _notifyDcAdmins?: boolean | cdktf.IResolvable; 
  public get notifyDcAdmins() {
    return this.getBooleanAttribute('notify_dc_admins');
  }
  public set notifyDcAdmins(value: boolean | cdktf.IResolvable) {
    this._notifyDcAdmins = value;
  }
  public resetNotifyDcAdmins() {
    this._notifyDcAdmins = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get notifyDcAdminsInput() {
    return this._notifyDcAdmins;
  }

  // notify_global_admins - computed: false, optional: true, required: false
  private _notifyGlobalAdmins?: boolean | cdktf.IResolvable; 
  public get notifyGlobalAdmins() {
    return this.getBooleanAttribute('notify_global_admins');
  }
  public set notifyGlobalAdmins(value: boolean | cdktf.IResolvable) {
    this._notifyGlobalAdmins = value;
  }
  public resetNotifyGlobalAdmins() {
    this._notifyGlobalAdmins = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get notifyGlobalAdminsInput() {
    return this._notifyGlobalAdmins;
  }
}
export interface ActiveDirectoryDomainServiceSecureLdap {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/active_directory_domain_service#enabled ActiveDirectoryDomainService#enabled}
  */
  readonly enabled: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/active_directory_domain_service#external_access_enabled ActiveDirectoryDomainService#external_access_enabled}
  */
  readonly externalAccessEnabled?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/active_directory_domain_service#pfx_certificate ActiveDirectoryDomainService#pfx_certificate}
  */
  readonly pfxCertificate: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/active_directory_domain_service#pfx_certificate_password ActiveDirectoryDomainService#pfx_certificate_password}
  */
  readonly pfxCertificatePassword: string;
}

export function activeDirectoryDomainServiceSecureLdapToTerraform(struct?: ActiveDirectoryDomainServiceSecureLdapOutputReference | ActiveDirectoryDomainServiceSecureLdap): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    enabled: cdktf.booleanToTerraform(struct!.enabled),
    external_access_enabled: cdktf.booleanToTerraform(struct!.externalAccessEnabled),
    pfx_certificate: cdktf.stringToTerraform(struct!.pfxCertificate),
    pfx_certificate_password: cdktf.stringToTerraform(struct!.pfxCertificatePassword),
  }
}


export function activeDirectoryDomainServiceSecureLdapToHclTerraform(struct?: ActiveDirectoryDomainServiceSecureLdapOutputReference | ActiveDirectoryDomainServiceSecureLdap): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    enabled: {
      value: cdktf.booleanToHclTerraform(struct!.enabled),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    external_access_enabled: {
      value: cdktf.booleanToHclTerraform(struct!.externalAccessEnabled),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    pfx_certificate: {
      value: cdktf.stringToHclTerraform(struct!.pfxCertificate),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    pfx_certificate_password: {
      value: cdktf.stringToHclTerraform(struct!.pfxCertificatePassword),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ActiveDirectoryDomainServiceSecureLdapOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ActiveDirectoryDomainServiceSecureLdap | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._enabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.enabled = this._enabled;
    }
    if (this._externalAccessEnabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.externalAccessEnabled = this._externalAccessEnabled;
    }
    if (this._pfxCertificate !== undefined) {
      hasAnyValues = true;
      internalValueResult.pfxCertificate = this._pfxCertificate;
    }
    if (this._pfxCertificatePassword !== undefined) {
      hasAnyValues = true;
      internalValueResult.pfxCertificatePassword = this._pfxCertificatePassword;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ActiveDirectoryDomainServiceSecureLdap | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._enabled = undefined;
      this._externalAccessEnabled = undefined;
      this._pfxCertificate = undefined;
      this._pfxCertificatePassword = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._enabled = value.enabled;
      this._externalAccessEnabled = value.externalAccessEnabled;
      this._pfxCertificate = value.pfxCertificate;
      this._pfxCertificatePassword = value.pfxCertificatePassword;
    }
  }

  // certificate_expiry - computed: true, optional: false, required: false
  public get certificateExpiry() {
    return this.getStringAttribute('certificate_expiry');
  }

  // certificate_thumbprint - computed: true, optional: false, required: false
  public get certificateThumbprint() {
    return this.getStringAttribute('certificate_thumbprint');
  }

  // enabled - computed: false, optional: false, required: true
  private _enabled?: boolean | cdktf.IResolvable; 
  public get enabled() {
    return this.getBooleanAttribute('enabled');
  }
  public set enabled(value: boolean | cdktf.IResolvable) {
    this._enabled = value;
  }
  // Temporarily expose input value. Use with caution.
  public get enabledInput() {
    return this._enabled;
  }

  // external_access_enabled - computed: false, optional: true, required: false
  private _externalAccessEnabled?: boolean | cdktf.IResolvable; 
  public get externalAccessEnabled() {
    return this.getBooleanAttribute('external_access_enabled');
  }
  public set externalAccessEnabled(value: boolean | cdktf.IResolvable) {
    this._externalAccessEnabled = value;
  }
  public resetExternalAccessEnabled() {
    this._externalAccessEnabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get externalAccessEnabledInput() {
    return this._externalAccessEnabled;
  }

  // pfx_certificate - computed: false, optional: false, required: true
  private _pfxCertificate?: string; 
  public get pfxCertificate() {
    return this.getStringAttribute('pfx_certificate');
  }
  public set pfxCertificate(value: string) {
    this._pfxCertificate = value;
  }
  // Temporarily expose input value. Use with caution.
  public get pfxCertificateInput() {
    return this._pfxCertificate;
  }

  // pfx_certificate_password - computed: false, optional: false, required: true
  private _pfxCertificatePassword?: string; 
  public get pfxCertificatePassword() {
    return this.getStringAttribute('pfx_certificate_password');
  }
  public set pfxCertificatePassword(value: string) {
    this._pfxCertificatePassword = value;
  }
  // Temporarily expose input value. Use with caution.
  public get pfxCertificatePasswordInput() {
    return this._pfxCertificatePassword;
  }

  // public_certificate - computed: true, optional: false, required: false
  public get publicCertificate() {
    return this.getStringAttribute('public_certificate');
  }
}
export interface ActiveDirectoryDomainServiceSecurity {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/active_directory_domain_service#kerberos_armoring_enabled ActiveDirectoryDomainService#kerberos_armoring_enabled}
  */
  readonly kerberosArmoringEnabled?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/active_directory_domain_service#kerberos_rc4_encryption_enabled ActiveDirectoryDomainService#kerberos_rc4_encryption_enabled}
  */
  readonly kerberosRc4EncryptionEnabled?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/active_directory_domain_service#ntlm_v1_enabled ActiveDirectoryDomainService#ntlm_v1_enabled}
  */
  readonly ntlmV1Enabled?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/active_directory_domain_service#sync_kerberos_passwords ActiveDirectoryDomainService#sync_kerberos_passwords}
  */
  readonly syncKerberosPasswords?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/active_directory_domain_service#sync_ntlm_passwords ActiveDirectoryDomainService#sync_ntlm_passwords}
  */
  readonly syncNtlmPasswords?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/active_directory_domain_service#sync_on_prem_passwords ActiveDirectoryDomainService#sync_on_prem_passwords}
  */
  readonly syncOnPremPasswords?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/active_directory_domain_service#tls_v1_enabled ActiveDirectoryDomainService#tls_v1_enabled}
  */
  readonly tlsV1Enabled?: boolean | cdktf.IResolvable;
}

export function activeDirectoryDomainServiceSecurityToTerraform(struct?: ActiveDirectoryDomainServiceSecurityOutputReference | ActiveDirectoryDomainServiceSecurity): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    kerberos_armoring_enabled: cdktf.booleanToTerraform(struct!.kerberosArmoringEnabled),
    kerberos_rc4_encryption_enabled: cdktf.booleanToTerraform(struct!.kerberosRc4EncryptionEnabled),
    ntlm_v1_enabled: cdktf.booleanToTerraform(struct!.ntlmV1Enabled),
    sync_kerberos_passwords: cdktf.booleanToTerraform(struct!.syncKerberosPasswords),
    sync_ntlm_passwords: cdktf.booleanToTerraform(struct!.syncNtlmPasswords),
    sync_on_prem_passwords: cdktf.booleanToTerraform(struct!.syncOnPremPasswords),
    tls_v1_enabled: cdktf.booleanToTerraform(struct!.tlsV1Enabled),
  }
}


export function activeDirectoryDomainServiceSecurityToHclTerraform(struct?: ActiveDirectoryDomainServiceSecurityOutputReference | ActiveDirectoryDomainServiceSecurity): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    kerberos_armoring_enabled: {
      value: cdktf.booleanToHclTerraform(struct!.kerberosArmoringEnabled),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    kerberos_rc4_encryption_enabled: {
      value: cdktf.booleanToHclTerraform(struct!.kerberosRc4EncryptionEnabled),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    ntlm_v1_enabled: {
      value: cdktf.booleanToHclTerraform(struct!.ntlmV1Enabled),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    sync_kerberos_passwords: {
      value: cdktf.booleanToHclTerraform(struct!.syncKerberosPasswords),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    sync_ntlm_passwords: {
      value: cdktf.booleanToHclTerraform(struct!.syncNtlmPasswords),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    sync_on_prem_passwords: {
      value: cdktf.booleanToHclTerraform(struct!.syncOnPremPasswords),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    tls_v1_enabled: {
      value: cdktf.booleanToHclTerraform(struct!.tlsV1Enabled),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ActiveDirectoryDomainServiceSecurityOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ActiveDirectoryDomainServiceSecurity | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._kerberosArmoringEnabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.kerberosArmoringEnabled = this._kerberosArmoringEnabled;
    }
    if (this._kerberosRc4EncryptionEnabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.kerberosRc4EncryptionEnabled = this._kerberosRc4EncryptionEnabled;
    }
    if (this._ntlmV1Enabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.ntlmV1Enabled = this._ntlmV1Enabled;
    }
    if (this._syncKerberosPasswords !== undefined) {
      hasAnyValues = true;
      internalValueResult.syncKerberosPasswords = this._syncKerberosPasswords;
    }
    if (this._syncNtlmPasswords !== undefined) {
      hasAnyValues = true;
      internalValueResult.syncNtlmPasswords = this._syncNtlmPasswords;
    }
    if (this._syncOnPremPasswords !== undefined) {
      hasAnyValues = true;
      internalValueResult.syncOnPremPasswords = this._syncOnPremPasswords;
    }
    if (this._tlsV1Enabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.tlsV1Enabled = this._tlsV1Enabled;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ActiveDirectoryDomainServiceSecurity | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._kerberosArmoringEnabled = undefined;
      this._kerberosRc4EncryptionEnabled = undefined;
      this._ntlmV1Enabled = undefined;
      this._syncKerberosPasswords = undefined;
      this._syncNtlmPasswords = undefined;
      this._syncOnPremPasswords = undefined;
      this._tlsV1Enabled = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._kerberosArmoringEnabled = value.kerberosArmoringEnabled;
      this._kerberosRc4EncryptionEnabled = value.kerberosRc4EncryptionEnabled;
      this._ntlmV1Enabled = value.ntlmV1Enabled;
      this._syncKerberosPasswords = value.syncKerberosPasswords;
      this._syncNtlmPasswords = value.syncNtlmPasswords;
      this._syncOnPremPasswords = value.syncOnPremPasswords;
      this._tlsV1Enabled = value.tlsV1Enabled;
    }
  }

  // kerberos_armoring_enabled - computed: false, optional: true, required: false
  private _kerberosArmoringEnabled?: boolean | cdktf.IResolvable; 
  public get kerberosArmoringEnabled() {
    return this.getBooleanAttribute('kerberos_armoring_enabled');
  }
  public set kerberosArmoringEnabled(value: boolean | cdktf.IResolvable) {
    this._kerberosArmoringEnabled = value;
  }
  public resetKerberosArmoringEnabled() {
    this._kerberosArmoringEnabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get kerberosArmoringEnabledInput() {
    return this._kerberosArmoringEnabled;
  }

  // kerberos_rc4_encryption_enabled - computed: false, optional: true, required: false
  private _kerberosRc4EncryptionEnabled?: boolean | cdktf.IResolvable; 
  public get kerberosRc4EncryptionEnabled() {
    return this.getBooleanAttribute('kerberos_rc4_encryption_enabled');
  }
  public set kerberosRc4EncryptionEnabled(value: boolean | cdktf.IResolvable) {
    this._kerberosRc4EncryptionEnabled = value;
  }
  public resetKerberosRc4EncryptionEnabled() {
    this._kerberosRc4EncryptionEnabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get kerberosRc4EncryptionEnabledInput() {
    return this._kerberosRc4EncryptionEnabled;
  }

  // ntlm_v1_enabled - computed: false, optional: true, required: false
  private _ntlmV1Enabled?: boolean | cdktf.IResolvable; 
  public get ntlmV1Enabled() {
    return this.getBooleanAttribute('ntlm_v1_enabled');
  }
  public set ntlmV1Enabled(value: boolean | cdktf.IResolvable) {
    this._ntlmV1Enabled = value;
  }
  public resetNtlmV1Enabled() {
    this._ntlmV1Enabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ntlmV1EnabledInput() {
    return this._ntlmV1Enabled;
  }

  // sync_kerberos_passwords - computed: false, optional: true, required: false
  private _syncKerberosPasswords?: boolean | cdktf.IResolvable; 
  public get syncKerberosPasswords() {
    return this.getBooleanAttribute('sync_kerberos_passwords');
  }
  public set syncKerberosPasswords(value: boolean | cdktf.IResolvable) {
    this._syncKerberosPasswords = value;
  }
  public resetSyncKerberosPasswords() {
    this._syncKerberosPasswords = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get syncKerberosPasswordsInput() {
    return this._syncKerberosPasswords;
  }

  // sync_ntlm_passwords - computed: false, optional: true, required: false
  private _syncNtlmPasswords?: boolean | cdktf.IResolvable; 
  public get syncNtlmPasswords() {
    return this.getBooleanAttribute('sync_ntlm_passwords');
  }
  public set syncNtlmPasswords(value: boolean | cdktf.IResolvable) {
    this._syncNtlmPasswords = value;
  }
  public resetSyncNtlmPasswords() {
    this._syncNtlmPasswords = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get syncNtlmPasswordsInput() {
    return this._syncNtlmPasswords;
  }

  // sync_on_prem_passwords - computed: false, optional: true, required: false
  private _syncOnPremPasswords?: boolean | cdktf.IResolvable; 
  public get syncOnPremPasswords() {
    return this.getBooleanAttribute('sync_on_prem_passwords');
  }
  public set syncOnPremPasswords(value: boolean | cdktf.IResolvable) {
    this._syncOnPremPasswords = value;
  }
  public resetSyncOnPremPasswords() {
    this._syncOnPremPasswords = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get syncOnPremPasswordsInput() {
    return this._syncOnPremPasswords;
  }

  // tls_v1_enabled - computed: false, optional: true, required: false
  private _tlsV1Enabled?: boolean | cdktf.IResolvable; 
  public get tlsV1Enabled() {
    return this.getBooleanAttribute('tls_v1_enabled');
  }
  public set tlsV1Enabled(value: boolean | cdktf.IResolvable) {
    this._tlsV1Enabled = value;
  }
  public resetTlsV1Enabled() {
    this._tlsV1Enabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tlsV1EnabledInput() {
    return this._tlsV1Enabled;
  }
}
export interface ActiveDirectoryDomainServiceTimeouts {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/active_directory_domain_service#create ActiveDirectoryDomainService#create}
  */
  readonly create?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/active_directory_domain_service#delete ActiveDirectoryDomainService#delete}
  */
  readonly delete?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/active_directory_domain_service#read ActiveDirectoryDomainService#read}
  */
  readonly read?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/active_directory_domain_service#update ActiveDirectoryDomainService#update}
  */
  readonly update?: string;
}

export function activeDirectoryDomainServiceTimeoutsToTerraform(struct?: ActiveDirectoryDomainServiceTimeouts | cdktf.IResolvable): any {
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


export function activeDirectoryDomainServiceTimeoutsToHclTerraform(struct?: ActiveDirectoryDomainServiceTimeouts | cdktf.IResolvable): any {
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

export class ActiveDirectoryDomainServiceTimeoutsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): ActiveDirectoryDomainServiceTimeouts | cdktf.IResolvable | undefined {
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

  public set internalValue(value: ActiveDirectoryDomainServiceTimeouts | cdktf.IResolvable | undefined) {
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
* Represents a {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/active_directory_domain_service azurerm_active_directory_domain_service}
*/
export class ActiveDirectoryDomainService extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "azurerm_active_directory_domain_service";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a ActiveDirectoryDomainService resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the ActiveDirectoryDomainService to import
  * @param importFromId The id of the existing ActiveDirectoryDomainService that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/active_directory_domain_service#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the ActiveDirectoryDomainService to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "azurerm_active_directory_domain_service", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/active_directory_domain_service azurerm_active_directory_domain_service} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options ActiveDirectoryDomainServiceConfig
  */
  public constructor(scope: Construct, id: string, config: ActiveDirectoryDomainServiceConfig) {
    super(scope, id, {
      terraformResourceType: 'azurerm_active_directory_domain_service',
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
    this._domainConfigurationType = config.domainConfigurationType;
    this._domainName = config.domainName;
    this._filteredSyncEnabled = config.filteredSyncEnabled;
    this._id = config.id;
    this._location = config.location;
    this._name = config.name;
    this._resourceGroupName = config.resourceGroupName;
    this._sku = config.sku;
    this._tags = config.tags;
    this._initialReplicaSet.internalValue = config.initialReplicaSet;
    this._notifications.internalValue = config.notifications;
    this._secureLdap.internalValue = config.secureLdap;
    this._security.internalValue = config.security;
    this._timeouts.internalValue = config.timeouts;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // deployment_id - computed: true, optional: false, required: false
  public get deploymentId() {
    return this.getStringAttribute('deployment_id');
  }

  // domain_configuration_type - computed: false, optional: true, required: false
  private _domainConfigurationType?: string; 
  public get domainConfigurationType() {
    return this.getStringAttribute('domain_configuration_type');
  }
  public set domainConfigurationType(value: string) {
    this._domainConfigurationType = value;
  }
  public resetDomainConfigurationType() {
    this._domainConfigurationType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get domainConfigurationTypeInput() {
    return this._domainConfigurationType;
  }

  // domain_name - computed: false, optional: false, required: true
  private _domainName?: string; 
  public get domainName() {
    return this.getStringAttribute('domain_name');
  }
  public set domainName(value: string) {
    this._domainName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get domainNameInput() {
    return this._domainName;
  }

  // filtered_sync_enabled - computed: false, optional: true, required: false
  private _filteredSyncEnabled?: boolean | cdktf.IResolvable; 
  public get filteredSyncEnabled() {
    return this.getBooleanAttribute('filtered_sync_enabled');
  }
  public set filteredSyncEnabled(value: boolean | cdktf.IResolvable) {
    this._filteredSyncEnabled = value;
  }
  public resetFilteredSyncEnabled() {
    this._filteredSyncEnabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get filteredSyncEnabledInput() {
    return this._filteredSyncEnabled;
  }

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

  // resource_id - computed: true, optional: false, required: false
  public get resourceId() {
    return this.getStringAttribute('resource_id');
  }

  // sku - computed: false, optional: false, required: true
  private _sku?: string; 
  public get sku() {
    return this.getStringAttribute('sku');
  }
  public set sku(value: string) {
    this._sku = value;
  }
  // Temporarily expose input value. Use with caution.
  public get skuInput() {
    return this._sku;
  }

  // sync_owner - computed: true, optional: false, required: false
  public get syncOwner() {
    return this.getStringAttribute('sync_owner');
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

  // tenant_id - computed: true, optional: false, required: false
  public get tenantId() {
    return this.getStringAttribute('tenant_id');
  }

  // version - computed: true, optional: false, required: false
  public get version() {
    return this.getNumberAttribute('version');
  }

  // initial_replica_set - computed: false, optional: false, required: true
  private _initialReplicaSet = new ActiveDirectoryDomainServiceInitialReplicaSetOutputReference(this, "initial_replica_set");
  public get initialReplicaSet() {
    return this._initialReplicaSet;
  }
  public putInitialReplicaSet(value: ActiveDirectoryDomainServiceInitialReplicaSet) {
    this._initialReplicaSet.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get initialReplicaSetInput() {
    return this._initialReplicaSet.internalValue;
  }

  // notifications - computed: false, optional: true, required: false
  private _notifications = new ActiveDirectoryDomainServiceNotificationsOutputReference(this, "notifications");
  public get notifications() {
    return this._notifications;
  }
  public putNotifications(value: ActiveDirectoryDomainServiceNotifications) {
    this._notifications.internalValue = value;
  }
  public resetNotifications() {
    this._notifications.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get notificationsInput() {
    return this._notifications.internalValue;
  }

  // secure_ldap - computed: false, optional: true, required: false
  private _secureLdap = new ActiveDirectoryDomainServiceSecureLdapOutputReference(this, "secure_ldap");
  public get secureLdap() {
    return this._secureLdap;
  }
  public putSecureLdap(value: ActiveDirectoryDomainServiceSecureLdap) {
    this._secureLdap.internalValue = value;
  }
  public resetSecureLdap() {
    this._secureLdap.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get secureLdapInput() {
    return this._secureLdap.internalValue;
  }

  // security - computed: false, optional: true, required: false
  private _security = new ActiveDirectoryDomainServiceSecurityOutputReference(this, "security");
  public get security() {
    return this._security;
  }
  public putSecurity(value: ActiveDirectoryDomainServiceSecurity) {
    this._security.internalValue = value;
  }
  public resetSecurity() {
    this._security.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get securityInput() {
    return this._security.internalValue;
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts = new ActiveDirectoryDomainServiceTimeoutsOutputReference(this, "timeouts");
  public get timeouts() {
    return this._timeouts;
  }
  public putTimeouts(value: ActiveDirectoryDomainServiceTimeouts) {
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
      domain_configuration_type: cdktf.stringToTerraform(this._domainConfigurationType),
      domain_name: cdktf.stringToTerraform(this._domainName),
      filtered_sync_enabled: cdktf.booleanToTerraform(this._filteredSyncEnabled),
      id: cdktf.stringToTerraform(this._id),
      location: cdktf.stringToTerraform(this._location),
      name: cdktf.stringToTerraform(this._name),
      resource_group_name: cdktf.stringToTerraform(this._resourceGroupName),
      sku: cdktf.stringToTerraform(this._sku),
      tags: cdktf.hashMapper(cdktf.stringToTerraform)(this._tags),
      initial_replica_set: activeDirectoryDomainServiceInitialReplicaSetToTerraform(this._initialReplicaSet.internalValue),
      notifications: activeDirectoryDomainServiceNotificationsToTerraform(this._notifications.internalValue),
      secure_ldap: activeDirectoryDomainServiceSecureLdapToTerraform(this._secureLdap.internalValue),
      security: activeDirectoryDomainServiceSecurityToTerraform(this._security.internalValue),
      timeouts: activeDirectoryDomainServiceTimeoutsToTerraform(this._timeouts.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      domain_configuration_type: {
        value: cdktf.stringToHclTerraform(this._domainConfigurationType),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      domain_name: {
        value: cdktf.stringToHclTerraform(this._domainName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      filtered_sync_enabled: {
        value: cdktf.booleanToHclTerraform(this._filteredSyncEnabled),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
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
      sku: {
        value: cdktf.stringToHclTerraform(this._sku),
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
      initial_replica_set: {
        value: activeDirectoryDomainServiceInitialReplicaSetToHclTerraform(this._initialReplicaSet.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "ActiveDirectoryDomainServiceInitialReplicaSetList",
      },
      notifications: {
        value: activeDirectoryDomainServiceNotificationsToHclTerraform(this._notifications.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "ActiveDirectoryDomainServiceNotificationsList",
      },
      secure_ldap: {
        value: activeDirectoryDomainServiceSecureLdapToHclTerraform(this._secureLdap.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "ActiveDirectoryDomainServiceSecureLdapList",
      },
      security: {
        value: activeDirectoryDomainServiceSecurityToHclTerraform(this._security.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "ActiveDirectoryDomainServiceSecurityList",
      },
      timeouts: {
        value: activeDirectoryDomainServiceTimeoutsToHclTerraform(this._timeouts.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "ActiveDirectoryDomainServiceTimeouts",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
