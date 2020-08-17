// https://www.terraform.io/docs/providers/azurerm/r/cosmosdb_table.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import { TerraformResource } from 'cdktf';
import { TerraformMetaArguments } from 'cdktf';

// Configuration

export interface CosmosdbTableConfig extends TerraformMetaArguments {
  readonly accountName: string;
  readonly name: string;
  readonly resourceGroupName: string;
  readonly throughput?: number;
  /** timeouts block */
  readonly timeouts?: CosmosdbTableTimeouts;
}
export interface CosmosdbTableTimeouts {
  readonly create?: string;
  readonly delete?: string;
  readonly read?: string;
  readonly update?: string;
}

// Resource

export class CosmosdbTable extends TerraformResource {

  // ===========
  // INITIALIZER
  // ===========

  public constructor(scope: Construct, id: string, config: CosmosdbTableConfig) {
    super(scope, id, {
      terraformResourceType: 'azurerm_cosmosdb_table',
      terraformGeneratorMetadata: {
        providerName: 'azurerm'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle
    });
    this._accountName = config.accountName;
    this._name = config.name;
    this._resourceGroupName = config.resourceGroupName;
    this._throughput = config.throughput;
    this._timeouts = config.timeouts;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // account_name - computed: false, optional: false, required: true
  private _accountName: string;
  public get accountName() {
    return this._accountName;
  }
  public set accountName(value: string) {
    this._accountName = value;
  }

  // id - computed: true, optional: true, required: false
  private _id?: string;
  public get id() {
    return this._id ?? this.getStringAttribute('id');
  }
  public set id(value: string | undefined) {
    this._id = value;
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

  // throughput - computed: true, optional: true, required: false
  private _throughput?: number;
  public get throughput() {
    return this._throughput ?? this.getNumberAttribute('throughput');
  }
  public set throughput(value: number | undefined) {
    this._throughput = value;
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts?: CosmosdbTableTimeouts;
  public get timeouts() {
    return this._timeouts;
  }
  public set timeouts(value: CosmosdbTableTimeouts | undefined) {
    this._timeouts = value;
  }

  // =========
  // SYNTHESIS
  // =========

  public synthesizeAttributes(): { [name: string]: any } {
    return {
      account_name: this._accountName,
      name: this._name,
      resource_group_name: this._resourceGroupName,
      throughput: this._throughput,
      timeouts: this._timeouts,
    };
  }
}
