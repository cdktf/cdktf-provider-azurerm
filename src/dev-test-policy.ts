// https://www.terraform.io/docs/providers/azurerm/r/dev_test_policy.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DevTestPolicyConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/dev_test_policy.html#description DevTestPolicy#description}
  */
  readonly description?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/dev_test_policy.html#evaluator_type DevTestPolicy#evaluator_type}
  */
  readonly evaluatorType: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/dev_test_policy.html#fact_data DevTestPolicy#fact_data}
  */
  readonly factData?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/dev_test_policy.html#lab_name DevTestPolicy#lab_name}
  */
  readonly labName: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/dev_test_policy.html#name DevTestPolicy#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/dev_test_policy.html#policy_set_name DevTestPolicy#policy_set_name}
  */
  readonly policySetName: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/dev_test_policy.html#resource_group_name DevTestPolicy#resource_group_name}
  */
  readonly resourceGroupName: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/dev_test_policy.html#tags DevTestPolicy#tags}
  */
  readonly tags?: { [key: string]: string } | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/dev_test_policy.html#threshold DevTestPolicy#threshold}
  */
  readonly threshold: string;
  /**
  * timeouts block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/dev_test_policy.html#timeouts DevTestPolicy#timeouts}
  */
  readonly timeouts?: DevTestPolicyTimeouts;
}
export interface DevTestPolicyTimeouts {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/dev_test_policy.html#create DevTestPolicy#create}
  */
  readonly create?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/dev_test_policy.html#delete DevTestPolicy#delete}
  */
  readonly delete?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/dev_test_policy.html#read DevTestPolicy#read}
  */
  readonly read?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/dev_test_policy.html#update DevTestPolicy#update}
  */
  readonly update?: string;
}

function devTestPolicyTimeoutsToTerraform(struct?: DevTestPolicyTimeoutsOutputReference | DevTestPolicyTimeouts): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    create: cdktf.stringToTerraform(struct!.create),
    delete: cdktf.stringToTerraform(struct!.delete),
    read: cdktf.stringToTerraform(struct!.read),
    update: cdktf.stringToTerraform(struct!.update),
  }
}

export class DevTestPolicyTimeoutsOutputReference extends cdktf.ComplexObject {
  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param isSingleItem True if this is a block, false if it's a list
  */
  public constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean) {
    super(terraformResource, terraformAttribute, isSingleItem);
  }

  // create - computed: false, optional: true, required: false
  private _create?: string | undefined; 
  public get create() {
    return this.getStringAttribute('create');
  }
  public set create(value: string | undefined) {
    this._create = value;
  }
  public resetCreate() {
    this._create = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get createInput() {
    return this._create
  }

  // delete - computed: false, optional: true, required: false
  private _delete?: string | undefined; 
  public get delete() {
    return this.getStringAttribute('delete');
  }
  public set delete(value: string | undefined) {
    this._delete = value;
  }
  public resetDelete() {
    this._delete = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get deleteInput() {
    return this._delete
  }

  // read - computed: false, optional: true, required: false
  private _read?: string | undefined; 
  public get read() {
    return this.getStringAttribute('read');
  }
  public set read(value: string | undefined) {
    this._read = value;
  }
  public resetRead() {
    this._read = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get readInput() {
    return this._read
  }

  // update - computed: false, optional: true, required: false
  private _update?: string | undefined; 
  public get update() {
    return this.getStringAttribute('update');
  }
  public set update(value: string | undefined) {
    this._update = value;
  }
  public resetUpdate() {
    this._update = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get updateInput() {
    return this._update
  }
}

/**
* Represents a {@link https://www.terraform.io/docs/providers/azurerm/r/dev_test_policy.html azurerm_dev_test_policy}
*/
export class DevTestPolicy extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType: string = "azurerm_dev_test_policy";

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://www.terraform.io/docs/providers/azurerm/r/dev_test_policy.html azurerm_dev_test_policy} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DevTestPolicyConfig
  */
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
  private _description?: string | undefined; 
  public get description() {
    return this.getStringAttribute('description');
  }
  public set description(value: string | undefined) {
    this._description = value;
  }
  public resetDescription() {
    this._description = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get descriptionInput() {
    return this._description
  }

  // evaluator_type - computed: false, optional: false, required: true
  private _evaluatorType?: string; 
  public get evaluatorType() {
    return this.getStringAttribute('evaluator_type');
  }
  public set evaluatorType(value: string) {
    this._evaluatorType = value;
  }
  // Temporarily expose input value. Use with caution.
  public get evaluatorTypeInput() {
    return this._evaluatorType
  }

  // fact_data - computed: false, optional: true, required: false
  private _factData?: string | undefined; 
  public get factData() {
    return this.getStringAttribute('fact_data');
  }
  public set factData(value: string | undefined) {
    this._factData = value;
  }
  public resetFactData() {
    this._factData = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get factDataInput() {
    return this._factData
  }

  // id - computed: true, optional: true, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // lab_name - computed: false, optional: false, required: true
  private _labName?: string; 
  public get labName() {
    return this.getStringAttribute('lab_name');
  }
  public set labName(value: string) {
    this._labName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get labNameInput() {
    return this._labName
  }

  // name - computed: false, optional: false, required: true
  private _name?: string; 
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

  // policy_set_name - computed: false, optional: false, required: true
  private _policySetName?: string; 
  public get policySetName() {
    return this.getStringAttribute('policy_set_name');
  }
  public set policySetName(value: string) {
    this._policySetName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get policySetNameInput() {
    return this._policySetName
  }

  // resource_group_name - computed: false, optional: false, required: true
  private _resourceGroupName?: string; 
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

  // tags - computed: false, optional: true, required: false
  private _tags?: { [key: string]: string } | cdktf.IResolvable | undefined; 
  public get tags() {
    // Getting the computed value is not yet implemented
    return this.interpolationForAttribute('tags') as any;
  }
  public set tags(value: { [key: string]: string } | cdktf.IResolvable | undefined) {
    this._tags = value;
  }
  public resetTags() {
    this._tags = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tagsInput() {
    return this._tags
  }

  // threshold - computed: false, optional: false, required: true
  private _threshold?: string; 
  public get threshold() {
    return this.getStringAttribute('threshold');
  }
  public set threshold(value: string) {
    this._threshold = value;
  }
  // Temporarily expose input value. Use with caution.
  public get thresholdInput() {
    return this._threshold
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts?: DevTestPolicyTimeouts | undefined; 
  private __timeoutsOutput = new DevTestPolicyTimeoutsOutputReference(this as any, "timeouts", true);
  public get timeouts() {
    return this.__timeoutsOutput;
  }
  public putTimeouts(value: DevTestPolicyTimeouts | undefined) {
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
      description: cdktf.stringToTerraform(this._description),
      evaluator_type: cdktf.stringToTerraform(this._evaluatorType),
      fact_data: cdktf.stringToTerraform(this._factData),
      lab_name: cdktf.stringToTerraform(this._labName),
      name: cdktf.stringToTerraform(this._name),
      policy_set_name: cdktf.stringToTerraform(this._policySetName),
      resource_group_name: cdktf.stringToTerraform(this._resourceGroupName),
      tags: cdktf.hashMapper(cdktf.anyToTerraform)(this._tags),
      threshold: cdktf.stringToTerraform(this._threshold),
      timeouts: devTestPolicyTimeoutsToTerraform(this._timeouts),
    };
  }
}
