// https://www.terraform.io/docs/providers/azurerm/r/dev_test_policy.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import { TerraformResource } from 'cdktf';
import { TerraformMetaArguments } from 'cdktf';

// Configuration

export interface DevTestPolicyConfig extends TerraformMetaArguments {
  readonly description?: string;
  readonly evaluatorType: string;
  readonly factData?: string;
  readonly labName: string;
  readonly name: string;
  readonly policySetName: string;
  readonly resourceGroupName: string;
  readonly tags?: { [key: string]: string };
  readonly threshold: string;
  /** timeouts block */
  readonly timeouts?: DevTestPolicyTimeouts;
}
export interface DevTestPolicyTimeouts {
  readonly create?: string;
  readonly delete?: string;
  readonly read?: string;
  readonly update?: string;
}

// Resource

export class DevTestPolicy extends TerraformResource {

  // ===========
  // INITIALIZER
  // ===========

  public constructor(scope: Construct, id: string, config: DevTestPolicyConfig) {
    super(scope, id, {
      terraformResourceType: 'azurerm_dev_test_policy',
      terraformGeneratorMetadata: {
        providerName: 'azurerm'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle
    });
    this._description = config.description;
    this._evaluatorType = config.evaluatorType;
    this._factData = config.factData;
    this._labName = config.labName;
    this._name = config.name;
    this._policySetName = config.policySetName;
    this._resourceGroupName = config.resourceGroupName;
    this._tags = config.tags;
    this._threshold = config.threshold;
    this._timeouts = config.timeouts;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // description - computed: false, optional: true, required: false
  private _description?: string;
  public get description() {
    return this._description;
  }
  public set description(value: string | undefined) {
    this._description = value;
  }

  // evaluator_type - computed: false, optional: false, required: true
  private _evaluatorType: string;
  public get evaluatorType() {
    return this._evaluatorType;
  }
  public set evaluatorType(value: string) {
    this._evaluatorType = value;
  }

  // fact_data - computed: false, optional: true, required: false
  private _factData?: string;
  public get factData() {
    return this._factData;
  }
  public set factData(value: string | undefined) {
    this._factData = value;
  }

  // id - computed: true, optional: true, required: false
  private _id?: string;
  public get id() {
    return this._id ?? this.getStringAttribute('id');
  }
  public set id(value: string | undefined) {
    this._id = value;
  }

  // lab_name - computed: false, optional: false, required: true
  private _labName: string;
  public get labName() {
    return this._labName;
  }
  public set labName(value: string) {
    this._labName = value;
  }

  // name - computed: false, optional: false, required: true
  private _name: string;
  public get name() {
    return this._name;
  }
  public set name(value: string) {
    this._name = value;
  }

  // policy_set_name - computed: false, optional: false, required: true
  private _policySetName: string;
  public get policySetName() {
    return this._policySetName;
  }
  public set policySetName(value: string) {
    this._policySetName = value;
  }

  // resource_group_name - computed: false, optional: false, required: true
  private _resourceGroupName: string;
  public get resourceGroupName() {
    return this._resourceGroupName;
  }
  public set resourceGroupName(value: string) {
    this._resourceGroupName = value;
  }

  // tags - computed: false, optional: true, required: false
  private _tags?: { [key: string]: string };
  public get tags() {
    return this._tags;
  }
  public set tags(value: { [key: string]: string } | undefined) {
    this._tags = value;
  }

  // threshold - computed: false, optional: false, required: true
  private _threshold: string;
  public get threshold() {
    return this._threshold;
  }
  public set threshold(value: string) {
    this._threshold = value;
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts?: DevTestPolicyTimeouts;
  public get timeouts() {
    return this._timeouts;
  }
  public set timeouts(value: DevTestPolicyTimeouts | undefined) {
    this._timeouts = value;
  }

  // =========
  // SYNTHESIS
  // =========

  public synthesizeAttributes(): { [name: string]: any } {
    return {
      description: this._description,
      evaluator_type: this._evaluatorType,
      fact_data: this._factData,
      lab_name: this._labName,
      name: this._name,
      policy_set_name: this._policySetName,
      resource_group_name: this._resourceGroupName,
      tags: this._tags,
      threshold: this._threshold,
      timeouts: this._timeouts,
    };
  }
}
