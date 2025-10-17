/**
 * Copyright (c) HashiCorp, Inc.
 * SPDX-License-Identifier: MPL-2.0
 */

// https://registry.terraform.io/providers/hashicorp/azurerm/4.49.0/docs/resources/api_management_workspace_policy_fragment
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface ApiManagementWorkspacePolicyFragmentConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.49.0/docs/resources/api_management_workspace_policy_fragment#api_management_workspace_id ApiManagementWorkspacePolicyFragment#api_management_workspace_id}
  */
  readonly apiManagementWorkspaceId: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.49.0/docs/resources/api_management_workspace_policy_fragment#description ApiManagementWorkspacePolicyFragment#description}
  */
  readonly description?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.49.0/docs/resources/api_management_workspace_policy_fragment#id ApiManagementWorkspacePolicyFragment#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.49.0/docs/resources/api_management_workspace_policy_fragment#name ApiManagementWorkspacePolicyFragment#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.49.0/docs/resources/api_management_workspace_policy_fragment#xml_content ApiManagementWorkspacePolicyFragment#xml_content}
  */
  readonly xmlContent: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.49.0/docs/resources/api_management_workspace_policy_fragment#xml_format ApiManagementWorkspacePolicyFragment#xml_format}
  */
  readonly xmlFormat?: string;
  /**
  * timeouts block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.49.0/docs/resources/api_management_workspace_policy_fragment#timeouts ApiManagementWorkspacePolicyFragment#timeouts}
  */
  readonly timeouts?: ApiManagementWorkspacePolicyFragmentTimeouts;
}
export interface ApiManagementWorkspacePolicyFragmentTimeouts {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.49.0/docs/resources/api_management_workspace_policy_fragment#create ApiManagementWorkspacePolicyFragment#create}
  */
  readonly create?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.49.0/docs/resources/api_management_workspace_policy_fragment#delete ApiManagementWorkspacePolicyFragment#delete}
  */
  readonly delete?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.49.0/docs/resources/api_management_workspace_policy_fragment#read ApiManagementWorkspacePolicyFragment#read}
  */
  readonly read?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.49.0/docs/resources/api_management_workspace_policy_fragment#update ApiManagementWorkspacePolicyFragment#update}
  */
  readonly update?: string;
}

