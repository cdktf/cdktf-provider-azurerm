// https://www.terraform.io/docs/providers/azurerm/r/key_vault_managed_hardware_security_module.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface KeyVaultManagedHardwareSecurityModuleConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/key_vault_managed_hardware_security_module.html#admin_object_ids KeyVaultManagedHardwareSecurityModule#admin_object_ids}
  */
  readonly adminObjectIds: string[];
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/key_vault_managed_hardware_security_module.html#location KeyVaultManagedHardwareSecurityModule#location}
  */
  readonly location: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/key_vault_managed_hardware_security_module.html#name KeyVaultManagedHardwareSecurityModule#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/key_vault_managed_hardware_security_module.html#purge_protection_enabled KeyVaultManagedHardwareSecurityModule#purge_protection_enabled}
  */
  readonly purgeProtectionEnabled?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/key_vault_managed_hardware_security_module.html#resource_group_name KeyVaultManagedHardwareSecurityModule#resource_group_name}
  */
  readonly resourceGroupName: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/key_vault_managed_hardware_security_module.html#sku_name KeyVaultManagedHardwareSecurityModule#sku_name}
  */
  readonly skuName: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/key_vault_managed_hardware_security_module.html#soft_delete_retention_days KeyVaultManagedHardwareSecurityModule#soft_delete_retention_days}
  */
  readonly softDeleteRetentionDays?: number;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/key_vault_managed_hardware_security_module.html#tags KeyVaultManagedHardwareSecurityModule#tags}
  */
  readonly tags?: { [key: string]: string } | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/key_vault_managed_hardware_security_module.html#tenant_id KeyVaultManagedHardwareSecurityModule#tenant_id}
  */
  readonly tenantId: string;
  /**
  * timeouts block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/key_vault_managed_hardware_security_module.html#timeouts KeyVaultManagedHardwareSecurityModule#timeouts}
  */
  readonly timeouts?: KeyVaultManagedHardwareSecurityModuleTimeouts;
}
export interface KeyVaultManagedHardwareSecurityModuleTimeouts {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/key_vault_managed_hardware_security_module.html#create KeyVaultManagedHardwareSecurityModule#create}
  */
  readonly create?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/key_vault_managed_hardware_security_module.html#delete KeyVaultManagedHardwareSecurityModule#delete}
  */
  readonly delete?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/key_vault_managed_hardware_security_module.html#read KeyVaultManagedHardwareSecurityModule#read}
  */
  readonly read?: string;
}

function keyVaultManagedHardwareSecurityModuleTimeoutsToTerraform(struct?: KeyVaultManagedHardwareSecurityModuleTimeoutsOutputReference | KeyVaultManagedHardwareSecurityModuleTimeouts): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    create: cdktf.stringToTerraform(struct!.create),
    delete: cdktf.stringToTerraform(struct!.delete),
    read: cdktf.stringToTerraform(struct!.read),
  }
}

export class KeyVaultManagedHardwareSecurityModuleTimeoutsOutputReference extends cdktf.ComplexObject {
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
}

/**
* Represents a {@link https://www.terraform.io/docs/providers/azurerm/r/key_vault_managed_hardware_security_module.html azurerm_key_vault_managed_hardware_security_module}
*/
export class KeyVaultManagedHardwareSecurityModule extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType: string = "azurerm_key_vault_managed_hardware_security_module";

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://www.terraform.io/docs/providers/azurerm/r/key_vault_managed_hardware_security_module.html azurerm_key_vault_managed_hardware_security_module} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options KeyVaultManagedHardwareSecurityModuleConfig
  */
  public constructor(scope: Construct, id: string, config: KeyVaultManagedHardwareSecurityModuleConfig) {
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
    this._adminObjectIds = config.adminObjectIds;
    this._location = config.location;
    this._name = config.name;
    this._purgeProtectionEnabled = config.purgeProtectionEnabled;
    this._resourceGroupName = config.resourceGroupName;
    this._skuName = config.skuName;
    this._softDeleteRetentionDays = config.softDeleteRetentionDays;
    this._tags = config.tags;
    this._tenantId = config.tenantId;
    this._timeouts = config.timeouts;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // admin_object_ids - computed: false, optional: false, required: true
  private _adminObjectIds?: string[]; 
  public get adminObjectIds() {
    return this.getListAttribute('admin_object_ids');
  }
  public set adminObjectIds(value: string[]) {
    this._adminObjectIds = value;
  }
  // Temporarily expose input value. Use with caution.
  public get adminObjectIdsInput() {
    return this._adminObjectIds
  }

  // hsm_uri - computed: true, optional: false, required: false
  public get hsmUri() {
    return this.getStringAttribute('hsm_uri');
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

  // purge_protection_enabled - computed: false, optional: true, required: false
  private _purgeProtectionEnabled?: boolean | cdktf.IResolvable | undefined; 
  public get purgeProtectionEnabled() {
    return this.getBooleanAttribute('purge_protection_enabled') as any;
  }
  public set purgeProtectionEnabled(value: boolean | cdktf.IResolvable | undefined) {
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

  // sku_name - computed: false, optional: false, required: true
  private _skuName?: string; 
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

  // soft_delete_retention_days - computed: false, optional: true, required: false
  private _softDeleteRetentionDays?: number | undefined; 
  public get softDeleteRetentionDays() {
    return this.getNumberAttribute('soft_delete_retention_days');
  }
  public set softDeleteRetentionDays(value: number | undefined) {
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

  // tenant_id - computed: false, optional: false, required: true
  private _tenantId?: string; 
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

  // timeouts - computed: false, optional: true, required: false
  private _timeouts?: KeyVaultManagedHardwareSecurityModuleTimeouts | undefined; 
  private __timeoutsOutput = new KeyVaultManagedHardwareSecurityModuleTimeoutsOutputReference(this as any, "timeouts", true);
  public get timeouts() {
    return this.__timeoutsOutput;
  }
  public putTimeouts(value: KeyVaultManagedHardwareSecurityModuleTimeouts | undefined) {
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
      admin_object_ids: cdktf.listMapper(cdktf.stringToTerraform)(this._adminObjectIds),
      location: cdktf.stringToTerraform(this._location),
      name: cdktf.stringToTerraform(this._name),
      purge_protection_enabled: cdktf.booleanToTerraform(this._purgeProtectionEnabled),
      resource_group_name: cdktf.stringToTerraform(this._resourceGroupName),
      sku_name: cdktf.stringToTerraform(this._skuName),
      soft_delete_retention_days: cdktf.numberToTerraform(this._softDeleteRetentionDays),
      tags: cdktf.hashMapper(cdktf.anyToTerraform)(this._tags),
      tenant_id: cdktf.stringToTerraform(this._tenantId),
      timeouts: keyVaultManagedHardwareSecurityModuleTimeoutsToTerraform(this._timeouts),
    };
  }
}
