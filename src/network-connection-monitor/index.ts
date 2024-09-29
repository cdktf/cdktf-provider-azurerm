// https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/network_connection_monitor
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface NetworkConnectionMonitorConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/network_connection_monitor#id NetworkConnectionMonitor#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/network_connection_monitor#location NetworkConnectionMonitor#location}
  */
  readonly location: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/network_connection_monitor#name NetworkConnectionMonitor#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/network_connection_monitor#network_watcher_id NetworkConnectionMonitor#network_watcher_id}
  */
  readonly networkWatcherId: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/network_connection_monitor#notes NetworkConnectionMonitor#notes}
  */
  readonly notes?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/network_connection_monitor#output_workspace_resource_ids NetworkConnectionMonitor#output_workspace_resource_ids}
  */
  readonly outputWorkspaceResourceIds?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/network_connection_monitor#tags NetworkConnectionMonitor#tags}
  */
  readonly tags?: { [key: string]: string };
  /**
  * endpoint block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/network_connection_monitor#endpoint NetworkConnectionMonitor#endpoint}
  */
  readonly endpoint: NetworkConnectionMonitorEndpoint[] | cdktf.IResolvable;
  /**
  * test_configuration block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/network_connection_monitor#test_configuration NetworkConnectionMonitor#test_configuration}
  */
  readonly testConfiguration: NetworkConnectionMonitorTestConfiguration[] | cdktf.IResolvable;
  /**
  * test_group block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/network_connection_monitor#test_group NetworkConnectionMonitor#test_group}
  */
  readonly testGroup: NetworkConnectionMonitorTestGroup[] | cdktf.IResolvable;
  /**
  * timeouts block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/network_connection_monitor#timeouts NetworkConnectionMonitor#timeouts}
  */
  readonly timeouts?: NetworkConnectionMonitorTimeouts;
}
export interface NetworkConnectionMonitorEndpointFilterItem {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/network_connection_monitor#address NetworkConnectionMonitor#address}
  */
  readonly address?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/network_connection_monitor#type NetworkConnectionMonitor#type}
  */
  readonly type?: string;
}

export function networkConnectionMonitorEndpointFilterItemToTerraform(struct?: NetworkConnectionMonitorEndpointFilterItem | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    address: cdktf.stringToTerraform(struct!.address),
    type: cdktf.stringToTerraform(struct!.type),
  }
}


export function networkConnectionMonitorEndpointFilterItemToHclTerraform(struct?: NetworkConnectionMonitorEndpointFilterItem | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    address: {
      value: cdktf.stringToHclTerraform(struct!.address),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
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

export class NetworkConnectionMonitorEndpointFilterItemOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): NetworkConnectionMonitorEndpointFilterItem | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._address !== undefined) {
      hasAnyValues = true;
      internalValueResult.address = this._address;
    }
    if (this._type !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: NetworkConnectionMonitorEndpointFilterItem | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._address = undefined;
      this._type = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._address = value.address;
      this._type = value.type;
    }
  }

  // address - computed: false, optional: true, required: false
  private _address?: string; 
  public get address() {
    return this.getStringAttribute('address');
  }
  public set address(value: string) {
    this._address = value;
  }
  public resetAddress() {
    this._address = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get addressInput() {
    return this._address;
  }

  // type - computed: false, optional: true, required: false
  private _type?: string; 
  public get type() {
    return this.getStringAttribute('type');
  }
  public set type(value: string) {
    this._type = value;
  }
  public resetType() {
    this._type = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get typeInput() {
    return this._type;
  }
}

export class NetworkConnectionMonitorEndpointFilterItemList extends cdktf.ComplexList {
  public internalValue? : NetworkConnectionMonitorEndpointFilterItem[] | cdktf.IResolvable

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
  public get(index: number): NetworkConnectionMonitorEndpointFilterItemOutputReference {
    return new NetworkConnectionMonitorEndpointFilterItemOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface NetworkConnectionMonitorEndpointFilter {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/network_connection_monitor#type NetworkConnectionMonitor#type}
  */
  readonly type?: string;
  /**
  * item block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/network_connection_monitor#item NetworkConnectionMonitor#item}
  */
  readonly item?: NetworkConnectionMonitorEndpointFilterItem[] | cdktf.IResolvable;
}

export function networkConnectionMonitorEndpointFilterToTerraform(struct?: NetworkConnectionMonitorEndpointFilterOutputReference | NetworkConnectionMonitorEndpointFilter): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    type: cdktf.stringToTerraform(struct!.type),
    item: cdktf.listMapper(networkConnectionMonitorEndpointFilterItemToTerraform, true)(struct!.item),
  }
}


export function networkConnectionMonitorEndpointFilterToHclTerraform(struct?: NetworkConnectionMonitorEndpointFilterOutputReference | NetworkConnectionMonitorEndpointFilter): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    type: {
      value: cdktf.stringToHclTerraform(struct!.type),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    item: {
      value: cdktf.listMapperHcl(networkConnectionMonitorEndpointFilterItemToHclTerraform, true)(struct!.item),
      isBlock: true,
      type: "set",
      storageClassType: "NetworkConnectionMonitorEndpointFilterItemList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class NetworkConnectionMonitorEndpointFilterOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): NetworkConnectionMonitorEndpointFilter | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._type !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    if (this._item?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.item = this._item?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: NetworkConnectionMonitorEndpointFilter | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._type = undefined;
      this._item.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._type = value.type;
      this._item.internalValue = value.item;
    }
  }

  // type - computed: false, optional: true, required: false
  private _type?: string; 
  public get type() {
    return this.getStringAttribute('type');
  }
  public set type(value: string) {
    this._type = value;
  }
  public resetType() {
    this._type = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get typeInput() {
    return this._type;
  }

  // item - computed: false, optional: true, required: false
  private _item = new NetworkConnectionMonitorEndpointFilterItemList(this, "item", true);
  public get item() {
    return this._item;
  }
  public putItem(value: NetworkConnectionMonitorEndpointFilterItem[] | cdktf.IResolvable) {
    this._item.internalValue = value;
  }
  public resetItem() {
    this._item.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get itemInput() {
    return this._item.internalValue;
  }
}
export interface NetworkConnectionMonitorEndpoint {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/network_connection_monitor#address NetworkConnectionMonitor#address}
  */
  readonly address?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/network_connection_monitor#coverage_level NetworkConnectionMonitor#coverage_level}
  */
  readonly coverageLevel?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/network_connection_monitor#excluded_ip_addresses NetworkConnectionMonitor#excluded_ip_addresses}
  */
  readonly excludedIpAddresses?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/network_connection_monitor#included_ip_addresses NetworkConnectionMonitor#included_ip_addresses}
  */
  readonly includedIpAddresses?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/network_connection_monitor#name NetworkConnectionMonitor#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/network_connection_monitor#target_resource_id NetworkConnectionMonitor#target_resource_id}
  */
  readonly targetResourceId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/network_connection_monitor#target_resource_type NetworkConnectionMonitor#target_resource_type}
  */
  readonly targetResourceType?: string;
  /**
  * filter block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/network_connection_monitor#filter NetworkConnectionMonitor#filter}
  */
  readonly filter?: NetworkConnectionMonitorEndpointFilter;
}

export function networkConnectionMonitorEndpointToTerraform(struct?: NetworkConnectionMonitorEndpoint | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    address: cdktf.stringToTerraform(struct!.address),
    coverage_level: cdktf.stringToTerraform(struct!.coverageLevel),
    excluded_ip_addresses: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.excludedIpAddresses),
    included_ip_addresses: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.includedIpAddresses),
    name: cdktf.stringToTerraform(struct!.name),
    target_resource_id: cdktf.stringToTerraform(struct!.targetResourceId),
    target_resource_type: cdktf.stringToTerraform(struct!.targetResourceType),
    filter: networkConnectionMonitorEndpointFilterToTerraform(struct!.filter),
  }
}


