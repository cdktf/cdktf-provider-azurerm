// https://www.terraform.io/docs/providers/azurerm/r/kubernetes_cluster.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface KubernetesClusterConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/kubernetes_cluster.html#api_server_authorized_ip_ranges KubernetesCluster#api_server_authorized_ip_ranges}
  */
  readonly apiServerAuthorizedIpRanges?: string[];
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/kubernetes_cluster.html#automatic_channel_upgrade KubernetesCluster#automatic_channel_upgrade}
  */
  readonly automaticChannelUpgrade?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/kubernetes_cluster.html#disk_encryption_set_id KubernetesCluster#disk_encryption_set_id}
  */
  readonly diskEncryptionSetId?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/kubernetes_cluster.html#dns_prefix KubernetesCluster#dns_prefix}
  */
  readonly dnsPrefix?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/kubernetes_cluster.html#dns_prefix_private_cluster KubernetesCluster#dns_prefix_private_cluster}
  */
  readonly dnsPrefixPrivateCluster?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/kubernetes_cluster.html#enable_pod_security_policy KubernetesCluster#enable_pod_security_policy}
  */
  readonly enablePodSecurityPolicy?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/kubernetes_cluster.html#kubernetes_version KubernetesCluster#kubernetes_version}
  */
  readonly kubernetesVersion?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/kubernetes_cluster.html#local_account_disabled KubernetesCluster#local_account_disabled}
  */
  readonly localAccountDisabled?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/kubernetes_cluster.html#location KubernetesCluster#location}
  */
  readonly location: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/kubernetes_cluster.html#name KubernetesCluster#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/kubernetes_cluster.html#node_resource_group KubernetesCluster#node_resource_group}
  */
  readonly nodeResourceGroup?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/kubernetes_cluster.html#private_cluster_enabled KubernetesCluster#private_cluster_enabled}
  */
  readonly privateClusterEnabled?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/kubernetes_cluster.html#private_cluster_public_fqdn_enabled KubernetesCluster#private_cluster_public_fqdn_enabled}
  */
  readonly privateClusterPublicFqdnEnabled?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/kubernetes_cluster.html#private_dns_zone_id KubernetesCluster#private_dns_zone_id}
  */
  readonly privateDnsZoneId?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/kubernetes_cluster.html#private_link_enabled KubernetesCluster#private_link_enabled}
  */
  readonly privateLinkEnabled?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/kubernetes_cluster.html#resource_group_name KubernetesCluster#resource_group_name}
  */
  readonly resourceGroupName: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/kubernetes_cluster.html#sku_tier KubernetesCluster#sku_tier}
  */
  readonly skuTier?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/kubernetes_cluster.html#tags KubernetesCluster#tags}
  */
  readonly tags?: { [key: string]: string } | cdktf.IResolvable;
  /**
  * addon_profile block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/kubernetes_cluster.html#addon_profile KubernetesCluster#addon_profile}
  */
  readonly addonProfile?: KubernetesClusterAddonProfile;
  /**
  * auto_scaler_profile block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/kubernetes_cluster.html#auto_scaler_profile KubernetesCluster#auto_scaler_profile}
  */
  readonly autoScalerProfile?: KubernetesClusterAutoScalerProfile;
  /**
  * default_node_pool block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/kubernetes_cluster.html#default_node_pool KubernetesCluster#default_node_pool}
  */
  readonly defaultNodePool: KubernetesClusterDefaultNodePool;
  /**
  * identity block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/kubernetes_cluster.html#identity KubernetesCluster#identity}
  */
  readonly identity?: KubernetesClusterIdentity;
  /**
  * kubelet_identity block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/kubernetes_cluster.html#kubelet_identity KubernetesCluster#kubelet_identity}
  */
  readonly kubeletIdentity?: KubernetesClusterKubeletIdentity;
  /**
  * linux_profile block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/kubernetes_cluster.html#linux_profile KubernetesCluster#linux_profile}
  */
  readonly linuxProfile?: KubernetesClusterLinuxProfile;
  /**
  * maintenance_window block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/kubernetes_cluster.html#maintenance_window KubernetesCluster#maintenance_window}
  */
  readonly maintenanceWindow?: KubernetesClusterMaintenanceWindow;
  /**
  * network_profile block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/kubernetes_cluster.html#network_profile KubernetesCluster#network_profile}
  */
  readonly networkProfile?: KubernetesClusterNetworkProfile;
  /**
  * role_based_access_control block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/kubernetes_cluster.html#role_based_access_control KubernetesCluster#role_based_access_control}
  */
  readonly roleBasedAccessControl?: KubernetesClusterRoleBasedAccessControl;
  /**
  * service_principal block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/kubernetes_cluster.html#service_principal KubernetesCluster#service_principal}
  */
  readonly servicePrincipal?: KubernetesClusterServicePrincipal;
  /**
  * timeouts block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/kubernetes_cluster.html#timeouts KubernetesCluster#timeouts}
  */
  readonly timeouts?: KubernetesClusterTimeouts;
  /**
  * windows_profile block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/kubernetes_cluster.html#windows_profile KubernetesCluster#windows_profile}
  */
  readonly windowsProfile?: KubernetesClusterWindowsProfile;
}
export class KubernetesClusterKubeAdminConfig extends cdktf.ComplexComputedList {

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
export class KubernetesClusterKubeConfig extends cdktf.ComplexComputedList {

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
export interface KubernetesClusterAddonProfileAciConnectorLinux {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/kubernetes_cluster.html#enabled KubernetesCluster#enabled}
  */
  readonly enabled: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/kubernetes_cluster.html#subnet_name KubernetesCluster#subnet_name}
  */
  readonly subnetName?: string;
}

function kubernetesClusterAddonProfileAciConnectorLinuxToTerraform(struct?: KubernetesClusterAddonProfileAciConnectorLinuxOutputReference | KubernetesClusterAddonProfileAciConnectorLinux): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    enabled: cdktf.booleanToTerraform(struct!.enabled),
    subnet_name: cdktf.stringToTerraform(struct!.subnetName),
  }
}

export class KubernetesClusterAddonProfileAciConnectorLinuxOutputReference extends cdktf.ComplexObject {
  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param isSingleItem True if this is a block, false if it's a list
  */
  public constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean) {
    super(terraformResource, terraformAttribute, isSingleItem);
  }

  // enabled - computed: false, optional: false, required: true
  private _enabled?: boolean | cdktf.IResolvable; 
  public get enabled() {
    return this.getBooleanAttribute('enabled') as any;
  }
  public set enabled(value: boolean | cdktf.IResolvable) {
    this._enabled = value;
  }
  // Temporarily expose input value. Use with caution.
  public get enabledInput() {
    return this._enabled
  }

  // subnet_name - computed: false, optional: true, required: false
  private _subnetName?: string | undefined; 
  public get subnetName() {
    return this.getStringAttribute('subnet_name');
  }
  public set subnetName(value: string | undefined) {
    this._subnetName = value;
  }
  public resetSubnetName() {
    this._subnetName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get subnetNameInput() {
    return this._subnetName
  }
}
export interface KubernetesClusterAddonProfileAzurePolicy {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/kubernetes_cluster.html#enabled KubernetesCluster#enabled}
  */
  readonly enabled: boolean | cdktf.IResolvable;
}

function kubernetesClusterAddonProfileAzurePolicyToTerraform(struct?: KubernetesClusterAddonProfileAzurePolicyOutputReference | KubernetesClusterAddonProfileAzurePolicy): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    enabled: cdktf.booleanToTerraform(struct!.enabled),
  }
}

export class KubernetesClusterAddonProfileAzurePolicyOutputReference extends cdktf.ComplexObject {
  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param isSingleItem True if this is a block, false if it's a list
  */
  public constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean) {
    super(terraformResource, terraformAttribute, isSingleItem);
  }

  // enabled - computed: false, optional: false, required: true
  private _enabled?: boolean | cdktf.IResolvable; 
  public get enabled() {
    return this.getBooleanAttribute('enabled') as any;
  }
  public set enabled(value: boolean | cdktf.IResolvable) {
    this._enabled = value;
  }
  // Temporarily expose input value. Use with caution.
  public get enabledInput() {
    return this._enabled
  }
}
export interface KubernetesClusterAddonProfileHttpApplicationRouting {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/kubernetes_cluster.html#enabled KubernetesCluster#enabled}
  */
  readonly enabled: boolean | cdktf.IResolvable;
}

function kubernetesClusterAddonProfileHttpApplicationRoutingToTerraform(struct?: KubernetesClusterAddonProfileHttpApplicationRoutingOutputReference | KubernetesClusterAddonProfileHttpApplicationRouting): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    enabled: cdktf.booleanToTerraform(struct!.enabled),
  }
}

export class KubernetesClusterAddonProfileHttpApplicationRoutingOutputReference extends cdktf.ComplexObject {
  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param isSingleItem True if this is a block, false if it's a list
  */
  public constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean) {
    super(terraformResource, terraformAttribute, isSingleItem);
  }

  // enabled - computed: false, optional: false, required: true
  private _enabled?: boolean | cdktf.IResolvable; 
  public get enabled() {
    return this.getBooleanAttribute('enabled') as any;
  }
  public set enabled(value: boolean | cdktf.IResolvable) {
    this._enabled = value;
  }
  // Temporarily expose input value. Use with caution.
  public get enabledInput() {
    return this._enabled
  }
}
export interface KubernetesClusterAddonProfileIngressApplicationGateway {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/kubernetes_cluster.html#enabled KubernetesCluster#enabled}
  */
  readonly enabled: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/kubernetes_cluster.html#gateway_id KubernetesCluster#gateway_id}
  */
  readonly gatewayId?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/kubernetes_cluster.html#gateway_name KubernetesCluster#gateway_name}
  */
  readonly gatewayName?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/kubernetes_cluster.html#subnet_cidr KubernetesCluster#subnet_cidr}
  */
  readonly subnetCidr?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/kubernetes_cluster.html#subnet_id KubernetesCluster#subnet_id}
  */
  readonly subnetId?: string;
}

function kubernetesClusterAddonProfileIngressApplicationGatewayToTerraform(struct?: KubernetesClusterAddonProfileIngressApplicationGatewayOutputReference | KubernetesClusterAddonProfileIngressApplicationGateway): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    enabled: cdktf.booleanToTerraform(struct!.enabled),
    gateway_id: cdktf.stringToTerraform(struct!.gatewayId),
    gateway_name: cdktf.stringToTerraform(struct!.gatewayName),
    subnet_cidr: cdktf.stringToTerraform(struct!.subnetCidr),
    subnet_id: cdktf.stringToTerraform(struct!.subnetId),
  }
}

export class KubernetesClusterAddonProfileIngressApplicationGatewayOutputReference extends cdktf.ComplexObject {
  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param isSingleItem True if this is a block, false if it's a list
  */
  public constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean) {
    super(terraformResource, terraformAttribute, isSingleItem);
  }

  // enabled - computed: false, optional: false, required: true
  private _enabled?: boolean | cdktf.IResolvable; 
  public get enabled() {
    return this.getBooleanAttribute('enabled') as any;
  }
  public set enabled(value: boolean | cdktf.IResolvable) {
    this._enabled = value;
  }
  // Temporarily expose input value. Use with caution.
  public get enabledInput() {
    return this._enabled
  }

  // gateway_id - computed: false, optional: true, required: false
  private _gatewayId?: string | undefined; 
  public get gatewayId() {
    return this.getStringAttribute('gateway_id');
  }
  public set gatewayId(value: string | undefined) {
    this._gatewayId = value;
  }
  public resetGatewayId() {
    this._gatewayId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get gatewayIdInput() {
    return this._gatewayId
  }

  // gateway_name - computed: false, optional: true, required: false
  private _gatewayName?: string | undefined; 
  public get gatewayName() {
    return this.getStringAttribute('gateway_name');
  }
  public set gatewayName(value: string | undefined) {
    this._gatewayName = value;
  }
  public resetGatewayName() {
    this._gatewayName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get gatewayNameInput() {
    return this._gatewayName
  }

  // subnet_cidr - computed: false, optional: true, required: false
  private _subnetCidr?: string | undefined; 
  public get subnetCidr() {
    return this.getStringAttribute('subnet_cidr');
  }
  public set subnetCidr(value: string | undefined) {
    this._subnetCidr = value;
  }
  public resetSubnetCidr() {
    this._subnetCidr = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get subnetCidrInput() {
    return this._subnetCidr
  }

  // subnet_id - computed: false, optional: true, required: false
  private _subnetId?: string | undefined; 
  public get subnetId() {
    return this.getStringAttribute('subnet_id');
  }
  public set subnetId(value: string | undefined) {
    this._subnetId = value;
  }
  public resetSubnetId() {
    this._subnetId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get subnetIdInput() {
    return this._subnetId
  }
}
export interface KubernetesClusterAddonProfileKubeDashboard {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/kubernetes_cluster.html#enabled KubernetesCluster#enabled}
  */
  readonly enabled: boolean | cdktf.IResolvable;
}

function kubernetesClusterAddonProfileKubeDashboardToTerraform(struct?: KubernetesClusterAddonProfileKubeDashboardOutputReference | KubernetesClusterAddonProfileKubeDashboard): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    enabled: cdktf.booleanToTerraform(struct!.enabled),
  }
}

export class KubernetesClusterAddonProfileKubeDashboardOutputReference extends cdktf.ComplexObject {
  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param isSingleItem True if this is a block, false if it's a list
  */
  public constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean) {
    super(terraformResource, terraformAttribute, isSingleItem);
  }

  // enabled - computed: false, optional: false, required: true
  private _enabled?: boolean | cdktf.IResolvable; 
  public get enabled() {
    return this.getBooleanAttribute('enabled') as any;
  }
  public set enabled(value: boolean | cdktf.IResolvable) {
    this._enabled = value;
  }
  // Temporarily expose input value. Use with caution.
  public get enabledInput() {
    return this._enabled
  }
}
export interface KubernetesClusterAddonProfileOmsAgent {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/kubernetes_cluster.html#enabled KubernetesCluster#enabled}
  */
  readonly enabled: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/kubernetes_cluster.html#log_analytics_workspace_id KubernetesCluster#log_analytics_workspace_id}
  */
  readonly logAnalyticsWorkspaceId?: string;
}

function kubernetesClusterAddonProfileOmsAgentToTerraform(struct?: KubernetesClusterAddonProfileOmsAgentOutputReference | KubernetesClusterAddonProfileOmsAgent): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    enabled: cdktf.booleanToTerraform(struct!.enabled),
    log_analytics_workspace_id: cdktf.stringToTerraform(struct!.logAnalyticsWorkspaceId),
  }
}

export class KubernetesClusterAddonProfileOmsAgentOutputReference extends cdktf.ComplexObject {
  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param isSingleItem True if this is a block, false if it's a list
  */
  public constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean) {
    super(terraformResource, terraformAttribute, isSingleItem);
  }

  // enabled - computed: false, optional: false, required: true
  private _enabled?: boolean | cdktf.IResolvable; 
  public get enabled() {
    return this.getBooleanAttribute('enabled') as any;
  }
  public set enabled(value: boolean | cdktf.IResolvable) {
    this._enabled = value;
  }
  // Temporarily expose input value. Use with caution.
  public get enabledInput() {
    return this._enabled
  }

  // log_analytics_workspace_id - computed: false, optional: true, required: false
  private _logAnalyticsWorkspaceId?: string | undefined; 
  public get logAnalyticsWorkspaceId() {
    return this.getStringAttribute('log_analytics_workspace_id');
  }
  public set logAnalyticsWorkspaceId(value: string | undefined) {
    this._logAnalyticsWorkspaceId = value;
  }
  public resetLogAnalyticsWorkspaceId() {
    this._logAnalyticsWorkspaceId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get logAnalyticsWorkspaceIdInput() {
    return this._logAnalyticsWorkspaceId
  }
}
export interface KubernetesClusterAddonProfileOpenServiceMesh {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/kubernetes_cluster.html#enabled KubernetesCluster#enabled}
  */
  readonly enabled: boolean | cdktf.IResolvable;
}

function kubernetesClusterAddonProfileOpenServiceMeshToTerraform(struct?: KubernetesClusterAddonProfileOpenServiceMeshOutputReference | KubernetesClusterAddonProfileOpenServiceMesh): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    enabled: cdktf.booleanToTerraform(struct!.enabled),
  }
}

export class KubernetesClusterAddonProfileOpenServiceMeshOutputReference extends cdktf.ComplexObject {
  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param isSingleItem True if this is a block, false if it's a list
  */
  public constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean) {
    super(terraformResource, terraformAttribute, isSingleItem);
  }

  // enabled - computed: false, optional: false, required: true
  private _enabled?: boolean | cdktf.IResolvable; 
  public get enabled() {
    return this.getBooleanAttribute('enabled') as any;
  }
  public set enabled(value: boolean | cdktf.IResolvable) {
    this._enabled = value;
  }
  // Temporarily expose input value. Use with caution.
  public get enabledInput() {
    return this._enabled
  }
}
export interface KubernetesClusterAddonProfile {
  /**
  * aci_connector_linux block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/kubernetes_cluster.html#aci_connector_linux KubernetesCluster#aci_connector_linux}
  */
  readonly aciConnectorLinux?: KubernetesClusterAddonProfileAciConnectorLinux;
  /**
  * azure_policy block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/kubernetes_cluster.html#azure_policy KubernetesCluster#azure_policy}
  */
  readonly azurePolicy?: KubernetesClusterAddonProfileAzurePolicy;
  /**
  * http_application_routing block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/kubernetes_cluster.html#http_application_routing KubernetesCluster#http_application_routing}
  */
  readonly httpApplicationRouting?: KubernetesClusterAddonProfileHttpApplicationRouting;
  /**
  * ingress_application_gateway block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/kubernetes_cluster.html#ingress_application_gateway KubernetesCluster#ingress_application_gateway}
  */
  readonly ingressApplicationGateway?: KubernetesClusterAddonProfileIngressApplicationGateway;
  /**
  * kube_dashboard block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/kubernetes_cluster.html#kube_dashboard KubernetesCluster#kube_dashboard}
  */
  readonly kubeDashboard?: KubernetesClusterAddonProfileKubeDashboard;
  /**
  * oms_agent block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/kubernetes_cluster.html#oms_agent KubernetesCluster#oms_agent}
  */
  readonly omsAgent?: KubernetesClusterAddonProfileOmsAgent;
  /**
  * open_service_mesh block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/kubernetes_cluster.html#open_service_mesh KubernetesCluster#open_service_mesh}
  */
  readonly openServiceMesh?: KubernetesClusterAddonProfileOpenServiceMesh;
}

function kubernetesClusterAddonProfileToTerraform(struct?: KubernetesClusterAddonProfileOutputReference | KubernetesClusterAddonProfile): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    aci_connector_linux: kubernetesClusterAddonProfileAciConnectorLinuxToTerraform(struct!.aciConnectorLinux),
    azure_policy: kubernetesClusterAddonProfileAzurePolicyToTerraform(struct!.azurePolicy),
    http_application_routing: kubernetesClusterAddonProfileHttpApplicationRoutingToTerraform(struct!.httpApplicationRouting),
    ingress_application_gateway: kubernetesClusterAddonProfileIngressApplicationGatewayToTerraform(struct!.ingressApplicationGateway),
    kube_dashboard: kubernetesClusterAddonProfileKubeDashboardToTerraform(struct!.kubeDashboard),
    oms_agent: kubernetesClusterAddonProfileOmsAgentToTerraform(struct!.omsAgent),
    open_service_mesh: kubernetesClusterAddonProfileOpenServiceMeshToTerraform(struct!.openServiceMesh),
  }
}

