// https://www.terraform.io/docs/providers/azurerm/r/data_azurerm_container_registry_token.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataAzurermContainerRegistryTokenConfig extends cdktf.TerraformMetaArguments {
  readonly containerRegistryName: string;
  readonly name: string;
  readonly resourceGroupName: string;
  /** timeouts block */
  readonly timeouts?: DataAzurermContainerRegistryTokenTimeouts;
}
export interface DataAzurermContainerRegistryTokenTimeouts {
  readonly read?: string;
}

function dataAzurermContainerRegistryTokenTimeoutsToTerraform(struct?: DataAzurermContainerRegistryTokenTimeouts): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    read: cdktf.stringToTerraform(struct!.read),
  }
}


// Resource

export class DataAzurermContainerRegistryToken extends cdktf.TerraformDataSource {

  // ===========
  // INITIALIZER
  // ===========

  public constructor(scope: Construct, id: string, config: DataAzurermContainerRegistryTokenConfig) {
    super(scope, id, {
      terraformResourceType: 'azurerm_container_registry_token',
      terraformGeneratorMetadata: {
        providerName: 'azurerm'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle
    });
    this._containerRegistryName = config.containerRegistryName;
    this._name = config.name;
    this._resourceGroupName = config.resourceGroupName;
    this._timeouts = config.timeouts;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // container_registry_name - computed: false, optional: false, required: true
  private _containerRegistryName: string;
  public get containerRegistryName() {
    return this.getStringAttribute('container_registry_name');
  }
  public set containerRegistryName(value: string) {
    this._containerRegistryName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get containerRegistryNameInput() {
    return this._containerRegistryName
  }

  // enabled - computed: true, optional: false, required: false
  public get enabled() {
    return this.getBooleanAttribute('enabled');
  }

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

  // scope_map_id - computed: true, optional: false, required: false
  public get scopeMapId() {
    return this.getStringAttribute('scope_map_id');
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts?: DataAzurermContainerRegistryTokenTimeouts;
  public get timeouts() {
    return this.interpolationForAttribute('timeouts') as any;
  }
  public set timeouts(value: DataAzurermContainerRegistryTokenTimeouts ) {
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
      container_registry_name: cdktf.stringToTerraform(this._containerRegistryName),
      name: cdktf.stringToTerraform(this._name),
      resource_group_name: cdktf.stringToTerraform(this._resourceGroupName),
      timeouts: dataAzurermContainerRegistryTokenTimeoutsToTerraform(this._timeouts),
    };
  }
}
