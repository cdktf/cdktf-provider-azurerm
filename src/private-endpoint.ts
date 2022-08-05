// https://www.terraform.io/docs/providers/azurerm/r/private_endpoint
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface PrivateEndpointConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/private_endpoint#id PrivateEndpoint#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/private_endpoint#location PrivateEndpoint#location}
  */
  readonly location: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/private_endpoint#name PrivateEndpoint#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/private_endpoint#resource_group_name PrivateEndpoint#resource_group_name}
  */
  readonly resourceGroupName: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/private_endpoint#subnet_id PrivateEndpoint#subnet_id}
  */
  readonly subnetId: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/private_endpoint#tags PrivateEndpoint#tags}
  */
  readonly tags?: { [key: string]: string };
  /**
  * private_dns_zone_group block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/private_endpoint#private_dns_zone_group PrivateEndpoint#private_dns_zone_group}
  */
  readonly privateDnsZoneGroup?: PrivateEndpointPrivateDnsZoneGroup;
  /**
  * private_service_connection block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/private_endpoint#private_service_connection PrivateEndpoint#private_service_connection}
  */
  readonly privateServiceConnection: PrivateEndpointPrivateServiceConnection;
  /**
  * timeouts block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/private_endpoint#timeouts PrivateEndpoint#timeouts}
  */
  readonly timeouts?: PrivateEndpointTimeouts;
}
export interface PrivateEndpointCustomDnsConfigs {
}

export function privateEndpointCustomDnsConfigsToTerraform(struct?: PrivateEndpointCustomDnsConfigs): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}

export class PrivateEndpointCustomDnsConfigsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): PrivateEndpointCustomDnsConfigs | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: PrivateEndpointCustomDnsConfigs | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // fqdn - computed: true, optional: false, required: false
  public get fqdn() {
    return this.getStringAttribute('fqdn');
  }

  // ip_addresses - computed: true, optional: false, required: false
  public get ipAddresses() {
    return this.getListAttribute('ip_addresses');
  }
}

export class PrivateEndpointCustomDnsConfigsList extends cdktf.ComplexList {

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
  public get(index: number): PrivateEndpointCustomDnsConfigsOutputReference {
    return new PrivateEndpointCustomDnsConfigsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface PrivateEndpointNetworkInterface {
}

export function privateEndpointNetworkInterfaceToTerraform(struct?: PrivateEndpointNetworkInterface): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}

export class PrivateEndpointNetworkInterfaceOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): PrivateEndpointNetworkInterface | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: PrivateEndpointNetworkInterface | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }
}

export class PrivateEndpointNetworkInterfaceList extends cdktf.ComplexList {

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
  public get(index: number): PrivateEndpointNetworkInterfaceOutputReference {
    return new PrivateEndpointNetworkInterfaceOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface PrivateEndpointPrivateDnsZoneConfigsRecordSets {
}

export function privateEndpointPrivateDnsZoneConfigsRecordSetsToTerraform(struct?: PrivateEndpointPrivateDnsZoneConfigsRecordSets): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}

export class PrivateEndpointPrivateDnsZoneConfigsRecordSetsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): PrivateEndpointPrivateDnsZoneConfigsRecordSets | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: PrivateEndpointPrivateDnsZoneConfigsRecordSets | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // fqdn - computed: true, optional: false, required: false
  public get fqdn() {
    return this.getStringAttribute('fqdn');
  }

  // ip_addresses - computed: true, optional: false, required: false
  public get ipAddresses() {
    return this.getListAttribute('ip_addresses');
  }

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }

  // ttl - computed: true, optional: false, required: false
  public get ttl() {
    return this.getNumberAttribute('ttl');
  }

  // type - computed: true, optional: false, required: false
  public get type() {
    return this.getStringAttribute('type');
  }
}

