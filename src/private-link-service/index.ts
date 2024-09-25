// https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/private_link_service
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface PrivateLinkServiceConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/private_link_service#auto_approval_subscription_ids PrivateLinkService#auto_approval_subscription_ids}
  */
  readonly autoApprovalSubscriptionIds?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/private_link_service#enable_proxy_protocol PrivateLinkService#enable_proxy_protocol}
  */
  readonly enableProxyProtocol?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/private_link_service#fqdns PrivateLinkService#fqdns}
  */
  readonly fqdns?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/private_link_service#id PrivateLinkService#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/private_link_service#load_balancer_frontend_ip_configuration_ids PrivateLinkService#load_balancer_frontend_ip_configuration_ids}
  */
  readonly loadBalancerFrontendIpConfigurationIds: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/private_link_service#location PrivateLinkService#location}
  */
  readonly location: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/private_link_service#name PrivateLinkService#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/private_link_service#resource_group_name PrivateLinkService#resource_group_name}
  */
  readonly resourceGroupName: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/private_link_service#tags PrivateLinkService#tags}
  */
  readonly tags?: { [key: string]: string };
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/private_link_service#visibility_subscription_ids PrivateLinkService#visibility_subscription_ids}
  */
  readonly visibilitySubscriptionIds?: string[];
  /**
  * nat_ip_configuration block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/private_link_service#nat_ip_configuration PrivateLinkService#nat_ip_configuration}
  */
  readonly natIpConfiguration: PrivateLinkServiceNatIpConfiguration[] | cdktf.IResolvable;
  /**
  * timeouts block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/private_link_service#timeouts PrivateLinkService#timeouts}
  */
  readonly timeouts?: PrivateLinkServiceTimeouts;
}
export interface PrivateLinkServiceNatIpConfiguration {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/private_link_service#name PrivateLinkService#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/private_link_service#primary PrivateLinkService#primary}
  */
  readonly primary: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/private_link_service#private_ip_address PrivateLinkService#private_ip_address}
  */
  readonly privateIpAddress?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/private_link_service#private_ip_address_version PrivateLinkService#private_ip_address_version}
  */
  readonly privateIpAddressVersion?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/private_link_service#subnet_id PrivateLinkService#subnet_id}
  */
  readonly subnetId: string;
}

