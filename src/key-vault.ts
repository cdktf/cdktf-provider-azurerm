// https://www.terraform.io/docs/providers/azurerm/r/key_vault.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface KeyVaultConfig extends cdktf.TerraformMetaArguments {
  readonly accessPolicy?: KeyVaultAccessPolicy[];
  readonly enableRbacAuthorization?: boolean;
  readonly enabledForDeployment?: boolean;
  readonly enabledForDiskEncryption?: boolean;
  readonly enabledForTemplateDeployment?: boolean;
  readonly location: string;
  readonly name: string;
  readonly purgeProtectionEnabled?: boolean;
  readonly resourceGroupName: string;
  readonly skuName: string;
  readonly softDeleteEnabled?: boolean;
  readonly softDeleteRetentionDays?: number;
  readonly tags?: { [key: string]: string };
  readonly tenantId: string;
  /** contact block */
  readonly contact?: KeyVaultContact[];
  /** network_acls block */
  readonly networkAcls?: KeyVaultNetworkAcls[];
  /** timeouts block */
  readonly timeouts?: KeyVaultTimeouts;
}
export interface KeyVaultAccessPolicy {
  readonly applicationId?: string;
  readonly certificatePermissions?: string[];
  readonly keyPermissions?: string[];
  readonly objectId?: string;
  readonly secretPermissions?: string[];
  readonly storagePermissions?: string[];
  readonly tenantId?: string;
}

function keyVaultAccessPolicyToTerraform(struct?: KeyVaultAccessPolicy): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    application_id: cdktf.stringToTerraform(struct!.applicationId),
    certificate_permissions: cdktf.listMapper(cdktf.stringToTerraform)(struct!.certificatePermissions),
    key_permissions: cdktf.listMapper(cdktf.stringToTerraform)(struct!.keyPermissions),
    object_id: cdktf.stringToTerraform(struct!.objectId),
    secret_permissions: cdktf.listMapper(cdktf.stringToTerraform)(struct!.secretPermissions),
    storage_permissions: cdktf.listMapper(cdktf.stringToTerraform)(struct!.storagePermissions),
    tenant_id: cdktf.stringToTerraform(struct!.tenantId),
  }
}

export interface KeyVaultContact {
  readonly email: string;
  readonly name?: string;
  readonly phone?: string;
}

function keyVaultContactToTerraform(struct?: KeyVaultContact): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    email: cdktf.stringToTerraform(struct!.email),
    name: cdktf.stringToTerraform(struct!.name),
    phone: cdktf.stringToTerraform(struct!.phone),
  }
}

export interface KeyVaultNetworkAcls {
  readonly bypass: string;
  readonly defaultAction: string;
  readonly ipRules?: string[];
  readonly virtualNetworkSubnetIds?: string[];
}

function keyVaultNetworkAclsToTerraform(struct?: KeyVaultNetworkAcls): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    bypass: cdktf.stringToTerraform(struct!.bypass),
    default_action: cdktf.stringToTerraform(struct!.defaultAction),
    ip_rules: cdktf.listMapper(cdktf.stringToTerraform)(struct!.ipRules),
    virtual_network_subnet_ids: cdktf.listMapper(cdktf.stringToTerraform)(struct!.virtualNetworkSubnetIds),
  }
}

export interface KeyVaultTimeouts {
  readonly create?: string;
  readonly delete?: string;
  readonly read?: string;
  readonly update?: string;
}

function keyVaultTimeoutsToTerraform(struct?: KeyVaultTimeouts): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    create: cdktf.stringToTerraform(struct!.create),
    delete: cdktf.stringToTerraform(struct!.delete),
    read: cdktf.stringToTerraform(struct!.read),
    update: cdktf.stringToTerraform(struct!.update),
  }
}


// Resource

export class KeyVault extends cdktf.TerraformResource {

  // ===========
  // INITIALIZER
  // ===========