export class PrivateEndpointPrivateDnsZoneConfigsRecordSetsList extends cdktf.ComplexList {

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
  public get(index: number): PrivateEndpointPrivateDnsZoneConfigsRecordSetsOutputReference {
    return new PrivateEndpointPrivateDnsZoneConfigsRecordSetsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface PrivateEndpointPrivateDnsZoneConfigs {
}

export function privateEndpointPrivateDnsZoneConfigsToTerraform(struct?: PrivateEndpointPrivateDnsZoneConfigs): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}

export class PrivateEndpointPrivateDnsZoneConfigsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): PrivateEndpointPrivateDnsZoneConfigs | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: PrivateEndpointPrivateDnsZoneConfigs | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }

  // private_dns_zone_id - computed: true, optional: false, required: false
  public get privateDnsZoneId() {
    return this.getStringAttribute('private_dns_zone_id');
  }

  // record_sets - computed: true, optional: false, required: false
  private _recordSets = new PrivateEndpointPrivateDnsZoneConfigsRecordSetsList(this, "record_sets", false);
  public get recordSets() {
    return this._recordSets;
  }
}

export class PrivateEndpointPrivateDnsZoneConfigsList extends cdktf.ComplexList {

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
  public get(index: number): PrivateEndpointPrivateDnsZoneConfigsOutputReference {
    return new PrivateEndpointPrivateDnsZoneConfigsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface PrivateEndpointPrivateDnsZoneGroup {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/private_endpoint#name PrivateEndpoint#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/private_endpoint#private_dns_zone_ids PrivateEndpoint#private_dns_zone_ids}
  */
  readonly privateDnsZoneIds: string[];
}

export function privateEndpointPrivateDnsZoneGroupToTerraform(struct?: PrivateEndpointPrivateDnsZoneGroupOutputReference | PrivateEndpointPrivateDnsZoneGroup): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
    private_dns_zone_ids: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.privateDnsZoneIds),
  }
}

export class PrivateEndpointPrivateDnsZoneGroupOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): PrivateEndpointPrivateDnsZoneGroup | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._privateDnsZoneIds !== undefined) {
      hasAnyValues = true;
      internalValueResult.privateDnsZoneIds = this._privateDnsZoneIds;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: PrivateEndpointPrivateDnsZoneGroup | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._name = undefined;
      this._privateDnsZoneIds = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._name = value.name;
      this._privateDnsZoneIds = value.privateDnsZoneIds;
    }
  }

  // id - computed: true, optional: false, required: false
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

  // private_dns_zone_ids - computed: false, optional: false, required: true
  private _privateDnsZoneIds?: string[]; 
  public get privateDnsZoneIds() {
    return this.getListAttribute('private_dns_zone_ids');
  }
  public set privateDnsZoneIds(value: string[]) {
    this._privateDnsZoneIds = value;
  }
  // Temporarily expose input value. Use with caution.
  public get privateDnsZoneIdsInput() {
    return this._privateDnsZoneIds;
  }
}
export interface PrivateEndpointPrivateServiceConnection {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/private_endpoint#is_manual_connection PrivateEndpoint#is_manual_connection}
  */
  readonly isManualConnection: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/private_endpoint#name PrivateEndpoint#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/private_endpoint#private_connection_resource_alias PrivateEndpoint#private_connection_resource_alias}
  */
  readonly privateConnectionResourceAlias?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/private_endpoint#private_connection_resource_id PrivateEndpoint#private_connection_resource_id}
  */
  readonly privateConnectionResourceId?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/private_endpoint#request_message PrivateEndpoint#request_message}
  */
  readonly requestMessage?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/private_endpoint#subresource_names PrivateEndpoint#subresource_names}
  */
  readonly subresourceNames?: string[];
}

export function privateEndpointPrivateServiceConnectionToTerraform(struct?: PrivateEndpointPrivateServiceConnectionOutputReference | PrivateEndpointPrivateServiceConnection): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    is_manual_connection: cdktf.booleanToTerraform(struct!.isManualConnection),
    name: cdktf.stringToTerraform(struct!.name),
    private_connection_resource_alias: cdktf.stringToTerraform(struct!.privateConnectionResourceAlias),
    private_connection_resource_id: cdktf.stringToTerraform(struct!.privateConnectionResourceId),
    request_message: cdktf.stringToTerraform(struct!.requestMessage),
    subresource_names: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.subresourceNames),
  }
}

