// https://www.terraform.io/docs/providers/azurerm/r/kubernetes_cluster.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface KubernetesClusterConfig extends cdktf.TerraformMetaArguments {
  readonly apiServerAuthorizedIpRanges?: string[];
  readonly diskEncryptionSetId?: string;
  readonly dnsPrefix: string;
  readonly enablePodSecurityPolicy?: boolean;
  readonly kubernetesVersion?: string;
  readonly location: string;
  readonly name: string;
  readonly nodeResourceGroup?: string;
  readonly privateClusterEnabled?: boolean;
  readonly privateLinkEnabled?: boolean;
  readonly resourceGroupName: string;
  readonly skuTier?: string;
  readonly tags?: { [key: string]: string };
  /** addon_profile block */
  readonly addonProfile?: KubernetesClusterAddonProfile[];
  /** auto_scaler_profile block */
  readonly autoScalerProfile?: KubernetesClusterAutoScalerProfile[];
  /** default_node_pool block */
  readonly defaultNodePool: KubernetesClusterDefaultNodePool[];
  /** identity block */
  readonly identity?: KubernetesClusterIdentity[];
  /** linux_profile block */
  readonly linuxProfile?: KubernetesClusterLinuxProfile[];
  /** network_profile block */
  readonly networkProfile?: KubernetesClusterNetworkProfile[];
  /** role_based_access_control block */
  readonly roleBasedAccessControl?: KubernetesClusterRoleBasedAccessControl[];
  /** service_principal block */
  readonly servicePrincipal?: KubernetesClusterServicePrincipal[];
  /** timeouts block */
  readonly timeouts?: KubernetesClusterTimeouts;
  /** windows_profile block */
  readonly windowsProfile?: KubernetesClusterWindowsProfile[];
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
export class KubernetesClusterKubeletIdentity extends cdktf.ComplexComputedList {

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
export interface KubernetesClusterAddonProfileAciConnectorLinux {
  readonly enabled: boolean;
  readonly subnetName?: string;
}

function kubernetesClusterAddonProfileAciConnectorLinuxToTerraform(struct?: KubernetesClusterAddonProfileAciConnectorLinux): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    enabled: cdktf.booleanToTerraform(struct!.enabled),
    subnet_name: cdktf.stringToTerraform(struct!.subnetName),
  }
}

export interface KubernetesClusterAddonProfileAzurePolicy {
  readonly enabled: boolean;
}

function kubernetesClusterAddonProfileAzurePolicyToTerraform(struct?: KubernetesClusterAddonProfileAzurePolicy): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    enabled: cdktf.booleanToTerraform(struct!.enabled),
  }
}

export interface KubernetesClusterAddonProfileHttpApplicationRouting {
  readonly enabled: boolean;
}

function kubernetesClusterAddonProfileHttpApplicationRoutingToTerraform(struct?: KubernetesClusterAddonProfileHttpApplicationRouting): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    enabled: cdktf.booleanToTerraform(struct!.enabled),
  }
}

export interface KubernetesClusterAddonProfileKubeDashboard {
  readonly enabled: boolean;
}

function kubernetesClusterAddonProfileKubeDashboardToTerraform(struct?: KubernetesClusterAddonProfileKubeDashboard): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    enabled: cdktf.booleanToTerraform(struct!.enabled),
  }
}

export interface KubernetesClusterAddonProfileOmsAgent {
  readonly enabled: boolean;
  readonly logAnalyticsWorkspaceId?: string;
}

function kubernetesClusterAddonProfileOmsAgentToTerraform(struct?: KubernetesClusterAddonProfileOmsAgent): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    enabled: cdktf.booleanToTerraform(struct!.enabled),
    log_analytics_workspace_id: cdktf.stringToTerraform(struct!.logAnalyticsWorkspaceId),
  }
}

export interface KubernetesClusterAddonProfile {
  /** aci_connector_linux block */
  readonly aciConnectorLinux?: KubernetesClusterAddonProfileAciConnectorLinux[];
  /** azure_policy block */
  readonly azurePolicy?: KubernetesClusterAddonProfileAzurePolicy[];
  /** http_application_routing block */
  readonly httpApplicationRouting?: KubernetesClusterAddonProfileHttpApplicationRouting[];
  /** kube_dashboard block */
  readonly kubeDashboard?: KubernetesClusterAddonProfileKubeDashboard[];
  /** oms_agent block */
  readonly omsAgent?: KubernetesClusterAddonProfileOmsAgent[];
}

