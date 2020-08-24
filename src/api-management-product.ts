// https://www.terraform.io/docs/providers/azurerm/r/api_management_product.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import { TerraformResource } from 'cdktf';
import { TerraformMetaArguments } from 'cdktf';

// Configuration

export interface ApiManagementProductConfig extends TerraformMetaArguments {
  readonly apiManagementName: string;
  readonly approvalRequired?: boolean;
  readonly description?: string;
  readonly displayName: string;
  readonly productId: string;
  readonly published: boolean;
  readonly resourceGroupName: string;
  readonly subscriptionRequired: boolean;
  readonly subscriptionsLimit?: number;
  readonly terms?: string;
  /** timeouts block */
  readonly timeouts?: ApiManagementProductTimeouts;
}
export interface ApiManagementProductTimeouts {
  readonly create?: string;
  readonly delete?: string;
  readonly read?: string;
  readonly update?: string;
}

// Resource

export class ApiManagementProduct extends TerraformResource {

  // ===========
  // INITIALIZER
  // ===========

  public constructor(scope: Construct, id: string, config: ApiManagementProductConfig) {
    super(scope, id, {
      terraformResourceType: 'azurerm_api_management_product',
      terraformGeneratorMetadata: {
        providerName: 'azurerm'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle
    });
    this._apiManagementName = config.apiManagementName;
    this._approvalRequired = config.approvalRequired;
    this._description = config.description;
    this._displayName = config.displayName;
    this._productId = config.productId;
    this._published = config.published;
    this._resourceGroupName = config.resourceGroupName;
    this._subscriptionRequired = config.subscriptionRequired;
    this._subscriptionsLimit = config.subscriptionsLimit;
    this._terms = config.terms;
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

  // approval_required - computed: false, optional: true, required: false
  private _approvalRequired?: boolean;
  public get approvalRequired() {
    return this._approvalRequired;
  }
  public set approvalRequired(value: boolean | undefined) {
    this._approvalRequired = value;
  }

  // description - computed: false, optional: true, required: false
  private _description?: string;
  public get description() {
    return this._description;
  }
  public set description(value: string | undefined) {
    this._description = value;
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

  // product_id - computed: false, optional: false, required: true
  private _productId: string;
  public get productId() {
    return this._productId;
  }
  public set productId(value: string) {
    this._productId = value;
  }

  // published - computed: false, optional: false, required: true
  private _published: boolean;
  public get published() {
    return this._published;
  }
  public set published(value: boolean) {
    this._published = value;
  }

  // resource_group_name - computed: false, optional: false, required: true
  private _resourceGroupName: string;
  public get resourceGroupName() {
    return this._resourceGroupName;
  }
  public set resourceGroupName(value: string) {
    this._resourceGroupName = value;
  }

  // subscription_required - computed: false, optional: false, required: true
  private _subscriptionRequired: boolean;
  public get subscriptionRequired() {
    return this._subscriptionRequired;
  }
  public set subscriptionRequired(value: boolean) {
    this._subscriptionRequired = value;
  }

  // subscriptions_limit - computed: false, optional: true, required: false
  private _subscriptionsLimit?: number;
  public get subscriptionsLimit() {
    return this._subscriptionsLimit;
  }
  public set subscriptionsLimit(value: number | undefined) {
    this._subscriptionsLimit = value;
  }

  // terms - computed: false, optional: true, required: false
  private _terms?: string;
  public get terms() {
    return this._terms;
  }
  public set terms(value: string | undefined) {
    this._terms = value;
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts?: ApiManagementProductTimeouts;
  public get timeouts() {
    return this._timeouts;
  }
  public set timeouts(value: ApiManagementProductTimeouts | undefined) {
    this._timeouts = value;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      api_management_name: this._apiManagementName,
      approval_required: this._approvalRequired,
      description: this._description,
      display_name: this._displayName,
      product_id: this._productId,
      published: this._published,
      resource_group_name: this._resourceGroupName,
      subscription_required: this._subscriptionRequired,
      subscriptions_limit: this._subscriptionsLimit,
      terms: this._terms,
      timeouts: this._timeouts,
    };
  }
}
