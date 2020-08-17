// https://www.terraform.io/docs/providers/azurerm/r/data_azurerm_platform_image.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import { TerraformDataSource } from 'cdktf';
import { TerraformMetaArguments } from 'cdktf';

// Configuration

export interface DataAzurermPlatformImageConfig extends TerraformMetaArguments {
  readonly location: string;
  readonly offer: string;
  readonly publisher: string;
  readonly sku: string;
  /** timeouts block */
  readonly timeouts?: DataAzurermPlatformImageTimeouts;
}
export interface DataAzurermPlatformImageTimeouts {
  readonly read?: string;
}

// Resource

export class DataAzurermPlatformImage extends TerraformDataSource {

  // ===========
  // INITIALIZER
  // ===========

  public constructor(scope: Construct, id: string, config: DataAzurermPlatformImageConfig) {
    super(scope, id, {
      terraformResourceType: 'azurerm_platform_image',
      terraformGeneratorMetadata: {
        providerName: 'azurerm'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle
    });
    this._location = config.location;
    this._offer = config.offer;
    this._publisher = config.publisher;
    this._sku = config.sku;
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

  // offer - computed: false, optional: false, required: true
  private _offer: string;
  public get offer() {
    return this._offer;
  }
  public set offer(value: string) {
    this._offer = value;
  }

  // publisher - computed: false, optional: false, required: true
  private _publisher: string;
  public get publisher() {
    return this._publisher;
  }
  public set publisher(value: string) {
    this._publisher = value;
  }

  // sku - computed: false, optional: false, required: true
  private _sku: string;
  public get sku() {
    return this._sku;
  }
  public set sku(value: string) {
    this._sku = value;
  }

  // version - computed: true, optional: false, required: true
  public get version() {
    return this.getStringAttribute('version');
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts?: DataAzurermPlatformImageTimeouts;
  public get timeouts() {
    return this._timeouts;
  }
  public set timeouts(value: DataAzurermPlatformImageTimeouts | undefined) {
    this._timeouts = value;
  }

  // =========
  // SYNTHESIS
  // =========

  public synthesizeAttributes(): { [name: string]: any } {
    return {
      location: this._location,
      offer: this._offer,
      publisher: this._publisher,
      sku: this._sku,
      timeouts: this._timeouts,
    };
  }
}
