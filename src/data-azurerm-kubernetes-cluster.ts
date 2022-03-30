// https://www.terraform.io/docs/providers/azurerm/d/kubernetes_cluster
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataAzurermKubernetesClusterConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/d/kubernetes_cluster#name DataAzurermKubernetesCluster#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/d/kubernetes_cluster#resource_group_name DataAzurermKubernetesCluster#resource_group_name}
  */
  readonly resourceGroupName: string;
  /**
  * timeouts block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/d/kubernetes_cluster#timeouts DataAzurermKubernetesCluster#timeouts}
  */
  readonly timeouts?: DataAzurermKubernetesClusterTimeouts;
}
export interface DataAzurermKubernetesClusterAciConnectorLinux {
}

export function dataAzurermKubernetesClusterAciConnectorLinuxToTerraform(struct?: DataAzurermKubernetesClusterAciConnectorLinux): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}

export class DataAzurermKubernetesClusterAciConnectorLinuxOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataAzurermKubernetesClusterAciConnectorLinux | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAzurermKubernetesClusterAciConnectorLinux | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // subnet_name - computed: true, optional: false, required: false
  public get subnetName() {
    return this.getStringAttribute('subnet_name');
  }
}

export class DataAzurermKubernetesClusterAciConnectorLinuxList extends cdktf.ComplexList {

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
  public get(index: number): DataAzurermKubernetesClusterAciConnectorLinuxOutputReference {
    return new DataAzurermKubernetesClusterAciConnectorLinuxOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataAzurermKubernetesClusterAddonProfileAzureKeyvaultSecretsProviderSecretIdentity {
}

export function dataAzurermKubernetesClusterAddonProfileAzureKeyvaultSecretsProviderSecretIdentityToTerraform(struct?: DataAzurermKubernetesClusterAddonProfileAzureKeyvaultSecretsProviderSecretIdentity): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}

export class DataAzurermKubernetesClusterAddonProfileAzureKeyvaultSecretsProviderSecretIdentityOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataAzurermKubernetesClusterAddonProfileAzureKeyvaultSecretsProviderSecretIdentity | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAzurermKubernetesClusterAddonProfileAzureKeyvaultSecretsProviderSecretIdentity | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // client_id - computed: true, optional: false, required: false
  public get clientId() {
    return this.getStringAttribute('client_id');
  }

  // object_id - computed: true, optional: false, required: false
  public get objectId() {
    return this.getStringAttribute('object_id');
  }

  // user_assigned_identity_id - computed: true, optional: false, required: false
  public get userAssignedIdentityId() {
    return this.getStringAttribute('user_assigned_identity_id');
  }
}

export class DataAzurermKubernetesClusterAddonProfileAzureKeyvaultSecretsProviderSecretIdentityList extends cdktf.ComplexList {

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
  public get(index: number): DataAzurermKubernetesClusterAddonProfileAzureKeyvaultSecretsProviderSecretIdentityOutputReference {
    return new DataAzurermKubernetesClusterAddonProfileAzureKeyvaultSecretsProviderSecretIdentityOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataAzurermKubernetesClusterAddonProfileAzureKeyvaultSecretsProvider {
}

export function dataAzurermKubernetesClusterAddonProfileAzureKeyvaultSecretsProviderToTerraform(struct?: DataAzurermKubernetesClusterAddonProfileAzureKeyvaultSecretsProvider): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}

export class DataAzurermKubernetesClusterAddonProfileAzureKeyvaultSecretsProviderOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataAzurermKubernetesClusterAddonProfileAzureKeyvaultSecretsProvider | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAzurermKubernetesClusterAddonProfileAzureKeyvaultSecretsProvider | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // enabled - computed: true, optional: false, required: false
  public get enabled() {
    return this.getBooleanAttribute('enabled');
  }

  // secret_identity - computed: true, optional: false, required: false
  private _secretIdentity = new DataAzurermKubernetesClusterAddonProfileAzureKeyvaultSecretsProviderSecretIdentityList(this, "secret_identity", false);
  public get secretIdentity() {
    return this._secretIdentity;
  }

  // secret_rotation_enabled - computed: true, optional: false, required: false
  public get secretRotationEnabled() {
    return this.getStringAttribute('secret_rotation_enabled');
  }

  // secret_rotation_interval - computed: true, optional: false, required: false
  public get secretRotationInterval() {
    return this.getStringAttribute('secret_rotation_interval');
  }
}

export class DataAzurermKubernetesClusterAddonProfileAzureKeyvaultSecretsProviderList extends cdktf.ComplexList {

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
  public get(index: number): DataAzurermKubernetesClusterAddonProfileAzureKeyvaultSecretsProviderOutputReference {
    return new DataAzurermKubernetesClusterAddonProfileAzureKeyvaultSecretsProviderOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataAzurermKubernetesClusterAddonProfileAzurePolicy {
}

export function dataAzurermKubernetesClusterAddonProfileAzurePolicyToTerraform(struct?: DataAzurermKubernetesClusterAddonProfileAzurePolicy): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}

export class DataAzurermKubernetesClusterAddonProfileAzurePolicyOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataAzurermKubernetesClusterAddonProfileAzurePolicy | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAzurermKubernetesClusterAddonProfileAzurePolicy | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // enabled - computed: true, optional: false, required: false
  public get enabled() {
    return this.getBooleanAttribute('enabled');
  }
}

export class DataAzurermKubernetesClusterAddonProfileAzurePolicyList extends cdktf.ComplexList {

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
  public get(index: number): DataAzurermKubernetesClusterAddonProfileAzurePolicyOutputReference {
    return new DataAzurermKubernetesClusterAddonProfileAzurePolicyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataAzurermKubernetesClusterAddonProfileHttpApplicationRouting {
}

export function dataAzurermKubernetesClusterAddonProfileHttpApplicationRoutingToTerraform(struct?: DataAzurermKubernetesClusterAddonProfileHttpApplicationRouting): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}

export class DataAzurermKubernetesClusterAddonProfileHttpApplicationRoutingOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataAzurermKubernetesClusterAddonProfileHttpApplicationRouting | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAzurermKubernetesClusterAddonProfileHttpApplicationRouting | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // enabled - computed: true, optional: false, required: false
  public get enabled() {
    return this.getBooleanAttribute('enabled');
  }

  // http_application_routing_zone_name - computed: true, optional: false, required: false
  public get httpApplicationRoutingZoneName() {
    return this.getStringAttribute('http_application_routing_zone_name');
  }
}

