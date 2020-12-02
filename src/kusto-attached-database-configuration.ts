// https://www.terraform.io/docs/providers/azurerm/r/kusto_attached_database_configuration.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import { TerraformResource } from 'cdktf';
import { TerraformMetaArguments } from 'cdktf';

// Configuration

export interface KustoAttachedDatabaseConfigurationConfig extends TerraformMetaArguments {
  readonly clusterName: string;
  readonly clusterResourceId: string;
  readonly databaseName: string;
  readonly defaultPrincipalModificationKind?: string;
  readonly location: string;
  readonly name: string;
  readonly resourceGroupName: string;
  /** timeouts block */
  readonly timeouts?: KustoAttachedDatabaseConfigurationTimeouts;
}
export interface KustoAttachedDatabaseConfigurationTimeouts {
  readonly create?: string;
  readonly delete?: string;
  readonly read?: string;
  readonly update?: string;
}

// Resource

export class KustoAttachedDatabaseConfiguration extends TerraformResource {

  // ===========
  // INITIALIZER
  // ===========

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
      cluster_name: this._clusterName,
      cluster_resource_id: this._clusterResourceId,
      database_name: this._databaseName,
      default_principal_modification_kind: this._defaultPrincipalModificationKind,
      location: this._location,
      name: this._name,
      resource_group_name: this._resourceGroupName,
      timeouts: this._timeouts,
    };
  }
}
