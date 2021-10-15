// https://www.terraform.io/docs/providers/azurerm/d/key_vault.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataAzurermKeyVaultConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/d/key_vault.html#name DataAzurermKeyVault#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/d/key_vault.html#resource_group_name DataAzurermKeyVault#resource_group_name}
  */
  readonly resourceGroupName: string;
  /**
  * timeouts block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/d/key_vault.html#timeouts DataAzurermKeyVault#timeouts}
  */
  readonly timeouts?: DataAzurermKeyVaultTimeouts;
}
export class DataAzurermKeyVaultAccessPolicy extends cdktf.ComplexComputedList {

  // application_id - computed: true, optional: false, required: false
  public get applicationId() {
    return this.getStringAttribute('application_id');
  }

  // certificate_permissions - computed: true, optional: false, required: false
  public get certificatePermissions() {
    return this.getListAttribute('certificate_permissions');
  }

  // key_permissions - computed: true, optional: false, required: false
  public get keyPermissions() {
    return this.getListAttribute('key_permissions');
  }

  // object_id - computed: true, optional: false, required: false
  public get objectId() {
    return this.getStringAttribute('object_id');
  }

  // secret_permissions - computed: true, optional: false, required: false
  public get secretPermissions() {
    return this.getListAttribute('secret_permissions');
  }

  // storage_permissions - computed: true, optional: false, required: false
  public get storagePermissions() {
    return this.getListAttribute('storage_permissions');
  }

  // tenant_id - computed: true, optional: false, required: false
  public get tenantId() {
    return this.getStringAttribute('tenant_id');
  }
}
export class DataAzurermKeyVaultNetworkAcls extends cdktf.ComplexComputedList {

  // bypass - computed: true, optional: false, required: false
  public get bypass() {
    return this.getStringAttribute('bypass');
  }

  // default_action - computed: true, optional: false, required: false
  public get defaultAction() {
    return this.getStringAttribute('default_action');
  }

  // ip_rules - computed: true, optional: false, required: false
  public get ipRules() {
    return this.getListAttribute('ip_rules');
  }

  // virtual_network_subnet_ids - computed: true, optional: false, required: false
  public get virtualNetworkSubnetIds() {
    return this.getListAttribute('virtual_network_subnet_ids');
  }
}
export interface DataAzurermKeyVaultTimeouts {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/d/key_vault.html#read DataAzurermKeyVault#read}
  */
  readonly read?: string;
}

function dataAzurermKeyVaultTimeoutsToTerraform(struct?: DataAzurermKeyVaultTimeouts): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    read: cdktf.stringToTerraform(struct!.read),
  }
}


/**
* Represents a {@link https://www.terraform.io/docs/providers/azurerm/d/key_vault.html azurerm_key_vault}
*/
export class DataAzurermKeyVault extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType: string = "azurerm_key_vault";

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://www.terraform.io/docs/providers/azurerm/d/key_vault.html azurerm_key_vault} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataAzurermKeyVaultConfig
  */
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

  // access_policy - computed: true, optional: false, required: false
  public accessPolicy(index: string) {
    return new DataAzurermKeyVaultAccessPolicy(this, 'access_policy', index);
  }

  // enable_rbac_authorization - computed: true, optional: false, required: false
  public get enableRbacAuthorization() {
    return this.getBooleanAttribute('enable_rbac_authorization');
  }

  // enabled_for_deployment - computed: true, optional: false, required: false
  public get enabledForDeployment() {
    return this.getBooleanAttribute('enabled_for_deployment');
  }

  // enabled_for_disk_encryption - computed: true, optional: false, required: false
  public get enabledForDiskEncryption() {
    return this.getBooleanAttribute('enabled_for_disk_encryption');
  }

  // enabled_for_template_deployment - computed: true, optional: false, required: false
  public get enabledForTemplateDeployment() {
    return this.getBooleanAttribute('enabled_for_template_deployment');
  }

  // id - computed: true, optional: true, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // location - computed: true, optional: false, required: false
  public get location() {
    return this.getStringAttribute('location');
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

  // network_acls - computed: true, optional: false, required: false
  public networkAcls(index: string) {
    return new DataAzurermKeyVaultNetworkAcls(this, 'network_acls', index);
  }

  // purge_protection_enabled - computed: true, optional: false, required: false
  public get purgeProtectionEnabled() {
    return this.getBooleanAttribute('purge_protection_enabled');
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

  // sku_name - computed: true, optional: false, required: false
  public get skuName() {
    return this.getStringAttribute('sku_name');
  }

  // soft_delete_enabled - computed: true, optional: false, required: false
  public get softDeleteEnabled() {
    return this.getBooleanAttribute('soft_delete_enabled');
  }

  // tags - computed: true, optional: false, required: false
  public tags(key: string): string {
    return new cdktf.StringMap(this, 'tags').lookup(key);
  }

  // tenant_id - computed: true, optional: false, required: false
  public get tenantId() {
    return this.getStringAttribute('tenant_id');
  }

  // vault_uri - computed: true, optional: false, required: false
  public get vaultUri() {
    return this.getStringAttribute('vault_uri');
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts?: DataAzurermKeyVaultTimeouts;
  public get timeouts() {
    return this.interpolationForAttribute('timeouts') as any;
  }
  public set timeouts(value: DataAzurermKeyVaultTimeouts ) {
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
      name: cdktf.stringToTerraform(this._name),
      resource_group_name: cdktf.stringToTerraform(this._resourceGroupName),
      timeouts: dataAzurermKeyVaultTimeoutsToTerraform(this._timeouts),
    };
  }
}