export class DataAzurermKubernetesClusterAddonProfileHttpApplicationRoutingList extends cdktf.ComplexList {

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
  public get(index: number): DataAzurermKubernetesClusterAddonProfileHttpApplicationRoutingOutputReference {
    return new DataAzurermKubernetesClusterAddonProfileHttpApplicationRoutingOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataAzurermKubernetesClusterAddonProfileIngressApplicationGatewayIngressApplicationGatewayIdentity {
}

export function dataAzurermKubernetesClusterAddonProfileIngressApplicationGatewayIngressApplicationGatewayIdentityToTerraform(struct?: DataAzurermKubernetesClusterAddonProfileIngressApplicationGatewayIngressApplicationGatewayIdentity): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}

export class DataAzurermKubernetesClusterAddonProfileIngressApplicationGatewayIngressApplicationGatewayIdentityOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataAzurermKubernetesClusterAddonProfileIngressApplicationGatewayIngressApplicationGatewayIdentity | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAzurermKubernetesClusterAddonProfileIngressApplicationGatewayIngressApplicationGatewayIdentity | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // client_id - computed: true, optional: false, required: false
  public get clientId() {
    return this.getStringAttribute('client_id');
  }

  // object_id - computed: true, optional: false, required: false
  public get objectId() {
    return this.getStringAttribute('object_id');
  }

  // user_assigned_identity_id - computed: true, optional: false, required: false
  public get userAssignedIdentityId() {
    return this.getStringAttribute('user_assigned_identity_id');
  }
}

export class DataAzurermKubernetesClusterAddonProfileIngressApplicationGatewayIngressApplicationGatewayIdentityList extends cdktf.ComplexList {

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
  public get(index: number): DataAzurermKubernetesClusterAddonProfileIngressApplicationGatewayIngressApplicationGatewayIdentityOutputReference {
    return new DataAzurermKubernetesClusterAddonProfileIngressApplicationGatewayIngressApplicationGatewayIdentityOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataAzurermKubernetesClusterAddonProfileIngressApplicationGateway {
}

export function dataAzurermKubernetesClusterAddonProfileIngressApplicationGatewayToTerraform(struct?: DataAzurermKubernetesClusterAddonProfileIngressApplicationGateway): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}

export class DataAzurermKubernetesClusterAddonProfileIngressApplicationGatewayOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataAzurermKubernetesClusterAddonProfileIngressApplicationGateway | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAzurermKubernetesClusterAddonProfileIngressApplicationGateway | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // effective_gateway_id - computed: true, optional: false, required: false
  public get effectiveGatewayId() {
    return this.getStringAttribute('effective_gateway_id');
  }

  // enabled - computed: true, optional: false, required: false
  public get enabled() {
    return this.getBooleanAttribute('enabled');
  }

  // gateway_id - computed: true, optional: false, required: false
  public get gatewayId() {
    return this.getStringAttribute('gateway_id');
  }

  // ingress_application_gateway_identity - computed: true, optional: false, required: false
  private _ingressApplicationGatewayIdentity = new DataAzurermKubernetesClusterAddonProfileIngressApplicationGatewayIngressApplicationGatewayIdentityList(this, "ingress_application_gateway_identity", false);
  public get ingressApplicationGatewayIdentity() {
    return this._ingressApplicationGatewayIdentity;
  }

  // subnet_cidr - computed: true, optional: false, required: false
  public get subnetCidr() {
    return this.getStringAttribute('subnet_cidr');
  }

  // subnet_id - computed: true, optional: false, required: false
  public get subnetId() {
    return this.getStringAttribute('subnet_id');
  }
}

export class DataAzurermKubernetesClusterAddonProfileIngressApplicationGatewayList extends cdktf.ComplexList {

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
  public get(index: number): DataAzurermKubernetesClusterAddonProfileIngressApplicationGatewayOutputReference {
    return new DataAzurermKubernetesClusterAddonProfileIngressApplicationGatewayOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataAzurermKubernetesClusterAddonProfileKubeDashboard {
}

export function dataAzurermKubernetesClusterAddonProfileKubeDashboardToTerraform(struct?: DataAzurermKubernetesClusterAddonProfileKubeDashboard): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}

export class DataAzurermKubernetesClusterAddonProfileKubeDashboardOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataAzurermKubernetesClusterAddonProfileKubeDashboard | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAzurermKubernetesClusterAddonProfileKubeDashboard | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // enabled - computed: true, optional: false, required: false
  public get enabled() {
    return this.getBooleanAttribute('enabled');
  }
}

export class DataAzurermKubernetesClusterAddonProfileKubeDashboardList extends cdktf.ComplexList {

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
  public get(index: number): DataAzurermKubernetesClusterAddonProfileKubeDashboardOutputReference {
    return new DataAzurermKubernetesClusterAddonProfileKubeDashboardOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataAzurermKubernetesClusterAddonProfileOmsAgentOmsAgentIdentity {
}

export function dataAzurermKubernetesClusterAddonProfileOmsAgentOmsAgentIdentityToTerraform(struct?: DataAzurermKubernetesClusterAddonProfileOmsAgentOmsAgentIdentity): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}

export class DataAzurermKubernetesClusterAddonProfileOmsAgentOmsAgentIdentityOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataAzurermKubernetesClusterAddonProfileOmsAgentOmsAgentIdentity | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAzurermKubernetesClusterAddonProfileOmsAgentOmsAgentIdentity | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // client_id - computed: true, optional: false, required: false
  public get clientId() {
    return this.getStringAttribute('client_id');
  }

  // object_id - computed: true, optional: false, required: false
  public get objectId() {
    return this.getStringAttribute('object_id');
  }

  // user_assigned_identity_id - computed: true, optional: false, required: false
  public get userAssignedIdentityId() {
    return this.getStringAttribute('user_assigned_identity_id');
  }
}

export class DataAzurermKubernetesClusterAddonProfileOmsAgentOmsAgentIdentityList extends cdktf.ComplexList {

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
  public get(index: number): DataAzurermKubernetesClusterAddonProfileOmsAgentOmsAgentIdentityOutputReference {
    return new DataAzurermKubernetesClusterAddonProfileOmsAgentOmsAgentIdentityOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataAzurermKubernetesClusterAddonProfileOmsAgent {
}

export function dataAzurermKubernetesClusterAddonProfileOmsAgentToTerraform(struct?: DataAzurermKubernetesClusterAddonProfileOmsAgent): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}

export class DataAzurermKubernetesClusterAddonProfileOmsAgentOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataAzurermKubernetesClusterAddonProfileOmsAgent | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAzurermKubernetesClusterAddonProfileOmsAgent | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // enabled - computed: true, optional: false, required: false
  public get enabled() {
    return this.getBooleanAttribute('enabled');
  }

  // log_analytics_workspace_id - computed: true, optional: false, required: false
  public get logAnalyticsWorkspaceId() {
    return this.getStringAttribute('log_analytics_workspace_id');
  }

