// https://www.terraform.io/docs/providers/azurerm/d/subscriptions.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataAzurermSubscriptionsConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/d/subscriptions.html#display_name_contains DataAzurermSubscriptions#display_name_contains}
  */
  readonly displayNameContains?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/d/subscriptions.html#display_name_prefix DataAzurermSubscriptions#display_name_prefix}
  */
  readonly displayNamePrefix?: string;
  /**
  * timeouts block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/d/subscriptions.html#timeouts DataAzurermSubscriptions#timeouts}
  */
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
    // Getting the computed value is not yet implemented
    return this.interpolationForAttribute('tags') as any;
  }

  // tenant_id - computed: true, optional: false, required: false
  public get tenantId() {
    return this.getStringAttribute('tenant_id');
  }
}
export interface DataAzurermSubscriptionsTimeouts {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/d/subscriptions.html#read DataAzurermSubscriptions#read}
  */
  readonly read?: string;
}

function dataAzurermSubscriptionsTimeoutsToTerraform(struct?: DataAzurermSubscriptionsTimeoutsOutputReference | DataAzurermSubscriptionsTimeouts): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    read: cdktf.stringToTerraform(struct!.read),
  }
}

export class DataAzurermSubscriptionsTimeoutsOutputReference extends cdktf.ComplexObject {
  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param isSingleItem True if this is a block, false if it's a list
  */
  public constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean) {
    super(terraformResource, terraformAttribute, isSingleItem);
  }

  // read - computed: false, optional: true, required: false
  private _read?: string | undefined; 
  public get read() {
    return this.getStringAttribute('read');
  }
  public set read(value: string | undefined) {
    this._read = value;
  }
  public resetRead() {
    this._read = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get readInput() {
    return this._read
  }
}

/**
* Represents a {@link https://www.terraform.io/docs/providers/azurerm/d/subscriptions.html azurerm_subscriptions}
*/
export class DataAzurermSubscriptions extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType: string = "azurerm_subscriptions";

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://www.terraform.io/docs/providers/azurerm/d/subscriptions.html azurerm_subscriptions} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataAzurermSubscriptionsConfig = {}
  */
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
  private _displayNameContains?: string | undefined; 
  public get displayNameContains() {
    return this.getStringAttribute('display_name_contains');
  }
  public set displayNameContains(value: string | undefined) {
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
  private _displayNamePrefix?: string | undefined; 
  public get displayNamePrefix() {
    return this.getStringAttribute('display_name_prefix');
  }
  public set displayNamePrefix(value: string | undefined) {
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
  private _timeouts?: DataAzurermSubscriptionsTimeouts | undefined; 
  private __timeoutsOutput = new DataAzurermSubscriptionsTimeoutsOutputReference(this as any, "timeouts", true);
  public get timeouts() {
    return this.__timeoutsOutput;
  }
  public putTimeouts(value: DataAzurermSubscriptionsTimeouts | undefined) {
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
