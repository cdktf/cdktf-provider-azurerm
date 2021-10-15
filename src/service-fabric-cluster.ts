// https://www.terraform.io/docs/providers/azurerm/r/service_fabric_cluster.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface ServiceFabricClusterConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/service_fabric_cluster.html#add_on_features ServiceFabricCluster#add_on_features}
  */
  readonly addOnFeatures?: string[];
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/service_fabric_cluster.html#cluster_code_version ServiceFabricCluster#cluster_code_version}
  */
  readonly clusterCodeVersion?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/service_fabric_cluster.html#location ServiceFabricCluster#location}
  */
  readonly location: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/service_fabric_cluster.html#management_endpoint ServiceFabricCluster#management_endpoint}
  */
  readonly managementEndpoint: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/service_fabric_cluster.html#name ServiceFabricCluster#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/service_fabric_cluster.html#reliability_level ServiceFabricCluster#reliability_level}
  */
  readonly reliabilityLevel: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/service_fabric_cluster.html#resource_group_name ServiceFabricCluster#resource_group_name}
  */
  readonly resourceGroupName: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/service_fabric_cluster.html#service_fabric_zonal_upgrade_mode ServiceFabricCluster#service_fabric_zonal_upgrade_mode}
  */
  readonly serviceFabricZonalUpgradeMode?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/service_fabric_cluster.html#tags ServiceFabricCluster#tags}
  */
  readonly tags?: { [key: string]: string } | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/service_fabric_cluster.html#upgrade_mode ServiceFabricCluster#upgrade_mode}
  */
  readonly upgradeMode: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/service_fabric_cluster.html#vm_image ServiceFabricCluster#vm_image}
  */
  readonly vmImage: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/service_fabric_cluster.html#vmss_zonal_upgrade_mode ServiceFabricCluster#vmss_zonal_upgrade_mode}
  */
  readonly vmssZonalUpgradeMode?: string;
  /**
  * azure_active_directory block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/service_fabric_cluster.html#azure_active_directory ServiceFabricCluster#azure_active_directory}
  */
  readonly azureActiveDirectory?: ServiceFabricClusterAzureActiveDirectory[];
  /**
  * certificate block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/service_fabric_cluster.html#certificate ServiceFabricCluster#certificate}
  */
  readonly certificate?: ServiceFabricClusterCertificate[];
  /**
  * certificate_common_names block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/service_fabric_cluster.html#certificate_common_names ServiceFabricCluster#certificate_common_names}
  */
  readonly certificateCommonNames?: ServiceFabricClusterCertificateCommonNames[];
  /**
  * client_certificate_common_name block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/service_fabric_cluster.html#client_certificate_common_name ServiceFabricCluster#client_certificate_common_name}
  */
  readonly clientCertificateCommonName?: ServiceFabricClusterClientCertificateCommonName[];
  /**
  * client_certificate_thumbprint block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/service_fabric_cluster.html#client_certificate_thumbprint ServiceFabricCluster#client_certificate_thumbprint}
  */
  readonly clientCertificateThumbprint?: ServiceFabricClusterClientCertificateThumbprint[];
  /**
  * diagnostics_config block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/service_fabric_cluster.html#diagnostics_config ServiceFabricCluster#diagnostics_config}
  */
  readonly diagnosticsConfig?: ServiceFabricClusterDiagnosticsConfig[];
  /**
  * fabric_settings block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/service_fabric_cluster.html#fabric_settings ServiceFabricCluster#fabric_settings}
  */
  readonly fabricSettings?: ServiceFabricClusterFabricSettings[];
  /**
  * node_type block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/service_fabric_cluster.html#node_type ServiceFabricCluster#node_type}
  */
  readonly nodeType: ServiceFabricClusterNodeType[];
  /**
  * reverse_proxy_certificate block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/service_fabric_cluster.html#reverse_proxy_certificate ServiceFabricCluster#reverse_proxy_certificate}
  */
  readonly reverseProxyCertificate?: ServiceFabricClusterReverseProxyCertificate[];
  /**
  * reverse_proxy_certificate_common_names block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/service_fabric_cluster.html#reverse_proxy_certificate_common_names ServiceFabricCluster#reverse_proxy_certificate_common_names}
  */
  readonly reverseProxyCertificateCommonNames?: ServiceFabricClusterReverseProxyCertificateCommonNames[];
  /**
  * timeouts block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/service_fabric_cluster.html#timeouts ServiceFabricCluster#timeouts}
  */
  readonly timeouts?: ServiceFabricClusterTimeouts;
  /**
  * upgrade_policy block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/service_fabric_cluster.html#upgrade_policy ServiceFabricCluster#upgrade_policy}
  */
  readonly upgradePolicy?: ServiceFabricClusterUpgradePolicy[];
}
export interface ServiceFabricClusterAzureActiveDirectory {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/service_fabric_cluster.html#client_application_id ServiceFabricCluster#client_application_id}
  */
  readonly clientApplicationId: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/service_fabric_cluster.html#cluster_application_id ServiceFabricCluster#cluster_application_id}
  */
  readonly clusterApplicationId: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/service_fabric_cluster.html#tenant_id ServiceFabricCluster#tenant_id}
  */
  readonly tenantId: string;
}