  // oms_agent_identity - computed: true, optional: false, required: false
  private _omsAgentIdentity = new DataAzurermKubernetesClusterAddonProfileOmsAgentOmsAgentIdentityList(this, "oms_agent_identity", false);
  public get omsAgentIdentity() {
    return this._omsAgentIdentity;
  }
}

export class DataAzurermKubernetesClusterAddonProfileOmsAgentList extends cdktf.ComplexList {

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
  public get(index: number): DataAzurermKubernetesClusterAddonProfileOmsAgentOutputReference {
    return new DataAzurermKubernetesClusterAddonProfileOmsAgentOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataAzurermKubernetesClusterAddonProfileOpenServiceMesh {
}

export function dataAzurermKubernetesClusterAddonProfileOpenServiceMeshToTerraform(struct?: DataAzurermKubernetesClusterAddonProfileOpenServiceMesh): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}

export class DataAzurermKubernetesClusterAddonProfileOpenServiceMeshOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataAzurermKubernetesClusterAddonProfileOpenServiceMesh | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAzurermKubernetesClusterAddonProfileOpenServiceMesh | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // enabled - computed: true, optional: false, required: false
  public get enabled() {
    return this.getBooleanAttribute('enabled');
  }
}

export class DataAzurermKubernetesClusterAddonProfileOpenServiceMeshList extends cdktf.ComplexList {

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
  public get(index: number): DataAzurermKubernetesClusterAddonProfileOpenServiceMeshOutputReference {
    return new DataAzurermKubernetesClusterAddonProfileOpenServiceMeshOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataAzurermKubernetesClusterAddonProfile {
}

export function dataAzurermKubernetesClusterAddonProfileToTerraform(struct?: DataAzurermKubernetesClusterAddonProfile): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}

export class DataAzurermKubernetesClusterAddonProfileOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataAzurermKubernetesClusterAddonProfile | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAzurermKubernetesClusterAddonProfile | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // azure_keyvault_secrets_provider - computed: true, optional: false, required: false
  private _azureKeyvaultSecretsProvider = new DataAzurermKubernetesClusterAddonProfileAzureKeyvaultSecretsProviderList(this, "azure_keyvault_secrets_provider", false);
  public get azureKeyvaultSecretsProvider() {
    return this._azureKeyvaultSecretsProvider;
  }

  // azure_policy - computed: true, optional: false, required: false
  private _azurePolicy = new DataAzurermKubernetesClusterAddonProfileAzurePolicyList(this, "azure_policy", false);
  public get azurePolicy() {
    return this._azurePolicy;
  }

  // http_application_routing - computed: true, optional: false, required: false
  private _httpApplicationRouting = new DataAzurermKubernetesClusterAddonProfileHttpApplicationRoutingList(this, "http_application_routing", false);
  public get httpApplicationRouting() {
    return this._httpApplicationRouting;
  }

  // ingress_application_gateway - computed: true, optional: false, required: false
  private _ingressApplicationGateway = new DataAzurermKubernetesClusterAddonProfileIngressApplicationGatewayList(this, "ingress_application_gateway", false);
  public get ingressApplicationGateway() {
    return this._ingressApplicationGateway;
  }

  // kube_dashboard - computed: true, optional: false, required: false
  private _kubeDashboard = new DataAzurermKubernetesClusterAddonProfileKubeDashboardList(this, "kube_dashboard", false);
  public get kubeDashboard() {
    return this._kubeDashboard;
  }

  // oms_agent - computed: true, optional: false, required: false
  private _omsAgent = new DataAzurermKubernetesClusterAddonProfileOmsAgentList(this, "oms_agent", false);
  public get omsAgent() {
    return this._omsAgent;
  }

  // open_service_mesh - computed: true, optional: false, required: false
  private _openServiceMesh = new DataAzurermKubernetesClusterAddonProfileOpenServiceMeshList(this, "open_service_mesh", false);
  public get openServiceMesh() {
    return this._openServiceMesh;
  }
}

export class DataAzurermKubernetesClusterAddonProfileList extends cdktf.ComplexList {

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
  public get(index: number): DataAzurermKubernetesClusterAddonProfileOutputReference {
    return new DataAzurermKubernetesClusterAddonProfileOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataAzurermKubernetesClusterAgentPoolProfileUpgradeSettings {
}

export function dataAzurermKubernetesClusterAgentPoolProfileUpgradeSettingsToTerraform(struct?: DataAzurermKubernetesClusterAgentPoolProfileUpgradeSettings): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}

export class DataAzurermKubernetesClusterAgentPoolProfileUpgradeSettingsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataAzurermKubernetesClusterAgentPoolProfileUpgradeSettings | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAzurermKubernetesClusterAgentPoolProfileUpgradeSettings | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // max_surge - computed: true, optional: false, required: false
  public get maxSurge() {
    return this.getStringAttribute('max_surge');
  }
}

export class DataAzurermKubernetesClusterAgentPoolProfileUpgradeSettingsList extends cdktf.ComplexList {

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
  public get(index: number): DataAzurermKubernetesClusterAgentPoolProfileUpgradeSettingsOutputReference {
    return new DataAzurermKubernetesClusterAgentPoolProfileUpgradeSettingsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataAzurermKubernetesClusterAgentPoolProfile {
}

export function dataAzurermKubernetesClusterAgentPoolProfileToTerraform(struct?: DataAzurermKubernetesClusterAgentPoolProfile): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}

export class DataAzurermKubernetesClusterAgentPoolProfileOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataAzurermKubernetesClusterAgentPoolProfile | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAzurermKubernetesClusterAgentPoolProfile | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // availability_zones - computed: true, optional: false, required: false
  public get availabilityZones() {
    return this.getListAttribute('availability_zones');
  }

  // count - computed: true, optional: false, required: false
  public get count() {
    return this.getNumberAttribute('count');
  }

  // enable_auto_scaling - computed: true, optional: false, required: false
  public get enableAutoScaling() {
    return this.getBooleanAttribute('enable_auto_scaling');
  }

  // enable_node_public_ip - computed: true, optional: false, required: false
  public get enableNodePublicIp() {
    return this.getBooleanAttribute('enable_node_public_ip');
  }

  // max_count - computed: true, optional: false, required: false
  public get maxCount() {
    return this.getNumberAttribute('max_count');
  }

  // max_pods - computed: true, optional: false, required: false
  public get maxPods() {
    return this.getNumberAttribute('max_pods');
  }

