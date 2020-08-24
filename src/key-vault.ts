// https://www.terraform.io/docs/providers/azurerm/r/key_vault.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import { TerraformResource } from 'cdktf';
import { TerraformMetaArguments } from 'cdktf';

// Configuration

export interface KeyVaultConfig extends TerraformMetaArguments {
  readonly accessPolicy?: KeyVaultAccessPolicy[];
  readonly enabledForDeployment?: boolean;
  readonly enabledForDiskEncryption?: boolean;
  readonly enabledForTemplateDeployment?: boolean;
  readonly location: string;
  readonly name: string;
  readonly purgeProtectionEnabled?: boolean;
  readonly resourceGroupName: string;
  readonly skuName: string;
  readonly softDeleteEnabled?: boolean;
  readonly tags?: { [key: string]: string };
  readonly tenantId: string;
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
export interface KeyVaultNetworkAcls {
  readonly bypass: string;
  readonly defaultAction: string;
  readonly ipRules?: string[];
  readonly virtualNetworkSubnetIds?: string[];
}
export interface KeyVaultTimeouts {
  readonly create?: string;
  readonly delete?: string;
  readonly read?: string;
  readonly update?: string;
}

// Resource

export class KeyVault extends TerraformResource {

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
    this._enabledForDeployment = config.enabledForDeployment;
    this._enabledForDiskEncryption = config.enabledForDiskEncryption;
    this._enabledForTemplateDeployment = config.enabledForTemplateDeployment;
    this._location = config.location;
    this._name = config.name;
    this._purgeProtectionEnabled = config.purgeProtectionEnabled;
    this._resourceGroupName = config.resourceGroupName;
    this._skuName = config.skuName;
    this._softDeleteEnabled = config.softDeleteEnabled;
    this._tags = config.tags;
    this._tenantId = config.tenantId;
    this._networkAcls = config.networkAcls;
    this._timeouts = config.timeouts;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // access_policy - computed: true, optional: true, required: false
  private _accessPolicy?: KeyVaultAccessPolicy[]
  public get accessPolicy(): KeyVaultAccessPolicy[] | undefined {
    return this._accessPolicy; // Getting the computed value is not yet implemented
  }
  public set accessPolicy(value: KeyVaultAccessPolicy[] | undefined) {
    this._accessPolicy = value;
  }

  // enabled_for_deployment - computed: false, optional: true, required: false
  private _enabledForDeployment?: boolean;
  public get enabledForDeployment() {
    return this._enabledForDeployment;
  }
  public set enabledForDeployment(value: boolean | undefined) {
    this._enabledForDeployment = value;
  }

  // enabled_for_disk_encryption - computed: false, optional: true, required: false
  private _enabledForDiskEncryption?: boolean;
  public get enabledForDiskEncryption() {
    return this._enabledForDiskEncryption;
  }
  public set enabledForDiskEncryption(value: boolean | undefined) {
    this._enabledForDiskEncryption = value;
  }

  // enabled_for_template_deployment - computed: false, optional: true, required: false
  private _enabledForTemplateDeployment?: boolean;
  public get enabledForTemplateDeployment() {
    return this._enabledForTemplateDeployment;
  }
  public set enabledForTemplateDeployment(value: boolean | undefined) {
    this._enabledForTemplateDeployment = value;
  }

  // id - computed: true, optional: true, required: false
  private _id?: string;
  public get id() {
    return this._id ?? this.getStringAttribute('id');
  }
  public set id(value: string | undefined) {
    this._id = value;
  }

  // location - computed: false, optional: false, required: true
  private _location: string;
  public get location() {
    return this._location;
  }
  public set location(value: string) {
    this._location = value;
  }

  // name - computed: false, optional: false, required: true
  private _name: string;
  public get name() {
    return this._name;
  }
  public set name(value: string) {
    this._name = value;
  }

  // purge_protection_enabled - computed: false, optional: true, required: false
  private _purgeProtectionEnabled?: boolean;
  public get purgeProtectionEnabled() {
    return this._purgeProtectionEnabled;
  }
  public set purgeProtectionEnabled(value: boolean | undefined) {
    this._purgeProtectionEnabled = value;
  }

  // resource_group_name - computed: false, optional: false, required: true
  private _resourceGroupName: string;
  public get resourceGroupName() {
    return this._resourceGroupName;
  }
  public set resourceGroupName(value: string) {
    this._resourceGroupName = value;
  }

  // sku_name - computed: false, optional: false, required: true
  private _skuName: string;
  public get skuName() {
    return this._skuName;
  }
  public set skuName(value: string) {
    this._skuName = value;
  }

  // soft_delete_enabled - computed: false, optional: true, required: false
  private _softDeleteEnabled?: boolean;
  public get softDeleteEnabled() {
    return this._softDeleteEnabled;
  }
  public set softDeleteEnabled(value: boolean | undefined) {
    this._softDeleteEnabled = value;
  }

  // tags - computed: false, optional: true, required: false
  private _tags?: { [key: string]: string };
  public get tags() {
    return this._tags;
  }
  public set tags(value: { [key: string]: string } | undefined) {
    this._tags = value;
  }

  // tenant_id - computed: false, optional: false, required: true
  private _tenantId: string;
  public get tenantId() {
    return this._tenantId;
  }
  public set tenantId(value: string) {
    this._tenantId = value;
  }

  // vault_uri - computed: true, optional: false, required: true
  public get vaultUri() {
    return this.getStringAttribute('vault_uri');
  }

  // network_acls - computed: false, optional: true, required: false
  private _networkAcls?: KeyVaultNetworkAcls[];
  public get networkAcls() {
    return this._networkAcls;
  }
  public set networkAcls(value: KeyVaultNetworkAcls[] | undefined) {
    this._networkAcls = value;
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts?: KeyVaultTimeouts;
  public get timeouts() {
    return this._timeouts;
  }
  public set timeouts(value: KeyVaultTimeouts | undefined) {
    this._timeouts = value;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      access_policy: this._accessPolicy,
      enabled_for_deployment: this._enabledForDeployment,
      enabled_for_disk_encryption: this._enabledForDiskEncryption,
      enabled_for_template_deployment: this._enabledForTemplateDeployment,
      location: this._location,
      name: this._name,
      purge_protection_enabled: this._purgeProtectionEnabled,
      resource_group_name: this._resourceGroupName,
      sku_name: this._skuName,
      soft_delete_enabled: this._softDeleteEnabled,
      tags: this._tags,
      tenant_id: this._tenantId,
      network_acls: this._networkAcls,
      timeouts: this._timeouts,
    };
  }
}
