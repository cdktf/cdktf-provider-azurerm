// https://www.terraform.io/docs/providers/azurerm/d/kubernetes_cluster.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataAzurermKubernetesClusterConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/d/kubernetes_cluster.html#name DataAzurermKubernetesCluster#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/d/kubernetes_cluster.html#resource_group_name DataAzurermKubernetesCluster#resource_group_name}
  */
  readonly resourceGroupName: string;
  /**
  * timeouts block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/d/kubernetes_cluster.html#timeouts DataAzurermKubernetesCluster#timeouts}
  */
  readonly timeouts?: DataAzurermKubernetesClusterTimeouts;
}
export class DataAzurermKubernetesClusterAddonProfileAzurePolicy extends cdktf.ComplexComputedList {

  // enabled - computed: true, optional: false, required: false
  public get enabled() {
    return this.getBooleanAttribute('enabled') as any;
  }
}
export class DataAzurermKubernetesClusterAddonProfileHttpApplicationRouting extends cdktf.ComplexComputedList {

  // enabled - computed: true, optional: false, required: false
  public get enabled() {
    return this.getBooleanAttribute('enabled') as any;
  }

  // http_application_routing_zone_name - computed: true, optional: false, required: false
  public get httpApplicationRoutingZoneName() {
    return this.getStringAttribute('http_application_routing_zone_name');
  }
}
export class DataAzurermKubernetesClusterAddonProfileIngressApplicationGatewayIngressApplicationGatewayIdentity extends cdktf.ComplexComputedList {

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
export class DataAzurermKubernetesClusterAddonProfileIngressApplicationGateway extends cdktf.ComplexComputedList {

  // effective_gateway_id - computed: true, optional: false, required: false
  public get effectiveGatewayId() {
    return this.getStringAttribute('effective_gateway_id');
  }

  // enabled - computed: true, optional: false, required: false
  public get enabled() {
    return this.getBooleanAttribute('enabled') as any;
  }

  // gateway_id - computed: true, optional: false, required: false
  public get gatewayId() {
    return this.getStringAttribute('gateway_id');
  }

