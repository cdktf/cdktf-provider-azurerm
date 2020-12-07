// https://www.terraform.io/docs/providers/azurerm/r/data_azurerm_api_management_product.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataAzurermApiManagementProductConfig extends cdktf.TerraformMetaArguments {
  readonly apiManagementName: string;
  readonly productId: string;
  readonly resourceGroupName: string;
  /** timeouts block */
  readonly timeouts?: DataAzurermApiManagementProductTimeouts;
}
export interface DataAzurermApiManagementProductTimeouts {
  readonly read?: string;
}

function dataAzurermApiManagementProductTimeoutsToTerraform(struct?: DataAzurermApiManagementProductTimeouts): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    read: cdktf.stringToTerraform(struct!.read),
  }
}


// Resource

export class DataAzurermApiManagementProduct extends cdktf.TerraformDataSource {

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
    return this.getStringAttribute('api_management_name');
  }
  public set apiManagementName(value: string) {
    this._apiManagementName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get apiManagementNameInput() {
    return this._apiManagementName
  }

  // approval_required - computed: true, optional: false, required: false
  public get approvalRequired() {
    return this.getBooleanAttribute('approval_required');
  }

  // description - computed: true, optional: false, required: false
  public get description() {
    return this.getStringAttribute('description');
  }

  // display_name - computed: true, optional: false, required: false
  public get displayName() {
    return this.getStringAttribute('display_name');
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

  // published - computed: true, optional: false, required: false
  public get published() {
    return this.getBooleanAttribute('published');
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

  // subscription_required - computed: true, optional: false, required: false
  public get subscriptionRequired() {
    return this.getBooleanAttribute('subscription_required');
  }

  // subscriptions_limit - computed: true, optional: false, required: false
  public get subscriptionsLimit() {
    return this.getNumberAttribute('subscriptions_limit');
  }

  // terms - computed: true, optional: false, required: false
  public get terms() {
    return this.getStringAttribute('terms');
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts?: DataAzurermApiManagementProductTimeouts;
  public get timeouts() {
    return this.interpolationForAttribute('timeouts') as any;
  }
  public set timeouts(value: DataAzurermApiManagementProductTimeouts ) {
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
      product_id: cdktf.stringToTerraform(this._productId),
      resource_group_name: cdktf.stringToTerraform(this._resourceGroupName),
      timeouts: dataAzurermApiManagementProductTimeoutsToTerraform(this._timeouts),
    };
  }
}