  // min_count - computed: true, optional: false, required: false
  public get minCount() {
    return this.getNumberAttribute('min_count');
  }

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }

  // node_labels - computed: true, optional: false, required: false
  public nodeLabels(key: string): string | cdktf.IResolvable {
    return new cdktf.StringMap(this, 'node_labels').lookup(key);
  }

  // node_public_ip_prefix_id - computed: true, optional: false, required: false
  public get nodePublicIpPrefixId() {
    return this.getStringAttribute('node_public_ip_prefix_id');
  }

  // node_taints - computed: true, optional: false, required: false
  public get nodeTaints() {
    return this.getListAttribute('node_taints');
  }

  // orchestrator_version - computed: true, optional: false, required: false
  public get orchestratorVersion() {
    return this.getStringAttribute('orchestrator_version');
  }

  // os_disk_size_gb - computed: true, optional: false, required: false
  public get osDiskSizeGb() {
    return this.getNumberAttribute('os_disk_size_gb');
  }

  // os_type - computed: true, optional: false, required: false
  public get osType() {
    return this.getStringAttribute('os_type');
  }

  // tags - computed: true, optional: false, required: false
  public tags(key: string): string | cdktf.IResolvable {
    return new cdktf.StringMap(this, 'tags').lookup(key);
  }

  // type - computed: true, optional: false, required: false
  public get type() {
    return this.getStringAttribute('type');
  }

  // upgrade_settings - computed: true, optional: false, required: false
  private _upgradeSettings = new DataAzurermKubernetesClusterAgentPoolProfileUpgradeSettingsList(this, "upgrade_settings", false);
  public get upgradeSettings() {
    return this._upgradeSettings;
  }

  // vm_size - computed: true, optional: false, required: false
  public get vmSize() {
    return this.getStringAttribute('vm_size');
  }

  // vnet_subnet_id - computed: true, optional: false, required: false
  public get vnetSubnetId() {
    return this.getStringAttribute('vnet_subnet_id');
  }

  // zones - computed: true, optional: false, required: false
  public get zones() {
    return this.getListAttribute('zones');
  }
}

export class DataAzurermKubernetesClusterAgentPoolProfileList extends cdktf.ComplexList {

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
  public get(index: number): DataAzurermKubernetesClusterAgentPoolProfileOutputReference {
    return new DataAzurermKubernetesClusterAgentPoolProfileOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataAzurermKubernetesClusterAzureActiveDirectoryRoleBasedAccessControl {
}

export function dataAzurermKubernetesClusterAzureActiveDirectoryRoleBasedAccessControlToTerraform(struct?: DataAzurermKubernetesClusterAzureActiveDirectoryRoleBasedAccessControl): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}

export class DataAzurermKubernetesClusterAzureActiveDirectoryRoleBasedAccessControlOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataAzurermKubernetesClusterAzureActiveDirectoryRoleBasedAccessControl | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAzurermKubernetesClusterAzureActiveDirectoryRoleBasedAccessControl | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // admin_group_object_ids - computed: true, optional: false, required: false
  public get adminGroupObjectIds() {
    return this.getListAttribute('admin_group_object_ids');
  }

  // azure_rbac_enabled - computed: true, optional: false, required: false
  public get azureRbacEnabled() {
    return this.getBooleanAttribute('azure_rbac_enabled');
  }

  // client_app_id - computed: true, optional: false, required: false
  public get clientAppId() {
    return this.getStringAttribute('client_app_id');
  }

  // managed - computed: true, optional: false, required: false
  public get managed() {
    return this.getBooleanAttribute('managed');
  }

  // server_app_id - computed: true, optional: false, required: false
  public get serverAppId() {
    return this.getStringAttribute('server_app_id');
  }

  // tenant_id - computed: true, optional: false, required: false
  public get tenantId() {
    return this.getStringAttribute('tenant_id');
  }
}

export class DataAzurermKubernetesClusterAzureActiveDirectoryRoleBasedAccessControlList extends cdktf.ComplexList {

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
  public get(index: number): DataAzurermKubernetesClusterAzureActiveDirectoryRoleBasedAccessControlOutputReference {
    return new DataAzurermKubernetesClusterAzureActiveDirectoryRoleBasedAccessControlOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataAzurermKubernetesClusterIdentity {
}

export function dataAzurermKubernetesClusterIdentityToTerraform(struct?: DataAzurermKubernetesClusterIdentity): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}

export class DataAzurermKubernetesClusterIdentityOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataAzurermKubernetesClusterIdentity | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAzurermKubernetesClusterIdentity | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
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

  // user_assigned_identity_id - computed: true, optional: false, required: false
  public get userAssignedIdentityId() {
    return this.getStringAttribute('user_assigned_identity_id');
  }
}

export class DataAzurermKubernetesClusterIdentityList extends cdktf.ComplexList {

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
  public get(index: number): DataAzurermKubernetesClusterIdentityOutputReference {
    return new DataAzurermKubernetesClusterIdentityOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataAzurermKubernetesClusterIngressApplicationGatewayIngressApplicationGatewayIdentity {
}

export function dataAzurermKubernetesClusterIngressApplicationGatewayIngressApplicationGatewayIdentityToTerraform(struct?: DataAzurermKubernetesClusterIngressApplicationGatewayIngressApplicationGatewayIdentity): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}

export class DataAzurermKubernetesClusterIngressApplicationGatewayIngressApplicationGatewayIdentityOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataAzurermKubernetesClusterIngressApplicationGatewayIngressApplicationGatewayIdentity | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAzurermKubernetesClusterIngressApplicationGatewayIngressApplicationGatewayIdentity | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // client_id - computed: true, optional: false, required: false
  public get clientId() {
    return this.getStringAttribute('client_id');
  }

  // object_id - computed: true, optional: false, required: false
  public get objectId() {
    return this.getStringAttribute('object_id');
  }

  // user_assigned_identity_id - computed: true, optional: false, required: false
  public get userAssignedIdentityId() {
    return this.getStringAttribute('user_assigned_identity_id');
  }
}

export class DataAzurermKubernetesClusterIngressApplicationGatewayIngressApplicationGatewayIdentityList extends cdktf.ComplexList {

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
  public get(index: number): DataAzurermKubernetesClusterIngressApplicationGatewayIngressApplicationGatewayIdentityOutputReference {
    return new DataAzurermKubernetesClusterIngressApplicationGatewayIngressApplicationGatewayIdentityOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataAzurermKubernetesClusterIngressApplicationGateway {
}

export function dataAzurermKubernetesClusterIngressApplicationGatewayToTerraform(struct?: DataAzurermKubernetesClusterIngressApplicationGateway): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}

export class DataAzurermKubernetesClusterIngressApplicationGatewayOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataAzurermKubernetesClusterIngressApplicationGateway | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAzurermKubernetesClusterIngressApplicationGateway | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // effective_gateway_id - computed: true, optional: false, required: false
  public get effectiveGatewayId() {
    return this.getStringAttribute('effective_gateway_id');
  }

  // gateway_id - computed: true, optional: false, required: false
  public get gatewayId() {
    return this.getStringAttribute('gateway_id');
  }

  // gateway_name - computed: true, optional: false, required: false
  public get gatewayName() {
    return this.getStringAttribute('gateway_name');
  }

