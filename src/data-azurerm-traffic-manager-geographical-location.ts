// https://www.terraform.io/docs/providers/azurerm/r/data_azurerm_traffic_manager_geographical_location.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataAzurermTrafficManagerGeographicalLocationConfig extends cdktf.TerraformMetaArguments {
  readonly name: string;
  /** timeouts block */
  readonly timeouts?: DataAzurermTrafficManagerGeographicalLocationTimeouts;
}
export interface DataAzurermTrafficManagerGeographicalLocationTimeouts {
  readonly read?: string;
}

function dataAzurermTrafficManagerGeographicalLocationTimeoutsToTerraform(struct?: DataAzurermTrafficManagerGeographicalLocationTimeouts): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    read: cdktf.stringToTerraform(struct!.read),
  }
}


// Resource

export class DataAzurermTrafficManagerGeographicalLocation extends cdktf.TerraformDataSource {

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
  public get id() {
    return this.getStringAttribute('id');
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

  // timeouts - computed: false, optional: true, required: false
  private _timeouts?: DataAzurermTrafficManagerGeographicalLocationTimeouts;
  public get timeouts() {
    return this.interpolationForAttribute('timeouts') as any;
  }
  public set timeouts(value: DataAzurermTrafficManagerGeographicalLocationTimeouts ) {
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
      name: cdktf.stringToTerraform(this._name),
      timeouts: dataAzurermTrafficManagerGeographicalLocationTimeoutsToTerraform(this._timeouts),
    };
  }
}
