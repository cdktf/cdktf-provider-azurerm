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
    return this.getBooleanAttribute('device_connect');
  }
  public set deviceConnect(value: boolean ) {
    this._deviceConnect = value;
  }
  public resetDeviceConnect() {
    this._deviceConnect = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get deviceConnectInput() {
    return this._deviceConnect
  }

  // id - computed: true, optional: true, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // iothub_name - computed: false, optional: false, required: true
  private _iothubName: string;
  public get iothubName() {
    return this.getStringAttribute('iothub_name');
  }
  public set iothubName(value: string) {
    this._iothubName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get iothubNameInput() {
    return this._iothubName
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

  // primary_connection_string - computed: true, optional: false, required: false
  public get primaryConnectionString() {
    return this.getStringAttribute('primary_connection_string');
  }

  // primary_key - computed: true, optional: false, required: false
  public get primaryKey() {
    return this.getStringAttribute('primary_key');
  }

  // registry_read - computed: false, optional: true, required: false
  private _registryRead?: boolean;
  public get registryRead() {
    return this.getBooleanAttribute('registry_read');
  }
  public set registryRead(value: boolean ) {
    this._registryRead = value;
  }
  public resetRegistryRead() {
    this._registryRead = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get registryReadInput() {
    return this._registryRead
  }

  // registry_write - computed: false, optional: true, required: false
  private _registryWrite?: boolean;
  public get registryWrite() {
    return this.getBooleanAttribute('registry_write');
  }
  public set registryWrite(value: boolean ) {
    this._registryWrite = value;
  }
  public resetRegistryWrite() {
    this._registryWrite = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get registryWriteInput() {
    return this._registryWrite
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

  // secondary_connection_string - computed: true, optional: false, required: false
  public get secondaryConnectionString() {
    return this.getStringAttribute('secondary_connection_string');
  }

  // secondary_key - computed: true, optional: false, required: false
  public get secondaryKey() {
    return this.getStringAttribute('secondary_key');
  }

  // service_connect - computed: false, optional: true, required: false
  private _serviceConnect?: boolean;
  public get serviceConnect() {
    return this.getBooleanAttribute('service_connect');
  }
  public set serviceConnect(value: boolean ) {
    this._serviceConnect = value;
  }
  public resetServiceConnect() {
    this._serviceConnect = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get serviceConnectInput() {
    return this._serviceConnect
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts?: IothubSharedAccessPolicyTimeouts;
  public get timeouts() {
    return this.interpolationForAttribute('timeouts') as any;
  }
  public set timeouts(value: IothubSharedAccessPolicyTimeouts ) {
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
