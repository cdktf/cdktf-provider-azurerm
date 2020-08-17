// https://www.terraform.io/docs/providers/azurerm/r/signalr_service.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import { TerraformResource } from 'cdktf';
import { TerraformMetaArguments } from 'cdktf';

// Configuration

export interface SignalrServiceConfig extends TerraformMetaArguments {
  readonly location: string;
  readonly name: string;
  readonly resourceGroupName: string;
  readonly tags?: { [key: string]: string };
  /** cors block */
  readonly cors?: SignalrServiceCors[];
  /** features block */
  readonly features?: SignalrServiceFeatures[];
  /** sku block */
  readonly sku: SignalrServiceSku[];
  /** timeouts block */
  readonly timeouts?: SignalrServiceTimeouts;
}
export interface SignalrServiceCors {
  readonly allowedOrigins: string[];
}
export interface SignalrServiceFeatures {
  readonly flag: string;
  readonly value: string;
}
export interface SignalrServiceSku {
  readonly capacity: number;
  readonly name: string;
}
export interface SignalrServiceTimeouts {
  readonly create?: string;
  readonly delete?: string;
  readonly read?: string;
  readonly update?: string;
}

// Resource

export class SignalrService extends TerraformResource {

  // ===========
  // INITIALIZER
  // ===========

  public constructor(scope: Construct, id: string, config: SignalrServiceConfig) {
    super(scope, id, {
      terraformResourceType: 'azurerm_signalr_service',
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
    this._tags = config.tags;
    this._cors = config.cors;
    this._features = config.features;
    this._sku = config.sku;
    this._timeouts = config.timeouts;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // hostname - computed: true, optional: false, required: true
  public get hostname() {
    return this.getStringAttribute('hostname');
  }

  // id - computed: true, optional: true, required: false
  private _id?: string;
  public get id() {
    return this._id ?? this.getStringAttribute('id');
  }
  public set id(value: string | undefined) {
    this._id = value;
  }

  // ip_address - computed: true, optional: false, required: true
  public get ipAddress() {
    return this.getStringAttribute('ip_address');
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

  // primary_access_key - computed: true, optional: false, required: true
  public get primaryAccessKey() {
    return this.getStringAttribute('primary_access_key');
  }

  // primary_connection_string - computed: true, optional: false, required: true
  public get primaryConnectionString() {
    return this.getStringAttribute('primary_connection_string');
  }

  // public_port - computed: true, optional: false, required: true
  public get publicPort() {
    return this.getNumberAttribute('public_port');
  }

  // resource_group_name - computed: false, optional: false, required: true
  private _resourceGroupName: string;
  public get resourceGroupName() {
    return this._resourceGroupName;
  }
  public set resourceGroupName(value: string) {
    this._resourceGroupName = value;
  }

  // secondary_access_key - computed: true, optional: false, required: true
  public get secondaryAccessKey() {
    return this.getStringAttribute('secondary_access_key');
  }

  // secondary_connection_string - computed: true, optional: false, required: true
  public get secondaryConnectionString() {
    return this.getStringAttribute('secondary_connection_string');
  }

  // server_port - computed: true, optional: false, required: true
  public get serverPort() {
    return this.getNumberAttribute('server_port');
  }

  // tags - computed: false, optional: true, required: false
  private _tags?: { [key: string]: string };
  public get tags() {
    return this._tags;
  }
  public set tags(value: { [key: string]: string } | undefined) {
    this._tags = value;
  }

  // cors - computed: false, optional: true, required: false
  private _cors?: SignalrServiceCors[];
  public get cors() {
    return this._cors;
  }
  public set cors(value: SignalrServiceCors[] | undefined) {
    this._cors = value;
  }

  // features - computed: false, optional: true, required: false
  private _features?: SignalrServiceFeatures[];
  public get features() {
    return this._features;
  }
  public set features(value: SignalrServiceFeatures[] | undefined) {
    this._features = value;
  }

  // sku - computed: false, optional: false, required: true
  private _sku: SignalrServiceSku[];
  public get sku() {
    return this._sku;
  }
  public set sku(value: SignalrServiceSku[]) {
    this._sku = value;
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts?: SignalrServiceTimeouts;
  public get timeouts() {
    return this._timeouts;
  }
  public set timeouts(value: SignalrServiceTimeouts | undefined) {
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
      tags: this._tags,
      cors: this._cors,
      features: this._features,
      sku: this._sku,
      timeouts: this._timeouts,
    };
  }
}
