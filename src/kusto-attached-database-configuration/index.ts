// https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/kusto_attached_database_configuration
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface KustoAttachedDatabaseConfigurationConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/kusto_attached_database_configuration#cluster_name KustoAttachedDatabaseConfiguration#cluster_name}
  */
  readonly clusterName: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/kusto_attached_database_configuration#cluster_resource_id KustoAttachedDatabaseConfiguration#cluster_resource_id}
  */
  readonly clusterResourceId: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/kusto_attached_database_configuration#database_name KustoAttachedDatabaseConfiguration#database_name}
  */
  readonly databaseName: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/kusto_attached_database_configuration#default_principal_modification_kind KustoAttachedDatabaseConfiguration#default_principal_modification_kind}
  */
  readonly defaultPrincipalModificationKind?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/kusto_attached_database_configuration#id KustoAttachedDatabaseConfiguration#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/kusto_attached_database_configuration#location KustoAttachedDatabaseConfiguration#location}
  */
  readonly location: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/kusto_attached_database_configuration#name KustoAttachedDatabaseConfiguration#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/kusto_attached_database_configuration#resource_group_name KustoAttachedDatabaseConfiguration#resource_group_name}
  */
  readonly resourceGroupName: string;
  /**
  * sharing block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/kusto_attached_database_configuration#sharing KustoAttachedDatabaseConfiguration#sharing}
  */
  readonly sharing?: KustoAttachedDatabaseConfigurationSharing;
  /**
  * timeouts block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/kusto_attached_database_configuration#timeouts KustoAttachedDatabaseConfiguration#timeouts}
  */
  readonly timeouts?: KustoAttachedDatabaseConfigurationTimeouts;
}
export interface KustoAttachedDatabaseConfigurationSharing {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/kusto_attached_database_configuration#external_tables_to_exclude KustoAttachedDatabaseConfiguration#external_tables_to_exclude}
  */
  readonly externalTablesToExclude?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/kusto_attached_database_configuration#external_tables_to_include KustoAttachedDatabaseConfiguration#external_tables_to_include}
  */
  readonly externalTablesToInclude?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/kusto_attached_database_configuration#materialized_views_to_exclude KustoAttachedDatabaseConfiguration#materialized_views_to_exclude}
  */
  readonly materializedViewsToExclude?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/kusto_attached_database_configuration#materialized_views_to_include KustoAttachedDatabaseConfiguration#materialized_views_to_include}
  */
  readonly materializedViewsToInclude?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/kusto_attached_database_configuration#tables_to_exclude KustoAttachedDatabaseConfiguration#tables_to_exclude}
  */
  readonly tablesToExclude?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/kusto_attached_database_configuration#tables_to_include KustoAttachedDatabaseConfiguration#tables_to_include}
  */
  readonly tablesToInclude?: string[];
}

export function kustoAttachedDatabaseConfigurationSharingToTerraform(struct?: KustoAttachedDatabaseConfigurationSharingOutputReference | KustoAttachedDatabaseConfigurationSharing): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    external_tables_to_exclude: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.externalTablesToExclude),
    external_tables_to_include: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.externalTablesToInclude),
    materialized_views_to_exclude: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.materializedViewsToExclude),
    materialized_views_to_include: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.materializedViewsToInclude),
    tables_to_exclude: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.tablesToExclude),
    tables_to_include: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.tablesToInclude),
  }
}


