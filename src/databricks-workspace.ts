// https://www.terraform.io/docs/providers/azurerm/r/databricks_workspace.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DatabricksWorkspaceConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/databricks_workspace.html#customer_managed_key_enabled DatabricksWorkspace#customer_managed_key_enabled}
  */
  readonly customerManagedKeyEnabled?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/databricks_workspace.html#infrastructure_encryption_enabled DatabricksWorkspace#infrastructure_encryption_enabled}
  */
  readonly infrastructureEncryptionEnabled?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/databricks_workspace.html#load_balancer_backend_address_pool_id DatabricksWorkspace#load_balancer_backend_address_pool_id}
  */
  readonly loadBalancerBackendAddressPoolId?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/databricks_workspace.html#location DatabricksWorkspace#location}
  */
  readonly location: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/databricks_workspace.html#managed_resource_group_name DatabricksWorkspace#managed_resource_group_name}
  */
  readonly managedResourceGroupName?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/databricks_workspace.html#managed_services_cmk_key_vault_key_id DatabricksWorkspace#managed_services_cmk_key_vault_key_id}
  */
  readonly managedServicesCmkKeyVaultKeyId?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/databricks_workspace.html#name DatabricksWorkspace#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/databricks_workspace.html#network_security_group_rules_required DatabricksWorkspace#network_security_group_rules_required}
  */
  readonly networkSecurityGroupRulesRequired?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/databricks_workspace.html#public_network_access_enabled DatabricksWorkspace#public_network_access_enabled}
  */
  readonly publicNetworkAccessEnabled?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/databricks_workspace.html#resource_group_name DatabricksWorkspace#resource_group_name}
  */
  readonly resourceGroupName: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/databricks_workspace.html#sku DatabricksWorkspace#sku}
  */
  readonly sku: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/databricks_workspace.html#tags DatabricksWorkspace#tags}
  */
  readonly tags?: { [key: string]: string } | cdktf.IResolvable;
  /**
  * custom_parameters block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/databricks_workspace.html#custom_parameters DatabricksWorkspace#custom_parameters}
  */
  readonly customParameters?: DatabricksWorkspaceCustomParameters;
  /**
  * timeouts block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/databricks_workspace.html#timeouts DatabricksWorkspace#timeouts}
  */
  readonly timeouts?: DatabricksWorkspaceTimeouts;
}
export class DatabricksWorkspaceStorageAccountIdentity extends cdktf.ComplexComputedList {

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
export interface DatabricksWorkspaceCustomParameters {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/databricks_workspace.html#machine_learning_workspace_id DatabricksWorkspace#machine_learning_workspace_id}
  */
  readonly machineLearningWorkspaceId?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/databricks_workspace.html#nat_gateway_name DatabricksWorkspace#nat_gateway_name}
  */
  readonly natGatewayName?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/databricks_workspace.html#no_public_ip DatabricksWorkspace#no_public_ip}
  */
  readonly noPublicIp?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/databricks_workspace.html#private_subnet_name DatabricksWorkspace#private_subnet_name}
  */
  readonly privateSubnetName?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/databricks_workspace.html#private_subnet_network_security_group_association_id DatabricksWorkspace#private_subnet_network_security_group_association_id}
  */
  readonly privateSubnetNetworkSecurityGroupAssociationId?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/databricks_workspace.html#public_ip_name DatabricksWorkspace#public_ip_name}
  */
  readonly publicIpName?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/databricks_workspace.html#public_subnet_name DatabricksWorkspace#public_subnet_name}
  */
  readonly publicSubnetName?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/databricks_workspace.html#public_subnet_network_security_group_association_id DatabricksWorkspace#public_subnet_network_security_group_association_id}
  */
  readonly publicSubnetNetworkSecurityGroupAssociationId?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/databricks_workspace.html#storage_account_name DatabricksWorkspace#storage_account_name}
  */
  readonly storageAccountName?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/databricks_workspace.html#storage_account_sku_name DatabricksWorkspace#storage_account_sku_name}
  */
  readonly storageAccountSkuName?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/databricks_workspace.html#virtual_network_id DatabricksWorkspace#virtual_network_id}
  */
  readonly virtualNetworkId?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/databricks_workspace.html#vnet_address_prefix DatabricksWorkspace#vnet_address_prefix}
  */
  readonly vnetAddressPrefix?: string;
}

function databricksWorkspaceCustomParametersToTerraform(struct?: DatabricksWorkspaceCustomParametersOutputReference | DatabricksWorkspaceCustomParameters): any {
  if (!cdktf.canInspect(struct)) { return struct; }
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

export class DatabricksWorkspaceCustomParametersOutputReference extends cdktf.ComplexObject {
  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param isSingleItem True if this is a block, false if it's a list
  */
  public constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean) {
    super(terraformResource, terraformAttribute, isSingleItem);
  }

  // machine_learning_workspace_id - computed: false, optional: true, required: false
  private _machineLearningWorkspaceId?: string | undefined; 
  public get machineLearningWorkspaceId() {
    return this.getStringAttribute('machine_learning_workspace_id');
  }
  public set machineLearningWorkspaceId(value: string | undefined) {
    this._machineLearningWorkspaceId = value;
  }
  public resetMachineLearningWorkspaceId() {
    this._machineLearningWorkspaceId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get machineLearningWorkspaceIdInput() {
    return this._machineLearningWorkspaceId
  }

  // nat_gateway_name - computed: true, optional: true, required: false
  private _natGatewayName?: string | undefined; 
  public get natGatewayName() {
    return this.getStringAttribute('nat_gateway_name');
  }
  public set natGatewayName(value: string | undefined) {
    this._natGatewayName = value;
  }
  public resetNatGatewayName() {
    this._natGatewayName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get natGatewayNameInput() {
    return this._natGatewayName
  }

  // no_public_ip - computed: true, optional: true, required: false
  private _noPublicIp?: boolean | cdktf.IResolvable | undefined; 
  public get noPublicIp() {
    return this.getBooleanAttribute('no_public_ip') as any;
  }
  public set noPublicIp(value: boolean | cdktf.IResolvable | undefined) {
    this._noPublicIp = value;
  }
  public resetNoPublicIp() {
    this._noPublicIp = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get noPublicIpInput() {
    return this._noPublicIp
  }

  // private_subnet_name - computed: false, optional: true, required: false
  private _privateSubnetName?: string | undefined; 
  public get privateSubnetName() {
    return this.getStringAttribute('private_subnet_name');
  }
  public set privateSubnetName(value: string | undefined) {
    this._privateSubnetName = value;
  }
  public resetPrivateSubnetName() {
    this._privateSubnetName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get privateSubnetNameInput() {
    return this._privateSubnetName
  }

  // private_subnet_network_security_group_association_id - computed: false, optional: true, required: false
  private _privateSubnetNetworkSecurityGroupAssociationId?: string | undefined; 
  public get privateSubnetNetworkSecurityGroupAssociationId() {
    return this.getStringAttribute('private_subnet_network_security_group_association_id');
  }
  public set privateSubnetNetworkSecurityGroupAssociationId(value: string | undefined) {
    this._privateSubnetNetworkSecurityGroupAssociationId = value;
  }
  public resetPrivateSubnetNetworkSecurityGroupAssociationId() {
    this._privateSubnetNetworkSecurityGroupAssociationId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get privateSubnetNetworkSecurityGroupAssociationIdInput() {
    return this._privateSubnetNetworkSecurityGroupAssociationId
  }

  // public_ip_name - computed: true, optional: true, required: false
  private _publicIpName?: string | undefined; 
  public get publicIpName() {
    return this.getStringAttribute('public_ip_name');
  }
  public set publicIpName(value: string | undefined) {
    this._publicIpName = value;
  }
  public resetPublicIpName() {
    this._publicIpName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get publicIpNameInput() {
    return this._publicIpName
  }

  // public_subnet_name - computed: false, optional: true, required: false
  private _publicSubnetName?: string | undefined; 
  public get publicSubnetName() {
    return this.getStringAttribute('public_subnet_name');
  }
  public set publicSubnetName(value: string | undefined) {
    this._publicSubnetName = value;
  }
  public resetPublicSubnetName() {
    this._publicSubnetName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get publicSubnetNameInput() {
    return this._publicSubnetName
  }

  // public_subnet_network_security_group_association_id - computed: false, optional: true, required: false
  private _publicSubnetNetworkSecurityGroupAssociationId?: string | undefined; 
  public get publicSubnetNetworkSecurityGroupAssociationId() {
    return this.getStringAttribute('public_subnet_network_security_group_association_id');
  }
  public set publicSubnetNetworkSecurityGroupAssociationId(value: string | undefined) {
    this._publicSubnetNetworkSecurityGroupAssociationId = value;
  }
  public resetPublicSubnetNetworkSecurityGroupAssociationId() {
    this._publicSubnetNetworkSecurityGroupAssociationId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get publicSubnetNetworkSecurityGroupAssociationIdInput() {
    return this._publicSubnetNetworkSecurityGroupAssociationId
  }

  // storage_account_name - computed: true, optional: true, required: false
  private _storageAccountName?: string | undefined; 
  public get storageAccountName() {
    return this.getStringAttribute('storage_account_name');
  }
  public set storageAccountName(value: string | undefined) {
    this._storageAccountName = value;
  }
  public resetStorageAccountName() {
    this._storageAccountName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get storageAccountNameInput() {
    return this._storageAccountName
  }

  // storage_account_sku_name - computed: true, optional: true, required: false
  private _storageAccountSkuName?: string | undefined; 
  public get storageAccountSkuName() {
    return this.getStringAttribute('storage_account_sku_name');
  }
  public set storageAccountSkuName(value: string | undefined) {
    this._storageAccountSkuName = value;
  }
  public resetStorageAccountSkuName() {
    this._storageAccountSkuName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get storageAccountSkuNameInput() {
    return this._storageAccountSkuName
  }

  // virtual_network_id - computed: false, optional: true, required: false
  private _virtualNetworkId?: string | undefined; 
  public get virtualNetworkId() {
    return this.getStringAttribute('virtual_network_id');
  }
  public set virtualNetworkId(value: string | undefined) {
    this._virtualNetworkId = value;
  }
  public resetVirtualNetworkId() {
    this._virtualNetworkId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get virtualNetworkIdInput() {
    return this._virtualNetworkId
  }

  // vnet_address_prefix - computed: true, optional: true, required: false
  private _vnetAddressPrefix?: string | undefined; 
  public get vnetAddressPrefix() {
    return this.getStringAttribute('vnet_address_prefix');
  }
  public set vnetAddressPrefix(value: string | undefined) {
    this._vnetAddressPrefix = value;
  }
  public resetVnetAddressPrefix() {
    this._vnetAddressPrefix = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get vnetAddressPrefixInput() {
    return this._vnetAddressPrefix
  }
}
export interface DatabricksWorkspaceTimeouts {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/databricks_workspace.html#create DatabricksWorkspace#create}
  */
  readonly create?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/databricks_workspace.html#delete DatabricksWorkspace#delete}
  */
  readonly delete?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/databricks_workspace.html#read DatabricksWorkspace#read}
  */
  readonly read?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/databricks_workspace.html#update DatabricksWorkspace#update}
  */
  readonly update?: string;
}

function databricksWorkspaceTimeoutsToTerraform(struct?: DatabricksWorkspaceTimeoutsOutputReference | DatabricksWorkspaceTimeouts): any {
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

export class DatabricksWorkspaceTimeoutsOutputReference extends cdktf.ComplexObject {
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

/**
* Represents a {@link https://www.terraform.io/docs/providers/azurerm/r/databricks_workspace.html azurerm_databricks_workspace}
*/
export class DatabricksWorkspace extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType: string = "azurerm_databricks_workspace";

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://www.terraform.io/docs/providers/azurerm/r/databricks_workspace.html azurerm_databricks_workspace} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DatabricksWorkspaceConfig
  */
  public constructor(scope: Construct, id: string, config: DatabricksWorkspaceConfig) {
    super(scope, id, {
      terraformResourceType: 'azurerm_databricks_workspace',
      terraformGeneratorMetadata: {
        providerName: 'azurerm'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle
    });
    this._customerManagedKeyEnabled = config.customerManagedKeyEnabled;
    this._infrastructureEncryptionEnabled = config.infrastructureEncryptionEnabled;
    this._loadBalancerBackendAddressPoolId = config.loadBalancerBackendAddressPoolId;
    this._location = config.location;
    this._managedResourceGroupName = config.managedResourceGroupName;
    this._managedServicesCmkKeyVaultKeyId = config.managedServicesCmkKeyVaultKeyId;
    this._name = config.name;
    this._networkSecurityGroupRulesRequired = config.networkSecurityGroupRulesRequired;
    this._publicNetworkAccessEnabled = config.publicNetworkAccessEnabled;
    this._resourceGroupName = config.resourceGroupName;
    this._sku = config.sku;
    this._tags = config.tags;
    this._customParameters = config.customParameters;
    this._timeouts = config.timeouts;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // customer_managed_key_enabled - computed: false, optional: true, required: false
  private _customerManagedKeyEnabled?: boolean | cdktf.IResolvable | undefined; 
  public get customerManagedKeyEnabled() {
    return this.getBooleanAttribute('customer_managed_key_enabled') as any;
  }
  public set customerManagedKeyEnabled(value: boolean | cdktf.IResolvable | undefined) {
    this._customerManagedKeyEnabled = value;
  }
  public resetCustomerManagedKeyEnabled() {
    this._customerManagedKeyEnabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get customerManagedKeyEnabledInput() {
    return this._customerManagedKeyEnabled
  }

  // id - computed: true, optional: true, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // infrastructure_encryption_enabled - computed: false, optional: true, required: false
  private _infrastructureEncryptionEnabled?: boolean | cdktf.IResolvable | undefined; 
  public get infrastructureEncryptionEnabled() {
    return this.getBooleanAttribute('infrastructure_encryption_enabled') as any;
  }
  public set infrastructureEncryptionEnabled(value: boolean | cdktf.IResolvable | undefined) {
    this._infrastructureEncryptionEnabled = value;
  }
  public resetInfrastructureEncryptionEnabled() {
    this._infrastructureEncryptionEnabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get infrastructureEncryptionEnabledInput() {
    return this._infrastructureEncryptionEnabled
  }

  // load_balancer_backend_address_pool_id - computed: false, optional: true, required: false
  private _loadBalancerBackendAddressPoolId?: string | undefined; 
  public get loadBalancerBackendAddressPoolId() {
    return this.getStringAttribute('load_balancer_backend_address_pool_id');
  }
  public set loadBalancerBackendAddressPoolId(value: string | undefined) {
    this._loadBalancerBackendAddressPoolId = value;
  }
  public resetLoadBalancerBackendAddressPoolId() {
    this._loadBalancerBackendAddressPoolId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get loadBalancerBackendAddressPoolIdInput() {
    return this._loadBalancerBackendAddressPoolId
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

  // managed_resource_group_id - computed: true, optional: false, required: false
  public get managedResourceGroupId() {
    return this.getStringAttribute('managed_resource_group_id');
  }

  // managed_resource_group_name - computed: true, optional: true, required: false
  private _managedResourceGroupName?: string | undefined; 
  public get managedResourceGroupName() {
    return this.getStringAttribute('managed_resource_group_name');
  }
  public set managedResourceGroupName(value: string | undefined) {
    this._managedResourceGroupName = value;
  }
  public resetManagedResourceGroupName() {
    this._managedResourceGroupName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get managedResourceGroupNameInput() {
    return this._managedResourceGroupName
  }

  // managed_services_cmk_key_vault_key_id - computed: false, optional: true, required: false
  private _managedServicesCmkKeyVaultKeyId?: string | undefined; 
  public get managedServicesCmkKeyVaultKeyId() {
    return this.getStringAttribute('managed_services_cmk_key_vault_key_id');
  }
  public set managedServicesCmkKeyVaultKeyId(value: string | undefined) {
    this._managedServicesCmkKeyVaultKeyId = value;
  }
  public resetManagedServicesCmkKeyVaultKeyId() {
    this._managedServicesCmkKeyVaultKeyId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get managedServicesCmkKeyVaultKeyIdInput() {
    return this._managedServicesCmkKeyVaultKeyId
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

  // network_security_group_rules_required - computed: true, optional: true, required: false
  private _networkSecurityGroupRulesRequired?: string | undefined; 
  public get networkSecurityGroupRulesRequired() {
    return this.getStringAttribute('network_security_group_rules_required');
  }
  public set networkSecurityGroupRulesRequired(value: string | undefined) {
    this._networkSecurityGroupRulesRequired = value;
  }
  public resetNetworkSecurityGroupRulesRequired() {
    this._networkSecurityGroupRulesRequired = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get networkSecurityGroupRulesRequiredInput() {
    return this._networkSecurityGroupRulesRequired
  }

  // public_network_access_enabled - computed: false, optional: true, required: false
  private _publicNetworkAccessEnabled?: boolean | cdktf.IResolvable | undefined; 
  public get publicNetworkAccessEnabled() {
    return this.getBooleanAttribute('public_network_access_enabled') as any;
  }
  public set publicNetworkAccessEnabled(value: boolean | cdktf.IResolvable | undefined) {
    this._publicNetworkAccessEnabled = value;
  }
  public resetPublicNetworkAccessEnabled() {
    this._publicNetworkAccessEnabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get publicNetworkAccessEnabledInput() {
    return this._publicNetworkAccessEnabled
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
    return this._sku
  }

  // storage_account_identity - computed: true, optional: false, required: false
  public storageAccountIdentity(index: string) {
    return new DatabricksWorkspaceStorageAccountIdentity(this, 'storage_account_identity', index);
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

  // workspace_id - computed: true, optional: false, required: false
  public get workspaceId() {
    return this.getStringAttribute('workspace_id');
  }

  // workspace_url - computed: true, optional: false, required: false
  public get workspaceUrl() {
    return this.getStringAttribute('workspace_url');
  }

  // custom_parameters - computed: false, optional: true, required: false
  private _customParameters?: DatabricksWorkspaceCustomParameters | undefined; 
  private __customParametersOutput = new DatabricksWorkspaceCustomParametersOutputReference(this as any, "custom_parameters", true);
  public get customParameters() {
    return this.__customParametersOutput;
  }
  public putCustomParameters(value: DatabricksWorkspaceCustomParameters | undefined) {
    this._customParameters = value;
  }
  public resetCustomParameters() {
    this._customParameters = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get customParametersInput() {
    return this._customParameters
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts?: DatabricksWorkspaceTimeouts | undefined; 
  private __timeoutsOutput = new DatabricksWorkspaceTimeoutsOutputReference(this as any, "timeouts", true);
  public get timeouts() {
    return this.__timeoutsOutput;
  }
  public putTimeouts(value: DatabricksWorkspaceTimeouts | undefined) {
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
      customer_managed_key_enabled: cdktf.booleanToTerraform(this._customerManagedKeyEnabled),
      infrastructure_encryption_enabled: cdktf.booleanToTerraform(this._infrastructureEncryptionEnabled),
      load_balancer_backend_address_pool_id: cdktf.stringToTerraform(this._loadBalancerBackendAddressPoolId),
      location: cdktf.stringToTerraform(this._location),
      managed_resource_group_name: cdktf.stringToTerraform(this._managedResourceGroupName),
      managed_services_cmk_key_vault_key_id: cdktf.stringToTerraform(this._managedServicesCmkKeyVaultKeyId),
      name: cdktf.stringToTerraform(this._name),
      network_security_group_rules_required: cdktf.stringToTerraform(this._networkSecurityGroupRulesRequired),
      public_network_access_enabled: cdktf.booleanToTerraform(this._publicNetworkAccessEnabled),
      resource_group_name: cdktf.stringToTerraform(this._resourceGroupName),
      sku: cdktf.stringToTerraform(this._sku),
      tags: cdktf.hashMapper(cdktf.anyToTerraform)(this._tags),
      custom_parameters: databricksWorkspaceCustomParametersToTerraform(this._customParameters),
      timeouts: databricksWorkspaceTimeoutsToTerraform(this._timeouts),
    };
  }
}
