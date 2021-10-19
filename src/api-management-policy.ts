// https://www.terraform.io/docs/providers/azurerm/r/api_management_policy.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface ApiManagementPolicyAConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/api_management_policy.html#api_management_id ApiManagementPolicyA#api_management_id}
  */
  readonly apiManagementId: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/api_management_policy.html#xml_content ApiManagementPolicyA#xml_content}
  */
  readonly xmlContent?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/api_management_policy.html#xml_link ApiManagementPolicyA#xml_link}
  */
  readonly xmlLink?: string;
  /**
  * timeouts block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/api_management_policy.html#timeouts ApiManagementPolicyA#timeouts}
  */
  readonly timeouts?: ApiManagementPolicyTimeouts;
}
export interface ApiManagementPolicyTimeouts {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/api_management_policy.html#create ApiManagementPolicyA#create}
  */
  readonly create?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/api_management_policy.html#delete ApiManagementPolicyA#delete}
  */
  readonly delete?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/api_management_policy.html#read ApiManagementPolicyA#read}
  */
  readonly read?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/api_management_policy.html#update ApiManagementPolicyA#update}
  */
  readonly update?: string;
}

function apiManagementPolicyTimeoutsToTerraform(struct?: ApiManagementPolicyTimeoutsOutputReference | ApiManagementPolicyTimeouts): any {
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

export class ApiManagementPolicyTimeoutsOutputReference extends cdktf.ComplexObject {
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
* Represents a {@link https://www.terraform.io/docs/providers/azurerm/r/api_management_policy.html azurerm_api_management_policy}
*/
export class ApiManagementPolicyA extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType: string = "azurerm_api_management_policy";

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://www.terraform.io/docs/providers/azurerm/r/api_management_policy.html azurerm_api_management_policy} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options ApiManagementPolicyAConfig
  */
  public constructor(scope: Construct, id: string, config: ApiManagementPolicyAConfig) {
    super(scope, id, {
      terraformResourceType: 'azurerm_api_management_policy',
      terraformGeneratorMetadata: {
        providerName: 'azurerm'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle
    });
    this._apiManagementId = config.apiManagementId;
    this._xmlContent = config.xmlContent;
    this._xmlLink = config.xmlLink;
    this._timeouts = config.timeouts;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // api_management_id - computed: false, optional: false, required: true
  private _apiManagementId?: string; 
  public get apiManagementId() {
    return this.getStringAttribute('api_management_id');
  }
  public set apiManagementId(value: string) {
    this._apiManagementId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get apiManagementIdInput() {
    return this._apiManagementId
  }

  // id - computed: true, optional: true, required: false
  public get id() {
    return this.getStringAttribute('id');
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
  private _timeouts?: ApiManagementPolicyTimeouts | undefined; 
  private __timeoutsOutput = new ApiManagementPolicyTimeoutsOutputReference(this as any, "timeouts", true);
  public get timeouts() {
    return this.__timeoutsOutput;
  }
  public putTimeouts(value: ApiManagementPolicyTimeouts | undefined) {
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
      api_management_id: cdktf.stringToTerraform(this._apiManagementId),
      xml_content: cdktf.stringToTerraform(this._xmlContent),
      xml_link: cdktf.stringToTerraform(this._xmlLink),
      timeouts: apiManagementPolicyTimeoutsToTerraform(this._timeouts),
    };
  }
}
