// https://www.terraform.io/docs/providers/azurerm/r/lighthouse_assignment.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import { TerraformResource } from 'cdktf';
import { TerraformMetaArguments } from 'cdktf';

// Configuration

export interface LighthouseAssignmentConfig extends TerraformMetaArguments {
  readonly lighthouseDefinitionId: string;
  readonly name?: string;
  readonly scope: string;
  /** timeouts block */
  readonly timeouts?: LighthouseAssignmentTimeouts;
}
export interface LighthouseAssignmentTimeouts {
  readonly create?: string;
  readonly delete?: string;
  readonly read?: string;
}

// Resource

export class LighthouseAssignment extends TerraformResource {

  // ===========
  // INITIALIZER
  // ===========

  public constructor(scope: Construct, id: string, config: LighthouseAssignmentConfig) {
    super(scope, id, {
      terraformResourceType: 'azurerm_lighthouse_assignment',
      terraformGeneratorMetadata: {
        providerName: 'azurerm'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle
    });
    this._lighthouseDefinitionId = config.lighthouseDefinitionId;
    this._name = config.name;
    this._scope = config.scope;
    this._timeouts = config.timeouts;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // id - computed: true, optional: true, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // lighthouse_definition_id - computed: false, optional: false, required: true
  private _lighthouseDefinitionId: string;
  public get lighthouseDefinitionId() {
    return this.getStringAttribute('lighthouse_definition_id');
  }
  public set lighthouseDefinitionId(value: string) {
    this._lighthouseDefinitionId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get lighthouseDefinitionIdInput() {
    return this._lighthouseDefinitionId
  }

  // name - computed: true, optional: true, required: false
  private _name?: string;
  public get name() {
    return this.getStringAttribute('name');
  }
  public set name(value: string) {
    this._name = value;
  }
  public resetName() {
    this._name = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nameInput() {
    return this._name
  }

  // scope - computed: false, optional: false, required: true
  private _scope: string;
  public get scope() {
    return this.getStringAttribute('scope');
  }
  public set scope(value: string) {
    this._scope = value;
  }
  // Temporarily expose input value. Use with caution.
  public get scopeInput() {
    return this._scope
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts?: LighthouseAssignmentTimeouts;
  public get timeouts() {
    return this.interpolationForAttribute('timeouts') as any;
  }
  public set timeouts(value: LighthouseAssignmentTimeouts ) {
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
      lighthouse_definition_id: this._lighthouseDefinitionId,
      name: this._name,
      scope: this._scope,
      timeouts: this._timeouts,
    };
  }
}
