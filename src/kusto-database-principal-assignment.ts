// https://www.terraform.io/docs/providers/azurerm/r/kusto_database_principal_assignment.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface KustoDatabasePrincipalAssignmentConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/kusto_database_principal_assignment.html#cluster_name KustoDatabasePrincipalAssignment#cluster_name}
  */
  readonly clusterName: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/kusto_database_principal_assignment.html#database_name KustoDatabasePrincipalAssignment#database_name}
  */
  readonly databaseName: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/kusto_database_principal_assignment.html#name KustoDatabasePrincipalAssignment#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/kusto_database_principal_assignment.html#principal_id KustoDatabasePrincipalAssignment#principal_id}
  */
  readonly principalId: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/kusto_database_principal_assignment.html#principal_type KustoDatabasePrincipalAssignment#principal_type}
  */
  readonly principalType: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/kusto_database_principal_assignment.html#resource_group_name KustoDatabasePrincipalAssignment#resource_group_name}
  */
  readonly resourceGroupName: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/kusto_database_principal_assignment.html#role KustoDatabasePrincipalAssignment#role}
  */
  readonly role: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/kusto_database_principal_assignment.html#tenant_id KustoDatabasePrincipalAssignment#tenant_id}
  */
  readonly tenantId: string;
  /**
  * timeouts block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/kusto_database_principal_assignment.html#timeouts KustoDatabasePrincipalAssignment#timeouts}
  */
  readonly timeouts?: KustoDatabasePrincipalAssignmentTimeouts;
}
export interface KustoDatabasePrincipalAssignmentTimeouts {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/kusto_database_principal_assignment.html#create KustoDatabasePrincipalAssignment#create}
  */
  readonly create?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/kusto_database_principal_assignment.html#delete KustoDatabasePrincipalAssignment#delete}
  */
  readonly delete?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/kusto_database_principal_assignment.html#read KustoDatabasePrincipalAssignment#read}
  */
  readonly read?: string;
}

function kustoDatabasePrincipalAssignmentTimeoutsToTerraform(struct?: KustoDatabasePrincipalAssignmentTimeoutsOutputReference | KustoDatabasePrincipalAssignmentTimeouts): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    create: cdktf.stringToTerraform(struct!.create),
    delete: cdktf.stringToTerraform(struct!.delete),
    read: cdktf.stringToTerraform(struct!.read),
  }
}

export class KustoDatabasePrincipalAssignmentTimeoutsOutputReference extends cdktf.ComplexObject {
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
}

/**
* Represents a {@link https://www.terraform.io/docs/providers/azurerm/r/kusto_database_principal_assignment.html azurerm_kusto_database_principal_assignment}
*/
export class KustoDatabasePrincipalAssignment extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType: string = "azurerm_kusto_database_principal_assignment";

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://www.terraform.io/docs/providers/azurerm/r/kusto_database_principal_assignment.html azurerm_kusto_database_principal_assignment} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options KustoDatabasePrincipalAssignmentConfig
  */
  public constructor(scope: Construct, id: string, config: KustoDatabasePrincipalAssignmentConfig) {
    super(scope, id, {
      terraformResourceType: 'azurerm_kusto_database_principal_assignment',
      terraformGeneratorMetadata: {
        providerName: 'azurerm'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle
    });
    this._clusterName = config.clusterName;
    this._databaseName = config.databaseName;
    this._name = config.name;
    this._principalId = config.principalId;
    this._principalType = config.principalType;
    this._resourceGroupName = config.resourceGroupName;
    this._role = config.role;
    this._tenantId = config.tenantId;
    this._timeouts = config.timeouts;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // cluster_name - computed: false, optional: false, required: true
  private _clusterName?: string; 
  public get clusterName() {
    return this.getStringAttribute('cluster_name');
  }
  public set clusterName(value: string) {
    this._clusterName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get clusterNameInput() {
    return this._clusterName
  }

  // database_name - computed: false, optional: false, required: true
  private _databaseName?: string; 
  public get databaseName() {
    return this.getStringAttribute('database_name');
  }
  public set databaseName(value: string) {
    this._databaseName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get databaseNameInput() {
    return this._databaseName
  }

  // id - computed: true, optional: true, required: false
  public get id() {
    return this.getStringAttribute('id');
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

  // principal_id - computed: false, optional: false, required: true
  private _principalId?: string; 
  public get principalId() {
    return this.getStringAttribute('principal_id');
  }
  public set principalId(value: string) {
    this._principalId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get principalIdInput() {
    return this._principalId
  }

  // principal_name - computed: true, optional: false, required: false
  public get principalName() {
    return this.getStringAttribute('principal_name');
  }

  // principal_type - computed: false, optional: false, required: true
  private _principalType?: string; 
  public get principalType() {
    return this.getStringAttribute('principal_type');
  }
  public set principalType(value: string) {
    this._principalType = value;
  }
  // Temporarily expose input value. Use with caution.
  public get principalTypeInput() {
    return this._principalType
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

  // role - computed: false, optional: false, required: true
  private _role?: string; 
  public get role() {
    return this.getStringAttribute('role');
  }
  public set role(value: string) {
    this._role = value;
  }
  // Temporarily expose input value. Use with caution.
  public get roleInput() {
    return this._role
  }

  // tenant_id - computed: false, optional: false, required: true
  private _tenantId?: string; 
  public get tenantId() {
    return this.getStringAttribute('tenant_id');
  }
  public set tenantId(value: string) {
    this._tenantId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get tenantIdInput() {
    return this._tenantId
  }

  // tenant_name - computed: true, optional: false, required: false
  public get tenantName() {
    return this.getStringAttribute('tenant_name');
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts?: KustoDatabasePrincipalAssignmentTimeouts | undefined; 
  private __timeoutsOutput = new KustoDatabasePrincipalAssignmentTimeoutsOutputReference(this as any, "timeouts", true);
  public get timeouts() {
    return this.__timeoutsOutput;
  }
  public putTimeouts(value: KustoDatabasePrincipalAssignmentTimeouts | undefined) {
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
      cluster_name: cdktf.stringToTerraform(this._clusterName),
      database_name: cdktf.stringToTerraform(this._databaseName),
      name: cdktf.stringToTerraform(this._name),
      principal_id: cdktf.stringToTerraform(this._principalId),
      principal_type: cdktf.stringToTerraform(this._principalType),
      resource_group_name: cdktf.stringToTerraform(this._resourceGroupName),
      role: cdktf.stringToTerraform(this._role),
      tenant_id: cdktf.stringToTerraform(this._tenantId),
      timeouts: kustoDatabasePrincipalAssignmentTimeoutsToTerraform(this._timeouts),
    };
  }
}
