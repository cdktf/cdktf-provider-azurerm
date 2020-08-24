// https://www.terraform.io/docs/providers/azurerm/r/netapp_pool.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import { TerraformResource } from 'cdktf';
import { TerraformMetaArguments } from 'cdktf';

// Configuration

export interface NetappPoolConfig extends TerraformMetaArguments {
  readonly accountName: string;
  readonly location: string;
  readonly name: string;
  readonly resourceGroupName: string;
  readonly serviceLevel: string;
  readonly sizeInTb: number;
  /** timeouts block */
  readonly timeouts?: NetappPoolTimeouts;
}
export interface NetappPoolTimeouts {
  readonly create?: string;
  readonly delete?: string;
  readonly read?: string;
  readonly update?: string;
}

// Resource

export class NetappPool extends TerraformResource {

  // ===========
  // INITIALIZER
  // ===========

  public constructor(scope: Construct, id: string, config: NetappPoolConfig) {
    super(scope, id, {
      terraformResourceType: 'azurerm_netapp_pool',
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
    this._resourceGroupName = config.resourceGroupName;
    this._serviceLevel = config.serviceLevel;
    this._sizeInTb = config.sizeInTb;
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

  // resource_group_name - computed: false, optional: false, required: true
  private _resourceGroupName: string;
  public get resourceGroupName() {
    return this._resourceGroupName;
  }
  public set resourceGroupName(value: string) {
    this._resourceGroupName = value;
  }

  // service_level - computed: false, optional: false, required: true
  private _serviceLevel: string;
  public get serviceLevel() {
    return this._serviceLevel;
  }
  public set serviceLevel(value: string) {
    this._serviceLevel = value;
  }

  // size_in_tb - computed: false, optional: false, required: true
  private _sizeInTb: number;
  public get sizeInTb() {
    return this._sizeInTb;
  }
  public set sizeInTb(value: number) {
    this._sizeInTb = value;
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts?: NetappPoolTimeouts;
  public get timeouts() {
    return this._timeouts;
  }
  public set timeouts(value: NetappPoolTimeouts | undefined) {
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
      resource_group_name: this._resourceGroupName,
      service_level: this._serviceLevel,
      size_in_tb: this._sizeInTb,
      timeouts: this._timeouts,
    };
  }
}