function serviceFabricClusterAzureActiveDirectoryToTerraform(struct?: ServiceFabricClusterAzureActiveDirectory): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    client_application_id: cdktf.stringToTerraform(struct!.clientApplicationId),
    cluster_application_id: cdktf.stringToTerraform(struct!.clusterApplicationId),
    tenant_id: cdktf.stringToTerraform(struct!.tenantId),
  }
}

export interface ServiceFabricClusterCertificate {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/service_fabric_cluster.html#thumbprint ServiceFabricCluster#thumbprint}
  */
  readonly thumbprint: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/service_fabric_cluster.html#thumbprint_secondary ServiceFabricCluster#thumbprint_secondary}
  */
  readonly thumbprintSecondary?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/service_fabric_cluster.html#x509_store_name ServiceFabricCluster#x509_store_name}
  */
  readonly x509StoreName: string;
}

function serviceFabricClusterCertificateToTerraform(struct?: ServiceFabricClusterCertificate): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    thumbprint: cdktf.stringToTerraform(struct!.thumbprint),
    thumbprint_secondary: cdktf.stringToTerraform(struct!.thumbprintSecondary),
    x509_store_name: cdktf.stringToTerraform(struct!.x509StoreName),
  }
}

export interface ServiceFabricClusterCertificateCommonNamesCommonNames {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/service_fabric_cluster.html#certificate_common_name ServiceFabricCluster#certificate_common_name}
  */
  readonly certificateCommonName: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/service_fabric_cluster.html#certificate_issuer_thumbprint ServiceFabricCluster#certificate_issuer_thumbprint}
  */
  readonly certificateIssuerThumbprint?: string;
}

function serviceFabricClusterCertificateCommonNamesCommonNamesToTerraform(struct?: ServiceFabricClusterCertificateCommonNamesCommonNames): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    certificate_common_name: cdktf.stringToTerraform(struct!.certificateCommonName),
    certificate_issuer_thumbprint: cdktf.stringToTerraform(struct!.certificateIssuerThumbprint),
  }
}

export interface ServiceFabricClusterCertificateCommonNames {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/service_fabric_cluster.html#x509_store_name ServiceFabricCluster#x509_store_name}
  */
  readonly x509StoreName: string;
  /**
  * common_names block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/service_fabric_cluster.html#common_names ServiceFabricCluster#common_names}
  */
  readonly commonNames: ServiceFabricClusterCertificateCommonNamesCommonNames[];
}

function serviceFabricClusterCertificateCommonNamesToTerraform(struct?: ServiceFabricClusterCertificateCommonNames): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    x509_store_name: cdktf.stringToTerraform(struct!.x509StoreName),
    common_names: cdktf.listMapper(serviceFabricClusterCertificateCommonNamesCommonNamesToTerraform)(struct!.commonNames),
  }
}

export interface ServiceFabricClusterClientCertificateCommonName {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/service_fabric_cluster.html#common_name ServiceFabricCluster#common_name}
  */
  readonly commonName: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/service_fabric_cluster.html#is_admin ServiceFabricCluster#is_admin}
  */
  readonly isAdmin: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/service_fabric_cluster.html#issuer_thumbprint ServiceFabricCluster#issuer_thumbprint}
  */
  readonly issuerThumbprint?: string;
}

function serviceFabricClusterClientCertificateCommonNameToTerraform(struct?: ServiceFabricClusterClientCertificateCommonName): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    common_name: cdktf.stringToTerraform(struct!.commonName),
    is_admin: cdktf.booleanToTerraform(struct!.isAdmin),
    issuer_thumbprint: cdktf.stringToTerraform(struct!.issuerThumbprint),
  }
}

export interface ServiceFabricClusterClientCertificateThumbprint {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/service_fabric_cluster.html#is_admin ServiceFabricCluster#is_admin}
  */
  readonly isAdmin: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/service_fabric_cluster.html#thumbprint ServiceFabricCluster#thumbprint}
  */
  readonly thumbprint: string;
}

function serviceFabricClusterClientCertificateThumbprintToTerraform(struct?: ServiceFabricClusterClientCertificateThumbprint): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    is_admin: cdktf.booleanToTerraform(struct!.isAdmin),
    thumbprint: cdktf.stringToTerraform(struct!.thumbprint),
  }
}

export interface ServiceFabricClusterDiagnosticsConfig {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/service_fabric_cluster.html#blob_endpoint ServiceFabricCluster#blob_endpoint}
  */
  readonly blobEndpoint: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/service_fabric_cluster.html#protected_account_key_name ServiceFabricCluster#protected_account_key_name}
  */
  readonly protectedAccountKeyName: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/service_fabric_cluster.html#queue_endpoint ServiceFabricCluster#queue_endpoint}
  */
  readonly queueEndpoint: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/service_fabric_cluster.html#storage_account_name ServiceFabricCluster#storage_account_name}
  */
  readonly storageAccountName: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/service_fabric_cluster.html#table_endpoint ServiceFabricCluster#table_endpoint}
  */
  readonly tableEndpoint: string;
}