  public constructor(scope: Construct, id: string, config: KeyVaultConfig) {
    super(scope, id, {
      terraformResourceType: 'azurerm_key_vault',
      terraformGeneratorMetadata: {
        providerName: 'azurerm'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle
    });
    this._accessPolicy = config.accessPolicy;
    this._enableRbacAuthorization = config.enableRbacAuthorization;
    this._enabledForDeployment = config.enabledForDeployment;
    this._enabledForDiskEncryption = config.enabledForDiskEncryption;
    this._enabledForTemplateDeployment = config.enabledForTemplateDeployment;
    this._location = config.location;
    this._name = config.name;
    this._purgeProtectionEnabled = config.purgeProtectionEnabled;
    this._resourceGroupName = config.resourceGroupName;
    this._skuName = config.skuName;
    this._softDeleteEnabled = config.softDeleteEnabled;
    this._softDeleteRetentionDays = config.softDeleteRetentionDays;
    this._tags = config.tags;
    this._tenantId = config.tenantId;
    this._contact = config.contact;
    this._networkAcls = config.networkAcls;
    this._timeouts = config.timeouts;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // access_policy - computed: true, optional: true, required: false
  private _accessPolicy?: KeyVaultAccessPolicy[]
  public get accessPolicy(): KeyVaultAccessPolicy[] {
    return this.interpolationForAttribute('access_policy') as any; // Getting the computed value is not yet implemented
  }
  public set accessPolicy(value: KeyVaultAccessPolicy[]) {
    this._accessPolicy = value;
  }
  public resetAccessPolicy() {
    this._accessPolicy = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get accessPolicyInput() {
    return this._accessPolicy
  }

  // enable_rbac_authorization - computed: false, optional: true, required: false
  private _enableRbacAuthorization?: boolean;
  public get enableRbacAuthorization() {
    return this.getBooleanAttribute('enable_rbac_authorization');
  }
  public set enableRbacAuthorization(value: boolean ) {
    this._enableRbacAuthorization = value;
  }
  public resetEnableRbacAuthorization() {
    this._enableRbacAuthorization = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enableRbacAuthorizationInput() {
    return this._enableRbacAuthorization
  }

  // enabled_for_deployment - computed: false, optional: true, required: false
  private _enabledForDeployment?: boolean;
  public get enabledForDeployment() {
    return this.getBooleanAttribute('enabled_for_deployment');
  }
  public set enabledForDeployment(value: boolean ) {
    this._enabledForDeployment = value;
  }
  public resetEnabledForDeployment() {
    this._enabledForDeployment = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enabledForDeploymentInput() {
    return this._enabledForDeployment
  }

  // enabled_for_disk_encryption - computed: false, optional: true, required: false
  private _enabledForDiskEncryption?: boolean;
  public get enabledForDiskEncryption() {
    return this.getBooleanAttribute('enabled_for_disk_encryption');
  }
  public set enabledForDiskEncryption(value: boolean ) {
    this._enabledForDiskEncryption = value;
  }
  public resetEnabledForDiskEncryption() {
    this._enabledForDiskEncryption = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enabledForDiskEncryptionInput() {
    return this._enabledForDiskEncryption
  }

  // enabled_for_template_deployment - computed: false, optional: true, required: false
  private _enabledForTemplateDeployment?: boolean;
  public get enabledForTemplateDeployment() {
    return this.getBooleanAttribute('enabled_for_template_deployment');
  }
  public set enabledForTemplateDeployment(value: boolean ) {
    this._enabledForTemplateDeployment = value;
  }
  public resetEnabledForTemplateDeployment() {
    this._enabledForTemplateDeployment = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enabledForTemplateDeploymentInput() {
    return this._enabledForTemplateDeployment
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

  // purge_protection_enabled - computed: false, optional: true, required: false
  private _purgeProtectionEnabled?: boolean;
  public get purgeProtectionEnabled() {
    return this.getBooleanAttribute('purge_protection_enabled');
  }
  public set purgeProtectionEnabled(value: boolean ) {
    this._purgeProtectionEnabled = value;
  }
  public resetPurgeProtectionEnabled() {
    this._purgeProtectionEnabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get purgeProtectionEnabledInput() {
    return this._purgeProtectionEnabled
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

  // soft_delete_enabled - computed: false, optional: true, required: false
  private _softDeleteEnabled?: boolean;
  public get softDeleteEnabled() {
    return this.getBooleanAttribute('soft_delete_enabled');
  }
  public set softDeleteEnabled(value: boolean ) {
    this._softDeleteEnabled = value;
  }
  public resetSoftDeleteEnabled() {
    this._softDeleteEnabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get softDeleteEnabledInput() {
    return this._softDeleteEnabled
  }

  // soft_delete_retention_days - computed: false, optional: true, required: false
  private _softDeleteRetentionDays?: number;
  public get softDeleteRetentionDays() {
    return this.getNumberAttribute('soft_delete_retention_days');
  }
  public set softDeleteRetentionDays(value: number ) {
    this._softDeleteRetentionDays = value;
  }
  public resetSoftDeleteRetentionDays() {
    this._softDeleteRetentionDays = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get softDeleteRetentionDaysInput() {
    return this._softDeleteRetentionDays
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

  // tenant_id - computed: false, optional: false, required: true
  private _tenantId: string;
  public get tenantId() {
    return this.getStringAttribute('tenant_id');
  }
  public set tenantId(value: string) {
    this._tenantId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get tenantIdInput() {
    return this._tenantId
  }

  // vault_uri - computed: true, optional: false, required: false
  public get vaultUri() {
    return this.getStringAttribute('vault_uri');
  }

  // contact - computed: false, optional: true, required: false
  private _contact?: KeyVaultContact[];
  public get contact() {
    return this.interpolationForAttribute('contact') as any;
  }
  public set contact(value: KeyVaultContact[] ) {
    this._contact = value;
  }
  public resetContact() {
    this._contact = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get contactInput() {
    return this._contact
  }

  // network_acls - computed: false, optional: true, required: false
  private _networkAcls?: KeyVaultNetworkAcls[];
  public get networkAcls() {
    return this.interpolationForAttribute('network_acls') as any;
  }
  public set networkAcls(value: KeyVaultNetworkAcls[] ) {
    this._networkAcls = value;
  }
  public resetNetworkAcls() {
    this._networkAcls = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get networkAclsInput() {
    return this._networkAcls
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts?: KeyVaultTimeouts;
  public get timeouts() {
    return this.interpolationForAttribute('timeouts') as any;
  }
  public set timeouts(value: KeyVaultTimeouts ) {
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
      access_policy: cdktf.listMapper(keyVaultAccessPolicyToTerraform)(this._accessPolicy),
      enable_rbac_authorization: cdktf.booleanToTerraform(this._enableRbacAuthorization),
      enabled_for_deployment: cdktf.booleanToTerraform(this._enabledForDeployment),
      enabled_for_disk_encryption: cdktf.booleanToTerraform(this._enabledForDiskEncryption),
      enabled_for_template_deployment: cdktf.booleanToTerraform(this._enabledForTemplateDeployment),
      location: cdktf.stringToTerraform(this._location),
      name: cdktf.stringToTerraform(this._name),
      purge_protection_enabled: cdktf.booleanToTerraform(this._purgeProtectionEnabled),
      resource_group_name: cdktf.stringToTerraform(this._resourceGroupName),
      sku_name: cdktf.stringToTerraform(this._skuName),
      soft_delete_enabled: cdktf.booleanToTerraform(this._softDeleteEnabled),
      soft_delete_retention_days: cdktf.numberToTerraform(this._softDeleteRetentionDays),
      tags: cdktf.hashMapper(cdktf.anyToTerraform)(this._tags),
      tenant_id: cdktf.stringToTerraform(this._tenantId),
      contact: cdktf.listMapper(keyVaultContactToTerraform)(this._contact),
      network_acls: cdktf.listMapper(keyVaultNetworkAclsToTerraform)(this._networkAcls),
      timeouts: keyVaultTimeoutsToTerraform(this._timeouts),
    };
  }
}
