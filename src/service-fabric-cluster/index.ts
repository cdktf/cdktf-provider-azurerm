// https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/service_fabric_cluster
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface ServiceFabricClusterConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/service_fabric_cluster#add_on_features ServiceFabricCluster#add_on_features}
  */
  readonly addOnFeatures?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/service_fabric_cluster#cluster_code_version ServiceFabricCluster#cluster_code_version}
  */
  readonly clusterCodeVersion?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/service_fabric_cluster#id ServiceFabricCluster#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/service_fabric_cluster#location ServiceFabricCluster#location}
  */
  readonly location: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/service_fabric_cluster#management_endpoint ServiceFabricCluster#management_endpoint}
  */
  readonly managementEndpoint: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/service_fabric_cluster#name ServiceFabricCluster#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/service_fabric_cluster#reliability_level ServiceFabricCluster#reliability_level}
  */
  readonly reliabilityLevel: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/service_fabric_cluster#resource_group_name ServiceFabricCluster#resource_group_name}
  */
  readonly resourceGroupName: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/service_fabric_cluster#service_fabric_zonal_upgrade_mode ServiceFabricCluster#service_fabric_zonal_upgrade_mode}
  */
  readonly serviceFabricZonalUpgradeMode?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/service_fabric_cluster#tags ServiceFabricCluster#tags}
  */
  readonly tags?: { [key: string]: string };
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/service_fabric_cluster#upgrade_mode ServiceFabricCluster#upgrade_mode}
  */
  readonly upgradeMode: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/service_fabric_cluster#vm_image ServiceFabricCluster#vm_image}
  */
  readonly vmImage: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/service_fabric_cluster#vmss_zonal_upgrade_mode ServiceFabricCluster#vmss_zonal_upgrade_mode}
  */
  readonly vmssZonalUpgradeMode?: string;
  /**
  * azure_active_directory block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/service_fabric_cluster#azure_active_directory ServiceFabricCluster#azure_active_directory}
  */
  readonly azureActiveDirectory?: ServiceFabricClusterAzureActiveDirectory;
  /**
  * certificate block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/service_fabric_cluster#certificate ServiceFabricCluster#certificate}
  */
  readonly certificate?: ServiceFabricClusterCertificate;
  /**
  * certificate_common_names block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/service_fabric_cluster#certificate_common_names ServiceFabricCluster#certificate_common_names}
  */
  readonly certificateCommonNames?: ServiceFabricClusterCertificateCommonNames;
  /**
  * client_certificate_common_name block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/service_fabric_cluster#client_certificate_common_name ServiceFabricCluster#client_certificate_common_name}
  */
  readonly clientCertificateCommonName?: ServiceFabricClusterClientCertificateCommonName[] | cdktf.IResolvable;
  /**
  * client_certificate_thumbprint block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/service_fabric_cluster#client_certificate_thumbprint ServiceFabricCluster#client_certificate_thumbprint}
  */
  readonly clientCertificateThumbprint?: ServiceFabricClusterClientCertificateThumbprint[] | cdktf.IResolvable;
  /**
  * diagnostics_config block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/service_fabric_cluster#diagnostics_config ServiceFabricCluster#diagnostics_config}
  */
  readonly diagnosticsConfig?: ServiceFabricClusterDiagnosticsConfig;
  /**
  * fabric_settings block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/service_fabric_cluster#fabric_settings ServiceFabricCluster#fabric_settings}
  */
  readonly fabricSettings?: ServiceFabricClusterFabricSettings[] | cdktf.IResolvable;
  /**
  * node_type block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/service_fabric_cluster#node_type ServiceFabricCluster#node_type}
  */
  readonly nodeType: ServiceFabricClusterNodeType[] | cdktf.IResolvable;
  /**
  * reverse_proxy_certificate block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/service_fabric_cluster#reverse_proxy_certificate ServiceFabricCluster#reverse_proxy_certificate}
  */
  readonly reverseProxyCertificate?: ServiceFabricClusterReverseProxyCertificate;
  /**
  * reverse_proxy_certificate_common_names block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/service_fabric_cluster#reverse_proxy_certificate_common_names ServiceFabricCluster#reverse_proxy_certificate_common_names}
  */
  readonly reverseProxyCertificateCommonNames?: ServiceFabricClusterReverseProxyCertificateCommonNames;
  /**
  * timeouts block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/service_fabric_cluster#timeouts ServiceFabricCluster#timeouts}
  */
  readonly timeouts?: ServiceFabricClusterTimeouts;
  /**
  * upgrade_policy block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/service_fabric_cluster#upgrade_policy ServiceFabricCluster#upgrade_policy}
  */
  readonly upgradePolicy?: ServiceFabricClusterUpgradePolicy;
}
export interface ServiceFabricClusterAzureActiveDirectory {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/service_fabric_cluster#client_application_id ServiceFabricCluster#client_application_id}
  */
  readonly clientApplicationId: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/service_fabric_cluster#cluster_application_id ServiceFabricCluster#cluster_application_id}
  */
  readonly clusterApplicationId: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/service_fabric_cluster#tenant_id ServiceFabricCluster#tenant_id}
  */
  readonly tenantId: string;
}

