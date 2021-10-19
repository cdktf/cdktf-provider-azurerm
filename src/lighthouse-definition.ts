// https://www.terraform.io/docs/providers/azurerm/r/lighthouse_definition.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface LighthouseDefinitionConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/lighthouse_definition.html#description LighthouseDefinition#description}
  */
  readonly description?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/lighthouse_definition.html#lighthouse_definition_id LighthouseDefinition#lighthouse_definition_id}
  */
  readonly lighthouseDefinitionId?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/lighthouse_definition.html#managing_tenant_id LighthouseDefinition#managing_tenant_id}
  */
  readonly managingTenantId: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/lighthouse_definition.html#name LighthouseDefinition#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/lighthouse_definition.html#scope LighthouseDefinition#scope}
  */
  readonly scope: string;
  /**
  * authorization block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/lighthouse_definition.html#authorization LighthouseDefinition#authorization}
  */
  readonly authorization: LighthouseDefinitionAuthorization[];
  /**
  * plan block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/lighthouse_definition.html#plan LighthouseDefinition#plan}
  */
  readonly plan?: LighthouseDefinitionPlan;
  /**
  * timeouts block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/lighthouse_definition.html#timeouts LighthouseDefinition#timeouts}
  */
  readonly timeouts?: LighthouseDefinitionTimeouts;
}
export interface LighthouseDefinitionAuthorization {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/lighthouse_definition.html#delegated_role_definition_ids LighthouseDefinition#delegated_role_definition_ids}
  */
  readonly delegatedRoleDefinitionIds?: string[];
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/lighthouse_definition.html#principal_display_name LighthouseDefinition#principal_display_name}
  */
  readonly principalDisplayName?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/lighthouse_definition.html#principal_id LighthouseDefinition#principal_id}
  */
  readonly principalId: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/lighthouse_definition.html#role_definition_id LighthouseDefinition#role_definition_id}
  */
  readonly roleDefinitionId: string;
}

function lighthouseDefinitionAuthorizationToTerraform(struct?: LighthouseDefinitionAuthorization): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    delegated_role_definition_ids: cdktf.listMapper(cdktf.stringToTerraform)(struct!.delegatedRoleDefinitionIds),
    principal_display_name: cdktf.stringToTerraform(struct!.principalDisplayName),
    principal_id: cdktf.stringToTerraform(struct!.principalId),
    role_definition_id: cdktf.stringToTerraform(struct!.roleDefinitionId),
  }
}

export interface LighthouseDefinitionPlan {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/lighthouse_definition.html#name LighthouseDefinition#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/lighthouse_definition.html#product LighthouseDefinition#product}
  */
  readonly product: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/lighthouse_definition.html#publisher LighthouseDefinition#publisher}
  */
  readonly publisher: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/lighthouse_definition.html#version LighthouseDefinition#version}
  */
  readonly version: string;
}

function lighthouseDefinitionPlanToTerraform(struct?: LighthouseDefinitionPlanOutputReference | LighthouseDefinitionPlan): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
    product: cdktf.stringToTerraform(struct!.product),
    publisher: cdktf.stringToTerraform(struct!.publisher),
    version: cdktf.stringToTerraform(struct!.version),
  }
}

export class LighthouseDefinitionPlanOutputReference extends cdktf.ComplexObject {
  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param isSingleItem True if this is a block, false if it's a list
  */
  public constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean) {
    super(terraformResource, terraformAttribute, isSingleItem);
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

  // product - computed: false, optional: false, required: true
  private _product?: string; 
  public get product() {
    return this.getStringAttribute('product');
  }
  public set product(value: string) {
    this._product = value;
  }
  // Temporarily expose input value. Use with caution.
  public get productInput() {
    return this._product
  }

  // publisher - computed: false, optional: false, required: true
  private _publisher?: string; 
  public get publisher() {
    return this.getStringAttribute('publisher');
  }
  public set publisher(value: string) {
    this._publisher = value;
  }
  // Temporarily expose input value. Use with caution.
  public get publisherInput() {
    return this._publisher
  }

  // version - computed: false, optional: false, required: true
  private _version?: string; 
  public get version() {
    return this.getStringAttribute('version');
  }
  public set version(value: string) {
    this._version = value;
  }
  // Temporarily expose input value. Use with caution.
  public get versionInput() {
    return this._version
  }
}
export interface LighthouseDefinitionTimeouts {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/lighthouse_definition.html#create LighthouseDefinition#create}
  */
  readonly create?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/lighthouse_definition.html#delete LighthouseDefinition#delete}
  */
  readonly delete?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/lighthouse_definition.html#read LighthouseDefinition#read}
  */
  readonly read?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/lighthouse_definition.html#update LighthouseDefinition#update}
  */
  readonly update?: string;
}

