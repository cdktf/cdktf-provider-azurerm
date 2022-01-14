// https://www.terraform.io/docs/providers/azurerm/d/key_vault
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataAzurermKeyVaultConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/d/key_vault#name DataAzurermKeyVault#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/d/key_vault#resource_group_name DataAzurermKeyVault#resource_group_name}
  */
  readonly resourceGroupName: string;
  /**
  * timeouts block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/d/key_vault#timeouts DataAzurermKeyVault#timeouts}
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
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/d/key_vault#read DataAzurermKeyVault#read}
  */
  readonly read?: string;
}

export function dataAzurermKeyVaultTimeoutsToTerraform(struct?: DataAzurermKeyVaultTimeoutsOutputReference | DataAzurermKeyVaultTimeouts): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    read: cdktf.stringToTerraform(struct!.read),
  }
}

export class DataAzurermKeyVaultTimeoutsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param isSingleItem True if this is a block, false if it's a list
  */
  public constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean) {
    super(terraformResource, terraformAttribute, isSingleItem);
  }

  public get internalValue(): DataAzurermKeyVaultTimeouts | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._read !== undefined) {
      hasAnyValues = true;
      internalValueResult.read = this._read;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAzurermKeyVaultTimeouts | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._read = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._read = value.read;
    }
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
}

/**
* Represents a {@link https://www.terraform.io/docs/providers/azurerm/d/key_vault azurerm_key_vault}
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
  * Create a new {@link https://www.terraform.io/docs/providers/azurerm/d/key_vault azurerm_key_vault} Data Source
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
    this._timeouts.internalValue = config.timeouts;
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
    return this.getBooleanAttribute('enable_rbac_authorization') as any;
  }

  // enabled_for_deployment - computed: true, optional: false, required: false
  public get enabledForDeployment() {
    return this.getBooleanAttribute('enabled_for_deployment') as any;
  }

  // enabled_for_disk_encryption - computed: true, optional: false, required: false
  public get enabledForDiskEncryption() {
    return this.getBooleanAttribute('enabled_for_disk_encryption') as any;
  }

  // enabled_for_template_deployment - computed: true, optional: false, required: false
  public get enabledForTemplateDeployment() {
    return this.getBooleanAttribute('enabled_for_template_deployment') as any;
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

  // network_acls - computed: true, optional: false, required: false
  public networkAcls(index: string) {
    return new DataAzurermKeyVaultNetworkAcls(this, 'network_acls', index);
  }

  // purge_protection_enabled - computed: true, optional: false, required: false
  public get purgeProtectionEnabled() {
    return this.getBooleanAttribute('purge_protection_enabled') as any;
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

  // sku_name - computed: true, optional: false, required: false
  public get skuName() {
    return this.getStringAttribute('sku_name');
  }

  // soft_delete_enabled - computed: true, optional: false, required: false
  public get softDeleteEnabled() {
    return this.getBooleanAttribute('soft_delete_enabled') as any;
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
  private _timeouts = new DataAzurermKeyVaultTimeoutsOutputReference(this as any, "timeouts", true);
  public get timeouts() {
    return this._timeouts;
  }
  public putTimeouts(value: DataAzurermKeyVaultTimeouts) {
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
      name: cdktf.stringToTerraform(this._name),
      resource_group_name: cdktf.stringToTerraform(this._resourceGroupName),
      timeouts: dataAzurermKeyVaultTimeoutsToTerraform(this._timeouts.internalValue),
    };
  }
}
