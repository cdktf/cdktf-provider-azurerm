/**
 * Copyright (c) HashiCorp, Inc.
 * SPDX-License-Identifier: MPL-2.0
 */

// https://registry.terraform.io/providers/hashicorp/azurerm/3.63.0/docs/resources/container_registry_token_password
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface ContainerRegistryTokenPasswordConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.63.0/docs/resources/container_registry_token_password#container_registry_token_id ContainerRegistryTokenPassword#container_registry_token_id}
  */
  readonly containerRegistryTokenId: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.63.0/docs/resources/container_registry_token_password#id ContainerRegistryTokenPassword#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * password1 block
  * 
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.63.0/docs/resources/container_registry_token_password#password1 ContainerRegistryTokenPassword#password1}
  */
  readonly password1: ContainerRegistryTokenPasswordPassword1;
  /**
  * password2 block
  * 
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.63.0/docs/resources/container_registry_token_password#password2 ContainerRegistryTokenPassword#password2}
  */
  readonly password2?: ContainerRegistryTokenPasswordPassword2;
  /**
  * timeouts block
  * 
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.63.0/docs/resources/container_registry_token_password#timeouts ContainerRegistryTokenPassword#timeouts}
  */
  readonly timeouts?: ContainerRegistryTokenPasswordTimeouts;
}
export interface ContainerRegistryTokenPasswordPassword1 {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.63.0/docs/resources/container_registry_token_password#expiry ContainerRegistryTokenPassword#expiry}
  */
  readonly expiry?: string;
}

export function containerRegistryTokenPasswordPassword1ToTerraform(struct?: ContainerRegistryTokenPasswordPassword1OutputReference | ContainerRegistryTokenPasswordPassword1): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    expiry: cdktf.stringToTerraform(struct!.expiry),
  }
}

export class ContainerRegistryTokenPasswordPassword1OutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ContainerRegistryTokenPasswordPassword1 | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._expiry !== undefined) {
      hasAnyValues = true;
      internalValueResult.expiry = this._expiry;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ContainerRegistryTokenPasswordPassword1 | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._expiry = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._expiry = value.expiry;
    }
  }

  // expiry - computed: false, optional: true, required: false
  private _expiry?: string; 
  public get expiry() {
    return this.getStringAttribute('expiry');
  }
  public set expiry(value: string) {
    this._expiry = value;
  }
  public resetExpiry() {
    this._expiry = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get expiryInput() {
    return this._expiry;
  }

  // value - computed: true, optional: false, required: false
  public get value() {
    return this.getStringAttribute('value');
  }
}
export interface ContainerRegistryTokenPasswordPassword2 {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.63.0/docs/resources/container_registry_token_password#expiry ContainerRegistryTokenPassword#expiry}
  */
  readonly expiry?: string;
}

export function containerRegistryTokenPasswordPassword2ToTerraform(struct?: ContainerRegistryTokenPasswordPassword2OutputReference | ContainerRegistryTokenPasswordPassword2): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    expiry: cdktf.stringToTerraform(struct!.expiry),
  }
}

export class ContainerRegistryTokenPasswordPassword2OutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ContainerRegistryTokenPasswordPassword2 | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._expiry !== undefined) {
      hasAnyValues = true;
      internalValueResult.expiry = this._expiry;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ContainerRegistryTokenPasswordPassword2 | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._expiry = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._expiry = value.expiry;
    }
  }

  // expiry - computed: false, optional: true, required: false
  private _expiry?: string; 
  public get expiry() {
    return this.getStringAttribute('expiry');
  }
  public set expiry(value: string) {
    this._expiry = value;
  }
  public resetExpiry() {
    this._expiry = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get expiryInput() {
    return this._expiry;
  }

  // value - computed: true, optional: false, required: false
  public get value() {
    return this.getStringAttribute('value');
  }
}
export interface ContainerRegistryTokenPasswordTimeouts {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.63.0/docs/resources/container_registry_token_password#create ContainerRegistryTokenPassword#create}
  */
  readonly create?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.63.0/docs/resources/container_registry_token_password#delete ContainerRegistryTokenPassword#delete}
  */
  readonly delete?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.63.0/docs/resources/container_registry_token_password#read ContainerRegistryTokenPassword#read}
  */
  readonly read?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.63.0/docs/resources/container_registry_token_password#update ContainerRegistryTokenPassword#update}
  */
  readonly update?: string;
}

export function containerRegistryTokenPasswordTimeoutsToTerraform(struct?: ContainerRegistryTokenPasswordTimeouts | cdktf.IResolvable): any {
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

export class ContainerRegistryTokenPasswordTimeoutsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): ContainerRegistryTokenPasswordTimeouts | cdktf.IResolvable | undefined {
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

  public set internalValue(value: ContainerRegistryTokenPasswordTimeouts | cdktf.IResolvable | undefined) {
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
* Represents a {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.63.0/docs/resources/container_registry_token_password azurerm_container_registry_token_password}
*/
export class ContainerRegistryTokenPassword extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "azurerm_container_registry_token_password";

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.63.0/docs/resources/container_registry_token_password azurerm_container_registry_token_password} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options ContainerRegistryTokenPasswordConfig
  */
  public constructor(scope: Construct, id: string, config: ContainerRegistryTokenPasswordConfig) {
    super(scope, id, {
      terraformResourceType: 'azurerm_container_registry_token_password',
      terraformGeneratorMetadata: {
        providerName: 'azurerm',
        providerVersion: '3.63.0',
        providerVersionConstraint: '~> 3.10'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._containerRegistryTokenId = config.containerRegistryTokenId;
    this._id = config.id;
    this._password1.internalValue = config.password1;
    this._password2.internalValue = config.password2;
    this._timeouts.internalValue = config.timeouts;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // container_registry_token_id - computed: false, optional: false, required: true
  private _containerRegistryTokenId?: string; 
  public get containerRegistryTokenId() {
    return this.getStringAttribute('container_registry_token_id');
  }
  public set containerRegistryTokenId(value: string) {
    this._containerRegistryTokenId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get containerRegistryTokenIdInput() {
    return this._containerRegistryTokenId;
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

  // password1 - computed: false, optional: false, required: true
  private _password1 = new ContainerRegistryTokenPasswordPassword1OutputReference(this, "password1");
  public get password1() {
    return this._password1;
  }
  public putPassword1(value: ContainerRegistryTokenPasswordPassword1) {
    this._password1.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get password1Input() {
    return this._password1.internalValue;
  }

  // password2 - computed: false, optional: true, required: false
  private _password2 = new ContainerRegistryTokenPasswordPassword2OutputReference(this, "password2");
  public get password2() {
    return this._password2;
  }
  public putPassword2(value: ContainerRegistryTokenPasswordPassword2) {
    this._password2.internalValue = value;
  }
  public resetPassword2() {
    this._password2.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get password2Input() {
    return this._password2.internalValue;
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts = new ContainerRegistryTokenPasswordTimeoutsOutputReference(this, "timeouts");
  public get timeouts() {
    return this._timeouts;
  }
  public putTimeouts(value: ContainerRegistryTokenPasswordTimeouts) {
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
      container_registry_token_id: cdktf.stringToTerraform(this._containerRegistryTokenId),
      id: cdktf.stringToTerraform(this._id),
      password1: containerRegistryTokenPasswordPassword1ToTerraform(this._password1.internalValue),
      password2: containerRegistryTokenPasswordPassword2ToTerraform(this._password2.internalValue),
      timeouts: containerRegistryTokenPasswordTimeoutsToTerraform(this._timeouts.internalValue),
    };
  }
}
