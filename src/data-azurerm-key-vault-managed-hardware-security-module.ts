// https://www.terraform.io/docs/providers/azurerm/r/data_azurerm_key_vault_managed_hardware_security_module.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataAzurermKeyVaultManagedHardwareSecurityModuleConfig extends cdktf.TerraformMetaArguments {
  readonly name: string;
  readonly resourceGroupName: string;
  /** timeouts block */
  readonly timeouts?: DataAzurermKeyVaultManagedHardwareSecurityModuleTimeouts;
}
export interface DataAzurermKeyVaultManagedHardwareSecurityModuleTimeouts {
  readonly read?: string;
}

function dataAzurermKeyVaultManagedHardwareSecurityModuleTimeoutsToTerraform(struct?: DataAzurermKeyVaultManagedHardwareSecurityModuleTimeouts): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    read: cdktf.stringToTerraform(struct!.read),
  }
}


// Resource

export class DataAzurermKeyVaultManagedHardwareSecurityModule extends cdktf.TerraformDataSource {

  // ===========
  // INITIALIZER
  // ===========

  public constructor(scope: Construct, id: string, config: DataAzurermKeyVaultManagedHardwareSecurityModuleConfig) {
    super(scope, id, {
      terraformResourceType: 'azurerm_key_vault_managed_hardware_security_module',
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

  // admin_object_ids - computed: true, optional: false, required: false
  public get adminObjectIds() {
    return this.getListAttribute('admin_object_ids');
  }

  // hsm_uri - computed: true, optional: false, required: false
  public get hsmUri() {
    return this.getStringAttribute('hsm_uri');
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

  // soft_delete_retention_days - computed: true, optional: false, required: false
  public get softDeleteRetentionDays() {
    return this.getNumberAttribute('soft_delete_retention_days');
  }

  // tags - computed: true, optional: false, required: false
  public tags(key: string): string {
    return new cdktf.StringMap(this, 'tags').lookup(key);
  }

  // tenant_id - computed: true, optional: false, required: false
  public get tenantId() {
    return this.getStringAttribute('tenant_id');
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts?: DataAzurermKeyVaultManagedHardwareSecurityModuleTimeouts;
  public get timeouts() {
    return this.interpolationForAttribute('timeouts') as any;
  }
  public set timeouts(value: DataAzurermKeyVaultManagedHardwareSecurityModuleTimeouts ) {
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
      timeouts: dataAzurermKeyVaultManagedHardwareSecurityModuleTimeoutsToTerraform(this._timeouts),
    };
  }
}