  // ingress_application_gateway_identity - computed: true, optional: false, required: false
  private _ingressApplicationGatewayIdentity = new DataAzurermKubernetesClusterIngressApplicationGatewayIngressApplicationGatewayIdentityList(this, "ingress_application_gateway_identity", false);
  public get ingressApplicationGatewayIdentity() {
    return this._ingressApplicationGatewayIdentity;
  }

  // subnet_cidr - computed: true, optional: false, required: false
  public get subnetCidr() {
    return this.getStringAttribute('subnet_cidr');
  }

  // subnet_id - computed: true, optional: false, required: false
  public get subnetId() {
    return this.getStringAttribute('subnet_id');
  }
}

export class DataAzurermKubernetesClusterIngressApplicationGatewayList extends cdktf.ComplexList {

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
  public get(index: number): DataAzurermKubernetesClusterIngressApplicationGatewayOutputReference {
    return new DataAzurermKubernetesClusterIngressApplicationGatewayOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataAzurermKubernetesClusterKeyVaultSecretsProviderSecretIdentity {
}

export function dataAzurermKubernetesClusterKeyVaultSecretsProviderSecretIdentityToTerraform(struct?: DataAzurermKubernetesClusterKeyVaultSecretsProviderSecretIdentity): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}

export class DataAzurermKubernetesClusterKeyVaultSecretsProviderSecretIdentityOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataAzurermKubernetesClusterKeyVaultSecretsProviderSecretIdentity | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAzurermKubernetesClusterKeyVaultSecretsProviderSecretIdentity | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // client_id - computed: true, optional: false, required: false
  public get clientId() {
    return this.getStringAttribute('client_id');
  }

  // object_id - computed: true, optional: false, required: false
  public get objectId() {
    return this.getStringAttribute('object_id');
  }

  // user_assigned_identity_id - computed: true, optional: false, required: false
  public get userAssignedIdentityId() {
    return this.getStringAttribute('user_assigned_identity_id');
  }
}

export class DataAzurermKubernetesClusterKeyVaultSecretsProviderSecretIdentityList extends cdktf.ComplexList {

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
  public get(index: number): DataAzurermKubernetesClusterKeyVaultSecretsProviderSecretIdentityOutputReference {
    return new DataAzurermKubernetesClusterKeyVaultSecretsProviderSecretIdentityOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataAzurermKubernetesClusterKeyVaultSecretsProvider {
}

export function dataAzurermKubernetesClusterKeyVaultSecretsProviderToTerraform(struct?: DataAzurermKubernetesClusterKeyVaultSecretsProvider): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}

export class DataAzurermKubernetesClusterKeyVaultSecretsProviderOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataAzurermKubernetesClusterKeyVaultSecretsProvider | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAzurermKubernetesClusterKeyVaultSecretsProvider | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // secret_identity - computed: true, optional: false, required: false
  private _secretIdentity = new DataAzurermKubernetesClusterKeyVaultSecretsProviderSecretIdentityList(this, "secret_identity", false);
  public get secretIdentity() {
    return this._secretIdentity;
  }

  // secret_rotation_enabled - computed: true, optional: false, required: false
  public get secretRotationEnabled() {
    return this.getBooleanAttribute('secret_rotation_enabled');
  }

  // secret_rotation_interval - computed: true, optional: false, required: false
  public get secretRotationInterval() {
    return this.getStringAttribute('secret_rotation_interval');
  }
}

export class DataAzurermKubernetesClusterKeyVaultSecretsProviderList extends cdktf.ComplexList {

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
  public get(index: number): DataAzurermKubernetesClusterKeyVaultSecretsProviderOutputReference {
    return new DataAzurermKubernetesClusterKeyVaultSecretsProviderOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataAzurermKubernetesClusterKubeAdminConfig {
}

export function dataAzurermKubernetesClusterKubeAdminConfigToTerraform(struct?: DataAzurermKubernetesClusterKubeAdminConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}

export class DataAzurermKubernetesClusterKubeAdminConfigOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataAzurermKubernetesClusterKubeAdminConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAzurermKubernetesClusterKubeAdminConfig | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // client_certificate - computed: true, optional: false, required: false
  public get clientCertificate() {
    return this.getStringAttribute('client_certificate');
  }

  // client_key - computed: true, optional: false, required: false
  public get clientKey() {
    return this.getStringAttribute('client_key');
  }

  // cluster_ca_certificate - computed: true, optional: false, required: false
  public get clusterCaCertificate() {
    return this.getStringAttribute('cluster_ca_certificate');
  }

  // host - computed: true, optional: false, required: false
  public get host() {
    return this.getStringAttribute('host');
  }

  // password - computed: true, optional: false, required: false
  public get password() {
    return this.getStringAttribute('password');
  }

  // username - computed: true, optional: false, required: false
  public get username() {
    return this.getStringAttribute('username');
  }
}

export class DataAzurermKubernetesClusterKubeAdminConfigList extends cdktf.ComplexList {

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
  public get(index: number): DataAzurermKubernetesClusterKubeAdminConfigOutputReference {
    return new DataAzurermKubernetesClusterKubeAdminConfigOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataAzurermKubernetesClusterKubeConfig {
}

export function dataAzurermKubernetesClusterKubeConfigToTerraform(struct?: DataAzurermKubernetesClusterKubeConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}

export class DataAzurermKubernetesClusterKubeConfigOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataAzurermKubernetesClusterKubeConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAzurermKubernetesClusterKubeConfig | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // client_certificate - computed: true, optional: false, required: false
  public get clientCertificate() {
    return this.getStringAttribute('client_certificate');
  }

  // client_key - computed: true, optional: false, required: false
  public get clientKey() {
    return this.getStringAttribute('client_key');
  }

  // cluster_ca_certificate - computed: true, optional: false, required: false
  public get clusterCaCertificate() {
    return this.getStringAttribute('cluster_ca_certificate');
  }

  // host - computed: true, optional: false, required: false
  public get host() {
    return this.getStringAttribute('host');
  }

  // password - computed: true, optional: false, required: false
  public get password() {
    return this.getStringAttribute('password');
  }

  // username - computed: true, optional: false, required: false
  public get username() {
    return this.getStringAttribute('username');
  }
}

export class DataAzurermKubernetesClusterKubeConfigList extends cdktf.ComplexList {

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
  public get(index: number): DataAzurermKubernetesClusterKubeConfigOutputReference {
    return new DataAzurermKubernetesClusterKubeConfigOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataAzurermKubernetesClusterKubeletIdentity {
}

export function dataAzurermKubernetesClusterKubeletIdentityToTerraform(struct?: DataAzurermKubernetesClusterKubeletIdentity): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}

export class DataAzurermKubernetesClusterKubeletIdentityOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataAzurermKubernetesClusterKubeletIdentity | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAzurermKubernetesClusterKubeletIdentity | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // client_id - computed: true, optional: false, required: false
  public get clientId() {
    return this.getStringAttribute('client_id');
  }