function serviceFabricClusterDiagnosticsConfigToTerraform(struct?: ServiceFabricClusterDiagnosticsConfig): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    blob_endpoint: cdktf.stringToTerraform(struct!.blobEndpoint),
    protected_account_key_name: cdktf.stringToTerraform(struct!.protectedAccountKeyName),
    queue_endpoint: cdktf.stringToTerraform(struct!.queueEndpoint),
    storage_account_name: cdktf.stringToTerraform(struct!.storageAccountName),
    table_endpoint: cdktf.stringToTerraform(struct!.tableEndpoint),
  }
}

export interface ServiceFabricClusterFabricSettings {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/service_fabric_cluster.html#name ServiceFabricCluster#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/service_fabric_cluster.html#parameters ServiceFabricCluster#parameters}
  */
  readonly parameters?: { [key: string]: string } | cdktf.IResolvable;
}

function serviceFabricClusterFabricSettingsToTerraform(struct?: ServiceFabricClusterFabricSettings): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    name: cdktf.stringToTerraform(struct!.name),
    parameters: cdktf.hashMapper(cdktf.anyToTerraform)(struct!.parameters),
  }
}

export interface ServiceFabricClusterNodeTypeApplicationPorts {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/service_fabric_cluster.html#end_port ServiceFabricCluster#end_port}
  */
  readonly endPort: number;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/service_fabric_cluster.html#start_port ServiceFabricCluster#start_port}
  */
  readonly startPort: number;
}

function serviceFabricClusterNodeTypeApplicationPortsToTerraform(struct?: ServiceFabricClusterNodeTypeApplicationPorts): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    end_port: cdktf.numberToTerraform(struct!.endPort),
    start_port: cdktf.numberToTerraform(struct!.startPort),
  }
}

export interface ServiceFabricClusterNodeTypeEphemeralPorts {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/service_fabric_cluster.html#end_port ServiceFabricCluster#end_port}
  */
  readonly endPort: number;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/service_fabric_cluster.html#start_port ServiceFabricCluster#start_port}
  */
  readonly startPort: number;
}

function serviceFabricClusterNodeTypeEphemeralPortsToTerraform(struct?: ServiceFabricClusterNodeTypeEphemeralPorts): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    end_port: cdktf.numberToTerraform(struct!.endPort),
    start_port: cdktf.numberToTerraform(struct!.startPort),
  }
}

export interface ServiceFabricClusterNodeType {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/service_fabric_cluster.html#capacities ServiceFabricCluster#capacities}
  */
  readonly capacities?: { [key: string]: string } | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/service_fabric_cluster.html#client_endpoint_port ServiceFabricCluster#client_endpoint_port}
  */
  readonly clientEndpointPort: number;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/service_fabric_cluster.html#durability_level ServiceFabricCluster#durability_level}
  */
  readonly durabilityLevel?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/service_fabric_cluster.html#http_endpoint_port ServiceFabricCluster#http_endpoint_port}
  */
  readonly httpEndpointPort: number;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/service_fabric_cluster.html#instance_count ServiceFabricCluster#instance_count}
  */
  readonly instanceCount: number;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/service_fabric_cluster.html#is_primary ServiceFabricCluster#is_primary}
  */
  readonly isPrimary: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/service_fabric_cluster.html#is_stateless ServiceFabricCluster#is_stateless}
  */
  readonly isStateless?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/service_fabric_cluster.html#multiple_availability_zones ServiceFabricCluster#multiple_availability_zones}
  */
  readonly multipleAvailabilityZones?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/service_fabric_cluster.html#name ServiceFabricCluster#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/service_fabric_cluster.html#placement_properties ServiceFabricCluster#placement_properties}
  */
  readonly placementProperties?: { [key: string]: string } | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/service_fabric_cluster.html#reverse_proxy_endpoint_port ServiceFabricCluster#reverse_proxy_endpoint_port}
  */
  readonly reverseProxyEndpointPort?: number;
  /**
  * application_ports block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/service_fabric_cluster.html#application_ports ServiceFabricCluster#application_ports}
  */
  readonly applicationPorts?: ServiceFabricClusterNodeTypeApplicationPorts[];
  /**
  * ephemeral_ports block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/service_fabric_cluster.html#ephemeral_ports ServiceFabricCluster#ephemeral_ports}
  */
  readonly ephemeralPorts?: ServiceFabricClusterNodeTypeEphemeralPorts[];
}

