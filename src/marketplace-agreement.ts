// https://www.terraform.io/docs/providers/azurerm/r/marketplace_agreement.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface MarketplaceAgreementConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/marketplace_agreement.html#offer MarketplaceAgreement#offer}
  */
  readonly offer: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/marketplace_agreement.html#plan MarketplaceAgreement#plan}
  */
  readonly plan: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/marketplace_agreement.html#publisher MarketplaceAgreement#publisher}
  */
  readonly publisher: string;
  /**
  * timeouts block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/marketplace_agreement.html#timeouts MarketplaceAgreement#timeouts}
  */
  readonly timeouts?: MarketplaceAgreementTimeouts;
}
export interface MarketplaceAgreementTimeouts {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/marketplace_agreement.html#create MarketplaceAgreement#create}
  */
  readonly create?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/marketplace_agreement.html#delete MarketplaceAgreement#delete}
  */
  readonly delete?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/marketplace_agreement.html#read MarketplaceAgreement#read}
  */
  readonly read?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/marketplace_agreement.html#update MarketplaceAgreement#update}
  */
  readonly update?: string;
}

function marketplaceAgreementTimeoutsToTerraform(struct?: MarketplaceAgreementTimeouts): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    create: cdktf.stringToTerraform(struct!.create),
    delete: cdktf.stringToTerraform(struct!.delete),
    read: cdktf.stringToTerraform(struct!.read),
    update: cdktf.stringToTerraform(struct!.update),
  }
}


/**
* Represents a {@link https://www.terraform.io/docs/providers/azurerm/r/marketplace_agreement.html azurerm_marketplace_agreement}
*/
export class MarketplaceAgreement extends cdktf.TerraformResource {

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://www.terraform.io/docs/providers/azurerm/r/marketplace_agreement.html azurerm_marketplace_agreement} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options MarketplaceAgreementConfig
  */
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
  public get id() {
    return this.getStringAttribute('id');
  }

  // license_text_link - computed: true, optional: false, required: false
  public get licenseTextLink() {
    return this.getStringAttribute('license_text_link');
  }

  // offer - computed: false, optional: false, required: true
  private _offer: string;
  public get offer() {
    return this.getStringAttribute('offer');
  }
  public set offer(value: string) {
    this._offer = value;
  }
  // Temporarily expose input value. Use with caution.
  public get offerInput() {
    return this._offer
  }

  // plan - computed: false, optional: false, required: true
  private _plan: string;
  public get plan() {
    return this.getStringAttribute('plan');
  }
  public set plan(value: string) {
    this._plan = value;
  }
  // Temporarily expose input value. Use with caution.
  public get planInput() {
    return this._plan
  }

  // privacy_policy_link - computed: true, optional: false, required: false
  public get privacyPolicyLink() {
    return this.getStringAttribute('privacy_policy_link');
  }

  // publisher - computed: false, optional: false, required: true
  private _publisher: string;
  public get publisher() {
    return this.getStringAttribute('publisher');
  }
  public set publisher(value: string) {
    this._publisher = value;
  }
  // Temporarily expose input value. Use with caution.
  public get publisherInput() {
    return this._publisher
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts?: MarketplaceAgreementTimeouts;
  public get timeouts() {
    return this.interpolationForAttribute('timeouts') as any;
  }
  public set timeouts(value: MarketplaceAgreementTimeouts ) {
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
      offer: cdktf.stringToTerraform(this._offer),
      plan: cdktf.stringToTerraform(this._plan),
      publisher: cdktf.stringToTerraform(this._publisher),
      timeouts: marketplaceAgreementTimeoutsToTerraform(this._timeouts),
    };
  }
}
