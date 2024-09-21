// https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/kubernetes_cluster
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface KubernetesClusterConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/kubernetes_cluster#automatic_upgrade_channel KubernetesCluster#automatic_upgrade_channel}
  */
  readonly automaticUpgradeChannel?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/kubernetes_cluster#azure_policy_enabled KubernetesCluster#azure_policy_enabled}
  */
  readonly azurePolicyEnabled?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/kubernetes_cluster#cost_analysis_enabled KubernetesCluster#cost_analysis_enabled}
  */
  readonly costAnalysisEnabled?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/kubernetes_cluster#disk_encryption_set_id KubernetesCluster#disk_encryption_set_id}
  */
  readonly diskEncryptionSetId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/kubernetes_cluster#dns_prefix KubernetesCluster#dns_prefix}
  */
  readonly dnsPrefix?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/kubernetes_cluster#dns_prefix_private_cluster KubernetesCluster#dns_prefix_private_cluster}
  */
  readonly dnsPrefixPrivateCluster?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/kubernetes_cluster#edge_zone KubernetesCluster#edge_zone}
  */
  readonly edgeZone?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/kubernetes_cluster#http_application_routing_enabled KubernetesCluster#http_application_routing_enabled}
  */
  readonly httpApplicationRoutingEnabled?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/kubernetes_cluster#id KubernetesCluster#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/kubernetes_cluster#image_cleaner_enabled KubernetesCluster#image_cleaner_enabled}
  */
  readonly imageCleanerEnabled?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/kubernetes_cluster#image_cleaner_interval_hours KubernetesCluster#image_cleaner_interval_hours}
  */
  readonly imageCleanerIntervalHours?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/kubernetes_cluster#kubernetes_version KubernetesCluster#kubernetes_version}
  */
  readonly kubernetesVersion?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/kubernetes_cluster#local_account_disabled KubernetesCluster#local_account_disabled}
  */
  readonly localAccountDisabled?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/kubernetes_cluster#location KubernetesCluster#location}
  */
  readonly location: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/kubernetes_cluster#name KubernetesCluster#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/kubernetes_cluster#node_os_upgrade_channel KubernetesCluster#node_os_upgrade_channel}
  */
  readonly nodeOsUpgradeChannel?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/kubernetes_cluster#node_resource_group KubernetesCluster#node_resource_group}
  */
  readonly nodeResourceGroup?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/kubernetes_cluster#oidc_issuer_enabled KubernetesCluster#oidc_issuer_enabled}
  */
  readonly oidcIssuerEnabled?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/kubernetes_cluster#open_service_mesh_enabled KubernetesCluster#open_service_mesh_enabled}
  */
  readonly openServiceMeshEnabled?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/kubernetes_cluster#private_cluster_enabled KubernetesCluster#private_cluster_enabled}
  */
  readonly privateClusterEnabled?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/kubernetes_cluster#private_cluster_public_fqdn_enabled KubernetesCluster#private_cluster_public_fqdn_enabled}
  */
  readonly privateClusterPublicFqdnEnabled?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/kubernetes_cluster#private_dns_zone_id KubernetesCluster#private_dns_zone_id}
  */
  readonly privateDnsZoneId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/kubernetes_cluster#resource_group_name KubernetesCluster#resource_group_name}
  */
  readonly resourceGroupName: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/kubernetes_cluster#role_based_access_control_enabled KubernetesCluster#role_based_access_control_enabled}
  */
  readonly roleBasedAccessControlEnabled?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/kubernetes_cluster#run_command_enabled KubernetesCluster#run_command_enabled}
  */
  readonly runCommandEnabled?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/kubernetes_cluster#sku_tier KubernetesCluster#sku_tier}
  */
  readonly skuTier?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/kubernetes_cluster#support_plan KubernetesCluster#support_plan}
  */
  readonly supportPlan?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/kubernetes_cluster#tags KubernetesCluster#tags}
  */
  readonly tags?: { [key: string]: string };
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/kubernetes_cluster#workload_identity_enabled KubernetesCluster#workload_identity_enabled}
  */
  readonly workloadIdentityEnabled?: boolean | cdktf.IResolvable;
  /**
  * aci_connector_linux block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/kubernetes_cluster#aci_connector_linux KubernetesCluster#aci_connector_linux}
  */
  readonly aciConnectorLinux?: KubernetesClusterAciConnectorLinux;
  /**
  * api_server_access_profile block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/kubernetes_cluster#api_server_access_profile KubernetesCluster#api_server_access_profile}
  */
  readonly apiServerAccessProfile?: KubernetesClusterApiServerAccessProfile;
  /**
  * auto_scaler_profile block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/kubernetes_cluster#auto_scaler_profile KubernetesCluster#auto_scaler_profile}
  */
  readonly autoScalerProfile?: KubernetesClusterAutoScalerProfile;
  /**
  * azure_active_directory_role_based_access_control block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/kubernetes_cluster#azure_active_directory_role_based_access_control KubernetesCluster#azure_active_directory_role_based_access_control}
  */
  readonly azureActiveDirectoryRoleBasedAccessControl?: KubernetesClusterAzureActiveDirectoryRoleBasedAccessControl;
  /**
  * confidential_computing block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/kubernetes_cluster#confidential_computing KubernetesCluster#confidential_computing}
  */
  readonly confidentialComputing?: KubernetesClusterConfidentialComputing;
  /**
  * default_node_pool block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/kubernetes_cluster#default_node_pool KubernetesCluster#default_node_pool}
  */
  readonly defaultNodePool: KubernetesClusterDefaultNodePool;
  /**
  * http_proxy_config block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/kubernetes_cluster#http_proxy_config KubernetesCluster#http_proxy_config}
  */
  readonly httpProxyConfig?: KubernetesClusterHttpProxyConfig;
  /**
  * identity block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/kubernetes_cluster#identity KubernetesCluster#identity}
  */
  readonly identity?: KubernetesClusterIdentity;
  /**
  * ingress_application_gateway block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/kubernetes_cluster#ingress_application_gateway KubernetesCluster#ingress_application_gateway}
  */
  readonly ingressApplicationGateway?: KubernetesClusterIngressApplicationGateway;
  /**
  * key_management_service block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/kubernetes_cluster#key_management_service KubernetesCluster#key_management_service}
  */
  readonly keyManagementService?: KubernetesClusterKeyManagementService;
  /**
  * key_vault_secrets_provider block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/kubernetes_cluster#key_vault_secrets_provider KubernetesCluster#key_vault_secrets_provider}
  */
  readonly keyVaultSecretsProvider?: KubernetesClusterKeyVaultSecretsProvider;
  /**
  * kubelet_identity block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/kubernetes_cluster#kubelet_identity KubernetesCluster#kubelet_identity}
  */
  readonly kubeletIdentity?: KubernetesClusterKubeletIdentity;
  /**
  * linux_profile block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/kubernetes_cluster#linux_profile KubernetesCluster#linux_profile}
  */
  readonly linuxProfile?: KubernetesClusterLinuxProfile;
  /**
  * maintenance_window block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/kubernetes_cluster#maintenance_window KubernetesCluster#maintenance_window}
  */
  readonly maintenanceWindow?: KubernetesClusterMaintenanceWindow;
  /**
  * maintenance_window_auto_upgrade block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/kubernetes_cluster#maintenance_window_auto_upgrade KubernetesCluster#maintenance_window_auto_upgrade}
  */
  readonly maintenanceWindowAutoUpgrade?: KubernetesClusterMaintenanceWindowAutoUpgrade;
  /**
  * maintenance_window_node_os block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/kubernetes_cluster#maintenance_window_node_os KubernetesCluster#maintenance_window_node_os}
  */
  readonly maintenanceWindowNodeOs?: KubernetesClusterMaintenanceWindowNodeOs;
  /**
  * microsoft_defender block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/kubernetes_cluster#microsoft_defender KubernetesCluster#microsoft_defender}
  */
  readonly microsoftDefender?: KubernetesClusterMicrosoftDefender;
  /**
  * monitor_metrics block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/kubernetes_cluster#monitor_metrics KubernetesCluster#monitor_metrics}
  */
  readonly monitorMetrics?: KubernetesClusterMonitorMetrics;
  /**
  * network_profile block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/kubernetes_cluster#network_profile KubernetesCluster#network_profile}
  */
  readonly networkProfile?: KubernetesClusterNetworkProfile;
  /**
  * oms_agent block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/kubernetes_cluster#oms_agent KubernetesCluster#oms_agent}
  */
  readonly omsAgent?: KubernetesClusterOmsAgent;
  /**
  * service_mesh_profile block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/kubernetes_cluster#service_mesh_profile KubernetesCluster#service_mesh_profile}
  */
  readonly serviceMeshProfile?: KubernetesClusterServiceMeshProfile;
  /**
  * service_principal block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/kubernetes_cluster#service_principal KubernetesCluster#service_principal}
  */
  readonly servicePrincipal?: KubernetesClusterServicePrincipal;
  /**
  * storage_profile block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/kubernetes_cluster#storage_profile KubernetesCluster#storage_profile}
  */
  readonly storageProfile?: KubernetesClusterStorageProfile;
  /**
  * timeouts block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/kubernetes_cluster#timeouts KubernetesCluster#timeouts}
  */
  readonly timeouts?: KubernetesClusterTimeouts;
  /**
  * web_app_routing block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/kubernetes_cluster#web_app_routing KubernetesCluster#web_app_routing}
  */
  readonly webAppRouting?: KubernetesClusterWebAppRouting;
  /**
  * windows_profile block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/kubernetes_cluster#windows_profile KubernetesCluster#windows_profile}
  */
  readonly windowsProfile?: KubernetesClusterWindowsProfile;
  /**
  * workload_autoscaler_profile block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/kubernetes_cluster#workload_autoscaler_profile KubernetesCluster#workload_autoscaler_profile}
  */
  readonly workloadAutoscalerProfile?: KubernetesClusterWorkloadAutoscalerProfile;
}
export interface KubernetesClusterKubeAdminConfig {
}

export function kubernetesClusterKubeAdminConfigToTerraform(struct?: KubernetesClusterKubeAdminConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function kubernetesClusterKubeAdminConfigToHclTerraform(struct?: KubernetesClusterKubeAdminConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class KubernetesClusterKubeAdminConfigOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): KubernetesClusterKubeAdminConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: KubernetesClusterKubeAdminConfig | undefined) {
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

export class KubernetesClusterKubeAdminConfigList extends cdktf.ComplexList {

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
  public get(index: number): KubernetesClusterKubeAdminConfigOutputReference {
    return new KubernetesClusterKubeAdminConfigOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface KubernetesClusterKubeConfig {
}

export function kubernetesClusterKubeConfigToTerraform(struct?: KubernetesClusterKubeConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function kubernetesClusterKubeConfigToHclTerraform(struct?: KubernetesClusterKubeConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class KubernetesClusterKubeConfigOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): KubernetesClusterKubeConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: KubernetesClusterKubeConfig | undefined) {
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

export class KubernetesClusterKubeConfigList extends cdktf.ComplexList {

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
  public get(index: number): KubernetesClusterKubeConfigOutputReference {
    return new KubernetesClusterKubeConfigOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface KubernetesClusterAciConnectorLinuxConnectorIdentity {
}

export function kubernetesClusterAciConnectorLinuxConnectorIdentityToTerraform(struct?: KubernetesClusterAciConnectorLinuxConnectorIdentity): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function kubernetesClusterAciConnectorLinuxConnectorIdentityToHclTerraform(struct?: KubernetesClusterAciConnectorLinuxConnectorIdentity): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class KubernetesClusterAciConnectorLinuxConnectorIdentityOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): KubernetesClusterAciConnectorLinuxConnectorIdentity | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: KubernetesClusterAciConnectorLinuxConnectorIdentity | undefined) {
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

export class KubernetesClusterAciConnectorLinuxConnectorIdentityList extends cdktf.ComplexList {

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
  public get(index: number): KubernetesClusterAciConnectorLinuxConnectorIdentityOutputReference {
    return new KubernetesClusterAciConnectorLinuxConnectorIdentityOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface KubernetesClusterAciConnectorLinux {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/kubernetes_cluster#subnet_name KubernetesCluster#subnet_name}
  */
  readonly subnetName: string;
}

export function kubernetesClusterAciConnectorLinuxToTerraform(struct?: KubernetesClusterAciConnectorLinuxOutputReference | KubernetesClusterAciConnectorLinux): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    subnet_name: cdktf.stringToTerraform(struct!.subnetName),
  }
}


export function kubernetesClusterAciConnectorLinuxToHclTerraform(struct?: KubernetesClusterAciConnectorLinuxOutputReference | KubernetesClusterAciConnectorLinux): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    subnet_name: {
      value: cdktf.stringToHclTerraform(struct!.subnetName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class KubernetesClusterAciConnectorLinuxOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): KubernetesClusterAciConnectorLinux | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._subnetName !== undefined) {
      hasAnyValues = true;
      internalValueResult.subnetName = this._subnetName;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: KubernetesClusterAciConnectorLinux | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._subnetName = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._subnetName = value.subnetName;
    }
  }

  // connector_identity - computed: true, optional: false, required: false
  private _connectorIdentity = new KubernetesClusterAciConnectorLinuxConnectorIdentityList(this, "connector_identity", false);
  public get connectorIdentity() {
    return this._connectorIdentity;
  }

  // subnet_name - computed: false, optional: false, required: true
  private _subnetName?: string; 
  public get subnetName() {
    return this.getStringAttribute('subnet_name');
  }
  public set subnetName(value: string) {
    this._subnetName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get subnetNameInput() {
    return this._subnetName;
  }
}
export interface KubernetesClusterApiServerAccessProfile {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/kubernetes_cluster#authorized_ip_ranges KubernetesCluster#authorized_ip_ranges}
  */
  readonly authorizedIpRanges?: string[];
}

export function kubernetesClusterApiServerAccessProfileToTerraform(struct?: KubernetesClusterApiServerAccessProfileOutputReference | KubernetesClusterApiServerAccessProfile): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    authorized_ip_ranges: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.authorizedIpRanges),
  }
}


export function kubernetesClusterApiServerAccessProfileToHclTerraform(struct?: KubernetesClusterApiServerAccessProfileOutputReference | KubernetesClusterApiServerAccessProfile): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    authorized_ip_ranges: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.authorizedIpRanges),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class KubernetesClusterApiServerAccessProfileOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): KubernetesClusterApiServerAccessProfile | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._authorizedIpRanges !== undefined) {
      hasAnyValues = true;
      internalValueResult.authorizedIpRanges = this._authorizedIpRanges;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: KubernetesClusterApiServerAccessProfile | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._authorizedIpRanges = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._authorizedIpRanges = value.authorizedIpRanges;
    }
  }

  // authorized_ip_ranges - computed: false, optional: true, required: false
  private _authorizedIpRanges?: string[]; 
  public get authorizedIpRanges() {
    return cdktf.Fn.tolist(this.getListAttribute('authorized_ip_ranges'));
  }
  public set authorizedIpRanges(value: string[]) {
    this._authorizedIpRanges = value;
  }
  public resetAuthorizedIpRanges() {
    this._authorizedIpRanges = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get authorizedIpRangesInput() {
    return this._authorizedIpRanges;
  }
}
export interface KubernetesClusterAutoScalerProfile {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/kubernetes_cluster#balance_similar_node_groups KubernetesCluster#balance_similar_node_groups}
  */
  readonly balanceSimilarNodeGroups?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/kubernetes_cluster#empty_bulk_delete_max KubernetesCluster#empty_bulk_delete_max}
  */
  readonly emptyBulkDeleteMax?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/kubernetes_cluster#expander KubernetesCluster#expander}
  */
  readonly expander?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/kubernetes_cluster#max_graceful_termination_sec KubernetesCluster#max_graceful_termination_sec}
  */
  readonly maxGracefulTerminationSec?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/kubernetes_cluster#max_node_provisioning_time KubernetesCluster#max_node_provisioning_time}
  */
  readonly maxNodeProvisioningTime?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/kubernetes_cluster#max_unready_nodes KubernetesCluster#max_unready_nodes}
  */
  readonly maxUnreadyNodes?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/kubernetes_cluster#max_unready_percentage KubernetesCluster#max_unready_percentage}
  */
  readonly maxUnreadyPercentage?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/kubernetes_cluster#new_pod_scale_up_delay KubernetesCluster#new_pod_scale_up_delay}
  */
  readonly newPodScaleUpDelay?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/kubernetes_cluster#scale_down_delay_after_add KubernetesCluster#scale_down_delay_after_add}
  */
  readonly scaleDownDelayAfterAdd?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/kubernetes_cluster#scale_down_delay_after_delete KubernetesCluster#scale_down_delay_after_delete}
  */
  readonly scaleDownDelayAfterDelete?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/kubernetes_cluster#scale_down_delay_after_failure KubernetesCluster#scale_down_delay_after_failure}
  */
  readonly scaleDownDelayAfterFailure?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/kubernetes_cluster#scale_down_unneeded KubernetesCluster#scale_down_unneeded}
  */
  readonly scaleDownUnneeded?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/kubernetes_cluster#scale_down_unready KubernetesCluster#scale_down_unready}
  */
  readonly scaleDownUnready?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/kubernetes_cluster#scale_down_utilization_threshold KubernetesCluster#scale_down_utilization_threshold}
  */
  readonly scaleDownUtilizationThreshold?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/kubernetes_cluster#scan_interval KubernetesCluster#scan_interval}
  */
  readonly scanInterval?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/kubernetes_cluster#skip_nodes_with_local_storage KubernetesCluster#skip_nodes_with_local_storage}
  */
  readonly skipNodesWithLocalStorage?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/kubernetes_cluster#skip_nodes_with_system_pods KubernetesCluster#skip_nodes_with_system_pods}
  */
  readonly skipNodesWithSystemPods?: boolean | cdktf.IResolvable;
}

export function kubernetesClusterAutoScalerProfileToTerraform(struct?: KubernetesClusterAutoScalerProfileOutputReference | KubernetesClusterAutoScalerProfile): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
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


