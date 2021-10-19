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
  * sharing block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/kusto_attached_database_configuration.html#sharing KustoAttachedDatabaseConfiguration#sharing}
  */
  readonly sharing?: KustoAttachedDatabaseConfigurationSharing;
  /**
  * timeouts block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/kusto_attached_database_configuration.html#timeouts KustoAttachedDatabaseConfiguration#timeouts}
  */
  readonly timeouts?: KustoAttachedDatabaseConfigurationTimeouts;
}
export interface KustoAttachedDatabaseConfigurationSharing {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/kusto_attached_database_configuration.html#external_tables_to_exclude KustoAttachedDatabaseConfiguration#external_tables_to_exclude}
  */
  readonly externalTablesToExclude?: string[];
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/kusto_attached_database_configuration.html#external_tables_to_include KustoAttachedDatabaseConfiguration#external_tables_to_include}
  */
  readonly externalTablesToInclude?: string[];
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/kusto_attached_database_configuration.html#materialized_views_to_exclude KustoAttachedDatabaseConfiguration#materialized_views_to_exclude}
  */
  readonly materializedViewsToExclude?: string[];
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/kusto_attached_database_configuration.html#materialized_views_to_include KustoAttachedDatabaseConfiguration#materialized_views_to_include}
  */
  readonly materializedViewsToInclude?: string[];
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/kusto_attached_database_configuration.html#tables_to_exclude KustoAttachedDatabaseConfiguration#tables_to_exclude}
  */
  readonly tablesToExclude?: string[];
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/kusto_attached_database_configuration.html#tables_to_include KustoAttachedDatabaseConfiguration#tables_to_include}
  */
  readonly tablesToInclude?: string[];
}

function kustoAttachedDatabaseConfigurationSharingToTerraform(struct?: KustoAttachedDatabaseConfigurationSharingOutputReference | KustoAttachedDatabaseConfigurationSharing): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    external_tables_to_exclude: cdktf.listMapper(cdktf.stringToTerraform)(struct!.externalTablesToExclude),
    external_tables_to_include: cdktf.listMapper(cdktf.stringToTerraform)(struct!.externalTablesToInclude),
    materialized_views_to_exclude: cdktf.listMapper(cdktf.stringToTerraform)(struct!.materializedViewsToExclude),
    materialized_views_to_include: cdktf.listMapper(cdktf.stringToTerraform)(struct!.materializedViewsToInclude),
    tables_to_exclude: cdktf.listMapper(cdktf.stringToTerraform)(struct!.tablesToExclude),
    tables_to_include: cdktf.listMapper(cdktf.stringToTerraform)(struct!.tablesToInclude),
  }
}

