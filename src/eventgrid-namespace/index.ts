/**
 * Copyright (c) HashiCorp, Inc.
 * SPDX-License-Identifier: MPL-2.0
 */

// https://registry.terraform.io/providers/hashicorp/azurerm/4.31.0/docs/resources/eventgrid_namespace
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface EventgridNamespaceConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.31.0/docs/resources/eventgrid_namespace#capacity EventgridNamespace#capacity}
  */
  readonly capacity?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.31.0/docs/resources/eventgrid_namespace#id EventgridNamespace#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.31.0/docs/resources/eventgrid_namespace#location EventgridNamespace#location}
  */
  readonly location: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.31.0/docs/resources/eventgrid_namespace#name EventgridNamespace#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.31.0/docs/resources/eventgrid_namespace#public_network_access EventgridNamespace#public_network_access}
  */
  readonly publicNetworkAccess?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.31.0/docs/resources/eventgrid_namespace#resource_group_name EventgridNamespace#resource_group_name}
  */
  readonly resourceGroupName: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.31.0/docs/resources/eventgrid_namespace#sku EventgridNamespace#sku}
  */
  readonly sku?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.31.0/docs/resources/eventgrid_namespace#tags EventgridNamespace#tags}
  */
  readonly tags?: { [key: string]: string };
  /**
  * identity block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.31.0/docs/resources/eventgrid_namespace#identity EventgridNamespace#identity}
  */
  readonly identity?: EventgridNamespaceIdentity;
  /**
  * inbound_ip_rule block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.31.0/docs/resources/eventgrid_namespace#inbound_ip_rule EventgridNamespace#inbound_ip_rule}
  */
  readonly inboundIpRule?: EventgridNamespaceInboundIpRule[] | cdktf.IResolvable;
  /**
  * timeouts block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.31.0/docs/resources/eventgrid_namespace#timeouts EventgridNamespace#timeouts}
  */
  readonly timeouts?: EventgridNamespaceTimeouts;
  /**
  * topic_spaces_configuration block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.31.0/docs/resources/eventgrid_namespace#topic_spaces_configuration EventgridNamespace#topic_spaces_configuration}
  */
  readonly topicSpacesConfiguration?: EventgridNamespaceTopicSpacesConfiguration[] | cdktf.IResolvable;
}
export interface EventgridNamespaceIdentity {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.31.0/docs/resources/eventgrid_namespace#identity_ids EventgridNamespace#identity_ids}
  */
  readonly identityIds?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.31.0/docs/resources/eventgrid_namespace#type EventgridNamespace#type}
  */
  readonly type: string;
}

export function eventgridNamespaceIdentityToTerraform(struct?: EventgridNamespaceIdentityOutputReference | EventgridNamespaceIdentity): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    identity_ids: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.identityIds),
    type: cdktf.stringToTerraform(struct!.type),
  }
}


export function eventgridNamespaceIdentityToHclTerraform(struct?: EventgridNamespaceIdentityOutputReference | EventgridNamespaceIdentity): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    identity_ids: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.identityIds),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
    type: {
      value: cdktf.stringToHclTerraform(struct!.type),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class EventgridNamespaceIdentityOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): EventgridNamespaceIdentity | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._identityIds !== undefined) {
      hasAnyValues = true;
      internalValueResult.identityIds = this._identityIds;
    }
    if (this._type !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: EventgridNamespaceIdentity | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._identityIds = undefined;
      this._type = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._identityIds = value.identityIds;
      this._type = value.type;
    }
  }

  // identity_ids - computed: false, optional: true, required: false
  private _identityIds?: string[]; 
  public get identityIds() {
    return cdktf.Fn.tolist(this.getListAttribute('identity_ids'));
  }
  public set identityIds(value: string[]) {
    this._identityIds = value;
  }
  public resetIdentityIds() {
    this._identityIds = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get identityIdsInput() {
    return this._identityIds;
  }

  // principal_id - computed: true, optional: false, required: false
  public get principalId() {
    return this.getStringAttribute('principal_id');
  }

  // tenant_id - computed: true, optional: false, required: false
  public get tenantId() {
    return this.getStringAttribute('tenant_id');
  }

  // type - computed: false, optional: false, required: true
  private _type?: string; 
  public get type() {
    return this.getStringAttribute('type');
  }
  public set type(value: string) {
    this._type = value;
  }
  // Temporarily expose input value. Use with caution.
  public get typeInput() {
    return this._type;
  }
}
export interface EventgridNamespaceInboundIpRule {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.31.0/docs/resources/eventgrid_namespace#action EventgridNamespace#action}
  */
  readonly action?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.31.0/docs/resources/eventgrid_namespace#ip_mask EventgridNamespace#ip_mask}
  */
  readonly ipMask: string;
}