function kubernetesClusterAddonProfileToTerraform(struct?: KubernetesClusterAddonProfile): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    aci_connector_linux: cdktf.listMapper(kubernetesClusterAddonProfileAciConnectorLinuxToTerraform)(struct!.aciConnectorLinux),
    azure_policy: cdktf.listMapper(kubernetesClusterAddonProfileAzurePolicyToTerraform)(struct!.azurePolicy),
    http_application_routing: cdktf.listMapper(kubernetesClusterAddonProfileHttpApplicationRoutingToTerraform)(struct!.httpApplicationRouting),
    kube_dashboard: cdktf.listMapper(kubernetesClusterAddonProfileKubeDashboardToTerraform)(struct!.kubeDashboard),
    oms_agent: cdktf.listMapper(kubernetesClusterAddonProfileOmsAgentToTerraform)(struct!.omsAgent),
  }
}

export interface KubernetesClusterAutoScalerProfile {
  readonly balanceSimilarNodeGroups?: boolean;
  readonly maxGracefulTerminationSec?: string;
  readonly scaleDownDelayAfterAdd?: string;
  readonly scaleDownDelayAfterDelete?: string;
  readonly scaleDownDelayAfterFailure?: string;
  readonly scaleDownUnneeded?: string;
  readonly scaleDownUnready?: string;
  readonly scaleDownUtilizationThreshold?: string;
  readonly scanInterval?: string;
}

function kubernetesClusterAutoScalerProfileToTerraform(struct?: KubernetesClusterAutoScalerProfile): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    balance_similar_node_groups: cdktf.booleanToTerraform(struct!.balanceSimilarNodeGroups),
    max_graceful_termination_sec: cdktf.stringToTerraform(struct!.maxGracefulTerminationSec),
    scale_down_delay_after_add: cdktf.stringToTerraform(struct!.scaleDownDelayAfterAdd),
    scale_down_delay_after_delete: cdktf.stringToTerraform(struct!.scaleDownDelayAfterDelete),
    scale_down_delay_after_failure: cdktf.stringToTerraform(struct!.scaleDownDelayAfterFailure),
    scale_down_unneeded: cdktf.stringToTerraform(struct!.scaleDownUnneeded),
    scale_down_unready: cdktf.stringToTerraform(struct!.scaleDownUnready),
    scale_down_utilization_threshold: cdktf.stringToTerraform(struct!.scaleDownUtilizationThreshold),
    scan_interval: cdktf.stringToTerraform(struct!.scanInterval),
  }
}

export interface KubernetesClusterDefaultNodePool {
  readonly availabilityZones?: string[];
  readonly enableAutoScaling?: boolean;
  readonly enableNodePublicIp?: boolean;
  readonly maxCount?: number;
  readonly maxPods?: number;
  readonly minCount?: number;
  readonly name: string;
  readonly nodeCount?: number;
  readonly nodeLabels?: { [key: string]: string };
  readonly nodeTaints?: string[];
  readonly orchestratorVersion?: string;
  readonly osDiskSizeGb?: number;
  readonly osDiskType?: string;
  readonly proximityPlacementGroupId?: string;
  readonly tags?: { [key: string]: string };
  readonly type?: string;
  readonly vmSize: string;
  readonly vnetSubnetId?: string;
}

function kubernetesClusterDefaultNodePoolToTerraform(struct?: KubernetesClusterDefaultNodePool): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    availability_zones: cdktf.listMapper(cdktf.stringToTerraform)(struct!.availabilityZones),
    enable_auto_scaling: cdktf.booleanToTerraform(struct!.enableAutoScaling),
    enable_node_public_ip: cdktf.booleanToTerraform(struct!.enableNodePublicIp),
    max_count: cdktf.numberToTerraform(struct!.maxCount),
    max_pods: cdktf.numberToTerraform(struct!.maxPods),
    min_count: cdktf.numberToTerraform(struct!.minCount),
    name: cdktf.stringToTerraform(struct!.name),
    node_count: cdktf.numberToTerraform(struct!.nodeCount),
    node_labels: cdktf.hashMapper(cdktf.anyToTerraform)(struct!.nodeLabels),
    node_taints: cdktf.listMapper(cdktf.stringToTerraform)(struct!.nodeTaints),
    orchestrator_version: cdktf.stringToTerraform(struct!.orchestratorVersion),
    os_disk_size_gb: cdktf.numberToTerraform(struct!.osDiskSizeGb),
    os_disk_type: cdktf.stringToTerraform(struct!.osDiskType),
    proximity_placement_group_id: cdktf.stringToTerraform(struct!.proximityPlacementGroupId),
    tags: cdktf.hashMapper(cdktf.anyToTerraform)(struct!.tags),
    type: cdktf.stringToTerraform(struct!.type),
    vm_size: cdktf.stringToTerraform(struct!.vmSize),
    vnet_subnet_id: cdktf.stringToTerraform(struct!.vnetSubnetId),
  }
}

