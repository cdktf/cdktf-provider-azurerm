// https://www.terraform.io/docs/providers/azurerm/r/active_directory_domain_service.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface ActiveDirectoryDomainServiceConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/active_directory_domain_service.html#domain_name ActiveDirectoryDomainService#domain_name}
  */
  readonly domainName: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/active_directory_domain_service.html#filtered_sync_enabled ActiveDirectoryDomainService#filtered_sync_enabled}
  */
  readonly filteredSyncEnabled?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/active_directory_domain_service.html#location ActiveDirectoryDomainService#location}
  */
  readonly location: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/active_directory_domain_service.html#name ActiveDirectoryDomainService#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/active_directory_domain_service.html#resource_group_name ActiveDirectoryDomainService#resource_group_name}
  */
  readonly resourceGroupName: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/active_directory_domain_service.html#sku ActiveDirectoryDomainService#sku}
  */
  readonly sku: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/active_directory_domain_service.html#tags ActiveDirectoryDomainService#tags}
  */
  readonly tags?: { [key: string]: string } | cdktf.IResolvable;
  /**
  * initial_replica_set block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/active_directory_domain_service.html#initial_replica_set ActiveDirectoryDomainService#initial_replica_set}
  */
  readonly initialReplicaSet: ActiveDirectoryDomainServiceInitialReplicaSet;
  /**
  * notifications block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/active_directory_domain_service.html#notifications ActiveDirectoryDomainService#notifications}
  */
  readonly notifications?: ActiveDirectoryDomainServiceNotifications;
  /**
  * secure_ldap block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/active_directory_domain_service.html#secure_ldap ActiveDirectoryDomainService#secure_ldap}
  */
  readonly secureLdap?: ActiveDirectoryDomainServiceSecureLdap;
  /**
  * security block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/active_directory_domain_service.html#security ActiveDirectoryDomainService#security}
  */
  readonly security?: ActiveDirectoryDomainServiceSecurity;
  /**
  * timeouts block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/active_directory_domain_service.html#timeouts ActiveDirectoryDomainService#timeouts}
  */
  readonly timeouts?: ActiveDirectoryDomainServiceTimeouts;
}
export interface ActiveDirectoryDomainServiceInitialReplicaSet {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/active_directory_domain_service.html#subnet_id ActiveDirectoryDomainService#subnet_id}
  */
  readonly subnetId: string;
}

function activeDirectoryDomainServiceInitialReplicaSetToTerraform(struct?: ActiveDirectoryDomainServiceInitialReplicaSetOutputReference | ActiveDirectoryDomainServiceInitialReplicaSet): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    subnet_id: cdktf.stringToTerraform(struct!.subnetId),
  }
}

export class ActiveDirectoryDomainServiceInitialReplicaSetOutputReference extends cdktf.ComplexObject {
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
export interface ActiveDirectoryDomainServiceNotifications {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/active_directory_domain_service.html#additional_recipients ActiveDirectoryDomainService#additional_recipients}
  */
  readonly additionalRecipients?: string[];
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/active_directory_domain_service.html#notify_dc_admins ActiveDirectoryDomainService#notify_dc_admins}
  */
  readonly notifyDcAdmins?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/active_directory_domain_service.html#notify_global_admins ActiveDirectoryDomainService#notify_global_admins}
  */
  readonly notifyGlobalAdmins?: boolean | cdktf.IResolvable;
}

function activeDirectoryDomainServiceNotificationsToTerraform(struct?: ActiveDirectoryDomainServiceNotificationsOutputReference | ActiveDirectoryDomainServiceNotifications): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    additional_recipients: cdktf.listMapper(cdktf.stringToTerraform)(struct!.additionalRecipients),
    notify_dc_admins: cdktf.booleanToTerraform(struct!.notifyDcAdmins),
    notify_global_admins: cdktf.booleanToTerraform(struct!.notifyGlobalAdmins),
  }
}

