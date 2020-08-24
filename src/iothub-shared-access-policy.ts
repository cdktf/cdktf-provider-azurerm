// https://www.terraform.io/docs/providers/azurerm/r/iothub_shared_access_policy_a.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import { TerraformResource } from 'cdktf';
import { TerraformMetaArguments } from 'cdktf';

// Configuration

export interface IothubSharedAccessPolicyAConfig extends TerraformMetaArguments {
  readonly deviceConnect?: boolean;
  readonly iothubName: string;
  readonly name: string;
  readonly registryRead?: boolean;
  readonly registryWrite?: boolean;
  readonly resourceGroupName: string;
  readonly serviceConnect?: boolean;
  /** timeouts block */
  readonly timeouts?: IothubSharedAccessPolicyTimeouts;
}
export interface IothubSharedAccessPolicyTimeouts {
  readonly create?: string;
  readonly delete?: string;
  readonly read?: string;
  readonly update?: string;
}

// Resource

export class IothubSharedAccessPolicyA extends TerraformResource {

  // ===========
  // INITIALIZER
  // ===========

  public constructor(scope: Construct, id: string, config: IothubSharedAccessPolicyAConfig) {
    super(scope, id, {
      terraformResourceType: 'azurerm_iothub_shared_access_policy',
      terraformGeneratorMetadata: {
        providerName: 'azurerm'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle
    });
    this._deviceConnect = config.deviceConnect;
    this._iothubName = config.iothubName;
    this._name = config.name;
    this._registryRead = config.registryRead;
    this._registryWrite = config.registryWrite;
    this._resourceGroupName = config.resourceGroupName;
    this._serviceConnect = config.serviceConnect;
    this._timeouts = config.timeouts;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // device_connect - computed: false, optional: true, required: false
  private _deviceConnect?: boolean;
  public get deviceConnect() {
    return this._deviceConnect;
  }
  public set deviceConnect(value: boolean | undefined) {
    this._deviceConnect = value;
  }

  // id - computed: true, optional: true, required: false
  private _id?: string;
  public get id() {
    return this._id ?? this.getStringAttribute('id');
  }
  public set id(value: string | undefined) {
    this._id = value;
  }

  // iothub_name - computed: false, optional: false, required: true
  private _iothubName: string;
  public get iothubName() {
    return this._iothubName;
  }
  public set iothubName(value: string) {
    this._iothubName = value;
  }

  // name - computed: false, optional: false, required: true
  private _name: string;
  public get name() {
    return this._name;
  }
  public set name(value: string) {
    this._name = value;
  }

  // primary_connection_string - computed: true, optional: false, required: true
  public get primaryConnectionString() {
    return this.getStringAttribute('primary_connection_string');
  }

  // primary_key - computed: true, optional: false, required: true
  public get primaryKey() {
    return this.getStringAttribute('primary_key');
  }

  // registry_read - computed: false, optional: true, required: false
  private _registryRead?: boolean;
  public get registryRead() {
    return this._registryRead;
  }
  public set registryRead(value: boolean | undefined) {
    this._registryRead = value;
  }

  // registry_write - computed: false, optional: true, required: false
  private _registryWrite?: boolean;
  public get registryWrite() {
    return this._registryWrite;
  }
  public set registryWrite(value: boolean | undefined) {
    this._registryWrite = value;
  }

  // resource_group_name - computed: false, optional: false, required: true
  private _resourceGroupName: string;
  public get resourceGroupName() {
    return this._resourceGroupName;
  }
  public set resourceGroupName(value: string) {
    this._resourceGroupName = value;
  }

  // secondary_connection_string - computed: true, optional: false, required: true
  public get secondaryConnectionString() {
    return this.getStringAttribute('secondary_connection_string');
  }

  // secondary_key - computed: true, optional: false, required: true
  public get secondaryKey() {
    return this.getStringAttribute('secondary_key');
  }

  // service_connect - computed: false, optional: true, required: false
  private _serviceConnect?: boolean;
  public get serviceConnect() {
    return this._serviceConnect;
  }
  public set serviceConnect(value: boolean | undefined) {
    this._serviceConnect = value;
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts?: IothubSharedAccessPolicyTimeouts;
  public get timeouts() {
    return this._timeouts;
  }
  public set timeouts(value: IothubSharedAccessPolicyTimeouts | undefined) {
    this._timeouts = value;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      device_connect: this._deviceConnect,
      iothub_name: this._iothubName,
      name: this._name,
      registry_read: this._registryRead,
      registry_write: this._registryWrite,
      resource_group_name: this._resourceGroupName,
      service_connect: this._serviceConnect,
      timeouts: this._timeouts,
    };
  }
}
