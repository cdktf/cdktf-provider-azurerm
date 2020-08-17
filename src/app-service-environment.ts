// https://www.terraform.io/docs/providers/azurerm/r/app_service_environment.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import { TerraformResource } from 'cdktf';
import { TerraformMetaArguments } from 'cdktf';

// Configuration

export interface AppServiceEnvironmentConfig extends TerraformMetaArguments {
  readonly frontEndScaleFactor?: number;
  readonly internalLoadBalancingMode?: string;
  readonly name: string;
  readonly pricingTier?: string;
  readonly subnetId: string;
  readonly tags?: { [key: string]: string };
  /** timeouts block */
  readonly timeouts?: AppServiceEnvironmentTimeouts;
}
export interface AppServiceEnvironmentTimeouts {
  readonly create?: string;
  readonly delete?: string;
  readonly read?: string;
  readonly update?: string;
}

// Resource

export class AppServiceEnvironment extends TerraformResource {

  // ===========
  // INITIALIZER
  // ===========

  public constructor(scope: Construct, id: string, config: AppServiceEnvironmentConfig) {
    super(scope, id, {
      terraformResourceType: 'azurerm_app_service_environment',
      terraformGeneratorMetadata: {
        providerName: 'azurerm'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle
    });
    this._frontEndScaleFactor = config.frontEndScaleFactor;
    this._internalLoadBalancingMode = config.internalLoadBalancingMode;
    this._name = config.name;
    this._pricingTier = config.pricingTier;
    this._subnetId = config.subnetId;
    this._tags = config.tags;
    this._timeouts = config.timeouts;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // front_end_scale_factor - computed: false, optional: true, required: false
  private _frontEndScaleFactor?: number;
  public get frontEndScaleFactor() {
    return this._frontEndScaleFactor;
  }
  public set frontEndScaleFactor(value: number | undefined) {
    this._frontEndScaleFactor = value;
  }

  // id - computed: true, optional: true, required: false
  private _id?: string;
  public get id() {
    return this._id ?? this.getStringAttribute('id');
  }
  public set id(value: string | undefined) {
    this._id = value;
  }

  // internal_load_balancing_mode - computed: false, optional: true, required: false
  private _internalLoadBalancingMode?: string;
  public get internalLoadBalancingMode() {
    return this._internalLoadBalancingMode;
  }
  public set internalLoadBalancingMode(value: string | undefined) {
    this._internalLoadBalancingMode = value;
  }

  // location - computed: true, optional: false, required: true
  public get location() {
    return this.getStringAttribute('location');
  }

  // name - computed: false, optional: false, required: true
  private _name: string;
  public get name() {
    return this._name;
  }
  public set name(value: string) {
    this._name = value;
  }

  // pricing_tier - computed: false, optional: true, required: false
  private _pricingTier?: string;
  public get pricingTier() {
    return this._pricingTier;
  }
  public set pricingTier(value: string | undefined) {
    this._pricingTier = value;
  }

  // resource_group_name - computed: true, optional: false, required: true
  public get resourceGroupName() {
    return this.getStringAttribute('resource_group_name');
  }

  // subnet_id - computed: false, optional: false, required: true
  private _subnetId: string;
  public get subnetId() {
    return this._subnetId;
  }
  public set subnetId(value: string) {
    this._subnetId = value;
  }

  // tags - computed: false, optional: true, required: false
  private _tags?: { [key: string]: string };
  public get tags() {
    return this._tags;
  }
  public set tags(value: { [key: string]: string } | undefined) {
    this._tags = value;
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts?: AppServiceEnvironmentTimeouts;
  public get timeouts() {
    return this._timeouts;
  }
  public set timeouts(value: AppServiceEnvironmentTimeouts | undefined) {
    this._timeouts = value;
  }

  // =========
  // SYNTHESIS
  // =========

  public synthesizeAttributes(): { [name: string]: any } {
    return {
      front_end_scale_factor: this._frontEndScaleFactor,
      internal_load_balancing_mode: this._internalLoadBalancingMode,
      name: this._name,
      pricing_tier: this._pricingTier,
      subnet_id: this._subnetId,
      tags: this._tags,
      timeouts: this._timeouts,
    };
  }
}
