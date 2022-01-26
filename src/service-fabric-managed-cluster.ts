// https://www.terraform.io/docs/providers/azurerm/r/service_fabric_managed_cluster
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface ServiceFabricManagedClusterConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/service_fabric_managed_cluster#backup_service_enabled ServiceFabricManagedCluster#backup_service_enabled}
  */
  readonly backupServiceEnabled?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/service_fabric_managed_cluster#client_connection_port ServiceFabricManagedCluster#client_connection_port}
  */
  readonly clientConnectionPort: number;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/service_fabric_managed_cluster#dns_name ServiceFabricManagedCluster#dns_name}
  */
  readonly dnsName?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/service_fabric_managed_cluster#dns_service_enabled ServiceFabricManagedCluster#dns_service_enabled}
  */
  readonly dnsServiceEnabled?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/service_fabric_managed_cluster#http_gateway_port ServiceFabricManagedCluster#http_gateway_port}
  */
  readonly httpGatewayPort: number;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/service_fabric_managed_cluster#location ServiceFabricManagedCluster#location}
  */
  readonly location: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/service_fabric_managed_cluster#name ServiceFabricManagedCluster#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/service_fabric_managed_cluster#password ServiceFabricManagedCluster#password}
  */
  readonly password?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/service_fabric_managed_cluster#resource_group_name ServiceFabricManagedCluster#resource_group_name}
  */
  readonly resourceGroupName: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/service_fabric_managed_cluster#sku ServiceFabricManagedCluster#sku}
  */
  readonly sku?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/service_fabric_managed_cluster#tags ServiceFabricManagedCluster#tags}
  */
  readonly tags?: { [key: string]: string };
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/service_fabric_managed_cluster#upgrade_wave ServiceFabricManagedCluster#upgrade_wave}
  */
  readonly upgradeWave?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/service_fabric_managed_cluster#username ServiceFabricManagedCluster#username}
  */
  readonly username?: string;
  /**
  * authentication block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/service_fabric_managed_cluster#authentication ServiceFabricManagedCluster#authentication}
  */
  readonly authentication?: ServiceFabricManagedClusterAuthentication;
  /**
  * custom_fabric_setting block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/service_fabric_managed_cluster#custom_fabric_setting ServiceFabricManagedCluster#custom_fabric_setting}
  */
  readonly customFabricSetting?: ServiceFabricManagedClusterCustomFabricSetting[] | cdktf.IResolvable;
  /**
  * lb_rule block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/service_fabric_managed_cluster#lb_rule ServiceFabricManagedCluster#lb_rule}
  */
  readonly lbRule: ServiceFabricManagedClusterLbRule[] | cdktf.IResolvable;
  /**
  * node_type block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/service_fabric_managed_cluster#node_type ServiceFabricManagedCluster#node_type}
  */
  readonly nodeType?: ServiceFabricManagedClusterNodeType[] | cdktf.IResolvable;
  /**
  * timeouts block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/service_fabric_managed_cluster#timeouts ServiceFabricManagedCluster#timeouts}
  */
  readonly timeouts?: ServiceFabricManagedClusterTimeouts;
}
export interface ServiceFabricManagedClusterAuthenticationActiveDirectory {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/service_fabric_managed_cluster#client_application_id ServiceFabricManagedCluster#client_application_id}
  */
  readonly clientApplicationId: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/service_fabric_managed_cluster#cluster_application_id ServiceFabricManagedCluster#cluster_application_id}
  */
  readonly clusterApplicationId: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/service_fabric_managed_cluster#tenant_id ServiceFabricManagedCluster#tenant_id}
  */
  readonly tenantId: string;
}

export function serviceFabricManagedClusterAuthenticationActiveDirectoryToTerraform(struct?: ServiceFabricManagedClusterAuthenticationActiveDirectoryOutputReference | ServiceFabricManagedClusterAuthenticationActiveDirectory): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    client_application_id: cdktf.stringToTerraform(struct!.clientApplicationId),
    cluster_application_id: cdktf.stringToTerraform(struct!.clusterApplicationId),
    tenant_id: cdktf.stringToTerraform(struct!.tenantId),
  }
}

