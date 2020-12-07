// https://www.terraform.io/docs/providers/azurerm/r/api_management_product_policy.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface ApiManagementProductPolicyConfig extends cdktf.TerraformMetaArguments {
  readonly apiManagementName: string;
  readonly productId: string;
  readonly resourceGroupName: string;
  readonly xmlContent?: string;
  readonly xmlLink?: string;
  /** timeouts block */
  readonly timeouts?: ApiManagementProductPolicyTimeouts;
}
export interface ApiManagementProductPolicyTimeouts {
  readonly create?: string;
  readonly delete?: string;
  readonly read?: string;
  readonly update?: string;
}

function apiManagementProductPolicyTimeoutsToTerraform(struct?: ApiManagementProductPolicyTimeouts): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    create: cdktf.stringToTerraform(struct!.create),
    delete: cdktf.stringToTerraform(struct!.delete),
    read: cdktf.stringToTerraform(struct!.read),
    update: cdktf.stringToTerraform(struct!.update),
  }
}


// Resource

export class ApiManagementProductPolicy extends cdktf.TerraformResource {

  // ===========
  // INITIALIZER
  // ===========

  public constructor(scope: Construct, id: string, config: ApiManagementProductPolicyConfig) {
    super(scope, id, {
      terraformResourceType: 'azurerm_api_management_product_policy',
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
    this._xmlContent = config.xmlContent;
    this._xmlLink = config.xmlLink;
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

  // xml_content - computed: true, optional: true, required: false
  private _xmlContent?: string;
  public get xmlContent() {
    return this.getStringAttribute('xml_content');
  }
  public set xmlContent(value: string) {
    this._xmlContent = value;
  }
  public resetXmlContent() {
    this._xmlContent = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get xmlContentInput() {
    return this._xmlContent
  }

  // xml_link - computed: false, optional: true, required: false
  private _xmlLink?: string;
  public get xmlLink() {
    return this.getStringAttribute('xml_link');
  }
  public set xmlLink(value: string ) {
    this._xmlLink = value;
  }
  public resetXmlLink() {
    this._xmlLink = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get xmlLinkInput() {
    return this._xmlLink
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts?: ApiManagementProductPolicyTimeouts;
  public get timeouts() {
    return this.interpolationForAttribute('timeouts') as any;
  }
  public set timeouts(value: ApiManagementProductPolicyTimeouts ) {
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
      xml_content: cdktf.stringToTerraform(this._xmlContent),
      xml_link: cdktf.stringToTerraform(this._xmlLink),
      timeouts: apiManagementProductPolicyTimeoutsToTerraform(this._timeouts),
    };
  }
}
