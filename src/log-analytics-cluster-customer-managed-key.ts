// https://www.terraform.io/docs/providers/azurerm/r/log_analytics_cluster_customer_managed_key.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface LogAnalyticsClusterCustomerManagedKeyConfig extends cdktf.TerraformMetaArguments {
  readonly keyVaultKeyId: string;
  readonly logAnalyticsClusterId: string;
  /** timeouts block */
  readonly timeouts?: LogAnalyticsClusterCustomerManagedKeyTimeouts;
}
export interface LogAnalyticsClusterCustomerManagedKeyTimeouts {
  readonly create?: string;
  readonly delete?: string;
  readonly read?: string;
  readonly update?: string;
}

function logAnalyticsClusterCustomerManagedKeyTimeoutsToTerraform(struct?: LogAnalyticsClusterCustomerManagedKeyTimeouts): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    create: cdktf.stringToTerraform(struct!.create),
    delete: cdktf.stringToTerraform(struct!.delete),
    read: cdktf.stringToTerraform(struct!.read),
    update: cdktf.stringToTerraform(struct!.update),
  }
}


// Resource

export class LogAnalyticsClusterCustomerManagedKey extends cdktf.TerraformResource {

  // ===========
  // INITIALIZER
  // ===========

  public constructor(scope: Construct, id: string, config: LogAnalyticsClusterCustomerManagedKeyConfig) {
    super(scope, id, {
      terraformResourceType: 'azurerm_log_analytics_cluster_customer_managed_key',
      terraformGeneratorMetadata: {
        providerName: 'azurerm'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle
    });
    this._keyVaultKeyId = config.keyVaultKeyId;
    this._logAnalyticsClusterId = config.logAnalyticsClusterId;
    this._timeouts = config.timeouts;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // id - computed: true, optional: true, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // key_vault_key_id - computed: false, optional: false, required: true
  private _keyVaultKeyId: string;
  public get keyVaultKeyId() {
    return this.getStringAttribute('key_vault_key_id');
  }
  public set keyVaultKeyId(value: string) {
    this._keyVaultKeyId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get keyVaultKeyIdInput() {
    return this._keyVaultKeyId
  }

  // log_analytics_cluster_id - computed: false, optional: false, required: true
  private _logAnalyticsClusterId: string;
  public get logAnalyticsClusterId() {
    return this.getStringAttribute('log_analytics_cluster_id');
  }
  public set logAnalyticsClusterId(value: string) {
    this._logAnalyticsClusterId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get logAnalyticsClusterIdInput() {
    return this._logAnalyticsClusterId
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts?: LogAnalyticsClusterCustomerManagedKeyTimeouts;
  public get timeouts() {
    return this.interpolationForAttribute('timeouts') as any;
  }
  public set timeouts(value: LogAnalyticsClusterCustomerManagedKeyTimeouts ) {
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
      key_vault_key_id: cdktf.stringToTerraform(this._keyVaultKeyId),
      log_analytics_cluster_id: cdktf.stringToTerraform(this._logAnalyticsClusterId),
      timeouts: logAnalyticsClusterCustomerManagedKeyTimeoutsToTerraform(this._timeouts),
    };
  }
}
