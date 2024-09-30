// https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/data-sources/orchestrated_virtual_machine_scale_set
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataAzurermOrchestratedVirtualMachineScaleSetConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/data-sources/orchestrated_virtual_machine_scale_set#id DataAzurermOrchestratedVirtualMachineScaleSet#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/data-sources/orchestrated_virtual_machine_scale_set#name DataAzurermOrchestratedVirtualMachineScaleSet#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/data-sources/orchestrated_virtual_machine_scale_set#resource_group_name DataAzurermOrchestratedVirtualMachineScaleSet#resource_group_name}
  */
  readonly resourceGroupName: string;
  /**
  * timeouts block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/data-sources/orchestrated_virtual_machine_scale_set#timeouts DataAzurermOrchestratedVirtualMachineScaleSet#timeouts}
  */
  readonly timeouts?: DataAzurermOrchestratedVirtualMachineScaleSetTimeouts;
}
export interface DataAzurermOrchestratedVirtualMachineScaleSetIdentity {
}

export function dataAzurermOrchestratedVirtualMachineScaleSetIdentityToTerraform(struct?: DataAzurermOrchestratedVirtualMachineScaleSetIdentity): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataAzurermOrchestratedVirtualMachineScaleSetIdentityToHclTerraform(struct?: DataAzurermOrchestratedVirtualMachineScaleSetIdentity): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAzurermOrchestratedVirtualMachineScaleSetIdentityOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataAzurermOrchestratedVirtualMachineScaleSetIdentity | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAzurermOrchestratedVirtualMachineScaleSetIdentity | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // identity_ids - computed: true, optional: false, required: false
  public get identityIds() {
    return this.getListAttribute('identity_ids');
  }

  // principal_id - computed: true, optional: false, required: false
  public get principalId() {
    return this.getStringAttribute('principal_id');
  }

  // tenant_id - computed: true, optional: false, required: false
  public get tenantId() {
    return this.getStringAttribute('tenant_id');
  }

  // type - computed: true, optional: false, required: false
  public get type() {
    return this.getStringAttribute('type');
  }
}

export class DataAzurermOrchestratedVirtualMachineScaleSetIdentityList extends cdktf.ComplexList {

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
  public get(index: number): DataAzurermOrchestratedVirtualMachineScaleSetIdentityOutputReference {
    return new DataAzurermOrchestratedVirtualMachineScaleSetIdentityOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataAzurermOrchestratedVirtualMachineScaleSetNetworkInterfaceIpConfigurationPublicIpAddressIpTag {
}

export function dataAzurermOrchestratedVirtualMachineScaleSetNetworkInterfaceIpConfigurationPublicIpAddressIpTagToTerraform(struct?: DataAzurermOrchestratedVirtualMachineScaleSetNetworkInterfaceIpConfigurationPublicIpAddressIpTag): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataAzurermOrchestratedVirtualMachineScaleSetNetworkInterfaceIpConfigurationPublicIpAddressIpTagToHclTerraform(struct?: DataAzurermOrchestratedVirtualMachineScaleSetNetworkInterfaceIpConfigurationPublicIpAddressIpTag): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAzurermOrchestratedVirtualMachineScaleSetNetworkInterfaceIpConfigurationPublicIpAddressIpTagOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataAzurermOrchestratedVirtualMachineScaleSetNetworkInterfaceIpConfigurationPublicIpAddressIpTag | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAzurermOrchestratedVirtualMachineScaleSetNetworkInterfaceIpConfigurationPublicIpAddressIpTag | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // tag - computed: true, optional: false, required: false
  public get tag() {
    return this.getStringAttribute('tag');
  }

  // type - computed: true, optional: false, required: false
  public get type() {
    return this.getStringAttribute('type');
  }
}

export class DataAzurermOrchestratedVirtualMachineScaleSetNetworkInterfaceIpConfigurationPublicIpAddressIpTagList extends cdktf.ComplexList {

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
  public get(index: number): DataAzurermOrchestratedVirtualMachineScaleSetNetworkInterfaceIpConfigurationPublicIpAddressIpTagOutputReference {
    return new DataAzurermOrchestratedVirtualMachineScaleSetNetworkInterfaceIpConfigurationPublicIpAddressIpTagOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataAzurermOrchestratedVirtualMachineScaleSetNetworkInterfaceIpConfigurationPublicIpAddress {
}

export function dataAzurermOrchestratedVirtualMachineScaleSetNetworkInterfaceIpConfigurationPublicIpAddressToTerraform(struct?: DataAzurermOrchestratedVirtualMachineScaleSetNetworkInterfaceIpConfigurationPublicIpAddress): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataAzurermOrchestratedVirtualMachineScaleSetNetworkInterfaceIpConfigurationPublicIpAddressToHclTerraform(struct?: DataAzurermOrchestratedVirtualMachineScaleSetNetworkInterfaceIpConfigurationPublicIpAddress): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAzurermOrchestratedVirtualMachineScaleSetNetworkInterfaceIpConfigurationPublicIpAddressOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataAzurermOrchestratedVirtualMachineScaleSetNetworkInterfaceIpConfigurationPublicIpAddress | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAzurermOrchestratedVirtualMachineScaleSetNetworkInterfaceIpConfigurationPublicIpAddress | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // domain_name_label - computed: true, optional: false, required: false
  public get domainNameLabel() {
    return this.getStringAttribute('domain_name_label');
  }

  // idle_timeout_in_minutes - computed: true, optional: false, required: false
  public get idleTimeoutInMinutes() {
    return this.getNumberAttribute('idle_timeout_in_minutes');
  }

  // ip_tag - computed: true, optional: false, required: false
  private _ipTag = new DataAzurermOrchestratedVirtualMachineScaleSetNetworkInterfaceIpConfigurationPublicIpAddressIpTagList(this, "ip_tag", false);
  public get ipTag() {
    return this._ipTag;
  }

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }

