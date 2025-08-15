/**
 * Copyright (c) HashiCorp, Inc.
 * SPDX-License-Identifier: MPL-2.0
 */

// https://registry.terraform.io/providers/hashicorp/azurerm/4.40.0/docs/resources/web_pubsub_socketio
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface WebPubsubSocketioConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.40.0/docs/resources/web_pubsub_socketio#aad_auth_enabled WebPubsubSocketio#aad_auth_enabled}
  */
  readonly aadAuthEnabled?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.40.0/docs/resources/web_pubsub_socketio#id WebPubsubSocketio#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.40.0/docs/resources/web_pubsub_socketio#live_trace_connectivity_logs_enabled WebPubsubSocketio#live_trace_connectivity_logs_enabled}
  */
  readonly liveTraceConnectivityLogsEnabled?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.40.0/docs/resources/web_pubsub_socketio#live_trace_enabled WebPubsubSocketio#live_trace_enabled}
  */
  readonly liveTraceEnabled?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.40.0/docs/resources/web_pubsub_socketio#live_trace_http_request_logs_enabled WebPubsubSocketio#live_trace_http_request_logs_enabled}
  */
  readonly liveTraceHttpRequestLogsEnabled?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.40.0/docs/resources/web_pubsub_socketio#live_trace_messaging_logs_enabled WebPubsubSocketio#live_trace_messaging_logs_enabled}
  */
  readonly liveTraceMessagingLogsEnabled?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.40.0/docs/resources/web_pubsub_socketio#local_auth_enabled WebPubsubSocketio#local_auth_enabled}
  */
  readonly localAuthEnabled?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.40.0/docs/resources/web_pubsub_socketio#location WebPubsubSocketio#location}
  */
  readonly location: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.40.0/docs/resources/web_pubsub_socketio#name WebPubsubSocketio#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.40.0/docs/resources/web_pubsub_socketio#public_network_access WebPubsubSocketio#public_network_access}
  */
  readonly publicNetworkAccess?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.40.0/docs/resources/web_pubsub_socketio#resource_group_name WebPubsubSocketio#resource_group_name}
  */
  readonly resourceGroupName: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.40.0/docs/resources/web_pubsub_socketio#service_mode WebPubsubSocketio#service_mode}
  */
  readonly serviceMode?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.40.0/docs/resources/web_pubsub_socketio#tags WebPubsubSocketio#tags}
  */
  readonly tags?: { [key: string]: string };
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.40.0/docs/resources/web_pubsub_socketio#tls_client_cert_enabled WebPubsubSocketio#tls_client_cert_enabled}
  */
  readonly tlsClientCertEnabled?: boolean | cdktf.IResolvable;
  /**
  * identity block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.40.0/docs/resources/web_pubsub_socketio#identity WebPubsubSocketio#identity}
  */
  readonly identity?: WebPubsubSocketioIdentity;
  /**
  * sku block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.40.0/docs/resources/web_pubsub_socketio#sku WebPubsubSocketio#sku}
  */
  readonly sku: WebPubsubSocketioSku;
  /**
  * timeouts block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.40.0/docs/resources/web_pubsub_socketio#timeouts WebPubsubSocketio#timeouts}
  */
  readonly timeouts?: WebPubsubSocketioTimeouts;
}
export interface WebPubsubSocketioIdentity {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.40.0/docs/resources/web_pubsub_socketio#identity_ids WebPubsubSocketio#identity_ids}
  */
  readonly identityIds?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.40.0/docs/resources/web_pubsub_socketio#type WebPubsubSocketio#type}
  */
  readonly type: string;
}

export function webPubsubSocketioIdentityToTerraform(struct?: WebPubsubSocketioIdentityOutputReference | WebPubsubSocketioIdentity): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    identity_ids: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.identityIds),
    type: cdktf.stringToTerraform(struct!.type),
  }
}


export function webPubsubSocketioIdentityToHclTerraform(struct?: WebPubsubSocketioIdentityOutputReference | WebPubsubSocketioIdentity): any {
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

export class WebPubsubSocketioIdentityOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): WebPubsubSocketioIdentity | undefined {
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

  public set internalValue(value: WebPubsubSocketioIdentity | undefined) {
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
export interface WebPubsubSocketioSku {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.40.0/docs/resources/web_pubsub_socketio#capacity WebPubsubSocketio#capacity}
  */
  readonly capacity?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.40.0/docs/resources/web_pubsub_socketio#name WebPubsubSocketio#name}
  */
  readonly name: string;
}

export function webPubsubSocketioSkuToTerraform(struct?: WebPubsubSocketioSkuOutputReference | WebPubsubSocketioSku): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    capacity: cdktf.numberToTerraform(struct!.capacity),
    name: cdktf.stringToTerraform(struct!.name),
  }
}