export class ActiveDirectoryDomainServiceNotificationsOutputReference extends cdktf.ComplexObject {
  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param isSingleItem True if this is a block, false if it's a list
  */
  public constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean) {
    super(terraformResource, terraformAttribute, isSingleItem);
  }

  // additional_recipients - computed: false, optional: true, required: false
  private _additionalRecipients?: string[] | undefined; 
  public get additionalRecipients() {
    return this.getListAttribute('additional_recipients');
  }
  public set additionalRecipients(value: string[] | undefined) {
    this._additionalRecipients = value;
  }
  public resetAdditionalRecipients() {
    this._additionalRecipients = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get additionalRecipientsInput() {
    return this._additionalRecipients
  }

  // notify_dc_admins - computed: false, optional: true, required: false
  private _notifyDcAdmins?: boolean | cdktf.IResolvable | undefined; 
  public get notifyDcAdmins() {
    return this.getBooleanAttribute('notify_dc_admins') as any;
  }
  public set notifyDcAdmins(value: boolean | cdktf.IResolvable | undefined) {
    this._notifyDcAdmins = value;
  }
  public resetNotifyDcAdmins() {
    this._notifyDcAdmins = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get notifyDcAdminsInput() {
    return this._notifyDcAdmins
  }

  // notify_global_admins - computed: false, optional: true, required: false
  private _notifyGlobalAdmins?: boolean | cdktf.IResolvable | undefined; 
  public get notifyGlobalAdmins() {
    return this.getBooleanAttribute('notify_global_admins') as any;
  }
  public set notifyGlobalAdmins(value: boolean | cdktf.IResolvable | undefined) {
    this._notifyGlobalAdmins = value;
  }
  public resetNotifyGlobalAdmins() {
    this._notifyGlobalAdmins = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get notifyGlobalAdminsInput() {
    return this._notifyGlobalAdmins
  }
}
export interface ActiveDirectoryDomainServiceSecureLdap {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/active_directory_domain_service.html#enabled ActiveDirectoryDomainService#enabled}
  */
  readonly enabled: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/active_directory_domain_service.html#external_access_enabled ActiveDirectoryDomainService#external_access_enabled}
  */
  readonly externalAccessEnabled?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/active_directory_domain_service.html#pfx_certificate ActiveDirectoryDomainService#pfx_certificate}
  */
  readonly pfxCertificate: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/active_directory_domain_service.html#pfx_certificate_password ActiveDirectoryDomainService#pfx_certificate_password}
  */
  readonly pfxCertificatePassword: string;
}

function activeDirectoryDomainServiceSecureLdapToTerraform(struct?: ActiveDirectoryDomainServiceSecureLdapOutputReference | ActiveDirectoryDomainServiceSecureLdap): any {
  if (!cdktf.canInspect(struct)) { return struct; }
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

export class ActiveDirectoryDomainServiceSecureLdapOutputReference extends cdktf.ComplexObject {
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

  // external_access_enabled - computed: false, optional: true, required: false
  private _externalAccessEnabled?: boolean | cdktf.IResolvable | undefined; 
  public get externalAccessEnabled() {
    return this.getBooleanAttribute('external_access_enabled') as any;
  }
  public set externalAccessEnabled(value: boolean | cdktf.IResolvable | undefined) {
    this._externalAccessEnabled = value;
  }
  public resetExternalAccessEnabled() {
    this._externalAccessEnabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get externalAccessEnabledInput() {
    return this._externalAccessEnabled
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
    return this._pfxCertificate
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
    return this._pfxCertificatePassword
  }
}
export interface ActiveDirectoryDomainServiceSecurity {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/active_directory_domain_service.html#ntlm_v1_enabled ActiveDirectoryDomainService#ntlm_v1_enabled}
  */
  readonly ntlmV1Enabled?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/active_directory_domain_service.html#sync_kerberos_passwords ActiveDirectoryDomainService#sync_kerberos_passwords}
  */
  readonly syncKerberosPasswords?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/active_directory_domain_service.html#sync_ntlm_passwords ActiveDirectoryDomainService#sync_ntlm_passwords}
  */
  readonly syncNtlmPasswords?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/active_directory_domain_service.html#sync_on_prem_passwords ActiveDirectoryDomainService#sync_on_prem_passwords}
  */
  readonly syncOnPremPasswords?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/active_directory_domain_service.html#tls_v1_enabled ActiveDirectoryDomainService#tls_v1_enabled}
  */
  readonly tlsV1Enabled?: boolean | cdktf.IResolvable;
}

function activeDirectoryDomainServiceSecurityToTerraform(struct?: ActiveDirectoryDomainServiceSecurityOutputReference | ActiveDirectoryDomainServiceSecurity): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    ntlm_v1_enabled: cdktf.booleanToTerraform(struct!.ntlmV1Enabled),
    sync_kerberos_passwords: cdktf.booleanToTerraform(struct!.syncKerberosPasswords),
    sync_ntlm_passwords: cdktf.booleanToTerraform(struct!.syncNtlmPasswords),
    sync_on_prem_passwords: cdktf.booleanToTerraform(struct!.syncOnPremPasswords),
    tls_v1_enabled: cdktf.booleanToTerraform(struct!.tlsV1Enabled),
  }
}

export class ActiveDirectoryDomainServiceSecurityOutputReference extends cdktf.ComplexObject {
  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param isSingleItem True if this is a block, false if it's a list
  */
  public constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean) {
    super(terraformResource, terraformAttribute, isSingleItem);
  }

  // ntlm_v1_enabled - computed: false, optional: true, required: false
  private _ntlmV1Enabled?: boolean | cdktf.IResolvable | undefined; 
  public get ntlmV1Enabled() {
    return this.getBooleanAttribute('ntlm_v1_enabled') as any;
  }
  public set ntlmV1Enabled(value: boolean | cdktf.IResolvable | undefined) {
    this._ntlmV1Enabled = value;
  }
  public resetNtlmV1Enabled() {
    this._ntlmV1Enabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ntlmV1EnabledInput() {
    return this._ntlmV1Enabled
  }

  // sync_kerberos_passwords - computed: false, optional: true, required: false
  private _syncKerberosPasswords?: boolean | cdktf.IResolvable | undefined; 
  public get syncKerberosPasswords() {
    return this.getBooleanAttribute('sync_kerberos_passwords') as any;
  }
  public set syncKerberosPasswords(value: boolean | cdktf.IResolvable | undefined) {
    this._syncKerberosPasswords = value;
  }
  public resetSyncKerberosPasswords() {
    this._syncKerberosPasswords = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get syncKerberosPasswordsInput() {
    return this._syncKerberosPasswords
  }

  // sync_ntlm_passwords - computed: false, optional: true, required: false
  private _syncNtlmPasswords?: boolean | cdktf.IResolvable | undefined; 
  public get syncNtlmPasswords() {
    return this.getBooleanAttribute('sync_ntlm_passwords') as any;
  }
  public set syncNtlmPasswords(value: boolean | cdktf.IResolvable | undefined) {
    this._syncNtlmPasswords = value;
  }
  public resetSyncNtlmPasswords() {
    this._syncNtlmPasswords = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get syncNtlmPasswordsInput() {
    return this._syncNtlmPasswords
  }

  // sync_on_prem_passwords - computed: false, optional: true, required: false
  private _syncOnPremPasswords?: boolean | cdktf.IResolvable | undefined; 
  public get syncOnPremPasswords() {
    return this.getBooleanAttribute('sync_on_prem_passwords') as any;
  }
  public set syncOnPremPasswords(value: boolean | cdktf.IResolvable | undefined) {
    this._syncOnPremPasswords = value;
  }
  public resetSyncOnPremPasswords() {
    this._syncOnPremPasswords = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get syncOnPremPasswordsInput() {
    return this._syncOnPremPasswords
  }

  // tls_v1_enabled - computed: false, optional: true, required: false
  private _tlsV1Enabled?: boolean | cdktf.IResolvable | undefined; 
  public get tlsV1Enabled() {
    return this.getBooleanAttribute('tls_v1_enabled') as any;
  }
  public set tlsV1Enabled(value: boolean | cdktf.IResolvable | undefined) {
    this._tlsV1Enabled = value;
  }
  public resetTlsV1Enabled() {
    this._tlsV1Enabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tlsV1EnabledInput() {
    return this._tlsV1Enabled
  }
}
export interface ActiveDirectoryDomainServiceTimeouts {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/active_directory_domain_service.html#create ActiveDirectoryDomainService#create}
  */
  readonly create?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/active_directory_domain_service.html#delete ActiveDirectoryDomainService#delete}
  */
  readonly delete?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/active_directory_domain_service.html#read ActiveDirectoryDomainService#read}
  */
  readonly read?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/active_directory_domain_service.html#update ActiveDirectoryDomainService#update}
  */
  readonly update?: string;
}

function activeDirectoryDomainServiceTimeoutsToTerraform(struct?: ActiveDirectoryDomainServiceTimeoutsOutputReference | ActiveDirectoryDomainServiceTimeouts): any {
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

export class ActiveDirectoryDomainServiceTimeoutsOutputReference extends cdktf.ComplexObject {
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

/**
* Represents a {@link https://www.terraform.io/docs/providers/azurerm/r/active_directory_domain_service.html azurerm_active_directory_domain_service}
*/
export class ActiveDirectoryDomainService extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType: string = "azurerm_active_directory_domain_service";

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://www.terraform.io/docs/providers/azurerm/r/active_directory_domain_service.html azurerm_active_directory_domain_service} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options ActiveDirectoryDomainServiceConfig
  */
  public constructor(scope: Construct, id: string, config: ActiveDirectoryDomainServiceConfig) {
    super(scope, id, {
      terraformResourceType: 'azurerm_active_directory_domain_service',
      terraformGeneratorMetadata: {
        providerName: 'azurerm'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle
    });
    this._domainName = config.domainName;
    this._filteredSyncEnabled = config.filteredSyncEnabled;
    this._location = config.location;
    this._name = config.name;
    this._resourceGroupName = config.resourceGroupName;
    this._sku = config.sku;
    this._tags = config.tags;
    this._initialReplicaSet = config.initialReplicaSet;
    this._notifications = config.notifications;
    this._secureLdap = config.secureLdap;
    this._security = config.security;
    this._timeouts = config.timeouts;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // deployment_id - computed: true, optional: false, required: false
  public get deploymentId() {
    return this.getStringAttribute('deployment_id');
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
    return this._domainName
  }

  // filtered_sync_enabled - computed: false, optional: true, required: false
  private _filteredSyncEnabled?: boolean | cdktf.IResolvable | undefined; 
  public get filteredSyncEnabled() {
    return this.getBooleanAttribute('filtered_sync_enabled') as any;
  }
  public set filteredSyncEnabled(value: boolean | cdktf.IResolvable | undefined) {
    this._filteredSyncEnabled = value;
  }
  public resetFilteredSyncEnabled() {
    this._filteredSyncEnabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get filteredSyncEnabledInput() {
    return this._filteredSyncEnabled
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
    return this._sku
  }

  // sync_owner - computed: true, optional: false, required: false
  public get syncOwner() {
    return this.getStringAttribute('sync_owner');
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

  // tenant_id - computed: true, optional: false, required: false
  public get tenantId() {
    return this.getStringAttribute('tenant_id');
  }

  // version - computed: true, optional: false, required: false
  public get version() {
    return this.getNumberAttribute('version');
  }

  // initial_replica_set - computed: false, optional: false, required: true
  private _initialReplicaSet?: ActiveDirectoryDomainServiceInitialReplicaSet; 
  private __initialReplicaSetOutput = new ActiveDirectoryDomainServiceInitialReplicaSetOutputReference(this as any, "initial_replica_set", true);
  public get initialReplicaSet() {
    return this.__initialReplicaSetOutput;
  }
  public putInitialReplicaSet(value: ActiveDirectoryDomainServiceInitialReplicaSet) {
    this._initialReplicaSet = value;
  }
  // Temporarily expose input value. Use with caution.
  public get initialReplicaSetInput() {
    return this._initialReplicaSet
  }

  // notifications - computed: false, optional: true, required: false
  private _notifications?: ActiveDirectoryDomainServiceNotifications | undefined; 
  private __notificationsOutput = new ActiveDirectoryDomainServiceNotificationsOutputReference(this as any, "notifications", true);
  public get notifications() {
    return this.__notificationsOutput;
  }
  public putNotifications(value: ActiveDirectoryDomainServiceNotifications | undefined) {
    this._notifications = value;
  }
  public resetNotifications() {
    this._notifications = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get notificationsInput() {
    return this._notifications
  }

  // secure_ldap - computed: false, optional: true, required: false
  private _secureLdap?: ActiveDirectoryDomainServiceSecureLdap | undefined; 
  private __secureLdapOutput = new ActiveDirectoryDomainServiceSecureLdapOutputReference(this as any, "secure_ldap", true);
  public get secureLdap() {
    return this.__secureLdapOutput;
  }
  public putSecureLdap(value: ActiveDirectoryDomainServiceSecureLdap | undefined) {
    this._secureLdap = value;
  }
  public resetSecureLdap() {
    this._secureLdap = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get secureLdapInput() {
    return this._secureLdap
  }

  // security - computed: false, optional: true, required: false
  private _security?: ActiveDirectoryDomainServiceSecurity | undefined; 
  private __securityOutput = new ActiveDirectoryDomainServiceSecurityOutputReference(this as any, "security", true);
  public get security() {
    return this.__securityOutput;
  }
  public putSecurity(value: ActiveDirectoryDomainServiceSecurity | undefined) {
    this._security = value;
  }
  public resetSecurity() {
    this._security = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get securityInput() {
    return this._security
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts?: ActiveDirectoryDomainServiceTimeouts | undefined; 
  private __timeoutsOutput = new ActiveDirectoryDomainServiceTimeoutsOutputReference(this as any, "timeouts", true);
  public get timeouts() {
    return this.__timeoutsOutput;
  }
  public putTimeouts(value: ActiveDirectoryDomainServiceTimeouts | undefined) {
    this._timeouts = value;
  }
  public resetTimeouts() {
    this._timeouts = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get timeoutsInput() {
    return this._timeouts
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      domain_name: cdktf.stringToTerraform(this._domainName),
      filtered_sync_enabled: cdktf.booleanToTerraform(this._filteredSyncEnabled),
      location: cdktf.stringToTerraform(this._location),
      name: cdktf.stringToTerraform(this._name),
      resource_group_name: cdktf.stringToTerraform(this._resourceGroupName),
      sku: cdktf.stringToTerraform(this._sku),
      tags: cdktf.hashMapper(cdktf.anyToTerraform)(this._tags),
      initial_replica_set: activeDirectoryDomainServiceInitialReplicaSetToTerraform(this._initialReplicaSet),
      notifications: activeDirectoryDomainServiceNotificationsToTerraform(this._notifications),
      secure_ldap: activeDirectoryDomainServiceSecureLdapToTerraform(this._secureLdap),
      security: activeDirectoryDomainServiceSecurityToTerraform(this._security),
      timeouts: activeDirectoryDomainServiceTimeoutsToTerraform(this._timeouts),
    };
  }
}
