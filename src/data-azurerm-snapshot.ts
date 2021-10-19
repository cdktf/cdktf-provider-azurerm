// https://www.terraform.io/docs/providers/azurerm/d/snapshot.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataAzurermSnapshotConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/d/snapshot.html#name DataAzurermSnapshot#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/d/snapshot.html#resource_group_name DataAzurermSnapshot#resource_group_name}
  */
  readonly resourceGroupName: string;
  /**
  * timeouts block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/d/snapshot.html#timeouts DataAzurermSnapshot#timeouts}
  */
  readonly timeouts?: DataAzurermSnapshotTimeouts;
}
export class DataAzurermSnapshotEncryptionSettingsDiskEncryptionKey extends cdktf.ComplexComputedList {

  // secret_url - computed: true, optional: false, required: false
  public get secretUrl() {
    return this.getStringAttribute('secret_url');
  }

  // source_vault_id - computed: true, optional: false, required: false
  public get sourceVaultId() {
    return this.getStringAttribute('source_vault_id');
  }
}
export class DataAzurermSnapshotEncryptionSettingsKeyEncryptionKey extends cdktf.ComplexComputedList {

  // key_url - computed: true, optional: false, required: false
  public get keyUrl() {
    return this.getStringAttribute('key_url');
  }

  // source_vault_id - computed: true, optional: false, required: false
  public get sourceVaultId() {
    return this.getStringAttribute('source_vault_id');
  }
}
export class DataAzurermSnapshotEncryptionSettings extends cdktf.ComplexComputedList {

  // disk_encryption_key - computed: true, optional: false, required: false
  public get diskEncryptionKey() {
    // Getting the computed value is not yet implemented
    return this.interpolationForAttribute('disk_encryption_key') as any;
  }

  // enabled - computed: true, optional: false, required: false
  public get enabled() {
    return this.getBooleanAttribute('enabled') as any;
  }

  // key_encryption_key - computed: true, optional: false, required: false
  public get keyEncryptionKey() {
    // Getting the computed value is not yet implemented
    return this.interpolationForAttribute('key_encryption_key') as any;
  }
}
export interface DataAzurermSnapshotTimeouts {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/d/snapshot.html#read DataAzurermSnapshot#read}
  */
  readonly read?: string;
}

function dataAzurermSnapshotTimeoutsToTerraform(struct?: DataAzurermSnapshotTimeoutsOutputReference | DataAzurermSnapshotTimeouts): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    read: cdktf.stringToTerraform(struct!.read),
  }
}

export class DataAzurermSnapshotTimeoutsOutputReference extends cdktf.ComplexObject {
  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param isSingleItem True if this is a block, false if it's a list
  */
  public constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean) {
    super(terraformResource, terraformAttribute, isSingleItem);
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
* Represents a {@link https://www.terraform.io/docs/providers/azurerm/d/snapshot.html azurerm_snapshot}
*/
export class DataAzurermSnapshot extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType: string = "azurerm_snapshot";

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://www.terraform.io/docs/providers/azurerm/d/snapshot.html azurerm_snapshot} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataAzurermSnapshotConfig
  */
  public constructor(scope: Construct, id: string, config: DataAzurermSnapshotConfig) {
    super(scope, id, {
      terraformResourceType: 'azurerm_snapshot',
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

  // creation_option - computed: true, optional: false, required: false
  public get creationOption() {
    return this.getStringAttribute('creation_option');
  }

  // disk_size_gb - computed: true, optional: false, required: false
  public get diskSizeGb() {
    return this.getNumberAttribute('disk_size_gb');
  }

  // encryption_settings - computed: true, optional: false, required: false
  public encryptionSettings(index: string) {
    return new DataAzurermSnapshotEncryptionSettings(this, 'encryption_settings', index);
  }

  // id - computed: true, optional: true, required: false
  public get id() {
    return this.getStringAttribute('id');
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

  // os_type - computed: true, optional: false, required: false
  public get osType() {
    return this.getStringAttribute('os_type');
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

  // source_resource_id - computed: true, optional: false, required: false
  public get sourceResourceId() {
    return this.getStringAttribute('source_resource_id');
  }

  // source_uri - computed: true, optional: false, required: false
  public get sourceUri() {
    return this.getStringAttribute('source_uri');
  }

  // storage_account_id - computed: true, optional: false, required: false
  public get storageAccountId() {
    return this.getStringAttribute('storage_account_id');
  }

  // time_created - computed: true, optional: false, required: false
  public get timeCreated() {
    return this.getStringAttribute('time_created');
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts?: DataAzurermSnapshotTimeouts | undefined; 
  private __timeoutsOutput = new DataAzurermSnapshotTimeoutsOutputReference(this as any, "timeouts", true);
  public get timeouts() {
    return this.__timeoutsOutput;
  }
  public putTimeouts(value: DataAzurermSnapshotTimeouts | undefined) {
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
      timeouts: dataAzurermSnapshotTimeoutsToTerraform(this._timeouts),
    };
  }
}