  // object_id - computed: true, optional: false, required: false
  public get objectId() {
    return this.getStringAttribute('object_id');
  }

  // user_assigned_identity_id - computed: true, optional: false, required: false
  public get userAssignedIdentityId() {
    return this.getStringAttribute('user_assigned_identity_id');
  }
}

export class DataAzurermKubernetesClusterKubeletIdentityList extends cdktf.ComplexList {

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
  public get(index: number): DataAzurermKubernetesClusterKubeletIdentityOutputReference {
    return new DataAzurermKubernetesClusterKubeletIdentityOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataAzurermKubernetesClusterLinuxProfileSshKey {
}

export function dataAzurermKubernetesClusterLinuxProfileSshKeyToTerraform(struct?: DataAzurermKubernetesClusterLinuxProfileSshKey): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}

export class DataAzurermKubernetesClusterLinuxProfileSshKeyOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataAzurermKubernetesClusterLinuxProfileSshKey | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAzurermKubernetesClusterLinuxProfileSshKey | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // key_data - computed: true, optional: false, required: false
  public get keyData() {
    return this.getStringAttribute('key_data');
  }
}

export class DataAzurermKubernetesClusterLinuxProfileSshKeyList extends cdktf.ComplexList {

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
  public get(index: number): DataAzurermKubernetesClusterLinuxProfileSshKeyOutputReference {
    return new DataAzurermKubernetesClusterLinuxProfileSshKeyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataAzurermKubernetesClusterLinuxProfile {
}

export function dataAzurermKubernetesClusterLinuxProfileToTerraform(struct?: DataAzurermKubernetesClusterLinuxProfile): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}

export class DataAzurermKubernetesClusterLinuxProfileOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataAzurermKubernetesClusterLinuxProfile | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAzurermKubernetesClusterLinuxProfile | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // admin_username - computed: true, optional: false, required: false
  public get adminUsername() {
    return this.getStringAttribute('admin_username');
  }

  // ssh_key - computed: true, optional: false, required: false
  private _sshKey = new DataAzurermKubernetesClusterLinuxProfileSshKeyList(this, "ssh_key", false);
  public get sshKey() {
    return this._sshKey;
  }
}

export class DataAzurermKubernetesClusterLinuxProfileList extends cdktf.ComplexList {

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
  public get(index: number): DataAzurermKubernetesClusterLinuxProfileOutputReference {
    return new DataAzurermKubernetesClusterLinuxProfileOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataAzurermKubernetesClusterNetworkProfile {
}

export function dataAzurermKubernetesClusterNetworkProfileToTerraform(struct?: DataAzurermKubernetesClusterNetworkProfile): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}

export class DataAzurermKubernetesClusterNetworkProfileOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataAzurermKubernetesClusterNetworkProfile | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAzurermKubernetesClusterNetworkProfile | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // dns_service_ip - computed: true, optional: false, required: false
  public get dnsServiceIp() {
    return this.getStringAttribute('dns_service_ip');
  }

  // docker_bridge_cidr - computed: true, optional: false, required: false
  public get dockerBridgeCidr() {
    return this.getStringAttribute('docker_bridge_cidr');
  }

  // load_balancer_sku - computed: true, optional: false, required: false
  public get loadBalancerSku() {
    return this.getStringAttribute('load_balancer_sku');
  }

  // network_plugin - computed: true, optional: false, required: false
  public get networkPlugin() {
    return this.getStringAttribute('network_plugin');
  }

  // network_policy - computed: true, optional: false, required: false
  public get networkPolicy() {
    return this.getStringAttribute('network_policy');
  }

  // pod_cidr - computed: true, optional: false, required: false
  public get podCidr() {
    return this.getStringAttribute('pod_cidr');
  }

  // service_cidr - computed: true, optional: false, required: false
  public get serviceCidr() {
    return this.getStringAttribute('service_cidr');
  }
}

export class DataAzurermKubernetesClusterNetworkProfileList extends cdktf.ComplexList {

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
  public get(index: number): DataAzurermKubernetesClusterNetworkProfileOutputReference {
    return new DataAzurermKubernetesClusterNetworkProfileOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataAzurermKubernetesClusterOmsAgentOmsAgentIdentity {
}

export function dataAzurermKubernetesClusterOmsAgentOmsAgentIdentityToTerraform(struct?: DataAzurermKubernetesClusterOmsAgentOmsAgentIdentity): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}

export class DataAzurermKubernetesClusterOmsAgentOmsAgentIdentityOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataAzurermKubernetesClusterOmsAgentOmsAgentIdentity | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAzurermKubernetesClusterOmsAgentOmsAgentIdentity | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // client_id - computed: true, optional: false, required: false
  public get clientId() {
    return this.getStringAttribute('client_id');
  }

  // object_id - computed: true, optional: false, required: false
  public get objectId() {
    return this.getStringAttribute('object_id');
  }

  // user_assigned_identity_id - computed: true, optional: false, required: false
  public get userAssignedIdentityId() {
    return this.getStringAttribute('user_assigned_identity_id');
  }
}

export class DataAzurermKubernetesClusterOmsAgentOmsAgentIdentityList extends cdktf.ComplexList {

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
  public get(index: number): DataAzurermKubernetesClusterOmsAgentOmsAgentIdentityOutputReference {
    return new DataAzurermKubernetesClusterOmsAgentOmsAgentIdentityOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataAzurermKubernetesClusterOmsAgent {
}

export function dataAzurermKubernetesClusterOmsAgentToTerraform(struct?: DataAzurermKubernetesClusterOmsAgent): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}

export class DataAzurermKubernetesClusterOmsAgentOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataAzurermKubernetesClusterOmsAgent | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAzurermKubernetesClusterOmsAgent | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // log_analytics_workspace_id - computed: true, optional: false, required: false
  public get logAnalyticsWorkspaceId() {
    return this.getStringAttribute('log_analytics_workspace_id');
  }