export class KustoAttachedDatabaseConfigurationSharingOutputReference extends cdktf.ComplexObject {
  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param isSingleItem True if this is a block, false if it's a list
  */
  public constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean) {
    super(terraformResource, terraformAttribute, isSingleItem);
  }

  // external_tables_to_exclude - computed: false, optional: true, required: false
  private _externalTablesToExclude?: string[] | undefined; 
  public get externalTablesToExclude() {
    return this.getListAttribute('external_tables_to_exclude');
  }
  public set externalTablesToExclude(value: string[] | undefined) {
    this._externalTablesToExclude = value;
  }
  public resetExternalTablesToExclude() {
    this._externalTablesToExclude = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get externalTablesToExcludeInput() {
    return this._externalTablesToExclude
  }

  // external_tables_to_include - computed: false, optional: true, required: false
  private _externalTablesToInclude?: string[] | undefined; 
  public get externalTablesToInclude() {
    return this.getListAttribute('external_tables_to_include');
  }
  public set externalTablesToInclude(value: string[] | undefined) {
    this._externalTablesToInclude = value;
  }
  public resetExternalTablesToInclude() {
    this._externalTablesToInclude = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get externalTablesToIncludeInput() {
    return this._externalTablesToInclude
  }

  // materialized_views_to_exclude - computed: false, optional: true, required: false
  private _materializedViewsToExclude?: string[] | undefined; 
  public get materializedViewsToExclude() {
    return this.getListAttribute('materialized_views_to_exclude');
  }
  public set materializedViewsToExclude(value: string[] | undefined) {
    this._materializedViewsToExclude = value;
  }
  public resetMaterializedViewsToExclude() {
    this._materializedViewsToExclude = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get materializedViewsToExcludeInput() {
    return this._materializedViewsToExclude
  }

  // materialized_views_to_include - computed: false, optional: true, required: false
  private _materializedViewsToInclude?: string[] | undefined; 
  public get materializedViewsToInclude() {
    return this.getListAttribute('materialized_views_to_include');
  }
  public set materializedViewsToInclude(value: string[] | undefined) {
    this._materializedViewsToInclude = value;
  }
  public resetMaterializedViewsToInclude() {
    this._materializedViewsToInclude = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get materializedViewsToIncludeInput() {
    return this._materializedViewsToInclude
  }

  // tables_to_exclude - computed: false, optional: true, required: false
  private _tablesToExclude?: string[] | undefined; 
  public get tablesToExclude() {
    return this.getListAttribute('tables_to_exclude');
  }
  public set tablesToExclude(value: string[] | undefined) {
    this._tablesToExclude = value;
  }
  public resetTablesToExclude() {
    this._tablesToExclude = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tablesToExcludeInput() {
    return this._tablesToExclude
  }

  // tables_to_include - computed: false, optional: true, required: false
  private _tablesToInclude?: string[] | undefined; 
  public get tablesToInclude() {
    return this.getListAttribute('tables_to_include');
  }
  public set tablesToInclude(value: string[] | undefined) {
    this._tablesToInclude = value;
  }
  public resetTablesToInclude() {
    this._tablesToInclude = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tablesToIncludeInput() {
    return this._tablesToInclude
  }
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

function kustoAttachedDatabaseConfigurationTimeoutsToTerraform(struct?: KustoAttachedDatabaseConfigurationTimeoutsOutputReference | KustoAttachedDatabaseConfigurationTimeouts): any {
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

export class KustoAttachedDatabaseConfigurationTimeoutsOutputReference extends cdktf.ComplexObject {
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
    this._sharing = config.sharing;
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

  // cluster_resource_id - computed: false, optional: false, required: true
  private _clusterResourceId?: string; 
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

  // default_principal_modification_kind - computed: false, optional: true, required: false
  private _defaultPrincipalModificationKind?: string | undefined; 
  public get defaultPrincipalModificationKind() {
    return this.getStringAttribute('default_principal_modification_kind');
  }
  public set defaultPrincipalModificationKind(value: string | undefined) {
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
  private _location?: string; 
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

  // sharing - computed: false, optional: true, required: false
  private _sharing?: KustoAttachedDatabaseConfigurationSharing | undefined; 
  private __sharingOutput = new KustoAttachedDatabaseConfigurationSharingOutputReference(this as any, "sharing", true);
  public get sharing() {
    return this.__sharingOutput;
  }
  public putSharing(value: KustoAttachedDatabaseConfigurationSharing | undefined) {
    this._sharing = value;
  }
  public resetSharing() {
    this._sharing = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sharingInput() {
    return this._sharing
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts?: KustoAttachedDatabaseConfigurationTimeouts | undefined; 
  private __timeoutsOutput = new KustoAttachedDatabaseConfigurationTimeoutsOutputReference(this as any, "timeouts", true);
  public get timeouts() {
    return this.__timeoutsOutput;
  }
  public putTimeouts(value: KustoAttachedDatabaseConfigurationTimeouts | undefined) {
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
      sharing: kustoAttachedDatabaseConfigurationSharingToTerraform(this._sharing),
      timeouts: kustoAttachedDatabaseConfigurationTimeoutsToTerraform(this._timeouts),
    };
  }
}
