// https://www.terraform.io/docs/providers/azurerm/r/data_azurerm_subscription.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import { TerraformDataSource } from 'cdktf';
import { TerraformMetaArguments } from 'cdktf';

// Configuration

export interface DataAzurermSubscriptionConfig extends TerraformMetaArguments {
  readonly subscriptionId?: string;
  /** timeouts block */
  readonly timeouts?: DataAzurermSubscriptionTimeouts;
}
export interface DataAzurermSubscriptionTimeouts {
  readonly read?: string;
}

// Resource

export class DataAzurermSubscription extends TerraformDataSource {

  // ===========
  // INITIALIZER
  // ===========

  public constructor(scope: Construct, id: string, config: DataAzurermSubscriptionConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'azurerm_subscription',
      terraformGeneratorMetadata: {
        providerName: 'azurerm'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle
    });
    this._subscriptionId = config.subscriptionId;
    this._timeouts = config.timeouts;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // display_name - computed: true, optional: false, required: true
  public get displayName() {
    return this.getStringAttribute('display_name');
  }

  // id - computed: true, optional: true, required: false
  private _id?: string;
  public get id() {
    return this._id ?? this.getStringAttribute('id');
  }
  public set id(value: string | undefined) {
    this._id = value;
  }

  // location_placement_id - computed: true, optional: false, required: true
  public get locationPlacementId() {
    return this.getStringAttribute('location_placement_id');
  }

  // quota_id - computed: true, optional: false, required: true
  public get quotaId() {
    return this.getStringAttribute('quota_id');
  }

  // spending_limit - computed: true, optional: false, required: true
  public get spendingLimit() {
    return this.getStringAttribute('spending_limit');
  }

  // state - computed: true, optional: false, required: true
  public get state() {
    return this.getStringAttribute('state');
  }

  // subscription_id - computed: true, optional: true, required: false
  private _subscriptionId?: string;
  public get subscriptionId() {
    return this._subscriptionId ?? this.getStringAttribute('subscription_id');
  }
  public set subscriptionId(value: string | undefined) {
    this._subscriptionId = value;
  }

  // tenant_id - computed: true, optional: false, required: true
  public get tenantId() {
    return this.getStringAttribute('tenant_id');
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts?: DataAzurermSubscriptionTimeouts;
  public get timeouts() {
    return this._timeouts;
  }
  public set timeouts(value: DataAzurermSubscriptionTimeouts | undefined) {
    this._timeouts = value;
  }

  // =========
  // SYNTHESIS
  // =========

  public synthesizeAttributes(): { [name: string]: any } {
    return {
      subscription_id: this._subscriptionId,
      timeouts: this._timeouts,
    };
  }
}