  // oms_agent_identity - computed: true, optional: false, required: false
  private _omsAgentIdentity = new DataAzurermKubernetesClusterOmsAgentOmsAgentIdentityList(this, "oms_agent_identity", false);
  public get omsAgentIdentity() {
    return this._omsAgentIdentity;
  }
}

export class DataAzurermKubernetesClusterOmsAgentList extends cdktf.ComplexList {

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
  public get(index: number): DataAzurermKubernetesClusterOmsAgentOutputReference {
    return new DataAzurermKubernetesClusterOmsAgentOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataAzurermKubernetesClusterRoleBasedAccessControlAzureActiveDirectory {
}

export function dataAzurermKubernetesClusterRoleBasedAccessControlAzureActiveDirectoryToTerraform(struct?: DataAzurermKubernetesClusterRoleBasedAccessControlAzureActiveDirectory): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}

export class DataAzurermKubernetesClusterRoleBasedAccessControlAzureActiveDirectoryOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataAzurermKubernetesClusterRoleBasedAccessControlAzureActiveDirectory | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAzurermKubernetesClusterRoleBasedAccessControlAzureActiveDirectory | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // admin_group_object_ids - computed: true, optional: false, required: false
  public get adminGroupObjectIds() {
    return this.getListAttribute('admin_group_object_ids');
  }

  // client_app_id - computed: true, optional: false, required: false
  public get clientAppId() {
    return this.getStringAttribute('client_app_id');
  }

  // managed - computed: true, optional: false, required: false
  public get managed() {
    return this.getBooleanAttribute('managed');
  }

  // server_app_id - computed: true, optional: false, required: false
  public get serverAppId() {
    return this.getStringAttribute('server_app_id');
  }

  // tenant_id - computed: true, optional: false, required: false
  public get tenantId() {
    return this.getStringAttribute('tenant_id');
  }
}

export class DataAzurermKubernetesClusterRoleBasedAccessControlAzureActiveDirectoryList extends cdktf.ComplexList {

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
  public get(index: number): DataAzurermKubernetesClusterRoleBasedAccessControlAzureActiveDirectoryOutputReference {
    return new DataAzurermKubernetesClusterRoleBasedAccessControlAzureActiveDirectoryOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataAzurermKubernetesClusterRoleBasedAccessControl {
}

export function dataAzurermKubernetesClusterRoleBasedAccessControlToTerraform(struct?: DataAzurermKubernetesClusterRoleBasedAccessControl): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}

export class DataAzurermKubernetesClusterRoleBasedAccessControlOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataAzurermKubernetesClusterRoleBasedAccessControl | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAzurermKubernetesClusterRoleBasedAccessControl | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // azure_active_directory - computed: true, optional: false, required: false
  private _azureActiveDirectory = new DataAzurermKubernetesClusterRoleBasedAccessControlAzureActiveDirectoryList(this, "azure_active_directory", false);
  public get azureActiveDirectory() {
    return this._azureActiveDirectory;
  }

