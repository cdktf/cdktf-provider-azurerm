// https://www.terraform.io/docs/providers/azurerm/r/api_management_product.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface ApiManagementProductConfig extends cdktf.TerraformMetaArguments {
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

function apiManagementProductTimeoutsToTerraform(struct?: ApiManagementProductTimeouts): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    create: cdktf.stringToTerraform(struct!.create),
    delete: cdktf.stringToTerraform(struct!.delete),
    read: cdktf.stringToTerraform(struct!.read),
    update: cdktf.stringToTerraform(struct!.update),
  }
}


// Resource

export class ApiManagementProduct extends cdktf.TerraformResource {

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
    return this.getStringAttribute('api_management_name');
  }
  public set apiManagementName(value: string) {
    this._apiManagementName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get apiManagementNameInput() {
    return this._apiManagementName
  }

  // approval_required - computed: false, optional: true, required: false
  private _approvalRequired?: boolean;
  public get approvalRequired() {
    return this.getBooleanAttribute('approval_required');
  }
  public set approvalRequired(value: boolean ) {
    this._approvalRequired = value;
  }
  public resetApprovalRequired() {
    this._approvalRequired = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get approvalRequiredInput() {
    return this._approvalRequired
  }

  // description - computed: false, optional: true, required: false
  private _description?: string;
  public get description() {
    return this.getStringAttribute('description');
  }
  public set description(value: string ) {
    this._description = value;
  }
  public resetDescription() {
    this._description = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get descriptionInput() {
    return this._description
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

  // product_id - computed: false, optional: false, required: true
  private _productId: string;
  public get productId() {
    return this.getStringAttribute('product_id');
  }
  public set productId(value: string) {
    this._productId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get productIdInput() {
    return this._productId
  }

  // published - computed: false, optional: false, required: true
  private _published: boolean;
  public get published() {
    return this.getBooleanAttribute('published');
  }
  public set published(value: boolean) {
    this._published = value;
  }
  // Temporarily expose input value. Use with caution.
  public get publishedInput() {
    return this._published
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

  // subscription_required - computed: false, optional: false, required: true
  private _subscriptionRequired: boolean;
  public get subscriptionRequired() {
    return this.getBooleanAttribute('subscription_required');
  }
  public set subscriptionRequired(value: boolean) {
    this._subscriptionRequired = value;
  }
  // Temporarily expose input value. Use with caution.
  public get subscriptionRequiredInput() {
    return this._subscriptionRequired
  }

  // subscriptions_limit - computed: false, optional: true, required: false
  private _subscriptionsLimit?: number;
  public get subscriptionsLimit() {
    return this.getNumberAttribute('subscriptions_limit');
  }
  public set subscriptionsLimit(value: number ) {
    this._subscriptionsLimit = value;
  }
  public resetSubscriptionsLimit() {
    this._subscriptionsLimit = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get subscriptionsLimitInput() {
    return this._subscriptionsLimit
  }

  // terms - computed: false, optional: true, required: false
  private _terms?: string;
  public get terms() {
    return this.getStringAttribute('terms');
  }
  public set terms(value: string ) {
    this._terms = value;
  }
  public resetTerms() {
    this._terms = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get termsInput() {
    return this._terms
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts?: ApiManagementProductTimeouts;
  public get timeouts() {
    return this.interpolationForAttribute('timeouts') as any;
  }
  public set timeouts(value: ApiManagementProductTimeouts ) {
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
      api_management_name: cdktf.stringToTerraform(this._apiManagementName),
      approval_required: cdktf.booleanToTerraform(this._approvalRequired),
      description: cdktf.stringToTerraform(this._description),
      display_name: cdktf.stringToTerraform(this._displayName),
      product_id: cdktf.stringToTerraform(this._productId),
      published: cdktf.booleanToTerraform(this._published),
      resource_group_name: cdktf.stringToTerraform(this._resourceGroupName),
      subscription_required: cdktf.booleanToTerraform(this._subscriptionRequired),
      subscriptions_limit: cdktf.numberToTerraform(this._subscriptionsLimit),
      terms: cdktf.stringToTerraform(this._terms),
      timeouts: apiManagementProductTimeoutsToTerraform(this._timeouts),
    };
  }
}
