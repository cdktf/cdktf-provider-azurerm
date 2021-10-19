// https://www.terraform.io/docs/providers/azurerm/d/storage_sync_group.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataAzurermStorageSyncGroupConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/d/storage_sync_group.html#name DataAzurermStorageSyncGroup#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/d/storage_sync_group.html#storage_sync_id DataAzurermStorageSyncGroup#storage_sync_id}
  */
  readonly storageSyncId: string;
  /**
  * timeouts block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/d/storage_sync_group.html#timeouts DataAzurermStorageSyncGroup#timeouts}
  */
  readonly timeouts?: DataAzurermStorageSyncGroupTimeouts;
}
export interface DataAzurermStorageSyncGroupTimeouts {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/d/storage_sync_group.html#read DataAzurermStorageSyncGroup#read}
  */
  readonly read?: string;
}

function dataAzurermStorageSyncGroupTimeoutsToTerraform(struct?: DataAzurermStorageSyncGroupTimeoutsOutputReference | DataAzurermStorageSyncGroupTimeouts): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    read: cdktf.stringToTerraform(struct!.read),
  }
}

export class DataAzurermStorageSyncGroupTimeoutsOutputReference extends cdktf.ComplexObject {
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
* Represents a {@link https://www.terraform.io/docs/providers/azurerm/d/storage_sync_group.html azurerm_storage_sync_group}
*/
export class DataAzurermStorageSyncGroup extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType: string = "azurerm_storage_sync_group";

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://www.terraform.io/docs/providers/azurerm/d/storage_sync_group.html azurerm_storage_sync_group} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataAzurermStorageSyncGroupConfig
  */
  public constructor(scope: Construct, id: string, config: DataAzurermStorageSyncGroupConfig) {
    super(scope, id, {
      terraformResourceType: 'azurerm_storage_sync_group',
      terraformGeneratorMetadata: {
        providerName: 'azurerm'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle
    });
    this._name = config.name;
    this._storageSyncId = config.storageSyncId;
    this._timeouts = config.timeouts;
  }

  // ==========
  // ATTRIBUTES
  // ==========

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

  // storage_sync_id - computed: false, optional: false, required: true
  private _storageSyncId?: string; 
  public get storageSyncId() {
    return this.getStringAttribute('storage_sync_id');
  }
  public set storageSyncId(value: string) {
    this._storageSyncId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get storageSyncIdInput() {
    return this._storageSyncId
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts?: DataAzurermStorageSyncGroupTimeouts | undefined; 
  private __timeoutsOutput = new DataAzurermStorageSyncGroupTimeoutsOutputReference(this as any, "timeouts", true);
  public get timeouts() {
    return this.__timeoutsOutput;
  }
  public putTimeouts(value: DataAzurermStorageSyncGroupTimeouts | undefined) {
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
      storage_sync_id: cdktf.stringToTerraform(this._storageSyncId),
      timeouts: dataAzurermStorageSyncGroupTimeoutsToTerraform(this._timeouts),
    };
  }
}
