// https://www.terraform.io/docs/providers/azurerm/r/container_registry_webhook.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import { TerraformResource } from 'cdktf';
import { TerraformMetaArguments } from 'cdktf';

// Configuration

export interface ContainerRegistryWebhookConfig extends TerraformMetaArguments {
  readonly actions: string[];
  readonly customHeaders?: { [key: string]: string };
  readonly location: string;
  readonly name: string;
  readonly registryName: string;
  readonly resourceGroupName: string;
  readonly scope?: string;
  readonly serviceUri: string;
  readonly status?: string;
  readonly tags?: { [key: string]: string };
  /** timeouts block */
  readonly timeouts?: ContainerRegistryWebhookTimeouts;
}
export interface ContainerRegistryWebhookTimeouts {
  readonly create?: string;
  readonly delete?: string;
  readonly read?: string;
  readonly update?: string;
}

// Resource

export class ContainerRegistryWebhook extends TerraformResource {

  // ===========
  // INITIALIZER
  // ===========

  public constructor(scope: Construct, id: string, config: ContainerRegistryWebhookConfig) {
    super(scope, id, {
      terraformResourceType: 'azurerm_container_registry_webhook',
      terraformGeneratorMetadata: {
        providerName: 'azurerm'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle
    });
    this._actions = config.actions;
    this._customHeaders = config.customHeaders;
    this._location = config.location;
    this._name = config.name;
    this._registryName = config.registryName;
    this._resourceGroupName = config.resourceGroupName;
    this._scope = config.scope;
    this._serviceUri = config.serviceUri;
    this._status = config.status;
    this._tags = config.tags;
    this._timeouts = config.timeouts;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // actions - computed: false, optional: false, required: true
  private _actions: string[];
  public get actions() {
    return this._actions;
  }
  public set actions(value: string[]) {
    this._actions = value;
  }

  // custom_headers - computed: false, optional: true, required: false
  private _customHeaders?: { [key: string]: string };
  public get customHeaders() {
    return this._customHeaders;
  }
  public set customHeaders(value: { [key: string]: string } | undefined) {
    this._customHeaders = value;
  }

  // id - computed: true, optional: true, required: false
  private _id?: string;
  public get id() {
    return this._id ?? this.getStringAttribute('id');
  }
  public set id(value: string | undefined) {
    this._id = value;
  }

  // location - computed: false, optional: false, required: true
  private _location: string;
  public get location() {
    return this._location;
  }
  public set location(value: string) {
    this._location = value;
  }

  // name - computed: false, optional: false, required: true
  private _name: string;
  public get name() {
    return this._name;
  }
  public set name(value: string) {
    this._name = value;
  }

  // registry_name - computed: false, optional: false, required: true
  private _registryName: string;
  public get registryName() {
    return this._registryName;
  }
  public set registryName(value: string) {
    this._registryName = value;
  }

  // resource_group_name - computed: false, optional: false, required: true
  private _resourceGroupName: string;
  public get resourceGroupName() {
    return this._resourceGroupName;
  }
  public set resourceGroupName(value: string) {
    this._resourceGroupName = value;
  }

  // scope - computed: false, optional: true, required: false
  private _scope?: string;
  public get scope() {
    return this._scope;
  }
  public set scope(value: string | undefined) {
    this._scope = value;
  }

  // service_uri - computed: false, optional: false, required: true
  private _serviceUri: string;
  public get serviceUri() {
    return this._serviceUri;
  }
  public set serviceUri(value: string) {
    this._serviceUri = value;
  }

  // status - computed: false, optional: true, required: false
  private _status?: string;
  public get status() {
    return this._status;
  }
  public set status(value: string | undefined) {
    this._status = value;
  }

  // tags - computed: false, optional: true, required: false
  private _tags?: { [key: string]: string };
  public get tags() {
    return this._tags;
  }
  public set tags(value: { [key: string]: string } | undefined) {
    this._tags = value;
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts?: ContainerRegistryWebhookTimeouts;
  public get timeouts() {
    return this._timeouts;
  }
  public set timeouts(value: ContainerRegistryWebhookTimeouts | undefined) {
    this._timeouts = value;
  }

  // =========
  // SYNTHESIS
  // =========

  public synthesizeAttributes(): { [name: string]: any } {
    return {
      actions: this._actions,
      custom_headers: this._customHeaders,
      location: this._location,
      name: this._name,
      registry_name: this._registryName,
      resource_group_name: this._resourceGroupName,
      scope: this._scope,
      service_uri: this._serviceUri,
      status: this._status,
      tags: this._tags,
      timeouts: this._timeouts,
    };
  }
}
