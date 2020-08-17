// https://www.terraform.io/docs/providers/azurerm/r/api_management_subscription.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import { TerraformResource } from 'cdktf';
import { TerraformMetaArguments } from 'cdktf';

// Configuration

export interface ApiManagementSubscriptionConfig extends TerraformMetaArguments {
  readonly apiManagementName: string;
  readonly displayName: string;
  readonly primaryKey?: string;
  readonly productId: string;
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

  // api_management_name - computed: false, optional: false, required: true
  private _apiManagementName: string;
  public get apiManagementName() {
    return this._apiManagementName;
  }
  public set apiManagementName(value: string) {
    this._apiManagementName = value;
  }

  // display_name - computed: false, optional: false, required: true
  private _displayName: string;
  public get displayName() {
    return this._displayName;
  }
  public set displayName(value: string) {
    this._displayName = value;
  }

  // id - computed: true, optional: true, required: false
  private _id?: string;
  public get id() {
    return this._id ?? this.getStringAttribute('id');
  }
  public set id(value: string | undefined) {
    this._id = value;
  }

  // primary_key - computed: true, optional: true, required: false
  private _primaryKey?: string;
  public get primaryKey() {
    return this._primaryKey ?? this.getStringAttribute('primary_key');
  }
  public set primaryKey(value: string | undefined) {
    this._primaryKey = value;
  }

  // product_id - computed: false, optional: false, required: true
  private _productId: string;
  public get productId() {
    return this._productId;
  }
  public set productId(value: string) {
    this._productId = value;
  }

  // resource_group_name - computed: false, optional: false, required: true
  private _resourceGroupName: string;
  public get resourceGroupName() {
    return this._resourceGroupName;
  }
  public set resourceGroupName(value: string) {
    this._resourceGroupName = value;
  }

  // secondary_key - computed: true, optional: true, required: false
  private _secondaryKey?: string;
  public get secondaryKey() {
    return this._secondaryKey ?? this.getStringAttribute('secondary_key');
  }
  public set secondaryKey(value: string | undefined) {
    this._secondaryKey = value;
  }

  // state - computed: false, optional: true, required: false
  private _state?: string;
  public get state() {
    return this._state;
  }
  public set state(value: string | undefined) {
    this._state = value;
  }

  // subscription_id - computed: true, optional: true, required: false
  private _subscriptionId?: string;
  public get subscriptionId() {
    return this._subscriptionId ?? this.getStringAttribute('subscription_id');
  }
  public set subscriptionId(value: string | undefined) {
    this._subscriptionId = value;
  }

  // user_id - computed: false, optional: false, required: true
  private _userId: string;
  public get userId() {
    return this._userId;
  }
  public set userId(value: string) {
    this._userId = value;
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts?: ApiManagementSubscriptionTimeouts;
  public get timeouts() {
    return this._timeouts;
  }
  public set timeouts(value: ApiManagementSubscriptionTimeouts | undefined) {
    this._timeouts = value;
  }

  // =========
  // SYNTHESIS
  // =========

  public synthesizeAttributes(): { [name: string]: any } {
    return {
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
