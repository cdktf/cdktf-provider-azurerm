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
    return this._clusterName;
  }
  public set clusterName(value: string) {
    this._clusterName = value;
  }

  // hot_cache_period - computed: false, optional: true, required: false
  private _hotCachePeriod?: string;
  public get hotCachePeriod() {
    return this._hotCachePeriod;
  }
  public set hotCachePeriod(value: string | undefined) {
    this._hotCachePeriod = value;
  }

  // id - computed: true, optional: true, required: false
  private _id?: string;
  public get id() {
    return this._id ?? this.getStringAttribute('id');
  }
  public set id(value: string | undefined) {
    this._id = value;
  }

  // location - computed: false, optional: false, required: true
  private _location: string;
  public get location() {
    return this._location;
  }
  public set location(value: string) {
    this._location = value;
  }

  // name - computed: false, optional: false, required: true
  private _name: string;
  public get name() {
    return this._name;
  }
  public set name(value: string) {
    this._name = value;
  }

  // resource_group_name - computed: false, optional: false, required: true
  private _resourceGroupName: string;
  public get resourceGroupName() {
    return this._resourceGroupName;
  }
  public set resourceGroupName(value: string) {
    this._resourceGroupName = value;
  }

  // size - computed: true, optional: false, required: true
  public get size() {
    return this.getNumberAttribute('size');
  }

  // soft_delete_period - computed: false, optional: true, required: false
  private _softDeletePeriod?: string;
  public get softDeletePeriod() {
    return this._softDeletePeriod;
  }
  public set softDeletePeriod(value: string | undefined) {
    this._softDeletePeriod = value;
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts?: KustoDatabaseTimeouts;
  public get timeouts() {
    return this._timeouts;
  }
  public set timeouts(value: KustoDatabaseTimeouts | undefined) {
    this._timeouts = value;
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
