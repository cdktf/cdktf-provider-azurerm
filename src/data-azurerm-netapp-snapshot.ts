// https://www.terraform.io/docs/providers/azurerm/d/netapp_snapshot.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataAzurermNetappSnapshotConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/d/netapp_snapshot.html#account_name DataAzurermNetappSnapshot#account_name}
  */
  readonly accountName: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/d/netapp_snapshot.html#name DataAzurermNetappSnapshot#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/d/netapp_snapshot.html#pool_name DataAzurermNetappSnapshot#pool_name}
  */
  readonly poolName: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/d/netapp_snapshot.html#resource_group_name DataAzurermNetappSnapshot#resource_group_name}
  */
  readonly resourceGroupName: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/d/netapp_snapshot.html#volume_name DataAzurermNetappSnapshot#volume_name}
  */
  readonly volumeName: string;
  /**
  * timeouts block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/d/netapp_snapshot.html#timeouts DataAzurermNetappSnapshot#timeouts}
  */
  readonly timeouts?: DataAzurermNetappSnapshotTimeouts;
}
export interface DataAzurermNetappSnapshotTimeouts {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/d/netapp_snapshot.html#read DataAzurermNetappSnapshot#read}
  */
  readonly read?: string;
}

function dataAzurermNetappSnapshotTimeoutsToTerraform(struct?: DataAzurermNetappSnapshotTimeoutsOutputReference | DataAzurermNetappSnapshotTimeouts): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    read: cdktf.stringToTerraform(struct!.read),
  }
}

export class DataAzurermNetappSnapshotTimeoutsOutputReference extends cdktf.ComplexObject {
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
* Represents a {@link https://www.terraform.io/docs/providers/azurerm/d/netapp_snapshot.html azurerm_netapp_snapshot}
*/
export class DataAzurermNetappSnapshot extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType: string = "azurerm_netapp_snapshot";

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://www.terraform.io/docs/providers/azurerm/d/netapp_snapshot.html azurerm_netapp_snapshot} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataAzurermNetappSnapshotConfig
  */
  public constructor(scope: Construct, id: string, config: DataAzurermNetappSnapshotConfig) {
    super(scope, id, {
      terraformResourceType: 'azurerm_netapp_snapshot',
      terraformGeneratorMetadata: {
        providerName: 'azurerm'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle
    });
    this._accountName = config.accountName;
    this._name = config.name;
    this._poolName = config.poolName;
    this._resourceGroupName = config.resourceGroupName;
    this._volumeName = config.volumeName;
    this._timeouts = config.timeouts;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // account_name - computed: false, optional: false, required: true
  private _accountName?: string; 
  public get accountName() {
    return this.getStringAttribute('account_name');
  }
  public set accountName(value: string) {
    this._accountName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get accountNameInput() {
    return this._accountName
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
    return this._name
  }

  // pool_name - computed: false, optional: false, required: true
  private _poolName?: string; 
  public get poolName() {
    return this.getStringAttribute('pool_name');
  }
  public set poolName(value: string) {
    this._poolName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get poolNameInput() {
    return this._poolName
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

  // volume_name - computed: false, optional: false, required: true
  private _volumeName?: string; 
  public get volumeName() {
    return this.getStringAttribute('volume_name');
  }
  public set volumeName(value: string) {
    this._volumeName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get volumeNameInput() {
    return this._volumeName
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts?: DataAzurermNetappSnapshotTimeouts | undefined; 
  private __timeoutsOutput = new DataAzurermNetappSnapshotTimeoutsOutputReference(this as any, "timeouts", true);
  public get timeouts() {
    return this.__timeoutsOutput;
  }
  public putTimeouts(value: DataAzurermNetappSnapshotTimeouts | undefined) {
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
      account_name: cdktf.stringToTerraform(this._accountName),
      name: cdktf.stringToTerraform(this._name),
      pool_name: cdktf.stringToTerraform(this._poolName),
      resource_group_name: cdktf.stringToTerraform(this._resourceGroupName),
      volume_name: cdktf.stringToTerraform(this._volumeName),
      timeouts: dataAzurermNetappSnapshotTimeoutsToTerraform(this._timeouts),
    };
  }
}
