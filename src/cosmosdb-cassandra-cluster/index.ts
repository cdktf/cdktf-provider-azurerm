// https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/cosmosdb_cassandra_cluster
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface CosmosdbCassandraClusterConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/cosmosdb_cassandra_cluster#authentication_method CosmosdbCassandraCluster#authentication_method}
  */
  readonly authenticationMethod?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/cosmosdb_cassandra_cluster#client_certificate_pems CosmosdbCassandraCluster#client_certificate_pems}
  */
  readonly clientCertificatePems?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/cosmosdb_cassandra_cluster#default_admin_password CosmosdbCassandraCluster#default_admin_password}
  */
  readonly defaultAdminPassword: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/cosmosdb_cassandra_cluster#delegated_management_subnet_id CosmosdbCassandraCluster#delegated_management_subnet_id}
  */
  readonly delegatedManagementSubnetId: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/cosmosdb_cassandra_cluster#external_gossip_certificate_pems CosmosdbCassandraCluster#external_gossip_certificate_pems}
  */
  readonly externalGossipCertificatePems?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/cosmosdb_cassandra_cluster#external_seed_node_ip_addresses CosmosdbCassandraCluster#external_seed_node_ip_addresses}
  */
  readonly externalSeedNodeIpAddresses?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/cosmosdb_cassandra_cluster#hours_between_backups CosmosdbCassandraCluster#hours_between_backups}
  */
  readonly hoursBetweenBackups?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/cosmosdb_cassandra_cluster#id CosmosdbCassandraCluster#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/cosmosdb_cassandra_cluster#location CosmosdbCassandraCluster#location}
  */
  readonly location: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/cosmosdb_cassandra_cluster#name CosmosdbCassandraCluster#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/cosmosdb_cassandra_cluster#repair_enabled CosmosdbCassandraCluster#repair_enabled}
  */
  readonly repairEnabled?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/cosmosdb_cassandra_cluster#resource_group_name CosmosdbCassandraCluster#resource_group_name}
  */
  readonly resourceGroupName: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/cosmosdb_cassandra_cluster#tags CosmosdbCassandraCluster#tags}
  */
  readonly tags?: { [key: string]: string };
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/cosmosdb_cassandra_cluster#version CosmosdbCassandraCluster#version}
  */
  readonly version?: string;
  /**
  * identity block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/cosmosdb_cassandra_cluster#identity CosmosdbCassandraCluster#identity}
  */
  readonly identity?: CosmosdbCassandraClusterIdentity;
  /**
  * timeouts block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/cosmosdb_cassandra_cluster#timeouts CosmosdbCassandraCluster#timeouts}
  */
  readonly timeouts?: CosmosdbCassandraClusterTimeouts;
}
export interface CosmosdbCassandraClusterIdentity {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/cosmosdb_cassandra_cluster#type CosmosdbCassandraCluster#type}
  */
  readonly type: string;
}

export function cosmosdbCassandraClusterIdentityToTerraform(struct?: CosmosdbCassandraClusterIdentityOutputReference | CosmosdbCassandraClusterIdentity): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    type: cdktf.stringToTerraform(struct!.type),
  }
}


export function cosmosdbCassandraClusterIdentityToHclTerraform(struct?: CosmosdbCassandraClusterIdentityOutputReference | CosmosdbCassandraClusterIdentity): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
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

export class CosmosdbCassandraClusterIdentityOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): CosmosdbCassandraClusterIdentity | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._type !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CosmosdbCassandraClusterIdentity | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._type = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._type = value.type;
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
export interface CosmosdbCassandraClusterTimeouts {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/cosmosdb_cassandra_cluster#create CosmosdbCassandraCluster#create}
  */
  readonly create?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/cosmosdb_cassandra_cluster#delete CosmosdbCassandraCluster#delete}
  */
  readonly delete?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/cosmosdb_cassandra_cluster#read CosmosdbCassandraCluster#read}
  */
  readonly read?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/cosmosdb_cassandra_cluster#update CosmosdbCassandraCluster#update}
  */
  readonly update?: string;
}