function serviceFabricClusterNodeTypeToTerraform(struct?: ServiceFabricClusterNodeType): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    capacities: cdktf.hashMapper(cdktf.anyToTerraform)(struct!.capacities),
    client_endpoint_port: cdktf.numberToTerraform(struct!.clientEndpointPort),
    durability_level: cdktf.stringToTerraform(struct!.durabilityLevel),
    http_endpoint_port: cdktf.numberToTerraform(struct!.httpEndpointPort),
    instance_count: cdktf.numberToTerraform(struct!.instanceCount),
    is_primary: cdktf.booleanToTerraform(struct!.isPrimary),
    is_stateless: cdktf.booleanToTerraform(struct!.isStateless),
    multiple_availability_zones: cdktf.booleanToTerraform(struct!.multipleAvailabilityZones),
    name: cdktf.stringToTerraform(struct!.name),
    placement_properties: cdktf.hashMapper(cdktf.anyToTerraform)(struct!.placementProperties),
    reverse_proxy_endpoint_port: cdktf.numberToTerraform(struct!.reverseProxyEndpointPort),
    application_ports: cdktf.listMapper(serviceFabricClusterNodeTypeApplicationPortsToTerraform)(struct!.applicationPorts),
    ephemeral_ports: cdktf.listMapper(serviceFabricClusterNodeTypeEphemeralPortsToTerraform)(struct!.ephemeralPorts),
  }
}

export interface ServiceFabricClusterReverseProxyCertificate {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/service_fabric_cluster.html#thumbprint ServiceFabricCluster#thumbprint}
  */
  readonly thumbprint: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/service_fabric_cluster.html#thumbprint_secondary ServiceFabricCluster#thumbprint_secondary}
  */
  readonly thumbprintSecondary?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/service_fabric_cluster.html#x509_store_name ServiceFabricCluster#x509_store_name}
  */
  readonly x509StoreName: string;
}

function serviceFabricClusterReverseProxyCertificateToTerraform(struct?: ServiceFabricClusterReverseProxyCertificate): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    thumbprint: cdktf.stringToTerraform(struct!.thumbprint),
    thumbprint_secondary: cdktf.stringToTerraform(struct!.thumbprintSecondary),
    x509_store_name: cdktf.stringToTerraform(struct!.x509StoreName),
  }
}

export interface ServiceFabricClusterReverseProxyCertificateCommonNamesCommonNames {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/service_fabric_cluster.html#certificate_common_name ServiceFabricCluster#certificate_common_name}
  */
  readonly certificateCommonName: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/service_fabric_cluster.html#certificate_issuer_thumbprint ServiceFabricCluster#certificate_issuer_thumbprint}
  */
  readonly certificateIssuerThumbprint?: string;
}

function serviceFabricClusterReverseProxyCertificateCommonNamesCommonNamesToTerraform(struct?: ServiceFabricClusterReverseProxyCertificateCommonNamesCommonNames): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    certificate_common_name: cdktf.stringToTerraform(struct!.certificateCommonName),
    certificate_issuer_thumbprint: cdktf.stringToTerraform(struct!.certificateIssuerThumbprint),
  }
}

export interface ServiceFabricClusterReverseProxyCertificateCommonNames {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/service_fabric_cluster.html#x509_store_name ServiceFabricCluster#x509_store_name}
  */
  readonly x509StoreName: string;
  /**
  * common_names block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/service_fabric_cluster.html#common_names ServiceFabricCluster#common_names}
  */
  readonly commonNames: ServiceFabricClusterReverseProxyCertificateCommonNamesCommonNames[];
}

function serviceFabricClusterReverseProxyCertificateCommonNamesToTerraform(struct?: ServiceFabricClusterReverseProxyCertificateCommonNames): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    x509_store_name: cdktf.stringToTerraform(struct!.x509StoreName),
    common_names: cdktf.listMapper(serviceFabricClusterReverseProxyCertificateCommonNamesCommonNamesToTerraform)(struct!.commonNames),
  }
}

export interface ServiceFabricClusterTimeouts {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/service_fabric_cluster.html#create ServiceFabricCluster#create}
  */
  readonly create?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/service_fabric_cluster.html#delete ServiceFabricCluster#delete}
  */
  readonly delete?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/service_fabric_cluster.html#read ServiceFabricCluster#read}
  */
  readonly read?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/service_fabric_cluster.html#update ServiceFabricCluster#update}
  */
  readonly update?: string;
}

function serviceFabricClusterTimeoutsToTerraform(struct?: ServiceFabricClusterTimeouts): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    create: cdktf.stringToTerraform(struct!.create),
    delete: cdktf.stringToTerraform(struct!.delete),
    read: cdktf.stringToTerraform(struct!.read),
    update: cdktf.stringToTerraform(struct!.update),
  }
}

export interface ServiceFabricClusterUpgradePolicyDeltaHealthPolicy {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/service_fabric_cluster.html#max_delta_unhealthy_applications_percent ServiceFabricCluster#max_delta_unhealthy_applications_percent}
  */
  readonly maxDeltaUnhealthyApplicationsPercent?: number;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/service_fabric_cluster.html#max_delta_unhealthy_nodes_percent ServiceFabricCluster#max_delta_unhealthy_nodes_percent}
  */
  readonly maxDeltaUnhealthyNodesPercent?: number;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/service_fabric_cluster.html#max_upgrade_domain_delta_unhealthy_nodes_percent ServiceFabricCluster#max_upgrade_domain_delta_unhealthy_nodes_percent}
  */
  readonly maxUpgradeDomainDeltaUnhealthyNodesPercent?: number;
}