  // enabled - computed: true, optional: false, required: false
  public get enabled() {
    return this.getBooleanAttribute('enabled');
  }
}

export class DataAzurermKubernetesClusterRoleBasedAccessControlList extends cdktf.ComplexList {

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
  public get(index: number): DataAzurermKubernetesClusterRoleBasedAccessControlOutputReference {
    return new DataAzurermKubernetesClusterRoleBasedAccessControlOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataAzurermKubernetesClusterServicePrincipal {
}

export function dataAzurermKubernetesClusterServicePrincipalToTerraform(struct?: DataAzurermKubernetesClusterServicePrincipal): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}

export class DataAzurermKubernetesClusterServicePrincipalOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataAzurermKubernetesClusterServicePrincipal | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAzurermKubernetesClusterServicePrincipal | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // client_id - computed: true, optional: false, required: false
  public get clientId() {
    return this.getStringAttribute('client_id');
  }
}

export class DataAzurermKubernetesClusterServicePrincipalList extends cdktf.ComplexList {

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
  public get(index: number): DataAzurermKubernetesClusterServicePrincipalOutputReference {
    return new DataAzurermKubernetesClusterServicePrincipalOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataAzurermKubernetesClusterWindowsProfile {
}

export function dataAzurermKubernetesClusterWindowsProfileToTerraform(struct?: DataAzurermKubernetesClusterWindowsProfile): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}

export class DataAzurermKubernetesClusterWindowsProfileOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataAzurermKubernetesClusterWindowsProfile | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAzurermKubernetesClusterWindowsProfile | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // admin_username - computed: true, optional: false, required: false
  public get adminUsername() {
    return this.getStringAttribute('admin_username');
  }
}

export class DataAzurermKubernetesClusterWindowsProfileList extends cdktf.ComplexList {

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
  public get(index: number): DataAzurermKubernetesClusterWindowsProfileOutputReference {
    return new DataAzurermKubernetesClusterWindowsProfileOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataAzurermKubernetesClusterTimeouts {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/d/kubernetes_cluster#read DataAzurermKubernetesCluster#read}
  */
  readonly read?: string;
}

export function dataAzurermKubernetesClusterTimeoutsToTerraform(struct?: DataAzurermKubernetesClusterTimeoutsOutputReference | DataAzurermKubernetesClusterTimeouts | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    read: cdktf.stringToTerraform(struct!.read),
  }
}

export class DataAzurermKubernetesClusterTimeoutsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DataAzurermKubernetesClusterTimeouts | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._read !== undefined) {
      hasAnyValues = true;
      internalValueResult.read = this._read;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAzurermKubernetesClusterTimeouts | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._read = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
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
* Represents a {@link https://www.terraform.io/docs/providers/azurerm/d/kubernetes_cluster azurerm_kubernetes_cluster}
*/
export class DataAzurermKubernetesCluster extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "azurerm_kubernetes_cluster";

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://www.terraform.io/docs/providers/azurerm/d/kubernetes_cluster azurerm_kubernetes_cluster} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataAzurermKubernetesClusterConfig
  */
  public constructor(scope: Construct, id: string, config: DataAzurermKubernetesClusterConfig) {
    super(scope, id, {
      terraformResourceType: 'azurerm_kubernetes_cluster',
      terraformGeneratorMetadata: {
        providerName: 'azurerm',
        providerVersion: '2.99.0',
        providerVersionConstraint: '~> 2.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle
    });
    this._name = config.name;
    this._resourceGroupName = config.resourceGroupName;
    this._timeouts.internalValue = config.timeouts;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // aci_connector_linux - computed: true, optional: false, required: false
  private _aciConnectorLinux = new DataAzurermKubernetesClusterAciConnectorLinuxList(this, "aci_connector_linux", false);
  public get aciConnectorLinux() {
    return this._aciConnectorLinux;
  }

  // addon_profile - computed: true, optional: false, required: false
  private _addonProfile = new DataAzurermKubernetesClusterAddonProfileList(this, "addon_profile", false);
  public get addonProfile() {
    return this._addonProfile;
  }

  // agent_pool_profile - computed: true, optional: false, required: false
  private _agentPoolProfile = new DataAzurermKubernetesClusterAgentPoolProfileList(this, "agent_pool_profile", false);
  public get agentPoolProfile() {
    return this._agentPoolProfile;
  }

  // api_server_authorized_ip_ranges - computed: true, optional: false, required: false
  public get apiServerAuthorizedIpRanges() {
    return cdktf.Fn.tolist(this.getListAttribute('api_server_authorized_ip_ranges'));
  }

  // azure_active_directory_role_based_access_control - computed: true, optional: false, required: false
  private _azureActiveDirectoryRoleBasedAccessControl = new DataAzurermKubernetesClusterAzureActiveDirectoryRoleBasedAccessControlList(this, "azure_active_directory_role_based_access_control", false);
  public get azureActiveDirectoryRoleBasedAccessControl() {
    return this._azureActiveDirectoryRoleBasedAccessControl;
  }

  // azure_policy_enabled - computed: true, optional: false, required: false
  public get azurePolicyEnabled() {
    return this.getBooleanAttribute('azure_policy_enabled');
  }

  // disk_encryption_set_id - computed: true, optional: false, required: false
  public get diskEncryptionSetId() {
    return this.getStringAttribute('disk_encryption_set_id');
  }

  // dns_prefix - computed: true, optional: false, required: false
  public get dnsPrefix() {
    return this.getStringAttribute('dns_prefix');
  }

  // fqdn - computed: true, optional: false, required: false
  public get fqdn() {
    return this.getStringAttribute('fqdn');
  }

  // http_application_routing_enabled - computed: true, optional: false, required: false
  public get httpApplicationRoutingEnabled() {
    return this.getBooleanAttribute('http_application_routing_enabled');
  }

  // http_application_routing_zone_name - computed: true, optional: false, required: false
  public get httpApplicationRoutingZoneName() {
    return this.getStringAttribute('http_application_routing_zone_name');
  }

  // id - computed: true, optional: true, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // identity - computed: true, optional: false, required: false
  private _identity = new DataAzurermKubernetesClusterIdentityList(this, "identity", false);
  public get identity() {
    return this._identity;
  }

  // ingress_application_gateway - computed: true, optional: false, required: false
  private _ingressApplicationGateway = new DataAzurermKubernetesClusterIngressApplicationGatewayList(this, "ingress_application_gateway", false);
  public get ingressApplicationGateway() {
    return this._ingressApplicationGateway;
  }

  // key_vault_secrets_provider - computed: true, optional: false, required: false
  private _keyVaultSecretsProvider = new DataAzurermKubernetesClusterKeyVaultSecretsProviderList(this, "key_vault_secrets_provider", false);
  public get keyVaultSecretsProvider() {
    return this._keyVaultSecretsProvider;
  }

  // kube_admin_config - computed: true, optional: false, required: false
  private _kubeAdminConfig = new DataAzurermKubernetesClusterKubeAdminConfigList(this, "kube_admin_config", false);
  public get kubeAdminConfig() {
    return this._kubeAdminConfig;
  }

  // kube_admin_config_raw - computed: true, optional: false, required: false
  public get kubeAdminConfigRaw() {
    return this.getStringAttribute('kube_admin_config_raw');
  }

  // kube_config - computed: true, optional: false, required: false
  private _kubeConfig = new DataAzurermKubernetesClusterKubeConfigList(this, "kube_config", false);
  public get kubeConfig() {
    return this._kubeConfig;
  }

  // kube_config_raw - computed: true, optional: false, required: false
  public get kubeConfigRaw() {
    return this.getStringAttribute('kube_config_raw');
  }

  // kubelet_identity - computed: true, optional: false, required: false
  private _kubeletIdentity = new DataAzurermKubernetesClusterKubeletIdentityList(this, "kubelet_identity", false);
  public get kubeletIdentity() {
    return this._kubeletIdentity;
  }

  // kubernetes_version - computed: true, optional: false, required: false
  public get kubernetesVersion() {
    return this.getStringAttribute('kubernetes_version');
  }

  // linux_profile - computed: true, optional: false, required: false
  private _linuxProfile = new DataAzurermKubernetesClusterLinuxProfileList(this, "linux_profile", false);
  public get linuxProfile() {
    return this._linuxProfile;
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

  // network_profile - computed: true, optional: false, required: false
  private _networkProfile = new DataAzurermKubernetesClusterNetworkProfileList(this, "network_profile", false);
  public get networkProfile() {
    return this._networkProfile;
  }

  // node_resource_group - computed: true, optional: false, required: false
  public get nodeResourceGroup() {
    return this.getStringAttribute('node_resource_group');
  }

  // oms_agent - computed: true, optional: false, required: false
  private _omsAgent = new DataAzurermKubernetesClusterOmsAgentList(this, "oms_agent", false);
  public get omsAgent() {
    return this._omsAgent;
  }

  // open_service_mesh_enabled - computed: true, optional: false, required: false
  public get openServiceMeshEnabled() {
    return this.getBooleanAttribute('open_service_mesh_enabled');
  }

  // private_cluster_enabled - computed: true, optional: false, required: false
  public get privateClusterEnabled() {
    return this.getBooleanAttribute('private_cluster_enabled');
  }

  // private_fqdn - computed: true, optional: false, required: false
  public get privateFqdn() {
    return this.getStringAttribute('private_fqdn');
  }

  // private_link_enabled - computed: true, optional: false, required: false
  public get privateLinkEnabled() {
    return this.getBooleanAttribute('private_link_enabled');
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

  // role_based_access_control - computed: true, optional: false, required: false
  private _roleBasedAccessControl = new DataAzurermKubernetesClusterRoleBasedAccessControlList(this, "role_based_access_control", false);
  public get roleBasedAccessControl() {
    return this._roleBasedAccessControl;
  }

  // role_based_access_control_enabled - computed: true, optional: false, required: false
  public get roleBasedAccessControlEnabled() {
    return this.getBooleanAttribute('role_based_access_control_enabled');
  }

  // service_principal - computed: true, optional: false, required: false
  private _servicePrincipal = new DataAzurermKubernetesClusterServicePrincipalList(this, "service_principal", false);
  public get servicePrincipal() {
    return this._servicePrincipal;
  }

  // tags - computed: true, optional: false, required: false
  public tags(key: string): string | cdktf.IResolvable {
    return new cdktf.StringMap(this, 'tags').lookup(key);
  }

  // windows_profile - computed: true, optional: false, required: false
  private _windowsProfile = new DataAzurermKubernetesClusterWindowsProfileList(this, "windows_profile", false);
  public get windowsProfile() {
    return this._windowsProfile;
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts = new DataAzurermKubernetesClusterTimeoutsOutputReference(this, "timeouts");
  public get timeouts() {
    return this._timeouts;
  }
  public putTimeouts(value: DataAzurermKubernetesClusterTimeouts) {
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
      name: cdktf.stringToTerraform(this._name),
      resource_group_name: cdktf.stringToTerraform(this._resourceGroupName),
      timeouts: dataAzurermKubernetesClusterTimeoutsToTerraform(this._timeouts.internalValue),
    };
  }
}