export function eventgridNamespaceInboundIpRuleToTerraform(struct?: EventgridNamespaceInboundIpRule | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    action: cdktf.stringToTerraform(struct!.action),
    ip_mask: cdktf.stringToTerraform(struct!.ipMask),
  }
}


export function eventgridNamespaceInboundIpRuleToHclTerraform(struct?: EventgridNamespaceInboundIpRule | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    action: {
      value: cdktf.stringToHclTerraform(struct!.action),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    ip_mask: {
      value: cdktf.stringToHclTerraform(struct!.ipMask),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class EventgridNamespaceInboundIpRuleOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): EventgridNamespaceInboundIpRule | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._action !== undefined) {
      hasAnyValues = true;
      internalValueResult.action = this._action;
    }
    if (this._ipMask !== undefined) {
      hasAnyValues = true;
      internalValueResult.ipMask = this._ipMask;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: EventgridNamespaceInboundIpRule | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._action = undefined;
      this._ipMask = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._action = value.action;
      this._ipMask = value.ipMask;
    }
  }

  // action - computed: false, optional: true, required: false
  private _action?: string; 
  public get action() {
    return this.getStringAttribute('action');
  }
  public set action(value: string) {
    this._action = value;
  }
  public resetAction() {
    this._action = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get actionInput() {
    return this._action;
  }

  // ip_mask - computed: false, optional: false, required: true
  private _ipMask?: string; 
  public get ipMask() {
    return this.getStringAttribute('ip_mask');
  }
  public set ipMask(value: string) {
    this._ipMask = value;
  }
  // Temporarily expose input value. Use with caution.
  public get ipMaskInput() {
    return this._ipMask;
  }
}

