/**
 * Copyright (c) HashiCorp, Inc.
 * SPDX-License-Identifier: MPL-2.0
 */

// https://registry.terraform.io/providers/hashicorp/azurerm/4.37.0/docs/resources/static_web_app_function_app_registration
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface StaticWebAppFunctionAppRegistrationConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.37.0/docs/resources/static_web_app_function_app_registration#function_app_id StaticWebAppFunctionAppRegistration#function_app_id}
  */
  readonly functionAppId: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.37.0/docs/resources/static_web_app_function_app_registration#id StaticWebAppFunctionAppRegistration#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.37.0/docs/resources/static_web_app_function_app_registration#static_web_app_id StaticWebAppFunctionAppRegistration#static_web_app_id}
  */
  readonly staticWebAppId: string;
  /**
  * timeouts block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.37.0/docs/resources/static_web_app_function_app_registration#timeouts StaticWebAppFunctionAppRegistration#timeouts}
  */
  readonly timeouts?: StaticWebAppFunctionAppRegistrationTimeouts;
}
export interface StaticWebAppFunctionAppRegistrationTimeouts {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.37.0/docs/resources/static_web_app_function_app_registration#create StaticWebAppFunctionAppRegistration#create}
  */
  readonly create?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.37.0/docs/resources/static_web_app_function_app_registration#delete StaticWebAppFunctionAppRegistration#delete}
  */
  readonly delete?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.37.0/docs/resources/static_web_app_function_app_registration#read StaticWebAppFunctionAppRegistration#read}
  */
  readonly read?: string;
}

export function staticWebAppFunctionAppRegistrationTimeoutsToTerraform(struct?: StaticWebAppFunctionAppRegistrationTimeouts | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    create: cdktf.stringToTerraform(struct!.create),
    delete: cdktf.stringToTerraform(struct!.delete),
    read: cdktf.stringToTerraform(struct!.read),
  }
}


export function staticWebAppFunctionAppRegistrationTimeoutsToHclTerraform(struct?: StaticWebAppFunctionAppRegistrationTimeouts | cdktf.IResolvable): any {
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
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class StaticWebAppFunctionAppRegistrationTimeoutsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): StaticWebAppFunctionAppRegistrationTimeouts | cdktf.IResolvable | undefined {
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
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: StaticWebAppFunctionAppRegistrationTimeouts | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._create = undefined;
      this._delete = undefined;
      this._read = undefined;
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
}

/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.37.0/docs/resources/static_web_app_function_app_registration azurerm_static_web_app_function_app_registration}
*/
export class StaticWebAppFunctionAppRegistration extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "azurerm_static_web_app_function_app_registration";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a StaticWebAppFunctionAppRegistration resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the StaticWebAppFunctionAppRegistration to import
  * @param importFromId The id of the existing StaticWebAppFunctionAppRegistration that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.37.0/docs/resources/static_web_app_function_app_registration#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the StaticWebAppFunctionAppRegistration to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "azurerm_static_web_app_function_app_registration", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.37.0/docs/resources/static_web_app_function_app_registration azurerm_static_web_app_function_app_registration} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options StaticWebAppFunctionAppRegistrationConfig
  */
  public constructor(scope: Construct, id: string, config: StaticWebAppFunctionAppRegistrationConfig) {
    super(scope, id, {
      terraformResourceType: 'azurerm_static_web_app_function_app_registration',
      terraformGeneratorMetadata: {
        providerName: 'azurerm',
        providerVersion: '4.37.0',
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
    this._functionAppId = config.functionAppId;
    this._id = config.id;
    this._staticWebAppId = config.staticWebAppId;
    this._timeouts.internalValue = config.timeouts;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // function_app_id - computed: false, optional: false, required: true
  private _functionAppId?: string; 
  public get functionAppId() {
    return this.getStringAttribute('function_app_id');
  }
  public set functionAppId(value: string) {
    this._functionAppId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get functionAppIdInput() {
    return this._functionAppId;
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

  // static_web_app_id - computed: false, optional: false, required: true
  private _staticWebAppId?: string; 
  public get staticWebAppId() {
    return this.getStringAttribute('static_web_app_id');
  }
  public set staticWebAppId(value: string) {
    this._staticWebAppId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get staticWebAppIdInput() {
    return this._staticWebAppId;
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts = new StaticWebAppFunctionAppRegistrationTimeoutsOutputReference(this, "timeouts");
  public get timeouts() {
    return this._timeouts;
  }
  public putTimeouts(value: StaticWebAppFunctionAppRegistrationTimeouts) {
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
      function_app_id: cdktf.stringToTerraform(this._functionAppId),
      id: cdktf.stringToTerraform(this._id),
      static_web_app_id: cdktf.stringToTerraform(this._staticWebAppId),
      timeouts: staticWebAppFunctionAppRegistrationTimeoutsToTerraform(this._timeouts.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      function_app_id: {
        value: cdktf.stringToHclTerraform(this._functionAppId),
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
      static_web_app_id: {
        value: cdktf.stringToHclTerraform(this._staticWebAppId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      timeouts: {
        value: staticWebAppFunctionAppRegistrationTimeoutsToHclTerraform(this._timeouts.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "StaticWebAppFunctionAppRegistrationTimeouts",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
