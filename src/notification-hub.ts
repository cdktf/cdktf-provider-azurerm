// https://www.terraform.io/docs/providers/azurerm/r/notification_hub.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface NotificationHubConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/notification_hub.html#location NotificationHub#location}
  */
  readonly location: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/notification_hub.html#name NotificationHub#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/notification_hub.html#namespace_name NotificationHub#namespace_name}
  */
  readonly namespaceName: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/notification_hub.html#resource_group_name NotificationHub#resource_group_name}
  */
  readonly resourceGroupName: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/notification_hub.html#tags NotificationHub#tags}
  */
  readonly tags?: { [key: string]: string };
  /**
  * apns_credential block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/notification_hub.html#apns_credential NotificationHub#apns_credential}
  */
  readonly apnsCredential?: NotificationHubApnsCredential[];
  /**
  * gcm_credential block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/notification_hub.html#gcm_credential NotificationHub#gcm_credential}
  */
  readonly gcmCredential?: NotificationHubGcmCredential[];
  /**
  * timeouts block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/notification_hub.html#timeouts NotificationHub#timeouts}
  */
  readonly timeouts?: NotificationHubTimeouts;
}
export interface NotificationHubApnsCredential {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/notification_hub.html#application_mode NotificationHub#application_mode}
  */
  readonly applicationMode: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/notification_hub.html#bundle_id NotificationHub#bundle_id}
  */
  readonly bundleId: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/notification_hub.html#key_id NotificationHub#key_id}
  */
  readonly keyId: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/notification_hub.html#team_id NotificationHub#team_id}
  */
  readonly teamId: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/notification_hub.html#token NotificationHub#token}
  */
  readonly token: string;
}

function notificationHubApnsCredentialToTerraform(struct?: NotificationHubApnsCredential): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    application_mode: cdktf.stringToTerraform(struct!.applicationMode),
    bundle_id: cdktf.stringToTerraform(struct!.bundleId),
    key_id: cdktf.stringToTerraform(struct!.keyId),
    team_id: cdktf.stringToTerraform(struct!.teamId),
    token: cdktf.stringToTerraform(struct!.token),
  }
}

export interface NotificationHubGcmCredential {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/notification_hub.html#api_key NotificationHub#api_key}
  */
  readonly apiKey: string;
}

function notificationHubGcmCredentialToTerraform(struct?: NotificationHubGcmCredential): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    api_key: cdktf.stringToTerraform(struct!.apiKey),
  }
}

export interface NotificationHubTimeouts {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/notification_hub.html#create NotificationHub#create}
  */
  readonly create?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/notification_hub.html#delete NotificationHub#delete}
  */
  readonly delete?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/notification_hub.html#read NotificationHub#read}
  */
  readonly read?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/notification_hub.html#update NotificationHub#update}
  */
  readonly update?: string;
}

function notificationHubTimeoutsToTerraform(struct?: NotificationHubTimeouts): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    create: cdktf.stringToTerraform(struct!.create),
    delete: cdktf.stringToTerraform(struct!.delete),
    read: cdktf.stringToTerraform(struct!.read),
    update: cdktf.stringToTerraform(struct!.update),
  }
}


/**
* Represents a {@link https://www.terraform.io/docs/providers/azurerm/r/notification_hub.html azurerm_notification_hub}
*/
export class NotificationHub extends cdktf.TerraformResource {

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://www.terraform.io/docs/providers/azurerm/r/notification_hub.html azurerm_notification_hub} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options NotificationHubConfig
  */
  public constructor(scope: Construct, id: string, config: NotificationHubConfig) {
    super(scope, id, {
      terraformResourceType: 'azurerm_notification_hub',
      terraformGeneratorMetadata: {
        providerName: 'azurerm'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle
    });
    this._location = config.location;
    this._name = config.name;
    this._namespaceName = config.namespaceName;
    this._resourceGroupName = config.resourceGroupName;
    this._tags = config.tags;
    this._apnsCredential = config.apnsCredential;
    this._gcmCredential = config.gcmCredential;
    this._timeouts = config.timeouts;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // id - computed: true, optional: true, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // location - computed: false, optional: false, required: true
  private _location: string;
  public get location() {
    return this.getStringAttribute('location');
  }
  public set location(value: string) {
    this._location = value;
  }
  // Temporarily expose input value. Use with caution.
  public get locationInput() {
    return this._location
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

  // namespace_name - computed: false, optional: false, required: true
  private _namespaceName: string;
  public get namespaceName() {
    return this.getStringAttribute('namespace_name');
  }
  public set namespaceName(value: string) {
    this._namespaceName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get namespaceNameInput() {
    return this._namespaceName
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

  // tags - computed: false, optional: true, required: false
  private _tags?: { [key: string]: string };
  public get tags() {
    return this.interpolationForAttribute('tags') as any;
  }
  public set tags(value: { [key: string]: string } ) {
    this._tags = value;
  }
  public resetTags() {
    this._tags = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tagsInput() {
    return this._tags
  }

  // apns_credential - computed: false, optional: true, required: false
  private _apnsCredential?: NotificationHubApnsCredential[];
  public get apnsCredential() {
    return this.interpolationForAttribute('apns_credential') as any;
  }
  public set apnsCredential(value: NotificationHubApnsCredential[] ) {
    this._apnsCredential = value;
  }
  public resetApnsCredential() {
    this._apnsCredential = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get apnsCredentialInput() {
    return this._apnsCredential
  }

  // gcm_credential - computed: false, optional: true, required: false
  private _gcmCredential?: NotificationHubGcmCredential[];
  public get gcmCredential() {
    return this.interpolationForAttribute('gcm_credential') as any;
  }
  public set gcmCredential(value: NotificationHubGcmCredential[] ) {
    this._gcmCredential = value;
  }
  public resetGcmCredential() {
    this._gcmCredential = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get gcmCredentialInput() {
    return this._gcmCredential
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts?: NotificationHubTimeouts;
  public get timeouts() {
    return this.interpolationForAttribute('timeouts') as any;
  }
  public set timeouts(value: NotificationHubTimeouts ) {
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
      location: cdktf.stringToTerraform(this._location),
      name: cdktf.stringToTerraform(this._name),
      namespace_name: cdktf.stringToTerraform(this._namespaceName),
      resource_group_name: cdktf.stringToTerraform(this._resourceGroupName),
      tags: cdktf.hashMapper(cdktf.anyToTerraform)(this._tags),
      apns_credential: cdktf.listMapper(notificationHubApnsCredentialToTerraform)(this._apnsCredential),
      gcm_credential: cdktf.listMapper(notificationHubGcmCredentialToTerraform)(this._gcmCredential),
      timeouts: notificationHubTimeoutsToTerraform(this._timeouts),
    };
  }
}
