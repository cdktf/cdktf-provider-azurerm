// https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/api_management
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface ApiManagementConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/api_management#client_certificate_enabled ApiManagement#client_certificate_enabled}
  */
  readonly clientCertificateEnabled?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/api_management#gateway_disabled ApiManagement#gateway_disabled}
  */
  readonly gatewayDisabled?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/api_management#id ApiManagement#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/api_management#location ApiManagement#location}
  */
  readonly location: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/api_management#min_api_version ApiManagement#min_api_version}
  */
  readonly minApiVersion?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/api_management#name ApiManagement#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/api_management#notification_sender_email ApiManagement#notification_sender_email}
  */
  readonly notificationSenderEmail?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/api_management#public_ip_address_id ApiManagement#public_ip_address_id}
  */
  readonly publicIpAddressId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/api_management#public_network_access_enabled ApiManagement#public_network_access_enabled}
  */
  readonly publicNetworkAccessEnabled?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/api_management#publisher_email ApiManagement#publisher_email}
  */
  readonly publisherEmail: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/api_management#publisher_name ApiManagement#publisher_name}
  */
  readonly publisherName: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/api_management#resource_group_name ApiManagement#resource_group_name}
  */
  readonly resourceGroupName: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/api_management#sku_name ApiManagement#sku_name}
  */
  readonly skuName: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/api_management#tags ApiManagement#tags}
  */
  readonly tags?: { [key: string]: string };
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/api_management#virtual_network_type ApiManagement#virtual_network_type}
  */
  readonly virtualNetworkType?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/api_management#zones ApiManagement#zones}
  */
  readonly zones?: string[];
  /**
  * additional_location block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/api_management#additional_location ApiManagement#additional_location}
  */
  readonly additionalLocation?: ApiManagementAdditionalLocation[] | cdktf.IResolvable;
  /**
  * certificate block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/api_management#certificate ApiManagement#certificate}
  */
  readonly certificate?: ApiManagementCertificate[] | cdktf.IResolvable;
  /**
  * delegation block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/api_management#delegation ApiManagement#delegation}
  */
  readonly delegation?: ApiManagementDelegation;
  /**
  * hostname_configuration block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/api_management#hostname_configuration ApiManagement#hostname_configuration}
  */
  readonly hostnameConfiguration?: ApiManagementHostnameConfiguration;
  /**
  * identity block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/api_management#identity ApiManagement#identity}
  */
  readonly identity?: ApiManagementIdentity;
  /**
  * protocols block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/api_management#protocols ApiManagement#protocols}
  */
  readonly protocols?: ApiManagementProtocols;
  /**
  * security block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/api_management#security ApiManagement#security}
  */
  readonly security?: ApiManagementSecurity;
  /**
  * sign_in block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/api_management#sign_in ApiManagement#sign_in}
  */
  readonly signIn?: ApiManagementSignIn;
  /**
  * sign_up block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/api_management#sign_up ApiManagement#sign_up}
  */
  readonly signUp?: ApiManagementSignUp;
  /**
  * tenant_access block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/api_management#tenant_access ApiManagement#tenant_access}
  */
  readonly tenantAccess?: ApiManagementTenantAccess;
  /**
  * timeouts block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/api_management#timeouts ApiManagement#timeouts}
  */
  readonly timeouts?: ApiManagementTimeouts;
  /**
  * virtual_network_configuration block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/api_management#virtual_network_configuration ApiManagement#virtual_network_configuration}
  */
  readonly virtualNetworkConfiguration?: ApiManagementVirtualNetworkConfiguration;
}
export interface ApiManagementAdditionalLocationVirtualNetworkConfiguration {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/api_management#subnet_id ApiManagement#subnet_id}
  */
  readonly subnetId: string;
}

export function apiManagementAdditionalLocationVirtualNetworkConfigurationToTerraform(struct?: ApiManagementAdditionalLocationVirtualNetworkConfigurationOutputReference | ApiManagementAdditionalLocationVirtualNetworkConfiguration): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    subnet_id: cdktf.stringToTerraform(struct!.subnetId),
  }
}


export function apiManagementAdditionalLocationVirtualNetworkConfigurationToHclTerraform(struct?: ApiManagementAdditionalLocationVirtualNetworkConfigurationOutputReference | ApiManagementAdditionalLocationVirtualNetworkConfiguration): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
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

export class ApiManagementAdditionalLocationVirtualNetworkConfigurationOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ApiManagementAdditionalLocationVirtualNetworkConfiguration | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._subnetId !== undefined) {
      hasAnyValues = true;
      internalValueResult.subnetId = this._subnetId;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ApiManagementAdditionalLocationVirtualNetworkConfiguration | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._subnetId = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._subnetId = value.subnetId;
    }
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
export interface ApiManagementAdditionalLocation {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/api_management#capacity ApiManagement#capacity}
  */
  readonly capacity?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/api_management#gateway_disabled ApiManagement#gateway_disabled}
  */
  readonly gatewayDisabled?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/api_management#location ApiManagement#location}
  */
  readonly location: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/api_management#public_ip_address_id ApiManagement#public_ip_address_id}
  */
  readonly publicIpAddressId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/api_management#zones ApiManagement#zones}
  */
  readonly zones?: string[];
  /**
  * virtual_network_configuration block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/api_management#virtual_network_configuration ApiManagement#virtual_network_configuration}
  */
  readonly virtualNetworkConfiguration?: ApiManagementAdditionalLocationVirtualNetworkConfiguration;
}

export function apiManagementAdditionalLocationToTerraform(struct?: ApiManagementAdditionalLocation | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    capacity: cdktf.numberToTerraform(struct!.capacity),
    gateway_disabled: cdktf.booleanToTerraform(struct!.gatewayDisabled),
    location: cdktf.stringToTerraform(struct!.location),
    public_ip_address_id: cdktf.stringToTerraform(struct!.publicIpAddressId),
    zones: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.zones),
    virtual_network_configuration: apiManagementAdditionalLocationVirtualNetworkConfigurationToTerraform(struct!.virtualNetworkConfiguration),
  }
}