export class ServiceFabricManagedClusterAuthenticationActiveDirectoryOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param isSingleItem True if this is a block, false if it's a list
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, isSingleItem: boolean) {
    super(terraformResource, terraformAttribute, isSingleItem);
  }

  public get internalValue(): ServiceFabricManagedClusterAuthenticationActiveDirectory | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._clientApplicationId !== undefined) {
      hasAnyValues = true;
      internalValueResult.clientApplicationId = this._clientApplicationId;
    }
    if (this._clusterApplicationId !== undefined) {
      hasAnyValues = true;
      internalValueResult.clusterApplicationId = this._clusterApplicationId;
    }
    if (this._tenantId !== undefined) {
      hasAnyValues = true;
      internalValueResult.tenantId = this._tenantId;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ServiceFabricManagedClusterAuthenticationActiveDirectory | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._clientApplicationId = undefined;
      this._clusterApplicationId = undefined;
      this._tenantId = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._clientApplicationId = value.clientApplicationId;
      this._clusterApplicationId = value.clusterApplicationId;
      this._tenantId = value.tenantId;
    }
  }

  // client_application_id - computed: false, optional: false, required: true
  private _clientApplicationId?: string; 
  public get clientApplicationId() {
    return this.getStringAttribute('client_application_id');
  }
  public set clientApplicationId(value: string) {
    this._clientApplicationId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get clientApplicationIdInput() {
    return this._clientApplicationId;
  }

  // cluster_application_id - computed: false, optional: false, required: true
  private _clusterApplicationId?: string; 
  public get clusterApplicationId() {
    return this.getStringAttribute('cluster_application_id');
  }
  public set clusterApplicationId(value: string) {
    this._clusterApplicationId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get clusterApplicationIdInput() {
    return this._clusterApplicationId;
  }

  // tenant_id - computed: false, optional: false, required: true
  private _tenantId?: string; 
  public get tenantId() {
    return this.getStringAttribute('tenant_id');
  }
  public set tenantId(value: string) {
    this._tenantId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get tenantIdInput() {
    return this._tenantId;
  }
}
export interface ServiceFabricManagedClusterAuthenticationCertificate {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/service_fabric_managed_cluster#common_name ServiceFabricManagedCluster#common_name}
  */
  readonly commonName?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/service_fabric_managed_cluster#thumbprint ServiceFabricManagedCluster#thumbprint}
  */
  readonly thumbprint: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/service_fabric_managed_cluster#type ServiceFabricManagedCluster#type}
  */
  readonly type: string;
}

export function serviceFabricManagedClusterAuthenticationCertificateToTerraform(struct?: ServiceFabricManagedClusterAuthenticationCertificate | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    common_name: cdktf.stringToTerraform(struct!.commonName),
    thumbprint: cdktf.stringToTerraform(struct!.thumbprint),
    type: cdktf.stringToTerraform(struct!.type),
  }
}

export interface ServiceFabricManagedClusterAuthentication {
  /**
  * active_directory block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/service_fabric_managed_cluster#active_directory ServiceFabricManagedCluster#active_directory}
  */
  readonly activeDirectory?: ServiceFabricManagedClusterAuthenticationActiveDirectory;
  /**
  * certificate block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/service_fabric_managed_cluster#certificate ServiceFabricManagedCluster#certificate}
  */
  readonly certificate?: ServiceFabricManagedClusterAuthenticationCertificate[] | cdktf.IResolvable;
}

export function serviceFabricManagedClusterAuthenticationToTerraform(struct?: ServiceFabricManagedClusterAuthenticationOutputReference | ServiceFabricManagedClusterAuthentication): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    active_directory: serviceFabricManagedClusterAuthenticationActiveDirectoryToTerraform(struct!.activeDirectory),
    certificate: cdktf.listMapper(serviceFabricManagedClusterAuthenticationCertificateToTerraform)(struct!.certificate),
  }
}