export class EventgridNamespaceInboundIpRuleList extends cdktf.ComplexList {
  public internalValue? : EventgridNamespaceInboundIpRule[] | cdktf.IResolvable

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
  public get(index: number): EventgridNamespaceInboundIpRuleOutputReference {
    return new EventgridNamespaceInboundIpRuleOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface EventgridNamespaceTimeouts {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.31.0/docs/resources/eventgrid_namespace#create EventgridNamespace#create}
  */
  readonly create?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.31.0/docs/resources/eventgrid_namespace#delete EventgridNamespace#delete}
  */
  readonly delete?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.31.0/docs/resources/eventgrid_namespace#read EventgridNamespace#read}
  */
  readonly read?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.31.0/docs/resources/eventgrid_namespace#update EventgridNamespace#update}
  */
  readonly update?: string;
}

export function eventgridNamespaceTimeoutsToTerraform(struct?: EventgridNamespaceTimeouts | cdktf.IResolvable): any {
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


export function eventgridNamespaceTimeoutsToHclTerraform(struct?: EventgridNamespaceTimeouts | cdktf.IResolvable): any {
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

export class EventgridNamespaceTimeoutsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): EventgridNamespaceTimeouts | cdktf.IResolvable | undefined {
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

  public set internalValue(value: EventgridNamespaceTimeouts | cdktf.IResolvable | undefined) {
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
export interface EventgridNamespaceTopicSpacesConfigurationDynamicRoutingEnrichment {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.31.0/docs/resources/eventgrid_namespace#key EventgridNamespace#key}
  */
  readonly key: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.31.0/docs/resources/eventgrid_namespace#value EventgridNamespace#value}
  */
  readonly value: string;
}

export function eventgridNamespaceTopicSpacesConfigurationDynamicRoutingEnrichmentToTerraform(struct?: EventgridNamespaceTopicSpacesConfigurationDynamicRoutingEnrichment | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    key: cdktf.stringToTerraform(struct!.key),
    value: cdktf.stringToTerraform(struct!.value),
  }
}


export function eventgridNamespaceTopicSpacesConfigurationDynamicRoutingEnrichmentToHclTerraform(struct?: EventgridNamespaceTopicSpacesConfigurationDynamicRoutingEnrichment | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    key: {
      value: cdktf.stringToHclTerraform(struct!.key),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    value: {
      value: cdktf.stringToHclTerraform(struct!.value),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class EventgridNamespaceTopicSpacesConfigurationDynamicRoutingEnrichmentOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): EventgridNamespaceTopicSpacesConfigurationDynamicRoutingEnrichment | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._key !== undefined) {
      hasAnyValues = true;
      internalValueResult.key = this._key;
    }
    if (this._value !== undefined) {
      hasAnyValues = true;
      internalValueResult.value = this._value;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: EventgridNamespaceTopicSpacesConfigurationDynamicRoutingEnrichment | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._key = undefined;
      this._value = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._key = value.key;
      this._value = value.value;
    }
  }

  // key - computed: false, optional: false, required: true
  private _key?: string; 
  public get key() {
    return this.getStringAttribute('key');
  }
  public set key(value: string) {
    this._key = value;
  }
  // Temporarily expose input value. Use with caution.
  public get keyInput() {
    return this._key;
  }

  // value - computed: false, optional: false, required: true
  private _value?: string; 
  public get value() {
    return this.getStringAttribute('value');
  }
  public set value(value: string) {
    this._value = value;
  }
  // Temporarily expose input value. Use with caution.
  public get valueInput() {
    return this._value;
  }
}

export class EventgridNamespaceTopicSpacesConfigurationDynamicRoutingEnrichmentList extends cdktf.ComplexList {
  public internalValue? : EventgridNamespaceTopicSpacesConfigurationDynamicRoutingEnrichment[] | cdktf.IResolvable

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
  public get(index: number): EventgridNamespaceTopicSpacesConfigurationDynamicRoutingEnrichmentOutputReference {
    return new EventgridNamespaceTopicSpacesConfigurationDynamicRoutingEnrichmentOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface EventgridNamespaceTopicSpacesConfigurationStaticRoutingEnrichment {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.31.0/docs/resources/eventgrid_namespace#key EventgridNamespace#key}
  */
  readonly key: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.31.0/docs/resources/eventgrid_namespace#value EventgridNamespace#value}
  */
  readonly value: string;
}

export function eventgridNamespaceTopicSpacesConfigurationStaticRoutingEnrichmentToTerraform(struct?: EventgridNamespaceTopicSpacesConfigurationStaticRoutingEnrichment | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    key: cdktf.stringToTerraform(struct!.key),
    value: cdktf.stringToTerraform(struct!.value),
  }
}


export function eventgridNamespaceTopicSpacesConfigurationStaticRoutingEnrichmentToHclTerraform(struct?: EventgridNamespaceTopicSpacesConfigurationStaticRoutingEnrichment | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    key: {
      value: cdktf.stringToHclTerraform(struct!.key),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    value: {
      value: cdktf.stringToHclTerraform(struct!.value),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class EventgridNamespaceTopicSpacesConfigurationStaticRoutingEnrichmentOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): EventgridNamespaceTopicSpacesConfigurationStaticRoutingEnrichment | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._key !== undefined) {
      hasAnyValues = true;
      internalValueResult.key = this._key;
    }
    if (this._value !== undefined) {
      hasAnyValues = true;
      internalValueResult.value = this._value;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: EventgridNamespaceTopicSpacesConfigurationStaticRoutingEnrichment | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._key = undefined;
      this._value = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._key = value.key;
      this._value = value.value;
    }
  }

  // key - computed: false, optional: false, required: true
  private _key?: string; 
  public get key() {
    return this.getStringAttribute('key');
  }
  public set key(value: string) {
    this._key = value;
  }
  // Temporarily expose input value. Use with caution.
  public get keyInput() {
    return this._key;
  }

  // value - computed: false, optional: false, required: true
  private _value?: string; 
  public get value() {
    return this.getStringAttribute('value');
  }
  public set value(value: string) {
    this._value = value;
  }
  // Temporarily expose input value. Use with caution.
  public get valueInput() {
    return this._value;
  }
}

export class EventgridNamespaceTopicSpacesConfigurationStaticRoutingEnrichmentList extends cdktf.ComplexList {
  public internalValue? : EventgridNamespaceTopicSpacesConfigurationStaticRoutingEnrichment[] | cdktf.IResolvable

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
  public get(index: number): EventgridNamespaceTopicSpacesConfigurationStaticRoutingEnrichmentOutputReference {
    return new EventgridNamespaceTopicSpacesConfigurationStaticRoutingEnrichmentOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface EventgridNamespaceTopicSpacesConfiguration {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.31.0/docs/resources/eventgrid_namespace#alternative_authentication_name_source EventgridNamespace#alternative_authentication_name_source}
  */
  readonly alternativeAuthenticationNameSource?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.31.0/docs/resources/eventgrid_namespace#maximum_client_sessions_per_authentication_name EventgridNamespace#maximum_client_sessions_per_authentication_name}
  */
  readonly maximumClientSessionsPerAuthenticationName?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.31.0/docs/resources/eventgrid_namespace#maximum_session_expiry_in_hours EventgridNamespace#maximum_session_expiry_in_hours}
  */
  readonly maximumSessionExpiryInHours?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.31.0/docs/resources/eventgrid_namespace#route_topic_id EventgridNamespace#route_topic_id}
  */
  readonly routeTopicId?: string;
  /**
  * dynamic_routing_enrichment block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.31.0/docs/resources/eventgrid_namespace#dynamic_routing_enrichment EventgridNamespace#dynamic_routing_enrichment}
  */
  readonly dynamicRoutingEnrichment?: EventgridNamespaceTopicSpacesConfigurationDynamicRoutingEnrichment[] | cdktf.IResolvable;
  /**
  * static_routing_enrichment block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.31.0/docs/resources/eventgrid_namespace#static_routing_enrichment EventgridNamespace#static_routing_enrichment}
  */
  readonly staticRoutingEnrichment?: EventgridNamespaceTopicSpacesConfigurationStaticRoutingEnrichment[] | cdktf.IResolvable;
}

export function eventgridNamespaceTopicSpacesConfigurationToTerraform(struct?: EventgridNamespaceTopicSpacesConfiguration | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    alternative_authentication_name_source: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.alternativeAuthenticationNameSource),
    maximum_client_sessions_per_authentication_name: cdktf.numberToTerraform(struct!.maximumClientSessionsPerAuthenticationName),
    maximum_session_expiry_in_hours: cdktf.numberToTerraform(struct!.maximumSessionExpiryInHours),
    route_topic_id: cdktf.stringToTerraform(struct!.routeTopicId),
    dynamic_routing_enrichment: cdktf.listMapper(eventgridNamespaceTopicSpacesConfigurationDynamicRoutingEnrichmentToTerraform, true)(struct!.dynamicRoutingEnrichment),
    static_routing_enrichment: cdktf.listMapper(eventgridNamespaceTopicSpacesConfigurationStaticRoutingEnrichmentToTerraform, true)(struct!.staticRoutingEnrichment),
  }
}


export function eventgridNamespaceTopicSpacesConfigurationToHclTerraform(struct?: EventgridNamespaceTopicSpacesConfiguration | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    alternative_authentication_name_source: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.alternativeAuthenticationNameSource),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    maximum_client_sessions_per_authentication_name: {
      value: cdktf.numberToHclTerraform(struct!.maximumClientSessionsPerAuthenticationName),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    maximum_session_expiry_in_hours: {
      value: cdktf.numberToHclTerraform(struct!.maximumSessionExpiryInHours),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    route_topic_id: {
      value: cdktf.stringToHclTerraform(struct!.routeTopicId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    dynamic_routing_enrichment: {
      value: cdktf.listMapperHcl(eventgridNamespaceTopicSpacesConfigurationDynamicRoutingEnrichmentToHclTerraform, true)(struct!.dynamicRoutingEnrichment),
      isBlock: true,
      type: "list",
      storageClassType: "EventgridNamespaceTopicSpacesConfigurationDynamicRoutingEnrichmentList",
    },
    static_routing_enrichment: {
      value: cdktf.listMapperHcl(eventgridNamespaceTopicSpacesConfigurationStaticRoutingEnrichmentToHclTerraform, true)(struct!.staticRoutingEnrichment),
      isBlock: true,
      type: "list",
      storageClassType: "EventgridNamespaceTopicSpacesConfigurationStaticRoutingEnrichmentList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class EventgridNamespaceTopicSpacesConfigurationOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): EventgridNamespaceTopicSpacesConfiguration | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._alternativeAuthenticationNameSource !== undefined) {
      hasAnyValues = true;
      internalValueResult.alternativeAuthenticationNameSource = this._alternativeAuthenticationNameSource;
    }
    if (this._maximumClientSessionsPerAuthenticationName !== undefined) {
      hasAnyValues = true;
      internalValueResult.maximumClientSessionsPerAuthenticationName = this._maximumClientSessionsPerAuthenticationName;
    }
    if (this._maximumSessionExpiryInHours !== undefined) {
      hasAnyValues = true;
      internalValueResult.maximumSessionExpiryInHours = this._maximumSessionExpiryInHours;
    }
    if (this._routeTopicId !== undefined) {
      hasAnyValues = true;
      internalValueResult.routeTopicId = this._routeTopicId;
    }
    if (this._dynamicRoutingEnrichment?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.dynamicRoutingEnrichment = this._dynamicRoutingEnrichment?.internalValue;
    }
    if (this._staticRoutingEnrichment?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.staticRoutingEnrichment = this._staticRoutingEnrichment?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: EventgridNamespaceTopicSpacesConfiguration | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._alternativeAuthenticationNameSource = undefined;
      this._maximumClientSessionsPerAuthenticationName = undefined;
      this._maximumSessionExpiryInHours = undefined;
      this._routeTopicId = undefined;
      this._dynamicRoutingEnrichment.internalValue = undefined;
      this._staticRoutingEnrichment.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._alternativeAuthenticationNameSource = value.alternativeAuthenticationNameSource;
      this._maximumClientSessionsPerAuthenticationName = value.maximumClientSessionsPerAuthenticationName;
      this._maximumSessionExpiryInHours = value.maximumSessionExpiryInHours;
      this._routeTopicId = value.routeTopicId;
      this._dynamicRoutingEnrichment.internalValue = value.dynamicRoutingEnrichment;
      this._staticRoutingEnrichment.internalValue = value.staticRoutingEnrichment;
    }
  }

  // alternative_authentication_name_source - computed: false, optional: true, required: false
  private _alternativeAuthenticationNameSource?: string[]; 
  public get alternativeAuthenticationNameSource() {
    return this.getListAttribute('alternative_authentication_name_source');
  }
  public set alternativeAuthenticationNameSource(value: string[]) {
    this._alternativeAuthenticationNameSource = value;
  }
  public resetAlternativeAuthenticationNameSource() {
    this._alternativeAuthenticationNameSource = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get alternativeAuthenticationNameSourceInput() {
    return this._alternativeAuthenticationNameSource;
  }

  // maximum_client_sessions_per_authentication_name - computed: false, optional: true, required: false
  private _maximumClientSessionsPerAuthenticationName?: number; 
  public get maximumClientSessionsPerAuthenticationName() {
    return this.getNumberAttribute('maximum_client_sessions_per_authentication_name');
  }
  public set maximumClientSessionsPerAuthenticationName(value: number) {
    this._maximumClientSessionsPerAuthenticationName = value;
  }
  public resetMaximumClientSessionsPerAuthenticationName() {
    this._maximumClientSessionsPerAuthenticationName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maximumClientSessionsPerAuthenticationNameInput() {
    return this._maximumClientSessionsPerAuthenticationName;
  }

  // maximum_session_expiry_in_hours - computed: false, optional: true, required: false
  private _maximumSessionExpiryInHours?: number; 
  public get maximumSessionExpiryInHours() {
    return this.getNumberAttribute('maximum_session_expiry_in_hours');
  }
  public set maximumSessionExpiryInHours(value: number) {
    this._maximumSessionExpiryInHours = value;
  }
  public resetMaximumSessionExpiryInHours() {
    this._maximumSessionExpiryInHours = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maximumSessionExpiryInHoursInput() {
    return this._maximumSessionExpiryInHours;
  }

  // route_topic_id - computed: false, optional: true, required: false
  private _routeTopicId?: string; 
  public get routeTopicId() {
    return this.getStringAttribute('route_topic_id');
  }
  public set routeTopicId(value: string) {
    this._routeTopicId = value;
  }
  public resetRouteTopicId() {
    this._routeTopicId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get routeTopicIdInput() {
    return this._routeTopicId;
  }

  // dynamic_routing_enrichment - computed: false, optional: true, required: false
  private _dynamicRoutingEnrichment = new EventgridNamespaceTopicSpacesConfigurationDynamicRoutingEnrichmentList(this, "dynamic_routing_enrichment", false);
  public get dynamicRoutingEnrichment() {
    return this._dynamicRoutingEnrichment;
  }
  public putDynamicRoutingEnrichment(value: EventgridNamespaceTopicSpacesConfigurationDynamicRoutingEnrichment[] | cdktf.IResolvable) {
    this._dynamicRoutingEnrichment.internalValue = value;
  }
  public resetDynamicRoutingEnrichment() {
    this._dynamicRoutingEnrichment.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dynamicRoutingEnrichmentInput() {
    return this._dynamicRoutingEnrichment.internalValue;
  }

  // static_routing_enrichment - computed: false, optional: true, required: false
  private _staticRoutingEnrichment = new EventgridNamespaceTopicSpacesConfigurationStaticRoutingEnrichmentList(this, "static_routing_enrichment", false);
  public get staticRoutingEnrichment() {
    return this._staticRoutingEnrichment;
  }
  public putStaticRoutingEnrichment(value: EventgridNamespaceTopicSpacesConfigurationStaticRoutingEnrichment[] | cdktf.IResolvable) {
    this._staticRoutingEnrichment.internalValue = value;
  }
  public resetStaticRoutingEnrichment() {
    this._staticRoutingEnrichment.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get staticRoutingEnrichmentInput() {
    return this._staticRoutingEnrichment.internalValue;
  }
}

export class EventgridNamespaceTopicSpacesConfigurationList extends cdktf.ComplexList {
  public internalValue? : EventgridNamespaceTopicSpacesConfiguration[] | cdktf.IResolvable

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
  public get(index: number): EventgridNamespaceTopicSpacesConfigurationOutputReference {
    return new EventgridNamespaceTopicSpacesConfigurationOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.31.0/docs/resources/eventgrid_namespace azurerm_eventgrid_namespace}
*/
export class EventgridNamespace extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "azurerm_eventgrid_namespace";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a EventgridNamespace resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the EventgridNamespace to import
  * @param importFromId The id of the existing EventgridNamespace that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.31.0/docs/resources/eventgrid_namespace#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the EventgridNamespace to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "azurerm_eventgrid_namespace", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.31.0/docs/resources/eventgrid_namespace azurerm_eventgrid_namespace} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options EventgridNamespaceConfig
  */
  public constructor(scope: Construct, id: string, config: EventgridNamespaceConfig) {
    super(scope, id, {
      terraformResourceType: 'azurerm_eventgrid_namespace',
      terraformGeneratorMetadata: {
        providerName: 'azurerm',
        providerVersion: '4.31.0',
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
    this._capacity = config.capacity;
    this._id = config.id;
    this._location = config.location;
    this._name = config.name;
    this._publicNetworkAccess = config.publicNetworkAccess;
    this._resourceGroupName = config.resourceGroupName;
    this._sku = config.sku;
    this._tags = config.tags;
    this._identity.internalValue = config.identity;
    this._inboundIpRule.internalValue = config.inboundIpRule;
    this._timeouts.internalValue = config.timeouts;
    this._topicSpacesConfiguration.internalValue = config.topicSpacesConfiguration;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // capacity - computed: false, optional: true, required: false
  private _capacity?: number; 
  public get capacity() {
    return this.getNumberAttribute('capacity');
  }
  public set capacity(value: number) {
    this._capacity = value;
  }
  public resetCapacity() {
    this._capacity = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get capacityInput() {
    return this._capacity;
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

  // location - computed: false, optional: false, required: true
  private _location?: string; 
  public get location() {
    return this.getStringAttribute('location');
  }
  public set location(value: string) {
    this._location = value;
  }
  // Temporarily expose input value. Use with caution.
  public get locationInput() {
    return this._location;
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

  // public_network_access - computed: false, optional: true, required: false
  private _publicNetworkAccess?: string; 
  public get publicNetworkAccess() {
    return this.getStringAttribute('public_network_access');
  }
  public set publicNetworkAccess(value: string) {
    this._publicNetworkAccess = value;
  }
  public resetPublicNetworkAccess() {
    this._publicNetworkAccess = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get publicNetworkAccessInput() {
    return this._publicNetworkAccess;
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
    return this._resourceGroupName;
  }

  // sku - computed: false, optional: true, required: false
  private _sku?: string; 
  public get sku() {
    return this.getStringAttribute('sku');
  }
  public set sku(value: string) {
    this._sku = value;
  }
  public resetSku() {
    this._sku = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get skuInput() {
    return this._sku;
  }

  // tags - computed: false, optional: true, required: false
  private _tags?: { [key: string]: string }; 
  public get tags() {
    return this.getStringMapAttribute('tags');
  }
  public set tags(value: { [key: string]: string }) {
    this._tags = value;
  }
  public resetTags() {
    this._tags = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tagsInput() {
    return this._tags;
  }

  // identity - computed: false, optional: true, required: false
  private _identity = new EventgridNamespaceIdentityOutputReference(this, "identity");
  public get identity() {
    return this._identity;
  }
  public putIdentity(value: EventgridNamespaceIdentity) {
    this._identity.internalValue = value;
  }
  public resetIdentity() {
    this._identity.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get identityInput() {
    return this._identity.internalValue;
  }

  // inbound_ip_rule - computed: false, optional: true, required: false
  private _inboundIpRule = new EventgridNamespaceInboundIpRuleList(this, "inbound_ip_rule", false);
  public get inboundIpRule() {
    return this._inboundIpRule;
  }
  public putInboundIpRule(value: EventgridNamespaceInboundIpRule[] | cdktf.IResolvable) {
    this._inboundIpRule.internalValue = value;
  }
  public resetInboundIpRule() {
    this._inboundIpRule.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get inboundIpRuleInput() {
    return this._inboundIpRule.internalValue;
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts = new EventgridNamespaceTimeoutsOutputReference(this, "timeouts");
  public get timeouts() {
    return this._timeouts;
  }
  public putTimeouts(value: EventgridNamespaceTimeouts) {
    this._timeouts.internalValue = value;
  }
  public resetTimeouts() {
    this._timeouts.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get timeoutsInput() {
    return this._timeouts.internalValue;
  }

  // topic_spaces_configuration - computed: false, optional: true, required: false
  private _topicSpacesConfiguration = new EventgridNamespaceTopicSpacesConfigurationList(this, "topic_spaces_configuration", false);
  public get topicSpacesConfiguration() {
    return this._topicSpacesConfiguration;
  }
  public putTopicSpacesConfiguration(value: EventgridNamespaceTopicSpacesConfiguration[] | cdktf.IResolvable) {
    this._topicSpacesConfiguration.internalValue = value;
  }
  public resetTopicSpacesConfiguration() {
    this._topicSpacesConfiguration.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get topicSpacesConfigurationInput() {
    return this._topicSpacesConfiguration.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      capacity: cdktf.numberToTerraform(this._capacity),
      id: cdktf.stringToTerraform(this._id),
      location: cdktf.stringToTerraform(this._location),
      name: cdktf.stringToTerraform(this._name),
      public_network_access: cdktf.stringToTerraform(this._publicNetworkAccess),
      resource_group_name: cdktf.stringToTerraform(this._resourceGroupName),
      sku: cdktf.stringToTerraform(this._sku),
      tags: cdktf.hashMapper(cdktf.stringToTerraform)(this._tags),
      identity: eventgridNamespaceIdentityToTerraform(this._identity.internalValue),
      inbound_ip_rule: cdktf.listMapper(eventgridNamespaceInboundIpRuleToTerraform, true)(this._inboundIpRule.internalValue),
      timeouts: eventgridNamespaceTimeoutsToTerraform(this._timeouts.internalValue),
      topic_spaces_configuration: cdktf.listMapper(eventgridNamespaceTopicSpacesConfigurationToTerraform, true)(this._topicSpacesConfiguration.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      capacity: {
        value: cdktf.numberToHclTerraform(this._capacity),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      id: {
        value: cdktf.stringToHclTerraform(this._id),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      location: {
        value: cdktf.stringToHclTerraform(this._location),
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
      public_network_access: {
        value: cdktf.stringToHclTerraform(this._publicNetworkAccess),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      resource_group_name: {
        value: cdktf.stringToHclTerraform(this._resourceGroupName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      sku: {
        value: cdktf.stringToHclTerraform(this._sku),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      tags: {
        value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(this._tags),
        isBlock: false,
        type: "map",
        storageClassType: "stringMap",
      },
      identity: {
        value: eventgridNamespaceIdentityToHclTerraform(this._identity.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "EventgridNamespaceIdentityList",
      },
      inbound_ip_rule: {
        value: cdktf.listMapperHcl(eventgridNamespaceInboundIpRuleToHclTerraform, true)(this._inboundIpRule.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "EventgridNamespaceInboundIpRuleList",
      },
      timeouts: {
        value: eventgridNamespaceTimeoutsToHclTerraform(this._timeouts.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "EventgridNamespaceTimeouts",
      },
      topic_spaces_configuration: {
        value: cdktf.listMapperHcl(eventgridNamespaceTopicSpacesConfigurationToHclTerraform, true)(this._topicSpacesConfiguration.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "EventgridNamespaceTopicSpacesConfigurationList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
