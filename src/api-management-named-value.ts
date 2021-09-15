// https://www.terraform.io/docs/providers/azurerm/r/api_management_named_value.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface ApiManagementNamedValueConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/api_management_named_value.html#api_management_name ApiManagementNamedValue#api_management_name}
  */
  readonly apiManagementName: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/api_management_named_value.html#display_name ApiManagementNamedValue#display_name}
  */
  readonly displayName: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/api_management_named_value.html#name ApiManagementNamedValue#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/api_management_named_value.html#resource_group_name ApiManagementNamedValue#resource_group_name}
  */
  readonly resourceGroupName: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/api_management_named_value.html#secret ApiManagementNamedValue#secret}
  */
  readonly secret?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/api_management_named_value.html#tags ApiManagementNamedValue#tags}
  */
  readonly tags?: string[];
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/api_management_named_value.html#value ApiManagementNamedValue#value}
  */
  readonly value?: string;
  /**
  * timeouts block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/api_management_named_value.html#timeouts ApiManagementNamedValue#timeouts}
  */
  readonly timeouts?: ApiManagementNamedValueTimeouts;
  /**
  * value_from_key_vault block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/api_management_named_value.html#value_from_key_vault ApiManagementNamedValue#value_from_key_vault}
  */
  readonly valueFromKeyVault?: ApiManagementNamedValueValueFromKeyVault[];
}
export interface ApiManagementNamedValueTimeouts {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/api_management_named_value.html#create ApiManagementNamedValue#create}
  */
  readonly create?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/api_management_named_value.html#delete ApiManagementNamedValue#delete}
  */
  readonly delete?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/api_management_named_value.html#read ApiManagementNamedValue#read}
  */
  readonly read?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/api_management_named_value.html#update ApiManagementNamedValue#update}
  */
  readonly update?: string;
}

function apiManagementNamedValueTimeoutsToTerraform(struct?: ApiManagementNamedValueTimeouts): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    create: cdktf.stringToTerraform(struct!.create),
    delete: cdktf.stringToTerraform(struct!.delete),
    read: cdktf.stringToTerraform(struct!.read),
    update: cdktf.stringToTerraform(struct!.update),
  }
}

export interface ApiManagementNamedValueValueFromKeyVault {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/api_management_named_value.html#identity_client_id ApiManagementNamedValue#identity_client_id}
  */
  readonly identityClientId?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/api_management_named_value.html#secret_id ApiManagementNamedValue#secret_id}
  */
  readonly secretId: string;
}

function apiManagementNamedValueValueFromKeyVaultToTerraform(struct?: ApiManagementNamedValueValueFromKeyVault): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    identity_client_id: cdktf.stringToTerraform(struct!.identityClientId),
    secret_id: cdktf.stringToTerraform(struct!.secretId),
  }
}


/**
* Represents a {@link https://www.terraform.io/docs/providers/azurerm/r/api_management_named_value.html azurerm_api_management_named_value}
*/
export class ApiManagementNamedValue extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType: string = "azurerm_api_management_named_value";

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://www.terraform.io/docs/providers/azurerm/r/api_management_named_value.html azurerm_api_management_named_value} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options ApiManagementNamedValueConfig
  */
  public constructor(scope: Construct, id: string, config: ApiManagementNamedValueConfig) {
    super(scope, id, {
      terraformResourceType: 'azurerm_api_management_named_value',
      terraformGeneratorMetadata: {
        providerName: 'azurerm'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle
    });
    this._apiManagementName = config.apiManagementName;
    this._displayName = config.displayName;
    this._name = config.name;
    this._resourceGroupName = config.resourceGroupName;
    this._secret = config.secret;
    this._tags = config.tags;
    this._value = config.value;
    this._timeouts = config.timeouts;
    this._valueFromKeyVault = config.valueFromKeyVault;
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

  // secret - computed: false, optional: true, required: false
  private _secret?: boolean | cdktf.IResolvable;
  public get secret() {
    return this.getBooleanAttribute('secret');
  }
  public set secret(value: boolean | cdktf.IResolvable ) {
    this._secret = value;
  }
  public resetSecret() {
    this._secret = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get secretInput() {
    return this._secret
  }

  // tags - computed: false, optional: true, required: false
  private _tags?: string[];
  public get tags() {
    return this.getListAttribute('tags');
  }
  public set tags(value: string[] ) {
    this._tags = value;
  }
  public resetTags() {
    this._tags = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tagsInput() {
    return this._tags
  }

  // value - computed: false, optional: true, required: false
  private _value?: string;
  public get value() {
    return this.getStringAttribute('value');
  }
  public set value(value: string ) {
    this._value = value;
  }
  public resetValue() {
    this._value = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get valueInput() {
    return this._value
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts?: ApiManagementNamedValueTimeouts;
  public get timeouts() {
    return this.interpolationForAttribute('timeouts') as any;
  }
  public set timeouts(value: ApiManagementNamedValueTimeouts ) {
    this._timeouts = value;
  }
  public resetTimeouts() {
    this._timeouts = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get timeoutsInput() {
    return this._timeouts
  }

  // value_from_key_vault - computed: false, optional: true, required: false
  private _valueFromKeyVault?: ApiManagementNamedValueValueFromKeyVault[];
  public get valueFromKeyVault() {
    return this.interpolationForAttribute('value_from_key_vault') as any;
  }
  public set valueFromKeyVault(value: ApiManagementNamedValueValueFromKeyVault[] ) {
    this._valueFromKeyVault = value;
  }
  public resetValueFromKeyVault() {
    this._valueFromKeyVault = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get valueFromKeyVaultInput() {
    return this._valueFromKeyVault
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      api_management_name: cdktf.stringToTerraform(this._apiManagementName),
      display_name: cdktf.stringToTerraform(this._displayName),
      name: cdktf.stringToTerraform(this._name),
      resource_group_name: cdktf.stringToTerraform(this._resourceGroupName),
      secret: cdktf.booleanToTerraform(this._secret),
      tags: cdktf.listMapper(cdktf.stringToTerraform)(this._tags),
      value: cdktf.stringToTerraform(this._value),
      timeouts: apiManagementNamedValueTimeoutsToTerraform(this._timeouts),
      value_from_key_vault: cdktf.listMapper(apiManagementNamedValueValueFromKeyVaultToTerraform)(this._valueFromKeyVault),
    };
  }
}