export class ServiceFabricManagedClusterAuthenticationOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param isSingleItem True if this is a block, false if it's a list
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, isSingleItem: boolean) {
    super(terraformResource, terraformAttribute, isSingleItem);
  }

  public get internalValue(): ServiceFabricManagedClusterAuthentication | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._activeDirectory?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.activeDirectory = this._activeDirectory?.internalValue;
    }
    if (this._certificate !== undefined) {
      hasAnyValues = true;
      internalValueResult.certificate = this._certificate;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ServiceFabricManagedClusterAuthentication | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._activeDirectory.internalValue = undefined;
      this._certificate = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._activeDirectory.internalValue = value.activeDirectory;
      this._certificate = value.certificate;
    }
  }

  // active_directory - computed: false, optional: true, required: false
  private _activeDirectory = new ServiceFabricManagedClusterAuthenticationActiveDirectoryOutputReference(this, "active_directory", true);
  public get activeDirectory() {
    return this._activeDirectory;
  }
  public putActiveDirectory(value: ServiceFabricManagedClusterAuthenticationActiveDirectory) {
    this._activeDirectory.internalValue = value;
  }
  public resetActiveDirectory() {
    this._activeDirectory.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get activeDirectoryInput() {
    return this._activeDirectory.internalValue;
  }

  // certificate - computed: false, optional: true, required: false
  private _certificate?: ServiceFabricManagedClusterAuthenticationCertificate[] | cdktf.IResolvable; 
  public get certificate() {
    // Getting the computed value is not yet implemented
    return this.interpolationForAttribute('certificate');
  }
  public set certificate(value: ServiceFabricManagedClusterAuthenticationCertificate[] | cdktf.IResolvable) {
    this._certificate = value;
  }
  public resetCertificate() {
    this._certificate = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get certificateInput() {
    return this._certificate;
  }
}
export interface ServiceFabricManagedClusterCustomFabricSetting {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/service_fabric_managed_cluster#parameter ServiceFabricManagedCluster#parameter}
  */
  readonly parameter: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/service_fabric_managed_cluster#section ServiceFabricManagedCluster#section}
  */
  readonly section: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/service_fabric_managed_cluster#value ServiceFabricManagedCluster#value}
  */
  readonly value: string;
}

export function serviceFabricManagedClusterCustomFabricSettingToTerraform(struct?: ServiceFabricManagedClusterCustomFabricSetting | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    parameter: cdktf.stringToTerraform(struct!.parameter),
    section: cdktf.stringToTerraform(struct!.section),
    value: cdktf.stringToTerraform(struct!.value),
  }
}

export interface ServiceFabricManagedClusterLbRule {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/service_fabric_managed_cluster#backend_port ServiceFabricManagedCluster#backend_port}
  */
  readonly backendPort: number;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/service_fabric_managed_cluster#frontend_port ServiceFabricManagedCluster#frontend_port}
  */
  readonly frontendPort: number;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/service_fabric_managed_cluster#probe_protocol ServiceFabricManagedCluster#probe_protocol}
  */
  readonly probeProtocol: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/service_fabric_managed_cluster#probe_request_path ServiceFabricManagedCluster#probe_request_path}
  */
  readonly probeRequestPath?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/service_fabric_managed_cluster#protocol ServiceFabricManagedCluster#protocol}
  */
  readonly protocol: string;
}

export function serviceFabricManagedClusterLbRuleToTerraform(struct?: ServiceFabricManagedClusterLbRule | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    backend_port: cdktf.numberToTerraform(struct!.backendPort),
    frontend_port: cdktf.numberToTerraform(struct!.frontendPort),
    probe_protocol: cdktf.stringToTerraform(struct!.probeProtocol),
    probe_request_path: cdktf.stringToTerraform(struct!.probeRequestPath),
    protocol: cdktf.stringToTerraform(struct!.protocol),
  }
}