  // public_ip_prefix_id - computed: true, optional: false, required: false
  public get publicIpPrefixId() {
    return this.getStringAttribute('public_ip_prefix_id');
  }

  // version - computed: true, optional: false, required: false
  public get version() {
    return this.getStringAttribute('version');
  }
}

export class DataAzurermOrchestratedVirtualMachineScaleSetNetworkInterfaceIpConfigurationPublicIpAddressList extends cdktf.ComplexList {

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
  public get(index: number): DataAzurermOrchestratedVirtualMachineScaleSetNetworkInterfaceIpConfigurationPublicIpAddressOutputReference {
    return new DataAzurermOrchestratedVirtualMachineScaleSetNetworkInterfaceIpConfigurationPublicIpAddressOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataAzurermOrchestratedVirtualMachineScaleSetNetworkInterfaceIpConfiguration {
}

export function dataAzurermOrchestratedVirtualMachineScaleSetNetworkInterfaceIpConfigurationToTerraform(struct?: DataAzurermOrchestratedVirtualMachineScaleSetNetworkInterfaceIpConfiguration): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataAzurermOrchestratedVirtualMachineScaleSetNetworkInterfaceIpConfigurationToHclTerraform(struct?: DataAzurermOrchestratedVirtualMachineScaleSetNetworkInterfaceIpConfiguration): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAzurermOrchestratedVirtualMachineScaleSetNetworkInterfaceIpConfigurationOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataAzurermOrchestratedVirtualMachineScaleSetNetworkInterfaceIpConfiguration | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAzurermOrchestratedVirtualMachineScaleSetNetworkInterfaceIpConfiguration | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // application_gateway_backend_address_pool_ids - computed: true, optional: false, required: false
  public get applicationGatewayBackendAddressPoolIds() {
    return this.getListAttribute('application_gateway_backend_address_pool_ids');
  }

  // application_security_group_ids - computed: true, optional: false, required: false
  public get applicationSecurityGroupIds() {
    return this.getListAttribute('application_security_group_ids');
  }

  // load_balancer_backend_address_pool_ids - computed: true, optional: false, required: false
  public get loadBalancerBackendAddressPoolIds() {
    return this.getListAttribute('load_balancer_backend_address_pool_ids');
  }

  // load_balancer_inbound_nat_rules_ids - computed: true, optional: false, required: false
  public get loadBalancerInboundNatRulesIds() {
    return this.getListAttribute('load_balancer_inbound_nat_rules_ids');
  }

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }

  // primary - computed: true, optional: false, required: false
  public get primary() {
    return this.getBooleanAttribute('primary');
  }

  // public_ip_address - computed: true, optional: false, required: false
  private _publicIpAddress = new DataAzurermOrchestratedVirtualMachineScaleSetNetworkInterfaceIpConfigurationPublicIpAddressList(this, "public_ip_address", false);
  public get publicIpAddress() {
    return this._publicIpAddress;
  }

  // subnet_id - computed: true, optional: false, required: false
  public get subnetId() {
    return this.getStringAttribute('subnet_id');
  }

  // version - computed: true, optional: false, required: false
  public get version() {
    return this.getStringAttribute('version');
  }
}

export class DataAzurermOrchestratedVirtualMachineScaleSetNetworkInterfaceIpConfigurationList extends cdktf.ComplexList {

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
  public get(index: number): DataAzurermOrchestratedVirtualMachineScaleSetNetworkInterfaceIpConfigurationOutputReference {
    return new DataAzurermOrchestratedVirtualMachineScaleSetNetworkInterfaceIpConfigurationOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataAzurermOrchestratedVirtualMachineScaleSetNetworkInterface {
}

export function dataAzurermOrchestratedVirtualMachineScaleSetNetworkInterfaceToTerraform(struct?: DataAzurermOrchestratedVirtualMachineScaleSetNetworkInterface): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataAzurermOrchestratedVirtualMachineScaleSetNetworkInterfaceToHclTerraform(struct?: DataAzurermOrchestratedVirtualMachineScaleSetNetworkInterface): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAzurermOrchestratedVirtualMachineScaleSetNetworkInterfaceOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataAzurermOrchestratedVirtualMachineScaleSetNetworkInterface | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAzurermOrchestratedVirtualMachineScaleSetNetworkInterface | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // accelerated_networking_enabled - computed: true, optional: false, required: false
  public get acceleratedNetworkingEnabled() {
    return this.getBooleanAttribute('accelerated_networking_enabled');
  }

  // dns_servers - computed: true, optional: false, required: false
  public get dnsServers() {
    return this.getListAttribute('dns_servers');
  }

  // ip_configuration - computed: true, optional: false, required: false
  private _ipConfiguration = new DataAzurermOrchestratedVirtualMachineScaleSetNetworkInterfaceIpConfigurationList(this, "ip_configuration", false);
  public get ipConfiguration() {
    return this._ipConfiguration;
  }

  // ip_forwarding_enabled - computed: true, optional: false, required: false
  public get ipForwardingEnabled() {
    return this.getBooleanAttribute('ip_forwarding_enabled');
  }

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }

  // network_security_group_id - computed: true, optional: false, required: false
  public get networkSecurityGroupId() {
    return this.getStringAttribute('network_security_group_id');
  }

  // primary - computed: true, optional: false, required: false
  public get primary() {
    return this.getBooleanAttribute('primary');
  }
}

export class DataAzurermOrchestratedVirtualMachineScaleSetNetworkInterfaceList extends cdktf.ComplexList {

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
  public get(index: number): DataAzurermOrchestratedVirtualMachineScaleSetNetworkInterfaceOutputReference {
    return new DataAzurermOrchestratedVirtualMachineScaleSetNetworkInterfaceOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataAzurermOrchestratedVirtualMachineScaleSetTimeouts {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/data-sources/orchestrated_virtual_machine_scale_set#read DataAzurermOrchestratedVirtualMachineScaleSet#read}
  */
  readonly read?: string;
}

export function dataAzurermOrchestratedVirtualMachineScaleSetTimeoutsToTerraform(struct?: DataAzurermOrchestratedVirtualMachineScaleSetTimeouts | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    read: cdktf.stringToTerraform(struct!.read),
  }
}


export function dataAzurermOrchestratedVirtualMachineScaleSetTimeoutsToHclTerraform(struct?: DataAzurermOrchestratedVirtualMachineScaleSetTimeouts | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    read: {
      value: cdktf.stringToHclTerraform(struct!.read),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataAzurermOrchestratedVirtualMachineScaleSetTimeoutsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAzurermOrchestratedVirtualMachineScaleSetTimeouts | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._read !== undefined) {
      hasAnyValues = true;
      internalValueResult.read = this._read;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAzurermOrchestratedVirtualMachineScaleSetTimeouts | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._read = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._read = value.read;
    }
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
}

/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/data-sources/orchestrated_virtual_machine_scale_set azurerm_orchestrated_virtual_machine_scale_set}
*/
export class DataAzurermOrchestratedVirtualMachineScaleSet extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "azurerm_orchestrated_virtual_machine_scale_set";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataAzurermOrchestratedVirtualMachineScaleSet resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataAzurermOrchestratedVirtualMachineScaleSet to import
  * @param importFromId The id of the existing DataAzurermOrchestratedVirtualMachineScaleSet that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/data-sources/orchestrated_virtual_machine_scale_set#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataAzurermOrchestratedVirtualMachineScaleSet to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "azurerm_orchestrated_virtual_machine_scale_set", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/data-sources/orchestrated_virtual_machine_scale_set azurerm_orchestrated_virtual_machine_scale_set} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataAzurermOrchestratedVirtualMachineScaleSetConfig
  */
  public constructor(scope: Construct, id: string, config: DataAzurermOrchestratedVirtualMachineScaleSetConfig) {
    super(scope, id, {
      terraformResourceType: 'azurerm_orchestrated_virtual_machine_scale_set',
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
    this._name = config.name;
    this._resourceGroupName = config.resourceGroupName;
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

  // identity - computed: true, optional: false, required: false
  private _identity = new DataAzurermOrchestratedVirtualMachineScaleSetIdentityList(this, "identity", false);
  public get identity() {
    return this._identity;
  }

  // location - computed: true, optional: false, required: false
  public get location() {
    return this.getStringAttribute('location');
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
  private _networkInterface = new DataAzurermOrchestratedVirtualMachineScaleSetNetworkInterfaceList(this, "network_interface", false);
  public get networkInterface() {
    return this._networkInterface;
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

  // timeouts - computed: false, optional: true, required: false
  private _timeouts = new DataAzurermOrchestratedVirtualMachineScaleSetTimeoutsOutputReference(this, "timeouts");
  public get timeouts() {
    return this._timeouts;
  }
  public putTimeouts(value: DataAzurermOrchestratedVirtualMachineScaleSetTimeouts) {
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
      name: cdktf.stringToTerraform(this._name),
      resource_group_name: cdktf.stringToTerraform(this._resourceGroupName),
      timeouts: dataAzurermOrchestratedVirtualMachineScaleSetTimeoutsToTerraform(this._timeouts.internalValue),
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
      timeouts: {
        value: dataAzurermOrchestratedVirtualMachineScaleSetTimeoutsToHclTerraform(this._timeouts.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "DataAzurermOrchestratedVirtualMachineScaleSetTimeouts",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
