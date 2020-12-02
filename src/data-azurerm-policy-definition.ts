// https://www.terraform.io/docs/providers/azurerm/r/data_azurerm_policy_definition.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import { TerraformDataSource } from 'cdktf';
import { TerraformMetaArguments } from 'cdktf';

// Configuration

export interface DataAzurermPolicyDefinitionConfig extends TerraformMetaArguments {
  readonly displayName?: string;
  readonly managementGroupId?: string;
  readonly managementGroupName?: string;
  readonly name?: string;
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

  public constructor(scope: Construct, id: string, config: DataAzurermPolicyDefinitionConfig = {}) {
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
    this._managementGroupName = config.managementGroupName;
    this._name = config.name;
    this._timeouts = config.timeouts;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // description - computed: true, optional: false, required: false
  public get description() {
    return this.getStringAttribute('description');
  }

  // display_name - computed: true, optional: true, required: false
  private _displayName?: string;
  public get displayName() {
    return this.getStringAttribute('display_name');
  }
  public set displayName(value: string) {
    this._displayName = value;
  }
  public resetDisplayName() {
    this._displayName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get displayNameInput() {
    return this._displayName
  }

  // id - computed: true, optional: true, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // management_group_id - computed: false, optional: true, required: false
  private _managementGroupId?: string;
  public get managementGroupId() {
    return this.getStringAttribute('management_group_id');
  }
  public set managementGroupId(value: string ) {
    this._managementGroupId = value;
  }
  public resetManagementGroupId() {
    this._managementGroupId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get managementGroupIdInput() {
    return this._managementGroupId
  }

  // management_group_name - computed: false, optional: true, required: false
  private _managementGroupName?: string;
  public get managementGroupName() {
    return this.getStringAttribute('management_group_name');
  }
  public set managementGroupName(value: string ) {
    this._managementGroupName = value;
  }
  public resetManagementGroupName() {
    this._managementGroupName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get managementGroupNameInput() {
    return this._managementGroupName
  }

  // metadata - computed: true, optional: false, required: false
  public get metadata() {
    return this.getStringAttribute('metadata');
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

  // parameters - computed: true, optional: false, required: false
  public get parameters() {
    return this.getStringAttribute('parameters');
  }

  // policy_rule - computed: true, optional: false, required: false
  public get policyRule() {
    return this.getStringAttribute('policy_rule');
  }

  // policy_type - computed: true, optional: false, required: false
  public get policyType() {
    return this.getStringAttribute('policy_type');
  }

  // type - computed: true, optional: false, required: false
  public get type() {
    return this.getStringAttribute('type');
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts?: DataAzurermPolicyDefinitionTimeouts;
  public get timeouts() {
    return this.interpolationForAttribute('timeouts') as any;
  }
  public set timeouts(value: DataAzurermPolicyDefinitionTimeouts ) {
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
      display_name: this._displayName,
      management_group_id: this._managementGroupId,
      management_group_name: this._managementGroupName,
      name: this._name,
      timeouts: this._timeouts,
    };
  }
}