export interface ServiceFabricManagedClusterNodeTypeVmSecretsCertificates {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/service_fabric_managed_cluster#store ServiceFabricManagedCluster#store}
  */
  readonly store: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/service_fabric_managed_cluster#url ServiceFabricManagedCluster#url}
  */
  readonly url: string;
}

export function serviceFabricManagedClusterNodeTypeVmSecretsCertificatesToTerraform(struct?: ServiceFabricManagedClusterNodeTypeVmSecretsCertificates | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    store: cdktf.stringToTerraform(struct!.store),
    url: cdktf.stringToTerraform(struct!.url),
  }
}

export interface ServiceFabricManagedClusterNodeTypeVmSecrets {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/service_fabric_managed_cluster#vault_id ServiceFabricManagedCluster#vault_id}
  */
  readonly vaultId: string;
  /**
  * certificates block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/service_fabric_managed_cluster#certificates ServiceFabricManagedCluster#certificates}
  */
  readonly certificates: ServiceFabricManagedClusterNodeTypeVmSecretsCertificates[] | cdktf.IResolvable;
}

export function serviceFabricManagedClusterNodeTypeVmSecretsToTerraform(struct?: ServiceFabricManagedClusterNodeTypeVmSecrets | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    vault_id: cdktf.stringToTerraform(struct!.vaultId),
    certificates: cdktf.listMapper(serviceFabricManagedClusterNodeTypeVmSecretsCertificatesToTerraform)(struct!.certificates),
  }
}

export interface ServiceFabricManagedClusterNodeType {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/service_fabric_managed_cluster#application_port_range ServiceFabricManagedCluster#application_port_range}
  */
  readonly applicationPortRange: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/service_fabric_managed_cluster#capacities ServiceFabricManagedCluster#capacities}
  */
  readonly capacities?: { [key: string]: string };
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/service_fabric_managed_cluster#data_disk_size_gb ServiceFabricManagedCluster#data_disk_size_gb}
  */
  readonly dataDiskSizeGb: number;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/service_fabric_managed_cluster#data_disk_type ServiceFabricManagedCluster#data_disk_type}
  */
  readonly dataDiskType?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/service_fabric_managed_cluster#ephemeral_port_range ServiceFabricManagedCluster#ephemeral_port_range}
  */
  readonly ephemeralPortRange: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/service_fabric_managed_cluster#multiple_placement_groups_enabled ServiceFabricManagedCluster#multiple_placement_groups_enabled}
  */
  readonly multiplePlacementGroupsEnabled?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/service_fabric_managed_cluster#name ServiceFabricManagedCluster#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/service_fabric_managed_cluster#placement_properties ServiceFabricManagedCluster#placement_properties}
  */
  readonly placementProperties?: { [key: string]: string };
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/service_fabric_managed_cluster#primary ServiceFabricManagedCluster#primary}
  */
  readonly primary?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/service_fabric_managed_cluster#stateless ServiceFabricManagedCluster#stateless}
  */
  readonly stateless?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/service_fabric_managed_cluster#vm_image_offer ServiceFabricManagedCluster#vm_image_offer}
  */
  readonly vmImageOffer: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/service_fabric_managed_cluster#vm_image_publisher ServiceFabricManagedCluster#vm_image_publisher}
  */
  readonly vmImagePublisher: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/service_fabric_managed_cluster#vm_image_sku ServiceFabricManagedCluster#vm_image_sku}
  */
  readonly vmImageSku: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/service_fabric_managed_cluster#vm_image_version ServiceFabricManagedCluster#vm_image_version}
  */
  readonly vmImageVersion: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/service_fabric_managed_cluster#vm_instance_count ServiceFabricManagedCluster#vm_instance_count}
  */
  readonly vmInstanceCount: number;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/service_fabric_managed_cluster#vm_size ServiceFabricManagedCluster#vm_size}
  */
  readonly vmSize: string;
  /**
  * vm_secrets block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/service_fabric_managed_cluster#vm_secrets ServiceFabricManagedCluster#vm_secrets}
  */
  readonly vmSecrets?: ServiceFabricManagedClusterNodeTypeVmSecrets[] | cdktf.IResolvable;
}

