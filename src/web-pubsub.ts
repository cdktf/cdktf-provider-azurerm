// https://www.terraform.io/docs/providers/azurerm/r/web_pubsub
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface WebPubsubConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/web_pubsub#aad_auth_enabled WebPubsub#aad_auth_enabled}
  */
  readonly aadAuthEnabled?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/web_pubsub#capacity WebPubsub#capacity}
  */
  readonly capacity?: number;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/web_pubsub#local_auth_enabled WebPubsub#local_auth_enabled}
  */
  readonly localAuthEnabled?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/web_pubsub#location WebPubsub#location}
  */
  readonly location: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/web_pubsub#name WebPubsub#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/web_pubsub#public_network_access_enabled WebPubsub#public_network_access_enabled}
  */
  readonly publicNetworkAccessEnabled?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/web_pubsub#resource_group_name WebPubsub#resource_group_name}
  */
  readonly resourceGroupName: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/web_pubsub#sku WebPubsub#sku}
  */
  readonly sku: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/web_pubsub#tags WebPubsub#tags}
  */
  readonly tags?: { [key: string]: string };
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/web_pubsub#tls_client_cert_enabled WebPubsub#tls_client_cert_enabled}
  */
  readonly tlsClientCertEnabled?: boolean | cdktf.IResolvable;
  /**
  * live_trace block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/web_pubsub#live_trace WebPubsub#live_trace}
  */
  readonly liveTrace?: WebPubsubLiveTrace;
  /**
  * timeouts block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/web_pubsub#timeouts WebPubsub#timeouts}
  */
  readonly timeouts?: WebPubsubTimeouts;
}
export interface WebPubsubLiveTrace {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/web_pubsub#connectivity_logs_enabled WebPubsub#connectivity_logs_enabled}
  */
  readonly connectivityLogsEnabled?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/web_pubsub#enabled WebPubsub#enabled}
  */
  readonly enabled?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/web_pubsub#http_request_logs_enabled WebPubsub#http_request_logs_enabled}
  */
  readonly httpRequestLogsEnabled?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/web_pubsub#messaging_logs_enabled WebPubsub#messaging_logs_enabled}
  */
  readonly messagingLogsEnabled?: boolean | cdktf.IResolvable;
}

export function webPubsubLiveTraceToTerraform(struct?: WebPubsubLiveTraceOutputReference | WebPubsubLiveTrace): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    connectivity_logs_enabled: cdktf.booleanToTerraform(struct!.connectivityLogsEnabled),
    enabled: cdktf.booleanToTerraform(struct!.enabled),
    http_request_logs_enabled: cdktf.booleanToTerraform(struct!.httpRequestLogsEnabled),
    messaging_logs_enabled: cdktf.booleanToTerraform(struct!.messagingLogsEnabled),
  }
}

export class WebPubsubLiveTraceOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param isSingleItem True if this is a block, false if it's a list
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, isSingleItem: boolean) {
    super(terraformResource, terraformAttribute, isSingleItem);
  }

  public get internalValue(): WebPubsubLiveTrace | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._connectivityLogsEnabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.connectivityLogsEnabled = this._connectivityLogsEnabled;
    }
    if (this._enabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.enabled = this._enabled;
    }
    if (this._httpRequestLogsEnabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.httpRequestLogsEnabled = this._httpRequestLogsEnabled;
    }
    if (this._messagingLogsEnabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.messagingLogsEnabled = this._messagingLogsEnabled;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: WebPubsubLiveTrace | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._connectivityLogsEnabled = undefined;
      this._enabled = undefined;
      this._httpRequestLogsEnabled = undefined;
      this._messagingLogsEnabled = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._connectivityLogsEnabled = value.connectivityLogsEnabled;
      this._enabled = value.enabled;
      this._httpRequestLogsEnabled = value.httpRequestLogsEnabled;
      this._messagingLogsEnabled = value.messagingLogsEnabled;
    }
  }

  // connectivity_logs_enabled - computed: false, optional: true, required: false
  private _connectivityLogsEnabled?: boolean | cdktf.IResolvable; 
  public get connectivityLogsEnabled() {
    return this.getBooleanAttribute('connectivity_logs_enabled');
  }
  public set connectivityLogsEnabled(value: boolean | cdktf.IResolvable) {
    this._connectivityLogsEnabled = value;
  }
  public resetConnectivityLogsEnabled() {
    this._connectivityLogsEnabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get connectivityLogsEnabledInput() {
    return this._connectivityLogsEnabled;
  }

  // enabled - computed: false, optional: true, required: false
  private _enabled?: boolean | cdktf.IResolvable; 
  public get enabled() {
    return this.getBooleanAttribute('enabled');
  }
  public set enabled(value: boolean | cdktf.IResolvable) {
    this._enabled = value;
  }
  public resetEnabled() {
    this._enabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enabledInput() {
    return this._enabled;
  }

  // http_request_logs_enabled - computed: false, optional: true, required: false
  private _httpRequestLogsEnabled?: boolean | cdktf.IResolvable; 
  public get httpRequestLogsEnabled() {
    return this.getBooleanAttribute('http_request_logs_enabled');
  }
  public set httpRequestLogsEnabled(value: boolean | cdktf.IResolvable) {
    this._httpRequestLogsEnabled = value;
  }
  public resetHttpRequestLogsEnabled() {
    this._httpRequestLogsEnabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get httpRequestLogsEnabledInput() {
    return this._httpRequestLogsEnabled;
  }

  // messaging_logs_enabled - computed: false, optional: true, required: false
  private _messagingLogsEnabled?: boolean | cdktf.IResolvable; 
  public get messagingLogsEnabled() {
    return this.getBooleanAttribute('messaging_logs_enabled');
  }
  public set messagingLogsEnabled(value: boolean | cdktf.IResolvable) {
    this._messagingLogsEnabled = value;
  }
  public resetMessagingLogsEnabled() {
    this._messagingLogsEnabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get messagingLogsEnabledInput() {
    return this._messagingLogsEnabled;
  }
}
export interface WebPubsubTimeouts {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/web_pubsub#create WebPubsub#create}
  */
  readonly create?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/web_pubsub#delete WebPubsub#delete}
  */
  readonly delete?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/web_pubsub#read WebPubsub#read}
  */
  readonly read?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/web_pubsub#update WebPubsub#update}
  */
  readonly update?: string;
}

export function webPubsubTimeoutsToTerraform(struct?: WebPubsubTimeoutsOutputReference | WebPubsubTimeouts | cdktf.IResolvable): any {
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

export class WebPubsubTimeoutsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param isSingleItem True if this is a block, false if it's a list
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, isSingleItem: boolean) {
    super(terraformResource, terraformAttribute, isSingleItem);
  }

  public get internalValue(): WebPubsubTimeouts | undefined {
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

  public set internalValue(value: WebPubsubTimeouts | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._create = undefined;
      this._delete = undefined;
      this._read = undefined;
      this._update = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
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
* Represents a {@link https://www.terraform.io/docs/providers/azurerm/r/web_pubsub azurerm_web_pubsub}
*/
export class WebPubsub extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType: string = "azurerm_web_pubsub";

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://www.terraform.io/docs/providers/azurerm/r/web_pubsub azurerm_web_pubsub} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options WebPubsubConfig
  */
  public constructor(scope: Construct, id: string, config: WebPubsubConfig) {
    super(scope, id, {
      terraformResourceType: 'azurerm_web_pubsub',
      terraformGeneratorMetadata: {
        providerName: 'azurerm'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle
    });
    this._aadAuthEnabled = config.aadAuthEnabled;
    this._capacity = config.capacity;
    this._localAuthEnabled = config.localAuthEnabled;
    this._location = config.location;
    this._name = config.name;
    this._publicNetworkAccessEnabled = config.publicNetworkAccessEnabled;
    this._resourceGroupName = config.resourceGroupName;
    this._sku = config.sku;
    this._tags = config.tags;
    this._tlsClientCertEnabled = config.tlsClientCertEnabled;
    this._liveTrace.internalValue = config.liveTrace;
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

  // external_ip - computed: true, optional: false, required: false
  public get externalIp() {
    return this.getStringAttribute('external_ip');
  }

  // hostname - computed: true, optional: false, required: false
  public get hostname() {
    return this.getStringAttribute('hostname');
  }

  // id - computed: true, optional: true, required: false
  public get id() {
    return this.getStringAttribute('id');
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

  // public_network_access_enabled - computed: false, optional: true, required: false
  private _publicNetworkAccessEnabled?: boolean | cdktf.IResolvable; 
  public get publicNetworkAccessEnabled() {
    return this.getBooleanAttribute('public_network_access_enabled');
  }
  public set publicNetworkAccessEnabled(value: boolean | cdktf.IResolvable) {
    this._publicNetworkAccessEnabled = value;
  }
  public resetPublicNetworkAccessEnabled() {
    this._publicNetworkAccessEnabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get publicNetworkAccessEnabledInput() {
    return this._publicNetworkAccessEnabled;
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

  // sku - computed: false, optional: false, required: true
  private _sku?: string; 
  public get sku() {
    return this.getStringAttribute('sku');
  }
  public set sku(value: string) {
    this._sku = value;
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

  // version - computed: true, optional: false, required: false
  public get version() {
    return this.getStringAttribute('version');
  }

  // live_trace - computed: false, optional: true, required: false
  private _liveTrace = new WebPubsubLiveTraceOutputReference(this, "live_trace", true);
  public get liveTrace() {
    return this._liveTrace;
  }
  public putLiveTrace(value: WebPubsubLiveTrace) {
    this._liveTrace.internalValue = value;
  }
  public resetLiveTrace() {
    this._liveTrace.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get liveTraceInput() {
    return this._liveTrace.internalValue;
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts = new WebPubsubTimeoutsOutputReference(this, "timeouts", true);
  public get timeouts() {
    return this._timeouts;
  }
  public putTimeouts(value: WebPubsubTimeouts) {
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
      capacity: cdktf.numberToTerraform(this._capacity),
      local_auth_enabled: cdktf.booleanToTerraform(this._localAuthEnabled),
      location: cdktf.stringToTerraform(this._location),
      name: cdktf.stringToTerraform(this._name),
      public_network_access_enabled: cdktf.booleanToTerraform(this._publicNetworkAccessEnabled),
      resource_group_name: cdktf.stringToTerraform(this._resourceGroupName),
      sku: cdktf.stringToTerraform(this._sku),
      tags: cdktf.hashMapper(cdktf.stringToTerraform)(this._tags),
      tls_client_cert_enabled: cdktf.booleanToTerraform(this._tlsClientCertEnabled),
      live_trace: webPubsubLiveTraceToTerraform(this._liveTrace.internalValue),
      timeouts: webPubsubTimeoutsToTerraform(this._timeouts.internalValue),
    };
  }
}