export class PrivateEndpointPrivateServiceConnectionOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): PrivateEndpointPrivateServiceConnection | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._isManualConnection !== undefined) {
      hasAnyValues = true;
      internalValueResult.isManualConnection = this._isManualConnection;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._privateConnectionResourceAlias !== undefined) {
      hasAnyValues = true;
      internalValueResult.privateConnectionResourceAlias = this._privateConnectionResourceAlias;
    }
    if (this._privateConnectionResourceId !== undefined) {
      hasAnyValues = true;
      internalValueResult.privateConnectionResourceId = this._privateConnectionResourceId;
    }
    if (this._requestMessage !== undefined) {
      hasAnyValues = true;
      internalValueResult.requestMessage = this._requestMessage;
    }
    if (this._subresourceNames !== undefined) {
      hasAnyValues = true;
      internalValueResult.subresourceNames = this._subresourceNames;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: PrivateEndpointPrivateServiceConnection | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._isManualConnection = undefined;
      this._name = undefined;
      this._privateConnectionResourceAlias = undefined;
      this._privateConnectionResourceId = undefined;
      this._requestMessage = undefined;
      this._subresourceNames = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._isManualConnection = value.isManualConnection;
      this._name = value.name;
      this._privateConnectionResourceAlias = value.privateConnectionResourceAlias;
      this._privateConnectionResourceId = value.privateConnectionResourceId;
      this._requestMessage = value.requestMessage;
      this._subresourceNames = value.subresourceNames;
    }
  }

  // is_manual_connection - computed: false, optional: false, required: true
  private _isManualConnection?: boolean | cdktf.IResolvable; 
  public get isManualConnection() {
    return this.getBooleanAttribute('is_manual_connection');
  }
  public set isManualConnection(value: boolean | cdktf.IResolvable) {
    this._isManualConnection = value;
  }
  // Temporarily expose input value. Use with caution.
  public get isManualConnectionInput() {
    return this._isManualConnection;
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

  // private_connection_resource_alias - computed: false, optional: true, required: false
  private _privateConnectionResourceAlias?: string; 
  public get privateConnectionResourceAlias() {
    return this.getStringAttribute('private_connection_resource_alias');
  }
  public set privateConnectionResourceAlias(value: string) {
    this._privateConnectionResourceAlias = value;
  }
  public resetPrivateConnectionResourceAlias() {
    this._privateConnectionResourceAlias = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get privateConnectionResourceAliasInput() {
    return this._privateConnectionResourceAlias;
  }

  // private_connection_resource_id - computed: false, optional: true, required: false
  private _privateConnectionResourceId?: string; 
  public get privateConnectionResourceId() {
    return this.getStringAttribute('private_connection_resource_id');
  }
  public set privateConnectionResourceId(value: string) {
    this._privateConnectionResourceId = value;
  }
  public resetPrivateConnectionResourceId() {
    this._privateConnectionResourceId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get privateConnectionResourceIdInput() {
    return this._privateConnectionResourceId;
  }

  // private_ip_address - computed: true, optional: false, required: false
  public get privateIpAddress() {
    return this.getStringAttribute('private_ip_address');
  }

  // request_message - computed: false, optional: true, required: false
  private _requestMessage?: string; 
  public get requestMessage() {
    return this.getStringAttribute('request_message');
  }
  public set requestMessage(value: string) {
    this._requestMessage = value;
  }
  public resetRequestMessage() {
    this._requestMessage = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get requestMessageInput() {
    return this._requestMessage;
  }

  // subresource_names - computed: false, optional: true, required: false
  private _subresourceNames?: string[]; 
  public get subresourceNames() {
    return this.getListAttribute('subresource_names');
  }
  public set subresourceNames(value: string[]) {
    this._subresourceNames = value;
  }
  public resetSubresourceNames() {
    this._subresourceNames = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get subresourceNamesInput() {
    return this._subresourceNames;
  }
}
export interface PrivateEndpointTimeouts {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/private_endpoint#create PrivateEndpoint#create}
  */
  readonly create?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/private_endpoint#delete PrivateEndpoint#delete}
  */
  readonly delete?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/private_endpoint#read PrivateEndpoint#read}
  */
  readonly read?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/private_endpoint#update PrivateEndpoint#update}
  */
  readonly update?: string;
}

export function privateEndpointTimeoutsToTerraform(struct?: PrivateEndpointTimeoutsOutputReference | PrivateEndpointTimeouts | cdktf.IResolvable): any {
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

export class PrivateEndpointTimeoutsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): PrivateEndpointTimeouts | cdktf.IResolvable | undefined {
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

  public set internalValue(value: PrivateEndpointTimeouts | cdktf.IResolvable | undefined) {
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
* Represents a {@link https://www.terraform.io/docs/providers/azurerm/r/private_endpoint azurerm_private_endpoint}
*/
export class PrivateEndpoint extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "azurerm_private_endpoint";

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://www.terraform.io/docs/providers/azurerm/r/private_endpoint azurerm_private_endpoint} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options PrivateEndpointConfig
  */
  public constructor(scope: Construct, id: string, config: PrivateEndpointConfig) {
    super(scope, id, {
      terraformResourceType: 'azurerm_private_endpoint',
      terraformGeneratorMetadata: {
        providerName: 'azurerm',
        providerVersion: '3.17.0',
        providerVersionConstraint: '~> 3.10'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._id = config.id;
    this._location = config.location;
    this._name = config.name;
    this._resourceGroupName = config.resourceGroupName;
    this._subnetId = config.subnetId;
    this._tags = config.tags;
    this._privateDnsZoneGroup.internalValue = config.privateDnsZoneGroup;
    this._privateServiceConnection.internalValue = config.privateServiceConnection;
    this._timeouts.internalValue = config.timeouts;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // custom_dns_configs - computed: true, optional: false, required: false
  private _customDnsConfigs = new PrivateEndpointCustomDnsConfigsList(this, "custom_dns_configs", false);
  public get customDnsConfigs() {
    return this._customDnsConfigs;
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

  // network_interface - computed: true, optional: false, required: false
  private _networkInterface = new PrivateEndpointNetworkInterfaceList(this, "network_interface", false);
  public get networkInterface() {
    return this._networkInterface;
  }

  // private_dns_zone_configs - computed: true, optional: false, required: false
  private _privateDnsZoneConfigs = new PrivateEndpointPrivateDnsZoneConfigsList(this, "private_dns_zone_configs", false);
  public get privateDnsZoneConfigs() {
    return this._privateDnsZoneConfigs;
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

  // private_dns_zone_group - computed: false, optional: true, required: false
  private _privateDnsZoneGroup = new PrivateEndpointPrivateDnsZoneGroupOutputReference(this, "private_dns_zone_group");
  public get privateDnsZoneGroup() {
    return this._privateDnsZoneGroup;
  }
  public putPrivateDnsZoneGroup(value: PrivateEndpointPrivateDnsZoneGroup) {
    this._privateDnsZoneGroup.internalValue = value;
  }
  public resetPrivateDnsZoneGroup() {
    this._privateDnsZoneGroup.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get privateDnsZoneGroupInput() {
    return this._privateDnsZoneGroup.internalValue;
  }

  // private_service_connection - computed: false, optional: false, required: true
  private _privateServiceConnection = new PrivateEndpointPrivateServiceConnectionOutputReference(this, "private_service_connection");
  public get privateServiceConnection() {
    return this._privateServiceConnection;
  }
  public putPrivateServiceConnection(value: PrivateEndpointPrivateServiceConnection) {
    this._privateServiceConnection.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get privateServiceConnectionInput() {
    return this._privateServiceConnection.internalValue;
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts = new PrivateEndpointTimeoutsOutputReference(this, "timeouts");
  public get timeouts() {
    return this._timeouts;
  }
  public putTimeouts(value: PrivateEndpointTimeouts) {
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
      id: cdktf.stringToTerraform(this._id),
      location: cdktf.stringToTerraform(this._location),
      name: cdktf.stringToTerraform(this._name),
      resource_group_name: cdktf.stringToTerraform(this._resourceGroupName),
      subnet_id: cdktf.stringToTerraform(this._subnetId),
      tags: cdktf.hashMapper(cdktf.stringToTerraform)(this._tags),
      private_dns_zone_group: privateEndpointPrivateDnsZoneGroupToTerraform(this._privateDnsZoneGroup.internalValue),
      private_service_connection: privateEndpointPrivateServiceConnectionToTerraform(this._privateServiceConnection.internalValue),
      timeouts: privateEndpointTimeoutsToTerraform(this._timeouts.internalValue),
    };
  }
}
