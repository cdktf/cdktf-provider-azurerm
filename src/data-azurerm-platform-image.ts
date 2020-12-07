// https://www.terraform.io/docs/providers/azurerm/r/data_azurerm_platform_image.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataAzurermPlatformImageConfig extends cdktf.TerraformMetaArguments {
  readonly location: string;
  readonly offer: string;
  readonly publisher: string;
  readonly sku: string;
  readonly version?: string;
  /** timeouts block */
  readonly timeouts?: DataAzurermPlatformImageTimeouts;
}
export interface DataAzurermPlatformImageTimeouts {
  readonly read?: string;
}

function dataAzurermPlatformImageTimeoutsToTerraform(struct?: DataAzurermPlatformImageTimeouts): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    read: cdktf.stringToTerraform(struct!.read),
  }
}


// Resource

export class DataAzurermPlatformImage extends cdktf.TerraformDataSource {

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
    this._version = config.version;
    this._timeouts = config.timeouts;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // id - computed: true, optional: true, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // location - computed: false, optional: false, required: true
  private _location: string;
  public get location() {
    return this.getStringAttribute('location');
  }
  public set location(value: string) {
    this._location = value;
  }
  // Temporarily expose input value. Use with caution.
  public get locationInput() {
    return this._location
  }

  // offer - computed: false, optional: false, required: true
  private _offer: string;
  public get offer() {
    return this.getStringAttribute('offer');
  }
  public set offer(value: string) {
    this._offer = value;
  }
  // Temporarily expose input value. Use with caution.
  public get offerInput() {
    return this._offer
  }

  // publisher - computed: false, optional: false, required: true
  private _publisher: string;
  public get publisher() {
    return this.getStringAttribute('publisher');
  }
  public set publisher(value: string) {
    this._publisher = value;
  }
  // Temporarily expose input value. Use with caution.
  public get publisherInput() {
    return this._publisher
  }

  // sku - computed: false, optional: false, required: true
  private _sku: string;
  public get sku() {
    return this.getStringAttribute('sku');
  }
  public set sku(value: string) {
    this._sku = value;
  }
  // Temporarily expose input value. Use with caution.
  public get skuInput() {
    return this._sku
  }

  // version - computed: true, optional: true, required: false
  private _version?: string;
  public get version() {
    return this.getStringAttribute('version');
  }
  public set version(value: string) {
    this._version = value;
  }
  public resetVersion() {
    this._version = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get versionInput() {
    return this._version
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts?: DataAzurermPlatformImageTimeouts;
  public get timeouts() {
    return this.interpolationForAttribute('timeouts') as any;
  }
  public set timeouts(value: DataAzurermPlatformImageTimeouts ) {
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
      location: cdktf.stringToTerraform(this._location),
      offer: cdktf.stringToTerraform(this._offer),
      publisher: cdktf.stringToTerraform(this._publisher),
      sku: cdktf.stringToTerraform(this._sku),
      version: cdktf.stringToTerraform(this._version),
      timeouts: dataAzurermPlatformImageTimeoutsToTerraform(this._timeouts),
    };
  }
}