export function serviceFabricManagedClusterNodeTypeToTerraform(struct?: ServiceFabricManagedClusterNodeType | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    application_port_range: cdktf.stringToTerraform(struct!.applicationPortRange),
    capacities: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.capacities),
    data_disk_size_gb: cdktf.numberToTerraform(struct!.dataDiskSizeGb),
    data_disk_type: cdktf.stringToTerraform(struct!.dataDiskType),
    ephemeral_port_range: cdktf.stringToTerraform(struct!.ephemeralPortRange),
    multiple_placement_groups_enabled: cdktf.booleanToTerraform(struct!.multiplePlacementGroupsEnabled),
    name: cdktf.stringToTerraform(struct!.name),
    placement_properties: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.placementProperties),
    primary: cdktf.booleanToTerraform(struct!.primary),
    stateless: cdktf.booleanToTerraform(struct!.stateless),
    vm_image_offer: cdktf.stringToTerraform(struct!.vmImageOffer),
    vm_image_publisher: cdktf.stringToTerraform(struct!.vmImagePublisher),
    vm_image_sku: cdktf.stringToTerraform(struct!.vmImageSku),
    vm_image_version: cdktf.stringToTerraform(struct!.vmImageVersion),
    vm_instance_count: cdktf.numberToTerraform(struct!.vmInstanceCount),
    vm_size: cdktf.stringToTerraform(struct!.vmSize),
    vm_secrets: cdktf.listMapper(serviceFabricManagedClusterNodeTypeVmSecretsToTerraform)(struct!.vmSecrets),
  }
}

export interface ServiceFabricManagedClusterTimeouts {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/service_fabric_managed_cluster#create ServiceFabricManagedCluster#create}
  */
  readonly create?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/service_fabric_managed_cluster#delete ServiceFabricManagedCluster#delete}
  */
  readonly delete?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/service_fabric_managed_cluster#read ServiceFabricManagedCluster#read}
  */
  readonly read?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/service_fabric_managed_cluster#update ServiceFabricManagedCluster#update}
  */
  readonly update?: string;
}