export function apiManagementWorkspacePolicyFragmentTimeoutsToTerraform(struct?: ApiManagementWorkspacePolicyFragmentTimeouts | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
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


export function apiManagementWorkspacePolicyFragmentTimeoutsToHclTerraform(struct?: ApiManagementWorkspacePolicyFragmentTimeouts | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    create: {
      value: cdktf.stringToHclTerraform(struct!.create),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    delete: {
      value: cdktf.stringToHclTerraform(struct!.delete),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    read: {
      value: cdktf.stringToHclTerraform(struct!.read),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    update: {
      value: cdktf.stringToHclTerraform(struct!.update),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ApiManagementWorkspacePolicyFragmentTimeoutsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): ApiManagementWorkspacePolicyFragmentTimeouts | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._create !== undefined) {
      hasAnyValues = true;
      internalValueResult.create = this._create;
    }
    if (this._delete !== undefined) {
      hasAnyValues = true;
      internalValueResult.delete = this._delete;
    }
    if (this._read !== undefined) {
      hasAnyValues = true;
      internalValueResult.read = this._read;
    }
    if (this._update !== undefined) {
      hasAnyValues = true;
      internalValueResult.update = this._update;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ApiManagementWorkspacePolicyFragmentTimeouts | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._create = undefined;
      this._delete = undefined;
      this._read = undefined;
      this._update = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._create = value.create;
      this._delete = value.delete;
      this._read = value.read;
      this._update = value.update;
    }
  }

  // create - computed: false, optional: true, required: false
  private _create?: string; 
  public get create() {
    return this.getStringAttribute('create');
  }
  public set create(value: string) {
    this._create = value;
  }
  public resetCreate() {
    this._create = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get createInput() {
    return this._create;
  }

  // delete - computed: false, optional: true, required: false
  private _delete?: string; 
  public get delete() {
    return this.getStringAttribute('delete');
  }
  public set delete(value: string) {
    this._delete = value;
  }
  public resetDelete() {
    this._delete = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get deleteInput() {
    return this._delete;
  }

  // read - computed: false, optional: true, required: false
  private _read?: string; 
  public get read() {
    return this.getStringAttribute('read');
  }
  public set read(value: string) {
    this._read = value;
  }
  public resetRead() {
    this._read = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get readInput() {
    return this._read;
  }

  // update - computed: false, optional: true, required: false
  private _update?: string; 
  public get update() {
    return this.getStringAttribute('update');
  }
  public set update(value: string) {
    this._update = value;
  }
  public resetUpdate() {
    this._update = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get updateInput() {
    return this._update;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.49.0/docs/resources/api_management_workspace_policy_fragment azurerm_api_management_workspace_policy_fragment}
*/
export class ApiManagementWorkspacePolicyFragment extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "azurerm_api_management_workspace_policy_fragment";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a ApiManagementWorkspacePolicyFragment resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the ApiManagementWorkspacePolicyFragment to import
  * @param importFromId The id of the existing ApiManagementWorkspacePolicyFragment that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.49.0/docs/resources/api_management_workspace_policy_fragment#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the ApiManagementWorkspacePolicyFragment to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "azurerm_api_management_workspace_policy_fragment", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.49.0/docs/resources/api_management_workspace_policy_fragment azurerm_api_management_workspace_policy_fragment} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options ApiManagementWorkspacePolicyFragmentConfig
  */
  public constructor(scope: Construct, id: string, config: ApiManagementWorkspacePolicyFragmentConfig) {
    super(scope, id, {
      terraformResourceType: 'azurerm_api_management_workspace_policy_fragment',
      terraformGeneratorMetadata: {
        providerName: 'azurerm',
        providerVersion: '4.49.0',
        providerVersionConstraint: '~> 4.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._apiManagementWorkspaceId = config.apiManagementWorkspaceId;
    this._description = config.description;
    this._id = config.id;
    this._name = config.name;
    this._xmlContent = config.xmlContent;
    this._xmlFormat = config.xmlFormat;
    this._timeouts.internalValue = config.timeouts;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // api_management_workspace_id - computed: false, optional: false, required: true
  private _apiManagementWorkspaceId?: string; 
  public get apiManagementWorkspaceId() {
    return this.getStringAttribute('api_management_workspace_id');
  }
  public set apiManagementWorkspaceId(value: string) {
    this._apiManagementWorkspaceId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get apiManagementWorkspaceIdInput() {
    return this._apiManagementWorkspaceId;
  }

  // description - computed: false, optional: true, required: false
  private _description?: string; 
  public get description() {
    return this.getStringAttribute('description');
  }
  public set description(value: string) {
    this._description = value;
  }
  public resetDescription() {
    this._description = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get descriptionInput() {
    return this._description;
  }

  // id - computed: true, optional: true, required: false
  private _id?: string; 
  public get id() {
    return this.getStringAttribute('id');
  }
  public set id(value: string) {
    this._id = value;
  }
  public resetId() {
    this._id = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get idInput() {
    return this._id;
  }

  // name - computed: false, optional: false, required: true
  private _name?: string; 
  public get name() {
    return this.getStringAttribute('name');
  }
  public set name(value: string) {
    this._name = value;
  }
  // Temporarily expose input value. Use with caution.
  public get nameInput() {
    return this._name;
  }

  // xml_content - computed: false, optional: false, required: true
  private _xmlContent?: string; 
  public get xmlContent() {
    return this.getStringAttribute('xml_content');
  }
  public set xmlContent(value: string) {
    this._xmlContent = value;
  }
  // Temporarily expose input value. Use with caution.
  public get xmlContentInput() {
    return this._xmlContent;
  }

  // xml_format - computed: false, optional: true, required: false
  private _xmlFormat?: string; 
  public get xmlFormat() {
    return this.getStringAttribute('xml_format');
  }
  public set xmlFormat(value: string) {
    this._xmlFormat = value;
  }
  public resetXmlFormat() {
    this._xmlFormat = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get xmlFormatInput() {
    return this._xmlFormat;
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts = new ApiManagementWorkspacePolicyFragmentTimeoutsOutputReference(this, "timeouts");
  public get timeouts() {
    return this._timeouts;
  }
  public putTimeouts(value: ApiManagementWorkspacePolicyFragmentTimeouts) {
    this._timeouts.internalValue = value;
  }
  public resetTimeouts() {
    this._timeouts.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get timeoutsInput() {
    return this._timeouts.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      api_management_workspace_id: cdktf.stringToTerraform(this._apiManagementWorkspaceId),
      description: cdktf.stringToTerraform(this._description),
      id: cdktf.stringToTerraform(this._id),
      name: cdktf.stringToTerraform(this._name),
      xml_content: cdktf.stringToTerraform(this._xmlContent),
      xml_format: cdktf.stringToTerraform(this._xmlFormat),
      timeouts: apiManagementWorkspacePolicyFragmentTimeoutsToTerraform(this._timeouts.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      api_management_workspace_id: {
        value: cdktf.stringToHclTerraform(this._apiManagementWorkspaceId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      description: {
        value: cdktf.stringToHclTerraform(this._description),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      id: {
        value: cdktf.stringToHclTerraform(this._id),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      name: {
        value: cdktf.stringToHclTerraform(this._name),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      xml_content: {
        value: cdktf.stringToHclTerraform(this._xmlContent),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      xml_format: {
        value: cdktf.stringToHclTerraform(this._xmlFormat),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      timeouts: {
        value: apiManagementWorkspacePolicyFragmentTimeoutsToHclTerraform(this._timeouts.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "ApiManagementWorkspacePolicyFragmentTimeouts",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