export function kubernetesClusterAutoScalerProfileToHclTerraform(struct?: KubernetesClusterAutoScalerProfileOutputReference | KubernetesClusterAutoScalerProfile): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    balance_similar_node_groups: {
      value: cdktf.booleanToHclTerraform(struct!.balanceSimilarNodeGroups),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    empty_bulk_delete_max: {
      value: cdktf.stringToHclTerraform(struct!.emptyBulkDeleteMax),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    expander: {
      value: cdktf.stringToHclTerraform(struct!.expander),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    max_graceful_termination_sec: {
      value: cdktf.stringToHclTerraform(struct!.maxGracefulTerminationSec),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    max_node_provisioning_time: {
      value: cdktf.stringToHclTerraform(struct!.maxNodeProvisioningTime),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    max_unready_nodes: {
      value: cdktf.numberToHclTerraform(struct!.maxUnreadyNodes),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    max_unready_percentage: {
      value: cdktf.numberToHclTerraform(struct!.maxUnreadyPercentage),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    new_pod_scale_up_delay: {
      value: cdktf.stringToHclTerraform(struct!.newPodScaleUpDelay),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    scale_down_delay_after_add: {
      value: cdktf.stringToHclTerraform(struct!.scaleDownDelayAfterAdd),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    scale_down_delay_after_delete: {
      value: cdktf.stringToHclTerraform(struct!.scaleDownDelayAfterDelete),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    scale_down_delay_after_failure: {
      value: cdktf.stringToHclTerraform(struct!.scaleDownDelayAfterFailure),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    scale_down_unneeded: {
      value: cdktf.stringToHclTerraform(struct!.scaleDownUnneeded),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    scale_down_unready: {
      value: cdktf.stringToHclTerraform(struct!.scaleDownUnready),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    scale_down_utilization_threshold: {
      value: cdktf.stringToHclTerraform(struct!.scaleDownUtilizationThreshold),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    scan_interval: {
      value: cdktf.stringToHclTerraform(struct!.scanInterval),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    skip_nodes_with_local_storage: {
      value: cdktf.booleanToHclTerraform(struct!.skipNodesWithLocalStorage),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    skip_nodes_with_system_pods: {
      value: cdktf.booleanToHclTerraform(struct!.skipNodesWithSystemPods),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class KubernetesClusterAutoScalerProfileOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): KubernetesClusterAutoScalerProfile | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._balanceSimilarNodeGroups !== undefined) {
      hasAnyValues = true;
      internalValueResult.balanceSimilarNodeGroups = this._balanceSimilarNodeGroups;
    }
    if (this._emptyBulkDeleteMax !== undefined) {
      hasAnyValues = true;
      internalValueResult.emptyBulkDeleteMax = this._emptyBulkDeleteMax;
    }
    if (this._expander !== undefined) {
      hasAnyValues = true;
      internalValueResult.expander = this._expander;
    }
    if (this._maxGracefulTerminationSec !== undefined) {
      hasAnyValues = true;
      internalValueResult.maxGracefulTerminationSec = this._maxGracefulTerminationSec;
    }
    if (this._maxNodeProvisioningTime !== undefined) {
      hasAnyValues = true;
      internalValueResult.maxNodeProvisioningTime = this._maxNodeProvisioningTime;
    }
    if (this._maxUnreadyNodes !== undefined) {
      hasAnyValues = true;
      internalValueResult.maxUnreadyNodes = this._maxUnreadyNodes;
    }
    if (this._maxUnreadyPercentage !== undefined) {
      hasAnyValues = true;
      internalValueResult.maxUnreadyPercentage = this._maxUnreadyPercentage;
    }
    if (this._newPodScaleUpDelay !== undefined) {
      hasAnyValues = true;
      internalValueResult.newPodScaleUpDelay = this._newPodScaleUpDelay;
    }
    if (this._scaleDownDelayAfterAdd !== undefined) {
      hasAnyValues = true;
      internalValueResult.scaleDownDelayAfterAdd = this._scaleDownDelayAfterAdd;
    }
    if (this._scaleDownDelayAfterDelete !== undefined) {
      hasAnyValues = true;
      internalValueResult.scaleDownDelayAfterDelete = this._scaleDownDelayAfterDelete;
    }
    if (this._scaleDownDelayAfterFailure !== undefined) {
      hasAnyValues = true;
      internalValueResult.scaleDownDelayAfterFailure = this._scaleDownDelayAfterFailure;
    }
    if (this._scaleDownUnneeded !== undefined) {
      hasAnyValues = true;
      internalValueResult.scaleDownUnneeded = this._scaleDownUnneeded;
    }
    if (this._scaleDownUnready !== undefined) {
      hasAnyValues = true;
      internalValueResult.scaleDownUnready = this._scaleDownUnready;
    }
    if (this._scaleDownUtilizationThreshold !== undefined) {
      hasAnyValues = true;
      internalValueResult.scaleDownUtilizationThreshold = this._scaleDownUtilizationThreshold;
    }
    if (this._scanInterval !== undefined) {
      hasAnyValues = true;
      internalValueResult.scanInterval = this._scanInterval;
    }
    if (this._skipNodesWithLocalStorage !== undefined) {
      hasAnyValues = true;
      internalValueResult.skipNodesWithLocalStorage = this._skipNodesWithLocalStorage;
    }
    if (this._skipNodesWithSystemPods !== undefined) {
      hasAnyValues = true;
      internalValueResult.skipNodesWithSystemPods = this._skipNodesWithSystemPods;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: KubernetesClusterAutoScalerProfile | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._balanceSimilarNodeGroups = undefined;
      this._emptyBulkDeleteMax = undefined;
      this._expander = undefined;
      this._maxGracefulTerminationSec = undefined;
      this._maxNodeProvisioningTime = undefined;
      this._maxUnreadyNodes = undefined;
      this._maxUnreadyPercentage = undefined;
      this._newPodScaleUpDelay = undefined;
      this._scaleDownDelayAfterAdd = undefined;
      this._scaleDownDelayAfterDelete = undefined;
      this._scaleDownDelayAfterFailure = undefined;
      this._scaleDownUnneeded = undefined;
      this._scaleDownUnready = undefined;
      this._scaleDownUtilizationThreshold = undefined;
      this._scanInterval = undefined;
      this._skipNodesWithLocalStorage = undefined;
      this._skipNodesWithSystemPods = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._balanceSimilarNodeGroups = value.balanceSimilarNodeGroups;
      this._emptyBulkDeleteMax = value.emptyBulkDeleteMax;
      this._expander = value.expander;
      this._maxGracefulTerminationSec = value.maxGracefulTerminationSec;
      this._maxNodeProvisioningTime = value.maxNodeProvisioningTime;
      this._maxUnreadyNodes = value.maxUnreadyNodes;
      this._maxUnreadyPercentage = value.maxUnreadyPercentage;
      this._newPodScaleUpDelay = value.newPodScaleUpDelay;
      this._scaleDownDelayAfterAdd = value.scaleDownDelayAfterAdd;
      this._scaleDownDelayAfterDelete = value.scaleDownDelayAfterDelete;
      this._scaleDownDelayAfterFailure = value.scaleDownDelayAfterFailure;
      this._scaleDownUnneeded = value.scaleDownUnneeded;
      this._scaleDownUnready = value.scaleDownUnready;
      this._scaleDownUtilizationThreshold = value.scaleDownUtilizationThreshold;
      this._scanInterval = value.scanInterval;
      this._skipNodesWithLocalStorage = value.skipNodesWithLocalStorage;
      this._skipNodesWithSystemPods = value.skipNodesWithSystemPods;
    }
  }

  // balance_similar_node_groups - computed: false, optional: true, required: false
  private _balanceSimilarNodeGroups?: boolean | cdktf.IResolvable; 
  public get balanceSimilarNodeGroups() {
    return this.getBooleanAttribute('balance_similar_node_groups');
  }
  public set balanceSimilarNodeGroups(value: boolean | cdktf.IResolvable) {
    this._balanceSimilarNodeGroups = value;
  }
  public resetBalanceSimilarNodeGroups() {
    this._balanceSimilarNodeGroups = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get balanceSimilarNodeGroupsInput() {
    return this._balanceSimilarNodeGroups;
  }

  // empty_bulk_delete_max - computed: true, optional: true, required: false
  private _emptyBulkDeleteMax?: string; 
  public get emptyBulkDeleteMax() {
    return this.getStringAttribute('empty_bulk_delete_max');
  }
  public set emptyBulkDeleteMax(value: string) {
    this._emptyBulkDeleteMax = value;
  }
  public resetEmptyBulkDeleteMax() {
    this._emptyBulkDeleteMax = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get emptyBulkDeleteMaxInput() {
    return this._emptyBulkDeleteMax;
  }

  // expander - computed: false, optional: true, required: false
  private _expander?: string; 
  public get expander() {
    return this.getStringAttribute('expander');
  }
  public set expander(value: string) {
    this._expander = value;
  }
  public resetExpander() {
    this._expander = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get expanderInput() {
    return this._expander;
  }

  // max_graceful_termination_sec - computed: true, optional: true, required: false
  private _maxGracefulTerminationSec?: string; 
  public get maxGracefulTerminationSec() {
    return this.getStringAttribute('max_graceful_termination_sec');
  }
  public set maxGracefulTerminationSec(value: string) {
    this._maxGracefulTerminationSec = value;
  }
  public resetMaxGracefulTerminationSec() {
    this._maxGracefulTerminationSec = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxGracefulTerminationSecInput() {
    return this._maxGracefulTerminationSec;
  }

  // max_node_provisioning_time - computed: false, optional: true, required: false
  private _maxNodeProvisioningTime?: string; 
  public get maxNodeProvisioningTime() {
    return this.getStringAttribute('max_node_provisioning_time');
  }
  public set maxNodeProvisioningTime(value: string) {
    this._maxNodeProvisioningTime = value;
  }
  public resetMaxNodeProvisioningTime() {
    this._maxNodeProvisioningTime = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxNodeProvisioningTimeInput() {
    return this._maxNodeProvisioningTime;
  }

  // max_unready_nodes - computed: false, optional: true, required: false
  private _maxUnreadyNodes?: number; 
  public get maxUnreadyNodes() {
    return this.getNumberAttribute('max_unready_nodes');
  }
  public set maxUnreadyNodes(value: number) {
    this._maxUnreadyNodes = value;
  }
  public resetMaxUnreadyNodes() {
    this._maxUnreadyNodes = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxUnreadyNodesInput() {
    return this._maxUnreadyNodes;
  }

  // max_unready_percentage - computed: false, optional: true, required: false
  private _maxUnreadyPercentage?: number; 
  public get maxUnreadyPercentage() {
    return this.getNumberAttribute('max_unready_percentage');
  }
  public set maxUnreadyPercentage(value: number) {
    this._maxUnreadyPercentage = value;
  }
  public resetMaxUnreadyPercentage() {
    this._maxUnreadyPercentage = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxUnreadyPercentageInput() {
    return this._maxUnreadyPercentage;
  }

  // new_pod_scale_up_delay - computed: true, optional: true, required: false
  private _newPodScaleUpDelay?: string; 
  public get newPodScaleUpDelay() {
    return this.getStringAttribute('new_pod_scale_up_delay');
  }
  public set newPodScaleUpDelay(value: string) {
    this._newPodScaleUpDelay = value;
  }
  public resetNewPodScaleUpDelay() {
    this._newPodScaleUpDelay = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get newPodScaleUpDelayInput() {
    return this._newPodScaleUpDelay;
  }

  // scale_down_delay_after_add - computed: true, optional: true, required: false
  private _scaleDownDelayAfterAdd?: string; 
  public get scaleDownDelayAfterAdd() {
    return this.getStringAttribute('scale_down_delay_after_add');
  }
  public set scaleDownDelayAfterAdd(value: string) {
    this._scaleDownDelayAfterAdd = value;
  }
  public resetScaleDownDelayAfterAdd() {
    this._scaleDownDelayAfterAdd = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get scaleDownDelayAfterAddInput() {
    return this._scaleDownDelayAfterAdd;
  }

  // scale_down_delay_after_delete - computed: true, optional: true, required: false
  private _scaleDownDelayAfterDelete?: string; 
  public get scaleDownDelayAfterDelete() {
    return this.getStringAttribute('scale_down_delay_after_delete');
  }
  public set scaleDownDelayAfterDelete(value: string) {
    this._scaleDownDelayAfterDelete = value;
  }
  public resetScaleDownDelayAfterDelete() {
    this._scaleDownDelayAfterDelete = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get scaleDownDelayAfterDeleteInput() {
    return this._scaleDownDelayAfterDelete;
  }

  // scale_down_delay_after_failure - computed: true, optional: true, required: false
  private _scaleDownDelayAfterFailure?: string; 
  public get scaleDownDelayAfterFailure() {
    return this.getStringAttribute('scale_down_delay_after_failure');
  }
  public set scaleDownDelayAfterFailure(value: string) {
    this._scaleDownDelayAfterFailure = value;
  }
  public resetScaleDownDelayAfterFailure() {
    this._scaleDownDelayAfterFailure = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get scaleDownDelayAfterFailureInput() {
    return this._scaleDownDelayAfterFailure;
  }

  // scale_down_unneeded - computed: true, optional: true, required: false
  private _scaleDownUnneeded?: string; 
  public get scaleDownUnneeded() {
    return this.getStringAttribute('scale_down_unneeded');
  }
  public set scaleDownUnneeded(value: string) {
    this._scaleDownUnneeded = value;
  }
  public resetScaleDownUnneeded() {
    this._scaleDownUnneeded = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get scaleDownUnneededInput() {
    return this._scaleDownUnneeded;
  }

  // scale_down_unready - computed: true, optional: true, required: false
  private _scaleDownUnready?: string; 
  public get scaleDownUnready() {
    return this.getStringAttribute('scale_down_unready');
  }
  public set scaleDownUnready(value: string) {
    this._scaleDownUnready = value;
  }
  public resetScaleDownUnready() {
    this._scaleDownUnready = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get scaleDownUnreadyInput() {
    return this._scaleDownUnready;
  }

  // scale_down_utilization_threshold - computed: true, optional: true, required: false
  private _scaleDownUtilizationThreshold?: string; 
  public get scaleDownUtilizationThreshold() {
    return this.getStringAttribute('scale_down_utilization_threshold');
  }
  public set scaleDownUtilizationThreshold(value: string) {
    this._scaleDownUtilizationThreshold = value;
  }
  public resetScaleDownUtilizationThreshold() {
    this._scaleDownUtilizationThreshold = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get scaleDownUtilizationThresholdInput() {
    return this._scaleDownUtilizationThreshold;
  }

  // scan_interval - computed: true, optional: true, required: false
  private _scanInterval?: string; 
  public get scanInterval() {
    return this.getStringAttribute('scan_interval');
  }
  public set scanInterval(value: string) {
    this._scanInterval = value;
  }
  public resetScanInterval() {
    this._scanInterval = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get scanIntervalInput() {
    return this._scanInterval;
  }

  // skip_nodes_with_local_storage - computed: false, optional: true, required: false
  private _skipNodesWithLocalStorage?: boolean | cdktf.IResolvable; 
  public get skipNodesWithLocalStorage() {
    return this.getBooleanAttribute('skip_nodes_with_local_storage');
  }
  public set skipNodesWithLocalStorage(value: boolean | cdktf.IResolvable) {
    this._skipNodesWithLocalStorage = value;
  }
  public resetSkipNodesWithLocalStorage() {
    this._skipNodesWithLocalStorage = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get skipNodesWithLocalStorageInput() {
    return this._skipNodesWithLocalStorage;
  }

  // skip_nodes_with_system_pods - computed: false, optional: true, required: false
  private _skipNodesWithSystemPods?: boolean | cdktf.IResolvable; 
  public get skipNodesWithSystemPods() {
    return this.getBooleanAttribute('skip_nodes_with_system_pods');
  }
  public set skipNodesWithSystemPods(value: boolean | cdktf.IResolvable) {
    this._skipNodesWithSystemPods = value;
  }
  public resetSkipNodesWithSystemPods() {
    this._skipNodesWithSystemPods = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get skipNodesWithSystemPodsInput() {
    return this._skipNodesWithSystemPods;
  }
}
export interface KubernetesClusterAzureActiveDirectoryRoleBasedAccessControl {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/kubernetes_cluster#admin_group_object_ids KubernetesCluster#admin_group_object_ids}
  */
  readonly adminGroupObjectIds?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/kubernetes_cluster#azure_rbac_enabled KubernetesCluster#azure_rbac_enabled}
  */
  readonly azureRbacEnabled?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/kubernetes_cluster#tenant_id KubernetesCluster#tenant_id}
  */
  readonly tenantId?: string;
}

export function kubernetesClusterAzureActiveDirectoryRoleBasedAccessControlToTerraform(struct?: KubernetesClusterAzureActiveDirectoryRoleBasedAccessControlOutputReference | KubernetesClusterAzureActiveDirectoryRoleBasedAccessControl): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    admin_group_object_ids: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.adminGroupObjectIds),
    azure_rbac_enabled: cdktf.booleanToTerraform(struct!.azureRbacEnabled),
    tenant_id: cdktf.stringToTerraform(struct!.tenantId),
  }
}


export function kubernetesClusterAzureActiveDirectoryRoleBasedAccessControlToHclTerraform(struct?: KubernetesClusterAzureActiveDirectoryRoleBasedAccessControlOutputReference | KubernetesClusterAzureActiveDirectoryRoleBasedAccessControl): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    admin_group_object_ids: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.adminGroupObjectIds),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    azure_rbac_enabled: {
      value: cdktf.booleanToHclTerraform(struct!.azureRbacEnabled),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    tenant_id: {
      value: cdktf.stringToHclTerraform(struct!.tenantId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class KubernetesClusterAzureActiveDirectoryRoleBasedAccessControlOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): KubernetesClusterAzureActiveDirectoryRoleBasedAccessControl | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._adminGroupObjectIds !== undefined) {
      hasAnyValues = true;
      internalValueResult.adminGroupObjectIds = this._adminGroupObjectIds;
    }
    if (this._azureRbacEnabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.azureRbacEnabled = this._azureRbacEnabled;
    }
    if (this._tenantId !== undefined) {
      hasAnyValues = true;
      internalValueResult.tenantId = this._tenantId;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: KubernetesClusterAzureActiveDirectoryRoleBasedAccessControl | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._adminGroupObjectIds = undefined;
      this._azureRbacEnabled = undefined;
      this._tenantId = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._adminGroupObjectIds = value.adminGroupObjectIds;
      this._azureRbacEnabled = value.azureRbacEnabled;
      this._tenantId = value.tenantId;
    }
  }

  // admin_group_object_ids - computed: false, optional: true, required: false
  private _adminGroupObjectIds?: string[]; 
  public get adminGroupObjectIds() {
    return this.getListAttribute('admin_group_object_ids');
  }
  public set adminGroupObjectIds(value: string[]) {
    this._adminGroupObjectIds = value;
  }
  public resetAdminGroupObjectIds() {
    this._adminGroupObjectIds = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get adminGroupObjectIdsInput() {
    return this._adminGroupObjectIds;
  }

  // azure_rbac_enabled - computed: false, optional: true, required: false
  private _azureRbacEnabled?: boolean | cdktf.IResolvable; 
  public get azureRbacEnabled() {
    return this.getBooleanAttribute('azure_rbac_enabled');
  }
  public set azureRbacEnabled(value: boolean | cdktf.IResolvable) {
    this._azureRbacEnabled = value;
  }
  public resetAzureRbacEnabled() {
    this._azureRbacEnabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get azureRbacEnabledInput() {
    return this._azureRbacEnabled;
  }

  // tenant_id - computed: true, optional: true, required: false
  private _tenantId?: string; 
  public get tenantId() {
    return this.getStringAttribute('tenant_id');
  }
  public set tenantId(value: string) {
    this._tenantId = value;
  }
  public resetTenantId() {
    this._tenantId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tenantIdInput() {
    return this._tenantId;
  }
}
export interface KubernetesClusterConfidentialComputing {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/kubernetes_cluster#sgx_quote_helper_enabled KubernetesCluster#sgx_quote_helper_enabled}
  */
  readonly sgxQuoteHelperEnabled: boolean | cdktf.IResolvable;
}

export function kubernetesClusterConfidentialComputingToTerraform(struct?: KubernetesClusterConfidentialComputingOutputReference | KubernetesClusterConfidentialComputing): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    sgx_quote_helper_enabled: cdktf.booleanToTerraform(struct!.sgxQuoteHelperEnabled),
  }
}


export function kubernetesClusterConfidentialComputingToHclTerraform(struct?: KubernetesClusterConfidentialComputingOutputReference | KubernetesClusterConfidentialComputing): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    sgx_quote_helper_enabled: {
      value: cdktf.booleanToHclTerraform(struct!.sgxQuoteHelperEnabled),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class KubernetesClusterConfidentialComputingOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): KubernetesClusterConfidentialComputing | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._sgxQuoteHelperEnabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.sgxQuoteHelperEnabled = this._sgxQuoteHelperEnabled;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: KubernetesClusterConfidentialComputing | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._sgxQuoteHelperEnabled = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._sgxQuoteHelperEnabled = value.sgxQuoteHelperEnabled;
    }
  }

  // sgx_quote_helper_enabled - computed: false, optional: false, required: true
  private _sgxQuoteHelperEnabled?: boolean | cdktf.IResolvable; 
  public get sgxQuoteHelperEnabled() {
    return this.getBooleanAttribute('sgx_quote_helper_enabled');
  }
  public set sgxQuoteHelperEnabled(value: boolean | cdktf.IResolvable) {
    this._sgxQuoteHelperEnabled = value;
  }
  // Temporarily expose input value. Use with caution.
  public get sgxQuoteHelperEnabledInput() {
    return this._sgxQuoteHelperEnabled;
  }
}
export interface KubernetesClusterDefaultNodePoolKubeletConfig {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/kubernetes_cluster#allowed_unsafe_sysctls KubernetesCluster#allowed_unsafe_sysctls}
  */
  readonly allowedUnsafeSysctls?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/kubernetes_cluster#container_log_max_line KubernetesCluster#container_log_max_line}
  */
  readonly containerLogMaxLine?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/kubernetes_cluster#container_log_max_size_mb KubernetesCluster#container_log_max_size_mb}
  */
  readonly containerLogMaxSizeMb?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/kubernetes_cluster#cpu_cfs_quota_enabled KubernetesCluster#cpu_cfs_quota_enabled}
  */
  readonly cpuCfsQuotaEnabled?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/kubernetes_cluster#cpu_cfs_quota_period KubernetesCluster#cpu_cfs_quota_period}
  */
  readonly cpuCfsQuotaPeriod?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/kubernetes_cluster#cpu_manager_policy KubernetesCluster#cpu_manager_policy}
  */
  readonly cpuManagerPolicy?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/kubernetes_cluster#image_gc_high_threshold KubernetesCluster#image_gc_high_threshold}
  */
  readonly imageGcHighThreshold?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/kubernetes_cluster#image_gc_low_threshold KubernetesCluster#image_gc_low_threshold}
  */
  readonly imageGcLowThreshold?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/kubernetes_cluster#pod_max_pid KubernetesCluster#pod_max_pid}
  */
  readonly podMaxPid?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/kubernetes_cluster#topology_manager_policy KubernetesCluster#topology_manager_policy}
  */
  readonly topologyManagerPolicy?: string;
}

export function kubernetesClusterDefaultNodePoolKubeletConfigToTerraform(struct?: KubernetesClusterDefaultNodePoolKubeletConfigOutputReference | KubernetesClusterDefaultNodePoolKubeletConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    allowed_unsafe_sysctls: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.allowedUnsafeSysctls),
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


export function kubernetesClusterDefaultNodePoolKubeletConfigToHclTerraform(struct?: KubernetesClusterDefaultNodePoolKubeletConfigOutputReference | KubernetesClusterDefaultNodePoolKubeletConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    allowed_unsafe_sysctls: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.allowedUnsafeSysctls),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
    container_log_max_line: {
      value: cdktf.numberToHclTerraform(struct!.containerLogMaxLine),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    container_log_max_size_mb: {
      value: cdktf.numberToHclTerraform(struct!.containerLogMaxSizeMb),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    cpu_cfs_quota_enabled: {
      value: cdktf.booleanToHclTerraform(struct!.cpuCfsQuotaEnabled),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    cpu_cfs_quota_period: {
      value: cdktf.stringToHclTerraform(struct!.cpuCfsQuotaPeriod),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    cpu_manager_policy: {
      value: cdktf.stringToHclTerraform(struct!.cpuManagerPolicy),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    image_gc_high_threshold: {
      value: cdktf.numberToHclTerraform(struct!.imageGcHighThreshold),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    image_gc_low_threshold: {
      value: cdktf.numberToHclTerraform(struct!.imageGcLowThreshold),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    pod_max_pid: {
      value: cdktf.numberToHclTerraform(struct!.podMaxPid),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    topology_manager_policy: {
      value: cdktf.stringToHclTerraform(struct!.topologyManagerPolicy),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class KubernetesClusterDefaultNodePoolKubeletConfigOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): KubernetesClusterDefaultNodePoolKubeletConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._allowedUnsafeSysctls !== undefined) {
      hasAnyValues = true;
      internalValueResult.allowedUnsafeSysctls = this._allowedUnsafeSysctls;
    }
    if (this._containerLogMaxLine !== undefined) {
      hasAnyValues = true;
      internalValueResult.containerLogMaxLine = this._containerLogMaxLine;
    }
    if (this._containerLogMaxSizeMb !== undefined) {
      hasAnyValues = true;
      internalValueResult.containerLogMaxSizeMb = this._containerLogMaxSizeMb;
    }
    if (this._cpuCfsQuotaEnabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.cpuCfsQuotaEnabled = this._cpuCfsQuotaEnabled;
    }
    if (this._cpuCfsQuotaPeriod !== undefined) {
      hasAnyValues = true;
      internalValueResult.cpuCfsQuotaPeriod = this._cpuCfsQuotaPeriod;
    }
    if (this._cpuManagerPolicy !== undefined) {
      hasAnyValues = true;
      internalValueResult.cpuManagerPolicy = this._cpuManagerPolicy;
    }
    if (this._imageGcHighThreshold !== undefined) {
      hasAnyValues = true;
      internalValueResult.imageGcHighThreshold = this._imageGcHighThreshold;
    }
    if (this._imageGcLowThreshold !== undefined) {
      hasAnyValues = true;
      internalValueResult.imageGcLowThreshold = this._imageGcLowThreshold;
    }
    if (this._podMaxPid !== undefined) {
      hasAnyValues = true;
      internalValueResult.podMaxPid = this._podMaxPid;
    }
    if (this._topologyManagerPolicy !== undefined) {
      hasAnyValues = true;
      internalValueResult.topologyManagerPolicy = this._topologyManagerPolicy;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: KubernetesClusterDefaultNodePoolKubeletConfig | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._allowedUnsafeSysctls = undefined;
      this._containerLogMaxLine = undefined;
      this._containerLogMaxSizeMb = undefined;
      this._cpuCfsQuotaEnabled = undefined;
      this._cpuCfsQuotaPeriod = undefined;
      this._cpuManagerPolicy = undefined;
      this._imageGcHighThreshold = undefined;
      this._imageGcLowThreshold = undefined;
      this._podMaxPid = undefined;
      this._topologyManagerPolicy = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._allowedUnsafeSysctls = value.allowedUnsafeSysctls;
      this._containerLogMaxLine = value.containerLogMaxLine;
      this._containerLogMaxSizeMb = value.containerLogMaxSizeMb;
      this._cpuCfsQuotaEnabled = value.cpuCfsQuotaEnabled;
      this._cpuCfsQuotaPeriod = value.cpuCfsQuotaPeriod;
      this._cpuManagerPolicy = value.cpuManagerPolicy;
      this._imageGcHighThreshold = value.imageGcHighThreshold;
      this._imageGcLowThreshold = value.imageGcLowThreshold;
      this._podMaxPid = value.podMaxPid;
      this._topologyManagerPolicy = value.topologyManagerPolicy;
    }
  }

  // allowed_unsafe_sysctls - computed: false, optional: true, required: false
  private _allowedUnsafeSysctls?: string[]; 
  public get allowedUnsafeSysctls() {
    return cdktf.Fn.tolist(this.getListAttribute('allowed_unsafe_sysctls'));
  }
  public set allowedUnsafeSysctls(value: string[]) {
    this._allowedUnsafeSysctls = value;
  }
  public resetAllowedUnsafeSysctls() {
    this._allowedUnsafeSysctls = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get allowedUnsafeSysctlsInput() {
    return this._allowedUnsafeSysctls;
  }

  // container_log_max_line - computed: false, optional: true, required: false
  private _containerLogMaxLine?: number; 
  public get containerLogMaxLine() {
    return this.getNumberAttribute('container_log_max_line');
  }
  public set containerLogMaxLine(value: number) {
    this._containerLogMaxLine = value;
  }
  public resetContainerLogMaxLine() {
    this._containerLogMaxLine = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get containerLogMaxLineInput() {
    return this._containerLogMaxLine;
  }

  // container_log_max_size_mb - computed: false, optional: true, required: false
  private _containerLogMaxSizeMb?: number; 
  public get containerLogMaxSizeMb() {
    return this.getNumberAttribute('container_log_max_size_mb');
  }
  public set containerLogMaxSizeMb(value: number) {
    this._containerLogMaxSizeMb = value;
  }
  public resetContainerLogMaxSizeMb() {
    this._containerLogMaxSizeMb = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get containerLogMaxSizeMbInput() {
    return this._containerLogMaxSizeMb;
  }

  // cpu_cfs_quota_enabled - computed: false, optional: true, required: false
  private _cpuCfsQuotaEnabled?: boolean | cdktf.IResolvable; 
  public get cpuCfsQuotaEnabled() {
    return this.getBooleanAttribute('cpu_cfs_quota_enabled');
  }
  public set cpuCfsQuotaEnabled(value: boolean | cdktf.IResolvable) {
    this._cpuCfsQuotaEnabled = value;
  }
  public resetCpuCfsQuotaEnabled() {
    this._cpuCfsQuotaEnabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cpuCfsQuotaEnabledInput() {
    return this._cpuCfsQuotaEnabled;
  }

  // cpu_cfs_quota_period - computed: false, optional: true, required: false
  private _cpuCfsQuotaPeriod?: string; 
  public get cpuCfsQuotaPeriod() {
    return this.getStringAttribute('cpu_cfs_quota_period');
  }
  public set cpuCfsQuotaPeriod(value: string) {
    this._cpuCfsQuotaPeriod = value;
  }
  public resetCpuCfsQuotaPeriod() {
    this._cpuCfsQuotaPeriod = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cpuCfsQuotaPeriodInput() {
    return this._cpuCfsQuotaPeriod;
  }

  // cpu_manager_policy - computed: false, optional: true, required: false
  private _cpuManagerPolicy?: string; 
  public get cpuManagerPolicy() {
    return this.getStringAttribute('cpu_manager_policy');
  }
  public set cpuManagerPolicy(value: string) {
    this._cpuManagerPolicy = value;
  }
  public resetCpuManagerPolicy() {
    this._cpuManagerPolicy = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cpuManagerPolicyInput() {
    return this._cpuManagerPolicy;
  }

  // image_gc_high_threshold - computed: false, optional: true, required: false
  private _imageGcHighThreshold?: number; 
  public get imageGcHighThreshold() {
    return this.getNumberAttribute('image_gc_high_threshold');
  }
  public set imageGcHighThreshold(value: number) {
    this._imageGcHighThreshold = value;
  }
  public resetImageGcHighThreshold() {
    this._imageGcHighThreshold = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get imageGcHighThresholdInput() {
    return this._imageGcHighThreshold;
  }

  // image_gc_low_threshold - computed: false, optional: true, required: false
  private _imageGcLowThreshold?: number; 
  public get imageGcLowThreshold() {
    return this.getNumberAttribute('image_gc_low_threshold');
  }
  public set imageGcLowThreshold(value: number) {
    this._imageGcLowThreshold = value;
  }
  public resetImageGcLowThreshold() {
    this._imageGcLowThreshold = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get imageGcLowThresholdInput() {
    return this._imageGcLowThreshold;
  }

  // pod_max_pid - computed: false, optional: true, required: false
  private _podMaxPid?: number; 
  public get podMaxPid() {
    return this.getNumberAttribute('pod_max_pid');
  }
  public set podMaxPid(value: number) {
    this._podMaxPid = value;
  }
  public resetPodMaxPid() {
    this._podMaxPid = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get podMaxPidInput() {
    return this._podMaxPid;
  }

  // topology_manager_policy - computed: false, optional: true, required: false
  private _topologyManagerPolicy?: string; 
  public get topologyManagerPolicy() {
    return this.getStringAttribute('topology_manager_policy');
  }
  public set topologyManagerPolicy(value: string) {
    this._topologyManagerPolicy = value;
  }
  public resetTopologyManagerPolicy() {
    this._topologyManagerPolicy = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get topologyManagerPolicyInput() {
    return this._topologyManagerPolicy;
  }
}
export interface KubernetesClusterDefaultNodePoolLinuxOsConfigSysctlConfig {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/kubernetes_cluster#fs_aio_max_nr KubernetesCluster#fs_aio_max_nr}
  */
  readonly fsAioMaxNr?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/kubernetes_cluster#fs_file_max KubernetesCluster#fs_file_max}
  */
  readonly fsFileMax?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/kubernetes_cluster#fs_inotify_max_user_watches KubernetesCluster#fs_inotify_max_user_watches}
  */
  readonly fsInotifyMaxUserWatches?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/kubernetes_cluster#fs_nr_open KubernetesCluster#fs_nr_open}
  */
  readonly fsNrOpen?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/kubernetes_cluster#kernel_threads_max KubernetesCluster#kernel_threads_max}
  */
  readonly kernelThreadsMax?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/kubernetes_cluster#net_core_netdev_max_backlog KubernetesCluster#net_core_netdev_max_backlog}
  */
  readonly netCoreNetdevMaxBacklog?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/kubernetes_cluster#net_core_optmem_max KubernetesCluster#net_core_optmem_max}
  */
  readonly netCoreOptmemMax?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/kubernetes_cluster#net_core_rmem_default KubernetesCluster#net_core_rmem_default}
  */
  readonly netCoreRmemDefault?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/kubernetes_cluster#net_core_rmem_max KubernetesCluster#net_core_rmem_max}
  */
  readonly netCoreRmemMax?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/kubernetes_cluster#net_core_somaxconn KubernetesCluster#net_core_somaxconn}
  */
  readonly netCoreSomaxconn?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/kubernetes_cluster#net_core_wmem_default KubernetesCluster#net_core_wmem_default}
  */
  readonly netCoreWmemDefault?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/kubernetes_cluster#net_core_wmem_max KubernetesCluster#net_core_wmem_max}
  */
  readonly netCoreWmemMax?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/kubernetes_cluster#net_ipv4_ip_local_port_range_max KubernetesCluster#net_ipv4_ip_local_port_range_max}
  */
  readonly netIpv4IpLocalPortRangeMax?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/kubernetes_cluster#net_ipv4_ip_local_port_range_min KubernetesCluster#net_ipv4_ip_local_port_range_min}
  */
  readonly netIpv4IpLocalPortRangeMin?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/kubernetes_cluster#net_ipv4_neigh_default_gc_thresh1 KubernetesCluster#net_ipv4_neigh_default_gc_thresh1}
  */
  readonly netIpv4NeighDefaultGcThresh1?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/kubernetes_cluster#net_ipv4_neigh_default_gc_thresh2 KubernetesCluster#net_ipv4_neigh_default_gc_thresh2}
  */
  readonly netIpv4NeighDefaultGcThresh2?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/kubernetes_cluster#net_ipv4_neigh_default_gc_thresh3 KubernetesCluster#net_ipv4_neigh_default_gc_thresh3}
  */
  readonly netIpv4NeighDefaultGcThresh3?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/kubernetes_cluster#net_ipv4_tcp_fin_timeout KubernetesCluster#net_ipv4_tcp_fin_timeout}
  */
  readonly netIpv4TcpFinTimeout?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/kubernetes_cluster#net_ipv4_tcp_keepalive_intvl KubernetesCluster#net_ipv4_tcp_keepalive_intvl}
  */
  readonly netIpv4TcpKeepaliveIntvl?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/kubernetes_cluster#net_ipv4_tcp_keepalive_probes KubernetesCluster#net_ipv4_tcp_keepalive_probes}
  */
  readonly netIpv4TcpKeepaliveProbes?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/kubernetes_cluster#net_ipv4_tcp_keepalive_time KubernetesCluster#net_ipv4_tcp_keepalive_time}
  */
  readonly netIpv4TcpKeepaliveTime?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/kubernetes_cluster#net_ipv4_tcp_max_syn_backlog KubernetesCluster#net_ipv4_tcp_max_syn_backlog}
  */
  readonly netIpv4TcpMaxSynBacklog?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/kubernetes_cluster#net_ipv4_tcp_max_tw_buckets KubernetesCluster#net_ipv4_tcp_max_tw_buckets}
  */
  readonly netIpv4TcpMaxTwBuckets?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/kubernetes_cluster#net_ipv4_tcp_tw_reuse KubernetesCluster#net_ipv4_tcp_tw_reuse}
  */
  readonly netIpv4TcpTwReuse?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/kubernetes_cluster#net_netfilter_nf_conntrack_buckets KubernetesCluster#net_netfilter_nf_conntrack_buckets}
  */
  readonly netNetfilterNfConntrackBuckets?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/kubernetes_cluster#net_netfilter_nf_conntrack_max KubernetesCluster#net_netfilter_nf_conntrack_max}
  */
  readonly netNetfilterNfConntrackMax?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/kubernetes_cluster#vm_max_map_count KubernetesCluster#vm_max_map_count}
  */
  readonly vmMaxMapCount?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/kubernetes_cluster#vm_swappiness KubernetesCluster#vm_swappiness}
  */
  readonly vmSwappiness?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/kubernetes_cluster#vm_vfs_cache_pressure KubernetesCluster#vm_vfs_cache_pressure}
  */
  readonly vmVfsCachePressure?: number;
}

export function kubernetesClusterDefaultNodePoolLinuxOsConfigSysctlConfigToTerraform(struct?: KubernetesClusterDefaultNodePoolLinuxOsConfigSysctlConfigOutputReference | KubernetesClusterDefaultNodePoolLinuxOsConfigSysctlConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
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


export function kubernetesClusterDefaultNodePoolLinuxOsConfigSysctlConfigToHclTerraform(struct?: KubernetesClusterDefaultNodePoolLinuxOsConfigSysctlConfigOutputReference | KubernetesClusterDefaultNodePoolLinuxOsConfigSysctlConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    fs_aio_max_nr: {
      value: cdktf.numberToHclTerraform(struct!.fsAioMaxNr),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    fs_file_max: {
      value: cdktf.numberToHclTerraform(struct!.fsFileMax),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    fs_inotify_max_user_watches: {
      value: cdktf.numberToHclTerraform(struct!.fsInotifyMaxUserWatches),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    fs_nr_open: {
      value: cdktf.numberToHclTerraform(struct!.fsNrOpen),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    kernel_threads_max: {
      value: cdktf.numberToHclTerraform(struct!.kernelThreadsMax),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    net_core_netdev_max_backlog: {
      value: cdktf.numberToHclTerraform(struct!.netCoreNetdevMaxBacklog),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    net_core_optmem_max: {
      value: cdktf.numberToHclTerraform(struct!.netCoreOptmemMax),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    net_core_rmem_default: {
      value: cdktf.numberToHclTerraform(struct!.netCoreRmemDefault),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    net_core_rmem_max: {
      value: cdktf.numberToHclTerraform(struct!.netCoreRmemMax),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    net_core_somaxconn: {
      value: cdktf.numberToHclTerraform(struct!.netCoreSomaxconn),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    net_core_wmem_default: {
      value: cdktf.numberToHclTerraform(struct!.netCoreWmemDefault),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    net_core_wmem_max: {
      value: cdktf.numberToHclTerraform(struct!.netCoreWmemMax),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    net_ipv4_ip_local_port_range_max: {
      value: cdktf.numberToHclTerraform(struct!.netIpv4IpLocalPortRangeMax),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    net_ipv4_ip_local_port_range_min: {
      value: cdktf.numberToHclTerraform(struct!.netIpv4IpLocalPortRangeMin),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    net_ipv4_neigh_default_gc_thresh1: {
      value: cdktf.numberToHclTerraform(struct!.netIpv4NeighDefaultGcThresh1),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    net_ipv4_neigh_default_gc_thresh2: {
      value: cdktf.numberToHclTerraform(struct!.netIpv4NeighDefaultGcThresh2),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    net_ipv4_neigh_default_gc_thresh3: {
      value: cdktf.numberToHclTerraform(struct!.netIpv4NeighDefaultGcThresh3),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    net_ipv4_tcp_fin_timeout: {
      value: cdktf.numberToHclTerraform(struct!.netIpv4TcpFinTimeout),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    net_ipv4_tcp_keepalive_intvl: {
      value: cdktf.numberToHclTerraform(struct!.netIpv4TcpKeepaliveIntvl),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    net_ipv4_tcp_keepalive_probes: {
      value: cdktf.numberToHclTerraform(struct!.netIpv4TcpKeepaliveProbes),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    net_ipv4_tcp_keepalive_time: {
      value: cdktf.numberToHclTerraform(struct!.netIpv4TcpKeepaliveTime),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    net_ipv4_tcp_max_syn_backlog: {
      value: cdktf.numberToHclTerraform(struct!.netIpv4TcpMaxSynBacklog),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    net_ipv4_tcp_max_tw_buckets: {
      value: cdktf.numberToHclTerraform(struct!.netIpv4TcpMaxTwBuckets),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    net_ipv4_tcp_tw_reuse: {
      value: cdktf.booleanToHclTerraform(struct!.netIpv4TcpTwReuse),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    net_netfilter_nf_conntrack_buckets: {
      value: cdktf.numberToHclTerraform(struct!.netNetfilterNfConntrackBuckets),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    net_netfilter_nf_conntrack_max: {
      value: cdktf.numberToHclTerraform(struct!.netNetfilterNfConntrackMax),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    vm_max_map_count: {
      value: cdktf.numberToHclTerraform(struct!.vmMaxMapCount),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    vm_swappiness: {
      value: cdktf.numberToHclTerraform(struct!.vmSwappiness),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    vm_vfs_cache_pressure: {
      value: cdktf.numberToHclTerraform(struct!.vmVfsCachePressure),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class KubernetesClusterDefaultNodePoolLinuxOsConfigSysctlConfigOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): KubernetesClusterDefaultNodePoolLinuxOsConfigSysctlConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._fsAioMaxNr !== undefined) {
      hasAnyValues = true;
      internalValueResult.fsAioMaxNr = this._fsAioMaxNr;
    }
    if (this._fsFileMax !== undefined) {
      hasAnyValues = true;
      internalValueResult.fsFileMax = this._fsFileMax;
    }
    if (this._fsInotifyMaxUserWatches !== undefined) {
      hasAnyValues = true;
      internalValueResult.fsInotifyMaxUserWatches = this._fsInotifyMaxUserWatches;
    }
    if (this._fsNrOpen !== undefined) {
      hasAnyValues = true;
      internalValueResult.fsNrOpen = this._fsNrOpen;
    }
    if (this._kernelThreadsMax !== undefined) {
      hasAnyValues = true;
      internalValueResult.kernelThreadsMax = this._kernelThreadsMax;
    }
    if (this._netCoreNetdevMaxBacklog !== undefined) {
      hasAnyValues = true;
      internalValueResult.netCoreNetdevMaxBacklog = this._netCoreNetdevMaxBacklog;
    }
    if (this._netCoreOptmemMax !== undefined) {
      hasAnyValues = true;
      internalValueResult.netCoreOptmemMax = this._netCoreOptmemMax;
    }
    if (this._netCoreRmemDefault !== undefined) {
      hasAnyValues = true;
      internalValueResult.netCoreRmemDefault = this._netCoreRmemDefault;
    }
    if (this._netCoreRmemMax !== undefined) {
      hasAnyValues = true;
      internalValueResult.netCoreRmemMax = this._netCoreRmemMax;
    }
    if (this._netCoreSomaxconn !== undefined) {
      hasAnyValues = true;
      internalValueResult.netCoreSomaxconn = this._netCoreSomaxconn;
    }
    if (this._netCoreWmemDefault !== undefined) {
      hasAnyValues = true;
      internalValueResult.netCoreWmemDefault = this._netCoreWmemDefault;
    }
    if (this._netCoreWmemMax !== undefined) {
      hasAnyValues = true;
      internalValueResult.netCoreWmemMax = this._netCoreWmemMax;
    }
    if (this._netIpv4IpLocalPortRangeMax !== undefined) {
      hasAnyValues = true;
      internalValueResult.netIpv4IpLocalPortRangeMax = this._netIpv4IpLocalPortRangeMax;
    }
    if (this._netIpv4IpLocalPortRangeMin !== undefined) {
      hasAnyValues = true;
      internalValueResult.netIpv4IpLocalPortRangeMin = this._netIpv4IpLocalPortRangeMin;
    }
    if (this._netIpv4NeighDefaultGcThresh1 !== undefined) {
      hasAnyValues = true;
      internalValueResult.netIpv4NeighDefaultGcThresh1 = this._netIpv4NeighDefaultGcThresh1;
    }
    if (this._netIpv4NeighDefaultGcThresh2 !== undefined) {
      hasAnyValues = true;
      internalValueResult.netIpv4NeighDefaultGcThresh2 = this._netIpv4NeighDefaultGcThresh2;
    }
    if (this._netIpv4NeighDefaultGcThresh3 !== undefined) {
      hasAnyValues = true;
      internalValueResult.netIpv4NeighDefaultGcThresh3 = this._netIpv4NeighDefaultGcThresh3;
    }
    if (this._netIpv4TcpFinTimeout !== undefined) {
      hasAnyValues = true;
      internalValueResult.netIpv4TcpFinTimeout = this._netIpv4TcpFinTimeout;
    }
    if (this._netIpv4TcpKeepaliveIntvl !== undefined) {
      hasAnyValues = true;
      internalValueResult.netIpv4TcpKeepaliveIntvl = this._netIpv4TcpKeepaliveIntvl;
    }
    if (this._netIpv4TcpKeepaliveProbes !== undefined) {
      hasAnyValues = true;
      internalValueResult.netIpv4TcpKeepaliveProbes = this._netIpv4TcpKeepaliveProbes;
    }
    if (this._netIpv4TcpKeepaliveTime !== undefined) {
      hasAnyValues = true;
      internalValueResult.netIpv4TcpKeepaliveTime = this._netIpv4TcpKeepaliveTime;
    }
    if (this._netIpv4TcpMaxSynBacklog !== undefined) {
      hasAnyValues = true;
      internalValueResult.netIpv4TcpMaxSynBacklog = this._netIpv4TcpMaxSynBacklog;
    }
    if (this._netIpv4TcpMaxTwBuckets !== undefined) {
      hasAnyValues = true;
      internalValueResult.netIpv4TcpMaxTwBuckets = this._netIpv4TcpMaxTwBuckets;
    }
    if (this._netIpv4TcpTwReuse !== undefined) {
      hasAnyValues = true;
      internalValueResult.netIpv4TcpTwReuse = this._netIpv4TcpTwReuse;
    }
    if (this._netNetfilterNfConntrackBuckets !== undefined) {
      hasAnyValues = true;
      internalValueResult.netNetfilterNfConntrackBuckets = this._netNetfilterNfConntrackBuckets;
    }
    if (this._netNetfilterNfConntrackMax !== undefined) {
      hasAnyValues = true;
      internalValueResult.netNetfilterNfConntrackMax = this._netNetfilterNfConntrackMax;
    }
    if (this._vmMaxMapCount !== undefined) {
      hasAnyValues = true;
      internalValueResult.vmMaxMapCount = this._vmMaxMapCount;
    }
    if (this._vmSwappiness !== undefined) {
      hasAnyValues = true;
      internalValueResult.vmSwappiness = this._vmSwappiness;
    }
    if (this._vmVfsCachePressure !== undefined) {
      hasAnyValues = true;
      internalValueResult.vmVfsCachePressure = this._vmVfsCachePressure;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: KubernetesClusterDefaultNodePoolLinuxOsConfigSysctlConfig | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._fsAioMaxNr = undefined;
      this._fsFileMax = undefined;
      this._fsInotifyMaxUserWatches = undefined;
      this._fsNrOpen = undefined;
      this._kernelThreadsMax = undefined;
      this._netCoreNetdevMaxBacklog = undefined;
      this._netCoreOptmemMax = undefined;
      this._netCoreRmemDefault = undefined;
      this._netCoreRmemMax = undefined;
      this._netCoreSomaxconn = undefined;
      this._netCoreWmemDefault = undefined;
      this._netCoreWmemMax = undefined;
      this._netIpv4IpLocalPortRangeMax = undefined;
      this._netIpv4IpLocalPortRangeMin = undefined;
      this._netIpv4NeighDefaultGcThresh1 = undefined;
      this._netIpv4NeighDefaultGcThresh2 = undefined;
      this._netIpv4NeighDefaultGcThresh3 = undefined;
      this._netIpv4TcpFinTimeout = undefined;
      this._netIpv4TcpKeepaliveIntvl = undefined;
      this._netIpv4TcpKeepaliveProbes = undefined;
      this._netIpv4TcpKeepaliveTime = undefined;
      this._netIpv4TcpMaxSynBacklog = undefined;
      this._netIpv4TcpMaxTwBuckets = undefined;
      this._netIpv4TcpTwReuse = undefined;
      this._netNetfilterNfConntrackBuckets = undefined;
      this._netNetfilterNfConntrackMax = undefined;
      this._vmMaxMapCount = undefined;
      this._vmSwappiness = undefined;
      this._vmVfsCachePressure = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._fsAioMaxNr = value.fsAioMaxNr;
      this._fsFileMax = value.fsFileMax;
      this._fsInotifyMaxUserWatches = value.fsInotifyMaxUserWatches;
      this._fsNrOpen = value.fsNrOpen;
      this._kernelThreadsMax = value.kernelThreadsMax;
      this._netCoreNetdevMaxBacklog = value.netCoreNetdevMaxBacklog;
      this._netCoreOptmemMax = value.netCoreOptmemMax;
      this._netCoreRmemDefault = value.netCoreRmemDefault;
      this._netCoreRmemMax = value.netCoreRmemMax;
      this._netCoreSomaxconn = value.netCoreSomaxconn;
      this._netCoreWmemDefault = value.netCoreWmemDefault;
      this._netCoreWmemMax = value.netCoreWmemMax;
      this._netIpv4IpLocalPortRangeMax = value.netIpv4IpLocalPortRangeMax;
      this._netIpv4IpLocalPortRangeMin = value.netIpv4IpLocalPortRangeMin;
      this._netIpv4NeighDefaultGcThresh1 = value.netIpv4NeighDefaultGcThresh1;
      this._netIpv4NeighDefaultGcThresh2 = value.netIpv4NeighDefaultGcThresh2;
      this._netIpv4NeighDefaultGcThresh3 = value.netIpv4NeighDefaultGcThresh3;
      this._netIpv4TcpFinTimeout = value.netIpv4TcpFinTimeout;
      this._netIpv4TcpKeepaliveIntvl = value.netIpv4TcpKeepaliveIntvl;
      this._netIpv4TcpKeepaliveProbes = value.netIpv4TcpKeepaliveProbes;
      this._netIpv4TcpKeepaliveTime = value.netIpv4TcpKeepaliveTime;
      this._netIpv4TcpMaxSynBacklog = value.netIpv4TcpMaxSynBacklog;
      this._netIpv4TcpMaxTwBuckets = value.netIpv4TcpMaxTwBuckets;
      this._netIpv4TcpTwReuse = value.netIpv4TcpTwReuse;
      this._netNetfilterNfConntrackBuckets = value.netNetfilterNfConntrackBuckets;
      this._netNetfilterNfConntrackMax = value.netNetfilterNfConntrackMax;
      this._vmMaxMapCount = value.vmMaxMapCount;
      this._vmSwappiness = value.vmSwappiness;
      this._vmVfsCachePressure = value.vmVfsCachePressure;
    }
  }

  // fs_aio_max_nr - computed: false, optional: true, required: false
  private _fsAioMaxNr?: number; 
  public get fsAioMaxNr() {
    return this.getNumberAttribute('fs_aio_max_nr');
  }
  public set fsAioMaxNr(value: number) {
    this._fsAioMaxNr = value;
  }
  public resetFsAioMaxNr() {
    this._fsAioMaxNr = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fsAioMaxNrInput() {
    return this._fsAioMaxNr;
  }

  // fs_file_max - computed: false, optional: true, required: false
  private _fsFileMax?: number; 
  public get fsFileMax() {
    return this.getNumberAttribute('fs_file_max');
  }
  public set fsFileMax(value: number) {
    this._fsFileMax = value;
  }
  public resetFsFileMax() {
    this._fsFileMax = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fsFileMaxInput() {
    return this._fsFileMax;
  }

  // fs_inotify_max_user_watches - computed: false, optional: true, required: false
  private _fsInotifyMaxUserWatches?: number; 
  public get fsInotifyMaxUserWatches() {
    return this.getNumberAttribute('fs_inotify_max_user_watches');
  }
  public set fsInotifyMaxUserWatches(value: number) {
    this._fsInotifyMaxUserWatches = value;
  }
  public resetFsInotifyMaxUserWatches() {
    this._fsInotifyMaxUserWatches = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fsInotifyMaxUserWatchesInput() {
    return this._fsInotifyMaxUserWatches;
  }

  // fs_nr_open - computed: false, optional: true, required: false
  private _fsNrOpen?: number; 
  public get fsNrOpen() {
    return this.getNumberAttribute('fs_nr_open');
  }
  public set fsNrOpen(value: number) {
    this._fsNrOpen = value;
  }
  public resetFsNrOpen() {
    this._fsNrOpen = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fsNrOpenInput() {
    return this._fsNrOpen;
  }

  // kernel_threads_max - computed: false, optional: true, required: false
  private _kernelThreadsMax?: number; 
  public get kernelThreadsMax() {
    return this.getNumberAttribute('kernel_threads_max');
  }
  public set kernelThreadsMax(value: number) {
    this._kernelThreadsMax = value;
  }
  public resetKernelThreadsMax() {
    this._kernelThreadsMax = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get kernelThreadsMaxInput() {
    return this._kernelThreadsMax;
  }

  // net_core_netdev_max_backlog - computed: false, optional: true, required: false
  private _netCoreNetdevMaxBacklog?: number; 
  public get netCoreNetdevMaxBacklog() {
    return this.getNumberAttribute('net_core_netdev_max_backlog');
  }
  public set netCoreNetdevMaxBacklog(value: number) {
    this._netCoreNetdevMaxBacklog = value;
  }
  public resetNetCoreNetdevMaxBacklog() {
    this._netCoreNetdevMaxBacklog = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get netCoreNetdevMaxBacklogInput() {
    return this._netCoreNetdevMaxBacklog;
  }

  // net_core_optmem_max - computed: false, optional: true, required: false
  private _netCoreOptmemMax?: number; 
  public get netCoreOptmemMax() {
    return this.getNumberAttribute('net_core_optmem_max');
  }
  public set netCoreOptmemMax(value: number) {
    this._netCoreOptmemMax = value;
  }
  public resetNetCoreOptmemMax() {
    this._netCoreOptmemMax = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get netCoreOptmemMaxInput() {
    return this._netCoreOptmemMax;
  }

  // net_core_rmem_default - computed: false, optional: true, required: false
  private _netCoreRmemDefault?: number; 
  public get netCoreRmemDefault() {
    return this.getNumberAttribute('net_core_rmem_default');
  }
  public set netCoreRmemDefault(value: number) {
    this._netCoreRmemDefault = value;
  }
  public resetNetCoreRmemDefault() {
    this._netCoreRmemDefault = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get netCoreRmemDefaultInput() {
    return this._netCoreRmemDefault;
  }

  // net_core_rmem_max - computed: false, optional: true, required: false
  private _netCoreRmemMax?: number; 
  public get netCoreRmemMax() {
    return this.getNumberAttribute('net_core_rmem_max');
  }
  public set netCoreRmemMax(value: number) {
    this._netCoreRmemMax = value;
  }
  public resetNetCoreRmemMax() {
    this._netCoreRmemMax = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get netCoreRmemMaxInput() {
    return this._netCoreRmemMax;
  }

  // net_core_somaxconn - computed: false, optional: true, required: false
  private _netCoreSomaxconn?: number; 
  public get netCoreSomaxconn() {
    return this.getNumberAttribute('net_core_somaxconn');
  }
  public set netCoreSomaxconn(value: number) {
    this._netCoreSomaxconn = value;
  }
  public resetNetCoreSomaxconn() {
    this._netCoreSomaxconn = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get netCoreSomaxconnInput() {
    return this._netCoreSomaxconn;
  }

  // net_core_wmem_default - computed: false, optional: true, required: false
  private _netCoreWmemDefault?: number; 
  public get netCoreWmemDefault() {
    return this.getNumberAttribute('net_core_wmem_default');
  }
  public set netCoreWmemDefault(value: number) {
    this._netCoreWmemDefault = value;
  }
  public resetNetCoreWmemDefault() {
    this._netCoreWmemDefault = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get netCoreWmemDefaultInput() {
    return this._netCoreWmemDefault;
  }

  // net_core_wmem_max - computed: false, optional: true, required: false
  private _netCoreWmemMax?: number; 
  public get netCoreWmemMax() {
    return this.getNumberAttribute('net_core_wmem_max');
  }
  public set netCoreWmemMax(value: number) {
    this._netCoreWmemMax = value;
  }
  public resetNetCoreWmemMax() {
    this._netCoreWmemMax = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get netCoreWmemMaxInput() {
    return this._netCoreWmemMax;
  }

  // net_ipv4_ip_local_port_range_max - computed: false, optional: true, required: false
  private _netIpv4IpLocalPortRangeMax?: number; 
  public get netIpv4IpLocalPortRangeMax() {
    return this.getNumberAttribute('net_ipv4_ip_local_port_range_max');
  }
  public set netIpv4IpLocalPortRangeMax(value: number) {
    this._netIpv4IpLocalPortRangeMax = value;
  }
  public resetNetIpv4IpLocalPortRangeMax() {
    this._netIpv4IpLocalPortRangeMax = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get netIpv4IpLocalPortRangeMaxInput() {
    return this._netIpv4IpLocalPortRangeMax;
  }

  // net_ipv4_ip_local_port_range_min - computed: false, optional: true, required: false
  private _netIpv4IpLocalPortRangeMin?: number; 
  public get netIpv4IpLocalPortRangeMin() {
    return this.getNumberAttribute('net_ipv4_ip_local_port_range_min');
  }
  public set netIpv4IpLocalPortRangeMin(value: number) {
    this._netIpv4IpLocalPortRangeMin = value;
  }
  public resetNetIpv4IpLocalPortRangeMin() {
    this._netIpv4IpLocalPortRangeMin = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get netIpv4IpLocalPortRangeMinInput() {
    return this._netIpv4IpLocalPortRangeMin;
  }

  // net_ipv4_neigh_default_gc_thresh1 - computed: false, optional: true, required: false
  private _netIpv4NeighDefaultGcThresh1?: number; 
  public get netIpv4NeighDefaultGcThresh1() {
    return this.getNumberAttribute('net_ipv4_neigh_default_gc_thresh1');
  }
  public set netIpv4NeighDefaultGcThresh1(value: number) {
    this._netIpv4NeighDefaultGcThresh1 = value;
  }
  public resetNetIpv4NeighDefaultGcThresh1() {
    this._netIpv4NeighDefaultGcThresh1 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get netIpv4NeighDefaultGcThresh1Input() {
    return this._netIpv4NeighDefaultGcThresh1;
  }

  // net_ipv4_neigh_default_gc_thresh2 - computed: false, optional: true, required: false
  private _netIpv4NeighDefaultGcThresh2?: number; 
  public get netIpv4NeighDefaultGcThresh2() {
    return this.getNumberAttribute('net_ipv4_neigh_default_gc_thresh2');
  }
  public set netIpv4NeighDefaultGcThresh2(value: number) {
    this._netIpv4NeighDefaultGcThresh2 = value;
  }
  public resetNetIpv4NeighDefaultGcThresh2() {
    this._netIpv4NeighDefaultGcThresh2 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get netIpv4NeighDefaultGcThresh2Input() {
    return this._netIpv4NeighDefaultGcThresh2;
  }

  // net_ipv4_neigh_default_gc_thresh3 - computed: false, optional: true, required: false
  private _netIpv4NeighDefaultGcThresh3?: number; 
  public get netIpv4NeighDefaultGcThresh3() {
    return this.getNumberAttribute('net_ipv4_neigh_default_gc_thresh3');
  }
  public set netIpv4NeighDefaultGcThresh3(value: number) {
    this._netIpv4NeighDefaultGcThresh3 = value;
  }
  public resetNetIpv4NeighDefaultGcThresh3() {
    this._netIpv4NeighDefaultGcThresh3 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get netIpv4NeighDefaultGcThresh3Input() {
    return this._netIpv4NeighDefaultGcThresh3;
  }

  // net_ipv4_tcp_fin_timeout - computed: false, optional: true, required: false
  private _netIpv4TcpFinTimeout?: number; 
  public get netIpv4TcpFinTimeout() {
    return this.getNumberAttribute('net_ipv4_tcp_fin_timeout');
  }
  public set netIpv4TcpFinTimeout(value: number) {
    this._netIpv4TcpFinTimeout = value;
  }
  public resetNetIpv4TcpFinTimeout() {
    this._netIpv4TcpFinTimeout = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get netIpv4TcpFinTimeoutInput() {
    return this._netIpv4TcpFinTimeout;
  }

  // net_ipv4_tcp_keepalive_intvl - computed: false, optional: true, required: false
  private _netIpv4TcpKeepaliveIntvl?: number; 
  public get netIpv4TcpKeepaliveIntvl() {
    return this.getNumberAttribute('net_ipv4_tcp_keepalive_intvl');
  }
  public set netIpv4TcpKeepaliveIntvl(value: number) {
    this._netIpv4TcpKeepaliveIntvl = value;
  }
  public resetNetIpv4TcpKeepaliveIntvl() {
    this._netIpv4TcpKeepaliveIntvl = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get netIpv4TcpKeepaliveIntvlInput() {
    return this._netIpv4TcpKeepaliveIntvl;
  }

  // net_ipv4_tcp_keepalive_probes - computed: false, optional: true, required: false
  private _netIpv4TcpKeepaliveProbes?: number; 
  public get netIpv4TcpKeepaliveProbes() {
    return this.getNumberAttribute('net_ipv4_tcp_keepalive_probes');
  }
  public set netIpv4TcpKeepaliveProbes(value: number) {
    this._netIpv4TcpKeepaliveProbes = value;
  }
  public resetNetIpv4TcpKeepaliveProbes() {
    this._netIpv4TcpKeepaliveProbes = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get netIpv4TcpKeepaliveProbesInput() {
    return this._netIpv4TcpKeepaliveProbes;
  }

  // net_ipv4_tcp_keepalive_time - computed: false, optional: true, required: false
  private _netIpv4TcpKeepaliveTime?: number; 
  public get netIpv4TcpKeepaliveTime() {
    return this.getNumberAttribute('net_ipv4_tcp_keepalive_time');
  }
  public set netIpv4TcpKeepaliveTime(value: number) {
    this._netIpv4TcpKeepaliveTime = value;
  }
  public resetNetIpv4TcpKeepaliveTime() {
    this._netIpv4TcpKeepaliveTime = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get netIpv4TcpKeepaliveTimeInput() {
    return this._netIpv4TcpKeepaliveTime;
  }

  // net_ipv4_tcp_max_syn_backlog - computed: false, optional: true, required: false
  private _netIpv4TcpMaxSynBacklog?: number; 
  public get netIpv4TcpMaxSynBacklog() {
    return this.getNumberAttribute('net_ipv4_tcp_max_syn_backlog');
  }
  public set netIpv4TcpMaxSynBacklog(value: number) {
    this._netIpv4TcpMaxSynBacklog = value;
  }
  public resetNetIpv4TcpMaxSynBacklog() {
    this._netIpv4TcpMaxSynBacklog = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get netIpv4TcpMaxSynBacklogInput() {
    return this._netIpv4TcpMaxSynBacklog;
  }

  // net_ipv4_tcp_max_tw_buckets - computed: false, optional: true, required: false
  private _netIpv4TcpMaxTwBuckets?: number; 
  public get netIpv4TcpMaxTwBuckets() {
    return this.getNumberAttribute('net_ipv4_tcp_max_tw_buckets');
  }
  public set netIpv4TcpMaxTwBuckets(value: number) {
    this._netIpv4TcpMaxTwBuckets = value;
  }
  public resetNetIpv4TcpMaxTwBuckets() {
    this._netIpv4TcpMaxTwBuckets = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get netIpv4TcpMaxTwBucketsInput() {
    return this._netIpv4TcpMaxTwBuckets;
  }

  // net_ipv4_tcp_tw_reuse - computed: false, optional: true, required: false
  private _netIpv4TcpTwReuse?: boolean | cdktf.IResolvable; 
  public get netIpv4TcpTwReuse() {
    return this.getBooleanAttribute('net_ipv4_tcp_tw_reuse');
  }
  public set netIpv4TcpTwReuse(value: boolean | cdktf.IResolvable) {
    this._netIpv4TcpTwReuse = value;
  }
  public resetNetIpv4TcpTwReuse() {
    this._netIpv4TcpTwReuse = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get netIpv4TcpTwReuseInput() {
    return this._netIpv4TcpTwReuse;
  }

  // net_netfilter_nf_conntrack_buckets - computed: false, optional: true, required: false
  private _netNetfilterNfConntrackBuckets?: number; 
  public get netNetfilterNfConntrackBuckets() {
    return this.getNumberAttribute('net_netfilter_nf_conntrack_buckets');
  }
  public set netNetfilterNfConntrackBuckets(value: number) {
    this._netNetfilterNfConntrackBuckets = value;
  }
  public resetNetNetfilterNfConntrackBuckets() {
    this._netNetfilterNfConntrackBuckets = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get netNetfilterNfConntrackBucketsInput() {
    return this._netNetfilterNfConntrackBuckets;
  }

  // net_netfilter_nf_conntrack_max - computed: false, optional: true, required: false
  private _netNetfilterNfConntrackMax?: number; 
  public get netNetfilterNfConntrackMax() {
    return this.getNumberAttribute('net_netfilter_nf_conntrack_max');
  }
  public set netNetfilterNfConntrackMax(value: number) {
    this._netNetfilterNfConntrackMax = value;
  }
  public resetNetNetfilterNfConntrackMax() {
    this._netNetfilterNfConntrackMax = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get netNetfilterNfConntrackMaxInput() {
    return this._netNetfilterNfConntrackMax;
  }

  // vm_max_map_count - computed: false, optional: true, required: false
  private _vmMaxMapCount?: number; 
  public get vmMaxMapCount() {
    return this.getNumberAttribute('vm_max_map_count');
  }
  public set vmMaxMapCount(value: number) {
    this._vmMaxMapCount = value;
  }
  public resetVmMaxMapCount() {
    this._vmMaxMapCount = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get vmMaxMapCountInput() {
    return this._vmMaxMapCount;
  }

  // vm_swappiness - computed: false, optional: true, required: false
  private _vmSwappiness?: number; 
  public get vmSwappiness() {
    return this.getNumberAttribute('vm_swappiness');
  }
  public set vmSwappiness(value: number) {
    this._vmSwappiness = value;
  }
  public resetVmSwappiness() {
    this._vmSwappiness = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get vmSwappinessInput() {
    return this._vmSwappiness;
  }

  // vm_vfs_cache_pressure - computed: false, optional: true, required: false
  private _vmVfsCachePressure?: number; 
  public get vmVfsCachePressure() {
    return this.getNumberAttribute('vm_vfs_cache_pressure');
  }
  public set vmVfsCachePressure(value: number) {
    this._vmVfsCachePressure = value;
  }
  public resetVmVfsCachePressure() {
    this._vmVfsCachePressure = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get vmVfsCachePressureInput() {
    return this._vmVfsCachePressure;
  }
}
export interface KubernetesClusterDefaultNodePoolLinuxOsConfig {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/kubernetes_cluster#swap_file_size_mb KubernetesCluster#swap_file_size_mb}
  */
  readonly swapFileSizeMb?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/kubernetes_cluster#transparent_huge_page_defrag KubernetesCluster#transparent_huge_page_defrag}
  */
  readonly transparentHugePageDefrag?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/kubernetes_cluster#transparent_huge_page_enabled KubernetesCluster#transparent_huge_page_enabled}
  */
  readonly transparentHugePageEnabled?: string;
  /**
  * sysctl_config block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/kubernetes_cluster#sysctl_config KubernetesCluster#sysctl_config}
  */
  readonly sysctlConfig?: KubernetesClusterDefaultNodePoolLinuxOsConfigSysctlConfig;
}

export function kubernetesClusterDefaultNodePoolLinuxOsConfigToTerraform(struct?: KubernetesClusterDefaultNodePoolLinuxOsConfigOutputReference | KubernetesClusterDefaultNodePoolLinuxOsConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
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


export function kubernetesClusterDefaultNodePoolLinuxOsConfigToHclTerraform(struct?: KubernetesClusterDefaultNodePoolLinuxOsConfigOutputReference | KubernetesClusterDefaultNodePoolLinuxOsConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    swap_file_size_mb: {
      value: cdktf.numberToHclTerraform(struct!.swapFileSizeMb),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    transparent_huge_page_defrag: {
      value: cdktf.stringToHclTerraform(struct!.transparentHugePageDefrag),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    transparent_huge_page_enabled: {
      value: cdktf.stringToHclTerraform(struct!.transparentHugePageEnabled),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    sysctl_config: {
      value: kubernetesClusterDefaultNodePoolLinuxOsConfigSysctlConfigToHclTerraform(struct!.sysctlConfig),
      isBlock: true,
      type: "list",
      storageClassType: "KubernetesClusterDefaultNodePoolLinuxOsConfigSysctlConfigList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class KubernetesClusterDefaultNodePoolLinuxOsConfigOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): KubernetesClusterDefaultNodePoolLinuxOsConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._swapFileSizeMb !== undefined) {
      hasAnyValues = true;
      internalValueResult.swapFileSizeMb = this._swapFileSizeMb;
    }
    if (this._transparentHugePageDefrag !== undefined) {
      hasAnyValues = true;
      internalValueResult.transparentHugePageDefrag = this._transparentHugePageDefrag;
    }
    if (this._transparentHugePageEnabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.transparentHugePageEnabled = this._transparentHugePageEnabled;
    }
    if (this._sysctlConfig?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.sysctlConfig = this._sysctlConfig?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: KubernetesClusterDefaultNodePoolLinuxOsConfig | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._swapFileSizeMb = undefined;
      this._transparentHugePageDefrag = undefined;
      this._transparentHugePageEnabled = undefined;
      this._sysctlConfig.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._swapFileSizeMb = value.swapFileSizeMb;
      this._transparentHugePageDefrag = value.transparentHugePageDefrag;
      this._transparentHugePageEnabled = value.transparentHugePageEnabled;
      this._sysctlConfig.internalValue = value.sysctlConfig;
    }
  }

  // swap_file_size_mb - computed: false, optional: true, required: false
  private _swapFileSizeMb?: number; 
  public get swapFileSizeMb() {
    return this.getNumberAttribute('swap_file_size_mb');
  }
  public set swapFileSizeMb(value: number) {
    this._swapFileSizeMb = value;
  }
  public resetSwapFileSizeMb() {
    this._swapFileSizeMb = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get swapFileSizeMbInput() {
    return this._swapFileSizeMb;
  }

  // transparent_huge_page_defrag - computed: false, optional: true, required: false
  private _transparentHugePageDefrag?: string; 
  public get transparentHugePageDefrag() {
    return this.getStringAttribute('transparent_huge_page_defrag');
  }
  public set transparentHugePageDefrag(value: string) {
    this._transparentHugePageDefrag = value;
  }
  public resetTransparentHugePageDefrag() {
    this._transparentHugePageDefrag = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get transparentHugePageDefragInput() {
    return this._transparentHugePageDefrag;
  }

  // transparent_huge_page_enabled - computed: false, optional: true, required: false
  private _transparentHugePageEnabled?: string; 
  public get transparentHugePageEnabled() {
    return this.getStringAttribute('transparent_huge_page_enabled');
  }
  public set transparentHugePageEnabled(value: string) {
    this._transparentHugePageEnabled = value;
  }
  public resetTransparentHugePageEnabled() {
    this._transparentHugePageEnabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get transparentHugePageEnabledInput() {
    return this._transparentHugePageEnabled;
  }

  // sysctl_config - computed: false, optional: true, required: false
  private _sysctlConfig = new KubernetesClusterDefaultNodePoolLinuxOsConfigSysctlConfigOutputReference(this, "sysctl_config");
  public get sysctlConfig() {
    return this._sysctlConfig;
  }
  public putSysctlConfig(value: KubernetesClusterDefaultNodePoolLinuxOsConfigSysctlConfig) {
    this._sysctlConfig.internalValue = value;
  }
  public resetSysctlConfig() {
    this._sysctlConfig.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sysctlConfigInput() {
    return this._sysctlConfig.internalValue;
  }
}
export interface KubernetesClusterDefaultNodePoolNodeNetworkProfileAllowedHostPorts {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/kubernetes_cluster#port_end KubernetesCluster#port_end}
  */
  readonly portEnd?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/kubernetes_cluster#port_start KubernetesCluster#port_start}
  */
  readonly portStart?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/kubernetes_cluster#protocol KubernetesCluster#protocol}
  */
  readonly protocol?: string;
}

export function kubernetesClusterDefaultNodePoolNodeNetworkProfileAllowedHostPortsToTerraform(struct?: KubernetesClusterDefaultNodePoolNodeNetworkProfileAllowedHostPorts | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    port_end: cdktf.numberToTerraform(struct!.portEnd),
    port_start: cdktf.numberToTerraform(struct!.portStart),
    protocol: cdktf.stringToTerraform(struct!.protocol),
  }
}


export function kubernetesClusterDefaultNodePoolNodeNetworkProfileAllowedHostPortsToHclTerraform(struct?: KubernetesClusterDefaultNodePoolNodeNetworkProfileAllowedHostPorts | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    port_end: {
      value: cdktf.numberToHclTerraform(struct!.portEnd),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    port_start: {
      value: cdktf.numberToHclTerraform(struct!.portStart),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    protocol: {
      value: cdktf.stringToHclTerraform(struct!.protocol),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class KubernetesClusterDefaultNodePoolNodeNetworkProfileAllowedHostPortsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): KubernetesClusterDefaultNodePoolNodeNetworkProfileAllowedHostPorts | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._portEnd !== undefined) {
      hasAnyValues = true;
      internalValueResult.portEnd = this._portEnd;
    }
    if (this._portStart !== undefined) {
      hasAnyValues = true;
      internalValueResult.portStart = this._portStart;
    }
    if (this._protocol !== undefined) {
      hasAnyValues = true;
      internalValueResult.protocol = this._protocol;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: KubernetesClusterDefaultNodePoolNodeNetworkProfileAllowedHostPorts | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._portEnd = undefined;
      this._portStart = undefined;
      this._protocol = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._portEnd = value.portEnd;
      this._portStart = value.portStart;
      this._protocol = value.protocol;
    }
  }

  // port_end - computed: false, optional: true, required: false
  private _portEnd?: number; 
  public get portEnd() {
    return this.getNumberAttribute('port_end');
  }
  public set portEnd(value: number) {
    this._portEnd = value;
  }
  public resetPortEnd() {
    this._portEnd = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get portEndInput() {
    return this._portEnd;
  }

  // port_start - computed: false, optional: true, required: false
  private _portStart?: number; 
  public get portStart() {
    return this.getNumberAttribute('port_start');
  }
  public set portStart(value: number) {
    this._portStart = value;
  }
  public resetPortStart() {
    this._portStart = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get portStartInput() {
    return this._portStart;
  }

  // protocol - computed: false, optional: true, required: false
  private _protocol?: string; 
  public get protocol() {
    return this.getStringAttribute('protocol');
  }
  public set protocol(value: string) {
    this._protocol = value;
  }
  public resetProtocol() {
    this._protocol = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get protocolInput() {
    return this._protocol;
  }
}

export class KubernetesClusterDefaultNodePoolNodeNetworkProfileAllowedHostPortsList extends cdktf.ComplexList {
  public internalValue? : KubernetesClusterDefaultNodePoolNodeNetworkProfileAllowedHostPorts[] | cdktf.IResolvable

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
  public get(index: number): KubernetesClusterDefaultNodePoolNodeNetworkProfileAllowedHostPortsOutputReference {
    return new KubernetesClusterDefaultNodePoolNodeNetworkProfileAllowedHostPortsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface KubernetesClusterDefaultNodePoolNodeNetworkProfile {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/kubernetes_cluster#application_security_group_ids KubernetesCluster#application_security_group_ids}
  */
  readonly applicationSecurityGroupIds?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/kubernetes_cluster#node_public_ip_tags KubernetesCluster#node_public_ip_tags}
  */
  readonly nodePublicIpTags?: { [key: string]: string };
  /**
  * allowed_host_ports block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/kubernetes_cluster#allowed_host_ports KubernetesCluster#allowed_host_ports}
  */
  readonly allowedHostPorts?: KubernetesClusterDefaultNodePoolNodeNetworkProfileAllowedHostPorts[] | cdktf.IResolvable;
}

export function kubernetesClusterDefaultNodePoolNodeNetworkProfileToTerraform(struct?: KubernetesClusterDefaultNodePoolNodeNetworkProfileOutputReference | KubernetesClusterDefaultNodePoolNodeNetworkProfile): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    application_security_group_ids: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.applicationSecurityGroupIds),
    node_public_ip_tags: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.nodePublicIpTags),
    allowed_host_ports: cdktf.listMapper(kubernetesClusterDefaultNodePoolNodeNetworkProfileAllowedHostPortsToTerraform, true)(struct!.allowedHostPorts),
  }
}


export function kubernetesClusterDefaultNodePoolNodeNetworkProfileToHclTerraform(struct?: KubernetesClusterDefaultNodePoolNodeNetworkProfileOutputReference | KubernetesClusterDefaultNodePoolNodeNetworkProfile): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    application_security_group_ids: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.applicationSecurityGroupIds),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    node_public_ip_tags: {
      value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(struct!.nodePublicIpTags),
      isBlock: false,
      type: "map",
      storageClassType: "stringMap",
    },
    allowed_host_ports: {
      value: cdktf.listMapperHcl(kubernetesClusterDefaultNodePoolNodeNetworkProfileAllowedHostPortsToHclTerraform, true)(struct!.allowedHostPorts),
      isBlock: true,
      type: "list",
      storageClassType: "KubernetesClusterDefaultNodePoolNodeNetworkProfileAllowedHostPortsList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class KubernetesClusterDefaultNodePoolNodeNetworkProfileOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): KubernetesClusterDefaultNodePoolNodeNetworkProfile | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._applicationSecurityGroupIds !== undefined) {
      hasAnyValues = true;
      internalValueResult.applicationSecurityGroupIds = this._applicationSecurityGroupIds;
    }
    if (this._nodePublicIpTags !== undefined) {
      hasAnyValues = true;
      internalValueResult.nodePublicIpTags = this._nodePublicIpTags;
    }
    if (this._allowedHostPorts?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.allowedHostPorts = this._allowedHostPorts?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: KubernetesClusterDefaultNodePoolNodeNetworkProfile | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._applicationSecurityGroupIds = undefined;
      this._nodePublicIpTags = undefined;
      this._allowedHostPorts.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._applicationSecurityGroupIds = value.applicationSecurityGroupIds;
      this._nodePublicIpTags = value.nodePublicIpTags;
      this._allowedHostPorts.internalValue = value.allowedHostPorts;
    }
  }

  // application_security_group_ids - computed: false, optional: true, required: false
  private _applicationSecurityGroupIds?: string[]; 
  public get applicationSecurityGroupIds() {
    return this.getListAttribute('application_security_group_ids');
  }
  public set applicationSecurityGroupIds(value: string[]) {
    this._applicationSecurityGroupIds = value;
  }
  public resetApplicationSecurityGroupIds() {
    this._applicationSecurityGroupIds = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get applicationSecurityGroupIdsInput() {
    return this._applicationSecurityGroupIds;
  }

  // node_public_ip_tags - computed: false, optional: true, required: false
  private _nodePublicIpTags?: { [key: string]: string }; 
  public get nodePublicIpTags() {
    return this.getStringMapAttribute('node_public_ip_tags');
  }
  public set nodePublicIpTags(value: { [key: string]: string }) {
    this._nodePublicIpTags = value;
  }
  public resetNodePublicIpTags() {
    this._nodePublicIpTags = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nodePublicIpTagsInput() {
    return this._nodePublicIpTags;
  }

  // allowed_host_ports - computed: false, optional: true, required: false
  private _allowedHostPorts = new KubernetesClusterDefaultNodePoolNodeNetworkProfileAllowedHostPortsList(this, "allowed_host_ports", false);
  public get allowedHostPorts() {
    return this._allowedHostPorts;
  }
  public putAllowedHostPorts(value: KubernetesClusterDefaultNodePoolNodeNetworkProfileAllowedHostPorts[] | cdktf.IResolvable) {
    this._allowedHostPorts.internalValue = value;
  }
  public resetAllowedHostPorts() {
    this._allowedHostPorts.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get allowedHostPortsInput() {
    return this._allowedHostPorts.internalValue;
  }
}
export interface KubernetesClusterDefaultNodePoolUpgradeSettings {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/kubernetes_cluster#drain_timeout_in_minutes KubernetesCluster#drain_timeout_in_minutes}
  */
  readonly drainTimeoutInMinutes?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/kubernetes_cluster#max_surge KubernetesCluster#max_surge}
  */
  readonly maxSurge: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/kubernetes_cluster#node_soak_duration_in_minutes KubernetesCluster#node_soak_duration_in_minutes}
  */
  readonly nodeSoakDurationInMinutes?: number;
}

export function kubernetesClusterDefaultNodePoolUpgradeSettingsToTerraform(struct?: KubernetesClusterDefaultNodePoolUpgradeSettingsOutputReference | KubernetesClusterDefaultNodePoolUpgradeSettings): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    drain_timeout_in_minutes: cdktf.numberToTerraform(struct!.drainTimeoutInMinutes),
    max_surge: cdktf.stringToTerraform(struct!.maxSurge),
    node_soak_duration_in_minutes: cdktf.numberToTerraform(struct!.nodeSoakDurationInMinutes),
  }
}


export function kubernetesClusterDefaultNodePoolUpgradeSettingsToHclTerraform(struct?: KubernetesClusterDefaultNodePoolUpgradeSettingsOutputReference | KubernetesClusterDefaultNodePoolUpgradeSettings): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    drain_timeout_in_minutes: {
      value: cdktf.numberToHclTerraform(struct!.drainTimeoutInMinutes),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    max_surge: {
      value: cdktf.stringToHclTerraform(struct!.maxSurge),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    node_soak_duration_in_minutes: {
      value: cdktf.numberToHclTerraform(struct!.nodeSoakDurationInMinutes),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class KubernetesClusterDefaultNodePoolUpgradeSettingsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): KubernetesClusterDefaultNodePoolUpgradeSettings | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._drainTimeoutInMinutes !== undefined) {
      hasAnyValues = true;
      internalValueResult.drainTimeoutInMinutes = this._drainTimeoutInMinutes;
    }
    if (this._maxSurge !== undefined) {
      hasAnyValues = true;
      internalValueResult.maxSurge = this._maxSurge;
    }
    if (this._nodeSoakDurationInMinutes !== undefined) {
      hasAnyValues = true;
      internalValueResult.nodeSoakDurationInMinutes = this._nodeSoakDurationInMinutes;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: KubernetesClusterDefaultNodePoolUpgradeSettings | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._drainTimeoutInMinutes = undefined;
      this._maxSurge = undefined;
      this._nodeSoakDurationInMinutes = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._drainTimeoutInMinutes = value.drainTimeoutInMinutes;
      this._maxSurge = value.maxSurge;
      this._nodeSoakDurationInMinutes = value.nodeSoakDurationInMinutes;
    }
  }

  // drain_timeout_in_minutes - computed: false, optional: true, required: false
  private _drainTimeoutInMinutes?: number; 
  public get drainTimeoutInMinutes() {
    return this.getNumberAttribute('drain_timeout_in_minutes');
  }
  public set drainTimeoutInMinutes(value: number) {
    this._drainTimeoutInMinutes = value;
  }
  public resetDrainTimeoutInMinutes() {
    this._drainTimeoutInMinutes = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get drainTimeoutInMinutesInput() {
    return this._drainTimeoutInMinutes;
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
    return this._maxSurge;
  }

  // node_soak_duration_in_minutes - computed: false, optional: true, required: false
  private _nodeSoakDurationInMinutes?: number; 
  public get nodeSoakDurationInMinutes() {
    return this.getNumberAttribute('node_soak_duration_in_minutes');
  }
  public set nodeSoakDurationInMinutes(value: number) {
    this._nodeSoakDurationInMinutes = value;
  }
  public resetNodeSoakDurationInMinutes() {
    this._nodeSoakDurationInMinutes = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nodeSoakDurationInMinutesInput() {
    return this._nodeSoakDurationInMinutes;
  }
}
export interface KubernetesClusterDefaultNodePool {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/kubernetes_cluster#auto_scaling_enabled KubernetesCluster#auto_scaling_enabled}
  */
  readonly autoScalingEnabled?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/kubernetes_cluster#capacity_reservation_group_id KubernetesCluster#capacity_reservation_group_id}
  */
  readonly capacityReservationGroupId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/kubernetes_cluster#fips_enabled KubernetesCluster#fips_enabled}
  */
  readonly fipsEnabled?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/kubernetes_cluster#gpu_instance KubernetesCluster#gpu_instance}
  */
  readonly gpuInstance?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/kubernetes_cluster#host_encryption_enabled KubernetesCluster#host_encryption_enabled}
  */
  readonly hostEncryptionEnabled?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/kubernetes_cluster#host_group_id KubernetesCluster#host_group_id}
  */
  readonly hostGroupId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/kubernetes_cluster#kubelet_disk_type KubernetesCluster#kubelet_disk_type}
  */
  readonly kubeletDiskType?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/kubernetes_cluster#max_count KubernetesCluster#max_count}
  */
  readonly maxCount?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/kubernetes_cluster#max_pods KubernetesCluster#max_pods}
  */
  readonly maxPods?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/kubernetes_cluster#min_count KubernetesCluster#min_count}
  */
  readonly minCount?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/kubernetes_cluster#name KubernetesCluster#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/kubernetes_cluster#node_count KubernetesCluster#node_count}
  */
  readonly nodeCount?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/kubernetes_cluster#node_labels KubernetesCluster#node_labels}
  */
  readonly nodeLabels?: { [key: string]: string };
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/kubernetes_cluster#node_public_ip_enabled KubernetesCluster#node_public_ip_enabled}
  */
  readonly nodePublicIpEnabled?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/kubernetes_cluster#node_public_ip_prefix_id KubernetesCluster#node_public_ip_prefix_id}
  */
  readonly nodePublicIpPrefixId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/kubernetes_cluster#only_critical_addons_enabled KubernetesCluster#only_critical_addons_enabled}
  */
  readonly onlyCriticalAddonsEnabled?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/kubernetes_cluster#orchestrator_version KubernetesCluster#orchestrator_version}
  */
  readonly orchestratorVersion?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/kubernetes_cluster#os_disk_size_gb KubernetesCluster#os_disk_size_gb}
  */
  readonly osDiskSizeGb?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/kubernetes_cluster#os_disk_type KubernetesCluster#os_disk_type}
  */
  readonly osDiskType?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/kubernetes_cluster#os_sku KubernetesCluster#os_sku}
  */
  readonly osSku?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/kubernetes_cluster#pod_subnet_id KubernetesCluster#pod_subnet_id}
  */
  readonly podSubnetId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/kubernetes_cluster#proximity_placement_group_id KubernetesCluster#proximity_placement_group_id}
  */
  readonly proximityPlacementGroupId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/kubernetes_cluster#scale_down_mode KubernetesCluster#scale_down_mode}
  */
  readonly scaleDownMode?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/kubernetes_cluster#snapshot_id KubernetesCluster#snapshot_id}
  */
  readonly snapshotId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/kubernetes_cluster#tags KubernetesCluster#tags}
  */
  readonly tags?: { [key: string]: string };
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/kubernetes_cluster#temporary_name_for_rotation KubernetesCluster#temporary_name_for_rotation}
  */
  readonly temporaryNameForRotation?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/kubernetes_cluster#type KubernetesCluster#type}
  */
  readonly type?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/kubernetes_cluster#ultra_ssd_enabled KubernetesCluster#ultra_ssd_enabled}
  */
  readonly ultraSsdEnabled?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/kubernetes_cluster#vm_size KubernetesCluster#vm_size}
  */
  readonly vmSize: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/kubernetes_cluster#vnet_subnet_id KubernetesCluster#vnet_subnet_id}
  */
  readonly vnetSubnetId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/kubernetes_cluster#workload_runtime KubernetesCluster#workload_runtime}
  */
  readonly workloadRuntime?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/kubernetes_cluster#zones KubernetesCluster#zones}
  */
  readonly zones?: string[];
  /**
  * kubelet_config block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/kubernetes_cluster#kubelet_config KubernetesCluster#kubelet_config}
  */
  readonly kubeletConfig?: KubernetesClusterDefaultNodePoolKubeletConfig;
  /**
  * linux_os_config block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/kubernetes_cluster#linux_os_config KubernetesCluster#linux_os_config}
  */
  readonly linuxOsConfig?: KubernetesClusterDefaultNodePoolLinuxOsConfig;
  /**
  * node_network_profile block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/kubernetes_cluster#node_network_profile KubernetesCluster#node_network_profile}
  */
  readonly nodeNetworkProfile?: KubernetesClusterDefaultNodePoolNodeNetworkProfile;
  /**
  * upgrade_settings block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/kubernetes_cluster#upgrade_settings KubernetesCluster#upgrade_settings}
  */
  readonly upgradeSettings?: KubernetesClusterDefaultNodePoolUpgradeSettings;
}

export function kubernetesClusterDefaultNodePoolToTerraform(struct?: KubernetesClusterDefaultNodePoolOutputReference | KubernetesClusterDefaultNodePool): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    auto_scaling_enabled: cdktf.booleanToTerraform(struct!.autoScalingEnabled),
    capacity_reservation_group_id: cdktf.stringToTerraform(struct!.capacityReservationGroupId),
    fips_enabled: cdktf.booleanToTerraform(struct!.fipsEnabled),
    gpu_instance: cdktf.stringToTerraform(struct!.gpuInstance),
    host_encryption_enabled: cdktf.booleanToTerraform(struct!.hostEncryptionEnabled),
    host_group_id: cdktf.stringToTerraform(struct!.hostGroupId),
    kubelet_disk_type: cdktf.stringToTerraform(struct!.kubeletDiskType),
    max_count: cdktf.numberToTerraform(struct!.maxCount),
    max_pods: cdktf.numberToTerraform(struct!.maxPods),
    min_count: cdktf.numberToTerraform(struct!.minCount),
    name: cdktf.stringToTerraform(struct!.name),
    node_count: cdktf.numberToTerraform(struct!.nodeCount),
    node_labels: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.nodeLabels),
    node_public_ip_enabled: cdktf.booleanToTerraform(struct!.nodePublicIpEnabled),
    node_public_ip_prefix_id: cdktf.stringToTerraform(struct!.nodePublicIpPrefixId),
    only_critical_addons_enabled: cdktf.booleanToTerraform(struct!.onlyCriticalAddonsEnabled),
    orchestrator_version: cdktf.stringToTerraform(struct!.orchestratorVersion),
    os_disk_size_gb: cdktf.numberToTerraform(struct!.osDiskSizeGb),
    os_disk_type: cdktf.stringToTerraform(struct!.osDiskType),
    os_sku: cdktf.stringToTerraform(struct!.osSku),
    pod_subnet_id: cdktf.stringToTerraform(struct!.podSubnetId),
    proximity_placement_group_id: cdktf.stringToTerraform(struct!.proximityPlacementGroupId),
    scale_down_mode: cdktf.stringToTerraform(struct!.scaleDownMode),
    snapshot_id: cdktf.stringToTerraform(struct!.snapshotId),
    tags: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.tags),
    temporary_name_for_rotation: cdktf.stringToTerraform(struct!.temporaryNameForRotation),
    type: cdktf.stringToTerraform(struct!.type),
    ultra_ssd_enabled: cdktf.booleanToTerraform(struct!.ultraSsdEnabled),
    vm_size: cdktf.stringToTerraform(struct!.vmSize),
    vnet_subnet_id: cdktf.stringToTerraform(struct!.vnetSubnetId),
    workload_runtime: cdktf.stringToTerraform(struct!.workloadRuntime),
    zones: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.zones),
    kubelet_config: kubernetesClusterDefaultNodePoolKubeletConfigToTerraform(struct!.kubeletConfig),
    linux_os_config: kubernetesClusterDefaultNodePoolLinuxOsConfigToTerraform(struct!.linuxOsConfig),
    node_network_profile: kubernetesClusterDefaultNodePoolNodeNetworkProfileToTerraform(struct!.nodeNetworkProfile),
    upgrade_settings: kubernetesClusterDefaultNodePoolUpgradeSettingsToTerraform(struct!.upgradeSettings),
  }
}


export function kubernetesClusterDefaultNodePoolToHclTerraform(struct?: KubernetesClusterDefaultNodePoolOutputReference | KubernetesClusterDefaultNodePool): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    auto_scaling_enabled: {
      value: cdktf.booleanToHclTerraform(struct!.autoScalingEnabled),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    capacity_reservation_group_id: {
      value: cdktf.stringToHclTerraform(struct!.capacityReservationGroupId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    fips_enabled: {
      value: cdktf.booleanToHclTerraform(struct!.fipsEnabled),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    gpu_instance: {
      value: cdktf.stringToHclTerraform(struct!.gpuInstance),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    host_encryption_enabled: {
      value: cdktf.booleanToHclTerraform(struct!.hostEncryptionEnabled),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    host_group_id: {
      value: cdktf.stringToHclTerraform(struct!.hostGroupId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    kubelet_disk_type: {
      value: cdktf.stringToHclTerraform(struct!.kubeletDiskType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    max_count: {
      value: cdktf.numberToHclTerraform(struct!.maxCount),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    max_pods: {
      value: cdktf.numberToHclTerraform(struct!.maxPods),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    min_count: {
      value: cdktf.numberToHclTerraform(struct!.minCount),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    name: {
      value: cdktf.stringToHclTerraform(struct!.name),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    node_count: {
      value: cdktf.numberToHclTerraform(struct!.nodeCount),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    node_labels: {
      value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(struct!.nodeLabels),
      isBlock: false,
      type: "map",
      storageClassType: "stringMap",
    },
    node_public_ip_enabled: {
      value: cdktf.booleanToHclTerraform(struct!.nodePublicIpEnabled),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    node_public_ip_prefix_id: {
      value: cdktf.stringToHclTerraform(struct!.nodePublicIpPrefixId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    only_critical_addons_enabled: {
      value: cdktf.booleanToHclTerraform(struct!.onlyCriticalAddonsEnabled),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    orchestrator_version: {
      value: cdktf.stringToHclTerraform(struct!.orchestratorVersion),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    os_disk_size_gb: {
      value: cdktf.numberToHclTerraform(struct!.osDiskSizeGb),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    os_disk_type: {
      value: cdktf.stringToHclTerraform(struct!.osDiskType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    os_sku: {
      value: cdktf.stringToHclTerraform(struct!.osSku),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    pod_subnet_id: {
      value: cdktf.stringToHclTerraform(struct!.podSubnetId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    proximity_placement_group_id: {
      value: cdktf.stringToHclTerraform(struct!.proximityPlacementGroupId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    scale_down_mode: {
      value: cdktf.stringToHclTerraform(struct!.scaleDownMode),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    snapshot_id: {
      value: cdktf.stringToHclTerraform(struct!.snapshotId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    tags: {
      value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(struct!.tags),
      isBlock: false,
      type: "map",
      storageClassType: "stringMap",
    },
    temporary_name_for_rotation: {
      value: cdktf.stringToHclTerraform(struct!.temporaryNameForRotation),
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
    ultra_ssd_enabled: {
      value: cdktf.booleanToHclTerraform(struct!.ultraSsdEnabled),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    vm_size: {
      value: cdktf.stringToHclTerraform(struct!.vmSize),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    vnet_subnet_id: {
      value: cdktf.stringToHclTerraform(struct!.vnetSubnetId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    workload_runtime: {
      value: cdktf.stringToHclTerraform(struct!.workloadRuntime),
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
    kubelet_config: {
      value: kubernetesClusterDefaultNodePoolKubeletConfigToHclTerraform(struct!.kubeletConfig),
      isBlock: true,
      type: "list",
      storageClassType: "KubernetesClusterDefaultNodePoolKubeletConfigList",
    },
    linux_os_config: {
      value: kubernetesClusterDefaultNodePoolLinuxOsConfigToHclTerraform(struct!.linuxOsConfig),
      isBlock: true,
      type: "list",
      storageClassType: "KubernetesClusterDefaultNodePoolLinuxOsConfigList",
    },
    node_network_profile: {
      value: kubernetesClusterDefaultNodePoolNodeNetworkProfileToHclTerraform(struct!.nodeNetworkProfile),
      isBlock: true,
      type: "list",
      storageClassType: "KubernetesClusterDefaultNodePoolNodeNetworkProfileList",
    },
    upgrade_settings: {
      value: kubernetesClusterDefaultNodePoolUpgradeSettingsToHclTerraform(struct!.upgradeSettings),
      isBlock: true,
      type: "list",
      storageClassType: "KubernetesClusterDefaultNodePoolUpgradeSettingsList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class KubernetesClusterDefaultNodePoolOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): KubernetesClusterDefaultNodePool | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._autoScalingEnabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.autoScalingEnabled = this._autoScalingEnabled;
    }
    if (this._capacityReservationGroupId !== undefined) {
      hasAnyValues = true;
      internalValueResult.capacityReservationGroupId = this._capacityReservationGroupId;
    }
    if (this._fipsEnabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.fipsEnabled = this._fipsEnabled;
    }
    if (this._gpuInstance !== undefined) {
      hasAnyValues = true;
      internalValueResult.gpuInstance = this._gpuInstance;
    }
    if (this._hostEncryptionEnabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.hostEncryptionEnabled = this._hostEncryptionEnabled;
    }
    if (this._hostGroupId !== undefined) {
      hasAnyValues = true;
      internalValueResult.hostGroupId = this._hostGroupId;
    }
    if (this._kubeletDiskType !== undefined) {
      hasAnyValues = true;
      internalValueResult.kubeletDiskType = this._kubeletDiskType;
    }
    if (this._maxCount !== undefined) {
      hasAnyValues = true;
      internalValueResult.maxCount = this._maxCount;
    }
    if (this._maxPods !== undefined) {
      hasAnyValues = true;
      internalValueResult.maxPods = this._maxPods;
    }
    if (this._minCount !== undefined) {
      hasAnyValues = true;
      internalValueResult.minCount = this._minCount;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._nodeCount !== undefined) {
      hasAnyValues = true;
      internalValueResult.nodeCount = this._nodeCount;
    }
    if (this._nodeLabels !== undefined) {
      hasAnyValues = true;
      internalValueResult.nodeLabels = this._nodeLabels;
    }
    if (this._nodePublicIpEnabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.nodePublicIpEnabled = this._nodePublicIpEnabled;
    }
    if (this._nodePublicIpPrefixId !== undefined) {
      hasAnyValues = true;
      internalValueResult.nodePublicIpPrefixId = this._nodePublicIpPrefixId;
    }
    if (this._onlyCriticalAddonsEnabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.onlyCriticalAddonsEnabled = this._onlyCriticalAddonsEnabled;
    }
    if (this._orchestratorVersion !== undefined) {
      hasAnyValues = true;
      internalValueResult.orchestratorVersion = this._orchestratorVersion;
    }
    if (this._osDiskSizeGb !== undefined) {
      hasAnyValues = true;
      internalValueResult.osDiskSizeGb = this._osDiskSizeGb;
    }
    if (this._osDiskType !== undefined) {
      hasAnyValues = true;
      internalValueResult.osDiskType = this._osDiskType;
    }
    if (this._osSku !== undefined) {
      hasAnyValues = true;
      internalValueResult.osSku = this._osSku;
    }
    if (this._podSubnetId !== undefined) {
      hasAnyValues = true;
      internalValueResult.podSubnetId = this._podSubnetId;
    }
    if (this._proximityPlacementGroupId !== undefined) {
      hasAnyValues = true;
      internalValueResult.proximityPlacementGroupId = this._proximityPlacementGroupId;
    }
    if (this._scaleDownMode !== undefined) {
      hasAnyValues = true;
      internalValueResult.scaleDownMode = this._scaleDownMode;
    }
    if (this._snapshotId !== undefined) {
      hasAnyValues = true;
      internalValueResult.snapshotId = this._snapshotId;
    }
    if (this._tags !== undefined) {
      hasAnyValues = true;
      internalValueResult.tags = this._tags;
    }
    if (this._temporaryNameForRotation !== undefined) {
      hasAnyValues = true;
      internalValueResult.temporaryNameForRotation = this._temporaryNameForRotation;
    }
    if (this._type !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    if (this._ultraSsdEnabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.ultraSsdEnabled = this._ultraSsdEnabled;
    }
    if (this._vmSize !== undefined) {
      hasAnyValues = true;
      internalValueResult.vmSize = this._vmSize;
    }
    if (this._vnetSubnetId !== undefined) {
      hasAnyValues = true;
      internalValueResult.vnetSubnetId = this._vnetSubnetId;
    }
    if (this._workloadRuntime !== undefined) {
      hasAnyValues = true;
      internalValueResult.workloadRuntime = this._workloadRuntime;
    }
    if (this._zones !== undefined) {
      hasAnyValues = true;
      internalValueResult.zones = this._zones;
    }
    if (this._kubeletConfig?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.kubeletConfig = this._kubeletConfig?.internalValue;
    }
    if (this._linuxOsConfig?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.linuxOsConfig = this._linuxOsConfig?.internalValue;
    }
    if (this._nodeNetworkProfile?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.nodeNetworkProfile = this._nodeNetworkProfile?.internalValue;
    }
    if (this._upgradeSettings?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.upgradeSettings = this._upgradeSettings?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: KubernetesClusterDefaultNodePool | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._autoScalingEnabled = undefined;
      this._capacityReservationGroupId = undefined;
      this._fipsEnabled = undefined;
      this._gpuInstance = undefined;
      this._hostEncryptionEnabled = undefined;
      this._hostGroupId = undefined;
      this._kubeletDiskType = undefined;
      this._maxCount = undefined;
      this._maxPods = undefined;
      this._minCount = undefined;
      this._name = undefined;
      this._nodeCount = undefined;
      this._nodeLabels = undefined;
      this._nodePublicIpEnabled = undefined;
      this._nodePublicIpPrefixId = undefined;
      this._onlyCriticalAddonsEnabled = undefined;
      this._orchestratorVersion = undefined;
      this._osDiskSizeGb = undefined;
      this._osDiskType = undefined;
      this._osSku = undefined;
      this._podSubnetId = undefined;
      this._proximityPlacementGroupId = undefined;
      this._scaleDownMode = undefined;
      this._snapshotId = undefined;
      this._tags = undefined;
      this._temporaryNameForRotation = undefined;
      this._type = undefined;
      this._ultraSsdEnabled = undefined;
      this._vmSize = undefined;
      this._vnetSubnetId = undefined;
      this._workloadRuntime = undefined;
      this._zones = undefined;
      this._kubeletConfig.internalValue = undefined;
      this._linuxOsConfig.internalValue = undefined;
      this._nodeNetworkProfile.internalValue = undefined;
      this._upgradeSettings.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._autoScalingEnabled = value.autoScalingEnabled;
      this._capacityReservationGroupId = value.capacityReservationGroupId;
      this._fipsEnabled = value.fipsEnabled;
      this._gpuInstance = value.gpuInstance;
      this._hostEncryptionEnabled = value.hostEncryptionEnabled;
      this._hostGroupId = value.hostGroupId;
      this._kubeletDiskType = value.kubeletDiskType;
      this._maxCount = value.maxCount;
      this._maxPods = value.maxPods;
      this._minCount = value.minCount;
      this._name = value.name;
      this._nodeCount = value.nodeCount;
      this._nodeLabels = value.nodeLabels;
      this._nodePublicIpEnabled = value.nodePublicIpEnabled;
      this._nodePublicIpPrefixId = value.nodePublicIpPrefixId;
      this._onlyCriticalAddonsEnabled = value.onlyCriticalAddonsEnabled;
      this._orchestratorVersion = value.orchestratorVersion;
      this._osDiskSizeGb = value.osDiskSizeGb;
      this._osDiskType = value.osDiskType;
      this._osSku = value.osSku;
      this._podSubnetId = value.podSubnetId;
      this._proximityPlacementGroupId = value.proximityPlacementGroupId;
      this._scaleDownMode = value.scaleDownMode;
      this._snapshotId = value.snapshotId;
      this._tags = value.tags;
      this._temporaryNameForRotation = value.temporaryNameForRotation;
      this._type = value.type;
      this._ultraSsdEnabled = value.ultraSsdEnabled;
      this._vmSize = value.vmSize;
      this._vnetSubnetId = value.vnetSubnetId;
      this._workloadRuntime = value.workloadRuntime;
      this._zones = value.zones;
      this._kubeletConfig.internalValue = value.kubeletConfig;
      this._linuxOsConfig.internalValue = value.linuxOsConfig;
      this._nodeNetworkProfile.internalValue = value.nodeNetworkProfile;
      this._upgradeSettings.internalValue = value.upgradeSettings;
    }
  }

  // auto_scaling_enabled - computed: false, optional: true, required: false
  private _autoScalingEnabled?: boolean | cdktf.IResolvable; 
  public get autoScalingEnabled() {
    return this.getBooleanAttribute('auto_scaling_enabled');
  }
  public set autoScalingEnabled(value: boolean | cdktf.IResolvable) {
    this._autoScalingEnabled = value;
  }
  public resetAutoScalingEnabled() {
    this._autoScalingEnabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get autoScalingEnabledInput() {
    return this._autoScalingEnabled;
  }

  // capacity_reservation_group_id - computed: false, optional: true, required: false
  private _capacityReservationGroupId?: string; 
  public get capacityReservationGroupId() {
    return this.getStringAttribute('capacity_reservation_group_id');
  }
  public set capacityReservationGroupId(value: string) {
    this._capacityReservationGroupId = value;
  }
  public resetCapacityReservationGroupId() {
    this._capacityReservationGroupId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get capacityReservationGroupIdInput() {
    return this._capacityReservationGroupId;
  }

  // fips_enabled - computed: false, optional: true, required: false
  private _fipsEnabled?: boolean | cdktf.IResolvable; 
  public get fipsEnabled() {
    return this.getBooleanAttribute('fips_enabled');
  }
  public set fipsEnabled(value: boolean | cdktf.IResolvable) {
    this._fipsEnabled = value;
  }
  public resetFipsEnabled() {
    this._fipsEnabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fipsEnabledInput() {
    return this._fipsEnabled;
  }

  // gpu_instance - computed: false, optional: true, required: false
  private _gpuInstance?: string; 
  public get gpuInstance() {
    return this.getStringAttribute('gpu_instance');
  }
  public set gpuInstance(value: string) {
    this._gpuInstance = value;
  }
  public resetGpuInstance() {
    this._gpuInstance = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get gpuInstanceInput() {
    return this._gpuInstance;
  }

  // host_encryption_enabled - computed: false, optional: true, required: false
  private _hostEncryptionEnabled?: boolean | cdktf.IResolvable; 
  public get hostEncryptionEnabled() {
    return this.getBooleanAttribute('host_encryption_enabled');
  }
  public set hostEncryptionEnabled(value: boolean | cdktf.IResolvable) {
    this._hostEncryptionEnabled = value;
  }
  public resetHostEncryptionEnabled() {
    this._hostEncryptionEnabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get hostEncryptionEnabledInput() {
    return this._hostEncryptionEnabled;
  }

  // host_group_id - computed: false, optional: true, required: false
  private _hostGroupId?: string; 
  public get hostGroupId() {
    return this.getStringAttribute('host_group_id');
  }
  public set hostGroupId(value: string) {
    this._hostGroupId = value;
  }
  public resetHostGroupId() {
    this._hostGroupId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get hostGroupIdInput() {
    return this._hostGroupId;
  }

  // kubelet_disk_type - computed: true, optional: true, required: false
  private _kubeletDiskType?: string; 
  public get kubeletDiskType() {
    return this.getStringAttribute('kubelet_disk_type');
  }
  public set kubeletDiskType(value: string) {
    this._kubeletDiskType = value;
  }
  public resetKubeletDiskType() {
    this._kubeletDiskType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get kubeletDiskTypeInput() {
    return this._kubeletDiskType;
  }

  // max_count - computed: false, optional: true, required: false
  private _maxCount?: number; 
  public get maxCount() {
    return this.getNumberAttribute('max_count');
  }
  public set maxCount(value: number) {
    this._maxCount = value;
  }
  public resetMaxCount() {
    this._maxCount = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxCountInput() {
    return this._maxCount;
  }

  // max_pods - computed: true, optional: true, required: false
  private _maxPods?: number; 
  public get maxPods() {
    return this.getNumberAttribute('max_pods');
  }
  public set maxPods(value: number) {
    this._maxPods = value;
  }
  public resetMaxPods() {
    this._maxPods = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxPodsInput() {
    return this._maxPods;
  }

  // min_count - computed: false, optional: true, required: false
  private _minCount?: number; 
  public get minCount() {
    return this.getNumberAttribute('min_count');
  }
  public set minCount(value: number) {
    this._minCount = value;
  }
  public resetMinCount() {
    this._minCount = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get minCountInput() {
    return this._minCount;
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

  // node_count - computed: true, optional: true, required: false
  private _nodeCount?: number; 
  public get nodeCount() {
    return this.getNumberAttribute('node_count');
  }
  public set nodeCount(value: number) {
    this._nodeCount = value;
  }
  public resetNodeCount() {
    this._nodeCount = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nodeCountInput() {
    return this._nodeCount;
  }

  // node_labels - computed: true, optional: true, required: false
  private _nodeLabels?: { [key: string]: string }; 
  public get nodeLabels() {
    return this.getStringMapAttribute('node_labels');
  }
  public set nodeLabels(value: { [key: string]: string }) {
    this._nodeLabels = value;
  }
  public resetNodeLabels() {
    this._nodeLabels = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nodeLabelsInput() {
    return this._nodeLabels;
  }

  // node_public_ip_enabled - computed: false, optional: true, required: false
  private _nodePublicIpEnabled?: boolean | cdktf.IResolvable; 
  public get nodePublicIpEnabled() {
    return this.getBooleanAttribute('node_public_ip_enabled');
  }
  public set nodePublicIpEnabled(value: boolean | cdktf.IResolvable) {
    this._nodePublicIpEnabled = value;
  }
  public resetNodePublicIpEnabled() {
    this._nodePublicIpEnabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nodePublicIpEnabledInput() {
    return this._nodePublicIpEnabled;
  }

  // node_public_ip_prefix_id - computed: false, optional: true, required: false
  private _nodePublicIpPrefixId?: string; 
  public get nodePublicIpPrefixId() {
    return this.getStringAttribute('node_public_ip_prefix_id');
  }
  public set nodePublicIpPrefixId(value: string) {
    this._nodePublicIpPrefixId = value;
  }
  public resetNodePublicIpPrefixId() {
    this._nodePublicIpPrefixId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nodePublicIpPrefixIdInput() {
    return this._nodePublicIpPrefixId;
  }

  // only_critical_addons_enabled - computed: false, optional: true, required: false
  private _onlyCriticalAddonsEnabled?: boolean | cdktf.IResolvable; 
  public get onlyCriticalAddonsEnabled() {
    return this.getBooleanAttribute('only_critical_addons_enabled');
  }
  public set onlyCriticalAddonsEnabled(value: boolean | cdktf.IResolvable) {
    this._onlyCriticalAddonsEnabled = value;
  }
  public resetOnlyCriticalAddonsEnabled() {
    this._onlyCriticalAddonsEnabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get onlyCriticalAddonsEnabledInput() {
    return this._onlyCriticalAddonsEnabled;
  }

  // orchestrator_version - computed: true, optional: true, required: false
  private _orchestratorVersion?: string; 
  public get orchestratorVersion() {
    return this.getStringAttribute('orchestrator_version');
  }
  public set orchestratorVersion(value: string) {
    this._orchestratorVersion = value;
  }
  public resetOrchestratorVersion() {
    this._orchestratorVersion = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get orchestratorVersionInput() {
    return this._orchestratorVersion;
  }

  // os_disk_size_gb - computed: true, optional: true, required: false
  private _osDiskSizeGb?: number; 
  public get osDiskSizeGb() {
    return this.getNumberAttribute('os_disk_size_gb');
  }
  public set osDiskSizeGb(value: number) {
    this._osDiskSizeGb = value;
  }
  public resetOsDiskSizeGb() {
    this._osDiskSizeGb = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get osDiskSizeGbInput() {
    return this._osDiskSizeGb;
  }

  // os_disk_type - computed: false, optional: true, required: false
  private _osDiskType?: string; 
  public get osDiskType() {
    return this.getStringAttribute('os_disk_type');
  }
  public set osDiskType(value: string) {
    this._osDiskType = value;
  }
  public resetOsDiskType() {
    this._osDiskType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get osDiskTypeInput() {
    return this._osDiskType;
  }

  // os_sku - computed: true, optional: true, required: false
  private _osSku?: string; 
  public get osSku() {
    return this.getStringAttribute('os_sku');
  }
  public set osSku(value: string) {
    this._osSku = value;
  }
  public resetOsSku() {
    this._osSku = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get osSkuInput() {
    return this._osSku;
  }

  // pod_subnet_id - computed: false, optional: true, required: false
  private _podSubnetId?: string; 
  public get podSubnetId() {
    return this.getStringAttribute('pod_subnet_id');
  }
  public set podSubnetId(value: string) {
    this._podSubnetId = value;
  }
  public resetPodSubnetId() {
    this._podSubnetId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get podSubnetIdInput() {
    return this._podSubnetId;
  }

  // proximity_placement_group_id - computed: false, optional: true, required: false
  private _proximityPlacementGroupId?: string; 
  public get proximityPlacementGroupId() {
    return this.getStringAttribute('proximity_placement_group_id');
  }
  public set proximityPlacementGroupId(value: string) {
    this._proximityPlacementGroupId = value;
  }
  public resetProximityPlacementGroupId() {
    this._proximityPlacementGroupId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get proximityPlacementGroupIdInput() {
    return this._proximityPlacementGroupId;
  }

  // scale_down_mode - computed: false, optional: true, required: false
  private _scaleDownMode?: string; 
  public get scaleDownMode() {
    return this.getStringAttribute('scale_down_mode');
  }
  public set scaleDownMode(value: string) {
    this._scaleDownMode = value;
  }
  public resetScaleDownMode() {
    this._scaleDownMode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get scaleDownModeInput() {
    return this._scaleDownMode;
  }

  // snapshot_id - computed: false, optional: true, required: false
  private _snapshotId?: string; 
  public get snapshotId() {
    return this.getStringAttribute('snapshot_id');
  }
  public set snapshotId(value: string) {
    this._snapshotId = value;
  }
  public resetSnapshotId() {
    this._snapshotId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get snapshotIdInput() {
    return this._snapshotId;
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

  // temporary_name_for_rotation - computed: false, optional: true, required: false
  private _temporaryNameForRotation?: string; 
  public get temporaryNameForRotation() {
    return this.getStringAttribute('temporary_name_for_rotation');
  }
  public set temporaryNameForRotation(value: string) {
    this._temporaryNameForRotation = value;
  }
  public resetTemporaryNameForRotation() {
    this._temporaryNameForRotation = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get temporaryNameForRotationInput() {
    return this._temporaryNameForRotation;
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

  // ultra_ssd_enabled - computed: false, optional: true, required: false
  private _ultraSsdEnabled?: boolean | cdktf.IResolvable; 
  public get ultraSsdEnabled() {
    return this.getBooleanAttribute('ultra_ssd_enabled');
  }
  public set ultraSsdEnabled(value: boolean | cdktf.IResolvable) {
    this._ultraSsdEnabled = value;
  }
  public resetUltraSsdEnabled() {
    this._ultraSsdEnabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ultraSsdEnabledInput() {
    return this._ultraSsdEnabled;
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
    return this._vmSize;
  }

  // vnet_subnet_id - computed: false, optional: true, required: false
  private _vnetSubnetId?: string; 
  public get vnetSubnetId() {
    return this.getStringAttribute('vnet_subnet_id');
  }
  public set vnetSubnetId(value: string) {
    this._vnetSubnetId = value;
  }
  public resetVnetSubnetId() {
    this._vnetSubnetId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get vnetSubnetIdInput() {
    return this._vnetSubnetId;
  }

  // workload_runtime - computed: true, optional: true, required: false
  private _workloadRuntime?: string; 
  public get workloadRuntime() {
    return this.getStringAttribute('workload_runtime');
  }
  public set workloadRuntime(value: string) {
    this._workloadRuntime = value;
  }
  public resetWorkloadRuntime() {
    this._workloadRuntime = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get workloadRuntimeInput() {
    return this._workloadRuntime;
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

  // kubelet_config - computed: false, optional: true, required: false
  private _kubeletConfig = new KubernetesClusterDefaultNodePoolKubeletConfigOutputReference(this, "kubelet_config");
  public get kubeletConfig() {
    return this._kubeletConfig;
  }
  public putKubeletConfig(value: KubernetesClusterDefaultNodePoolKubeletConfig) {
    this._kubeletConfig.internalValue = value;
  }
  public resetKubeletConfig() {
    this._kubeletConfig.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get kubeletConfigInput() {
    return this._kubeletConfig.internalValue;
  }

  // linux_os_config - computed: false, optional: true, required: false
  private _linuxOsConfig = new KubernetesClusterDefaultNodePoolLinuxOsConfigOutputReference(this, "linux_os_config");
  public get linuxOsConfig() {
    return this._linuxOsConfig;
  }
  public putLinuxOsConfig(value: KubernetesClusterDefaultNodePoolLinuxOsConfig) {
    this._linuxOsConfig.internalValue = value;
  }
  public resetLinuxOsConfig() {
    this._linuxOsConfig.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get linuxOsConfigInput() {
    return this._linuxOsConfig.internalValue;
  }

  // node_network_profile - computed: false, optional: true, required: false
  private _nodeNetworkProfile = new KubernetesClusterDefaultNodePoolNodeNetworkProfileOutputReference(this, "node_network_profile");
  public get nodeNetworkProfile() {
    return this._nodeNetworkProfile;
  }
  public putNodeNetworkProfile(value: KubernetesClusterDefaultNodePoolNodeNetworkProfile) {
    this._nodeNetworkProfile.internalValue = value;
  }
  public resetNodeNetworkProfile() {
    this._nodeNetworkProfile.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nodeNetworkProfileInput() {
    return this._nodeNetworkProfile.internalValue;
  }

  // upgrade_settings - computed: false, optional: true, required: false
  private _upgradeSettings = new KubernetesClusterDefaultNodePoolUpgradeSettingsOutputReference(this, "upgrade_settings");
  public get upgradeSettings() {
    return this._upgradeSettings;
  }
  public putUpgradeSettings(value: KubernetesClusterDefaultNodePoolUpgradeSettings) {
    this._upgradeSettings.internalValue = value;
  }
  public resetUpgradeSettings() {
    this._upgradeSettings.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get upgradeSettingsInput() {
    return this._upgradeSettings.internalValue;
  }
}
export interface KubernetesClusterHttpProxyConfig {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/kubernetes_cluster#http_proxy KubernetesCluster#http_proxy}
  */
  readonly httpProxy?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/kubernetes_cluster#https_proxy KubernetesCluster#https_proxy}
  */
  readonly httpsProxy?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/kubernetes_cluster#no_proxy KubernetesCluster#no_proxy}
  */
  readonly noProxy?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/kubernetes_cluster#trusted_ca KubernetesCluster#trusted_ca}
  */
  readonly trustedCa?: string;
}

export function kubernetesClusterHttpProxyConfigToTerraform(struct?: KubernetesClusterHttpProxyConfigOutputReference | KubernetesClusterHttpProxyConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    http_proxy: cdktf.stringToTerraform(struct!.httpProxy),
    https_proxy: cdktf.stringToTerraform(struct!.httpsProxy),
    no_proxy: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.noProxy),
    trusted_ca: cdktf.stringToTerraform(struct!.trustedCa),
  }
}


export function kubernetesClusterHttpProxyConfigToHclTerraform(struct?: KubernetesClusterHttpProxyConfigOutputReference | KubernetesClusterHttpProxyConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    http_proxy: {
      value: cdktf.stringToHclTerraform(struct!.httpProxy),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    https_proxy: {
      value: cdktf.stringToHclTerraform(struct!.httpsProxy),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    no_proxy: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.noProxy),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
    trusted_ca: {
      value: cdktf.stringToHclTerraform(struct!.trustedCa),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class KubernetesClusterHttpProxyConfigOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): KubernetesClusterHttpProxyConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._httpProxy !== undefined) {
      hasAnyValues = true;
      internalValueResult.httpProxy = this._httpProxy;
    }
    if (this._httpsProxy !== undefined) {
      hasAnyValues = true;
      internalValueResult.httpsProxy = this._httpsProxy;
    }
    if (this._noProxy !== undefined) {
      hasAnyValues = true;
      internalValueResult.noProxy = this._noProxy;
    }
    if (this._trustedCa !== undefined) {
      hasAnyValues = true;
      internalValueResult.trustedCa = this._trustedCa;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: KubernetesClusterHttpProxyConfig | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._httpProxy = undefined;
      this._httpsProxy = undefined;
      this._noProxy = undefined;
      this._trustedCa = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._httpProxy = value.httpProxy;
      this._httpsProxy = value.httpsProxy;
      this._noProxy = value.noProxy;
      this._trustedCa = value.trustedCa;
    }
  }

  // http_proxy - computed: false, optional: true, required: false
  private _httpProxy?: string; 
  public get httpProxy() {
    return this.getStringAttribute('http_proxy');
  }
  public set httpProxy(value: string) {
    this._httpProxy = value;
  }
  public resetHttpProxy() {
    this._httpProxy = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get httpProxyInput() {
    return this._httpProxy;
  }

  // https_proxy - computed: false, optional: true, required: false
  private _httpsProxy?: string; 
  public get httpsProxy() {
    return this.getStringAttribute('https_proxy');
  }
  public set httpsProxy(value: string) {
    this._httpsProxy = value;
  }
  public resetHttpsProxy() {
    this._httpsProxy = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get httpsProxyInput() {
    return this._httpsProxy;
  }

  // no_proxy - computed: false, optional: true, required: false
  private _noProxy?: string[]; 
  public get noProxy() {
    return cdktf.Fn.tolist(this.getListAttribute('no_proxy'));
  }
  public set noProxy(value: string[]) {
    this._noProxy = value;
  }
  public resetNoProxy() {
    this._noProxy = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get noProxyInput() {
    return this._noProxy;
  }

  // trusted_ca - computed: false, optional: true, required: false
  private _trustedCa?: string; 
  public get trustedCa() {
    return this.getStringAttribute('trusted_ca');
  }
  public set trustedCa(value: string) {
    this._trustedCa = value;
  }
  public resetTrustedCa() {
    this._trustedCa = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get trustedCaInput() {
    return this._trustedCa;
  }
}
export interface KubernetesClusterIdentity {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/kubernetes_cluster#identity_ids KubernetesCluster#identity_ids}
  */
  readonly identityIds?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/kubernetes_cluster#type KubernetesCluster#type}
  */
  readonly type: string;
}

export function kubernetesClusterIdentityToTerraform(struct?: KubernetesClusterIdentityOutputReference | KubernetesClusterIdentity): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    identity_ids: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.identityIds),
    type: cdktf.stringToTerraform(struct!.type),
  }
}


export function kubernetesClusterIdentityToHclTerraform(struct?: KubernetesClusterIdentityOutputReference | KubernetesClusterIdentity): any {
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

export class KubernetesClusterIdentityOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): KubernetesClusterIdentity | undefined {
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

  public set internalValue(value: KubernetesClusterIdentity | undefined) {
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
export interface KubernetesClusterIngressApplicationGatewayIngressApplicationGatewayIdentity {
}

export function kubernetesClusterIngressApplicationGatewayIngressApplicationGatewayIdentityToTerraform(struct?: KubernetesClusterIngressApplicationGatewayIngressApplicationGatewayIdentity): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function kubernetesClusterIngressApplicationGatewayIngressApplicationGatewayIdentityToHclTerraform(struct?: KubernetesClusterIngressApplicationGatewayIngressApplicationGatewayIdentity): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class KubernetesClusterIngressApplicationGatewayIngressApplicationGatewayIdentityOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): KubernetesClusterIngressApplicationGatewayIngressApplicationGatewayIdentity | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: KubernetesClusterIngressApplicationGatewayIngressApplicationGatewayIdentity | undefined) {
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

export class KubernetesClusterIngressApplicationGatewayIngressApplicationGatewayIdentityList extends cdktf.ComplexList {

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
  public get(index: number): KubernetesClusterIngressApplicationGatewayIngressApplicationGatewayIdentityOutputReference {
    return new KubernetesClusterIngressApplicationGatewayIngressApplicationGatewayIdentityOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface KubernetesClusterIngressApplicationGateway {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/kubernetes_cluster#gateway_id KubernetesCluster#gateway_id}
  */
  readonly gatewayId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/kubernetes_cluster#gateway_name KubernetesCluster#gateway_name}
  */
  readonly gatewayName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/kubernetes_cluster#subnet_cidr KubernetesCluster#subnet_cidr}
  */
  readonly subnetCidr?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/kubernetes_cluster#subnet_id KubernetesCluster#subnet_id}
  */
  readonly subnetId?: string;
}

export function kubernetesClusterIngressApplicationGatewayToTerraform(struct?: KubernetesClusterIngressApplicationGatewayOutputReference | KubernetesClusterIngressApplicationGateway): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    gateway_id: cdktf.stringToTerraform(struct!.gatewayId),
    gateway_name: cdktf.stringToTerraform(struct!.gatewayName),
    subnet_cidr: cdktf.stringToTerraform(struct!.subnetCidr),
    subnet_id: cdktf.stringToTerraform(struct!.subnetId),
  }
}


export function kubernetesClusterIngressApplicationGatewayToHclTerraform(struct?: KubernetesClusterIngressApplicationGatewayOutputReference | KubernetesClusterIngressApplicationGateway): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    gateway_id: {
      value: cdktf.stringToHclTerraform(struct!.gatewayId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    gateway_name: {
      value: cdktf.stringToHclTerraform(struct!.gatewayName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    subnet_cidr: {
      value: cdktf.stringToHclTerraform(struct!.subnetCidr),
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

export class KubernetesClusterIngressApplicationGatewayOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): KubernetesClusterIngressApplicationGateway | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._gatewayId !== undefined) {
      hasAnyValues = true;
      internalValueResult.gatewayId = this._gatewayId;
    }
    if (this._gatewayName !== undefined) {
      hasAnyValues = true;
      internalValueResult.gatewayName = this._gatewayName;
    }
    if (this._subnetCidr !== undefined) {
      hasAnyValues = true;
      internalValueResult.subnetCidr = this._subnetCidr;
    }
    if (this._subnetId !== undefined) {
      hasAnyValues = true;
      internalValueResult.subnetId = this._subnetId;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: KubernetesClusterIngressApplicationGateway | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._gatewayId = undefined;
      this._gatewayName = undefined;
      this._subnetCidr = undefined;
      this._subnetId = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._gatewayId = value.gatewayId;
      this._gatewayName = value.gatewayName;
      this._subnetCidr = value.subnetCidr;
      this._subnetId = value.subnetId;
    }
  }

  // effective_gateway_id - computed: true, optional: false, required: false
  public get effectiveGatewayId() {
    return this.getStringAttribute('effective_gateway_id');
  }

  // gateway_id - computed: false, optional: true, required: false
  private _gatewayId?: string; 
  public get gatewayId() {
    return this.getStringAttribute('gateway_id');
  }
  public set gatewayId(value: string) {
    this._gatewayId = value;
  }
  public resetGatewayId() {
    this._gatewayId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get gatewayIdInput() {
    return this._gatewayId;
  }

  // gateway_name - computed: false, optional: true, required: false
  private _gatewayName?: string; 
  public get gatewayName() {
    return this.getStringAttribute('gateway_name');
  }
  public set gatewayName(value: string) {
    this._gatewayName = value;
  }
  public resetGatewayName() {
    this._gatewayName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get gatewayNameInput() {
    return this._gatewayName;
  }

  // ingress_application_gateway_identity - computed: true, optional: false, required: false
  private _ingressApplicationGatewayIdentity = new KubernetesClusterIngressApplicationGatewayIngressApplicationGatewayIdentityList(this, "ingress_application_gateway_identity", false);
  public get ingressApplicationGatewayIdentity() {
    return this._ingressApplicationGatewayIdentity;
  }

  // subnet_cidr - computed: false, optional: true, required: false
  private _subnetCidr?: string; 
  public get subnetCidr() {
    return this.getStringAttribute('subnet_cidr');
  }
  public set subnetCidr(value: string) {
    this._subnetCidr = value;
  }
  public resetSubnetCidr() {
    this._subnetCidr = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get subnetCidrInput() {
    return this._subnetCidr;
  }

  // subnet_id - computed: false, optional: true, required: false
  private _subnetId?: string; 
  public get subnetId() {
    return this.getStringAttribute('subnet_id');
  }
  public set subnetId(value: string) {
    this._subnetId = value;
  }
  public resetSubnetId() {
    this._subnetId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get subnetIdInput() {
    return this._subnetId;
  }
}
export interface KubernetesClusterKeyManagementService {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/kubernetes_cluster#key_vault_key_id KubernetesCluster#key_vault_key_id}
  */
  readonly keyVaultKeyId: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/kubernetes_cluster#key_vault_network_access KubernetesCluster#key_vault_network_access}
  */
  readonly keyVaultNetworkAccess?: string;
}

export function kubernetesClusterKeyManagementServiceToTerraform(struct?: KubernetesClusterKeyManagementServiceOutputReference | KubernetesClusterKeyManagementService): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    key_vault_key_id: cdktf.stringToTerraform(struct!.keyVaultKeyId),
    key_vault_network_access: cdktf.stringToTerraform(struct!.keyVaultNetworkAccess),
  }
}


export function kubernetesClusterKeyManagementServiceToHclTerraform(struct?: KubernetesClusterKeyManagementServiceOutputReference | KubernetesClusterKeyManagementService): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    key_vault_key_id: {
      value: cdktf.stringToHclTerraform(struct!.keyVaultKeyId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    key_vault_network_access: {
      value: cdktf.stringToHclTerraform(struct!.keyVaultNetworkAccess),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class KubernetesClusterKeyManagementServiceOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): KubernetesClusterKeyManagementService | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._keyVaultKeyId !== undefined) {
      hasAnyValues = true;
      internalValueResult.keyVaultKeyId = this._keyVaultKeyId;
    }
    if (this._keyVaultNetworkAccess !== undefined) {
      hasAnyValues = true;
      internalValueResult.keyVaultNetworkAccess = this._keyVaultNetworkAccess;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: KubernetesClusterKeyManagementService | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._keyVaultKeyId = undefined;
      this._keyVaultNetworkAccess = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._keyVaultKeyId = value.keyVaultKeyId;
      this._keyVaultNetworkAccess = value.keyVaultNetworkAccess;
    }
  }

  // key_vault_key_id - computed: false, optional: false, required: true
  private _keyVaultKeyId?: string; 
  public get keyVaultKeyId() {
    return this.getStringAttribute('key_vault_key_id');
  }
  public set keyVaultKeyId(value: string) {
    this._keyVaultKeyId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get keyVaultKeyIdInput() {
    return this._keyVaultKeyId;
  }

  // key_vault_network_access - computed: false, optional: true, required: false
  private _keyVaultNetworkAccess?: string; 
  public get keyVaultNetworkAccess() {
    return this.getStringAttribute('key_vault_network_access');
  }
  public set keyVaultNetworkAccess(value: string) {
    this._keyVaultNetworkAccess = value;
  }
  public resetKeyVaultNetworkAccess() {
    this._keyVaultNetworkAccess = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get keyVaultNetworkAccessInput() {
    return this._keyVaultNetworkAccess;
  }
}
export interface KubernetesClusterKeyVaultSecretsProviderSecretIdentity {
}

export function kubernetesClusterKeyVaultSecretsProviderSecretIdentityToTerraform(struct?: KubernetesClusterKeyVaultSecretsProviderSecretIdentity): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function kubernetesClusterKeyVaultSecretsProviderSecretIdentityToHclTerraform(struct?: KubernetesClusterKeyVaultSecretsProviderSecretIdentity): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class KubernetesClusterKeyVaultSecretsProviderSecretIdentityOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): KubernetesClusterKeyVaultSecretsProviderSecretIdentity | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: KubernetesClusterKeyVaultSecretsProviderSecretIdentity | undefined) {
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

export class KubernetesClusterKeyVaultSecretsProviderSecretIdentityList extends cdktf.ComplexList {

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
  public get(index: number): KubernetesClusterKeyVaultSecretsProviderSecretIdentityOutputReference {
    return new KubernetesClusterKeyVaultSecretsProviderSecretIdentityOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface KubernetesClusterKeyVaultSecretsProvider {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/kubernetes_cluster#secret_rotation_enabled KubernetesCluster#secret_rotation_enabled}
  */
  readonly secretRotationEnabled?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/kubernetes_cluster#secret_rotation_interval KubernetesCluster#secret_rotation_interval}
  */
  readonly secretRotationInterval?: string;
}

export function kubernetesClusterKeyVaultSecretsProviderToTerraform(struct?: KubernetesClusterKeyVaultSecretsProviderOutputReference | KubernetesClusterKeyVaultSecretsProvider): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    secret_rotation_enabled: cdktf.booleanToTerraform(struct!.secretRotationEnabled),
    secret_rotation_interval: cdktf.stringToTerraform(struct!.secretRotationInterval),
  }
}


export function kubernetesClusterKeyVaultSecretsProviderToHclTerraform(struct?: KubernetesClusterKeyVaultSecretsProviderOutputReference | KubernetesClusterKeyVaultSecretsProvider): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    secret_rotation_enabled: {
      value: cdktf.booleanToHclTerraform(struct!.secretRotationEnabled),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    secret_rotation_interval: {
      value: cdktf.stringToHclTerraform(struct!.secretRotationInterval),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class KubernetesClusterKeyVaultSecretsProviderOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): KubernetesClusterKeyVaultSecretsProvider | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._secretRotationEnabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.secretRotationEnabled = this._secretRotationEnabled;
    }
    if (this._secretRotationInterval !== undefined) {
      hasAnyValues = true;
      internalValueResult.secretRotationInterval = this._secretRotationInterval;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: KubernetesClusterKeyVaultSecretsProvider | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._secretRotationEnabled = undefined;
      this._secretRotationInterval = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._secretRotationEnabled = value.secretRotationEnabled;
      this._secretRotationInterval = value.secretRotationInterval;
    }
  }

  // secret_identity - computed: true, optional: false, required: false
  private _secretIdentity = new KubernetesClusterKeyVaultSecretsProviderSecretIdentityList(this, "secret_identity", false);
  public get secretIdentity() {
    return this._secretIdentity;
  }

  // secret_rotation_enabled - computed: false, optional: true, required: false
  private _secretRotationEnabled?: boolean | cdktf.IResolvable; 
  public get secretRotationEnabled() {
    return this.getBooleanAttribute('secret_rotation_enabled');
  }
  public set secretRotationEnabled(value: boolean | cdktf.IResolvable) {
    this._secretRotationEnabled = value;
  }
  public resetSecretRotationEnabled() {
    this._secretRotationEnabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get secretRotationEnabledInput() {
    return this._secretRotationEnabled;
  }

  // secret_rotation_interval - computed: false, optional: true, required: false
  private _secretRotationInterval?: string; 
  public get secretRotationInterval() {
    return this.getStringAttribute('secret_rotation_interval');
  }
  public set secretRotationInterval(value: string) {
    this._secretRotationInterval = value;
  }
  public resetSecretRotationInterval() {
    this._secretRotationInterval = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get secretRotationIntervalInput() {
    return this._secretRotationInterval;
  }
}
export interface KubernetesClusterKubeletIdentity {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/kubernetes_cluster#client_id KubernetesCluster#client_id}
  */
  readonly clientId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/kubernetes_cluster#object_id KubernetesCluster#object_id}
  */
  readonly objectId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/kubernetes_cluster#user_assigned_identity_id KubernetesCluster#user_assigned_identity_id}
  */
  readonly userAssignedIdentityId?: string;
}

export function kubernetesClusterKubeletIdentityToTerraform(struct?: KubernetesClusterKubeletIdentityOutputReference | KubernetesClusterKubeletIdentity): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    client_id: cdktf.stringToTerraform(struct!.clientId),
    object_id: cdktf.stringToTerraform(struct!.objectId),
    user_assigned_identity_id: cdktf.stringToTerraform(struct!.userAssignedIdentityId),
  }
}


export function kubernetesClusterKubeletIdentityToHclTerraform(struct?: KubernetesClusterKubeletIdentityOutputReference | KubernetesClusterKubeletIdentity): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    client_id: {
      value: cdktf.stringToHclTerraform(struct!.clientId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    object_id: {
      value: cdktf.stringToHclTerraform(struct!.objectId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    user_assigned_identity_id: {
      value: cdktf.stringToHclTerraform(struct!.userAssignedIdentityId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class KubernetesClusterKubeletIdentityOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): KubernetesClusterKubeletIdentity | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._clientId !== undefined) {
      hasAnyValues = true;
      internalValueResult.clientId = this._clientId;
    }
    if (this._objectId !== undefined) {
      hasAnyValues = true;
      internalValueResult.objectId = this._objectId;
    }
    if (this._userAssignedIdentityId !== undefined) {
      hasAnyValues = true;
      internalValueResult.userAssignedIdentityId = this._userAssignedIdentityId;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: KubernetesClusterKubeletIdentity | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._clientId = undefined;
      this._objectId = undefined;
      this._userAssignedIdentityId = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._clientId = value.clientId;
      this._objectId = value.objectId;
      this._userAssignedIdentityId = value.userAssignedIdentityId;
    }
  }

  // client_id - computed: true, optional: true, required: false
  private _clientId?: string; 
  public get clientId() {
    return this.getStringAttribute('client_id');
  }
  public set clientId(value: string) {
    this._clientId = value;
  }
  public resetClientId() {
    this._clientId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get clientIdInput() {
    return this._clientId;
  }

  // object_id - computed: true, optional: true, required: false
  private _objectId?: string; 
  public get objectId() {
    return this.getStringAttribute('object_id');
  }
  public set objectId(value: string) {
    this._objectId = value;
  }
  public resetObjectId() {
    this._objectId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get objectIdInput() {
    return this._objectId;
  }

  // user_assigned_identity_id - computed: true, optional: true, required: false
  private _userAssignedIdentityId?: string; 
  public get userAssignedIdentityId() {
    return this.getStringAttribute('user_assigned_identity_id');
  }
  public set userAssignedIdentityId(value: string) {
    this._userAssignedIdentityId = value;
  }
  public resetUserAssignedIdentityId() {
    this._userAssignedIdentityId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get userAssignedIdentityIdInput() {
    return this._userAssignedIdentityId;
  }
}
export interface KubernetesClusterLinuxProfileSshKey {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/kubernetes_cluster#key_data KubernetesCluster#key_data}
  */
  readonly keyData: string;
}

export function kubernetesClusterLinuxProfileSshKeyToTerraform(struct?: KubernetesClusterLinuxProfileSshKeyOutputReference | KubernetesClusterLinuxProfileSshKey): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    key_data: cdktf.stringToTerraform(struct!.keyData),
  }
}


export function kubernetesClusterLinuxProfileSshKeyToHclTerraform(struct?: KubernetesClusterLinuxProfileSshKeyOutputReference | KubernetesClusterLinuxProfileSshKey): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    key_data: {
      value: cdktf.stringToHclTerraform(struct!.keyData),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class KubernetesClusterLinuxProfileSshKeyOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): KubernetesClusterLinuxProfileSshKey | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._keyData !== undefined) {
      hasAnyValues = true;
      internalValueResult.keyData = this._keyData;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: KubernetesClusterLinuxProfileSshKey | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._keyData = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._keyData = value.keyData;
    }
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
    return this._keyData;
  }
}
export interface KubernetesClusterLinuxProfile {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/kubernetes_cluster#admin_username KubernetesCluster#admin_username}
  */
  readonly adminUsername: string;
  /**
  * ssh_key block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/kubernetes_cluster#ssh_key KubernetesCluster#ssh_key}
  */
  readonly sshKey: KubernetesClusterLinuxProfileSshKey;
}

export function kubernetesClusterLinuxProfileToTerraform(struct?: KubernetesClusterLinuxProfileOutputReference | KubernetesClusterLinuxProfile): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    admin_username: cdktf.stringToTerraform(struct!.adminUsername),
    ssh_key: kubernetesClusterLinuxProfileSshKeyToTerraform(struct!.sshKey),
  }
}


export function kubernetesClusterLinuxProfileToHclTerraform(struct?: KubernetesClusterLinuxProfileOutputReference | KubernetesClusterLinuxProfile): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    admin_username: {
      value: cdktf.stringToHclTerraform(struct!.adminUsername),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    ssh_key: {
      value: kubernetesClusterLinuxProfileSshKeyToHclTerraform(struct!.sshKey),
      isBlock: true,
      type: "list",
      storageClassType: "KubernetesClusterLinuxProfileSshKeyList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class KubernetesClusterLinuxProfileOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): KubernetesClusterLinuxProfile | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._adminUsername !== undefined) {
      hasAnyValues = true;
      internalValueResult.adminUsername = this._adminUsername;
    }
    if (this._sshKey?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.sshKey = this._sshKey?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: KubernetesClusterLinuxProfile | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._adminUsername = undefined;
      this._sshKey.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._adminUsername = value.adminUsername;
      this._sshKey.internalValue = value.sshKey;
    }
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
    return this._adminUsername;
  }

  // ssh_key - computed: false, optional: false, required: true
  private _sshKey = new KubernetesClusterLinuxProfileSshKeyOutputReference(this, "ssh_key");
  public get sshKey() {
    return this._sshKey;
  }
  public putSshKey(value: KubernetesClusterLinuxProfileSshKey) {
    this._sshKey.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get sshKeyInput() {
    return this._sshKey.internalValue;
  }
}
export interface KubernetesClusterMaintenanceWindowAllowed {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/kubernetes_cluster#day KubernetesCluster#day}
  */
  readonly day: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/kubernetes_cluster#hours KubernetesCluster#hours}
  */
  readonly hours: number[];
}

export function kubernetesClusterMaintenanceWindowAllowedToTerraform(struct?: KubernetesClusterMaintenanceWindowAllowed | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    day: cdktf.stringToTerraform(struct!.day),
    hours: cdktf.listMapper(cdktf.numberToTerraform, false)(struct!.hours),
  }
}


export function kubernetesClusterMaintenanceWindowAllowedToHclTerraform(struct?: KubernetesClusterMaintenanceWindowAllowed | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    day: {
      value: cdktf.stringToHclTerraform(struct!.day),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    hours: {
      value: cdktf.listMapperHcl(cdktf.numberToHclTerraform, false)(struct!.hours),
      isBlock: false,
      type: "set",
      storageClassType: "numberList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class KubernetesClusterMaintenanceWindowAllowedOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): KubernetesClusterMaintenanceWindowAllowed | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._day !== undefined) {
      hasAnyValues = true;
      internalValueResult.day = this._day;
    }
    if (this._hours !== undefined) {
      hasAnyValues = true;
      internalValueResult.hours = this._hours;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: KubernetesClusterMaintenanceWindowAllowed | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._day = undefined;
      this._hours = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._day = value.day;
      this._hours = value.hours;
    }
  }

  // day - computed: false, optional: false, required: true
  private _day?: string; 
  public get day() {
    return this.getStringAttribute('day');
  }
  public set day(value: string) {
    this._day = value;
  }
  // Temporarily expose input value. Use with caution.
  public get dayInput() {
    return this._day;
  }

  // hours - computed: false, optional: false, required: true
  private _hours?: number[]; 
  public get hours() {
    return cdktf.Token.asNumberList(cdktf.Fn.tolist(this.getNumberListAttribute('hours')));
  }
  public set hours(value: number[]) {
    this._hours = value;
  }
  // Temporarily expose input value. Use with caution.
  public get hoursInput() {
    return this._hours;
  }
}

export class KubernetesClusterMaintenanceWindowAllowedList extends cdktf.ComplexList {
  public internalValue? : KubernetesClusterMaintenanceWindowAllowed[] | cdktf.IResolvable

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
  public get(index: number): KubernetesClusterMaintenanceWindowAllowedOutputReference {
    return new KubernetesClusterMaintenanceWindowAllowedOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface KubernetesClusterMaintenanceWindowNotAllowed {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/kubernetes_cluster#end KubernetesCluster#end}
  */
  readonly end: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/kubernetes_cluster#start KubernetesCluster#start}
  */
  readonly start: string;
}

export function kubernetesClusterMaintenanceWindowNotAllowedToTerraform(struct?: KubernetesClusterMaintenanceWindowNotAllowed | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    end: cdktf.stringToTerraform(struct!.end),
    start: cdktf.stringToTerraform(struct!.start),
  }
}


export function kubernetesClusterMaintenanceWindowNotAllowedToHclTerraform(struct?: KubernetesClusterMaintenanceWindowNotAllowed | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    end: {
      value: cdktf.stringToHclTerraform(struct!.end),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    start: {
      value: cdktf.stringToHclTerraform(struct!.start),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class KubernetesClusterMaintenanceWindowNotAllowedOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): KubernetesClusterMaintenanceWindowNotAllowed | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._end !== undefined) {
      hasAnyValues = true;
      internalValueResult.end = this._end;
    }
    if (this._start !== undefined) {
      hasAnyValues = true;
      internalValueResult.start = this._start;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: KubernetesClusterMaintenanceWindowNotAllowed | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._end = undefined;
      this._start = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._end = value.end;
      this._start = value.start;
    }
  }

  // end - computed: false, optional: false, required: true
  private _end?: string; 
  public get end() {
    return this.getStringAttribute('end');
  }
  public set end(value: string) {
    this._end = value;
  }
  // Temporarily expose input value. Use with caution.
  public get endInput() {
    return this._end;
  }

  // start - computed: false, optional: false, required: true
  private _start?: string; 
  public get start() {
    return this.getStringAttribute('start');
  }
  public set start(value: string) {
    this._start = value;
  }
  // Temporarily expose input value. Use with caution.
  public get startInput() {
    return this._start;
  }
}

export class KubernetesClusterMaintenanceWindowNotAllowedList extends cdktf.ComplexList {
  public internalValue? : KubernetesClusterMaintenanceWindowNotAllowed[] | cdktf.IResolvable

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
  public get(index: number): KubernetesClusterMaintenanceWindowNotAllowedOutputReference {
    return new KubernetesClusterMaintenanceWindowNotAllowedOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface KubernetesClusterMaintenanceWindow {
  /**
  * allowed block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/kubernetes_cluster#allowed KubernetesCluster#allowed}
  */
  readonly allowed?: KubernetesClusterMaintenanceWindowAllowed[] | cdktf.IResolvable;
  /**
  * not_allowed block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/kubernetes_cluster#not_allowed KubernetesCluster#not_allowed}
  */
  readonly notAllowed?: KubernetesClusterMaintenanceWindowNotAllowed[] | cdktf.IResolvable;
}

export function kubernetesClusterMaintenanceWindowToTerraform(struct?: KubernetesClusterMaintenanceWindowOutputReference | KubernetesClusterMaintenanceWindow): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    allowed: cdktf.listMapper(kubernetesClusterMaintenanceWindowAllowedToTerraform, true)(struct!.allowed),
    not_allowed: cdktf.listMapper(kubernetesClusterMaintenanceWindowNotAllowedToTerraform, true)(struct!.notAllowed),
  }
}


export function kubernetesClusterMaintenanceWindowToHclTerraform(struct?: KubernetesClusterMaintenanceWindowOutputReference | KubernetesClusterMaintenanceWindow): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    allowed: {
      value: cdktf.listMapperHcl(kubernetesClusterMaintenanceWindowAllowedToHclTerraform, true)(struct!.allowed),
      isBlock: true,
      type: "set",
      storageClassType: "KubernetesClusterMaintenanceWindowAllowedList",
    },
    not_allowed: {
      value: cdktf.listMapperHcl(kubernetesClusterMaintenanceWindowNotAllowedToHclTerraform, true)(struct!.notAllowed),
      isBlock: true,
      type: "set",
      storageClassType: "KubernetesClusterMaintenanceWindowNotAllowedList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class KubernetesClusterMaintenanceWindowOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): KubernetesClusterMaintenanceWindow | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._allowed?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.allowed = this._allowed?.internalValue;
    }
    if (this._notAllowed?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.notAllowed = this._notAllowed?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: KubernetesClusterMaintenanceWindow | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._allowed.internalValue = undefined;
      this._notAllowed.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._allowed.internalValue = value.allowed;
      this._notAllowed.internalValue = value.notAllowed;
    }
  }

  // allowed - computed: false, optional: true, required: false
  private _allowed = new KubernetesClusterMaintenanceWindowAllowedList(this, "allowed", true);
  public get allowed() {
    return this._allowed;
  }
  public putAllowed(value: KubernetesClusterMaintenanceWindowAllowed[] | cdktf.IResolvable) {
    this._allowed.internalValue = value;
  }
  public resetAllowed() {
    this._allowed.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get allowedInput() {
    return this._allowed.internalValue;
  }

  // not_allowed - computed: false, optional: true, required: false
  private _notAllowed = new KubernetesClusterMaintenanceWindowNotAllowedList(this, "not_allowed", true);
  public get notAllowed() {
    return this._notAllowed;
  }
  public putNotAllowed(value: KubernetesClusterMaintenanceWindowNotAllowed[] | cdktf.IResolvable) {
    this._notAllowed.internalValue = value;
  }
  public resetNotAllowed() {
    this._notAllowed.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get notAllowedInput() {
    return this._notAllowed.internalValue;
  }
}
export interface KubernetesClusterMaintenanceWindowAutoUpgradeNotAllowed {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/kubernetes_cluster#end KubernetesCluster#end}
  */
  readonly end: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/kubernetes_cluster#start KubernetesCluster#start}
  */
  readonly start: string;
}

export function kubernetesClusterMaintenanceWindowAutoUpgradeNotAllowedToTerraform(struct?: KubernetesClusterMaintenanceWindowAutoUpgradeNotAllowed | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    end: cdktf.stringToTerraform(struct!.end),
    start: cdktf.stringToTerraform(struct!.start),
  }
}


export function kubernetesClusterMaintenanceWindowAutoUpgradeNotAllowedToHclTerraform(struct?: KubernetesClusterMaintenanceWindowAutoUpgradeNotAllowed | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    end: {
      value: cdktf.stringToHclTerraform(struct!.end),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    start: {
      value: cdktf.stringToHclTerraform(struct!.start),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class KubernetesClusterMaintenanceWindowAutoUpgradeNotAllowedOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): KubernetesClusterMaintenanceWindowAutoUpgradeNotAllowed | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._end !== undefined) {
      hasAnyValues = true;
      internalValueResult.end = this._end;
    }
    if (this._start !== undefined) {
      hasAnyValues = true;
      internalValueResult.start = this._start;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: KubernetesClusterMaintenanceWindowAutoUpgradeNotAllowed | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._end = undefined;
      this._start = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._end = value.end;
      this._start = value.start;
    }
  }

  // end - computed: false, optional: false, required: true
  private _end?: string; 
  public get end() {
    return this.getStringAttribute('end');
  }
  public set end(value: string) {
    this._end = value;
  }
  // Temporarily expose input value. Use with caution.
  public get endInput() {
    return this._end;
  }

  // start - computed: false, optional: false, required: true
  private _start?: string; 
  public get start() {
    return this.getStringAttribute('start');
  }
  public set start(value: string) {
    this._start = value;
  }
  // Temporarily expose input value. Use with caution.
  public get startInput() {
    return this._start;
  }
}

export class KubernetesClusterMaintenanceWindowAutoUpgradeNotAllowedList extends cdktf.ComplexList {
  public internalValue? : KubernetesClusterMaintenanceWindowAutoUpgradeNotAllowed[] | cdktf.IResolvable

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
  public get(index: number): KubernetesClusterMaintenanceWindowAutoUpgradeNotAllowedOutputReference {
    return new KubernetesClusterMaintenanceWindowAutoUpgradeNotAllowedOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface KubernetesClusterMaintenanceWindowAutoUpgrade {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/kubernetes_cluster#day_of_month KubernetesCluster#day_of_month}
  */
  readonly dayOfMonth?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/kubernetes_cluster#day_of_week KubernetesCluster#day_of_week}
  */
  readonly dayOfWeek?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/kubernetes_cluster#duration KubernetesCluster#duration}
  */
  readonly duration: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/kubernetes_cluster#frequency KubernetesCluster#frequency}
  */
  readonly frequency: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/kubernetes_cluster#interval KubernetesCluster#interval}
  */
  readonly interval: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/kubernetes_cluster#start_date KubernetesCluster#start_date}
  */
  readonly startDate?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/kubernetes_cluster#start_time KubernetesCluster#start_time}
  */
  readonly startTime?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/kubernetes_cluster#utc_offset KubernetesCluster#utc_offset}
  */
  readonly utcOffset?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/kubernetes_cluster#week_index KubernetesCluster#week_index}
  */
  readonly weekIndex?: string;
  /**
  * not_allowed block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/kubernetes_cluster#not_allowed KubernetesCluster#not_allowed}
  */
  readonly notAllowed?: KubernetesClusterMaintenanceWindowAutoUpgradeNotAllowed[] | cdktf.IResolvable;
}

export function kubernetesClusterMaintenanceWindowAutoUpgradeToTerraform(struct?: KubernetesClusterMaintenanceWindowAutoUpgradeOutputReference | KubernetesClusterMaintenanceWindowAutoUpgrade): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    day_of_month: cdktf.numberToTerraform(struct!.dayOfMonth),
    day_of_week: cdktf.stringToTerraform(struct!.dayOfWeek),
    duration: cdktf.numberToTerraform(struct!.duration),
    frequency: cdktf.stringToTerraform(struct!.frequency),
    interval: cdktf.numberToTerraform(struct!.interval),
    start_date: cdktf.stringToTerraform(struct!.startDate),
    start_time: cdktf.stringToTerraform(struct!.startTime),
    utc_offset: cdktf.stringToTerraform(struct!.utcOffset),
    week_index: cdktf.stringToTerraform(struct!.weekIndex),
    not_allowed: cdktf.listMapper(kubernetesClusterMaintenanceWindowAutoUpgradeNotAllowedToTerraform, true)(struct!.notAllowed),
  }
}


export function kubernetesClusterMaintenanceWindowAutoUpgradeToHclTerraform(struct?: KubernetesClusterMaintenanceWindowAutoUpgradeOutputReference | KubernetesClusterMaintenanceWindowAutoUpgrade): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    day_of_month: {
      value: cdktf.numberToHclTerraform(struct!.dayOfMonth),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    day_of_week: {
      value: cdktf.stringToHclTerraform(struct!.dayOfWeek),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    duration: {
      value: cdktf.numberToHclTerraform(struct!.duration),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    frequency: {
      value: cdktf.stringToHclTerraform(struct!.frequency),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    interval: {
      value: cdktf.numberToHclTerraform(struct!.interval),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    start_date: {
      value: cdktf.stringToHclTerraform(struct!.startDate),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    start_time: {
      value: cdktf.stringToHclTerraform(struct!.startTime),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    utc_offset: {
      value: cdktf.stringToHclTerraform(struct!.utcOffset),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    week_index: {
      value: cdktf.stringToHclTerraform(struct!.weekIndex),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    not_allowed: {
      value: cdktf.listMapperHcl(kubernetesClusterMaintenanceWindowAutoUpgradeNotAllowedToHclTerraform, true)(struct!.notAllowed),
      isBlock: true,
      type: "set",
      storageClassType: "KubernetesClusterMaintenanceWindowAutoUpgradeNotAllowedList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class KubernetesClusterMaintenanceWindowAutoUpgradeOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): KubernetesClusterMaintenanceWindowAutoUpgrade | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._dayOfMonth !== undefined) {
      hasAnyValues = true;
      internalValueResult.dayOfMonth = this._dayOfMonth;
    }
    if (this._dayOfWeek !== undefined) {
      hasAnyValues = true;
      internalValueResult.dayOfWeek = this._dayOfWeek;
    }
    if (this._duration !== undefined) {
      hasAnyValues = true;
      internalValueResult.duration = this._duration;
    }
    if (this._frequency !== undefined) {
      hasAnyValues = true;
      internalValueResult.frequency = this._frequency;
    }
    if (this._interval !== undefined) {
      hasAnyValues = true;
      internalValueResult.interval = this._interval;
    }
    if (this._startDate !== undefined) {
      hasAnyValues = true;
      internalValueResult.startDate = this._startDate;
    }
    if (this._startTime !== undefined) {
      hasAnyValues = true;
      internalValueResult.startTime = this._startTime;
    }
    if (this._utcOffset !== undefined) {
      hasAnyValues = true;
      internalValueResult.utcOffset = this._utcOffset;
    }
    if (this._weekIndex !== undefined) {
      hasAnyValues = true;
      internalValueResult.weekIndex = this._weekIndex;
    }
    if (this._notAllowed?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.notAllowed = this._notAllowed?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: KubernetesClusterMaintenanceWindowAutoUpgrade | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._dayOfMonth = undefined;
      this._dayOfWeek = undefined;
      this._duration = undefined;
      this._frequency = undefined;
      this._interval = undefined;
      this._startDate = undefined;
      this._startTime = undefined;
      this._utcOffset = undefined;
      this._weekIndex = undefined;
      this._notAllowed.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._dayOfMonth = value.dayOfMonth;
      this._dayOfWeek = value.dayOfWeek;
      this._duration = value.duration;
      this._frequency = value.frequency;
      this._interval = value.interval;
      this._startDate = value.startDate;
      this._startTime = value.startTime;
      this._utcOffset = value.utcOffset;
      this._weekIndex = value.weekIndex;
      this._notAllowed.internalValue = value.notAllowed;
    }
  }

  // day_of_month - computed: false, optional: true, required: false
  private _dayOfMonth?: number; 
  public get dayOfMonth() {
    return this.getNumberAttribute('day_of_month');
  }
  public set dayOfMonth(value: number) {
    this._dayOfMonth = value;
  }
  public resetDayOfMonth() {
    this._dayOfMonth = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dayOfMonthInput() {
    return this._dayOfMonth;
  }

  // day_of_week - computed: false, optional: true, required: false
  private _dayOfWeek?: string; 
  public get dayOfWeek() {
    return this.getStringAttribute('day_of_week');
  }
  public set dayOfWeek(value: string) {
    this._dayOfWeek = value;
  }
  public resetDayOfWeek() {
    this._dayOfWeek = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dayOfWeekInput() {
    return this._dayOfWeek;
  }

  // duration - computed: false, optional: false, required: true
  private _duration?: number; 
  public get duration() {
    return this.getNumberAttribute('duration');
  }
  public set duration(value: number) {
    this._duration = value;
  }
  // Temporarily expose input value. Use with caution.
  public get durationInput() {
    return this._duration;
  }

  // frequency - computed: false, optional: false, required: true
  private _frequency?: string; 
  public get frequency() {
    return this.getStringAttribute('frequency');
  }
  public set frequency(value: string) {
    this._frequency = value;
  }
  // Temporarily expose input value. Use with caution.
  public get frequencyInput() {
    return this._frequency;
  }

  // interval - computed: false, optional: false, required: true
  private _interval?: number; 
  public get interval() {
    return this.getNumberAttribute('interval');
  }
  public set interval(value: number) {
    this._interval = value;
  }
  // Temporarily expose input value. Use with caution.
  public get intervalInput() {
    return this._interval;
  }

  // start_date - computed: true, optional: true, required: false
  private _startDate?: string; 
  public get startDate() {
    return this.getStringAttribute('start_date');
  }
  public set startDate(value: string) {
    this._startDate = value;
  }
  public resetStartDate() {
    this._startDate = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get startDateInput() {
    return this._startDate;
  }

  // start_time - computed: false, optional: true, required: false
  private _startTime?: string; 
  public get startTime() {
    return this.getStringAttribute('start_time');
  }
  public set startTime(value: string) {
    this._startTime = value;
  }
  public resetStartTime() {
    this._startTime = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get startTimeInput() {
    return this._startTime;
  }

  // utc_offset - computed: false, optional: true, required: false
  private _utcOffset?: string; 
  public get utcOffset() {
    return this.getStringAttribute('utc_offset');
  }
  public set utcOffset(value: string) {
    this._utcOffset = value;
  }
  public resetUtcOffset() {
    this._utcOffset = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get utcOffsetInput() {
    return this._utcOffset;
  }

  // week_index - computed: false, optional: true, required: false
  private _weekIndex?: string; 
  public get weekIndex() {
    return this.getStringAttribute('week_index');
  }
  public set weekIndex(value: string) {
    this._weekIndex = value;
  }
  public resetWeekIndex() {
    this._weekIndex = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get weekIndexInput() {
    return this._weekIndex;
  }

  // not_allowed - computed: false, optional: true, required: false
  private _notAllowed = new KubernetesClusterMaintenanceWindowAutoUpgradeNotAllowedList(this, "not_allowed", true);
  public get notAllowed() {
    return this._notAllowed;
  }
  public putNotAllowed(value: KubernetesClusterMaintenanceWindowAutoUpgradeNotAllowed[] | cdktf.IResolvable) {
    this._notAllowed.internalValue = value;
  }
  public resetNotAllowed() {
    this._notAllowed.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get notAllowedInput() {
    return this._notAllowed.internalValue;
  }
}
export interface KubernetesClusterMaintenanceWindowNodeOsNotAllowed {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/kubernetes_cluster#end KubernetesCluster#end}
  */
  readonly end: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/kubernetes_cluster#start KubernetesCluster#start}
  */
  readonly start: string;
}

export function kubernetesClusterMaintenanceWindowNodeOsNotAllowedToTerraform(struct?: KubernetesClusterMaintenanceWindowNodeOsNotAllowed | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    end: cdktf.stringToTerraform(struct!.end),
    start: cdktf.stringToTerraform(struct!.start),
  }
}


export function kubernetesClusterMaintenanceWindowNodeOsNotAllowedToHclTerraform(struct?: KubernetesClusterMaintenanceWindowNodeOsNotAllowed | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    end: {
      value: cdktf.stringToHclTerraform(struct!.end),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    start: {
      value: cdktf.stringToHclTerraform(struct!.start),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class KubernetesClusterMaintenanceWindowNodeOsNotAllowedOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): KubernetesClusterMaintenanceWindowNodeOsNotAllowed | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._end !== undefined) {
      hasAnyValues = true;
      internalValueResult.end = this._end;
    }
    if (this._start !== undefined) {
      hasAnyValues = true;
      internalValueResult.start = this._start;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: KubernetesClusterMaintenanceWindowNodeOsNotAllowed | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._end = undefined;
      this._start = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._end = value.end;
      this._start = value.start;
    }
  }

  // end - computed: false, optional: false, required: true
  private _end?: string; 
  public get end() {
    return this.getStringAttribute('end');
  }
  public set end(value: string) {
    this._end = value;
  }
  // Temporarily expose input value. Use with caution.
  public get endInput() {
    return this._end;
  }

  // start - computed: false, optional: false, required: true
  private _start?: string; 
  public get start() {
    return this.getStringAttribute('start');
  }
  public set start(value: string) {
    this._start = value;
  }
  // Temporarily expose input value. Use with caution.
  public get startInput() {
    return this._start;
  }
}

export class KubernetesClusterMaintenanceWindowNodeOsNotAllowedList extends cdktf.ComplexList {
  public internalValue? : KubernetesClusterMaintenanceWindowNodeOsNotAllowed[] | cdktf.IResolvable

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
  public get(index: number): KubernetesClusterMaintenanceWindowNodeOsNotAllowedOutputReference {
    return new KubernetesClusterMaintenanceWindowNodeOsNotAllowedOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface KubernetesClusterMaintenanceWindowNodeOs {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/kubernetes_cluster#day_of_month KubernetesCluster#day_of_month}
  */
  readonly dayOfMonth?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/kubernetes_cluster#day_of_week KubernetesCluster#day_of_week}
  */
  readonly dayOfWeek?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/kubernetes_cluster#duration KubernetesCluster#duration}
  */
  readonly duration: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/kubernetes_cluster#frequency KubernetesCluster#frequency}
  */
  readonly frequency: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/kubernetes_cluster#interval KubernetesCluster#interval}
  */
  readonly interval: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/kubernetes_cluster#start_date KubernetesCluster#start_date}
  */
  readonly startDate?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/kubernetes_cluster#start_time KubernetesCluster#start_time}
  */
  readonly startTime?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/kubernetes_cluster#utc_offset KubernetesCluster#utc_offset}
  */
  readonly utcOffset?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/kubernetes_cluster#week_index KubernetesCluster#week_index}
  */
  readonly weekIndex?: string;
  /**
  * not_allowed block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/kubernetes_cluster#not_allowed KubernetesCluster#not_allowed}
  */
  readonly notAllowed?: KubernetesClusterMaintenanceWindowNodeOsNotAllowed[] | cdktf.IResolvable;
}

export function kubernetesClusterMaintenanceWindowNodeOsToTerraform(struct?: KubernetesClusterMaintenanceWindowNodeOsOutputReference | KubernetesClusterMaintenanceWindowNodeOs): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    day_of_month: cdktf.numberToTerraform(struct!.dayOfMonth),
    day_of_week: cdktf.stringToTerraform(struct!.dayOfWeek),
    duration: cdktf.numberToTerraform(struct!.duration),
    frequency: cdktf.stringToTerraform(struct!.frequency),
    interval: cdktf.numberToTerraform(struct!.interval),
    start_date: cdktf.stringToTerraform(struct!.startDate),
    start_time: cdktf.stringToTerraform(struct!.startTime),
    utc_offset: cdktf.stringToTerraform(struct!.utcOffset),
    week_index: cdktf.stringToTerraform(struct!.weekIndex),
    not_allowed: cdktf.listMapper(kubernetesClusterMaintenanceWindowNodeOsNotAllowedToTerraform, true)(struct!.notAllowed),
  }
}


export function kubernetesClusterMaintenanceWindowNodeOsToHclTerraform(struct?: KubernetesClusterMaintenanceWindowNodeOsOutputReference | KubernetesClusterMaintenanceWindowNodeOs): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    day_of_month: {
      value: cdktf.numberToHclTerraform(struct!.dayOfMonth),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    day_of_week: {
      value: cdktf.stringToHclTerraform(struct!.dayOfWeek),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    duration: {
      value: cdktf.numberToHclTerraform(struct!.duration),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    frequency: {
      value: cdktf.stringToHclTerraform(struct!.frequency),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    interval: {
      value: cdktf.numberToHclTerraform(struct!.interval),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    start_date: {
      value: cdktf.stringToHclTerraform(struct!.startDate),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    start_time: {
      value: cdktf.stringToHclTerraform(struct!.startTime),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    utc_offset: {
      value: cdktf.stringToHclTerraform(struct!.utcOffset),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    week_index: {
      value: cdktf.stringToHclTerraform(struct!.weekIndex),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    not_allowed: {
      value: cdktf.listMapperHcl(kubernetesClusterMaintenanceWindowNodeOsNotAllowedToHclTerraform, true)(struct!.notAllowed),
      isBlock: true,
      type: "set",
      storageClassType: "KubernetesClusterMaintenanceWindowNodeOsNotAllowedList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class KubernetesClusterMaintenanceWindowNodeOsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): KubernetesClusterMaintenanceWindowNodeOs | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._dayOfMonth !== undefined) {
      hasAnyValues = true;
      internalValueResult.dayOfMonth = this._dayOfMonth;
    }
    if (this._dayOfWeek !== undefined) {
      hasAnyValues = true;
      internalValueResult.dayOfWeek = this._dayOfWeek;
    }
    if (this._duration !== undefined) {
      hasAnyValues = true;
      internalValueResult.duration = this._duration;
    }
    if (this._frequency !== undefined) {
      hasAnyValues = true;
      internalValueResult.frequency = this._frequency;
    }
    if (this._interval !== undefined) {
      hasAnyValues = true;
      internalValueResult.interval = this._interval;
    }
    if (this._startDate !== undefined) {
      hasAnyValues = true;
      internalValueResult.startDate = this._startDate;
    }
    if (this._startTime !== undefined) {
      hasAnyValues = true;
      internalValueResult.startTime = this._startTime;
    }
    if (this._utcOffset !== undefined) {
      hasAnyValues = true;
      internalValueResult.utcOffset = this._utcOffset;
    }
    if (this._weekIndex !== undefined) {
      hasAnyValues = true;
      internalValueResult.weekIndex = this._weekIndex;
    }
    if (this._notAllowed?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.notAllowed = this._notAllowed?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: KubernetesClusterMaintenanceWindowNodeOs | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._dayOfMonth = undefined;
      this._dayOfWeek = undefined;
      this._duration = undefined;
      this._frequency = undefined;
      this._interval = undefined;
      this._startDate = undefined;
      this._startTime = undefined;
      this._utcOffset = undefined;
      this._weekIndex = undefined;
      this._notAllowed.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._dayOfMonth = value.dayOfMonth;
      this._dayOfWeek = value.dayOfWeek;
      this._duration = value.duration;
      this._frequency = value.frequency;
      this._interval = value.interval;
      this._startDate = value.startDate;
      this._startTime = value.startTime;
      this._utcOffset = value.utcOffset;
      this._weekIndex = value.weekIndex;
      this._notAllowed.internalValue = value.notAllowed;
    }
  }

  // day_of_month - computed: false, optional: true, required: false
  private _dayOfMonth?: number; 
  public get dayOfMonth() {
    return this.getNumberAttribute('day_of_month');
  }
  public set dayOfMonth(value: number) {
    this._dayOfMonth = value;
  }
  public resetDayOfMonth() {
    this._dayOfMonth = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dayOfMonthInput() {
    return this._dayOfMonth;
  }

  // day_of_week - computed: false, optional: true, required: false
  private _dayOfWeek?: string; 
  public get dayOfWeek() {
    return this.getStringAttribute('day_of_week');
  }
  public set dayOfWeek(value: string) {
    this._dayOfWeek = value;
  }
  public resetDayOfWeek() {
    this._dayOfWeek = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dayOfWeekInput() {
    return this._dayOfWeek;
  }

  // duration - computed: false, optional: false, required: true
  private _duration?: number; 
  public get duration() {
    return this.getNumberAttribute('duration');
  }
  public set duration(value: number) {
    this._duration = value;
  }
  // Temporarily expose input value. Use with caution.
  public get durationInput() {
    return this._duration;
  }

  // frequency - computed: false, optional: false, required: true
  private _frequency?: string; 
  public get frequency() {
    return this.getStringAttribute('frequency');
  }
  public set frequency(value: string) {
    this._frequency = value;
  }
  // Temporarily expose input value. Use with caution.
  public get frequencyInput() {
    return this._frequency;
  }

  // interval - computed: false, optional: false, required: true
  private _interval?: number; 
  public get interval() {
    return this.getNumberAttribute('interval');
  }
  public set interval(value: number) {
    this._interval = value;
  }
  // Temporarily expose input value. Use with caution.
  public get intervalInput() {
    return this._interval;
  }

  // start_date - computed: true, optional: true, required: false
  private _startDate?: string; 
  public get startDate() {
    return this.getStringAttribute('start_date');
  }
  public set startDate(value: string) {
    this._startDate = value;
  }
  public resetStartDate() {
    this._startDate = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get startDateInput() {
    return this._startDate;
  }

  // start_time - computed: false, optional: true, required: false
  private _startTime?: string; 
  public get startTime() {
    return this.getStringAttribute('start_time');
  }
  public set startTime(value: string) {
    this._startTime = value;
  }
  public resetStartTime() {
    this._startTime = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get startTimeInput() {
    return this._startTime;
  }

  // utc_offset - computed: false, optional: true, required: false
  private _utcOffset?: string; 
  public get utcOffset() {
    return this.getStringAttribute('utc_offset');
  }
  public set utcOffset(value: string) {
    this._utcOffset = value;
  }
  public resetUtcOffset() {
    this._utcOffset = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get utcOffsetInput() {
    return this._utcOffset;
  }

  // week_index - computed: false, optional: true, required: false
  private _weekIndex?: string; 
  public get weekIndex() {
    return this.getStringAttribute('week_index');
  }
  public set weekIndex(value: string) {
    this._weekIndex = value;
  }
  public resetWeekIndex() {
    this._weekIndex = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get weekIndexInput() {
    return this._weekIndex;
  }

  // not_allowed - computed: false, optional: true, required: false
  private _notAllowed = new KubernetesClusterMaintenanceWindowNodeOsNotAllowedList(this, "not_allowed", true);
  public get notAllowed() {
    return this._notAllowed;
  }
  public putNotAllowed(value: KubernetesClusterMaintenanceWindowNodeOsNotAllowed[] | cdktf.IResolvable) {
    this._notAllowed.internalValue = value;
  }
  public resetNotAllowed() {
    this._notAllowed.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get notAllowedInput() {
    return this._notAllowed.internalValue;
  }
}
export interface KubernetesClusterMicrosoftDefender {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/kubernetes_cluster#log_analytics_workspace_id KubernetesCluster#log_analytics_workspace_id}
  */
  readonly logAnalyticsWorkspaceId: string;
}

export function kubernetesClusterMicrosoftDefenderToTerraform(struct?: KubernetesClusterMicrosoftDefenderOutputReference | KubernetesClusterMicrosoftDefender): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    log_analytics_workspace_id: cdktf.stringToTerraform(struct!.logAnalyticsWorkspaceId),
  }
}


export function kubernetesClusterMicrosoftDefenderToHclTerraform(struct?: KubernetesClusterMicrosoftDefenderOutputReference | KubernetesClusterMicrosoftDefender): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    log_analytics_workspace_id: {
      value: cdktf.stringToHclTerraform(struct!.logAnalyticsWorkspaceId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class KubernetesClusterMicrosoftDefenderOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): KubernetesClusterMicrosoftDefender | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._logAnalyticsWorkspaceId !== undefined) {
      hasAnyValues = true;
      internalValueResult.logAnalyticsWorkspaceId = this._logAnalyticsWorkspaceId;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: KubernetesClusterMicrosoftDefender | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._logAnalyticsWorkspaceId = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._logAnalyticsWorkspaceId = value.logAnalyticsWorkspaceId;
    }
  }

  // log_analytics_workspace_id - computed: false, optional: false, required: true
  private _logAnalyticsWorkspaceId?: string; 
  public get logAnalyticsWorkspaceId() {
    return this.getStringAttribute('log_analytics_workspace_id');
  }
  public set logAnalyticsWorkspaceId(value: string) {
    this._logAnalyticsWorkspaceId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get logAnalyticsWorkspaceIdInput() {
    return this._logAnalyticsWorkspaceId;
  }
}
export interface KubernetesClusterMonitorMetrics {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/kubernetes_cluster#annotations_allowed KubernetesCluster#annotations_allowed}
  */
  readonly annotationsAllowed?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/kubernetes_cluster#labels_allowed KubernetesCluster#labels_allowed}
  */
  readonly labelsAllowed?: string;
}

export function kubernetesClusterMonitorMetricsToTerraform(struct?: KubernetesClusterMonitorMetricsOutputReference | KubernetesClusterMonitorMetrics): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    annotations_allowed: cdktf.stringToTerraform(struct!.annotationsAllowed),
    labels_allowed: cdktf.stringToTerraform(struct!.labelsAllowed),
  }
}


export function kubernetesClusterMonitorMetricsToHclTerraform(struct?: KubernetesClusterMonitorMetricsOutputReference | KubernetesClusterMonitorMetrics): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    annotations_allowed: {
      value: cdktf.stringToHclTerraform(struct!.annotationsAllowed),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    labels_allowed: {
      value: cdktf.stringToHclTerraform(struct!.labelsAllowed),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class KubernetesClusterMonitorMetricsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): KubernetesClusterMonitorMetrics | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._annotationsAllowed !== undefined) {
      hasAnyValues = true;
      internalValueResult.annotationsAllowed = this._annotationsAllowed;
    }
    if (this._labelsAllowed !== undefined) {
      hasAnyValues = true;
      internalValueResult.labelsAllowed = this._labelsAllowed;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: KubernetesClusterMonitorMetrics | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._annotationsAllowed = undefined;
      this._labelsAllowed = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._annotationsAllowed = value.annotationsAllowed;
      this._labelsAllowed = value.labelsAllowed;
    }
  }

  // annotations_allowed - computed: false, optional: true, required: false
  private _annotationsAllowed?: string; 
  public get annotationsAllowed() {
    return this.getStringAttribute('annotations_allowed');
  }
  public set annotationsAllowed(value: string) {
    this._annotationsAllowed = value;
  }
  public resetAnnotationsAllowed() {
    this._annotationsAllowed = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get annotationsAllowedInput() {
    return this._annotationsAllowed;
  }

  // labels_allowed - computed: false, optional: true, required: false
  private _labelsAllowed?: string; 
  public get labelsAllowed() {
    return this.getStringAttribute('labels_allowed');
  }
  public set labelsAllowed(value: string) {
    this._labelsAllowed = value;
  }
  public resetLabelsAllowed() {
    this._labelsAllowed = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get labelsAllowedInput() {
    return this._labelsAllowed;
  }
}
export interface KubernetesClusterNetworkProfileLoadBalancerProfile {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/kubernetes_cluster#idle_timeout_in_minutes KubernetesCluster#idle_timeout_in_minutes}
  */
  readonly idleTimeoutInMinutes?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/kubernetes_cluster#managed_outbound_ip_count KubernetesCluster#managed_outbound_ip_count}
  */
  readonly managedOutboundIpCount?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/kubernetes_cluster#managed_outbound_ipv6_count KubernetesCluster#managed_outbound_ipv6_count}
  */
  readonly managedOutboundIpv6Count?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/kubernetes_cluster#outbound_ip_address_ids KubernetesCluster#outbound_ip_address_ids}
  */
  readonly outboundIpAddressIds?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/kubernetes_cluster#outbound_ip_prefix_ids KubernetesCluster#outbound_ip_prefix_ids}
  */
  readonly outboundIpPrefixIds?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/kubernetes_cluster#outbound_ports_allocated KubernetesCluster#outbound_ports_allocated}
  */
  readonly outboundPortsAllocated?: number;
}

export function kubernetesClusterNetworkProfileLoadBalancerProfileToTerraform(struct?: KubernetesClusterNetworkProfileLoadBalancerProfileOutputReference | KubernetesClusterNetworkProfileLoadBalancerProfile): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    idle_timeout_in_minutes: cdktf.numberToTerraform(struct!.idleTimeoutInMinutes),
    managed_outbound_ip_count: cdktf.numberToTerraform(struct!.managedOutboundIpCount),
    managed_outbound_ipv6_count: cdktf.numberToTerraform(struct!.managedOutboundIpv6Count),
    outbound_ip_address_ids: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.outboundIpAddressIds),
    outbound_ip_prefix_ids: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.outboundIpPrefixIds),
    outbound_ports_allocated: cdktf.numberToTerraform(struct!.outboundPortsAllocated),
  }
}


export function kubernetesClusterNetworkProfileLoadBalancerProfileToHclTerraform(struct?: KubernetesClusterNetworkProfileLoadBalancerProfileOutputReference | KubernetesClusterNetworkProfileLoadBalancerProfile): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    idle_timeout_in_minutes: {
      value: cdktf.numberToHclTerraform(struct!.idleTimeoutInMinutes),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    managed_outbound_ip_count: {
      value: cdktf.numberToHclTerraform(struct!.managedOutboundIpCount),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    managed_outbound_ipv6_count: {
      value: cdktf.numberToHclTerraform(struct!.managedOutboundIpv6Count),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    outbound_ip_address_ids: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.outboundIpAddressIds),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
    outbound_ip_prefix_ids: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.outboundIpPrefixIds),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
    outbound_ports_allocated: {
      value: cdktf.numberToHclTerraform(struct!.outboundPortsAllocated),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class KubernetesClusterNetworkProfileLoadBalancerProfileOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): KubernetesClusterNetworkProfileLoadBalancerProfile | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._idleTimeoutInMinutes !== undefined) {
      hasAnyValues = true;
      internalValueResult.idleTimeoutInMinutes = this._idleTimeoutInMinutes;
    }
    if (this._managedOutboundIpCount !== undefined) {
      hasAnyValues = true;
      internalValueResult.managedOutboundIpCount = this._managedOutboundIpCount;
    }
    if (this._managedOutboundIpv6Count !== undefined) {
      hasAnyValues = true;
      internalValueResult.managedOutboundIpv6Count = this._managedOutboundIpv6Count;
    }
    if (this._outboundIpAddressIds !== undefined) {
      hasAnyValues = true;
      internalValueResult.outboundIpAddressIds = this._outboundIpAddressIds;
    }
    if (this._outboundIpPrefixIds !== undefined) {
      hasAnyValues = true;
      internalValueResult.outboundIpPrefixIds = this._outboundIpPrefixIds;
    }
    if (this._outboundPortsAllocated !== undefined) {
      hasAnyValues = true;
      internalValueResult.outboundPortsAllocated = this._outboundPortsAllocated;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: KubernetesClusterNetworkProfileLoadBalancerProfile | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._idleTimeoutInMinutes = undefined;
      this._managedOutboundIpCount = undefined;
      this._managedOutboundIpv6Count = undefined;
      this._outboundIpAddressIds = undefined;
      this._outboundIpPrefixIds = undefined;
      this._outboundPortsAllocated = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._idleTimeoutInMinutes = value.idleTimeoutInMinutes;
      this._managedOutboundIpCount = value.managedOutboundIpCount;
      this._managedOutboundIpv6Count = value.managedOutboundIpv6Count;
      this._outboundIpAddressIds = value.outboundIpAddressIds;
      this._outboundIpPrefixIds = value.outboundIpPrefixIds;
      this._outboundPortsAllocated = value.outboundPortsAllocated;
    }
  }

  // effective_outbound_ips - computed: true, optional: false, required: false
  public get effectiveOutboundIps() {
    return cdktf.Fn.tolist(this.getListAttribute('effective_outbound_ips'));
  }

  // idle_timeout_in_minutes - computed: false, optional: true, required: false
  private _idleTimeoutInMinutes?: number; 
  public get idleTimeoutInMinutes() {
    return this.getNumberAttribute('idle_timeout_in_minutes');
  }
  public set idleTimeoutInMinutes(value: number) {
    this._idleTimeoutInMinutes = value;
  }
  public resetIdleTimeoutInMinutes() {
    this._idleTimeoutInMinutes = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get idleTimeoutInMinutesInput() {
    return this._idleTimeoutInMinutes;
  }

  // managed_outbound_ip_count - computed: true, optional: true, required: false
  private _managedOutboundIpCount?: number; 
  public get managedOutboundIpCount() {
    return this.getNumberAttribute('managed_outbound_ip_count');
  }
  public set managedOutboundIpCount(value: number) {
    this._managedOutboundIpCount = value;
  }
  public resetManagedOutboundIpCount() {
    this._managedOutboundIpCount = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get managedOutboundIpCountInput() {
    return this._managedOutboundIpCount;
  }

  // managed_outbound_ipv6_count - computed: true, optional: true, required: false
  private _managedOutboundIpv6Count?: number; 
  public get managedOutboundIpv6Count() {
    return this.getNumberAttribute('managed_outbound_ipv6_count');
  }
  public set managedOutboundIpv6Count(value: number) {
    this._managedOutboundIpv6Count = value;
  }
  public resetManagedOutboundIpv6Count() {
    this._managedOutboundIpv6Count = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get managedOutboundIpv6CountInput() {
    return this._managedOutboundIpv6Count;
  }

  // outbound_ip_address_ids - computed: false, optional: true, required: false
  private _outboundIpAddressIds?: string[]; 
  public get outboundIpAddressIds() {
    return cdktf.Fn.tolist(this.getListAttribute('outbound_ip_address_ids'));
  }
  public set outboundIpAddressIds(value: string[]) {
    this._outboundIpAddressIds = value;
  }
  public resetOutboundIpAddressIds() {
    this._outboundIpAddressIds = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get outboundIpAddressIdsInput() {
    return this._outboundIpAddressIds;
  }

  // outbound_ip_prefix_ids - computed: false, optional: true, required: false
  private _outboundIpPrefixIds?: string[]; 
  public get outboundIpPrefixIds() {
    return cdktf.Fn.tolist(this.getListAttribute('outbound_ip_prefix_ids'));
  }
  public set outboundIpPrefixIds(value: string[]) {
    this._outboundIpPrefixIds = value;
  }
  public resetOutboundIpPrefixIds() {
    this._outboundIpPrefixIds = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get outboundIpPrefixIdsInput() {
    return this._outboundIpPrefixIds;
  }

  // outbound_ports_allocated - computed: false, optional: true, required: false
  private _outboundPortsAllocated?: number; 
  public get outboundPortsAllocated() {
    return this.getNumberAttribute('outbound_ports_allocated');
  }
  public set outboundPortsAllocated(value: number) {
    this._outboundPortsAllocated = value;
  }
  public resetOutboundPortsAllocated() {
    this._outboundPortsAllocated = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get outboundPortsAllocatedInput() {
    return this._outboundPortsAllocated;
  }
}
export interface KubernetesClusterNetworkProfileNatGatewayProfile {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/kubernetes_cluster#idle_timeout_in_minutes KubernetesCluster#idle_timeout_in_minutes}
  */
  readonly idleTimeoutInMinutes?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/kubernetes_cluster#managed_outbound_ip_count KubernetesCluster#managed_outbound_ip_count}
  */
  readonly managedOutboundIpCount?: number;
}

export function kubernetesClusterNetworkProfileNatGatewayProfileToTerraform(struct?: KubernetesClusterNetworkProfileNatGatewayProfileOutputReference | KubernetesClusterNetworkProfileNatGatewayProfile): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    idle_timeout_in_minutes: cdktf.numberToTerraform(struct!.idleTimeoutInMinutes),
    managed_outbound_ip_count: cdktf.numberToTerraform(struct!.managedOutboundIpCount),
  }
}


export function kubernetesClusterNetworkProfileNatGatewayProfileToHclTerraform(struct?: KubernetesClusterNetworkProfileNatGatewayProfileOutputReference | KubernetesClusterNetworkProfileNatGatewayProfile): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    idle_timeout_in_minutes: {
      value: cdktf.numberToHclTerraform(struct!.idleTimeoutInMinutes),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    managed_outbound_ip_count: {
      value: cdktf.numberToHclTerraform(struct!.managedOutboundIpCount),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class KubernetesClusterNetworkProfileNatGatewayProfileOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): KubernetesClusterNetworkProfileNatGatewayProfile | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._idleTimeoutInMinutes !== undefined) {
      hasAnyValues = true;
      internalValueResult.idleTimeoutInMinutes = this._idleTimeoutInMinutes;
    }
    if (this._managedOutboundIpCount !== undefined) {
      hasAnyValues = true;
      internalValueResult.managedOutboundIpCount = this._managedOutboundIpCount;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: KubernetesClusterNetworkProfileNatGatewayProfile | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._idleTimeoutInMinutes = undefined;
      this._managedOutboundIpCount = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._idleTimeoutInMinutes = value.idleTimeoutInMinutes;
      this._managedOutboundIpCount = value.managedOutboundIpCount;
    }
  }

  // effective_outbound_ips - computed: true, optional: false, required: false
  public get effectiveOutboundIps() {
    return cdktf.Fn.tolist(this.getListAttribute('effective_outbound_ips'));
  }

  // idle_timeout_in_minutes - computed: false, optional: true, required: false
  private _idleTimeoutInMinutes?: number; 
  public get idleTimeoutInMinutes() {
    return this.getNumberAttribute('idle_timeout_in_minutes');
  }
  public set idleTimeoutInMinutes(value: number) {
    this._idleTimeoutInMinutes = value;
  }
  public resetIdleTimeoutInMinutes() {
    this._idleTimeoutInMinutes = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get idleTimeoutInMinutesInput() {
    return this._idleTimeoutInMinutes;
  }

  // managed_outbound_ip_count - computed: true, optional: true, required: false
  private _managedOutboundIpCount?: number; 
  public get managedOutboundIpCount() {
    return this.getNumberAttribute('managed_outbound_ip_count');
  }
  public set managedOutboundIpCount(value: number) {
    this._managedOutboundIpCount = value;
  }
  public resetManagedOutboundIpCount() {
    this._managedOutboundIpCount = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get managedOutboundIpCountInput() {
    return this._managedOutboundIpCount;
  }
}
export interface KubernetesClusterNetworkProfile {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/kubernetes_cluster#dns_service_ip KubernetesCluster#dns_service_ip}
  */
  readonly dnsServiceIp?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/kubernetes_cluster#ip_versions KubernetesCluster#ip_versions}
  */
  readonly ipVersions?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/kubernetes_cluster#load_balancer_sku KubernetesCluster#load_balancer_sku}
  */
  readonly loadBalancerSku?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/kubernetes_cluster#network_data_plane KubernetesCluster#network_data_plane}
  */
  readonly networkDataPlane?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/kubernetes_cluster#network_mode KubernetesCluster#network_mode}
  */
  readonly networkMode?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/kubernetes_cluster#network_plugin KubernetesCluster#network_plugin}
  */
  readonly networkPlugin: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/kubernetes_cluster#network_plugin_mode KubernetesCluster#network_plugin_mode}
  */
  readonly networkPluginMode?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/kubernetes_cluster#network_policy KubernetesCluster#network_policy}
  */
  readonly networkPolicy?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/kubernetes_cluster#outbound_type KubernetesCluster#outbound_type}
  */
  readonly outboundType?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/kubernetes_cluster#pod_cidr KubernetesCluster#pod_cidr}
  */
  readonly podCidr?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/kubernetes_cluster#pod_cidrs KubernetesCluster#pod_cidrs}
  */
  readonly podCidrs?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/kubernetes_cluster#service_cidr KubernetesCluster#service_cidr}
  */
  readonly serviceCidr?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/kubernetes_cluster#service_cidrs KubernetesCluster#service_cidrs}
  */
  readonly serviceCidrs?: string[];
  /**
  * load_balancer_profile block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/kubernetes_cluster#load_balancer_profile KubernetesCluster#load_balancer_profile}
  */
  readonly loadBalancerProfile?: KubernetesClusterNetworkProfileLoadBalancerProfile;
  /**
  * nat_gateway_profile block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/kubernetes_cluster#nat_gateway_profile KubernetesCluster#nat_gateway_profile}
  */
  readonly natGatewayProfile?: KubernetesClusterNetworkProfileNatGatewayProfile;
}

export function kubernetesClusterNetworkProfileToTerraform(struct?: KubernetesClusterNetworkProfileOutputReference | KubernetesClusterNetworkProfile): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    dns_service_ip: cdktf.stringToTerraform(struct!.dnsServiceIp),
    ip_versions: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.ipVersions),
    load_balancer_sku: cdktf.stringToTerraform(struct!.loadBalancerSku),
    network_data_plane: cdktf.stringToTerraform(struct!.networkDataPlane),
    network_mode: cdktf.stringToTerraform(struct!.networkMode),
    network_plugin: cdktf.stringToTerraform(struct!.networkPlugin),
    network_plugin_mode: cdktf.stringToTerraform(struct!.networkPluginMode),
    network_policy: cdktf.stringToTerraform(struct!.networkPolicy),
    outbound_type: cdktf.stringToTerraform(struct!.outboundType),
    pod_cidr: cdktf.stringToTerraform(struct!.podCidr),
    pod_cidrs: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.podCidrs),
    service_cidr: cdktf.stringToTerraform(struct!.serviceCidr),
    service_cidrs: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.serviceCidrs),
    load_balancer_profile: kubernetesClusterNetworkProfileLoadBalancerProfileToTerraform(struct!.loadBalancerProfile),
    nat_gateway_profile: kubernetesClusterNetworkProfileNatGatewayProfileToTerraform(struct!.natGatewayProfile),
  }
}


export function kubernetesClusterNetworkProfileToHclTerraform(struct?: KubernetesClusterNetworkProfileOutputReference | KubernetesClusterNetworkProfile): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    dns_service_ip: {
      value: cdktf.stringToHclTerraform(struct!.dnsServiceIp),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    ip_versions: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.ipVersions),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    load_balancer_sku: {
      value: cdktf.stringToHclTerraform(struct!.loadBalancerSku),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    network_data_plane: {
      value: cdktf.stringToHclTerraform(struct!.networkDataPlane),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    network_mode: {
      value: cdktf.stringToHclTerraform(struct!.networkMode),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    network_plugin: {
      value: cdktf.stringToHclTerraform(struct!.networkPlugin),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    network_plugin_mode: {
      value: cdktf.stringToHclTerraform(struct!.networkPluginMode),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    network_policy: {
      value: cdktf.stringToHclTerraform(struct!.networkPolicy),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    outbound_type: {
      value: cdktf.stringToHclTerraform(struct!.outboundType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    pod_cidr: {
      value: cdktf.stringToHclTerraform(struct!.podCidr),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    pod_cidrs: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.podCidrs),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    service_cidr: {
      value: cdktf.stringToHclTerraform(struct!.serviceCidr),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    service_cidrs: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.serviceCidrs),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    load_balancer_profile: {
      value: kubernetesClusterNetworkProfileLoadBalancerProfileToHclTerraform(struct!.loadBalancerProfile),
      isBlock: true,
      type: "list",
      storageClassType: "KubernetesClusterNetworkProfileLoadBalancerProfileList",
    },
    nat_gateway_profile: {
      value: kubernetesClusterNetworkProfileNatGatewayProfileToHclTerraform(struct!.natGatewayProfile),
      isBlock: true,
      type: "list",
      storageClassType: "KubernetesClusterNetworkProfileNatGatewayProfileList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class KubernetesClusterNetworkProfileOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): KubernetesClusterNetworkProfile | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._dnsServiceIp !== undefined) {
      hasAnyValues = true;
      internalValueResult.dnsServiceIp = this._dnsServiceIp;
    }
    if (this._ipVersions !== undefined) {
      hasAnyValues = true;
      internalValueResult.ipVersions = this._ipVersions;
    }
    if (this._loadBalancerSku !== undefined) {
      hasAnyValues = true;
      internalValueResult.loadBalancerSku = this._loadBalancerSku;
    }
    if (this._networkDataPlane !== undefined) {
      hasAnyValues = true;
      internalValueResult.networkDataPlane = this._networkDataPlane;
    }
    if (this._networkMode !== undefined) {
      hasAnyValues = true;
      internalValueResult.networkMode = this._networkMode;
    }
    if (this._networkPlugin !== undefined) {
      hasAnyValues = true;
      internalValueResult.networkPlugin = this._networkPlugin;
    }
    if (this._networkPluginMode !== undefined) {
      hasAnyValues = true;
      internalValueResult.networkPluginMode = this._networkPluginMode;
    }
    if (this._networkPolicy !== undefined) {
      hasAnyValues = true;
      internalValueResult.networkPolicy = this._networkPolicy;
    }
    if (this._outboundType !== undefined) {
      hasAnyValues = true;
      internalValueResult.outboundType = this._outboundType;
    }
    if (this._podCidr !== undefined) {
      hasAnyValues = true;
      internalValueResult.podCidr = this._podCidr;
    }
    if (this._podCidrs !== undefined) {
      hasAnyValues = true;
      internalValueResult.podCidrs = this._podCidrs;
    }
    if (this._serviceCidr !== undefined) {
      hasAnyValues = true;
      internalValueResult.serviceCidr = this._serviceCidr;
    }
    if (this._serviceCidrs !== undefined) {
      hasAnyValues = true;
      internalValueResult.serviceCidrs = this._serviceCidrs;
    }
    if (this._loadBalancerProfile?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.loadBalancerProfile = this._loadBalancerProfile?.internalValue;
    }
    if (this._natGatewayProfile?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.natGatewayProfile = this._natGatewayProfile?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: KubernetesClusterNetworkProfile | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._dnsServiceIp = undefined;
      this._ipVersions = undefined;
      this._loadBalancerSku = undefined;
      this._networkDataPlane = undefined;
      this._networkMode = undefined;
      this._networkPlugin = undefined;
      this._networkPluginMode = undefined;
      this._networkPolicy = undefined;
      this._outboundType = undefined;
      this._podCidr = undefined;
      this._podCidrs = undefined;
      this._serviceCidr = undefined;
      this._serviceCidrs = undefined;
      this._loadBalancerProfile.internalValue = undefined;
      this._natGatewayProfile.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._dnsServiceIp = value.dnsServiceIp;
      this._ipVersions = value.ipVersions;
      this._loadBalancerSku = value.loadBalancerSku;
      this._networkDataPlane = value.networkDataPlane;
      this._networkMode = value.networkMode;
      this._networkPlugin = value.networkPlugin;
      this._networkPluginMode = value.networkPluginMode;
      this._networkPolicy = value.networkPolicy;
      this._outboundType = value.outboundType;
      this._podCidr = value.podCidr;
      this._podCidrs = value.podCidrs;
      this._serviceCidr = value.serviceCidr;
      this._serviceCidrs = value.serviceCidrs;
      this._loadBalancerProfile.internalValue = value.loadBalancerProfile;
      this._natGatewayProfile.internalValue = value.natGatewayProfile;
    }
  }

  // dns_service_ip - computed: true, optional: true, required: false
  private _dnsServiceIp?: string; 
  public get dnsServiceIp() {
    return this.getStringAttribute('dns_service_ip');
  }
  public set dnsServiceIp(value: string) {
    this._dnsServiceIp = value;
  }
  public resetDnsServiceIp() {
    this._dnsServiceIp = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dnsServiceIpInput() {
    return this._dnsServiceIp;
  }

  // ip_versions - computed: true, optional: true, required: false
  private _ipVersions?: string[]; 
  public get ipVersions() {
    return this.getListAttribute('ip_versions');
  }
  public set ipVersions(value: string[]) {
    this._ipVersions = value;
  }
  public resetIpVersions() {
    this._ipVersions = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipVersionsInput() {
    return this._ipVersions;
  }

  // load_balancer_sku - computed: false, optional: true, required: false
  private _loadBalancerSku?: string; 
  public get loadBalancerSku() {
    return this.getStringAttribute('load_balancer_sku');
  }
  public set loadBalancerSku(value: string) {
    this._loadBalancerSku = value;
  }
  public resetLoadBalancerSku() {
    this._loadBalancerSku = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get loadBalancerSkuInput() {
    return this._loadBalancerSku;
  }

  // network_data_plane - computed: false, optional: true, required: false
  private _networkDataPlane?: string; 
  public get networkDataPlane() {
    return this.getStringAttribute('network_data_plane');
  }
  public set networkDataPlane(value: string) {
    this._networkDataPlane = value;
  }
  public resetNetworkDataPlane() {
    this._networkDataPlane = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get networkDataPlaneInput() {
    return this._networkDataPlane;
  }

  // network_mode - computed: true, optional: true, required: false
  private _networkMode?: string; 
  public get networkMode() {
    return this.getStringAttribute('network_mode');
  }
  public set networkMode(value: string) {
    this._networkMode = value;
  }
  public resetNetworkMode() {
    this._networkMode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get networkModeInput() {
    return this._networkMode;
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
    return this._networkPlugin;
  }

  // network_plugin_mode - computed: false, optional: true, required: false
  private _networkPluginMode?: string; 
  public get networkPluginMode() {
    return this.getStringAttribute('network_plugin_mode');
  }
  public set networkPluginMode(value: string) {
    this._networkPluginMode = value;
  }
  public resetNetworkPluginMode() {
    this._networkPluginMode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get networkPluginModeInput() {
    return this._networkPluginMode;
  }

  // network_policy - computed: true, optional: true, required: false
  private _networkPolicy?: string; 
  public get networkPolicy() {
    return this.getStringAttribute('network_policy');
  }
  public set networkPolicy(value: string) {
    this._networkPolicy = value;
  }
  public resetNetworkPolicy() {
    this._networkPolicy = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get networkPolicyInput() {
    return this._networkPolicy;
  }

  // outbound_type - computed: false, optional: true, required: false
  private _outboundType?: string; 
  public get outboundType() {
    return this.getStringAttribute('outbound_type');
  }
  public set outboundType(value: string) {
    this._outboundType = value;
  }
  public resetOutboundType() {
    this._outboundType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get outboundTypeInput() {
    return this._outboundType;
  }

  // pod_cidr - computed: true, optional: true, required: false
  private _podCidr?: string; 
  public get podCidr() {
    return this.getStringAttribute('pod_cidr');
  }
  public set podCidr(value: string) {
    this._podCidr = value;
  }
  public resetPodCidr() {
    this._podCidr = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get podCidrInput() {
    return this._podCidr;
  }

  // pod_cidrs - computed: true, optional: true, required: false
  private _podCidrs?: string[]; 
  public get podCidrs() {
    return this.getListAttribute('pod_cidrs');
  }
  public set podCidrs(value: string[]) {
    this._podCidrs = value;
  }
  public resetPodCidrs() {
    this._podCidrs = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get podCidrsInput() {
    return this._podCidrs;
  }

  // service_cidr - computed: true, optional: true, required: false
  private _serviceCidr?: string; 
  public get serviceCidr() {
    return this.getStringAttribute('service_cidr');
  }
  public set serviceCidr(value: string) {
    this._serviceCidr = value;
  }
  public resetServiceCidr() {
    this._serviceCidr = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get serviceCidrInput() {
    return this._serviceCidr;
  }

  // service_cidrs - computed: true, optional: true, required: false
  private _serviceCidrs?: string[]; 
  public get serviceCidrs() {
    return this.getListAttribute('service_cidrs');
  }
  public set serviceCidrs(value: string[]) {
    this._serviceCidrs = value;
  }
  public resetServiceCidrs() {
    this._serviceCidrs = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get serviceCidrsInput() {
    return this._serviceCidrs;
  }

  // load_balancer_profile - computed: false, optional: true, required: false
  private _loadBalancerProfile = new KubernetesClusterNetworkProfileLoadBalancerProfileOutputReference(this, "load_balancer_profile");
  public get loadBalancerProfile() {
    return this._loadBalancerProfile;
  }
  public putLoadBalancerProfile(value: KubernetesClusterNetworkProfileLoadBalancerProfile) {
    this._loadBalancerProfile.internalValue = value;
  }
  public resetLoadBalancerProfile() {
    this._loadBalancerProfile.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get loadBalancerProfileInput() {
    return this._loadBalancerProfile.internalValue;
  }

  // nat_gateway_profile - computed: false, optional: true, required: false
  private _natGatewayProfile = new KubernetesClusterNetworkProfileNatGatewayProfileOutputReference(this, "nat_gateway_profile");
  public get natGatewayProfile() {
    return this._natGatewayProfile;
  }
  public putNatGatewayProfile(value: KubernetesClusterNetworkProfileNatGatewayProfile) {
    this._natGatewayProfile.internalValue = value;
  }
  public resetNatGatewayProfile() {
    this._natGatewayProfile.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get natGatewayProfileInput() {
    return this._natGatewayProfile.internalValue;
  }
}
export interface KubernetesClusterOmsAgentOmsAgentIdentity {
}

export function kubernetesClusterOmsAgentOmsAgentIdentityToTerraform(struct?: KubernetesClusterOmsAgentOmsAgentIdentity): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function kubernetesClusterOmsAgentOmsAgentIdentityToHclTerraform(struct?: KubernetesClusterOmsAgentOmsAgentIdentity): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class KubernetesClusterOmsAgentOmsAgentIdentityOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): KubernetesClusterOmsAgentOmsAgentIdentity | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: KubernetesClusterOmsAgentOmsAgentIdentity | undefined) {
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

export class KubernetesClusterOmsAgentOmsAgentIdentityList extends cdktf.ComplexList {

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
  public get(index: number): KubernetesClusterOmsAgentOmsAgentIdentityOutputReference {
    return new KubernetesClusterOmsAgentOmsAgentIdentityOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface KubernetesClusterOmsAgent {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/kubernetes_cluster#log_analytics_workspace_id KubernetesCluster#log_analytics_workspace_id}
  */
  readonly logAnalyticsWorkspaceId: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/kubernetes_cluster#msi_auth_for_monitoring_enabled KubernetesCluster#msi_auth_for_monitoring_enabled}
  */
  readonly msiAuthForMonitoringEnabled?: boolean | cdktf.IResolvable;
}

export function kubernetesClusterOmsAgentToTerraform(struct?: KubernetesClusterOmsAgentOutputReference | KubernetesClusterOmsAgent): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    log_analytics_workspace_id: cdktf.stringToTerraform(struct!.logAnalyticsWorkspaceId),
    msi_auth_for_monitoring_enabled: cdktf.booleanToTerraform(struct!.msiAuthForMonitoringEnabled),
  }
}


export function kubernetesClusterOmsAgentToHclTerraform(struct?: KubernetesClusterOmsAgentOutputReference | KubernetesClusterOmsAgent): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    log_analytics_workspace_id: {
      value: cdktf.stringToHclTerraform(struct!.logAnalyticsWorkspaceId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    msi_auth_for_monitoring_enabled: {
      value: cdktf.booleanToHclTerraform(struct!.msiAuthForMonitoringEnabled),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class KubernetesClusterOmsAgentOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): KubernetesClusterOmsAgent | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._logAnalyticsWorkspaceId !== undefined) {
      hasAnyValues = true;
      internalValueResult.logAnalyticsWorkspaceId = this._logAnalyticsWorkspaceId;
    }
    if (this._msiAuthForMonitoringEnabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.msiAuthForMonitoringEnabled = this._msiAuthForMonitoringEnabled;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: KubernetesClusterOmsAgent | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._logAnalyticsWorkspaceId = undefined;
      this._msiAuthForMonitoringEnabled = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._logAnalyticsWorkspaceId = value.logAnalyticsWorkspaceId;
      this._msiAuthForMonitoringEnabled = value.msiAuthForMonitoringEnabled;
    }
  }

  // log_analytics_workspace_id - computed: false, optional: false, required: true
  private _logAnalyticsWorkspaceId?: string; 
  public get logAnalyticsWorkspaceId() {
    return this.getStringAttribute('log_analytics_workspace_id');
  }
  public set logAnalyticsWorkspaceId(value: string) {
    this._logAnalyticsWorkspaceId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get logAnalyticsWorkspaceIdInput() {
    return this._logAnalyticsWorkspaceId;
  }

  // msi_auth_for_monitoring_enabled - computed: false, optional: true, required: false
  private _msiAuthForMonitoringEnabled?: boolean | cdktf.IResolvable; 
  public get msiAuthForMonitoringEnabled() {
    return this.getBooleanAttribute('msi_auth_for_monitoring_enabled');
  }
  public set msiAuthForMonitoringEnabled(value: boolean | cdktf.IResolvable) {
    this._msiAuthForMonitoringEnabled = value;
  }
  public resetMsiAuthForMonitoringEnabled() {
    this._msiAuthForMonitoringEnabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get msiAuthForMonitoringEnabledInput() {
    return this._msiAuthForMonitoringEnabled;
  }

  // oms_agent_identity - computed: true, optional: false, required: false
  private _omsAgentIdentity = new KubernetesClusterOmsAgentOmsAgentIdentityList(this, "oms_agent_identity", false);
  public get omsAgentIdentity() {
    return this._omsAgentIdentity;
  }
}
export interface KubernetesClusterServiceMeshProfileCertificateAuthority {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/kubernetes_cluster#cert_chain_object_name KubernetesCluster#cert_chain_object_name}
  */
  readonly certChainObjectName: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/kubernetes_cluster#cert_object_name KubernetesCluster#cert_object_name}
  */
  readonly certObjectName: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/kubernetes_cluster#key_object_name KubernetesCluster#key_object_name}
  */
  readonly keyObjectName: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/kubernetes_cluster#key_vault_id KubernetesCluster#key_vault_id}
  */
  readonly keyVaultId: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/kubernetes_cluster#root_cert_object_name KubernetesCluster#root_cert_object_name}
  */
  readonly rootCertObjectName: string;
}

export function kubernetesClusterServiceMeshProfileCertificateAuthorityToTerraform(struct?: KubernetesClusterServiceMeshProfileCertificateAuthorityOutputReference | KubernetesClusterServiceMeshProfileCertificateAuthority): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    cert_chain_object_name: cdktf.stringToTerraform(struct!.certChainObjectName),
    cert_object_name: cdktf.stringToTerraform(struct!.certObjectName),
    key_object_name: cdktf.stringToTerraform(struct!.keyObjectName),
    key_vault_id: cdktf.stringToTerraform(struct!.keyVaultId),
    root_cert_object_name: cdktf.stringToTerraform(struct!.rootCertObjectName),
  }
}


export function kubernetesClusterServiceMeshProfileCertificateAuthorityToHclTerraform(struct?: KubernetesClusterServiceMeshProfileCertificateAuthorityOutputReference | KubernetesClusterServiceMeshProfileCertificateAuthority): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    cert_chain_object_name: {
      value: cdktf.stringToHclTerraform(struct!.certChainObjectName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    cert_object_name: {
      value: cdktf.stringToHclTerraform(struct!.certObjectName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    key_object_name: {
      value: cdktf.stringToHclTerraform(struct!.keyObjectName),
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
    root_cert_object_name: {
      value: cdktf.stringToHclTerraform(struct!.rootCertObjectName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class KubernetesClusterServiceMeshProfileCertificateAuthorityOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): KubernetesClusterServiceMeshProfileCertificateAuthority | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._certChainObjectName !== undefined) {
      hasAnyValues = true;
      internalValueResult.certChainObjectName = this._certChainObjectName;
    }
    if (this._certObjectName !== undefined) {
      hasAnyValues = true;
      internalValueResult.certObjectName = this._certObjectName;
    }
    if (this._keyObjectName !== undefined) {
      hasAnyValues = true;
      internalValueResult.keyObjectName = this._keyObjectName;
    }
    if (this._keyVaultId !== undefined) {
      hasAnyValues = true;
      internalValueResult.keyVaultId = this._keyVaultId;
    }
    if (this._rootCertObjectName !== undefined) {
      hasAnyValues = true;
      internalValueResult.rootCertObjectName = this._rootCertObjectName;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: KubernetesClusterServiceMeshProfileCertificateAuthority | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._certChainObjectName = undefined;
      this._certObjectName = undefined;
      this._keyObjectName = undefined;
      this._keyVaultId = undefined;
      this._rootCertObjectName = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._certChainObjectName = value.certChainObjectName;
      this._certObjectName = value.certObjectName;
      this._keyObjectName = value.keyObjectName;
      this._keyVaultId = value.keyVaultId;
      this._rootCertObjectName = value.rootCertObjectName;
    }
  }

  // cert_chain_object_name - computed: false, optional: false, required: true
  private _certChainObjectName?: string; 
  public get certChainObjectName() {
    return this.getStringAttribute('cert_chain_object_name');
  }
  public set certChainObjectName(value: string) {
    this._certChainObjectName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get certChainObjectNameInput() {
    return this._certChainObjectName;
  }

  // cert_object_name - computed: false, optional: false, required: true
  private _certObjectName?: string; 
  public get certObjectName() {
    return this.getStringAttribute('cert_object_name');
  }
  public set certObjectName(value: string) {
    this._certObjectName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get certObjectNameInput() {
    return this._certObjectName;
  }

  // key_object_name - computed: false, optional: false, required: true
  private _keyObjectName?: string; 
  public get keyObjectName() {
    return this.getStringAttribute('key_object_name');
  }
  public set keyObjectName(value: string) {
    this._keyObjectName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get keyObjectNameInput() {
    return this._keyObjectName;
  }

  // key_vault_id - computed: false, optional: false, required: true
  private _keyVaultId?: string; 
  public get keyVaultId() {
    return this.getStringAttribute('key_vault_id');
  }
  public set keyVaultId(value: string) {
    this._keyVaultId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get keyVaultIdInput() {
    return this._keyVaultId;
  }

  // root_cert_object_name - computed: false, optional: false, required: true
  private _rootCertObjectName?: string; 
  public get rootCertObjectName() {
    return this.getStringAttribute('root_cert_object_name');
  }
  public set rootCertObjectName(value: string) {
    this._rootCertObjectName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get rootCertObjectNameInput() {
    return this._rootCertObjectName;
  }
}
export interface KubernetesClusterServiceMeshProfile {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/kubernetes_cluster#external_ingress_gateway_enabled KubernetesCluster#external_ingress_gateway_enabled}
  */
  readonly externalIngressGatewayEnabled?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/kubernetes_cluster#internal_ingress_gateway_enabled KubernetesCluster#internal_ingress_gateway_enabled}
  */
  readonly internalIngressGatewayEnabled?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/kubernetes_cluster#mode KubernetesCluster#mode}
  */
  readonly mode: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/kubernetes_cluster#revisions KubernetesCluster#revisions}
  */
  readonly revisions: string[];
  /**
  * certificate_authority block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/kubernetes_cluster#certificate_authority KubernetesCluster#certificate_authority}
  */
  readonly certificateAuthority?: KubernetesClusterServiceMeshProfileCertificateAuthority;
}

export function kubernetesClusterServiceMeshProfileToTerraform(struct?: KubernetesClusterServiceMeshProfileOutputReference | KubernetesClusterServiceMeshProfile): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    external_ingress_gateway_enabled: cdktf.booleanToTerraform(struct!.externalIngressGatewayEnabled),
    internal_ingress_gateway_enabled: cdktf.booleanToTerraform(struct!.internalIngressGatewayEnabled),
    mode: cdktf.stringToTerraform(struct!.mode),
    revisions: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.revisions),
    certificate_authority: kubernetesClusterServiceMeshProfileCertificateAuthorityToTerraform(struct!.certificateAuthority),
  }
}


export function kubernetesClusterServiceMeshProfileToHclTerraform(struct?: KubernetesClusterServiceMeshProfileOutputReference | KubernetesClusterServiceMeshProfile): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    external_ingress_gateway_enabled: {
      value: cdktf.booleanToHclTerraform(struct!.externalIngressGatewayEnabled),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    internal_ingress_gateway_enabled: {
      value: cdktf.booleanToHclTerraform(struct!.internalIngressGatewayEnabled),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    mode: {
      value: cdktf.stringToHclTerraform(struct!.mode),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    revisions: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.revisions),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    certificate_authority: {
      value: kubernetesClusterServiceMeshProfileCertificateAuthorityToHclTerraform(struct!.certificateAuthority),
      isBlock: true,
      type: "list",
      storageClassType: "KubernetesClusterServiceMeshProfileCertificateAuthorityList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class KubernetesClusterServiceMeshProfileOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): KubernetesClusterServiceMeshProfile | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._externalIngressGatewayEnabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.externalIngressGatewayEnabled = this._externalIngressGatewayEnabled;
    }
    if (this._internalIngressGatewayEnabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.internalIngressGatewayEnabled = this._internalIngressGatewayEnabled;
    }
    if (this._mode !== undefined) {
      hasAnyValues = true;
      internalValueResult.mode = this._mode;
    }
    if (this._revisions !== undefined) {
      hasAnyValues = true;
      internalValueResult.revisions = this._revisions;
    }
    if (this._certificateAuthority?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.certificateAuthority = this._certificateAuthority?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: KubernetesClusterServiceMeshProfile | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._externalIngressGatewayEnabled = undefined;
      this._internalIngressGatewayEnabled = undefined;
      this._mode = undefined;
      this._revisions = undefined;
      this._certificateAuthority.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._externalIngressGatewayEnabled = value.externalIngressGatewayEnabled;
      this._internalIngressGatewayEnabled = value.internalIngressGatewayEnabled;
      this._mode = value.mode;
      this._revisions = value.revisions;
      this._certificateAuthority.internalValue = value.certificateAuthority;
    }
  }

  // external_ingress_gateway_enabled - computed: false, optional: true, required: false
  private _externalIngressGatewayEnabled?: boolean | cdktf.IResolvable; 
  public get externalIngressGatewayEnabled() {
    return this.getBooleanAttribute('external_ingress_gateway_enabled');
  }
  public set externalIngressGatewayEnabled(value: boolean | cdktf.IResolvable) {
    this._externalIngressGatewayEnabled = value;
  }
  public resetExternalIngressGatewayEnabled() {
    this._externalIngressGatewayEnabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get externalIngressGatewayEnabledInput() {
    return this._externalIngressGatewayEnabled;
  }

  // internal_ingress_gateway_enabled - computed: false, optional: true, required: false
  private _internalIngressGatewayEnabled?: boolean | cdktf.IResolvable; 
  public get internalIngressGatewayEnabled() {
    return this.getBooleanAttribute('internal_ingress_gateway_enabled');
  }
  public set internalIngressGatewayEnabled(value: boolean | cdktf.IResolvable) {
    this._internalIngressGatewayEnabled = value;
  }
  public resetInternalIngressGatewayEnabled() {
    this._internalIngressGatewayEnabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get internalIngressGatewayEnabledInput() {
    return this._internalIngressGatewayEnabled;
  }

  // mode - computed: false, optional: false, required: true
  private _mode?: string; 
  public get mode() {
    return this.getStringAttribute('mode');
  }
  public set mode(value: string) {
    this._mode = value;
  }
  // Temporarily expose input value. Use with caution.
  public get modeInput() {
    return this._mode;
  }

  // revisions - computed: false, optional: false, required: true
  private _revisions?: string[]; 
  public get revisions() {
    return this.getListAttribute('revisions');
  }
  public set revisions(value: string[]) {
    this._revisions = value;
  }
  // Temporarily expose input value. Use with caution.
  public get revisionsInput() {
    return this._revisions;
  }

  // certificate_authority - computed: false, optional: true, required: false
  private _certificateAuthority = new KubernetesClusterServiceMeshProfileCertificateAuthorityOutputReference(this, "certificate_authority");
  public get certificateAuthority() {
    return this._certificateAuthority;
  }
  public putCertificateAuthority(value: KubernetesClusterServiceMeshProfileCertificateAuthority) {
    this._certificateAuthority.internalValue = value;
  }
  public resetCertificateAuthority() {
    this._certificateAuthority.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get certificateAuthorityInput() {
    return this._certificateAuthority.internalValue;
  }
}
export interface KubernetesClusterServicePrincipal {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/kubernetes_cluster#client_id KubernetesCluster#client_id}
  */
  readonly clientId: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/kubernetes_cluster#client_secret KubernetesCluster#client_secret}
  */
  readonly clientSecret: string;
}

export function kubernetesClusterServicePrincipalToTerraform(struct?: KubernetesClusterServicePrincipalOutputReference | KubernetesClusterServicePrincipal): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    client_id: cdktf.stringToTerraform(struct!.clientId),
    client_secret: cdktf.stringToTerraform(struct!.clientSecret),
  }
}


export function kubernetesClusterServicePrincipalToHclTerraform(struct?: KubernetesClusterServicePrincipalOutputReference | KubernetesClusterServicePrincipal): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    client_id: {
      value: cdktf.stringToHclTerraform(struct!.clientId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    client_secret: {
      value: cdktf.stringToHclTerraform(struct!.clientSecret),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class KubernetesClusterServicePrincipalOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): KubernetesClusterServicePrincipal | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._clientId !== undefined) {
      hasAnyValues = true;
      internalValueResult.clientId = this._clientId;
    }
    if (this._clientSecret !== undefined) {
      hasAnyValues = true;
      internalValueResult.clientSecret = this._clientSecret;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: KubernetesClusterServicePrincipal | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._clientId = undefined;
      this._clientSecret = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._clientId = value.clientId;
      this._clientSecret = value.clientSecret;
    }
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
    return this._clientId;
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
    return this._clientSecret;
  }
}
export interface KubernetesClusterStorageProfile {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/kubernetes_cluster#blob_driver_enabled KubernetesCluster#blob_driver_enabled}
  */
  readonly blobDriverEnabled?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/kubernetes_cluster#disk_driver_enabled KubernetesCluster#disk_driver_enabled}
  */
  readonly diskDriverEnabled?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/kubernetes_cluster#file_driver_enabled KubernetesCluster#file_driver_enabled}
  */
  readonly fileDriverEnabled?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/kubernetes_cluster#snapshot_controller_enabled KubernetesCluster#snapshot_controller_enabled}
  */
  readonly snapshotControllerEnabled?: boolean | cdktf.IResolvable;
}

export function kubernetesClusterStorageProfileToTerraform(struct?: KubernetesClusterStorageProfileOutputReference | KubernetesClusterStorageProfile): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    blob_driver_enabled: cdktf.booleanToTerraform(struct!.blobDriverEnabled),
    disk_driver_enabled: cdktf.booleanToTerraform(struct!.diskDriverEnabled),
    file_driver_enabled: cdktf.booleanToTerraform(struct!.fileDriverEnabled),
    snapshot_controller_enabled: cdktf.booleanToTerraform(struct!.snapshotControllerEnabled),
  }
}


export function kubernetesClusterStorageProfileToHclTerraform(struct?: KubernetesClusterStorageProfileOutputReference | KubernetesClusterStorageProfile): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    blob_driver_enabled: {
      value: cdktf.booleanToHclTerraform(struct!.blobDriverEnabled),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    disk_driver_enabled: {
      value: cdktf.booleanToHclTerraform(struct!.diskDriverEnabled),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    file_driver_enabled: {
      value: cdktf.booleanToHclTerraform(struct!.fileDriverEnabled),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    snapshot_controller_enabled: {
      value: cdktf.booleanToHclTerraform(struct!.snapshotControllerEnabled),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class KubernetesClusterStorageProfileOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): KubernetesClusterStorageProfile | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._blobDriverEnabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.blobDriverEnabled = this._blobDriverEnabled;
    }
    if (this._diskDriverEnabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.diskDriverEnabled = this._diskDriverEnabled;
    }
    if (this._fileDriverEnabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.fileDriverEnabled = this._fileDriverEnabled;
    }
    if (this._snapshotControllerEnabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.snapshotControllerEnabled = this._snapshotControllerEnabled;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: KubernetesClusterStorageProfile | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._blobDriverEnabled = undefined;
      this._diskDriverEnabled = undefined;
      this._fileDriverEnabled = undefined;
      this._snapshotControllerEnabled = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._blobDriverEnabled = value.blobDriverEnabled;
      this._diskDriverEnabled = value.diskDriverEnabled;
      this._fileDriverEnabled = value.fileDriverEnabled;
      this._snapshotControllerEnabled = value.snapshotControllerEnabled;
    }
  }

  // blob_driver_enabled - computed: false, optional: true, required: false
  private _blobDriverEnabled?: boolean | cdktf.IResolvable; 
  public get blobDriverEnabled() {
    return this.getBooleanAttribute('blob_driver_enabled');
  }
  public set blobDriverEnabled(value: boolean | cdktf.IResolvable) {
    this._blobDriverEnabled = value;
  }
  public resetBlobDriverEnabled() {
    this._blobDriverEnabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get blobDriverEnabledInput() {
    return this._blobDriverEnabled;
  }

  // disk_driver_enabled - computed: false, optional: true, required: false
  private _diskDriverEnabled?: boolean | cdktf.IResolvable; 
  public get diskDriverEnabled() {
    return this.getBooleanAttribute('disk_driver_enabled');
  }
  public set diskDriverEnabled(value: boolean | cdktf.IResolvable) {
    this._diskDriverEnabled = value;
  }
  public resetDiskDriverEnabled() {
    this._diskDriverEnabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get diskDriverEnabledInput() {
    return this._diskDriverEnabled;
  }

  // file_driver_enabled - computed: false, optional: true, required: false
  private _fileDriverEnabled?: boolean | cdktf.IResolvable; 
  public get fileDriverEnabled() {
    return this.getBooleanAttribute('file_driver_enabled');
  }
  public set fileDriverEnabled(value: boolean | cdktf.IResolvable) {
    this._fileDriverEnabled = value;
  }
  public resetFileDriverEnabled() {
    this._fileDriverEnabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fileDriverEnabledInput() {
    return this._fileDriverEnabled;
  }

  // snapshot_controller_enabled - computed: false, optional: true, required: false
  private _snapshotControllerEnabled?: boolean | cdktf.IResolvable; 
  public get snapshotControllerEnabled() {
    return this.getBooleanAttribute('snapshot_controller_enabled');
  }
  public set snapshotControllerEnabled(value: boolean | cdktf.IResolvable) {
    this._snapshotControllerEnabled = value;
  }
  public resetSnapshotControllerEnabled() {
    this._snapshotControllerEnabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get snapshotControllerEnabledInput() {
    return this._snapshotControllerEnabled;
  }
}
export interface KubernetesClusterTimeouts {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/kubernetes_cluster#create KubernetesCluster#create}
  */
  readonly create?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/kubernetes_cluster#delete KubernetesCluster#delete}
  */
  readonly delete?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/kubernetes_cluster#read KubernetesCluster#read}
  */
  readonly read?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/kubernetes_cluster#update KubernetesCluster#update}
  */
  readonly update?: string;
}

export function kubernetesClusterTimeoutsToTerraform(struct?: KubernetesClusterTimeouts | cdktf.IResolvable): any {
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


export function kubernetesClusterTimeoutsToHclTerraform(struct?: KubernetesClusterTimeouts | cdktf.IResolvable): any {
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

export class KubernetesClusterTimeoutsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): KubernetesClusterTimeouts | cdktf.IResolvable | undefined {
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

  public set internalValue(value: KubernetesClusterTimeouts | cdktf.IResolvable | undefined) {
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
export interface KubernetesClusterWebAppRoutingWebAppRoutingIdentity {
}

export function kubernetesClusterWebAppRoutingWebAppRoutingIdentityToTerraform(struct?: KubernetesClusterWebAppRoutingWebAppRoutingIdentity): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function kubernetesClusterWebAppRoutingWebAppRoutingIdentityToHclTerraform(struct?: KubernetesClusterWebAppRoutingWebAppRoutingIdentity): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class KubernetesClusterWebAppRoutingWebAppRoutingIdentityOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): KubernetesClusterWebAppRoutingWebAppRoutingIdentity | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: KubernetesClusterWebAppRoutingWebAppRoutingIdentity | undefined) {
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

export class KubernetesClusterWebAppRoutingWebAppRoutingIdentityList extends cdktf.ComplexList {

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
  public get(index: number): KubernetesClusterWebAppRoutingWebAppRoutingIdentityOutputReference {
    return new KubernetesClusterWebAppRoutingWebAppRoutingIdentityOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface KubernetesClusterWebAppRouting {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/kubernetes_cluster#dns_zone_ids KubernetesCluster#dns_zone_ids}
  */
  readonly dnsZoneIds: string[];
}

export function kubernetesClusterWebAppRoutingToTerraform(struct?: KubernetesClusterWebAppRoutingOutputReference | KubernetesClusterWebAppRouting): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    dns_zone_ids: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.dnsZoneIds),
  }
}


export function kubernetesClusterWebAppRoutingToHclTerraform(struct?: KubernetesClusterWebAppRoutingOutputReference | KubernetesClusterWebAppRouting): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    dns_zone_ids: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.dnsZoneIds),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class KubernetesClusterWebAppRoutingOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): KubernetesClusterWebAppRouting | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._dnsZoneIds !== undefined) {
      hasAnyValues = true;
      internalValueResult.dnsZoneIds = this._dnsZoneIds;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: KubernetesClusterWebAppRouting | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._dnsZoneIds = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._dnsZoneIds = value.dnsZoneIds;
    }
  }

  // dns_zone_ids - computed: false, optional: false, required: true
  private _dnsZoneIds?: string[]; 
  public get dnsZoneIds() {
    return this.getListAttribute('dns_zone_ids');
  }
  public set dnsZoneIds(value: string[]) {
    this._dnsZoneIds = value;
  }
  // Temporarily expose input value. Use with caution.
  public get dnsZoneIdsInput() {
    return this._dnsZoneIds;
  }

  // web_app_routing_identity - computed: true, optional: false, required: false
  private _webAppRoutingIdentity = new KubernetesClusterWebAppRoutingWebAppRoutingIdentityList(this, "web_app_routing_identity", false);
  public get webAppRoutingIdentity() {
    return this._webAppRoutingIdentity;
  }
}
export interface KubernetesClusterWindowsProfileGmsa {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/kubernetes_cluster#dns_server KubernetesCluster#dns_server}
  */
  readonly dnsServer: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/kubernetes_cluster#root_domain KubernetesCluster#root_domain}
  */
  readonly rootDomain: string;
}

export function kubernetesClusterWindowsProfileGmsaToTerraform(struct?: KubernetesClusterWindowsProfileGmsaOutputReference | KubernetesClusterWindowsProfileGmsa): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    dns_server: cdktf.stringToTerraform(struct!.dnsServer),
    root_domain: cdktf.stringToTerraform(struct!.rootDomain),
  }
}


export function kubernetesClusterWindowsProfileGmsaToHclTerraform(struct?: KubernetesClusterWindowsProfileGmsaOutputReference | KubernetesClusterWindowsProfileGmsa): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    dns_server: {
      value: cdktf.stringToHclTerraform(struct!.dnsServer),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    root_domain: {
      value: cdktf.stringToHclTerraform(struct!.rootDomain),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class KubernetesClusterWindowsProfileGmsaOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): KubernetesClusterWindowsProfileGmsa | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._dnsServer !== undefined) {
      hasAnyValues = true;
      internalValueResult.dnsServer = this._dnsServer;
    }
    if (this._rootDomain !== undefined) {
      hasAnyValues = true;
      internalValueResult.rootDomain = this._rootDomain;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: KubernetesClusterWindowsProfileGmsa | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._dnsServer = undefined;
      this._rootDomain = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._dnsServer = value.dnsServer;
      this._rootDomain = value.rootDomain;
    }
  }

  // dns_server - computed: false, optional: false, required: true
  private _dnsServer?: string; 
  public get dnsServer() {
    return this.getStringAttribute('dns_server');
  }
  public set dnsServer(value: string) {
    this._dnsServer = value;
  }
  // Temporarily expose input value. Use with caution.
  public get dnsServerInput() {
    return this._dnsServer;
  }

  // root_domain - computed: false, optional: false, required: true
  private _rootDomain?: string; 
  public get rootDomain() {
    return this.getStringAttribute('root_domain');
  }
  public set rootDomain(value: string) {
    this._rootDomain = value;
  }
  // Temporarily expose input value. Use with caution.
  public get rootDomainInput() {
    return this._rootDomain;
  }
}
export interface KubernetesClusterWindowsProfile {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/kubernetes_cluster#admin_password KubernetesCluster#admin_password}
  */
  readonly adminPassword: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/kubernetes_cluster#admin_username KubernetesCluster#admin_username}
  */
  readonly adminUsername: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/kubernetes_cluster#license KubernetesCluster#license}
  */
  readonly license?: string;
  /**
  * gmsa block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/kubernetes_cluster#gmsa KubernetesCluster#gmsa}
  */
  readonly gmsa?: KubernetesClusterWindowsProfileGmsa;
}

export function kubernetesClusterWindowsProfileToTerraform(struct?: KubernetesClusterWindowsProfileOutputReference | KubernetesClusterWindowsProfile): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    admin_password: cdktf.stringToTerraform(struct!.adminPassword),
    admin_username: cdktf.stringToTerraform(struct!.adminUsername),
    license: cdktf.stringToTerraform(struct!.license),
    gmsa: kubernetesClusterWindowsProfileGmsaToTerraform(struct!.gmsa),
  }
}


export function kubernetesClusterWindowsProfileToHclTerraform(struct?: KubernetesClusterWindowsProfileOutputReference | KubernetesClusterWindowsProfile): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    admin_password: {
      value: cdktf.stringToHclTerraform(struct!.adminPassword),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    admin_username: {
      value: cdktf.stringToHclTerraform(struct!.adminUsername),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    license: {
      value: cdktf.stringToHclTerraform(struct!.license),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    gmsa: {
      value: kubernetesClusterWindowsProfileGmsaToHclTerraform(struct!.gmsa),
      isBlock: true,
      type: "list",
      storageClassType: "KubernetesClusterWindowsProfileGmsaList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class KubernetesClusterWindowsProfileOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): KubernetesClusterWindowsProfile | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._adminPassword !== undefined) {
      hasAnyValues = true;
      internalValueResult.adminPassword = this._adminPassword;
    }
    if (this._adminUsername !== undefined) {
      hasAnyValues = true;
      internalValueResult.adminUsername = this._adminUsername;
    }
    if (this._license !== undefined) {
      hasAnyValues = true;
      internalValueResult.license = this._license;
    }
    if (this._gmsa?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.gmsa = this._gmsa?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: KubernetesClusterWindowsProfile | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._adminPassword = undefined;
      this._adminUsername = undefined;
      this._license = undefined;
      this._gmsa.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._adminPassword = value.adminPassword;
      this._adminUsername = value.adminUsername;
      this._license = value.license;
      this._gmsa.internalValue = value.gmsa;
    }
  }

  // admin_password - computed: false, optional: false, required: true
  private _adminPassword?: string; 
  public get adminPassword() {
    return this.getStringAttribute('admin_password');
  }
  public set adminPassword(value: string) {
    this._adminPassword = value;
  }
  // Temporarily expose input value. Use with caution.
  public get adminPasswordInput() {
    return this._adminPassword;
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
    return this._adminUsername;
  }

  // license - computed: false, optional: true, required: false
  private _license?: string; 
  public get license() {
    return this.getStringAttribute('license');
  }
  public set license(value: string) {
    this._license = value;
  }
  public resetLicense() {
    this._license = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get licenseInput() {
    return this._license;
  }

  // gmsa - computed: false, optional: true, required: false
  private _gmsa = new KubernetesClusterWindowsProfileGmsaOutputReference(this, "gmsa");
  public get gmsa() {
    return this._gmsa;
  }
  public putGmsa(value: KubernetesClusterWindowsProfileGmsa) {
    this._gmsa.internalValue = value;
  }
  public resetGmsa() {
    this._gmsa.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get gmsaInput() {
    return this._gmsa.internalValue;
  }
}
export interface KubernetesClusterWorkloadAutoscalerProfile {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/kubernetes_cluster#keda_enabled KubernetesCluster#keda_enabled}
  */
  readonly kedaEnabled?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/kubernetes_cluster#vertical_pod_autoscaler_enabled KubernetesCluster#vertical_pod_autoscaler_enabled}
  */
  readonly verticalPodAutoscalerEnabled?: boolean | cdktf.IResolvable;
}

export function kubernetesClusterWorkloadAutoscalerProfileToTerraform(struct?: KubernetesClusterWorkloadAutoscalerProfileOutputReference | KubernetesClusterWorkloadAutoscalerProfile): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    keda_enabled: cdktf.booleanToTerraform(struct!.kedaEnabled),
    vertical_pod_autoscaler_enabled: cdktf.booleanToTerraform(struct!.verticalPodAutoscalerEnabled),
  }
}


export function kubernetesClusterWorkloadAutoscalerProfileToHclTerraform(struct?: KubernetesClusterWorkloadAutoscalerProfileOutputReference | KubernetesClusterWorkloadAutoscalerProfile): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    keda_enabled: {
      value: cdktf.booleanToHclTerraform(struct!.kedaEnabled),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    vertical_pod_autoscaler_enabled: {
      value: cdktf.booleanToHclTerraform(struct!.verticalPodAutoscalerEnabled),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class KubernetesClusterWorkloadAutoscalerProfileOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): KubernetesClusterWorkloadAutoscalerProfile | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._kedaEnabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.kedaEnabled = this._kedaEnabled;
    }
    if (this._verticalPodAutoscalerEnabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.verticalPodAutoscalerEnabled = this._verticalPodAutoscalerEnabled;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: KubernetesClusterWorkloadAutoscalerProfile | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._kedaEnabled = undefined;
      this._verticalPodAutoscalerEnabled = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._kedaEnabled = value.kedaEnabled;
      this._verticalPodAutoscalerEnabled = value.verticalPodAutoscalerEnabled;
    }
  }

  // keda_enabled - computed: false, optional: true, required: false
  private _kedaEnabled?: boolean | cdktf.IResolvable; 
  public get kedaEnabled() {
    return this.getBooleanAttribute('keda_enabled');
  }
  public set kedaEnabled(value: boolean | cdktf.IResolvable) {
    this._kedaEnabled = value;
  }
  public resetKedaEnabled() {
    this._kedaEnabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get kedaEnabledInput() {
    return this._kedaEnabled;
  }

  // vertical_pod_autoscaler_enabled - computed: false, optional: true, required: false
  private _verticalPodAutoscalerEnabled?: boolean | cdktf.IResolvable; 
  public get verticalPodAutoscalerEnabled() {
    return this.getBooleanAttribute('vertical_pod_autoscaler_enabled');
  }
  public set verticalPodAutoscalerEnabled(value: boolean | cdktf.IResolvable) {
    this._verticalPodAutoscalerEnabled = value;
  }
  public resetVerticalPodAutoscalerEnabled() {
    this._verticalPodAutoscalerEnabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get verticalPodAutoscalerEnabledInput() {
    return this._verticalPodAutoscalerEnabled;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/kubernetes_cluster azurerm_kubernetes_cluster}
*/
export class KubernetesCluster extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "azurerm_kubernetes_cluster";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a KubernetesCluster resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the KubernetesCluster to import
  * @param importFromId The id of the existing KubernetesCluster that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/kubernetes_cluster#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the KubernetesCluster to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "azurerm_kubernetes_cluster", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/kubernetes_cluster azurerm_kubernetes_cluster} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options KubernetesClusterConfig
  */
  public constructor(scope: Construct, id: string, config: KubernetesClusterConfig) {
    super(scope, id, {
      terraformResourceType: 'azurerm_kubernetes_cluster',
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
    this._automaticUpgradeChannel = config.automaticUpgradeChannel;
    this._azurePolicyEnabled = config.azurePolicyEnabled;
    this._costAnalysisEnabled = config.costAnalysisEnabled;
    this._diskEncryptionSetId = config.diskEncryptionSetId;
    this._dnsPrefix = config.dnsPrefix;
    this._dnsPrefixPrivateCluster = config.dnsPrefixPrivateCluster;
    this._edgeZone = config.edgeZone;
    this._httpApplicationRoutingEnabled = config.httpApplicationRoutingEnabled;
    this._id = config.id;
    this._imageCleanerEnabled = config.imageCleanerEnabled;
    this._imageCleanerIntervalHours = config.imageCleanerIntervalHours;
    this._kubernetesVersion = config.kubernetesVersion;
    this._localAccountDisabled = config.localAccountDisabled;
    this._location = config.location;
    this._name = config.name;
    this._nodeOsUpgradeChannel = config.nodeOsUpgradeChannel;
    this._nodeResourceGroup = config.nodeResourceGroup;
    this._oidcIssuerEnabled = config.oidcIssuerEnabled;
    this._openServiceMeshEnabled = config.openServiceMeshEnabled;
    this._privateClusterEnabled = config.privateClusterEnabled;
    this._privateClusterPublicFqdnEnabled = config.privateClusterPublicFqdnEnabled;
    this._privateDnsZoneId = config.privateDnsZoneId;
    this._resourceGroupName = config.resourceGroupName;
    this._roleBasedAccessControlEnabled = config.roleBasedAccessControlEnabled;
    this._runCommandEnabled = config.runCommandEnabled;
    this._skuTier = config.skuTier;
    this._supportPlan = config.supportPlan;
    this._tags = config.tags;
    this._workloadIdentityEnabled = config.workloadIdentityEnabled;
    this._aciConnectorLinux.internalValue = config.aciConnectorLinux;
    this._apiServerAccessProfile.internalValue = config.apiServerAccessProfile;
    this._autoScalerProfile.internalValue = config.autoScalerProfile;
    this._azureActiveDirectoryRoleBasedAccessControl.internalValue = config.azureActiveDirectoryRoleBasedAccessControl;
    this._confidentialComputing.internalValue = config.confidentialComputing;
    this._defaultNodePool.internalValue = config.defaultNodePool;
    this._httpProxyConfig.internalValue = config.httpProxyConfig;
    this._identity.internalValue = config.identity;
    this._ingressApplicationGateway.internalValue = config.ingressApplicationGateway;
    this._keyManagementService.internalValue = config.keyManagementService;
    this._keyVaultSecretsProvider.internalValue = config.keyVaultSecretsProvider;
    this._kubeletIdentity.internalValue = config.kubeletIdentity;
    this._linuxProfile.internalValue = config.linuxProfile;
    this._maintenanceWindow.internalValue = config.maintenanceWindow;
    this._maintenanceWindowAutoUpgrade.internalValue = config.maintenanceWindowAutoUpgrade;
    this._maintenanceWindowNodeOs.internalValue = config.maintenanceWindowNodeOs;
    this._microsoftDefender.internalValue = config.microsoftDefender;
    this._monitorMetrics.internalValue = config.monitorMetrics;
    this._networkProfile.internalValue = config.networkProfile;
    this._omsAgent.internalValue = config.omsAgent;
    this._serviceMeshProfile.internalValue = config.serviceMeshProfile;
    this._servicePrincipal.internalValue = config.servicePrincipal;
    this._storageProfile.internalValue = config.storageProfile;
    this._timeouts.internalValue = config.timeouts;
    this._webAppRouting.internalValue = config.webAppRouting;
    this._windowsProfile.internalValue = config.windowsProfile;
    this._workloadAutoscalerProfile.internalValue = config.workloadAutoscalerProfile;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // automatic_upgrade_channel - computed: false, optional: true, required: false
  private _automaticUpgradeChannel?: string; 
  public get automaticUpgradeChannel() {
    return this.getStringAttribute('automatic_upgrade_channel');
  }
  public set automaticUpgradeChannel(value: string) {
    this._automaticUpgradeChannel = value;
  }
  public resetAutomaticUpgradeChannel() {
    this._automaticUpgradeChannel = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get automaticUpgradeChannelInput() {
    return this._automaticUpgradeChannel;
  }

  // azure_policy_enabled - computed: false, optional: true, required: false
  private _azurePolicyEnabled?: boolean | cdktf.IResolvable; 
  public get azurePolicyEnabled() {
    return this.getBooleanAttribute('azure_policy_enabled');
  }
  public set azurePolicyEnabled(value: boolean | cdktf.IResolvable) {
    this._azurePolicyEnabled = value;
  }
  public resetAzurePolicyEnabled() {
    this._azurePolicyEnabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get azurePolicyEnabledInput() {
    return this._azurePolicyEnabled;
  }

  // cost_analysis_enabled - computed: false, optional: true, required: false
  private _costAnalysisEnabled?: boolean | cdktf.IResolvable; 
  public get costAnalysisEnabled() {
    return this.getBooleanAttribute('cost_analysis_enabled');
  }
  public set costAnalysisEnabled(value: boolean | cdktf.IResolvable) {
    this._costAnalysisEnabled = value;
  }
  public resetCostAnalysisEnabled() {
    this._costAnalysisEnabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get costAnalysisEnabledInput() {
    return this._costAnalysisEnabled;
  }

  // current_kubernetes_version - computed: true, optional: false, required: false
  public get currentKubernetesVersion() {
    return this.getStringAttribute('current_kubernetes_version');
  }

  // disk_encryption_set_id - computed: false, optional: true, required: false
  private _diskEncryptionSetId?: string; 
  public get diskEncryptionSetId() {
    return this.getStringAttribute('disk_encryption_set_id');
  }
  public set diskEncryptionSetId(value: string) {
    this._diskEncryptionSetId = value;
  }
  public resetDiskEncryptionSetId() {
    this._diskEncryptionSetId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get diskEncryptionSetIdInput() {
    return this._diskEncryptionSetId;
  }

  // dns_prefix - computed: false, optional: true, required: false
  private _dnsPrefix?: string; 
  public get dnsPrefix() {
    return this.getStringAttribute('dns_prefix');
  }
  public set dnsPrefix(value: string) {
    this._dnsPrefix = value;
  }
  public resetDnsPrefix() {
    this._dnsPrefix = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dnsPrefixInput() {
    return this._dnsPrefix;
  }

  // dns_prefix_private_cluster - computed: false, optional: true, required: false
  private _dnsPrefixPrivateCluster?: string; 
  public get dnsPrefixPrivateCluster() {
    return this.getStringAttribute('dns_prefix_private_cluster');
  }
  public set dnsPrefixPrivateCluster(value: string) {
    this._dnsPrefixPrivateCluster = value;
  }
  public resetDnsPrefixPrivateCluster() {
    this._dnsPrefixPrivateCluster = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dnsPrefixPrivateClusterInput() {
    return this._dnsPrefixPrivateCluster;
  }

  // edge_zone - computed: false, optional: true, required: false
  private _edgeZone?: string; 
  public get edgeZone() {
    return this.getStringAttribute('edge_zone');
  }
  public set edgeZone(value: string) {
    this._edgeZone = value;
  }
  public resetEdgeZone() {
    this._edgeZone = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get edgeZoneInput() {
    return this._edgeZone;
  }

  // fqdn - computed: true, optional: false, required: false
  public get fqdn() {
    return this.getStringAttribute('fqdn');
  }

  // http_application_routing_enabled - computed: false, optional: true, required: false
  private _httpApplicationRoutingEnabled?: boolean | cdktf.IResolvable; 
  public get httpApplicationRoutingEnabled() {
    return this.getBooleanAttribute('http_application_routing_enabled');
  }
  public set httpApplicationRoutingEnabled(value: boolean | cdktf.IResolvable) {
    this._httpApplicationRoutingEnabled = value;
  }
  public resetHttpApplicationRoutingEnabled() {
    this._httpApplicationRoutingEnabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get httpApplicationRoutingEnabledInput() {
    return this._httpApplicationRoutingEnabled;
  }

  // http_application_routing_zone_name - computed: true, optional: false, required: false
  public get httpApplicationRoutingZoneName() {
    return this.getStringAttribute('http_application_routing_zone_name');
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

  // image_cleaner_enabled - computed: false, optional: true, required: false
  private _imageCleanerEnabled?: boolean | cdktf.IResolvable; 
  public get imageCleanerEnabled() {
    return this.getBooleanAttribute('image_cleaner_enabled');
  }
  public set imageCleanerEnabled(value: boolean | cdktf.IResolvable) {
    this._imageCleanerEnabled = value;
  }
  public resetImageCleanerEnabled() {
    this._imageCleanerEnabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get imageCleanerEnabledInput() {
    return this._imageCleanerEnabled;
  }

  // image_cleaner_interval_hours - computed: false, optional: true, required: false
  private _imageCleanerIntervalHours?: number; 
  public get imageCleanerIntervalHours() {
    return this.getNumberAttribute('image_cleaner_interval_hours');
  }
  public set imageCleanerIntervalHours(value: number) {
    this._imageCleanerIntervalHours = value;
  }
  public resetImageCleanerIntervalHours() {
    this._imageCleanerIntervalHours = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get imageCleanerIntervalHoursInput() {
    return this._imageCleanerIntervalHours;
  }

  // kube_admin_config - computed: true, optional: false, required: false
  private _kubeAdminConfig = new KubernetesClusterKubeAdminConfigList(this, "kube_admin_config", false);
  public get kubeAdminConfig() {
    return this._kubeAdminConfig;
  }

  // kube_admin_config_raw - computed: true, optional: false, required: false
  public get kubeAdminConfigRaw() {
    return this.getStringAttribute('kube_admin_config_raw');
  }

  // kube_config - computed: true, optional: false, required: false
  private _kubeConfig = new KubernetesClusterKubeConfigList(this, "kube_config", false);
  public get kubeConfig() {
    return this._kubeConfig;
  }

  // kube_config_raw - computed: true, optional: false, required: false
  public get kubeConfigRaw() {
    return this.getStringAttribute('kube_config_raw');
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
    return this._kubernetesVersion;
  }

  // local_account_disabled - computed: false, optional: true, required: false
  private _localAccountDisabled?: boolean | cdktf.IResolvable; 
  public get localAccountDisabled() {
    return this.getBooleanAttribute('local_account_disabled');
  }
  public set localAccountDisabled(value: boolean | cdktf.IResolvable) {
    this._localAccountDisabled = value;
  }
  public resetLocalAccountDisabled() {
    this._localAccountDisabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get localAccountDisabledInput() {
    return this._localAccountDisabled;
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

  // node_os_upgrade_channel - computed: false, optional: true, required: false
  private _nodeOsUpgradeChannel?: string; 
  public get nodeOsUpgradeChannel() {
    return this.getStringAttribute('node_os_upgrade_channel');
  }
  public set nodeOsUpgradeChannel(value: string) {
    this._nodeOsUpgradeChannel = value;
  }
  public resetNodeOsUpgradeChannel() {
    this._nodeOsUpgradeChannel = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nodeOsUpgradeChannelInput() {
    return this._nodeOsUpgradeChannel;
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
    return this._nodeResourceGroup;
  }

  // node_resource_group_id - computed: true, optional: false, required: false
  public get nodeResourceGroupId() {
    return this.getStringAttribute('node_resource_group_id');
  }

  // oidc_issuer_enabled - computed: false, optional: true, required: false
  private _oidcIssuerEnabled?: boolean | cdktf.IResolvable; 
  public get oidcIssuerEnabled() {
    return this.getBooleanAttribute('oidc_issuer_enabled');
  }
  public set oidcIssuerEnabled(value: boolean | cdktf.IResolvable) {
    this._oidcIssuerEnabled = value;
  }
  public resetOidcIssuerEnabled() {
    this._oidcIssuerEnabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get oidcIssuerEnabledInput() {
    return this._oidcIssuerEnabled;
  }

  // oidc_issuer_url - computed: true, optional: false, required: false
  public get oidcIssuerUrl() {
    return this.getStringAttribute('oidc_issuer_url');
  }

  // open_service_mesh_enabled - computed: false, optional: true, required: false
  private _openServiceMeshEnabled?: boolean | cdktf.IResolvable; 
  public get openServiceMeshEnabled() {
    return this.getBooleanAttribute('open_service_mesh_enabled');
  }
  public set openServiceMeshEnabled(value: boolean | cdktf.IResolvable) {
    this._openServiceMeshEnabled = value;
  }
  public resetOpenServiceMeshEnabled() {
    this._openServiceMeshEnabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get openServiceMeshEnabledInput() {
    return this._openServiceMeshEnabled;
  }

  // portal_fqdn - computed: true, optional: false, required: false
  public get portalFqdn() {
    return this.getStringAttribute('portal_fqdn');
  }

  // private_cluster_enabled - computed: false, optional: true, required: false
  private _privateClusterEnabled?: boolean | cdktf.IResolvable; 
  public get privateClusterEnabled() {
    return this.getBooleanAttribute('private_cluster_enabled');
  }
  public set privateClusterEnabled(value: boolean | cdktf.IResolvable) {
    this._privateClusterEnabled = value;
  }
  public resetPrivateClusterEnabled() {
    this._privateClusterEnabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get privateClusterEnabledInput() {
    return this._privateClusterEnabled;
  }

  // private_cluster_public_fqdn_enabled - computed: false, optional: true, required: false
  private _privateClusterPublicFqdnEnabled?: boolean | cdktf.IResolvable; 
  public get privateClusterPublicFqdnEnabled() {
    return this.getBooleanAttribute('private_cluster_public_fqdn_enabled');
  }
  public set privateClusterPublicFqdnEnabled(value: boolean | cdktf.IResolvable) {
    this._privateClusterPublicFqdnEnabled = value;
  }
  public resetPrivateClusterPublicFqdnEnabled() {
    this._privateClusterPublicFqdnEnabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get privateClusterPublicFqdnEnabledInput() {
    return this._privateClusterPublicFqdnEnabled;
  }

  // private_dns_zone_id - computed: true, optional: true, required: false
  private _privateDnsZoneId?: string; 
  public get privateDnsZoneId() {
    return this.getStringAttribute('private_dns_zone_id');
  }
  public set privateDnsZoneId(value: string) {
    this._privateDnsZoneId = value;
  }
  public resetPrivateDnsZoneId() {
    this._privateDnsZoneId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get privateDnsZoneIdInput() {
    return this._privateDnsZoneId;
  }

  // private_fqdn - computed: true, optional: false, required: false
  public get privateFqdn() {
    return this.getStringAttribute('private_fqdn');
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

  // role_based_access_control_enabled - computed: false, optional: true, required: false
  private _roleBasedAccessControlEnabled?: boolean | cdktf.IResolvable; 
  public get roleBasedAccessControlEnabled() {
    return this.getBooleanAttribute('role_based_access_control_enabled');
  }
  public set roleBasedAccessControlEnabled(value: boolean | cdktf.IResolvable) {
    this._roleBasedAccessControlEnabled = value;
  }
  public resetRoleBasedAccessControlEnabled() {
    this._roleBasedAccessControlEnabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get roleBasedAccessControlEnabledInput() {
    return this._roleBasedAccessControlEnabled;
  }

  // run_command_enabled - computed: false, optional: true, required: false
  private _runCommandEnabled?: boolean | cdktf.IResolvable; 
  public get runCommandEnabled() {
    return this.getBooleanAttribute('run_command_enabled');
  }
  public set runCommandEnabled(value: boolean | cdktf.IResolvable) {
    this._runCommandEnabled = value;
  }
  public resetRunCommandEnabled() {
    this._runCommandEnabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get runCommandEnabledInput() {
    return this._runCommandEnabled;
  }

  // sku_tier - computed: false, optional: true, required: false
  private _skuTier?: string; 
  public get skuTier() {
    return this.getStringAttribute('sku_tier');
  }
  public set skuTier(value: string) {
    this._skuTier = value;
  }
  public resetSkuTier() {
    this._skuTier = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get skuTierInput() {
    return this._skuTier;
  }

  // support_plan - computed: false, optional: true, required: false
  private _supportPlan?: string; 
  public get supportPlan() {
    return this.getStringAttribute('support_plan');
  }
  public set supportPlan(value: string) {
    this._supportPlan = value;
  }
  public resetSupportPlan() {
    this._supportPlan = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get supportPlanInput() {
    return this._supportPlan;
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

  // workload_identity_enabled - computed: false, optional: true, required: false
  private _workloadIdentityEnabled?: boolean | cdktf.IResolvable; 
  public get workloadIdentityEnabled() {
    return this.getBooleanAttribute('workload_identity_enabled');
  }
  public set workloadIdentityEnabled(value: boolean | cdktf.IResolvable) {
    this._workloadIdentityEnabled = value;
  }
  public resetWorkloadIdentityEnabled() {
    this._workloadIdentityEnabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get workloadIdentityEnabledInput() {
    return this._workloadIdentityEnabled;
  }

  // aci_connector_linux - computed: false, optional: true, required: false
  private _aciConnectorLinux = new KubernetesClusterAciConnectorLinuxOutputReference(this, "aci_connector_linux");
  public get aciConnectorLinux() {
    return this._aciConnectorLinux;
  }
  public putAciConnectorLinux(value: KubernetesClusterAciConnectorLinux) {
    this._aciConnectorLinux.internalValue = value;
  }
  public resetAciConnectorLinux() {
    this._aciConnectorLinux.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get aciConnectorLinuxInput() {
    return this._aciConnectorLinux.internalValue;
  }

  // api_server_access_profile - computed: false, optional: true, required: false
  private _apiServerAccessProfile = new KubernetesClusterApiServerAccessProfileOutputReference(this, "api_server_access_profile");
  public get apiServerAccessProfile() {
    return this._apiServerAccessProfile;
  }
  public putApiServerAccessProfile(value: KubernetesClusterApiServerAccessProfile) {
    this._apiServerAccessProfile.internalValue = value;
  }
  public resetApiServerAccessProfile() {
    this._apiServerAccessProfile.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get apiServerAccessProfileInput() {
    return this._apiServerAccessProfile.internalValue;
  }

  // auto_scaler_profile - computed: false, optional: true, required: false
  private _autoScalerProfile = new KubernetesClusterAutoScalerProfileOutputReference(this, "auto_scaler_profile");
  public get autoScalerProfile() {
    return this._autoScalerProfile;
  }
  public putAutoScalerProfile(value: KubernetesClusterAutoScalerProfile) {
    this._autoScalerProfile.internalValue = value;
  }
  public resetAutoScalerProfile() {
    this._autoScalerProfile.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get autoScalerProfileInput() {
    return this._autoScalerProfile.internalValue;
  }

  // azure_active_directory_role_based_access_control - computed: false, optional: true, required: false
  private _azureActiveDirectoryRoleBasedAccessControl = new KubernetesClusterAzureActiveDirectoryRoleBasedAccessControlOutputReference(this, "azure_active_directory_role_based_access_control");
  public get azureActiveDirectoryRoleBasedAccessControl() {
    return this._azureActiveDirectoryRoleBasedAccessControl;
  }
  public putAzureActiveDirectoryRoleBasedAccessControl(value: KubernetesClusterAzureActiveDirectoryRoleBasedAccessControl) {
    this._azureActiveDirectoryRoleBasedAccessControl.internalValue = value;
  }
  public resetAzureActiveDirectoryRoleBasedAccessControl() {
    this._azureActiveDirectoryRoleBasedAccessControl.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get azureActiveDirectoryRoleBasedAccessControlInput() {
    return this._azureActiveDirectoryRoleBasedAccessControl.internalValue;
  }

  // confidential_computing - computed: false, optional: true, required: false
  private _confidentialComputing = new KubernetesClusterConfidentialComputingOutputReference(this, "confidential_computing");
  public get confidentialComputing() {
    return this._confidentialComputing;
  }
  public putConfidentialComputing(value: KubernetesClusterConfidentialComputing) {
    this._confidentialComputing.internalValue = value;
  }
  public resetConfidentialComputing() {
    this._confidentialComputing.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get confidentialComputingInput() {
    return this._confidentialComputing.internalValue;
  }

  // default_node_pool - computed: false, optional: false, required: true
  private _defaultNodePool = new KubernetesClusterDefaultNodePoolOutputReference(this, "default_node_pool");
  public get defaultNodePool() {
    return this._defaultNodePool;
  }
  public putDefaultNodePool(value: KubernetesClusterDefaultNodePool) {
    this._defaultNodePool.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get defaultNodePoolInput() {
    return this._defaultNodePool.internalValue;
  }

  // http_proxy_config - computed: false, optional: true, required: false
  private _httpProxyConfig = new KubernetesClusterHttpProxyConfigOutputReference(this, "http_proxy_config");
  public get httpProxyConfig() {
    return this._httpProxyConfig;
  }
  public putHttpProxyConfig(value: KubernetesClusterHttpProxyConfig) {
    this._httpProxyConfig.internalValue = value;
  }
  public resetHttpProxyConfig() {
    this._httpProxyConfig.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get httpProxyConfigInput() {
    return this._httpProxyConfig.internalValue;
  }

  // identity - computed: false, optional: true, required: false
  private _identity = new KubernetesClusterIdentityOutputReference(this, "identity");
  public get identity() {
    return this._identity;
  }
  public putIdentity(value: KubernetesClusterIdentity) {
    this._identity.internalValue = value;
  }
  public resetIdentity() {
    this._identity.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get identityInput() {
    return this._identity.internalValue;
  }

  // ingress_application_gateway - computed: false, optional: true, required: false
  private _ingressApplicationGateway = new KubernetesClusterIngressApplicationGatewayOutputReference(this, "ingress_application_gateway");
  public get ingressApplicationGateway() {
    return this._ingressApplicationGateway;
  }
  public putIngressApplicationGateway(value: KubernetesClusterIngressApplicationGateway) {
    this._ingressApplicationGateway.internalValue = value;
  }
  public resetIngressApplicationGateway() {
    this._ingressApplicationGateway.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ingressApplicationGatewayInput() {
    return this._ingressApplicationGateway.internalValue;
  }

  // key_management_service - computed: false, optional: true, required: false
  private _keyManagementService = new KubernetesClusterKeyManagementServiceOutputReference(this, "key_management_service");
  public get keyManagementService() {
    return this._keyManagementService;
  }
  public putKeyManagementService(value: KubernetesClusterKeyManagementService) {
    this._keyManagementService.internalValue = value;
  }
  public resetKeyManagementService() {
    this._keyManagementService.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get keyManagementServiceInput() {
    return this._keyManagementService.internalValue;
  }

  // key_vault_secrets_provider - computed: false, optional: true, required: false
  private _keyVaultSecretsProvider = new KubernetesClusterKeyVaultSecretsProviderOutputReference(this, "key_vault_secrets_provider");
  public get keyVaultSecretsProvider() {
    return this._keyVaultSecretsProvider;
  }
  public putKeyVaultSecretsProvider(value: KubernetesClusterKeyVaultSecretsProvider) {
    this._keyVaultSecretsProvider.internalValue = value;
  }
  public resetKeyVaultSecretsProvider() {
    this._keyVaultSecretsProvider.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get keyVaultSecretsProviderInput() {
    return this._keyVaultSecretsProvider.internalValue;
  }

  // kubelet_identity - computed: false, optional: true, required: false
  private _kubeletIdentity = new KubernetesClusterKubeletIdentityOutputReference(this, "kubelet_identity");
  public get kubeletIdentity() {
    return this._kubeletIdentity;
  }
  public putKubeletIdentity(value: KubernetesClusterKubeletIdentity) {
    this._kubeletIdentity.internalValue = value;
  }
  public resetKubeletIdentity() {
    this._kubeletIdentity.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get kubeletIdentityInput() {
    return this._kubeletIdentity.internalValue;
  }

  // linux_profile - computed: false, optional: true, required: false
  private _linuxProfile = new KubernetesClusterLinuxProfileOutputReference(this, "linux_profile");
  public get linuxProfile() {
    return this._linuxProfile;
  }
  public putLinuxProfile(value: KubernetesClusterLinuxProfile) {
    this._linuxProfile.internalValue = value;
  }
  public resetLinuxProfile() {
    this._linuxProfile.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get linuxProfileInput() {
    return this._linuxProfile.internalValue;
  }

  // maintenance_window - computed: false, optional: true, required: false
  private _maintenanceWindow = new KubernetesClusterMaintenanceWindowOutputReference(this, "maintenance_window");
  public get maintenanceWindow() {
    return this._maintenanceWindow;
  }
  public putMaintenanceWindow(value: KubernetesClusterMaintenanceWindow) {
    this._maintenanceWindow.internalValue = value;
  }
  public resetMaintenanceWindow() {
    this._maintenanceWindow.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maintenanceWindowInput() {
    return this._maintenanceWindow.internalValue;
  }

  // maintenance_window_auto_upgrade - computed: false, optional: true, required: false
  private _maintenanceWindowAutoUpgrade = new KubernetesClusterMaintenanceWindowAutoUpgradeOutputReference(this, "maintenance_window_auto_upgrade");
  public get maintenanceWindowAutoUpgrade() {
    return this._maintenanceWindowAutoUpgrade;
  }
  public putMaintenanceWindowAutoUpgrade(value: KubernetesClusterMaintenanceWindowAutoUpgrade) {
    this._maintenanceWindowAutoUpgrade.internalValue = value;
  }
  public resetMaintenanceWindowAutoUpgrade() {
    this._maintenanceWindowAutoUpgrade.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maintenanceWindowAutoUpgradeInput() {
    return this._maintenanceWindowAutoUpgrade.internalValue;
  }

  // maintenance_window_node_os - computed: false, optional: true, required: false
  private _maintenanceWindowNodeOs = new KubernetesClusterMaintenanceWindowNodeOsOutputReference(this, "maintenance_window_node_os");
  public get maintenanceWindowNodeOs() {
    return this._maintenanceWindowNodeOs;
  }
  public putMaintenanceWindowNodeOs(value: KubernetesClusterMaintenanceWindowNodeOs) {
    this._maintenanceWindowNodeOs.internalValue = value;
  }
  public resetMaintenanceWindowNodeOs() {
    this._maintenanceWindowNodeOs.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maintenanceWindowNodeOsInput() {
    return this._maintenanceWindowNodeOs.internalValue;
  }

  // microsoft_defender - computed: false, optional: true, required: false
  private _microsoftDefender = new KubernetesClusterMicrosoftDefenderOutputReference(this, "microsoft_defender");
  public get microsoftDefender() {
    return this._microsoftDefender;
  }
  public putMicrosoftDefender(value: KubernetesClusterMicrosoftDefender) {
    this._microsoftDefender.internalValue = value;
  }
  public resetMicrosoftDefender() {
    this._microsoftDefender.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get microsoftDefenderInput() {
    return this._microsoftDefender.internalValue;
  }

  // monitor_metrics - computed: false, optional: true, required: false
  private _monitorMetrics = new KubernetesClusterMonitorMetricsOutputReference(this, "monitor_metrics");
  public get monitorMetrics() {
    return this._monitorMetrics;
  }
  public putMonitorMetrics(value: KubernetesClusterMonitorMetrics) {
    this._monitorMetrics.internalValue = value;
  }
  public resetMonitorMetrics() {
    this._monitorMetrics.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get monitorMetricsInput() {
    return this._monitorMetrics.internalValue;
  }

  // network_profile - computed: false, optional: true, required: false
  private _networkProfile = new KubernetesClusterNetworkProfileOutputReference(this, "network_profile");
  public get networkProfile() {
    return this._networkProfile;
  }
  public putNetworkProfile(value: KubernetesClusterNetworkProfile) {
    this._networkProfile.internalValue = value;
  }
  public resetNetworkProfile() {
    this._networkProfile.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get networkProfileInput() {
    return this._networkProfile.internalValue;
  }

  // oms_agent - computed: false, optional: true, required: false
  private _omsAgent = new KubernetesClusterOmsAgentOutputReference(this, "oms_agent");
  public get omsAgent() {
    return this._omsAgent;
  }
  public putOmsAgent(value: KubernetesClusterOmsAgent) {
    this._omsAgent.internalValue = value;
  }
  public resetOmsAgent() {
    this._omsAgent.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get omsAgentInput() {
    return this._omsAgent.internalValue;
  }

  // service_mesh_profile - computed: false, optional: true, required: false
  private _serviceMeshProfile = new KubernetesClusterServiceMeshProfileOutputReference(this, "service_mesh_profile");
  public get serviceMeshProfile() {
    return this._serviceMeshProfile;
  }
  public putServiceMeshProfile(value: KubernetesClusterServiceMeshProfile) {
    this._serviceMeshProfile.internalValue = value;
  }
  public resetServiceMeshProfile() {
    this._serviceMeshProfile.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get serviceMeshProfileInput() {
    return this._serviceMeshProfile.internalValue;
  }

  // service_principal - computed: false, optional: true, required: false
  private _servicePrincipal = new KubernetesClusterServicePrincipalOutputReference(this, "service_principal");
  public get servicePrincipal() {
    return this._servicePrincipal;
  }
  public putServicePrincipal(value: KubernetesClusterServicePrincipal) {
    this._servicePrincipal.internalValue = value;
  }
  public resetServicePrincipal() {
    this._servicePrincipal.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get servicePrincipalInput() {
    return this._servicePrincipal.internalValue;
  }

  // storage_profile - computed: false, optional: true, required: false
  private _storageProfile = new KubernetesClusterStorageProfileOutputReference(this, "storage_profile");
  public get storageProfile() {
    return this._storageProfile;
  }
  public putStorageProfile(value: KubernetesClusterStorageProfile) {
    this._storageProfile.internalValue = value;
  }
  public resetStorageProfile() {
    this._storageProfile.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get storageProfileInput() {
    return this._storageProfile.internalValue;
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts = new KubernetesClusterTimeoutsOutputReference(this, "timeouts");
  public get timeouts() {
    return this._timeouts;
  }
  public putTimeouts(value: KubernetesClusterTimeouts) {
    this._timeouts.internalValue = value;
  }
  public resetTimeouts() {
    this._timeouts.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get timeoutsInput() {
    return this._timeouts.internalValue;
  }

  // web_app_routing - computed: false, optional: true, required: false
  private _webAppRouting = new KubernetesClusterWebAppRoutingOutputReference(this, "web_app_routing");
  public get webAppRouting() {
    return this._webAppRouting;
  }
  public putWebAppRouting(value: KubernetesClusterWebAppRouting) {
    this._webAppRouting.internalValue = value;
  }
  public resetWebAppRouting() {
    this._webAppRouting.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get webAppRoutingInput() {
    return this._webAppRouting.internalValue;
  }

  // windows_profile - computed: false, optional: true, required: false
  private _windowsProfile = new KubernetesClusterWindowsProfileOutputReference(this, "windows_profile");
  public get windowsProfile() {
    return this._windowsProfile;
  }
  public putWindowsProfile(value: KubernetesClusterWindowsProfile) {
    this._windowsProfile.internalValue = value;
  }
  public resetWindowsProfile() {
    this._windowsProfile.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get windowsProfileInput() {
    return this._windowsProfile.internalValue;
  }

  // workload_autoscaler_profile - computed: false, optional: true, required: false
  private _workloadAutoscalerProfile = new KubernetesClusterWorkloadAutoscalerProfileOutputReference(this, "workload_autoscaler_profile");
  public get workloadAutoscalerProfile() {
    return this._workloadAutoscalerProfile;
  }
  public putWorkloadAutoscalerProfile(value: KubernetesClusterWorkloadAutoscalerProfile) {
    this._workloadAutoscalerProfile.internalValue = value;
  }
  public resetWorkloadAutoscalerProfile() {
    this._workloadAutoscalerProfile.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get workloadAutoscalerProfileInput() {
    return this._workloadAutoscalerProfile.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      automatic_upgrade_channel: cdktf.stringToTerraform(this._automaticUpgradeChannel),
      azure_policy_enabled: cdktf.booleanToTerraform(this._azurePolicyEnabled),
      cost_analysis_enabled: cdktf.booleanToTerraform(this._costAnalysisEnabled),
      disk_encryption_set_id: cdktf.stringToTerraform(this._diskEncryptionSetId),
      dns_prefix: cdktf.stringToTerraform(this._dnsPrefix),
      dns_prefix_private_cluster: cdktf.stringToTerraform(this._dnsPrefixPrivateCluster),
      edge_zone: cdktf.stringToTerraform(this._edgeZone),
      http_application_routing_enabled: cdktf.booleanToTerraform(this._httpApplicationRoutingEnabled),
      id: cdktf.stringToTerraform(this._id),
      image_cleaner_enabled: cdktf.booleanToTerraform(this._imageCleanerEnabled),
      image_cleaner_interval_hours: cdktf.numberToTerraform(this._imageCleanerIntervalHours),
      kubernetes_version: cdktf.stringToTerraform(this._kubernetesVersion),
      local_account_disabled: cdktf.booleanToTerraform(this._localAccountDisabled),
      location: cdktf.stringToTerraform(this._location),
      name: cdktf.stringToTerraform(this._name),
      node_os_upgrade_channel: cdktf.stringToTerraform(this._nodeOsUpgradeChannel),
      node_resource_group: cdktf.stringToTerraform(this._nodeResourceGroup),
      oidc_issuer_enabled: cdktf.booleanToTerraform(this._oidcIssuerEnabled),
      open_service_mesh_enabled: cdktf.booleanToTerraform(this._openServiceMeshEnabled),
      private_cluster_enabled: cdktf.booleanToTerraform(this._privateClusterEnabled),
      private_cluster_public_fqdn_enabled: cdktf.booleanToTerraform(this._privateClusterPublicFqdnEnabled),
      private_dns_zone_id: cdktf.stringToTerraform(this._privateDnsZoneId),
      resource_group_name: cdktf.stringToTerraform(this._resourceGroupName),
      role_based_access_control_enabled: cdktf.booleanToTerraform(this._roleBasedAccessControlEnabled),
      run_command_enabled: cdktf.booleanToTerraform(this._runCommandEnabled),
      sku_tier: cdktf.stringToTerraform(this._skuTier),
      support_plan: cdktf.stringToTerraform(this._supportPlan),
      tags: cdktf.hashMapper(cdktf.stringToTerraform)(this._tags),
      workload_identity_enabled: cdktf.booleanToTerraform(this._workloadIdentityEnabled),
      aci_connector_linux: kubernetesClusterAciConnectorLinuxToTerraform(this._aciConnectorLinux.internalValue),
      api_server_access_profile: kubernetesClusterApiServerAccessProfileToTerraform(this._apiServerAccessProfile.internalValue),
      auto_scaler_profile: kubernetesClusterAutoScalerProfileToTerraform(this._autoScalerProfile.internalValue),
      azure_active_directory_role_based_access_control: kubernetesClusterAzureActiveDirectoryRoleBasedAccessControlToTerraform(this._azureActiveDirectoryRoleBasedAccessControl.internalValue),
      confidential_computing: kubernetesClusterConfidentialComputingToTerraform(this._confidentialComputing.internalValue),
      default_node_pool: kubernetesClusterDefaultNodePoolToTerraform(this._defaultNodePool.internalValue),
      http_proxy_config: kubernetesClusterHttpProxyConfigToTerraform(this._httpProxyConfig.internalValue),
      identity: kubernetesClusterIdentityToTerraform(this._identity.internalValue),
      ingress_application_gateway: kubernetesClusterIngressApplicationGatewayToTerraform(this._ingressApplicationGateway.internalValue),
      key_management_service: kubernetesClusterKeyManagementServiceToTerraform(this._keyManagementService.internalValue),
      key_vault_secrets_provider: kubernetesClusterKeyVaultSecretsProviderToTerraform(this._keyVaultSecretsProvider.internalValue),
      kubelet_identity: kubernetesClusterKubeletIdentityToTerraform(this._kubeletIdentity.internalValue),
      linux_profile: kubernetesClusterLinuxProfileToTerraform(this._linuxProfile.internalValue),
      maintenance_window: kubernetesClusterMaintenanceWindowToTerraform(this._maintenanceWindow.internalValue),
      maintenance_window_auto_upgrade: kubernetesClusterMaintenanceWindowAutoUpgradeToTerraform(this._maintenanceWindowAutoUpgrade.internalValue),
      maintenance_window_node_os: kubernetesClusterMaintenanceWindowNodeOsToTerraform(this._maintenanceWindowNodeOs.internalValue),
      microsoft_defender: kubernetesClusterMicrosoftDefenderToTerraform(this._microsoftDefender.internalValue),
      monitor_metrics: kubernetesClusterMonitorMetricsToTerraform(this._monitorMetrics.internalValue),
      network_profile: kubernetesClusterNetworkProfileToTerraform(this._networkProfile.internalValue),
      oms_agent: kubernetesClusterOmsAgentToTerraform(this._omsAgent.internalValue),
      service_mesh_profile: kubernetesClusterServiceMeshProfileToTerraform(this._serviceMeshProfile.internalValue),
      service_principal: kubernetesClusterServicePrincipalToTerraform(this._servicePrincipal.internalValue),
      storage_profile: kubernetesClusterStorageProfileToTerraform(this._storageProfile.internalValue),
      timeouts: kubernetesClusterTimeoutsToTerraform(this._timeouts.internalValue),
      web_app_routing: kubernetesClusterWebAppRoutingToTerraform(this._webAppRouting.internalValue),
      windows_profile: kubernetesClusterWindowsProfileToTerraform(this._windowsProfile.internalValue),
      workload_autoscaler_profile: kubernetesClusterWorkloadAutoscalerProfileToTerraform(this._workloadAutoscalerProfile.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      automatic_upgrade_channel: {
        value: cdktf.stringToHclTerraform(this._automaticUpgradeChannel),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      azure_policy_enabled: {
        value: cdktf.booleanToHclTerraform(this._azurePolicyEnabled),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      cost_analysis_enabled: {
        value: cdktf.booleanToHclTerraform(this._costAnalysisEnabled),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      disk_encryption_set_id: {
        value: cdktf.stringToHclTerraform(this._diskEncryptionSetId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      dns_prefix: {
        value: cdktf.stringToHclTerraform(this._dnsPrefix),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      dns_prefix_private_cluster: {
        value: cdktf.stringToHclTerraform(this._dnsPrefixPrivateCluster),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      edge_zone: {
        value: cdktf.stringToHclTerraform(this._edgeZone),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      http_application_routing_enabled: {
        value: cdktf.booleanToHclTerraform(this._httpApplicationRoutingEnabled),
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
      image_cleaner_enabled: {
        value: cdktf.booleanToHclTerraform(this._imageCleanerEnabled),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      image_cleaner_interval_hours: {
        value: cdktf.numberToHclTerraform(this._imageCleanerIntervalHours),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      kubernetes_version: {
        value: cdktf.stringToHclTerraform(this._kubernetesVersion),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      local_account_disabled: {
        value: cdktf.booleanToHclTerraform(this._localAccountDisabled),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
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
      node_os_upgrade_channel: {
        value: cdktf.stringToHclTerraform(this._nodeOsUpgradeChannel),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      node_resource_group: {
        value: cdktf.stringToHclTerraform(this._nodeResourceGroup),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      oidc_issuer_enabled: {
        value: cdktf.booleanToHclTerraform(this._oidcIssuerEnabled),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      open_service_mesh_enabled: {
        value: cdktf.booleanToHclTerraform(this._openServiceMeshEnabled),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      private_cluster_enabled: {
        value: cdktf.booleanToHclTerraform(this._privateClusterEnabled),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      private_cluster_public_fqdn_enabled: {
        value: cdktf.booleanToHclTerraform(this._privateClusterPublicFqdnEnabled),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      private_dns_zone_id: {
        value: cdktf.stringToHclTerraform(this._privateDnsZoneId),
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
      role_based_access_control_enabled: {
        value: cdktf.booleanToHclTerraform(this._roleBasedAccessControlEnabled),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      run_command_enabled: {
        value: cdktf.booleanToHclTerraform(this._runCommandEnabled),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      sku_tier: {
        value: cdktf.stringToHclTerraform(this._skuTier),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      support_plan: {
        value: cdktf.stringToHclTerraform(this._supportPlan),
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
      workload_identity_enabled: {
        value: cdktf.booleanToHclTerraform(this._workloadIdentityEnabled),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      aci_connector_linux: {
        value: kubernetesClusterAciConnectorLinuxToHclTerraform(this._aciConnectorLinux.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "KubernetesClusterAciConnectorLinuxList",
      },
      api_server_access_profile: {
        value: kubernetesClusterApiServerAccessProfileToHclTerraform(this._apiServerAccessProfile.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "KubernetesClusterApiServerAccessProfileList",
      },
      auto_scaler_profile: {
        value: kubernetesClusterAutoScalerProfileToHclTerraform(this._autoScalerProfile.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "KubernetesClusterAutoScalerProfileList",
      },
      azure_active_directory_role_based_access_control: {
        value: kubernetesClusterAzureActiveDirectoryRoleBasedAccessControlToHclTerraform(this._azureActiveDirectoryRoleBasedAccessControl.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "KubernetesClusterAzureActiveDirectoryRoleBasedAccessControlList",
      },
      confidential_computing: {
        value: kubernetesClusterConfidentialComputingToHclTerraform(this._confidentialComputing.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "KubernetesClusterConfidentialComputingList",
      },
      default_node_pool: {
        value: kubernetesClusterDefaultNodePoolToHclTerraform(this._defaultNodePool.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "KubernetesClusterDefaultNodePoolList",
      },
      http_proxy_config: {
        value: kubernetesClusterHttpProxyConfigToHclTerraform(this._httpProxyConfig.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "KubernetesClusterHttpProxyConfigList",
      },
      identity: {
        value: kubernetesClusterIdentityToHclTerraform(this._identity.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "KubernetesClusterIdentityList",
      },
      ingress_application_gateway: {
        value: kubernetesClusterIngressApplicationGatewayToHclTerraform(this._ingressApplicationGateway.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "KubernetesClusterIngressApplicationGatewayList",
      },
      key_management_service: {
        value: kubernetesClusterKeyManagementServiceToHclTerraform(this._keyManagementService.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "KubernetesClusterKeyManagementServiceList",
      },
      key_vault_secrets_provider: {
        value: kubernetesClusterKeyVaultSecretsProviderToHclTerraform(this._keyVaultSecretsProvider.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "KubernetesClusterKeyVaultSecretsProviderList",
      },
      kubelet_identity: {
        value: kubernetesClusterKubeletIdentityToHclTerraform(this._kubeletIdentity.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "KubernetesClusterKubeletIdentityList",
      },
      linux_profile: {
        value: kubernetesClusterLinuxProfileToHclTerraform(this._linuxProfile.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "KubernetesClusterLinuxProfileList",
      },
      maintenance_window: {
        value: kubernetesClusterMaintenanceWindowToHclTerraform(this._maintenanceWindow.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "KubernetesClusterMaintenanceWindowList",
      },
      maintenance_window_auto_upgrade: {
        value: kubernetesClusterMaintenanceWindowAutoUpgradeToHclTerraform(this._maintenanceWindowAutoUpgrade.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "KubernetesClusterMaintenanceWindowAutoUpgradeList",
      },
      maintenance_window_node_os: {
        value: kubernetesClusterMaintenanceWindowNodeOsToHclTerraform(this._maintenanceWindowNodeOs.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "KubernetesClusterMaintenanceWindowNodeOsList",
      },
      microsoft_defender: {
        value: kubernetesClusterMicrosoftDefenderToHclTerraform(this._microsoftDefender.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "KubernetesClusterMicrosoftDefenderList",
      },
      monitor_metrics: {
        value: kubernetesClusterMonitorMetricsToHclTerraform(this._monitorMetrics.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "KubernetesClusterMonitorMetricsList",
      },
      network_profile: {
        value: kubernetesClusterNetworkProfileToHclTerraform(this._networkProfile.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "KubernetesClusterNetworkProfileList",
      },
      oms_agent: {
        value: kubernetesClusterOmsAgentToHclTerraform(this._omsAgent.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "KubernetesClusterOmsAgentList",
      },
      service_mesh_profile: {
        value: kubernetesClusterServiceMeshProfileToHclTerraform(this._serviceMeshProfile.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "KubernetesClusterServiceMeshProfileList",
      },
      service_principal: {
        value: kubernetesClusterServicePrincipalToHclTerraform(this._servicePrincipal.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "KubernetesClusterServicePrincipalList",
      },
      storage_profile: {
        value: kubernetesClusterStorageProfileToHclTerraform(this._storageProfile.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "KubernetesClusterStorageProfileList",
      },
      timeouts: {
        value: kubernetesClusterTimeoutsToHclTerraform(this._timeouts.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "KubernetesClusterTimeouts",
      },
      web_app_routing: {
        value: kubernetesClusterWebAppRoutingToHclTerraform(this._webAppRouting.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "KubernetesClusterWebAppRoutingList",
      },
      windows_profile: {
        value: kubernetesClusterWindowsProfileToHclTerraform(this._windowsProfile.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "KubernetesClusterWindowsProfileList",
      },
      workload_autoscaler_profile: {
        value: kubernetesClusterWorkloadAutoscalerProfileToHclTerraform(this._workloadAutoscalerProfile.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "KubernetesClusterWorkloadAutoscalerProfileList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
