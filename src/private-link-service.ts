// https://www.terraform.io/docs/providers/azurerm/r/private_link_service.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface PrivateLinkServiceConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/private_link_service.html#auto_approval_subscription_ids PrivateLinkService#auto_approval_subscription_ids}
  */
  readonly autoApprovalSubscriptionIds?: string[];
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/private_link_service.html#enable_proxy_protocol PrivateLinkService#enable_proxy_protocol}
  */
  readonly enableProxyProtocol?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/private_link_service.html#load_balancer_frontend_ip_configuration_ids PrivateLinkService#load_balancer_frontend_ip_configuration_ids}
  */
  readonly loadBalancerFrontendIpConfigurationIds: string[];
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/private_link_service.html#location PrivateLinkService#location}
  */
  readonly location: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/private_link_service.html#name PrivateLinkService#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/private_link_service.html#resource_group_name PrivateLinkService#resource_group_name}
  */
  readonly resourceGroupName: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/private_link_service.html#tags PrivateLinkService#tags}
  */
  readonly tags?: { [key: string]: string } | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/private_link_service.html#visibility_subscription_ids PrivateLinkService#visibility_subscription_ids}
  */
  readonly visibilitySubscriptionIds?: string[];
  /**
  * nat_ip_configuration block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/private_link_service.html#nat_ip_configuration PrivateLinkService#nat_ip_configuration}
  */
  readonly natIpConfiguration: PrivateLinkServiceNatIpConfiguration[];
  /**
  * timeouts block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/private_link_service.html#timeouts PrivateLinkService#timeouts}
  */
  readonly timeouts?: PrivateLinkServiceTimeouts;
}
export interface PrivateLinkServiceNatIpConfiguration {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/private_link_service.html#name PrivateLinkService#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/private_link_service.html#primary PrivateLinkService#primary}
  */
  readonly primary: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/private_link_service.html#private_ip_address PrivateLinkService#private_ip_address}
  */
  readonly privateIpAddress?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/private_link_service.html#private_ip_address_version PrivateLinkService#private_ip_address_version}
  */
  readonly privateIpAddressVersion?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/private_link_service.html#subnet_id PrivateLinkService#subnet_id}
  */
  readonly subnetId: string;
}

function privateLinkServiceNatIpConfigurationToTerraform(struct?: PrivateLinkServiceNatIpConfiguration): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
    primary: cdktf.booleanToTerraform(struct!.primary),
    private_ip_address: cdktf.stringToTerraform(struct!.privateIpAddress),
    private_ip_address_version: cdktf.stringToTerraform(struct!.privateIpAddressVersion),
    subnet_id: cdktf.stringToTerraform(struct!.subnetId),
  }
}

export interface PrivateLinkServiceTimeouts {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/private_link_service.html#create PrivateLinkService#create}
  */
  readonly create?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/private_link_service.html#delete PrivateLinkService#delete}
  */
  readonly delete?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/private_link_service.html#read PrivateLinkService#read}
  */
  readonly read?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/private_link_service.html#update PrivateLinkService#update}
  */
  readonly update?: string;
}

