// https://www.terraform.io/docs/providers/azurerm/r/data_azurerm_blueprint_definition.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataAzurermBlueprintDefinitionConfig extends cdktf.TerraformMetaArguments {
  readonly name: string;
  readonly scopeId: string;
  /** timeouts block */
  readonly timeouts?: DataAzurermBlueprintDefinitionTimeouts;
}
export interface DataAzurermBlueprintDefinitionTimeouts {
  readonly read?: string;
}

function dataAzurermBlueprintDefinitionTimeoutsToTerraform(struct?: DataAzurermBlueprintDefinitionTimeouts): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    read: cdktf.stringToTerraform(struct!.read),
  }
}


// Resource

export class DataAzurermBlueprintDefinition extends cdktf.TerraformDataSource {

  // ===========
  // INITIALIZER
  // ===========

  public constructor(scope: Construct, id: string, config: DataAzurermBlueprintDefinitionConfig) {
    super(scope, id, {
      terraformResourceType: 'azurerm_blueprint_definition',
      terraformGeneratorMetadata: {
        providerName: 'azurerm'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle
    });
    this._name = config.name;
    this._scopeId = config.scopeId;
    this._timeouts = config.timeouts;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // description - computed: true, optional: false, required: false
  public get description() {
    return this.getStringAttribute('description');
  }

  // display_name - computed: true, optional: false, required: false
  public get displayName() {
    return this.getStringAttribute('display_name');
  }

  // id - computed: true, optional: true, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // last_modified - computed: true, optional: false, required: false
  public get lastModified() {
    return this.getStringAttribute('last_modified');
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

  // scope_id - computed: false, optional: false, required: true
  private _scopeId: string;
  public get scopeId() {
    return this.getStringAttribute('scope_id');
  }
  public set scopeId(value: string) {
    this._scopeId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get scopeIdInput() {
    return this._scopeId
  }

  // target_scope - computed: true, optional: false, required: false
  public get targetScope() {
    return this.getStringAttribute('target_scope');
  }

  // time_created - computed: true, optional: false, required: false
  public get timeCreated() {
    return this.getStringAttribute('time_created');
  }

  // versions - computed: true, optional: false, required: false
  public get versions() {
    return this.getListAttribute('versions');
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts?: DataAzurermBlueprintDefinitionTimeouts;
  public get timeouts() {
    return this.interpolationForAttribute('timeouts') as any;
  }
  public set timeouts(value: DataAzurermBlueprintDefinitionTimeouts ) {
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
      scope_id: cdktf.stringToTerraform(this._scopeId),
      timeouts: dataAzurermBlueprintDefinitionTimeoutsToTerraform(this._timeouts),
    };
  }
}