export function cosmosdbCassandraClusterTimeoutsToTerraform(struct?: CosmosdbCassandraClusterTimeouts | cdktf.IResolvable): any {
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


export function cosmosdbCassandraClusterTimeoutsToHclTerraform(struct?: CosmosdbCassandraClusterTimeouts | cdktf.IResolvable): any {
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

export class CosmosdbCassandraClusterTimeoutsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): CosmosdbCassandraClusterTimeouts | cdktf.IResolvable | undefined {
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

  public set internalValue(value: CosmosdbCassandraClusterTimeouts | cdktf.IResolvable | undefined) {
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
* Represents a {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/cosmosdb_cassandra_cluster azurerm_cosmosdb_cassandra_cluster}
*/
export class CosmosdbCassandraCluster extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "azurerm_cosmosdb_cassandra_cluster";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a CosmosdbCassandraCluster resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the CosmosdbCassandraCluster to import
  * @param importFromId The id of the existing CosmosdbCassandraCluster that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/cosmosdb_cassandra_cluster#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the CosmosdbCassandraCluster to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "azurerm_cosmosdb_cassandra_cluster", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/cosmosdb_cassandra_cluster azurerm_cosmosdb_cassandra_cluster} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options CosmosdbCassandraClusterConfig
  */
  public constructor(scope: Construct, id: string, config: CosmosdbCassandraClusterConfig) {
    super(scope, id, {
      terraformResourceType: 'azurerm_cosmosdb_cassandra_cluster',
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
    this._authenticationMethod = config.authenticationMethod;
    this._clientCertificatePems = config.clientCertificatePems;
    this._defaultAdminPassword = config.defaultAdminPassword;
    this._delegatedManagementSubnetId = config.delegatedManagementSubnetId;
    this._externalGossipCertificatePems = config.externalGossipCertificatePems;
    this._externalSeedNodeIpAddresses = config.externalSeedNodeIpAddresses;
    this._hoursBetweenBackups = config.hoursBetweenBackups;
    this._id = config.id;
    this._location = config.location;
    this._name = config.name;
    this._repairEnabled = config.repairEnabled;
    this._resourceGroupName = config.resourceGroupName;
    this._tags = config.tags;
    this._version = config.version;
    this._identity.internalValue = config.identity;
    this._timeouts.internalValue = config.timeouts;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // authentication_method - computed: false, optional: true, required: false
  private _authenticationMethod?: string; 
  public get authenticationMethod() {
    return this.getStringAttribute('authentication_method');
  }
  public set authenticationMethod(value: string) {
    this._authenticationMethod = value;
  }
  public resetAuthenticationMethod() {
    this._authenticationMethod = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get authenticationMethodInput() {
    return this._authenticationMethod;
  }

  // client_certificate_pems - computed: false, optional: true, required: false
  private _clientCertificatePems?: string[]; 
  public get clientCertificatePems() {
    return this.getListAttribute('client_certificate_pems');
  }
  public set clientCertificatePems(value: string[]) {
    this._clientCertificatePems = value;
  }
  public resetClientCertificatePems() {
    this._clientCertificatePems = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get clientCertificatePemsInput() {
    return this._clientCertificatePems;
  }

  // default_admin_password - computed: false, optional: false, required: true
  private _defaultAdminPassword?: string; 
  public get defaultAdminPassword() {
    return this.getStringAttribute('default_admin_password');
  }
  public set defaultAdminPassword(value: string) {
    this._defaultAdminPassword = value;
  }
  // Temporarily expose input value. Use with caution.
  public get defaultAdminPasswordInput() {
    return this._defaultAdminPassword;
  }

  // delegated_management_subnet_id - computed: false, optional: false, required: true
  private _delegatedManagementSubnetId?: string; 
  public get delegatedManagementSubnetId() {
    return this.getStringAttribute('delegated_management_subnet_id');
  }
  public set delegatedManagementSubnetId(value: string) {
    this._delegatedManagementSubnetId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get delegatedManagementSubnetIdInput() {
    return this._delegatedManagementSubnetId;
  }

  // external_gossip_certificate_pems - computed: false, optional: true, required: false
  private _externalGossipCertificatePems?: string[]; 
  public get externalGossipCertificatePems() {
    return this.getListAttribute('external_gossip_certificate_pems');
  }
  public set externalGossipCertificatePems(value: string[]) {
    this._externalGossipCertificatePems = value;
  }
  public resetExternalGossipCertificatePems() {
    this._externalGossipCertificatePems = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get externalGossipCertificatePemsInput() {
    return this._externalGossipCertificatePems;
  }

  // external_seed_node_ip_addresses - computed: false, optional: true, required: false
  private _externalSeedNodeIpAddresses?: string[]; 
  public get externalSeedNodeIpAddresses() {
    return this.getListAttribute('external_seed_node_ip_addresses');
  }
  public set externalSeedNodeIpAddresses(value: string[]) {
    this._externalSeedNodeIpAddresses = value;
  }
  public resetExternalSeedNodeIpAddresses() {
    this._externalSeedNodeIpAddresses = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get externalSeedNodeIpAddressesInput() {
    return this._externalSeedNodeIpAddresses;
  }

  // hours_between_backups - computed: false, optional: true, required: false
  private _hoursBetweenBackups?: number; 
  public get hoursBetweenBackups() {
    return this.getNumberAttribute('hours_between_backups');
  }
  public set hoursBetweenBackups(value: number) {
    this._hoursBetweenBackups = value;
  }
  public resetHoursBetweenBackups() {
    this._hoursBetweenBackups = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get hoursBetweenBackupsInput() {
    return this._hoursBetweenBackups;
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

  // repair_enabled - computed: false, optional: true, required: false
  private _repairEnabled?: boolean | cdktf.IResolvable; 
  public get repairEnabled() {
    return this.getBooleanAttribute('repair_enabled');
  }
  public set repairEnabled(value: boolean | cdktf.IResolvable) {
    this._repairEnabled = value;
  }
  public resetRepairEnabled() {
    this._repairEnabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get repairEnabledInput() {
    return this._repairEnabled;
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

  // version - computed: false, optional: true, required: false
  private _version?: string; 
  public get version() {
    return this.getStringAttribute('version');
  }
  public set version(value: string) {
    this._version = value;
  }
  public resetVersion() {
    this._version = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get versionInput() {
    return this._version;
  }

  // identity - computed: false, optional: true, required: false
  private _identity = new CosmosdbCassandraClusterIdentityOutputReference(this, "identity");
  public get identity() {
    return this._identity;
  }
  public putIdentity(value: CosmosdbCassandraClusterIdentity) {
    this._identity.internalValue = value;
  }
  public resetIdentity() {
    this._identity.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get identityInput() {
    return this._identity.internalValue;
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts = new CosmosdbCassandraClusterTimeoutsOutputReference(this, "timeouts");
  public get timeouts() {
    return this._timeouts;
  }
  public putTimeouts(value: CosmosdbCassandraClusterTimeouts) {
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
      authentication_method: cdktf.stringToTerraform(this._authenticationMethod),
      client_certificate_pems: cdktf.listMapper(cdktf.stringToTerraform, false)(this._clientCertificatePems),
      default_admin_password: cdktf.stringToTerraform(this._defaultAdminPassword),
      delegated_management_subnet_id: cdktf.stringToTerraform(this._delegatedManagementSubnetId),
      external_gossip_certificate_pems: cdktf.listMapper(cdktf.stringToTerraform, false)(this._externalGossipCertificatePems),
      external_seed_node_ip_addresses: cdktf.listMapper(cdktf.stringToTerraform, false)(this._externalSeedNodeIpAddresses),
      hours_between_backups: cdktf.numberToTerraform(this._hoursBetweenBackups),
      id: cdktf.stringToTerraform(this._id),
      location: cdktf.stringToTerraform(this._location),
      name: cdktf.stringToTerraform(this._name),
      repair_enabled: cdktf.booleanToTerraform(this._repairEnabled),
      resource_group_name: cdktf.stringToTerraform(this._resourceGroupName),
      tags: cdktf.hashMapper(cdktf.stringToTerraform)(this._tags),
      version: cdktf.stringToTerraform(this._version),
      identity: cosmosdbCassandraClusterIdentityToTerraform(this._identity.internalValue),
      timeouts: cosmosdbCassandraClusterTimeoutsToTerraform(this._timeouts.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      authentication_method: {
        value: cdktf.stringToHclTerraform(this._authenticationMethod),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      client_certificate_pems: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._clientCertificatePems),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
      },
      default_admin_password: {
        value: cdktf.stringToHclTerraform(this._defaultAdminPassword),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      delegated_management_subnet_id: {
        value: cdktf.stringToHclTerraform(this._delegatedManagementSubnetId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      external_gossip_certificate_pems: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._externalGossipCertificatePems),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
      },
      external_seed_node_ip_addresses: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._externalSeedNodeIpAddresses),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
      },
      hours_between_backups: {
        value: cdktf.numberToHclTerraform(this._hoursBetweenBackups),
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
      repair_enabled: {
        value: cdktf.booleanToHclTerraform(this._repairEnabled),
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
      tags: {
        value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(this._tags),
        isBlock: false,
        type: "map",
        storageClassType: "stringMap",
      },
      version: {
        value: cdktf.stringToHclTerraform(this._version),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      identity: {
        value: cosmosdbCassandraClusterIdentityToHclTerraform(this._identity.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "CosmosdbCassandraClusterIdentityList",
      },
      timeouts: {
        value: cosmosdbCassandraClusterTimeoutsToHclTerraform(this._timeouts.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "CosmosdbCassandraClusterTimeouts",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
