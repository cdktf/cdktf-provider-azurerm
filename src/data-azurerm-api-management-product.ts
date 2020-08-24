// https://www.terraform.io/docs/providers/azurerm/r/data_azurerm_api_management_product.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import { TerraformDataSource } from 'cdktf';
import { TerraformMetaArguments } from 'cdktf';

// Configuration

export interface DataAzurermApiManagementProductConfig extends TerraformMetaArguments {
  readonly apiManagementName: string;
  readonly productId: string;
  readonly resourceGroupName: string;
  /** timeouts block */
  readonly timeouts?: DataAzurermApiManagementProductTimeouts;
}
export interface DataAzurermApiManagementProductTimeouts {
  readonly read?: string;
}

// Resource

export class DataAzurermApiManagementProduct extends TerraformDataSource {

  // ===========
  // INITIALIZER
  // ===========

  public constructor(scope: Construct, id: string, config: DataAzurermApiManagementProductConfig) {
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
    this._productId = config.productId;
    this._resourceGroupName = config.resourceGroupName;
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

  // approval_required - computed: true, optional: false, required: true
  public get approvalRequired() {
    return this.getBooleanAttribute('approval_required');
  }

  // description - computed: true, optional: false, required: true
  public get description() {
    return this.getStringAttribute('description');
  }

  // display_name - computed: true, optional: false, required: true
  public get displayName() {
    return this.getStringAttribute('display_name');
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

  // published - computed: true, optional: false, required: true
  public get published() {
    return this.getBooleanAttribute('published');
  }

  // resource_group_name - computed: false, optional: false, required: true
  private _resourceGroupName: string;
  public get resourceGroupName() {
    return this._resourceGroupName;
  }
  public set resourceGroupName(value: string) {
    this._resourceGroupName = value;
  }

  // subscription_required - computed: true, optional: false, required: true
  public get subscriptionRequired() {
    return this.getBooleanAttribute('subscription_required');
  }

  // subscriptions_limit - computed: true, optional: false, required: true
  public get subscriptionsLimit() {
    return this.getNumberAttribute('subscriptions_limit');
  }

  // terms - computed: true, optional: false, required: true
  public get terms() {
    return this.getStringAttribute('terms');
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts?: DataAzurermApiManagementProductTimeouts;
  public get timeouts() {
    return this._timeouts;
  }
  public set timeouts(value: DataAzurermApiManagementProductTimeouts | undefined) {
    this._timeouts = value;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      api_management_name: this._apiManagementName,
      product_id: this._productId,
      resource_group_name: this._resourceGroupName,
      timeouts: this._timeouts,
    };
  }
}
