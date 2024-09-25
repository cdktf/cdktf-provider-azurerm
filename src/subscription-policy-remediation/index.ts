// https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/subscription_policy_remediation
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface SubscriptionPolicyRemediationConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/subscription_policy_remediation#failure_percentage SubscriptionPolicyRemediation#failure_percentage}
  */
  readonly failurePercentage?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/subscription_policy_remediation#id SubscriptionPolicyRemediation#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/subscription_policy_remediation#location_filters SubscriptionPolicyRemediation#location_filters}
  */
  readonly locationFilters?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/subscription_policy_remediation#name SubscriptionPolicyRemediation#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/subscription_policy_remediation#parallel_deployments SubscriptionPolicyRemediation#parallel_deployments}
  */
  readonly parallelDeployments?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/subscription_policy_remediation#policy_assignment_id SubscriptionPolicyRemediation#policy_assignment_id}
  */
  readonly policyAssignmentId: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/subscription_policy_remediation#policy_definition_reference_id SubscriptionPolicyRemediation#policy_definition_reference_id}
  */
  readonly policyDefinitionReferenceId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/subscription_policy_remediation#resource_count SubscriptionPolicyRemediation#resource_count}
  */
  readonly resourceCount?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/subscription_policy_remediation#resource_discovery_mode SubscriptionPolicyRemediation#resource_discovery_mode}
  */
  readonly resourceDiscoveryMode?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/subscription_policy_remediation#subscription_id SubscriptionPolicyRemediation#subscription_id}
  */
  readonly subscriptionId: string;
  /**
  * timeouts block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/subscription_policy_remediation#timeouts SubscriptionPolicyRemediation#timeouts}
  */
  readonly timeouts?: SubscriptionPolicyRemediationTimeouts;
}
export interface SubscriptionPolicyRemediationTimeouts {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/subscription_policy_remediation#create SubscriptionPolicyRemediation#create}
  */
  readonly create?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/subscription_policy_remediation#delete SubscriptionPolicyRemediation#delete}
  */
  readonly delete?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/subscription_policy_remediation#read SubscriptionPolicyRemediation#read}
  */
  readonly read?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/subscription_policy_remediation#update SubscriptionPolicyRemediation#update}
  */
  readonly update?: string;
}