function serviceFabricClusterUpgradePolicyDeltaHealthPolicyToTerraform(struct?: ServiceFabricClusterUpgradePolicyDeltaHealthPolicy): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    max_delta_unhealthy_applications_percent: cdktf.numberToTerraform(struct!.maxDeltaUnhealthyApplicationsPercent),
    max_delta_unhealthy_nodes_percent: cdktf.numberToTerraform(struct!.maxDeltaUnhealthyNodesPercent),
    max_upgrade_domain_delta_unhealthy_nodes_percent: cdktf.numberToTerraform(struct!.maxUpgradeDomainDeltaUnhealthyNodesPercent),
  }
}

export interface ServiceFabricClusterUpgradePolicyHealthPolicy {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/service_fabric_cluster.html#max_unhealthy_applications_percent ServiceFabricCluster#max_unhealthy_applications_percent}
  */
  readonly maxUnhealthyApplicationsPercent?: number;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/service_fabric_cluster.html#max_unhealthy_nodes_percent ServiceFabricCluster#max_unhealthy_nodes_percent}
  */
  readonly maxUnhealthyNodesPercent?: number;
}

function serviceFabricClusterUpgradePolicyHealthPolicyToTerraform(struct?: ServiceFabricClusterUpgradePolicyHealthPolicy): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    max_unhealthy_applications_percent: cdktf.numberToTerraform(struct!.maxUnhealthyApplicationsPercent),
    max_unhealthy_nodes_percent: cdktf.numberToTerraform(struct!.maxUnhealthyNodesPercent),
  }
}

export interface ServiceFabricClusterUpgradePolicy {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/service_fabric_cluster.html#force_restart_enabled ServiceFabricCluster#force_restart_enabled}
  */
  readonly forceRestartEnabled?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/service_fabric_cluster.html#health_check_retry_timeout ServiceFabricCluster#health_check_retry_timeout}
  */
  readonly healthCheckRetryTimeout?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/service_fabric_cluster.html#health_check_stable_duration ServiceFabricCluster#health_check_stable_duration}
  */
  readonly healthCheckStableDuration?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/service_fabric_cluster.html#health_check_wait_duration ServiceFabricCluster#health_check_wait_duration}
  */
  readonly healthCheckWaitDuration?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/service_fabric_cluster.html#upgrade_domain_timeout ServiceFabricCluster#upgrade_domain_timeout}
  */
  readonly upgradeDomainTimeout?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/service_fabric_cluster.html#upgrade_replica_set_check_timeout ServiceFabricCluster#upgrade_replica_set_check_timeout}
  */
  readonly upgradeReplicaSetCheckTimeout?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/service_fabric_cluster.html#upgrade_timeout ServiceFabricCluster#upgrade_timeout}
  */
  readonly upgradeTimeout?: string;
  /**
  * delta_health_policy block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/service_fabric_cluster.html#delta_health_policy ServiceFabricCluster#delta_health_policy}
  */
  readonly deltaHealthPolicy?: ServiceFabricClusterUpgradePolicyDeltaHealthPolicy[];
  /**
  * health_policy block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/service_fabric_cluster.html#health_policy ServiceFabricCluster#health_policy}
  */
  readonly healthPolicy?: ServiceFabricClusterUpgradePolicyHealthPolicy[];
}

function serviceFabricClusterUpgradePolicyToTerraform(struct?: ServiceFabricClusterUpgradePolicy): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    force_restart_enabled: cdktf.booleanToTerraform(struct!.forceRestartEnabled),
    health_check_retry_timeout: cdktf.stringToTerraform(struct!.healthCheckRetryTimeout),
    health_check_stable_duration: cdktf.stringToTerraform(struct!.healthCheckStableDuration),
    health_check_wait_duration: cdktf.stringToTerraform(struct!.healthCheckWaitDuration),
    upgrade_domain_timeout: cdktf.stringToTerraform(struct!.upgradeDomainTimeout),
    upgrade_replica_set_check_timeout: cdktf.stringToTerraform(struct!.upgradeReplicaSetCheckTimeout),
    upgrade_timeout: cdktf.stringToTerraform(struct!.upgradeTimeout),
    delta_health_policy: cdktf.listMapper(serviceFabricClusterUpgradePolicyDeltaHealthPolicyToTerraform)(struct!.deltaHealthPolicy),
    health_policy: cdktf.listMapper(serviceFabricClusterUpgradePolicyHealthPolicyToTerraform)(struct!.healthPolicy),
  }
}


