// https://www.terraform.io/docs/providers/azurerm/r/policy_assignment.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface PolicyAssignmentConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/policy_assignment.html#description PolicyAssignment#description}
  */
  readonly description?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/policy_assignment.html#display_name PolicyAssignment#display_name}
  */
  readonly displayName?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/policy_assignment.html#enforcement_mode PolicyAssignment#enforcement_mode}
  */
  readonly enforcementMode?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/policy_assignment.html#location PolicyAssignment#location}
  */
  readonly location?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/policy_assignment.html#metadata PolicyAssignment#metadata}
  */
  readonly metadata?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/policy_assignment.html#name PolicyAssignment#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/policy_assignment.html#not_scopes PolicyAssignment#not_scopes}
  */
  readonly notScopes?: string[];
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/policy_assignment.html#parameters PolicyAssignment#parameters}
  */
  readonly parameters?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/policy_assignment.html#policy_definition_id PolicyAssignment#policy_definition_id}
  */
  readonly policyDefinitionId: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/policy_assignment.html#scope PolicyAssignment#scope}
  */
  readonly scope: string;
  /**
  * identity block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/policy_assignment.html#identity PolicyAssignment#identity}
  */
  readonly identity?: PolicyAssignmentIdentity;
  /**
  * timeouts block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/policy_assignment.html#timeouts PolicyAssignment#timeouts}
  */
  readonly timeouts?: PolicyAssignmentTimeouts;
}
export interface PolicyAssignmentIdentity {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/policy_assignment.html#type PolicyAssignment#type}
  */
  readonly type?: string;
}

function policyAssignmentIdentityToTerraform(struct?: PolicyAssignmentIdentityOutputReference | PolicyAssignmentIdentity): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    type: cdktf.stringToTerraform(struct!.type),
  }
}

export class PolicyAssignmentIdentityOutputReference extends cdktf.ComplexObject {
  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param isSingleItem True if this is a block, false if it's a list
  */
  public constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean) {
    super(terraformResource, terraformAttribute, isSingleItem);
  }

  // type - computed: false, optional: true, required: false
  private _type?: string | undefined; 
  public get type() {
    return this.getStringAttribute('type');
  }
  public set type(value: string | undefined) {
    this._type = value;
  }
  public resetType() {
    this._type = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get typeInput() {
    return this._type
  }
}
export interface PolicyAssignmentTimeouts {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/policy_assignment.html#create PolicyAssignment#create}
  */
  readonly create?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/policy_assignment.html#delete PolicyAssignment#delete}
  */
  readonly delete?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/policy_assignment.html#read PolicyAssignment#read}
  */
  readonly read?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/policy_assignment.html#update PolicyAssignment#update}
  */
  readonly update?: string;
}

