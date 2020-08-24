// https://www.terraform.io/docs/providers/azurerm/r/data_azurerm_traffic_manager_geographical_location.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import { TerraformDataSource } from 'cdktf';
import { TerraformMetaArguments } from 'cdktf';

// Configuration

export interface DataAzurermTrafficManagerGeographicalLocationConfig extends TerraformMetaArguments {
  readonly name: string;
  /** timeouts block */
  readonly timeouts?: DataAzurermTrafficManagerGeographicalLocationTimeouts;
}
export interface DataAzurermTrafficManagerGeographicalLocationTimeouts {
  readonly read?: string;
}

// Resource

export class DataAzurermTrafficManagerGeographicalLocation extends TerraformDataSource {

  // ===========
  // INITIALIZER
  // ===========

  public constructor(scope: Construct, id: string, config: DataAzurermTrafficManagerGeographicalLocationConfig) {
    super(scope, id, {
      terraformResourceType: 'azurerm_traffic_manager_geographical_location',
      terraformGeneratorMetadata: {
        providerName: 'azurerm'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle
    });
    this._name = config.name;
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

  // name - computed: false, optional: false, required: true
  private _name: string;
  public get name() {
    return this._name;
  }
  public set name(value: string) {
    this._name = value;
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts?: DataAzurermTrafficManagerGeographicalLocationTimeouts;
  public get timeouts() {
    return this._timeouts;
  }
  public set timeouts(value: DataAzurermTrafficManagerGeographicalLocationTimeouts | undefined) {
    this._timeouts = value;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      name: this._name,
      timeouts: this._timeouts,
    };
  }
}
