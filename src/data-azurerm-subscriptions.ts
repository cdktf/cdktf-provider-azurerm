// https://www.terraform.io/docs/providers/azurerm/r/data_azurerm_subscriptions.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataAzurermSubscriptionsConfig extends cdktf.TerraformMetaArguments {
  readonly displayNameContains?: string;
  readonly displayNamePrefix?: string;
  /** timeouts block */
  readonly timeouts?: DataAzurermSubscriptionsTimeouts;
}
export class DataAzurermSubscriptionsSubscriptions extends cdktf.ComplexComputedList {

  // display_name - computed: true, optional: false, required: false
  public get displayName() {
    return this.getStringAttribute('display_name');
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // location_placement_id - computed: true, optional: false, required: false
  public get locationPlacementId() {
    return this.getStringAttribute('location_placement_id');
  }

  // quota_id - computed: true, optional: false, required: false
  public get quotaId() {
    return this.getStringAttribute('quota_id');
  }

  // spending_limit - computed: true, optional: false, required: false
  public get spendingLimit() {
    return this.getStringAttribute('spending_limit');
  }

  // state - computed: true, optional: false, required: false
  public get state() {
    return this.getStringAttribute('state');
  }

  // subscription_id - computed: true, optional: false, required: false
  public get subscriptionId() {
    return this.getStringAttribute('subscription_id');
  }

  // tags - computed: true, optional: false, required: false
  public get tags() {
    return this.interpolationForAttribute('tags') as any;
  }

  // tenant_id - computed: true, optional: false, required: false
  public get tenantId() {
    return this.getStringAttribute('tenant_id');
  }
}
export interface DataAzurermSubscriptionsTimeouts {
  readonly read?: string;
}

function dataAzurermSubscriptionsTimeoutsToTerraform(struct?: DataAzurermSubscriptionsTimeouts): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    read: cdktf.stringToTerraform(struct!.read),
  }
}


// Resource

export class DataAzurermSubscriptions extends cdktf.TerraformDataSource {

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
    return this.getStringAttribute('display_name_contains');
  }
  public set displayNameContains(value: string ) {
    this._displayNameContains = value;
  }
  public resetDisplayNameContains() {
    this._displayNameContains = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get displayNameContainsInput() {
    return this._displayNameContains
  }

  // display_name_prefix - computed: false, optional: true, required: false
  private _displayNamePrefix?: string;
  public get displayNamePrefix() {
    return this.getStringAttribute('display_name_prefix');
  }
  public set displayNamePrefix(value: string ) {
    this._displayNamePrefix = value;
  }
  public resetDisplayNamePrefix() {
    this._displayNamePrefix = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get displayNamePrefixInput() {
    return this._displayNamePrefix
  }

  // id - computed: true, optional: true, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // subscriptions - computed: true, optional: false, required: false
  public subscriptions(index: string) {
    return new DataAzurermSubscriptionsSubscriptions(this, 'subscriptions', index);
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts?: DataAzurermSubscriptionsTimeouts;
  public get timeouts() {
    return this.interpolationForAttribute('timeouts') as any;
  }
  public set timeouts(value: DataAzurermSubscriptionsTimeouts ) {
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
      display_name_contains: cdktf.stringToTerraform(this._displayNameContains),
      display_name_prefix: cdktf.stringToTerraform(this._displayNamePrefix),
      timeouts: dataAzurermSubscriptionsTimeoutsToTerraform(this._timeouts),
    };
  }
}
