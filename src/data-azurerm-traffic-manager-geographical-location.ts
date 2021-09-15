// https://www.terraform.io/docs/providers/azurerm/d/traffic_manager_geographical_location.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataAzurermTrafficManagerGeographicalLocationConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/d/traffic_manager_geographical_location.html#name DataAzurermTrafficManagerGeographicalLocation#name}
  */
  readonly name: string;
  /**
  * timeouts block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/d/traffic_manager_geographical_location.html#timeouts DataAzurermTrafficManagerGeographicalLocation#timeouts}
  */
  readonly timeouts?: DataAzurermTrafficManagerGeographicalLocationTimeouts;
}
export interface DataAzurermTrafficManagerGeographicalLocationTimeouts {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/d/traffic_manager_geographical_location.html#read DataAzurermTrafficManagerGeographicalLocation#read}
  */
  readonly read?: string;
}

function dataAzurermTrafficManagerGeographicalLocationTimeoutsToTerraform(struct?: DataAzurermTrafficManagerGeographicalLocationTimeouts): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    read: cdktf.stringToTerraform(struct!.read),
  }
}


/**
* Represents a {@link https://www.terraform.io/docs/providers/azurerm/d/traffic_manager_geographical_location.html azurerm_traffic_manager_geographical_location}
*/
export class DataAzurermTrafficManagerGeographicalLocation extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType: string = "azurerm_traffic_manager_geographical_location";

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://www.terraform.io/docs/providers/azurerm/d/traffic_manager_geographical_location.html azurerm_traffic_manager_geographical_location} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataAzurermTrafficManagerGeographicalLocationConfig
  */
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