export interface KubernetesClusterIdentity {
  readonly type: string;
}

function kubernetesClusterIdentityToTerraform(struct?: KubernetesClusterIdentity): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    type: cdktf.stringToTerraform(struct!.type),
  }
}

export interface KubernetesClusterLinuxProfileSshKey {
  readonly keyData: string;
}

function kubernetesClusterLinuxProfileSshKeyToTerraform(struct?: KubernetesClusterLinuxProfileSshKey): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    key_data: cdktf.stringToTerraform(struct!.keyData),
  }
}

export interface KubernetesClusterLinuxProfile {
  readonly adminUsername: string;
  /** ssh_key block */
  readonly sshKey: KubernetesClusterLinuxProfileSshKey[];
}

function kubernetesClusterLinuxProfileToTerraform(struct?: KubernetesClusterLinuxProfile): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    admin_username: cdktf.stringToTerraform(struct!.adminUsername),
    ssh_key: cdktf.listMapper(kubernetesClusterLinuxProfileSshKeyToTerraform)(struct!.sshKey),
  }
}

export interface KubernetesClusterNetworkProfileLoadBalancerProfile {
  readonly idleTimeoutInMinutes?: number;
  readonly managedOutboundIpCount?: number;
  readonly outboundIpAddressIds?: string[];
  readonly outboundIpPrefixIds?: string[];
  readonly outboundPortsAllocated?: number;
}

function kubernetesClusterNetworkProfileLoadBalancerProfileToTerraform(struct?: KubernetesClusterNetworkProfileLoadBalancerProfile): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    idle_timeout_in_minutes: cdktf.numberToTerraform(struct!.idleTimeoutInMinutes),
    managed_outbound_ip_count: cdktf.numberToTerraform(struct!.managedOutboundIpCount),
    outbound_ip_address_ids: cdktf.listMapper(cdktf.stringToTerraform)(struct!.outboundIpAddressIds),
    outbound_ip_prefix_ids: cdktf.listMapper(cdktf.stringToTerraform)(struct!.outboundIpPrefixIds),
    outbound_ports_allocated: cdktf.numberToTerraform(struct!.outboundPortsAllocated),
  }
}

export interface KubernetesClusterNetworkProfile {
  readonly dnsServiceIp?: string;
  readonly dockerBridgeCidr?: string;
  readonly loadBalancerSku?: string;
  readonly networkMode?: string;
  readonly networkPlugin: string;
  readonly networkPolicy?: string;
  readonly outboundType?: string;
  readonly podCidr?: string;
  readonly serviceCidr?: string;
  /** load_balancer_profile block */
  readonly loadBalancerProfile?: KubernetesClusterNetworkProfileLoadBalancerProfile[];
}

function kubernetesClusterNetworkProfileToTerraform(struct?: KubernetesClusterNetworkProfile): any {
  if (!cdktf.canInspect(struct)) { return struct; }
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
    load_balancer_profile: cdktf.listMapper(kubernetesClusterNetworkProfileLoadBalancerProfileToTerraform)(struct!.loadBalancerProfile),
  }
}

export interface KubernetesClusterRoleBasedAccessControlAzureActiveDirectory {
  readonly adminGroupObjectIds?: string[];
  readonly clientAppId?: string;
  readonly managed?: boolean;
  readonly serverAppId?: string;
  readonly serverAppSecret?: string;
  readonly tenantId?: string;
}