export function subscriptionPolicyRemediationTimeoutsToTerraform(struct?: SubscriptionPolicyRemediationTimeouts | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
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


export function subscriptionPolicyRemediationTimeoutsToHclTerraform(struct?: SubscriptionPolicyRemediationTimeouts | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    create: {
      value: cdktf.stringToHclTerraform(struct!.create),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    delete: {
      value: cdktf.stringToHclTerraform(struct!.delete),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    read: {
      value: cdktf.stringToHclTerraform(struct!.read),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    update: {
      value: cdktf.stringToHclTerraform(struct!.update),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SubscriptionPolicyRemediationTimeoutsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): SubscriptionPolicyRemediationTimeouts | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._create !== undefined) {
      hasAnyValues = true;
      internalValueResult.create = this._create;
    }
    if (this._delete !== undefined) {
      hasAnyValues = true;
      internalValueResult.delete = this._delete;
    }
    if (this._read !== undefined) {
      hasAnyValues = true;
      internalValueResult.read = this._read;
    }
    if (this._update !== undefined) {
      hasAnyValues = true;
      internalValueResult.update = this._update;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SubscriptionPolicyRemediationTimeouts | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._create = undefined;
      this._delete = undefined;
      this._read = undefined;
      this._update = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._create = value.create;
      this._delete = value.delete;
      this._read = value.read;
      this._update = value.update;
    }
  }

  // create - computed: false, optional: true, required: false
  private _create?: string; 
  public get create() {
    return this.getStringAttribute('create');
  }
  public set create(value: string) {
    this._create = value;
  }
  public resetCreate() {
    this._create = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get createInput() {
    return this._create;
  }

  // delete - computed: false, optional: true, required: false
  private _delete?: string; 
  public get delete() {
    return this.getStringAttribute('delete');
  }
  public set delete(value: string) {
    this._delete = value;
  }
  public resetDelete() {
    this._delete = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get deleteInput() {
    return this._delete;
  }

  // read - computed: false, optional: true, required: false
  private _read?: string; 
  public get read() {
    return this.getStringAttribute('read');
  }
  public set read(value: string) {
    this._read = value;
  }
  public resetRead() {
    this._read = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get readInput() {
    return this._read;
  }

  // update - computed: false, optional: true, required: false
  private _update?: string; 
  public get update() {
    return this.getStringAttribute('update');
  }
  public set update(value: string) {
    this._update = value;
  }
  public resetUpdate() {
    this._update = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get updateInput() {
    return this._update;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/subscription_policy_remediation azurerm_subscription_policy_remediation}
*/
export class SubscriptionPolicyRemediation extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "azurerm_subscription_policy_remediation";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a SubscriptionPolicyRemediation resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the SubscriptionPolicyRemediation to import
  * @param importFromId The id of the existing SubscriptionPolicyRemediation that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/subscription_policy_remediation#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the SubscriptionPolicyRemediation to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "azurerm_subscription_policy_remediation", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/subscription_policy_remediation azurerm_subscription_policy_remediation} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options SubscriptionPolicyRemediationConfig
  */
  public constructor(scope: Construct, id: string, config: SubscriptionPolicyRemediationConfig) {
    super(scope, id, {
      terraformResourceType: 'azurerm_subscription_policy_remediation',
      terraformGeneratorMetadata: {
        providerName: 'azurerm',
        providerVersion: '4.3.0',
        providerVersionConstraint: '~> 4.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._failurePercentage = config.failurePercentage;
    this._id = config.id;
    this._locationFilters = config.locationFilters;
    this._name = config.name;
    this._parallelDeployments = config.parallelDeployments;
    this._policyAssignmentId = config.policyAssignmentId;
    this._policyDefinitionReferenceId = config.policyDefinitionReferenceId;
    this._resourceCount = config.resourceCount;
    this._resourceDiscoveryMode = config.resourceDiscoveryMode;
    this._subscriptionId = config.subscriptionId;
    this._timeouts.internalValue = config.timeouts;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // failure_percentage - computed: false, optional: true, required: false
  private _failurePercentage?: number; 
  public get failurePercentage() {
    return this.getNumberAttribute('failure_percentage');
  }
  public set failurePercentage(value: number) {
    this._failurePercentage = value;
  }
  public resetFailurePercentage() {
    this._failurePercentage = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get failurePercentageInput() {
    return this._failurePercentage;
  }

  // id - computed: true, optional: true, required: false
  private _id?: string; 
  public get id() {
    return this.getStringAttribute('id');
  }
  public set id(value: string) {
    this._id = value;
  }
  public resetId() {
    this._id = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get idInput() {
    return this._id;
  }

  // location_filters - computed: false, optional: true, required: false
  private _locationFilters?: string[]; 
  public get locationFilters() {
    return this.getListAttribute('location_filters');
  }
  public set locationFilters(value: string[]) {
    this._locationFilters = value;
  }
  public resetLocationFilters() {
    this._locationFilters = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get locationFiltersInput() {
    return this._locationFilters;
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
    return this._name;
  }

  // parallel_deployments - computed: false, optional: true, required: false
  private _parallelDeployments?: number; 
  public get parallelDeployments() {
    return this.getNumberAttribute('parallel_deployments');
  }
  public set parallelDeployments(value: number) {
    this._parallelDeployments = value;
  }
  public resetParallelDeployments() {
    this._parallelDeployments = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get parallelDeploymentsInput() {
    return this._parallelDeployments;
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
    return this._policyAssignmentId;
  }

  // policy_definition_reference_id - computed: false, optional: true, required: false
  private _policyDefinitionReferenceId?: string; 
  public get policyDefinitionReferenceId() {
    return this.getStringAttribute('policy_definition_reference_id');
  }
  public set policyDefinitionReferenceId(value: string) {
    this._policyDefinitionReferenceId = value;
  }
  public resetPolicyDefinitionReferenceId() {
    this._policyDefinitionReferenceId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get policyDefinitionReferenceIdInput() {
    return this._policyDefinitionReferenceId;
  }

  // resource_count - computed: false, optional: true, required: false
  private _resourceCount?: number; 
  public get resourceCount() {
    return this.getNumberAttribute('resource_count');
  }
  public set resourceCount(value: number) {
    this._resourceCount = value;
  }
  public resetResourceCount() {
    this._resourceCount = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get resourceCountInput() {
    return this._resourceCount;
  }

  // resource_discovery_mode - computed: false, optional: true, required: false
  private _resourceDiscoveryMode?: string; 
  public get resourceDiscoveryMode() {
    return this.getStringAttribute('resource_discovery_mode');
  }
  public set resourceDiscoveryMode(value: string) {
    this._resourceDiscoveryMode = value;
  }
  public resetResourceDiscoveryMode() {
    this._resourceDiscoveryMode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get resourceDiscoveryModeInput() {
    return this._resourceDiscoveryMode;
  }

  // subscription_id - computed: false, optional: false, required: true
  private _subscriptionId?: string; 
  public get subscriptionId() {
    return this.getStringAttribute('subscription_id');
  }
  public set subscriptionId(value: string) {
    this._subscriptionId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get subscriptionIdInput() {
    return this._subscriptionId;
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts = new SubscriptionPolicyRemediationTimeoutsOutputReference(this, "timeouts");
  public get timeouts() {
    return this._timeouts;
  }
  public putTimeouts(value: SubscriptionPolicyRemediationTimeouts) {
    this._timeouts.internalValue = value;
  }
  public resetTimeouts() {
    this._timeouts.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get timeoutsInput() {
    return this._timeouts.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      failure_percentage: cdktf.numberToTerraform(this._failurePercentage),
      id: cdktf.stringToTerraform(this._id),
      location_filters: cdktf.listMapper(cdktf.stringToTerraform, false)(this._locationFilters),
      name: cdktf.stringToTerraform(this._name),
      parallel_deployments: cdktf.numberToTerraform(this._parallelDeployments),
      policy_assignment_id: cdktf.stringToTerraform(this._policyAssignmentId),
      policy_definition_reference_id: cdktf.stringToTerraform(this._policyDefinitionReferenceId),
      resource_count: cdktf.numberToTerraform(this._resourceCount),
      resource_discovery_mode: cdktf.stringToTerraform(this._resourceDiscoveryMode),
      subscription_id: cdktf.stringToTerraform(this._subscriptionId),
      timeouts: subscriptionPolicyRemediationTimeoutsToTerraform(this._timeouts.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      failure_percentage: {
        value: cdktf.numberToHclTerraform(this._failurePercentage),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      id: {
        value: cdktf.stringToHclTerraform(this._id),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      location_filters: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._locationFilters),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
      },
      name: {
        value: cdktf.stringToHclTerraform(this._name),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      parallel_deployments: {
        value: cdktf.numberToHclTerraform(this._parallelDeployments),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      policy_assignment_id: {
        value: cdktf.stringToHclTerraform(this._policyAssignmentId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      policy_definition_reference_id: {
        value: cdktf.stringToHclTerraform(this._policyDefinitionReferenceId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      resource_count: {
        value: cdktf.numberToHclTerraform(this._resourceCount),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      resource_discovery_mode: {
        value: cdktf.stringToHclTerraform(this._resourceDiscoveryMode),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      subscription_id: {
        value: cdktf.stringToHclTerraform(this._subscriptionId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      timeouts: {
        value: subscriptionPolicyRemediationTimeoutsToHclTerraform(this._timeouts.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "SubscriptionPolicyRemediationTimeouts",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