export function serviceFabricManagedClusterTimeoutsToTerraform(struct?: ServiceFabricManagedClusterTimeoutsOutputReference | ServiceFabricManagedClusterTimeouts | cdktf.IResolvable): any {
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

export class ServiceFabricManagedClusterTimeoutsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param isSingleItem True if this is a block, false if it's a list
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, isSingleItem: boolean) {
    super(terraformResource, terraformAttribute, isSingleItem);
  }

  public get internalValue(): ServiceFabricManagedClusterTimeouts | undefined {
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

  public set internalValue(value: ServiceFabricManagedClusterTimeouts | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._create = undefined;
      this._delete = undefined;
      this._read = undefined;
      this._update = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
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
* Represents a {@link https://www.terraform.io/docs/providers/azurerm/r/service_fabric_managed_cluster azurerm_service_fabric_managed_cluster}
*/
export class ServiceFabricManagedCluster extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType: string = "azurerm_service_fabric_managed_cluster";

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://www.terraform.io/docs/providers/azurerm/r/service_fabric_managed_cluster azurerm_service_fabric_managed_cluster} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options ServiceFabricManagedClusterConfig
  */
  public constructor(scope: Construct, id: string, config: ServiceFabricManagedClusterConfig) {
    super(scope, id, {
      terraformResourceType: 'azurerm_service_fabric_managed_cluster',
      terraformGeneratorMetadata: {
        providerName: 'azurerm'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle
    });
    this._backupServiceEnabled = config.backupServiceEnabled;
    this._clientConnectionPort = config.clientConnectionPort;
    this._dnsName = config.dnsName;
    this._dnsServiceEnabled = config.dnsServiceEnabled;
    this._httpGatewayPort = config.httpGatewayPort;
    this._location = config.location;
    this._name = config.name;
    this._password = config.password;
    this._resourceGroupName = config.resourceGroupName;
    this._sku = config.sku;
    this._tags = config.tags;
    this._upgradeWave = config.upgradeWave;
    this._username = config.username;
    this._authentication.internalValue = config.authentication;
    this._customFabricSetting = config.customFabricSetting;
    this._lbRule = config.lbRule;
    this._nodeType = config.nodeType;
    this._timeouts.internalValue = config.timeouts;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // backup_service_enabled - computed: false, optional: true, required: false
  private _backupServiceEnabled?: boolean | cdktf.IResolvable; 
  public get backupServiceEnabled() {
    return this.getBooleanAttribute('backup_service_enabled');
  }
  public set backupServiceEnabled(value: boolean | cdktf.IResolvable) {
    this._backupServiceEnabled = value;
  }
  public resetBackupServiceEnabled() {
    this._backupServiceEnabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get backupServiceEnabledInput() {
    return this._backupServiceEnabled;
  }

  // client_connection_port - computed: false, optional: false, required: true
  private _clientConnectionPort?: number; 
  public get clientConnectionPort() {
    return this.getNumberAttribute('client_connection_port');
  }
  public set clientConnectionPort(value: number) {
    this._clientConnectionPort = value;
  }
  // Temporarily expose input value. Use with caution.
  public get clientConnectionPortInput() {
    return this._clientConnectionPort;
  }

  // dns_name - computed: true, optional: true, required: false
  private _dnsName?: string; 
  public get dnsName() {
    return this.getStringAttribute('dns_name');
  }
  public set dnsName(value: string) {
    this._dnsName = value;
  }
  public resetDnsName() {
    this._dnsName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dnsNameInput() {
    return this._dnsName;
  }

  // dns_service_enabled - computed: false, optional: true, required: false
  private _dnsServiceEnabled?: boolean | cdktf.IResolvable; 
  public get dnsServiceEnabled() {
    return this.getBooleanAttribute('dns_service_enabled');
  }
  public set dnsServiceEnabled(value: boolean | cdktf.IResolvable) {
    this._dnsServiceEnabled = value;
  }
  public resetDnsServiceEnabled() {
    this._dnsServiceEnabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dnsServiceEnabledInput() {
    return this._dnsServiceEnabled;
  }

  // http_gateway_port - computed: false, optional: false, required: true
  private _httpGatewayPort?: number; 
  public get httpGatewayPort() {
    return this.getNumberAttribute('http_gateway_port');
  }
  public set httpGatewayPort(value: number) {
    this._httpGatewayPort = value;
  }
  // Temporarily expose input value. Use with caution.
  public get httpGatewayPortInput() {
    return this._httpGatewayPort;
  }

  // id - computed: true, optional: true, required: false
  public get id() {
    return this.getStringAttribute('id');
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

  // password - computed: false, optional: true, required: false
  private _password?: string; 
  public get password() {
    return this.getStringAttribute('password');
  }
  public set password(value: string) {
    this._password = value;
  }
  public resetPassword() {
    this._password = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get passwordInput() {
    return this._password;
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

  // sku - computed: false, optional: true, required: false
  private _sku?: string; 
  public get sku() {
    return this.getStringAttribute('sku');
  }
  public set sku(value: string) {
    this._sku = value;
  }
  public resetSku() {
    this._sku = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get skuInput() {
    return this._sku;
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

  // upgrade_wave - computed: false, optional: true, required: false
  private _upgradeWave?: string; 
  public get upgradeWave() {
    return this.getStringAttribute('upgrade_wave');
  }
  public set upgradeWave(value: string) {
    this._upgradeWave = value;
  }
  public resetUpgradeWave() {
    this._upgradeWave = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get upgradeWaveInput() {
    return this._upgradeWave;
  }

  // username - computed: false, optional: true, required: false
  private _username?: string; 
  public get username() {
    return this.getStringAttribute('username');
  }
  public set username(value: string) {
    this._username = value;
  }
  public resetUsername() {
    this._username = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get usernameInput() {
    return this._username;
  }

  // authentication - computed: false, optional: true, required: false
  private _authentication = new ServiceFabricManagedClusterAuthenticationOutputReference(this, "authentication", true);
  public get authentication() {
    return this._authentication;
  }
  public putAuthentication(value: ServiceFabricManagedClusterAuthentication) {
    this._authentication.internalValue = value;
  }
  public resetAuthentication() {
    this._authentication.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get authenticationInput() {
    return this._authentication.internalValue;
  }

  // custom_fabric_setting - computed: false, optional: true, required: false
  private _customFabricSetting?: ServiceFabricManagedClusterCustomFabricSetting[] | cdktf.IResolvable; 
  public get customFabricSetting() {
    // Getting the computed value is not yet implemented
    return this.interpolationForAttribute('custom_fabric_setting');
  }
  public set customFabricSetting(value: ServiceFabricManagedClusterCustomFabricSetting[] | cdktf.IResolvable) {
    this._customFabricSetting = value;
  }
  public resetCustomFabricSetting() {
    this._customFabricSetting = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get customFabricSettingInput() {
    return this._customFabricSetting;
  }

  // lb_rule - computed: false, optional: false, required: true
  private _lbRule?: ServiceFabricManagedClusterLbRule[] | cdktf.IResolvable; 
  public get lbRule() {
    // Getting the computed value is not yet implemented
    return this.interpolationForAttribute('lb_rule');
  }
  public set lbRule(value: ServiceFabricManagedClusterLbRule[] | cdktf.IResolvable) {
    this._lbRule = value;
  }
  // Temporarily expose input value. Use with caution.
  public get lbRuleInput() {
    return this._lbRule;
  }

  // node_type - computed: false, optional: true, required: false
  private _nodeType?: ServiceFabricManagedClusterNodeType[] | cdktf.IResolvable; 
  public get nodeType() {
    // Getting the computed value is not yet implemented
    return this.interpolationForAttribute('node_type');
  }
  public set nodeType(value: ServiceFabricManagedClusterNodeType[] | cdktf.IResolvable) {
    this._nodeType = value;
  }
  public resetNodeType() {
    this._nodeType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nodeTypeInput() {
    return this._nodeType;
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts = new ServiceFabricManagedClusterTimeoutsOutputReference(this, "timeouts", true);
  public get timeouts() {
    return this._timeouts;
  }
  public putTimeouts(value: ServiceFabricManagedClusterTimeouts) {
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
      backup_service_enabled: cdktf.booleanToTerraform(this._backupServiceEnabled),
      client_connection_port: cdktf.numberToTerraform(this._clientConnectionPort),
      dns_name: cdktf.stringToTerraform(this._dnsName),
      dns_service_enabled: cdktf.booleanToTerraform(this._dnsServiceEnabled),
      http_gateway_port: cdktf.numberToTerraform(this._httpGatewayPort),
      location: cdktf.stringToTerraform(this._location),
      name: cdktf.stringToTerraform(this._name),
      password: cdktf.stringToTerraform(this._password),
      resource_group_name: cdktf.stringToTerraform(this._resourceGroupName),
      sku: cdktf.stringToTerraform(this._sku),
      tags: cdktf.hashMapper(cdktf.stringToTerraform)(this._tags),
      upgrade_wave: cdktf.stringToTerraform(this._upgradeWave),
      username: cdktf.stringToTerraform(this._username),
      authentication: serviceFabricManagedClusterAuthenticationToTerraform(this._authentication.internalValue),
      custom_fabric_setting: cdktf.listMapper(serviceFabricManagedClusterCustomFabricSettingToTerraform)(this._customFabricSetting),
      lb_rule: cdktf.listMapper(serviceFabricManagedClusterLbRuleToTerraform)(this._lbRule),
      node_type: cdktf.listMapper(serviceFabricManagedClusterNodeTypeToTerraform)(this._nodeType),
      timeouts: serviceFabricManagedClusterTimeoutsToTerraform(this._timeouts.internalValue),
    };
  }
}