function privateLinkServiceTimeoutsToTerraform(struct?: PrivateLinkServiceTimeoutsOutputReference | PrivateLinkServiceTimeouts): any {
  if (!cdktf.canInspect(struct)) { return struct; }
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

export class PrivateLinkServiceTimeoutsOutputReference extends cdktf.ComplexObject {
  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param isSingleItem True if this is a block, false if it's a list
  */
  public constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean) {
    super(terraformResource, terraformAttribute, isSingleItem);
  }

  // create - computed: false, optional: true, required: false
  private _create?: string | undefined; 
  public get create() {
    return this.getStringAttribute('create');
  }
  public set create(value: string | undefined) {
    this._create = value;
  }
  public resetCreate() {
    this._create = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get createInput() {
    return this._create
  }

  // delete - computed: false, optional: true, required: false
  private _delete?: string | undefined; 
  public get delete() {
    return this.getStringAttribute('delete');
  }
  public set delete(value: string | undefined) {
    this._delete = value;
  }
  public resetDelete() {
    this._delete = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get deleteInput() {
    return this._delete
  }

  // read - computed: false, optional: true, required: false
  private _read?: string | undefined; 
  public get read() {
    return this.getStringAttribute('read');
  }
  public set read(value: string | undefined) {
    this._read = value;
  }
  public resetRead() {
    this._read = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get readInput() {
    return this._read
  }

  // update - computed: false, optional: true, required: false
  private _update?: string | undefined; 
  public get update() {
    return this.getStringAttribute('update');
  }
  public set update(value: string | undefined) {
    this._update = value;
  }
  public resetUpdate() {
    this._update = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get updateInput() {
    return this._update
  }
}

/**
* Represents a {@link https://www.terraform.io/docs/providers/azurerm/r/private_link_service.html azurerm_private_link_service}
*/
export class PrivateLinkService extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType: string = "azurerm_private_link_service";

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://www.terraform.io/docs/providers/azurerm/r/private_link_service.html azurerm_private_link_service} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options PrivateLinkServiceConfig
  */
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

  // alias - computed: true, optional: false, required: false
  public get alias() {
    return this.getStringAttribute('alias');
  }

  // auto_approval_subscription_ids - computed: false, optional: true, required: false
  private _autoApprovalSubscriptionIds?: string[] | undefined; 
  public get autoApprovalSubscriptionIds() {
    return this.getListAttribute('auto_approval_subscription_ids');
  }
  public set autoApprovalSubscriptionIds(value: string[] | undefined) {
    this._autoApprovalSubscriptionIds = value;
  }
  public resetAutoApprovalSubscriptionIds() {
    this._autoApprovalSubscriptionIds = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get autoApprovalSubscriptionIdsInput() {
    return this._autoApprovalSubscriptionIds
  }

  // enable_proxy_protocol - computed: false, optional: true, required: false
  private _enableProxyProtocol?: boolean | cdktf.IResolvable | undefined; 
  public get enableProxyProtocol() {
    return this.getBooleanAttribute('enable_proxy_protocol') as any;
  }
  public set enableProxyProtocol(value: boolean | cdktf.IResolvable | undefined) {
    this._enableProxyProtocol = value;
  }
  public resetEnableProxyProtocol() {
    this._enableProxyProtocol = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enableProxyProtocolInput() {
    return this._enableProxyProtocol
  }

  // id - computed: true, optional: true, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // load_balancer_frontend_ip_configuration_ids - computed: false, optional: false, required: true
  private _loadBalancerFrontendIpConfigurationIds?: string[]; 
  public get loadBalancerFrontendIpConfigurationIds() {
    return this.getListAttribute('load_balancer_frontend_ip_configuration_ids');
  }
  public set loadBalancerFrontendIpConfigurationIds(value: string[]) {
    this._loadBalancerFrontendIpConfigurationIds = value;
  }
  // Temporarily expose input value. Use with caution.
  public get loadBalancerFrontendIpConfigurationIdsInput() {
    return this._loadBalancerFrontendIpConfigurationIds
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
    return this._location
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
    return this._name
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
    return this._resourceGroupName
  }

  // tags - computed: false, optional: true, required: false
  private _tags?: { [key: string]: string } | cdktf.IResolvable | undefined; 
  public get tags() {
    // Getting the computed value is not yet implemented
    return this.interpolationForAttribute('tags') as any;
  }
  public set tags(value: { [key: string]: string } | cdktf.IResolvable | undefined) {
    this._tags = value;
  }
  public resetTags() {
    this._tags = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tagsInput() {
    return this._tags
  }

  // visibility_subscription_ids - computed: false, optional: true, required: false
  private _visibilitySubscriptionIds?: string[] | undefined; 
  public get visibilitySubscriptionIds() {
    return this.getListAttribute('visibility_subscription_ids');
  }
  public set visibilitySubscriptionIds(value: string[] | undefined) {
    this._visibilitySubscriptionIds = value;
  }
  public resetVisibilitySubscriptionIds() {
    this._visibilitySubscriptionIds = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get visibilitySubscriptionIdsInput() {
    return this._visibilitySubscriptionIds
  }

  // nat_ip_configuration - computed: false, optional: false, required: true
  private _natIpConfiguration?: PrivateLinkServiceNatIpConfiguration[]; 
  public get natIpConfiguration() {
    // Getting the computed value is not yet implemented
    return this.interpolationForAttribute('nat_ip_configuration') as any;
  }
  public set natIpConfiguration(value: PrivateLinkServiceNatIpConfiguration[]) {
    this._natIpConfiguration = value;
  }
  // Temporarily expose input value. Use with caution.
  public get natIpConfigurationInput() {
    return this._natIpConfiguration
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts?: PrivateLinkServiceTimeouts | undefined; 
  private __timeoutsOutput = new PrivateLinkServiceTimeoutsOutputReference(this as any, "timeouts", true);
  public get timeouts() {
    return this.__timeoutsOutput;
  }
  public putTimeouts(value: PrivateLinkServiceTimeouts | undefined) {
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
      auto_approval_subscription_ids: cdktf.listMapper(cdktf.stringToTerraform)(this._autoApprovalSubscriptionIds),
      enable_proxy_protocol: cdktf.booleanToTerraform(this._enableProxyProtocol),
      load_balancer_frontend_ip_configuration_ids: cdktf.listMapper(cdktf.stringToTerraform)(this._loadBalancerFrontendIpConfigurationIds),
      location: cdktf.stringToTerraform(this._location),
      name: cdktf.stringToTerraform(this._name),
      resource_group_name: cdktf.stringToTerraform(this._resourceGroupName),
      tags: cdktf.hashMapper(cdktf.anyToTerraform)(this._tags),
      visibility_subscription_ids: cdktf.listMapper(cdktf.stringToTerraform)(this._visibilitySubscriptionIds),
      nat_ip_configuration: cdktf.listMapper(privateLinkServiceNatIpConfigurationToTerraform)(this._natIpConfiguration),
      timeouts: privateLinkServiceTimeoutsToTerraform(this._timeouts),
    };
  }
}