export function webPubsubSocketioSkuToHclTerraform(struct?: WebPubsubSocketioSkuOutputReference | WebPubsubSocketioSku): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    capacity: {
      value: cdktf.numberToHclTerraform(struct!.capacity),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    name: {
      value: cdktf.stringToHclTerraform(struct!.name),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class WebPubsubSocketioSkuOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): WebPubsubSocketioSku | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._capacity !== undefined) {
      hasAnyValues = true;
      internalValueResult.capacity = this._capacity;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: WebPubsubSocketioSku | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._capacity = undefined;
      this._name = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._capacity = value.capacity;
      this._name = value.name;
    }
  }

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
}
export interface WebPubsubSocketioTimeouts {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.40.0/docs/resources/web_pubsub_socketio#create WebPubsubSocketio#create}
  */
  readonly create?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.40.0/docs/resources/web_pubsub_socketio#delete WebPubsubSocketio#delete}
  */
  readonly delete?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.40.0/docs/resources/web_pubsub_socketio#read WebPubsubSocketio#read}
  */
  readonly read?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.40.0/docs/resources/web_pubsub_socketio#update WebPubsubSocketio#update}
  */
  readonly update?: string;
}

export function webPubsubSocketioTimeoutsToTerraform(struct?: WebPubsubSocketioTimeouts | cdktf.IResolvable): any {
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


export function webPubsubSocketioTimeoutsToHclTerraform(struct?: WebPubsubSocketioTimeouts | cdktf.IResolvable): any {
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

export class WebPubsubSocketioTimeoutsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): WebPubsubSocketioTimeouts | cdktf.IResolvable | undefined {
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

  public set internalValue(value: WebPubsubSocketioTimeouts | cdktf.IResolvable | undefined) {
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
* Represents a {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.40.0/docs/resources/web_pubsub_socketio azurerm_web_pubsub_socketio}
*/
export class WebPubsubSocketio extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "azurerm_web_pubsub_socketio";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a WebPubsubSocketio resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the WebPubsubSocketio to import
  * @param importFromId The id of the existing WebPubsubSocketio that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.40.0/docs/resources/web_pubsub_socketio#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the WebPubsubSocketio to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "azurerm_web_pubsub_socketio", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.40.0/docs/resources/web_pubsub_socketio azurerm_web_pubsub_socketio} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options WebPubsubSocketioConfig
  */
  public constructor(scope: Construct, id: string, config: WebPubsubSocketioConfig) {
    super(scope, id, {
      terraformResourceType: 'azurerm_web_pubsub_socketio',
      terraformGeneratorMetadata: {
        providerName: 'azurerm',
        providerVersion: '4.40.0',
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
    this._aadAuthEnabled = config.aadAuthEnabled;
    this._id = config.id;
    this._liveTraceConnectivityLogsEnabled = config.liveTraceConnectivityLogsEnabled;
    this._liveTraceEnabled = config.liveTraceEnabled;
    this._liveTraceHttpRequestLogsEnabled = config.liveTraceHttpRequestLogsEnabled;
    this._liveTraceMessagingLogsEnabled = config.liveTraceMessagingLogsEnabled;
    this._localAuthEnabled = config.localAuthEnabled;
    this._location = config.location;
    this._name = config.name;
    this._publicNetworkAccess = config.publicNetworkAccess;
    this._resourceGroupName = config.resourceGroupName;
    this._serviceMode = config.serviceMode;
    this._tags = config.tags;
    this._tlsClientCertEnabled = config.tlsClientCertEnabled;
    this._identity.internalValue = config.identity;
    this._sku.internalValue = config.sku;
    this._timeouts.internalValue = config.timeouts;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // aad_auth_enabled - computed: false, optional: true, required: false
  private _aadAuthEnabled?: boolean | cdktf.IResolvable; 
  public get aadAuthEnabled() {
    return this.getBooleanAttribute('aad_auth_enabled');
  }
  public set aadAuthEnabled(value: boolean | cdktf.IResolvable) {
    this._aadAuthEnabled = value;
  }
  public resetAadAuthEnabled() {
    this._aadAuthEnabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get aadAuthEnabledInput() {
    return this._aadAuthEnabled;
  }

  // external_ip - computed: true, optional: false, required: false
  public get externalIp() {
    return this.getStringAttribute('external_ip');
  }

  // hostname - computed: true, optional: false, required: false
  public get hostname() {
    return this.getStringAttribute('hostname');
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

  // live_trace_connectivity_logs_enabled - computed: false, optional: true, required: false
  private _liveTraceConnectivityLogsEnabled?: boolean | cdktf.IResolvable; 
  public get liveTraceConnectivityLogsEnabled() {
    return this.getBooleanAttribute('live_trace_connectivity_logs_enabled');
  }
  public set liveTraceConnectivityLogsEnabled(value: boolean | cdktf.IResolvable) {
    this._liveTraceConnectivityLogsEnabled = value;
  }
  public resetLiveTraceConnectivityLogsEnabled() {
    this._liveTraceConnectivityLogsEnabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get liveTraceConnectivityLogsEnabledInput() {
    return this._liveTraceConnectivityLogsEnabled;
  }

  // live_trace_enabled - computed: false, optional: true, required: false
  private _liveTraceEnabled?: boolean | cdktf.IResolvable; 
  public get liveTraceEnabled() {
    return this.getBooleanAttribute('live_trace_enabled');
  }
  public set liveTraceEnabled(value: boolean | cdktf.IResolvable) {
    this._liveTraceEnabled = value;
  }
  public resetLiveTraceEnabled() {
    this._liveTraceEnabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get liveTraceEnabledInput() {
    return this._liveTraceEnabled;
  }

  // live_trace_http_request_logs_enabled - computed: false, optional: true, required: false
  private _liveTraceHttpRequestLogsEnabled?: boolean | cdktf.IResolvable; 
  public get liveTraceHttpRequestLogsEnabled() {
    return this.getBooleanAttribute('live_trace_http_request_logs_enabled');
  }
  public set liveTraceHttpRequestLogsEnabled(value: boolean | cdktf.IResolvable) {
    this._liveTraceHttpRequestLogsEnabled = value;
  }
  public resetLiveTraceHttpRequestLogsEnabled() {
    this._liveTraceHttpRequestLogsEnabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get liveTraceHttpRequestLogsEnabledInput() {
    return this._liveTraceHttpRequestLogsEnabled;
  }

  // live_trace_messaging_logs_enabled - computed: false, optional: true, required: false
  private _liveTraceMessagingLogsEnabled?: boolean | cdktf.IResolvable; 
  public get liveTraceMessagingLogsEnabled() {
    return this.getBooleanAttribute('live_trace_messaging_logs_enabled');
  }
  public set liveTraceMessagingLogsEnabled(value: boolean | cdktf.IResolvable) {
    this._liveTraceMessagingLogsEnabled = value;
  }
  public resetLiveTraceMessagingLogsEnabled() {
    this._liveTraceMessagingLogsEnabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get liveTraceMessagingLogsEnabledInput() {
    return this._liveTraceMessagingLogsEnabled;
  }

  // local_auth_enabled - computed: false, optional: true, required: false
  private _localAuthEnabled?: boolean | cdktf.IResolvable; 
  public get localAuthEnabled() {
    return this.getBooleanAttribute('local_auth_enabled');
  }
  public set localAuthEnabled(value: boolean | cdktf.IResolvable) {
    this._localAuthEnabled = value;
  }
  public resetLocalAuthEnabled() {
    this._localAuthEnabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get localAuthEnabledInput() {
    return this._localAuthEnabled;
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

  // primary_access_key - computed: true, optional: false, required: false
  public get primaryAccessKey() {
    return this.getStringAttribute('primary_access_key');
  }

  // primary_connection_string - computed: true, optional: false, required: false
  public get primaryConnectionString() {
    return this.getStringAttribute('primary_connection_string');
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

  // public_port - computed: true, optional: false, required: false
  public get publicPort() {
    return this.getNumberAttribute('public_port');
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

  // secondary_access_key - computed: true, optional: false, required: false
  public get secondaryAccessKey() {
    return this.getStringAttribute('secondary_access_key');
  }

  // secondary_connection_string - computed: true, optional: false, required: false
  public get secondaryConnectionString() {
    return this.getStringAttribute('secondary_connection_string');
  }

  // server_port - computed: true, optional: false, required: false
  public get serverPort() {
    return this.getNumberAttribute('server_port');
  }

  // service_mode - computed: false, optional: true, required: false
  private _serviceMode?: string; 
  public get serviceMode() {
    return this.getStringAttribute('service_mode');
  }
  public set serviceMode(value: string) {
    this._serviceMode = value;
  }
  public resetServiceMode() {
    this._serviceMode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get serviceModeInput() {
    return this._serviceMode;
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

  // tls_client_cert_enabled - computed: false, optional: true, required: false
  private _tlsClientCertEnabled?: boolean | cdktf.IResolvable; 
  public get tlsClientCertEnabled() {
    return this.getBooleanAttribute('tls_client_cert_enabled');
  }
  public set tlsClientCertEnabled(value: boolean | cdktf.IResolvable) {
    this._tlsClientCertEnabled = value;
  }
  public resetTlsClientCertEnabled() {
    this._tlsClientCertEnabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tlsClientCertEnabledInput() {
    return this._tlsClientCertEnabled;
  }

  // identity - computed: false, optional: true, required: false
  private _identity = new WebPubsubSocketioIdentityOutputReference(this, "identity");
  public get identity() {
    return this._identity;
  }
  public putIdentity(value: WebPubsubSocketioIdentity) {
    this._identity.internalValue = value;
  }
  public resetIdentity() {
    this._identity.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get identityInput() {
    return this._identity.internalValue;
  }

  // sku - computed: false, optional: false, required: true
  private _sku = new WebPubsubSocketioSkuOutputReference(this, "sku");
  public get sku() {
    return this._sku;
  }
  public putSku(value: WebPubsubSocketioSku) {
    this._sku.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get skuInput() {
    return this._sku.internalValue;
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts = new WebPubsubSocketioTimeoutsOutputReference(this, "timeouts");
  public get timeouts() {
    return this._timeouts;
  }
  public putTimeouts(value: WebPubsubSocketioTimeouts) {
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
      aad_auth_enabled: cdktf.booleanToTerraform(this._aadAuthEnabled),
      id: cdktf.stringToTerraform(this._id),
      live_trace_connectivity_logs_enabled: cdktf.booleanToTerraform(this._liveTraceConnectivityLogsEnabled),
      live_trace_enabled: cdktf.booleanToTerraform(this._liveTraceEnabled),
      live_trace_http_request_logs_enabled: cdktf.booleanToTerraform(this._liveTraceHttpRequestLogsEnabled),
      live_trace_messaging_logs_enabled: cdktf.booleanToTerraform(this._liveTraceMessagingLogsEnabled),
      local_auth_enabled: cdktf.booleanToTerraform(this._localAuthEnabled),
      location: cdktf.stringToTerraform(this._location),
      name: cdktf.stringToTerraform(this._name),
      public_network_access: cdktf.stringToTerraform(this._publicNetworkAccess),
      resource_group_name: cdktf.stringToTerraform(this._resourceGroupName),
      service_mode: cdktf.stringToTerraform(this._serviceMode),
      tags: cdktf.hashMapper(cdktf.stringToTerraform)(this._tags),
      tls_client_cert_enabled: cdktf.booleanToTerraform(this._tlsClientCertEnabled),
      identity: webPubsubSocketioIdentityToTerraform(this._identity.internalValue),
      sku: webPubsubSocketioSkuToTerraform(this._sku.internalValue),
      timeouts: webPubsubSocketioTimeoutsToTerraform(this._timeouts.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      aad_auth_enabled: {
        value: cdktf.booleanToHclTerraform(this._aadAuthEnabled),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      id: {
        value: cdktf.stringToHclTerraform(this._id),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      live_trace_connectivity_logs_enabled: {
        value: cdktf.booleanToHclTerraform(this._liveTraceConnectivityLogsEnabled),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      live_trace_enabled: {
        value: cdktf.booleanToHclTerraform(this._liveTraceEnabled),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      live_trace_http_request_logs_enabled: {
        value: cdktf.booleanToHclTerraform(this._liveTraceHttpRequestLogsEnabled),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      live_trace_messaging_logs_enabled: {
        value: cdktf.booleanToHclTerraform(this._liveTraceMessagingLogsEnabled),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      local_auth_enabled: {
        value: cdktf.booleanToHclTerraform(this._localAuthEnabled),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
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
      service_mode: {
        value: cdktf.stringToHclTerraform(this._serviceMode),
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
      tls_client_cert_enabled: {
        value: cdktf.booleanToHclTerraform(this._tlsClientCertEnabled),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      identity: {
        value: webPubsubSocketioIdentityToHclTerraform(this._identity.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "WebPubsubSocketioIdentityList",
      },
      sku: {
        value: webPubsubSocketioSkuToHclTerraform(this._sku.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "WebPubsubSocketioSkuList",
      },
      timeouts: {
        value: webPubsubSocketioTimeoutsToHclTerraform(this._timeouts.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "WebPubsubSocketioTimeouts",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
