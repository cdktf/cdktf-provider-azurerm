// https://www.terraform.io/docs/providers/azurerm/r/data_azurerm_subscriptions.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import { TerraformDataSource } from 'cdktf';
import { TerraformMetaArguments } from 'cdktf';
import { ComplexComputedList } from "cdktf";

// Configuration

export interface DataAzurermSubscriptionsConfig extends TerraformMetaArguments {
  readonly displayNameContains?: string;
  readonly displayNamePrefix?: string;
  /** timeouts block */
  readonly timeouts?: DataAzurermSubscriptionsTimeouts;
}
export class DataAzurermSubscriptionsSubscriptions extends ComplexComputedList {

  // display_name - computed: true, optional: false, required: true
  public get displayName() {
    return this.getStringAttribute('display_name');
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

  // subscription_id - computed: true, optional: false, required: true
  public get subscriptionId() {
    return this.getStringAttribute('subscription_id');
  }

  // tenant_id - computed: true, optional: false, required: true
  public get tenantId() {
    return this.getStringAttribute('tenant_id');
  }
}
export interface DataAzurermSubscriptionsTimeouts {
  readonly read?: string;
}

// Resource

export class DataAzurermSubscriptions extends TerraformDataSource {

  // ===========
  // INITIALIZER
  // ===========

  public constructor(scope: Construct, id: string, config: DataAzurermSubscriptionsConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'azurerm_subscriptions',
      terraformGeneratorMetadata: {
        providerName: 'azurerm'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle
    });
    this._displayNameContains = config.displayNameContains;
    this._displayNamePrefix = config.displayNamePrefix;
    this._timeouts = config.timeouts;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // display_name_contains - computed: false, optional: true, required: false
  private _displayNameContains?: string;
  public get displayNameContains() {
    return this._displayNameContains;
  }
  public set displayNameContains(value: string | undefined) {
    this._displayNameContains = value;
  }

  // display_name_prefix - computed: false, optional: true, required: false
  private _displayNamePrefix?: string;
  public get displayNamePrefix() {
    return this._displayNamePrefix;
  }
  public set displayNamePrefix(value: string | undefined) {
    this._displayNamePrefix = value;
  }

  // id - computed: true, optional: true, required: false
  private _id?: string;
  public get id() {
    return this._id ?? this.getStringAttribute('id');
  }
  public set id(value: string | undefined) {
    this._id = value;
  }

  // subscriptions - computed: true, optional: false, required: true
  public subscriptions(index: string) {
    return new DataAzurermSubscriptionsSubscriptions(this, 'subscriptions', index);
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts?: DataAzurermSubscriptionsTimeouts;
  public get timeouts() {
    return this._timeouts;
  }
  public set timeouts(value: DataAzurermSubscriptionsTimeouts | undefined) {
    this._timeouts = value;
  }

  // =========
  // SYNTHESIS
  // =========

  public synthesizeAttributes(): { [name: string]: any } {
    return {
      display_name_contains: this._displayNameContains,
      display_name_prefix: this._displayNamePrefix,
      timeouts: this._timeouts,
    };
  }
}
