// https://www.terraform.io/docs/providers/azurerm/r/api_management_api_operation_policy.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface ApiManagementApiOperationPolicyConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/api_management_api_operation_policy.html#api_management_name ApiManagementApiOperationPolicy#api_management_name}
  */
  readonly apiManagementName: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/api_management_api_operation_policy.html#api_name ApiManagementApiOperationPolicy#api_name}
  */
  readonly apiName: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/api_management_api_operation_policy.html#operation_id ApiManagementApiOperationPolicy#operation_id}
  */
  readonly operationId: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/api_management_api_operation_policy.html#resource_group_name ApiManagementApiOperationPolicy#resource_group_name}
  */
  readonly resourceGroupName: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/api_management_api_operation_policy.html#xml_content ApiManagementApiOperationPolicy#xml_content}
  */
  readonly xmlContent?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/api_management_api_operation_policy.html#xml_link ApiManagementApiOperationPolicy#xml_link}
  */
  readonly xmlLink?: string;
  /**
  * timeouts block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/api_management_api_operation_policy.html#timeouts ApiManagementApiOperationPolicy#timeouts}
  */
  readonly timeouts?: ApiManagementApiOperationPolicyTimeouts;
}
export interface ApiManagementApiOperationPolicyTimeouts {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/api_management_api_operation_policy.html#create ApiManagementApiOperationPolicy#create}
  */
  readonly create?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/api_management_api_operation_policy.html#delete ApiManagementApiOperationPolicy#delete}
  */
  readonly delete?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/api_management_api_operation_policy.html#read ApiManagementApiOperationPolicy#read}
  */
  readonly read?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/api_management_api_operation_policy.html#update ApiManagementApiOperationPolicy#update}
  */
  readonly update?: string;
}

function apiManagementApiOperationPolicyTimeoutsToTerraform(struct?: ApiManagementApiOperationPolicyTimeoutsOutputReference | ApiManagementApiOperationPolicyTimeouts): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    create: cdktf.stringToTerraform(struct!.create),
    delete: cdktf.stringToTerraform(struct!.delete),
    read: cdktf.stringToTerraform(struct!.read),
    update: cdktf.stringToTerraform(struct!.update),
  }
}

export class ApiManagementApiOperationPolicyTimeoutsOutputReference extends cdktf.ComplexObject {
  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param isSingleItem True if this is a block, false if it's a list
  */
  public constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean) {
    super(terraformResource, terraformAttribute, isSingleItem);
  }

  // create - computed: false, optional: true, required: false
  private _create?: string | undefined; 
  public get create() {
    return this.getStringAttribute('create');
  }
  public set create(value: string | undefined) {
    this._create = value;
  }
  public resetCreate() {
    this._create = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get createInput() {
    return this._create
  }

  // delete - computed: false, optional: true, required: false
  private _delete?: string | undefined; 
  public get delete() {
    return this.getStringAttribute('delete');
  }
  public set delete(value: string | undefined) {
    this._delete = value;
  }
  public resetDelete() {
    this._delete = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get deleteInput() {
    return this._delete
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

  // update - computed: false, optional: true, required: false
  private _update?: string | undefined; 
  public get update() {
    return this.getStringAttribute('update');
  }
  public set update(value: string | undefined) {
    this._update = value;
  }
  public resetUpdate() {
    this._update = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get updateInput() {
    return this._update
  }
}

/**
* Represents a {@link https://www.terraform.io/docs/providers/azurerm/r/api_management_api_operation_policy.html azurerm_api_management_api_operation_policy}
*/
export class ApiManagementApiOperationPolicy extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType: string = "azurerm_api_management_api_operation_policy";

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://www.terraform.io/docs/providers/azurerm/r/api_management_api_operation_policy.html azurerm_api_management_api_operation_policy} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options ApiManagementApiOperationPolicyConfig
  */
  public constructor(scope: Construct, id: string, config: ApiManagementApiOperationPolicyConfig) {
    super(scope, id, {
      terraformResourceType: 'azurerm_api_management_api_operation_policy',
      terraformGeneratorMetadata: {
        providerName: 'azurerm'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle
    });
    this._apiManagementName = config.apiManagementName;
    this._apiName = config.apiName;
    this._operationId = config.operationId;
    this._resourceGroupName = config.resourceGroupName;
    this._xmlContent = config.xmlContent;
    this._xmlLink = config.xmlLink;
    this._timeouts = config.timeouts;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // api_management_name - computed: false, optional: false, required: true
  private _apiManagementName?: string; 
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

  // api_name - computed: false, optional: false, required: true
  private _apiName?: string; 
  public get apiName() {
    return this.getStringAttribute('api_name');
  }
  public set apiName(value: string) {
    this._apiName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get apiNameInput() {
    return this._apiName
  }

  // id - computed: true, optional: true, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // operation_id - computed: false, optional: false, required: true
  private _operationId?: string; 
  public get operationId() {
    return this.getStringAttribute('operation_id');
  }
  public set operationId(value: string) {
    this._operationId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get operationIdInput() {
    return this._operationId
  }

  // resource_group_name - computed: false, optional: false, required: true
  private _resourceGroupName?: string; 
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
  private _xmlContent?: string | undefined; 
  public get xmlContent() {
    return this.getStringAttribute('xml_content');
  }
  public set xmlContent(value: string | undefined) {
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
  private _xmlLink?: string | undefined; 
  public get xmlLink() {
    return this.getStringAttribute('xml_link');
  }
  public set xmlLink(value: string | undefined) {
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
  private _timeouts?: ApiManagementApiOperationPolicyTimeouts | undefined; 
  private __timeoutsOutput = new ApiManagementApiOperationPolicyTimeoutsOutputReference(this as any, "timeouts", true);
  public get timeouts() {
    return this.__timeoutsOutput;
  }
  public putTimeouts(value: ApiManagementApiOperationPolicyTimeouts | undefined) {
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
      api_name: cdktf.stringToTerraform(this._apiName),
      operation_id: cdktf.stringToTerraform(this._operationId),
      resource_group_name: cdktf.stringToTerraform(this._resourceGroupName),
      xml_content: cdktf.stringToTerraform(this._xmlContent),
      xml_link: cdktf.stringToTerraform(this._xmlLink),
      timeouts: apiManagementApiOperationPolicyTimeoutsToTerraform(this._timeouts),
    };
  }
}
