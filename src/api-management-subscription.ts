// https://www.terraform.io/docs/providers/azurerm/r/api_management_subscription.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import { TerraformResource } from 'cdktf';
import { TerraformMetaArguments } from 'cdktf';

// Configuration

export interface ApiManagementSubscriptionConfig extends TerraformMetaArguments {
  readonly allowTracing?: boolean;
  readonly apiManagementName: string;
  readonly displayName: string;
  readonly primaryKey?: string;
  readonly productId?: string;
  readonly resourceGroupName: string;
  readonly secondaryKey?: string;
  readonly state?: string;
  readonly subscriptionId?: string;
  readonly userId: string;
  /** timeouts block */
  readonly timeouts?: ApiManagementSubscriptionTimeouts;
}
export interface ApiManagementSubscriptionTimeouts {
  readonly create?: string;
  readonly delete?: string;
  readonly read?: string;
  readonly update?: string;
}

// Resource

export class ApiManagementSubscription extends TerraformResource {

  // ===========
  // INITIALIZER
  // ===========

  public constructor(scope: Construct, id: string, config: ApiManagementSubscriptionConfig) {
    super(scope, id, {
      terraformResourceType: 'azurerm_api_management_subscription',
      terraformGeneratorMetadata: {
        providerName: 'azurerm'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle
    });
    this._allowTracing = config.allowTracing;
    this._apiManagementName = config.apiManagementName;
    this._displayName = config.displayName;
    this._primaryKey = config.primaryKey;
    this._productId = config.productId;
    this._resourceGroupName = config.resourceGroupName;
    this._secondaryKey = config.secondaryKey;
    this._state = config.state;
    this._subscriptionId = config.subscriptionId;
    this._userId = config.userId;
    this._timeouts = config.timeouts;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // allow_tracing - computed: false, optional: true, required: false
  private _allowTracing?: boolean;
  public get allowTracing() {
    return this.getBooleanAttribute('allow_tracing');
  }
  public set allowTracing(value: boolean ) {
    this._allowTracing = value;
  }
  public resetAllowTracing() {
    this._allowTracing = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get allowTracingInput() {
    return this._allowTracing
  }

  // api_management_name - computed: false, optional: false, required: true
  private _apiManagementName: string;
  public get apiManagementName() {
    return this.getStringAttribute('api_management_name');
  }
  public set apiManagementName(value: string) {
    this._apiManagementName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get apiManagementNameInput() {
    return this._apiManagementName
  }

  // display_name - computed: false, optional: false, required: true
  private _displayName: string;
  public get displayName() {
    return this.getStringAttribute('display_name');
  }
  public set displayName(value: string) {
    this._displayName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get displayNameInput() {
    return this._displayName
  }

  // id - computed: true, optional: true, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // primary_key - computed: true, optional: true, required: false
  private _primaryKey?: string;
  public get primaryKey() {
    return this.getStringAttribute('primary_key');
  }
  public set primaryKey(value: string) {
    this._primaryKey = value;
  }
  public resetPrimaryKey() {
    this._primaryKey = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get primaryKeyInput() {
    return this._primaryKey
  }

  // product_id - computed: false, optional: true, required: false
  private _productId?: string;
  public get productId() {
    return this.getStringAttribute('product_id');
  }
  public set productId(value: string ) {
    this._productId = value;
  }
  public resetProductId() {
    this._productId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get productIdInput() {
    return this._productId
  }

  // resource_group_name - computed: false, optional: false, required: true
  private _resourceGroupName: string;
  public get resourceGroupName() {
    return this.getStringAttribute('resource_group_name');
  }
  public set resourceGroupName(value: string) {
    this._resourceGroupName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get resourceGroupNameInput() {
    return this._resourceGroupName
  }

  // secondary_key - computed: true, optional: true, required: false
  private _secondaryKey?: string;
  public get secondaryKey() {
    return this.getStringAttribute('secondary_key');
  }
  public set secondaryKey(value: string) {
    this._secondaryKey = value;
  }
  public resetSecondaryKey() {
    this._secondaryKey = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get secondaryKeyInput() {
    return this._secondaryKey
  }

  // state - computed: false, optional: true, required: false
  private _state?: string;
  public get state() {
    return this.getStringAttribute('state');
  }
  public set state(value: string ) {
    this._state = value;
  }
  public resetState() {
    this._state = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get stateInput() {
    return this._state
  }

  // subscription_id - computed: true, optional: true, required: false
  private _subscriptionId?: string;
  public get subscriptionId() {
    return this.getStringAttribute('subscription_id');
  }
  public set subscriptionId(value: string) {
    this._subscriptionId = value;
  }
  public resetSubscriptionId() {
    this._subscriptionId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get subscriptionIdInput() {
    return this._subscriptionId
  }

  // user_id - computed: false, optional: false, required: true
  private _userId: string;
  public get userId() {
    return this.getStringAttribute('user_id');
  }
  public set userId(value: string) {
    this._userId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get userIdInput() {
    return this._userId
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts?: ApiManagementSubscriptionTimeouts;
  public get timeouts() {
    return this.interpolationForAttribute('timeouts') as any;
  }
  public set timeouts(value: ApiManagementSubscriptionTimeouts ) {
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
      allow_tracing: this._allowTracing,
      api_management_name: this._apiManagementName,
      display_name: this._displayName,
      primary_key: this._primaryKey,
      product_id: this._productId,
      resource_group_name: this._resourceGroupName,
      secondary_key: this._secondaryKey,
      state: this._state,
      subscription_id: this._subscriptionId,
      user_id: this._userId,
      timeouts: this._timeouts,
    };
  }
}
