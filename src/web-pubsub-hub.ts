// https://www.terraform.io/docs/providers/azurerm/r/web_pubsub_hub
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface WebPubsubHubConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/web_pubsub_hub#anonymous_connections_enabled WebPubsubHub#anonymous_connections_enabled}
  */
  readonly anonymousConnectionsEnabled?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/web_pubsub_hub#name WebPubsubHub#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/web_pubsub_hub#web_pubsub_id WebPubsubHub#web_pubsub_id}
  */
  readonly webPubsubId: string;
  /**
  * event_handler block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/web_pubsub_hub#event_handler WebPubsubHub#event_handler}
  */
  readonly eventHandler: WebPubsubHubEventHandler[] | cdktf.IResolvable;
  /**
  * timeouts block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/web_pubsub_hub#timeouts WebPubsubHub#timeouts}
  */
  readonly timeouts?: WebPubsubHubTimeouts;
}
export interface WebPubsubHubEventHandlerAuth {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/web_pubsub_hub#managed_identity_id WebPubsubHub#managed_identity_id}
  */
  readonly managedIdentityId: string;
}

export function webPubsubHubEventHandlerAuthToTerraform(struct?: WebPubsubHubEventHandlerAuthOutputReference | WebPubsubHubEventHandlerAuth): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    managed_identity_id: cdktf.stringToTerraform(struct!.managedIdentityId),
  }
}

export class WebPubsubHubEventHandlerAuthOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): WebPubsubHubEventHandlerAuth | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._managedIdentityId !== undefined) {
      hasAnyValues = true;
      internalValueResult.managedIdentityId = this._managedIdentityId;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: WebPubsubHubEventHandlerAuth | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._managedIdentityId = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._managedIdentityId = value.managedIdentityId;
    }
  }

  // managed_identity_id - computed: false, optional: false, required: true
  private _managedIdentityId?: string; 
  public get managedIdentityId() {
    return this.getStringAttribute('managed_identity_id');
  }
  public set managedIdentityId(value: string) {
    this._managedIdentityId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get managedIdentityIdInput() {
    return this._managedIdentityId;
  }
}
export interface WebPubsubHubEventHandler {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/web_pubsub_hub#system_events WebPubsubHub#system_events}
  */
  readonly systemEvents?: string[];
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/web_pubsub_hub#url_template WebPubsubHub#url_template}
  */
  readonly urlTemplate: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/web_pubsub_hub#user_event_pattern WebPubsubHub#user_event_pattern}
  */
  readonly userEventPattern?: string;
  /**
  * auth block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/web_pubsub_hub#auth WebPubsubHub#auth}
  */
  readonly auth?: WebPubsubHubEventHandlerAuth;
}

export function webPubsubHubEventHandlerToTerraform(struct?: WebPubsubHubEventHandler | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    system_events: cdktf.listMapper(cdktf.stringToTerraform)(struct!.systemEvents),
    url_template: cdktf.stringToTerraform(struct!.urlTemplate),
    user_event_pattern: cdktf.stringToTerraform(struct!.userEventPattern),
    auth: webPubsubHubEventHandlerAuthToTerraform(struct!.auth),
  }
}

export interface WebPubsubHubTimeouts {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/web_pubsub_hub#create WebPubsubHub#create}
  */
  readonly create?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/web_pubsub_hub#delete WebPubsubHub#delete}
  */
  readonly delete?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/web_pubsub_hub#read WebPubsubHub#read}
  */
  readonly read?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/web_pubsub_hub#update WebPubsubHub#update}
  */
  readonly update?: string;
}

export function webPubsubHubTimeoutsToTerraform(struct?: WebPubsubHubTimeoutsOutputReference | WebPubsubHubTimeouts | cdktf.IResolvable): any {
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

export class WebPubsubHubTimeoutsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): WebPubsubHubTimeouts | undefined {
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

  public set internalValue(value: WebPubsubHubTimeouts | undefined) {
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
* Represents a {@link https://www.terraform.io/docs/providers/azurerm/r/web_pubsub_hub azurerm_web_pubsub_hub}
*/
export class WebPubsubHub extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "azurerm_web_pubsub_hub";

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://www.terraform.io/docs/providers/azurerm/r/web_pubsub_hub azurerm_web_pubsub_hub} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options WebPubsubHubConfig
  */
  public constructor(scope: Construct, id: string, config: WebPubsubHubConfig) {
    super(scope, id, {
      terraformResourceType: 'azurerm_web_pubsub_hub',
      terraformGeneratorMetadata: {
        providerName: 'azurerm',
        providerVersion: '2.99.0',
        providerVersionConstraint: '~> 2.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle
    });
    this._anonymousConnectionsEnabled = config.anonymousConnectionsEnabled;
    this._name = config.name;
    this._webPubsubId = config.webPubsubId;
    this._eventHandler = config.eventHandler;
    this._timeouts.internalValue = config.timeouts;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // anonymous_connections_enabled - computed: false, optional: true, required: false
  private _anonymousConnectionsEnabled?: boolean | cdktf.IResolvable; 
  public get anonymousConnectionsEnabled() {
    return this.getBooleanAttribute('anonymous_connections_enabled');
  }
  public set anonymousConnectionsEnabled(value: boolean | cdktf.IResolvable) {
    this._anonymousConnectionsEnabled = value;
  }
  public resetAnonymousConnectionsEnabled() {
    this._anonymousConnectionsEnabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get anonymousConnectionsEnabledInput() {
    return this._anonymousConnectionsEnabled;
  }

  // id - computed: true, optional: true, required: false
  public get id() {
    return this.getStringAttribute('id');
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

  // event_handler - computed: false, optional: false, required: true
  private _eventHandler?: WebPubsubHubEventHandler[] | cdktf.IResolvable; 
  public get eventHandler() {
    // Getting the computed value is not yet implemented
    return cdktf.Token.asAny(cdktf.Fn.tolist(this.interpolationForAttribute('event_handler')));
  }
  public set eventHandler(value: WebPubsubHubEventHandler[] | cdktf.IResolvable) {
    this._eventHandler = value;
  }
  // Temporarily expose input value. Use with caution.
  public get eventHandlerInput() {
    return this._eventHandler;
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts = new WebPubsubHubTimeoutsOutputReference(this, "timeouts");
  public get timeouts() {
    return this._timeouts;
  }
  public putTimeouts(value: WebPubsubHubTimeouts) {
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
      anonymous_connections_enabled: cdktf.booleanToTerraform(this._anonymousConnectionsEnabled),
      name: cdktf.stringToTerraform(this._name),
      web_pubsub_id: cdktf.stringToTerraform(this._webPubsubId),
      event_handler: cdktf.listMapper(webPubsubHubEventHandlerToTerraform)(this._eventHandler),
      timeouts: webPubsubHubTimeoutsToTerraform(this._timeouts.internalValue),
    };
  }
}
