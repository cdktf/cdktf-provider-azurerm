// https://www.terraform.io/docs/providers/azurerm/r/iothub_endpoint_eventhub.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import { TerraformResource } from 'cdktf';
import { TerraformMetaArguments } from 'cdktf';

// Configuration

export interface IothubEndpointEventhubConfig extends TerraformMetaArguments {
  readonly connectionString: string;
  readonly iothubName: string;
  readonly name: string;
  readonly resourceGroupName: string;
  /** timeouts block */
  readonly timeouts?: IothubEndpointEventhubTimeouts;
}
export interface IothubEndpointEventhubTimeouts {
  readonly create?: string;
  readonly delete?: string;
  readonly read?: string;
  readonly update?: string;
}

// Resource

export class IothubEndpointEventhub extends TerraformResource {

  // ===========
  // INITIALIZER
  // ===========

  public constructor(scope: Construct, id: string, config: IothubEndpointEventhubConfig) {
    super(scope, id, {
      terraformResourceType: 'azurerm_iothub_endpoint_eventhub',
      terraformGeneratorMetadata: {
        providerName: 'azurerm'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle
    });
    this._connectionString = config.connectionString;
    this._iothubName = config.iothubName;
    this._name = config.name;
    this._resourceGroupName = config.resourceGroupName;
    this._timeouts = config.timeouts;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // connection_string - computed: false, optional: false, required: true
  private _connectionString: string;
  public get connectionString() {
    return this._connectionString;
  }
  public set connectionString(value: string) {
    this._connectionString = value;
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

  // resource_group_name - computed: false, optional: false, required: true
  private _resourceGroupName: string;
  public get resourceGroupName() {
    return this._resourceGroupName;
  }
  public set resourceGroupName(value: string) {
    this._resourceGroupName = value;
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts?: IothubEndpointEventhubTimeouts;
  public get timeouts() {
    return this._timeouts;
  }
  public set timeouts(value: IothubEndpointEventhubTimeouts | undefined) {
    this._timeouts = value;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      connection_string: this._connectionString,
      iothub_name: this._iothubName,
      name: this._name,
      resource_group_name: this._resourceGroupName,
      timeouts: this._timeouts,
    };
  }
}
