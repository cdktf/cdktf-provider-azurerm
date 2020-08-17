// https://www.terraform.io/docs/providers/azurerm/r/data_azurerm_policy_definition.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import { TerraformDataSource } from 'cdktf';
import { TerraformMetaArguments } from 'cdktf';

// Configuration

export interface DataAzurermPolicyDefinitionConfig extends TerraformMetaArguments {
  readonly displayName: string;
  readonly managementGroupId?: string;
  /** timeouts block */
  readonly timeouts?: DataAzurermPolicyDefinitionTimeouts;
}
export interface DataAzurermPolicyDefinitionTimeouts {
  readonly read?: string;
}

// Resource

export class DataAzurermPolicyDefinition extends TerraformDataSource {

  // ===========
  // INITIALIZER
  // ===========

  public constructor(scope: Construct, id: string, config: DataAzurermPolicyDefinitionConfig) {
    super(scope, id, {
      terraformResourceType: 'azurerm_policy_definition',
      terraformGeneratorMetadata: {
        providerName: 'azurerm'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle
    });
    this._displayName = config.displayName;
    this._managementGroupId = config.managementGroupId;
    this._timeouts = config.timeouts;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // description - computed: true, optional: false, required: true
  public get description() {
    return this.getStringAttribute('description');
  }

  // display_name - computed: false, optional: false, required: true
  private _displayName: string;
  public get displayName() {
    return this._displayName;
  }
  public set displayName(value: string) {
    this._displayName = value;
  }

  // id - computed: true, optional: true, required: false
  private _id?: string;
  public get id() {
    return this._id ?? this.getStringAttribute('id');
  }
  public set id(value: string | undefined) {
    this._id = value;
  }

  // management_group_id - computed: false, optional: true, required: false
  private _managementGroupId?: string;
  public get managementGroupId() {
    return this._managementGroupId;
  }
  public set managementGroupId(value: string | undefined) {
    this._managementGroupId = value;
  }

  // metadata - computed: true, optional: false, required: true
  public get metadata() {
    return this.getStringAttribute('metadata');
  }

  // name - computed: true, optional: false, required: true
  public get name() {
    return this.getStringAttribute('name');
  }

  // parameters - computed: true, optional: false, required: true
  public get parameters() {
    return this.getStringAttribute('parameters');
  }

  // policy_rule - computed: true, optional: false, required: true
  public get policyRule() {
    return this.getStringAttribute('policy_rule');
  }

  // policy_type - computed: true, optional: false, required: true
  public get policyType() {
    return this.getStringAttribute('policy_type');
  }

  // type - computed: true, optional: false, required: true
  public get type() {
    return this.getStringAttribute('type');
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts?: DataAzurermPolicyDefinitionTimeouts;
  public get timeouts() {
    return this._timeouts;
  }
  public set timeouts(value: DataAzurermPolicyDefinitionTimeouts | undefined) {
    this._timeouts = value;
  }

  // =========
  // SYNTHESIS
  // =========

  public synthesizeAttributes(): { [name: string]: any } {
    return {
      display_name: this._displayName,
      management_group_id: this._managementGroupId,
      timeouts: this._timeouts,
    };
  }
}
