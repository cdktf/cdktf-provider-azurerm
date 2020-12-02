// https://www.terraform.io/docs/providers/azurerm/r/kusto_cluster_customer_managed_key.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import { TerraformResource } from 'cdktf';
import { TerraformMetaArguments } from 'cdktf';

// Configuration

export interface KustoClusterCustomerManagedKeyConfig extends TerraformMetaArguments {
  readonly clusterId: string;
  readonly keyName: string;
  readonly keyVaultId: string;
  readonly keyVersion: string;
  /** timeouts block */
  readonly timeouts?: KustoClusterCustomerManagedKeyTimeouts;
}
export interface KustoClusterCustomerManagedKeyTimeouts {
  readonly create?: string;
  readonly delete?: string;
  readonly read?: string;
  readonly update?: string;
}

// Resource

export class KustoClusterCustomerManagedKey extends TerraformResource {

  // ===========
  // INITIALIZER
  // ===========

  public constructor(scope: Construct, id: string, config: KustoClusterCustomerManagedKeyConfig) {
    super(scope, id, {
      terraformResourceType: 'azurerm_kusto_cluster_customer_managed_key',
      terraformGeneratorMetadata: {
        providerName: 'azurerm'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle
    });
    this._clusterId = config.clusterId;
    this._keyName = config.keyName;
    this._keyVaultId = config.keyVaultId;
    this._keyVersion = config.keyVersion;
    this._timeouts = config.timeouts;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // cluster_id - computed: false, optional: false, required: true
  private _clusterId: string;
  public get clusterId() {
    return this.getStringAttribute('cluster_id');
  }
  public set clusterId(value: string) {
    this._clusterId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get clusterIdInput() {
    return this._clusterId
  }

  // id - computed: true, optional: true, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // key_name - computed: false, optional: false, required: true
  private _keyName: string;
  public get keyName() {
    return this.getStringAttribute('key_name');
  }
  public set keyName(value: string) {
    this._keyName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get keyNameInput() {
    return this._keyName
  }

  // key_vault_id - computed: false, optional: false, required: true
  private _keyVaultId: string;
  public get keyVaultId() {
    return this.getStringAttribute('key_vault_id');
  }
  public set keyVaultId(value: string) {
    this._keyVaultId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get keyVaultIdInput() {
    return this._keyVaultId
  }

  // key_version - computed: false, optional: false, required: true
  private _keyVersion: string;
  public get keyVersion() {
    return this.getStringAttribute('key_version');
  }
  public set keyVersion(value: string) {
    this._keyVersion = value;
  }
  // Temporarily expose input value. Use with caution.
  public get keyVersionInput() {
    return this._keyVersion
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts?: KustoClusterCustomerManagedKeyTimeouts;
  public get timeouts() {
    return this.interpolationForAttribute('timeouts') as any;
  }
  public set timeouts(value: KustoClusterCustomerManagedKeyTimeouts ) {
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
      cluster_id: this._clusterId,
      key_name: this._keyName,
      key_vault_id: this._keyVaultId,
      key_version: this._keyVersion,
      timeouts: this._timeouts,
    };
  }
}