function lighthouseDefinitionTimeoutsToTerraform(struct?: LighthouseDefinitionTimeoutsOutputReference | LighthouseDefinitionTimeouts): any {
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

export class LighthouseDefinitionTimeoutsOutputReference extends cdktf.ComplexObject {
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
* Represents a {@link https://www.terraform.io/docs/providers/azurerm/r/lighthouse_definition.html azurerm_lighthouse_definition}
*/
export class LighthouseDefinition extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType: string = "azurerm_lighthouse_definition";

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://www.terraform.io/docs/providers/azurerm/r/lighthouse_definition.html azurerm_lighthouse_definition} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options LighthouseDefinitionConfig
  */
  public constructor(scope: Construct, id: string, config: LighthouseDefinitionConfig) {
    super(scope, id, {
      terraformResourceType: 'azurerm_lighthouse_definition',
      terraformGeneratorMetadata: {
        providerName: 'azurerm'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle
    });
    this._description = config.description;
    this._lighthouseDefinitionId = config.lighthouseDefinitionId;
    this._managingTenantId = config.managingTenantId;
    this._name = config.name;
    this._scope = config.scope;
    this._authorization = config.authorization;
    this._plan = config.plan;
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

  // id - computed: true, optional: true, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // lighthouse_definition_id - computed: true, optional: true, required: false
  private _lighthouseDefinitionId?: string | undefined; 
  public get lighthouseDefinitionId() {
    return this.getStringAttribute('lighthouse_definition_id');
  }
  public set lighthouseDefinitionId(value: string | undefined) {
    this._lighthouseDefinitionId = value;
  }
  public resetLighthouseDefinitionId() {
    this._lighthouseDefinitionId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get lighthouseDefinitionIdInput() {
    return this._lighthouseDefinitionId
  }

  // managing_tenant_id - computed: false, optional: false, required: true
  private _managingTenantId?: string; 
  public get managingTenantId() {
    return this.getStringAttribute('managing_tenant_id');
  }
  public set managingTenantId(value: string) {
    this._managingTenantId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get managingTenantIdInput() {
    return this._managingTenantId
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

  // authorization - computed: false, optional: false, required: true
  private _authorization?: LighthouseDefinitionAuthorization[]; 
  public get authorization() {
    // Getting the computed value is not yet implemented
    return this.interpolationForAttribute('authorization') as any;
  }
  public set authorization(value: LighthouseDefinitionAuthorization[]) {
    this._authorization = value;
  }
  // Temporarily expose input value. Use with caution.
  public get authorizationInput() {
    return this._authorization
  }

  // plan - computed: false, optional: true, required: false
  private _plan?: LighthouseDefinitionPlan | undefined; 
  private __planOutput = new LighthouseDefinitionPlanOutputReference(this as any, "plan", true);
  public get plan() {
    return this.__planOutput;
  }
  public putPlan(value: LighthouseDefinitionPlan | undefined) {
    this._plan = value;
  }
  public resetPlan() {
    this._plan = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get planInput() {
    return this._plan
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts?: LighthouseDefinitionTimeouts | undefined; 
  private __timeoutsOutput = new LighthouseDefinitionTimeoutsOutputReference(this as any, "timeouts", true);
  public get timeouts() {
    return this.__timeoutsOutput;
  }
  public putTimeouts(value: LighthouseDefinitionTimeouts | undefined) {
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
      lighthouse_definition_id: cdktf.stringToTerraform(this._lighthouseDefinitionId),
      managing_tenant_id: cdktf.stringToTerraform(this._managingTenantId),
      name: cdktf.stringToTerraform(this._name),
      scope: cdktf.stringToTerraform(this._scope),
      authorization: cdktf.listMapper(lighthouseDefinitionAuthorizationToTerraform)(this._authorization),
      plan: lighthouseDefinitionPlanToTerraform(this._plan),
      timeouts: lighthouseDefinitionTimeoutsToTerraform(this._timeouts),
    };
  }
}
