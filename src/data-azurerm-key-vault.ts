// https://www.terraform.io/docs/providers/azurerm/r/data_azurerm_key_vault.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import { TerraformDataSource } from 'cdktf';
import { TerraformMetaArguments } from 'cdktf';
import { ComplexComputedList } from "cdktf";
import { StringMap } from "cdktf";

// Configuration

export interface DataAzurermKeyVaultConfig extends TerraformMetaArguments {
  readonly name: string;
  readonly resourceGroupName: string;
  /** timeouts block */
  readonly timeouts?: DataAzurermKeyVaultTimeouts;
}
export class DataAzurermKeyVaultAccessPolicy extends ComplexComputedList {

  // application_id - computed: true, optional: false, required: true
  public get applicationId() {
    return this.getStringAttribute('application_id');
  }

  // certificate_permissions - computed: true, optional: false, required: true
  public get certificatePermissions() {
    return this.getListAttribute('certificate_permissions');
  }

  // key_permissions - computed: true, optional: false, required: true
  public get keyPermissions() {
    return this.getListAttribute('key_permissions');
  }

  // object_id - computed: true, optional: false, required: true
  public get objectId() {
    return this.getStringAttribute('object_id');
  }

  // secret_permissions - computed: true, optional: false, required: true
  public get secretPermissions() {
    return this.getListAttribute('secret_permissions');
  }

  // storage_permissions - computed: true, optional: false, required: true
  public get storagePermissions() {
    return this.getListAttribute('storage_permissions');
  }

  // tenant_id - computed: true, optional: false, required: true
  public get tenantId() {
    return this.getStringAttribute('tenant_id');
  }
}
export class DataAzurermKeyVaultNetworkAcls extends ComplexComputedList {

  // bypass - computed: true, optional: false, required: true
  public get bypass() {
    return this.getStringAttribute('bypass');
  }

  // default_action - computed: true, optional: false, required: true
  public get defaultAction() {
    return this.getStringAttribute('default_action');
  }

  // ip_rules - computed: true, optional: false, required: true
  public get ipRules() {
    return this.getListAttribute('ip_rules');
  }

  // virtual_network_subnet_ids - computed: true, optional: false, required: true
  public get virtualNetworkSubnetIds() {
    return this.getListAttribute('virtual_network_subnet_ids');
  }
}
export interface DataAzurermKeyVaultTimeouts {
  readonly read?: string;
}

// Resource

export class DataAzurermKeyVault extends TerraformDataSource {

  // ===========
  // INITIALIZER
  // ===========

  public constructor(scope: Construct, id: string, config: DataAzurermKeyVaultConfig) {
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
    this._name = config.name;
    this._resourceGroupName = config.resourceGroupName;
    this._timeouts = config.timeouts;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // access_policy - computed: true, optional: false, required: true
  public accessPolicy(index: string) {
    return new DataAzurermKeyVaultAccessPolicy(this, 'access_policy', index);
  }

  // enabled_for_deployment - computed: true, optional: false, required: true
  public get enabledForDeployment() {
    return this.getBooleanAttribute('enabled_for_deployment');
  }

  // enabled_for_disk_encryption - computed: true, optional: false, required: true
  public get enabledForDiskEncryption() {
    return this.getBooleanAttribute('enabled_for_disk_encryption');
  }

  // enabled_for_template_deployment - computed: true, optional: false, required: true
  public get enabledForTemplateDeployment() {
    return this.getBooleanAttribute('enabled_for_template_deployment');
  }

  // id - computed: true, optional: true, required: false
  private _id?: string;
  public get id() {
    return this._id ?? this.getStringAttribute('id');
  }
  public set id(value: string | undefined) {
    this._id = value;
  }

  // location - computed: true, optional: false, required: true
  public get location() {
    return this.getStringAttribute('location');
  }

  // name - computed: false, optional: false, required: true
  private _name: string;
  public get name() {
    return this._name;
  }
  public set name(value: string) {
    this._name = value;
  }

  // network_acls - computed: true, optional: false, required: true
  public networkAcls(index: string) {
    return new DataAzurermKeyVaultNetworkAcls(this, 'network_acls', index);
  }

  // purge_protection_enabled - computed: true, optional: false, required: true
  public get purgeProtectionEnabled() {
    return this.getBooleanAttribute('purge_protection_enabled');
  }

  // resource_group_name - computed: false, optional: false, required: true
  private _resourceGroupName: string;
  public get resourceGroupName() {
    return this._resourceGroupName;
  }
  public set resourceGroupName(value: string) {
    this._resourceGroupName = value;
  }

  // sku_name - computed: true, optional: false, required: true
  public get skuName() {
    return this.getStringAttribute('sku_name');
  }

  // soft_delete_enabled - computed: true, optional: false, required: true
  public get softDeleteEnabled() {
    return this.getBooleanAttribute('soft_delete_enabled');
  }

  // tags - computed: true, optional: false, required: true
  public tags(key: string): string {
    return new StringMap(this, 'tags').lookup(key);
  }

  // tenant_id - computed: true, optional: false, required: true
  public get tenantId() {
    return this.getStringAttribute('tenant_id');
  }

  // vault_uri - computed: true, optional: false, required: true
  public get vaultUri() {
    return this.getStringAttribute('vault_uri');
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts?: DataAzurermKeyVaultTimeouts;
  public get timeouts() {
    return this._timeouts;
  }
  public set timeouts(value: DataAzurermKeyVaultTimeouts | undefined) {
    this._timeouts = value;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      name: this._name,
      resource_group_name: this._resourceGroupName,
      timeouts: this._timeouts,
    };
  }
}
