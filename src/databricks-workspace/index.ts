// https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/databricks_workspace
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DatabricksWorkspaceConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/databricks_workspace#access_connector_id DatabricksWorkspace#access_connector_id}
  */
  readonly accessConnectorId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/databricks_workspace#customer_managed_key_enabled DatabricksWorkspace#customer_managed_key_enabled}
  */
  readonly customerManagedKeyEnabled?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/databricks_workspace#default_storage_firewall_enabled DatabricksWorkspace#default_storage_firewall_enabled}
  */
  readonly defaultStorageFirewallEnabled?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/databricks_workspace#id DatabricksWorkspace#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/databricks_workspace#infrastructure_encryption_enabled DatabricksWorkspace#infrastructure_encryption_enabled}
  */
  readonly infrastructureEncryptionEnabled?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/databricks_workspace#load_balancer_backend_address_pool_id DatabricksWorkspace#load_balancer_backend_address_pool_id}
  */
  readonly loadBalancerBackendAddressPoolId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/databricks_workspace#location DatabricksWorkspace#location}
  */
  readonly location: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/databricks_workspace#managed_disk_cmk_key_vault_id DatabricksWorkspace#managed_disk_cmk_key_vault_id}
  */
  readonly managedDiskCmkKeyVaultId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/databricks_workspace#managed_disk_cmk_key_vault_key_id DatabricksWorkspace#managed_disk_cmk_key_vault_key_id}
  */
  readonly managedDiskCmkKeyVaultKeyId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/databricks_workspace#managed_disk_cmk_rotation_to_latest_version_enabled DatabricksWorkspace#managed_disk_cmk_rotation_to_latest_version_enabled}
  */
  readonly managedDiskCmkRotationToLatestVersionEnabled?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/databricks_workspace#managed_resource_group_name DatabricksWorkspace#managed_resource_group_name}
  */
  readonly managedResourceGroupName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/databricks_workspace#managed_services_cmk_key_vault_id DatabricksWorkspace#managed_services_cmk_key_vault_id}
  */
  readonly managedServicesCmkKeyVaultId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/databricks_workspace#managed_services_cmk_key_vault_key_id DatabricksWorkspace#managed_services_cmk_key_vault_key_id}
  */
  readonly managedServicesCmkKeyVaultKeyId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/databricks_workspace#name DatabricksWorkspace#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/databricks_workspace#network_security_group_rules_required DatabricksWorkspace#network_security_group_rules_required}
  */
  readonly networkSecurityGroupRulesRequired?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/databricks_workspace#public_network_access_enabled DatabricksWorkspace#public_network_access_enabled}
  */
  readonly publicNetworkAccessEnabled?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/databricks_workspace#resource_group_name DatabricksWorkspace#resource_group_name}
  */
  readonly resourceGroupName: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/databricks_workspace#sku DatabricksWorkspace#sku}
  */
  readonly sku: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/databricks_workspace#tags DatabricksWorkspace#tags}
  */
  readonly tags?: { [key: string]: string };
  /**
  * custom_parameters block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/databricks_workspace#custom_parameters DatabricksWorkspace#custom_parameters}
  */
  readonly customParameters?: DatabricksWorkspaceCustomParameters;
  /**
  * timeouts block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/databricks_workspace#timeouts DatabricksWorkspace#timeouts}
  */
  readonly timeouts?: DatabricksWorkspaceTimeouts;
}
export interface DatabricksWorkspaceManagedDiskIdentity {
}

export function databricksWorkspaceManagedDiskIdentityToTerraform(struct?: DatabricksWorkspaceManagedDiskIdentity): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function databricksWorkspaceManagedDiskIdentityToHclTerraform(struct?: DatabricksWorkspaceManagedDiskIdentity): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DatabricksWorkspaceManagedDiskIdentityOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DatabricksWorkspaceManagedDiskIdentity | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DatabricksWorkspaceManagedDiskIdentity | undefined) {
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
}

