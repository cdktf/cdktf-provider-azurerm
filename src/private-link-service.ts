// https://www.terraform.io/docs/providers/azurerm/r/private_link_service.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import { TerraformResource } from 'cdktf';
import { TerraformMetaArguments } from 'cdktf';

// Configuration

export interface PrivateLinkServiceConfig extends TerraformMetaArguments {
  readonly autoApprovalSubscriptionIds?: string[];
  readonly enableProxyProtocol?: boolean;
  readonly loadBalancerFrontendIpConfigurationIds: string[];
  readonly location: string;
  readonly name: string;
  readonly resourceGroupName: string;
  readonly tags?: { [key: string]: string };
  readonly visibilitySubscriptionIds?: string[];
  /** nat_ip_configuration block */
  readonly natIpConfiguration: PrivateLinkServiceNatIpConfiguration[];
  /** timeouts block */
  readonly timeouts?: PrivateLinkServiceTimeouts;
}
export interface PrivateLinkServiceNatIpConfiguration {
  readonly name: string;
  readonly primary: boolean;
  readonly privateIpAddress?: string;
  readonly privateIpAddressVersion?: string;
  readonly subnetId: string;
}
export interface PrivateLinkServiceTimeouts {
  readonly create?: string;
  readonly delete?: string;
  readonly read?: string;
  readonly update?: string;
}

// Resource

export class PrivateLinkService extends TerraformResource {

  // ===========
  // INITIALIZER
  // ===========

  public constructor(scope: Construct, id: string, config: PrivateLinkServiceConfig) {
    super(scope, id, {
      terraformResourceType: 'azurerm_private_link_service',
      terraformGeneratorMetadata: {
        providerName: 'azurerm'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle
    });
    this._autoApprovalSubscriptionIds = config.autoApprovalSubscriptionIds;
    this._enableProxyProtocol = config.enableProxyProtocol;
    this._loadBalancerFrontendIpConfigurationIds = config.loadBalancerFrontendIpConfigurationIds;
    this._location = config.location;
    this._name = config.name;
    this._resourceGroupName = config.resourceGroupName;
    this._tags = config.tags;
    this._visibilitySubscriptionIds = config.visibilitySubscriptionIds;
    this._natIpConfiguration = config.natIpConfiguration;
    this._timeouts = config.timeouts;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // alias - computed: true, optional: false, required: true
  public get alias() {
    return this.getStringAttribute('alias');
  }

  // auto_approval_subscription_ids - computed: false, optional: true, required: false
  private _autoApprovalSubscriptionIds?: string[];
  public get autoApprovalSubscriptionIds() {
    return this._autoApprovalSubscriptionIds;
  }
  public set autoApprovalSubscriptionIds(value: string[] | undefined) {
    this._autoApprovalSubscriptionIds = value;
  }

  // enable_proxy_protocol - computed: false, optional: true, required: false
  private _enableProxyProtocol?: boolean;
  public get enableProxyProtocol() {
    return this._enableProxyProtocol;
  }
  public set enableProxyProtocol(value: boolean | undefined) {
    this._enableProxyProtocol = value;
  }

  // id - computed: true, optional: true, required: false
  private _id?: string;
  public get id() {
    return this._id ?? this.getStringAttribute('id');
  }
  public set id(value: string | undefined) {
    this._id = value;
  }

  // load_balancer_frontend_ip_configuration_ids - computed: false, optional: false, required: true
  private _loadBalancerFrontendIpConfigurationIds: string[];
  public get loadBalancerFrontendIpConfigurationIds() {
    return this._loadBalancerFrontendIpConfigurationIds;
  }
  public set loadBalancerFrontendIpConfigurationIds(value: string[]) {
    this._loadBalancerFrontendIpConfigurationIds = value;
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

  // resource_group_name - computed: false, optional: false, required: true
  private _resourceGroupName: string;
  public get resourceGroupName() {
    return this._resourceGroupName;
  }
  public set resourceGroupName(value: string) {
    this._resourceGroupName = value;
  }

  // tags - computed: false, optional: true, required: false
  private _tags?: { [key: string]: string };
  public get tags() {
    return this._tags;
  }
  public set tags(value: { [key: string]: string } | undefined) {
    this._tags = value;
  }

  // visibility_subscription_ids - computed: false, optional: true, required: false
  private _visibilitySubscriptionIds?: string[];
  public get visibilitySubscriptionIds() {
    return this._visibilitySubscriptionIds;
  }
  public set visibilitySubscriptionIds(value: string[] | undefined) {
    this._visibilitySubscriptionIds = value;
  }

  // nat_ip_configuration - computed: false, optional: false, required: true
  private _natIpConfiguration: PrivateLinkServiceNatIpConfiguration[];
  public get natIpConfiguration() {
    return this._natIpConfiguration;
  }
  public set natIpConfiguration(value: PrivateLinkServiceNatIpConfiguration[]) {
    this._natIpConfiguration = value;
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts?: PrivateLinkServiceTimeouts;
  public get timeouts() {
    return this._timeouts;
  }
  public set timeouts(value: PrivateLinkServiceTimeouts | undefined) {
    this._timeouts = value;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      auto_approval_subscription_ids: this._autoApprovalSubscriptionIds,
      enable_proxy_protocol: this._enableProxyProtocol,
      load_balancer_frontend_ip_configuration_ids: this._loadBalancerFrontendIpConfigurationIds,
      location: this._location,
      name: this._name,
      resource_group_name: this._resourceGroupName,
      tags: this._tags,
      visibility_subscription_ids: this._visibilitySubscriptionIds,
      nat_ip_configuration: this._natIpConfiguration,
      timeouts: this._timeouts,
    };
  }
}
