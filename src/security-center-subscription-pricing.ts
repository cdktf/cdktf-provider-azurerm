// https://www.terraform.io/docs/providers/azurerm/r/security_center_subscription_pricing.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import { TerraformResource } from 'cdktf';
import { TerraformMetaArguments } from 'cdktf';

// Configuration

export interface SecurityCenterSubscriptionPricingConfig extends TerraformMetaArguments {
  readonly tier: string;
  /** timeouts block */
  readonly timeouts?: SecurityCenterSubscriptionPricingTimeouts;
}
export interface SecurityCenterSubscriptionPricingTimeouts {
  readonly create?: string;
  readonly delete?: string;
  readonly read?: string;
  readonly update?: string;
}

// Resource

export class SecurityCenterSubscriptionPricing extends TerraformResource {

  // ===========
  // INITIALIZER
  // ===========

  public constructor(scope: Construct, id: string, config: SecurityCenterSubscriptionPricingConfig) {
    super(scope, id, {
      terraformResourceType: 'azurerm_security_center_subscription_pricing',
      terraformGeneratorMetadata: {
        providerName: 'azurerm'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle
    });
    this._tier = config.tier;
    this._timeouts = config.timeouts;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // id - computed: true, optional: true, required: false
  private _id?: string;
  public get id() {
    return this._id ?? this.getStringAttribute('id');
  }
  public set id(value: string | undefined) {
    this._id = value;
  }

  // tier - computed: false, optional: false, required: true
  private _tier: string;
  public get tier() {
    return this._tier;
  }
  public set tier(value: string) {
    this._tier = value;
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts?: SecurityCenterSubscriptionPricingTimeouts;
  public get timeouts() {
    return this._timeouts;
  }
  public set timeouts(value: SecurityCenterSubscriptionPricingTimeouts | undefined) {
    this._timeouts = value;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      tier: this._tier,
      timeouts: this._timeouts,
    };
  }
}