export function networkConnectionMonitorEndpointToHclTerraform(struct?: NetworkConnectionMonitorEndpoint | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    address: {
      value: cdktf.stringToHclTerraform(struct!.address),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    coverage_level: {
      value: cdktf.stringToHclTerraform(struct!.coverageLevel),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    excluded_ip_addresses: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.excludedIpAddresses),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
    included_ip_addresses: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.includedIpAddresses),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
    name: {
      value: cdktf.stringToHclTerraform(struct!.name),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    target_resource_id: {
      value: cdktf.stringToHclTerraform(struct!.targetResourceId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    target_resource_type: {
      value: cdktf.stringToHclTerraform(struct!.targetResourceType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    filter: {
      value: networkConnectionMonitorEndpointFilterToHclTerraform(struct!.filter),
      isBlock: true,
      type: "list",
      storageClassType: "NetworkConnectionMonitorEndpointFilterList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class NetworkConnectionMonitorEndpointOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): NetworkConnectionMonitorEndpoint | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._address !== undefined) {
      hasAnyValues = true;
      internalValueResult.address = this._address;
    }
    if (this._coverageLevel !== undefined) {
      hasAnyValues = true;
      internalValueResult.coverageLevel = this._coverageLevel;
    }
    if (this._excludedIpAddresses !== undefined) {
      hasAnyValues = true;
      internalValueResult.excludedIpAddresses = this._excludedIpAddresses;
    }
    if (this._includedIpAddresses !== undefined) {
      hasAnyValues = true;
      internalValueResult.includedIpAddresses = this._includedIpAddresses;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._targetResourceId !== undefined) {
      hasAnyValues = true;
      internalValueResult.targetResourceId = this._targetResourceId;
    }
    if (this._targetResourceType !== undefined) {
      hasAnyValues = true;
      internalValueResult.targetResourceType = this._targetResourceType;
    }
    if (this._filter?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.filter = this._filter?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: NetworkConnectionMonitorEndpoint | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._address = undefined;
      this._coverageLevel = undefined;
      this._excludedIpAddresses = undefined;
      this._includedIpAddresses = undefined;
      this._name = undefined;
      this._targetResourceId = undefined;
      this._targetResourceType = undefined;
      this._filter.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._address = value.address;
      this._coverageLevel = value.coverageLevel;
      this._excludedIpAddresses = value.excludedIpAddresses;
      this._includedIpAddresses = value.includedIpAddresses;
      this._name = value.name;
      this._targetResourceId = value.targetResourceId;
      this._targetResourceType = value.targetResourceType;
      this._filter.internalValue = value.filter;
    }
  }

  // address - computed: false, optional: true, required: false
  private _address?: string; 
  public get address() {
    return this.getStringAttribute('address');
  }
  public set address(value: string) {
    this._address = value;
  }
  public resetAddress() {
    this._address = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get addressInput() {
    return this._address;
  }

  // coverage_level - computed: false, optional: true, required: false
  private _coverageLevel?: string; 
  public get coverageLevel() {
    return this.getStringAttribute('coverage_level');
  }
  public set coverageLevel(value: string) {
    this._coverageLevel = value;
  }
  public resetCoverageLevel() {
    this._coverageLevel = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get coverageLevelInput() {
    return this._coverageLevel;
  }

  // excluded_ip_addresses - computed: false, optional: true, required: false
  private _excludedIpAddresses?: string[]; 
  public get excludedIpAddresses() {
    return cdktf.Fn.tolist(this.getListAttribute('excluded_ip_addresses'));
  }
  public set excludedIpAddresses(value: string[]) {
    this._excludedIpAddresses = value;
  }
  public resetExcludedIpAddresses() {
    this._excludedIpAddresses = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get excludedIpAddressesInput() {
    return this._excludedIpAddresses;
  }

  // included_ip_addresses - computed: false, optional: true, required: false
  private _includedIpAddresses?: string[]; 
  public get includedIpAddresses() {
    return cdktf.Fn.tolist(this.getListAttribute('included_ip_addresses'));
  }
  public set includedIpAddresses(value: string[]) {
    this._includedIpAddresses = value;
  }
  public resetIncludedIpAddresses() {
    this._includedIpAddresses = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get includedIpAddressesInput() {
    return this._includedIpAddresses;
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

  // target_resource_id - computed: false, optional: true, required: false
  private _targetResourceId?: string; 
  public get targetResourceId() {
    return this.getStringAttribute('target_resource_id');
  }
  public set targetResourceId(value: string) {
    this._targetResourceId = value;
  }
  public resetTargetResourceId() {
    this._targetResourceId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get targetResourceIdInput() {
    return this._targetResourceId;
  }

  // target_resource_type - computed: false, optional: true, required: false
  private _targetResourceType?: string; 
  public get targetResourceType() {
    return this.getStringAttribute('target_resource_type');
  }
  public set targetResourceType(value: string) {
    this._targetResourceType = value;
  }
  public resetTargetResourceType() {
    this._targetResourceType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get targetResourceTypeInput() {
    return this._targetResourceType;
  }

  // filter - computed: false, optional: true, required: false
  private _filter = new NetworkConnectionMonitorEndpointFilterOutputReference(this, "filter");
  public get filter() {
    return this._filter;
  }
  public putFilter(value: NetworkConnectionMonitorEndpointFilter) {
    this._filter.internalValue = value;
  }
  public resetFilter() {
    this._filter.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get filterInput() {
    return this._filter.internalValue;
  }
}

export class NetworkConnectionMonitorEndpointList extends cdktf.ComplexList {
  public internalValue? : NetworkConnectionMonitorEndpoint[] | cdktf.IResolvable

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
  public get(index: number): NetworkConnectionMonitorEndpointOutputReference {
    return new NetworkConnectionMonitorEndpointOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface NetworkConnectionMonitorTestConfigurationHttpConfigurationRequestHeader {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/network_connection_monitor#name NetworkConnectionMonitor#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/network_connection_monitor#value NetworkConnectionMonitor#value}
  */
  readonly value: string;
}

export function networkConnectionMonitorTestConfigurationHttpConfigurationRequestHeaderToTerraform(struct?: NetworkConnectionMonitorTestConfigurationHttpConfigurationRequestHeader | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
    value: cdktf.stringToTerraform(struct!.value),
  }
}


export function networkConnectionMonitorTestConfigurationHttpConfigurationRequestHeaderToHclTerraform(struct?: NetworkConnectionMonitorTestConfigurationHttpConfigurationRequestHeader | cdktf.IResolvable): any {
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
    value: {
      value: cdktf.stringToHclTerraform(struct!.value),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class NetworkConnectionMonitorTestConfigurationHttpConfigurationRequestHeaderOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): NetworkConnectionMonitorTestConfigurationHttpConfigurationRequestHeader | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._value !== undefined) {
      hasAnyValues = true;
      internalValueResult.value = this._value;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: NetworkConnectionMonitorTestConfigurationHttpConfigurationRequestHeader | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._name = undefined;
      this._value = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._name = value.name;
      this._value = value.value;
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

  // value - computed: false, optional: false, required: true
  private _value?: string; 
  public get value() {
    return this.getStringAttribute('value');
  }
  public set value(value: string) {
    this._value = value;
  }
  // Temporarily expose input value. Use with caution.
  public get valueInput() {
    return this._value;
  }
}

export class NetworkConnectionMonitorTestConfigurationHttpConfigurationRequestHeaderList extends cdktf.ComplexList {
  public internalValue? : NetworkConnectionMonitorTestConfigurationHttpConfigurationRequestHeader[] | cdktf.IResolvable

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
  public get(index: number): NetworkConnectionMonitorTestConfigurationHttpConfigurationRequestHeaderOutputReference {
    return new NetworkConnectionMonitorTestConfigurationHttpConfigurationRequestHeaderOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface NetworkConnectionMonitorTestConfigurationHttpConfiguration {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/network_connection_monitor#method NetworkConnectionMonitor#method}
  */
  readonly method?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/network_connection_monitor#path NetworkConnectionMonitor#path}
  */
  readonly path?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/network_connection_monitor#port NetworkConnectionMonitor#port}
  */
  readonly port?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/network_connection_monitor#prefer_https NetworkConnectionMonitor#prefer_https}
  */
  readonly preferHttps?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/network_connection_monitor#valid_status_code_ranges NetworkConnectionMonitor#valid_status_code_ranges}
  */
  readonly validStatusCodeRanges?: string[];
  /**
  * request_header block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/network_connection_monitor#request_header NetworkConnectionMonitor#request_header}
  */
  readonly requestHeader?: NetworkConnectionMonitorTestConfigurationHttpConfigurationRequestHeader[] | cdktf.IResolvable;
}

export function networkConnectionMonitorTestConfigurationHttpConfigurationToTerraform(struct?: NetworkConnectionMonitorTestConfigurationHttpConfigurationOutputReference | NetworkConnectionMonitorTestConfigurationHttpConfiguration): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    method: cdktf.stringToTerraform(struct!.method),
    path: cdktf.stringToTerraform(struct!.path),
    port: cdktf.numberToTerraform(struct!.port),
    prefer_https: cdktf.booleanToTerraform(struct!.preferHttps),
    valid_status_code_ranges: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.validStatusCodeRanges),
    request_header: cdktf.listMapper(networkConnectionMonitorTestConfigurationHttpConfigurationRequestHeaderToTerraform, true)(struct!.requestHeader),
  }
}


export function networkConnectionMonitorTestConfigurationHttpConfigurationToHclTerraform(struct?: NetworkConnectionMonitorTestConfigurationHttpConfigurationOutputReference | NetworkConnectionMonitorTestConfigurationHttpConfiguration): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    method: {
      value: cdktf.stringToHclTerraform(struct!.method),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    path: {
      value: cdktf.stringToHclTerraform(struct!.path),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    port: {
      value: cdktf.numberToHclTerraform(struct!.port),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    prefer_https: {
      value: cdktf.booleanToHclTerraform(struct!.preferHttps),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    valid_status_code_ranges: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.validStatusCodeRanges),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
    request_header: {
      value: cdktf.listMapperHcl(networkConnectionMonitorTestConfigurationHttpConfigurationRequestHeaderToHclTerraform, true)(struct!.requestHeader),
      isBlock: true,
      type: "set",
      storageClassType: "NetworkConnectionMonitorTestConfigurationHttpConfigurationRequestHeaderList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class NetworkConnectionMonitorTestConfigurationHttpConfigurationOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): NetworkConnectionMonitorTestConfigurationHttpConfiguration | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._method !== undefined) {
      hasAnyValues = true;
      internalValueResult.method = this._method;
    }
    if (this._path !== undefined) {
      hasAnyValues = true;
      internalValueResult.path = this._path;
    }
    if (this._port !== undefined) {
      hasAnyValues = true;
      internalValueResult.port = this._port;
    }
    if (this._preferHttps !== undefined) {
      hasAnyValues = true;
      internalValueResult.preferHttps = this._preferHttps;
    }
    if (this._validStatusCodeRanges !== undefined) {
      hasAnyValues = true;
      internalValueResult.validStatusCodeRanges = this._validStatusCodeRanges;
    }
    if (this._requestHeader?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.requestHeader = this._requestHeader?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: NetworkConnectionMonitorTestConfigurationHttpConfiguration | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._method = undefined;
      this._path = undefined;
      this._port = undefined;
      this._preferHttps = undefined;
      this._validStatusCodeRanges = undefined;
      this._requestHeader.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._method = value.method;
      this._path = value.path;
      this._port = value.port;
      this._preferHttps = value.preferHttps;
      this._validStatusCodeRanges = value.validStatusCodeRanges;
      this._requestHeader.internalValue = value.requestHeader;
    }
  }

  // method - computed: false, optional: true, required: false
  private _method?: string; 
  public get method() {
    return this.getStringAttribute('method');
  }
  public set method(value: string) {
    this._method = value;
  }
  public resetMethod() {
    this._method = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get methodInput() {
    return this._method;
  }

  // path - computed: false, optional: true, required: false
  private _path?: string; 
  public get path() {
    return this.getStringAttribute('path');
  }
  public set path(value: string) {
    this._path = value;
  }
  public resetPath() {
    this._path = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get pathInput() {
    return this._path;
  }

  // port - computed: false, optional: true, required: false
  private _port?: number; 
  public get port() {
    return this.getNumberAttribute('port');
  }
  public set port(value: number) {
    this._port = value;
  }
  public resetPort() {
    this._port = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get portInput() {
    return this._port;
  }

  // prefer_https - computed: false, optional: true, required: false
  private _preferHttps?: boolean | cdktf.IResolvable; 
  public get preferHttps() {
    return this.getBooleanAttribute('prefer_https');
  }
  public set preferHttps(value: boolean | cdktf.IResolvable) {
    this._preferHttps = value;
  }
  public resetPreferHttps() {
    this._preferHttps = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get preferHttpsInput() {
    return this._preferHttps;
  }

  // valid_status_code_ranges - computed: false, optional: true, required: false
  private _validStatusCodeRanges?: string[]; 
  public get validStatusCodeRanges() {
    return cdktf.Fn.tolist(this.getListAttribute('valid_status_code_ranges'));
  }
  public set validStatusCodeRanges(value: string[]) {
    this._validStatusCodeRanges = value;
  }
  public resetValidStatusCodeRanges() {
    this._validStatusCodeRanges = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get validStatusCodeRangesInput() {
    return this._validStatusCodeRanges;
  }

  // request_header - computed: false, optional: true, required: false
  private _requestHeader = new NetworkConnectionMonitorTestConfigurationHttpConfigurationRequestHeaderList(this, "request_header", true);
  public get requestHeader() {
    return this._requestHeader;
  }
  public putRequestHeader(value: NetworkConnectionMonitorTestConfigurationHttpConfigurationRequestHeader[] | cdktf.IResolvable) {
    this._requestHeader.internalValue = value;
  }
  public resetRequestHeader() {
    this._requestHeader.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get requestHeaderInput() {
    return this._requestHeader.internalValue;
  }
}
export interface NetworkConnectionMonitorTestConfigurationIcmpConfiguration {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/network_connection_monitor#trace_route_enabled NetworkConnectionMonitor#trace_route_enabled}
  */
  readonly traceRouteEnabled?: boolean | cdktf.IResolvable;
}

export function networkConnectionMonitorTestConfigurationIcmpConfigurationToTerraform(struct?: NetworkConnectionMonitorTestConfigurationIcmpConfigurationOutputReference | NetworkConnectionMonitorTestConfigurationIcmpConfiguration): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    trace_route_enabled: cdktf.booleanToTerraform(struct!.traceRouteEnabled),
  }
}


export function networkConnectionMonitorTestConfigurationIcmpConfigurationToHclTerraform(struct?: NetworkConnectionMonitorTestConfigurationIcmpConfigurationOutputReference | NetworkConnectionMonitorTestConfigurationIcmpConfiguration): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    trace_route_enabled: {
      value: cdktf.booleanToHclTerraform(struct!.traceRouteEnabled),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class NetworkConnectionMonitorTestConfigurationIcmpConfigurationOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): NetworkConnectionMonitorTestConfigurationIcmpConfiguration | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._traceRouteEnabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.traceRouteEnabled = this._traceRouteEnabled;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: NetworkConnectionMonitorTestConfigurationIcmpConfiguration | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._traceRouteEnabled = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._traceRouteEnabled = value.traceRouteEnabled;
    }
  }

  // trace_route_enabled - computed: false, optional: true, required: false
  private _traceRouteEnabled?: boolean | cdktf.IResolvable; 
  public get traceRouteEnabled() {
    return this.getBooleanAttribute('trace_route_enabled');
  }
  public set traceRouteEnabled(value: boolean | cdktf.IResolvable) {
    this._traceRouteEnabled = value;
  }
  public resetTraceRouteEnabled() {
    this._traceRouteEnabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get traceRouteEnabledInput() {
    return this._traceRouteEnabled;
  }
}
export interface NetworkConnectionMonitorTestConfigurationSuccessThreshold {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/network_connection_monitor#checks_failed_percent NetworkConnectionMonitor#checks_failed_percent}
  */
  readonly checksFailedPercent?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/network_connection_monitor#round_trip_time_ms NetworkConnectionMonitor#round_trip_time_ms}
  */
  readonly roundTripTimeMs?: number;
}

export function networkConnectionMonitorTestConfigurationSuccessThresholdToTerraform(struct?: NetworkConnectionMonitorTestConfigurationSuccessThresholdOutputReference | NetworkConnectionMonitorTestConfigurationSuccessThreshold): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    checks_failed_percent: cdktf.numberToTerraform(struct!.checksFailedPercent),
    round_trip_time_ms: cdktf.numberToTerraform(struct!.roundTripTimeMs),
  }
}


export function networkConnectionMonitorTestConfigurationSuccessThresholdToHclTerraform(struct?: NetworkConnectionMonitorTestConfigurationSuccessThresholdOutputReference | NetworkConnectionMonitorTestConfigurationSuccessThreshold): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    checks_failed_percent: {
      value: cdktf.numberToHclTerraform(struct!.checksFailedPercent),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    round_trip_time_ms: {
      value: cdktf.numberToHclTerraform(struct!.roundTripTimeMs),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class NetworkConnectionMonitorTestConfigurationSuccessThresholdOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): NetworkConnectionMonitorTestConfigurationSuccessThreshold | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._checksFailedPercent !== undefined) {
      hasAnyValues = true;
      internalValueResult.checksFailedPercent = this._checksFailedPercent;
    }
    if (this._roundTripTimeMs !== undefined) {
      hasAnyValues = true;
      internalValueResult.roundTripTimeMs = this._roundTripTimeMs;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: NetworkConnectionMonitorTestConfigurationSuccessThreshold | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._checksFailedPercent = undefined;
      this._roundTripTimeMs = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._checksFailedPercent = value.checksFailedPercent;
      this._roundTripTimeMs = value.roundTripTimeMs;
    }
  }

  // checks_failed_percent - computed: false, optional: true, required: false
  private _checksFailedPercent?: number; 
  public get checksFailedPercent() {
    return this.getNumberAttribute('checks_failed_percent');
  }
  public set checksFailedPercent(value: number) {
    this._checksFailedPercent = value;
  }
  public resetChecksFailedPercent() {
    this._checksFailedPercent = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get checksFailedPercentInput() {
    return this._checksFailedPercent;
  }

  // round_trip_time_ms - computed: false, optional: true, required: false
  private _roundTripTimeMs?: number; 
  public get roundTripTimeMs() {
    return this.getNumberAttribute('round_trip_time_ms');
  }
  public set roundTripTimeMs(value: number) {
    this._roundTripTimeMs = value;
  }
  public resetRoundTripTimeMs() {
    this._roundTripTimeMs = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get roundTripTimeMsInput() {
    return this._roundTripTimeMs;
  }
}
export interface NetworkConnectionMonitorTestConfigurationTcpConfiguration {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/network_connection_monitor#destination_port_behavior NetworkConnectionMonitor#destination_port_behavior}
  */
  readonly destinationPortBehavior?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/network_connection_monitor#port NetworkConnectionMonitor#port}
  */
  readonly port: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/network_connection_monitor#trace_route_enabled NetworkConnectionMonitor#trace_route_enabled}
  */
  readonly traceRouteEnabled?: boolean | cdktf.IResolvable;
}

export function networkConnectionMonitorTestConfigurationTcpConfigurationToTerraform(struct?: NetworkConnectionMonitorTestConfigurationTcpConfigurationOutputReference | NetworkConnectionMonitorTestConfigurationTcpConfiguration): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    destination_port_behavior: cdktf.stringToTerraform(struct!.destinationPortBehavior),
    port: cdktf.numberToTerraform(struct!.port),
    trace_route_enabled: cdktf.booleanToTerraform(struct!.traceRouteEnabled),
  }
}


export function networkConnectionMonitorTestConfigurationTcpConfigurationToHclTerraform(struct?: NetworkConnectionMonitorTestConfigurationTcpConfigurationOutputReference | NetworkConnectionMonitorTestConfigurationTcpConfiguration): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    destination_port_behavior: {
      value: cdktf.stringToHclTerraform(struct!.destinationPortBehavior),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    port: {
      value: cdktf.numberToHclTerraform(struct!.port),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    trace_route_enabled: {
      value: cdktf.booleanToHclTerraform(struct!.traceRouteEnabled),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class NetworkConnectionMonitorTestConfigurationTcpConfigurationOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): NetworkConnectionMonitorTestConfigurationTcpConfiguration | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._destinationPortBehavior !== undefined) {
      hasAnyValues = true;
      internalValueResult.destinationPortBehavior = this._destinationPortBehavior;
    }
    if (this._port !== undefined) {
      hasAnyValues = true;
      internalValueResult.port = this._port;
    }
    if (this._traceRouteEnabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.traceRouteEnabled = this._traceRouteEnabled;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: NetworkConnectionMonitorTestConfigurationTcpConfiguration | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._destinationPortBehavior = undefined;
      this._port = undefined;
      this._traceRouteEnabled = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._destinationPortBehavior = value.destinationPortBehavior;
      this._port = value.port;
      this._traceRouteEnabled = value.traceRouteEnabled;
    }
  }

  // destination_port_behavior - computed: false, optional: true, required: false
  private _destinationPortBehavior?: string; 
  public get destinationPortBehavior() {
    return this.getStringAttribute('destination_port_behavior');
  }
  public set destinationPortBehavior(value: string) {
    this._destinationPortBehavior = value;
  }
  public resetDestinationPortBehavior() {
    this._destinationPortBehavior = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get destinationPortBehaviorInput() {
    return this._destinationPortBehavior;
  }

  // port - computed: false, optional: false, required: true
  private _port?: number; 
  public get port() {
    return this.getNumberAttribute('port');
  }
  public set port(value: number) {
    this._port = value;
  }
  // Temporarily expose input value. Use with caution.
  public get portInput() {
    return this._port;
  }

  // trace_route_enabled - computed: false, optional: true, required: false
  private _traceRouteEnabled?: boolean | cdktf.IResolvable; 
  public get traceRouteEnabled() {
    return this.getBooleanAttribute('trace_route_enabled');
  }
  public set traceRouteEnabled(value: boolean | cdktf.IResolvable) {
    this._traceRouteEnabled = value;
  }
  public resetTraceRouteEnabled() {
    this._traceRouteEnabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get traceRouteEnabledInput() {
    return this._traceRouteEnabled;
  }
}
export interface NetworkConnectionMonitorTestConfiguration {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/network_connection_monitor#name NetworkConnectionMonitor#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/network_connection_monitor#preferred_ip_version NetworkConnectionMonitor#preferred_ip_version}
  */
  readonly preferredIpVersion?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/network_connection_monitor#protocol NetworkConnectionMonitor#protocol}
  */
  readonly protocol: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/network_connection_monitor#test_frequency_in_seconds NetworkConnectionMonitor#test_frequency_in_seconds}
  */
  readonly testFrequencyInSeconds?: number;
  /**
  * http_configuration block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/network_connection_monitor#http_configuration NetworkConnectionMonitor#http_configuration}
  */
  readonly httpConfiguration?: NetworkConnectionMonitorTestConfigurationHttpConfiguration;
  /**
  * icmp_configuration block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/network_connection_monitor#icmp_configuration NetworkConnectionMonitor#icmp_configuration}
  */
  readonly icmpConfiguration?: NetworkConnectionMonitorTestConfigurationIcmpConfiguration;
  /**
  * success_threshold block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/network_connection_monitor#success_threshold NetworkConnectionMonitor#success_threshold}
  */
  readonly successThreshold?: NetworkConnectionMonitorTestConfigurationSuccessThreshold;
  /**
  * tcp_configuration block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/network_connection_monitor#tcp_configuration NetworkConnectionMonitor#tcp_configuration}
  */
  readonly tcpConfiguration?: NetworkConnectionMonitorTestConfigurationTcpConfiguration;
}

export function networkConnectionMonitorTestConfigurationToTerraform(struct?: NetworkConnectionMonitorTestConfiguration | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
    preferred_ip_version: cdktf.stringToTerraform(struct!.preferredIpVersion),
    protocol: cdktf.stringToTerraform(struct!.protocol),
    test_frequency_in_seconds: cdktf.numberToTerraform(struct!.testFrequencyInSeconds),
    http_configuration: networkConnectionMonitorTestConfigurationHttpConfigurationToTerraform(struct!.httpConfiguration),
    icmp_configuration: networkConnectionMonitorTestConfigurationIcmpConfigurationToTerraform(struct!.icmpConfiguration),
    success_threshold: networkConnectionMonitorTestConfigurationSuccessThresholdToTerraform(struct!.successThreshold),
    tcp_configuration: networkConnectionMonitorTestConfigurationTcpConfigurationToTerraform(struct!.tcpConfiguration),
  }
}


export function networkConnectionMonitorTestConfigurationToHclTerraform(struct?: NetworkConnectionMonitorTestConfiguration | cdktf.IResolvable): any {
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
    preferred_ip_version: {
      value: cdktf.stringToHclTerraform(struct!.preferredIpVersion),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    protocol: {
      value: cdktf.stringToHclTerraform(struct!.protocol),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    test_frequency_in_seconds: {
      value: cdktf.numberToHclTerraform(struct!.testFrequencyInSeconds),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    http_configuration: {
      value: networkConnectionMonitorTestConfigurationHttpConfigurationToHclTerraform(struct!.httpConfiguration),
      isBlock: true,
      type: "list",
      storageClassType: "NetworkConnectionMonitorTestConfigurationHttpConfigurationList",
    },
    icmp_configuration: {
      value: networkConnectionMonitorTestConfigurationIcmpConfigurationToHclTerraform(struct!.icmpConfiguration),
      isBlock: true,
      type: "list",
      storageClassType: "NetworkConnectionMonitorTestConfigurationIcmpConfigurationList",
    },
    success_threshold: {
      value: networkConnectionMonitorTestConfigurationSuccessThresholdToHclTerraform(struct!.successThreshold),
      isBlock: true,
      type: "list",
      storageClassType: "NetworkConnectionMonitorTestConfigurationSuccessThresholdList",
    },
    tcp_configuration: {
      value: networkConnectionMonitorTestConfigurationTcpConfigurationToHclTerraform(struct!.tcpConfiguration),
      isBlock: true,
      type: "list",
      storageClassType: "NetworkConnectionMonitorTestConfigurationTcpConfigurationList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class NetworkConnectionMonitorTestConfigurationOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): NetworkConnectionMonitorTestConfiguration | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._preferredIpVersion !== undefined) {
      hasAnyValues = true;
      internalValueResult.preferredIpVersion = this._preferredIpVersion;
    }
    if (this._protocol !== undefined) {
      hasAnyValues = true;
      internalValueResult.protocol = this._protocol;
    }
    if (this._testFrequencyInSeconds !== undefined) {
      hasAnyValues = true;
      internalValueResult.testFrequencyInSeconds = this._testFrequencyInSeconds;
    }
    if (this._httpConfiguration?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.httpConfiguration = this._httpConfiguration?.internalValue;
    }
    if (this._icmpConfiguration?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.icmpConfiguration = this._icmpConfiguration?.internalValue;
    }
    if (this._successThreshold?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.successThreshold = this._successThreshold?.internalValue;
    }
    if (this._tcpConfiguration?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.tcpConfiguration = this._tcpConfiguration?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: NetworkConnectionMonitorTestConfiguration | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._name = undefined;
      this._preferredIpVersion = undefined;
      this._protocol = undefined;
      this._testFrequencyInSeconds = undefined;
      this._httpConfiguration.internalValue = undefined;
      this._icmpConfiguration.internalValue = undefined;
      this._successThreshold.internalValue = undefined;
      this._tcpConfiguration.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._name = value.name;
      this._preferredIpVersion = value.preferredIpVersion;
      this._protocol = value.protocol;
      this._testFrequencyInSeconds = value.testFrequencyInSeconds;
      this._httpConfiguration.internalValue = value.httpConfiguration;
      this._icmpConfiguration.internalValue = value.icmpConfiguration;
      this._successThreshold.internalValue = value.successThreshold;
      this._tcpConfiguration.internalValue = value.tcpConfiguration;
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

  // preferred_ip_version - computed: false, optional: true, required: false
  private _preferredIpVersion?: string; 
  public get preferredIpVersion() {
    return this.getStringAttribute('preferred_ip_version');
  }
  public set preferredIpVersion(value: string) {
    this._preferredIpVersion = value;
  }
  public resetPreferredIpVersion() {
    this._preferredIpVersion = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get preferredIpVersionInput() {
    return this._preferredIpVersion;
  }

  // protocol - computed: false, optional: false, required: true
  private _protocol?: string; 
  public get protocol() {
    return this.getStringAttribute('protocol');
  }
  public set protocol(value: string) {
    this._protocol = value;
  }
  // Temporarily expose input value. Use with caution.
  public get protocolInput() {
    return this._protocol;
  }

  // test_frequency_in_seconds - computed: false, optional: true, required: false
  private _testFrequencyInSeconds?: number; 
  public get testFrequencyInSeconds() {
    return this.getNumberAttribute('test_frequency_in_seconds');
  }
  public set testFrequencyInSeconds(value: number) {
    this._testFrequencyInSeconds = value;
  }
  public resetTestFrequencyInSeconds() {
    this._testFrequencyInSeconds = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get testFrequencyInSecondsInput() {
    return this._testFrequencyInSeconds;
  }

  // http_configuration - computed: false, optional: true, required: false
  private _httpConfiguration = new NetworkConnectionMonitorTestConfigurationHttpConfigurationOutputReference(this, "http_configuration");
  public get httpConfiguration() {
    return this._httpConfiguration;
  }
  public putHttpConfiguration(value: NetworkConnectionMonitorTestConfigurationHttpConfiguration) {
    this._httpConfiguration.internalValue = value;
  }
  public resetHttpConfiguration() {
    this._httpConfiguration.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get httpConfigurationInput() {
    return this._httpConfiguration.internalValue;
  }

  // icmp_configuration - computed: false, optional: true, required: false
  private _icmpConfiguration = new NetworkConnectionMonitorTestConfigurationIcmpConfigurationOutputReference(this, "icmp_configuration");
  public get icmpConfiguration() {
    return this._icmpConfiguration;
  }
  public putIcmpConfiguration(value: NetworkConnectionMonitorTestConfigurationIcmpConfiguration) {
    this._icmpConfiguration.internalValue = value;
  }
  public resetIcmpConfiguration() {
    this._icmpConfiguration.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get icmpConfigurationInput() {
    return this._icmpConfiguration.internalValue;
  }

  // success_threshold - computed: false, optional: true, required: false
  private _successThreshold = new NetworkConnectionMonitorTestConfigurationSuccessThresholdOutputReference(this, "success_threshold");
  public get successThreshold() {
    return this._successThreshold;
  }
  public putSuccessThreshold(value: NetworkConnectionMonitorTestConfigurationSuccessThreshold) {
    this._successThreshold.internalValue = value;
  }
  public resetSuccessThreshold() {
    this._successThreshold.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get successThresholdInput() {
    return this._successThreshold.internalValue;
  }

  // tcp_configuration - computed: false, optional: true, required: false
  private _tcpConfiguration = new NetworkConnectionMonitorTestConfigurationTcpConfigurationOutputReference(this, "tcp_configuration");
  public get tcpConfiguration() {
    return this._tcpConfiguration;
  }
  public putTcpConfiguration(value: NetworkConnectionMonitorTestConfigurationTcpConfiguration) {
    this._tcpConfiguration.internalValue = value;
  }
  public resetTcpConfiguration() {
    this._tcpConfiguration.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tcpConfigurationInput() {
    return this._tcpConfiguration.internalValue;
  }
}

export class NetworkConnectionMonitorTestConfigurationList extends cdktf.ComplexList {
  public internalValue? : NetworkConnectionMonitorTestConfiguration[] | cdktf.IResolvable

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
  public get(index: number): NetworkConnectionMonitorTestConfigurationOutputReference {
    return new NetworkConnectionMonitorTestConfigurationOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface NetworkConnectionMonitorTestGroup {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/network_connection_monitor#destination_endpoints NetworkConnectionMonitor#destination_endpoints}
  */
  readonly destinationEndpoints: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/network_connection_monitor#enabled NetworkConnectionMonitor#enabled}
  */
  readonly enabled?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/network_connection_monitor#name NetworkConnectionMonitor#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/network_connection_monitor#source_endpoints NetworkConnectionMonitor#source_endpoints}
  */
  readonly sourceEndpoints: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/network_connection_monitor#test_configuration_names NetworkConnectionMonitor#test_configuration_names}
  */
  readonly testConfigurationNames: string[];
}

export function networkConnectionMonitorTestGroupToTerraform(struct?: NetworkConnectionMonitorTestGroup | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    destination_endpoints: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.destinationEndpoints),
    enabled: cdktf.booleanToTerraform(struct!.enabled),
    name: cdktf.stringToTerraform(struct!.name),
    source_endpoints: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.sourceEndpoints),
    test_configuration_names: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.testConfigurationNames),
  }
}


export function networkConnectionMonitorTestGroupToHclTerraform(struct?: NetworkConnectionMonitorTestGroup | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    destination_endpoints: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.destinationEndpoints),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
    enabled: {
      value: cdktf.booleanToHclTerraform(struct!.enabled),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    name: {
      value: cdktf.stringToHclTerraform(struct!.name),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    source_endpoints: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.sourceEndpoints),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
    test_configuration_names: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.testConfigurationNames),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class NetworkConnectionMonitorTestGroupOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): NetworkConnectionMonitorTestGroup | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._destinationEndpoints !== undefined) {
      hasAnyValues = true;
      internalValueResult.destinationEndpoints = this._destinationEndpoints;
    }
    if (this._enabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.enabled = this._enabled;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._sourceEndpoints !== undefined) {
      hasAnyValues = true;
      internalValueResult.sourceEndpoints = this._sourceEndpoints;
    }
    if (this._testConfigurationNames !== undefined) {
      hasAnyValues = true;
      internalValueResult.testConfigurationNames = this._testConfigurationNames;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: NetworkConnectionMonitorTestGroup | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._destinationEndpoints = undefined;
      this._enabled = undefined;
      this._name = undefined;
      this._sourceEndpoints = undefined;
      this._testConfigurationNames = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._destinationEndpoints = value.destinationEndpoints;
      this._enabled = value.enabled;
      this._name = value.name;
      this._sourceEndpoints = value.sourceEndpoints;
      this._testConfigurationNames = value.testConfigurationNames;
    }
  }

  // destination_endpoints - computed: false, optional: false, required: true
  private _destinationEndpoints?: string[]; 
  public get destinationEndpoints() {
    return cdktf.Fn.tolist(this.getListAttribute('destination_endpoints'));
  }
  public set destinationEndpoints(value: string[]) {
    this._destinationEndpoints = value;
  }
  // Temporarily expose input value. Use with caution.
  public get destinationEndpointsInput() {
    return this._destinationEndpoints;
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

  // source_endpoints - computed: false, optional: false, required: true
  private _sourceEndpoints?: string[]; 
  public get sourceEndpoints() {
    return cdktf.Fn.tolist(this.getListAttribute('source_endpoints'));
  }
  public set sourceEndpoints(value: string[]) {
    this._sourceEndpoints = value;
  }
  // Temporarily expose input value. Use with caution.
  public get sourceEndpointsInput() {
    return this._sourceEndpoints;
  }

  // test_configuration_names - computed: false, optional: false, required: true
  private _testConfigurationNames?: string[]; 
  public get testConfigurationNames() {
    return cdktf.Fn.tolist(this.getListAttribute('test_configuration_names'));
  }
  public set testConfigurationNames(value: string[]) {
    this._testConfigurationNames = value;
  }
  // Temporarily expose input value. Use with caution.
  public get testConfigurationNamesInput() {
    return this._testConfigurationNames;
  }
}

export class NetworkConnectionMonitorTestGroupList extends cdktf.ComplexList {
  public internalValue? : NetworkConnectionMonitorTestGroup[] | cdktf.IResolvable

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
  public get(index: number): NetworkConnectionMonitorTestGroupOutputReference {
    return new NetworkConnectionMonitorTestGroupOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface NetworkConnectionMonitorTimeouts {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/network_connection_monitor#create NetworkConnectionMonitor#create}
  */
  readonly create?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/network_connection_monitor#delete NetworkConnectionMonitor#delete}
  */
  readonly delete?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/network_connection_monitor#read NetworkConnectionMonitor#read}
  */
  readonly read?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/network_connection_monitor#update NetworkConnectionMonitor#update}
  */
  readonly update?: string;
}

export function networkConnectionMonitorTimeoutsToTerraform(struct?: NetworkConnectionMonitorTimeouts | cdktf.IResolvable): any {
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


export function networkConnectionMonitorTimeoutsToHclTerraform(struct?: NetworkConnectionMonitorTimeouts | cdktf.IResolvable): any {
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

export class NetworkConnectionMonitorTimeoutsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): NetworkConnectionMonitorTimeouts | cdktf.IResolvable | undefined {
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

  public set internalValue(value: NetworkConnectionMonitorTimeouts | cdktf.IResolvable | undefined) {
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
* Represents a {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/network_connection_monitor azurerm_network_connection_monitor}
*/
export class NetworkConnectionMonitor extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "azurerm_network_connection_monitor";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a NetworkConnectionMonitor resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the NetworkConnectionMonitor to import
  * @param importFromId The id of the existing NetworkConnectionMonitor that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/network_connection_monitor#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the NetworkConnectionMonitor to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "azurerm_network_connection_monitor", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/network_connection_monitor azurerm_network_connection_monitor} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options NetworkConnectionMonitorConfig
  */
  public constructor(scope: Construct, id: string, config: NetworkConnectionMonitorConfig) {
    super(scope, id, {
      terraformResourceType: 'azurerm_network_connection_monitor',
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
    this._id = config.id;
    this._location = config.location;
    this._name = config.name;
    this._networkWatcherId = config.networkWatcherId;
    this._notes = config.notes;
    this._outputWorkspaceResourceIds = config.outputWorkspaceResourceIds;
    this._tags = config.tags;
    this._endpoint.internalValue = config.endpoint;
    this._testConfiguration.internalValue = config.testConfiguration;
    this._testGroup.internalValue = config.testGroup;
    this._timeouts.internalValue = config.timeouts;
  }

  // ==========
  // ATTRIBUTES
  // ==========

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

  // network_watcher_id - computed: false, optional: false, required: true
  private _networkWatcherId?: string; 
  public get networkWatcherId() {
    return this.getStringAttribute('network_watcher_id');
  }
  public set networkWatcherId(value: string) {
    this._networkWatcherId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get networkWatcherIdInput() {
    return this._networkWatcherId;
  }

  // notes - computed: false, optional: true, required: false
  private _notes?: string; 
  public get notes() {
    return this.getStringAttribute('notes');
  }
  public set notes(value: string) {
    this._notes = value;
  }
  public resetNotes() {
    this._notes = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get notesInput() {
    return this._notes;
  }

  // output_workspace_resource_ids - computed: false, optional: true, required: false
  private _outputWorkspaceResourceIds?: string[]; 
  public get outputWorkspaceResourceIds() {
    return cdktf.Fn.tolist(this.getListAttribute('output_workspace_resource_ids'));
  }
  public set outputWorkspaceResourceIds(value: string[]) {
    this._outputWorkspaceResourceIds = value;
  }
  public resetOutputWorkspaceResourceIds() {
    this._outputWorkspaceResourceIds = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get outputWorkspaceResourceIdsInput() {
    return this._outputWorkspaceResourceIds;
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

  // endpoint - computed: false, optional: false, required: true
  private _endpoint = new NetworkConnectionMonitorEndpointList(this, "endpoint", true);
  public get endpoint() {
    return this._endpoint;
  }
  public putEndpoint(value: NetworkConnectionMonitorEndpoint[] | cdktf.IResolvable) {
    this._endpoint.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get endpointInput() {
    return this._endpoint.internalValue;
  }

  // test_configuration - computed: false, optional: false, required: true
  private _testConfiguration = new NetworkConnectionMonitorTestConfigurationList(this, "test_configuration", true);
  public get testConfiguration() {
    return this._testConfiguration;
  }
  public putTestConfiguration(value: NetworkConnectionMonitorTestConfiguration[] | cdktf.IResolvable) {
    this._testConfiguration.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get testConfigurationInput() {
    return this._testConfiguration.internalValue;
  }

  // test_group - computed: false, optional: false, required: true
  private _testGroup = new NetworkConnectionMonitorTestGroupList(this, "test_group", true);
  public get testGroup() {
    return this._testGroup;
  }
  public putTestGroup(value: NetworkConnectionMonitorTestGroup[] | cdktf.IResolvable) {
    this._testGroup.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get testGroupInput() {
    return this._testGroup.internalValue;
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts = new NetworkConnectionMonitorTimeoutsOutputReference(this, "timeouts");
  public get timeouts() {
    return this._timeouts;
  }
  public putTimeouts(value: NetworkConnectionMonitorTimeouts) {
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
      network_watcher_id: cdktf.stringToTerraform(this._networkWatcherId),
      notes: cdktf.stringToTerraform(this._notes),
      output_workspace_resource_ids: cdktf.listMapper(cdktf.stringToTerraform, false)(this._outputWorkspaceResourceIds),
      tags: cdktf.hashMapper(cdktf.stringToTerraform)(this._tags),
      endpoint: cdktf.listMapper(networkConnectionMonitorEndpointToTerraform, true)(this._endpoint.internalValue),
      test_configuration: cdktf.listMapper(networkConnectionMonitorTestConfigurationToTerraform, true)(this._testConfiguration.internalValue),
      test_group: cdktf.listMapper(networkConnectionMonitorTestGroupToTerraform, true)(this._testGroup.internalValue),
      timeouts: networkConnectionMonitorTimeoutsToTerraform(this._timeouts.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
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
      name: {
        value: cdktf.stringToHclTerraform(this._name),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      network_watcher_id: {
        value: cdktf.stringToHclTerraform(this._networkWatcherId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      notes: {
        value: cdktf.stringToHclTerraform(this._notes),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      output_workspace_resource_ids: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._outputWorkspaceResourceIds),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      tags: {
        value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(this._tags),
        isBlock: false,
        type: "map",
        storageClassType: "stringMap",
      },
      endpoint: {
        value: cdktf.listMapperHcl(networkConnectionMonitorEndpointToHclTerraform, true)(this._endpoint.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "NetworkConnectionMonitorEndpointList",
      },
      test_configuration: {
        value: cdktf.listMapperHcl(networkConnectionMonitorTestConfigurationToHclTerraform, true)(this._testConfiguration.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "NetworkConnectionMonitorTestConfigurationList",
      },
      test_group: {
        value: cdktf.listMapperHcl(networkConnectionMonitorTestGroupToHclTerraform, true)(this._testGroup.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "NetworkConnectionMonitorTestGroupList",
      },
      timeouts: {
        value: networkConnectionMonitorTimeoutsToHclTerraform(this._timeouts.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "NetworkConnectionMonitorTimeouts",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