  // ingress_application_gateway_identity - computed: true, optional: false, required: false
  public get ingressApplicationGatewayIdentity() {
    // Getting the computed value is not yet implemented
    return this.interpolationForAttribute('ingress_application_gateway_identity') as any;
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
export class DataAzurermKubernetesClusterAddonProfileKubeDashboard extends cdktf.ComplexComputedList {

  // enabled - computed: true, optional: false, required: false
  public get enabled() {
    return this.getBooleanAttribute('enabled') as any;
  }
}
export class DataAzurermKubernetesClusterAddonProfileOmsAgentOmsAgentIdentity extends cdktf.ComplexComputedList {

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
export class DataAzurermKubernetesClusterAddonProfileOmsAgent extends cdktf.ComplexComputedList {

  // enabled - computed: true, optional: false, required: false
  public get enabled() {
    return this.getBooleanAttribute('enabled') as any;
  }

  // log_analytics_workspace_id - computed: true, optional: false, required: false
  public get logAnalyticsWorkspaceId() {
    return this.getStringAttribute('log_analytics_workspace_id');
  }

  // oms_agent_identity - computed: true, optional: false, required: false
  public get omsAgentIdentity() {
    // Getting the computed value is not yet implemented
    return this.interpolationForAttribute('oms_agent_identity') as any;
  }
}
export class DataAzurermKubernetesClusterAddonProfileOpenServiceMesh extends cdktf.ComplexComputedList {

  // enabled - computed: true, optional: false, required: false
  public get enabled() {
    return this.getBooleanAttribute('enabled') as any;
  }
}
export class DataAzurermKubernetesClusterAddonProfile extends cdktf.ComplexComputedList {

  // azure_policy - computed: true, optional: false, required: false
  public get azurePolicy() {
    // Getting the computed value is not yet implemented
    return this.interpolationForAttribute('azure_policy') as any;
  }

  // http_application_routing - computed: true, optional: false, required: false
  public get httpApplicationRouting() {
    // Getting the computed value is not yet implemented
    return this.interpolationForAttribute('http_application_routing') as any;
  }

  // ingress_application_gateway - computed: true, optional: false, required: false
  public get ingressApplicationGateway() {
    // Getting the computed value is not yet implemented
    return this.interpolationForAttribute('ingress_application_gateway') as any;
  }

  // kube_dashboard - computed: true, optional: false, required: false
  public get kubeDashboard() {
    // Getting the computed value is not yet implemented
    return this.interpolationForAttribute('kube_dashboard') as any;
  }

  // oms_agent - computed: true, optional: false, required: false
  public get omsAgent() {
    // Getting the computed value is not yet implemented
    return this.interpolationForAttribute('oms_agent') as any;
  }

  // open_service_mesh - computed: true, optional: false, required: false
  public get openServiceMesh() {
    // Getting the computed value is not yet implemented
    return this.interpolationForAttribute('open_service_mesh') as any;
  }
}
export class DataAzurermKubernetesClusterAgentPoolProfileUpgradeSettings extends cdktf.ComplexComputedList {

  // max_surge - computed: true, optional: false, required: false
  public get maxSurge() {
    return this.getStringAttribute('max_surge');
  }
}
export class DataAzurermKubernetesClusterAgentPoolProfile extends cdktf.ComplexComputedList {

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
    return this.getBooleanAttribute('enable_auto_scaling') as any;
  }

  // enable_node_public_ip - computed: true, optional: false, required: false
  public get enableNodePublicIp() {
    return this.getBooleanAttribute('enable_node_public_ip') as any;
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
  public get nodeLabels() {
    // Getting the computed value is not yet implemented
    return this.interpolationForAttribute('node_labels') as any;
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
  public get tags() {
    // Getting the computed value is not yet implemented
    return this.interpolationForAttribute('tags') as any;
  }

  // type - computed: true, optional: false, required: false
  public get type() {
    return this.getStringAttribute('type');
  }

  // upgrade_settings - computed: true, optional: false, required: false
  public get upgradeSettings() {
    // Getting the computed value is not yet implemented
    return this.interpolationForAttribute('upgrade_settings') as any;
  }

  // vm_size - computed: true, optional: false, required: false
  public get vmSize() {
    return this.getStringAttribute('vm_size');
  }

  // vnet_subnet_id - computed: true, optional: false, required: false
  public get vnetSubnetId() {
    return this.getStringAttribute('vnet_subnet_id');
  }
}
export class DataAzurermKubernetesClusterIdentity extends cdktf.ComplexComputedList {

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
export class DataAzurermKubernetesClusterKubeAdminConfig extends cdktf.ComplexComputedList {

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
export class DataAzurermKubernetesClusterKubeConfig extends cdktf.ComplexComputedList {

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
export class DataAzurermKubernetesClusterKubeletIdentity extends cdktf.ComplexComputedList {

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
export class DataAzurermKubernetesClusterLinuxProfileSshKey extends cdktf.ComplexComputedList {

  // key_data - computed: true, optional: false, required: false
  public get keyData() {
    return this.getStringAttribute('key_data');
  }
}
export class DataAzurermKubernetesClusterLinuxProfile extends cdktf.ComplexComputedList {

  // admin_username - computed: true, optional: false, required: false
  public get adminUsername() {
    return this.getStringAttribute('admin_username');
  }

  // ssh_key - computed: true, optional: false, required: false
  public get sshKey() {
    // Getting the computed value is not yet implemented
    return this.interpolationForAttribute('ssh_key') as any;
  }
}
export class DataAzurermKubernetesClusterNetworkProfile extends cdktf.ComplexComputedList {

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
export class DataAzurermKubernetesClusterRoleBasedAccessControlAzureActiveDirectory extends cdktf.ComplexComputedList {

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
    return this.getBooleanAttribute('managed') as any;
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
export class DataAzurermKubernetesClusterRoleBasedAccessControl extends cdktf.ComplexComputedList {

  // azure_active_directory - computed: true, optional: false, required: false
  public get azureActiveDirectory() {
    // Getting the computed value is not yet implemented
    return this.interpolationForAttribute('azure_active_directory') as any;
  }

  // enabled - computed: true, optional: false, required: false
  public get enabled() {
    return this.getBooleanAttribute('enabled') as any;
  }
}
export class DataAzurermKubernetesClusterServicePrincipal extends cdktf.ComplexComputedList {

  // client_id - computed: true, optional: false, required: false
  public get clientId() {
    return this.getStringAttribute('client_id');
  }
}
export class DataAzurermKubernetesClusterWindowsProfile extends cdktf.ComplexComputedList {

  // admin_username - computed: true, optional: false, required: false
  public get adminUsername() {
    return this.getStringAttribute('admin_username');
  }
}
export interface DataAzurermKubernetesClusterTimeouts {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/d/kubernetes_cluster.html#read DataAzurermKubernetesCluster#read}
  */
  readonly read?: string;
}

function dataAzurermKubernetesClusterTimeoutsToTerraform(struct?: DataAzurermKubernetesClusterTimeoutsOutputReference | DataAzurermKubernetesClusterTimeouts): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    read: cdktf.stringToTerraform(struct!.read),
  }
}

export class DataAzurermKubernetesClusterTimeoutsOutputReference extends cdktf.ComplexObject {
  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param isSingleItem True if this is a block, false if it's a list
  */
  public constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean) {
    super(terraformResource, terraformAttribute, isSingleItem);
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
}

/**
* Represents a {@link https://www.terraform.io/docs/providers/azurerm/d/kubernetes_cluster.html azurerm_kubernetes_cluster}
*/
export class DataAzurermKubernetesCluster extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType: string = "azurerm_kubernetes_cluster";

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://www.terraform.io/docs/providers/azurerm/d/kubernetes_cluster.html azurerm_kubernetes_cluster} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataAzurermKubernetesClusterConfig
  */
  public constructor(scope: Construct, id: string, config: DataAzurermKubernetesClusterConfig) {
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
    this._name = config.name;
    this._resourceGroupName = config.resourceGroupName;
    this._timeouts = config.timeouts;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // addon_profile - computed: true, optional: false, required: false
  public addonProfile(index: string) {
    return new DataAzurermKubernetesClusterAddonProfile(this, 'addon_profile', index);
  }

  // agent_pool_profile - computed: true, optional: false, required: false
  public agentPoolProfile(index: string) {
    return new DataAzurermKubernetesClusterAgentPoolProfile(this, 'agent_pool_profile', index);
  }

  // api_server_authorized_ip_ranges - computed: true, optional: false, required: false
  public get apiServerAuthorizedIpRanges() {
    return this.getListAttribute('api_server_authorized_ip_ranges');
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

  // id - computed: true, optional: true, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // identity - computed: true, optional: false, required: false
  public identity(index: string) {
    return new DataAzurermKubernetesClusterIdentity(this, 'identity', index);
  }

  // kube_admin_config - computed: true, optional: false, required: false
  public kubeAdminConfig(index: string) {
    return new DataAzurermKubernetesClusterKubeAdminConfig(this, 'kube_admin_config', index);
  }

  // kube_admin_config_raw - computed: true, optional: false, required: false
  public get kubeAdminConfigRaw() {
    return this.getStringAttribute('kube_admin_config_raw');
  }

  // kube_config - computed: true, optional: false, required: false
  public kubeConfig(index: string) {
    return new DataAzurermKubernetesClusterKubeConfig(this, 'kube_config', index);
  }

  // kube_config_raw - computed: true, optional: false, required: false
  public get kubeConfigRaw() {
    return this.getStringAttribute('kube_config_raw');
  }

  // kubelet_identity - computed: true, optional: false, required: false
  public kubeletIdentity(index: string) {
    return new DataAzurermKubernetesClusterKubeletIdentity(this, 'kubelet_identity', index);
  }

  // kubernetes_version - computed: true, optional: false, required: false
  public get kubernetesVersion() {
    return this.getStringAttribute('kubernetes_version');
  }

  // linux_profile - computed: true, optional: false, required: false
  public linuxProfile(index: string) {
    return new DataAzurermKubernetesClusterLinuxProfile(this, 'linux_profile', index);
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
    return this._name
  }

  // network_profile - computed: true, optional: false, required: false
  public networkProfile(index: string) {
    return new DataAzurermKubernetesClusterNetworkProfile(this, 'network_profile', index);
  }

  // node_resource_group - computed: true, optional: false, required: false
  public get nodeResourceGroup() {
    return this.getStringAttribute('node_resource_group');
  }

  // private_cluster_enabled - computed: true, optional: false, required: false
  public get privateClusterEnabled() {
    return this.getBooleanAttribute('private_cluster_enabled') as any;
  }

  // private_fqdn - computed: true, optional: false, required: false
  public get privateFqdn() {
    return this.getStringAttribute('private_fqdn');
  }

  // private_link_enabled - computed: true, optional: false, required: false
  public get privateLinkEnabled() {
    return this.getBooleanAttribute('private_link_enabled') as any;
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

  // role_based_access_control - computed: true, optional: false, required: false
  public roleBasedAccessControl(index: string) {
    return new DataAzurermKubernetesClusterRoleBasedAccessControl(this, 'role_based_access_control', index);
  }

  // service_principal - computed: true, optional: false, required: false
  public servicePrincipal(index: string) {
    return new DataAzurermKubernetesClusterServicePrincipal(this, 'service_principal', index);
  }

  // tags - computed: true, optional: false, required: false
  public tags(key: string): string {
    return new cdktf.StringMap(this, 'tags').lookup(key);
  }

  // windows_profile - computed: true, optional: false, required: false
  public windowsProfile(index: string) {
    return new DataAzurermKubernetesClusterWindowsProfile(this, 'windows_profile', index);
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts?: DataAzurermKubernetesClusterTimeouts | undefined; 
  private __timeoutsOutput = new DataAzurermKubernetesClusterTimeoutsOutputReference(this as any, "timeouts", true);
  public get timeouts() {
    return this.__timeoutsOutput;
  }
  public putTimeouts(value: DataAzurermKubernetesClusterTimeouts | undefined) {
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
      name: cdktf.stringToTerraform(this._name),
      resource_group_name: cdktf.stringToTerraform(this._resourceGroupName),
      timeouts: dataAzurermKubernetesClusterTimeoutsToTerraform(this._timeouts),
    };
  }
}