export function serviceFabricClusterAzureActiveDirectoryToTerraform(struct?: ServiceFabricClusterAzureActiveDirectoryOutputReference | ServiceFabricClusterAzureActiveDirectory): any {
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


export function serviceFabricClusterAzureActiveDirectoryToHclTerraform(struct?: ServiceFabricClusterAzureActiveDirectoryOutputReference | ServiceFabricClusterAzureActiveDirectory): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    client_application_id: {
      value: cdktf.stringToHclTerraform(struct!.clientApplicationId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    cluster_application_id: {
      value: cdktf.stringToHclTerraform(struct!.clusterApplicationId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
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

export class ServiceFabricClusterAzureActiveDirectoryOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ServiceFabricClusterAzureActiveDirectory | undefined {
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

  public set internalValue(value: ServiceFabricClusterAzureActiveDirectory | undefined) {
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
export interface ServiceFabricClusterCertificate {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/service_fabric_cluster#thumbprint ServiceFabricCluster#thumbprint}
  */
  readonly thumbprint: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/service_fabric_cluster#thumbprint_secondary ServiceFabricCluster#thumbprint_secondary}
  */
  readonly thumbprintSecondary?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/service_fabric_cluster#x509_store_name ServiceFabricCluster#x509_store_name}
  */
  readonly x509StoreName: string;
}

export function serviceFabricClusterCertificateToTerraform(struct?: ServiceFabricClusterCertificateOutputReference | ServiceFabricClusterCertificate): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    thumbprint: cdktf.stringToTerraform(struct!.thumbprint),
    thumbprint_secondary: cdktf.stringToTerraform(struct!.thumbprintSecondary),
    x509_store_name: cdktf.stringToTerraform(struct!.x509StoreName),
  }
}


export function serviceFabricClusterCertificateToHclTerraform(struct?: ServiceFabricClusterCertificateOutputReference | ServiceFabricClusterCertificate): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    thumbprint: {
      value: cdktf.stringToHclTerraform(struct!.thumbprint),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    thumbprint_secondary: {
      value: cdktf.stringToHclTerraform(struct!.thumbprintSecondary),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    x509_store_name: {
      value: cdktf.stringToHclTerraform(struct!.x509StoreName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ServiceFabricClusterCertificateOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ServiceFabricClusterCertificate | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._thumbprint !== undefined) {
      hasAnyValues = true;
      internalValueResult.thumbprint = this._thumbprint;
    }
    if (this._thumbprintSecondary !== undefined) {
      hasAnyValues = true;
      internalValueResult.thumbprintSecondary = this._thumbprintSecondary;
    }
    if (this._x509StoreName !== undefined) {
      hasAnyValues = true;
      internalValueResult.x509StoreName = this._x509StoreName;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ServiceFabricClusterCertificate | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._thumbprint = undefined;
      this._thumbprintSecondary = undefined;
      this._x509StoreName = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._thumbprint = value.thumbprint;
      this._thumbprintSecondary = value.thumbprintSecondary;
      this._x509StoreName = value.x509StoreName;
    }
  }

  // thumbprint - computed: false, optional: false, required: true
  private _thumbprint?: string; 
  public get thumbprint() {
    return this.getStringAttribute('thumbprint');
  }
  public set thumbprint(value: string) {
    this._thumbprint = value;
  }
  // Temporarily expose input value. Use with caution.
  public get thumbprintInput() {
    return this._thumbprint;
  }

  // thumbprint_secondary - computed: false, optional: true, required: false
  private _thumbprintSecondary?: string; 
  public get thumbprintSecondary() {
    return this.getStringAttribute('thumbprint_secondary');
  }
  public set thumbprintSecondary(value: string) {
    this._thumbprintSecondary = value;
  }
  public resetThumbprintSecondary() {
    this._thumbprintSecondary = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get thumbprintSecondaryInput() {
    return this._thumbprintSecondary;
  }

  // x509_store_name - computed: false, optional: false, required: true
  private _x509StoreName?: string; 
  public get x509StoreName() {
    return this.getStringAttribute('x509_store_name');
  }
  public set x509StoreName(value: string) {
    this._x509StoreName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get x509StoreNameInput() {
    return this._x509StoreName;
  }
}
export interface ServiceFabricClusterCertificateCommonNamesCommonNames {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/service_fabric_cluster#certificate_common_name ServiceFabricCluster#certificate_common_name}
  */
  readonly certificateCommonName: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/service_fabric_cluster#certificate_issuer_thumbprint ServiceFabricCluster#certificate_issuer_thumbprint}
  */
  readonly certificateIssuerThumbprint?: string;
}

export function serviceFabricClusterCertificateCommonNamesCommonNamesToTerraform(struct?: ServiceFabricClusterCertificateCommonNamesCommonNames | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    certificate_common_name: cdktf.stringToTerraform(struct!.certificateCommonName),
    certificate_issuer_thumbprint: cdktf.stringToTerraform(struct!.certificateIssuerThumbprint),
  }
}


export function serviceFabricClusterCertificateCommonNamesCommonNamesToHclTerraform(struct?: ServiceFabricClusterCertificateCommonNamesCommonNames | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    certificate_common_name: {
      value: cdktf.stringToHclTerraform(struct!.certificateCommonName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    certificate_issuer_thumbprint: {
      value: cdktf.stringToHclTerraform(struct!.certificateIssuerThumbprint),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ServiceFabricClusterCertificateCommonNamesCommonNamesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ServiceFabricClusterCertificateCommonNamesCommonNames | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._certificateCommonName !== undefined) {
      hasAnyValues = true;
      internalValueResult.certificateCommonName = this._certificateCommonName;
    }
    if (this._certificateIssuerThumbprint !== undefined) {
      hasAnyValues = true;
      internalValueResult.certificateIssuerThumbprint = this._certificateIssuerThumbprint;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ServiceFabricClusterCertificateCommonNamesCommonNames | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._certificateCommonName = undefined;
      this._certificateIssuerThumbprint = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._certificateCommonName = value.certificateCommonName;
      this._certificateIssuerThumbprint = value.certificateIssuerThumbprint;
    }
  }

  // certificate_common_name - computed: false, optional: false, required: true
  private _certificateCommonName?: string; 
  public get certificateCommonName() {
    return this.getStringAttribute('certificate_common_name');
  }
  public set certificateCommonName(value: string) {
    this._certificateCommonName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get certificateCommonNameInput() {
    return this._certificateCommonName;
  }

  // certificate_issuer_thumbprint - computed: false, optional: true, required: false
  private _certificateIssuerThumbprint?: string; 
  public get certificateIssuerThumbprint() {
    return this.getStringAttribute('certificate_issuer_thumbprint');
  }
  public set certificateIssuerThumbprint(value: string) {
    this._certificateIssuerThumbprint = value;
  }
  public resetCertificateIssuerThumbprint() {
    this._certificateIssuerThumbprint = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get certificateIssuerThumbprintInput() {
    return this._certificateIssuerThumbprint;
  }
}

export class ServiceFabricClusterCertificateCommonNamesCommonNamesList extends cdktf.ComplexList {
  public internalValue? : ServiceFabricClusterCertificateCommonNamesCommonNames[] | cdktf.IResolvable

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
  public get(index: number): ServiceFabricClusterCertificateCommonNamesCommonNamesOutputReference {
    return new ServiceFabricClusterCertificateCommonNamesCommonNamesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ServiceFabricClusterCertificateCommonNames {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/service_fabric_cluster#x509_store_name ServiceFabricCluster#x509_store_name}
  */
  readonly x509StoreName: string;
  /**
  * common_names block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/service_fabric_cluster#common_names ServiceFabricCluster#common_names}
  */
  readonly commonNames: ServiceFabricClusterCertificateCommonNamesCommonNames[] | cdktf.IResolvable;
}

export function serviceFabricClusterCertificateCommonNamesToTerraform(struct?: ServiceFabricClusterCertificateCommonNamesOutputReference | ServiceFabricClusterCertificateCommonNames): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    x509_store_name: cdktf.stringToTerraform(struct!.x509StoreName),
    common_names: cdktf.listMapper(serviceFabricClusterCertificateCommonNamesCommonNamesToTerraform, true)(struct!.commonNames),
  }
}


export function serviceFabricClusterCertificateCommonNamesToHclTerraform(struct?: ServiceFabricClusterCertificateCommonNamesOutputReference | ServiceFabricClusterCertificateCommonNames): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    x509_store_name: {
      value: cdktf.stringToHclTerraform(struct!.x509StoreName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    common_names: {
      value: cdktf.listMapperHcl(serviceFabricClusterCertificateCommonNamesCommonNamesToHclTerraform, true)(struct!.commonNames),
      isBlock: true,
      type: "set",
      storageClassType: "ServiceFabricClusterCertificateCommonNamesCommonNamesList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ServiceFabricClusterCertificateCommonNamesOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ServiceFabricClusterCertificateCommonNames | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._x509StoreName !== undefined) {
      hasAnyValues = true;
      internalValueResult.x509StoreName = this._x509StoreName;
    }
    if (this._commonNames?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.commonNames = this._commonNames?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ServiceFabricClusterCertificateCommonNames | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._x509StoreName = undefined;
      this._commonNames.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._x509StoreName = value.x509StoreName;
      this._commonNames.internalValue = value.commonNames;
    }
  }

  // x509_store_name - computed: false, optional: false, required: true
  private _x509StoreName?: string; 
  public get x509StoreName() {
    return this.getStringAttribute('x509_store_name');
  }
  public set x509StoreName(value: string) {
    this._x509StoreName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get x509StoreNameInput() {
    return this._x509StoreName;
  }

  // common_names - computed: false, optional: false, required: true
  private _commonNames = new ServiceFabricClusterCertificateCommonNamesCommonNamesList(this, "common_names", true);
  public get commonNames() {
    return this._commonNames;
  }
  public putCommonNames(value: ServiceFabricClusterCertificateCommonNamesCommonNames[] | cdktf.IResolvable) {
    this._commonNames.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get commonNamesInput() {
    return this._commonNames.internalValue;
  }
}
export interface ServiceFabricClusterClientCertificateCommonName {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/service_fabric_cluster#common_name ServiceFabricCluster#common_name}
  */
  readonly commonName: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/service_fabric_cluster#is_admin ServiceFabricCluster#is_admin}
  */
  readonly isAdmin: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/service_fabric_cluster#issuer_thumbprint ServiceFabricCluster#issuer_thumbprint}
  */
  readonly issuerThumbprint?: string;
}

export function serviceFabricClusterClientCertificateCommonNameToTerraform(struct?: ServiceFabricClusterClientCertificateCommonName | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    common_name: cdktf.stringToTerraform(struct!.commonName),
    is_admin: cdktf.booleanToTerraform(struct!.isAdmin),
    issuer_thumbprint: cdktf.stringToTerraform(struct!.issuerThumbprint),
  }
}


export function serviceFabricClusterClientCertificateCommonNameToHclTerraform(struct?: ServiceFabricClusterClientCertificateCommonName | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    common_name: {
      value: cdktf.stringToHclTerraform(struct!.commonName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    is_admin: {
      value: cdktf.booleanToHclTerraform(struct!.isAdmin),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    issuer_thumbprint: {
      value: cdktf.stringToHclTerraform(struct!.issuerThumbprint),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ServiceFabricClusterClientCertificateCommonNameOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ServiceFabricClusterClientCertificateCommonName | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._commonName !== undefined) {
      hasAnyValues = true;
      internalValueResult.commonName = this._commonName;
    }
    if (this._isAdmin !== undefined) {
      hasAnyValues = true;
      internalValueResult.isAdmin = this._isAdmin;
    }
    if (this._issuerThumbprint !== undefined) {
      hasAnyValues = true;
      internalValueResult.issuerThumbprint = this._issuerThumbprint;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ServiceFabricClusterClientCertificateCommonName | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._commonName = undefined;
      this._isAdmin = undefined;
      this._issuerThumbprint = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._commonName = value.commonName;
      this._isAdmin = value.isAdmin;
      this._issuerThumbprint = value.issuerThumbprint;
    }
  }

  // common_name - computed: false, optional: false, required: true
  private _commonName?: string; 
  public get commonName() {
    return this.getStringAttribute('common_name');
  }
  public set commonName(value: string) {
    this._commonName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get commonNameInput() {
    return this._commonName;
  }

  // is_admin - computed: false, optional: false, required: true
  private _isAdmin?: boolean | cdktf.IResolvable; 
  public get isAdmin() {
    return this.getBooleanAttribute('is_admin');
  }
  public set isAdmin(value: boolean | cdktf.IResolvable) {
    this._isAdmin = value;
  }
  // Temporarily expose input value. Use with caution.
  public get isAdminInput() {
    return this._isAdmin;
  }

  // issuer_thumbprint - computed: false, optional: true, required: false
  private _issuerThumbprint?: string; 
  public get issuerThumbprint() {
    return this.getStringAttribute('issuer_thumbprint');
  }
  public set issuerThumbprint(value: string) {
    this._issuerThumbprint = value;
  }
  public resetIssuerThumbprint() {
    this._issuerThumbprint = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get issuerThumbprintInput() {
    return this._issuerThumbprint;
  }
}

export class ServiceFabricClusterClientCertificateCommonNameList extends cdktf.ComplexList {
  public internalValue? : ServiceFabricClusterClientCertificateCommonName[] | cdktf.IResolvable

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
  public get(index: number): ServiceFabricClusterClientCertificateCommonNameOutputReference {
    return new ServiceFabricClusterClientCertificateCommonNameOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ServiceFabricClusterClientCertificateThumbprint {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/service_fabric_cluster#is_admin ServiceFabricCluster#is_admin}
  */
  readonly isAdmin: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/service_fabric_cluster#thumbprint ServiceFabricCluster#thumbprint}
  */
  readonly thumbprint: string;
}

export function serviceFabricClusterClientCertificateThumbprintToTerraform(struct?: ServiceFabricClusterClientCertificateThumbprint | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    is_admin: cdktf.booleanToTerraform(struct!.isAdmin),
    thumbprint: cdktf.stringToTerraform(struct!.thumbprint),
  }
}


export function serviceFabricClusterClientCertificateThumbprintToHclTerraform(struct?: ServiceFabricClusterClientCertificateThumbprint | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    is_admin: {
      value: cdktf.booleanToHclTerraform(struct!.isAdmin),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    thumbprint: {
      value: cdktf.stringToHclTerraform(struct!.thumbprint),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ServiceFabricClusterClientCertificateThumbprintOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ServiceFabricClusterClientCertificateThumbprint | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._isAdmin !== undefined) {
      hasAnyValues = true;
      internalValueResult.isAdmin = this._isAdmin;
    }
    if (this._thumbprint !== undefined) {
      hasAnyValues = true;
      internalValueResult.thumbprint = this._thumbprint;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ServiceFabricClusterClientCertificateThumbprint | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._isAdmin = undefined;
      this._thumbprint = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._isAdmin = value.isAdmin;
      this._thumbprint = value.thumbprint;
    }
  }

  // is_admin - computed: false, optional: false, required: true
  private _isAdmin?: boolean | cdktf.IResolvable; 
  public get isAdmin() {
    return this.getBooleanAttribute('is_admin');
  }
  public set isAdmin(value: boolean | cdktf.IResolvable) {
    this._isAdmin = value;
  }
  // Temporarily expose input value. Use with caution.
  public get isAdminInput() {
    return this._isAdmin;
  }

  // thumbprint - computed: false, optional: false, required: true
  private _thumbprint?: string; 
  public get thumbprint() {
    return this.getStringAttribute('thumbprint');
  }
  public set thumbprint(value: string) {
    this._thumbprint = value;
  }
  // Temporarily expose input value. Use with caution.
  public get thumbprintInput() {
    return this._thumbprint;
  }
}

export class ServiceFabricClusterClientCertificateThumbprintList extends cdktf.ComplexList {
  public internalValue? : ServiceFabricClusterClientCertificateThumbprint[] | cdktf.IResolvable

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
  public get(index: number): ServiceFabricClusterClientCertificateThumbprintOutputReference {
    return new ServiceFabricClusterClientCertificateThumbprintOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ServiceFabricClusterDiagnosticsConfig {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/service_fabric_cluster#blob_endpoint ServiceFabricCluster#blob_endpoint}
  */
  readonly blobEndpoint: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/service_fabric_cluster#protected_account_key_name ServiceFabricCluster#protected_account_key_name}
  */
  readonly protectedAccountKeyName: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/service_fabric_cluster#queue_endpoint ServiceFabricCluster#queue_endpoint}
  */
  readonly queueEndpoint: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/service_fabric_cluster#storage_account_name ServiceFabricCluster#storage_account_name}
  */
  readonly storageAccountName: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/service_fabric_cluster#table_endpoint ServiceFabricCluster#table_endpoint}
  */
  readonly tableEndpoint: string;
}

export function serviceFabricClusterDiagnosticsConfigToTerraform(struct?: ServiceFabricClusterDiagnosticsConfigOutputReference | ServiceFabricClusterDiagnosticsConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    blob_endpoint: cdktf.stringToTerraform(struct!.blobEndpoint),
    protected_account_key_name: cdktf.stringToTerraform(struct!.protectedAccountKeyName),
    queue_endpoint: cdktf.stringToTerraform(struct!.queueEndpoint),
    storage_account_name: cdktf.stringToTerraform(struct!.storageAccountName),
    table_endpoint: cdktf.stringToTerraform(struct!.tableEndpoint),
  }
}


export function serviceFabricClusterDiagnosticsConfigToHclTerraform(struct?: ServiceFabricClusterDiagnosticsConfigOutputReference | ServiceFabricClusterDiagnosticsConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    blob_endpoint: {
      value: cdktf.stringToHclTerraform(struct!.blobEndpoint),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    protected_account_key_name: {
      value: cdktf.stringToHclTerraform(struct!.protectedAccountKeyName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    queue_endpoint: {
      value: cdktf.stringToHclTerraform(struct!.queueEndpoint),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    storage_account_name: {
      value: cdktf.stringToHclTerraform(struct!.storageAccountName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    table_endpoint: {
      value: cdktf.stringToHclTerraform(struct!.tableEndpoint),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ServiceFabricClusterDiagnosticsConfigOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ServiceFabricClusterDiagnosticsConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._blobEndpoint !== undefined) {
      hasAnyValues = true;
      internalValueResult.blobEndpoint = this._blobEndpoint;
    }
    if (this._protectedAccountKeyName !== undefined) {
      hasAnyValues = true;
      internalValueResult.protectedAccountKeyName = this._protectedAccountKeyName;
    }
    if (this._queueEndpoint !== undefined) {
      hasAnyValues = true;
      internalValueResult.queueEndpoint = this._queueEndpoint;
    }
    if (this._storageAccountName !== undefined) {
      hasAnyValues = true;
      internalValueResult.storageAccountName = this._storageAccountName;
    }
    if (this._tableEndpoint !== undefined) {
      hasAnyValues = true;
      internalValueResult.tableEndpoint = this._tableEndpoint;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ServiceFabricClusterDiagnosticsConfig | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._blobEndpoint = undefined;
      this._protectedAccountKeyName = undefined;
      this._queueEndpoint = undefined;
      this._storageAccountName = undefined;
      this._tableEndpoint = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._blobEndpoint = value.blobEndpoint;
      this._protectedAccountKeyName = value.protectedAccountKeyName;
      this._queueEndpoint = value.queueEndpoint;
      this._storageAccountName = value.storageAccountName;
      this._tableEndpoint = value.tableEndpoint;
    }
  }

  // blob_endpoint - computed: false, optional: false, required: true
  private _blobEndpoint?: string; 
  public get blobEndpoint() {
    return this.getStringAttribute('blob_endpoint');
  }
  public set blobEndpoint(value: string) {
    this._blobEndpoint = value;
  }
  // Temporarily expose input value. Use with caution.
  public get blobEndpointInput() {
    return this._blobEndpoint;
  }

  // protected_account_key_name - computed: false, optional: false, required: true
  private _protectedAccountKeyName?: string; 
  public get protectedAccountKeyName() {
    return this.getStringAttribute('protected_account_key_name');
  }
  public set protectedAccountKeyName(value: string) {
    this._protectedAccountKeyName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get protectedAccountKeyNameInput() {
    return this._protectedAccountKeyName;
  }

  // queue_endpoint - computed: false, optional: false, required: true
  private _queueEndpoint?: string; 
  public get queueEndpoint() {
    return this.getStringAttribute('queue_endpoint');
  }
  public set queueEndpoint(value: string) {
    this._queueEndpoint = value;
  }
  // Temporarily expose input value. Use with caution.
  public get queueEndpointInput() {
    return this._queueEndpoint;
  }

  // storage_account_name - computed: false, optional: false, required: true
  private _storageAccountName?: string; 
  public get storageAccountName() {
    return this.getStringAttribute('storage_account_name');
  }
  public set storageAccountName(value: string) {
    this._storageAccountName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get storageAccountNameInput() {
    return this._storageAccountName;
  }

  // table_endpoint - computed: false, optional: false, required: true
  private _tableEndpoint?: string; 
  public get tableEndpoint() {
    return this.getStringAttribute('table_endpoint');
  }
  public set tableEndpoint(value: string) {
    this._tableEndpoint = value;
  }
  // Temporarily expose input value. Use with caution.
  public get tableEndpointInput() {
    return this._tableEndpoint;
  }
}
export interface ServiceFabricClusterFabricSettings {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/service_fabric_cluster#name ServiceFabricCluster#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/service_fabric_cluster#parameters ServiceFabricCluster#parameters}
  */
  readonly parameters?: { [key: string]: string };
}

export function serviceFabricClusterFabricSettingsToTerraform(struct?: ServiceFabricClusterFabricSettings | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
    parameters: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.parameters),
  }
}


export function serviceFabricClusterFabricSettingsToHclTerraform(struct?: ServiceFabricClusterFabricSettings | cdktf.IResolvable): any {
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
    parameters: {
      value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(struct!.parameters),
      isBlock: false,
      type: "map",
      storageClassType: "stringMap",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ServiceFabricClusterFabricSettingsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ServiceFabricClusterFabricSettings | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._parameters !== undefined) {
      hasAnyValues = true;
      internalValueResult.parameters = this._parameters;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ServiceFabricClusterFabricSettings | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._name = undefined;
      this._parameters = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._name = value.name;
      this._parameters = value.parameters;
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

  // parameters - computed: false, optional: true, required: false
  private _parameters?: { [key: string]: string }; 
  public get parameters() {
    return this.getStringMapAttribute('parameters');
  }
  public set parameters(value: { [key: string]: string }) {
    this._parameters = value;
  }
  public resetParameters() {
    this._parameters = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get parametersInput() {
    return this._parameters;
  }
}

export class ServiceFabricClusterFabricSettingsList extends cdktf.ComplexList {
  public internalValue? : ServiceFabricClusterFabricSettings[] | cdktf.IResolvable

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
  public get(index: number): ServiceFabricClusterFabricSettingsOutputReference {
    return new ServiceFabricClusterFabricSettingsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ServiceFabricClusterNodeTypeApplicationPorts {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/service_fabric_cluster#end_port ServiceFabricCluster#end_port}
  */
  readonly endPort: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/service_fabric_cluster#start_port ServiceFabricCluster#start_port}
  */
  readonly startPort: number;
}

export function serviceFabricClusterNodeTypeApplicationPortsToTerraform(struct?: ServiceFabricClusterNodeTypeApplicationPortsOutputReference | ServiceFabricClusterNodeTypeApplicationPorts): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    end_port: cdktf.numberToTerraform(struct!.endPort),
    start_port: cdktf.numberToTerraform(struct!.startPort),
  }
}


export function serviceFabricClusterNodeTypeApplicationPortsToHclTerraform(struct?: ServiceFabricClusterNodeTypeApplicationPortsOutputReference | ServiceFabricClusterNodeTypeApplicationPorts): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    end_port: {
      value: cdktf.numberToHclTerraform(struct!.endPort),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    start_port: {
      value: cdktf.numberToHclTerraform(struct!.startPort),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ServiceFabricClusterNodeTypeApplicationPortsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ServiceFabricClusterNodeTypeApplicationPorts | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._endPort !== undefined) {
      hasAnyValues = true;
      internalValueResult.endPort = this._endPort;
    }
    if (this._startPort !== undefined) {
      hasAnyValues = true;
      internalValueResult.startPort = this._startPort;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ServiceFabricClusterNodeTypeApplicationPorts | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._endPort = undefined;
      this._startPort = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._endPort = value.endPort;
      this._startPort = value.startPort;
    }
  }

  // end_port - computed: false, optional: false, required: true
  private _endPort?: number; 
  public get endPort() {
    return this.getNumberAttribute('end_port');
  }
  public set endPort(value: number) {
    this._endPort = value;
  }
  // Temporarily expose input value. Use with caution.
  public get endPortInput() {
    return this._endPort;
  }

  // start_port - computed: false, optional: false, required: true
  private _startPort?: number; 
  public get startPort() {
    return this.getNumberAttribute('start_port');
  }
  public set startPort(value: number) {
    this._startPort = value;
  }
  // Temporarily expose input value. Use with caution.
  public get startPortInput() {
    return this._startPort;
  }
}
export interface ServiceFabricClusterNodeTypeEphemeralPorts {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/service_fabric_cluster#end_port ServiceFabricCluster#end_port}
  */
  readonly endPort: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/service_fabric_cluster#start_port ServiceFabricCluster#start_port}
  */
  readonly startPort: number;
}

export function serviceFabricClusterNodeTypeEphemeralPortsToTerraform(struct?: ServiceFabricClusterNodeTypeEphemeralPortsOutputReference | ServiceFabricClusterNodeTypeEphemeralPorts): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    end_port: cdktf.numberToTerraform(struct!.endPort),
    start_port: cdktf.numberToTerraform(struct!.startPort),
  }
}


export function serviceFabricClusterNodeTypeEphemeralPortsToHclTerraform(struct?: ServiceFabricClusterNodeTypeEphemeralPortsOutputReference | ServiceFabricClusterNodeTypeEphemeralPorts): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    end_port: {
      value: cdktf.numberToHclTerraform(struct!.endPort),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    start_port: {
      value: cdktf.numberToHclTerraform(struct!.startPort),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ServiceFabricClusterNodeTypeEphemeralPortsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ServiceFabricClusterNodeTypeEphemeralPorts | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._endPort !== undefined) {
      hasAnyValues = true;
      internalValueResult.endPort = this._endPort;
    }
    if (this._startPort !== undefined) {
      hasAnyValues = true;
      internalValueResult.startPort = this._startPort;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ServiceFabricClusterNodeTypeEphemeralPorts | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._endPort = undefined;
      this._startPort = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._endPort = value.endPort;
      this._startPort = value.startPort;
    }
  }

  // end_port - computed: false, optional: false, required: true
  private _endPort?: number; 
  public get endPort() {
    return this.getNumberAttribute('end_port');
  }
  public set endPort(value: number) {
    this._endPort = value;
  }
  // Temporarily expose input value. Use with caution.
  public get endPortInput() {
    return this._endPort;
  }

  // start_port - computed: false, optional: false, required: true
  private _startPort?: number; 
  public get startPort() {
    return this.getNumberAttribute('start_port');
  }
  public set startPort(value: number) {
    this._startPort = value;
  }
  // Temporarily expose input value. Use with caution.
  public get startPortInput() {
    return this._startPort;
  }
}
export interface ServiceFabricClusterNodeType {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/service_fabric_cluster#capacities ServiceFabricCluster#capacities}
  */
  readonly capacities?: { [key: string]: string };
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/service_fabric_cluster#client_endpoint_port ServiceFabricCluster#client_endpoint_port}
  */
  readonly clientEndpointPort: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/service_fabric_cluster#durability_level ServiceFabricCluster#durability_level}
  */
  readonly durabilityLevel?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/service_fabric_cluster#http_endpoint_port ServiceFabricCluster#http_endpoint_port}
  */
  readonly httpEndpointPort: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/service_fabric_cluster#instance_count ServiceFabricCluster#instance_count}
  */
  readonly instanceCount: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/service_fabric_cluster#is_primary ServiceFabricCluster#is_primary}
  */
  readonly isPrimary: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/service_fabric_cluster#is_stateless ServiceFabricCluster#is_stateless}
  */
  readonly isStateless?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/service_fabric_cluster#multiple_availability_zones ServiceFabricCluster#multiple_availability_zones}
  */
  readonly multipleAvailabilityZones?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/service_fabric_cluster#name ServiceFabricCluster#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/service_fabric_cluster#placement_properties ServiceFabricCluster#placement_properties}
  */
  readonly placementProperties?: { [key: string]: string };
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/service_fabric_cluster#reverse_proxy_endpoint_port ServiceFabricCluster#reverse_proxy_endpoint_port}
  */
  readonly reverseProxyEndpointPort?: number;
  /**
  * application_ports block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/service_fabric_cluster#application_ports ServiceFabricCluster#application_ports}
  */
  readonly applicationPorts?: ServiceFabricClusterNodeTypeApplicationPorts;
  /**
  * ephemeral_ports block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/service_fabric_cluster#ephemeral_ports ServiceFabricCluster#ephemeral_ports}
  */
  readonly ephemeralPorts?: ServiceFabricClusterNodeTypeEphemeralPorts;
}

export function serviceFabricClusterNodeTypeToTerraform(struct?: ServiceFabricClusterNodeType | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    capacities: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.capacities),
    client_endpoint_port: cdktf.numberToTerraform(struct!.clientEndpointPort),
    durability_level: cdktf.stringToTerraform(struct!.durabilityLevel),
    http_endpoint_port: cdktf.numberToTerraform(struct!.httpEndpointPort),
    instance_count: cdktf.numberToTerraform(struct!.instanceCount),
    is_primary: cdktf.booleanToTerraform(struct!.isPrimary),
    is_stateless: cdktf.booleanToTerraform(struct!.isStateless),
    multiple_availability_zones: cdktf.booleanToTerraform(struct!.multipleAvailabilityZones),
    name: cdktf.stringToTerraform(struct!.name),
    placement_properties: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.placementProperties),
    reverse_proxy_endpoint_port: cdktf.numberToTerraform(struct!.reverseProxyEndpointPort),
    application_ports: serviceFabricClusterNodeTypeApplicationPortsToTerraform(struct!.applicationPorts),
    ephemeral_ports: serviceFabricClusterNodeTypeEphemeralPortsToTerraform(struct!.ephemeralPorts),
  }
}


export function serviceFabricClusterNodeTypeToHclTerraform(struct?: ServiceFabricClusterNodeType | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    capacities: {
      value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(struct!.capacities),
      isBlock: false,
      type: "map",
      storageClassType: "stringMap",
    },
    client_endpoint_port: {
      value: cdktf.numberToHclTerraform(struct!.clientEndpointPort),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    durability_level: {
      value: cdktf.stringToHclTerraform(struct!.durabilityLevel),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    http_endpoint_port: {
      value: cdktf.numberToHclTerraform(struct!.httpEndpointPort),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    instance_count: {
      value: cdktf.numberToHclTerraform(struct!.instanceCount),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    is_primary: {
      value: cdktf.booleanToHclTerraform(struct!.isPrimary),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    is_stateless: {
      value: cdktf.booleanToHclTerraform(struct!.isStateless),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    multiple_availability_zones: {
      value: cdktf.booleanToHclTerraform(struct!.multipleAvailabilityZones),
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
    placement_properties: {
      value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(struct!.placementProperties),
      isBlock: false,
      type: "map",
      storageClassType: "stringMap",
    },
    reverse_proxy_endpoint_port: {
      value: cdktf.numberToHclTerraform(struct!.reverseProxyEndpointPort),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    application_ports: {
      value: serviceFabricClusterNodeTypeApplicationPortsToHclTerraform(struct!.applicationPorts),
      isBlock: true,
      type: "list",
      storageClassType: "ServiceFabricClusterNodeTypeApplicationPortsList",
    },
    ephemeral_ports: {
      value: serviceFabricClusterNodeTypeEphemeralPortsToHclTerraform(struct!.ephemeralPorts),
      isBlock: true,
      type: "list",
      storageClassType: "ServiceFabricClusterNodeTypeEphemeralPortsList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ServiceFabricClusterNodeTypeOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ServiceFabricClusterNodeType | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._capacities !== undefined) {
      hasAnyValues = true;
      internalValueResult.capacities = this._capacities;
    }
    if (this._clientEndpointPort !== undefined) {
      hasAnyValues = true;
      internalValueResult.clientEndpointPort = this._clientEndpointPort;
    }
    if (this._durabilityLevel !== undefined) {
      hasAnyValues = true;
      internalValueResult.durabilityLevel = this._durabilityLevel;
    }
    if (this._httpEndpointPort !== undefined) {
      hasAnyValues = true;
      internalValueResult.httpEndpointPort = this._httpEndpointPort;
    }
    if (this._instanceCount !== undefined) {
      hasAnyValues = true;
      internalValueResult.instanceCount = this._instanceCount;
    }
    if (this._isPrimary !== undefined) {
      hasAnyValues = true;
      internalValueResult.isPrimary = this._isPrimary;
    }
    if (this._isStateless !== undefined) {
      hasAnyValues = true;
      internalValueResult.isStateless = this._isStateless;
    }
    if (this._multipleAvailabilityZones !== undefined) {
      hasAnyValues = true;
      internalValueResult.multipleAvailabilityZones = this._multipleAvailabilityZones;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._placementProperties !== undefined) {
      hasAnyValues = true;
      internalValueResult.placementProperties = this._placementProperties;
    }
    if (this._reverseProxyEndpointPort !== undefined) {
      hasAnyValues = true;
      internalValueResult.reverseProxyEndpointPort = this._reverseProxyEndpointPort;
    }
    if (this._applicationPorts?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.applicationPorts = this._applicationPorts?.internalValue;
    }
    if (this._ephemeralPorts?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.ephemeralPorts = this._ephemeralPorts?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ServiceFabricClusterNodeType | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._capacities = undefined;
      this._clientEndpointPort = undefined;
      this._durabilityLevel = undefined;
      this._httpEndpointPort = undefined;
      this._instanceCount = undefined;
      this._isPrimary = undefined;
      this._isStateless = undefined;
      this._multipleAvailabilityZones = undefined;
      this._name = undefined;
      this._placementProperties = undefined;
      this._reverseProxyEndpointPort = undefined;
      this._applicationPorts.internalValue = undefined;
      this._ephemeralPorts.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._capacities = value.capacities;
      this._clientEndpointPort = value.clientEndpointPort;
      this._durabilityLevel = value.durabilityLevel;
      this._httpEndpointPort = value.httpEndpointPort;
      this._instanceCount = value.instanceCount;
      this._isPrimary = value.isPrimary;
      this._isStateless = value.isStateless;
      this._multipleAvailabilityZones = value.multipleAvailabilityZones;
      this._name = value.name;
      this._placementProperties = value.placementProperties;
      this._reverseProxyEndpointPort = value.reverseProxyEndpointPort;
      this._applicationPorts.internalValue = value.applicationPorts;
      this._ephemeralPorts.internalValue = value.ephemeralPorts;
    }
  }

  // capacities - computed: false, optional: true, required: false
  private _capacities?: { [key: string]: string }; 
  public get capacities() {
    return this.getStringMapAttribute('capacities');
  }
  public set capacities(value: { [key: string]: string }) {
    this._capacities = value;
  }
  public resetCapacities() {
    this._capacities = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get capacitiesInput() {
    return this._capacities;
  }

  // client_endpoint_port - computed: false, optional: false, required: true
  private _clientEndpointPort?: number; 
  public get clientEndpointPort() {
    return this.getNumberAttribute('client_endpoint_port');
  }
  public set clientEndpointPort(value: number) {
    this._clientEndpointPort = value;
  }
  // Temporarily expose input value. Use with caution.
  public get clientEndpointPortInput() {
    return this._clientEndpointPort;
  }

  // durability_level - computed: false, optional: true, required: false
  private _durabilityLevel?: string; 
  public get durabilityLevel() {
    return this.getStringAttribute('durability_level');
  }
  public set durabilityLevel(value: string) {
    this._durabilityLevel = value;
  }
  public resetDurabilityLevel() {
    this._durabilityLevel = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get durabilityLevelInput() {
    return this._durabilityLevel;
  }

  // http_endpoint_port - computed: false, optional: false, required: true
  private _httpEndpointPort?: number; 
  public get httpEndpointPort() {
    return this.getNumberAttribute('http_endpoint_port');
  }
  public set httpEndpointPort(value: number) {
    this._httpEndpointPort = value;
  }
  // Temporarily expose input value. Use with caution.
  public get httpEndpointPortInput() {
    return this._httpEndpointPort;
  }

  // instance_count - computed: false, optional: false, required: true
  private _instanceCount?: number; 
  public get instanceCount() {
    return this.getNumberAttribute('instance_count');
  }
  public set instanceCount(value: number) {
    this._instanceCount = value;
  }
  // Temporarily expose input value. Use with caution.
  public get instanceCountInput() {
    return this._instanceCount;
  }

  // is_primary - computed: false, optional: false, required: true
  private _isPrimary?: boolean | cdktf.IResolvable; 
  public get isPrimary() {
    return this.getBooleanAttribute('is_primary');
  }
  public set isPrimary(value: boolean | cdktf.IResolvable) {
    this._isPrimary = value;
  }
  // Temporarily expose input value. Use with caution.
  public get isPrimaryInput() {
    return this._isPrimary;
  }

  // is_stateless - computed: false, optional: true, required: false
  private _isStateless?: boolean | cdktf.IResolvable; 
  public get isStateless() {
    return this.getBooleanAttribute('is_stateless');
  }
  public set isStateless(value: boolean | cdktf.IResolvable) {
    this._isStateless = value;
  }
  public resetIsStateless() {
    this._isStateless = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get isStatelessInput() {
    return this._isStateless;
  }

  // multiple_availability_zones - computed: false, optional: true, required: false
  private _multipleAvailabilityZones?: boolean | cdktf.IResolvable; 
  public get multipleAvailabilityZones() {
    return this.getBooleanAttribute('multiple_availability_zones');
  }
  public set multipleAvailabilityZones(value: boolean | cdktf.IResolvable) {
    this._multipleAvailabilityZones = value;
  }
  public resetMultipleAvailabilityZones() {
    this._multipleAvailabilityZones = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get multipleAvailabilityZonesInput() {
    return this._multipleAvailabilityZones;
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

  // placement_properties - computed: false, optional: true, required: false
  private _placementProperties?: { [key: string]: string }; 
  public get placementProperties() {
    return this.getStringMapAttribute('placement_properties');
  }
  public set placementProperties(value: { [key: string]: string }) {
    this._placementProperties = value;
  }
  public resetPlacementProperties() {
    this._placementProperties = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get placementPropertiesInput() {
    return this._placementProperties;
  }

  // reverse_proxy_endpoint_port - computed: false, optional: true, required: false
  private _reverseProxyEndpointPort?: number; 
  public get reverseProxyEndpointPort() {
    return this.getNumberAttribute('reverse_proxy_endpoint_port');
  }
  public set reverseProxyEndpointPort(value: number) {
    this._reverseProxyEndpointPort = value;
  }
  public resetReverseProxyEndpointPort() {
    this._reverseProxyEndpointPort = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get reverseProxyEndpointPortInput() {
    return this._reverseProxyEndpointPort;
  }

  // application_ports - computed: false, optional: true, required: false
  private _applicationPorts = new ServiceFabricClusterNodeTypeApplicationPortsOutputReference(this, "application_ports");
  public get applicationPorts() {
    return this._applicationPorts;
  }
  public putApplicationPorts(value: ServiceFabricClusterNodeTypeApplicationPorts) {
    this._applicationPorts.internalValue = value;
  }
  public resetApplicationPorts() {
    this._applicationPorts.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get applicationPortsInput() {
    return this._applicationPorts.internalValue;
  }

  // ephemeral_ports - computed: false, optional: true, required: false
  private _ephemeralPorts = new ServiceFabricClusterNodeTypeEphemeralPortsOutputReference(this, "ephemeral_ports");
  public get ephemeralPorts() {
    return this._ephemeralPorts;
  }
  public putEphemeralPorts(value: ServiceFabricClusterNodeTypeEphemeralPorts) {
    this._ephemeralPorts.internalValue = value;
  }
  public resetEphemeralPorts() {
    this._ephemeralPorts.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ephemeralPortsInput() {
    return this._ephemeralPorts.internalValue;
  }
}

export class ServiceFabricClusterNodeTypeList extends cdktf.ComplexList {
  public internalValue? : ServiceFabricClusterNodeType[] | cdktf.IResolvable

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
  public get(index: number): ServiceFabricClusterNodeTypeOutputReference {
    return new ServiceFabricClusterNodeTypeOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ServiceFabricClusterReverseProxyCertificate {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/service_fabric_cluster#thumbprint ServiceFabricCluster#thumbprint}
  */
  readonly thumbprint: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/service_fabric_cluster#thumbprint_secondary ServiceFabricCluster#thumbprint_secondary}
  */
  readonly thumbprintSecondary?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/service_fabric_cluster#x509_store_name ServiceFabricCluster#x509_store_name}
  */
  readonly x509StoreName: string;
}

export function serviceFabricClusterReverseProxyCertificateToTerraform(struct?: ServiceFabricClusterReverseProxyCertificateOutputReference | ServiceFabricClusterReverseProxyCertificate): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    thumbprint: cdktf.stringToTerraform(struct!.thumbprint),
    thumbprint_secondary: cdktf.stringToTerraform(struct!.thumbprintSecondary),
    x509_store_name: cdktf.stringToTerraform(struct!.x509StoreName),
  }
}


export function serviceFabricClusterReverseProxyCertificateToHclTerraform(struct?: ServiceFabricClusterReverseProxyCertificateOutputReference | ServiceFabricClusterReverseProxyCertificate): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    thumbprint: {
      value: cdktf.stringToHclTerraform(struct!.thumbprint),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    thumbprint_secondary: {
      value: cdktf.stringToHclTerraform(struct!.thumbprintSecondary),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    x509_store_name: {
      value: cdktf.stringToHclTerraform(struct!.x509StoreName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ServiceFabricClusterReverseProxyCertificateOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ServiceFabricClusterReverseProxyCertificate | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._thumbprint !== undefined) {
      hasAnyValues = true;
      internalValueResult.thumbprint = this._thumbprint;
    }
    if (this._thumbprintSecondary !== undefined) {
      hasAnyValues = true;
      internalValueResult.thumbprintSecondary = this._thumbprintSecondary;
    }
    if (this._x509StoreName !== undefined) {
      hasAnyValues = true;
      internalValueResult.x509StoreName = this._x509StoreName;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ServiceFabricClusterReverseProxyCertificate | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._thumbprint = undefined;
      this._thumbprintSecondary = undefined;
      this._x509StoreName = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._thumbprint = value.thumbprint;
      this._thumbprintSecondary = value.thumbprintSecondary;
      this._x509StoreName = value.x509StoreName;
    }
  }

  // thumbprint - computed: false, optional: false, required: true
  private _thumbprint?: string; 
  public get thumbprint() {
    return this.getStringAttribute('thumbprint');
  }
  public set thumbprint(value: string) {
    this._thumbprint = value;
  }
  // Temporarily expose input value. Use with caution.
  public get thumbprintInput() {
    return this._thumbprint;
  }

  // thumbprint_secondary - computed: false, optional: true, required: false
  private _thumbprintSecondary?: string; 
  public get thumbprintSecondary() {
    return this.getStringAttribute('thumbprint_secondary');
  }
  public set thumbprintSecondary(value: string) {
    this._thumbprintSecondary = value;
  }
  public resetThumbprintSecondary() {
    this._thumbprintSecondary = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get thumbprintSecondaryInput() {
    return this._thumbprintSecondary;
  }

  // x509_store_name - computed: false, optional: false, required: true
  private _x509StoreName?: string; 
  public get x509StoreName() {
    return this.getStringAttribute('x509_store_name');
  }
  public set x509StoreName(value: string) {
    this._x509StoreName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get x509StoreNameInput() {
    return this._x509StoreName;
  }
}
export interface ServiceFabricClusterReverseProxyCertificateCommonNamesCommonNames {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/service_fabric_cluster#certificate_common_name ServiceFabricCluster#certificate_common_name}
  */
  readonly certificateCommonName: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/service_fabric_cluster#certificate_issuer_thumbprint ServiceFabricCluster#certificate_issuer_thumbprint}
  */
  readonly certificateIssuerThumbprint?: string;
}

export function serviceFabricClusterReverseProxyCertificateCommonNamesCommonNamesToTerraform(struct?: ServiceFabricClusterReverseProxyCertificateCommonNamesCommonNames | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    certificate_common_name: cdktf.stringToTerraform(struct!.certificateCommonName),
    certificate_issuer_thumbprint: cdktf.stringToTerraform(struct!.certificateIssuerThumbprint),
  }
}


export function serviceFabricClusterReverseProxyCertificateCommonNamesCommonNamesToHclTerraform(struct?: ServiceFabricClusterReverseProxyCertificateCommonNamesCommonNames | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    certificate_common_name: {
      value: cdktf.stringToHclTerraform(struct!.certificateCommonName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    certificate_issuer_thumbprint: {
      value: cdktf.stringToHclTerraform(struct!.certificateIssuerThumbprint),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ServiceFabricClusterReverseProxyCertificateCommonNamesCommonNamesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ServiceFabricClusterReverseProxyCertificateCommonNamesCommonNames | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._certificateCommonName !== undefined) {
      hasAnyValues = true;
      internalValueResult.certificateCommonName = this._certificateCommonName;
    }
    if (this._certificateIssuerThumbprint !== undefined) {
      hasAnyValues = true;
      internalValueResult.certificateIssuerThumbprint = this._certificateIssuerThumbprint;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ServiceFabricClusterReverseProxyCertificateCommonNamesCommonNames | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._certificateCommonName = undefined;
      this._certificateIssuerThumbprint = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._certificateCommonName = value.certificateCommonName;
      this._certificateIssuerThumbprint = value.certificateIssuerThumbprint;
    }
  }

  // certificate_common_name - computed: false, optional: false, required: true
  private _certificateCommonName?: string; 
  public get certificateCommonName() {
    return this.getStringAttribute('certificate_common_name');
  }
  public set certificateCommonName(value: string) {
    this._certificateCommonName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get certificateCommonNameInput() {
    return this._certificateCommonName;
  }

  // certificate_issuer_thumbprint - computed: false, optional: true, required: false
  private _certificateIssuerThumbprint?: string; 
  public get certificateIssuerThumbprint() {
    return this.getStringAttribute('certificate_issuer_thumbprint');
  }
  public set certificateIssuerThumbprint(value: string) {
    this._certificateIssuerThumbprint = value;
  }
  public resetCertificateIssuerThumbprint() {
    this._certificateIssuerThumbprint = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get certificateIssuerThumbprintInput() {
    return this._certificateIssuerThumbprint;
  }
}

export class ServiceFabricClusterReverseProxyCertificateCommonNamesCommonNamesList extends cdktf.ComplexList {
  public internalValue? : ServiceFabricClusterReverseProxyCertificateCommonNamesCommonNames[] | cdktf.IResolvable

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
  public get(index: number): ServiceFabricClusterReverseProxyCertificateCommonNamesCommonNamesOutputReference {
    return new ServiceFabricClusterReverseProxyCertificateCommonNamesCommonNamesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ServiceFabricClusterReverseProxyCertificateCommonNames {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/service_fabric_cluster#x509_store_name ServiceFabricCluster#x509_store_name}
  */
  readonly x509StoreName: string;
  /**
  * common_names block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/service_fabric_cluster#common_names ServiceFabricCluster#common_names}
  */
  readonly commonNames: ServiceFabricClusterReverseProxyCertificateCommonNamesCommonNames[] | cdktf.IResolvable;
}

export function serviceFabricClusterReverseProxyCertificateCommonNamesToTerraform(struct?: ServiceFabricClusterReverseProxyCertificateCommonNamesOutputReference | ServiceFabricClusterReverseProxyCertificateCommonNames): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    x509_store_name: cdktf.stringToTerraform(struct!.x509StoreName),
    common_names: cdktf.listMapper(serviceFabricClusterReverseProxyCertificateCommonNamesCommonNamesToTerraform, true)(struct!.commonNames),
  }
}


export function serviceFabricClusterReverseProxyCertificateCommonNamesToHclTerraform(struct?: ServiceFabricClusterReverseProxyCertificateCommonNamesOutputReference | ServiceFabricClusterReverseProxyCertificateCommonNames): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    x509_store_name: {
      value: cdktf.stringToHclTerraform(struct!.x509StoreName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    common_names: {
      value: cdktf.listMapperHcl(serviceFabricClusterReverseProxyCertificateCommonNamesCommonNamesToHclTerraform, true)(struct!.commonNames),
      isBlock: true,
      type: "set",
      storageClassType: "ServiceFabricClusterReverseProxyCertificateCommonNamesCommonNamesList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ServiceFabricClusterReverseProxyCertificateCommonNamesOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ServiceFabricClusterReverseProxyCertificateCommonNames | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._x509StoreName !== undefined) {
      hasAnyValues = true;
      internalValueResult.x509StoreName = this._x509StoreName;
    }
    if (this._commonNames?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.commonNames = this._commonNames?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ServiceFabricClusterReverseProxyCertificateCommonNames | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._x509StoreName = undefined;
      this._commonNames.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._x509StoreName = value.x509StoreName;
      this._commonNames.internalValue = value.commonNames;
    }
  }

  // x509_store_name - computed: false, optional: false, required: true
  private _x509StoreName?: string; 
  public get x509StoreName() {
    return this.getStringAttribute('x509_store_name');
  }
  public set x509StoreName(value: string) {
    this._x509StoreName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get x509StoreNameInput() {
    return this._x509StoreName;
  }

  // common_names - computed: false, optional: false, required: true
  private _commonNames = new ServiceFabricClusterReverseProxyCertificateCommonNamesCommonNamesList(this, "common_names", true);
  public get commonNames() {
    return this._commonNames;
  }
  public putCommonNames(value: ServiceFabricClusterReverseProxyCertificateCommonNamesCommonNames[] | cdktf.IResolvable) {
    this._commonNames.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get commonNamesInput() {
    return this._commonNames.internalValue;
  }
}
export interface ServiceFabricClusterTimeouts {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/service_fabric_cluster#create ServiceFabricCluster#create}
  */
  readonly create?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/service_fabric_cluster#delete ServiceFabricCluster#delete}
  */
  readonly delete?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/service_fabric_cluster#read ServiceFabricCluster#read}
  */
  readonly read?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/service_fabric_cluster#update ServiceFabricCluster#update}
  */
  readonly update?: string;
}

export function serviceFabricClusterTimeoutsToTerraform(struct?: ServiceFabricClusterTimeouts | cdktf.IResolvable): any {
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


export function serviceFabricClusterTimeoutsToHclTerraform(struct?: ServiceFabricClusterTimeouts | cdktf.IResolvable): any {
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

export class ServiceFabricClusterTimeoutsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): ServiceFabricClusterTimeouts | cdktf.IResolvable | undefined {
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

  public set internalValue(value: ServiceFabricClusterTimeouts | cdktf.IResolvable | undefined) {
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
export interface ServiceFabricClusterUpgradePolicyDeltaHealthPolicy {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/service_fabric_cluster#max_delta_unhealthy_applications_percent ServiceFabricCluster#max_delta_unhealthy_applications_percent}
  */
  readonly maxDeltaUnhealthyApplicationsPercent?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/service_fabric_cluster#max_delta_unhealthy_nodes_percent ServiceFabricCluster#max_delta_unhealthy_nodes_percent}
  */
  readonly maxDeltaUnhealthyNodesPercent?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/service_fabric_cluster#max_upgrade_domain_delta_unhealthy_nodes_percent ServiceFabricCluster#max_upgrade_domain_delta_unhealthy_nodes_percent}
  */
  readonly maxUpgradeDomainDeltaUnhealthyNodesPercent?: number;
}

export function serviceFabricClusterUpgradePolicyDeltaHealthPolicyToTerraform(struct?: ServiceFabricClusterUpgradePolicyDeltaHealthPolicyOutputReference | ServiceFabricClusterUpgradePolicyDeltaHealthPolicy): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    max_delta_unhealthy_applications_percent: cdktf.numberToTerraform(struct!.maxDeltaUnhealthyApplicationsPercent),
    max_delta_unhealthy_nodes_percent: cdktf.numberToTerraform(struct!.maxDeltaUnhealthyNodesPercent),
    max_upgrade_domain_delta_unhealthy_nodes_percent: cdktf.numberToTerraform(struct!.maxUpgradeDomainDeltaUnhealthyNodesPercent),
  }
}


export function serviceFabricClusterUpgradePolicyDeltaHealthPolicyToHclTerraform(struct?: ServiceFabricClusterUpgradePolicyDeltaHealthPolicyOutputReference | ServiceFabricClusterUpgradePolicyDeltaHealthPolicy): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    max_delta_unhealthy_applications_percent: {
      value: cdktf.numberToHclTerraform(struct!.maxDeltaUnhealthyApplicationsPercent),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    max_delta_unhealthy_nodes_percent: {
      value: cdktf.numberToHclTerraform(struct!.maxDeltaUnhealthyNodesPercent),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    max_upgrade_domain_delta_unhealthy_nodes_percent: {
      value: cdktf.numberToHclTerraform(struct!.maxUpgradeDomainDeltaUnhealthyNodesPercent),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ServiceFabricClusterUpgradePolicyDeltaHealthPolicyOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ServiceFabricClusterUpgradePolicyDeltaHealthPolicy | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._maxDeltaUnhealthyApplicationsPercent !== undefined) {
      hasAnyValues = true;
      internalValueResult.maxDeltaUnhealthyApplicationsPercent = this._maxDeltaUnhealthyApplicationsPercent;
    }
    if (this._maxDeltaUnhealthyNodesPercent !== undefined) {
      hasAnyValues = true;
      internalValueResult.maxDeltaUnhealthyNodesPercent = this._maxDeltaUnhealthyNodesPercent;
    }
    if (this._maxUpgradeDomainDeltaUnhealthyNodesPercent !== undefined) {
      hasAnyValues = true;
      internalValueResult.maxUpgradeDomainDeltaUnhealthyNodesPercent = this._maxUpgradeDomainDeltaUnhealthyNodesPercent;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ServiceFabricClusterUpgradePolicyDeltaHealthPolicy | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._maxDeltaUnhealthyApplicationsPercent = undefined;
      this._maxDeltaUnhealthyNodesPercent = undefined;
      this._maxUpgradeDomainDeltaUnhealthyNodesPercent = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._maxDeltaUnhealthyApplicationsPercent = value.maxDeltaUnhealthyApplicationsPercent;
      this._maxDeltaUnhealthyNodesPercent = value.maxDeltaUnhealthyNodesPercent;
      this._maxUpgradeDomainDeltaUnhealthyNodesPercent = value.maxUpgradeDomainDeltaUnhealthyNodesPercent;
    }
  }

  // max_delta_unhealthy_applications_percent - computed: false, optional: true, required: false
  private _maxDeltaUnhealthyApplicationsPercent?: number; 
  public get maxDeltaUnhealthyApplicationsPercent() {
    return this.getNumberAttribute('max_delta_unhealthy_applications_percent');
  }
  public set maxDeltaUnhealthyApplicationsPercent(value: number) {
    this._maxDeltaUnhealthyApplicationsPercent = value;
  }
  public resetMaxDeltaUnhealthyApplicationsPercent() {
    this._maxDeltaUnhealthyApplicationsPercent = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxDeltaUnhealthyApplicationsPercentInput() {
    return this._maxDeltaUnhealthyApplicationsPercent;
  }

  // max_delta_unhealthy_nodes_percent - computed: false, optional: true, required: false
  private _maxDeltaUnhealthyNodesPercent?: number; 
  public get maxDeltaUnhealthyNodesPercent() {
    return this.getNumberAttribute('max_delta_unhealthy_nodes_percent');
  }
  public set maxDeltaUnhealthyNodesPercent(value: number) {
    this._maxDeltaUnhealthyNodesPercent = value;
  }
  public resetMaxDeltaUnhealthyNodesPercent() {
    this._maxDeltaUnhealthyNodesPercent = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxDeltaUnhealthyNodesPercentInput() {
    return this._maxDeltaUnhealthyNodesPercent;
  }

  // max_upgrade_domain_delta_unhealthy_nodes_percent - computed: false, optional: true, required: false
  private _maxUpgradeDomainDeltaUnhealthyNodesPercent?: number; 
  public get maxUpgradeDomainDeltaUnhealthyNodesPercent() {
    return this.getNumberAttribute('max_upgrade_domain_delta_unhealthy_nodes_percent');
  }
  public set maxUpgradeDomainDeltaUnhealthyNodesPercent(value: number) {
    this._maxUpgradeDomainDeltaUnhealthyNodesPercent = value;
  }
  public resetMaxUpgradeDomainDeltaUnhealthyNodesPercent() {
    this._maxUpgradeDomainDeltaUnhealthyNodesPercent = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxUpgradeDomainDeltaUnhealthyNodesPercentInput() {
    return this._maxUpgradeDomainDeltaUnhealthyNodesPercent;
  }
}
export interface ServiceFabricClusterUpgradePolicyHealthPolicy {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/service_fabric_cluster#max_unhealthy_applications_percent ServiceFabricCluster#max_unhealthy_applications_percent}
  */
  readonly maxUnhealthyApplicationsPercent?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/service_fabric_cluster#max_unhealthy_nodes_percent ServiceFabricCluster#max_unhealthy_nodes_percent}
  */
  readonly maxUnhealthyNodesPercent?: number;
}

export function serviceFabricClusterUpgradePolicyHealthPolicyToTerraform(struct?: ServiceFabricClusterUpgradePolicyHealthPolicyOutputReference | ServiceFabricClusterUpgradePolicyHealthPolicy): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    max_unhealthy_applications_percent: cdktf.numberToTerraform(struct!.maxUnhealthyApplicationsPercent),
    max_unhealthy_nodes_percent: cdktf.numberToTerraform(struct!.maxUnhealthyNodesPercent),
  }
}


export function serviceFabricClusterUpgradePolicyHealthPolicyToHclTerraform(struct?: ServiceFabricClusterUpgradePolicyHealthPolicyOutputReference | ServiceFabricClusterUpgradePolicyHealthPolicy): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    max_unhealthy_applications_percent: {
      value: cdktf.numberToHclTerraform(struct!.maxUnhealthyApplicationsPercent),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    max_unhealthy_nodes_percent: {
      value: cdktf.numberToHclTerraform(struct!.maxUnhealthyNodesPercent),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ServiceFabricClusterUpgradePolicyHealthPolicyOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ServiceFabricClusterUpgradePolicyHealthPolicy | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._maxUnhealthyApplicationsPercent !== undefined) {
      hasAnyValues = true;
      internalValueResult.maxUnhealthyApplicationsPercent = this._maxUnhealthyApplicationsPercent;
    }
    if (this._maxUnhealthyNodesPercent !== undefined) {
      hasAnyValues = true;
      internalValueResult.maxUnhealthyNodesPercent = this._maxUnhealthyNodesPercent;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ServiceFabricClusterUpgradePolicyHealthPolicy | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._maxUnhealthyApplicationsPercent = undefined;
      this._maxUnhealthyNodesPercent = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._maxUnhealthyApplicationsPercent = value.maxUnhealthyApplicationsPercent;
      this._maxUnhealthyNodesPercent = value.maxUnhealthyNodesPercent;
    }
  }

  // max_unhealthy_applications_percent - computed: false, optional: true, required: false
  private _maxUnhealthyApplicationsPercent?: number; 
  public get maxUnhealthyApplicationsPercent() {
    return this.getNumberAttribute('max_unhealthy_applications_percent');
  }
  public set maxUnhealthyApplicationsPercent(value: number) {
    this._maxUnhealthyApplicationsPercent = value;
  }
  public resetMaxUnhealthyApplicationsPercent() {
    this._maxUnhealthyApplicationsPercent = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxUnhealthyApplicationsPercentInput() {
    return this._maxUnhealthyApplicationsPercent;
  }

  // max_unhealthy_nodes_percent - computed: false, optional: true, required: false
  private _maxUnhealthyNodesPercent?: number; 
  public get maxUnhealthyNodesPercent() {
    return this.getNumberAttribute('max_unhealthy_nodes_percent');
  }
  public set maxUnhealthyNodesPercent(value: number) {
    this._maxUnhealthyNodesPercent = value;
  }
  public resetMaxUnhealthyNodesPercent() {
    this._maxUnhealthyNodesPercent = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxUnhealthyNodesPercentInput() {
    return this._maxUnhealthyNodesPercent;
  }
}
export interface ServiceFabricClusterUpgradePolicy {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/service_fabric_cluster#force_restart_enabled ServiceFabricCluster#force_restart_enabled}
  */
  readonly forceRestartEnabled?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/service_fabric_cluster#health_check_retry_timeout ServiceFabricCluster#health_check_retry_timeout}
  */
  readonly healthCheckRetryTimeout?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/service_fabric_cluster#health_check_stable_duration ServiceFabricCluster#health_check_stable_duration}
  */
  readonly healthCheckStableDuration?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/service_fabric_cluster#health_check_wait_duration ServiceFabricCluster#health_check_wait_duration}
  */
  readonly healthCheckWaitDuration?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/service_fabric_cluster#upgrade_domain_timeout ServiceFabricCluster#upgrade_domain_timeout}
  */
  readonly upgradeDomainTimeout?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/service_fabric_cluster#upgrade_replica_set_check_timeout ServiceFabricCluster#upgrade_replica_set_check_timeout}
  */
  readonly upgradeReplicaSetCheckTimeout?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/service_fabric_cluster#upgrade_timeout ServiceFabricCluster#upgrade_timeout}
  */
  readonly upgradeTimeout?: string;
  /**
  * delta_health_policy block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/service_fabric_cluster#delta_health_policy ServiceFabricCluster#delta_health_policy}
  */
  readonly deltaHealthPolicy?: ServiceFabricClusterUpgradePolicyDeltaHealthPolicy;
  /**
  * health_policy block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/service_fabric_cluster#health_policy ServiceFabricCluster#health_policy}
  */
  readonly healthPolicy?: ServiceFabricClusterUpgradePolicyHealthPolicy;
}

export function serviceFabricClusterUpgradePolicyToTerraform(struct?: ServiceFabricClusterUpgradePolicyOutputReference | ServiceFabricClusterUpgradePolicy): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    force_restart_enabled: cdktf.booleanToTerraform(struct!.forceRestartEnabled),
    health_check_retry_timeout: cdktf.stringToTerraform(struct!.healthCheckRetryTimeout),
    health_check_stable_duration: cdktf.stringToTerraform(struct!.healthCheckStableDuration),
    health_check_wait_duration: cdktf.stringToTerraform(struct!.healthCheckWaitDuration),
    upgrade_domain_timeout: cdktf.stringToTerraform(struct!.upgradeDomainTimeout),
    upgrade_replica_set_check_timeout: cdktf.stringToTerraform(struct!.upgradeReplicaSetCheckTimeout),
    upgrade_timeout: cdktf.stringToTerraform(struct!.upgradeTimeout),
    delta_health_policy: serviceFabricClusterUpgradePolicyDeltaHealthPolicyToTerraform(struct!.deltaHealthPolicy),
    health_policy: serviceFabricClusterUpgradePolicyHealthPolicyToTerraform(struct!.healthPolicy),
  }
}


export function serviceFabricClusterUpgradePolicyToHclTerraform(struct?: ServiceFabricClusterUpgradePolicyOutputReference | ServiceFabricClusterUpgradePolicy): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    force_restart_enabled: {
      value: cdktf.booleanToHclTerraform(struct!.forceRestartEnabled),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    health_check_retry_timeout: {
      value: cdktf.stringToHclTerraform(struct!.healthCheckRetryTimeout),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    health_check_stable_duration: {
      value: cdktf.stringToHclTerraform(struct!.healthCheckStableDuration),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    health_check_wait_duration: {
      value: cdktf.stringToHclTerraform(struct!.healthCheckWaitDuration),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    upgrade_domain_timeout: {
      value: cdktf.stringToHclTerraform(struct!.upgradeDomainTimeout),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    upgrade_replica_set_check_timeout: {
      value: cdktf.stringToHclTerraform(struct!.upgradeReplicaSetCheckTimeout),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    upgrade_timeout: {
      value: cdktf.stringToHclTerraform(struct!.upgradeTimeout),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    delta_health_policy: {
      value: serviceFabricClusterUpgradePolicyDeltaHealthPolicyToHclTerraform(struct!.deltaHealthPolicy),
      isBlock: true,
      type: "list",
      storageClassType: "ServiceFabricClusterUpgradePolicyDeltaHealthPolicyList",
    },
    health_policy: {
      value: serviceFabricClusterUpgradePolicyHealthPolicyToHclTerraform(struct!.healthPolicy),
      isBlock: true,
      type: "list",
      storageClassType: "ServiceFabricClusterUpgradePolicyHealthPolicyList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ServiceFabricClusterUpgradePolicyOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ServiceFabricClusterUpgradePolicy | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._forceRestartEnabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.forceRestartEnabled = this._forceRestartEnabled;
    }
    if (this._healthCheckRetryTimeout !== undefined) {
      hasAnyValues = true;
      internalValueResult.healthCheckRetryTimeout = this._healthCheckRetryTimeout;
    }
    if (this._healthCheckStableDuration !== undefined) {
      hasAnyValues = true;
      internalValueResult.healthCheckStableDuration = this._healthCheckStableDuration;
    }
    if (this._healthCheckWaitDuration !== undefined) {
      hasAnyValues = true;
      internalValueResult.healthCheckWaitDuration = this._healthCheckWaitDuration;
    }
    if (this._upgradeDomainTimeout !== undefined) {
      hasAnyValues = true;
      internalValueResult.upgradeDomainTimeout = this._upgradeDomainTimeout;
    }
    if (this._upgradeReplicaSetCheckTimeout !== undefined) {
      hasAnyValues = true;
      internalValueResult.upgradeReplicaSetCheckTimeout = this._upgradeReplicaSetCheckTimeout;
    }
    if (this._upgradeTimeout !== undefined) {
      hasAnyValues = true;
      internalValueResult.upgradeTimeout = this._upgradeTimeout;
    }
    if (this._deltaHealthPolicy?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.deltaHealthPolicy = this._deltaHealthPolicy?.internalValue;
    }
    if (this._healthPolicy?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.healthPolicy = this._healthPolicy?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ServiceFabricClusterUpgradePolicy | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._forceRestartEnabled = undefined;
      this._healthCheckRetryTimeout = undefined;
      this._healthCheckStableDuration = undefined;
      this._healthCheckWaitDuration = undefined;
      this._upgradeDomainTimeout = undefined;
      this._upgradeReplicaSetCheckTimeout = undefined;
      this._upgradeTimeout = undefined;
      this._deltaHealthPolicy.internalValue = undefined;
      this._healthPolicy.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._forceRestartEnabled = value.forceRestartEnabled;
      this._healthCheckRetryTimeout = value.healthCheckRetryTimeout;
      this._healthCheckStableDuration = value.healthCheckStableDuration;
      this._healthCheckWaitDuration = value.healthCheckWaitDuration;
      this._upgradeDomainTimeout = value.upgradeDomainTimeout;
      this._upgradeReplicaSetCheckTimeout = value.upgradeReplicaSetCheckTimeout;
      this._upgradeTimeout = value.upgradeTimeout;
      this._deltaHealthPolicy.internalValue = value.deltaHealthPolicy;
      this._healthPolicy.internalValue = value.healthPolicy;
    }
  }

  // force_restart_enabled - computed: false, optional: true, required: false
  private _forceRestartEnabled?: boolean | cdktf.IResolvable; 
  public get forceRestartEnabled() {
    return this.getBooleanAttribute('force_restart_enabled');
  }
  public set forceRestartEnabled(value: boolean | cdktf.IResolvable) {
    this._forceRestartEnabled = value;
  }
  public resetForceRestartEnabled() {
    this._forceRestartEnabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get forceRestartEnabledInput() {
    return this._forceRestartEnabled;
  }

  // health_check_retry_timeout - computed: false, optional: true, required: false
  private _healthCheckRetryTimeout?: string; 
  public get healthCheckRetryTimeout() {
    return this.getStringAttribute('health_check_retry_timeout');
  }
  public set healthCheckRetryTimeout(value: string) {
    this._healthCheckRetryTimeout = value;
  }
  public resetHealthCheckRetryTimeout() {
    this._healthCheckRetryTimeout = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get healthCheckRetryTimeoutInput() {
    return this._healthCheckRetryTimeout;
  }

  // health_check_stable_duration - computed: false, optional: true, required: false
  private _healthCheckStableDuration?: string; 
  public get healthCheckStableDuration() {
    return this.getStringAttribute('health_check_stable_duration');
  }
  public set healthCheckStableDuration(value: string) {
    this._healthCheckStableDuration = value;
  }
  public resetHealthCheckStableDuration() {
    this._healthCheckStableDuration = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get healthCheckStableDurationInput() {
    return this._healthCheckStableDuration;
  }

  // health_check_wait_duration - computed: false, optional: true, required: false
  private _healthCheckWaitDuration?: string; 
  public get healthCheckWaitDuration() {
    return this.getStringAttribute('health_check_wait_duration');
  }
  public set healthCheckWaitDuration(value: string) {
    this._healthCheckWaitDuration = value;
  }
  public resetHealthCheckWaitDuration() {
    this._healthCheckWaitDuration = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get healthCheckWaitDurationInput() {
    return this._healthCheckWaitDuration;
  }

  // upgrade_domain_timeout - computed: false, optional: true, required: false
  private _upgradeDomainTimeout?: string; 
  public get upgradeDomainTimeout() {
    return this.getStringAttribute('upgrade_domain_timeout');
  }
  public set upgradeDomainTimeout(value: string) {
    this._upgradeDomainTimeout = value;
  }
  public resetUpgradeDomainTimeout() {
    this._upgradeDomainTimeout = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get upgradeDomainTimeoutInput() {
    return this._upgradeDomainTimeout;
  }

  // upgrade_replica_set_check_timeout - computed: false, optional: true, required: false
  private _upgradeReplicaSetCheckTimeout?: string; 
  public get upgradeReplicaSetCheckTimeout() {
    return this.getStringAttribute('upgrade_replica_set_check_timeout');
  }
  public set upgradeReplicaSetCheckTimeout(value: string) {
    this._upgradeReplicaSetCheckTimeout = value;
  }
  public resetUpgradeReplicaSetCheckTimeout() {
    this._upgradeReplicaSetCheckTimeout = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get upgradeReplicaSetCheckTimeoutInput() {
    return this._upgradeReplicaSetCheckTimeout;
  }

  // upgrade_timeout - computed: false, optional: true, required: false
  private _upgradeTimeout?: string; 
  public get upgradeTimeout() {
    return this.getStringAttribute('upgrade_timeout');
  }
  public set upgradeTimeout(value: string) {
    this._upgradeTimeout = value;
  }
  public resetUpgradeTimeout() {
    this._upgradeTimeout = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get upgradeTimeoutInput() {
    return this._upgradeTimeout;
  }

  // delta_health_policy - computed: false, optional: true, required: false
  private _deltaHealthPolicy = new ServiceFabricClusterUpgradePolicyDeltaHealthPolicyOutputReference(this, "delta_health_policy");
  public get deltaHealthPolicy() {
    return this._deltaHealthPolicy;
  }
  public putDeltaHealthPolicy(value: ServiceFabricClusterUpgradePolicyDeltaHealthPolicy) {
    this._deltaHealthPolicy.internalValue = value;
  }
  public resetDeltaHealthPolicy() {
    this._deltaHealthPolicy.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get deltaHealthPolicyInput() {
    return this._deltaHealthPolicy.internalValue;
  }

  // health_policy - computed: false, optional: true, required: false
  private _healthPolicy = new ServiceFabricClusterUpgradePolicyHealthPolicyOutputReference(this, "health_policy");
  public get healthPolicy() {
    return this._healthPolicy;
  }
  public putHealthPolicy(value: ServiceFabricClusterUpgradePolicyHealthPolicy) {
    this._healthPolicy.internalValue = value;
  }
  public resetHealthPolicy() {
    this._healthPolicy.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get healthPolicyInput() {
    return this._healthPolicy.internalValue;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/service_fabric_cluster azurerm_service_fabric_cluster}
*/
export class ServiceFabricCluster extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "azurerm_service_fabric_cluster";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a ServiceFabricCluster resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the ServiceFabricCluster to import
  * @param importFromId The id of the existing ServiceFabricCluster that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/service_fabric_cluster#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the ServiceFabricCluster to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "azurerm_service_fabric_cluster", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/service_fabric_cluster azurerm_service_fabric_cluster} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options ServiceFabricClusterConfig
  */
  public constructor(scope: Construct, id: string, config: ServiceFabricClusterConfig) {
    super(scope, id, {
      terraformResourceType: 'azurerm_service_fabric_cluster',
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
    this._addOnFeatures = config.addOnFeatures;
    this._clusterCodeVersion = config.clusterCodeVersion;
    this._id = config.id;
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
    this._azureActiveDirectory.internalValue = config.azureActiveDirectory;
    this._certificate.internalValue = config.certificate;
    this._certificateCommonNames.internalValue = config.certificateCommonNames;
    this._clientCertificateCommonName.internalValue = config.clientCertificateCommonName;
    this._clientCertificateThumbprint.internalValue = config.clientCertificateThumbprint;
    this._diagnosticsConfig.internalValue = config.diagnosticsConfig;
    this._fabricSettings.internalValue = config.fabricSettings;
    this._nodeType.internalValue = config.nodeType;
    this._reverseProxyCertificate.internalValue = config.reverseProxyCertificate;
    this._reverseProxyCertificateCommonNames.internalValue = config.reverseProxyCertificateCommonNames;
    this._timeouts.internalValue = config.timeouts;
    this._upgradePolicy.internalValue = config.upgradePolicy;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // add_on_features - computed: false, optional: true, required: false
  private _addOnFeatures?: string[]; 
  public get addOnFeatures() {
    return cdktf.Fn.tolist(this.getListAttribute('add_on_features'));
  }
  public set addOnFeatures(value: string[]) {
    this._addOnFeatures = value;
  }
  public resetAddOnFeatures() {
    this._addOnFeatures = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get addOnFeaturesInput() {
    return this._addOnFeatures;
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
    return this._clusterCodeVersion;
  }

  // cluster_endpoint - computed: true, optional: false, required: false
  public get clusterEndpoint() {
    return this.getStringAttribute('cluster_endpoint');
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

  // management_endpoint - computed: false, optional: false, required: true
  private _managementEndpoint?: string; 
  public get managementEndpoint() {
    return this.getStringAttribute('management_endpoint');
  }
  public set managementEndpoint(value: string) {
    this._managementEndpoint = value;
  }
  // Temporarily expose input value. Use with caution.
  public get managementEndpointInput() {
    return this._managementEndpoint;
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

  // reliability_level - computed: false, optional: false, required: true
  private _reliabilityLevel?: string; 
  public get reliabilityLevel() {
    return this.getStringAttribute('reliability_level');
  }
  public set reliabilityLevel(value: string) {
    this._reliabilityLevel = value;
  }
  // Temporarily expose input value. Use with caution.
  public get reliabilityLevelInput() {
    return this._reliabilityLevel;
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

  // service_fabric_zonal_upgrade_mode - computed: false, optional: true, required: false
  private _serviceFabricZonalUpgradeMode?: string; 
  public get serviceFabricZonalUpgradeMode() {
    return this.getStringAttribute('service_fabric_zonal_upgrade_mode');
  }
  public set serviceFabricZonalUpgradeMode(value: string) {
    this._serviceFabricZonalUpgradeMode = value;
  }
  public resetServiceFabricZonalUpgradeMode() {
    this._serviceFabricZonalUpgradeMode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get serviceFabricZonalUpgradeModeInput() {
    return this._serviceFabricZonalUpgradeMode;
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

  // upgrade_mode - computed: false, optional: false, required: true
  private _upgradeMode?: string; 
  public get upgradeMode() {
    return this.getStringAttribute('upgrade_mode');
  }
  public set upgradeMode(value: string) {
    this._upgradeMode = value;
  }
  // Temporarily expose input value. Use with caution.
  public get upgradeModeInput() {
    return this._upgradeMode;
  }

  // vm_image - computed: false, optional: false, required: true
  private _vmImage?: string; 
  public get vmImage() {
    return this.getStringAttribute('vm_image');
  }
  public set vmImage(value: string) {
    this._vmImage = value;
  }
  // Temporarily expose input value. Use with caution.
  public get vmImageInput() {
    return this._vmImage;
  }

  // vmss_zonal_upgrade_mode - computed: false, optional: true, required: false
  private _vmssZonalUpgradeMode?: string; 
  public get vmssZonalUpgradeMode() {
    return this.getStringAttribute('vmss_zonal_upgrade_mode');
  }
  public set vmssZonalUpgradeMode(value: string) {
    this._vmssZonalUpgradeMode = value;
  }
  public resetVmssZonalUpgradeMode() {
    this._vmssZonalUpgradeMode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get vmssZonalUpgradeModeInput() {
    return this._vmssZonalUpgradeMode;
  }

  // azure_active_directory - computed: false, optional: true, required: false
  private _azureActiveDirectory = new ServiceFabricClusterAzureActiveDirectoryOutputReference(this, "azure_active_directory");
  public get azureActiveDirectory() {
    return this._azureActiveDirectory;
  }
  public putAzureActiveDirectory(value: ServiceFabricClusterAzureActiveDirectory) {
    this._azureActiveDirectory.internalValue = value;
  }
  public resetAzureActiveDirectory() {
    this._azureActiveDirectory.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get azureActiveDirectoryInput() {
    return this._azureActiveDirectory.internalValue;
  }

  // certificate - computed: false, optional: true, required: false
  private _certificate = new ServiceFabricClusterCertificateOutputReference(this, "certificate");
  public get certificate() {
    return this._certificate;
  }
  public putCertificate(value: ServiceFabricClusterCertificate) {
    this._certificate.internalValue = value;
  }
  public resetCertificate() {
    this._certificate.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get certificateInput() {
    return this._certificate.internalValue;
  }

  // certificate_common_names - computed: false, optional: true, required: false
  private _certificateCommonNames = new ServiceFabricClusterCertificateCommonNamesOutputReference(this, "certificate_common_names");
  public get certificateCommonNames() {
    return this._certificateCommonNames;
  }
  public putCertificateCommonNames(value: ServiceFabricClusterCertificateCommonNames) {
    this._certificateCommonNames.internalValue = value;
  }
  public resetCertificateCommonNames() {
    this._certificateCommonNames.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get certificateCommonNamesInput() {
    return this._certificateCommonNames.internalValue;
  }

  // client_certificate_common_name - computed: false, optional: true, required: false
  private _clientCertificateCommonName = new ServiceFabricClusterClientCertificateCommonNameList(this, "client_certificate_common_name", false);
  public get clientCertificateCommonName() {
    return this._clientCertificateCommonName;
  }
  public putClientCertificateCommonName(value: ServiceFabricClusterClientCertificateCommonName[] | cdktf.IResolvable) {
    this._clientCertificateCommonName.internalValue = value;
  }
  public resetClientCertificateCommonName() {
    this._clientCertificateCommonName.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get clientCertificateCommonNameInput() {
    return this._clientCertificateCommonName.internalValue;
  }

  // client_certificate_thumbprint - computed: false, optional: true, required: false
  private _clientCertificateThumbprint = new ServiceFabricClusterClientCertificateThumbprintList(this, "client_certificate_thumbprint", false);
  public get clientCertificateThumbprint() {
    return this._clientCertificateThumbprint;
  }
  public putClientCertificateThumbprint(value: ServiceFabricClusterClientCertificateThumbprint[] | cdktf.IResolvable) {
    this._clientCertificateThumbprint.internalValue = value;
  }
  public resetClientCertificateThumbprint() {
    this._clientCertificateThumbprint.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get clientCertificateThumbprintInput() {
    return this._clientCertificateThumbprint.internalValue;
  }

  // diagnostics_config - computed: false, optional: true, required: false
  private _diagnosticsConfig = new ServiceFabricClusterDiagnosticsConfigOutputReference(this, "diagnostics_config");
  public get diagnosticsConfig() {
    return this._diagnosticsConfig;
  }
  public putDiagnosticsConfig(value: ServiceFabricClusterDiagnosticsConfig) {
    this._diagnosticsConfig.internalValue = value;
  }
  public resetDiagnosticsConfig() {
    this._diagnosticsConfig.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get diagnosticsConfigInput() {
    return this._diagnosticsConfig.internalValue;
  }

  // fabric_settings - computed: false, optional: true, required: false
  private _fabricSettings = new ServiceFabricClusterFabricSettingsList(this, "fabric_settings", false);
  public get fabricSettings() {
    return this._fabricSettings;
  }
  public putFabricSettings(value: ServiceFabricClusterFabricSettings[] | cdktf.IResolvable) {
    this._fabricSettings.internalValue = value;
  }
  public resetFabricSettings() {
    this._fabricSettings.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fabricSettingsInput() {
    return this._fabricSettings.internalValue;
  }

  // node_type - computed: false, optional: false, required: true
  private _nodeType = new ServiceFabricClusterNodeTypeList(this, "node_type", false);
  public get nodeType() {
    return this._nodeType;
  }
  public putNodeType(value: ServiceFabricClusterNodeType[] | cdktf.IResolvable) {
    this._nodeType.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get nodeTypeInput() {
    return this._nodeType.internalValue;
  }

  // reverse_proxy_certificate - computed: false, optional: true, required: false
  private _reverseProxyCertificate = new ServiceFabricClusterReverseProxyCertificateOutputReference(this, "reverse_proxy_certificate");
  public get reverseProxyCertificate() {
    return this._reverseProxyCertificate;
  }
  public putReverseProxyCertificate(value: ServiceFabricClusterReverseProxyCertificate) {
    this._reverseProxyCertificate.internalValue = value;
  }
  public resetReverseProxyCertificate() {
    this._reverseProxyCertificate.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get reverseProxyCertificateInput() {
    return this._reverseProxyCertificate.internalValue;
  }

  // reverse_proxy_certificate_common_names - computed: false, optional: true, required: false
  private _reverseProxyCertificateCommonNames = new ServiceFabricClusterReverseProxyCertificateCommonNamesOutputReference(this, "reverse_proxy_certificate_common_names");
  public get reverseProxyCertificateCommonNames() {
    return this._reverseProxyCertificateCommonNames;
  }
  public putReverseProxyCertificateCommonNames(value: ServiceFabricClusterReverseProxyCertificateCommonNames) {
    this._reverseProxyCertificateCommonNames.internalValue = value;
  }
  public resetReverseProxyCertificateCommonNames() {
    this._reverseProxyCertificateCommonNames.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get reverseProxyCertificateCommonNamesInput() {
    return this._reverseProxyCertificateCommonNames.internalValue;
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts = new ServiceFabricClusterTimeoutsOutputReference(this, "timeouts");
  public get timeouts() {
    return this._timeouts;
  }
  public putTimeouts(value: ServiceFabricClusterTimeouts) {
    this._timeouts.internalValue = value;
  }
  public resetTimeouts() {
    this._timeouts.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get timeoutsInput() {
    return this._timeouts.internalValue;
  }

  // upgrade_policy - computed: false, optional: true, required: false
  private _upgradePolicy = new ServiceFabricClusterUpgradePolicyOutputReference(this, "upgrade_policy");
  public get upgradePolicy() {
    return this._upgradePolicy;
  }
  public putUpgradePolicy(value: ServiceFabricClusterUpgradePolicy) {
    this._upgradePolicy.internalValue = value;
  }
  public resetUpgradePolicy() {
    this._upgradePolicy.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get upgradePolicyInput() {
    return this._upgradePolicy.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      add_on_features: cdktf.listMapper(cdktf.stringToTerraform, false)(this._addOnFeatures),
      cluster_code_version: cdktf.stringToTerraform(this._clusterCodeVersion),
      id: cdktf.stringToTerraform(this._id),
      location: cdktf.stringToTerraform(this._location),
      management_endpoint: cdktf.stringToTerraform(this._managementEndpoint),
      name: cdktf.stringToTerraform(this._name),
      reliability_level: cdktf.stringToTerraform(this._reliabilityLevel),
      resource_group_name: cdktf.stringToTerraform(this._resourceGroupName),
      service_fabric_zonal_upgrade_mode: cdktf.stringToTerraform(this._serviceFabricZonalUpgradeMode),
      tags: cdktf.hashMapper(cdktf.stringToTerraform)(this._tags),
      upgrade_mode: cdktf.stringToTerraform(this._upgradeMode),
      vm_image: cdktf.stringToTerraform(this._vmImage),
      vmss_zonal_upgrade_mode: cdktf.stringToTerraform(this._vmssZonalUpgradeMode),
      azure_active_directory: serviceFabricClusterAzureActiveDirectoryToTerraform(this._azureActiveDirectory.internalValue),
      certificate: serviceFabricClusterCertificateToTerraform(this._certificate.internalValue),
      certificate_common_names: serviceFabricClusterCertificateCommonNamesToTerraform(this._certificateCommonNames.internalValue),
      client_certificate_common_name: cdktf.listMapper(serviceFabricClusterClientCertificateCommonNameToTerraform, true)(this._clientCertificateCommonName.internalValue),
      client_certificate_thumbprint: cdktf.listMapper(serviceFabricClusterClientCertificateThumbprintToTerraform, true)(this._clientCertificateThumbprint.internalValue),
      diagnostics_config: serviceFabricClusterDiagnosticsConfigToTerraform(this._diagnosticsConfig.internalValue),
      fabric_settings: cdktf.listMapper(serviceFabricClusterFabricSettingsToTerraform, true)(this._fabricSettings.internalValue),
      node_type: cdktf.listMapper(serviceFabricClusterNodeTypeToTerraform, true)(this._nodeType.internalValue),
      reverse_proxy_certificate: serviceFabricClusterReverseProxyCertificateToTerraform(this._reverseProxyCertificate.internalValue),
      reverse_proxy_certificate_common_names: serviceFabricClusterReverseProxyCertificateCommonNamesToTerraform(this._reverseProxyCertificateCommonNames.internalValue),
      timeouts: serviceFabricClusterTimeoutsToTerraform(this._timeouts.internalValue),
      upgrade_policy: serviceFabricClusterUpgradePolicyToTerraform(this._upgradePolicy.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      add_on_features: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._addOnFeatures),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      cluster_code_version: {
        value: cdktf.stringToHclTerraform(this._clusterCodeVersion),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
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
      management_endpoint: {
        value: cdktf.stringToHclTerraform(this._managementEndpoint),
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
      reliability_level: {
        value: cdktf.stringToHclTerraform(this._reliabilityLevel),
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
      service_fabric_zonal_upgrade_mode: {
        value: cdktf.stringToHclTerraform(this._serviceFabricZonalUpgradeMode),
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
      upgrade_mode: {
        value: cdktf.stringToHclTerraform(this._upgradeMode),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      vm_image: {
        value: cdktf.stringToHclTerraform(this._vmImage),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      vmss_zonal_upgrade_mode: {
        value: cdktf.stringToHclTerraform(this._vmssZonalUpgradeMode),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      azure_active_directory: {
        value: serviceFabricClusterAzureActiveDirectoryToHclTerraform(this._azureActiveDirectory.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "ServiceFabricClusterAzureActiveDirectoryList",
      },
      certificate: {
        value: serviceFabricClusterCertificateToHclTerraform(this._certificate.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "ServiceFabricClusterCertificateList",
      },
      certificate_common_names: {
        value: serviceFabricClusterCertificateCommonNamesToHclTerraform(this._certificateCommonNames.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "ServiceFabricClusterCertificateCommonNamesList",
      },
      client_certificate_common_name: {
        value: cdktf.listMapperHcl(serviceFabricClusterClientCertificateCommonNameToHclTerraform, true)(this._clientCertificateCommonName.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "ServiceFabricClusterClientCertificateCommonNameList",
      },
      client_certificate_thumbprint: {
        value: cdktf.listMapperHcl(serviceFabricClusterClientCertificateThumbprintToHclTerraform, true)(this._clientCertificateThumbprint.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "ServiceFabricClusterClientCertificateThumbprintList",
      },
      diagnostics_config: {
        value: serviceFabricClusterDiagnosticsConfigToHclTerraform(this._diagnosticsConfig.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "ServiceFabricClusterDiagnosticsConfigList",
      },
      fabric_settings: {
        value: cdktf.listMapperHcl(serviceFabricClusterFabricSettingsToHclTerraform, true)(this._fabricSettings.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "ServiceFabricClusterFabricSettingsList",
      },
      node_type: {
        value: cdktf.listMapperHcl(serviceFabricClusterNodeTypeToHclTerraform, true)(this._nodeType.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "ServiceFabricClusterNodeTypeList",
      },
      reverse_proxy_certificate: {
        value: serviceFabricClusterReverseProxyCertificateToHclTerraform(this._reverseProxyCertificate.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "ServiceFabricClusterReverseProxyCertificateList",
      },
      reverse_proxy_certificate_common_names: {
        value: serviceFabricClusterReverseProxyCertificateCommonNamesToHclTerraform(this._reverseProxyCertificateCommonNames.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "ServiceFabricClusterReverseProxyCertificateCommonNamesList",
      },
      timeouts: {
        value: serviceFabricClusterTimeoutsToHclTerraform(this._timeouts.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "ServiceFabricClusterTimeouts",
      },
      upgrade_policy: {
        value: serviceFabricClusterUpgradePolicyToHclTerraform(this._upgradePolicy.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "ServiceFabricClusterUpgradePolicyList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