export function kustoAttachedDatabaseConfigurationSharingToHclTerraform(struct?: KustoAttachedDatabaseConfigurationSharingOutputReference | KustoAttachedDatabaseConfigurationSharing): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    external_tables_to_exclude: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.externalTablesToExclude),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
    external_tables_to_include: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.externalTablesToInclude),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
    materialized_views_to_exclude: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.materializedViewsToExclude),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
    materialized_views_to_include: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.materializedViewsToInclude),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
    tables_to_exclude: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.tablesToExclude),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
    tables_to_include: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.tablesToInclude),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class KustoAttachedDatabaseConfigurationSharingOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): KustoAttachedDatabaseConfigurationSharing | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._externalTablesToExclude !== undefined) {
      hasAnyValues = true;
      internalValueResult.externalTablesToExclude = this._externalTablesToExclude;
    }
    if (this._externalTablesToInclude !== undefined) {
      hasAnyValues = true;
      internalValueResult.externalTablesToInclude = this._externalTablesToInclude;
    }
    if (this._materializedViewsToExclude !== undefined) {
      hasAnyValues = true;
      internalValueResult.materializedViewsToExclude = this._materializedViewsToExclude;
    }
    if (this._materializedViewsToInclude !== undefined) {
      hasAnyValues = true;
      internalValueResult.materializedViewsToInclude = this._materializedViewsToInclude;
    }
    if (this._tablesToExclude !== undefined) {
      hasAnyValues = true;
      internalValueResult.tablesToExclude = this._tablesToExclude;
    }
    if (this._tablesToInclude !== undefined) {
      hasAnyValues = true;
      internalValueResult.tablesToInclude = this._tablesToInclude;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: KustoAttachedDatabaseConfigurationSharing | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._externalTablesToExclude = undefined;
      this._externalTablesToInclude = undefined;
      this._materializedViewsToExclude = undefined;
      this._materializedViewsToInclude = undefined;
      this._tablesToExclude = undefined;
      this._tablesToInclude = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._externalTablesToExclude = value.externalTablesToExclude;
      this._externalTablesToInclude = value.externalTablesToInclude;
      this._materializedViewsToExclude = value.materializedViewsToExclude;
      this._materializedViewsToInclude = value.materializedViewsToInclude;
      this._tablesToExclude = value.tablesToExclude;
      this._tablesToInclude = value.tablesToInclude;
    }
  }

  // external_tables_to_exclude - computed: false, optional: true, required: false
  private _externalTablesToExclude?: string[]; 
  public get externalTablesToExclude() {
    return cdktf.Fn.tolist(this.getListAttribute('external_tables_to_exclude'));
  }
  public set externalTablesToExclude(value: string[]) {
    this._externalTablesToExclude = value;
  }
  public resetExternalTablesToExclude() {
    this._externalTablesToExclude = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get externalTablesToExcludeInput() {
    return this._externalTablesToExclude;
  }

  // external_tables_to_include - computed: false, optional: true, required: false
  private _externalTablesToInclude?: string[]; 
  public get externalTablesToInclude() {
    return cdktf.Fn.tolist(this.getListAttribute('external_tables_to_include'));
  }
  public set externalTablesToInclude(value: string[]) {
    this._externalTablesToInclude = value;
  }
  public resetExternalTablesToInclude() {
    this._externalTablesToInclude = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get externalTablesToIncludeInput() {
    return this._externalTablesToInclude;
  }

  // materialized_views_to_exclude - computed: false, optional: true, required: false
  private _materializedViewsToExclude?: string[]; 
  public get materializedViewsToExclude() {
    return cdktf.Fn.tolist(this.getListAttribute('materialized_views_to_exclude'));
  }
  public set materializedViewsToExclude(value: string[]) {
    this._materializedViewsToExclude = value;
  }
  public resetMaterializedViewsToExclude() {
    this._materializedViewsToExclude = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get materializedViewsToExcludeInput() {
    return this._materializedViewsToExclude;
  }

  // materialized_views_to_include - computed: false, optional: true, required: false
  private _materializedViewsToInclude?: string[]; 
  public get materializedViewsToInclude() {
    return cdktf.Fn.tolist(this.getListAttribute('materialized_views_to_include'));
  }
  public set materializedViewsToInclude(value: string[]) {
    this._materializedViewsToInclude = value;
  }
  public resetMaterializedViewsToInclude() {
    this._materializedViewsToInclude = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get materializedViewsToIncludeInput() {
    return this._materializedViewsToInclude;
  }

  // tables_to_exclude - computed: false, optional: true, required: false
  private _tablesToExclude?: string[]; 
  public get tablesToExclude() {
    return cdktf.Fn.tolist(this.getListAttribute('tables_to_exclude'));
  }
  public set tablesToExclude(value: string[]) {
    this._tablesToExclude = value;
  }
  public resetTablesToExclude() {
    this._tablesToExclude = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tablesToExcludeInput() {
    return this._tablesToExclude;
  }

  // tables_to_include - computed: false, optional: true, required: false
  private _tablesToInclude?: string[]; 
  public get tablesToInclude() {
    return cdktf.Fn.tolist(this.getListAttribute('tables_to_include'));
  }
  public set tablesToInclude(value: string[]) {
    this._tablesToInclude = value;
  }
  public resetTablesToInclude() {
    this._tablesToInclude = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tablesToIncludeInput() {
    return this._tablesToInclude;
  }
}
export interface KustoAttachedDatabaseConfigurationTimeouts {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/kusto_attached_database_configuration#create KustoAttachedDatabaseConfiguration#create}
  */
  readonly create?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/kusto_attached_database_configuration#delete KustoAttachedDatabaseConfiguration#delete}
  */
  readonly delete?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/kusto_attached_database_configuration#read KustoAttachedDatabaseConfiguration#read}
  */
  readonly read?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/kusto_attached_database_configuration#update KustoAttachedDatabaseConfiguration#update}
  */
  readonly update?: string;
}

export function kustoAttachedDatabaseConfigurationTimeoutsToTerraform(struct?: KustoAttachedDatabaseConfigurationTimeouts | cdktf.IResolvable): any {
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


export function kustoAttachedDatabaseConfigurationTimeoutsToHclTerraform(struct?: KustoAttachedDatabaseConfigurationTimeouts | cdktf.IResolvable): any {
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

export class KustoAttachedDatabaseConfigurationTimeoutsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): KustoAttachedDatabaseConfigurationTimeouts | cdktf.IResolvable | undefined {
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

  public set internalValue(value: KustoAttachedDatabaseConfigurationTimeouts | cdktf.IResolvable | undefined) {
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
* Represents a {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/kusto_attached_database_configuration azurerm_kusto_attached_database_configuration}
*/
export class KustoAttachedDatabaseConfiguration extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "azurerm_kusto_attached_database_configuration";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a KustoAttachedDatabaseConfiguration resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the KustoAttachedDatabaseConfiguration to import
  * @param importFromId The id of the existing KustoAttachedDatabaseConfiguration that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/kusto_attached_database_configuration#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the KustoAttachedDatabaseConfiguration to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "azurerm_kusto_attached_database_configuration", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/kusto_attached_database_configuration azurerm_kusto_attached_database_configuration} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options KustoAttachedDatabaseConfigurationConfig
  */
  public constructor(scope: Construct, id: string, config: KustoAttachedDatabaseConfigurationConfig) {
    super(scope, id, {
      terraformResourceType: 'azurerm_kusto_attached_database_configuration',
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
    this._clusterName = config.clusterName;
    this._clusterResourceId = config.clusterResourceId;
    this._databaseName = config.databaseName;
    this._defaultPrincipalModificationKind = config.defaultPrincipalModificationKind;
    this._id = config.id;
    this._location = config.location;
    this._name = config.name;
    this._resourceGroupName = config.resourceGroupName;
    this._sharing.internalValue = config.sharing;
    this._timeouts.internalValue = config.timeouts;
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
    return this._clusterName;
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
    return this._clusterResourceId;
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
    return this._databaseName;
  }

  // default_principal_modification_kind - computed: false, optional: true, required: false
  private _defaultPrincipalModificationKind?: string; 
  public get defaultPrincipalModificationKind() {
    return this.getStringAttribute('default_principal_modification_kind');
  }
  public set defaultPrincipalModificationKind(value: string) {
    this._defaultPrincipalModificationKind = value;
  }
  public resetDefaultPrincipalModificationKind() {
    this._defaultPrincipalModificationKind = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get defaultPrincipalModificationKindInput() {
    return this._defaultPrincipalModificationKind;
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
    return this._location;
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
    return this._resourceGroupName;
  }

  // sharing - computed: false, optional: true, required: false
  private _sharing = new KustoAttachedDatabaseConfigurationSharingOutputReference(this, "sharing");
  public get sharing() {
    return this._sharing;
  }
  public putSharing(value: KustoAttachedDatabaseConfigurationSharing) {
    this._sharing.internalValue = value;
  }
  public resetSharing() {
    this._sharing.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sharingInput() {
    return this._sharing.internalValue;
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts = new KustoAttachedDatabaseConfigurationTimeoutsOutputReference(this, "timeouts");
  public get timeouts() {
    return this._timeouts;
  }
  public putTimeouts(value: KustoAttachedDatabaseConfigurationTimeouts) {
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
      cluster_name: cdktf.stringToTerraform(this._clusterName),
      cluster_resource_id: cdktf.stringToTerraform(this._clusterResourceId),
      database_name: cdktf.stringToTerraform(this._databaseName),
      default_principal_modification_kind: cdktf.stringToTerraform(this._defaultPrincipalModificationKind),
      id: cdktf.stringToTerraform(this._id),
      location: cdktf.stringToTerraform(this._location),
      name: cdktf.stringToTerraform(this._name),
      resource_group_name: cdktf.stringToTerraform(this._resourceGroupName),
      sharing: kustoAttachedDatabaseConfigurationSharingToTerraform(this._sharing.internalValue),
      timeouts: kustoAttachedDatabaseConfigurationTimeoutsToTerraform(this._timeouts.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      cluster_name: {
        value: cdktf.stringToHclTerraform(this._clusterName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      cluster_resource_id: {
        value: cdktf.stringToHclTerraform(this._clusterResourceId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      database_name: {
        value: cdktf.stringToHclTerraform(this._databaseName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      default_principal_modification_kind: {
        value: cdktf.stringToHclTerraform(this._defaultPrincipalModificationKind),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      id: {
        value: cdktf.stringToHclTerraform(this._id),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      location: {
        value: cdktf.stringToHclTerraform(this._location),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      name: {
        value: cdktf.stringToHclTerraform(this._name),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      resource_group_name: {
        value: cdktf.stringToHclTerraform(this._resourceGroupName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      sharing: {
        value: kustoAttachedDatabaseConfigurationSharingToHclTerraform(this._sharing.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "KustoAttachedDatabaseConfigurationSharingList",
      },
      timeouts: {
        value: kustoAttachedDatabaseConfigurationTimeoutsToHclTerraform(this._timeouts.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "KustoAttachedDatabaseConfigurationTimeouts",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
