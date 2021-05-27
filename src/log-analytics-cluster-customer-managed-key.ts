// https://www.terraform.io/docs/providers/azurerm/r/log_analytics_cluster_customer_managed_key.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface LogAnalyticsClusterCustomerManagedKeyConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/log_analytics_cluster_customer_managed_key.html#key_vault_key_id LogAnalyticsClusterCustomerManagedKey#key_vault_key_id}
  */
  readonly keyVaultKeyId: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/log_analytics_cluster_customer_managed_key.html#log_analytics_cluster_id LogAnalyticsClusterCustomerManagedKey#log_analytics_cluster_id}
  */
  readonly logAnalyticsClusterId: string;
  /**
  * timeouts block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/log_analytics_cluster_customer_managed_key.html#timeouts LogAnalyticsClusterCustomerManagedKey#timeouts}
  */
  readonly timeouts?: LogAnalyticsClusterCustomerManagedKeyTimeouts;
}
export interface LogAnalyticsClusterCustomerManagedKeyTimeouts {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/log_analytics_cluster_customer_managed_key.html#create LogAnalyticsClusterCustomerManagedKey#create}
  */
  readonly create?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/log_analytics_cluster_customer_managed_key.html#delete LogAnalyticsClusterCustomerManagedKey#delete}
  */
  readonly delete?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/log_analytics_cluster_customer_managed_key.html#read LogAnalyticsClusterCustomerManagedKey#read}
  */
  readonly read?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/log_analytics_cluster_customer_managed_key.html#update LogAnalyticsClusterCustomerManagedKey#update}
  */
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


/**
* Represents a {@link https://www.terraform.io/docs/providers/azurerm/r/log_analytics_cluster_customer_managed_key.html azurerm_log_analytics_cluster_customer_managed_key}
*/
export class LogAnalyticsClusterCustomerManagedKey extends cdktf.TerraformResource {

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://www.terraform.io/docs/providers/azurerm/r/log_analytics_cluster_customer_managed_key.html azurerm_log_analytics_cluster_customer_managed_key} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options LogAnalyticsClusterCustomerManagedKeyConfig
  */
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
