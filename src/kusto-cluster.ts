// https://www.terraform.io/docs/providers/azurerm/r/kusto_cluster.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import { TerraformResource } from 'cdktf';
import { TerraformMetaArguments } from 'cdktf';

// Configuration

export interface KustoClusterConfig extends TerraformMetaArguments {
  readonly location: string;
  readonly name: string;
  readonly resourceGroupName: string;
  readonly tags?: { [key: string]: string };
  /** sku block */
  readonly sku: KustoClusterSku[];
  /** timeouts block */
  readonly timeouts?: KustoClusterTimeouts;
}
export interface KustoClusterSku {
  readonly capacity: number;
  readonly name: string;
}
export interface KustoClusterTimeouts {
  readonly create?: string;
  readonly delete?: string;
  readonly read?: string;
  readonly update?: string;
}

// Resource

export class KustoCluster extends TerraformResource {

  // ===========
  // INITIALIZER
  // ===========

  public constructor(scope: Construct, id: string, config: KustoClusterConfig) {
    super(scope, id, {
      terraformResourceType: 'azurerm_kusto_cluster',
      terraformGeneratorMetadata: {
        providerName: 'azurerm'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle
    });
    this._location = config.location;
    this._name = config.name;
    this._resourceGroupName = config.resourceGroupName;
    this._tags = config.tags;
    this._sku = config.sku;
    this._timeouts = config.timeouts;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // data_ingestion_uri - computed: true, optional: false, required: true
  public get dataIngestionUri() {
    return this.getStringAttribute('data_ingestion_uri');
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

  // tags - computed: false, optional: true, required: false
  private _tags?: { [key: string]: string };
  public get tags() {
    return this._tags;
  }
  public set tags(value: { [key: string]: string } | undefined) {
    this._tags = value;
  }

  // uri - computed: true, optional: false, required: true
  public get uri() {
    return this.getStringAttribute('uri');
  }

  // sku - computed: false, optional: false, required: true
  private _sku: KustoClusterSku[];
  public get sku() {
    return this._sku;
  }
  public set sku(value: KustoClusterSku[]) {
    this._sku = value;
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts?: KustoClusterTimeouts;
  public get timeouts() {
    return this._timeouts;
  }
  public set timeouts(value: KustoClusterTimeouts | undefined) {
    this._timeouts = value;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      location: this._location,
      name: this._name,
      resource_group_name: this._resourceGroupName,
      tags: this._tags,
      sku: this._sku,
      timeouts: this._timeouts,
    };
  }
}
