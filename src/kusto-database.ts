// https://www.terraform.io/docs/providers/azurerm/r/kusto_database.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import { TerraformResource } from 'cdktf';
import { TerraformMetaArguments } from 'cdktf';

// Configuration

export interface KustoDatabaseConfig extends TerraformMetaArguments {
  readonly clusterName: string;
  readonly hotCachePeriod?: string;
  readonly location: string;
  readonly name: string;
  readonly resourceGroupName: string;
  readonly softDeletePeriod?: string;
  /** timeouts block */
  readonly timeouts?: KustoDatabaseTimeouts;
}
export interface KustoDatabaseTimeouts {
  readonly create?: string;
  readonly delete?: string;
  readonly read?: string;
  readonly update?: string;
}

// Resource

export class KustoDatabase extends TerraformResource {

  // ===========
  // INITIALIZER
  // ===========

  public constructor(scope: Construct, id: string, config: KustoDatabaseConfig) {
    super(scope, id, {
      terraformResourceType: 'azurerm_kusto_database',
      terraformGeneratorMetadata: {
        providerName: 'azurerm'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle
    });
    this._clusterName = config.clusterName;
    this._hotCachePeriod = config.hotCachePeriod;
    this._location = config.location;
    this._name = config.name;
    this._resourceGroupName = config.resourceGroupName;
    this._softDeletePeriod = config.softDeletePeriod;
    this._timeouts = config.timeouts;
  }

  // ==========
  // ATTRIBUTES
  // ==========

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

  // hot_cache_period - computed: false, optional: true, required: false
  private _hotCachePeriod?: string;
  public get hotCachePeriod() {
    return this.getStringAttribute('hot_cache_period');
  }
  public set hotCachePeriod(value: string ) {
    this._hotCachePeriod = value;
  }
  public resetHotCachePeriod() {
    this._hotCachePeriod = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get hotCachePeriodInput() {
    return this._hotCachePeriod
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

  // size - computed: true, optional: false, required: false
  public get size() {
    return this.getNumberAttribute('size');
  }

  // soft_delete_period - computed: false, optional: true, required: false
  private _softDeletePeriod?: string;
  public get softDeletePeriod() {
    return this.getStringAttribute('soft_delete_period');
  }
  public set softDeletePeriod(value: string ) {
    this._softDeletePeriod = value;
  }
  public resetSoftDeletePeriod() {
    this._softDeletePeriod = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get softDeletePeriodInput() {
    return this._softDeletePeriod
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts?: KustoDatabaseTimeouts;
  public get timeouts() {
    return this.interpolationForAttribute('timeouts') as any;
  }
  public set timeouts(value: KustoDatabaseTimeouts ) {
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
      hot_cache_period: this._hotCachePeriod,
      location: this._location,
      name: this._name,
      resource_group_name: this._resourceGroupName,
      soft_delete_period: this._softDeletePeriod,
      timeouts: this._timeouts,
    };
  }
}