function policyAssignmentTimeoutsToTerraform(struct?: PolicyAssignmentTimeoutsOutputReference | PolicyAssignmentTimeouts): any {
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

export class PolicyAssignmentTimeoutsOutputReference extends cdktf.ComplexObject {
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
* Represents a {@link https://www.terraform.io/docs/providers/azurerm/r/policy_assignment.html azurerm_policy_assignment}
*/
export class PolicyAssignment extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType: string = "azurerm_policy_assignment";

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://www.terraform.io/docs/providers/azurerm/r/policy_assignment.html azurerm_policy_assignment} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options PolicyAssignmentConfig
  */
  public constructor(scope: Construct, id: string, config: PolicyAssignmentConfig) {
    super(scope, id, {
      terraformResourceType: 'azurerm_policy_assignment',
      terraformGeneratorMetadata: {
        providerName: 'azurerm'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle
    });
    this._description = config.description;
    this._displayName = config.displayName;
    this._enforcementMode = config.enforcementMode;
    this._location = config.location;
    this._metadata = config.metadata;
    this._name = config.name;
    this._notScopes = config.notScopes;
    this._parameters = config.parameters;
    this._policyDefinitionId = config.policyDefinitionId;
    this._scope = config.scope;
    this._identity = config.identity;
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

  // display_name - computed: false, optional: true, required: false
  private _displayName?: string | undefined; 
  public get displayName() {
    return this.getStringAttribute('display_name');
  }
  public set displayName(value: string | undefined) {
    this._displayName = value;
  }
  public resetDisplayName() {
    this._displayName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get displayNameInput() {
    return this._displayName
  }

  // enforcement_mode - computed: false, optional: true, required: false
  private _enforcementMode?: boolean | cdktf.IResolvable | undefined; 
  public get enforcementMode() {
    return this.getBooleanAttribute('enforcement_mode') as any;
  }
  public set enforcementMode(value: boolean | cdktf.IResolvable | undefined) {
    this._enforcementMode = value;
  }
  public resetEnforcementMode() {
    this._enforcementMode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enforcementModeInput() {
    return this._enforcementMode
  }

  // id - computed: true, optional: true, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // location - computed: false, optional: true, required: false
  private _location?: string | undefined; 
  public get location() {
    return this.getStringAttribute('location');
  }
  public set location(value: string | undefined) {
    this._location = value;
  }
  public resetLocation() {
    this._location = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get locationInput() {
    return this._location
  }

  // metadata - computed: true, optional: true, required: false
  private _metadata?: string | undefined; 
  public get metadata() {
    return this.getStringAttribute('metadata');
  }
  public set metadata(value: string | undefined) {
    this._metadata = value;
  }
  public resetMetadata() {
    this._metadata = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get metadataInput() {
    return this._metadata
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

  // not_scopes - computed: false, optional: true, required: false
  private _notScopes?: string[] | undefined; 
  public get notScopes() {
    return this.getListAttribute('not_scopes');
  }
  public set notScopes(value: string[] | undefined) {
    this._notScopes = value;
  }
  public resetNotScopes() {
    this._notScopes = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get notScopesInput() {
    return this._notScopes
  }

  // parameters - computed: false, optional: true, required: false
  private _parameters?: string | undefined; 
  public get parameters() {
    return this.getStringAttribute('parameters');
  }
  public set parameters(value: string | undefined) {
    this._parameters = value;
  }
  public resetParameters() {
    this._parameters = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get parametersInput() {
    return this._parameters
  }

  // policy_definition_id - computed: false, optional: false, required: true
  private _policyDefinitionId?: string; 
  public get policyDefinitionId() {
    return this.getStringAttribute('policy_definition_id');
  }
  public set policyDefinitionId(value: string) {
    this._policyDefinitionId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get policyDefinitionIdInput() {
    return this._policyDefinitionId
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

  // identity - computed: false, optional: true, required: false
  private _identity?: PolicyAssignmentIdentity | undefined; 
  private __identityOutput = new PolicyAssignmentIdentityOutputReference(this as any, "identity", true);
  public get identity() {
    return this.__identityOutput;
  }
  public putIdentity(value: PolicyAssignmentIdentity | undefined) {
    this._identity = value;
  }
  public resetIdentity() {
    this._identity = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get identityInput() {
    return this._identity
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts?: PolicyAssignmentTimeouts | undefined; 
  private __timeoutsOutput = new PolicyAssignmentTimeoutsOutputReference(this as any, "timeouts", true);
  public get timeouts() {
    return this.__timeoutsOutput;
  }
  public putTimeouts(value: PolicyAssignmentTimeouts | undefined) {
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
      display_name: cdktf.stringToTerraform(this._displayName),
      enforcement_mode: cdktf.booleanToTerraform(this._enforcementMode),
      location: cdktf.stringToTerraform(this._location),
      metadata: cdktf.stringToTerraform(this._metadata),
      name: cdktf.stringToTerraform(this._name),
      not_scopes: cdktf.listMapper(cdktf.stringToTerraform)(this._notScopes),
      parameters: cdktf.stringToTerraform(this._parameters),
      policy_definition_id: cdktf.stringToTerraform(this._policyDefinitionId),
      scope: cdktf.stringToTerraform(this._scope),
      identity: policyAssignmentIdentityToTerraform(this._identity),
      timeouts: policyAssignmentTimeoutsToTerraform(this._timeouts),
    };
  }
}