export class KubernetesClusterAddonProfileOutputReference extends cdktf.ComplexObject {
  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param isSingleItem True if this is a block, false if it's a list
  */
  public constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean) {
    super(terraformResource, terraformAttribute, isSingleItem);
  }

  // aci_connector_linux - computed: false, optional: true, required: false
  private _aciConnectorLinux?: KubernetesClusterAddonProfileAciConnectorLinux | undefined; 
  private __aciConnectorLinuxOutput = new KubernetesClusterAddonProfileAciConnectorLinuxOutputReference(this as any, "aci_connector_linux", true);
  public get aciConnectorLinux() {
    return this.__aciConnectorLinuxOutput;
  }
  public putAciConnectorLinux(value: KubernetesClusterAddonProfileAciConnectorLinux | undefined) {
    this._aciConnectorLinux = value;
  }
  public resetAciConnectorLinux() {
    this._aciConnectorLinux = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get aciConnectorLinuxInput() {
    return this._aciConnectorLinux
  }

  // azure_policy - computed: false, optional: true, required: false
  private _azurePolicy?: KubernetesClusterAddonProfileAzurePolicy | undefined; 
  private __azurePolicyOutput = new KubernetesClusterAddonProfileAzurePolicyOutputReference(this as any, "azure_policy", true);
  public get azurePolicy() {
    return this.__azurePolicyOutput;
  }
  public putAzurePolicy(value: KubernetesClusterAddonProfileAzurePolicy | undefined) {
    this._azurePolicy = value;
  }
  public resetAzurePolicy() {
    this._azurePolicy = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get azurePolicyInput() {
    return this._azurePolicy
  }

  // http_application_routing - computed: false, optional: true, required: false
  private _httpApplicationRouting?: KubernetesClusterAddonProfileHttpApplicationRouting | undefined; 
  private __httpApplicationRoutingOutput = new KubernetesClusterAddonProfileHttpApplicationRoutingOutputReference(this as any, "http_application_routing", true);
  public get httpApplicationRouting() {
    return this.__httpApplicationRoutingOutput;
  }
  public putHttpApplicationRouting(value: KubernetesClusterAddonProfileHttpApplicationRouting | undefined) {
    this._httpApplicationRouting = value;
  }
  public resetHttpApplicationRouting() {
    this._httpApplicationRouting = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get httpApplicationRoutingInput() {
    return this._httpApplicationRouting
  }

  // ingress_application_gateway - computed: false, optional: true, required: false
  private _ingressApplicationGateway?: KubernetesClusterAddonProfileIngressApplicationGateway | undefined; 
  private __ingressApplicationGatewayOutput = new KubernetesClusterAddonProfileIngressApplicationGatewayOutputReference(this as any, "ingress_application_gateway", true);
  public get ingressApplicationGateway() {
    return this.__ingressApplicationGatewayOutput;
  }
  public putIngressApplicationGateway(value: KubernetesClusterAddonProfileIngressApplicationGateway | undefined) {
    this._ingressApplicationGateway = value;
  }
  public resetIngressApplicationGateway() {
    this._ingressApplicationGateway = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ingressApplicationGatewayInput() {
    return this._ingressApplicationGateway
  }

  // kube_dashboard - computed: false, optional: true, required: false
  private _kubeDashboard?: KubernetesClusterAddonProfileKubeDashboard | undefined; 
  private __kubeDashboardOutput = new KubernetesClusterAddonProfileKubeDashboardOutputReference(this as any, "kube_dashboard", true);
  public get kubeDashboard() {
    return this.__kubeDashboardOutput;
  }
  public putKubeDashboard(value: KubernetesClusterAddonProfileKubeDashboard | undefined) {
    this._kubeDashboard = value;
  }
  public resetKubeDashboard() {
    this._kubeDashboard = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get kubeDashboardInput() {
    return this._kubeDashboard
  }

  // oms_agent - computed: false, optional: true, required: false
  private _omsAgent?: KubernetesClusterAddonProfileOmsAgent | undefined; 
  private __omsAgentOutput = new KubernetesClusterAddonProfileOmsAgentOutputReference(this as any, "oms_agent", true);
  public get omsAgent() {
    return this.__omsAgentOutput;
  }
  public putOmsAgent(value: KubernetesClusterAddonProfileOmsAgent | undefined) {
    this._omsAgent = value;
  }
  public resetOmsAgent() {
    this._omsAgent = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get omsAgentInput() {
    return this._omsAgent
  }

  // open_service_mesh - computed: false, optional: true, required: false
  private _openServiceMesh?: KubernetesClusterAddonProfileOpenServiceMesh | undefined; 
  private __openServiceMeshOutput = new KubernetesClusterAddonProfileOpenServiceMeshOutputReference(this as any, "open_service_mesh", true);
  public get openServiceMesh() {
    return this.__openServiceMeshOutput;
  }
  public putOpenServiceMesh(value: KubernetesClusterAddonProfileOpenServiceMesh | undefined) {
    this._openServiceMesh = value;
  }
  public resetOpenServiceMesh() {
    this._openServiceMesh = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get openServiceMeshInput() {
    return this._openServiceMesh
  }
}
export interface KubernetesClusterAutoScalerProfile {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/kubernetes_cluster.html#balance_similar_node_groups KubernetesCluster#balance_similar_node_groups}
  */
  readonly balanceSimilarNodeGroups?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/kubernetes_cluster.html#empty_bulk_delete_max KubernetesCluster#empty_bulk_delete_max}
  */
  readonly emptyBulkDeleteMax?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/kubernetes_cluster.html#expander KubernetesCluster#expander}
  */
  readonly expander?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/kubernetes_cluster.html#max_graceful_termination_sec KubernetesCluster#max_graceful_termination_sec}
  */
  readonly maxGracefulTerminationSec?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/kubernetes_cluster.html#max_node_provisioning_time KubernetesCluster#max_node_provisioning_time}
  */
  readonly maxNodeProvisioningTime?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/kubernetes_cluster.html#max_unready_nodes KubernetesCluster#max_unready_nodes}
  */
  readonly maxUnreadyNodes?: number;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/kubernetes_cluster.html#max_unready_percentage KubernetesCluster#max_unready_percentage}
  */
  readonly maxUnreadyPercentage?: number;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/kubernetes_cluster.html#new_pod_scale_up_delay KubernetesCluster#new_pod_scale_up_delay}
  */
  readonly newPodScaleUpDelay?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/kubernetes_cluster.html#scale_down_delay_after_add KubernetesCluster#scale_down_delay_after_add}
  */
  readonly scaleDownDelayAfterAdd?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/kubernetes_cluster.html#scale_down_delay_after_delete KubernetesCluster#scale_down_delay_after_delete}
  */
  readonly scaleDownDelayAfterDelete?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/kubernetes_cluster.html#scale_down_delay_after_failure KubernetesCluster#scale_down_delay_after_failure}
  */
  readonly scaleDownDelayAfterFailure?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/kubernetes_cluster.html#scale_down_unneeded KubernetesCluster#scale_down_unneeded}
  */
  readonly scaleDownUnneeded?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/kubernetes_cluster.html#scale_down_unready KubernetesCluster#scale_down_unready}
  */
  readonly scaleDownUnready?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/kubernetes_cluster.html#scale_down_utilization_threshold KubernetesCluster#scale_down_utilization_threshold}
  */
  readonly scaleDownUtilizationThreshold?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/kubernetes_cluster.html#scan_interval KubernetesCluster#scan_interval}
  */
  readonly scanInterval?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/kubernetes_cluster.html#skip_nodes_with_local_storage KubernetesCluster#skip_nodes_with_local_storage}
  */
  readonly skipNodesWithLocalStorage?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/kubernetes_cluster.html#skip_nodes_with_system_pods KubernetesCluster#skip_nodes_with_system_pods}
  */
  readonly skipNodesWithSystemPods?: boolean | cdktf.IResolvable;
}

function kubernetesClusterAutoScalerProfileToTerraform(struct?: KubernetesClusterAutoScalerProfileOutputReference | KubernetesClusterAutoScalerProfile): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    balance_similar_node_groups: cdktf.booleanToTerraform(struct!.balanceSimilarNodeGroups),
    empty_bulk_delete_max: cdktf.stringToTerraform(struct!.emptyBulkDeleteMax),
    expander: cdktf.stringToTerraform(struct!.expander),
    max_graceful_termination_sec: cdktf.stringToTerraform(struct!.maxGracefulTerminationSec),
    max_node_provisioning_time: cdktf.stringToTerraform(struct!.maxNodeProvisioningTime),
    max_unready_nodes: cdktf.numberToTerraform(struct!.maxUnreadyNodes),
    max_unready_percentage: cdktf.numberToTerraform(struct!.maxUnreadyPercentage),
    new_pod_scale_up_delay: cdktf.stringToTerraform(struct!.newPodScaleUpDelay),
    scale_down_delay_after_add: cdktf.stringToTerraform(struct!.scaleDownDelayAfterAdd),
    scale_down_delay_after_delete: cdktf.stringToTerraform(struct!.scaleDownDelayAfterDelete),
    scale_down_delay_after_failure: cdktf.stringToTerraform(struct!.scaleDownDelayAfterFailure),
    scale_down_unneeded: cdktf.stringToTerraform(struct!.scaleDownUnneeded),
    scale_down_unready: cdktf.stringToTerraform(struct!.scaleDownUnready),
    scale_down_utilization_threshold: cdktf.stringToTerraform(struct!.scaleDownUtilizationThreshold),
    scan_interval: cdktf.stringToTerraform(struct!.scanInterval),
    skip_nodes_with_local_storage: cdktf.booleanToTerraform(struct!.skipNodesWithLocalStorage),
    skip_nodes_with_system_pods: cdktf.booleanToTerraform(struct!.skipNodesWithSystemPods),
  }
}

export class KubernetesClusterAutoScalerProfileOutputReference extends cdktf.ComplexObject {
  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param isSingleItem True if this is a block, false if it's a list
  */
  public constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean) {
    super(terraformResource, terraformAttribute, isSingleItem);
  }

  // balance_similar_node_groups - computed: false, optional: true, required: false
  private _balanceSimilarNodeGroups?: boolean | cdktf.IResolvable | undefined; 
  public get balanceSimilarNodeGroups() {
    return this.getBooleanAttribute('balance_similar_node_groups') as any;
  }
  public set balanceSimilarNodeGroups(value: boolean | cdktf.IResolvable | undefined) {
    this._balanceSimilarNodeGroups = value;
  }
  public resetBalanceSimilarNodeGroups() {
    this._balanceSimilarNodeGroups = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get balanceSimilarNodeGroupsInput() {
    return this._balanceSimilarNodeGroups
  }

  // empty_bulk_delete_max - computed: true, optional: true, required: false
  private _emptyBulkDeleteMax?: string | undefined; 
  public get emptyBulkDeleteMax() {
    return this.getStringAttribute('empty_bulk_delete_max');
  }
  public set emptyBulkDeleteMax(value: string | undefined) {
    this._emptyBulkDeleteMax = value;
  }
  public resetEmptyBulkDeleteMax() {
    this._emptyBulkDeleteMax = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get emptyBulkDeleteMaxInput() {
    return this._emptyBulkDeleteMax
  }

  // expander - computed: true, optional: true, required: false
  private _expander?: string | undefined; 
  public get expander() {
    return this.getStringAttribute('expander');
  }
  public set expander(value: string | undefined) {
    this._expander = value;
  }
  public resetExpander() {
    this._expander = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get expanderInput() {
    return this._expander
  }

  // max_graceful_termination_sec - computed: true, optional: true, required: false
  private _maxGracefulTerminationSec?: string | undefined; 
  public get maxGracefulTerminationSec() {
    return this.getStringAttribute('max_graceful_termination_sec');
  }
  public set maxGracefulTerminationSec(value: string | undefined) {
    this._maxGracefulTerminationSec = value;
  }
  public resetMaxGracefulTerminationSec() {
    this._maxGracefulTerminationSec = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxGracefulTerminationSecInput() {
    return this._maxGracefulTerminationSec
  }

  // max_node_provisioning_time - computed: false, optional: true, required: false
  private _maxNodeProvisioningTime?: string | undefined; 
  public get maxNodeProvisioningTime() {
    return this.getStringAttribute('max_node_provisioning_time');
  }
  public set maxNodeProvisioningTime(value: string | undefined) {
    this._maxNodeProvisioningTime = value;
  }
  public resetMaxNodeProvisioningTime() {
    this._maxNodeProvisioningTime = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxNodeProvisioningTimeInput() {
    return this._maxNodeProvisioningTime
  }

  // max_unready_nodes - computed: false, optional: true, required: false
  private _maxUnreadyNodes?: number | undefined; 
  public get maxUnreadyNodes() {
    return this.getNumberAttribute('max_unready_nodes');
  }
  public set maxUnreadyNodes(value: number | undefined) {
    this._maxUnreadyNodes = value;
  }
  public resetMaxUnreadyNodes() {
    this._maxUnreadyNodes = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxUnreadyNodesInput() {
    return this._maxUnreadyNodes
  }

  // max_unready_percentage - computed: false, optional: true, required: false
  private _maxUnreadyPercentage?: number | undefined; 
  public get maxUnreadyPercentage() {
    return this.getNumberAttribute('max_unready_percentage');
  }
  public set maxUnreadyPercentage(value: number | undefined) {
    this._maxUnreadyPercentage = value;
  }
  public resetMaxUnreadyPercentage() {
    this._maxUnreadyPercentage = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxUnreadyPercentageInput() {
    return this._maxUnreadyPercentage
  }

  // new_pod_scale_up_delay - computed: true, optional: true, required: false
  private _newPodScaleUpDelay?: string | undefined; 
  public get newPodScaleUpDelay() {
    return this.getStringAttribute('new_pod_scale_up_delay');
  }
  public set newPodScaleUpDelay(value: string | undefined) {
    this._newPodScaleUpDelay = value;
  }
  public resetNewPodScaleUpDelay() {
    this._newPodScaleUpDelay = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get newPodScaleUpDelayInput() {
    return this._newPodScaleUpDelay
  }

  // scale_down_delay_after_add - computed: true, optional: true, required: false
  private _scaleDownDelayAfterAdd?: string | undefined; 
  public get scaleDownDelayAfterAdd() {
    return this.getStringAttribute('scale_down_delay_after_add');
  }
  public set scaleDownDelayAfterAdd(value: string | undefined) {
    this._scaleDownDelayAfterAdd = value;
  }
  public resetScaleDownDelayAfterAdd() {
    this._scaleDownDelayAfterAdd = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get scaleDownDelayAfterAddInput() {
    return this._scaleDownDelayAfterAdd
  }

  // scale_down_delay_after_delete - computed: true, optional: true, required: false
  private _scaleDownDelayAfterDelete?: string | undefined; 
  public get scaleDownDelayAfterDelete() {
    return this.getStringAttribute('scale_down_delay_after_delete');
  }
  public set scaleDownDelayAfterDelete(value: string | undefined) {
    this._scaleDownDelayAfterDelete = value;
  }
  public resetScaleDownDelayAfterDelete() {
    this._scaleDownDelayAfterDelete = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get scaleDownDelayAfterDeleteInput() {
    return this._scaleDownDelayAfterDelete
  }

  // scale_down_delay_after_failure - computed: true, optional: true, required: false
  private _scaleDownDelayAfterFailure?: string | undefined; 
  public get scaleDownDelayAfterFailure() {
    return this.getStringAttribute('scale_down_delay_after_failure');
  }
  public set scaleDownDelayAfterFailure(value: string | undefined) {
    this._scaleDownDelayAfterFailure = value;
  }
  public resetScaleDownDelayAfterFailure() {
    this._scaleDownDelayAfterFailure = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get scaleDownDelayAfterFailureInput() {
    return this._scaleDownDelayAfterFailure
  }

  // scale_down_unneeded - computed: true, optional: true, required: false
  private _scaleDownUnneeded?: string | undefined; 
  public get scaleDownUnneeded() {
    return this.getStringAttribute('scale_down_unneeded');
  }
  public set scaleDownUnneeded(value: string | undefined) {
    this._scaleDownUnneeded = value;
  }
  public resetScaleDownUnneeded() {
    this._scaleDownUnneeded = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get scaleDownUnneededInput() {
    return this._scaleDownUnneeded
  }

  // scale_down_unready - computed: true, optional: true, required: false
  private _scaleDownUnready?: string | undefined; 
  public get scaleDownUnready() {
    return this.getStringAttribute('scale_down_unready');
  }
  public set scaleDownUnready(value: string | undefined) {
    this._scaleDownUnready = value;
  }
  public resetScaleDownUnready() {
    this._scaleDownUnready = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get scaleDownUnreadyInput() {
    return this._scaleDownUnready
  }

  // scale_down_utilization_threshold - computed: true, optional: true, required: false
  private _scaleDownUtilizationThreshold?: string | undefined; 
  public get scaleDownUtilizationThreshold() {
    return this.getStringAttribute('scale_down_utilization_threshold');
  }
  public set scaleDownUtilizationThreshold(value: string | undefined) {
    this._scaleDownUtilizationThreshold = value;
  }
  public resetScaleDownUtilizationThreshold() {
    this._scaleDownUtilizationThreshold = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get scaleDownUtilizationThresholdInput() {
    return this._scaleDownUtilizationThreshold
  }

  // scan_interval - computed: true, optional: true, required: false
  private _scanInterval?: string | undefined; 
  public get scanInterval() {
    return this.getStringAttribute('scan_interval');
  }
  public set scanInterval(value: string | undefined) {
    this._scanInterval = value;
  }
  public resetScanInterval() {
    this._scanInterval = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get scanIntervalInput() {
    return this._scanInterval
  }

  // skip_nodes_with_local_storage - computed: false, optional: true, required: false
  private _skipNodesWithLocalStorage?: boolean | cdktf.IResolvable | undefined; 
  public get skipNodesWithLocalStorage() {
    return this.getBooleanAttribute('skip_nodes_with_local_storage') as any;
  }
  public set skipNodesWithLocalStorage(value: boolean | cdktf.IResolvable | undefined) {
    this._skipNodesWithLocalStorage = value;
  }
  public resetSkipNodesWithLocalStorage() {
    this._skipNodesWithLocalStorage = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get skipNodesWithLocalStorageInput() {
    return this._skipNodesWithLocalStorage
  }

  // skip_nodes_with_system_pods - computed: false, optional: true, required: false
  private _skipNodesWithSystemPods?: boolean | cdktf.IResolvable | undefined; 
  public get skipNodesWithSystemPods() {
    return this.getBooleanAttribute('skip_nodes_with_system_pods') as any;
  }
  public set skipNodesWithSystemPods(value: boolean | cdktf.IResolvable | undefined) {
    this._skipNodesWithSystemPods = value;
  }
  public resetSkipNodesWithSystemPods() {
    this._skipNodesWithSystemPods = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get skipNodesWithSystemPodsInput() {
    return this._skipNodesWithSystemPods
  }
}
export interface KubernetesClusterDefaultNodePoolKubeletConfig {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/kubernetes_cluster.html#allowed_unsafe_sysctls KubernetesCluster#allowed_unsafe_sysctls}
  */
  readonly allowedUnsafeSysctls?: string[];
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/kubernetes_cluster.html#container_log_max_line KubernetesCluster#container_log_max_line}
  */
  readonly containerLogMaxLine?: number;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/kubernetes_cluster.html#container_log_max_size_mb KubernetesCluster#container_log_max_size_mb}
  */
  readonly containerLogMaxSizeMb?: number;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/kubernetes_cluster.html#cpu_cfs_quota_enabled KubernetesCluster#cpu_cfs_quota_enabled}
  */
  readonly cpuCfsQuotaEnabled?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/kubernetes_cluster.html#cpu_cfs_quota_period KubernetesCluster#cpu_cfs_quota_period}
  */
  readonly cpuCfsQuotaPeriod?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/kubernetes_cluster.html#cpu_manager_policy KubernetesCluster#cpu_manager_policy}
  */
  readonly cpuManagerPolicy?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/kubernetes_cluster.html#image_gc_high_threshold KubernetesCluster#image_gc_high_threshold}
  */
  readonly imageGcHighThreshold?: number;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/kubernetes_cluster.html#image_gc_low_threshold KubernetesCluster#image_gc_low_threshold}
  */
  readonly imageGcLowThreshold?: number;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/kubernetes_cluster.html#pod_max_pid KubernetesCluster#pod_max_pid}
  */
  readonly podMaxPid?: number;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/kubernetes_cluster.html#topology_manager_policy KubernetesCluster#topology_manager_policy}
  */
  readonly topologyManagerPolicy?: string;
}

function kubernetesClusterDefaultNodePoolKubeletConfigToTerraform(struct?: KubernetesClusterDefaultNodePoolKubeletConfigOutputReference | KubernetesClusterDefaultNodePoolKubeletConfig): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    allowed_unsafe_sysctls: cdktf.listMapper(cdktf.stringToTerraform)(struct!.allowedUnsafeSysctls),
    container_log_max_line: cdktf.numberToTerraform(struct!.containerLogMaxLine),
    container_log_max_size_mb: cdktf.numberToTerraform(struct!.containerLogMaxSizeMb),
    cpu_cfs_quota_enabled: cdktf.booleanToTerraform(struct!.cpuCfsQuotaEnabled),
    cpu_cfs_quota_period: cdktf.stringToTerraform(struct!.cpuCfsQuotaPeriod),
    cpu_manager_policy: cdktf.stringToTerraform(struct!.cpuManagerPolicy),
    image_gc_high_threshold: cdktf.numberToTerraform(struct!.imageGcHighThreshold),
    image_gc_low_threshold: cdktf.numberToTerraform(struct!.imageGcLowThreshold),
    pod_max_pid: cdktf.numberToTerraform(struct!.podMaxPid),
    topology_manager_policy: cdktf.stringToTerraform(struct!.topologyManagerPolicy),
  }
}

export class KubernetesClusterDefaultNodePoolKubeletConfigOutputReference extends cdktf.ComplexObject {
  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param isSingleItem True if this is a block, false if it's a list
  */
  public constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean) {
    super(terraformResource, terraformAttribute, isSingleItem);
  }

  // allowed_unsafe_sysctls - computed: false, optional: true, required: false
  private _allowedUnsafeSysctls?: string[] | undefined; 
  public get allowedUnsafeSysctls() {
    return this.getListAttribute('allowed_unsafe_sysctls');
  }
  public set allowedUnsafeSysctls(value: string[] | undefined) {
    this._allowedUnsafeSysctls = value;
  }
  public resetAllowedUnsafeSysctls() {
    this._allowedUnsafeSysctls = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get allowedUnsafeSysctlsInput() {
    return this._allowedUnsafeSysctls
  }

  // container_log_max_line - computed: false, optional: true, required: false
  private _containerLogMaxLine?: number | undefined; 
  public get containerLogMaxLine() {
    return this.getNumberAttribute('container_log_max_line');
  }
  public set containerLogMaxLine(value: number | undefined) {
    this._containerLogMaxLine = value;
  }
  public resetContainerLogMaxLine() {
    this._containerLogMaxLine = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get containerLogMaxLineInput() {
    return this._containerLogMaxLine
  }

  // container_log_max_size_mb - computed: false, optional: true, required: false
  private _containerLogMaxSizeMb?: number | undefined; 
  public get containerLogMaxSizeMb() {
    return this.getNumberAttribute('container_log_max_size_mb');
  }
  public set containerLogMaxSizeMb(value: number | undefined) {
    this._containerLogMaxSizeMb = value;
  }
  public resetContainerLogMaxSizeMb() {
    this._containerLogMaxSizeMb = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get containerLogMaxSizeMbInput() {
    return this._containerLogMaxSizeMb
  }

  // cpu_cfs_quota_enabled - computed: false, optional: true, required: false
  private _cpuCfsQuotaEnabled?: boolean | cdktf.IResolvable | undefined; 
  public get cpuCfsQuotaEnabled() {
    return this.getBooleanAttribute('cpu_cfs_quota_enabled') as any;
  }
  public set cpuCfsQuotaEnabled(value: boolean | cdktf.IResolvable | undefined) {
    this._cpuCfsQuotaEnabled = value;
  }
  public resetCpuCfsQuotaEnabled() {
    this._cpuCfsQuotaEnabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cpuCfsQuotaEnabledInput() {
    return this._cpuCfsQuotaEnabled
  }

  // cpu_cfs_quota_period - computed: false, optional: true, required: false
  private _cpuCfsQuotaPeriod?: string | undefined; 
  public get cpuCfsQuotaPeriod() {
    return this.getStringAttribute('cpu_cfs_quota_period');
  }
  public set cpuCfsQuotaPeriod(value: string | undefined) {
    this._cpuCfsQuotaPeriod = value;
  }
  public resetCpuCfsQuotaPeriod() {
    this._cpuCfsQuotaPeriod = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cpuCfsQuotaPeriodInput() {
    return this._cpuCfsQuotaPeriod
  }

  // cpu_manager_policy - computed: false, optional: true, required: false
  private _cpuManagerPolicy?: string | undefined; 
  public get cpuManagerPolicy() {
    return this.getStringAttribute('cpu_manager_policy');
  }
  public set cpuManagerPolicy(value: string | undefined) {
    this._cpuManagerPolicy = value;
  }
  public resetCpuManagerPolicy() {
    this._cpuManagerPolicy = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cpuManagerPolicyInput() {
    return this._cpuManagerPolicy
  }

  // image_gc_high_threshold - computed: false, optional: true, required: false
  private _imageGcHighThreshold?: number | undefined; 
  public get imageGcHighThreshold() {
    return this.getNumberAttribute('image_gc_high_threshold');
  }
  public set imageGcHighThreshold(value: number | undefined) {
    this._imageGcHighThreshold = value;
  }
  public resetImageGcHighThreshold() {
    this._imageGcHighThreshold = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get imageGcHighThresholdInput() {
    return this._imageGcHighThreshold
  }

  // image_gc_low_threshold - computed: false, optional: true, required: false
  private _imageGcLowThreshold?: number | undefined; 
  public get imageGcLowThreshold() {
    return this.getNumberAttribute('image_gc_low_threshold');
  }
  public set imageGcLowThreshold(value: number | undefined) {
    this._imageGcLowThreshold = value;
  }
  public resetImageGcLowThreshold() {
    this._imageGcLowThreshold = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get imageGcLowThresholdInput() {
    return this._imageGcLowThreshold
  }

  // pod_max_pid - computed: false, optional: true, required: false
  private _podMaxPid?: number | undefined; 
  public get podMaxPid() {
    return this.getNumberAttribute('pod_max_pid');
  }
  public set podMaxPid(value: number | undefined) {
    this._podMaxPid = value;
  }
  public resetPodMaxPid() {
    this._podMaxPid = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get podMaxPidInput() {
    return this._podMaxPid
  }

  // topology_manager_policy - computed: false, optional: true, required: false
  private _topologyManagerPolicy?: string | undefined; 
  public get topologyManagerPolicy() {
    return this.getStringAttribute('topology_manager_policy');
  }
  public set topologyManagerPolicy(value: string | undefined) {
    this._topologyManagerPolicy = value;
  }
  public resetTopologyManagerPolicy() {
    this._topologyManagerPolicy = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get topologyManagerPolicyInput() {
    return this._topologyManagerPolicy
  }
}
export interface KubernetesClusterDefaultNodePoolLinuxOsConfigSysctlConfig {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/kubernetes_cluster.html#fs_aio_max_nr KubernetesCluster#fs_aio_max_nr}
  */
  readonly fsAioMaxNr?: number;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/kubernetes_cluster.html#fs_file_max KubernetesCluster#fs_file_max}
  */
  readonly fsFileMax?: number;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/kubernetes_cluster.html#fs_inotify_max_user_watches KubernetesCluster#fs_inotify_max_user_watches}
  */
  readonly fsInotifyMaxUserWatches?: number;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/kubernetes_cluster.html#fs_nr_open KubernetesCluster#fs_nr_open}
  */
  readonly fsNrOpen?: number;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/kubernetes_cluster.html#kernel_threads_max KubernetesCluster#kernel_threads_max}
  */
  readonly kernelThreadsMax?: number;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/kubernetes_cluster.html#net_core_netdev_max_backlog KubernetesCluster#net_core_netdev_max_backlog}
  */
  readonly netCoreNetdevMaxBacklog?: number;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/kubernetes_cluster.html#net_core_optmem_max KubernetesCluster#net_core_optmem_max}
  */
  readonly netCoreOptmemMax?: number;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/kubernetes_cluster.html#net_core_rmem_default KubernetesCluster#net_core_rmem_default}
  */
  readonly netCoreRmemDefault?: number;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/kubernetes_cluster.html#net_core_rmem_max KubernetesCluster#net_core_rmem_max}
  */
  readonly netCoreRmemMax?: number;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/kubernetes_cluster.html#net_core_somaxconn KubernetesCluster#net_core_somaxconn}
  */
  readonly netCoreSomaxconn?: number;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/kubernetes_cluster.html#net_core_wmem_default KubernetesCluster#net_core_wmem_default}
  */
  readonly netCoreWmemDefault?: number;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/kubernetes_cluster.html#net_core_wmem_max KubernetesCluster#net_core_wmem_max}
  */
  readonly netCoreWmemMax?: number;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/kubernetes_cluster.html#net_ipv4_ip_local_port_range_max KubernetesCluster#net_ipv4_ip_local_port_range_max}
  */
  readonly netIpv4IpLocalPortRangeMax?: number;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/kubernetes_cluster.html#net_ipv4_ip_local_port_range_min KubernetesCluster#net_ipv4_ip_local_port_range_min}
  */
  readonly netIpv4IpLocalPortRangeMin?: number;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/kubernetes_cluster.html#net_ipv4_neigh_default_gc_thresh1 KubernetesCluster#net_ipv4_neigh_default_gc_thresh1}
  */
  readonly netIpv4NeighDefaultGcThresh1?: number;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/kubernetes_cluster.html#net_ipv4_neigh_default_gc_thresh2 KubernetesCluster#net_ipv4_neigh_default_gc_thresh2}
  */
  readonly netIpv4NeighDefaultGcThresh2?: number;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/kubernetes_cluster.html#net_ipv4_neigh_default_gc_thresh3 KubernetesCluster#net_ipv4_neigh_default_gc_thresh3}
  */
  readonly netIpv4NeighDefaultGcThresh3?: number;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/kubernetes_cluster.html#net_ipv4_tcp_fin_timeout KubernetesCluster#net_ipv4_tcp_fin_timeout}
  */
  readonly netIpv4TcpFinTimeout?: number;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/kubernetes_cluster.html#net_ipv4_tcp_keepalive_intvl KubernetesCluster#net_ipv4_tcp_keepalive_intvl}
  */
  readonly netIpv4TcpKeepaliveIntvl?: number;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/kubernetes_cluster.html#net_ipv4_tcp_keepalive_probes KubernetesCluster#net_ipv4_tcp_keepalive_probes}
  */
  readonly netIpv4TcpKeepaliveProbes?: number;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/kubernetes_cluster.html#net_ipv4_tcp_keepalive_time KubernetesCluster#net_ipv4_tcp_keepalive_time}
  */
  readonly netIpv4TcpKeepaliveTime?: number;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/kubernetes_cluster.html#net_ipv4_tcp_max_syn_backlog KubernetesCluster#net_ipv4_tcp_max_syn_backlog}
  */
  readonly netIpv4TcpMaxSynBacklog?: number;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/kubernetes_cluster.html#net_ipv4_tcp_max_tw_buckets KubernetesCluster#net_ipv4_tcp_max_tw_buckets}
  */
  readonly netIpv4TcpMaxTwBuckets?: number;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/kubernetes_cluster.html#net_ipv4_tcp_tw_reuse KubernetesCluster#net_ipv4_tcp_tw_reuse}
  */
  readonly netIpv4TcpTwReuse?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/kubernetes_cluster.html#net_netfilter_nf_conntrack_buckets KubernetesCluster#net_netfilter_nf_conntrack_buckets}
  */
  readonly netNetfilterNfConntrackBuckets?: number;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/kubernetes_cluster.html#net_netfilter_nf_conntrack_max KubernetesCluster#net_netfilter_nf_conntrack_max}
  */
  readonly netNetfilterNfConntrackMax?: number;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/kubernetes_cluster.html#vm_max_map_count KubernetesCluster#vm_max_map_count}
  */
  readonly vmMaxMapCount?: number;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/kubernetes_cluster.html#vm_swappiness KubernetesCluster#vm_swappiness}
  */
  readonly vmSwappiness?: number;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/kubernetes_cluster.html#vm_vfs_cache_pressure KubernetesCluster#vm_vfs_cache_pressure}
  */
  readonly vmVfsCachePressure?: number;
}

function kubernetesClusterDefaultNodePoolLinuxOsConfigSysctlConfigToTerraform(struct?: KubernetesClusterDefaultNodePoolLinuxOsConfigSysctlConfigOutputReference | KubernetesClusterDefaultNodePoolLinuxOsConfigSysctlConfig): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    fs_aio_max_nr: cdktf.numberToTerraform(struct!.fsAioMaxNr),
    fs_file_max: cdktf.numberToTerraform(struct!.fsFileMax),
    fs_inotify_max_user_watches: cdktf.numberToTerraform(struct!.fsInotifyMaxUserWatches),
    fs_nr_open: cdktf.numberToTerraform(struct!.fsNrOpen),
    kernel_threads_max: cdktf.numberToTerraform(struct!.kernelThreadsMax),
    net_core_netdev_max_backlog: cdktf.numberToTerraform(struct!.netCoreNetdevMaxBacklog),
    net_core_optmem_max: cdktf.numberToTerraform(struct!.netCoreOptmemMax),
    net_core_rmem_default: cdktf.numberToTerraform(struct!.netCoreRmemDefault),
    net_core_rmem_max: cdktf.numberToTerraform(struct!.netCoreRmemMax),
    net_core_somaxconn: cdktf.numberToTerraform(struct!.netCoreSomaxconn),
    net_core_wmem_default: cdktf.numberToTerraform(struct!.netCoreWmemDefault),
    net_core_wmem_max: cdktf.numberToTerraform(struct!.netCoreWmemMax),
    net_ipv4_ip_local_port_range_max: cdktf.numberToTerraform(struct!.netIpv4IpLocalPortRangeMax),
    net_ipv4_ip_local_port_range_min: cdktf.numberToTerraform(struct!.netIpv4IpLocalPortRangeMin),
    net_ipv4_neigh_default_gc_thresh1: cdktf.numberToTerraform(struct!.netIpv4NeighDefaultGcThresh1),
    net_ipv4_neigh_default_gc_thresh2: cdktf.numberToTerraform(struct!.netIpv4NeighDefaultGcThresh2),
    net_ipv4_neigh_default_gc_thresh3: cdktf.numberToTerraform(struct!.netIpv4NeighDefaultGcThresh3),
    net_ipv4_tcp_fin_timeout: cdktf.numberToTerraform(struct!.netIpv4TcpFinTimeout),
    net_ipv4_tcp_keepalive_intvl: cdktf.numberToTerraform(struct!.netIpv4TcpKeepaliveIntvl),
    net_ipv4_tcp_keepalive_probes: cdktf.numberToTerraform(struct!.netIpv4TcpKeepaliveProbes),
    net_ipv4_tcp_keepalive_time: cdktf.numberToTerraform(struct!.netIpv4TcpKeepaliveTime),
    net_ipv4_tcp_max_syn_backlog: cdktf.numberToTerraform(struct!.netIpv4TcpMaxSynBacklog),
    net_ipv4_tcp_max_tw_buckets: cdktf.numberToTerraform(struct!.netIpv4TcpMaxTwBuckets),
    net_ipv4_tcp_tw_reuse: cdktf.booleanToTerraform(struct!.netIpv4TcpTwReuse),
    net_netfilter_nf_conntrack_buckets: cdktf.numberToTerraform(struct!.netNetfilterNfConntrackBuckets),
    net_netfilter_nf_conntrack_max: cdktf.numberToTerraform(struct!.netNetfilterNfConntrackMax),
    vm_max_map_count: cdktf.numberToTerraform(struct!.vmMaxMapCount),
    vm_swappiness: cdktf.numberToTerraform(struct!.vmSwappiness),
    vm_vfs_cache_pressure: cdktf.numberToTerraform(struct!.vmVfsCachePressure),
  }
}

export class KubernetesClusterDefaultNodePoolLinuxOsConfigSysctlConfigOutputReference extends cdktf.ComplexObject {
  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param isSingleItem True if this is a block, false if it's a list
  */
  public constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean) {
    super(terraformResource, terraformAttribute, isSingleItem);
  }

  // fs_aio_max_nr - computed: false, optional: true, required: false
  private _fsAioMaxNr?: number | undefined; 
  public get fsAioMaxNr() {
    return this.getNumberAttribute('fs_aio_max_nr');
  }
  public set fsAioMaxNr(value: number | undefined) {
    this._fsAioMaxNr = value;
  }
  public resetFsAioMaxNr() {
    this._fsAioMaxNr = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fsAioMaxNrInput() {
    return this._fsAioMaxNr
  }

  // fs_file_max - computed: false, optional: true, required: false
  private _fsFileMax?: number | undefined; 
  public get fsFileMax() {
    return this.getNumberAttribute('fs_file_max');
  }
  public set fsFileMax(value: number | undefined) {
    this._fsFileMax = value;
  }
  public resetFsFileMax() {
    this._fsFileMax = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fsFileMaxInput() {
    return this._fsFileMax
  }

  // fs_inotify_max_user_watches - computed: false, optional: true, required: false
  private _fsInotifyMaxUserWatches?: number | undefined; 
  public get fsInotifyMaxUserWatches() {
    return this.getNumberAttribute('fs_inotify_max_user_watches');
  }
  public set fsInotifyMaxUserWatches(value: number | undefined) {
    this._fsInotifyMaxUserWatches = value;
  }
  public resetFsInotifyMaxUserWatches() {
    this._fsInotifyMaxUserWatches = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fsInotifyMaxUserWatchesInput() {
    return this._fsInotifyMaxUserWatches
  }

  // fs_nr_open - computed: false, optional: true, required: false
  private _fsNrOpen?: number | undefined; 
  public get fsNrOpen() {
    return this.getNumberAttribute('fs_nr_open');
  }
  public set fsNrOpen(value: number | undefined) {
    this._fsNrOpen = value;
  }
  public resetFsNrOpen() {
    this._fsNrOpen = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fsNrOpenInput() {
    return this._fsNrOpen
  }

  // kernel_threads_max - computed: false, optional: true, required: false
  private _kernelThreadsMax?: number | undefined; 
  public get kernelThreadsMax() {
    return this.getNumberAttribute('kernel_threads_max');
  }
  public set kernelThreadsMax(value: number | undefined) {
    this._kernelThreadsMax = value;
  }
  public resetKernelThreadsMax() {
    this._kernelThreadsMax = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get kernelThreadsMaxInput() {
    return this._kernelThreadsMax
  }

  // net_core_netdev_max_backlog - computed: false, optional: true, required: false
  private _netCoreNetdevMaxBacklog?: number | undefined; 
  public get netCoreNetdevMaxBacklog() {
    return this.getNumberAttribute('net_core_netdev_max_backlog');
  }
  public set netCoreNetdevMaxBacklog(value: number | undefined) {
    this._netCoreNetdevMaxBacklog = value;
  }
  public resetNetCoreNetdevMaxBacklog() {
    this._netCoreNetdevMaxBacklog = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get netCoreNetdevMaxBacklogInput() {
    return this._netCoreNetdevMaxBacklog
  }

  // net_core_optmem_max - computed: false, optional: true, required: false
  private _netCoreOptmemMax?: number | undefined; 
  public get netCoreOptmemMax() {
    return this.getNumberAttribute('net_core_optmem_max');
  }
  public set netCoreOptmemMax(value: number | undefined) {
    this._netCoreOptmemMax = value;
  }
  public resetNetCoreOptmemMax() {
    this._netCoreOptmemMax = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get netCoreOptmemMaxInput() {
    return this._netCoreOptmemMax
  }

  // net_core_rmem_default - computed: false, optional: true, required: false
  private _netCoreRmemDefault?: number | undefined; 
  public get netCoreRmemDefault() {
    return this.getNumberAttribute('net_core_rmem_default');
  }
  public set netCoreRmemDefault(value: number | undefined) {
    this._netCoreRmemDefault = value;
  }
  public resetNetCoreRmemDefault() {
    this._netCoreRmemDefault = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get netCoreRmemDefaultInput() {
    return this._netCoreRmemDefault
  }

  // net_core_rmem_max - computed: false, optional: true, required: false
  private _netCoreRmemMax?: number | undefined; 
  public get netCoreRmemMax() {
    return this.getNumberAttribute('net_core_rmem_max');
  }
  public set netCoreRmemMax(value: number | undefined) {
    this._netCoreRmemMax = value;
  }
  public resetNetCoreRmemMax() {
    this._netCoreRmemMax = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get netCoreRmemMaxInput() {
    return this._netCoreRmemMax
  }

  // net_core_somaxconn - computed: false, optional: true, required: false
  private _netCoreSomaxconn?: number | undefined; 
  public get netCoreSomaxconn() {
    return this.getNumberAttribute('net_core_somaxconn');
  }
  public set netCoreSomaxconn(value: number | undefined) {
    this._netCoreSomaxconn = value;
  }
  public resetNetCoreSomaxconn() {
    this._netCoreSomaxconn = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get netCoreSomaxconnInput() {
    return this._netCoreSomaxconn
  }

  // net_core_wmem_default - computed: false, optional: true, required: false
  private _netCoreWmemDefault?: number | undefined; 
  public get netCoreWmemDefault() {
    return this.getNumberAttribute('net_core_wmem_default');
  }
  public set netCoreWmemDefault(value: number | undefined) {
    this._netCoreWmemDefault = value;
  }
  public resetNetCoreWmemDefault() {
    this._netCoreWmemDefault = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get netCoreWmemDefaultInput() {
    return this._netCoreWmemDefault
  }

  // net_core_wmem_max - computed: false, optional: true, required: false
  private _netCoreWmemMax?: number | undefined; 
  public get netCoreWmemMax() {
    return this.getNumberAttribute('net_core_wmem_max');
  }
  public set netCoreWmemMax(value: number | undefined) {
    this._netCoreWmemMax = value;
  }
  public resetNetCoreWmemMax() {
    this._netCoreWmemMax = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get netCoreWmemMaxInput() {
    return this._netCoreWmemMax
  }

  // net_ipv4_ip_local_port_range_max - computed: false, optional: true, required: false
  private _netIpv4IpLocalPortRangeMax?: number | undefined; 
  public get netIpv4IpLocalPortRangeMax() {
    return this.getNumberAttribute('net_ipv4_ip_local_port_range_max');
  }
  public set netIpv4IpLocalPortRangeMax(value: number | undefined) {
    this._netIpv4IpLocalPortRangeMax = value;
  }
  public resetNetIpv4IpLocalPortRangeMax() {
    this._netIpv4IpLocalPortRangeMax = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get netIpv4IpLocalPortRangeMaxInput() {
    return this._netIpv4IpLocalPortRangeMax
  }

  // net_ipv4_ip_local_port_range_min - computed: false, optional: true, required: false
  private _netIpv4IpLocalPortRangeMin?: number | undefined; 
  public get netIpv4IpLocalPortRangeMin() {
    return this.getNumberAttribute('net_ipv4_ip_local_port_range_min');
  }
  public set netIpv4IpLocalPortRangeMin(value: number | undefined) {
    this._netIpv4IpLocalPortRangeMin = value;
  }
  public resetNetIpv4IpLocalPortRangeMin() {
    this._netIpv4IpLocalPortRangeMin = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get netIpv4IpLocalPortRangeMinInput() {
    return this._netIpv4IpLocalPortRangeMin
  }

  // net_ipv4_neigh_default_gc_thresh1 - computed: false, optional: true, required: false
  private _netIpv4NeighDefaultGcThresh1?: number | undefined; 
  public get netIpv4NeighDefaultGcThresh1() {
    return this.getNumberAttribute('net_ipv4_neigh_default_gc_thresh1');
  }
  public set netIpv4NeighDefaultGcThresh1(value: number | undefined) {
    this._netIpv4NeighDefaultGcThresh1 = value;
  }
  public resetNetIpv4NeighDefaultGcThresh1() {
    this._netIpv4NeighDefaultGcThresh1 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get netIpv4NeighDefaultGcThresh1Input() {
    return this._netIpv4NeighDefaultGcThresh1
  }

  // net_ipv4_neigh_default_gc_thresh2 - computed: false, optional: true, required: false
  private _netIpv4NeighDefaultGcThresh2?: number | undefined; 
  public get netIpv4NeighDefaultGcThresh2() {
    return this.getNumberAttribute('net_ipv4_neigh_default_gc_thresh2');
  }
  public set netIpv4NeighDefaultGcThresh2(value: number | undefined) {
    this._netIpv4NeighDefaultGcThresh2 = value;
  }
  public resetNetIpv4NeighDefaultGcThresh2() {
    this._netIpv4NeighDefaultGcThresh2 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get netIpv4NeighDefaultGcThresh2Input() {
    return this._netIpv4NeighDefaultGcThresh2
  }

  // net_ipv4_neigh_default_gc_thresh3 - computed: false, optional: true, required: false
  private _netIpv4NeighDefaultGcThresh3?: number | undefined; 
  public get netIpv4NeighDefaultGcThresh3() {
    return this.getNumberAttribute('net_ipv4_neigh_default_gc_thresh3');
  }
  public set netIpv4NeighDefaultGcThresh3(value: number | undefined) {
    this._netIpv4NeighDefaultGcThresh3 = value;
  }
  public resetNetIpv4NeighDefaultGcThresh3() {
    this._netIpv4NeighDefaultGcThresh3 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get netIpv4NeighDefaultGcThresh3Input() {
    return this._netIpv4NeighDefaultGcThresh3
  }

  // net_ipv4_tcp_fin_timeout - computed: false, optional: true, required: false
  private _netIpv4TcpFinTimeout?: number | undefined; 
  public get netIpv4TcpFinTimeout() {
    return this.getNumberAttribute('net_ipv4_tcp_fin_timeout');
  }
  public set netIpv4TcpFinTimeout(value: number | undefined) {
    this._netIpv4TcpFinTimeout = value;
  }
  public resetNetIpv4TcpFinTimeout() {
    this._netIpv4TcpFinTimeout = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get netIpv4TcpFinTimeoutInput() {
    return this._netIpv4TcpFinTimeout
  }

  // net_ipv4_tcp_keepalive_intvl - computed: false, optional: true, required: false
  private _netIpv4TcpKeepaliveIntvl?: number | undefined; 
  public get netIpv4TcpKeepaliveIntvl() {
    return this.getNumberAttribute('net_ipv4_tcp_keepalive_intvl');
  }
  public set netIpv4TcpKeepaliveIntvl(value: number | undefined) {
    this._netIpv4TcpKeepaliveIntvl = value;
  }
  public resetNetIpv4TcpKeepaliveIntvl() {
    this._netIpv4TcpKeepaliveIntvl = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get netIpv4TcpKeepaliveIntvlInput() {
    return this._netIpv4TcpKeepaliveIntvl
  }

  // net_ipv4_tcp_keepalive_probes - computed: false, optional: true, required: false
  private _netIpv4TcpKeepaliveProbes?: number | undefined; 
  public get netIpv4TcpKeepaliveProbes() {
    return this.getNumberAttribute('net_ipv4_tcp_keepalive_probes');
  }
  public set netIpv4TcpKeepaliveProbes(value: number | undefined) {
    this._netIpv4TcpKeepaliveProbes = value;
  }
  public resetNetIpv4TcpKeepaliveProbes() {
    this._netIpv4TcpKeepaliveProbes = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get netIpv4TcpKeepaliveProbesInput() {
    return this._netIpv4TcpKeepaliveProbes
  }

  // net_ipv4_tcp_keepalive_time - computed: false, optional: true, required: false
  private _netIpv4TcpKeepaliveTime?: number | undefined; 
  public get netIpv4TcpKeepaliveTime() {
    return this.getNumberAttribute('net_ipv4_tcp_keepalive_time');
  }
  public set netIpv4TcpKeepaliveTime(value: number | undefined) {
    this._netIpv4TcpKeepaliveTime = value;
  }
  public resetNetIpv4TcpKeepaliveTime() {
    this._netIpv4TcpKeepaliveTime = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get netIpv4TcpKeepaliveTimeInput() {
    return this._netIpv4TcpKeepaliveTime
  }

  // net_ipv4_tcp_max_syn_backlog - computed: false, optional: true, required: false
  private _netIpv4TcpMaxSynBacklog?: number | undefined; 
  public get netIpv4TcpMaxSynBacklog() {
    return this.getNumberAttribute('net_ipv4_tcp_max_syn_backlog');
  }
  public set netIpv4TcpMaxSynBacklog(value: number | undefined) {
    this._netIpv4TcpMaxSynBacklog = value;
  }
  public resetNetIpv4TcpMaxSynBacklog() {
    this._netIpv4TcpMaxSynBacklog = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get netIpv4TcpMaxSynBacklogInput() {
    return this._netIpv4TcpMaxSynBacklog
  }

  // net_ipv4_tcp_max_tw_buckets - computed: false, optional: true, required: false
  private _netIpv4TcpMaxTwBuckets?: number | undefined; 
  public get netIpv4TcpMaxTwBuckets() {
    return this.getNumberAttribute('net_ipv4_tcp_max_tw_buckets');
  }
  public set netIpv4TcpMaxTwBuckets(value: number | undefined) {
    this._netIpv4TcpMaxTwBuckets = value;
  }
  public resetNetIpv4TcpMaxTwBuckets() {
    this._netIpv4TcpMaxTwBuckets = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get netIpv4TcpMaxTwBucketsInput() {
    return this._netIpv4TcpMaxTwBuckets
  }

  // net_ipv4_tcp_tw_reuse - computed: false, optional: true, required: false
  private _netIpv4TcpTwReuse?: boolean | cdktf.IResolvable | undefined; 
  public get netIpv4TcpTwReuse() {
    return this.getBooleanAttribute('net_ipv4_tcp_tw_reuse') as any;
  }
  public set netIpv4TcpTwReuse(value: boolean | cdktf.IResolvable | undefined) {
    this._netIpv4TcpTwReuse = value;
  }
  public resetNetIpv4TcpTwReuse() {
    this._netIpv4TcpTwReuse = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get netIpv4TcpTwReuseInput() {
    return this._netIpv4TcpTwReuse
  }

  // net_netfilter_nf_conntrack_buckets - computed: false, optional: true, required: false
  private _netNetfilterNfConntrackBuckets?: number | undefined; 
  public get netNetfilterNfConntrackBuckets() {
    return this.getNumberAttribute('net_netfilter_nf_conntrack_buckets');
  }
  public set netNetfilterNfConntrackBuckets(value: number | undefined) {
    this._netNetfilterNfConntrackBuckets = value;
  }
  public resetNetNetfilterNfConntrackBuckets() {
    this._netNetfilterNfConntrackBuckets = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get netNetfilterNfConntrackBucketsInput() {
    return this._netNetfilterNfConntrackBuckets
  }

  // net_netfilter_nf_conntrack_max - computed: false, optional: true, required: false
  private _netNetfilterNfConntrackMax?: number | undefined; 
  public get netNetfilterNfConntrackMax() {
    return this.getNumberAttribute('net_netfilter_nf_conntrack_max');
  }
  public set netNetfilterNfConntrackMax(value: number | undefined) {
    this._netNetfilterNfConntrackMax = value;
  }
  public resetNetNetfilterNfConntrackMax() {
    this._netNetfilterNfConntrackMax = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get netNetfilterNfConntrackMaxInput() {
    return this._netNetfilterNfConntrackMax
  }

  // vm_max_map_count - computed: false, optional: true, required: false
  private _vmMaxMapCount?: number | undefined; 
  public get vmMaxMapCount() {
    return this.getNumberAttribute('vm_max_map_count');
  }
  public set vmMaxMapCount(value: number | undefined) {
    this._vmMaxMapCount = value;
  }
  public resetVmMaxMapCount() {
    this._vmMaxMapCount = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get vmMaxMapCountInput() {
    return this._vmMaxMapCount
  }

  // vm_swappiness - computed: false, optional: true, required: false
  private _vmSwappiness?: number | undefined; 
  public get vmSwappiness() {
    return this.getNumberAttribute('vm_swappiness');
  }
  public set vmSwappiness(value: number | undefined) {
    this._vmSwappiness = value;
  }
  public resetVmSwappiness() {
    this._vmSwappiness = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get vmSwappinessInput() {
    return this._vmSwappiness
  }

  // vm_vfs_cache_pressure - computed: false, optional: true, required: false
  private _vmVfsCachePressure?: number | undefined; 
  public get vmVfsCachePressure() {
    return this.getNumberAttribute('vm_vfs_cache_pressure');
  }
  public set vmVfsCachePressure(value: number | undefined) {
    this._vmVfsCachePressure = value;
  }
  public resetVmVfsCachePressure() {
    this._vmVfsCachePressure = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get vmVfsCachePressureInput() {
    return this._vmVfsCachePressure
  }
}
export interface KubernetesClusterDefaultNodePoolLinuxOsConfig {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/kubernetes_cluster.html#swap_file_size_mb KubernetesCluster#swap_file_size_mb}
  */
  readonly swapFileSizeMb?: number;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/kubernetes_cluster.html#transparent_huge_page_defrag KubernetesCluster#transparent_huge_page_defrag}
  */
  readonly transparentHugePageDefrag?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/kubernetes_cluster.html#transparent_huge_page_enabled KubernetesCluster#transparent_huge_page_enabled}
  */
  readonly transparentHugePageEnabled?: string;
  /**
  * sysctl_config block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/kubernetes_cluster.html#sysctl_config KubernetesCluster#sysctl_config}
  */
  readonly sysctlConfig?: KubernetesClusterDefaultNodePoolLinuxOsConfigSysctlConfig;
}

function kubernetesClusterDefaultNodePoolLinuxOsConfigToTerraform(struct?: KubernetesClusterDefaultNodePoolLinuxOsConfigOutputReference | KubernetesClusterDefaultNodePoolLinuxOsConfig): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    swap_file_size_mb: cdktf.numberToTerraform(struct!.swapFileSizeMb),
    transparent_huge_page_defrag: cdktf.stringToTerraform(struct!.transparentHugePageDefrag),
    transparent_huge_page_enabled: cdktf.stringToTerraform(struct!.transparentHugePageEnabled),
    sysctl_config: kubernetesClusterDefaultNodePoolLinuxOsConfigSysctlConfigToTerraform(struct!.sysctlConfig),
  }
}

export class KubernetesClusterDefaultNodePoolLinuxOsConfigOutputReference extends cdktf.ComplexObject {
  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param isSingleItem True if this is a block, false if it's a list
  */
  public constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean) {
    super(terraformResource, terraformAttribute, isSingleItem);
  }

  // swap_file_size_mb - computed: false, optional: true, required: false
  private _swapFileSizeMb?: number | undefined; 
  public get swapFileSizeMb() {
    return this.getNumberAttribute('swap_file_size_mb');
  }
  public set swapFileSizeMb(value: number | undefined) {
    this._swapFileSizeMb = value;
  }
  public resetSwapFileSizeMb() {
    this._swapFileSizeMb = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get swapFileSizeMbInput() {
    return this._swapFileSizeMb
  }

  // transparent_huge_page_defrag - computed: false, optional: true, required: false
  private _transparentHugePageDefrag?: string | undefined; 
  public get transparentHugePageDefrag() {
    return this.getStringAttribute('transparent_huge_page_defrag');
  }
  public set transparentHugePageDefrag(value: string | undefined) {
    this._transparentHugePageDefrag = value;
  }
  public resetTransparentHugePageDefrag() {
    this._transparentHugePageDefrag = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get transparentHugePageDefragInput() {
    return this._transparentHugePageDefrag
  }

  // transparent_huge_page_enabled - computed: false, optional: true, required: false
  private _transparentHugePageEnabled?: string | undefined; 
  public get transparentHugePageEnabled() {
    return this.getStringAttribute('transparent_huge_page_enabled');
  }
  public set transparentHugePageEnabled(value: string | undefined) {
    this._transparentHugePageEnabled = value;
  }
  public resetTransparentHugePageEnabled() {
    this._transparentHugePageEnabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get transparentHugePageEnabledInput() {
    return this._transparentHugePageEnabled
  }

  // sysctl_config - computed: false, optional: true, required: false
  private _sysctlConfig?: KubernetesClusterDefaultNodePoolLinuxOsConfigSysctlConfig | undefined; 
  private __sysctlConfigOutput = new KubernetesClusterDefaultNodePoolLinuxOsConfigSysctlConfigOutputReference(this as any, "sysctl_config", true);
  public get sysctlConfig() {
    return this.__sysctlConfigOutput;
  }
  public putSysctlConfig(value: KubernetesClusterDefaultNodePoolLinuxOsConfigSysctlConfig | undefined) {
    this._sysctlConfig = value;
  }
  public resetSysctlConfig() {
    this._sysctlConfig = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sysctlConfigInput() {
    return this._sysctlConfig
  }
}
export interface KubernetesClusterDefaultNodePoolUpgradeSettings {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/kubernetes_cluster.html#max_surge KubernetesCluster#max_surge}
  */
  readonly maxSurge: string;
}

function kubernetesClusterDefaultNodePoolUpgradeSettingsToTerraform(struct?: KubernetesClusterDefaultNodePoolUpgradeSettingsOutputReference | KubernetesClusterDefaultNodePoolUpgradeSettings): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    max_surge: cdktf.stringToTerraform(struct!.maxSurge),
  }
}

export class KubernetesClusterDefaultNodePoolUpgradeSettingsOutputReference extends cdktf.ComplexObject {
  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param isSingleItem True if this is a block, false if it's a list
  */
  public constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean) {
    super(terraformResource, terraformAttribute, isSingleItem);
  }

  // max_surge - computed: false, optional: false, required: true
  private _maxSurge?: string; 
  public get maxSurge() {
    return this.getStringAttribute('max_surge');
  }
  public set maxSurge(value: string) {
    this._maxSurge = value;
  }
  // Temporarily expose input value. Use with caution.
  public get maxSurgeInput() {
    return this._maxSurge
  }
}
export interface KubernetesClusterDefaultNodePool {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/kubernetes_cluster.html#availability_zones KubernetesCluster#availability_zones}
  */
  readonly availabilityZones?: string[];
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/kubernetes_cluster.html#enable_auto_scaling KubernetesCluster#enable_auto_scaling}
  */
  readonly enableAutoScaling?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/kubernetes_cluster.html#enable_host_encryption KubernetesCluster#enable_host_encryption}
  */
  readonly enableHostEncryption?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/kubernetes_cluster.html#enable_node_public_ip KubernetesCluster#enable_node_public_ip}
  */
  readonly enableNodePublicIp?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/kubernetes_cluster.html#fips_enabled KubernetesCluster#fips_enabled}
  */
  readonly fipsEnabled?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/kubernetes_cluster.html#kubelet_disk_type KubernetesCluster#kubelet_disk_type}
  */
  readonly kubeletDiskType?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/kubernetes_cluster.html#max_count KubernetesCluster#max_count}
  */
  readonly maxCount?: number;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/kubernetes_cluster.html#max_pods KubernetesCluster#max_pods}
  */
  readonly maxPods?: number;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/kubernetes_cluster.html#min_count KubernetesCluster#min_count}
  */
  readonly minCount?: number;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/kubernetes_cluster.html#name KubernetesCluster#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/kubernetes_cluster.html#node_count KubernetesCluster#node_count}
  */
  readonly nodeCount?: number;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/kubernetes_cluster.html#node_labels KubernetesCluster#node_labels}
  */
  readonly nodeLabels?: { [key: string]: string } | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/kubernetes_cluster.html#node_public_ip_prefix_id KubernetesCluster#node_public_ip_prefix_id}
  */
  readonly nodePublicIpPrefixId?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/kubernetes_cluster.html#node_taints KubernetesCluster#node_taints}
  */
  readonly nodeTaints?: string[];
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/kubernetes_cluster.html#only_critical_addons_enabled KubernetesCluster#only_critical_addons_enabled}
  */
  readonly onlyCriticalAddonsEnabled?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/kubernetes_cluster.html#orchestrator_version KubernetesCluster#orchestrator_version}
  */
  readonly orchestratorVersion?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/kubernetes_cluster.html#os_disk_size_gb KubernetesCluster#os_disk_size_gb}
  */
  readonly osDiskSizeGb?: number;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/kubernetes_cluster.html#os_disk_type KubernetesCluster#os_disk_type}
  */
  readonly osDiskType?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/kubernetes_cluster.html#os_sku KubernetesCluster#os_sku}
  */
  readonly osSku?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/kubernetes_cluster.html#pod_subnet_id KubernetesCluster#pod_subnet_id}
  */
  readonly podSubnetId?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/kubernetes_cluster.html#proximity_placement_group_id KubernetesCluster#proximity_placement_group_id}
  */
  readonly proximityPlacementGroupId?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/kubernetes_cluster.html#tags KubernetesCluster#tags}
  */
  readonly tags?: { [key: string]: string } | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/kubernetes_cluster.html#type KubernetesCluster#type}
  */
  readonly type?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/kubernetes_cluster.html#ultra_ssd_enabled KubernetesCluster#ultra_ssd_enabled}
  */
  readonly ultraSsdEnabled?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/kubernetes_cluster.html#vm_size KubernetesCluster#vm_size}
  */
  readonly vmSize: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/kubernetes_cluster.html#vnet_subnet_id KubernetesCluster#vnet_subnet_id}
  */
  readonly vnetSubnetId?: string;
  /**
  * kubelet_config block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/kubernetes_cluster.html#kubelet_config KubernetesCluster#kubelet_config}
  */
  readonly kubeletConfig?: KubernetesClusterDefaultNodePoolKubeletConfig;
  /**
  * linux_os_config block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/kubernetes_cluster.html#linux_os_config KubernetesCluster#linux_os_config}
  */
  readonly linuxOsConfig?: KubernetesClusterDefaultNodePoolLinuxOsConfig;
  /**
  * upgrade_settings block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/kubernetes_cluster.html#upgrade_settings KubernetesCluster#upgrade_settings}
  */
  readonly upgradeSettings?: KubernetesClusterDefaultNodePoolUpgradeSettings;
}

function kubernetesClusterDefaultNodePoolToTerraform(struct?: KubernetesClusterDefaultNodePoolOutputReference | KubernetesClusterDefaultNodePool): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    availability_zones: cdktf.listMapper(cdktf.stringToTerraform)(struct!.availabilityZones),
    enable_auto_scaling: cdktf.booleanToTerraform(struct!.enableAutoScaling),
    enable_host_encryption: cdktf.booleanToTerraform(struct!.enableHostEncryption),
    enable_node_public_ip: cdktf.booleanToTerraform(struct!.enableNodePublicIp),
    fips_enabled: cdktf.booleanToTerraform(struct!.fipsEnabled),
    kubelet_disk_type: cdktf.stringToTerraform(struct!.kubeletDiskType),
    max_count: cdktf.numberToTerraform(struct!.maxCount),
    max_pods: cdktf.numberToTerraform(struct!.maxPods),
    min_count: cdktf.numberToTerraform(struct!.minCount),
    name: cdktf.stringToTerraform(struct!.name),
    node_count: cdktf.numberToTerraform(struct!.nodeCount),
    node_labels: cdktf.hashMapper(cdktf.anyToTerraform)(struct!.nodeLabels),
    node_public_ip_prefix_id: cdktf.stringToTerraform(struct!.nodePublicIpPrefixId),
    node_taints: cdktf.listMapper(cdktf.stringToTerraform)(struct!.nodeTaints),
    only_critical_addons_enabled: cdktf.booleanToTerraform(struct!.onlyCriticalAddonsEnabled),
    orchestrator_version: cdktf.stringToTerraform(struct!.orchestratorVersion),
    os_disk_size_gb: cdktf.numberToTerraform(struct!.osDiskSizeGb),
    os_disk_type: cdktf.stringToTerraform(struct!.osDiskType),
    os_sku: cdktf.stringToTerraform(struct!.osSku),
    pod_subnet_id: cdktf.stringToTerraform(struct!.podSubnetId),
    proximity_placement_group_id: cdktf.stringToTerraform(struct!.proximityPlacementGroupId),
    tags: cdktf.hashMapper(cdktf.anyToTerraform)(struct!.tags),
    type: cdktf.stringToTerraform(struct!.type),
    ultra_ssd_enabled: cdktf.booleanToTerraform(struct!.ultraSsdEnabled),
    vm_size: cdktf.stringToTerraform(struct!.vmSize),
    vnet_subnet_id: cdktf.stringToTerraform(struct!.vnetSubnetId),
    kubelet_config: kubernetesClusterDefaultNodePoolKubeletConfigToTerraform(struct!.kubeletConfig),
    linux_os_config: kubernetesClusterDefaultNodePoolLinuxOsConfigToTerraform(struct!.linuxOsConfig),
    upgrade_settings: kubernetesClusterDefaultNodePoolUpgradeSettingsToTerraform(struct!.upgradeSettings),
  }
}

export class KubernetesClusterDefaultNodePoolOutputReference extends cdktf.ComplexObject {
  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param isSingleItem True if this is a block, false if it's a list
  */
  public constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean) {
    super(terraformResource, terraformAttribute, isSingleItem);
  }

  // availability_zones - computed: false, optional: true, required: false
  private _availabilityZones?: string[] | undefined; 
  public get availabilityZones() {
    return this.getListAttribute('availability_zones');
  }
  public set availabilityZones(value: string[] | undefined) {
    this._availabilityZones = value;
  }
  public resetAvailabilityZones() {
    this._availabilityZones = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get availabilityZonesInput() {
    return this._availabilityZones
  }

  // enable_auto_scaling - computed: false, optional: true, required: false
  private _enableAutoScaling?: boolean | cdktf.IResolvable | undefined; 
  public get enableAutoScaling() {
    return this.getBooleanAttribute('enable_auto_scaling') as any;
  }
  public set enableAutoScaling(value: boolean | cdktf.IResolvable | undefined) {
    this._enableAutoScaling = value;
  }
  public resetEnableAutoScaling() {
    this._enableAutoScaling = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enableAutoScalingInput() {
    return this._enableAutoScaling
  }

  // enable_host_encryption - computed: false, optional: true, required: false
  private _enableHostEncryption?: boolean | cdktf.IResolvable | undefined; 
  public get enableHostEncryption() {
    return this.getBooleanAttribute('enable_host_encryption') as any;
  }
  public set enableHostEncryption(value: boolean | cdktf.IResolvable | undefined) {
    this._enableHostEncryption = value;
  }
  public resetEnableHostEncryption() {
    this._enableHostEncryption = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enableHostEncryptionInput() {
    return this._enableHostEncryption
  }

  // enable_node_public_ip - computed: false, optional: true, required: false
  private _enableNodePublicIp?: boolean | cdktf.IResolvable | undefined; 
  public get enableNodePublicIp() {
    return this.getBooleanAttribute('enable_node_public_ip') as any;
  }
  public set enableNodePublicIp(value: boolean | cdktf.IResolvable | undefined) {
    this._enableNodePublicIp = value;
  }
  public resetEnableNodePublicIp() {
    this._enableNodePublicIp = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enableNodePublicIpInput() {
    return this._enableNodePublicIp
  }

  // fips_enabled - computed: false, optional: true, required: false
  private _fipsEnabled?: boolean | cdktf.IResolvable | undefined; 
  public get fipsEnabled() {
    return this.getBooleanAttribute('fips_enabled') as any;
  }
  public set fipsEnabled(value: boolean | cdktf.IResolvable | undefined) {
    this._fipsEnabled = value;
  }
  public resetFipsEnabled() {
    this._fipsEnabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fipsEnabledInput() {
    return this._fipsEnabled
  }

  // kubelet_disk_type - computed: true, optional: true, required: false
  private _kubeletDiskType?: string | undefined; 
  public get kubeletDiskType() {
    return this.getStringAttribute('kubelet_disk_type');
  }
  public set kubeletDiskType(value: string | undefined) {
    this._kubeletDiskType = value;
  }
  public resetKubeletDiskType() {
    this._kubeletDiskType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get kubeletDiskTypeInput() {
    return this._kubeletDiskType
  }

  // max_count - computed: false, optional: true, required: false
  private _maxCount?: number | undefined; 
  public get maxCount() {
    return this.getNumberAttribute('max_count');
  }
  public set maxCount(value: number | undefined) {
    this._maxCount = value;
  }
  public resetMaxCount() {
    this._maxCount = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxCountInput() {
    return this._maxCount
  }

  // max_pods - computed: true, optional: true, required: false
  private _maxPods?: number | undefined; 
  public get maxPods() {
    return this.getNumberAttribute('max_pods');
  }
  public set maxPods(value: number | undefined) {
    this._maxPods = value;
  }
  public resetMaxPods() {
    this._maxPods = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxPodsInput() {
    return this._maxPods
  }

  // min_count - computed: false, optional: true, required: false
  private _minCount?: number | undefined; 
  public get minCount() {
    return this.getNumberAttribute('min_count');
  }
  public set minCount(value: number | undefined) {
    this._minCount = value;
  }
  public resetMinCount() {
    this._minCount = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get minCountInput() {
    return this._minCount
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

  // node_count - computed: true, optional: true, required: false
  private _nodeCount?: number | undefined; 
  public get nodeCount() {
    return this.getNumberAttribute('node_count');
  }
  public set nodeCount(value: number | undefined) {
    this._nodeCount = value;
  }
  public resetNodeCount() {
    this._nodeCount = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nodeCountInput() {
    return this._nodeCount
  }

  // node_labels - computed: true, optional: true, required: false
  private _nodeLabels?: { [key: string]: string } | cdktf.IResolvable | undefined; 
  public get nodeLabels() {
    // Getting the computed value is not yet implemented
    return this.interpolationForAttribute('node_labels') as any;
  }
  public set nodeLabels(value: { [key: string]: string } | cdktf.IResolvable | undefined) {
    this._nodeLabels = value;
  }
  public resetNodeLabels() {
    this._nodeLabels = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nodeLabelsInput() {
    return this._nodeLabels
  }

  // node_public_ip_prefix_id - computed: false, optional: true, required: false
  private _nodePublicIpPrefixId?: string | undefined; 
  public get nodePublicIpPrefixId() {
    return this.getStringAttribute('node_public_ip_prefix_id');
  }
  public set nodePublicIpPrefixId(value: string | undefined) {
    this._nodePublicIpPrefixId = value;
  }
  public resetNodePublicIpPrefixId() {
    this._nodePublicIpPrefixId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nodePublicIpPrefixIdInput() {
    return this._nodePublicIpPrefixId
  }

  // node_taints - computed: false, optional: true, required: false
  private _nodeTaints?: string[] | undefined; 
  public get nodeTaints() {
    return this.getListAttribute('node_taints');
  }
  public set nodeTaints(value: string[] | undefined) {
    this._nodeTaints = value;
  }
  public resetNodeTaints() {
    this._nodeTaints = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nodeTaintsInput() {
    return this._nodeTaints
  }

  // only_critical_addons_enabled - computed: false, optional: true, required: false
  private _onlyCriticalAddonsEnabled?: boolean | cdktf.IResolvable | undefined; 
  public get onlyCriticalAddonsEnabled() {
    return this.getBooleanAttribute('only_critical_addons_enabled') as any;
  }
  public set onlyCriticalAddonsEnabled(value: boolean | cdktf.IResolvable | undefined) {
    this._onlyCriticalAddonsEnabled = value;
  }
  public resetOnlyCriticalAddonsEnabled() {
    this._onlyCriticalAddonsEnabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get onlyCriticalAddonsEnabledInput() {
    return this._onlyCriticalAddonsEnabled
  }

  // orchestrator_version - computed: true, optional: true, required: false
  private _orchestratorVersion?: string | undefined; 
  public get orchestratorVersion() {
    return this.getStringAttribute('orchestrator_version');
  }
  public set orchestratorVersion(value: string | undefined) {
    this._orchestratorVersion = value;
  }
  public resetOrchestratorVersion() {
    this._orchestratorVersion = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get orchestratorVersionInput() {
    return this._orchestratorVersion
  }

  // os_disk_size_gb - computed: true, optional: true, required: false
  private _osDiskSizeGb?: number | undefined; 
  public get osDiskSizeGb() {
    return this.getNumberAttribute('os_disk_size_gb');
  }
  public set osDiskSizeGb(value: number | undefined) {
    this._osDiskSizeGb = value;
  }
  public resetOsDiskSizeGb() {
    this._osDiskSizeGb = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get osDiskSizeGbInput() {
    return this._osDiskSizeGb
  }

  // os_disk_type - computed: false, optional: true, required: false
  private _osDiskType?: string | undefined; 
  public get osDiskType() {
    return this.getStringAttribute('os_disk_type');
  }
  public set osDiskType(value: string | undefined) {
    this._osDiskType = value;
  }
  public resetOsDiskType() {
    this._osDiskType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get osDiskTypeInput() {
    return this._osDiskType
  }

  // os_sku - computed: true, optional: true, required: false
  private _osSku?: string | undefined; 
  public get osSku() {
    return this.getStringAttribute('os_sku');
  }
  public set osSku(value: string | undefined) {
    this._osSku = value;
  }
  public resetOsSku() {
    this._osSku = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get osSkuInput() {
    return this._osSku
  }

  // pod_subnet_id - computed: false, optional: true, required: false
  private _podSubnetId?: string | undefined; 
  public get podSubnetId() {
    return this.getStringAttribute('pod_subnet_id');
  }
  public set podSubnetId(value: string | undefined) {
    this._podSubnetId = value;
  }
  public resetPodSubnetId() {
    this._podSubnetId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get podSubnetIdInput() {
    return this._podSubnetId
  }

  // proximity_placement_group_id - computed: false, optional: true, required: false
  private _proximityPlacementGroupId?: string | undefined; 
  public get proximityPlacementGroupId() {
    return this.getStringAttribute('proximity_placement_group_id');
  }
  public set proximityPlacementGroupId(value: string | undefined) {
    this._proximityPlacementGroupId = value;
  }
  public resetProximityPlacementGroupId() {
    this._proximityPlacementGroupId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get proximityPlacementGroupIdInput() {
    return this._proximityPlacementGroupId
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

  // type - computed: false, optional: true, required: false
  private _type?: string | undefined; 
  public get type() {
    return this.getStringAttribute('type');
  }
  public set type(value: string | undefined) {
    this._type = value;
  }
  public resetType() {
    this._type = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get typeInput() {
    return this._type
  }

  // ultra_ssd_enabled - computed: false, optional: true, required: false
  private _ultraSsdEnabled?: boolean | cdktf.IResolvable | undefined; 
  public get ultraSsdEnabled() {
    return this.getBooleanAttribute('ultra_ssd_enabled') as any;
  }
  public set ultraSsdEnabled(value: boolean | cdktf.IResolvable | undefined) {
    this._ultraSsdEnabled = value;
  }
  public resetUltraSsdEnabled() {
    this._ultraSsdEnabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ultraSsdEnabledInput() {
    return this._ultraSsdEnabled
  }

  // vm_size - computed: false, optional: false, required: true
  private _vmSize?: string; 
  public get vmSize() {
    return this.getStringAttribute('vm_size');
  }
  public set vmSize(value: string) {
    this._vmSize = value;
  }
  // Temporarily expose input value. Use with caution.
  public get vmSizeInput() {
    return this._vmSize
  }

  // vnet_subnet_id - computed: false, optional: true, required: false
  private _vnetSubnetId?: string | undefined; 
  public get vnetSubnetId() {
    return this.getStringAttribute('vnet_subnet_id');
  }
  public set vnetSubnetId(value: string | undefined) {
    this._vnetSubnetId = value;
  }
  public resetVnetSubnetId() {
    this._vnetSubnetId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get vnetSubnetIdInput() {
    return this._vnetSubnetId
  }

  // kubelet_config - computed: false, optional: true, required: false
  private _kubeletConfig?: KubernetesClusterDefaultNodePoolKubeletConfig | undefined; 
  private __kubeletConfigOutput = new KubernetesClusterDefaultNodePoolKubeletConfigOutputReference(this as any, "kubelet_config", true);
  public get kubeletConfig() {
    return this.__kubeletConfigOutput;
  }
  public putKubeletConfig(value: KubernetesClusterDefaultNodePoolKubeletConfig | undefined) {
    this._kubeletConfig = value;
  }
  public resetKubeletConfig() {
    this._kubeletConfig = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get kubeletConfigInput() {
    return this._kubeletConfig
  }

  // linux_os_config - computed: false, optional: true, required: false
  private _linuxOsConfig?: KubernetesClusterDefaultNodePoolLinuxOsConfig | undefined; 
  private __linuxOsConfigOutput = new KubernetesClusterDefaultNodePoolLinuxOsConfigOutputReference(this as any, "linux_os_config", true);
  public get linuxOsConfig() {
    return this.__linuxOsConfigOutput;
  }
  public putLinuxOsConfig(value: KubernetesClusterDefaultNodePoolLinuxOsConfig | undefined) {
    this._linuxOsConfig = value;
  }
  public resetLinuxOsConfig() {
    this._linuxOsConfig = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get linuxOsConfigInput() {
    return this._linuxOsConfig
  }

  // upgrade_settings - computed: false, optional: true, required: false
  private _upgradeSettings?: KubernetesClusterDefaultNodePoolUpgradeSettings | undefined; 
  private __upgradeSettingsOutput = new KubernetesClusterDefaultNodePoolUpgradeSettingsOutputReference(this as any, "upgrade_settings", true);
  public get upgradeSettings() {
    return this.__upgradeSettingsOutput;
  }
  public putUpgradeSettings(value: KubernetesClusterDefaultNodePoolUpgradeSettings | undefined) {
    this._upgradeSettings = value;
  }
  public resetUpgradeSettings() {
    this._upgradeSettings = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get upgradeSettingsInput() {
    return this._upgradeSettings
  }
}
export interface KubernetesClusterIdentity {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/kubernetes_cluster.html#type KubernetesCluster#type}
  */
  readonly type: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/kubernetes_cluster.html#user_assigned_identity_id KubernetesCluster#user_assigned_identity_id}
  */
  readonly userAssignedIdentityId?: string;
}

function kubernetesClusterIdentityToTerraform(struct?: KubernetesClusterIdentityOutputReference | KubernetesClusterIdentity): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    type: cdktf.stringToTerraform(struct!.type),
    user_assigned_identity_id: cdktf.stringToTerraform(struct!.userAssignedIdentityId),
  }
}

export class KubernetesClusterIdentityOutputReference extends cdktf.ComplexObject {
  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param isSingleItem True if this is a block, false if it's a list
  */
  public constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean) {
    super(terraformResource, terraformAttribute, isSingleItem);
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
    return this._type
  }

  // user_assigned_identity_id - computed: false, optional: true, required: false
  private _userAssignedIdentityId?: string | undefined; 
  public get userAssignedIdentityId() {
    return this.getStringAttribute('user_assigned_identity_id');
  }
  public set userAssignedIdentityId(value: string | undefined) {
    this._userAssignedIdentityId = value;
  }
  public resetUserAssignedIdentityId() {
    this._userAssignedIdentityId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get userAssignedIdentityIdInput() {
    return this._userAssignedIdentityId
  }
}
export interface KubernetesClusterKubeletIdentity {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/kubernetes_cluster.html#client_id KubernetesCluster#client_id}
  */
  readonly clientId?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/kubernetes_cluster.html#object_id KubernetesCluster#object_id}
  */
  readonly objectId?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/kubernetes_cluster.html#user_assigned_identity_id KubernetesCluster#user_assigned_identity_id}
  */
  readonly userAssignedIdentityId?: string;
}

function kubernetesClusterKubeletIdentityToTerraform(struct?: KubernetesClusterKubeletIdentityOutputReference | KubernetesClusterKubeletIdentity): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    client_id: cdktf.stringToTerraform(struct!.clientId),
    object_id: cdktf.stringToTerraform(struct!.objectId),
    user_assigned_identity_id: cdktf.stringToTerraform(struct!.userAssignedIdentityId),
  }
}

export class KubernetesClusterKubeletIdentityOutputReference extends cdktf.ComplexObject {
  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param isSingleItem True if this is a block, false if it's a list
  */
  public constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean) {
    super(terraformResource, terraformAttribute, isSingleItem);
  }

  // client_id - computed: true, optional: true, required: false
  private _clientId?: string | undefined; 
  public get clientId() {
    return this.getStringAttribute('client_id');
  }
  public set clientId(value: string | undefined) {
    this._clientId = value;
  }
  public resetClientId() {
    this._clientId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get clientIdInput() {
    return this._clientId
  }

  // object_id - computed: true, optional: true, required: false
  private _objectId?: string | undefined; 
  public get objectId() {
    return this.getStringAttribute('object_id');
  }
  public set objectId(value: string | undefined) {
    this._objectId = value;
  }
  public resetObjectId() {
    this._objectId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get objectIdInput() {
    return this._objectId
  }

  // user_assigned_identity_id - computed: true, optional: true, required: false
  private _userAssignedIdentityId?: string | undefined; 
  public get userAssignedIdentityId() {
    return this.getStringAttribute('user_assigned_identity_id');
  }
  public set userAssignedIdentityId(value: string | undefined) {
    this._userAssignedIdentityId = value;
  }
  public resetUserAssignedIdentityId() {
    this._userAssignedIdentityId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get userAssignedIdentityIdInput() {
    return this._userAssignedIdentityId
  }
}
export interface KubernetesClusterLinuxProfileSshKey {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/kubernetes_cluster.html#key_data KubernetesCluster#key_data}
  */
  readonly keyData: string;
}

function kubernetesClusterLinuxProfileSshKeyToTerraform(struct?: KubernetesClusterLinuxProfileSshKeyOutputReference | KubernetesClusterLinuxProfileSshKey): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    key_data: cdktf.stringToTerraform(struct!.keyData),
  }
}

export class KubernetesClusterLinuxProfileSshKeyOutputReference extends cdktf.ComplexObject {
  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param isSingleItem True if this is a block, false if it's a list
  */
  public constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean) {
    super(terraformResource, terraformAttribute, isSingleItem);
  }

  // key_data - computed: false, optional: false, required: true
  private _keyData?: string; 
  public get keyData() {
    return this.getStringAttribute('key_data');
  }
  public set keyData(value: string) {
    this._keyData = value;
  }
  // Temporarily expose input value. Use with caution.
  public get keyDataInput() {
    return this._keyData
  }
}
export interface KubernetesClusterLinuxProfile {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/kubernetes_cluster.html#admin_username KubernetesCluster#admin_username}
  */
  readonly adminUsername: string;
  /**
  * ssh_key block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/kubernetes_cluster.html#ssh_key KubernetesCluster#ssh_key}
  */
  readonly sshKey: KubernetesClusterLinuxProfileSshKey;
}

function kubernetesClusterLinuxProfileToTerraform(struct?: KubernetesClusterLinuxProfileOutputReference | KubernetesClusterLinuxProfile): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    admin_username: cdktf.stringToTerraform(struct!.adminUsername),
    ssh_key: kubernetesClusterLinuxProfileSshKeyToTerraform(struct!.sshKey),
  }
}

export class KubernetesClusterLinuxProfileOutputReference extends cdktf.ComplexObject {
  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param isSingleItem True if this is a block, false if it's a list
  */
  public constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean) {
    super(terraformResource, terraformAttribute, isSingleItem);
  }

  // admin_username - computed: false, optional: false, required: true
  private _adminUsername?: string; 
  public get adminUsername() {
    return this.getStringAttribute('admin_username');
  }
  public set adminUsername(value: string) {
    this._adminUsername = value;
  }
  // Temporarily expose input value. Use with caution.
  public get adminUsernameInput() {
    return this._adminUsername
  }

  // ssh_key - computed: false, optional: false, required: true
  private _sshKey?: KubernetesClusterLinuxProfileSshKey; 
  private __sshKeyOutput = new KubernetesClusterLinuxProfileSshKeyOutputReference(this as any, "ssh_key", true);
  public get sshKey() {
    return this.__sshKeyOutput;
  }
  public putSshKey(value: KubernetesClusterLinuxProfileSshKey) {
    this._sshKey = value;
  }
  // Temporarily expose input value. Use with caution.
  public get sshKeyInput() {
    return this._sshKey
  }
}
export interface KubernetesClusterMaintenanceWindowAllowed {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/kubernetes_cluster.html#day KubernetesCluster#day}
  */
  readonly day: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/kubernetes_cluster.html#hours KubernetesCluster#hours}
  */
  readonly hours: number[];
}

function kubernetesClusterMaintenanceWindowAllowedToTerraform(struct?: KubernetesClusterMaintenanceWindowAllowed): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    day: cdktf.stringToTerraform(struct!.day),
    hours: cdktf.listMapper(cdktf.numberToTerraform)(struct!.hours),
  }
}

export interface KubernetesClusterMaintenanceWindowNotAllowed {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/kubernetes_cluster.html#end KubernetesCluster#end}
  */
  readonly end: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/kubernetes_cluster.html#start KubernetesCluster#start}
  */
  readonly start: string;
}

function kubernetesClusterMaintenanceWindowNotAllowedToTerraform(struct?: KubernetesClusterMaintenanceWindowNotAllowed): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    end: cdktf.stringToTerraform(struct!.end),
    start: cdktf.stringToTerraform(struct!.start),
  }
}

export interface KubernetesClusterMaintenanceWindow {
  /**
  * allowed block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/kubernetes_cluster.html#allowed KubernetesCluster#allowed}
  */
  readonly allowed?: KubernetesClusterMaintenanceWindowAllowed[];
  /**
  * not_allowed block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/kubernetes_cluster.html#not_allowed KubernetesCluster#not_allowed}
  */
  readonly notAllowed?: KubernetesClusterMaintenanceWindowNotAllowed[];
}

function kubernetesClusterMaintenanceWindowToTerraform(struct?: KubernetesClusterMaintenanceWindowOutputReference | KubernetesClusterMaintenanceWindow): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    allowed: cdktf.listMapper(kubernetesClusterMaintenanceWindowAllowedToTerraform)(struct!.allowed),
    not_allowed: cdktf.listMapper(kubernetesClusterMaintenanceWindowNotAllowedToTerraform)(struct!.notAllowed),
  }
}

export class KubernetesClusterMaintenanceWindowOutputReference extends cdktf.ComplexObject {
  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param isSingleItem True if this is a block, false if it's a list
  */
  public constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean) {
    super(terraformResource, terraformAttribute, isSingleItem);
  }

  // allowed - computed: false, optional: true, required: false
  private _allowed?: KubernetesClusterMaintenanceWindowAllowed[] | undefined; 
  public get allowed() {
    // Getting the computed value is not yet implemented
    return this.interpolationForAttribute('allowed') as any;
  }
  public set allowed(value: KubernetesClusterMaintenanceWindowAllowed[] | undefined) {
    this._allowed = value;
  }
  public resetAllowed() {
    this._allowed = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get allowedInput() {
    return this._allowed
  }

  // not_allowed - computed: false, optional: true, required: false
  private _notAllowed?: KubernetesClusterMaintenanceWindowNotAllowed[] | undefined; 
  public get notAllowed() {
    // Getting the computed value is not yet implemented
    return this.interpolationForAttribute('not_allowed') as any;
  }
  public set notAllowed(value: KubernetesClusterMaintenanceWindowNotAllowed[] | undefined) {
    this._notAllowed = value;
  }
  public resetNotAllowed() {
    this._notAllowed = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get notAllowedInput() {
    return this._notAllowed
  }
}
export interface KubernetesClusterNetworkProfileLoadBalancerProfile {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/kubernetes_cluster.html#idle_timeout_in_minutes KubernetesCluster#idle_timeout_in_minutes}
  */
  readonly idleTimeoutInMinutes?: number;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/kubernetes_cluster.html#managed_outbound_ip_count KubernetesCluster#managed_outbound_ip_count}
  */
  readonly managedOutboundIpCount?: number;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/kubernetes_cluster.html#outbound_ip_address_ids KubernetesCluster#outbound_ip_address_ids}
  */
  readonly outboundIpAddressIds?: string[];
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/kubernetes_cluster.html#outbound_ip_prefix_ids KubernetesCluster#outbound_ip_prefix_ids}
  */
  readonly outboundIpPrefixIds?: string[];
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/kubernetes_cluster.html#outbound_ports_allocated KubernetesCluster#outbound_ports_allocated}
  */
  readonly outboundPortsAllocated?: number;
}

function kubernetesClusterNetworkProfileLoadBalancerProfileToTerraform(struct?: KubernetesClusterNetworkProfileLoadBalancerProfileOutputReference | KubernetesClusterNetworkProfileLoadBalancerProfile): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    idle_timeout_in_minutes: cdktf.numberToTerraform(struct!.idleTimeoutInMinutes),
    managed_outbound_ip_count: cdktf.numberToTerraform(struct!.managedOutboundIpCount),
    outbound_ip_address_ids: cdktf.listMapper(cdktf.stringToTerraform)(struct!.outboundIpAddressIds),
    outbound_ip_prefix_ids: cdktf.listMapper(cdktf.stringToTerraform)(struct!.outboundIpPrefixIds),
    outbound_ports_allocated: cdktf.numberToTerraform(struct!.outboundPortsAllocated),
  }
}

export class KubernetesClusterNetworkProfileLoadBalancerProfileOutputReference extends cdktf.ComplexObject {
  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param isSingleItem True if this is a block, false if it's a list
  */
  public constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean) {
    super(terraformResource, terraformAttribute, isSingleItem);
  }

  // idle_timeout_in_minutes - computed: false, optional: true, required: false
  private _idleTimeoutInMinutes?: number | undefined; 
  public get idleTimeoutInMinutes() {
    return this.getNumberAttribute('idle_timeout_in_minutes');
  }
  public set idleTimeoutInMinutes(value: number | undefined) {
    this._idleTimeoutInMinutes = value;
  }
  public resetIdleTimeoutInMinutes() {
    this._idleTimeoutInMinutes = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get idleTimeoutInMinutesInput() {
    return this._idleTimeoutInMinutes
  }

  // managed_outbound_ip_count - computed: true, optional: true, required: false
  private _managedOutboundIpCount?: number | undefined; 
  public get managedOutboundIpCount() {
    return this.getNumberAttribute('managed_outbound_ip_count');
  }
  public set managedOutboundIpCount(value: number | undefined) {
    this._managedOutboundIpCount = value;
  }
  public resetManagedOutboundIpCount() {
    this._managedOutboundIpCount = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get managedOutboundIpCountInput() {
    return this._managedOutboundIpCount
  }

  // outbound_ip_address_ids - computed: true, optional: true, required: false
  private _outboundIpAddressIds?: string[] | undefined; 
  public get outboundIpAddressIds() {
    return this.getListAttribute('outbound_ip_address_ids');
  }
  public set outboundIpAddressIds(value: string[] | undefined) {
    this._outboundIpAddressIds = value;
  }
  public resetOutboundIpAddressIds() {
    this._outboundIpAddressIds = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get outboundIpAddressIdsInput() {
    return this._outboundIpAddressIds
  }

  // outbound_ip_prefix_ids - computed: true, optional: true, required: false
  private _outboundIpPrefixIds?: string[] | undefined; 
  public get outboundIpPrefixIds() {
    return this.getListAttribute('outbound_ip_prefix_ids');
  }
  public set outboundIpPrefixIds(value: string[] | undefined) {
    this._outboundIpPrefixIds = value;
  }
  public resetOutboundIpPrefixIds() {
    this._outboundIpPrefixIds = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get outboundIpPrefixIdsInput() {
    return this._outboundIpPrefixIds
  }

  // outbound_ports_allocated - computed: false, optional: true, required: false
  private _outboundPortsAllocated?: number | undefined; 
  public get outboundPortsAllocated() {
    return this.getNumberAttribute('outbound_ports_allocated');
  }
  public set outboundPortsAllocated(value: number | undefined) {
    this._outboundPortsAllocated = value;
  }
  public resetOutboundPortsAllocated() {
    this._outboundPortsAllocated = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get outboundPortsAllocatedInput() {
    return this._outboundPortsAllocated
  }
}
export interface KubernetesClusterNetworkProfileNatGatewayProfile {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/kubernetes_cluster.html#idle_timeout_in_minutes KubernetesCluster#idle_timeout_in_minutes}
  */
  readonly idleTimeoutInMinutes?: number;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/kubernetes_cluster.html#managed_outbound_ip_count KubernetesCluster#managed_outbound_ip_count}
  */
  readonly managedOutboundIpCount?: number;
}

function kubernetesClusterNetworkProfileNatGatewayProfileToTerraform(struct?: KubernetesClusterNetworkProfileNatGatewayProfileOutputReference | KubernetesClusterNetworkProfileNatGatewayProfile): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    idle_timeout_in_minutes: cdktf.numberToTerraform(struct!.idleTimeoutInMinutes),
    managed_outbound_ip_count: cdktf.numberToTerraform(struct!.managedOutboundIpCount),
  }
}

export class KubernetesClusterNetworkProfileNatGatewayProfileOutputReference extends cdktf.ComplexObject {
  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param isSingleItem True if this is a block, false if it's a list
  */
  public constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean) {
    super(terraformResource, terraformAttribute, isSingleItem);
  }

  // idle_timeout_in_minutes - computed: false, optional: true, required: false
  private _idleTimeoutInMinutes?: number | undefined; 
  public get idleTimeoutInMinutes() {
    return this.getNumberAttribute('idle_timeout_in_minutes');
  }
  public set idleTimeoutInMinutes(value: number | undefined) {
    this._idleTimeoutInMinutes = value;
  }
  public resetIdleTimeoutInMinutes() {
    this._idleTimeoutInMinutes = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get idleTimeoutInMinutesInput() {
    return this._idleTimeoutInMinutes
  }

  // managed_outbound_ip_count - computed: true, optional: true, required: false
  private _managedOutboundIpCount?: number | undefined; 
  public get managedOutboundIpCount() {
    return this.getNumberAttribute('managed_outbound_ip_count');
  }
  public set managedOutboundIpCount(value: number | undefined) {
    this._managedOutboundIpCount = value;
  }
  public resetManagedOutboundIpCount() {
    this._managedOutboundIpCount = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get managedOutboundIpCountInput() {
    return this._managedOutboundIpCount
  }
}
export interface KubernetesClusterNetworkProfile {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/kubernetes_cluster.html#dns_service_ip KubernetesCluster#dns_service_ip}
  */
  readonly dnsServiceIp?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/kubernetes_cluster.html#docker_bridge_cidr KubernetesCluster#docker_bridge_cidr}
  */
  readonly dockerBridgeCidr?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/kubernetes_cluster.html#load_balancer_sku KubernetesCluster#load_balancer_sku}
  */
  readonly loadBalancerSku?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/kubernetes_cluster.html#network_mode KubernetesCluster#network_mode}
  */
  readonly networkMode?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/kubernetes_cluster.html#network_plugin KubernetesCluster#network_plugin}
  */
  readonly networkPlugin: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/kubernetes_cluster.html#network_policy KubernetesCluster#network_policy}
  */
  readonly networkPolicy?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/kubernetes_cluster.html#outbound_type KubernetesCluster#outbound_type}
  */
  readonly outboundType?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/kubernetes_cluster.html#pod_cidr KubernetesCluster#pod_cidr}
  */
  readonly podCidr?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/kubernetes_cluster.html#service_cidr KubernetesCluster#service_cidr}
  */
  readonly serviceCidr?: string;
  /**
  * load_balancer_profile block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/kubernetes_cluster.html#load_balancer_profile KubernetesCluster#load_balancer_profile}
  */
  readonly loadBalancerProfile?: KubernetesClusterNetworkProfileLoadBalancerProfile;
  /**
  * nat_gateway_profile block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/kubernetes_cluster.html#nat_gateway_profile KubernetesCluster#nat_gateway_profile}
  */
  readonly natGatewayProfile?: KubernetesClusterNetworkProfileNatGatewayProfile;
}

function kubernetesClusterNetworkProfileToTerraform(struct?: KubernetesClusterNetworkProfileOutputReference | KubernetesClusterNetworkProfile): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    dns_service_ip: cdktf.stringToTerraform(struct!.dnsServiceIp),
    docker_bridge_cidr: cdktf.stringToTerraform(struct!.dockerBridgeCidr),
    load_balancer_sku: cdktf.stringToTerraform(struct!.loadBalancerSku),
    network_mode: cdktf.stringToTerraform(struct!.networkMode),
    network_plugin: cdktf.stringToTerraform(struct!.networkPlugin),
    network_policy: cdktf.stringToTerraform(struct!.networkPolicy),
    outbound_type: cdktf.stringToTerraform(struct!.outboundType),
    pod_cidr: cdktf.stringToTerraform(struct!.podCidr),
    service_cidr: cdktf.stringToTerraform(struct!.serviceCidr),
    load_balancer_profile: kubernetesClusterNetworkProfileLoadBalancerProfileToTerraform(struct!.loadBalancerProfile),
    nat_gateway_profile: kubernetesClusterNetworkProfileNatGatewayProfileToTerraform(struct!.natGatewayProfile),
  }
}

export class KubernetesClusterNetworkProfileOutputReference extends cdktf.ComplexObject {
  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param isSingleItem True if this is a block, false if it's a list
  */
  public constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean) {
    super(terraformResource, terraformAttribute, isSingleItem);
  }

  // dns_service_ip - computed: true, optional: true, required: false
  private _dnsServiceIp?: string | undefined; 
  public get dnsServiceIp() {
    return this.getStringAttribute('dns_service_ip');
  }
  public set dnsServiceIp(value: string | undefined) {
    this._dnsServiceIp = value;
  }
  public resetDnsServiceIp() {
    this._dnsServiceIp = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dnsServiceIpInput() {
    return this._dnsServiceIp
  }

  // docker_bridge_cidr - computed: true, optional: true, required: false
  private _dockerBridgeCidr?: string | undefined; 
  public get dockerBridgeCidr() {
    return this.getStringAttribute('docker_bridge_cidr');
  }
  public set dockerBridgeCidr(value: string | undefined) {
    this._dockerBridgeCidr = value;
  }
  public resetDockerBridgeCidr() {
    this._dockerBridgeCidr = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dockerBridgeCidrInput() {
    return this._dockerBridgeCidr
  }

  // load_balancer_sku - computed: false, optional: true, required: false
  private _loadBalancerSku?: string | undefined; 
  public get loadBalancerSku() {
    return this.getStringAttribute('load_balancer_sku');
  }
  public set loadBalancerSku(value: string | undefined) {
    this._loadBalancerSku = value;
  }
  public resetLoadBalancerSku() {
    this._loadBalancerSku = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get loadBalancerSkuInput() {
    return this._loadBalancerSku
  }

  // network_mode - computed: true, optional: true, required: false
  private _networkMode?: string | undefined; 
  public get networkMode() {
    return this.getStringAttribute('network_mode');
  }
  public set networkMode(value: string | undefined) {
    this._networkMode = value;
  }
  public resetNetworkMode() {
    this._networkMode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get networkModeInput() {
    return this._networkMode
  }

  // network_plugin - computed: false, optional: false, required: true
  private _networkPlugin?: string; 
  public get networkPlugin() {
    return this.getStringAttribute('network_plugin');
  }
  public set networkPlugin(value: string) {
    this._networkPlugin = value;
  }
  // Temporarily expose input value. Use with caution.
  public get networkPluginInput() {
    return this._networkPlugin
  }

  // network_policy - computed: true, optional: true, required: false
  private _networkPolicy?: string | undefined; 
  public get networkPolicy() {
    return this.getStringAttribute('network_policy');
  }
  public set networkPolicy(value: string | undefined) {
    this._networkPolicy = value;
  }
  public resetNetworkPolicy() {
    this._networkPolicy = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get networkPolicyInput() {
    return this._networkPolicy
  }

  // outbound_type - computed: false, optional: true, required: false
  private _outboundType?: string | undefined; 
  public get outboundType() {
    return this.getStringAttribute('outbound_type');
  }
  public set outboundType(value: string | undefined) {
    this._outboundType = value;
  }
  public resetOutboundType() {
    this._outboundType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get outboundTypeInput() {
    return this._outboundType
  }

  // pod_cidr - computed: true, optional: true, required: false
  private _podCidr?: string | undefined; 
  public get podCidr() {
    return this.getStringAttribute('pod_cidr');
  }
  public set podCidr(value: string | undefined) {
    this._podCidr = value;
  }
  public resetPodCidr() {
    this._podCidr = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get podCidrInput() {
    return this._podCidr
  }

  // service_cidr - computed: true, optional: true, required: false
  private _serviceCidr?: string | undefined; 
  public get serviceCidr() {
    return this.getStringAttribute('service_cidr');
  }
  public set serviceCidr(value: string | undefined) {
    this._serviceCidr = value;
  }
  public resetServiceCidr() {
    this._serviceCidr = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get serviceCidrInput() {
    return this._serviceCidr
  }

  // load_balancer_profile - computed: false, optional: true, required: false
  private _loadBalancerProfile?: KubernetesClusterNetworkProfileLoadBalancerProfile | undefined; 
  private __loadBalancerProfileOutput = new KubernetesClusterNetworkProfileLoadBalancerProfileOutputReference(this as any, "load_balancer_profile", true);
  public get loadBalancerProfile() {
    return this.__loadBalancerProfileOutput;
  }
  public putLoadBalancerProfile(value: KubernetesClusterNetworkProfileLoadBalancerProfile | undefined) {
    this._loadBalancerProfile = value;
  }
  public resetLoadBalancerProfile() {
    this._loadBalancerProfile = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get loadBalancerProfileInput() {
    return this._loadBalancerProfile
  }

  // nat_gateway_profile - computed: false, optional: true, required: false
  private _natGatewayProfile?: KubernetesClusterNetworkProfileNatGatewayProfile | undefined; 
  private __natGatewayProfileOutput = new KubernetesClusterNetworkProfileNatGatewayProfileOutputReference(this as any, "nat_gateway_profile", true);
  public get natGatewayProfile() {
    return this.__natGatewayProfileOutput;
  }
  public putNatGatewayProfile(value: KubernetesClusterNetworkProfileNatGatewayProfile | undefined) {
    this._natGatewayProfile = value;
  }
  public resetNatGatewayProfile() {
    this._natGatewayProfile = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get natGatewayProfileInput() {
    return this._natGatewayProfile
  }
}
export interface KubernetesClusterRoleBasedAccessControlAzureActiveDirectory {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/kubernetes_cluster.html#admin_group_object_ids KubernetesCluster#admin_group_object_ids}
  */
  readonly adminGroupObjectIds?: string[];
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/kubernetes_cluster.html#azure_rbac_enabled KubernetesCluster#azure_rbac_enabled}
  */
  readonly azureRbacEnabled?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/kubernetes_cluster.html#client_app_id KubernetesCluster#client_app_id}
  */
  readonly clientAppId?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/kubernetes_cluster.html#managed KubernetesCluster#managed}
  */
  readonly managed?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/kubernetes_cluster.html#server_app_id KubernetesCluster#server_app_id}
  */
  readonly serverAppId?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/kubernetes_cluster.html#server_app_secret KubernetesCluster#server_app_secret}
  */
  readonly serverAppSecret?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/kubernetes_cluster.html#tenant_id KubernetesCluster#tenant_id}
  */
  readonly tenantId?: string;
}

function kubernetesClusterRoleBasedAccessControlAzureActiveDirectoryToTerraform(struct?: KubernetesClusterRoleBasedAccessControlAzureActiveDirectoryOutputReference | KubernetesClusterRoleBasedAccessControlAzureActiveDirectory): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    admin_group_object_ids: cdktf.listMapper(cdktf.stringToTerraform)(struct!.adminGroupObjectIds),
    azure_rbac_enabled: cdktf.booleanToTerraform(struct!.azureRbacEnabled),
    client_app_id: cdktf.stringToTerraform(struct!.clientAppId),
    managed: cdktf.booleanToTerraform(struct!.managed),
    server_app_id: cdktf.stringToTerraform(struct!.serverAppId),
    server_app_secret: cdktf.stringToTerraform(struct!.serverAppSecret),
    tenant_id: cdktf.stringToTerraform(struct!.tenantId),
  }
}

export class KubernetesClusterRoleBasedAccessControlAzureActiveDirectoryOutputReference extends cdktf.ComplexObject {
  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param isSingleItem True if this is a block, false if it's a list
  */
  public constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean) {
    super(terraformResource, terraformAttribute, isSingleItem);
  }

  // admin_group_object_ids - computed: false, optional: true, required: false
  private _adminGroupObjectIds?: string[] | undefined; 
  public get adminGroupObjectIds() {
    return this.getListAttribute('admin_group_object_ids');
  }
  public set adminGroupObjectIds(value: string[] | undefined) {
    this._adminGroupObjectIds = value;
  }
  public resetAdminGroupObjectIds() {
    this._adminGroupObjectIds = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get adminGroupObjectIdsInput() {
    return this._adminGroupObjectIds
  }

  // azure_rbac_enabled - computed: false, optional: true, required: false
  private _azureRbacEnabled?: boolean | cdktf.IResolvable | undefined; 
  public get azureRbacEnabled() {
    return this.getBooleanAttribute('azure_rbac_enabled') as any;
  }
  public set azureRbacEnabled(value: boolean | cdktf.IResolvable | undefined) {
    this._azureRbacEnabled = value;
  }
  public resetAzureRbacEnabled() {
    this._azureRbacEnabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get azureRbacEnabledInput() {
    return this._azureRbacEnabled
  }

  // client_app_id - computed: false, optional: true, required: false
  private _clientAppId?: string | undefined; 
  public get clientAppId() {
    return this.getStringAttribute('client_app_id');
  }
  public set clientAppId(value: string | undefined) {
    this._clientAppId = value;
  }
  public resetClientAppId() {
    this._clientAppId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get clientAppIdInput() {
    return this._clientAppId
  }

  // managed - computed: false, optional: true, required: false
  private _managed?: boolean | cdktf.IResolvable | undefined; 
  public get managed() {
    return this.getBooleanAttribute('managed') as any;
  }
  public set managed(value: boolean | cdktf.IResolvable | undefined) {
    this._managed = value;
  }
  public resetManaged() {
    this._managed = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get managedInput() {
    return this._managed
  }

  // server_app_id - computed: false, optional: true, required: false
  private _serverAppId?: string | undefined; 
  public get serverAppId() {
    return this.getStringAttribute('server_app_id');
  }
  public set serverAppId(value: string | undefined) {
    this._serverAppId = value;
  }
  public resetServerAppId() {
    this._serverAppId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get serverAppIdInput() {
    return this._serverAppId
  }

  // server_app_secret - computed: false, optional: true, required: false
  private _serverAppSecret?: string | undefined; 
  public get serverAppSecret() {
    return this.getStringAttribute('server_app_secret');
  }
  public set serverAppSecret(value: string | undefined) {
    this._serverAppSecret = value;
  }
  public resetServerAppSecret() {
    this._serverAppSecret = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get serverAppSecretInput() {
    return this._serverAppSecret
  }

  // tenant_id - computed: true, optional: true, required: false
  private _tenantId?: string | undefined; 
  public get tenantId() {
    return this.getStringAttribute('tenant_id');
  }
  public set tenantId(value: string | undefined) {
    this._tenantId = value;
  }
  public resetTenantId() {
    this._tenantId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tenantIdInput() {
    return this._tenantId
  }
}
export interface KubernetesClusterRoleBasedAccessControl {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/kubernetes_cluster.html#enabled KubernetesCluster#enabled}
  */
  readonly enabled: boolean | cdktf.IResolvable;
  /**
  * azure_active_directory block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/kubernetes_cluster.html#azure_active_directory KubernetesCluster#azure_active_directory}
  */
  readonly azureActiveDirectory?: KubernetesClusterRoleBasedAccessControlAzureActiveDirectory;
}

function kubernetesClusterRoleBasedAccessControlToTerraform(struct?: KubernetesClusterRoleBasedAccessControlOutputReference | KubernetesClusterRoleBasedAccessControl): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    enabled: cdktf.booleanToTerraform(struct!.enabled),
    azure_active_directory: kubernetesClusterRoleBasedAccessControlAzureActiveDirectoryToTerraform(struct!.azureActiveDirectory),
  }
}

export class KubernetesClusterRoleBasedAccessControlOutputReference extends cdktf.ComplexObject {
  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param isSingleItem True if this is a block, false if it's a list
  */
  public constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean) {
    super(terraformResource, terraformAttribute, isSingleItem);
  }

  // enabled - computed: false, optional: false, required: true
  private _enabled?: boolean | cdktf.IResolvable; 
  public get enabled() {
    return this.getBooleanAttribute('enabled') as any;
  }
  public set enabled(value: boolean | cdktf.IResolvable) {
    this._enabled = value;
  }
  // Temporarily expose input value. Use with caution.
  public get enabledInput() {
    return this._enabled
  }

  // azure_active_directory - computed: false, optional: true, required: false
  private _azureActiveDirectory?: KubernetesClusterRoleBasedAccessControlAzureActiveDirectory | undefined; 
  private __azureActiveDirectoryOutput = new KubernetesClusterRoleBasedAccessControlAzureActiveDirectoryOutputReference(this as any, "azure_active_directory", true);
  public get azureActiveDirectory() {
    return this.__azureActiveDirectoryOutput;
  }
  public putAzureActiveDirectory(value: KubernetesClusterRoleBasedAccessControlAzureActiveDirectory | undefined) {
    this._azureActiveDirectory = value;
  }
  public resetAzureActiveDirectory() {
    this._azureActiveDirectory = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get azureActiveDirectoryInput() {
    return this._azureActiveDirectory
  }
}
export interface KubernetesClusterServicePrincipal {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/kubernetes_cluster.html#client_id KubernetesCluster#client_id}
  */
  readonly clientId: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/kubernetes_cluster.html#client_secret KubernetesCluster#client_secret}
  */
  readonly clientSecret: string;
}

function kubernetesClusterServicePrincipalToTerraform(struct?: KubernetesClusterServicePrincipalOutputReference | KubernetesClusterServicePrincipal): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    client_id: cdktf.stringToTerraform(struct!.clientId),
    client_secret: cdktf.stringToTerraform(struct!.clientSecret),
  }
}

export class KubernetesClusterServicePrincipalOutputReference extends cdktf.ComplexObject {
  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param isSingleItem True if this is a block, false if it's a list
  */
  public constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean) {
    super(terraformResource, terraformAttribute, isSingleItem);
  }

  // client_id - computed: false, optional: false, required: true
  private _clientId?: string; 
  public get clientId() {
    return this.getStringAttribute('client_id');
  }
  public set clientId(value: string) {
    this._clientId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get clientIdInput() {
    return this._clientId
  }

  // client_secret - computed: false, optional: false, required: true
  private _clientSecret?: string; 
  public get clientSecret() {
    return this.getStringAttribute('client_secret');
  }
  public set clientSecret(value: string) {
    this._clientSecret = value;
  }
  // Temporarily expose input value. Use with caution.
  public get clientSecretInput() {
    return this._clientSecret
  }
}
export interface KubernetesClusterTimeouts {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/kubernetes_cluster.html#create KubernetesCluster#create}
  */
  readonly create?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/kubernetes_cluster.html#delete KubernetesCluster#delete}
  */
  readonly delete?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/kubernetes_cluster.html#read KubernetesCluster#read}
  */
  readonly read?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/kubernetes_cluster.html#update KubernetesCluster#update}
  */
  readonly update?: string;
}

function kubernetesClusterTimeoutsToTerraform(struct?: KubernetesClusterTimeoutsOutputReference | KubernetesClusterTimeouts): any {
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

export class KubernetesClusterTimeoutsOutputReference extends cdktf.ComplexObject {
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
export interface KubernetesClusterWindowsProfile {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/kubernetes_cluster.html#admin_password KubernetesCluster#admin_password}
  */
  readonly adminPassword?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/kubernetes_cluster.html#admin_username KubernetesCluster#admin_username}
  */
  readonly adminUsername: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/kubernetes_cluster.html#license KubernetesCluster#license}
  */
  readonly license?: string;
}

function kubernetesClusterWindowsProfileToTerraform(struct?: KubernetesClusterWindowsProfileOutputReference | KubernetesClusterWindowsProfile): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    admin_password: cdktf.stringToTerraform(struct!.adminPassword),
    admin_username: cdktf.stringToTerraform(struct!.adminUsername),
    license: cdktf.stringToTerraform(struct!.license),
  }
}

export class KubernetesClusterWindowsProfileOutputReference extends cdktf.ComplexObject {
  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param isSingleItem True if this is a block, false if it's a list
  */
  public constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean) {
    super(terraformResource, terraformAttribute, isSingleItem);
  }

  // admin_password - computed: false, optional: true, required: false
  private _adminPassword?: string | undefined; 
  public get adminPassword() {
    return this.getStringAttribute('admin_password');
  }
  public set adminPassword(value: string | undefined) {
    this._adminPassword = value;
  }
  public resetAdminPassword() {
    this._adminPassword = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get adminPasswordInput() {
    return this._adminPassword
  }

  // admin_username - computed: false, optional: false, required: true
  private _adminUsername?: string; 
  public get adminUsername() {
    return this.getStringAttribute('admin_username');
  }
  public set adminUsername(value: string) {
    this._adminUsername = value;
  }
  // Temporarily expose input value. Use with caution.
  public get adminUsernameInput() {
    return this._adminUsername
  }

  // license - computed: false, optional: true, required: false
  private _license?: string | undefined; 
  public get license() {
    return this.getStringAttribute('license');
  }
  public set license(value: string | undefined) {
    this._license = value;
  }
  public resetLicense() {
    this._license = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get licenseInput() {
    return this._license
  }
}

/**
* Represents a {@link https://www.terraform.io/docs/providers/azurerm/r/kubernetes_cluster.html azurerm_kubernetes_cluster}
*/
export class KubernetesCluster extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType: string = "azurerm_kubernetes_cluster";

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://www.terraform.io/docs/providers/azurerm/r/kubernetes_cluster.html azurerm_kubernetes_cluster} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options KubernetesClusterConfig
  */
  public constructor(scope: Construct, id: string, config: KubernetesClusterConfig) {
    super(scope, id, {
      terraformResourceType: 'azurerm_kubernetes_cluster',
      terraformGeneratorMetadata: {
        providerName: 'azurerm'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle
    });
    this._apiServerAuthorizedIpRanges = config.apiServerAuthorizedIpRanges;
    this._automaticChannelUpgrade = config.automaticChannelUpgrade;
    this._diskEncryptionSetId = config.diskEncryptionSetId;
    this._dnsPrefix = config.dnsPrefix;
    this._dnsPrefixPrivateCluster = config.dnsPrefixPrivateCluster;
    this._enablePodSecurityPolicy = config.enablePodSecurityPolicy;
    this._kubernetesVersion = config.kubernetesVersion;
    this._localAccountDisabled = config.localAccountDisabled;
    this._location = config.location;
    this._name = config.name;
    this._nodeResourceGroup = config.nodeResourceGroup;
    this._privateClusterEnabled = config.privateClusterEnabled;
    this._privateClusterPublicFqdnEnabled = config.privateClusterPublicFqdnEnabled;
    this._privateDnsZoneId = config.privateDnsZoneId;
    this._privateLinkEnabled = config.privateLinkEnabled;
    this._resourceGroupName = config.resourceGroupName;
    this._skuTier = config.skuTier;
    this._tags = config.tags;
    this._addonProfile = config.addonProfile;
    this._autoScalerProfile = config.autoScalerProfile;
    this._defaultNodePool = config.defaultNodePool;
    this._identity = config.identity;
    this._kubeletIdentity = config.kubeletIdentity;
    this._linuxProfile = config.linuxProfile;
    this._maintenanceWindow = config.maintenanceWindow;
    this._networkProfile = config.networkProfile;
    this._roleBasedAccessControl = config.roleBasedAccessControl;
    this._servicePrincipal = config.servicePrincipal;
    this._timeouts = config.timeouts;
    this._windowsProfile = config.windowsProfile;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // api_server_authorized_ip_ranges - computed: false, optional: true, required: false
  private _apiServerAuthorizedIpRanges?: string[] | undefined; 
  public get apiServerAuthorizedIpRanges() {
    return this.getListAttribute('api_server_authorized_ip_ranges');
  }
  public set apiServerAuthorizedIpRanges(value: string[] | undefined) {
    this._apiServerAuthorizedIpRanges = value;
  }
  public resetApiServerAuthorizedIpRanges() {
    this._apiServerAuthorizedIpRanges = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get apiServerAuthorizedIpRangesInput() {
    return this._apiServerAuthorizedIpRanges
  }

  // automatic_channel_upgrade - computed: false, optional: true, required: false
  private _automaticChannelUpgrade?: string | undefined; 
  public get automaticChannelUpgrade() {
    return this.getStringAttribute('automatic_channel_upgrade');
  }
  public set automaticChannelUpgrade(value: string | undefined) {
    this._automaticChannelUpgrade = value;
  }
  public resetAutomaticChannelUpgrade() {
    this._automaticChannelUpgrade = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get automaticChannelUpgradeInput() {
    return this._automaticChannelUpgrade
  }

  // disk_encryption_set_id - computed: false, optional: true, required: false
  private _diskEncryptionSetId?: string | undefined; 
  public get diskEncryptionSetId() {
    return this.getStringAttribute('disk_encryption_set_id');
  }
  public set diskEncryptionSetId(value: string | undefined) {
    this._diskEncryptionSetId = value;
  }
  public resetDiskEncryptionSetId() {
    this._diskEncryptionSetId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get diskEncryptionSetIdInput() {
    return this._diskEncryptionSetId
  }

  // dns_prefix - computed: false, optional: true, required: false
  private _dnsPrefix?: string | undefined; 
  public get dnsPrefix() {
    return this.getStringAttribute('dns_prefix');
  }
  public set dnsPrefix(value: string | undefined) {
    this._dnsPrefix = value;
  }
  public resetDnsPrefix() {
    this._dnsPrefix = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dnsPrefixInput() {
    return this._dnsPrefix
  }

  // dns_prefix_private_cluster - computed: false, optional: true, required: false
  private _dnsPrefixPrivateCluster?: string | undefined; 
  public get dnsPrefixPrivateCluster() {
    return this.getStringAttribute('dns_prefix_private_cluster');
  }
  public set dnsPrefixPrivateCluster(value: string | undefined) {
    this._dnsPrefixPrivateCluster = value;
  }
  public resetDnsPrefixPrivateCluster() {
    this._dnsPrefixPrivateCluster = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dnsPrefixPrivateClusterInput() {
    return this._dnsPrefixPrivateCluster
  }

  // enable_pod_security_policy - computed: false, optional: true, required: false
  private _enablePodSecurityPolicy?: boolean | cdktf.IResolvable | undefined; 
  public get enablePodSecurityPolicy() {
    return this.getBooleanAttribute('enable_pod_security_policy') as any;
  }
  public set enablePodSecurityPolicy(value: boolean | cdktf.IResolvable | undefined) {
    this._enablePodSecurityPolicy = value;
  }
  public resetEnablePodSecurityPolicy() {
    this._enablePodSecurityPolicy = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enablePodSecurityPolicyInput() {
    return this._enablePodSecurityPolicy
  }

  // fqdn - computed: true, optional: false, required: false
  public get fqdn() {
    return this.getStringAttribute('fqdn');
  }

  // id - computed: true, optional: true, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // kube_admin_config - computed: true, optional: false, required: false
  public kubeAdminConfig(index: string) {
    return new KubernetesClusterKubeAdminConfig(this, 'kube_admin_config', index);
  }

  // kube_admin_config_raw - computed: true, optional: false, required: false
  public get kubeAdminConfigRaw() {
    return this.getStringAttribute('kube_admin_config_raw');
  }

  // kube_config - computed: true, optional: false, required: false
  public kubeConfig(index: string) {
    return new KubernetesClusterKubeConfig(this, 'kube_config', index);
  }

  // kube_config_raw - computed: true, optional: false, required: false
  public get kubeConfigRaw() {
    return this.getStringAttribute('kube_config_raw');
  }

  // kubernetes_version - computed: true, optional: true, required: false
  private _kubernetesVersion?: string | undefined; 
  public get kubernetesVersion() {
    return this.getStringAttribute('kubernetes_version');
  }
  public set kubernetesVersion(value: string | undefined) {
    this._kubernetesVersion = value;
  }
  public resetKubernetesVersion() {
    this._kubernetesVersion = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get kubernetesVersionInput() {
    return this._kubernetesVersion
  }

  // local_account_disabled - computed: false, optional: true, required: false
  private _localAccountDisabled?: boolean | cdktf.IResolvable | undefined; 
  public get localAccountDisabled() {
    return this.getBooleanAttribute('local_account_disabled') as any;
  }
  public set localAccountDisabled(value: boolean | cdktf.IResolvable | undefined) {
    this._localAccountDisabled = value;
  }
  public resetLocalAccountDisabled() {
    this._localAccountDisabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get localAccountDisabledInput() {
    return this._localAccountDisabled
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

  // node_resource_group - computed: true, optional: true, required: false
  private _nodeResourceGroup?: string | undefined; 
  public get nodeResourceGroup() {
    return this.getStringAttribute('node_resource_group');
  }
  public set nodeResourceGroup(value: string | undefined) {
    this._nodeResourceGroup = value;
  }
  public resetNodeResourceGroup() {
    this._nodeResourceGroup = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nodeResourceGroupInput() {
    return this._nodeResourceGroup
  }

  // portal_fqdn - computed: true, optional: false, required: false
  public get portalFqdn() {
    return this.getStringAttribute('portal_fqdn');
  }

  // private_cluster_enabled - computed: true, optional: true, required: false
  private _privateClusterEnabled?: boolean | cdktf.IResolvable | undefined; 
  public get privateClusterEnabled() {
    return this.getBooleanAttribute('private_cluster_enabled') as any;
  }
  public set privateClusterEnabled(value: boolean | cdktf.IResolvable | undefined) {
    this._privateClusterEnabled = value;
  }
  public resetPrivateClusterEnabled() {
    this._privateClusterEnabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get privateClusterEnabledInput() {
    return this._privateClusterEnabled
  }

  // private_cluster_public_fqdn_enabled - computed: false, optional: true, required: false
  private _privateClusterPublicFqdnEnabled?: boolean | cdktf.IResolvable | undefined; 
  public get privateClusterPublicFqdnEnabled() {
    return this.getBooleanAttribute('private_cluster_public_fqdn_enabled') as any;
  }
  public set privateClusterPublicFqdnEnabled(value: boolean | cdktf.IResolvable | undefined) {
    this._privateClusterPublicFqdnEnabled = value;
  }
  public resetPrivateClusterPublicFqdnEnabled() {
    this._privateClusterPublicFqdnEnabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get privateClusterPublicFqdnEnabledInput() {
    return this._privateClusterPublicFqdnEnabled
  }

  // private_dns_zone_id - computed: true, optional: true, required: false
  private _privateDnsZoneId?: string | undefined; 
  public get privateDnsZoneId() {
    return this.getStringAttribute('private_dns_zone_id');
  }
  public set privateDnsZoneId(value: string | undefined) {
    this._privateDnsZoneId = value;
  }
  public resetPrivateDnsZoneId() {
    this._privateDnsZoneId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get privateDnsZoneIdInput() {
    return this._privateDnsZoneId
  }

  // private_fqdn - computed: true, optional: false, required: false
  public get privateFqdn() {
    return this.getStringAttribute('private_fqdn');
  }

  // private_link_enabled - computed: true, optional: true, required: false
  private _privateLinkEnabled?: boolean | cdktf.IResolvable | undefined; 
  public get privateLinkEnabled() {
    return this.getBooleanAttribute('private_link_enabled') as any;
  }
  public set privateLinkEnabled(value: boolean | cdktf.IResolvable | undefined) {
    this._privateLinkEnabled = value;
  }
  public resetPrivateLinkEnabled() {
    this._privateLinkEnabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get privateLinkEnabledInput() {
    return this._privateLinkEnabled
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

  // sku_tier - computed: false, optional: true, required: false
  private _skuTier?: string | undefined; 
  public get skuTier() {
    return this.getStringAttribute('sku_tier');
  }
  public set skuTier(value: string | undefined) {
    this._skuTier = value;
  }
  public resetSkuTier() {
    this._skuTier = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get skuTierInput() {
    return this._skuTier
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

  // addon_profile - computed: false, optional: true, required: false
  private _addonProfile?: KubernetesClusterAddonProfile | undefined; 
  private __addonProfileOutput = new KubernetesClusterAddonProfileOutputReference(this as any, "addon_profile", true);
  public get addonProfile() {
    return this.__addonProfileOutput;
  }
  public putAddonProfile(value: KubernetesClusterAddonProfile | undefined) {
    this._addonProfile = value;
  }
  public resetAddonProfile() {
    this._addonProfile = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get addonProfileInput() {
    return this._addonProfile
  }

  // auto_scaler_profile - computed: false, optional: true, required: false
  private _autoScalerProfile?: KubernetesClusterAutoScalerProfile | undefined; 
  private __autoScalerProfileOutput = new KubernetesClusterAutoScalerProfileOutputReference(this as any, "auto_scaler_profile", true);
  public get autoScalerProfile() {
    return this.__autoScalerProfileOutput;
  }
  public putAutoScalerProfile(value: KubernetesClusterAutoScalerProfile | undefined) {
    this._autoScalerProfile = value;
  }
  public resetAutoScalerProfile() {
    this._autoScalerProfile = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get autoScalerProfileInput() {
    return this._autoScalerProfile
  }

  // default_node_pool - computed: false, optional: false, required: true
  private _defaultNodePool?: KubernetesClusterDefaultNodePool; 
  private __defaultNodePoolOutput = new KubernetesClusterDefaultNodePoolOutputReference(this as any, "default_node_pool", true);
  public get defaultNodePool() {
    return this.__defaultNodePoolOutput;
  }
  public putDefaultNodePool(value: KubernetesClusterDefaultNodePool) {
    this._defaultNodePool = value;
  }
  // Temporarily expose input value. Use with caution.
  public get defaultNodePoolInput() {
    return this._defaultNodePool
  }

  // identity - computed: false, optional: true, required: false
  private _identity?: KubernetesClusterIdentity | undefined; 
  private __identityOutput = new KubernetesClusterIdentityOutputReference(this as any, "identity", true);
  public get identity() {
    return this.__identityOutput;
  }
  public putIdentity(value: KubernetesClusterIdentity | undefined) {
    this._identity = value;
  }
  public resetIdentity() {
    this._identity = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get identityInput() {
    return this._identity
  }

  // kubelet_identity - computed: false, optional: true, required: false
  private _kubeletIdentity?: KubernetesClusterKubeletIdentity | undefined; 
  private __kubeletIdentityOutput = new KubernetesClusterKubeletIdentityOutputReference(this as any, "kubelet_identity", true);
  public get kubeletIdentity() {
    return this.__kubeletIdentityOutput;
  }
  public putKubeletIdentity(value: KubernetesClusterKubeletIdentity | undefined) {
    this._kubeletIdentity = value;
  }
  public resetKubeletIdentity() {
    this._kubeletIdentity = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get kubeletIdentityInput() {
    return this._kubeletIdentity
  }

  // linux_profile - computed: false, optional: true, required: false
  private _linuxProfile?: KubernetesClusterLinuxProfile | undefined; 
  private __linuxProfileOutput = new KubernetesClusterLinuxProfileOutputReference(this as any, "linux_profile", true);
  public get linuxProfile() {
    return this.__linuxProfileOutput;
  }
  public putLinuxProfile(value: KubernetesClusterLinuxProfile | undefined) {
    this._linuxProfile = value;
  }
  public resetLinuxProfile() {
    this._linuxProfile = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get linuxProfileInput() {
    return this._linuxProfile
  }

  // maintenance_window - computed: false, optional: true, required: false
  private _maintenanceWindow?: KubernetesClusterMaintenanceWindow | undefined; 
  private __maintenanceWindowOutput = new KubernetesClusterMaintenanceWindowOutputReference(this as any, "maintenance_window", true);
  public get maintenanceWindow() {
    return this.__maintenanceWindowOutput;
  }
  public putMaintenanceWindow(value: KubernetesClusterMaintenanceWindow | undefined) {
    this._maintenanceWindow = value;
  }
  public resetMaintenanceWindow() {
    this._maintenanceWindow = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maintenanceWindowInput() {
    return this._maintenanceWindow
  }

  // network_profile - computed: false, optional: true, required: false
  private _networkProfile?: KubernetesClusterNetworkProfile | undefined; 
  private __networkProfileOutput = new KubernetesClusterNetworkProfileOutputReference(this as any, "network_profile", true);
  public get networkProfile() {
    return this.__networkProfileOutput;
  }
  public putNetworkProfile(value: KubernetesClusterNetworkProfile | undefined) {
    this._networkProfile = value;
  }
  public resetNetworkProfile() {
    this._networkProfile = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get networkProfileInput() {
    return this._networkProfile
  }

  // role_based_access_control - computed: false, optional: true, required: false
  private _roleBasedAccessControl?: KubernetesClusterRoleBasedAccessControl | undefined; 
  private __roleBasedAccessControlOutput = new KubernetesClusterRoleBasedAccessControlOutputReference(this as any, "role_based_access_control", true);
  public get roleBasedAccessControl() {
    return this.__roleBasedAccessControlOutput;
  }
  public putRoleBasedAccessControl(value: KubernetesClusterRoleBasedAccessControl | undefined) {
    this._roleBasedAccessControl = value;
  }
  public resetRoleBasedAccessControl() {
    this._roleBasedAccessControl = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get roleBasedAccessControlInput() {
    return this._roleBasedAccessControl
  }

  // service_principal - computed: false, optional: true, required: false
  private _servicePrincipal?: KubernetesClusterServicePrincipal | undefined; 
  private __servicePrincipalOutput = new KubernetesClusterServicePrincipalOutputReference(this as any, "service_principal", true);
  public get servicePrincipal() {
    return this.__servicePrincipalOutput;
  }
  public putServicePrincipal(value: KubernetesClusterServicePrincipal | undefined) {
    this._servicePrincipal = value;
  }
  public resetServicePrincipal() {
    this._servicePrincipal = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get servicePrincipalInput() {
    return this._servicePrincipal
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts?: KubernetesClusterTimeouts | undefined; 
  private __timeoutsOutput = new KubernetesClusterTimeoutsOutputReference(this as any, "timeouts", true);
  public get timeouts() {
    return this.__timeoutsOutput;
  }
  public putTimeouts(value: KubernetesClusterTimeouts | undefined) {
    this._timeouts = value;
  }
  public resetTimeouts() {
    this._timeouts = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get timeoutsInput() {
    return this._timeouts
  }

  // windows_profile - computed: false, optional: true, required: false
  private _windowsProfile?: KubernetesClusterWindowsProfile | undefined; 
  private __windowsProfileOutput = new KubernetesClusterWindowsProfileOutputReference(this as any, "windows_profile", true);
  public get windowsProfile() {
    return this.__windowsProfileOutput;
  }
  public putWindowsProfile(value: KubernetesClusterWindowsProfile | undefined) {
    this._windowsProfile = value;
  }
  public resetWindowsProfile() {
    this._windowsProfile = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get windowsProfileInput() {
    return this._windowsProfile
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      api_server_authorized_ip_ranges: cdktf.listMapper(cdktf.stringToTerraform)(this._apiServerAuthorizedIpRanges),
      automatic_channel_upgrade: cdktf.stringToTerraform(this._automaticChannelUpgrade),
      disk_encryption_set_id: cdktf.stringToTerraform(this._diskEncryptionSetId),
      dns_prefix: cdktf.stringToTerraform(this._dnsPrefix),
      dns_prefix_private_cluster: cdktf.stringToTerraform(this._dnsPrefixPrivateCluster),
      enable_pod_security_policy: cdktf.booleanToTerraform(this._enablePodSecurityPolicy),
      kubernetes_version: cdktf.stringToTerraform(this._kubernetesVersion),
      local_account_disabled: cdktf.booleanToTerraform(this._localAccountDisabled),
      location: cdktf.stringToTerraform(this._location),
      name: cdktf.stringToTerraform(this._name),
      node_resource_group: cdktf.stringToTerraform(this._nodeResourceGroup),
      private_cluster_enabled: cdktf.booleanToTerraform(this._privateClusterEnabled),
      private_cluster_public_fqdn_enabled: cdktf.booleanToTerraform(this._privateClusterPublicFqdnEnabled),
      private_dns_zone_id: cdktf.stringToTerraform(this._privateDnsZoneId),
      private_link_enabled: cdktf.booleanToTerraform(this._privateLinkEnabled),
      resource_group_name: cdktf.stringToTerraform(this._resourceGroupName),
      sku_tier: cdktf.stringToTerraform(this._skuTier),
      tags: cdktf.hashMapper(cdktf.anyToTerraform)(this._tags),
      addon_profile: kubernetesClusterAddonProfileToTerraform(this._addonProfile),
      auto_scaler_profile: kubernetesClusterAutoScalerProfileToTerraform(this._autoScalerProfile),
      default_node_pool: kubernetesClusterDefaultNodePoolToTerraform(this._defaultNodePool),
      identity: kubernetesClusterIdentityToTerraform(this._identity),
      kubelet_identity: kubernetesClusterKubeletIdentityToTerraform(this._kubeletIdentity),
      linux_profile: kubernetesClusterLinuxProfileToTerraform(this._linuxProfile),
      maintenance_window: kubernetesClusterMaintenanceWindowToTerraform(this._maintenanceWindow),
      network_profile: kubernetesClusterNetworkProfileToTerraform(this._networkProfile),
      role_based_access_control: kubernetesClusterRoleBasedAccessControlToTerraform(this._roleBasedAccessControl),
      service_principal: kubernetesClusterServicePrincipalToTerraform(this._servicePrincipal),
      timeouts: kubernetesClusterTimeoutsToTerraform(this._timeouts),
      windows_profile: kubernetesClusterWindowsProfileToTerraform(this._windowsProfile),
    };
  }
}
