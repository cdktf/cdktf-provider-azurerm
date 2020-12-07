// https://www.terraform.io/docs/providers/azurerm/r/cosmosdb_cassandra_keyspace.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface CosmosdbCassandraKeyspaceConfig extends cdktf.TerraformMetaArguments {
  readonly accountName: string;
  readonly name: string;
  readonly resourceGroupName: string;
  readonly throughput?: number;
  /** autoscale_settings block */
  readonly autoscaleSettings?: CosmosdbCassandraKeyspaceAutoscaleSettings[];
  /** timeouts block */
  readonly timeouts?: CosmosdbCassandraKeyspaceTimeouts;
}
export interface CosmosdbCassandraKeyspaceAutoscaleSettings {
  readonly maxThroughput?: number;
}

function cosmosdbCassandraKeyspaceAutoscaleSettingsToTerraform(struct?: CosmosdbCassandraKeyspaceAutoscaleSettings): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    max_throughput: cdktf.numberToTerraform(struct!.maxThroughput),
  }
}

export interface CosmosdbCassandraKeyspaceTimeouts {
  readonly create?: string;
  readonly delete?: string;
  readonly read?: string;
  readonly update?: string;
}

function cosmosdbCassandraKeyspaceTimeoutsToTerraform(struct?: CosmosdbCassandraKeyspaceTimeouts): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    create: cdktf.stringToTerraform(struct!.create),
    delete: cdktf.stringToTerraform(struct!.delete),
    read: cdktf.stringToTerraform(struct!.read),
    update: cdktf.stringToTerraform(struct!.update),
  }
}


// Resource

export class CosmosdbCassandraKeyspace extends cdktf.TerraformResource {

  // ===========
  // INITIALIZER
  // ===========

  public constructor(scope: Construct, id: string, config: CosmosdbCassandraKeyspaceConfig) {
    super(scope, id, {
      terraformResourceType: 'azurerm_cosmosdb_cassandra_keyspace',
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
    this._autoscaleSettings = config.autoscaleSettings;
    this._timeouts = config.timeouts;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // account_name - computed: false, optional: false, required: true
  private _accountName: string;
  public get accountName() {
    return this.getStringAttribute('account_name');
  }
  public set accountName(value: string) {
    this._accountName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get accountNameInput() {
    return this._accountName
  }

  // id - computed: true, optional: true, required: false
  public get id() {
    return this.getStringAttribute('id');
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

  // throughput - computed: true, optional: true, required: false
  private _throughput?: number;
  public get throughput() {
    return this.getNumberAttribute('throughput');
  }
  public set throughput(value: number) {
    this._throughput = value;
  }
  public resetThroughput() {
    this._throughput = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get throughputInput() {
    return this._throughput
  }

  // autoscale_settings - computed: false, optional: true, required: false
  private _autoscaleSettings?: CosmosdbCassandraKeyspaceAutoscaleSettings[];
  public get autoscaleSettings() {
    return this.interpolationForAttribute('autoscale_settings') as any;
  }
  public set autoscaleSettings(value: CosmosdbCassandraKeyspaceAutoscaleSettings[] ) {
    this._autoscaleSettings = value;
  }
  public resetAutoscaleSettings() {
    this._autoscaleSettings = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get autoscaleSettingsInput() {
    return this._autoscaleSettings
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts?: CosmosdbCassandraKeyspaceTimeouts;
  public get timeouts() {
    return this.interpolationForAttribute('timeouts') as any;
  }
  public set timeouts(value: CosmosdbCassandraKeyspaceTimeouts ) {
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
      account_name: cdktf.stringToTerraform(this._accountName),
      name: cdktf.stringToTerraform(this._name),
      resource_group_name: cdktf.stringToTerraform(this._resourceGroupName),
      throughput: cdktf.numberToTerraform(this._throughput),
      autoscale_settings: cdktf.listMapper(cosmosdbCassandraKeyspaceAutoscaleSettingsToTerraform)(this._autoscaleSettings),
      timeouts: cosmosdbCassandraKeyspaceTimeoutsToTerraform(this._timeouts),
    };
  }
}