function kubernetesClusterRoleBasedAccessControlAzureActiveDirectoryToTerraform(struct?: KubernetesClusterRoleBasedAccessControlAzureActiveDirectory): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    admin_group_object_ids: cdktf.listMapper(cdktf.stringToTerraform)(struct!.adminGroupObjectIds),
    client_app_id: cdktf.stringToTerraform(struct!.clientAppId),
    managed: cdktf.booleanToTerraform(struct!.managed),
    server_app_id: cdktf.stringToTerraform(struct!.serverAppId),
    server_app_secret: cdktf.stringToTerraform(struct!.serverAppSecret),
    tenant_id: cdktf.stringToTerraform(struct!.tenantId),
  }
}

export interface KubernetesClusterRoleBasedAccessControl {
  readonly enabled: boolean;
  /** azure_active_directory block */
  readonly azureActiveDirectory?: KubernetesClusterRoleBasedAccessControlAzureActiveDirectory[];
}

function kubernetesClusterRoleBasedAccessControlToTerraform(struct?: KubernetesClusterRoleBasedAccessControl): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    enabled: cdktf.booleanToTerraform(struct!.enabled),
    azure_active_directory: cdktf.listMapper(kubernetesClusterRoleBasedAccessControlAzureActiveDirectoryToTerraform)(struct!.azureActiveDirectory),
  }
}

export interface KubernetesClusterServicePrincipal {
  readonly clientId: string;
  readonly clientSecret: string;
}

function kubernetesClusterServicePrincipalToTerraform(struct?: KubernetesClusterServicePrincipal): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    client_id: cdktf.stringToTerraform(struct!.clientId),
    client_secret: cdktf.stringToTerraform(struct!.clientSecret),
  }
}

export interface KubernetesClusterTimeouts {
  readonly create?: string;
  readonly delete?: string;
  readonly read?: string;
  readonly update?: string;
}

function kubernetesClusterTimeoutsToTerraform(struct?: KubernetesClusterTimeouts): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    create: cdktf.stringToTerraform(struct!.create),
    delete: cdktf.stringToTerraform(struct!.delete),
    read: cdktf.stringToTerraform(struct!.read),
    update: cdktf.stringToTerraform(struct!.update),
  }
}

export interface KubernetesClusterWindowsProfile {
  readonly adminPassword?: string;
  readonly adminUsername: string;
}

function kubernetesClusterWindowsProfileToTerraform(struct?: KubernetesClusterWindowsProfile): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    admin_password: cdktf.stringToTerraform(struct!.adminPassword),
    admin_username: cdktf.stringToTerraform(struct!.adminUsername),
  }
}


// Resource

export class KubernetesCluster extends cdktf.TerraformResource {

