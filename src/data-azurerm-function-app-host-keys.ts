// https://www.terraform.io/docs/providers/azurerm/d/function_app_host_keys.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataAzurermFunctionAppHostKeysConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/d/function_app_host_keys.html#name DataAzurermFunctionAppHostKeys#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/d/function_app_host_keys.html#resource_group_name DataAzurermFunctionAppHostKeys#resource_group_name}
  */
  readonly resourceGroupName: string;
  /**
  * timeouts block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/d/function_app_host_keys.html#timeouts DataAzurermFunctionAppHostKeys#timeouts}
  */
  readonly timeouts?: DataAzurermFunctionAppHostKeysTimeouts;
}
export interface DataAzurermFunctionAppHostKeysTimeouts {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/d/function_app_host_keys.html#read DataAzurermFunctionAppHostKeys#read}
  */
  readonly read?: string;
}

function dataAzurermFunctionAppHostKeysTimeoutsToTerraform(struct?: DataAzurermFunctionAppHostKeysTimeouts): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    read: cdktf.stringToTerraform(struct!.read),
  }
}


/**
* Represents a {@link https://www.terraform.io/docs/providers/azurerm/d/function_app_host_keys.html azurerm_function_app_host_keys}
*/
export class DataAzurermFunctionAppHostKeys extends cdktf.TerraformDataSource {

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://www.terraform.io/docs/providers/azurerm/d/function_app_host_keys.html azurerm_function_app_host_keys} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataAzurermFunctionAppHostKeysConfig
  */
  public constructor(scope: Construct, id: string, config: DataAzurermFunctionAppHostKeysConfig) {
    super(scope, id, {
      terraformResourceType: 'azurerm_function_app_host_keys',
      terraformGeneratorMetadata: {
        providerName: 'azurerm'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle
    });
    this._name = config.name;
    this._resourceGroupName = config.resourceGroupName;
    this._timeouts = config.timeouts;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // default_function_key - computed: true, optional: false, required: false
  public get defaultFunctionKey() {
    return this.getStringAttribute('default_function_key');
  }

  // event_grid_extension_config_key - computed: true, optional: false, required: false
  public get eventGridExtensionConfigKey() {
    return this.getStringAttribute('event_grid_extension_config_key');
  }

  // id - computed: true, optional: true, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // master_key - computed: true, optional: false, required: false
  public get masterKey() {
    return this.getStringAttribute('master_key');
  }

  // name - computed: false, optional: false, required: true
  private _name: string;
  public get name() {
    return this.getStringAttribute('name');
  }
  public set name(value: string) {
    this._name = value;
  }
  // Temporarily expose input value. Use with caution.
  public get nameInput() {
    return this._name
  }

  // primary_key - computed: true, optional: false, required: false
  public get primaryKey() {
    return this.getStringAttribute('primary_key');
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

  // timeouts - computed: false, optional: true, required: false
  private _timeouts?: DataAzurermFunctionAppHostKeysTimeouts;
  public get timeouts() {
    return this.interpolationForAttribute('timeouts') as any;
  }
  public set timeouts(value: DataAzurermFunctionAppHostKeysTimeouts ) {
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
      name: cdktf.stringToTerraform(this._name),
      resource_group_name: cdktf.stringToTerraform(this._resourceGroupName),
      timeouts: dataAzurermFunctionAppHostKeysTimeoutsToTerraform(this._timeouts),
    };
  }
}
