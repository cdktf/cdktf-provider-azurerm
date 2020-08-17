// https://www.terraform.io/docs/providers/azurerm/r/private_endpoint.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import { TerraformResource } from 'cdktf';
import { TerraformMetaArguments } from 'cdktf';

// Configuration

export interface PrivateEndpointConfig extends TerraformMetaArguments {
  readonly location: string;
  readonly name: string;
  readonly resourceGroupName: string;
  readonly subnetId: string;
  /** private_service_connection block */
  readonly privateServiceConnection: PrivateEndpointPrivateServiceConnection[];
  /** timeouts block */
  readonly timeouts?: PrivateEndpointTimeouts;
}
export interface PrivateEndpointPrivateServiceConnection {
  readonly isManualConnection: boolean;
  readonly name: string;
  readonly privateConnectionResourceId: string;
  readonly requestMessage?: string;
  readonly subresourceNames?: string[];
}
export interface PrivateEndpointTimeouts {
  readonly create?: string;
  readonly delete?: string;
  readonly read?: string;
  readonly update?: string;
}

// Resource

export class PrivateEndpoint extends TerraformResource {

  // ===========
  // INITIALIZER
  // ===========

  public constructor(scope: Construct, id: string, config: PrivateEndpointConfig) {
    super(scope, id, {
      terraformResourceType: 'azurerm_private_endpoint',
      terraformGeneratorMetadata: {
        providerName: 'azurerm'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle
    });
    this._location = config.location;
    this._name = config.name;
    this._resourceGroupName = config.resourceGroupName;
    this._subnetId = config.subnetId;
    this._privateServiceConnection = config.privateServiceConnection;
    this._timeouts = config.timeouts;
  }

  // ==========
  // ATTRIBUTES
  // ==========

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

  // subnet_id - computed: false, optional: false, required: true
  private _subnetId: string;
  public get subnetId() {
    return this._subnetId;
  }
  public set subnetId(value: string) {
    this._subnetId = value;
  }

  // private_service_connection - computed: false, optional: false, required: true
  private _privateServiceConnection: PrivateEndpointPrivateServiceConnection[];
  public get privateServiceConnection() {
    return this._privateServiceConnection;
  }
  public set privateServiceConnection(value: PrivateEndpointPrivateServiceConnection[]) {
    this._privateServiceConnection = value;
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts?: PrivateEndpointTimeouts;
  public get timeouts() {
    return this._timeouts;
  }
  public set timeouts(value: PrivateEndpointTimeouts | undefined) {
    this._timeouts = value;
  }

  // =========
  // SYNTHESIS
  // =========

  public synthesizeAttributes(): { [name: string]: any } {
    return {
      location: this._location,
      name: this._name,
      resource_group_name: this._resourceGroupName,
      subnet_id: this._subnetId,
      private_service_connection: this._privateServiceConnection,
      timeouts: this._timeouts,
    };
  }
}