  // ===========
  // INITIALIZER
  // ===========

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
    this._diskEncryptionSetId = config.diskEncryptionSetId;
    this._dnsPrefix = config.dnsPrefix;
    this._enablePodSecurityPolicy = config.enablePodSecurityPolicy;
    this._kubernetesVersion = config.kubernetesVersion;
    this._location = config.location;
    this._name = config.name;
    this._nodeResourceGroup = config.nodeResourceGroup;
    this._privateClusterEnabled = config.privateClusterEnabled;
    this._privateLinkEnabled = config.privateLinkEnabled;
    this._resourceGroupName = config.resourceGroupName;
    this._skuTier = config.skuTier;
    this._tags = config.tags;
    this._addonProfile = config.addonProfile;
    this._autoScalerProfile = config.autoScalerProfile;
    this._defaultNodePool = config.defaultNodePool;
    this._identity = config.identity;
    this._linuxProfile = config.linuxProfile;
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
  private _apiServerAuthorizedIpRanges?: string[];
  public get apiServerAuthorizedIpRanges() {
    return this.getListAttribute('api_server_authorized_ip_ranges');
  }
  public set apiServerAuthorizedIpRanges(value: string[] ) {
    this._apiServerAuthorizedIpRanges = value;
  }
  public resetApiServerAuthorizedIpRanges() {
    this._apiServerAuthorizedIpRanges = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get apiServerAuthorizedIpRangesInput() {
    return this._apiServerAuthorizedIpRanges
  }

  // disk_encryption_set_id - computed: false, optional: true, required: false
  private _diskEncryptionSetId?: string;
  public get diskEncryptionSetId() {
    return this.getStringAttribute('disk_encryption_set_id');
  }
  public set diskEncryptionSetId(value: string ) {
    this._diskEncryptionSetId = value;
  }
  public resetDiskEncryptionSetId() {
    this._diskEncryptionSetId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get diskEncryptionSetIdInput() {
    return this._diskEncryptionSetId
  }

  // dns_prefix - computed: false, optional: false, required: true
  private _dnsPrefix: string;
  public get dnsPrefix() {
    return this.getStringAttribute('dns_prefix');
  }
  public set dnsPrefix(value: string) {
    this._dnsPrefix = value;
  }
  // Temporarily expose input value. Use with caution.
  public get dnsPrefixInput() {
    return this._dnsPrefix
  }

  // enable_pod_security_policy - computed: false, optional: true, required: false
  private _enablePodSecurityPolicy?: boolean;
  public get enablePodSecurityPolicy() {
    return this.getBooleanAttribute('enable_pod_security_policy');
  }
  public set enablePodSecurityPolicy(value: boolean ) {
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

  // kubelet_identity - computed: true, optional: false, required: false
  public kubeletIdentity(index: string) {
    return new KubernetesClusterKubeletIdentity(this, 'kubelet_identity', index);
  }

  // kubernetes_version - computed: true, optional: true, required: false
  private _kubernetesVersion?: string;
  public get kubernetesVersion() {
    return this.getStringAttribute('kubernetes_version');
  }
  public set kubernetesVersion(value: string) {
    this._kubernetesVersion = value;
  }
  public resetKubernetesVersion() {
    this._kubernetesVersion = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get kubernetesVersionInput() {
    return this._kubernetesVersion
  }

  // location - computed: false, optional: false, required: true
  private _location: string;
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
  private _name: string;
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
  private _nodeResourceGroup?: string;
  public get nodeResourceGroup() {
    return this.getStringAttribute('node_resource_group');
  }
  public set nodeResourceGroup(value: string) {
    this._nodeResourceGroup = value;
  }
  public resetNodeResourceGroup() {
    this._nodeResourceGroup = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nodeResourceGroupInput() {
    return this._nodeResourceGroup
  }

  // private_cluster_enabled - computed: true, optional: true, required: false
  private _privateClusterEnabled?: boolean;
  public get privateClusterEnabled() {
    return this.getBooleanAttribute('private_cluster_enabled');
  }
  public set privateClusterEnabled(value: boolean) {
    this._privateClusterEnabled = value;
  }
  public resetPrivateClusterEnabled() {
    this._privateClusterEnabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get privateClusterEnabledInput() {
    return this._privateClusterEnabled
  }

  // private_fqdn - computed: true, optional: false, required: false
  public get privateFqdn() {
    return this.getStringAttribute('private_fqdn');
  }

  // private_link_enabled - computed: true, optional: true, required: false
  private _privateLinkEnabled?: boolean;
  public get privateLinkEnabled() {
    return this.getBooleanAttribute('private_link_enabled');
  }
  public set privateLinkEnabled(value: boolean) {
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
  private _resourceGroupName: string;
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
  private _skuTier?: string;
  public get skuTier() {
    return this.getStringAttribute('sku_tier');
  }
  public set skuTier(value: string ) {
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
  private _tags?: { [key: string]: string };
  public get tags() {
    return this.interpolationForAttribute('tags') as any;
  }
  public set tags(value: { [key: string]: string } ) {
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
  private _addonProfile?: KubernetesClusterAddonProfile[];
  public get addonProfile() {
    return this.interpolationForAttribute('addon_profile') as any;
  }
  public set addonProfile(value: KubernetesClusterAddonProfile[] ) {
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
  private _autoScalerProfile?: KubernetesClusterAutoScalerProfile[];
  public get autoScalerProfile() {
    return this.interpolationForAttribute('auto_scaler_profile') as any;
  }
  public set autoScalerProfile(value: KubernetesClusterAutoScalerProfile[] ) {
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
  private _defaultNodePool: KubernetesClusterDefaultNodePool[];
  public get defaultNodePool() {
    return this.interpolationForAttribute('default_node_pool') as any;
  }
  public set defaultNodePool(value: KubernetesClusterDefaultNodePool[]) {
    this._defaultNodePool = value;
  }
  // Temporarily expose input value. Use with caution.
  public get defaultNodePoolInput() {
    return this._defaultNodePool
  }

  // identity - computed: false, optional: true, required: false
  private _identity?: KubernetesClusterIdentity[];
  public get identity() {
    return this.interpolationForAttribute('identity') as any;
  }
  public set identity(value: KubernetesClusterIdentity[] ) {
    this._identity = value;
  }
  public resetIdentity() {
    this._identity = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get identityInput() {
    return this._identity
  }

  // linux_profile - computed: false, optional: true, required: false
  private _linuxProfile?: KubernetesClusterLinuxProfile[];
  public get linuxProfile() {
    return this.interpolationForAttribute('linux_profile') as any;
  }
  public set linuxProfile(value: KubernetesClusterLinuxProfile[] ) {
    this._linuxProfile = value;
  }
  public resetLinuxProfile() {
    this._linuxProfile = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get linuxProfileInput() {
    return this._linuxProfile
  }

  // network_profile - computed: false, optional: true, required: false
  private _networkProfile?: KubernetesClusterNetworkProfile[];
  public get networkProfile() {
    return this.interpolationForAttribute('network_profile') as any;
  }
  public set networkProfile(value: KubernetesClusterNetworkProfile[] ) {
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
  private _roleBasedAccessControl?: KubernetesClusterRoleBasedAccessControl[];
  public get roleBasedAccessControl() {
    return this.interpolationForAttribute('role_based_access_control') as any;
  }
  public set roleBasedAccessControl(value: KubernetesClusterRoleBasedAccessControl[] ) {
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
  private _servicePrincipal?: KubernetesClusterServicePrincipal[];
  public get servicePrincipal() {
    return this.interpolationForAttribute('service_principal') as any;
  }
  public set servicePrincipal(value: KubernetesClusterServicePrincipal[] ) {
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
  private _timeouts?: KubernetesClusterTimeouts;
  public get timeouts() {
    return this.interpolationForAttribute('timeouts') as any;
  }
  public set timeouts(value: KubernetesClusterTimeouts ) {
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
  private _windowsProfile?: KubernetesClusterWindowsProfile[];
  public get windowsProfile() {
    return this.interpolationForAttribute('windows_profile') as any;
  }
  public set windowsProfile(value: KubernetesClusterWindowsProfile[] ) {
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
      disk_encryption_set_id: cdktf.stringToTerraform(this._diskEncryptionSetId),
      dns_prefix: cdktf.stringToTerraform(this._dnsPrefix),
      enable_pod_security_policy: cdktf.booleanToTerraform(this._enablePodSecurityPolicy),
      kubernetes_version: cdktf.stringToTerraform(this._kubernetesVersion),
      location: cdktf.stringToTerraform(this._location),
      name: cdktf.stringToTerraform(this._name),
      node_resource_group: cdktf.stringToTerraform(this._nodeResourceGroup),
      private_cluster_enabled: cdktf.booleanToTerraform(this._privateClusterEnabled),
      private_link_enabled: cdktf.booleanToTerraform(this._privateLinkEnabled),
      resource_group_name: cdktf.stringToTerraform(this._resourceGroupName),
      sku_tier: cdktf.stringToTerraform(this._skuTier),
      tags: cdktf.hashMapper(cdktf.anyToTerraform)(this._tags),
      addon_profile: cdktf.listMapper(kubernetesClusterAddonProfileToTerraform)(this._addonProfile),
      auto_scaler_profile: cdktf.listMapper(kubernetesClusterAutoScalerProfileToTerraform)(this._autoScalerProfile),
      default_node_pool: cdktf.listMapper(kubernetesClusterDefaultNodePoolToTerraform)(this._defaultNodePool),
      identity: cdktf.listMapper(kubernetesClusterIdentityToTerraform)(this._identity),
      linux_profile: cdktf.listMapper(kubernetesClusterLinuxProfileToTerraform)(this._linuxProfile),
      network_profile: cdktf.listMapper(kubernetesClusterNetworkProfileToTerraform)(this._networkProfile),
      role_based_access_control: cdktf.listMapper(kubernetesClusterRoleBasedAccessControlToTerraform)(this._roleBasedAccessControl),
      service_principal: cdktf.listMapper(kubernetesClusterServicePrincipalToTerraform)(this._servicePrincipal),
      timeouts: kubernetesClusterTimeoutsToTerraform(this._timeouts),
      windows_profile: cdktf.listMapper(kubernetesClusterWindowsProfileToTerraform)(this._windowsProfile),
    };
  }
}
