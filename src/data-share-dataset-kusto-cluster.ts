// https://www.terraform.io/docs/providers/azurerm/r/data_share_dataset_kusto_cluster.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import { TerraformResource } from 'cdktf';
import { TerraformMetaArguments } from 'cdktf';

// Configuration

export interface DataShareDatasetKustoClusterConfig extends TerraformMetaArguments {
  readonly kustoClusterId: string;
  readonly name: string;
  readonly shareId: string;
  /** timeouts block */
  readonly timeouts?: DataShareDatasetKustoClusterTimeouts;
}
export interface DataShareDatasetKustoClusterTimeouts {
  readonly create?: string;
  readonly delete?: string;
  readonly read?: string;
}

// Resource

export class DataShareDatasetKustoCluster extends TerraformResource {

  // ===========
  // INITIALIZER
  // ===========

  public constructor(scope: Construct, id: string, config: DataShareDatasetKustoClusterConfig) {
    super(scope, id, {
      terraformResourceType: 'azurerm_data_share_dataset_kusto_cluster',
      terraformGeneratorMetadata: {
        providerName: 'azurerm'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle
    });
    this._kustoClusterId = config.kustoClusterId;
    this._name = config.name;
    this._shareId = config.shareId;
    this._timeouts = config.timeouts;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // display_name - computed: true, optional: false, required: false
  public get displayName() {
    return this.getStringAttribute('display_name');
  }

  // id - computed: true, optional: true, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // kusto_cluster_id - computed: false, optional: false, required: true
  private _kustoClusterId: string;
  public get kustoClusterId() {
    return this.getStringAttribute('kusto_cluster_id');
  }
  public set kustoClusterId(value: string) {
    this._kustoClusterId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get kustoClusterIdInput() {
    return this._kustoClusterId
  }

  // kusto_cluster_location - computed: true, optional: false, required: false
  public get kustoClusterLocation() {
    return this.getStringAttribute('kusto_cluster_location');
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

  // share_id - computed: false, optional: false, required: true
  private _shareId: string;
  public get shareId() {
    return this.getStringAttribute('share_id');
  }
  public set shareId(value: string) {
    this._shareId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get shareIdInput() {
    return this._shareId
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts?: DataShareDatasetKustoClusterTimeouts;
  public get timeouts() {
    return this.interpolationForAttribute('timeouts') as any;
  }
  public set timeouts(value: DataShareDatasetKustoClusterTimeouts ) {
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
      kusto_cluster_id: this._kustoClusterId,
      name: this._name,
      share_id: this._shareId,
      timeouts: this._timeouts,
    };
  }
}
