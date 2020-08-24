// https://www.terraform.io/docs/providers/azurerm/r/netapp_snapshot.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import { TerraformResource } from 'cdktf';
import { TerraformMetaArguments } from 'cdktf';

// Configuration

export interface NetappSnapshotConfig extends TerraformMetaArguments {
  readonly accountName: string;
  readonly location: string;
  readonly name: string;
  readonly poolName: string;
  readonly resourceGroupName: string;
  readonly volumeName: string;
  /** timeouts block */
  readonly timeouts?: NetappSnapshotTimeouts;
}
export interface NetappSnapshotTimeouts {
  readonly create?: string;
  readonly delete?: string;
  readonly read?: string;
  readonly update?: string;
}

// Resource

export class NetappSnapshot extends TerraformResource {

  // ===========
  // INITIALIZER
  // ===========

  public constructor(scope: Construct, id: string, config: NetappSnapshotConfig) {
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
    this._location = config.location;
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
  private _accountName: string;
  public get accountName() {
    return this._accountName;
  }
  public set accountName(value: string) {
    this._accountName = value;
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

  // pool_name - computed: false, optional: false, required: true
  private _poolName: string;
  public get poolName() {
    return this._poolName;
  }
  public set poolName(value: string) {
    this._poolName = value;
  }

  // resource_group_name - computed: false, optional: false, required: true
  private _resourceGroupName: string;
  public get resourceGroupName() {
    return this._resourceGroupName;
  }
  public set resourceGroupName(value: string) {
    this._resourceGroupName = value;
  }

  // volume_name - computed: false, optional: false, required: true
  private _volumeName: string;
  public get volumeName() {
    return this._volumeName;
  }
  public set volumeName(value: string) {
    this._volumeName = value;
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts?: NetappSnapshotTimeouts;
  public get timeouts() {
    return this._timeouts;
  }
  public set timeouts(value: NetappSnapshotTimeouts | undefined) {
    this._timeouts = value;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      account_name: this._accountName,
      location: this._location,
      name: this._name,
      pool_name: this._poolName,
      resource_group_name: this._resourceGroupName,
      volume_name: this._volumeName,
      timeouts: this._timeouts,
    };
  }
}
