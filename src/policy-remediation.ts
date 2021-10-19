// https://www.terraform.io/docs/providers/azurerm/r/policy_remediation.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface PolicyRemediationConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/policy_remediation.html#location_filters PolicyRemediation#location_filters}
  */
  readonly locationFilters?: string[];
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/policy_remediation.html#name PolicyRemediation#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/policy_remediation.html#policy_assignment_id PolicyRemediation#policy_assignment_id}
  */
  readonly policyAssignmentId: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/policy_remediation.html#policy_definition_reference_id PolicyRemediation#policy_definition_reference_id}
  */
  readonly policyDefinitionReferenceId?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/policy_remediation.html#resource_discovery_mode PolicyRemediation#resource_discovery_mode}
  */
  readonly resourceDiscoveryMode?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/policy_remediation.html#scope PolicyRemediation#scope}
  */
  readonly scope: string;
  /**
  * timeouts block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/policy_remediation.html#timeouts PolicyRemediation#timeouts}
  */
  readonly timeouts?: PolicyRemediationTimeouts;
}
export interface PolicyRemediationTimeouts {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/policy_remediation.html#create PolicyRemediation#create}
  */
  readonly create?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/policy_remediation.html#delete PolicyRemediation#delete}
  */
  readonly delete?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/policy_remediation.html#read PolicyRemediation#read}
  */
  readonly read?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/policy_remediation.html#update PolicyRemediation#update}
  */
  readonly update?: string;
}

function policyRemediationTimeoutsToTerraform(struct?: PolicyRemediationTimeoutsOutputReference | PolicyRemediationTimeouts): any {
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

export class PolicyRemediationTimeoutsOutputReference extends cdktf.ComplexObject {
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
* Represents a {@link https://www.terraform.io/docs/providers/azurerm/r/policy_remediation.html azurerm_policy_remediation}
*/
export class PolicyRemediation extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType: string = "azurerm_policy_remediation";

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://www.terraform.io/docs/providers/azurerm/r/policy_remediation.html azurerm_policy_remediation} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options PolicyRemediationConfig
  */
  public constructor(scope: Construct, id: string, config: PolicyRemediationConfig) {
    super(scope, id, {
      terraformResourceType: 'azurerm_policy_remediation',
      terraformGeneratorMetadata: {
        providerName: 'azurerm'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle
    });
    this._locationFilters = config.locationFilters;
    this._name = config.name;
    this._policyAssignmentId = config.policyAssignmentId;
    this._policyDefinitionReferenceId = config.policyDefinitionReferenceId;
    this._resourceDiscoveryMode = config.resourceDiscoveryMode;
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

  // location_filters - computed: false, optional: true, required: false
  private _locationFilters?: string[] | undefined; 
  public get locationFilters() {
    return this.getListAttribute('location_filters');
  }
  public set locationFilters(value: string[] | undefined) {
    this._locationFilters = value;
  }
  public resetLocationFilters() {
    this._locationFilters = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get locationFiltersInput() {
    return this._locationFilters
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

  // policy_assignment_id - computed: false, optional: false, required: true
  private _policyAssignmentId?: string; 
  public get policyAssignmentId() {
    return this.getStringAttribute('policy_assignment_id');
  }
  public set policyAssignmentId(value: string) {
    this._policyAssignmentId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get policyAssignmentIdInput() {
    return this._policyAssignmentId
  }

  // policy_definition_reference_id - computed: false, optional: true, required: false
  private _policyDefinitionReferenceId?: string | undefined; 
  public get policyDefinitionReferenceId() {
    return this.getStringAttribute('policy_definition_reference_id');
  }
  public set policyDefinitionReferenceId(value: string | undefined) {
    this._policyDefinitionReferenceId = value;
  }
  public resetPolicyDefinitionReferenceId() {
    this._policyDefinitionReferenceId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get policyDefinitionReferenceIdInput() {
    return this._policyDefinitionReferenceId
  }

  // resource_discovery_mode - computed: false, optional: true, required: false
  private _resourceDiscoveryMode?: string | undefined; 
  public get resourceDiscoveryMode() {
    return this.getStringAttribute('resource_discovery_mode');
  }
  public set resourceDiscoveryMode(value: string | undefined) {
    this._resourceDiscoveryMode = value;
  }
  public resetResourceDiscoveryMode() {
    this._resourceDiscoveryMode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get resourceDiscoveryModeInput() {
    return this._resourceDiscoveryMode
  }

  // scope - computed: false, optional: false, required: true
  private _scope?: string; 
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
  private _timeouts?: PolicyRemediationTimeouts | undefined; 
  private __timeoutsOutput = new PolicyRemediationTimeoutsOutputReference(this as any, "timeouts", true);
  public get timeouts() {
    return this.__timeoutsOutput;
  }
  public putTimeouts(value: PolicyRemediationTimeouts | undefined) {
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
      location_filters: cdktf.listMapper(cdktf.stringToTerraform)(this._locationFilters),
      name: cdktf.stringToTerraform(this._name),
      policy_assignment_id: cdktf.stringToTerraform(this._policyAssignmentId),
      policy_definition_reference_id: cdktf.stringToTerraform(this._policyDefinitionReferenceId),
      resource_discovery_mode: cdktf.stringToTerraform(this._resourceDiscoveryMode),
      scope: cdktf.stringToTerraform(this._scope),
      timeouts: policyRemediationTimeoutsToTerraform(this._timeouts),
    };
  }
}