/**
* Represents a {@link https://www.terraform.io/docs/providers/azurerm/r/service_fabric_cluster.html azurerm_service_fabric_cluster}
*/
export class ServiceFabricCluster extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType: string = "azurerm_service_fabric_cluster";

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://www.terraform.io/docs/providers/azurerm/r/service_fabric_cluster.html azurerm_service_fabric_cluster} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options ServiceFabricClusterConfig
  */
  public constructor(scope: Construct, id: string, config: ServiceFabricClusterConfig) {
    super(scope, id, {
      terraformResourceType: 'azurerm_service_fabric_cluster',
      terraformGeneratorMetadata: {
        providerName: 'azurerm'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle
    });
    this._addOnFeatures = config.addOnFeatures;
    this._clusterCodeVersion = config.clusterCodeVersion;
    this._location = config.location;
    this._managementEndpoint = config.managementEndpoint;
    this._name = config.name;
    this._reliabilityLevel = config.reliabilityLevel;
    this._resourceGroupName = config.resourceGroupName;
    this._serviceFabricZonalUpgradeMode = config.serviceFabricZonalUpgradeMode;
    this._tags = config.tags;
    this._upgradeMode = config.upgradeMode;
    this._vmImage = config.vmImage;
    this._vmssZonalUpgradeMode = config.vmssZonalUpgradeMode;
    this._azureActiveDirectory = config.azureActiveDirectory;
    this._certificate = config.certificate;
    this._certificateCommonNames = config.certificateCommonNames;
    this._clientCertificateCommonName = config.clientCertificateCommonName;
    this._clientCertificateThumbprint = config.clientCertificateThumbprint;
    this._diagnosticsConfig = config.diagnosticsConfig;
    this._fabricSettings = config.fabricSettings;
    this._nodeType = config.nodeType;
    this._reverseProxyCertificate = config.reverseProxyCertificate;
    this._reverseProxyCertificateCommonNames = config.reverseProxyCertificateCommonNames;
    this._timeouts = config.timeouts;
    this._upgradePolicy = config.upgradePolicy;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // add_on_features - computed: false, optional: true, required: false
  private _addOnFeatures?: string[];
  public get addOnFeatures() {
    return this.getListAttribute('add_on_features');
  }
  public set addOnFeatures(value: string[] ) {
    this._addOnFeatures = value;
  }
  public resetAddOnFeatures() {
    this._addOnFeatures = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get addOnFeaturesInput() {
    return this._addOnFeatures
  }

  // cluster_code_version - computed: true, optional: true, required: false
  private _clusterCodeVersion?: string;
  public get clusterCodeVersion() {
    return this.getStringAttribute('cluster_code_version');
  }
  public set clusterCodeVersion(value: string) {
    this._clusterCodeVersion = value;
  }
  public resetClusterCodeVersion() {
    this._clusterCodeVersion = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get clusterCodeVersionInput() {
    return this._clusterCodeVersion
  }

  // cluster_endpoint - computed: true, optional: false, required: false
  public get clusterEndpoint() {
    return this.getStringAttribute('cluster_endpoint');
  }

  // id - computed: true, optional: true, required: false
  public get id() {
    return this.getStringAttribute('id');
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

  // management_endpoint - computed: false, optional: false, required: true
  private _managementEndpoint: string;
  public get managementEndpoint() {
    return this.getStringAttribute('management_endpoint');
  }
  public set managementEndpoint(value: string) {
    this._managementEndpoint = value;
  }
  // Temporarily expose input value. Use with caution.
  public get managementEndpointInput() {
    return this._managementEndpoint
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

  // reliability_level - computed: false, optional: false, required: true
  private _reliabilityLevel: string;
  public get reliabilityLevel() {
    return this.getStringAttribute('reliability_level');
  }
  public set reliabilityLevel(value: string) {
    this._reliabilityLevel = value;
  }
  // Temporarily expose input value. Use with caution.
  public get reliabilityLevelInput() {
    return this._reliabilityLevel
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

  // service_fabric_zonal_upgrade_mode - computed: false, optional: true, required: false
  private _serviceFabricZonalUpgradeMode?: string;
  public get serviceFabricZonalUpgradeMode() {
    return this.getStringAttribute('service_fabric_zonal_upgrade_mode');
  }
  public set serviceFabricZonalUpgradeMode(value: string ) {
    this._serviceFabricZonalUpgradeMode = value;
  }
  public resetServiceFabricZonalUpgradeMode() {
    this._serviceFabricZonalUpgradeMode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get serviceFabricZonalUpgradeModeInput() {
    return this._serviceFabricZonalUpgradeMode
  }

  // tags - computed: false, optional: true, required: false
  private _tags?: { [key: string]: string } | cdktf.IResolvable;
  public get tags() {
    return this.interpolationForAttribute('tags') as any;
  }
  public set tags(value: { [key: string]: string } | cdktf.IResolvable ) {
    this._tags = value;
  }
  public resetTags() {
    this._tags = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tagsInput() {
    return this._tags
  }

  // upgrade_mode - computed: false, optional: false, required: true
  private _upgradeMode: string;
  public get upgradeMode() {
    return this.getStringAttribute('upgrade_mode');
  }
  public set upgradeMode(value: string) {
    this._upgradeMode = value;
  }
  // Temporarily expose input value. Use with caution.
  public get upgradeModeInput() {
    return this._upgradeMode
  }

  // vm_image - computed: false, optional: false, required: true
  private _vmImage: string;
  public get vmImage() {
    return this.getStringAttribute('vm_image');
  }
  public set vmImage(value: string) {
    this._vmImage = value;
  }
  // Temporarily expose input value. Use with caution.
  public get vmImageInput() {
    return this._vmImage
  }

  // vmss_zonal_upgrade_mode - computed: false, optional: true, required: false
  private _vmssZonalUpgradeMode?: string;
  public get vmssZonalUpgradeMode() {
    return this.getStringAttribute('vmss_zonal_upgrade_mode');
  }
  public set vmssZonalUpgradeMode(value: string ) {
    this._vmssZonalUpgradeMode = value;
  }
  public resetVmssZonalUpgradeMode() {
    this._vmssZonalUpgradeMode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get vmssZonalUpgradeModeInput() {
    return this._vmssZonalUpgradeMode
  }

  // azure_active_directory - computed: false, optional: true, required: false
  private _azureActiveDirectory?: ServiceFabricClusterAzureActiveDirectory[];
  public get azureActiveDirectory() {
    return this.interpolationForAttribute('azure_active_directory') as any;
  }
  public set azureActiveDirectory(value: ServiceFabricClusterAzureActiveDirectory[] ) {
    this._azureActiveDirectory = value;
  }
  public resetAzureActiveDirectory() {
    this._azureActiveDirectory = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get azureActiveDirectoryInput() {
    return this._azureActiveDirectory
  }

  // certificate - computed: false, optional: true, required: false
  private _certificate?: ServiceFabricClusterCertificate[];
  public get certificate() {
    return this.interpolationForAttribute('certificate') as any;
  }
  public set certificate(value: ServiceFabricClusterCertificate[] ) {
    this._certificate = value;
  }
  public resetCertificate() {
    this._certificate = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get certificateInput() {
    return this._certificate
  }

  // certificate_common_names - computed: false, optional: true, required: false
  private _certificateCommonNames?: ServiceFabricClusterCertificateCommonNames[];
  public get certificateCommonNames() {
    return this.interpolationForAttribute('certificate_common_names') as any;
  }
  public set certificateCommonNames(value: ServiceFabricClusterCertificateCommonNames[] ) {
    this._certificateCommonNames = value;
  }
  public resetCertificateCommonNames() {
    this._certificateCommonNames = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get certificateCommonNamesInput() {
    return this._certificateCommonNames
  }

  // client_certificate_common_name - computed: false, optional: true, required: false
  private _clientCertificateCommonName?: ServiceFabricClusterClientCertificateCommonName[];
  public get clientCertificateCommonName() {
    return this.interpolationForAttribute('client_certificate_common_name') as any;
  }
  public set clientCertificateCommonName(value: ServiceFabricClusterClientCertificateCommonName[] ) {
    this._clientCertificateCommonName = value;
  }
  public resetClientCertificateCommonName() {
    this._clientCertificateCommonName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get clientCertificateCommonNameInput() {
    return this._clientCertificateCommonName
  }

  // client_certificate_thumbprint - computed: false, optional: true, required: false
  private _clientCertificateThumbprint?: ServiceFabricClusterClientCertificateThumbprint[];
  public get clientCertificateThumbprint() {
    return this.interpolationForAttribute('client_certificate_thumbprint') as any;
  }
  public set clientCertificateThumbprint(value: ServiceFabricClusterClientCertificateThumbprint[] ) {
    this._clientCertificateThumbprint = value;
  }
  public resetClientCertificateThumbprint() {
    this._clientCertificateThumbprint = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get clientCertificateThumbprintInput() {
    return this._clientCertificateThumbprint
  }

  // diagnostics_config - computed: false, optional: true, required: false
  private _diagnosticsConfig?: ServiceFabricClusterDiagnosticsConfig[];
  public get diagnosticsConfig() {
    return this.interpolationForAttribute('diagnostics_config') as any;
  }
  public set diagnosticsConfig(value: ServiceFabricClusterDiagnosticsConfig[] ) {
    this._diagnosticsConfig = value;
  }
  public resetDiagnosticsConfig() {
    this._diagnosticsConfig = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get diagnosticsConfigInput() {
    return this._diagnosticsConfig
  }

  // fabric_settings - computed: false, optional: true, required: false
  private _fabricSettings?: ServiceFabricClusterFabricSettings[];
  public get fabricSettings() {
    return this.interpolationForAttribute('fabric_settings') as any;
  }
  public set fabricSettings(value: ServiceFabricClusterFabricSettings[] ) {
    this._fabricSettings = value;
  }
  public resetFabricSettings() {
    this._fabricSettings = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fabricSettingsInput() {
    return this._fabricSettings
  }

  // node_type - computed: false, optional: false, required: true
  private _nodeType: ServiceFabricClusterNodeType[];
  public get nodeType() {
    return this.interpolationForAttribute('node_type') as any;
  }
  public set nodeType(value: ServiceFabricClusterNodeType[]) {
    this._nodeType = value;
  }
  // Temporarily expose input value. Use with caution.
  public get nodeTypeInput() {
    return this._nodeType
  }

  // reverse_proxy_certificate - computed: false, optional: true, required: false
  private _reverseProxyCertificate?: ServiceFabricClusterReverseProxyCertificate[];
  public get reverseProxyCertificate() {
    return this.interpolationForAttribute('reverse_proxy_certificate') as any;
  }
  public set reverseProxyCertificate(value: ServiceFabricClusterReverseProxyCertificate[] ) {
    this._reverseProxyCertificate = value;
  }
  public resetReverseProxyCertificate() {
    this._reverseProxyCertificate = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get reverseProxyCertificateInput() {
    return this._reverseProxyCertificate
  }

  // reverse_proxy_certificate_common_names - computed: false, optional: true, required: false
  private _reverseProxyCertificateCommonNames?: ServiceFabricClusterReverseProxyCertificateCommonNames[];
  public get reverseProxyCertificateCommonNames() {
    return this.interpolationForAttribute('reverse_proxy_certificate_common_names') as any;
  }
  public set reverseProxyCertificateCommonNames(value: ServiceFabricClusterReverseProxyCertificateCommonNames[] ) {
    this._reverseProxyCertificateCommonNames = value;
  }
  public resetReverseProxyCertificateCommonNames() {
    this._reverseProxyCertificateCommonNames = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get reverseProxyCertificateCommonNamesInput() {
    return this._reverseProxyCertificateCommonNames
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts?: ServiceFabricClusterTimeouts;
  public get timeouts() {
    return this.interpolationForAttribute('timeouts') as any;
  }
  public set timeouts(value: ServiceFabricClusterTimeouts ) {
    this._timeouts = value;
  }
  public resetTimeouts() {
    this._timeouts = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get timeoutsInput() {
    return this._timeouts
  }

  // upgrade_policy - computed: false, optional: true, required: false
  private _upgradePolicy?: ServiceFabricClusterUpgradePolicy[];
  public get upgradePolicy() {
    return this.interpolationForAttribute('upgrade_policy') as any;
  }
  public set upgradePolicy(value: ServiceFabricClusterUpgradePolicy[] ) {
    this._upgradePolicy = value;
  }
  public resetUpgradePolicy() {
    this._upgradePolicy = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get upgradePolicyInput() {
    return this._upgradePolicy
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      add_on_features: cdktf.listMapper(cdktf.stringToTerraform)(this._addOnFeatures),
      cluster_code_version: cdktf.stringToTerraform(this._clusterCodeVersion),
      location: cdktf.stringToTerraform(this._location),
      management_endpoint: cdktf.stringToTerraform(this._managementEndpoint),
      name: cdktf.stringToTerraform(this._name),
      reliability_level: cdktf.stringToTerraform(this._reliabilityLevel),
      resource_group_name: cdktf.stringToTerraform(this._resourceGroupName),
      service_fabric_zonal_upgrade_mode: cdktf.stringToTerraform(this._serviceFabricZonalUpgradeMode),
      tags: cdktf.hashMapper(cdktf.anyToTerraform)(this._tags),
      upgrade_mode: cdktf.stringToTerraform(this._upgradeMode),
      vm_image: cdktf.stringToTerraform(this._vmImage),
      vmss_zonal_upgrade_mode: cdktf.stringToTerraform(this._vmssZonalUpgradeMode),
      azure_active_directory: cdktf.listMapper(serviceFabricClusterAzureActiveDirectoryToTerraform)(this._azureActiveDirectory),
      certificate: cdktf.listMapper(serviceFabricClusterCertificateToTerraform)(this._certificate),
      certificate_common_names: cdktf.listMapper(serviceFabricClusterCertificateCommonNamesToTerraform)(this._certificateCommonNames),
      client_certificate_common_name: cdktf.listMapper(serviceFabricClusterClientCertificateCommonNameToTerraform)(this._clientCertificateCommonName),
      client_certificate_thumbprint: cdktf.listMapper(serviceFabricClusterClientCertificateThumbprintToTerraform)(this._clientCertificateThumbprint),
      diagnostics_config: cdktf.listMapper(serviceFabricClusterDiagnosticsConfigToTerraform)(this._diagnosticsConfig),
      fabric_settings: cdktf.listMapper(serviceFabricClusterFabricSettingsToTerraform)(this._fabricSettings),
      node_type: cdktf.listMapper(serviceFabricClusterNodeTypeToTerraform)(this._nodeType),
      reverse_proxy_certificate: cdktf.listMapper(serviceFabricClusterReverseProxyCertificateToTerraform)(this._reverseProxyCertificate),
      reverse_proxy_certificate_common_names: cdktf.listMapper(serviceFabricClusterReverseProxyCertificateCommonNamesToTerraform)(this._reverseProxyCertificateCommonNames),
      timeouts: serviceFabricClusterTimeoutsToTerraform(this._timeouts),
      upgrade_policy: cdktf.listMapper(serviceFabricClusterUpgradePolicyToTerraform)(this._upgradePolicy),
    };
  }
}