export function apiManagementAdditionalLocationToHclTerraform(struct?: ApiManagementAdditionalLocation | cdktf.IResolvable): any {
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
    gateway_disabled: {
      value: cdktf.booleanToHclTerraform(struct!.gatewayDisabled),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    location: {
      value: cdktf.stringToHclTerraform(struct!.location),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    public_ip_address_id: {
      value: cdktf.stringToHclTerraform(struct!.publicIpAddressId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    zones: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.zones),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
    virtual_network_configuration: {
      value: apiManagementAdditionalLocationVirtualNetworkConfigurationToHclTerraform(struct!.virtualNetworkConfiguration),
      isBlock: true,
      type: "list",
      storageClassType: "ApiManagementAdditionalLocationVirtualNetworkConfigurationList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ApiManagementAdditionalLocationOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ApiManagementAdditionalLocation | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._capacity !== undefined) {
      hasAnyValues = true;
      internalValueResult.capacity = this._capacity;
    }
    if (this._gatewayDisabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.gatewayDisabled = this._gatewayDisabled;
    }
    if (this._location !== undefined) {
      hasAnyValues = true;
      internalValueResult.location = this._location;
    }
    if (this._publicIpAddressId !== undefined) {
      hasAnyValues = true;
      internalValueResult.publicIpAddressId = this._publicIpAddressId;
    }
    if (this._zones !== undefined) {
      hasAnyValues = true;
      internalValueResult.zones = this._zones;
    }
    if (this._virtualNetworkConfiguration?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.virtualNetworkConfiguration = this._virtualNetworkConfiguration?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ApiManagementAdditionalLocation | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._capacity = undefined;
      this._gatewayDisabled = undefined;
      this._location = undefined;
      this._publicIpAddressId = undefined;
      this._zones = undefined;
      this._virtualNetworkConfiguration.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._capacity = value.capacity;
      this._gatewayDisabled = value.gatewayDisabled;
      this._location = value.location;
      this._publicIpAddressId = value.publicIpAddressId;
      this._zones = value.zones;
      this._virtualNetworkConfiguration.internalValue = value.virtualNetworkConfiguration;
    }
  }

  // capacity - computed: true, optional: true, required: false
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

  // gateway_disabled - computed: false, optional: true, required: false
  private _gatewayDisabled?: boolean | cdktf.IResolvable; 
  public get gatewayDisabled() {
    return this.getBooleanAttribute('gateway_disabled');
  }
  public set gatewayDisabled(value: boolean | cdktf.IResolvable) {
    this._gatewayDisabled = value;
  }
  public resetGatewayDisabled() {
    this._gatewayDisabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get gatewayDisabledInput() {
    return this._gatewayDisabled;
  }

  // gateway_regional_url - computed: true, optional: false, required: false
  public get gatewayRegionalUrl() {
    return this.getStringAttribute('gateway_regional_url');
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

  // private_ip_addresses - computed: true, optional: false, required: false
  public get privateIpAddresses() {
    return this.getListAttribute('private_ip_addresses');
  }

  // public_ip_address_id - computed: false, optional: true, required: false
  private _publicIpAddressId?: string; 
  public get publicIpAddressId() {
    return this.getStringAttribute('public_ip_address_id');
  }
  public set publicIpAddressId(value: string) {
    this._publicIpAddressId = value;
  }
  public resetPublicIpAddressId() {
    this._publicIpAddressId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get publicIpAddressIdInput() {
    return this._publicIpAddressId;
  }

  // public_ip_addresses - computed: true, optional: false, required: false
  public get publicIpAddresses() {
    return this.getListAttribute('public_ip_addresses');
  }

  // zones - computed: false, optional: true, required: false
  private _zones?: string[]; 
  public get zones() {
    return cdktf.Fn.tolist(this.getListAttribute('zones'));
  }
  public set zones(value: string[]) {
    this._zones = value;
  }
  public resetZones() {
    this._zones = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get zonesInput() {
    return this._zones;
  }

  // virtual_network_configuration - computed: false, optional: true, required: false
  private _virtualNetworkConfiguration = new ApiManagementAdditionalLocationVirtualNetworkConfigurationOutputReference(this, "virtual_network_configuration");
  public get virtualNetworkConfiguration() {
    return this._virtualNetworkConfiguration;
  }
  public putVirtualNetworkConfiguration(value: ApiManagementAdditionalLocationVirtualNetworkConfiguration) {
    this._virtualNetworkConfiguration.internalValue = value;
  }
  public resetVirtualNetworkConfiguration() {
    this._virtualNetworkConfiguration.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get virtualNetworkConfigurationInput() {
    return this._virtualNetworkConfiguration.internalValue;
  }
}

export class ApiManagementAdditionalLocationList extends cdktf.ComplexList {
  public internalValue? : ApiManagementAdditionalLocation[] | cdktf.IResolvable

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
  public get(index: number): ApiManagementAdditionalLocationOutputReference {
    return new ApiManagementAdditionalLocationOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ApiManagementCertificate {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/api_management#certificate_password ApiManagement#certificate_password}
  */
  readonly certificatePassword?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/api_management#encoded_certificate ApiManagement#encoded_certificate}
  */
  readonly encodedCertificate: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/api_management#store_name ApiManagement#store_name}
  */
  readonly storeName: string;
}

export function apiManagementCertificateToTerraform(struct?: ApiManagementCertificate | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    certificate_password: cdktf.stringToTerraform(struct!.certificatePassword),
    encoded_certificate: cdktf.stringToTerraform(struct!.encodedCertificate),
    store_name: cdktf.stringToTerraform(struct!.storeName),
  }
}


export function apiManagementCertificateToHclTerraform(struct?: ApiManagementCertificate | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    certificate_password: {
      value: cdktf.stringToHclTerraform(struct!.certificatePassword),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    encoded_certificate: {
      value: cdktf.stringToHclTerraform(struct!.encodedCertificate),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    store_name: {
      value: cdktf.stringToHclTerraform(struct!.storeName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ApiManagementCertificateOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ApiManagementCertificate | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._certificatePassword !== undefined) {
      hasAnyValues = true;
      internalValueResult.certificatePassword = this._certificatePassword;
    }
    if (this._encodedCertificate !== undefined) {
      hasAnyValues = true;
      internalValueResult.encodedCertificate = this._encodedCertificate;
    }
    if (this._storeName !== undefined) {
      hasAnyValues = true;
      internalValueResult.storeName = this._storeName;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ApiManagementCertificate | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._certificatePassword = undefined;
      this._encodedCertificate = undefined;
      this._storeName = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._certificatePassword = value.certificatePassword;
      this._encodedCertificate = value.encodedCertificate;
      this._storeName = value.storeName;
    }
  }

  // certificate_password - computed: false, optional: true, required: false
  private _certificatePassword?: string; 
  public get certificatePassword() {
    return this.getStringAttribute('certificate_password');
  }
  public set certificatePassword(value: string) {
    this._certificatePassword = value;
  }
  public resetCertificatePassword() {
    this._certificatePassword = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get certificatePasswordInput() {
    return this._certificatePassword;
  }

  // encoded_certificate - computed: false, optional: false, required: true
  private _encodedCertificate?: string; 
  public get encodedCertificate() {
    return this.getStringAttribute('encoded_certificate');
  }
  public set encodedCertificate(value: string) {
    this._encodedCertificate = value;
  }
  // Temporarily expose input value. Use with caution.
  public get encodedCertificateInput() {
    return this._encodedCertificate;
  }

  // expiry - computed: true, optional: false, required: false
  public get expiry() {
    return this.getStringAttribute('expiry');
  }

  // store_name - computed: false, optional: false, required: true
  private _storeName?: string; 
  public get storeName() {
    return this.getStringAttribute('store_name');
  }
  public set storeName(value: string) {
    this._storeName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get storeNameInput() {
    return this._storeName;
  }

  // subject - computed: true, optional: false, required: false
  public get subject() {
    return this.getStringAttribute('subject');
  }

  // thumbprint - computed: true, optional: false, required: false
  public get thumbprint() {
    return this.getStringAttribute('thumbprint');
  }
}

export class ApiManagementCertificateList extends cdktf.ComplexList {
  public internalValue? : ApiManagementCertificate[] | cdktf.IResolvable

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
  public get(index: number): ApiManagementCertificateOutputReference {
    return new ApiManagementCertificateOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ApiManagementDelegation {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/api_management#subscriptions_enabled ApiManagement#subscriptions_enabled}
  */
  readonly subscriptionsEnabled?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/api_management#url ApiManagement#url}
  */
  readonly url?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/api_management#user_registration_enabled ApiManagement#user_registration_enabled}
  */
  readonly userRegistrationEnabled?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/api_management#validation_key ApiManagement#validation_key}
  */
  readonly validationKey?: string;
}

export function apiManagementDelegationToTerraform(struct?: ApiManagementDelegationOutputReference | ApiManagementDelegation): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    subscriptions_enabled: cdktf.booleanToTerraform(struct!.subscriptionsEnabled),
    url: cdktf.stringToTerraform(struct!.url),
    user_registration_enabled: cdktf.booleanToTerraform(struct!.userRegistrationEnabled),
    validation_key: cdktf.stringToTerraform(struct!.validationKey),
  }
}


export function apiManagementDelegationToHclTerraform(struct?: ApiManagementDelegationOutputReference | ApiManagementDelegation): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    subscriptions_enabled: {
      value: cdktf.booleanToHclTerraform(struct!.subscriptionsEnabled),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    url: {
      value: cdktf.stringToHclTerraform(struct!.url),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    user_registration_enabled: {
      value: cdktf.booleanToHclTerraform(struct!.userRegistrationEnabled),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    validation_key: {
      value: cdktf.stringToHclTerraform(struct!.validationKey),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ApiManagementDelegationOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ApiManagementDelegation | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._subscriptionsEnabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.subscriptionsEnabled = this._subscriptionsEnabled;
    }
    if (this._url !== undefined) {
      hasAnyValues = true;
      internalValueResult.url = this._url;
    }
    if (this._userRegistrationEnabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.userRegistrationEnabled = this._userRegistrationEnabled;
    }
    if (this._validationKey !== undefined) {
      hasAnyValues = true;
      internalValueResult.validationKey = this._validationKey;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ApiManagementDelegation | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._subscriptionsEnabled = undefined;
      this._url = undefined;
      this._userRegistrationEnabled = undefined;
      this._validationKey = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._subscriptionsEnabled = value.subscriptionsEnabled;
      this._url = value.url;
      this._userRegistrationEnabled = value.userRegistrationEnabled;
      this._validationKey = value.validationKey;
    }
  }

  // subscriptions_enabled - computed: false, optional: true, required: false
  private _subscriptionsEnabled?: boolean | cdktf.IResolvable; 
  public get subscriptionsEnabled() {
    return this.getBooleanAttribute('subscriptions_enabled');
  }
  public set subscriptionsEnabled(value: boolean | cdktf.IResolvable) {
    this._subscriptionsEnabled = value;
  }
  public resetSubscriptionsEnabled() {
    this._subscriptionsEnabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get subscriptionsEnabledInput() {
    return this._subscriptionsEnabled;
  }

  // url - computed: false, optional: true, required: false
  private _url?: string; 
  public get url() {
    return this.getStringAttribute('url');
  }
  public set url(value: string) {
    this._url = value;
  }
  public resetUrl() {
    this._url = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get urlInput() {
    return this._url;
  }

  // user_registration_enabled - computed: false, optional: true, required: false
  private _userRegistrationEnabled?: boolean | cdktf.IResolvable; 
  public get userRegistrationEnabled() {
    return this.getBooleanAttribute('user_registration_enabled');
  }
  public set userRegistrationEnabled(value: boolean | cdktf.IResolvable) {
    this._userRegistrationEnabled = value;
  }
  public resetUserRegistrationEnabled() {
    this._userRegistrationEnabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get userRegistrationEnabledInput() {
    return this._userRegistrationEnabled;
  }

  // validation_key - computed: false, optional: true, required: false
  private _validationKey?: string; 
  public get validationKey() {
    return this.getStringAttribute('validation_key');
  }
  public set validationKey(value: string) {
    this._validationKey = value;
  }
  public resetValidationKey() {
    this._validationKey = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get validationKeyInput() {
    return this._validationKey;
  }
}
export interface ApiManagementHostnameConfigurationDeveloperPortal {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/api_management#certificate ApiManagement#certificate}
  */
  readonly certificate?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/api_management#certificate_password ApiManagement#certificate_password}
  */
  readonly certificatePassword?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/api_management#host_name ApiManagement#host_name}
  */
  readonly hostName: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/api_management#key_vault_id ApiManagement#key_vault_id}
  */
  readonly keyVaultId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/api_management#negotiate_client_certificate ApiManagement#negotiate_client_certificate}
  */
  readonly negotiateClientCertificate?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/api_management#ssl_keyvault_identity_client_id ApiManagement#ssl_keyvault_identity_client_id}
  */
  readonly sslKeyvaultIdentityClientId?: string;
}

export function apiManagementHostnameConfigurationDeveloperPortalToTerraform(struct?: ApiManagementHostnameConfigurationDeveloperPortal | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    certificate: cdktf.stringToTerraform(struct!.certificate),
    certificate_password: cdktf.stringToTerraform(struct!.certificatePassword),
    host_name: cdktf.stringToTerraform(struct!.hostName),
    key_vault_id: cdktf.stringToTerraform(struct!.keyVaultId),
    negotiate_client_certificate: cdktf.booleanToTerraform(struct!.negotiateClientCertificate),
    ssl_keyvault_identity_client_id: cdktf.stringToTerraform(struct!.sslKeyvaultIdentityClientId),
  }
}


export function apiManagementHostnameConfigurationDeveloperPortalToHclTerraform(struct?: ApiManagementHostnameConfigurationDeveloperPortal | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    certificate: {
      value: cdktf.stringToHclTerraform(struct!.certificate),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    certificate_password: {
      value: cdktf.stringToHclTerraform(struct!.certificatePassword),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    host_name: {
      value: cdktf.stringToHclTerraform(struct!.hostName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    key_vault_id: {
      value: cdktf.stringToHclTerraform(struct!.keyVaultId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    negotiate_client_certificate: {
      value: cdktf.booleanToHclTerraform(struct!.negotiateClientCertificate),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    ssl_keyvault_identity_client_id: {
      value: cdktf.stringToHclTerraform(struct!.sslKeyvaultIdentityClientId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ApiManagementHostnameConfigurationDeveloperPortalOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ApiManagementHostnameConfigurationDeveloperPortal | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._certificate !== undefined) {
      hasAnyValues = true;
      internalValueResult.certificate = this._certificate;
    }
    if (this._certificatePassword !== undefined) {
      hasAnyValues = true;
      internalValueResult.certificatePassword = this._certificatePassword;
    }
    if (this._hostName !== undefined) {
      hasAnyValues = true;
      internalValueResult.hostName = this._hostName;
    }
    if (this._keyVaultId !== undefined) {
      hasAnyValues = true;
      internalValueResult.keyVaultId = this._keyVaultId;
    }
    if (this._negotiateClientCertificate !== undefined) {
      hasAnyValues = true;
      internalValueResult.negotiateClientCertificate = this._negotiateClientCertificate;
    }
    if (this._sslKeyvaultIdentityClientId !== undefined) {
      hasAnyValues = true;
      internalValueResult.sslKeyvaultIdentityClientId = this._sslKeyvaultIdentityClientId;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ApiManagementHostnameConfigurationDeveloperPortal | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._certificate = undefined;
      this._certificatePassword = undefined;
      this._hostName = undefined;
      this._keyVaultId = undefined;
      this._negotiateClientCertificate = undefined;
      this._sslKeyvaultIdentityClientId = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._certificate = value.certificate;
      this._certificatePassword = value.certificatePassword;
      this._hostName = value.hostName;
      this._keyVaultId = value.keyVaultId;
      this._negotiateClientCertificate = value.negotiateClientCertificate;
      this._sslKeyvaultIdentityClientId = value.sslKeyvaultIdentityClientId;
    }
  }

  // certificate - computed: false, optional: true, required: false
  private _certificate?: string; 
  public get certificate() {
    return this.getStringAttribute('certificate');
  }
  public set certificate(value: string) {
    this._certificate = value;
  }
  public resetCertificate() {
    this._certificate = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get certificateInput() {
    return this._certificate;
  }

  // certificate_password - computed: false, optional: true, required: false
  private _certificatePassword?: string; 
  public get certificatePassword() {
    return this.getStringAttribute('certificate_password');
  }
  public set certificatePassword(value: string) {
    this._certificatePassword = value;
  }
  public resetCertificatePassword() {
    this._certificatePassword = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get certificatePasswordInput() {
    return this._certificatePassword;
  }

  // certificate_source - computed: true, optional: false, required: false
  public get certificateSource() {
    return this.getStringAttribute('certificate_source');
  }

  // certificate_status - computed: true, optional: false, required: false
  public get certificateStatus() {
    return this.getStringAttribute('certificate_status');
  }

  // expiry - computed: true, optional: false, required: false
  public get expiry() {
    return this.getStringAttribute('expiry');
  }

  // host_name - computed: false, optional: false, required: true
  private _hostName?: string; 
  public get hostName() {
    return this.getStringAttribute('host_name');
  }
  public set hostName(value: string) {
    this._hostName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get hostNameInput() {
    return this._hostName;
  }

  // key_vault_id - computed: false, optional: true, required: false
  private _keyVaultId?: string; 
  public get keyVaultId() {
    return this.getStringAttribute('key_vault_id');
  }
  public set keyVaultId(value: string) {
    this._keyVaultId = value;
  }
  public resetKeyVaultId() {
    this._keyVaultId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get keyVaultIdInput() {
    return this._keyVaultId;
  }

  // negotiate_client_certificate - computed: false, optional: true, required: false
  private _negotiateClientCertificate?: boolean | cdktf.IResolvable; 
  public get negotiateClientCertificate() {
    return this.getBooleanAttribute('negotiate_client_certificate');
  }
  public set negotiateClientCertificate(value: boolean | cdktf.IResolvable) {
    this._negotiateClientCertificate = value;
  }
  public resetNegotiateClientCertificate() {
    this._negotiateClientCertificate = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get negotiateClientCertificateInput() {
    return this._negotiateClientCertificate;
  }

  // ssl_keyvault_identity_client_id - computed: false, optional: true, required: false
  private _sslKeyvaultIdentityClientId?: string; 
  public get sslKeyvaultIdentityClientId() {
    return this.getStringAttribute('ssl_keyvault_identity_client_id');
  }
  public set sslKeyvaultIdentityClientId(value: string) {
    this._sslKeyvaultIdentityClientId = value;
  }
  public resetSslKeyvaultIdentityClientId() {
    this._sslKeyvaultIdentityClientId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sslKeyvaultIdentityClientIdInput() {
    return this._sslKeyvaultIdentityClientId;
  }

  // subject - computed: true, optional: false, required: false
  public get subject() {
    return this.getStringAttribute('subject');
  }

  // thumbprint - computed: true, optional: false, required: false
  public get thumbprint() {
    return this.getStringAttribute('thumbprint');
  }
}

export class ApiManagementHostnameConfigurationDeveloperPortalList extends cdktf.ComplexList {
  public internalValue? : ApiManagementHostnameConfigurationDeveloperPortal[] | cdktf.IResolvable

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
  public get(index: number): ApiManagementHostnameConfigurationDeveloperPortalOutputReference {
    return new ApiManagementHostnameConfigurationDeveloperPortalOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ApiManagementHostnameConfigurationManagement {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/api_management#certificate ApiManagement#certificate}
  */
  readonly certificate?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/api_management#certificate_password ApiManagement#certificate_password}
  */
  readonly certificatePassword?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/api_management#host_name ApiManagement#host_name}
  */
  readonly hostName: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/api_management#key_vault_id ApiManagement#key_vault_id}
  */
  readonly keyVaultId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/api_management#negotiate_client_certificate ApiManagement#negotiate_client_certificate}
  */
  readonly negotiateClientCertificate?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/api_management#ssl_keyvault_identity_client_id ApiManagement#ssl_keyvault_identity_client_id}
  */
  readonly sslKeyvaultIdentityClientId?: string;
}

export function apiManagementHostnameConfigurationManagementToTerraform(struct?: ApiManagementHostnameConfigurationManagement | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    certificate: cdktf.stringToTerraform(struct!.certificate),
    certificate_password: cdktf.stringToTerraform(struct!.certificatePassword),
    host_name: cdktf.stringToTerraform(struct!.hostName),
    key_vault_id: cdktf.stringToTerraform(struct!.keyVaultId),
    negotiate_client_certificate: cdktf.booleanToTerraform(struct!.negotiateClientCertificate),
    ssl_keyvault_identity_client_id: cdktf.stringToTerraform(struct!.sslKeyvaultIdentityClientId),
  }
}


export function apiManagementHostnameConfigurationManagementToHclTerraform(struct?: ApiManagementHostnameConfigurationManagement | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    certificate: {
      value: cdktf.stringToHclTerraform(struct!.certificate),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    certificate_password: {
      value: cdktf.stringToHclTerraform(struct!.certificatePassword),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    host_name: {
      value: cdktf.stringToHclTerraform(struct!.hostName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    key_vault_id: {
      value: cdktf.stringToHclTerraform(struct!.keyVaultId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    negotiate_client_certificate: {
      value: cdktf.booleanToHclTerraform(struct!.negotiateClientCertificate),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    ssl_keyvault_identity_client_id: {
      value: cdktf.stringToHclTerraform(struct!.sslKeyvaultIdentityClientId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ApiManagementHostnameConfigurationManagementOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ApiManagementHostnameConfigurationManagement | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._certificate !== undefined) {
      hasAnyValues = true;
      internalValueResult.certificate = this._certificate;
    }
    if (this._certificatePassword !== undefined) {
      hasAnyValues = true;
      internalValueResult.certificatePassword = this._certificatePassword;
    }
    if (this._hostName !== undefined) {
      hasAnyValues = true;
      internalValueResult.hostName = this._hostName;
    }
    if (this._keyVaultId !== undefined) {
      hasAnyValues = true;
      internalValueResult.keyVaultId = this._keyVaultId;
    }
    if (this._negotiateClientCertificate !== undefined) {
      hasAnyValues = true;
      internalValueResult.negotiateClientCertificate = this._negotiateClientCertificate;
    }
    if (this._sslKeyvaultIdentityClientId !== undefined) {
      hasAnyValues = true;
      internalValueResult.sslKeyvaultIdentityClientId = this._sslKeyvaultIdentityClientId;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ApiManagementHostnameConfigurationManagement | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._certificate = undefined;
      this._certificatePassword = undefined;
      this._hostName = undefined;
      this._keyVaultId = undefined;
      this._negotiateClientCertificate = undefined;
      this._sslKeyvaultIdentityClientId = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._certificate = value.certificate;
      this._certificatePassword = value.certificatePassword;
      this._hostName = value.hostName;
      this._keyVaultId = value.keyVaultId;
      this._negotiateClientCertificate = value.negotiateClientCertificate;
      this._sslKeyvaultIdentityClientId = value.sslKeyvaultIdentityClientId;
    }
  }

  // certificate - computed: false, optional: true, required: false
  private _certificate?: string; 
  public get certificate() {
    return this.getStringAttribute('certificate');
  }
  public set certificate(value: string) {
    this._certificate = value;
  }
  public resetCertificate() {
    this._certificate = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get certificateInput() {
    return this._certificate;
  }

  // certificate_password - computed: false, optional: true, required: false
  private _certificatePassword?: string; 
  public get certificatePassword() {
    return this.getStringAttribute('certificate_password');
  }
  public set certificatePassword(value: string) {
    this._certificatePassword = value;
  }
  public resetCertificatePassword() {
    this._certificatePassword = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get certificatePasswordInput() {
    return this._certificatePassword;
  }

  // certificate_source - computed: true, optional: false, required: false
  public get certificateSource() {
    return this.getStringAttribute('certificate_source');
  }

  // certificate_status - computed: true, optional: false, required: false
  public get certificateStatus() {
    return this.getStringAttribute('certificate_status');
  }

  // expiry - computed: true, optional: false, required: false
  public get expiry() {
    return this.getStringAttribute('expiry');
  }

  // host_name - computed: false, optional: false, required: true
  private _hostName?: string; 
  public get hostName() {
    return this.getStringAttribute('host_name');
  }
  public set hostName(value: string) {
    this._hostName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get hostNameInput() {
    return this._hostName;
  }

  // key_vault_id - computed: false, optional: true, required: false
  private _keyVaultId?: string; 
  public get keyVaultId() {
    return this.getStringAttribute('key_vault_id');
  }
  public set keyVaultId(value: string) {
    this._keyVaultId = value;
  }
  public resetKeyVaultId() {
    this._keyVaultId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get keyVaultIdInput() {
    return this._keyVaultId;
  }

  // negotiate_client_certificate - computed: false, optional: true, required: false
  private _negotiateClientCertificate?: boolean | cdktf.IResolvable; 
  public get negotiateClientCertificate() {
    return this.getBooleanAttribute('negotiate_client_certificate');
  }
  public set negotiateClientCertificate(value: boolean | cdktf.IResolvable) {
    this._negotiateClientCertificate = value;
  }
  public resetNegotiateClientCertificate() {
    this._negotiateClientCertificate = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get negotiateClientCertificateInput() {
    return this._negotiateClientCertificate;
  }

  // ssl_keyvault_identity_client_id - computed: false, optional: true, required: false
  private _sslKeyvaultIdentityClientId?: string; 
  public get sslKeyvaultIdentityClientId() {
    return this.getStringAttribute('ssl_keyvault_identity_client_id');
  }
  public set sslKeyvaultIdentityClientId(value: string) {
    this._sslKeyvaultIdentityClientId = value;
  }
  public resetSslKeyvaultIdentityClientId() {
    this._sslKeyvaultIdentityClientId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sslKeyvaultIdentityClientIdInput() {
    return this._sslKeyvaultIdentityClientId;
  }

  // subject - computed: true, optional: false, required: false
  public get subject() {
    return this.getStringAttribute('subject');
  }

  // thumbprint - computed: true, optional: false, required: false
  public get thumbprint() {
    return this.getStringAttribute('thumbprint');
  }
}

export class ApiManagementHostnameConfigurationManagementList extends cdktf.ComplexList {
  public internalValue? : ApiManagementHostnameConfigurationManagement[] | cdktf.IResolvable

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
  public get(index: number): ApiManagementHostnameConfigurationManagementOutputReference {
    return new ApiManagementHostnameConfigurationManagementOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ApiManagementHostnameConfigurationPortal {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/api_management#certificate ApiManagement#certificate}
  */
  readonly certificate?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/api_management#certificate_password ApiManagement#certificate_password}
  */
  readonly certificatePassword?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/api_management#host_name ApiManagement#host_name}
  */
  readonly hostName: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/api_management#key_vault_id ApiManagement#key_vault_id}
  */
  readonly keyVaultId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/api_management#negotiate_client_certificate ApiManagement#negotiate_client_certificate}
  */
  readonly negotiateClientCertificate?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/api_management#ssl_keyvault_identity_client_id ApiManagement#ssl_keyvault_identity_client_id}
  */
  readonly sslKeyvaultIdentityClientId?: string;
}

export function apiManagementHostnameConfigurationPortalToTerraform(struct?: ApiManagementHostnameConfigurationPortal | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    certificate: cdktf.stringToTerraform(struct!.certificate),
    certificate_password: cdktf.stringToTerraform(struct!.certificatePassword),
    host_name: cdktf.stringToTerraform(struct!.hostName),
    key_vault_id: cdktf.stringToTerraform(struct!.keyVaultId),
    negotiate_client_certificate: cdktf.booleanToTerraform(struct!.negotiateClientCertificate),
    ssl_keyvault_identity_client_id: cdktf.stringToTerraform(struct!.sslKeyvaultIdentityClientId),
  }
}


export function apiManagementHostnameConfigurationPortalToHclTerraform(struct?: ApiManagementHostnameConfigurationPortal | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    certificate: {
      value: cdktf.stringToHclTerraform(struct!.certificate),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    certificate_password: {
      value: cdktf.stringToHclTerraform(struct!.certificatePassword),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    host_name: {
      value: cdktf.stringToHclTerraform(struct!.hostName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    key_vault_id: {
      value: cdktf.stringToHclTerraform(struct!.keyVaultId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    negotiate_client_certificate: {
      value: cdktf.booleanToHclTerraform(struct!.negotiateClientCertificate),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    ssl_keyvault_identity_client_id: {
      value: cdktf.stringToHclTerraform(struct!.sslKeyvaultIdentityClientId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ApiManagementHostnameConfigurationPortalOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ApiManagementHostnameConfigurationPortal | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._certificate !== undefined) {
      hasAnyValues = true;
      internalValueResult.certificate = this._certificate;
    }
    if (this._certificatePassword !== undefined) {
      hasAnyValues = true;
      internalValueResult.certificatePassword = this._certificatePassword;
    }
    if (this._hostName !== undefined) {
      hasAnyValues = true;
      internalValueResult.hostName = this._hostName;
    }
    if (this._keyVaultId !== undefined) {
      hasAnyValues = true;
      internalValueResult.keyVaultId = this._keyVaultId;
    }
    if (this._negotiateClientCertificate !== undefined) {
      hasAnyValues = true;
      internalValueResult.negotiateClientCertificate = this._negotiateClientCertificate;
    }
    if (this._sslKeyvaultIdentityClientId !== undefined) {
      hasAnyValues = true;
      internalValueResult.sslKeyvaultIdentityClientId = this._sslKeyvaultIdentityClientId;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ApiManagementHostnameConfigurationPortal | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._certificate = undefined;
      this._certificatePassword = undefined;
      this._hostName = undefined;
      this._keyVaultId = undefined;
      this._negotiateClientCertificate = undefined;
      this._sslKeyvaultIdentityClientId = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._certificate = value.certificate;
      this._certificatePassword = value.certificatePassword;
      this._hostName = value.hostName;
      this._keyVaultId = value.keyVaultId;
      this._negotiateClientCertificate = value.negotiateClientCertificate;
      this._sslKeyvaultIdentityClientId = value.sslKeyvaultIdentityClientId;
    }
  }

  // certificate - computed: false, optional: true, required: false
  private _certificate?: string; 
  public get certificate() {
    return this.getStringAttribute('certificate');
  }
  public set certificate(value: string) {
    this._certificate = value;
  }
  public resetCertificate() {
    this._certificate = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get certificateInput() {
    return this._certificate;
  }

  // certificate_password - computed: false, optional: true, required: false
  private _certificatePassword?: string; 
  public get certificatePassword() {
    return this.getStringAttribute('certificate_password');
  }
  public set certificatePassword(value: string) {
    this._certificatePassword = value;
  }
  public resetCertificatePassword() {
    this._certificatePassword = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get certificatePasswordInput() {
    return this._certificatePassword;
  }

  // certificate_source - computed: true, optional: false, required: false
  public get certificateSource() {
    return this.getStringAttribute('certificate_source');
  }

  // certificate_status - computed: true, optional: false, required: false
  public get certificateStatus() {
    return this.getStringAttribute('certificate_status');
  }

  // expiry - computed: true, optional: false, required: false
  public get expiry() {
    return this.getStringAttribute('expiry');
  }

  // host_name - computed: false, optional: false, required: true
  private _hostName?: string; 
  public get hostName() {
    return this.getStringAttribute('host_name');
  }
  public set hostName(value: string) {
    this._hostName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get hostNameInput() {
    return this._hostName;
  }

  // key_vault_id - computed: false, optional: true, required: false
  private _keyVaultId?: string; 
  public get keyVaultId() {
    return this.getStringAttribute('key_vault_id');
  }
  public set keyVaultId(value: string) {
    this._keyVaultId = value;
  }
  public resetKeyVaultId() {
    this._keyVaultId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get keyVaultIdInput() {
    return this._keyVaultId;
  }

  // negotiate_client_certificate - computed: false, optional: true, required: false
  private _negotiateClientCertificate?: boolean | cdktf.IResolvable; 
  public get negotiateClientCertificate() {
    return this.getBooleanAttribute('negotiate_client_certificate');
  }
  public set negotiateClientCertificate(value: boolean | cdktf.IResolvable) {
    this._negotiateClientCertificate = value;
  }
  public resetNegotiateClientCertificate() {
    this._negotiateClientCertificate = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get negotiateClientCertificateInput() {
    return this._negotiateClientCertificate;
  }

  // ssl_keyvault_identity_client_id - computed: false, optional: true, required: false
  private _sslKeyvaultIdentityClientId?: string; 
  public get sslKeyvaultIdentityClientId() {
    return this.getStringAttribute('ssl_keyvault_identity_client_id');
  }
  public set sslKeyvaultIdentityClientId(value: string) {
    this._sslKeyvaultIdentityClientId = value;
  }
  public resetSslKeyvaultIdentityClientId() {
    this._sslKeyvaultIdentityClientId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sslKeyvaultIdentityClientIdInput() {
    return this._sslKeyvaultIdentityClientId;
  }

  // subject - computed: true, optional: false, required: false
  public get subject() {
    return this.getStringAttribute('subject');
  }

  // thumbprint - computed: true, optional: false, required: false
  public get thumbprint() {
    return this.getStringAttribute('thumbprint');
  }
}

export class ApiManagementHostnameConfigurationPortalList extends cdktf.ComplexList {
  public internalValue? : ApiManagementHostnameConfigurationPortal[] | cdktf.IResolvable

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
  public get(index: number): ApiManagementHostnameConfigurationPortalOutputReference {
    return new ApiManagementHostnameConfigurationPortalOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ApiManagementHostnameConfigurationProxy {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/api_management#certificate ApiManagement#certificate}
  */
  readonly certificate?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/api_management#certificate_password ApiManagement#certificate_password}
  */
  readonly certificatePassword?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/api_management#default_ssl_binding ApiManagement#default_ssl_binding}
  */
  readonly defaultSslBinding?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/api_management#host_name ApiManagement#host_name}
  */
  readonly hostName: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/api_management#key_vault_id ApiManagement#key_vault_id}
  */
  readonly keyVaultId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/api_management#negotiate_client_certificate ApiManagement#negotiate_client_certificate}
  */
  readonly negotiateClientCertificate?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/api_management#ssl_keyvault_identity_client_id ApiManagement#ssl_keyvault_identity_client_id}
  */
  readonly sslKeyvaultIdentityClientId?: string;
}

export function apiManagementHostnameConfigurationProxyToTerraform(struct?: ApiManagementHostnameConfigurationProxy | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    certificate: cdktf.stringToTerraform(struct!.certificate),
    certificate_password: cdktf.stringToTerraform(struct!.certificatePassword),
    default_ssl_binding: cdktf.booleanToTerraform(struct!.defaultSslBinding),
    host_name: cdktf.stringToTerraform(struct!.hostName),
    key_vault_id: cdktf.stringToTerraform(struct!.keyVaultId),
    negotiate_client_certificate: cdktf.booleanToTerraform(struct!.negotiateClientCertificate),
    ssl_keyvault_identity_client_id: cdktf.stringToTerraform(struct!.sslKeyvaultIdentityClientId),
  }
}


export function apiManagementHostnameConfigurationProxyToHclTerraform(struct?: ApiManagementHostnameConfigurationProxy | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    certificate: {
      value: cdktf.stringToHclTerraform(struct!.certificate),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    certificate_password: {
      value: cdktf.stringToHclTerraform(struct!.certificatePassword),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    default_ssl_binding: {
      value: cdktf.booleanToHclTerraform(struct!.defaultSslBinding),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    host_name: {
      value: cdktf.stringToHclTerraform(struct!.hostName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    key_vault_id: {
      value: cdktf.stringToHclTerraform(struct!.keyVaultId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    negotiate_client_certificate: {
      value: cdktf.booleanToHclTerraform(struct!.negotiateClientCertificate),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    ssl_keyvault_identity_client_id: {
      value: cdktf.stringToHclTerraform(struct!.sslKeyvaultIdentityClientId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ApiManagementHostnameConfigurationProxyOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ApiManagementHostnameConfigurationProxy | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._certificate !== undefined) {
      hasAnyValues = true;
      internalValueResult.certificate = this._certificate;
    }
    if (this._certificatePassword !== undefined) {
      hasAnyValues = true;
      internalValueResult.certificatePassword = this._certificatePassword;
    }
    if (this._defaultSslBinding !== undefined) {
      hasAnyValues = true;
      internalValueResult.defaultSslBinding = this._defaultSslBinding;
    }
    if (this._hostName !== undefined) {
      hasAnyValues = true;
      internalValueResult.hostName = this._hostName;
    }
    if (this._keyVaultId !== undefined) {
      hasAnyValues = true;
      internalValueResult.keyVaultId = this._keyVaultId;
    }
    if (this._negotiateClientCertificate !== undefined) {
      hasAnyValues = true;
      internalValueResult.negotiateClientCertificate = this._negotiateClientCertificate;
    }
    if (this._sslKeyvaultIdentityClientId !== undefined) {
      hasAnyValues = true;
      internalValueResult.sslKeyvaultIdentityClientId = this._sslKeyvaultIdentityClientId;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ApiManagementHostnameConfigurationProxy | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._certificate = undefined;
      this._certificatePassword = undefined;
      this._defaultSslBinding = undefined;
      this._hostName = undefined;
      this._keyVaultId = undefined;
      this._negotiateClientCertificate = undefined;
      this._sslKeyvaultIdentityClientId = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._certificate = value.certificate;
      this._certificatePassword = value.certificatePassword;
      this._defaultSslBinding = value.defaultSslBinding;
      this._hostName = value.hostName;
      this._keyVaultId = value.keyVaultId;
      this._negotiateClientCertificate = value.negotiateClientCertificate;
      this._sslKeyvaultIdentityClientId = value.sslKeyvaultIdentityClientId;
    }
  }

  // certificate - computed: false, optional: true, required: false
  private _certificate?: string; 
  public get certificate() {
    return this.getStringAttribute('certificate');
  }
  public set certificate(value: string) {
    this._certificate = value;
  }
  public resetCertificate() {
    this._certificate = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get certificateInput() {
    return this._certificate;
  }

  // certificate_password - computed: false, optional: true, required: false
  private _certificatePassword?: string; 
  public get certificatePassword() {
    return this.getStringAttribute('certificate_password');
  }
  public set certificatePassword(value: string) {
    this._certificatePassword = value;
  }
  public resetCertificatePassword() {
    this._certificatePassword = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get certificatePasswordInput() {
    return this._certificatePassword;
  }

  // certificate_source - computed: true, optional: false, required: false
  public get certificateSource() {
    return this.getStringAttribute('certificate_source');
  }

  // certificate_status - computed: true, optional: false, required: false
  public get certificateStatus() {
    return this.getStringAttribute('certificate_status');
  }

  // default_ssl_binding - computed: true, optional: true, required: false
  private _defaultSslBinding?: boolean | cdktf.IResolvable; 
  public get defaultSslBinding() {
    return this.getBooleanAttribute('default_ssl_binding');
  }
  public set defaultSslBinding(value: boolean | cdktf.IResolvable) {
    this._defaultSslBinding = value;
  }
  public resetDefaultSslBinding() {
    this._defaultSslBinding = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get defaultSslBindingInput() {
    return this._defaultSslBinding;
  }

  // expiry - computed: true, optional: false, required: false
  public get expiry() {
    return this.getStringAttribute('expiry');
  }

  // host_name - computed: false, optional: false, required: true
  private _hostName?: string; 
  public get hostName() {
    return this.getStringAttribute('host_name');
  }
  public set hostName(value: string) {
    this._hostName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get hostNameInput() {
    return this._hostName;
  }

  // key_vault_id - computed: false, optional: true, required: false
  private _keyVaultId?: string; 
  public get keyVaultId() {
    return this.getStringAttribute('key_vault_id');
  }
  public set keyVaultId(value: string) {
    this._keyVaultId = value;
  }
  public resetKeyVaultId() {
    this._keyVaultId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get keyVaultIdInput() {
    return this._keyVaultId;
  }

  // negotiate_client_certificate - computed: false, optional: true, required: false
  private _negotiateClientCertificate?: boolean | cdktf.IResolvable; 
  public get negotiateClientCertificate() {
    return this.getBooleanAttribute('negotiate_client_certificate');
  }
  public set negotiateClientCertificate(value: boolean | cdktf.IResolvable) {
    this._negotiateClientCertificate = value;
  }
  public resetNegotiateClientCertificate() {
    this._negotiateClientCertificate = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get negotiateClientCertificateInput() {
    return this._negotiateClientCertificate;
  }

  // ssl_keyvault_identity_client_id - computed: false, optional: true, required: false
  private _sslKeyvaultIdentityClientId?: string; 
  public get sslKeyvaultIdentityClientId() {
    return this.getStringAttribute('ssl_keyvault_identity_client_id');
  }
  public set sslKeyvaultIdentityClientId(value: string) {
    this._sslKeyvaultIdentityClientId = value;
  }
  public resetSslKeyvaultIdentityClientId() {
    this._sslKeyvaultIdentityClientId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sslKeyvaultIdentityClientIdInput() {
    return this._sslKeyvaultIdentityClientId;
  }

  // subject - computed: true, optional: false, required: false
  public get subject() {
    return this.getStringAttribute('subject');
  }

  // thumbprint - computed: true, optional: false, required: false
  public get thumbprint() {
    return this.getStringAttribute('thumbprint');
  }
}

export class ApiManagementHostnameConfigurationProxyList extends cdktf.ComplexList {
  public internalValue? : ApiManagementHostnameConfigurationProxy[] | cdktf.IResolvable

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
  public get(index: number): ApiManagementHostnameConfigurationProxyOutputReference {
    return new ApiManagementHostnameConfigurationProxyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ApiManagementHostnameConfigurationScm {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/api_management#certificate ApiManagement#certificate}
  */
  readonly certificate?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/api_management#certificate_password ApiManagement#certificate_password}
  */
  readonly certificatePassword?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/api_management#host_name ApiManagement#host_name}
  */
  readonly hostName: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/api_management#key_vault_id ApiManagement#key_vault_id}
  */
  readonly keyVaultId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/api_management#negotiate_client_certificate ApiManagement#negotiate_client_certificate}
  */
  readonly negotiateClientCertificate?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/api_management#ssl_keyvault_identity_client_id ApiManagement#ssl_keyvault_identity_client_id}
  */
  readonly sslKeyvaultIdentityClientId?: string;
}

export function apiManagementHostnameConfigurationScmToTerraform(struct?: ApiManagementHostnameConfigurationScm | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    certificate: cdktf.stringToTerraform(struct!.certificate),
    certificate_password: cdktf.stringToTerraform(struct!.certificatePassword),
    host_name: cdktf.stringToTerraform(struct!.hostName),
    key_vault_id: cdktf.stringToTerraform(struct!.keyVaultId),
    negotiate_client_certificate: cdktf.booleanToTerraform(struct!.negotiateClientCertificate),
    ssl_keyvault_identity_client_id: cdktf.stringToTerraform(struct!.sslKeyvaultIdentityClientId),
  }
}


export function apiManagementHostnameConfigurationScmToHclTerraform(struct?: ApiManagementHostnameConfigurationScm | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    certificate: {
      value: cdktf.stringToHclTerraform(struct!.certificate),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    certificate_password: {
      value: cdktf.stringToHclTerraform(struct!.certificatePassword),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    host_name: {
      value: cdktf.stringToHclTerraform(struct!.hostName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    key_vault_id: {
      value: cdktf.stringToHclTerraform(struct!.keyVaultId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    negotiate_client_certificate: {
      value: cdktf.booleanToHclTerraform(struct!.negotiateClientCertificate),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    ssl_keyvault_identity_client_id: {
      value: cdktf.stringToHclTerraform(struct!.sslKeyvaultIdentityClientId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ApiManagementHostnameConfigurationScmOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ApiManagementHostnameConfigurationScm | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._certificate !== undefined) {
      hasAnyValues = true;
      internalValueResult.certificate = this._certificate;
    }
    if (this._certificatePassword !== undefined) {
      hasAnyValues = true;
      internalValueResult.certificatePassword = this._certificatePassword;
    }
    if (this._hostName !== undefined) {
      hasAnyValues = true;
      internalValueResult.hostName = this._hostName;
    }
    if (this._keyVaultId !== undefined) {
      hasAnyValues = true;
      internalValueResult.keyVaultId = this._keyVaultId;
    }
    if (this._negotiateClientCertificate !== undefined) {
      hasAnyValues = true;
      internalValueResult.negotiateClientCertificate = this._negotiateClientCertificate;
    }
    if (this._sslKeyvaultIdentityClientId !== undefined) {
      hasAnyValues = true;
      internalValueResult.sslKeyvaultIdentityClientId = this._sslKeyvaultIdentityClientId;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ApiManagementHostnameConfigurationScm | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._certificate = undefined;
      this._certificatePassword = undefined;
      this._hostName = undefined;
      this._keyVaultId = undefined;
      this._negotiateClientCertificate = undefined;
      this._sslKeyvaultIdentityClientId = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._certificate = value.certificate;
      this._certificatePassword = value.certificatePassword;
      this._hostName = value.hostName;
      this._keyVaultId = value.keyVaultId;
      this._negotiateClientCertificate = value.negotiateClientCertificate;
      this._sslKeyvaultIdentityClientId = value.sslKeyvaultIdentityClientId;
    }
  }

  // certificate - computed: false, optional: true, required: false
  private _certificate?: string; 
  public get certificate() {
    return this.getStringAttribute('certificate');
  }
  public set certificate(value: string) {
    this._certificate = value;
  }
  public resetCertificate() {
    this._certificate = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get certificateInput() {
    return this._certificate;
  }

  // certificate_password - computed: false, optional: true, required: false
  private _certificatePassword?: string; 
  public get certificatePassword() {
    return this.getStringAttribute('certificate_password');
  }
  public set certificatePassword(value: string) {
    this._certificatePassword = value;
  }
  public resetCertificatePassword() {
    this._certificatePassword = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get certificatePasswordInput() {
    return this._certificatePassword;
  }

  // certificate_source - computed: true, optional: false, required: false
  public get certificateSource() {
    return this.getStringAttribute('certificate_source');
  }

  // certificate_status - computed: true, optional: false, required: false
  public get certificateStatus() {
    return this.getStringAttribute('certificate_status');
  }

  // expiry - computed: true, optional: false, required: false
  public get expiry() {
    return this.getStringAttribute('expiry');
  }

  // host_name - computed: false, optional: false, required: true
  private _hostName?: string; 
  public get hostName() {
    return this.getStringAttribute('host_name');
  }
  public set hostName(value: string) {
    this._hostName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get hostNameInput() {
    return this._hostName;
  }

  // key_vault_id - computed: false, optional: true, required: false
  private _keyVaultId?: string; 
  public get keyVaultId() {
    return this.getStringAttribute('key_vault_id');
  }
  public set keyVaultId(value: string) {
    this._keyVaultId = value;
  }
  public resetKeyVaultId() {
    this._keyVaultId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get keyVaultIdInput() {
    return this._keyVaultId;
  }

  // negotiate_client_certificate - computed: false, optional: true, required: false
  private _negotiateClientCertificate?: boolean | cdktf.IResolvable; 
  public get negotiateClientCertificate() {
    return this.getBooleanAttribute('negotiate_client_certificate');
  }
  public set negotiateClientCertificate(value: boolean | cdktf.IResolvable) {
    this._negotiateClientCertificate = value;
  }
  public resetNegotiateClientCertificate() {
    this._negotiateClientCertificate = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get negotiateClientCertificateInput() {
    return this._negotiateClientCertificate;
  }

  // ssl_keyvault_identity_client_id - computed: false, optional: true, required: false
  private _sslKeyvaultIdentityClientId?: string; 
  public get sslKeyvaultIdentityClientId() {
    return this.getStringAttribute('ssl_keyvault_identity_client_id');
  }
  public set sslKeyvaultIdentityClientId(value: string) {
    this._sslKeyvaultIdentityClientId = value;
  }
  public resetSslKeyvaultIdentityClientId() {
    this._sslKeyvaultIdentityClientId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sslKeyvaultIdentityClientIdInput() {
    return this._sslKeyvaultIdentityClientId;
  }

  // subject - computed: true, optional: false, required: false
  public get subject() {
    return this.getStringAttribute('subject');
  }

  // thumbprint - computed: true, optional: false, required: false
  public get thumbprint() {
    return this.getStringAttribute('thumbprint');
  }
}

export class ApiManagementHostnameConfigurationScmList extends cdktf.ComplexList {
  public internalValue? : ApiManagementHostnameConfigurationScm[] | cdktf.IResolvable

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
  public get(index: number): ApiManagementHostnameConfigurationScmOutputReference {
    return new ApiManagementHostnameConfigurationScmOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ApiManagementHostnameConfiguration {
  /**
  * developer_portal block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/api_management#developer_portal ApiManagement#developer_portal}
  */
  readonly developerPortal?: ApiManagementHostnameConfigurationDeveloperPortal[] | cdktf.IResolvable;
  /**
  * management block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/api_management#management ApiManagement#management}
  */
  readonly management?: ApiManagementHostnameConfigurationManagement[] | cdktf.IResolvable;
  /**
  * portal block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/api_management#portal ApiManagement#portal}
  */
  readonly portal?: ApiManagementHostnameConfigurationPortal[] | cdktf.IResolvable;
  /**
  * proxy block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/api_management#proxy ApiManagement#proxy}
  */
  readonly proxy?: ApiManagementHostnameConfigurationProxy[] | cdktf.IResolvable;
  /**
  * scm block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/api_management#scm ApiManagement#scm}
  */
  readonly scm?: ApiManagementHostnameConfigurationScm[] | cdktf.IResolvable;
}

export function apiManagementHostnameConfigurationToTerraform(struct?: ApiManagementHostnameConfigurationOutputReference | ApiManagementHostnameConfiguration): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    developer_portal: cdktf.listMapper(apiManagementHostnameConfigurationDeveloperPortalToTerraform, true)(struct!.developerPortal),
    management: cdktf.listMapper(apiManagementHostnameConfigurationManagementToTerraform, true)(struct!.management),
    portal: cdktf.listMapper(apiManagementHostnameConfigurationPortalToTerraform, true)(struct!.portal),
    proxy: cdktf.listMapper(apiManagementHostnameConfigurationProxyToTerraform, true)(struct!.proxy),
    scm: cdktf.listMapper(apiManagementHostnameConfigurationScmToTerraform, true)(struct!.scm),
  }
}


export function apiManagementHostnameConfigurationToHclTerraform(struct?: ApiManagementHostnameConfigurationOutputReference | ApiManagementHostnameConfiguration): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    developer_portal: {
      value: cdktf.listMapperHcl(apiManagementHostnameConfigurationDeveloperPortalToHclTerraform, true)(struct!.developerPortal),
      isBlock: true,
      type: "list",
      storageClassType: "ApiManagementHostnameConfigurationDeveloperPortalList",
    },
    management: {
      value: cdktf.listMapperHcl(apiManagementHostnameConfigurationManagementToHclTerraform, true)(struct!.management),
      isBlock: true,
      type: "list",
      storageClassType: "ApiManagementHostnameConfigurationManagementList",
    },
    portal: {
      value: cdktf.listMapperHcl(apiManagementHostnameConfigurationPortalToHclTerraform, true)(struct!.portal),
      isBlock: true,
      type: "list",
      storageClassType: "ApiManagementHostnameConfigurationPortalList",
    },
    proxy: {
      value: cdktf.listMapperHcl(apiManagementHostnameConfigurationProxyToHclTerraform, true)(struct!.proxy),
      isBlock: true,
      type: "list",
      storageClassType: "ApiManagementHostnameConfigurationProxyList",
    },
    scm: {
      value: cdktf.listMapperHcl(apiManagementHostnameConfigurationScmToHclTerraform, true)(struct!.scm),
      isBlock: true,
      type: "list",
      storageClassType: "ApiManagementHostnameConfigurationScmList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ApiManagementHostnameConfigurationOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ApiManagementHostnameConfiguration | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._developerPortal?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.developerPortal = this._developerPortal?.internalValue;
    }
    if (this._management?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.management = this._management?.internalValue;
    }
    if (this._portal?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.portal = this._portal?.internalValue;
    }
    if (this._proxy?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.proxy = this._proxy?.internalValue;
    }
    if (this._scm?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.scm = this._scm?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ApiManagementHostnameConfiguration | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._developerPortal.internalValue = undefined;
      this._management.internalValue = undefined;
      this._portal.internalValue = undefined;
      this._proxy.internalValue = undefined;
      this._scm.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._developerPortal.internalValue = value.developerPortal;
      this._management.internalValue = value.management;
      this._portal.internalValue = value.portal;
      this._proxy.internalValue = value.proxy;
      this._scm.internalValue = value.scm;
    }
  }

  // developer_portal - computed: false, optional: true, required: false
  private _developerPortal = new ApiManagementHostnameConfigurationDeveloperPortalList(this, "developer_portal", false);
  public get developerPortal() {
    return this._developerPortal;
  }
  public putDeveloperPortal(value: ApiManagementHostnameConfigurationDeveloperPortal[] | cdktf.IResolvable) {
    this._developerPortal.internalValue = value;
  }
  public resetDeveloperPortal() {
    this._developerPortal.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get developerPortalInput() {
    return this._developerPortal.internalValue;
  }

  // management - computed: false, optional: true, required: false
  private _management = new ApiManagementHostnameConfigurationManagementList(this, "management", false);
  public get management() {
    return this._management;
  }
  public putManagement(value: ApiManagementHostnameConfigurationManagement[] | cdktf.IResolvable) {
    this._management.internalValue = value;
  }
  public resetManagement() {
    this._management.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get managementInput() {
    return this._management.internalValue;
  }

  // portal - computed: false, optional: true, required: false
  private _portal = new ApiManagementHostnameConfigurationPortalList(this, "portal", false);
  public get portal() {
    return this._portal;
  }
  public putPortal(value: ApiManagementHostnameConfigurationPortal[] | cdktf.IResolvable) {
    this._portal.internalValue = value;
  }
  public resetPortal() {
    this._portal.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get portalInput() {
    return this._portal.internalValue;
  }

  // proxy - computed: false, optional: true, required: false
  private _proxy = new ApiManagementHostnameConfigurationProxyList(this, "proxy", false);
  public get proxy() {
    return this._proxy;
  }
  public putProxy(value: ApiManagementHostnameConfigurationProxy[] | cdktf.IResolvable) {
    this._proxy.internalValue = value;
  }
  public resetProxy() {
    this._proxy.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get proxyInput() {
    return this._proxy.internalValue;
  }

  // scm - computed: false, optional: true, required: false
  private _scm = new ApiManagementHostnameConfigurationScmList(this, "scm", false);
  public get scm() {
    return this._scm;
  }
  public putScm(value: ApiManagementHostnameConfigurationScm[] | cdktf.IResolvable) {
    this._scm.internalValue = value;
  }
  public resetScm() {
    this._scm.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get scmInput() {
    return this._scm.internalValue;
  }
}
export interface ApiManagementIdentity {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/api_management#identity_ids ApiManagement#identity_ids}
  */
  readonly identityIds?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/api_management#type ApiManagement#type}
  */
  readonly type: string;
}

export function apiManagementIdentityToTerraform(struct?: ApiManagementIdentityOutputReference | ApiManagementIdentity): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    identity_ids: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.identityIds),
    type: cdktf.stringToTerraform(struct!.type),
  }
}


export function apiManagementIdentityToHclTerraform(struct?: ApiManagementIdentityOutputReference | ApiManagementIdentity): any {
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

export class ApiManagementIdentityOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ApiManagementIdentity | undefined {
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

  public set internalValue(value: ApiManagementIdentity | undefined) {
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
export interface ApiManagementProtocols {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/api_management#enable_http2 ApiManagement#enable_http2}
  */
  readonly enableHttp2?: boolean | cdktf.IResolvable;
}

export function apiManagementProtocolsToTerraform(struct?: ApiManagementProtocolsOutputReference | ApiManagementProtocols): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    enable_http2: cdktf.booleanToTerraform(struct!.enableHttp2),
  }
}


export function apiManagementProtocolsToHclTerraform(struct?: ApiManagementProtocolsOutputReference | ApiManagementProtocols): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    enable_http2: {
      value: cdktf.booleanToHclTerraform(struct!.enableHttp2),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ApiManagementProtocolsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ApiManagementProtocols | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._enableHttp2 !== undefined) {
      hasAnyValues = true;
      internalValueResult.enableHttp2 = this._enableHttp2;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ApiManagementProtocols | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._enableHttp2 = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._enableHttp2 = value.enableHttp2;
    }
  }

  // enable_http2 - computed: false, optional: true, required: false
  private _enableHttp2?: boolean | cdktf.IResolvable; 
  public get enableHttp2() {
    return this.getBooleanAttribute('enable_http2');
  }
  public set enableHttp2(value: boolean | cdktf.IResolvable) {
    this._enableHttp2 = value;
  }
  public resetEnableHttp2() {
    this._enableHttp2 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enableHttp2Input() {
    return this._enableHttp2;
  }
}
export interface ApiManagementSecurity {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/api_management#enable_backend_ssl30 ApiManagement#enable_backend_ssl30}
  */
  readonly enableBackendSsl30?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/api_management#enable_backend_tls10 ApiManagement#enable_backend_tls10}
  */
  readonly enableBackendTls10?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/api_management#enable_backend_tls11 ApiManagement#enable_backend_tls11}
  */
  readonly enableBackendTls11?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/api_management#enable_frontend_ssl30 ApiManagement#enable_frontend_ssl30}
  */
  readonly enableFrontendSsl30?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/api_management#enable_frontend_tls10 ApiManagement#enable_frontend_tls10}
  */
  readonly enableFrontendTls10?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/api_management#enable_frontend_tls11 ApiManagement#enable_frontend_tls11}
  */
  readonly enableFrontendTls11?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/api_management#tls_ecdhe_ecdsa_with_aes128_cbc_sha_ciphers_enabled ApiManagement#tls_ecdhe_ecdsa_with_aes128_cbc_sha_ciphers_enabled}
  */
  readonly tlsEcdheEcdsaWithAes128CbcShaCiphersEnabled?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/api_management#tls_ecdhe_ecdsa_with_aes256_cbc_sha_ciphers_enabled ApiManagement#tls_ecdhe_ecdsa_with_aes256_cbc_sha_ciphers_enabled}
  */
  readonly tlsEcdheEcdsaWithAes256CbcShaCiphersEnabled?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/api_management#tls_ecdhe_rsa_with_aes128_cbc_sha_ciphers_enabled ApiManagement#tls_ecdhe_rsa_with_aes128_cbc_sha_ciphers_enabled}
  */
  readonly tlsEcdheRsaWithAes128CbcShaCiphersEnabled?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/api_management#tls_ecdhe_rsa_with_aes256_cbc_sha_ciphers_enabled ApiManagement#tls_ecdhe_rsa_with_aes256_cbc_sha_ciphers_enabled}
  */
  readonly tlsEcdheRsaWithAes256CbcShaCiphersEnabled?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/api_management#tls_rsa_with_aes128_cbc_sha256_ciphers_enabled ApiManagement#tls_rsa_with_aes128_cbc_sha256_ciphers_enabled}
  */
  readonly tlsRsaWithAes128CbcSha256CiphersEnabled?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/api_management#tls_rsa_with_aes128_cbc_sha_ciphers_enabled ApiManagement#tls_rsa_with_aes128_cbc_sha_ciphers_enabled}
  */
  readonly tlsRsaWithAes128CbcShaCiphersEnabled?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/api_management#tls_rsa_with_aes128_gcm_sha256_ciphers_enabled ApiManagement#tls_rsa_with_aes128_gcm_sha256_ciphers_enabled}
  */
  readonly tlsRsaWithAes128GcmSha256CiphersEnabled?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/api_management#tls_rsa_with_aes256_cbc_sha256_ciphers_enabled ApiManagement#tls_rsa_with_aes256_cbc_sha256_ciphers_enabled}
  */
  readonly tlsRsaWithAes256CbcSha256CiphersEnabled?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/api_management#tls_rsa_with_aes256_cbc_sha_ciphers_enabled ApiManagement#tls_rsa_with_aes256_cbc_sha_ciphers_enabled}
  */
  readonly tlsRsaWithAes256CbcShaCiphersEnabled?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/api_management#tls_rsa_with_aes256_gcm_sha384_ciphers_enabled ApiManagement#tls_rsa_with_aes256_gcm_sha384_ciphers_enabled}
  */
  readonly tlsRsaWithAes256GcmSha384CiphersEnabled?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/api_management#triple_des_ciphers_enabled ApiManagement#triple_des_ciphers_enabled}
  */
  readonly tripleDesCiphersEnabled?: boolean | cdktf.IResolvable;
}

export function apiManagementSecurityToTerraform(struct?: ApiManagementSecurityOutputReference | ApiManagementSecurity): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    enable_backend_ssl30: cdktf.booleanToTerraform(struct!.enableBackendSsl30),
    enable_backend_tls10: cdktf.booleanToTerraform(struct!.enableBackendTls10),
    enable_backend_tls11: cdktf.booleanToTerraform(struct!.enableBackendTls11),
    enable_frontend_ssl30: cdktf.booleanToTerraform(struct!.enableFrontendSsl30),
    enable_frontend_tls10: cdktf.booleanToTerraform(struct!.enableFrontendTls10),
    enable_frontend_tls11: cdktf.booleanToTerraform(struct!.enableFrontendTls11),
    tls_ecdhe_ecdsa_with_aes128_cbc_sha_ciphers_enabled: cdktf.booleanToTerraform(struct!.tlsEcdheEcdsaWithAes128CbcShaCiphersEnabled),
    tls_ecdhe_ecdsa_with_aes256_cbc_sha_ciphers_enabled: cdktf.booleanToTerraform(struct!.tlsEcdheEcdsaWithAes256CbcShaCiphersEnabled),
    tls_ecdhe_rsa_with_aes128_cbc_sha_ciphers_enabled: cdktf.booleanToTerraform(struct!.tlsEcdheRsaWithAes128CbcShaCiphersEnabled),
    tls_ecdhe_rsa_with_aes256_cbc_sha_ciphers_enabled: cdktf.booleanToTerraform(struct!.tlsEcdheRsaWithAes256CbcShaCiphersEnabled),
    tls_rsa_with_aes128_cbc_sha256_ciphers_enabled: cdktf.booleanToTerraform(struct!.tlsRsaWithAes128CbcSha256CiphersEnabled),
    tls_rsa_with_aes128_cbc_sha_ciphers_enabled: cdktf.booleanToTerraform(struct!.tlsRsaWithAes128CbcShaCiphersEnabled),
    tls_rsa_with_aes128_gcm_sha256_ciphers_enabled: cdktf.booleanToTerraform(struct!.tlsRsaWithAes128GcmSha256CiphersEnabled),
    tls_rsa_with_aes256_cbc_sha256_ciphers_enabled: cdktf.booleanToTerraform(struct!.tlsRsaWithAes256CbcSha256CiphersEnabled),
    tls_rsa_with_aes256_cbc_sha_ciphers_enabled: cdktf.booleanToTerraform(struct!.tlsRsaWithAes256CbcShaCiphersEnabled),
    tls_rsa_with_aes256_gcm_sha384_ciphers_enabled: cdktf.booleanToTerraform(struct!.tlsRsaWithAes256GcmSha384CiphersEnabled),
    triple_des_ciphers_enabled: cdktf.booleanToTerraform(struct!.tripleDesCiphersEnabled),
  }
}


export function apiManagementSecurityToHclTerraform(struct?: ApiManagementSecurityOutputReference | ApiManagementSecurity): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    enable_backend_ssl30: {
      value: cdktf.booleanToHclTerraform(struct!.enableBackendSsl30),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    enable_backend_tls10: {
      value: cdktf.booleanToHclTerraform(struct!.enableBackendTls10),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    enable_backend_tls11: {
      value: cdktf.booleanToHclTerraform(struct!.enableBackendTls11),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    enable_frontend_ssl30: {
      value: cdktf.booleanToHclTerraform(struct!.enableFrontendSsl30),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    enable_frontend_tls10: {
      value: cdktf.booleanToHclTerraform(struct!.enableFrontendTls10),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    enable_frontend_tls11: {
      value: cdktf.booleanToHclTerraform(struct!.enableFrontendTls11),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    tls_ecdhe_ecdsa_with_aes128_cbc_sha_ciphers_enabled: {
      value: cdktf.booleanToHclTerraform(struct!.tlsEcdheEcdsaWithAes128CbcShaCiphersEnabled),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    tls_ecdhe_ecdsa_with_aes256_cbc_sha_ciphers_enabled: {
      value: cdktf.booleanToHclTerraform(struct!.tlsEcdheEcdsaWithAes256CbcShaCiphersEnabled),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    tls_ecdhe_rsa_with_aes128_cbc_sha_ciphers_enabled: {
      value: cdktf.booleanToHclTerraform(struct!.tlsEcdheRsaWithAes128CbcShaCiphersEnabled),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    tls_ecdhe_rsa_with_aes256_cbc_sha_ciphers_enabled: {
      value: cdktf.booleanToHclTerraform(struct!.tlsEcdheRsaWithAes256CbcShaCiphersEnabled),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    tls_rsa_with_aes128_cbc_sha256_ciphers_enabled: {
      value: cdktf.booleanToHclTerraform(struct!.tlsRsaWithAes128CbcSha256CiphersEnabled),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    tls_rsa_with_aes128_cbc_sha_ciphers_enabled: {
      value: cdktf.booleanToHclTerraform(struct!.tlsRsaWithAes128CbcShaCiphersEnabled),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    tls_rsa_with_aes128_gcm_sha256_ciphers_enabled: {
      value: cdktf.booleanToHclTerraform(struct!.tlsRsaWithAes128GcmSha256CiphersEnabled),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    tls_rsa_with_aes256_cbc_sha256_ciphers_enabled: {
      value: cdktf.booleanToHclTerraform(struct!.tlsRsaWithAes256CbcSha256CiphersEnabled),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    tls_rsa_with_aes256_cbc_sha_ciphers_enabled: {
      value: cdktf.booleanToHclTerraform(struct!.tlsRsaWithAes256CbcShaCiphersEnabled),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    tls_rsa_with_aes256_gcm_sha384_ciphers_enabled: {
      value: cdktf.booleanToHclTerraform(struct!.tlsRsaWithAes256GcmSha384CiphersEnabled),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    triple_des_ciphers_enabled: {
      value: cdktf.booleanToHclTerraform(struct!.tripleDesCiphersEnabled),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ApiManagementSecurityOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ApiManagementSecurity | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._enableBackendSsl30 !== undefined) {
      hasAnyValues = true;
      internalValueResult.enableBackendSsl30 = this._enableBackendSsl30;
    }
    if (this._enableBackendTls10 !== undefined) {
      hasAnyValues = true;
      internalValueResult.enableBackendTls10 = this._enableBackendTls10;
    }
    if (this._enableBackendTls11 !== undefined) {
      hasAnyValues = true;
      internalValueResult.enableBackendTls11 = this._enableBackendTls11;
    }
    if (this._enableFrontendSsl30 !== undefined) {
      hasAnyValues = true;
      internalValueResult.enableFrontendSsl30 = this._enableFrontendSsl30;
    }
    if (this._enableFrontendTls10 !== undefined) {
      hasAnyValues = true;
      internalValueResult.enableFrontendTls10 = this._enableFrontendTls10;
    }
    if (this._enableFrontendTls11 !== undefined) {
      hasAnyValues = true;
      internalValueResult.enableFrontendTls11 = this._enableFrontendTls11;
    }
    if (this._tlsEcdheEcdsaWithAes128CbcShaCiphersEnabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.tlsEcdheEcdsaWithAes128CbcShaCiphersEnabled = this._tlsEcdheEcdsaWithAes128CbcShaCiphersEnabled;
    }
    if (this._tlsEcdheEcdsaWithAes256CbcShaCiphersEnabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.tlsEcdheEcdsaWithAes256CbcShaCiphersEnabled = this._tlsEcdheEcdsaWithAes256CbcShaCiphersEnabled;
    }
    if (this._tlsEcdheRsaWithAes128CbcShaCiphersEnabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.tlsEcdheRsaWithAes128CbcShaCiphersEnabled = this._tlsEcdheRsaWithAes128CbcShaCiphersEnabled;
    }
    if (this._tlsEcdheRsaWithAes256CbcShaCiphersEnabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.tlsEcdheRsaWithAes256CbcShaCiphersEnabled = this._tlsEcdheRsaWithAes256CbcShaCiphersEnabled;
    }
    if (this._tlsRsaWithAes128CbcSha256CiphersEnabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.tlsRsaWithAes128CbcSha256CiphersEnabled = this._tlsRsaWithAes128CbcSha256CiphersEnabled;
    }
    if (this._tlsRsaWithAes128CbcShaCiphersEnabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.tlsRsaWithAes128CbcShaCiphersEnabled = this._tlsRsaWithAes128CbcShaCiphersEnabled;
    }
    if (this._tlsRsaWithAes128GcmSha256CiphersEnabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.tlsRsaWithAes128GcmSha256CiphersEnabled = this._tlsRsaWithAes128GcmSha256CiphersEnabled;
    }
    if (this._tlsRsaWithAes256CbcSha256CiphersEnabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.tlsRsaWithAes256CbcSha256CiphersEnabled = this._tlsRsaWithAes256CbcSha256CiphersEnabled;
    }
    if (this._tlsRsaWithAes256CbcShaCiphersEnabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.tlsRsaWithAes256CbcShaCiphersEnabled = this._tlsRsaWithAes256CbcShaCiphersEnabled;
    }
    if (this._tlsRsaWithAes256GcmSha384CiphersEnabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.tlsRsaWithAes256GcmSha384CiphersEnabled = this._tlsRsaWithAes256GcmSha384CiphersEnabled;
    }
    if (this._tripleDesCiphersEnabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.tripleDesCiphersEnabled = this._tripleDesCiphersEnabled;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ApiManagementSecurity | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._enableBackendSsl30 = undefined;
      this._enableBackendTls10 = undefined;
      this._enableBackendTls11 = undefined;
      this._enableFrontendSsl30 = undefined;
      this._enableFrontendTls10 = undefined;
      this._enableFrontendTls11 = undefined;
      this._tlsEcdheEcdsaWithAes128CbcShaCiphersEnabled = undefined;
      this._tlsEcdheEcdsaWithAes256CbcShaCiphersEnabled = undefined;
      this._tlsEcdheRsaWithAes128CbcShaCiphersEnabled = undefined;
      this._tlsEcdheRsaWithAes256CbcShaCiphersEnabled = undefined;
      this._tlsRsaWithAes128CbcSha256CiphersEnabled = undefined;
      this._tlsRsaWithAes128CbcShaCiphersEnabled = undefined;
      this._tlsRsaWithAes128GcmSha256CiphersEnabled = undefined;
      this._tlsRsaWithAes256CbcSha256CiphersEnabled = undefined;
      this._tlsRsaWithAes256CbcShaCiphersEnabled = undefined;
      this._tlsRsaWithAes256GcmSha384CiphersEnabled = undefined;
      this._tripleDesCiphersEnabled = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._enableBackendSsl30 = value.enableBackendSsl30;
      this._enableBackendTls10 = value.enableBackendTls10;
      this._enableBackendTls11 = value.enableBackendTls11;
      this._enableFrontendSsl30 = value.enableFrontendSsl30;
      this._enableFrontendTls10 = value.enableFrontendTls10;
      this._enableFrontendTls11 = value.enableFrontendTls11;
      this._tlsEcdheEcdsaWithAes128CbcShaCiphersEnabled = value.tlsEcdheEcdsaWithAes128CbcShaCiphersEnabled;
      this._tlsEcdheEcdsaWithAes256CbcShaCiphersEnabled = value.tlsEcdheEcdsaWithAes256CbcShaCiphersEnabled;
      this._tlsEcdheRsaWithAes128CbcShaCiphersEnabled = value.tlsEcdheRsaWithAes128CbcShaCiphersEnabled;
      this._tlsEcdheRsaWithAes256CbcShaCiphersEnabled = value.tlsEcdheRsaWithAes256CbcShaCiphersEnabled;
      this._tlsRsaWithAes128CbcSha256CiphersEnabled = value.tlsRsaWithAes128CbcSha256CiphersEnabled;
      this._tlsRsaWithAes128CbcShaCiphersEnabled = value.tlsRsaWithAes128CbcShaCiphersEnabled;
      this._tlsRsaWithAes128GcmSha256CiphersEnabled = value.tlsRsaWithAes128GcmSha256CiphersEnabled;
      this._tlsRsaWithAes256CbcSha256CiphersEnabled = value.tlsRsaWithAes256CbcSha256CiphersEnabled;
      this._tlsRsaWithAes256CbcShaCiphersEnabled = value.tlsRsaWithAes256CbcShaCiphersEnabled;
      this._tlsRsaWithAes256GcmSha384CiphersEnabled = value.tlsRsaWithAes256GcmSha384CiphersEnabled;
      this._tripleDesCiphersEnabled = value.tripleDesCiphersEnabled;
    }
  }

  // enable_backend_ssl30 - computed: false, optional: true, required: false
  private _enableBackendSsl30?: boolean | cdktf.IResolvable; 
  public get enableBackendSsl30() {
    return this.getBooleanAttribute('enable_backend_ssl30');
  }
  public set enableBackendSsl30(value: boolean | cdktf.IResolvable) {
    this._enableBackendSsl30 = value;
  }
  public resetEnableBackendSsl30() {
    this._enableBackendSsl30 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enableBackendSsl30Input() {
    return this._enableBackendSsl30;
  }

  // enable_backend_tls10 - computed: false, optional: true, required: false
  private _enableBackendTls10?: boolean | cdktf.IResolvable; 
  public get enableBackendTls10() {
    return this.getBooleanAttribute('enable_backend_tls10');
  }
  public set enableBackendTls10(value: boolean | cdktf.IResolvable) {
    this._enableBackendTls10 = value;
  }
  public resetEnableBackendTls10() {
    this._enableBackendTls10 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enableBackendTls10Input() {
    return this._enableBackendTls10;
  }

  // enable_backend_tls11 - computed: false, optional: true, required: false
  private _enableBackendTls11?: boolean | cdktf.IResolvable; 
  public get enableBackendTls11() {
    return this.getBooleanAttribute('enable_backend_tls11');
  }
  public set enableBackendTls11(value: boolean | cdktf.IResolvable) {
    this._enableBackendTls11 = value;
  }
  public resetEnableBackendTls11() {
    this._enableBackendTls11 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enableBackendTls11Input() {
    return this._enableBackendTls11;
  }

  // enable_frontend_ssl30 - computed: false, optional: true, required: false
  private _enableFrontendSsl30?: boolean | cdktf.IResolvable; 
  public get enableFrontendSsl30() {
    return this.getBooleanAttribute('enable_frontend_ssl30');
  }
  public set enableFrontendSsl30(value: boolean | cdktf.IResolvable) {
    this._enableFrontendSsl30 = value;
  }
  public resetEnableFrontendSsl30() {
    this._enableFrontendSsl30 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enableFrontendSsl30Input() {
    return this._enableFrontendSsl30;
  }

  // enable_frontend_tls10 - computed: false, optional: true, required: false
  private _enableFrontendTls10?: boolean | cdktf.IResolvable; 
  public get enableFrontendTls10() {
    return this.getBooleanAttribute('enable_frontend_tls10');
  }
  public set enableFrontendTls10(value: boolean | cdktf.IResolvable) {
    this._enableFrontendTls10 = value;
  }
  public resetEnableFrontendTls10() {
    this._enableFrontendTls10 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enableFrontendTls10Input() {
    return this._enableFrontendTls10;
  }

  // enable_frontend_tls11 - computed: false, optional: true, required: false
  private _enableFrontendTls11?: boolean | cdktf.IResolvable; 
  public get enableFrontendTls11() {
    return this.getBooleanAttribute('enable_frontend_tls11');
  }
  public set enableFrontendTls11(value: boolean | cdktf.IResolvable) {
    this._enableFrontendTls11 = value;
  }
  public resetEnableFrontendTls11() {
    this._enableFrontendTls11 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enableFrontendTls11Input() {
    return this._enableFrontendTls11;
  }

  // tls_ecdhe_ecdsa_with_aes128_cbc_sha_ciphers_enabled - computed: false, optional: true, required: false
  private _tlsEcdheEcdsaWithAes128CbcShaCiphersEnabled?: boolean | cdktf.IResolvable; 
  public get tlsEcdheEcdsaWithAes128CbcShaCiphersEnabled() {
    return this.getBooleanAttribute('tls_ecdhe_ecdsa_with_aes128_cbc_sha_ciphers_enabled');
  }
  public set tlsEcdheEcdsaWithAes128CbcShaCiphersEnabled(value: boolean | cdktf.IResolvable) {
    this._tlsEcdheEcdsaWithAes128CbcShaCiphersEnabled = value;
  }
  public resetTlsEcdheEcdsaWithAes128CbcShaCiphersEnabled() {
    this._tlsEcdheEcdsaWithAes128CbcShaCiphersEnabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tlsEcdheEcdsaWithAes128CbcShaCiphersEnabledInput() {
    return this._tlsEcdheEcdsaWithAes128CbcShaCiphersEnabled;
  }

  // tls_ecdhe_ecdsa_with_aes256_cbc_sha_ciphers_enabled - computed: false, optional: true, required: false
  private _tlsEcdheEcdsaWithAes256CbcShaCiphersEnabled?: boolean | cdktf.IResolvable; 
  public get tlsEcdheEcdsaWithAes256CbcShaCiphersEnabled() {
    return this.getBooleanAttribute('tls_ecdhe_ecdsa_with_aes256_cbc_sha_ciphers_enabled');
  }
  public set tlsEcdheEcdsaWithAes256CbcShaCiphersEnabled(value: boolean | cdktf.IResolvable) {
    this._tlsEcdheEcdsaWithAes256CbcShaCiphersEnabled = value;
  }
  public resetTlsEcdheEcdsaWithAes256CbcShaCiphersEnabled() {
    this._tlsEcdheEcdsaWithAes256CbcShaCiphersEnabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tlsEcdheEcdsaWithAes256CbcShaCiphersEnabledInput() {
    return this._tlsEcdheEcdsaWithAes256CbcShaCiphersEnabled;
  }

  // tls_ecdhe_rsa_with_aes128_cbc_sha_ciphers_enabled - computed: false, optional: true, required: false
  private _tlsEcdheRsaWithAes128CbcShaCiphersEnabled?: boolean | cdktf.IResolvable; 
  public get tlsEcdheRsaWithAes128CbcShaCiphersEnabled() {
    return this.getBooleanAttribute('tls_ecdhe_rsa_with_aes128_cbc_sha_ciphers_enabled');
  }
  public set tlsEcdheRsaWithAes128CbcShaCiphersEnabled(value: boolean | cdktf.IResolvable) {
    this._tlsEcdheRsaWithAes128CbcShaCiphersEnabled = value;
  }
  public resetTlsEcdheRsaWithAes128CbcShaCiphersEnabled() {
    this._tlsEcdheRsaWithAes128CbcShaCiphersEnabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tlsEcdheRsaWithAes128CbcShaCiphersEnabledInput() {
    return this._tlsEcdheRsaWithAes128CbcShaCiphersEnabled;
  }

  // tls_ecdhe_rsa_with_aes256_cbc_sha_ciphers_enabled - computed: false, optional: true, required: false
  private _tlsEcdheRsaWithAes256CbcShaCiphersEnabled?: boolean | cdktf.IResolvable; 
  public get tlsEcdheRsaWithAes256CbcShaCiphersEnabled() {
    return this.getBooleanAttribute('tls_ecdhe_rsa_with_aes256_cbc_sha_ciphers_enabled');
  }
  public set tlsEcdheRsaWithAes256CbcShaCiphersEnabled(value: boolean | cdktf.IResolvable) {
    this._tlsEcdheRsaWithAes256CbcShaCiphersEnabled = value;
  }
  public resetTlsEcdheRsaWithAes256CbcShaCiphersEnabled() {
    this._tlsEcdheRsaWithAes256CbcShaCiphersEnabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tlsEcdheRsaWithAes256CbcShaCiphersEnabledInput() {
    return this._tlsEcdheRsaWithAes256CbcShaCiphersEnabled;
  }

  // tls_rsa_with_aes128_cbc_sha256_ciphers_enabled - computed: false, optional: true, required: false
  private _tlsRsaWithAes128CbcSha256CiphersEnabled?: boolean | cdktf.IResolvable; 
  public get tlsRsaWithAes128CbcSha256CiphersEnabled() {
    return this.getBooleanAttribute('tls_rsa_with_aes128_cbc_sha256_ciphers_enabled');
  }
  public set tlsRsaWithAes128CbcSha256CiphersEnabled(value: boolean | cdktf.IResolvable) {
    this._tlsRsaWithAes128CbcSha256CiphersEnabled = value;
  }
  public resetTlsRsaWithAes128CbcSha256CiphersEnabled() {
    this._tlsRsaWithAes128CbcSha256CiphersEnabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tlsRsaWithAes128CbcSha256CiphersEnabledInput() {
    return this._tlsRsaWithAes128CbcSha256CiphersEnabled;
  }

  // tls_rsa_with_aes128_cbc_sha_ciphers_enabled - computed: false, optional: true, required: false
  private _tlsRsaWithAes128CbcShaCiphersEnabled?: boolean | cdktf.IResolvable; 
  public get tlsRsaWithAes128CbcShaCiphersEnabled() {
    return this.getBooleanAttribute('tls_rsa_with_aes128_cbc_sha_ciphers_enabled');
  }
  public set tlsRsaWithAes128CbcShaCiphersEnabled(value: boolean | cdktf.IResolvable) {
    this._tlsRsaWithAes128CbcShaCiphersEnabled = value;
  }
  public resetTlsRsaWithAes128CbcShaCiphersEnabled() {
    this._tlsRsaWithAes128CbcShaCiphersEnabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tlsRsaWithAes128CbcShaCiphersEnabledInput() {
    return this._tlsRsaWithAes128CbcShaCiphersEnabled;
  }

  // tls_rsa_with_aes128_gcm_sha256_ciphers_enabled - computed: false, optional: true, required: false
  private _tlsRsaWithAes128GcmSha256CiphersEnabled?: boolean | cdktf.IResolvable; 
  public get tlsRsaWithAes128GcmSha256CiphersEnabled() {
    return this.getBooleanAttribute('tls_rsa_with_aes128_gcm_sha256_ciphers_enabled');
  }
  public set tlsRsaWithAes128GcmSha256CiphersEnabled(value: boolean | cdktf.IResolvable) {
    this._tlsRsaWithAes128GcmSha256CiphersEnabled = value;
  }
  public resetTlsRsaWithAes128GcmSha256CiphersEnabled() {
    this._tlsRsaWithAes128GcmSha256CiphersEnabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tlsRsaWithAes128GcmSha256CiphersEnabledInput() {
    return this._tlsRsaWithAes128GcmSha256CiphersEnabled;
  }

  // tls_rsa_with_aes256_cbc_sha256_ciphers_enabled - computed: false, optional: true, required: false
  private _tlsRsaWithAes256CbcSha256CiphersEnabled?: boolean | cdktf.IResolvable; 
  public get tlsRsaWithAes256CbcSha256CiphersEnabled() {
    return this.getBooleanAttribute('tls_rsa_with_aes256_cbc_sha256_ciphers_enabled');
  }
  public set tlsRsaWithAes256CbcSha256CiphersEnabled(value: boolean | cdktf.IResolvable) {
    this._tlsRsaWithAes256CbcSha256CiphersEnabled = value;
  }
  public resetTlsRsaWithAes256CbcSha256CiphersEnabled() {
    this._tlsRsaWithAes256CbcSha256CiphersEnabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tlsRsaWithAes256CbcSha256CiphersEnabledInput() {
    return this._tlsRsaWithAes256CbcSha256CiphersEnabled;
  }

  // tls_rsa_with_aes256_cbc_sha_ciphers_enabled - computed: false, optional: true, required: false
  private _tlsRsaWithAes256CbcShaCiphersEnabled?: boolean | cdktf.IResolvable; 
  public get tlsRsaWithAes256CbcShaCiphersEnabled() {
    return this.getBooleanAttribute('tls_rsa_with_aes256_cbc_sha_ciphers_enabled');
  }
  public set tlsRsaWithAes256CbcShaCiphersEnabled(value: boolean | cdktf.IResolvable) {
    this._tlsRsaWithAes256CbcShaCiphersEnabled = value;
  }
  public resetTlsRsaWithAes256CbcShaCiphersEnabled() {
    this._tlsRsaWithAes256CbcShaCiphersEnabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tlsRsaWithAes256CbcShaCiphersEnabledInput() {
    return this._tlsRsaWithAes256CbcShaCiphersEnabled;
  }

  // tls_rsa_with_aes256_gcm_sha384_ciphers_enabled - computed: false, optional: true, required: false
  private _tlsRsaWithAes256GcmSha384CiphersEnabled?: boolean | cdktf.IResolvable; 
  public get tlsRsaWithAes256GcmSha384CiphersEnabled() {
    return this.getBooleanAttribute('tls_rsa_with_aes256_gcm_sha384_ciphers_enabled');
  }
  public set tlsRsaWithAes256GcmSha384CiphersEnabled(value: boolean | cdktf.IResolvable) {
    this._tlsRsaWithAes256GcmSha384CiphersEnabled = value;
  }
  public resetTlsRsaWithAes256GcmSha384CiphersEnabled() {
    this._tlsRsaWithAes256GcmSha384CiphersEnabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tlsRsaWithAes256GcmSha384CiphersEnabledInput() {
    return this._tlsRsaWithAes256GcmSha384CiphersEnabled;
  }

  // triple_des_ciphers_enabled - computed: false, optional: true, required: false
  private _tripleDesCiphersEnabled?: boolean | cdktf.IResolvable; 
  public get tripleDesCiphersEnabled() {
    return this.getBooleanAttribute('triple_des_ciphers_enabled');
  }
  public set tripleDesCiphersEnabled(value: boolean | cdktf.IResolvable) {
    this._tripleDesCiphersEnabled = value;
  }
  public resetTripleDesCiphersEnabled() {
    this._tripleDesCiphersEnabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tripleDesCiphersEnabledInput() {
    return this._tripleDesCiphersEnabled;
  }
}
export interface ApiManagementSignIn {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/api_management#enabled ApiManagement#enabled}
  */
  readonly enabled: boolean | cdktf.IResolvable;
}

export function apiManagementSignInToTerraform(struct?: ApiManagementSignInOutputReference | ApiManagementSignIn): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    enabled: cdktf.booleanToTerraform(struct!.enabled),
  }
}


export function apiManagementSignInToHclTerraform(struct?: ApiManagementSignInOutputReference | ApiManagementSignIn): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    enabled: {
      value: cdktf.booleanToHclTerraform(struct!.enabled),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ApiManagementSignInOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ApiManagementSignIn | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._enabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.enabled = this._enabled;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ApiManagementSignIn | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._enabled = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._enabled = value.enabled;
    }
  }

  // enabled - computed: false, optional: false, required: true
  private _enabled?: boolean | cdktf.IResolvable; 
  public get enabled() {
    return this.getBooleanAttribute('enabled');
  }
  public set enabled(value: boolean | cdktf.IResolvable) {
    this._enabled = value;
  }
  // Temporarily expose input value. Use with caution.
  public get enabledInput() {
    return this._enabled;
  }
}
export interface ApiManagementSignUpTermsOfService {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/api_management#consent_required ApiManagement#consent_required}
  */
  readonly consentRequired: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/api_management#enabled ApiManagement#enabled}
  */
  readonly enabled: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/api_management#text ApiManagement#text}
  */
  readonly text?: string;
}

export function apiManagementSignUpTermsOfServiceToTerraform(struct?: ApiManagementSignUpTermsOfServiceOutputReference | ApiManagementSignUpTermsOfService): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    consent_required: cdktf.booleanToTerraform(struct!.consentRequired),
    enabled: cdktf.booleanToTerraform(struct!.enabled),
    text: cdktf.stringToTerraform(struct!.text),
  }
}


export function apiManagementSignUpTermsOfServiceToHclTerraform(struct?: ApiManagementSignUpTermsOfServiceOutputReference | ApiManagementSignUpTermsOfService): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    consent_required: {
      value: cdktf.booleanToHclTerraform(struct!.consentRequired),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    enabled: {
      value: cdktf.booleanToHclTerraform(struct!.enabled),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    text: {
      value: cdktf.stringToHclTerraform(struct!.text),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ApiManagementSignUpTermsOfServiceOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ApiManagementSignUpTermsOfService | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._consentRequired !== undefined) {
      hasAnyValues = true;
      internalValueResult.consentRequired = this._consentRequired;
    }
    if (this._enabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.enabled = this._enabled;
    }
    if (this._text !== undefined) {
      hasAnyValues = true;
      internalValueResult.text = this._text;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ApiManagementSignUpTermsOfService | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._consentRequired = undefined;
      this._enabled = undefined;
      this._text = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._consentRequired = value.consentRequired;
      this._enabled = value.enabled;
      this._text = value.text;
    }
  }

  // consent_required - computed: false, optional: false, required: true
  private _consentRequired?: boolean | cdktf.IResolvable; 
  public get consentRequired() {
    return this.getBooleanAttribute('consent_required');
  }
  public set consentRequired(value: boolean | cdktf.IResolvable) {
    this._consentRequired = value;
  }
  // Temporarily expose input value. Use with caution.
  public get consentRequiredInput() {
    return this._consentRequired;
  }

  // enabled - computed: false, optional: false, required: true
  private _enabled?: boolean | cdktf.IResolvable; 
  public get enabled() {
    return this.getBooleanAttribute('enabled');
  }
  public set enabled(value: boolean | cdktf.IResolvable) {
    this._enabled = value;
  }
  // Temporarily expose input value. Use with caution.
  public get enabledInput() {
    return this._enabled;
  }

  // text - computed: false, optional: true, required: false
  private _text?: string; 
  public get text() {
    return this.getStringAttribute('text');
  }
  public set text(value: string) {
    this._text = value;
  }
  public resetText() {
    this._text = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get textInput() {
    return this._text;
  }
}
export interface ApiManagementSignUp {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/api_management#enabled ApiManagement#enabled}
  */
  readonly enabled: boolean | cdktf.IResolvable;
  /**
  * terms_of_service block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/api_management#terms_of_service ApiManagement#terms_of_service}
  */
  readonly termsOfService: ApiManagementSignUpTermsOfService;
}

export function apiManagementSignUpToTerraform(struct?: ApiManagementSignUpOutputReference | ApiManagementSignUp): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    enabled: cdktf.booleanToTerraform(struct!.enabled),
    terms_of_service: apiManagementSignUpTermsOfServiceToTerraform(struct!.termsOfService),
  }
}


export function apiManagementSignUpToHclTerraform(struct?: ApiManagementSignUpOutputReference | ApiManagementSignUp): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    enabled: {
      value: cdktf.booleanToHclTerraform(struct!.enabled),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    terms_of_service: {
      value: apiManagementSignUpTermsOfServiceToHclTerraform(struct!.termsOfService),
      isBlock: true,
      type: "list",
      storageClassType: "ApiManagementSignUpTermsOfServiceList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ApiManagementSignUpOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ApiManagementSignUp | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._enabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.enabled = this._enabled;
    }
    if (this._termsOfService?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.termsOfService = this._termsOfService?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ApiManagementSignUp | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._enabled = undefined;
      this._termsOfService.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._enabled = value.enabled;
      this._termsOfService.internalValue = value.termsOfService;
    }
  }

  // enabled - computed: false, optional: false, required: true
  private _enabled?: boolean | cdktf.IResolvable; 
  public get enabled() {
    return this.getBooleanAttribute('enabled');
  }
  public set enabled(value: boolean | cdktf.IResolvable) {
    this._enabled = value;
  }
  // Temporarily expose input value. Use with caution.
  public get enabledInput() {
    return this._enabled;
  }

  // terms_of_service - computed: false, optional: false, required: true
  private _termsOfService = new ApiManagementSignUpTermsOfServiceOutputReference(this, "terms_of_service");
  public get termsOfService() {
    return this._termsOfService;
  }
  public putTermsOfService(value: ApiManagementSignUpTermsOfService) {
    this._termsOfService.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get termsOfServiceInput() {
    return this._termsOfService.internalValue;
  }
}
export interface ApiManagementTenantAccess {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/api_management#enabled ApiManagement#enabled}
  */
  readonly enabled: boolean | cdktf.IResolvable;
}

export function apiManagementTenantAccessToTerraform(struct?: ApiManagementTenantAccessOutputReference | ApiManagementTenantAccess): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    enabled: cdktf.booleanToTerraform(struct!.enabled),
  }
}


export function apiManagementTenantAccessToHclTerraform(struct?: ApiManagementTenantAccessOutputReference | ApiManagementTenantAccess): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    enabled: {
      value: cdktf.booleanToHclTerraform(struct!.enabled),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ApiManagementTenantAccessOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ApiManagementTenantAccess | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._enabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.enabled = this._enabled;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ApiManagementTenantAccess | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._enabled = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._enabled = value.enabled;
    }
  }

  // enabled - computed: false, optional: false, required: true
  private _enabled?: boolean | cdktf.IResolvable; 
  public get enabled() {
    return this.getBooleanAttribute('enabled');
  }
  public set enabled(value: boolean | cdktf.IResolvable) {
    this._enabled = value;
  }
  // Temporarily expose input value. Use with caution.
  public get enabledInput() {
    return this._enabled;
  }

  // primary_key - computed: true, optional: false, required: false
  public get primaryKey() {
    return this.getStringAttribute('primary_key');
  }

  // secondary_key - computed: true, optional: false, required: false
  public get secondaryKey() {
    return this.getStringAttribute('secondary_key');
  }

  // tenant_id - computed: true, optional: false, required: false
  public get tenantId() {
    return this.getStringAttribute('tenant_id');
  }
}
export interface ApiManagementTimeouts {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/api_management#create ApiManagement#create}
  */
  readonly create?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/api_management#delete ApiManagement#delete}
  */
  readonly delete?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/api_management#read ApiManagement#read}
  */
  readonly read?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/api_management#update ApiManagement#update}
  */
  readonly update?: string;
}

export function apiManagementTimeoutsToTerraform(struct?: ApiManagementTimeouts | cdktf.IResolvable): any {
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


export function apiManagementTimeoutsToHclTerraform(struct?: ApiManagementTimeouts | cdktf.IResolvable): any {
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

export class ApiManagementTimeoutsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): ApiManagementTimeouts | cdktf.IResolvable | undefined {
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

  public set internalValue(value: ApiManagementTimeouts | cdktf.IResolvable | undefined) {
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
export interface ApiManagementVirtualNetworkConfiguration {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/api_management#subnet_id ApiManagement#subnet_id}
  */
  readonly subnetId: string;
}

export function apiManagementVirtualNetworkConfigurationToTerraform(struct?: ApiManagementVirtualNetworkConfigurationOutputReference | ApiManagementVirtualNetworkConfiguration): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    subnet_id: cdktf.stringToTerraform(struct!.subnetId),
  }
}


export function apiManagementVirtualNetworkConfigurationToHclTerraform(struct?: ApiManagementVirtualNetworkConfigurationOutputReference | ApiManagementVirtualNetworkConfiguration): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
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

export class ApiManagementVirtualNetworkConfigurationOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ApiManagementVirtualNetworkConfiguration | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._subnetId !== undefined) {
      hasAnyValues = true;
      internalValueResult.subnetId = this._subnetId;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ApiManagementVirtualNetworkConfiguration | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._subnetId = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._subnetId = value.subnetId;
    }
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

/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/api_management azurerm_api_management}
*/
export class ApiManagement extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "azurerm_api_management";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a ApiManagement resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the ApiManagement to import
  * @param importFromId The id of the existing ApiManagement that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/api_management#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the ApiManagement to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "azurerm_api_management", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/api_management azurerm_api_management} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options ApiManagementConfig
  */
  public constructor(scope: Construct, id: string, config: ApiManagementConfig) {
    super(scope, id, {
      terraformResourceType: 'azurerm_api_management',
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
    this._clientCertificateEnabled = config.clientCertificateEnabled;
    this._gatewayDisabled = config.gatewayDisabled;
    this._id = config.id;
    this._location = config.location;
    this._minApiVersion = config.minApiVersion;
    this._name = config.name;
    this._notificationSenderEmail = config.notificationSenderEmail;
    this._publicIpAddressId = config.publicIpAddressId;
    this._publicNetworkAccessEnabled = config.publicNetworkAccessEnabled;
    this._publisherEmail = config.publisherEmail;
    this._publisherName = config.publisherName;
    this._resourceGroupName = config.resourceGroupName;
    this._skuName = config.skuName;
    this._tags = config.tags;
    this._virtualNetworkType = config.virtualNetworkType;
    this._zones = config.zones;
    this._additionalLocation.internalValue = config.additionalLocation;
    this._certificate.internalValue = config.certificate;
    this._delegation.internalValue = config.delegation;
    this._hostnameConfiguration.internalValue = config.hostnameConfiguration;
    this._identity.internalValue = config.identity;
    this._protocols.internalValue = config.protocols;
    this._security.internalValue = config.security;
    this._signIn.internalValue = config.signIn;
    this._signUp.internalValue = config.signUp;
    this._tenantAccess.internalValue = config.tenantAccess;
    this._timeouts.internalValue = config.timeouts;
    this._virtualNetworkConfiguration.internalValue = config.virtualNetworkConfiguration;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // client_certificate_enabled - computed: false, optional: true, required: false
  private _clientCertificateEnabled?: boolean | cdktf.IResolvable; 
  public get clientCertificateEnabled() {
    return this.getBooleanAttribute('client_certificate_enabled');
  }
  public set clientCertificateEnabled(value: boolean | cdktf.IResolvable) {
    this._clientCertificateEnabled = value;
  }
  public resetClientCertificateEnabled() {
    this._clientCertificateEnabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get clientCertificateEnabledInput() {
    return this._clientCertificateEnabled;
  }

  // developer_portal_url - computed: true, optional: false, required: false
  public get developerPortalUrl() {
    return this.getStringAttribute('developer_portal_url');
  }

  // gateway_disabled - computed: false, optional: true, required: false
  private _gatewayDisabled?: boolean | cdktf.IResolvable; 
  public get gatewayDisabled() {
    return this.getBooleanAttribute('gateway_disabled');
  }
  public set gatewayDisabled(value: boolean | cdktf.IResolvable) {
    this._gatewayDisabled = value;
  }
  public resetGatewayDisabled() {
    this._gatewayDisabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get gatewayDisabledInput() {
    return this._gatewayDisabled;
  }

  // gateway_regional_url - computed: true, optional: false, required: false
  public get gatewayRegionalUrl() {
    return this.getStringAttribute('gateway_regional_url');
  }

  // gateway_url - computed: true, optional: false, required: false
  public get gatewayUrl() {
    return this.getStringAttribute('gateway_url');
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

  // management_api_url - computed: true, optional: false, required: false
  public get managementApiUrl() {
    return this.getStringAttribute('management_api_url');
  }

  // min_api_version - computed: false, optional: true, required: false
  private _minApiVersion?: string; 
  public get minApiVersion() {
    return this.getStringAttribute('min_api_version');
  }
  public set minApiVersion(value: string) {
    this._minApiVersion = value;
  }
  public resetMinApiVersion() {
    this._minApiVersion = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get minApiVersionInput() {
    return this._minApiVersion;
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

  // notification_sender_email - computed: true, optional: true, required: false
  private _notificationSenderEmail?: string; 
  public get notificationSenderEmail() {
    return this.getStringAttribute('notification_sender_email');
  }
  public set notificationSenderEmail(value: string) {
    this._notificationSenderEmail = value;
  }
  public resetNotificationSenderEmail() {
    this._notificationSenderEmail = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get notificationSenderEmailInput() {
    return this._notificationSenderEmail;
  }

  // portal_url - computed: true, optional: false, required: false
  public get portalUrl() {
    return this.getStringAttribute('portal_url');
  }

  // private_ip_addresses - computed: true, optional: false, required: false
  public get privateIpAddresses() {
    return this.getListAttribute('private_ip_addresses');
  }

  // public_ip_address_id - computed: false, optional: true, required: false
  private _publicIpAddressId?: string; 
  public get publicIpAddressId() {
    return this.getStringAttribute('public_ip_address_id');
  }
  public set publicIpAddressId(value: string) {
    this._publicIpAddressId = value;
  }
  public resetPublicIpAddressId() {
    this._publicIpAddressId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get publicIpAddressIdInput() {
    return this._publicIpAddressId;
  }

  // public_ip_addresses - computed: true, optional: false, required: false
  public get publicIpAddresses() {
    return this.getListAttribute('public_ip_addresses');
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

  // publisher_email - computed: false, optional: false, required: true
  private _publisherEmail?: string; 
  public get publisherEmail() {
    return this.getStringAttribute('publisher_email');
  }
  public set publisherEmail(value: string) {
    this._publisherEmail = value;
  }
  // Temporarily expose input value. Use with caution.
  public get publisherEmailInput() {
    return this._publisherEmail;
  }

  // publisher_name - computed: false, optional: false, required: true
  private _publisherName?: string; 
  public get publisherName() {
    return this.getStringAttribute('publisher_name');
  }
  public set publisherName(value: string) {
    this._publisherName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get publisherNameInput() {
    return this._publisherName;
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

  // scm_url - computed: true, optional: false, required: false
  public get scmUrl() {
    return this.getStringAttribute('scm_url');
  }

  // sku_name - computed: false, optional: false, required: true
  private _skuName?: string; 
  public get skuName() {
    return this.getStringAttribute('sku_name');
  }
  public set skuName(value: string) {
    this._skuName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get skuNameInput() {
    return this._skuName;
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

  // virtual_network_type - computed: false, optional: true, required: false
  private _virtualNetworkType?: string; 
  public get virtualNetworkType() {
    return this.getStringAttribute('virtual_network_type');
  }
  public set virtualNetworkType(value: string) {
    this._virtualNetworkType = value;
  }
  public resetVirtualNetworkType() {
    this._virtualNetworkType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get virtualNetworkTypeInput() {
    return this._virtualNetworkType;
  }

  // zones - computed: false, optional: true, required: false
  private _zones?: string[]; 
  public get zones() {
    return cdktf.Fn.tolist(this.getListAttribute('zones'));
  }
  public set zones(value: string[]) {
    this._zones = value;
  }
  public resetZones() {
    this._zones = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get zonesInput() {
    return this._zones;
  }

  // additional_location - computed: false, optional: true, required: false
  private _additionalLocation = new ApiManagementAdditionalLocationList(this, "additional_location", false);
  public get additionalLocation() {
    return this._additionalLocation;
  }
  public putAdditionalLocation(value: ApiManagementAdditionalLocation[] | cdktf.IResolvable) {
    this._additionalLocation.internalValue = value;
  }
  public resetAdditionalLocation() {
    this._additionalLocation.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get additionalLocationInput() {
    return this._additionalLocation.internalValue;
  }

  // certificate - computed: false, optional: true, required: false
  private _certificate = new ApiManagementCertificateList(this, "certificate", false);
  public get certificate() {
    return this._certificate;
  }
  public putCertificate(value: ApiManagementCertificate[] | cdktf.IResolvable) {
    this._certificate.internalValue = value;
  }
  public resetCertificate() {
    this._certificate.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get certificateInput() {
    return this._certificate.internalValue;
  }

  // delegation - computed: false, optional: true, required: false
  private _delegation = new ApiManagementDelegationOutputReference(this, "delegation");
  public get delegation() {
    return this._delegation;
  }
  public putDelegation(value: ApiManagementDelegation) {
    this._delegation.internalValue = value;
  }
  public resetDelegation() {
    this._delegation.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get delegationInput() {
    return this._delegation.internalValue;
  }

  // hostname_configuration - computed: false, optional: true, required: false
  private _hostnameConfiguration = new ApiManagementHostnameConfigurationOutputReference(this, "hostname_configuration");
  public get hostnameConfiguration() {
    return this._hostnameConfiguration;
  }
  public putHostnameConfiguration(value: ApiManagementHostnameConfiguration) {
    this._hostnameConfiguration.internalValue = value;
  }
  public resetHostnameConfiguration() {
    this._hostnameConfiguration.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get hostnameConfigurationInput() {
    return this._hostnameConfiguration.internalValue;
  }

  // identity - computed: false, optional: true, required: false
  private _identity = new ApiManagementIdentityOutputReference(this, "identity");
  public get identity() {
    return this._identity;
  }
  public putIdentity(value: ApiManagementIdentity) {
    this._identity.internalValue = value;
  }
  public resetIdentity() {
    this._identity.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get identityInput() {
    return this._identity.internalValue;
  }

  // protocols - computed: false, optional: true, required: false
  private _protocols = new ApiManagementProtocolsOutputReference(this, "protocols");
  public get protocols() {
    return this._protocols;
  }
  public putProtocols(value: ApiManagementProtocols) {
    this._protocols.internalValue = value;
  }
  public resetProtocols() {
    this._protocols.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get protocolsInput() {
    return this._protocols.internalValue;
  }

  // security - computed: false, optional: true, required: false
  private _security = new ApiManagementSecurityOutputReference(this, "security");
  public get security() {
    return this._security;
  }
  public putSecurity(value: ApiManagementSecurity) {
    this._security.internalValue = value;
  }
  public resetSecurity() {
    this._security.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get securityInput() {
    return this._security.internalValue;
  }

  // sign_in - computed: false, optional: true, required: false
  private _signIn = new ApiManagementSignInOutputReference(this, "sign_in");
  public get signIn() {
    return this._signIn;
  }
  public putSignIn(value: ApiManagementSignIn) {
    this._signIn.internalValue = value;
  }
  public resetSignIn() {
    this._signIn.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get signInInput() {
    return this._signIn.internalValue;
  }

  // sign_up - computed: false, optional: true, required: false
  private _signUp = new ApiManagementSignUpOutputReference(this, "sign_up");
  public get signUp() {
    return this._signUp;
  }
  public putSignUp(value: ApiManagementSignUp) {
    this._signUp.internalValue = value;
  }
  public resetSignUp() {
    this._signUp.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get signUpInput() {
    return this._signUp.internalValue;
  }

  // tenant_access - computed: false, optional: true, required: false
  private _tenantAccess = new ApiManagementTenantAccessOutputReference(this, "tenant_access");
  public get tenantAccess() {
    return this._tenantAccess;
  }
  public putTenantAccess(value: ApiManagementTenantAccess) {
    this._tenantAccess.internalValue = value;
  }
  public resetTenantAccess() {
    this._tenantAccess.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tenantAccessInput() {
    return this._tenantAccess.internalValue;
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts = new ApiManagementTimeoutsOutputReference(this, "timeouts");
  public get timeouts() {
    return this._timeouts;
  }
  public putTimeouts(value: ApiManagementTimeouts) {
    this._timeouts.internalValue = value;
  }
  public resetTimeouts() {
    this._timeouts.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get timeoutsInput() {
    return this._timeouts.internalValue;
  }

  // virtual_network_configuration - computed: false, optional: true, required: false
  private _virtualNetworkConfiguration = new ApiManagementVirtualNetworkConfigurationOutputReference(this, "virtual_network_configuration");
  public get virtualNetworkConfiguration() {
    return this._virtualNetworkConfiguration;
  }
  public putVirtualNetworkConfiguration(value: ApiManagementVirtualNetworkConfiguration) {
    this._virtualNetworkConfiguration.internalValue = value;
  }
  public resetVirtualNetworkConfiguration() {
    this._virtualNetworkConfiguration.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get virtualNetworkConfigurationInput() {
    return this._virtualNetworkConfiguration.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      client_certificate_enabled: cdktf.booleanToTerraform(this._clientCertificateEnabled),
      gateway_disabled: cdktf.booleanToTerraform(this._gatewayDisabled),
      id: cdktf.stringToTerraform(this._id),
      location: cdktf.stringToTerraform(this._location),
      min_api_version: cdktf.stringToTerraform(this._minApiVersion),
      name: cdktf.stringToTerraform(this._name),
      notification_sender_email: cdktf.stringToTerraform(this._notificationSenderEmail),
      public_ip_address_id: cdktf.stringToTerraform(this._publicIpAddressId),
      public_network_access_enabled: cdktf.booleanToTerraform(this._publicNetworkAccessEnabled),
      publisher_email: cdktf.stringToTerraform(this._publisherEmail),
      publisher_name: cdktf.stringToTerraform(this._publisherName),
      resource_group_name: cdktf.stringToTerraform(this._resourceGroupName),
      sku_name: cdktf.stringToTerraform(this._skuName),
      tags: cdktf.hashMapper(cdktf.stringToTerraform)(this._tags),
      virtual_network_type: cdktf.stringToTerraform(this._virtualNetworkType),
      zones: cdktf.listMapper(cdktf.stringToTerraform, false)(this._zones),
      additional_location: cdktf.listMapper(apiManagementAdditionalLocationToTerraform, true)(this._additionalLocation.internalValue),
      certificate: cdktf.listMapper(apiManagementCertificateToTerraform, true)(this._certificate.internalValue),
      delegation: apiManagementDelegationToTerraform(this._delegation.internalValue),
      hostname_configuration: apiManagementHostnameConfigurationToTerraform(this._hostnameConfiguration.internalValue),
      identity: apiManagementIdentityToTerraform(this._identity.internalValue),
      protocols: apiManagementProtocolsToTerraform(this._protocols.internalValue),
      security: apiManagementSecurityToTerraform(this._security.internalValue),
      sign_in: apiManagementSignInToTerraform(this._signIn.internalValue),
      sign_up: apiManagementSignUpToTerraform(this._signUp.internalValue),
      tenant_access: apiManagementTenantAccessToTerraform(this._tenantAccess.internalValue),
      timeouts: apiManagementTimeoutsToTerraform(this._timeouts.internalValue),
      virtual_network_configuration: apiManagementVirtualNetworkConfigurationToTerraform(this._virtualNetworkConfiguration.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      client_certificate_enabled: {
        value: cdktf.booleanToHclTerraform(this._clientCertificateEnabled),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      gateway_disabled: {
        value: cdktf.booleanToHclTerraform(this._gatewayDisabled),
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
      location: {
        value: cdktf.stringToHclTerraform(this._location),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      min_api_version: {
        value: cdktf.stringToHclTerraform(this._minApiVersion),
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
      notification_sender_email: {
        value: cdktf.stringToHclTerraform(this._notificationSenderEmail),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      public_ip_address_id: {
        value: cdktf.stringToHclTerraform(this._publicIpAddressId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      public_network_access_enabled: {
        value: cdktf.booleanToHclTerraform(this._publicNetworkAccessEnabled),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      publisher_email: {
        value: cdktf.stringToHclTerraform(this._publisherEmail),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      publisher_name: {
        value: cdktf.stringToHclTerraform(this._publisherName),
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
      sku_name: {
        value: cdktf.stringToHclTerraform(this._skuName),
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
      virtual_network_type: {
        value: cdktf.stringToHclTerraform(this._virtualNetworkType),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      zones: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._zones),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      additional_location: {
        value: cdktf.listMapperHcl(apiManagementAdditionalLocationToHclTerraform, true)(this._additionalLocation.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "ApiManagementAdditionalLocationList",
      },
      certificate: {
        value: cdktf.listMapperHcl(apiManagementCertificateToHclTerraform, true)(this._certificate.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "ApiManagementCertificateList",
      },
      delegation: {
        value: apiManagementDelegationToHclTerraform(this._delegation.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "ApiManagementDelegationList",
      },
      hostname_configuration: {
        value: apiManagementHostnameConfigurationToHclTerraform(this._hostnameConfiguration.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "ApiManagementHostnameConfigurationList",
      },
      identity: {
        value: apiManagementIdentityToHclTerraform(this._identity.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "ApiManagementIdentityList",
      },
      protocols: {
        value: apiManagementProtocolsToHclTerraform(this._protocols.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "ApiManagementProtocolsList",
      },
      security: {
        value: apiManagementSecurityToHclTerraform(this._security.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "ApiManagementSecurityList",
      },
      sign_in: {
        value: apiManagementSignInToHclTerraform(this._signIn.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "ApiManagementSignInList",
      },
      sign_up: {
        value: apiManagementSignUpToHclTerraform(this._signUp.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "ApiManagementSignUpList",
      },
      tenant_access: {
        value: apiManagementTenantAccessToHclTerraform(this._tenantAccess.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "ApiManagementTenantAccessList",
      },
      timeouts: {
        value: apiManagementTimeoutsToHclTerraform(this._timeouts.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "ApiManagementTimeouts",
      },
      virtual_network_configuration: {
        value: apiManagementVirtualNetworkConfigurationToHclTerraform(this._virtualNetworkConfiguration.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "ApiManagementVirtualNetworkConfigurationList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
