// https://www.terraform.io/docs/providers/azurerm/r/kusto_attached_database_configuration.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface KustoAttachedDatabaseConfigurationConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/kusto_attached_database_configuration.html#cluster_name KustoAttachedDatabaseConfiguration#cluster_name}
  */
  readonly clusterName: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/kusto_attached_database_configuration.html#cluster_resource_id KustoAttachedDatabaseConfiguration#cluster_resource_id}
  */
  readonly clusterResourceId: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/kusto_attached_database_configuration.html#database_name KustoAttachedDatabaseConfiguration#database_name}
  */
  readonly databaseName: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/kusto_attached_database_configuration.html#default_principal_modification_kind KustoAttachedDatabaseConfiguration#default_principal_modification_kind}
  */
  readonly defaultPrincipalModificationKind?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/kusto_attached_database_configuration.html#location KustoAttachedDatabaseConfiguration#location}
  */
  readonly location: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/kusto_attached_database_configuration.html#name KustoAttachedDatabaseConfiguration#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/kusto_attached_database_configuration.html#resource_group_name KustoAttachedDatabaseConfiguration#resource_group_name}
  */
  readonly resourceGroupName: string;
  /**
  * timeouts block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/kusto_attached_database_configuration.html#timeouts KustoAttachedDatabaseConfiguration#timeouts}
  */
  readonly timeouts?: KustoAttachedDatabaseConfigurationTimeouts;
}
export interface KustoAttachedDatabaseConfigurationTimeouts {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/kusto_attached_database_configuration.html#create KustoAttachedDatabaseConfiguration#create}
  */
  readonly create?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/kusto_attached_database_configuration.html#delete KustoAttachedDatabaseConfiguration#delete}
  */
  readonly delete?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/kusto_attached_database_configuration.html#read KustoAttachedDatabaseConfiguration#read}
  */
  readonly read?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/kusto_attached_database_configuration.html#update KustoAttachedDatabaseConfiguration#update}
  */
  readonly update?: string;
}

function kustoAttachedDatabaseConfigurationTimeoutsToTerraform(struct?: KustoAttachedDatabaseConfigurationTimeouts): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    create: cdktf.stringToTerraform(struct!.create),
    delete: cdktf.stringToTerraform(struct!.delete),
    read: cdktf.stringToTerraform(struct!.read),
    update: cdktf.stringToTerraform(struct!.update),
  }
}


/**
* Represents a {@link https://www.terraform.io/docs/providers/azurerm/r/kusto_attached_database_configuration.html azurerm_kusto_attached_database_configuration}
*/
export class KustoAttachedDatabaseConfiguration extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType: string = "azurerm_kusto_attached_database_configuration";

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://www.terraform.io/docs/providers/azurerm/r/kusto_attached_database_configuration.html azurerm_kusto_attached_database_configuration} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options KustoAttachedDatabaseConfigurationConfig
  */
  public constructor(scope: Construct, id: string, config: KustoAttachedDatabaseConfigurationConfig) {
    super(scope, id, {
      terraformResourceType: 'azurerm_kusto_attached_database_configuration',
      terraformGeneratorMetadata: {
        providerName: 'azurerm'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle
    });
    this._clusterName = config.clusterName;
    this._clusterResourceId = config.clusterResourceId;
    this._databaseName = config.databaseName;
    this._defaultPrincipalModificationKind = config.defaultPrincipalModificationKind;
    this._location = config.location;
    this._name = config.name;
    this._resourceGroupName = config.resourceGroupName;
    this._timeouts = config.timeouts;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // attached_database_names - computed: true, optional: false, required: false
  public get attachedDatabaseNames() {
    return this.getListAttribute('attached_database_names');
  }

  // cluster_name - computed: false, optional: false, required: true
  private _clusterName: string;
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

  // cluster_resource_id - computed: false, optional: false, required: true
  private _clusterResourceId: string;
  public get clusterResourceId() {
    return this.getStringAttribute('cluster_resource_id');
  }
  public set clusterResourceId(value: string) {
    this._clusterResourceId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get clusterResourceIdInput() {
    return this._clusterResourceId
  }

  // database_name - computed: false, optional: false, required: true
  private _databaseName: string;
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

  // default_principal_modification_kind - computed: false, optional: true, required: false
  private _defaultPrincipalModificationKind?: string;
  public get defaultPrincipalModificationKind() {
    return this.getStringAttribute('default_principal_modification_kind');
  }
  public set defaultPrincipalModificationKind(value: string ) {
    this._defaultPrincipalModificationKind = value;
  }
  public resetDefaultPrincipalModificationKind() {
    this._defaultPrincipalModificationKind = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get defaultPrincipalModificationKindInput() {
    return this._defaultPrincipalModificationKind
  }

  // id - computed: true, optional: true, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // location - computed: false, optional: false, required: true
  private _location: string;
  public get location() {
    return this.getStringAttribute('location');
  }
  public set location(value: string) {
    this._location = value;
  }
  // Temporarily expose input value. Use with caution.
  public get locationInput() {
    return this._location
  }

  // name - computed: false, optional: false, required: true
  private _name: string;
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

  // resource_group_name - computed: false, optional: false, required: true
  private _resourceGroupName: string;
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

  // timeouts - computed: false, optional: true, required: false
  private _timeouts?: KustoAttachedDatabaseConfigurationTimeouts;
  public get timeouts() {
    return this.interpolationForAttribute('timeouts') as any;
  }
  public set timeouts(value: KustoAttachedDatabaseConfigurationTimeouts ) {
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
      cluster_resource_id: cdktf.stringToTerraform(this._clusterResourceId),
      database_name: cdktf.stringToTerraform(this._databaseName),
      default_principal_modification_kind: cdktf.stringToTerraform(this._defaultPrincipalModificationKind),
      location: cdktf.stringToTerraform(this._location),
      name: cdktf.stringToTerraform(this._name),
      resource_group_name: cdktf.stringToTerraform(this._resourceGroupName),
      timeouts: kustoAttachedDatabaseConfigurationTimeoutsToTerraform(this._timeouts),
    };
  }
}
