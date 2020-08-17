// https://www.terraform.io/docs/providers/azurerm/r/marketplace_agreement.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import { TerraformResource } from 'cdktf';
import { TerraformMetaArguments } from 'cdktf';

// Configuration

export interface MarketplaceAgreementConfig extends TerraformMetaArguments {
  readonly offer: string;
  readonly plan: string;
  readonly publisher: string;
  /** timeouts block */
  readonly timeouts?: MarketplaceAgreementTimeouts;
}
export interface MarketplaceAgreementTimeouts {
  readonly create?: string;
  readonly delete?: string;
  readonly read?: string;
  readonly update?: string;
}

// Resource

export class MarketplaceAgreement extends TerraformResource {

  // ===========
  // INITIALIZER
  // ===========

  public constructor(scope: Construct, id: string, config: MarketplaceAgreementConfig) {
    super(scope, id, {
      terraformResourceType: 'azurerm_marketplace_agreement',
      terraformGeneratorMetadata: {
        providerName: 'azurerm'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle
    });
    this._offer = config.offer;
    this._plan = config.plan;
    this._publisher = config.publisher;
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

  // license_text_link - computed: true, optional: false, required: true
  public get licenseTextLink() {
    return this.getStringAttribute('license_text_link');
  }

  // offer - computed: false, optional: false, required: true
  private _offer: string;
  public get offer() {
    return this._offer;
  }
  public set offer(value: string) {
    this._offer = value;
  }

  // plan - computed: false, optional: false, required: true
  private _plan: string;
  public get plan() {
    return this._plan;
  }
  public set plan(value: string) {
    this._plan = value;
  }

  // privacy_policy_link - computed: true, optional: false, required: true
  public get privacyPolicyLink() {
    return this.getStringAttribute('privacy_policy_link');
  }

  // publisher - computed: false, optional: false, required: true
  private _publisher: string;
  public get publisher() {
    return this._publisher;
  }
  public set publisher(value: string) {
    this._publisher = value;
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts?: MarketplaceAgreementTimeouts;
  public get timeouts() {
    return this._timeouts;
  }
  public set timeouts(value: MarketplaceAgreementTimeouts | undefined) {
    this._timeouts = value;
  }

  // =========
  // SYNTHESIS
  // =========

  public synthesizeAttributes(): { [name: string]: any } {
    return {
      offer: this._offer,
      plan: this._plan,
      publisher: this._publisher,
      timeouts: this._timeouts,
    };
  }
}