export class DatabricksWorkspaceManagedDiskIdentityList extends cdktf.ComplexList {

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
  public get(index: number): DatabricksWorkspaceManagedDiskIdentityOutputReference {
    return new DatabricksWorkspaceManagedDiskIdentityOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DatabricksWorkspaceStorageAccountIdentity {
}

export function databricksWorkspaceStorageAccountIdentityToTerraform(struct?: DatabricksWorkspaceStorageAccountIdentity): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function databricksWorkspaceStorageAccountIdentityToHclTerraform(struct?: DatabricksWorkspaceStorageAccountIdentity): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DatabricksWorkspaceStorageAccountIdentityOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DatabricksWorkspaceStorageAccountIdentity | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DatabricksWorkspaceStorageAccountIdentity | undefined) {
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
}

export class DatabricksWorkspaceStorageAccountIdentityList extends cdktf.ComplexList {

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
  public get(index: number): DatabricksWorkspaceStorageAccountIdentityOutputReference {
    return new DatabricksWorkspaceStorageAccountIdentityOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DatabricksWorkspaceCustomParameters {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/databricks_workspace#machine_learning_workspace_id DatabricksWorkspace#machine_learning_workspace_id}
  */
  readonly machineLearningWorkspaceId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/databricks_workspace#nat_gateway_name DatabricksWorkspace#nat_gateway_name}
  */
  readonly natGatewayName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/databricks_workspace#no_public_ip DatabricksWorkspace#no_public_ip}
  */
  readonly noPublicIp?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/databricks_workspace#private_subnet_name DatabricksWorkspace#private_subnet_name}
  */
  readonly privateSubnetName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/databricks_workspace#private_subnet_network_security_group_association_id DatabricksWorkspace#private_subnet_network_security_group_association_id}
  */
  readonly privateSubnetNetworkSecurityGroupAssociationId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/databricks_workspace#public_ip_name DatabricksWorkspace#public_ip_name}
  */
  readonly publicIpName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/databricks_workspace#public_subnet_name DatabricksWorkspace#public_subnet_name}
  */
  readonly publicSubnetName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/databricks_workspace#public_subnet_network_security_group_association_id DatabricksWorkspace#public_subnet_network_security_group_association_id}
  */
  readonly publicSubnetNetworkSecurityGroupAssociationId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/databricks_workspace#storage_account_name DatabricksWorkspace#storage_account_name}
  */
  readonly storageAccountName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/databricks_workspace#storage_account_sku_name DatabricksWorkspace#storage_account_sku_name}
  */
  readonly storageAccountSkuName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/databricks_workspace#virtual_network_id DatabricksWorkspace#virtual_network_id}
  */
  readonly virtualNetworkId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/databricks_workspace#vnet_address_prefix DatabricksWorkspace#vnet_address_prefix}
  */
  readonly vnetAddressPrefix?: string;
}

export function databricksWorkspaceCustomParametersToTerraform(struct?: DatabricksWorkspaceCustomParametersOutputReference | DatabricksWorkspaceCustomParameters): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    machine_learning_workspace_id: cdktf.stringToTerraform(struct!.machineLearningWorkspaceId),
    nat_gateway_name: cdktf.stringToTerraform(struct!.natGatewayName),
    no_public_ip: cdktf.booleanToTerraform(struct!.noPublicIp),
    private_subnet_name: cdktf.stringToTerraform(struct!.privateSubnetName),
    private_subnet_network_security_group_association_id: cdktf.stringToTerraform(struct!.privateSubnetNetworkSecurityGroupAssociationId),
    public_ip_name: cdktf.stringToTerraform(struct!.publicIpName),
    public_subnet_name: cdktf.stringToTerraform(struct!.publicSubnetName),
    public_subnet_network_security_group_association_id: cdktf.stringToTerraform(struct!.publicSubnetNetworkSecurityGroupAssociationId),
    storage_account_name: cdktf.stringToTerraform(struct!.storageAccountName),
    storage_account_sku_name: cdktf.stringToTerraform(struct!.storageAccountSkuName),
    virtual_network_id: cdktf.stringToTerraform(struct!.virtualNetworkId),
    vnet_address_prefix: cdktf.stringToTerraform(struct!.vnetAddressPrefix),
  }
}


export function databricksWorkspaceCustomParametersToHclTerraform(struct?: DatabricksWorkspaceCustomParametersOutputReference | DatabricksWorkspaceCustomParameters): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    machine_learning_workspace_id: {
      value: cdktf.stringToHclTerraform(struct!.machineLearningWorkspaceId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    nat_gateway_name: {
      value: cdktf.stringToHclTerraform(struct!.natGatewayName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    no_public_ip: {
      value: cdktf.booleanToHclTerraform(struct!.noPublicIp),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    private_subnet_name: {
      value: cdktf.stringToHclTerraform(struct!.privateSubnetName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    private_subnet_network_security_group_association_id: {
      value: cdktf.stringToHclTerraform(struct!.privateSubnetNetworkSecurityGroupAssociationId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    public_ip_name: {
      value: cdktf.stringToHclTerraform(struct!.publicIpName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    public_subnet_name: {
      value: cdktf.stringToHclTerraform(struct!.publicSubnetName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    public_subnet_network_security_group_association_id: {
      value: cdktf.stringToHclTerraform(struct!.publicSubnetNetworkSecurityGroupAssociationId),
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
    storage_account_sku_name: {
      value: cdktf.stringToHclTerraform(struct!.storageAccountSkuName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    virtual_network_id: {
      value: cdktf.stringToHclTerraform(struct!.virtualNetworkId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    vnet_address_prefix: {
      value: cdktf.stringToHclTerraform(struct!.vnetAddressPrefix),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DatabricksWorkspaceCustomParametersOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DatabricksWorkspaceCustomParameters | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._machineLearningWorkspaceId !== undefined) {
      hasAnyValues = true;
      internalValueResult.machineLearningWorkspaceId = this._machineLearningWorkspaceId;
    }
    if (this._natGatewayName !== undefined) {
      hasAnyValues = true;
      internalValueResult.natGatewayName = this._natGatewayName;
    }
    if (this._noPublicIp !== undefined) {
      hasAnyValues = true;
      internalValueResult.noPublicIp = this._noPublicIp;
    }
    if (this._privateSubnetName !== undefined) {
      hasAnyValues = true;
      internalValueResult.privateSubnetName = this._privateSubnetName;
    }
    if (this._privateSubnetNetworkSecurityGroupAssociationId !== undefined) {
      hasAnyValues = true;
      internalValueResult.privateSubnetNetworkSecurityGroupAssociationId = this._privateSubnetNetworkSecurityGroupAssociationId;
    }
    if (this._publicIpName !== undefined) {
      hasAnyValues = true;
      internalValueResult.publicIpName = this._publicIpName;
    }
    if (this._publicSubnetName !== undefined) {
      hasAnyValues = true;
      internalValueResult.publicSubnetName = this._publicSubnetName;
    }
    if (this._publicSubnetNetworkSecurityGroupAssociationId !== undefined) {
      hasAnyValues = true;
      internalValueResult.publicSubnetNetworkSecurityGroupAssociationId = this._publicSubnetNetworkSecurityGroupAssociationId;
    }
    if (this._storageAccountName !== undefined) {
      hasAnyValues = true;
      internalValueResult.storageAccountName = this._storageAccountName;
    }
    if (this._storageAccountSkuName !== undefined) {
      hasAnyValues = true;
      internalValueResult.storageAccountSkuName = this._storageAccountSkuName;
    }
    if (this._virtualNetworkId !== undefined) {
      hasAnyValues = true;
      internalValueResult.virtualNetworkId = this._virtualNetworkId;
    }
    if (this._vnetAddressPrefix !== undefined) {
      hasAnyValues = true;
      internalValueResult.vnetAddressPrefix = this._vnetAddressPrefix;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DatabricksWorkspaceCustomParameters | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._machineLearningWorkspaceId = undefined;
      this._natGatewayName = undefined;
      this._noPublicIp = undefined;
      this._privateSubnetName = undefined;
      this._privateSubnetNetworkSecurityGroupAssociationId = undefined;
      this._publicIpName = undefined;
      this._publicSubnetName = undefined;
      this._publicSubnetNetworkSecurityGroupAssociationId = undefined;
      this._storageAccountName = undefined;
      this._storageAccountSkuName = undefined;
      this._virtualNetworkId = undefined;
      this._vnetAddressPrefix = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._machineLearningWorkspaceId = value.machineLearningWorkspaceId;
      this._natGatewayName = value.natGatewayName;
      this._noPublicIp = value.noPublicIp;
      this._privateSubnetName = value.privateSubnetName;
      this._privateSubnetNetworkSecurityGroupAssociationId = value.privateSubnetNetworkSecurityGroupAssociationId;
      this._publicIpName = value.publicIpName;
      this._publicSubnetName = value.publicSubnetName;
      this._publicSubnetNetworkSecurityGroupAssociationId = value.publicSubnetNetworkSecurityGroupAssociationId;
      this._storageAccountName = value.storageAccountName;
      this._storageAccountSkuName = value.storageAccountSkuName;
      this._virtualNetworkId = value.virtualNetworkId;
      this._vnetAddressPrefix = value.vnetAddressPrefix;
    }
  }

  // machine_learning_workspace_id - computed: false, optional: true, required: false
  private _machineLearningWorkspaceId?: string; 
  public get machineLearningWorkspaceId() {
    return this.getStringAttribute('machine_learning_workspace_id');
  }
  public set machineLearningWorkspaceId(value: string) {
    this._machineLearningWorkspaceId = value;
  }
  public resetMachineLearningWorkspaceId() {
    this._machineLearningWorkspaceId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get machineLearningWorkspaceIdInput() {
    return this._machineLearningWorkspaceId;
  }

  // nat_gateway_name - computed: true, optional: true, required: false
  private _natGatewayName?: string; 
  public get natGatewayName() {
    return this.getStringAttribute('nat_gateway_name');
  }
  public set natGatewayName(value: string) {
    this._natGatewayName = value;
  }
  public resetNatGatewayName() {
    this._natGatewayName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get natGatewayNameInput() {
    return this._natGatewayName;
  }

  // no_public_ip - computed: false, optional: true, required: false
  private _noPublicIp?: boolean | cdktf.IResolvable; 
  public get noPublicIp() {
    return this.getBooleanAttribute('no_public_ip');
  }
  public set noPublicIp(value: boolean | cdktf.IResolvable) {
    this._noPublicIp = value;
  }
  public resetNoPublicIp() {
    this._noPublicIp = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get noPublicIpInput() {
    return this._noPublicIp;
  }

  // private_subnet_name - computed: false, optional: true, required: false
  private _privateSubnetName?: string; 
  public get privateSubnetName() {
    return this.getStringAttribute('private_subnet_name');
  }
  public set privateSubnetName(value: string) {
    this._privateSubnetName = value;
  }
  public resetPrivateSubnetName() {
    this._privateSubnetName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get privateSubnetNameInput() {
    return this._privateSubnetName;
  }

  // private_subnet_network_security_group_association_id - computed: false, optional: true, required: false
  private _privateSubnetNetworkSecurityGroupAssociationId?: string; 
  public get privateSubnetNetworkSecurityGroupAssociationId() {
    return this.getStringAttribute('private_subnet_network_security_group_association_id');
  }
  public set privateSubnetNetworkSecurityGroupAssociationId(value: string) {
    this._privateSubnetNetworkSecurityGroupAssociationId = value;
  }
  public resetPrivateSubnetNetworkSecurityGroupAssociationId() {
    this._privateSubnetNetworkSecurityGroupAssociationId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get privateSubnetNetworkSecurityGroupAssociationIdInput() {
    return this._privateSubnetNetworkSecurityGroupAssociationId;
  }

  // public_ip_name - computed: true, optional: true, required: false
  private _publicIpName?: string; 
  public get publicIpName() {
    return this.getStringAttribute('public_ip_name');
  }
  public set publicIpName(value: string) {
    this._publicIpName = value;
  }
  public resetPublicIpName() {
    this._publicIpName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get publicIpNameInput() {
    return this._publicIpName;
  }

  // public_subnet_name - computed: false, optional: true, required: false
  private _publicSubnetName?: string; 
  public get publicSubnetName() {
    return this.getStringAttribute('public_subnet_name');
  }
  public set publicSubnetName(value: string) {
    this._publicSubnetName = value;
  }
  public resetPublicSubnetName() {
    this._publicSubnetName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get publicSubnetNameInput() {
    return this._publicSubnetName;
  }

  // public_subnet_network_security_group_association_id - computed: false, optional: true, required: false
  private _publicSubnetNetworkSecurityGroupAssociationId?: string; 
  public get publicSubnetNetworkSecurityGroupAssociationId() {
    return this.getStringAttribute('public_subnet_network_security_group_association_id');
  }
  public set publicSubnetNetworkSecurityGroupAssociationId(value: string) {
    this._publicSubnetNetworkSecurityGroupAssociationId = value;
  }
  public resetPublicSubnetNetworkSecurityGroupAssociationId() {
    this._publicSubnetNetworkSecurityGroupAssociationId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get publicSubnetNetworkSecurityGroupAssociationIdInput() {
    return this._publicSubnetNetworkSecurityGroupAssociationId;
  }

  // storage_account_name - computed: true, optional: true, required: false
  private _storageAccountName?: string; 
  public get storageAccountName() {
    return this.getStringAttribute('storage_account_name');
  }
  public set storageAccountName(value: string) {
    this._storageAccountName = value;
  }
  public resetStorageAccountName() {
    this._storageAccountName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get storageAccountNameInput() {
    return this._storageAccountName;
  }

  // storage_account_sku_name - computed: true, optional: true, required: false
  private _storageAccountSkuName?: string; 
  public get storageAccountSkuName() {
    return this.getStringAttribute('storage_account_sku_name');
  }
  public set storageAccountSkuName(value: string) {
    this._storageAccountSkuName = value;
  }
  public resetStorageAccountSkuName() {
    this._storageAccountSkuName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get storageAccountSkuNameInput() {
    return this._storageAccountSkuName;
  }

  // virtual_network_id - computed: false, optional: true, required: false
  private _virtualNetworkId?: string; 
  public get virtualNetworkId() {
    return this.getStringAttribute('virtual_network_id');
  }
  public set virtualNetworkId(value: string) {
    this._virtualNetworkId = value;
  }
  public resetVirtualNetworkId() {
    this._virtualNetworkId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get virtualNetworkIdInput() {
    return this._virtualNetworkId;
  }

  // vnet_address_prefix - computed: true, optional: true, required: false
  private _vnetAddressPrefix?: string; 
  public get vnetAddressPrefix() {
    return this.getStringAttribute('vnet_address_prefix');
  }
  public set vnetAddressPrefix(value: string) {
    this._vnetAddressPrefix = value;
  }
  public resetVnetAddressPrefix() {
    this._vnetAddressPrefix = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get vnetAddressPrefixInput() {
    return this._vnetAddressPrefix;
  }
}
export interface DatabricksWorkspaceTimeouts {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/databricks_workspace#create DatabricksWorkspace#create}
  */
  readonly create?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/databricks_workspace#delete DatabricksWorkspace#delete}
  */
  readonly delete?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/databricks_workspace#read DatabricksWorkspace#read}
  */
  readonly read?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/databricks_workspace#update DatabricksWorkspace#update}
  */
  readonly update?: string;
}

export function databricksWorkspaceTimeoutsToTerraform(struct?: DatabricksWorkspaceTimeouts | cdktf.IResolvable): any {
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


export function databricksWorkspaceTimeoutsToHclTerraform(struct?: DatabricksWorkspaceTimeouts | cdktf.IResolvable): any {
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

export class DatabricksWorkspaceTimeoutsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DatabricksWorkspaceTimeouts | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DatabricksWorkspaceTimeouts | cdktf.IResolvable | undefined) {
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
* Represents a {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/databricks_workspace azurerm_databricks_workspace}
*/
export class DatabricksWorkspace extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "azurerm_databricks_workspace";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DatabricksWorkspace resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DatabricksWorkspace to import
  * @param importFromId The id of the existing DatabricksWorkspace that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/databricks_workspace#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DatabricksWorkspace to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "azurerm_databricks_workspace", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/databricks_workspace azurerm_databricks_workspace} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DatabricksWorkspaceConfig
  */
  public constructor(scope: Construct, id: string, config: DatabricksWorkspaceConfig) {
    super(scope, id, {
      terraformResourceType: 'azurerm_databricks_workspace',
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
    this._accessConnectorId = config.accessConnectorId;
    this._customerManagedKeyEnabled = config.customerManagedKeyEnabled;
    this._defaultStorageFirewallEnabled = config.defaultStorageFirewallEnabled;
    this._id = config.id;
    this._infrastructureEncryptionEnabled = config.infrastructureEncryptionEnabled;
    this._loadBalancerBackendAddressPoolId = config.loadBalancerBackendAddressPoolId;
    this._location = config.location;
    this._managedDiskCmkKeyVaultId = config.managedDiskCmkKeyVaultId;
    this._managedDiskCmkKeyVaultKeyId = config.managedDiskCmkKeyVaultKeyId;
    this._managedDiskCmkRotationToLatestVersionEnabled = config.managedDiskCmkRotationToLatestVersionEnabled;
    this._managedResourceGroupName = config.managedResourceGroupName;
    this._managedServicesCmkKeyVaultId = config.managedServicesCmkKeyVaultId;
    this._managedServicesCmkKeyVaultKeyId = config.managedServicesCmkKeyVaultKeyId;
    this._name = config.name;
    this._networkSecurityGroupRulesRequired = config.networkSecurityGroupRulesRequired;
    this._publicNetworkAccessEnabled = config.publicNetworkAccessEnabled;
    this._resourceGroupName = config.resourceGroupName;
    this._sku = config.sku;
    this._tags = config.tags;
    this._customParameters.internalValue = config.customParameters;
    this._timeouts.internalValue = config.timeouts;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // access_connector_id - computed: false, optional: true, required: false
  private _accessConnectorId?: string; 
  public get accessConnectorId() {
    return this.getStringAttribute('access_connector_id');
  }
  public set accessConnectorId(value: string) {
    this._accessConnectorId = value;
  }
  public resetAccessConnectorId() {
    this._accessConnectorId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get accessConnectorIdInput() {
    return this._accessConnectorId;
  }

  // customer_managed_key_enabled - computed: false, optional: true, required: false
  private _customerManagedKeyEnabled?: boolean | cdktf.IResolvable; 
  public get customerManagedKeyEnabled() {
    return this.getBooleanAttribute('customer_managed_key_enabled');
  }
  public set customerManagedKeyEnabled(value: boolean | cdktf.IResolvable) {
    this._customerManagedKeyEnabled = value;
  }
  public resetCustomerManagedKeyEnabled() {
    this._customerManagedKeyEnabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get customerManagedKeyEnabledInput() {
    return this._customerManagedKeyEnabled;
  }

  // default_storage_firewall_enabled - computed: false, optional: true, required: false
  private _defaultStorageFirewallEnabled?: boolean | cdktf.IResolvable; 
  public get defaultStorageFirewallEnabled() {
    return this.getBooleanAttribute('default_storage_firewall_enabled');
  }
  public set defaultStorageFirewallEnabled(value: boolean | cdktf.IResolvable) {
    this._defaultStorageFirewallEnabled = value;
  }
  public resetDefaultStorageFirewallEnabled() {
    this._defaultStorageFirewallEnabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get defaultStorageFirewallEnabledInput() {
    return this._defaultStorageFirewallEnabled;
  }

  // disk_encryption_set_id - computed: true, optional: false, required: false
  public get diskEncryptionSetId() {
    return this.getStringAttribute('disk_encryption_set_id');
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

  // infrastructure_encryption_enabled - computed: false, optional: true, required: false
  private _infrastructureEncryptionEnabled?: boolean | cdktf.IResolvable; 
  public get infrastructureEncryptionEnabled() {
    return this.getBooleanAttribute('infrastructure_encryption_enabled');
  }
  public set infrastructureEncryptionEnabled(value: boolean | cdktf.IResolvable) {
    this._infrastructureEncryptionEnabled = value;
  }
  public resetInfrastructureEncryptionEnabled() {
    this._infrastructureEncryptionEnabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get infrastructureEncryptionEnabledInput() {
    return this._infrastructureEncryptionEnabled;
  }

  // load_balancer_backend_address_pool_id - computed: false, optional: true, required: false
  private _loadBalancerBackendAddressPoolId?: string; 
  public get loadBalancerBackendAddressPoolId() {
    return this.getStringAttribute('load_balancer_backend_address_pool_id');
  }
  public set loadBalancerBackendAddressPoolId(value: string) {
    this._loadBalancerBackendAddressPoolId = value;
  }
  public resetLoadBalancerBackendAddressPoolId() {
    this._loadBalancerBackendAddressPoolId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get loadBalancerBackendAddressPoolIdInput() {
    return this._loadBalancerBackendAddressPoolId;
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

  // managed_disk_cmk_key_vault_id - computed: false, optional: true, required: false
  private _managedDiskCmkKeyVaultId?: string; 
  public get managedDiskCmkKeyVaultId() {
    return this.getStringAttribute('managed_disk_cmk_key_vault_id');
  }
  public set managedDiskCmkKeyVaultId(value: string) {
    this._managedDiskCmkKeyVaultId = value;
  }
  public resetManagedDiskCmkKeyVaultId() {
    this._managedDiskCmkKeyVaultId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get managedDiskCmkKeyVaultIdInput() {
    return this._managedDiskCmkKeyVaultId;
  }

  // managed_disk_cmk_key_vault_key_id - computed: false, optional: true, required: false
  private _managedDiskCmkKeyVaultKeyId?: string; 
  public get managedDiskCmkKeyVaultKeyId() {
    return this.getStringAttribute('managed_disk_cmk_key_vault_key_id');
  }
  public set managedDiskCmkKeyVaultKeyId(value: string) {
    this._managedDiskCmkKeyVaultKeyId = value;
  }
  public resetManagedDiskCmkKeyVaultKeyId() {
    this._managedDiskCmkKeyVaultKeyId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get managedDiskCmkKeyVaultKeyIdInput() {
    return this._managedDiskCmkKeyVaultKeyId;
  }

  // managed_disk_cmk_rotation_to_latest_version_enabled - computed: false, optional: true, required: false
  private _managedDiskCmkRotationToLatestVersionEnabled?: boolean | cdktf.IResolvable; 
  public get managedDiskCmkRotationToLatestVersionEnabled() {
    return this.getBooleanAttribute('managed_disk_cmk_rotation_to_latest_version_enabled');
  }
  public set managedDiskCmkRotationToLatestVersionEnabled(value: boolean | cdktf.IResolvable) {
    this._managedDiskCmkRotationToLatestVersionEnabled = value;
  }
  public resetManagedDiskCmkRotationToLatestVersionEnabled() {
    this._managedDiskCmkRotationToLatestVersionEnabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get managedDiskCmkRotationToLatestVersionEnabledInput() {
    return this._managedDiskCmkRotationToLatestVersionEnabled;
  }

  // managed_disk_identity - computed: true, optional: false, required: false
  private _managedDiskIdentity = new DatabricksWorkspaceManagedDiskIdentityList(this, "managed_disk_identity", false);
  public get managedDiskIdentity() {
    return this._managedDiskIdentity;
  }

  // managed_resource_group_id - computed: true, optional: false, required: false
  public get managedResourceGroupId() {
    return this.getStringAttribute('managed_resource_group_id');
  }

  // managed_resource_group_name - computed: true, optional: true, required: false
  private _managedResourceGroupName?: string; 
  public get managedResourceGroupName() {
    return this.getStringAttribute('managed_resource_group_name');
  }
  public set managedResourceGroupName(value: string) {
    this._managedResourceGroupName = value;
  }
  public resetManagedResourceGroupName() {
    this._managedResourceGroupName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get managedResourceGroupNameInput() {
    return this._managedResourceGroupName;
  }

  // managed_services_cmk_key_vault_id - computed: false, optional: true, required: false
  private _managedServicesCmkKeyVaultId?: string; 
  public get managedServicesCmkKeyVaultId() {
    return this.getStringAttribute('managed_services_cmk_key_vault_id');
  }
  public set managedServicesCmkKeyVaultId(value: string) {
    this._managedServicesCmkKeyVaultId = value;
  }
  public resetManagedServicesCmkKeyVaultId() {
    this._managedServicesCmkKeyVaultId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get managedServicesCmkKeyVaultIdInput() {
    return this._managedServicesCmkKeyVaultId;
  }

  // managed_services_cmk_key_vault_key_id - computed: false, optional: true, required: false
  private _managedServicesCmkKeyVaultKeyId?: string; 
  public get managedServicesCmkKeyVaultKeyId() {
    return this.getStringAttribute('managed_services_cmk_key_vault_key_id');
  }
  public set managedServicesCmkKeyVaultKeyId(value: string) {
    this._managedServicesCmkKeyVaultKeyId = value;
  }
  public resetManagedServicesCmkKeyVaultKeyId() {
    this._managedServicesCmkKeyVaultKeyId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get managedServicesCmkKeyVaultKeyIdInput() {
    return this._managedServicesCmkKeyVaultKeyId;
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

  // network_security_group_rules_required - computed: false, optional: true, required: false
  private _networkSecurityGroupRulesRequired?: string; 
  public get networkSecurityGroupRulesRequired() {
    return this.getStringAttribute('network_security_group_rules_required');
  }
  public set networkSecurityGroupRulesRequired(value: string) {
    this._networkSecurityGroupRulesRequired = value;
  }
  public resetNetworkSecurityGroupRulesRequired() {
    this._networkSecurityGroupRulesRequired = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get networkSecurityGroupRulesRequiredInput() {
    return this._networkSecurityGroupRulesRequired;
  }

  // public_network_access_enabled - computed: false, optional: true, required: false
  private _publicNetworkAccessEnabled?: boolean | cdktf.IResolvable; 
  public get publicNetworkAccessEnabled() {
    return this.getBooleanAttribute('public_network_access_enabled');
  }
  public set publicNetworkAccessEnabled(value: boolean | cdktf.IResolvable) {
    this._publicNetworkAccessEnabled = value;
  }
  public resetPublicNetworkAccessEnabled() {
    this._publicNetworkAccessEnabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get publicNetworkAccessEnabledInput() {
    return this._publicNetworkAccessEnabled;
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

  // sku - computed: false, optional: false, required: true
  private _sku?: string; 
  public get sku() {
    return this.getStringAttribute('sku');
  }
  public set sku(value: string) {
    this._sku = value;
  }
  // Temporarily expose input value. Use with caution.
  public get skuInput() {
    return this._sku;
  }

  // storage_account_identity - computed: true, optional: false, required: false
  private _storageAccountIdentity = new DatabricksWorkspaceStorageAccountIdentityList(this, "storage_account_identity", false);
  public get storageAccountIdentity() {
    return this._storageAccountIdentity;
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

  // workspace_id - computed: true, optional: false, required: false
  public get workspaceId() {
    return this.getStringAttribute('workspace_id');
  }

  // workspace_url - computed: true, optional: false, required: false
  public get workspaceUrl() {
    return this.getStringAttribute('workspace_url');
  }

  // custom_parameters - computed: false, optional: true, required: false
  private _customParameters = new DatabricksWorkspaceCustomParametersOutputReference(this, "custom_parameters");
  public get customParameters() {
    return this._customParameters;
  }
  public putCustomParameters(value: DatabricksWorkspaceCustomParameters) {
    this._customParameters.internalValue = value;
  }
  public resetCustomParameters() {
    this._customParameters.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get customParametersInput() {
    return this._customParameters.internalValue;
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts = new DatabricksWorkspaceTimeoutsOutputReference(this, "timeouts");
  public get timeouts() {
    return this._timeouts;
  }
  public putTimeouts(value: DatabricksWorkspaceTimeouts) {
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
      access_connector_id: cdktf.stringToTerraform(this._accessConnectorId),
      customer_managed_key_enabled: cdktf.booleanToTerraform(this._customerManagedKeyEnabled),
      default_storage_firewall_enabled: cdktf.booleanToTerraform(this._defaultStorageFirewallEnabled),
      id: cdktf.stringToTerraform(this._id),
      infrastructure_encryption_enabled: cdktf.booleanToTerraform(this._infrastructureEncryptionEnabled),
      load_balancer_backend_address_pool_id: cdktf.stringToTerraform(this._loadBalancerBackendAddressPoolId),
      location: cdktf.stringToTerraform(this._location),
      managed_disk_cmk_key_vault_id: cdktf.stringToTerraform(this._managedDiskCmkKeyVaultId),
      managed_disk_cmk_key_vault_key_id: cdktf.stringToTerraform(this._managedDiskCmkKeyVaultKeyId),
      managed_disk_cmk_rotation_to_latest_version_enabled: cdktf.booleanToTerraform(this._managedDiskCmkRotationToLatestVersionEnabled),
      managed_resource_group_name: cdktf.stringToTerraform(this._managedResourceGroupName),
      managed_services_cmk_key_vault_id: cdktf.stringToTerraform(this._managedServicesCmkKeyVaultId),
      managed_services_cmk_key_vault_key_id: cdktf.stringToTerraform(this._managedServicesCmkKeyVaultKeyId),
      name: cdktf.stringToTerraform(this._name),
      network_security_group_rules_required: cdktf.stringToTerraform(this._networkSecurityGroupRulesRequired),
      public_network_access_enabled: cdktf.booleanToTerraform(this._publicNetworkAccessEnabled),
      resource_group_name: cdktf.stringToTerraform(this._resourceGroupName),
      sku: cdktf.stringToTerraform(this._sku),
      tags: cdktf.hashMapper(cdktf.stringToTerraform)(this._tags),
      custom_parameters: databricksWorkspaceCustomParametersToTerraform(this._customParameters.internalValue),
      timeouts: databricksWorkspaceTimeoutsToTerraform(this._timeouts.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      access_connector_id: {
        value: cdktf.stringToHclTerraform(this._accessConnectorId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      customer_managed_key_enabled: {
        value: cdktf.booleanToHclTerraform(this._customerManagedKeyEnabled),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      default_storage_firewall_enabled: {
        value: cdktf.booleanToHclTerraform(this._defaultStorageFirewallEnabled),
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
      infrastructure_encryption_enabled: {
        value: cdktf.booleanToHclTerraform(this._infrastructureEncryptionEnabled),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      load_balancer_backend_address_pool_id: {
        value: cdktf.stringToHclTerraform(this._loadBalancerBackendAddressPoolId),
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
      managed_disk_cmk_key_vault_id: {
        value: cdktf.stringToHclTerraform(this._managedDiskCmkKeyVaultId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      managed_disk_cmk_key_vault_key_id: {
        value: cdktf.stringToHclTerraform(this._managedDiskCmkKeyVaultKeyId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      managed_disk_cmk_rotation_to_latest_version_enabled: {
        value: cdktf.booleanToHclTerraform(this._managedDiskCmkRotationToLatestVersionEnabled),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      managed_resource_group_name: {
        value: cdktf.stringToHclTerraform(this._managedResourceGroupName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      managed_services_cmk_key_vault_id: {
        value: cdktf.stringToHclTerraform(this._managedServicesCmkKeyVaultId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      managed_services_cmk_key_vault_key_id: {
        value: cdktf.stringToHclTerraform(this._managedServicesCmkKeyVaultKeyId),
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
      network_security_group_rules_required: {
        value: cdktf.stringToHclTerraform(this._networkSecurityGroupRulesRequired),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      public_network_access_enabled: {
        value: cdktf.booleanToHclTerraform(this._publicNetworkAccessEnabled),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
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
      custom_parameters: {
        value: databricksWorkspaceCustomParametersToHclTerraform(this._customParameters.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "DatabricksWorkspaceCustomParametersList",
      },
      timeouts: {
        value: databricksWorkspaceTimeoutsToHclTerraform(this._timeouts.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "DatabricksWorkspaceTimeouts",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
