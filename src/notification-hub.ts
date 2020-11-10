// https://www.terraform.io/docs/providers/azurerm/r/notification_hub.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import { TerraformResource } from 'cdktf';
import { TerraformMetaArguments } from 'cdktf';

// Configuration

export interface NotificationHubConfig extends TerraformMetaArguments {
  readonly location: string;
  readonly name: string;
  readonly namespaceName: string;
  readonly resourceGroupName: string;
  /** apns_credential block */
  readonly apnsCredential?: NotificationHubApnsCredential[];
  /** gcm_credential block */
  readonly gcmCredential?: NotificationHubGcmCredential[];
  /** timeouts block */
  readonly timeouts?: NotificationHubTimeouts;
}
export interface NotificationHubApnsCredential {
  readonly applicationMode: string;
  readonly bundleId: string;
  readonly keyId: string;
  readonly teamId: string;
  readonly token: string;
}
export interface NotificationHubGcmCredential {
  readonly apiKey: string;
}
export interface NotificationHubTimeouts {
  readonly create?: string;
  readonly delete?: string;
  readonly read?: string;
  readonly update?: string;
}

// Resource

export class NotificationHub extends TerraformResource {

  // ===========
  // INITIALIZER
  // ===========

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
      location: this._location,
      name: this._name,
      namespace_name: this._namespaceName,
      resource_group_name: this._resourceGroupName,
      apns_credential: this._apnsCredential,
      gcm_credential: this._gcmCredential,
      timeouts: this._timeouts,
    };
  }
}
