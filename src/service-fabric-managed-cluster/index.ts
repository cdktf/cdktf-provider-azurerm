// https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/service_fabric_managed_cluster
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface ServiceFabricManagedClusterConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/service_fabric_managed_cluster#backup_service_enabled ServiceFabricManagedCluster#backup_service_enabled}
  */
  readonly backupServiceEnabled?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/service_fabric_managed_cluster#client_connection_port ServiceFabricManagedCluster#client_connection_port}
  */
  readonly clientConnectionPort: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/service_fabric_managed_cluster#dns_name ServiceFabricManagedCluster#dns_name}
  */
  readonly dnsName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/service_fabric_managed_cluster#dns_service_enabled ServiceFabricManagedCluster#dns_service_enabled}
  */
  readonly dnsServiceEnabled?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/service_fabric_managed_cluster#http_gateway_port ServiceFabricManagedCluster#http_gateway_port}
  */
  readonly httpGatewayPort: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/service_fabric_managed_cluster#id ServiceFabricManagedCluster#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/service_fabric_managed_cluster#location ServiceFabricManagedCluster#location}
  */
  readonly location: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/service_fabric_managed_cluster#name ServiceFabricManagedCluster#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/service_fabric_managed_cluster#password ServiceFabricManagedCluster#password}
  */
  readonly password?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/service_fabric_managed_cluster#resource_group_name ServiceFabricManagedCluster#resource_group_name}
  */
  readonly resourceGroupName: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/service_fabric_managed_cluster#sku ServiceFabricManagedCluster#sku}
  */
  readonly sku?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/service_fabric_managed_cluster#tags ServiceFabricManagedCluster#tags}
  */
  readonly tags?: { [key: string]: string };
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/service_fabric_managed_cluster#upgrade_wave ServiceFabricManagedCluster#upgrade_wave}
  */
  readonly upgradeWave?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/service_fabric_managed_cluster#username ServiceFabricManagedCluster#username}
  */
  readonly username?: string;
  /**
  * authentication block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/service_fabric_managed_cluster#authentication ServiceFabricManagedCluster#authentication}
  */
  readonly authentication?: ServiceFabricManagedClusterAuthentication;
  /**
  * custom_fabric_setting block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/service_fabric_managed_cluster#custom_fabric_setting ServiceFabricManagedCluster#custom_fabric_setting}
  */
  readonly customFabricSetting?: ServiceFabricManagedClusterCustomFabricSetting[] | cdktf.IResolvable;
  /**
  * lb_rule block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/service_fabric_managed_cluster#lb_rule ServiceFabricManagedCluster#lb_rule}
  */
  readonly lbRule: ServiceFabricManagedClusterLbRule[] | cdktf.IResolvable;
  /**
  * node_type block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/service_fabric_managed_cluster#node_type ServiceFabricManagedCluster#node_type}
  */
  readonly nodeType?: ServiceFabricManagedClusterNodeType[] | cdktf.IResolvable;
  /**
  * timeouts block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/service_fabric_managed_cluster#timeouts ServiceFabricManagedCluster#timeouts}
  */
  readonly timeouts?: ServiceFabricManagedClusterTimeouts;
}
export interface ServiceFabricManagedClusterAuthenticationActiveDirectory {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/service_fabric_managed_cluster#client_application_id ServiceFabricManagedCluster#client_application_id}
  */
  readonly clientApplicationId: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/service_fabric_managed_cluster#cluster_application_id ServiceFabricManagedCluster#cluster_application_id}
  */
  readonly clusterApplicationId: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/service_fabric_managed_cluster#tenant_id ServiceFabricManagedCluster#tenant_id}
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


export function serviceFabricManagedClusterAuthenticationActiveDirectoryToHclTerraform(struct?: ServiceFabricManagedClusterAuthenticationActiveDirectoryOutputReference | ServiceFabricManagedClusterAuthenticationActiveDirectory): any {
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

export class ServiceFabricManagedClusterAuthenticationActiveDirectoryOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
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
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/service_fabric_managed_cluster#common_name ServiceFabricManagedCluster#common_name}
  */
  readonly commonName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/service_fabric_managed_cluster#thumbprint ServiceFabricManagedCluster#thumbprint}
  */
  readonly thumbprint: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/service_fabric_managed_cluster#type ServiceFabricManagedCluster#type}
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


export function serviceFabricManagedClusterAuthenticationCertificateToHclTerraform(struct?: ServiceFabricManagedClusterAuthenticationCertificate | cdktf.IResolvable): any {
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
    thumbprint: {
      value: cdktf.stringToHclTerraform(struct!.thumbprint),
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

export class ServiceFabricManagedClusterAuthenticationCertificateOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ServiceFabricManagedClusterAuthenticationCertificate | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._commonName !== undefined) {
      hasAnyValues = true;
      internalValueResult.commonName = this._commonName;
    }
    if (this._thumbprint !== undefined) {
      hasAnyValues = true;
      internalValueResult.thumbprint = this._thumbprint;
    }
    if (this._type !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ServiceFabricManagedClusterAuthenticationCertificate | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._commonName = undefined;
      this._thumbprint = undefined;
      this._type = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._commonName = value.commonName;
      this._thumbprint = value.thumbprint;
      this._type = value.type;
    }
  }

  // common_name - computed: false, optional: true, required: false
  private _commonName?: string; 
  public get commonName() {
    return this.getStringAttribute('common_name');
  }
  public set commonName(value: string) {
    this._commonName = value;
  }
  public resetCommonName() {
    this._commonName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get commonNameInput() {
    return this._commonName;
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

export class ServiceFabricManagedClusterAuthenticationCertificateList extends cdktf.ComplexList {
  public internalValue? : ServiceFabricManagedClusterAuthenticationCertificate[] | cdktf.IResolvable

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
  public get(index: number): ServiceFabricManagedClusterAuthenticationCertificateOutputReference {
    return new ServiceFabricManagedClusterAuthenticationCertificateOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ServiceFabricManagedClusterAuthentication {
  /**
  * active_directory block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/service_fabric_managed_cluster#active_directory ServiceFabricManagedCluster#active_directory}
  */
  readonly activeDirectory?: ServiceFabricManagedClusterAuthenticationActiveDirectory;
  /**
  * certificate block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/service_fabric_managed_cluster#certificate ServiceFabricManagedCluster#certificate}
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
    certificate: cdktf.listMapper(serviceFabricManagedClusterAuthenticationCertificateToTerraform, true)(struct!.certificate),
  }
}


export function serviceFabricManagedClusterAuthenticationToHclTerraform(struct?: ServiceFabricManagedClusterAuthenticationOutputReference | ServiceFabricManagedClusterAuthentication): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    active_directory: {
      value: serviceFabricManagedClusterAuthenticationActiveDirectoryToHclTerraform(struct!.activeDirectory),
      isBlock: true,
      type: "list",
      storageClassType: "ServiceFabricManagedClusterAuthenticationActiveDirectoryList",
    },
    certificate: {
      value: cdktf.listMapperHcl(serviceFabricManagedClusterAuthenticationCertificateToHclTerraform, true)(struct!.certificate),
      isBlock: true,
      type: "list",
      storageClassType: "ServiceFabricManagedClusterAuthenticationCertificateList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ServiceFabricManagedClusterAuthenticationOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ServiceFabricManagedClusterAuthentication | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._activeDirectory?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.activeDirectory = this._activeDirectory?.internalValue;
    }
    if (this._certificate?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.certificate = this._certificate?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ServiceFabricManagedClusterAuthentication | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._activeDirectory.internalValue = undefined;
      this._certificate.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._activeDirectory.internalValue = value.activeDirectory;
      this._certificate.internalValue = value.certificate;
    }
  }

  // active_directory - computed: false, optional: true, required: false
  private _activeDirectory = new ServiceFabricManagedClusterAuthenticationActiveDirectoryOutputReference(this, "active_directory");
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
  private _certificate = new ServiceFabricManagedClusterAuthenticationCertificateList(this, "certificate", false);
  public get certificate() {
    return this._certificate;
  }
  public putCertificate(value: ServiceFabricManagedClusterAuthenticationCertificate[] | cdktf.IResolvable) {
    this._certificate.internalValue = value;
  }
  public resetCertificate() {
    this._certificate.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get certificateInput() {
    return this._certificate.internalValue;
  }
}
export interface ServiceFabricManagedClusterCustomFabricSetting {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/service_fabric_managed_cluster#parameter ServiceFabricManagedCluster#parameter}
  */
  readonly parameter: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/service_fabric_managed_cluster#section ServiceFabricManagedCluster#section}
  */
  readonly section: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/service_fabric_managed_cluster#value ServiceFabricManagedCluster#value}
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


export function serviceFabricManagedClusterCustomFabricSettingToHclTerraform(struct?: ServiceFabricManagedClusterCustomFabricSetting | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    parameter: {
      value: cdktf.stringToHclTerraform(struct!.parameter),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    section: {
      value: cdktf.stringToHclTerraform(struct!.section),
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

export class ServiceFabricManagedClusterCustomFabricSettingOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ServiceFabricManagedClusterCustomFabricSetting | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._parameter !== undefined) {
      hasAnyValues = true;
      internalValueResult.parameter = this._parameter;
    }
    if (this._section !== undefined) {
      hasAnyValues = true;
      internalValueResult.section = this._section;
    }
    if (this._value !== undefined) {
      hasAnyValues = true;
      internalValueResult.value = this._value;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ServiceFabricManagedClusterCustomFabricSetting | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._parameter = undefined;
      this._section = undefined;
      this._value = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._parameter = value.parameter;
      this._section = value.section;
      this._value = value.value;
    }
  }

  // parameter - computed: false, optional: false, required: true
  private _parameter?: string; 
  public get parameter() {
    return this.getStringAttribute('parameter');
  }
  public set parameter(value: string) {
    this._parameter = value;
  }
  // Temporarily expose input value. Use with caution.
  public get parameterInput() {
    return this._parameter;
  }

  // section - computed: false, optional: false, required: true
  private _section?: string; 
  public get section() {
    return this.getStringAttribute('section');
  }
  public set section(value: string) {
    this._section = value;
  }
  // Temporarily expose input value. Use with caution.
  public get sectionInput() {
    return this._section;
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

export class ServiceFabricManagedClusterCustomFabricSettingList extends cdktf.ComplexList {
  public internalValue? : ServiceFabricManagedClusterCustomFabricSetting[] | cdktf.IResolvable

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
  public get(index: number): ServiceFabricManagedClusterCustomFabricSettingOutputReference {
    return new ServiceFabricManagedClusterCustomFabricSettingOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ServiceFabricManagedClusterLbRule {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/service_fabric_managed_cluster#backend_port ServiceFabricManagedCluster#backend_port}
  */
  readonly backendPort: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/service_fabric_managed_cluster#frontend_port ServiceFabricManagedCluster#frontend_port}
  */
  readonly frontendPort: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/service_fabric_managed_cluster#probe_protocol ServiceFabricManagedCluster#probe_protocol}
  */
  readonly probeProtocol: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/service_fabric_managed_cluster#probe_request_path ServiceFabricManagedCluster#probe_request_path}
  */
  readonly probeRequestPath?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/service_fabric_managed_cluster#protocol ServiceFabricManagedCluster#protocol}
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


export function serviceFabricManagedClusterLbRuleToHclTerraform(struct?: ServiceFabricManagedClusterLbRule | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    backend_port: {
      value: cdktf.numberToHclTerraform(struct!.backendPort),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    frontend_port: {
      value: cdktf.numberToHclTerraform(struct!.frontendPort),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    probe_protocol: {
      value: cdktf.stringToHclTerraform(struct!.probeProtocol),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    probe_request_path: {
      value: cdktf.stringToHclTerraform(struct!.probeRequestPath),
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
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ServiceFabricManagedClusterLbRuleOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ServiceFabricManagedClusterLbRule | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._backendPort !== undefined) {
      hasAnyValues = true;
      internalValueResult.backendPort = this._backendPort;
    }
    if (this._frontendPort !== undefined) {
      hasAnyValues = true;
      internalValueResult.frontendPort = this._frontendPort;
    }
    if (this._probeProtocol !== undefined) {
      hasAnyValues = true;
      internalValueResult.probeProtocol = this._probeProtocol;
    }
    if (this._probeRequestPath !== undefined) {
      hasAnyValues = true;
      internalValueResult.probeRequestPath = this._probeRequestPath;
    }
    if (this._protocol !== undefined) {
      hasAnyValues = true;
      internalValueResult.protocol = this._protocol;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ServiceFabricManagedClusterLbRule | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._backendPort = undefined;
      this._frontendPort = undefined;
      this._probeProtocol = undefined;
      this._probeRequestPath = undefined;
      this._protocol = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._backendPort = value.backendPort;
      this._frontendPort = value.frontendPort;
      this._probeProtocol = value.probeProtocol;
      this._probeRequestPath = value.probeRequestPath;
      this._protocol = value.protocol;
    }
  }

  // backend_port - computed: false, optional: false, required: true
  private _backendPort?: number; 
  public get backendPort() {
    return this.getNumberAttribute('backend_port');
  }
  public set backendPort(value: number) {
    this._backendPort = value;
  }
  // Temporarily expose input value. Use with caution.
  public get backendPortInput() {
    return this._backendPort;
  }

  // frontend_port - computed: false, optional: false, required: true
  private _frontendPort?: number; 
  public get frontendPort() {
    return this.getNumberAttribute('frontend_port');
  }
  public set frontendPort(value: number) {
    this._frontendPort = value;
  }
  // Temporarily expose input value. Use with caution.
  public get frontendPortInput() {
    return this._frontendPort;
  }

  // probe_protocol - computed: false, optional: false, required: true
  private _probeProtocol?: string; 
  public get probeProtocol() {
    return this.getStringAttribute('probe_protocol');
  }
  public set probeProtocol(value: string) {
    this._probeProtocol = value;
  }
  // Temporarily expose input value. Use with caution.
  public get probeProtocolInput() {
    return this._probeProtocol;
  }

  // probe_request_path - computed: false, optional: true, required: false
  private _probeRequestPath?: string; 
  public get probeRequestPath() {
    return this.getStringAttribute('probe_request_path');
  }
  public set probeRequestPath(value: string) {
    this._probeRequestPath = value;
  }
  public resetProbeRequestPath() {
    this._probeRequestPath = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get probeRequestPathInput() {
    return this._probeRequestPath;
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
}

export class ServiceFabricManagedClusterLbRuleList extends cdktf.ComplexList {
  public internalValue? : ServiceFabricManagedClusterLbRule[] | cdktf.IResolvable

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
  public get(index: number): ServiceFabricManagedClusterLbRuleOutputReference {
    return new ServiceFabricManagedClusterLbRuleOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ServiceFabricManagedClusterNodeTypeVmSecretsCertificates {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/service_fabric_managed_cluster#store ServiceFabricManagedCluster#store}
  */
  readonly store: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/service_fabric_managed_cluster#url ServiceFabricManagedCluster#url}
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


export function serviceFabricManagedClusterNodeTypeVmSecretsCertificatesToHclTerraform(struct?: ServiceFabricManagedClusterNodeTypeVmSecretsCertificates | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    store: {
      value: cdktf.stringToHclTerraform(struct!.store),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    url: {
      value: cdktf.stringToHclTerraform(struct!.url),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ServiceFabricManagedClusterNodeTypeVmSecretsCertificatesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ServiceFabricManagedClusterNodeTypeVmSecretsCertificates | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._store !== undefined) {
      hasAnyValues = true;
      internalValueResult.store = this._store;
    }
    if (this._url !== undefined) {
      hasAnyValues = true;
      internalValueResult.url = this._url;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ServiceFabricManagedClusterNodeTypeVmSecretsCertificates | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._store = undefined;
      this._url = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._store = value.store;
      this._url = value.url;
    }
  }

  // store - computed: false, optional: false, required: true
  private _store?: string; 
  public get store() {
    return this.getStringAttribute('store');
  }
  public set store(value: string) {
    this._store = value;
  }
  // Temporarily expose input value. Use with caution.
  public get storeInput() {
    return this._store;
  }

  // url - computed: false, optional: false, required: true
  private _url?: string; 
  public get url() {
    return this.getStringAttribute('url');
  }
  public set url(value: string) {
    this._url = value;
  }
  // Temporarily expose input value. Use with caution.
  public get urlInput() {
    return this._url;
  }
}

export class ServiceFabricManagedClusterNodeTypeVmSecretsCertificatesList extends cdktf.ComplexList {
  public internalValue? : ServiceFabricManagedClusterNodeTypeVmSecretsCertificates[] | cdktf.IResolvable

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
  public get(index: number): ServiceFabricManagedClusterNodeTypeVmSecretsCertificatesOutputReference {
    return new ServiceFabricManagedClusterNodeTypeVmSecretsCertificatesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ServiceFabricManagedClusterNodeTypeVmSecrets {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/service_fabric_managed_cluster#vault_id ServiceFabricManagedCluster#vault_id}
  */
  readonly vaultId: string;
  /**
  * certificates block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/service_fabric_managed_cluster#certificates ServiceFabricManagedCluster#certificates}
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
    certificates: cdktf.listMapper(serviceFabricManagedClusterNodeTypeVmSecretsCertificatesToTerraform, true)(struct!.certificates),
  }
}


export function serviceFabricManagedClusterNodeTypeVmSecretsToHclTerraform(struct?: ServiceFabricManagedClusterNodeTypeVmSecrets | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    vault_id: {
      value: cdktf.stringToHclTerraform(struct!.vaultId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    certificates: {
      value: cdktf.listMapperHcl(serviceFabricManagedClusterNodeTypeVmSecretsCertificatesToHclTerraform, true)(struct!.certificates),
      isBlock: true,
      type: "list",
      storageClassType: "ServiceFabricManagedClusterNodeTypeVmSecretsCertificatesList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ServiceFabricManagedClusterNodeTypeVmSecretsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ServiceFabricManagedClusterNodeTypeVmSecrets | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._vaultId !== undefined) {
      hasAnyValues = true;
      internalValueResult.vaultId = this._vaultId;
    }
    if (this._certificates?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.certificates = this._certificates?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ServiceFabricManagedClusterNodeTypeVmSecrets | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._vaultId = undefined;
      this._certificates.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._vaultId = value.vaultId;
      this._certificates.internalValue = value.certificates;
    }
  }

  // vault_id - computed: false, optional: false, required: true
  private _vaultId?: string; 
  public get vaultId() {
    return this.getStringAttribute('vault_id');
  }
  public set vaultId(value: string) {
    this._vaultId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get vaultIdInput() {
    return this._vaultId;
  }

  // certificates - computed: false, optional: false, required: true
  private _certificates = new ServiceFabricManagedClusterNodeTypeVmSecretsCertificatesList(this, "certificates", false);
  public get certificates() {
    return this._certificates;
  }
  public putCertificates(value: ServiceFabricManagedClusterNodeTypeVmSecretsCertificates[] | cdktf.IResolvable) {
    this._certificates.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get certificatesInput() {
    return this._certificates.internalValue;
  }
}

export class ServiceFabricManagedClusterNodeTypeVmSecretsList extends cdktf.ComplexList {
  public internalValue? : ServiceFabricManagedClusterNodeTypeVmSecrets[] | cdktf.IResolvable

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
  public get(index: number): ServiceFabricManagedClusterNodeTypeVmSecretsOutputReference {
    return new ServiceFabricManagedClusterNodeTypeVmSecretsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ServiceFabricManagedClusterNodeType {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/service_fabric_managed_cluster#application_port_range ServiceFabricManagedCluster#application_port_range}
  */
  readonly applicationPortRange: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/service_fabric_managed_cluster#capacities ServiceFabricManagedCluster#capacities}
  */
  readonly capacities?: { [key: string]: string };
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/service_fabric_managed_cluster#data_disk_size_gb ServiceFabricManagedCluster#data_disk_size_gb}
  */
  readonly dataDiskSizeGb: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/service_fabric_managed_cluster#data_disk_type ServiceFabricManagedCluster#data_disk_type}
  */
  readonly dataDiskType?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/service_fabric_managed_cluster#ephemeral_port_range ServiceFabricManagedCluster#ephemeral_port_range}
  */
  readonly ephemeralPortRange: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/service_fabric_managed_cluster#multiple_placement_groups_enabled ServiceFabricManagedCluster#multiple_placement_groups_enabled}
  */
  readonly multiplePlacementGroupsEnabled?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/service_fabric_managed_cluster#name ServiceFabricManagedCluster#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/service_fabric_managed_cluster#placement_properties ServiceFabricManagedCluster#placement_properties}
  */
  readonly placementProperties?: { [key: string]: string };
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/service_fabric_managed_cluster#primary ServiceFabricManagedCluster#primary}
  */
  readonly primary?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/service_fabric_managed_cluster#stateless ServiceFabricManagedCluster#stateless}
  */
  readonly stateless?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/service_fabric_managed_cluster#vm_image_offer ServiceFabricManagedCluster#vm_image_offer}
  */
  readonly vmImageOffer: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/service_fabric_managed_cluster#vm_image_publisher ServiceFabricManagedCluster#vm_image_publisher}
  */
  readonly vmImagePublisher: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/service_fabric_managed_cluster#vm_image_sku ServiceFabricManagedCluster#vm_image_sku}
  */
  readonly vmImageSku: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/service_fabric_managed_cluster#vm_image_version ServiceFabricManagedCluster#vm_image_version}
  */
  readonly vmImageVersion: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/service_fabric_managed_cluster#vm_instance_count ServiceFabricManagedCluster#vm_instance_count}
  */
  readonly vmInstanceCount: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/service_fabric_managed_cluster#vm_size ServiceFabricManagedCluster#vm_size}
  */
  readonly vmSize: string;
  /**
  * vm_secrets block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/service_fabric_managed_cluster#vm_secrets ServiceFabricManagedCluster#vm_secrets}
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
    vm_secrets: cdktf.listMapper(serviceFabricManagedClusterNodeTypeVmSecretsToTerraform, true)(struct!.vmSecrets),
  }
}


export function serviceFabricManagedClusterNodeTypeToHclTerraform(struct?: ServiceFabricManagedClusterNodeType | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    application_port_range: {
      value: cdktf.stringToHclTerraform(struct!.applicationPortRange),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    capacities: {
      value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(struct!.capacities),
      isBlock: false,
      type: "map",
      storageClassType: "stringMap",
    },
    data_disk_size_gb: {
      value: cdktf.numberToHclTerraform(struct!.dataDiskSizeGb),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    data_disk_type: {
      value: cdktf.stringToHclTerraform(struct!.dataDiskType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    ephemeral_port_range: {
      value: cdktf.stringToHclTerraform(struct!.ephemeralPortRange),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    multiple_placement_groups_enabled: {
      value: cdktf.booleanToHclTerraform(struct!.multiplePlacementGroupsEnabled),
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
    primary: {
      value: cdktf.booleanToHclTerraform(struct!.primary),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    stateless: {
      value: cdktf.booleanToHclTerraform(struct!.stateless),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    vm_image_offer: {
      value: cdktf.stringToHclTerraform(struct!.vmImageOffer),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    vm_image_publisher: {
      value: cdktf.stringToHclTerraform(struct!.vmImagePublisher),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    vm_image_sku: {
      value: cdktf.stringToHclTerraform(struct!.vmImageSku),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    vm_image_version: {
      value: cdktf.stringToHclTerraform(struct!.vmImageVersion),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    vm_instance_count: {
      value: cdktf.numberToHclTerraform(struct!.vmInstanceCount),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    vm_size: {
      value: cdktf.stringToHclTerraform(struct!.vmSize),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    vm_secrets: {
      value: cdktf.listMapperHcl(serviceFabricManagedClusterNodeTypeVmSecretsToHclTerraform, true)(struct!.vmSecrets),
      isBlock: true,
      type: "list",
      storageClassType: "ServiceFabricManagedClusterNodeTypeVmSecretsList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ServiceFabricManagedClusterNodeTypeOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ServiceFabricManagedClusterNodeType | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._applicationPortRange !== undefined) {
      hasAnyValues = true;
      internalValueResult.applicationPortRange = this._applicationPortRange;
    }
    if (this._capacities !== undefined) {
      hasAnyValues = true;
      internalValueResult.capacities = this._capacities;
    }
    if (this._dataDiskSizeGb !== undefined) {
      hasAnyValues = true;
      internalValueResult.dataDiskSizeGb = this._dataDiskSizeGb;
    }
    if (this._dataDiskType !== undefined) {
      hasAnyValues = true;
      internalValueResult.dataDiskType = this._dataDiskType;
    }
    if (this._ephemeralPortRange !== undefined) {
      hasAnyValues = true;
      internalValueResult.ephemeralPortRange = this._ephemeralPortRange;
    }
    if (this._multiplePlacementGroupsEnabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.multiplePlacementGroupsEnabled = this._multiplePlacementGroupsEnabled;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._placementProperties !== undefined) {
      hasAnyValues = true;
      internalValueResult.placementProperties = this._placementProperties;
    }
    if (this._primary !== undefined) {
      hasAnyValues = true;
      internalValueResult.primary = this._primary;
    }
    if (this._stateless !== undefined) {
      hasAnyValues = true;
      internalValueResult.stateless = this._stateless;
    }
    if (this._vmImageOffer !== undefined) {
      hasAnyValues = true;
      internalValueResult.vmImageOffer = this._vmImageOffer;
    }
    if (this._vmImagePublisher !== undefined) {
      hasAnyValues = true;
      internalValueResult.vmImagePublisher = this._vmImagePublisher;
    }
    if (this._vmImageSku !== undefined) {
      hasAnyValues = true;
      internalValueResult.vmImageSku = this._vmImageSku;
    }
    if (this._vmImageVersion !== undefined) {
      hasAnyValues = true;
      internalValueResult.vmImageVersion = this._vmImageVersion;
    }
    if (this._vmInstanceCount !== undefined) {
      hasAnyValues = true;
      internalValueResult.vmInstanceCount = this._vmInstanceCount;
    }
    if (this._vmSize !== undefined) {
      hasAnyValues = true;
      internalValueResult.vmSize = this._vmSize;
    }
    if (this._vmSecrets?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.vmSecrets = this._vmSecrets?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ServiceFabricManagedClusterNodeType | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._applicationPortRange = undefined;
      this._capacities = undefined;
      this._dataDiskSizeGb = undefined;
      this._dataDiskType = undefined;
      this._ephemeralPortRange = undefined;
      this._multiplePlacementGroupsEnabled = undefined;
      this._name = undefined;
      this._placementProperties = undefined;
      this._primary = undefined;
      this._stateless = undefined;
      this._vmImageOffer = undefined;
      this._vmImagePublisher = undefined;
      this._vmImageSku = undefined;
      this._vmImageVersion = undefined;
      this._vmInstanceCount = undefined;
      this._vmSize = undefined;
      this._vmSecrets.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._applicationPortRange = value.applicationPortRange;
      this._capacities = value.capacities;
      this._dataDiskSizeGb = value.dataDiskSizeGb;
      this._dataDiskType = value.dataDiskType;
      this._ephemeralPortRange = value.ephemeralPortRange;
      this._multiplePlacementGroupsEnabled = value.multiplePlacementGroupsEnabled;
      this._name = value.name;
      this._placementProperties = value.placementProperties;
      this._primary = value.primary;
      this._stateless = value.stateless;
      this._vmImageOffer = value.vmImageOffer;
      this._vmImagePublisher = value.vmImagePublisher;
      this._vmImageSku = value.vmImageSku;
      this._vmImageVersion = value.vmImageVersion;
      this._vmInstanceCount = value.vmInstanceCount;
      this._vmSize = value.vmSize;
      this._vmSecrets.internalValue = value.vmSecrets;
    }
  }

  // application_port_range - computed: false, optional: false, required: true
  private _applicationPortRange?: string; 
  public get applicationPortRange() {
    return this.getStringAttribute('application_port_range');
  }
  public set applicationPortRange(value: string) {
    this._applicationPortRange = value;
  }
  // Temporarily expose input value. Use with caution.
  public get applicationPortRangeInput() {
    return this._applicationPortRange;
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

  // data_disk_size_gb - computed: false, optional: false, required: true
  private _dataDiskSizeGb?: number; 
  public get dataDiskSizeGb() {
    return this.getNumberAttribute('data_disk_size_gb');
  }
  public set dataDiskSizeGb(value: number) {
    this._dataDiskSizeGb = value;
  }
  // Temporarily expose input value. Use with caution.
  public get dataDiskSizeGbInput() {
    return this._dataDiskSizeGb;
  }

  // data_disk_type - computed: false, optional: true, required: false
  private _dataDiskType?: string; 
  public get dataDiskType() {
    return this.getStringAttribute('data_disk_type');
  }
  public set dataDiskType(value: string) {
    this._dataDiskType = value;
  }
  public resetDataDiskType() {
    this._dataDiskType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dataDiskTypeInput() {
    return this._dataDiskType;
  }

  // ephemeral_port_range - computed: false, optional: false, required: true
  private _ephemeralPortRange?: string; 
  public get ephemeralPortRange() {
    return this.getStringAttribute('ephemeral_port_range');
  }
  public set ephemeralPortRange(value: string) {
    this._ephemeralPortRange = value;
  }
  // Temporarily expose input value. Use with caution.
  public get ephemeralPortRangeInput() {
    return this._ephemeralPortRange;
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // multiple_placement_groups_enabled - computed: false, optional: true, required: false
  private _multiplePlacementGroupsEnabled?: boolean | cdktf.IResolvable; 
  public get multiplePlacementGroupsEnabled() {
    return this.getBooleanAttribute('multiple_placement_groups_enabled');
  }
  public set multiplePlacementGroupsEnabled(value: boolean | cdktf.IResolvable) {
    this._multiplePlacementGroupsEnabled = value;
  }
  public resetMultiplePlacementGroupsEnabled() {
    this._multiplePlacementGroupsEnabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get multiplePlacementGroupsEnabledInput() {
    return this._multiplePlacementGroupsEnabled;
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

  // primary - computed: false, optional: true, required: false
  private _primary?: boolean | cdktf.IResolvable; 
  public get primary() {
    return this.getBooleanAttribute('primary');
  }
  public set primary(value: boolean | cdktf.IResolvable) {
    this._primary = value;
  }
  public resetPrimary() {
    this._primary = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get primaryInput() {
    return this._primary;
  }

  // stateless - computed: false, optional: true, required: false
  private _stateless?: boolean | cdktf.IResolvable; 
  public get stateless() {
    return this.getBooleanAttribute('stateless');
  }
  public set stateless(value: boolean | cdktf.IResolvable) {
    this._stateless = value;
  }
  public resetStateless() {
    this._stateless = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get statelessInput() {
    return this._stateless;
  }

  // vm_image_offer - computed: false, optional: false, required: true
  private _vmImageOffer?: string; 
  public get vmImageOffer() {
    return this.getStringAttribute('vm_image_offer');
  }
  public set vmImageOffer(value: string) {
    this._vmImageOffer = value;
  }
  // Temporarily expose input value. Use with caution.
  public get vmImageOfferInput() {
    return this._vmImageOffer;
  }

  // vm_image_publisher - computed: false, optional: false, required: true
  private _vmImagePublisher?: string; 
  public get vmImagePublisher() {
    return this.getStringAttribute('vm_image_publisher');
  }
  public set vmImagePublisher(value: string) {
    this._vmImagePublisher = value;
  }
  // Temporarily expose input value. Use with caution.
  public get vmImagePublisherInput() {
    return this._vmImagePublisher;
  }

  // vm_image_sku - computed: false, optional: false, required: true
  private _vmImageSku?: string; 
  public get vmImageSku() {
    return this.getStringAttribute('vm_image_sku');
  }
  public set vmImageSku(value: string) {
    this._vmImageSku = value;
  }
  // Temporarily expose input value. Use with caution.
  public get vmImageSkuInput() {
    return this._vmImageSku;
  }

  // vm_image_version - computed: false, optional: false, required: true
  private _vmImageVersion?: string; 
  public get vmImageVersion() {
    return this.getStringAttribute('vm_image_version');
  }
  public set vmImageVersion(value: string) {
    this._vmImageVersion = value;
  }
  // Temporarily expose input value. Use with caution.
  public get vmImageVersionInput() {
    return this._vmImageVersion;
  }

  // vm_instance_count - computed: false, optional: false, required: true
  private _vmInstanceCount?: number; 
  public get vmInstanceCount() {
    return this.getNumberAttribute('vm_instance_count');
  }
  public set vmInstanceCount(value: number) {
    this._vmInstanceCount = value;
  }
  // Temporarily expose input value. Use with caution.
  public get vmInstanceCountInput() {
    return this._vmInstanceCount;
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

  // vm_secrets - computed: false, optional: true, required: false
  private _vmSecrets = new ServiceFabricManagedClusterNodeTypeVmSecretsList(this, "vm_secrets", false);
  public get vmSecrets() {
    return this._vmSecrets;
  }
  public putVmSecrets(value: ServiceFabricManagedClusterNodeTypeVmSecrets[] | cdktf.IResolvable) {
    this._vmSecrets.internalValue = value;
  }
  public resetVmSecrets() {
    this._vmSecrets.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get vmSecretsInput() {
    return this._vmSecrets.internalValue;
  }
}

export class ServiceFabricManagedClusterNodeTypeList extends cdktf.ComplexList {
  public internalValue? : ServiceFabricManagedClusterNodeType[] | cdktf.IResolvable

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
  public get(index: number): ServiceFabricManagedClusterNodeTypeOutputReference {
    return new ServiceFabricManagedClusterNodeTypeOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ServiceFabricManagedClusterTimeouts {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/service_fabric_managed_cluster#create ServiceFabricManagedCluster#create}
  */
  readonly create?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/service_fabric_managed_cluster#delete ServiceFabricManagedCluster#delete}
  */
  readonly delete?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/service_fabric_managed_cluster#read ServiceFabricManagedCluster#read}
  */
  readonly read?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/service_fabric_managed_cluster#update ServiceFabricManagedCluster#update}
  */
  readonly update?: string;
}

export function serviceFabricManagedClusterTimeoutsToTerraform(struct?: ServiceFabricManagedClusterTimeouts | cdktf.IResolvable): any {
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


export function serviceFabricManagedClusterTimeoutsToHclTerraform(struct?: ServiceFabricManagedClusterTimeouts | cdktf.IResolvable): any {
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

export class ServiceFabricManagedClusterTimeoutsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): ServiceFabricManagedClusterTimeouts | cdktf.IResolvable | undefined {
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

  public set internalValue(value: ServiceFabricManagedClusterTimeouts | cdktf.IResolvable | undefined) {
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
* Represents a {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/service_fabric_managed_cluster azurerm_service_fabric_managed_cluster}
*/
export class ServiceFabricManagedCluster extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "azurerm_service_fabric_managed_cluster";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a ServiceFabricManagedCluster resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the ServiceFabricManagedCluster to import
  * @param importFromId The id of the existing ServiceFabricManagedCluster that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/service_fabric_managed_cluster#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the ServiceFabricManagedCluster to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "azurerm_service_fabric_managed_cluster", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/service_fabric_managed_cluster azurerm_service_fabric_managed_cluster} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options ServiceFabricManagedClusterConfig
  */
  public constructor(scope: Construct, id: string, config: ServiceFabricManagedClusterConfig) {
    super(scope, id, {
      terraformResourceType: 'azurerm_service_fabric_managed_cluster',
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
    this._backupServiceEnabled = config.backupServiceEnabled;
    this._clientConnectionPort = config.clientConnectionPort;
    this._dnsName = config.dnsName;
    this._dnsServiceEnabled = config.dnsServiceEnabled;
    this._httpGatewayPort = config.httpGatewayPort;
    this._id = config.id;
    this._location = config.location;
    this._name = config.name;
    this._password = config.password;
    this._resourceGroupName = config.resourceGroupName;
    this._sku = config.sku;
    this._tags = config.tags;
    this._upgradeWave = config.upgradeWave;
    this._username = config.username;
    this._authentication.internalValue = config.authentication;
    this._customFabricSetting.internalValue = config.customFabricSetting;
    this._lbRule.internalValue = config.lbRule;
    this._nodeType.internalValue = config.nodeType;
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
  private _authentication = new ServiceFabricManagedClusterAuthenticationOutputReference(this, "authentication");
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
  private _customFabricSetting = new ServiceFabricManagedClusterCustomFabricSettingList(this, "custom_fabric_setting", false);
  public get customFabricSetting() {
    return this._customFabricSetting;
  }
  public putCustomFabricSetting(value: ServiceFabricManagedClusterCustomFabricSetting[] | cdktf.IResolvable) {
    this._customFabricSetting.internalValue = value;
  }
  public resetCustomFabricSetting() {
    this._customFabricSetting.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get customFabricSettingInput() {
    return this._customFabricSetting.internalValue;
  }

  // lb_rule - computed: false, optional: false, required: true
  private _lbRule = new ServiceFabricManagedClusterLbRuleList(this, "lb_rule", false);
  public get lbRule() {
    return this._lbRule;
  }
  public putLbRule(value: ServiceFabricManagedClusterLbRule[] | cdktf.IResolvable) {
    this._lbRule.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get lbRuleInput() {
    return this._lbRule.internalValue;
  }

  // node_type - computed: false, optional: true, required: false
  private _nodeType = new ServiceFabricManagedClusterNodeTypeList(this, "node_type", false);
  public get nodeType() {
    return this._nodeType;
  }
  public putNodeType(value: ServiceFabricManagedClusterNodeType[] | cdktf.IResolvable) {
    this._nodeType.internalValue = value;
  }
  public resetNodeType() {
    this._nodeType.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nodeTypeInput() {
    return this._nodeType.internalValue;
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts = new ServiceFabricManagedClusterTimeoutsOutputReference(this, "timeouts");
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
      id: cdktf.stringToTerraform(this._id),
      location: cdktf.stringToTerraform(this._location),
      name: cdktf.stringToTerraform(this._name),
      password: cdktf.stringToTerraform(this._password),
      resource_group_name: cdktf.stringToTerraform(this._resourceGroupName),
      sku: cdktf.stringToTerraform(this._sku),
      tags: cdktf.hashMapper(cdktf.stringToTerraform)(this._tags),
      upgrade_wave: cdktf.stringToTerraform(this._upgradeWave),
      username: cdktf.stringToTerraform(this._username),
      authentication: serviceFabricManagedClusterAuthenticationToTerraform(this._authentication.internalValue),
      custom_fabric_setting: cdktf.listMapper(serviceFabricManagedClusterCustomFabricSettingToTerraform, true)(this._customFabricSetting.internalValue),
      lb_rule: cdktf.listMapper(serviceFabricManagedClusterLbRuleToTerraform, true)(this._lbRule.internalValue),
      node_type: cdktf.listMapper(serviceFabricManagedClusterNodeTypeToTerraform, true)(this._nodeType.internalValue),
      timeouts: serviceFabricManagedClusterTimeoutsToTerraform(this._timeouts.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      backup_service_enabled: {
        value: cdktf.booleanToHclTerraform(this._backupServiceEnabled),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      client_connection_port: {
        value: cdktf.numberToHclTerraform(this._clientConnectionPort),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      dns_name: {
        value: cdktf.stringToHclTerraform(this._dnsName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      dns_service_enabled: {
        value: cdktf.booleanToHclTerraform(this._dnsServiceEnabled),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      http_gateway_port: {
        value: cdktf.numberToHclTerraform(this._httpGatewayPort),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
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
      name: {
        value: cdktf.stringToHclTerraform(this._name),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      password: {
        value: cdktf.stringToHclTerraform(this._password),
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
      sku: {
        value: cdktf.stringToHclTerraform(this._sku),
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
      upgrade_wave: {
        value: cdktf.stringToHclTerraform(this._upgradeWave),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      username: {
        value: cdktf.stringToHclTerraform(this._username),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      authentication: {
        value: serviceFabricManagedClusterAuthenticationToHclTerraform(this._authentication.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "ServiceFabricManagedClusterAuthenticationList",
      },
      custom_fabric_setting: {
        value: cdktf.listMapperHcl(serviceFabricManagedClusterCustomFabricSettingToHclTerraform, true)(this._customFabricSetting.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "ServiceFabricManagedClusterCustomFabricSettingList",
      },
      lb_rule: {
        value: cdktf.listMapperHcl(serviceFabricManagedClusterLbRuleToHclTerraform, true)(this._lbRule.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "ServiceFabricManagedClusterLbRuleList",
      },
      node_type: {
        value: cdktf.listMapperHcl(serviceFabricManagedClusterNodeTypeToHclTerraform, true)(this._nodeType.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "ServiceFabricManagedClusterNodeTypeList",
      },
      timeouts: {
        value: serviceFabricManagedClusterTimeoutsToHclTerraform(this._timeouts.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "ServiceFabricManagedClusterTimeouts",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