export function privateLinkServiceNatIpConfigurationToTerraform(struct?: PrivateLinkServiceNatIpConfiguration | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
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


export function privateLinkServiceNatIpConfigurationToHclTerraform(struct?: PrivateLinkServiceNatIpConfiguration | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    name: {
      value: cdktf.stringToHclTerraform(struct!.name),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    primary: {
      value: cdktf.booleanToHclTerraform(struct!.primary),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    private_ip_address: {
      value: cdktf.stringToHclTerraform(struct!.privateIpAddress),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    private_ip_address_version: {
      value: cdktf.stringToHclTerraform(struct!.privateIpAddressVersion),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    subnet_id: {
      value: cdktf.stringToHclTerraform(struct!.subnetId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class PrivateLinkServiceNatIpConfigurationOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): PrivateLinkServiceNatIpConfiguration | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._primary !== undefined) {
      hasAnyValues = true;
      internalValueResult.primary = this._primary;
    }
    if (this._privateIpAddress !== undefined) {
      hasAnyValues = true;
      internalValueResult.privateIpAddress = this._privateIpAddress;
    }
    if (this._privateIpAddressVersion !== undefined) {
      hasAnyValues = true;
      internalValueResult.privateIpAddressVersion = this._privateIpAddressVersion;
    }
    if (this._subnetId !== undefined) {
      hasAnyValues = true;
      internalValueResult.subnetId = this._subnetId;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: PrivateLinkServiceNatIpConfiguration | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._name = undefined;
      this._primary = undefined;
      this._privateIpAddress = undefined;
      this._privateIpAddressVersion = undefined;
      this._subnetId = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._name = value.name;
      this._primary = value.primary;
      this._privateIpAddress = value.privateIpAddress;
      this._privateIpAddressVersion = value.privateIpAddressVersion;
      this._subnetId = value.subnetId;
    }
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

  // primary - computed: false, optional: false, required: true
  private _primary?: boolean | cdktf.IResolvable; 
  public get primary() {
    return this.getBooleanAttribute('primary');
  }
  public set primary(value: boolean | cdktf.IResolvable) {
    this._primary = value;
  }
  // Temporarily expose input value. Use with caution.
  public get primaryInput() {
    return this._primary;
  }

  // private_ip_address - computed: false, optional: true, required: false
  private _privateIpAddress?: string; 
  public get privateIpAddress() {
    return this.getStringAttribute('private_ip_address');
  }
  public set privateIpAddress(value: string) {
    this._privateIpAddress = value;
  }
  public resetPrivateIpAddress() {
    this._privateIpAddress = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get privateIpAddressInput() {
    return this._privateIpAddress;
  }

  // private_ip_address_version - computed: false, optional: true, required: false
  private _privateIpAddressVersion?: string; 
  public get privateIpAddressVersion() {
    return this.getStringAttribute('private_ip_address_version');
  }
  public set privateIpAddressVersion(value: string) {
    this._privateIpAddressVersion = value;
  }
  public resetPrivateIpAddressVersion() {
    this._privateIpAddressVersion = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get privateIpAddressVersionInput() {
    return this._privateIpAddressVersion;
  }

  // subnet_id - computed: false, optional: false, required: true
  private _subnetId?: string; 
  public get subnetId() {
    return this.getStringAttribute('subnet_id');
  }
  public set subnetId(value: string) {
    this._subnetId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get subnetIdInput() {
    return this._subnetId;
  }
}

export class PrivateLinkServiceNatIpConfigurationList extends cdktf.ComplexList {
  public internalValue? : PrivateLinkServiceNatIpConfiguration[] | cdktf.IResolvable

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
  public get(index: number): PrivateLinkServiceNatIpConfigurationOutputReference {
    return new PrivateLinkServiceNatIpConfigurationOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface PrivateLinkServiceTimeouts {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/private_link_service#create PrivateLinkService#create}
  */
  readonly create?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/private_link_service#delete PrivateLinkService#delete}
  */
  readonly delete?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/private_link_service#read PrivateLinkService#read}
  */
  readonly read?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/private_link_service#update PrivateLinkService#update}
  */
  readonly update?: string;
}

export function privateLinkServiceTimeoutsToTerraform(struct?: PrivateLinkServiceTimeouts | cdktf.IResolvable): any {
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


export function privateLinkServiceTimeoutsToHclTerraform(struct?: PrivateLinkServiceTimeouts | cdktf.IResolvable): any {
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

export class PrivateLinkServiceTimeoutsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): PrivateLinkServiceTimeouts | cdktf.IResolvable | undefined {
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

  public set internalValue(value: PrivateLinkServiceTimeouts | cdktf.IResolvable | undefined) {
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
* Represents a {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/private_link_service azurerm_private_link_service}
*/
export class PrivateLinkService extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "azurerm_private_link_service";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a PrivateLinkService resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the PrivateLinkService to import
  * @param importFromId The id of the existing PrivateLinkService that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/private_link_service#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the PrivateLinkService to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "azurerm_private_link_service", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/private_link_service azurerm_private_link_service} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options PrivateLinkServiceConfig
  */
  public constructor(scope: Construct, id: string, config: PrivateLinkServiceConfig) {
    super(scope, id, {
      terraformResourceType: 'azurerm_private_link_service',
      terraformGeneratorMetadata: {
        providerName: 'azurerm',
        providerVersion: '4.3.0',
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
    this._autoApprovalSubscriptionIds = config.autoApprovalSubscriptionIds;
    this._enableProxyProtocol = config.enableProxyProtocol;
    this._fqdns = config.fqdns;
    this._id = config.id;
    this._loadBalancerFrontendIpConfigurationIds = config.loadBalancerFrontendIpConfigurationIds;
    this._location = config.location;
    this._name = config.name;
    this._resourceGroupName = config.resourceGroupName;
    this._tags = config.tags;
    this._visibilitySubscriptionIds = config.visibilitySubscriptionIds;
    this._natIpConfiguration.internalValue = config.natIpConfiguration;
    this._timeouts.internalValue = config.timeouts;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // alias - computed: true, optional: false, required: false
  public get alias() {
    return this.getStringAttribute('alias');
  }

  // auto_approval_subscription_ids - computed: false, optional: true, required: false
  private _autoApprovalSubscriptionIds?: string[]; 
  public get autoApprovalSubscriptionIds() {
    return cdktf.Fn.tolist(this.getListAttribute('auto_approval_subscription_ids'));
  }
  public set autoApprovalSubscriptionIds(value: string[]) {
    this._autoApprovalSubscriptionIds = value;
  }
  public resetAutoApprovalSubscriptionIds() {
    this._autoApprovalSubscriptionIds = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get autoApprovalSubscriptionIdsInput() {
    return this._autoApprovalSubscriptionIds;
  }

  // enable_proxy_protocol - computed: false, optional: true, required: false
  private _enableProxyProtocol?: boolean | cdktf.IResolvable; 
  public get enableProxyProtocol() {
    return this.getBooleanAttribute('enable_proxy_protocol');
  }
  public set enableProxyProtocol(value: boolean | cdktf.IResolvable) {
    this._enableProxyProtocol = value;
  }
  public resetEnableProxyProtocol() {
    this._enableProxyProtocol = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enableProxyProtocolInput() {
    return this._enableProxyProtocol;
  }

  // fqdns - computed: false, optional: true, required: false
  private _fqdns?: string[]; 
  public get fqdns() {
    return this.getListAttribute('fqdns');
  }
  public set fqdns(value: string[]) {
    this._fqdns = value;
  }
  public resetFqdns() {
    this._fqdns = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fqdnsInput() {
    return this._fqdns;
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

  // load_balancer_frontend_ip_configuration_ids - computed: false, optional: false, required: true
  private _loadBalancerFrontendIpConfigurationIds?: string[]; 
  public get loadBalancerFrontendIpConfigurationIds() {
    return cdktf.Fn.tolist(this.getListAttribute('load_balancer_frontend_ip_configuration_ids'));
  }
  public set loadBalancerFrontendIpConfigurationIds(value: string[]) {
    this._loadBalancerFrontendIpConfigurationIds = value;
  }
  // Temporarily expose input value. Use with caution.
  public get loadBalancerFrontendIpConfigurationIdsInput() {
    return this._loadBalancerFrontendIpConfigurationIds;
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

  // visibility_subscription_ids - computed: false, optional: true, required: false
  private _visibilitySubscriptionIds?: string[]; 
  public get visibilitySubscriptionIds() {
    return cdktf.Fn.tolist(this.getListAttribute('visibility_subscription_ids'));
  }
  public set visibilitySubscriptionIds(value: string[]) {
    this._visibilitySubscriptionIds = value;
  }
  public resetVisibilitySubscriptionIds() {
    this._visibilitySubscriptionIds = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get visibilitySubscriptionIdsInput() {
    return this._visibilitySubscriptionIds;
  }

  // nat_ip_configuration - computed: false, optional: false, required: true
  private _natIpConfiguration = new PrivateLinkServiceNatIpConfigurationList(this, "nat_ip_configuration", false);
  public get natIpConfiguration() {
    return this._natIpConfiguration;
  }
  public putNatIpConfiguration(value: PrivateLinkServiceNatIpConfiguration[] | cdktf.IResolvable) {
    this._natIpConfiguration.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get natIpConfigurationInput() {
    return this._natIpConfiguration.internalValue;
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts = new PrivateLinkServiceTimeoutsOutputReference(this, "timeouts");
  public get timeouts() {
    return this._timeouts;
  }
  public putTimeouts(value: PrivateLinkServiceTimeouts) {
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
      auto_approval_subscription_ids: cdktf.listMapper(cdktf.stringToTerraform, false)(this._autoApprovalSubscriptionIds),
      enable_proxy_protocol: cdktf.booleanToTerraform(this._enableProxyProtocol),
      fqdns: cdktf.listMapper(cdktf.stringToTerraform, false)(this._fqdns),
      id: cdktf.stringToTerraform(this._id),
      load_balancer_frontend_ip_configuration_ids: cdktf.listMapper(cdktf.stringToTerraform, false)(this._loadBalancerFrontendIpConfigurationIds),
      location: cdktf.stringToTerraform(this._location),
      name: cdktf.stringToTerraform(this._name),
      resource_group_name: cdktf.stringToTerraform(this._resourceGroupName),
      tags: cdktf.hashMapper(cdktf.stringToTerraform)(this._tags),
      visibility_subscription_ids: cdktf.listMapper(cdktf.stringToTerraform, false)(this._visibilitySubscriptionIds),
      nat_ip_configuration: cdktf.listMapper(privateLinkServiceNatIpConfigurationToTerraform, true)(this._natIpConfiguration.internalValue),
      timeouts: privateLinkServiceTimeoutsToTerraform(this._timeouts.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      auto_approval_subscription_ids: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._autoApprovalSubscriptionIds),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      enable_proxy_protocol: {
        value: cdktf.booleanToHclTerraform(this._enableProxyProtocol),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      fqdns: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._fqdns),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
      },
      id: {
        value: cdktf.stringToHclTerraform(this._id),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      load_balancer_frontend_ip_configuration_ids: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._loadBalancerFrontendIpConfigurationIds),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
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
      resource_group_name: {
        value: cdktf.stringToHclTerraform(this._resourceGroupName),
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
      visibility_subscription_ids: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._visibilitySubscriptionIds),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      nat_ip_configuration: {
        value: cdktf.listMapperHcl(privateLinkServiceNatIpConfigurationToHclTerraform, true)(this._natIpConfiguration.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "PrivateLinkServiceNatIpConfigurationList",
      },
      timeouts: {
        value: privateLinkServiceTimeoutsToHclTerraform(this._timeouts.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "PrivateLinkServiceTimeouts",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
