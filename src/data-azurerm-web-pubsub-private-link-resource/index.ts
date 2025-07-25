/**
 * Copyright (c) HashiCorp, Inc.
 * SPDX-License-Identifier: MPL-2.0
 */

// https://registry.terraform.io/providers/hashicorp/azurerm/4.37.0/docs/data-sources/web_pubsub_private_link_resource
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataAzurermWebPubsubPrivateLinkResourceConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.37.0/docs/data-sources/web_pubsub_private_link_resource#id DataAzurermWebPubsubPrivateLinkResource#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.37.0/docs/data-sources/web_pubsub_private_link_resource#web_pubsub_id DataAzurermWebPubsubPrivateLinkResource#web_pubsub_id}
  */
  readonly webPubsubId: string;
  /**
  * timeouts block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.37.0/docs/data-sources/web_pubsub_private_link_resource#timeouts DataAzurermWebPubsubPrivateLinkResource#timeouts}
  */
  readonly timeouts?: DataAzurermWebPubsubPrivateLinkResourceTimeouts;
}
export interface DataAzurermWebPubsubPrivateLinkResourceSharedPrivateLinkResourceTypes {
}

export function dataAzurermWebPubsubPrivateLinkResourceSharedPrivateLinkResourceTypesToTerraform(struct?: DataAzurermWebPubsubPrivateLinkResourceSharedPrivateLinkResourceTypes): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataAzurermWebPubsubPrivateLinkResourceSharedPrivateLinkResourceTypesToHclTerraform(struct?: DataAzurermWebPubsubPrivateLinkResourceSharedPrivateLinkResourceTypes): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAzurermWebPubsubPrivateLinkResourceSharedPrivateLinkResourceTypesOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): DataAzurermWebPubsubPrivateLinkResourceSharedPrivateLinkResourceTypes | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAzurermWebPubsubPrivateLinkResourceSharedPrivateLinkResourceTypes | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // description - computed: true, optional: false, required: false
  public get description() {
    return this.getStringAttribute('description');
  }

  // subresource_name - computed: true, optional: false, required: false
  public get subresourceName() {
    return this.getStringAttribute('subresource_name');
  }
}

export class DataAzurermWebPubsubPrivateLinkResourceSharedPrivateLinkResourceTypesList extends cdktf.ComplexList {

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): DataAzurermWebPubsubPrivateLinkResourceSharedPrivateLinkResourceTypesOutputReference {
    return new DataAzurermWebPubsubPrivateLinkResourceSharedPrivateLinkResourceTypesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataAzurermWebPubsubPrivateLinkResourceTimeouts {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.37.0/docs/data-sources/web_pubsub_private_link_resource#read DataAzurermWebPubsubPrivateLinkResource#read}
  */
  readonly read?: string;
}

export function dataAzurermWebPubsubPrivateLinkResourceTimeoutsToTerraform(struct?: DataAzurermWebPubsubPrivateLinkResourceTimeouts | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    read: cdktf.stringToTerraform(struct!.read),
  }
}


export function dataAzurermWebPubsubPrivateLinkResourceTimeoutsToHclTerraform(struct?: DataAzurermWebPubsubPrivateLinkResourceTimeouts | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
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

export class DataAzurermWebPubsubPrivateLinkResourceTimeoutsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAzurermWebPubsubPrivateLinkResourceTimeouts | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._read !== undefined) {
      hasAnyValues = true;
      internalValueResult.read = this._read;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAzurermWebPubsubPrivateLinkResourceTimeouts | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._read = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._read = value.read;
    }
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
* Represents a {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.37.0/docs/data-sources/web_pubsub_private_link_resource azurerm_web_pubsub_private_link_resource}
*/
export class DataAzurermWebPubsubPrivateLinkResource extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "azurerm_web_pubsub_private_link_resource";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataAzurermWebPubsubPrivateLinkResource resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataAzurermWebPubsubPrivateLinkResource to import
  * @param importFromId The id of the existing DataAzurermWebPubsubPrivateLinkResource that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.37.0/docs/data-sources/web_pubsub_private_link_resource#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataAzurermWebPubsubPrivateLinkResource to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "azurerm_web_pubsub_private_link_resource", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.37.0/docs/data-sources/web_pubsub_private_link_resource azurerm_web_pubsub_private_link_resource} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataAzurermWebPubsubPrivateLinkResourceConfig
  */
  public constructor(scope: Construct, id: string, config: DataAzurermWebPubsubPrivateLinkResourceConfig) {
    super(scope, id, {
      terraformResourceType: 'azurerm_web_pubsub_private_link_resource',
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
    this._id = config.id;
    this._webPubsubId = config.webPubsubId;
    this._timeouts.internalValue = config.timeouts;
  }

  // ==========
  // ATTRIBUTES
  // ==========

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

  // shared_private_link_resource_types - computed: true, optional: false, required: false
  private _sharedPrivateLinkResourceTypes = new DataAzurermWebPubsubPrivateLinkResourceSharedPrivateLinkResourceTypesList(this, "shared_private_link_resource_types", false);
  public get sharedPrivateLinkResourceTypes() {
    return this._sharedPrivateLinkResourceTypes;
  }

  // web_pubsub_id - computed: false, optional: false, required: true
  private _webPubsubId?: string; 
  public get webPubsubId() {
    return this.getStringAttribute('web_pubsub_id');
  }
  public set webPubsubId(value: string) {
    this._webPubsubId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get webPubsubIdInput() {
    return this._webPubsubId;
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts = new DataAzurermWebPubsubPrivateLinkResourceTimeoutsOutputReference(this, "timeouts");
  public get timeouts() {
    return this._timeouts;
  }
  public putTimeouts(value: DataAzurermWebPubsubPrivateLinkResourceTimeouts) {
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
      id: cdktf.stringToTerraform(this._id),
      web_pubsub_id: cdktf.stringToTerraform(this._webPubsubId),
      timeouts: dataAzurermWebPubsubPrivateLinkResourceTimeoutsToTerraform(this._timeouts.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      id: {
        value: cdktf.stringToHclTerraform(this._id),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      web_pubsub_id: {
        value: cdktf.stringToHclTerraform(this._webPubsubId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      timeouts: {
        value: dataAzurermWebPubsubPrivateLinkResourceTimeoutsToHclTerraform(this._timeouts.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "DataAzurermWebPubsubPrivateLinkResourceTimeouts",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
